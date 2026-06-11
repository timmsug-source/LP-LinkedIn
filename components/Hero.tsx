interface HeroData {
  title?: string
  eyebrow?: string
  subtitle?: string
  cta_primary?: string
  cta_secondary?: string
  trust?: string[]
}

const defaults: HeroData = {
  title: 'Du rankst, wo deine Kunden suchen.',
  eyebrow: 'SEO · Webdesign · Freelancer aus Langenfeld',
  subtitle: 'Ein System aus Website und SEO, das planbar neue Anfragen bringt – ohne Agentur-Overhead, ohne Ratespiele. Direkt, messbar, skalierbar.',
  cta_primary: 'Kostenloses Erstgespräch anfragen',
  cta_secondary: 'Wie ich arbeite ↓',
  trust: ['Erste Ergebnisse nach wenigen Wochen', '5+ Jahre SEO-Erfahrung', 'Direkte Kommunikation – kein Umweg'],
}

export default function Hero({ data }: { data?: Record<string, unknown> }) {
  const d: HeroData = { ...defaults, ...(data as HeroData) }
  const trust = (d.trust as string[]) ?? defaults.trust!
  const titleParts = (d.title ?? '').split('rankst')

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          {d.eyebrow}
        </div>
        <h1 className="hero-h1">
          {titleParts.length > 1 ? (
            <>Du <span className="hl">rankst</span>{titleParts[1]}</>
          ) : (
            d.title
          )}
        </h1>
        <p className="hero-sub">{d.subtitle}</p>
        <div className="hero-ctas">
          <a href="/#kontakt" className="btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            {d.cta_primary}
          </a>
          <a href="/#seo" className="btn-ghost">{d.cta_secondary}</a>
        </div>
        <div className="hero-trust">
          <div className="hero-trust-stars">
            ★★★★★ <span>5,0</span>
          </div>
          <div className="hero-trust-sep" />
          {trust.map((t) => (
            <div key={t} className="hero-trust-item">
              <span className="hero-trust-check">✓</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
