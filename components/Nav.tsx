'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface NavLink { label: string; href: string }
interface NavData {
  logo?: string
  links?: NavLink[]
  cta?: string
  cta_href?: string
}

const defaults: NavData = {
  logo: 'Timm Schurig',
  links: [
    { label: 'Problem', href: '#problem' },
    { label: 'Lösung', href: '#solution' },
    { label: 'Warum ich', href: '#vorteile' },
    { label: 'Über mich', href: '#ueber' },
    { label: 'Blog', href: '/blog' },
  ],
  cta: 'Erstgespräch anfragen →',
  cta_href: '#kontakt',
}

export default function Nav({ data }: { data?: Record<string, unknown> }) {
  const d: NavData = { ...defaults, ...(data as NavData) }
  const links = (d.links as NavLink[]) ?? defaults.links!
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [logo1, logo2] = (d.logo ?? 'Timm Schurig').split(' ')

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">{logo1} <em>{logo2}</em></Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith('/') ? (
                <Link href={l.href}>{l.label}</Link>
              ) : (
                <a href={l.href}>{l.label}</a>
              )}
            </li>
          ))}
        </ul>
        <a href={d.cta_href ?? '#kontakt'} className="nav-cta">{d.cta}</a>
      </div>
    </nav>
  )
}
