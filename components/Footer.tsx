import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
      <div className="foot-links">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
