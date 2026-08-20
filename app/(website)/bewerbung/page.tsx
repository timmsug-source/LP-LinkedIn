import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bewerbung · Timm Schurig × SichtbarerWerden',
  description: 'Bewerbung von Timm Schurig als SEO-Freelancer beim Team SichtbarerWerden – Erfahrung, Tools und Referenzen auf einen Blick.',
  robots: { index: false, follow: false },
}

const fiverrReviews = [
  'gerne wieder. Sehr Professionell',
  'schnelle und unkomplizierte Lieferung!',
  'Schnell und unkompliziert, gerne wieder :)',
  'Es hat alles prima geklappt, danke!',
  'Nur zu Empfehlen! Alles wie gewünscht umgesetzt.',
  'superschnelle kompetente Umsetzung – besten Dank!',
  'Netter Kontakt, schnelle und zuverlässige Lieferung – alles bestens. Danke Timm!',
  'Quick and Efficient – the address to go for future projects.',
  'Vielen Dank Tim, alles perfekt umgesetzt! :-)',
  'Danke Timm, es war mir eine Freude. Es war genau das, wonach ich gesucht habe. Kann Timm nur weiterempfehlen!',
  'Timm did a great job, the communication was easy and clear and the results are stunning – thank you so much!',
  'Danke für eine sehr gute Bearbeitung unseres Auftrags. Gerne wieder!',
  'Super service, fast and competent.',
  'Fast and good communication.',
]

const tools = [
  { name: 'Screaming Frog', abbr: 'SF',  color: '#FF5722', desc: 'Technisches SEO & Crawling',       icon: null },
  { name: 'ahrefs',          abbr: null,  color: '#F6921E', desc: 'Backlink-Analyse & Keywords',       icon: 'ahrefs' },
  { name: 'SISTRIX',         abbr: 'SX',  color: '#0057FF', desc: 'Sichtbarkeitsindex & Wettbewerb',  icon: null },
  { name: 'Google Search Console', abbr: 'GSC', color: '#4285F4', desc: 'Performance & Indexierung', icon: 'googlesearchconsole' },
  { name: 'AnswerThePublic', abbr: 'ATP', color: '#FF4444', desc: 'Suchanfragen-Recherche',            icon: null },
  { name: 'Claude AI',       abbr: null,  color: '#CC785C', desc: 'Content & Analyse',                icon: 'anthropic' },
  { name: 'Excel',           abbr: null,  color: '#217346', desc: 'Datenauswertung & Reports',        icon: 'microsoftexcel' },
  { name: 'Webflow',         abbr: null,  color: '#4353FF', desc: 'Web-Entwicklung',                  icon: 'webflow' },
  { name: 'WordPress',       abbr: null,  color: '#21759B', desc: 'CMS & Content',                    icon: 'wordpress' },
  { name: 'Supabase',        abbr: null,  color: '#3ECF8E', desc: 'Datenbank & Backend',              icon: 'supabase' },
]

/**
 * Nachweise – zwei selbst gebaute Projekte.
 *
 * ACHTUNG: Alles mit ⚠️ ist Platzhalter und muss vor dem Versenden des Links
 * durch echte Angaben ersetzt werden. Screenshots in /public ablegen und bei
 * `bild` eintragen; solange `bild` leer ist, zeigt die Karte eine
 * Platzhalterfläche statt eines kaputten Bildes.
 */
const nachweise = [
  {
    typ: 'E-Commerce',
    titel: '⚠️ Shopify-Shop aufgebaut',
    desc: '⚠️ Shop von Grund auf aufgesetzt: Theme, Produktstruktur, Checkout und technisches SEO. Kurz beschreiben, was du übernommen hast und was der Shop verkauft.',
    bild: '',
    bildAlt: '⚠️ Screenshot des Shopify-Shops',
    href: '',
    zahlen: [
      { wert: '⚠️ –', label: 'Produkte im Shop' },
      { wert: '⚠️ –', label: 'Umsatz im ersten Jahr' },
      { wert: '⚠️ –', label: 'Ladezeit / PageSpeed' },
    ],
  },
  {
    typ: 'Webdesign & SEO',
    titel: '⚠️ Website für einen Performance Coach',
    desc: '⚠️ Positionierung, Aufbau und Umsetzung der Website inklusive SEO-Grundlage. Kurz beschreiben, wo der Coach vorher stand und was sich geändert hat.',
    bild: '',
    bildAlt: '⚠️ Screenshot der Coaching-Website',
    href: '',
    zahlen: [
      { wert: '⚠️ –', label: 'Position Hauptkeyword' },
      { wert: '⚠️ –', label: 'Anfragen pro Monat' },
      { wert: '⚠️ –', label: 'Umsetzungszeit' },
    ],
  },
]

export default function Bewerbung() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bw-hero">
        <div className="wrap">
          <div className="bw-badge">
            <span className="bw-badge-dot" />
            Bewerbung · Mai 2026
          </div>

          <p className="bw-greeting">Hallo Team von SichtbarerWerden!</p>

          <h1 className="bw-name">
            Ich bin <span className="bw-name-accent">Timm Schurig</span>
          </h1>

          <p className="bw-tagline">
            Ich möchte mit euch gemeinsam andere<br />
            <strong>SichtbarerWerden</strong> lassen.
          </p>

          <div className="bw-hero-ctas">
            <a href="mailto:mail@timmschurig.com" className="btn">
              Schreib mir →
            </a>
            <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO EXPERTISE ── */}
      {/* Hell/dunkel wechseln sich ab: dunkle Karte, heller Grund, dunkle
          Karte … – dieselbe Rhythmik wie auf der Startseite. */}
      <section className="bw-section bw-section--light">
        <div className="wrap">
          <div className="bw-section-head">
            <div className="label">SEO-Erfahrung</div>
            <h2>5+ Jahre SEO – aus der Praxis.</h2>
            <p className="sec-intro">
              Ich bringe sowohl Freelance-Erfahrung mit direktem Kundenkontakt
              als auch Corporate-Know-how aus einem etablierten Unternehmen mit.
            </p>
          </div>

          <div className="bw-exp-grid">
            {/* Fiverr Card */}
            <div className="bw-exp-card">
              <div className="bw-exp-card-top">
                <div className="bw-exp-logo bw-exp-logo--fiverr">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c-.95 0-1.682.443-2.124 1.02v-.85h-3.14v6.42h3.14v-3.36c0-.63.496-1.177 1.177-1.177h1.797v4.537h3.14v-4.537l-.14-2.053zM13.54 9.878h-3.143v1.86H8.2v3.26h2.197v2.85c0 1.63 1.337 2.976 2.976 2.976h1.967v-2.977h-1.002c-.55 0-.798-.247-.798-.79v-2.06h1.8v-3.26h-1.8V9.878zM5.845 15.492c0 .55-.453.987-1.04.987-.587 0-1.04-.437-1.04-.987 0-.55.453-.987 1.04-.987.587 0 1.04.437 1.04.987zM2 15.49c0 1.85 1.484 3.194 3.805 3.194 2.32 0 3.803-1.344 3.803-3.194v-4.75H6.47v4.68c0 .63-.263.987-.665.987-.4 0-.664-.357-.664-.987v-4.68H2v4.75z"/>
                  </svg>
                </div>
                <div>
                  <div className="bw-exp-title">SEO Freelancer</div>
                  <div className="bw-exp-where">Fiverr · Selbstständig</div>
                </div>
                <div className="bw-exp-duration">5 Jahre</div>
              </div>
              <p className="bw-exp-desc">
                Hauptsächlich einmalige Onpage-Grundoptimierungen für Kunden aus Deutschland,
                Österreich und der Schweiz. Direkter Kundenkontakt, eigenverantwortliche
                Umsetzung, messbare Ergebnisse.
              </p>
              <ul className="bw-exp-list">
                <li>Onpage-Analysen & Optimierungen</li>
                <li>Keyword-Recherche & Content-Briefings</li>
                <li>Technische SEO-Audits</li>
                <li>15+ ⭐ 5-Sterne-Bewertungen</li>
              </ul>
            </div>

            {/* toom Card */}
            <div className="bw-exp-card">
              <div className="bw-exp-card-top">
                <div className="bw-exp-logo bw-exp-logo--toom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  </svg>
                </div>
                <div>
                  <div className="bw-exp-title">SEO Werkstudent</div>
                  <div className="bw-exp-where">toom Baumarkt · Köln</div>
                </div>
                <div className="bw-exp-duration">1,5 Jahre</div>
              </div>
              <p className="bw-exp-desc">
                Hands-on SEO im Corporate-Umfeld eines der größten deutschen Baumärkte.
                Arbeit an großen Domains mit Millionen monatlicher Besucher.
              </p>
              <ul className="bw-exp-list">
                <li>Ratgeber-Content erstellt & optimiert</li>
                <li>Shop-Landingpages (Kategorie-SEO)</li>
                <li>Digital PR Seiten bearbeitet</li>
                <li>Pinterest-Account betreut & ausgebaut</li>
              </ul>
            </div>
          </div>

          {/* Nachweise gehören direkt an die Erfahrung: Erst was ich gemacht
              habe, dann die Projekte, die es belegen – ohne Sektionswechsel
              dazwischen. */}
          <div className="bw-proof">
            <div className="bw-proof-head">
              <div className="label">Nachweise</div>
              <h3>Projekte, die ich selbst gebaut habe.</h3>
              <p>
                Zwei Beispiele aus der Praxis – vom Aufbau bis zu den Zahlen, die dabei
                herausgekommen sind.
              </p>
            </div>

            <div className="bw-proof-grid">
              {nachweise.map((n) => (
                <article key={n.titel} className="bw-proof-card">
                  {/* Bildfläche: neutraler Platzhalter, bis echte Screenshots
                      vorliegen. Datei in /public legen und `bild` setzen. */}
                  <div className="bw-proof-bild">
                    {n.bild ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={n.bild} alt={n.bildAlt} loading="lazy" />
                    ) : (
                      <span className="bw-proof-bild-leer">⚠️ Screenshot folgt</span>
                    )}
                  </div>

                  <div className="bw-proof-body">
                    <span className="bw-proof-typ">{n.typ}</span>
                    <h4>{n.titel}</h4>
                    <p>{n.desc}</p>

                    <div className="bw-proof-zahlen">
                      {n.zahlen.map((z) => (
                        <div key={z.label} className="bw-proof-zahl">
                          <span className="bw-proof-zahl-wert">{z.wert}</span>
                          <span className="bw-proof-zahl-label">{z.label}</span>
                        </div>
                      ))}
                    </div>

                    {n.href && (
                      <a className="bw-proof-link" href={n.href} target="_blank" rel="noopener noreferrer">
                        Projekt ansehen ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="bw-section">
        <div className="wrap">
          <div className="bw-section-head">
            <div className="label">Tools & Skills</div>
            <h2>Womit ich arbeite.</h2>
            <p className="sec-intro">
              Von Crawling bis Content – diese Tools beherrsche ich im täglichen Einsatz.
            </p>
          </div>

          <div className="bw-tools-grid">
            {tools.map((t) => (
              <div key={t.name} className="bw-tool-card" style={{ '--tool-color': t.color } as React.CSSProperties}>
                <div className="bw-tool-icon">
                  {t.icon ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`https://cdn.simpleicons.org/${t.icon}/ffffff`}
                      alt={t.name}
                      width={24}
                      height={24}
                      style={{ opacity: 0.9 }}
                    />
                  ) : (
                    <span className="bw-tool-abbr">
                      {t.abbr ?? t.name.slice(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <div className="bw-tool-name">{t.name}</div>
                  <div className="bw-tool-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVERR REVIEWS ── */}
      <section className="bw-section bw-section--light">
        <div className="wrap">
          <div className="bw-section-head">
            <div className="label">Kundenstimmen</div>
            <h2>Was Kunden über mich sagen.</h2>
            <p className="sec-intro">
              {fiverrReviews.length} verifizierte ⭐ 5-Sterne-Bewertungen auf Fiverr.
            </p>
          </div>

          <div className="bw-reviews-grid">
            {fiverrReviews.map((text, i) => (
              <div key={i} className="bw-review-card">
                <div className="bw-review-stars">★★★★★</div>
                <p className="bw-review-text">&bdquo;{text}&ldquo;</p>
                <div className="bw-review-source">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#1dbf73' }}>
                    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c-.95 0-1.682.443-2.124 1.02v-.85h-3.14v6.42h3.14v-3.36c0-.63.496-1.177 1.177-1.177h1.797v4.537h3.14v-4.537l-.14-2.053zM13.54 9.878h-3.143v1.86H8.2v3.26h2.197v2.85c0 1.63 1.337 2.976 2.976 2.976h1.967v-2.977h-1.002c-.55 0-.798-.247-.798-.79v-2.06h1.8v-3.26h-1.8V9.878zM5.845 15.492c0 .55-.453.987-1.04.987-.587 0-1.04-.437-1.04-.987 0-.55.453-.987 1.04-.987.587 0 1.04.437 1.04.987zM2 15.49c0 1.85 1.484 3.194 3.805 3.194 2.32 0 3.803-1.344 3.803-3.194v-4.75H6.47v4.68c0 .63-.263.987-.665.987-.4 0-.664-.357-.664-.987v-4.68H2v4.75z"/>
                  </svg>
                  Fiverr · Verifiziert
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
        <div className="foot-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
