import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Impressum · Timm Schurig' }

export default function Impressum() {
  return (
    <>
      <nav className="scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Timm <em>Schurig</em></Link>
          <Link href="/" className="nav-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Zurück
          </Link>
        </div>
      </nav>
      <div className="page">
        <div className="page-label">Rechtliches</div>
        <h1>Impressum</h1>
        <div className="block">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p><strong>Timm Schurig</strong></p>
          <p>Zum Galkhausener Bach 72<br />40764 Langenfeld (Rheinland)</p>
        </div>
        <div className="block">
          <h2>Kontakt</h2>
          <p>E-Mail: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
          <p>Website: <a href="https://www.timmschurig.com">www.timmschurig.com</a></p>
        </div>
        <div className="block">
          <h2>Berufsbezeichnung</h2>
          <p><strong>SEO & Webdesign Freelancer</strong></p>
          <p>Kleingewerbetreibender gemäß § 19 UStG – keine Umsatzsteuer-Identifikationsnummer erforderlich.</p>
        </div>
        <div className="block">
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p><strong>Timm Schurig</strong><br />Zum Galkhausener Bach 72<br />40764 Langenfeld (Rheinland)</p>
        </div>
        <div className="block">
          <h2>Haftungsausschluss</h2>
          <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
          <p>Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
        </div>
        <div className="block">
          <h2>Urheberrecht</h2>
          <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.</p>
        </div>
        <div className="legal-notice">
          <p>Bei Fragen zum Impressum: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
        </div>
      </div>
      <footer>
        <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
        <div className="foot-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
