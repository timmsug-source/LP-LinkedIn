import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import SeoFaq from '@/components/SeoFaq'
import { BASE_URL } from '@/lib/jsonld'
import Link from 'next/link'

const WA_HREF = `https://wa.me/4915229515030?text=${encodeURIComponent('Hallo Timm, ich suche externe SEO-Kapazität und würde gerne kurz sprechen.')}`

export const metadata: Metadata = {
  title: 'SEO-Freelancer für Unternehmen & Agenturen | Timm Schurig — NRW',
  description:
    'Externer SEO-Freelancer aus Langenfeld (NRW) — Timm Schurig. Technisches SEO, Content-SEO, Linkbuilding & GEO für Inhouse-Teams und Agenturen. NDA möglich. Jetzt anfragen.',
  alternates: { canonical: `${BASE_URL}/seo-freelancer` },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${BASE_URL}/seo-freelancer`,
    title: 'SEO-Freelancer für Unternehmen & Agenturen | Timm Schurig — NRW',
    description:
      'Externer SEO-Freelancer aus Langenfeld (NRW). Technisches SEO, Content-SEO, Linkbuilding & GEO für Inhouse-Teams und Agenturen. NDA möglich.',
    images: [{ url: `${BASE_URL}/og-image-timm-schurig.png`, width: 1200, height: 630, alt: 'Timm Schurig – SEO-Freelancer NRW' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO-Freelancer für Unternehmen & Agenturen | Timm Schurig — NRW',
    description: 'Externer SEO-Freelancer aus Langenfeld (NRW). Technisches SEO, Content-SEO & GEO für Inhouse-Teams und Agenturen.',
    images: [`${BASE_URL}/og-image-timm-schurig.png`],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Timm Schurig – SEO-Freelancer',
  url: `${BASE_URL}/seo-freelancer`,
  areaServed: ['Langenfeld', 'Düsseldorf', 'Köln', 'NRW', 'Deutschland'],
  serviceType: ['SEO', 'Technisches SEO', 'Content-SEO', 'Linkbuilding', 'GEO', 'Whitelabel SEO'],
  provider: { '@type': 'Person', name: 'Timm Schurig', url: BASE_URL },
}

const situations = [
  'Das interne SEO-Team ist ausgelastet – ein Projekt muss trotzdem geliefert werden.',
  'Die Agentur hat kein eigenes SEO-Know-how und braucht jemanden, der das Thema übernimmt.',
  'Ein Spezialist für technisches SEO oder GEO wird projektbezogen gesucht.',
  'Der bisherige Freelancer ist ausgefallen – Übergabe und Weiterführung müssen schnell passieren.',
  'Ein neues Kundenprojekt erfordert SEO-Kapazität, die intern nicht vorhanden ist.',
  'GEO (Generative Engine Optimization) soll als neue Disziplin pilotiert werden.',
]

const leistungen = [
  {
    title: 'Technisches SEO',
    items: [
      'Crawling & Indexierungsanalyse (Screaming Frog, GSC)',
      'Core Web Vitals Audit & Optimierungsbegleitung',
      'Log-File-Analyse, Redirect-Mapping, Canonicalization',
      'JavaScript SEO & Rendering-Probleme',
      'Internationale SEO & Hreflang-Implementierung',
    ],
  },
  {
    title: 'Keyword-Strategie & Content-SEO',
    items: [
      'Keyword-Clustering & Suchintentions-Analyse (Ahrefs)',
      'Content-Briefings auf Basis von TF-IDF & semantischer Analyse',
      'Content-Audit & Reoptimierungsstrategie',
      'Siloing & interne Verlinkungsarchitektur',
    ],
  },
  {
    title: 'On-Page-Optimierung',
    items: [
      'Title Tags, Meta Descriptions, H-Strukturen, Alt-Texte',
      'Schema Markup & Structured Data Implementierung',
      'Featured Snippet Optimierung',
      'E-E-A-T Signale & Trust-Optimierung',
    ],
  },
  {
    title: 'Reporting & Monitoring',
    items: [
      'Monatliches Keyword-Ranking-Tracking',
      'Google Search Console & Ahrefs Dashboard',
      'Customized Reporting – anpassbar an eure internen Templates',
      'Handover-Dokumentation bei Projektabschluss',
    ],
  },
  {
    title: 'GEO — Generative Engine Optimization',
    items: [
      'Sichtbarkeitsanalyse in ChatGPT, Perplexity & Google AI Overviews',
      'Structured Data & semantische Optimierung für KI-Systeme',
      'GEO-Content-Strategie & Monitoring',
    ],
    note: 'GEO ist derzeit noch eine junge Disziplin – ich gehöre zu den wenigen Freelancern in Deutschland, die das aktiv als Leistung anbieten.',
  },
]

const pricing = [
  {
    tag: 'Stundensatz',
    type: 'Flexibel',
    price: 'Ab 85 €',
    period: '/ Stunde',
    desc: 'Für Ad-hoc-Aufgaben, Beratung oder kleinere Maßnahmen ohne festes Projektvolumen.',
  },
  {
    tag: 'Tagessatz',
    type: 'Tageweise',
    price: 'Ab 650 €',
    period: '/ Tag',
    desc: 'Für intensive Projekttage, Workshops oder Vor-Ort-Einsätze beim Kunden.',
  },
  {
    tag: 'Projektpauschale',
    type: 'Projektbasiert',
    price: 'Auf Anfrage',
    period: '',
    desc: 'Für definierte Deliverables wie ein SEO-Audit, Keyword-Strategie oder GEO-Pilotierung – Scope und Preis nach Briefing.',
  },
]

export default function SeoFreelancer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO — dunkel */}
      <section className="sf-hero">
        <div className="wrap">
          <div className="sf-hero-inner fu">
            <div className="label">SEO-Freelancer · Langenfeld / NRW</div>
            <h1>SEO-Freelancer für Unternehmen & Agenturen, die externe Kapazität brauchen.</h1>
            <p className="sf-hero-sub">
              Ob fehlende Kapazität im Team, ein Projekt außerhalb eurer Kernkompetenz oder ein Whitelabel-Partner für eure Agentur –
              ich liefere saubere SEO-Arbeit, direkt und ohne Overhead.
            </p>
            <p className="sf-hero-support fu d1">
              Ich bin Timm Schurig, SEO-Freelancer aus Langenfeld (NRW). Ich arbeite mit Inhouse-SEO-Teams und Agenturen,
              die einen verlässlichen Spezialisten zukaufen – für Einzelprojekte, laufende Maßnahmen oder als feste externe Ressource.
            </p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn fu d2">
              Jetzt anfragen →
            </a>
          </div>
          <div className="hero-trust fu d2">
            <div className="hero-trust-stars">★★★★★ <span>5,0 · 15+ Bewertungen</span></div>
            <div className="hero-trust-sep" />
            <div className="hero-trust-item"><span className="hero-trust-check">✓</span>12+ Kundenprojekte · NRW</div>
            <div className="hero-trust-item"><span className="hero-trust-check">✓</span>SEO + GEO aus einer Hand</div>
            <div className="hero-trust-item"><span className="hero-trust-check">✓</span>NDA möglich · Whitelabel</div>
          </div>
        </div>
      </section>

      {/* WANN — hell */}
      <section className="sf-wann sf-light">
        <div className="wrap">
          <div className="fu">
            <div className="label">Wann ich ins Spiel komme</div>
            <h2>Wann Unternehmen & Agenturen einen externen SEO-Freelancer beauftragen</h2>
            <p className="sec-intro" style={{ color: '#475569' }}>
              Die meisten Anfragen kommen aus einer dieser Situationen:
            </p>
          </div>
          <div className="sf-situations fu d1">
            {situations.map((s, i) => (
              <div key={i} className="sf-situation-item">
                <span className="sf-check-dark">✓</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
          <p className="sf-wann-footer fu d2">
            In all diesen Situationen bin ich einspringbar – ohne lange Einarbeitungszeit, mit klaren Deliverables und strukturierter Übergabe.
          </p>
        </div>
      </section>

      {/* LEISTUNGEN — dunkel */}
      <section className="sf-leistungen">
        <div className="wrap">
          <div className="sf-section-head fu">
            <div className="label">Leistungsportfolio</div>
            <h2>Was ich liefere</h2>
            <p className="sec-intro">Keine Erklärungen, was SEO ist – nur, was ich konkret umsetze.</p>
          </div>
          <div className="sf-lst-grid">
            {leistungen.map((l, i) => (
              <div key={l.title} className={`sf-lst-card fu d${i % 3}`}>
                <h3>{l.title}</h3>
                <ul>
                  {l.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {l.note && <p className="sf-lst-geo-note">{l.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROZESS — hell */}
      <section className="sf-prozess sf-light">
        <div className="wrap">
          <div className="fu">
            <div className="label">Prozess & Übergabe</div>
            <h2>Wie ich arbeite – Prozess, Übergabe & Integration</h2>
          </div>
          <p className="sf-prozess-note fu d1" style={{ color: '#475569' }}>
            Ich bin es gewohnt, in bestehende Workflows einzusteigen – ob Jira, Notion, Slack oder E-Mail.
            Kein Onboarding-Theater, keine wochenlange Abstimmungsphase.
          </p>
          <div className="sf-prozess-steps fu d1">
            {[
              {
                n: '01', title: 'Briefing & Scope',
                desc: 'Ich nehme mir Zeit, euren Status quo, eure Ziele und eure bestehenden Maßnahmen zu verstehen. Scope und Deliverables werden schriftlich fixiert.',
              },
              {
                n: '02', title: 'Umsetzung & Abstimmung',
                desc: 'Ich arbeite strukturiert, dokumentiere laufend und kommuniziere Blocker frühzeitig. Keine Überraschungen am Abgabetermin.',
              },
              {
                n: '03', title: 'Übergabe & Dokumentation',
                desc: 'Saubere Handover-Dokumentation am Projektende. Euer Team oder euer Kunde kann nahtlos weiterarbeiten.',
              },
            ].map((s) => (
              <div key={s.n} className="sf-prozess-step">
                <span className="sf-prozess-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="sf-prozess-note fu d2" style={{ color: '#475569' }}>
            Ich passe mich eurem Reporting-Format an – kein eigener Template-Zwang. NDA und projektbezogene Vertraulichkeit sind selbstverständlich.
          </p>
        </div>
      </section>

      {/* WHITELABEL — dunkel */}
      <section className="sf-whitelabel">
        <div className="wrap">
          <div className="sf-wl-grid">
            <div className="sf-wl-text fu">
              <div className="label">Whitelabel & Agentur-Kollaboration</div>
              <h2>Als Whitelabel-Partner für Agenturen</h2>
              <p>
                Viele Agenturen arbeiten mit mir als stille externe Ressource – ich trete nicht in Erscheinung,
                liefere unter eurem Namen und halte mich an eure Strukturen.
              </p>
              <ul className="sf-wl-list">
                {[
                  'Ich kommuniziere ausschließlich mit eurem internen Team – nicht mit eurem Kunden.',
                  'Deliverables werden in eurem Branding oder eurem Format geliefert, wenn gewünscht.',
                  'NDA und projektbezogene Vertraulichkeit sind Standard, nicht Ausnahme.',
                  'Ich bin flexibel skalierbar – einmalige Projekte oder laufende Zusammenarbeit.',
                  'Meine Kapazität ist planbar – ich kommuniziere Engpässe frühzeitig.',
                ].map((item) => (
                  <li key={item}><span className="lst-check">✓</span>{item}</li>
                ))}
              </ul>
              <blockquote className="sf-wl-quote">
                <p>„Ich bin kein Konkurrent – ich bin die externe Kapazität, die euer Team stärkt."</p>
                <cite>— Timm Schurig</cite>
              </blockquote>
            </div>
            <div className="sf-wl-right fu d1">
              <div className="sf-wl-cta-wrap">
                <div className="label">Laufende Zusammenarbeit</div>
                <p className="sf-wl-note" style={{ color: 'var(--sub)', marginTop: '12px', lineHeight: 1.7 }}>
                  Wenn ihr regelmäßig SEO-Kapazität zukauft, lohnt sich ein kurzes Erstgespräch über eine laufende Zusammenarbeit.
                </p>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '20px' }}>
                  Jetzt anfragen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOKAL — hell */}
      <section className="sf-lokal sf-light">
        <div className="wrap">
          <div className="sf-lokal-grid">
            <div className="fu">
              <div className="label">Lokal & national</div>
              <h2>SEO-Freelancer aus NRW —<br />lokal & deutschlandweit</h2>
              <p>
                Ich bin in Langenfeld (NRW) ansässig und arbeite remote mit Unternehmen und Agenturen in ganz Deutschland.
                Der Standort spielt für die Zusammenarbeit keine Rolle – Abstimmung läuft asynchron oder per Video-Call.
              </p>
              <p>
                Für überregionale Projekte und deutschlandweite Zusammenarbeit stehe ich genauso zur Verfügung.
              </p>
            </div>
            <div className="fu d1">
              <div className="label">Lokale Anfragen kommen häufig aus</div>
              <div className="sf-tag-cloud" style={{ marginTop: '16px' }}>
                {[
                  'Düsseldorf', 'Köln', 'Langenfeld', 'Leverkusen', 'Leichlingen', 'NRW gesamt',
                ].map((tag) => (
                  <span key={tag} className="sf-tag">SEO Freelancer {tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREISE — dunkel */}
      <section className="sf-preise">
        <div className="wrap">
          <div className="sf-section-head fu">
            <div className="label">Preise</div>
            <h2>Transparent. Direkt. Ohne Überraschungen.</h2>
            <p className="sec-intro">Für Whitelabel-Zusammenarbeit und Volumen-Projekte sprechen wir individuelle Konditionen ab.</p>
          </div>
          <div className="lst-preise-grid">
            {pricing.map((p, i) => (
              <div key={p.tag} className={`prs-card fu d${i}`}>
                <div className="prs-card-header">
                  <span className="prs-tag">{p.tag}</span>
                </div>
                <p className="prs-tagline">{p.desc}</p>
                <div className="prs-section">
                  <div className="prs-price">
                    <span className="prs-amount">{p.price}</span>
                    {p.period && <span className="prs-period">{p.period}</span>}
                  </div>
                  <p className="sf-price-type">{p.type}</p>
                </div>
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="prs-cta">
                  Jetzt anfragen →
                </a>
              </div>
            ))}
          </div>
          <p className="sf-preise-note fu">Alle Preise zzgl. gesetzlicher MwSt.</p>
        </div>
      </section>

      {/* FAQ — hell */}
      <section className="sf-faq sf-light">
        <div className="wrap">
          <div className="faq-head fu">
            <div className="label">FAQ — Für SEO-Profis & Agenturen</div>
            <h2>Häufige Fragen aus der Praxis</h2>
          </div>
          <SeoFaq />
        </div>
      </section>

      {/* FINALER CTA — dunkel */}
      <section className="sf-cta">
        <div className="wrap">
          <div className="cta-wa-box fu">
            <h2>Externe SEO-Kapazität gesucht?</h2>
            <p>
              Dann lass uns kurz sprechen. 20 Minuten reichen, um zu klären, ob und wie ich euch weiterhelfen kann.
            </p>
            <p className="sf-cta-reply">Ich antworte in der Regel innerhalb von 24 Stunden – auch auf detaillierte Briefings.</p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn">
              Jetzt anfragen →
            </a>
            <div className="sf-cta-links">
              <Link href="/#leistungen">← Alle Leistungen</Link>
              <Link href="/blog">Blog lesen</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
