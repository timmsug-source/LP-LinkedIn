'use server'
import { createClient } from '@/lib/hub/server'
import { createAdminClient } from '@/lib/hub/admin'

export interface NewClientInput {
  clientName: string
  slug: string
  domain: string
  email: string
  password: string
}

export interface NewClientResult {
  slug?: string
  error?: string
}

export async function createClientSite(input: NewClientInput): Promise<NewClientResult> {
  // 1) AuthN + AuthZ: caller must be a logged-in admin
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Nicht eingeloggt.' }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()
  if (profile?.role !== 'admin') return { error: 'Keine Berechtigung.' }

  // 2) Validate
  const clientName = input.clientName.trim()
  const slug = input.slug.trim().toLowerCase()
  if (!clientName) return { error: 'Kundenname ist Pflicht.' }
  if (!/^[a-z0-9-]+$/.test(slug)) return { error: 'Slug darf nur a–z, 0–9 und Bindestriche enthalten.' }

  const wantsLogin = input.email.trim() !== '' || input.password !== ''
  if (wantsLogin) {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.email.trim())) return { error: 'Ungültige E-Mail für den Kunden-Login.' }
    if (input.password.length < 8) return { error: 'Kunden-Passwort muss mind. 8 Zeichen haben.' }
  }

  const admin = createAdminClient()

  // 3) Slug unique?
  const { data: existing } = await admin.from('sites').select('id').eq('slug', slug).maybeSingle()
  if (existing) return { error: `Slug „${slug}" ist bereits vergeben.` }

  // 4) Optionally create the client login
  let ownerId: string | null = null
  if (wantsLogin) {
    const { data: created, error: userErr } = await admin.auth.admin.createUser({
      email: input.email.trim(),
      password: input.password,
      email_confirm: true,
      user_metadata: { full_name: clientName },
    })
    if (userErr) return { error: 'Login konnte nicht angelegt werden: ' + userErr.message }
    ownerId = created.user.id
    // profiles-row wird per Trigger mit role='client' erzeugt — passt.
  }

  // 5) Create the site
  const { data: site, error: siteErr } = await admin
    .from('sites')
    .insert({ client_name: clientName, slug, domain: input.domain.trim() || null, owner_id: ownerId })
    .select('slug')
    .single()

  if (siteErr) {
    // Rollback the freshly created user so we don't leave an orphan login
    if (ownerId) await admin.auth.admin.deleteUser(ownerId)
    return { error: 'Website konnte nicht angelegt werden: ' + siteErr.message }
  }

  return { slug: site.slug }
}
