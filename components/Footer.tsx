import Link from 'next/link'

interface FooterLink { label: string; href: string; external?: boolean }
interface FooterData {
  copyright?: string
  links?: FooterLink[]
}

const defaults: FooterData = {
  copyright: '© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld',
  links: [
    { label: 'Blog', href: '/blog' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/timm-schurig/', external: true },
  ],
}

export default function Footer({ data }: { data?: Record<string, unknown> }) {
  const d: FooterData = { ...defaults, ...(data as FooterData) }
  const links = (d.links as FooterLink[]) ?? defaults.links!

  return (
    <footer>
      <p className="foot-copy">{d.copyright}</p>
      <div className="foot-links">
        {links.map((l) =>
          l.external ? (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ) : (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          )
        )}
      </div>
    </footer>
  )
}
