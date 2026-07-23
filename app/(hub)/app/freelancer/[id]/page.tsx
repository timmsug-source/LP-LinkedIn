import { createClient } from '@/lib/hub/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProjectTabs from './project-tabs'

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') redirect('/app')

  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (!project) notFound()

  return (
    <div className="p-8 max-w-4xl">
      <Link href="/app/freelancer" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white mb-6 transition-colors">
        <ArrowLeft size={14} />
        Projekte
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-white">{project.title}</h1>
          {project.client_name && <p className="text-sm text-zinc-500 mt-0.5">{project.client_name}</p>}
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full mt-1 ${statusColor(project.status)}`}>
          {statusLabel(project.status)}
        </span>
      </div>

      <ProjectTabs project={project} />
    </div>
  )
}

function statusColor(status: string) {
  if (status === 'active') return 'bg-emerald-500/10 text-emerald-400'
  if (status === 'paused') return 'bg-amber-500/10 text-amber-400'
  return 'bg-zinc-700/30 text-zinc-400'
}

function statusLabel(status: string) {
  if (status === 'active') return 'Aktiv'
  if (status === 'paused') return 'Pausiert'
  if (status === 'done') return 'Abgeschlossen'
  return status
}
