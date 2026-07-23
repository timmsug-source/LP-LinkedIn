'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

interface NavLinkProps {
  href: string
  icon: ReactNode
  children: ReactNode
  exact?: boolean
}

export default function NavLink({ href, icon, children, exact }: NavLinkProps) {
  const pathname = usePathname()
  const active = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
        active
          ? 'bg-[#00bc7d]/10 text-white font-semibold'
          : 'text-[#8da0b8] hover:text-white hover:bg-white/[0.04]'
      }`}
    >
      {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-[#00bc7d]" />}
      <span className={active ? 'text-[#00bc7d]' : ''}>{icon}</span>
      {children}
    </Link>
  )
}
