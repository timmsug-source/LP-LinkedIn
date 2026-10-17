import Image from 'next/image'
import Link from 'next/link'
import V2Footer from '@/components/V2Footer'

/**
 * 404-Seite der Website. Greift bei unbekannten Adressen (über
 * [...rest]/page.tsx) und überall, wo eine Seite notFound() aufruft –
 * etwa bei einem Blogbeitrag, den es nicht (mehr) gibt.
 *
 * Statt einer Sackgasse: zwei klare Knöpfe zurück und zwei Bildkarten
 * (Blog, Erstgespräch). Next setzt für diese Seite selbst Status 404 und
 * noindex.
 *
 * Der Titel steht als <title> im Markup statt als `metadata`: Den
 * metadata-Titel einer not-found-Seite ersetzte Next nach dem Laden wieder
 * durch den Standardtitel der Website.
 */
/* Zwei Wege weiter, jeweils mit Bild. */
const WEGE = [
  {
    href: '/blog',
    titel: 'Blog',
    text: 'Ratgeber zu SEO, GEO und KI, mit Zahlen statt Versprechen.',
    bild: '/bilder/blog/Blog-Titelbild-gross.webp',
    alt: 'Timm Schurig – SEO & Webdesign News',
  },
  {
    href: '/#anfrage',
    titel: 'Erstgespräch',
    text: 'Kurz schreiben, die Antwort kommt meist am selben Tag.',
    bild: '/bilder/ablauf/Ablauf-01-Erstgespraech.webp',
    alt: 'Videocall für das Erstgespräch mit Timm Schurig',
  },
]

function Pfeil() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
  )
}

export default function NichtGefunden() {
  return (
    <div className="v2">
      <title>Seite nicht gefunden · Timm Schurig</title>
      <section className="v2-404">
        <div className="wrap">
          <div className="v2-404-kopf">
            <p className="v2-404-zahl" aria-hidden="true">404</p>
            <p className="label">Seite nicht gefunden</p>
            <h1 className="v2-404-h1">
              Diese Seite gibt es <span className="hl">nicht (mehr)</span>.
            </h1>
            <p className="v2-404-text">
              Vielleicht hat sich die Adresse geändert oder der Link war fehlerhaft. Hier geht es
              weiter:
            </p>
            <div className="v2-404-knoepfe">
              <Link href="/" className="btn">Zur Startseite <Pfeil /></Link>
              <Link href="/blog" className="btn v2-404-zweit">Zum Blog</Link>
            </div>
          </div>

          <ul className="v2-404-wege">
            {WEGE.map((w) => (
              <li key={w.href}>
                <Link href={w.href}>
                  <span className="v2-404-weg-bild">
                    <Image src={w.bild} alt={w.alt} fill sizes="(max-width: 700px) 92vw, 380px" />
                  </span>
                  <span className="v2-404-weg-text">
                    <strong>{w.titel} <Pfeil /></strong>
                    <span>{w.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <V2Footer basis="/" />
    </div>
  )
}
