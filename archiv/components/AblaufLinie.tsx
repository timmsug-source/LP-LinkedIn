/**
 * Ablauf mit Linie – die frühere Ablauf-Sektion von /test.
 *
 * ⚠️ Derzeit NICHT eingebunden. Abgelöst durch AblaufStapel (gestapelte
 * Karten mit Grafiken). Bewusst aufbewahrt, um jederzeit zurückzuwechseln:
 * In der Seite <AblaufStapel /> durch <AblaufLinie /> ersetzen. Das CSS
 * (.v2-ablauf, .v2-ab-*) liegt weiter in globals.css.
 *
 * Aufbau: links ein Bild (noch Platzhalter für ein MacBook-Mockup), rechts
 * die Schritte an einer Linie, die beim Scrollen mitwächst.
 */
/* Der Ablauf einer Zusammenarbeit. Inhalt und Zeitangaben stammen aus
   components/Prozess.tsx – sie sollen sich nicht auseinanderentwickeln. */
const ABLAUF = [
  {
    n: '01',
    titel: 'Kostenloses Erstgespräch',
    dauer: '30 Minuten',
    text: 'Kein Formular, kein Warten auf Rückruf. Wir klären deine Situation, deine Ziele und ob wir zusammenpassen. Unverbindlich.',
  },
  {
    n: '02',
    titel: 'Analyse & Strategie',
    dauer: '3–5 Werktage',
    text: 'Keyword-Recherche, Wettbewerbsanalyse, technisches Audit. Du bekommst ein konkretes Konzept, bevor wir starten – keine Überraschungen.',
  },
  {
    n: '03',
    titel: 'Design & Umsetzung',
    dauer: 'mit deinem Feedback',
    text: 'Kein „hier ist dein Ergebnis, tschüss". Du siehst Zwischenstände, gibst Feedback, ich setze um.',
  },
  {
    n: '04',
    titel: 'Go-live und Betreuung',
    dauer: 'auf Wunsch monatlich',
    text: 'Der Launch ist nicht das Ende. Auf Wunsch begleite ich dich weiter – mit SEO, Reporting und technischer Betreuung.',
  },
]

export default function AblaufLinie() {
  return (
    <>
      {/* Ablauf: links das Bild, rechts die Schritte an einer Linie, die beim
          Scrollen mitwächst. */}
      <section className="v2-ablauf" id="ablauf">
        <div className="wrap">
          <div className="v2-ab-kopf">
            <h2 className="v2-ab-h2">
              So läuft die <span className="hl">Zusammenarbeit</span> ab.
            </h2>
            <p className="v2-ab-sub">
              Du weißt jederzeit, wo wir stehen – und was als Nächstes passiert.
            </p>
          </div>

          <div className="v2-ab-grid">
            {/* ⚠️ Platzhalter: Hier kommt ein Mockup mit MacBook, das aussieht
                wie ein laufendes Videogespräch. Sobald das Bild da ist, ersetzt
                ein <Image> diesen Kasten – die Maße bleiben gleich. */}
            <div className="v2-ab-bild">
              <div className="v2-ab-platzhalter" role="img" aria-label="Platzhalter für ein Mockup">
                <svg viewBox="0 0 200 124" fill="none" aria-hidden="true">
                  <rect x="26" y="10" width="148" height="92" rx="6" stroke="currentColor" strokeWidth="2.5" />
                  <rect x="38" y="22" width="124" height="68" rx="3" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
                  <circle cx="100" cy="49" r="11" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
                  <path d="M82 78c0-9 8-15 18-15s18 6 18 15" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
                  <path d="M8 108h184l-8 8H16l-8-8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                </svg>
                <span>Platzhalter</span>
                <small>MacBook-Mockup, Ansicht im Videogespräch</small>
              </div>
            </div>

            <ol className="v2-ab-schritte">
              {ABLAUF.map((s) => (
                <li key={s.n}>
                  <span className="v2-ab-punkt" aria-hidden="true" />
                  <div className="v2-ab-kopfzeile">
                    <span className="v2-ab-n">{s.n}</span>
                    <h3>{s.titel}</h3>
                    <span className="v2-ab-dauer">{s.dauer}</span>
                  </div>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
