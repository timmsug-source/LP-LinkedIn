const WA_NUMBER = '4915229515030'
const WA_TEXT = encodeURIComponent('Hallo Timm, ich interessiere mich für deine Leistungen und möchte ein Angebot erhalten.')

const cards = [
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
        price: 'Ab 299 €',
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

export default function Preise() {
  return (
    <section id="preise">
      <div className="wrap">
        <div className="prs-head fu">
          <div className="label">Transparente Preise</div>
          <h2>Kein Angebot ins Blaue.<br />Klare Pakete, klare Kosten.</h2>
          <p className="sec-intro">Alle Preise sind Startpreise – dein finales Angebot bekommst du nach einem kurzen Gespräch. Kein Druck, keine versteckten Kosten.</p>
        </div>

        <div className="prs-grid">
          {cards.map((c, i) => (
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
                      <li key={f}>
                        <span className="prs-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="prs-price">
                    <span className="prs-amount">{s.price}</span>
                    <span className="prs-period">{s.period}</span>
                  </div>
                  {j < c.sections.length - 1 && <hr className="prs-divider" />}
                </div>
              ))}

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
                target="_blank" rel="noopener noreferrer"
                className="prs-cta"
              >
                Jetzt anfragen →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
