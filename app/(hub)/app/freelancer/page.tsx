import { createClient } from '@/lib/hub/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Clock } from 'lucide-react'

export default async function FreelancerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') redirect('/app')

  const { data: projects } = await supabase
    .from('projects')
    .select('id, title, status, client_name, total_hours, updated_at')
    .order('updated_at', { ascending: false })

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">Projekte</h1>
          <p className="text-sm text-zinc-500">{projects?.length ?? 0} Projekte gesamt</p>
        </div>
        <Link
          href="/app/freelancer/new"
          className="bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors"
        >
          + Neues Projekt
        </Link>
      </div>

      {/* Status groups */}
      {['active', 'paused', 'done'].map(status => {
        const group = projects?.filter(p => p.status === status) ?? []
        if (group.length === 0) return null
        return (
          <section key={status} className="mb-8">
            <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              {status === 'active' ? 'Aktiv' : status === 'paused' ? 'Pausiert' : 'Abgeschlossen'}
            </h2>
            <div className="flex flex-col gap-2">
              {group.map(p => (
                <Link
                  key={p.id}
                  href={`/app/freelancer/${p.id}`}
                  className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-700 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{p.title}</p>
                    {p.client_name && <p className="text-xs text-zinc-500 mt-0.5">{p.client_name}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    {p.total_hours != null && (
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {p.total_hours}h
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      {(!projects || projects.length === 0) && (
        <p className="text-sm text-zinc-600">Noch keine Projekte. <Link href="/app/freelancer/new" className="text-zinc-400 underline">Jetzt anlegen</Link></p>
      )}
    </div>
  )
}
