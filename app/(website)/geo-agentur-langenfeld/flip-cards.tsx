'use client'

import { useState } from 'react'

interface Card {
  icon: React.ReactNode
  tag: string
  title: string
  front: string
  backTitle: string
  back: string[]
}

const I = {
  base: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5" />
    </svg>
  ),
  faq: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9.2 9.2a2.8 2.8 0 0 1 5.4 1c0 1.9-2.8 2.3-2.8 2.3" />
      <path d="M12 15.5h.01" />
    </svg>
  ),
  struct: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  expert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 15.8 6.6 18.7l1.2-6.1L3.3 8.4l6.1-.8z" />
    </svg>
  ),
  schema: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2" />
    </svg>
  ),
  mentions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />
    </svg>
  ),
}

const cards: Card[] = [
  {
    icon: I.base,
    tag: 'Grundlage',
    title: 'SEO ist das Fundament',
    front:
      'Stell dir vor, du baust ein Haus. Bevor du loslegst, brauchst du einen Plan – und dann ein Fundament. Genau das ist SEO für GEO.',
    backTitle: 'Warum ohne SEO nichts geht',
    back: [
      'KI-Systeme greifen zu großen Teilen auf denselben Index zu wie klassische Suchmaschinen. Ist deine Seite dort nicht sauber erfasst, existiert sie für die KI nicht.',
      'Konkret heißt das: Crawlbarkeit, Indexierung, saubere Statuscodes, keine Rendering-Blocker, vernünftige Ladezeiten (Core Web Vitals).',
      'Erst wenn diese Basis steht, lohnt sich alles Weitere. Sonst optimierst du Inhalte, die nie jemand liest — Mensch wie Maschine.',
    ],
  },
  {
    icon: I.faq,
    tag: 'Format',
    title: 'FAQ → Zitierungen',
    front:
      'KIs beantworten Fragen. Wenn deine Seite Fragen schon sauber beantwortet, ist sie die bequemste Quelle, die es gibt.',
    backTitle: 'Frage-Antwort als Zitier-Format',
    back: [
      'Sprachmodelle suchen nach Textstellen, die eine Frage direkt und vollständig beantworten — idealerweise in zwei bis vier Sätzen ohne Vorgeplänkel.',
      'Wir bauen echte FAQ-Bereiche aus den Fragen, die deine Kunden wirklich stellen, und formulieren die Antworten eigenständig verständlich: ohne „wie oben beschrieben", ohne Kontext, der fehlt.',
      'Technisch wird das mit FAQPage-Markup ausgezeichnet, damit Maschinen Frage und Antwort eindeutig zuordnen können.',
    ],
  },
  {
    icon: I.struct,
    tag: 'Technik',
    title: 'Saubere Struktur → Zitierungen',
    front:
      'Eine KI liest deine Seite nicht wie ein Mensch. Sie zerlegt sie. Je klarer die Struktur, desto sauberer das Ergebnis.',
    backTitle: 'Struktur, die Maschinen verstehen',
    back: [
      'Eine logische Überschriften-Hierarchie (eine H1, darunter sinnvolle H2/H3) sagt der Maschine, welcher Absatz zu welchem Thema gehört.',
      'Kurze Absätze, sprechende Zwischenüberschriften und Listen erzeugen abgrenzbare Sinnabschnitte — genau die Häppchen, die ein Modell zitieren kann.',
      'Dazu kommt die interne Verlinkung: Sie zeigt, welche Seite bei euch das Hauptthema besitzt und welche nur ergänzt. Ohne das rät die KI.',
    ],
  },
  {
    icon: I.expert,
    tag: 'Vertrauen',
    title: 'Expertise → Zitierungen',
    front:
      'Keine KI zitiert gern eine anonyme Seite. Sie sucht Quellen, bei denen erkennbar ist, wer da spricht — und warum das jemand wissen sollte.',
    backTitle: 'E-E-A-T als Zitier-Kriterium',
    back: [
      'Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit: Autorenprofile, Qualifikationen, echte Fallbeispiele und ein vollständiges Impressum sind keine Deko, sondern Signale.',
      'Inhalte, die eigene Zahlen, Beispiele oder Erfahrungswerte enthalten, werden deutlich häufiger als Quelle herangezogen als generische Texte, die überall stehen könnten.',
      'Wir arbeiten heraus, was du wirklich besser weißt als andere — und machen genau das sichtbar und belegbar.',
    ],
  },
  {
    icon: I.schema,
    tag: 'Daten',
    title: 'Strukturierte Daten',
    front:
      'Schema-Markup ist die Übersetzung deiner Seite in Maschinensprache. Du sagst der KI direkt, worum es geht — statt zu hoffen, dass sie richtig rät.',
    backTitle: 'Was wir konkret auszeichnen',
    back: [
      'Organization, LocalBusiness, Person, Service, FAQPage, Article, Breadcrumb — je nach Seitentyp. Damit sind Öffnungszeiten, Standort, Leistungen und Zuständigkeiten eindeutig.',
      'Wichtig ist Konsistenz: Was im Markup steht, muss auch sichtbar auf der Seite stehen. Widersprüche kosten Vertrauen — bei Google wie bei Sprachmodellen.',
      'Der Effekt: Deine Daten werden nicht interpretiert, sondern gelesen. Das erhöht die Chance deutlich, bei lokalen Anfragen als konkreter Anbieter genannt zu werden.',
    ],
  },
  {
    icon: I.mentions,
    tag: 'Reichweite',
    title: 'Erwähnungen außerhalb deiner Seite',
    front:
      'KIs prüfen gegen. Was nur auf deiner eigenen Website steht, ist eine Behauptung. Was an mehreren Stellen auftaucht, wird zum Fakt.',
    backTitle: 'Warum externe Quellen zählen',
    back: [
      'Branchenverzeichnisse, Bewertungsportale, Fachbeiträge, Presse, Google Business Profile: Überall dort sollten Name, Adresse und Leistungsbeschreibung identisch sein.',
      'Sprachmodelle gewichten Informationen höher, die sie in mehreren unabhängigen Quellen bestätigt finden. Widersprüchliche Angaben führen dazu, dass du im Zweifel gar nicht genannt wirst.',
      'Wir bauen diese Konsistenz systematisch auf — kein Linkkauf, sondern saubere, überprüfbare Präsenz an den richtigen Stellen.',
    ],
  },
]

export default function GeoFlipCards() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="geo-flip-grid">
      {cards.map((c, i) => {
        const isOpen = open === i
        return (
          <div key={c.title} className={`geo-flip fu d${i % 3}`}>
            <button
              type="button"
              className={`geo-flip-inner ${isOpen ? 'is-flipped' : ''}`}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {/* Vorderseite */}
              <span className="geo-flip-face geo-flip-front">
                <span className="geo-flip-icon">{c.icon}</span>
                <span className="geo-flip-tag">{c.tag}</span>
                <span className="geo-flip-title">{c.title}</span>
                <span className="geo-flip-text">{c.front}</span>
                <span className="geo-flip-hint">
                  Technischer Hintergrund
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </span>

              {/* Rückseite */}
              <span className="geo-flip-face geo-flip-back">
                <span className="geo-flip-back-title">{c.backTitle}</span>
                <span className="geo-flip-back-body">
                  {c.back.map((p, k) => (
                    <span key={k} className="geo-flip-p">{p}</span>
                  ))}
                </span>
                <span className="geo-flip-hint geo-flip-hint--back">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M11 18l-6-6 6-6" />
                  </svg>
                  Zurück
                </span>
              </span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
