import Link from 'next/link'

/**
 * Footer der Website – genutzt von Startseite, Langenfeld-Seite und
 * Blog-Übersicht.
 *
 * `basis` ist der Pfad der Seite mit den Sektionen: Auf der Startseite selbst
 * reichen reine Sprungmarken (#angebot), von anderen Seiten aus muss / davor.
 *
 * `sprungmarken` ersetzt die Spalte „Auf dieser Seite" für Seiten mit anderen
 * Sektionen – sonst zeigten die Links ins Leere (z. B. #angebot gibt es nur
 * auf der Startseite).
 */
const STANDARD = [
  { href: '#angebot', text: 'Leistungen' },
  { href: '#ueber-mich', text: 'Über mich' },
  { href: '#ablauf', text: 'Ablauf' },
  { href: '#anfrage', text: 'Erstgespräch' },
]

export default function V2Footer({
  basis = '',
  sprungmarken = STANDARD,
}: {
  basis?: string
  sprungmarken?: { href: string; text: string }[]
}) {
  return (
    <footer className="v2-footer">
      <div className="wrap">
        <div className="v2-fu-oben">
          <div className="v2-fu-marke">
            <Link href="/" className="nav-logo">Timm <em>Schurig</em></Link>
            <p>
              SEO- und Webdesign-Freelancer aus Langenfeld. Websites, die bei Google und
              in KI-Antworten gefunden werden – und Anfragen bringen.
            </p>
          </div>

          <nav className="v2-fu-spalte" aria-label="Auf dieser Seite">
            <span className="v2-fu-titel">Auf dieser Seite</span>
            {sprungmarken.map((l) => (
              <a key={l.href} href={`${basis}${l.href}`}>{l.text}</a>
            ))}
          </nav>

          <nav className="v2-fu-spalte" aria-label="Mehr">
            <span className="v2-fu-titel">Mehr</span>
            <Link href="/seo-freelancer-langenfeld">SEO Freelancer Langenfeld</Link>
            <Link href="/blog">Blog</Link>
          </nav>

          <div className="v2-fu-spalte">
            <span className="v2-fu-titel">Kontakt</span>
            <a href="https://wa.me/4915229515030" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="v2-fu-ort">Langenfeld, NRW</span>
          </div>
        </div>

        <div className="v2-fu-unten">
          <p>© 2026 Timm Schurig · SEO &amp; Webdesign Freelancer · Langenfeld</p>
          <div className="v2-fu-recht">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
