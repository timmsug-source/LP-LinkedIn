'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    { label: 'SEO', href: '/#seo' },
    { label: 'Webdesign', href: '/#webdesign' },
    { label: 'Über mich', href: '/#ueber' },
    { label: 'Blog', href: '/blog' },
  ],
  cta: 'Erstgespräch anfragen →',
  cta_href: '/#kontakt',
}

export default function Nav({ data, forceScrolled }: { data?: Record<string, unknown>; forceScrolled?: boolean }) {
  const d: NavData = { ...defaults, ...(data as NavData) }
  const links = (d.links as NavLink[]) ?? defaults.links!
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(forceScrolled || !isHome)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (forceScrolled || !isHome) return
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome, forceScrolled])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const [logo1, logo2] = (d.logo ?? 'Timm Schurig').split(' ')

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <nav className={`${scrolled ? 'scrolled' : ''} ${open ? 'nav-open' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={handleLinkClick}>
            {logo1} <em>{logo2}</em>
          </Link>

          {/* Desktop links */}
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

          {/* Hamburger button */}
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            <span className={`burger-line ${open ? 'open' : ''}`} />
            <span className={`burger-line ${open ? 'open' : ''}`} />
            <span className={`burger-line ${open ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        <ul className="mobile-links">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith('/') ? (
                <Link href={l.href} onClick={handleLinkClick}>{l.label}</Link>
              ) : (
                <a href={l.href} onClick={handleLinkClick}>{l.label}</a>
              )}
            </li>
          ))}
        </ul>
        <a
          href={d.cta_href ?? '#kontakt'}
          className="btn mobile-cta"
          onClick={handleLinkClick}
        >
          {d.cta}
        </a>
      </div>

      {/* Backdrop */}
      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}
