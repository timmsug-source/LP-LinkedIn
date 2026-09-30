import GraphicFrame from './GraphicFrame'

const WA_NUMBER = '4915229515030'
const WA_TEXTS: Record<string, string> = {
  Webdesign: encodeURIComponent('Hallo Timm, ich interessiere mich für eine neue Website und würde gerne kurz sprechen.'),
  SEO: encodeURIComponent('Hallo Timm, ich interessiere mich für SEO und würde gerne kurz sprechen.'),
  GEO: encodeURIComponent('Hallo Timm, ich interessiere mich für GEO und würde gerne kurz sprechen.'),
}

const pricingCards = [
  {
    emoji: '🌐',
    tag: 'Webdesign',
    tagline: 'Eine Website, die zu dir passt – und Anfragen bringt.',
    sections: [
      {
        label: null,
        features: [
          'Custom Design auf Basis deiner Positionierung',
          'Entwicklung mit Next.js – schnell, stabil, skalierbar',
          'Bis zu 5 Unterseiten inklusive',
          'SEO-Basis direkt eingebaut (Ladezeit, Struktur, Meta-Daten)',
          '1 Revision-Runde inklusive',
        ],
        price: 'Ab 1.499 €',
        period: 'Einmalig',
      },
    ],
  },
  {
    emoji: '📈',
    tag: 'SEO',
    tagline: 'Gefunden werden von den Menschen, die wirklich kaufen wollen.',
    sections: [
      {
        label: 'Einmalig',
        features: [
          'Technisches SEO-Audit deiner Website',
          'Keyword-Strategie basierend auf echter Suchintention',
          'Umsetzung der wichtigsten Optimierungen',
          'Einmaliger Report mit klaren Handlungsempfehlungen',
        ],
        price: 'Ab 799 €',
        period: 'Einmalig',
      },
      {
        label: 'Laufend',
        features: [
          'Monatliches Monitoring & Reporting',
          'Kontinuierliche Content- & On-Page-Optimierung',
          'Keyword-Tracking & Wettbewerbsanalyse',
        ],
        price: 'Ab 199 €',
        period: '/ Monat',
      },
    ],
  },
  {
    emoji: '🤖',
    tag: 'GEO',
    tagline: 'Sichtbar in KI-Antworten – bevor es deine Konkurrenz ist.',
    sections: [
      {
        label: null,
        features: [
          'Analyse deiner aktuellen GEO-Sichtbarkeit',
          'Strukturierte Daten & semantische Optimierung',
          'Content-Optimierung für KI-Systeme wie ChatGPT & Perplexity',
          'Monatliches GEO-Monitoring & Anpassung',
        ],
        price: 'Ab 199 €',
        period: '/ Monat',
      },
    ],
  },
]

const services = [
  {
    emoji: '🌐',
    tag: 'Webdesign',
    title: 'Deine Website soll arbeiten – nicht nur gut aussehen.',
    pain: 'Die meisten Websites von Selbstständigen sind entweder selbst gebastelt oder von einer Agentur gebaut, die keine Ahnung von deiner Zielgruppe hat. Das Ergebnis: Eine Seite, die niemanden abholt und keine Anfragen bringt.',
    value: 'Ich baue dir eine Website, die auf dich und deine Wunschkunden zugeschnitten ist. Kein Template-Einheitsbrei, kein generisches Design. Stattdessen: eine klare Struktur, die deine Besucher von der ersten Zeile bis zur Kontaktanfrage führt.',
    features: [
      'Eine Website, die deine LinkedIn-Positionierung verlängert',
      'Conversion-optimiertes Design – gebaut für Anfragen, nicht für Awards',
      'Technisch sauber auf Next.js & Vercel – schnell, stabil, skalierbar',
    ],
    quote: 'Ich baue keine Websites, die aussehen wie alle anderen. Ich baue Websites, die zu dir passen – und die Arbeit für dich erledigen, während du schläfst.',
    graphic: '/grafik-webdesign.html',
  },
  {
    emoji: '📈',
    tag: 'SEO',
    title: 'Gefunden werden von Menschen, die wirklich kaufen wollen.',
    pain: 'SEO ist nicht tot. Aber schlechtes SEO schon. Wer heute noch auf Keyword-Stuffing und massenhafte Backlinks setzt, verliert. Was wirklich zählt: relevante Inhalte, technisch saubere Seiten und ein klares Thema, das Google versteht.',
    value: 'Ich sorge dafür, dass du bei den Suchanfragen auftauchst, die deine Wunschkunden wirklich eingeben – nicht bei irgendwelchen Begriffen mit viel Volumen und wenig Kaufabsicht.',
    features: [
      'Keyword-Strategie basierend auf echter Suchintention',
      'Technisches SEO-Audit & Umsetzung',
      'Content-Optimierung, die Menschen lesen wollen und Google versteht',
    ],
    quote: 'SEO ohne Strategie ist Raten. Ich zeige dir genau, warum du gefunden wirst – und von wem.',
    image: '/SEO-vorher-nachher.png',
    reverse: true,
  },
  {
    emoji: '🤖',
    tag: 'GEO – Generative Engine Optimization',
    title: 'Die meisten haben noch nie davon gehört. Deine Konkurrenz auch nicht.',
    pain: 'ChatGPT, Perplexity, Google AI Overviews – immer mehr Menschen suchen nicht mehr mit Keywords, sie stellen Fragen. Und die KI antwortet. Die Frage ist: Wirst du genannt? Oder jemand anderes?',
    value: 'GEO bedeutet, deine Website und deinen Content so aufzubauen, dass KI-Systeme dich als relevante Quelle erkennen und empfehlen. Das ist kein Zukunftsthema mehr – es passiert gerade. Ich bin einer der wenigen Freelancer in Deutschland, der GEO aktiv als Leistung anbietet und umsetzt.',
    features: [
      'Strukturierte Daten & semantische Optimierung',
      'Content, der als Antwort auf echte Fragen funktioniert',
      'Positionierung als Autorität in deiner Nische – auch für KI-Suche',
    ],
    quote: 'KI verändert gerade, wie Menschen suchen und entscheiden. Ich sorge dafür, dass du dabei bist – bevor es alle anderen tun.',
    graphic: '/grafik-geo.html',
  },
]

export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="wrap">
        <div className="lst-head fu">
          <div className="label">Was ich für dich tue</div>
          <h2>Du willst keine Website, die irgendwie online ist.</h2>
          <p className="sec-intro">Du willst Anfragen. Sichtbarkeit. Und einen digitalen Auftritt, der zu dir passt – nicht zu irgendeinem Template aus 2018. Hier ist, wie ich das umsetze.</p>
        </div>

        <div className="lst-blocks">
          {services.map((s, i) => (
            <div key={s.tag} className={`lst-service fu d${i}`}>

              {/* Grid 1: Text links, Grafik/Video rechts */}
              <div className={`lst-grid lst-grid--top${s.reverse ? ' lst-grid--reverse' : ''}`}>
                <div className="lst-text">
                  <div className="lst-block-header">
                    <span className="lst-block-emoji">{s.emoji}</span>
                    <span className="lst-block-tag">{s.tag}</span>
                  </div>
                  <h3 className="lst-block-title">{s.title}</h3>
                  <p className="lst-block-pain">{s.pain}</p>
                  <p className="lst-block-value">{s.value}</p>
                </div>
                <div className="lst-media">
                  {s.graphic
                    ? <GraphicFrame src={s.graphic} title={`${s.tag} Grafik`} />
                    : s.image
                    ? <img src={s.image} alt={`${s.tag} Ergebnis`} className="lst-media-img" />
                    : <div className="lst-video-placeholder">
                        <span className="lst-video-icon">📹</span>
                        <span>Video folgt</span>
                      </div>
                  }
                </div>
              </div>

              {/* Grid 2: Features links, Zitat rechts */}
              <div className={`lst-grid lst-grid--bottom${s.reverse ? ' lst-grid--reverse' : ''}`}>
                <div className="lst-features">
                  <p className="lst-block-features-label">Was du bekommst:</p>
                  <ul>
                    {s.features.map((f) => (
                      <li key={f}>
                        <span className="lst-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <blockquote className="lst-quote">
                  <p>{s.quote}</p>
                  <cite>— Timm Schurig</cite>
                </blockquote>
              </div>

            </div>
          ))}
        </div>

        {/* Preise */}
        <div className="lst-preise fu">
          <div className="lst-preise-head">
            <div className="label">Transparente Preise</div>
            <h2>Kein Angebot ins Blaue.<br />Klare Pakete, klare Kosten.</h2>
            <p className="sec-intro">Alle Preise sind Startpreise – dein finales Angebot bekommst du nach einem kurzen Gespräch. Kein Druck, keine versteckten Kosten.</p>
          </div>
          <div className="lst-preise-grid">
            {pricingCards.map((c, i) => (
              <div key={c.tag} className={`prs-card fu d${i}`}>
                <div className="prs-card-header">
                  <span className="prs-emoji">{c.emoji}</span>
                  <span className="prs-tag">{c.tag}</span>
                </div>
                <p className="prs-tagline">{c.tagline}</p>
                {c.sections.map((s, j) => (
                  <div key={j} className="prs-section">
                    {s.label && <p className="prs-section-label">{s.label}</p>}
                    <ul className="prs-features">
                      {s.features.map((f) => (
                        <li key={f}><span className="prs-check">✓</span>{f}</li>
                      ))}
                    </ul>
                    <div className="prs-price">
                      <span className="prs-amount">{s.price}</span>
                      <span className="prs-period">{s.period}</span>
                    </div>
                    {j < c.sections.length - 1 && <hr className="prs-divider" />}
                  </div>
                ))}
                <a href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXTS[c.tag] ?? WA_TEXTS['Webdesign']}`} target="_blank" rel="noopener noreferrer" className="prs-cta">
                  Jetzt anfragen →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
