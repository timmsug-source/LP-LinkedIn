import type React from 'react'
import Image from 'next/image'

/**
 * Ablauf als gestapelte Karten – geteilt zwischen Startseite und
 * Langenfeld-Seite. Die frühere Variante mit Linie liegt im Archiv
 * (archiv/components/AblaufLinie.tsx, CSS in archiv/css/).
 */
/* Der Ablauf einer Zusammenarbeit: Titel, Dauer und Text je Schritt, dazu
   Grafik und drei Stichpunkte für die Karte. */
const ABLAUF = [
  {
    n: '01',
    bild: '/Ablauf-01-Erstgespraech.webp',
    alt: 'Videogespräch mit Timm Schurig und Gesprächsnotizen zu Situation und Zielen',
    punkte: ['Unverbindlich, ohne Formular', 'Deine Situation und deine Ziele', 'Ob wir zusammenpassen'],
    titel: 'Kostenloses Erstgespräch',
    dauer: '30 Minuten',
    text: 'Kein Formular, kein Warten auf Rückruf. Wir klären deine Situation, deine Ziele und ob wir zusammenpassen. Unverbindlich.',
  },
  {
    n: '02',
    bild: '/Ablauf-02-Analyse-Strategie.webp',
    alt: 'Keyword-Recherche für Langenfeld, technisches Audit und Konzept zur Freigabe',
    punkte: ['Keyword-Recherche für deine Region', 'Wettbewerb und technisches Audit', 'Konzept mit Zeitplan und Kosten zur Freigabe'],
    titel: 'Analyse & Strategie',
    dauer: '3–5 Werktage',
    text: 'Keyword-Recherche, Wettbewerbsanalyse, technisches Audit. Du bekommst ein konkretes Konzept, bevor wir starten – keine Überraschungen.',
  },
  {
    n: '03',
    bild: '/Ablauf-03-Design-Umsetzung.webp',
    alt: 'Vorschau der Website mit Feedback-Kommentaren und Versionen von Entwurf bis final',
    punkte: ['Zwischenstände statt Überraschungen', 'Dein Feedback direkt an der Seite', 'Umsetzung in Runden bis zur finalen Version'],
    titel: 'Design & Umsetzung',
    dauer: 'mit deinem Feedback',
    text: 'Kein „hier ist dein Ergebnis, tschüss". Du siehst Zwischenstände, gibst Feedback, ich setze um.',
  },
  {
    n: '04',
    bild: '/Ablauf-04-Golive-Betreuung.webp',
    alt: 'Live-Website mit wachsenden organischen Besuchern, Rankings und Monatsreport',
    punkte: ['Live-Gang ohne Ausfall', 'Monatlicher Report aus der Search Console', 'Technik und Updates im Blick'],
    titel: 'Go-live und Betreuung',
    dauer: 'auf Wunsch monatlich',
    text: 'Der Launch ist nicht das Ende. Auf Wunsch begleite ich dich weiter – mit SEO, Reporting und technischer Betreuung.',
  },
]

function Haken() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
  )
}

export default function AblaufStapel() {
  return (
    <>
      {/* Ablauf als gestapelte Karten: Jede Karte bleibt beim Scrollen oben
          stehen, die nächste schiebt sich darüber. Reines CSS (position: sticky),
          kein Skript. Der kleine Versatz pro Karte (--i) lässt die Kanten der
          darunterliegenden sichtbar – man sieht, dass es ein Stapel ist.
          Grafiken aus Grafiken/Ablauf, als Bild gerendert in der Seitenschrift. */}
      <section className="v2-stapel" id="ablauf">
        <div className="wrap">
          <div className="v2-stapel-kopf">
            <h2 className="v2-stapel-h2">
              So läuft die <span className="hl">Zusammenarbeit</span> ab.
            </h2>
            <p className="v2-stapel-sub">
              Du weißt jederzeit, wo wir stehen – und was als Nächstes passiert.
            </p>
          </div>

          <ol className="v2-stapel-liste">
            {ABLAUF.map((s, i) => (
              <li key={s.n} className="v2-stapel-karte" style={{ '--i': i } as React.CSSProperties}>
                <div className="v2-stapel-bild">
                  <Image src={s.bild} alt={s.alt} width={1200} height={840} sizes="(max-width: 900px) 92vw, 540px" />
                </div>

                <div className="v2-stapel-text">
                  <div className="v2-stapel-meta">
                    <span className="v2-stapel-n">{s.n}</span>
                    <span className="v2-stapel-dauer">{s.dauer}</span>
                  </div>
                  <h3 className="v2-stapel-titel">{s.titel}</h3>
                  <p className="v2-stapel-beschreibung">{s.text}</p>
                  <ul className="v2-stapel-punkte">
                    {s.punkte.map((pkt) => (
                      <li key={pkt}><Haken />{pkt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
