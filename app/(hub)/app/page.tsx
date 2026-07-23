import { createClient } from '@/lib/hub/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { FolderKanban, Globe, Clock, LayoutList, ArrowRight, Plus } from 'lucide-react'

export default async function HubPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).single()
  const isAdmin = profile?.role === 'admin'
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Hey'

  const [projectsRes, sitesRes] = await Promise.all([
    isAdmin
      ? supabase.from('projects').select('id, title, status').order('updated_at', { ascending: false }).limit(4)
      : Promise.resolve({ data: [] as { id: string; title: string; status: string }[] }),
    isAdmin
      ? supabase.from('sites').select('id, slug, client_name, domain').order('client_name')
      : supabase.from('sites').select('id, slug, client_name, domain').eq('owner_id', user.id),
  ])
  const projects = projectsRes.data ?? []
  const sites = sitesRes.data ?? []
  const siteIds = sites.map(s => s.id)

  const { data: cb } = siteIds.length
    ? await supabase.from('content_blocks').select('site_id, updated_at').in('site_id', siteIds)
    : { data: [] as { site_id: string; updated_at: string }[] }
  const blocks = cb ?? []

  const fieldCount = (id: string) => blocks.filter(b => b.site_id === id).length
  const lastEdit = (ids: string[]) => {
    const times = blocks.filter(b => ids.includes(b.site_id)).map(b => new Date(b.updated_at).getTime())
    return times.length ? Math.max(...times) : null
  }
  const globalLast = lastEdit(siteIds)

  return (
    <div className="p-8 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-[#00bc7d] font-medium mb-1">Willkommen zurück</p>
        <h1 className="text-2xl font-bold text-white tracking-tight">{firstName} 👋</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        <Stat icon={<Globe size={16} />} label={isAdmin ? 'Websites' : 'Deine Website'} value={sites.length.toString()} />
        <Stat icon={<LayoutList size={16} />} label="Inhaltsfelder" value={blocks.length.toString()} />
        <Stat icon={<Clock size={16} />} label="Letzte Änderung" value={relTime(globalLast)} />
        {isAdmin
          ? <Stat icon={<FolderKanban size={16} />} label="Aktive Projekte" value={projects.filter(p => p.status === 'active').length.toString()} accent />
          : <Stat icon={<FolderKanban size={16} />} label="Status" value="Aktiv" accent />}
      </div>

      {/* CMS-Einstieg */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-white">{isAdmin ? 'Websites verwalten' : 'Deine Website bearbeiten'}</h2>
          {isAdmin && (
            <Link href="/app/clients/new" className="flex items-center gap-1.5 text-xs text-[#8da0b8] hover:text-white transition-colors">
              <Plus size={13} /> Neuer Kunde
            </Link>
          )}
        </div>

        {sites.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
            <p className="text-sm text-[#8da0b8]">Noch keine Website angelegt.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {sites.map(s => (
              <Link
                key={s.id}
                href={`/app/cms/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b192e]/70 p-5 transition-all hover:border-[#00bc7d]/40 hover:-translate-y-0.5"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#00bc7d]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00bc7d]/12 text-[#00bc7d] flex items-center justify-center">
                      <Globe size={18} />
                    </div>
                    <ArrowRight size={17} className="text-[#4a6080] group-hover:text-[#00bc7d] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-base font-semibold text-white">{s.client_name}</p>
                  <p className="text-xs text-[#8da0b8] mt-0.5">{s.domain || `${s.slug}`}</p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/[0.06] text-[11px] text-[#8da0b8]">
                    <span className="flex items-center gap-1"><LayoutList size={12} /> {fieldCount(s.id)} Felder</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {relTime(lastEdit([s.id]))}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Projekte (nur Admin) */}
      {isAdmin && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">Letzte Projekte</h2>
            <Link href="/app/freelancer" className="text-xs text-[#8da0b8] hover:text-white transition-colors">Alle →</Link>
          </div>
          {projects.length === 0 ? (
            <p className="text-sm text-[#4a6080]">Noch keine Projekte. <Link href="/app/freelancer/new" className="text-[#00bc7d] hover:underline">Jetzt anlegen</Link></p>
          ) : (
            <div className="flex flex-col gap-2">
              {projects.map(p => (
                <Link
                  key={p.id}
                  href={`/app/freelancer/${p.id}`}
                  className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 hover:border-white/15 transition-colors"
                >
                  <span className="text-sm text-white">{p.title}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full ${statusColor(p.status)}`}>{statusLabel(p.status)}</span>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}

function Stat({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${accent ? 'border-[#00bc7d]/25 bg-[#00bc7d]/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
      <div className={`flex items-center gap-1.5 mb-2 ${accent ? 'text-[#00bc7d]' : 'text-[#8da0b8]'}`}>
        {icon}<span className="text-[11px] font-medium">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
    </div>
  )
}

function relTime(ms: number | null) {
  if (!ms) return '–'
  const diff = (Date.now() - ms) / 1000
  if (diff < 60) return 'gerade eben'
  if (diff < 3600) return `vor ${Math.floor(diff / 60)} Min.`
  if (diff < 86400) return `vor ${Math.floor(diff / 3600)} Std.`
  if (diff < 604800) return `vor ${Math.floor(diff / 86400)} Tg.`
  return new Date(ms).toLocaleDateString('de-DE')
}

function statusColor(status: string) {
  if (status === 'active') return 'bg-[#00bc7d]/12 text-[#00bc7d]'
  if (status === 'paused') return 'bg-amber-500/10 text-amber-400'
  return 'bg-white/[0.06] text-[#8da0b8]'
}
function statusLabel(status: string) {
  if (status === 'active') return 'Aktiv'
  if (status === 'paused') return 'Pausiert'
  if (status === 'done') return 'Abgeschlossen'
  return status
}
