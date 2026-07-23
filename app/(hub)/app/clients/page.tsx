import { createClient } from '@/lib/hub/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Globe, ExternalLink } from 'lucide-react'

export default async function ClientsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') redirect('/app')

  const { data: sites } = await supabase
    .from('sites')
    .select('id, slug, client_name, domain, created_at')
    .order('client_name')

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">Kunden</h1>
          <p className="text-sm text-zinc-500">{sites?.length ?? 0} Websites</p>
        </div>
        <Link
          href="/app/clients/new"
          className="bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors"
        >
          + Neuer Kunde
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {(!sites || sites.length === 0) && (
          <p className="text-sm text-zinc-600">Noch keine Kunden angelegt.</p>
        )}
        {sites?.map(s => (
          <div
            key={s.id}
            className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                <Globe size={14} className="text-zinc-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{s.client_name}</p>
                <p className="text-xs text-zinc-500">{s.domain || s.slug}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {s.domain && (
                <a
                  href={`https://${s.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
              <Link
                href={`/app/cms/${s.slug}`}
                className="text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-md px-3 py-1 transition-colors"
              >
                CMS öffnen
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
