interface Stat { value: string; label: string }
interface HeroData {
  title?: string
  eyebrow?: string
  subtitle?: string
  cta_primary?: string
  cta_secondary?: string
  stats?: Stat[]
}

const defaults: HeroData = {
  title: 'Mehr Kunden. Durch Sichtbarkeit, die wirklich wirkt.',
  eyebrow: 'SEO · Webdesign · Freelancer',
  subtitle: 'Ich baue Websites, die gefunden werden – und die Besucher in Kunden verwandeln. Kein Agentur-Overhead. Direkte Kommunikation. Messbarer Erfolg.',
  cta_primary: 'Kostenloses Erstgespräch',
  cta_secondary: 'Wie ich arbeite ↓',
  stats: [
    { value: '5+', label: 'Jahre SEO' },
    { value: '3+', label: 'Jahre Webdesign' },
    { value: '100%', label: 'Remote & flexibel' },
  ],
}

export default function Hero({ data }: { data?: Record<string, unknown> }) {
  const d: HeroData = { ...defaults, ...(data as HeroData) }
  const stats = (d.stats as Stat[]) ?? defaults.stats!

  // Split title at line breaks or keep as-is
  const titleParts = (d.title ?? '').split('Sichtbarkeit')

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-eye">
          {d.eyebrow}
        </div>
        <h1 className="hero-h1">
          {titleParts.length > 1 ? (
            <>{titleParts[0]}<span className="hl">Sichtbarkeit</span>{titleParts[1]}</>
          ) : (
            d.title
          )}
        </h1>
        <p className="hero-sub">{d.subtitle}</p>
        <div className="hero-ctas">
          <a href="#kontakt" className="btn">
            {d.cta_primary}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#solution" className="btn-ghost">{d.cta_secondary}</a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-val">{s.value}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
