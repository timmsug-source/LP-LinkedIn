import { createClient } from '@/lib/hub/server'
import { redirect } from 'next/navigation'
import { LogOut, LayoutDashboard, FolderKanban, Users } from 'lucide-react'
import Link from 'next/link'
import NavLink from './nav-link'

export default async function HubLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .eq('id', user.id)
    .single()

  const isAdmin = profile?.role === 'admin'
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Hey'

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-white/[0.06] bg-[#071224]/50 backdrop-blur-xl flex flex-col shrink-0">
        {/* Brand */}
        <div className="px-5 py-5">
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="Timm Schurig" className="w-9 h-9 rounded-[10px] shrink-0" />
            <span className="text-[11px] text-[#8da0b8] tracking-widest uppercase leading-tight">Platform<br />Hub</span>
          </div>
        </div>

        {/* User */}
        <div className="mx-3 mb-2 px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#00bc7d]/15 text-[#00bc7d] flex items-center justify-center text-xs font-bold">
              {(profile?.full_name ?? 'H').slice(0, 1).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{firstName}</p>
              <p className="text-[11px] text-[#8da0b8] capitalize">{profile?.role ?? 'client'}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-2 py-2 flex flex-col gap-0.5">
          <NavLink href="/app" icon={<LayoutDashboard size={16} />} exact>
            Übersicht
          </NavLink>
          {isAdmin && (
            <>
              <NavLink href="/app/freelancer" icon={<FolderKanban size={16} />}>
                Projekte
              </NavLink>
              <NavLink href="/app/clients" icon={<Users size={16} />}>
                Kunden
              </NavLink>
            </>
          )}
        </nav>

        <div className="px-2 py-4 border-t border-white/[0.06]">
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#8da0b8] hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <LogOut size={16} />
              Abmelden
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  )
}
