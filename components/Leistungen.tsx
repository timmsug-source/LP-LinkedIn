const WA_TEXT = encodeURIComponent('Hallo Timm, ich interessiere mich für deine Leistungen und würde gerne mehr erfahren.')
const WA_HREF = `https://wa.me/4915229515030?text=${WA_TEXT}`

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>
    ),
    tag: 'Webdesign',
    title: 'Conversion-Webdesign',
    desc: 'Keine Templates. Websites, die Besucher zu Anfragen machen.',
    features: ['Next.js – schnell & DSGVO-konform', 'Optimiert für mobile Nutzer', 'Design, das Vertrauen aufbaut', 'Direkt messbare Conversions'],
    cta: 'Website anfragen',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    ),
    tag: 'SEO',
    title: 'SEO & Local SEO',
    desc: 'Sichtbarkeit in deiner Region. Messbare Rankings. Kein Agentur-Overhead.',
    features: ['Keyword-Recherche & Strategie', 'On-Page + Technical SEO', 'Google Business Optimierung', 'Monatliches Reporting'],
    cta: 'SEO anfragen',
    highlight: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
    ),
    tag: 'GEO',
    title: 'GEO – KI-Sichtbarkeit',
    desc: 'Damit ChatGPT, Perplexity & Google AI dich empfehlen. Der Vorteil von morgen, heute umsetzen.',
    features: ['Optimierung für AI Overviews', 'FAQ-Schema Markup', 'Authority-Content-Strategie', 'Monitoring in KI-Quellen'],
    cta: 'GEO anfragen',
  },
]

export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="wrap">
        <div className="lst-head fu">
          <div className="label">Was du bekommst</div>
          <h2>Drei Leistungen. Ein Ziel: mehr Anfragen.</h2>
          <p className="sec-intro">Kein Feature-Bingo. Jede Leistung ist auf ein einziges Ergebnis ausgerichtet: dass du morgen früh Anfragen im Postfach hast.</p>
        </div>
        <div className="lst-grid">
          {services.map((s, i) => (
            <div key={s.tag} className={`lst-card fu${i > 0 ? ` d${i}` : ''}${s.highlight ? ' lst-card--hl' : ''}`}>
              {s.highlight && <div className="lst-badge">Meist gebucht</div>}
              <div className="lst-icon">{s.icon}</div>
              <span className="lst-tag">{s.tag}</span>
              <h3 className="lst-title">{s.title}</h3>
              <p className="lst-desc">{s.desc}</p>
              <ul className="lst-features">
                {s.features.map((f) => (
                  <li key={f}>
                    <span className="lst-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${WA_HREF.replace(WA_TEXT, encodeURIComponent(`Hallo Timm, ich interessiere mich für ${s.tag}. Können wir kurz sprechen?`))}`}
                target="_blank" rel="noopener noreferrer"
                className={s.highlight ? 'btn' : 'lst-cta-ghost'}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
