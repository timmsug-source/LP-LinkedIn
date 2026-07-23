import { createClient } from '@/lib/hub/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'

export default async function CmsIndexPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  const isAdmin = profile?.role === 'admin'

  // Admin sees all, client sees own
  const query = supabase.from('sites').select('id, slug, client_name, domain').order('client_name')
  const { data: sites } = isAdmin ? await query : await query.eq('owner_id', user.id)

  // If client has only one site, redirect directly
  if (!isAdmin && sites?.length === 1) {
    redirect(`/app/cms/${sites[0].slug}`)
  }

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-xl font-semibold text-white mb-1">CMS</h1>
      <p className="text-sm text-zinc-500 mb-8">Wähle eine Website</p>

      <div className="grid grid-cols-2 gap-3">
        {(!sites || sites.length === 0) && (
          <p className="text-sm text-zinc-600 col-span-2">Keine Websites verfügbar.</p>
        )}
        {sites?.map(s => (
          <Link
            key={s.id}
            href={`/app/cms/${s.slug}`}
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 hover:border-zinc-700 transition-colors"
          >
            <div className="w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
              <Globe size={15} className="text-zinc-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{s.client_name}</p>
              <p className="text-xs text-zinc-500 truncate">{s.domain || s.slug}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
