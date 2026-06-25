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

const WA_HREF = `https://wa.me/4915229515030?text=${encodeURIComponent('Hallo Timm, ich möchte kurz anfragen.')}`

const defaults: NavData = {
  logo: 'Timm Schurig',
  links: [
    { label: 'Leistungen', href: '/#leistungen' },
    { label: 'Über mich', href: '/#ueber' },
    { label: 'Blog', href: '/blog' },
  ],
  cta: 'Auf WhatsApp schreiben',
  cta_href: WA_HREF,
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

          <a href={d.cta_href ?? WA_HREF} className="nav-cta nav-cta-wa" target={d.cta_href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {d.cta}
          </a>

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
