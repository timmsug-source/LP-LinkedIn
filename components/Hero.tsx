export default function Hero() {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-eye">
          SEO <span className="hero-eye-sep">·</span> Webdesign <span className="hero-eye-sep">·</span> Freelancer
        </div>
        <h1 className="hero-h1">
          Mehr Kunden. Durch<br />
          <span className="hl">Sichtbarkeit</span>, die<br />
          wirklich wirkt.
        </h1>
        <p className="hero-sub">
          Ich baue Websites, die gefunden werden – und die Besucher in Kunden verwandeln.
          Kein Agentur-Overhead. Direkte Kommunikation. Messbarer Erfolg.
        </p>
        <div className="hero-ctas">
          <a href="#kontakt" className="btn">
            Kostenloses Erstgespräch
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#solution" className="btn-ghost">Wie ich arbeite ↓</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-val">5<em>+</em></div>
            <div className="stat-lbl">Jahre SEO</div>
          </div>
          <div className="stat">
            <div className="stat-val">3<em>+</em></div>
            <div className="stat-lbl">Jahre Webdesign</div>
          </div>
          <div className="stat">
            <div className="stat-val">100<em>%</em></div>
            <div className="stat-lbl">Remote & flexibel</div>
          </div>
        </div>
      </div>
    </section>
  )
}
