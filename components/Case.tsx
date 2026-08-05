import Image from 'next/image'

/**
 * Mini-Case unter der Hypothese-Sektion.
 *
 * Belegt die These „Es ist deine Sichtbarkeit" mit einem echten Projekt,
 * anonymisiert — dadurch braucht es keine Freigabe des Kunden.
 *
 * ACHTUNG: Die mit ⚠️ markierten Werte sind Platzhalter. Sie müssen durch
 * echte Zahlen aus einem deiner Projekte ersetzt werden, bevor die Seite
 * online geht. Erfundene Ergebnisse wären genau die Sorte Versprechen, gegen
 * die deine eigenen Texte argumentieren.
 */
const kunde = {
  branche: '⚠️ Handwerksbetrieb aus Langenfeld',
  leistung: '⚠️ Lokales SEO für mehr Sichtbarkeit und qualifizierte Anfragen',
  zeitraum: '⚠️ 5 Monate',
}

/**
 * Screenshot des Projekts. Der Laptop- und Handy-Rahmen ist in CSS gebaut,
 * hier kommt nur das Bild hinein, das darin liegt.
 *
 * Solange `src` leer ist, zeigen die Bildschirme eine neutrale Platzhalter-
 * Oberfläche ohne Namen und Logo — eine erfundene Kundenmarke hätte in einer
 * Beleg-Karte nichts verloren. Screenshot in /public legen, Pfad hier
 * eintragen, fertig.
 */
const visual = {
  src: '',
  alt: '⚠️ Website des Kunden nach der Überarbeitung',
  caption: 'Moderner Auftritt, klare Botschaft, mehr Anfragen.',
}

const I = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />
      <circle cx="12" cy="14.5" r="2" /><path d="M12 11.4v-.9M12 18.5v-.9M14.7 13l.8-.5M8.5 16l.8-.5M14.7 16l.8.5M8.5 13l.8.5" />
    </svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" /><path d="M21 3h-5M21 3v5" />
    </svg>
  ),
  click: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4.5v-2M4.5 9h-2M6 6L4.6 4.6M12 6.2l2.2 12.3 2.3-4.2 4.6-.6z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  kalender: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 16v-4.5M12 8.2h.01" />
    </svg>
  ),
  funke: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" /><path d="M18.5 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
    </svg>
  ),
  schild: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6z" /><path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </svg>
  ),
}

const schritte = [
  {
    n: '01',
    icon: I.globe,
    phase: 'Ausgangslage',
    text: '⚠️ Website seit vier Jahren unverändert, für die wichtigsten Leistungen auf Seite 3, Anfragen fast ausschließlich über Empfehlung.',
  },
  {
    n: '02',
    icon: I.tool,
    phase: 'Maßnahme',
    text: '⚠️ Technische Basis saniert, eine eigene Seite je Hauptleistung, Google-Unternehmensprofil vollständig aufgebaut, strukturierte Daten ergänzt.',
  },
  {
    n: '03',
    icon: I.trend,
    phase: 'Ergebnis',
    text: '⚠️ Für die drei wichtigsten Suchbegriffe auf Seite 1, davon einmal Platz 2 — und erstmals planbare Anfragen über die Website.',
  },
]

const zahlen = [
  {
    icon: I.trend,
    ton: 'gruen',
    wert: '⚠️ 28 → 2',
    label: 'Position Hauptkeyword',
    desc: 'Deutliche Verbesserung für das wichtigste Suchwort.',
    quelle: 'Quelle: Google Search Console, Durchschnittsposition',
  },
  {
    icon: I.click,
    ton: 'gruen',
    wert: '⚠️ +180 %',
    label: 'Klicks aus der Suche',
    desc: 'Mehr Sichtbarkeit führt zu mehr Website-Besuchen.',
    quelle: 'Quelle: Google Search Console, Klicks im Vergleichszeitraum',
  },
  {
    icon: I.chat,
    ton: 'gelb',
    wert: '⚠️ 6',
    label: 'Anfragen pro Monat',
    desc: 'Planbare Anfragen über die Website – statt nur Empfehlung.',
    quelle: 'Quelle: Angabe des Kunden',
  },
]

/**
 * Neutrale Bildschirm-Oberfläche, solange kein echter Screenshot hinterlegt
 * ist: nur abstrakte Flächen, kein Name, kein Logo, kein erfundener Kunde.
 */
function Platzhalter({ schmal = false }: { schmal?: boolean }) {
  return (
    <span className={`case-mock${schmal ? ' case-mock--schmal' : ''}`} aria-hidden="true">
      <span className="case-mock-nav">
        <span className="case-mock-logo" />
        {!schmal && (
          <span className="case-mock-links">
            <span /><span /><span />
          </span>
        )}
      </span>
      <span className="case-mock-body">
        <span className="case-mock-zeile case-mock-zeile--gross" />
        <span className="case-mock-zeile case-mock-zeile--gross" />
        <span className="case-mock-zeile" />
        <span className="case-mock-btns">
          <span className="case-mock-btn" />
          <span className="case-mock-btn case-mock-btn--ghost" />
        </span>
      </span>
    </span>
  )
}

export default function Case() {
  return (
    <div className="case-card fu d1">
      <div className="case-eyebrow">
        <span className="case-eyebrow-icon" aria-hidden="true">{I.tool}</span>
        <span className="label">Aus der Praxis</span>
      </div>

      <div className="case-head">
        <h3>{kunde.branche}</h3>
        <span className="case-zeitraum">
          <span aria-hidden="true">{I.kalender}</span>
          {kunde.zeitraum}
        </span>
      </div>
      <p className="case-leistung">{kunde.leistung}</p>

      <div className="case-main">
        <ol className="case-steps">
          {schritte.map((s) => (
            <li key={s.phase} className="case-step">
              <div className="case-step-head">
                <span className="case-step-num">{s.n}</span>
                <span className="case-step-icon" aria-hidden="true">{s.icon}</span>
              </div>
              <span className="case-phase">{s.phase}</span>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="case-visual">
          <div className="case-devices">
            {/* Laptop */}
            <div className="case-laptop">
              <div className="case-screen">
                {visual.src
                  ? <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 900px) 90vw, 340px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                  : <Platzhalter />}
              </div>
              <span className="case-laptop-fuss" aria-hidden="true" />
            </div>

            {/* Handy, überlappt den Laptop unten rechts */}
            <div className="case-phone">
              <div className="case-screen case-screen--phone">
                {visual.src
                  ? <Image src={visual.src} alt="" fill sizes="120px" style={{ objectFit: 'cover', objectPosition: 'top left' }} />
                  : <Platzhalter schmal />}
              </div>
            </div>
          </div>
          <figcaption className="case-visual-caption">
            <span aria-hidden="true">{I.funke}</span>
            {visual.caption}
          </figcaption>
        </figure>
      </div>

      <div className="case-zahlen">
        {zahlen.map((z) => (
          <div key={z.label} className={`case-zahl case-zahl--${z.ton}`}>
            <span className="case-zahl-icon" aria-hidden="true">{z.icon}</span>
            {/* Das (i) trägt die Quelle der Zahl – als title, damit es auch
                ohne JavaScript funktioniert und Screenreader es vorlesen. */}
            <span className="case-zahl-info" title={z.quelle}>
              <span className="sr-only">{z.quelle}</span>
              <span aria-hidden="true">{I.info}</span>
            </span>
            <div className="case-zahl-body">
              <span className="case-zahl-wert">{z.wert}</span>
              <span className="case-zahl-label">{z.label}</span>
              <p className="case-zahl-desc">{z.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="case-note">
        <span aria-hidden="true">{I.schild}</span>
        Anonymisiert auf Wunsch des Kunden. Zahlen aus der Google Search Console,
        gemessen über den genannten Zeitraum.
      </p>
    </div>
  )
}
