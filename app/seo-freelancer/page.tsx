import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import SeoFaq from '@/components/SeoFaq'
import { BASE_URL } from '@/lib/jsonld'
import Link from 'next/link'

const WA_HREF = `https://wa.me/4915229515030?text=${encodeURIComponent('Hallo Timm, ich interessiere mich für SEO und würde gerne kurz sprechen.')}`

export const metadata: Metadata = {
  title: 'SEO-Freelancer | Timm Schurig – SEO aus Langenfeld / NRW',
  description:
    'SEO-Freelancer aus Langenfeld (NRW) – Timm Schurig. Technisches SEO, Keyword-Strategie, Linkbuilding & GEO für Unternehmen und Agenturen. Jetzt unverbindlich anfragen.',
  alternates: { canonical: `${BASE_URL}/seo-freelancer` },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${BASE_URL}/seo-freelancer`,
    title: 'SEO-Freelancer | Timm Schurig – SEO aus Langenfeld / NRW',
    description:
      'SEO-Freelancer aus Langenfeld (NRW) – Timm Schurig. Technisches SEO, Keyword-Strategie, Linkbuilding & GEO für Unternehmen und Agenturen.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Timm Schurig – SEO-Freelancer',
  url: `${BASE_URL}/seo-freelancer`,
  areaServed: ['Langenfeld', 'Düsseldorf', 'Köln', 'NRW', 'Deutschland'],
  serviceType: ['SEO', 'Technisches SEO', 'Keyword-Strategie', 'Linkbuilding', 'GEO'],
  provider: {
    '@type': 'Person',
    name: 'Timm Schurig',
    url: BASE_URL,
  },
}

const leistungen = [
  {
    icon: '🔍',
    title: 'Technisches SEO-Audit',
    desc: 'Ich analysiere deine Website auf alle technischen Faktoren, die Google davon abhalten, dich richtig zu indexieren und zu bewerten.',
    features: [
      'Vollständiges Audit mit priorisierten Handlungsempfehlungen',
      'Verständlicher Report – kein Agentur-Kauderwelsch',
      'Umsetzungsbegleitung auf Wunsch inklusive',
    ],
  },
  {
    icon: '🎯',
    title: 'Keyword-Strategie & Suchintentions-Analyse',
    desc: 'Nicht jedes Keyword ist ein gutes Keyword. Ich finde die Suchanfragen, hinter denen echte Kaufabsicht steckt.',
    features: [
      'Keyword-Recherche mit Ahrefs & AnswerThePublic',
      'Clustering nach Suchintention',
      'Priorisierung nach Traffic-Potenzial und Wettbewerbsstärke',
    ],
  },
  {
    icon: '📄',
    title: 'On-Page-Optimierung',
    desc: 'Ich optimiere deine bestehenden Seiten so, dass Google sie richtig versteht und rankt – ohne dass der Content sich generisch liest.',
    features: [
      'Title Tags, Meta Descriptions, H-Struktur',
      'Content-Optimierung nach TF-IDF und semantischer Relevanz',
      'Interne Verlinkungsstrategie',
    ],
  },
  {
    icon: '🔗',
    title: 'Linkbuilding & Off-Page-SEO',
    desc: 'Backlinks sind nach wie vor ein starkes Ranking-Signal. Ich baue dir Links auf, die Google vertraut.',
    features: [
      'Relevante Backlinks aus deiner Branche',
      'Digitale PR & Content-basiertes Linkbuilding',
      'Monitoring & Disavow bei Toxic Links',
    ],
  },
  {
    icon: '📊',
    title: 'Laufendes SEO-Monitoring & Reporting',
    desc: 'Du bekommst monatlich einen Report, der dir zeigt, was sich bewegt. Klar, verständlich, ohne Zahlenfriedhof.',
    features: [
      'Monatliches Keyword-Tracking',
      'Google Search Console & Ahrefs Monitoring',
      'Klare Handlungsempfehlungen für den nächsten Monat',
    ],
  },
  {
    icon: '🤖',
    title: 'GEO — Generative Engine Optimization',
    desc: 'Ich optimiere deinen Content nicht nur für Google – sondern auch dafür, dass KI-Systeme dich als Quelle empfehlen.',
    features: [
      'Strukturierte Daten & Schema Markup',
      'Semantische Content-Optimierung für KI-Systeme',
      'GEO-Monitoring: Wirst du von KI zitiert?',
    ],
  },
]

const pricing = [
  {
    tag: 'SEO-Audit',
    type: 'Einmalig',
    price: 'Ab 799 €',
    period: 'Einmalig',
    desc: 'Vollständiges technisches Audit inkl. Keyword-Analyse und priorisiertem Maßnahmen-Report.',
  },
  {
    tag: 'SEO-Beratung & Umsetzung',
    type: 'Projektbasiert',
    price: 'Auf Anfrage',
    period: '',
    desc: 'Strategie, On-Page-Optimierung, Linkbuilding & Content – je nach Projektumfang individuell.',
  },
  {
    tag: 'SEO-Retainer',
    type: 'Monatlich',
    price: 'Ab 199 €',
    period: '/ Monat',
    desc: 'Laufendes Monitoring, monatlicher Report, kontinuierliche Optimierung.',
  },
]

export default function SeoFreelancer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="sf-hero">
        <div className="wrap">
          <div className="sf-hero-inner fu">
            <div className="label">SEO-Freelancer · Langenfeld / NRW</div>
            <h1>SEO-Freelancer für Unternehmen, die endlich gefunden werden wollen.</h1>
            <p className="sf-hero-sub">
              Du hast eine Website – aber Google ignoriert sie. Du hast Inhalte – aber niemand klickt.
              Ich bin Timm Schurig, SEO-Freelancer aus Langenfeld (NRW), und ich sorge dafür, dass das aufhört.
            </p>
            <p className="sf-hero-support fu d1">
              Kein Agentur-Overhead. Kein Praktikant, der deinen Content schreibt. Nur ein Spezialist,
              der weiß, was er tut – und der direkt mit dir arbeitet.
            </p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn fu d2">
              Jetzt unverbindlich anfragen →
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sf-problem">
        <div className="wrap">
          <div className="sf-problem-inner fu">
            <div className="label">Das kennen viele</div>
            <h2>Was läuft gerade schief?</h2>
            <p className="sec-intro">
              Viele Unternehmen und Agenturen kommen zu mir mit denselben drei Problemen:
            </p>
            <div className="sf-pain-list">
              {[
                'Die Website rankt nicht – trotz gutem Produkt und ordentlichem Design.',
                'Die letzte Agentur hat viel versprochen und wenig geliefert – und du weißt nicht mal, was sie gemacht hat.',
                'Intern fehlt die Kapazität oder das Know-how, um SEO ernsthaft zu betreiben.',
              ].map((pain, i) => (
                <div key={i} className={`sf-pain-item fu d${i}`}>
                  <span className="sf-pain-num">0{i + 1}</span>
                  <p>{pain}</p>
                </div>
              ))}
            </div>
            <blockquote className="sf-problem-quote fu d2">
              <p>„SEO scheitert meistens nicht am Budget – sondern daran, dass niemand weiß, was er eigentlich tut."</p>
              <cite>— Timm Schurig</cite>
            </blockquote>
            <p className="sf-problem-closer fu d2">Genau da komme ich ins Spiel.</p>
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section className="sf-about">
        <div className="wrap">
          <div className="sf-about-grid fu">
            <div className="sf-about-text">
              <div className="label">Wer ich bin</div>
              <h2>Warum das für dich relevant ist</h2>
              <p>
                Ich bin Timm Schurig – Webdesigner, Entwickler und SEO/GEO-Spezialist aus Langenfeld, NRW.
              </p>
              <ul className="sf-about-list">
                <li><span className="lst-check">✓</span>Du arbeitest direkt mit mir – nicht mit einem Projektmanager, der deine Informationen weitergibt.</li>
                <li><span className="lst-check">✓</span>Ich verbinde technisches SEO mit echtem Content-Verständnis und Conversion-Fokus.</li>
                <li><span className="lst-check">✓</span>Ich bin einer der wenigen Freelancer in Deutschland, der klassisches SEO mit GEO kombiniert – Sichtbarkeit bei Google und in KI-Systemen wie ChatGPT und Perplexity.</li>
                <li><span className="lst-check">✓</span>Ich arbeite mit Unternehmen und Agenturen, die professionelle SEO-Leistung brauchen – ohne den Overhead einer großen Agentur zu bezahlen.</li>
              </ul>
            </div>
            <blockquote className="lst-quote fu d1">
              <p>„Ich erkläre dir, was ich tue und warum. Du entscheidest informiert – nicht im Blindflug."</p>
              <cite>— Timm Schurig</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="sf-leistungen" id="seo-leistungen">
        <div className="wrap">
          <div className="sf-section-head fu">
            <div className="label">Was ich leiste</div>
            <h2>Was ich als SEO-Freelancer für dich tue</h2>
            <p className="sec-intro">
              Breite Leistungen, klare Ergebnisse. Jede Maßnahme mit einem konkreten Ziel.
            </p>
          </div>
          <div className="sf-leistungen-grid">
            {leistungen.map((l, i) => (
              <div key={l.title} className={`sf-lst-card fu d${i % 3}`}>
                <span className="sf-lst-icon">{l.icon}</span>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
                <ul>
                  {l.features.map((f) => (
                    <li key={f}><span className="lst-check">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="sf-prozess">
        <div className="wrap">
          <div className="sf-section-head fu">
            <div className="label">So arbeiten wir zusammen</div>
            <h2>Kein langer Onboarding-Prozess.<br />Kein 12-Monats-Vertrag, bevor du weißt, ob es funktioniert.</h2>
          </div>
          <div className="sf-prozess-steps">
            {[
              { n: '01', title: 'Erstgespräch', desc: 'Wir reden 30 Minuten. Du erzählst mir deine Situation, ich sage dir ehrlich, was ich sehe und was ich tun würde.' },
              { n: '02', title: 'Analyse & Strategie', desc: 'Ich analysiere deine Website, deinen Wettbewerb und deine Keywords. Du bekommst einen klaren Plan – kein Bullshit-Bingo.' },
              { n: '03', title: 'Umsetzung & Monitoring', desc: 'Ich setze um, begleite dich laufend und halte dich auf dem Stand. Monatlicher Report inklusive.' },
            ].map((s, i) => (
              <div key={s.n} className={`sf-prozess-step fu d${i}`}>
                <span className="sf-prozess-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN */}
      <section className="sf-fuer-wen">
        <div className="wrap">
          <div className="sf-section-head fu">
            <div className="label">Für wen ich der Richtige bin</div>
            <h2>Ehrlich gesagt: Ich passe nicht zu jedem.</h2>
          </div>
          <div className="sf-fuer-wen-grid">
            <div className="sf-fw-col sf-fw-yes fu d0">
              <h3>Ich arbeite am liebsten mit:</h3>
              <ul>
                {[
                  'Unternehmen ab 10 Mitarbeitern, die SEO ernsthaft angehen wollen – nicht als Experiment.',
                  'Agenturen, die einen verlässlichen SEO-Freelancer als Weißlabel-Partner suchen.',
                  'Unternehmen, bei denen SEO intern nicht abgedeckt ist und die externe Expertise brauchen.',
                  'Entscheider, die verstehen wollen, was hinter ihrer Sichtbarkeit steckt – und nicht einfach auslagern und vergessen.',
                ].map((t) => (
                  <li key={t}><span className="lst-check">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="sf-fw-col sf-fw-no fu d1">
              <h3>Ich bin wahrscheinlich nicht der Richtige, wenn:</h3>
              <ul>
                {[
                  'Du nach dem günstigsten Anbieter suchst.',
                  'Du Ergebnisse in zwei Wochen erwartest.',
                  'Du keine Ressourcen auf deiner Seite einbringen kannst (Content, Freigaben, Feedback).',
                ].map((t) => (
                  <li key={t}><span className="sf-no-icon">✕</span>{t}</li>
                ))}
              </ul>
              <blockquote className="sf-fw-quote">
                <p>„Gute SEO-Ergebnisse entstehen im Dialog – nicht im Monolog."</p>
                <cite>— Timm Schurig</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* LOKALE PRÄSENZ */}
      <section className="sf-lokal">
        <div className="wrap">
          <div className="sf-lokal-grid fu">
            <div className="sf-lokal-text">
              <div className="label">Lokal & national</div>
              <h2>SEO-Freelancer aus NRW –<br />lokal verwurzelt, deutschlandweit aktiv.</h2>
              <p>
                Ich bin in Langenfeld (NRW) ansässig und arbeite mit Unternehmen aus der gesamten Region – und darüber hinaus.
                Da ich remote arbeite, ist mein Einzugsgebiet nicht auf NRW begrenzt. Ich betreue Kunden deutschlandweit – von Hamburg bis München.
              </p>
              <p>
                Der Vorteil bei einem lokalen Freelancer gegenüber einer nationalen Agentur: kurze Abstimmungswege,
                direkte Kommunikation, und ein Ansprechpartner, der auch mal spontan für ein kurzes Call verfügbar ist.
              </p>
            </div>
            <div className="sf-lokal-tags fu d1">
              <div className="label">Meine lokalen Schwerpunkte</div>
              <div className="sf-tag-cloud">
                {[
                  'SEO Freelancer Düsseldorf',
                  'SEO Freelancer Köln',
                  'SEO Freelancer Langenfeld',
                  'SEO Freelancer NRW',
                  'SEO Freelancer Leverkusen',
                  'SEO Freelancer Leichlingen',
                  'SEO Freelancer Deutschland',
                ].map((tag) => (
                  <span key={tag} className="sf-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREISE */}
      <section className="sf-preise">
        <div className="wrap">
          <div className="sf-section-head fu">
            <div className="label">Transparente Preise</div>
            <h2>Keine Überraschungen.<br />Keine versteckten Kosten.</h2>
            <p className="sec-intro">
              Ich glaube an Transparenz. Deshalb bekommst du hier eine erste Orientierung –
              was genau für dich passt, klären wir im Gespräch.
            </p>
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

      {/* FAQ */}
      <section id="seo-faq" className="sf-faq">
        <div className="wrap">
          <div className="faq-head fu">
            <div className="label">FAQ</div>
            <h2>Häufige Fragen –<br />beantwortet, bevor sie gestellt werden.</h2>
          </div>
          <SeoFaq />
        </div>
      </section>

      {/* FINALER CTA */}
      <section className="sf-cta">
        <div className="wrap">
          <div className="cta-wa-box fu">
            <h2>Bereit, mehr Traffic in echte Anfragen zu verwandeln?</h2>
            <p>
              Dann lass uns reden. Kein Verkaufsgespräch, kein Druck. Nur ein ehrliches 30-Minuten-Gespräch
              darüber, wo du gerade stehst – und was ich für dich tun kann.
            </p>
            <p className="sf-cta-reply">Ich antworte in der Regel innerhalb von 24 Stunden.</p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn">
              Jetzt unverbindlich anfragen →
            </a>
            <div className="sf-cta-links">
              <Link href="/#leistungen">← Alle Leistungen ansehen</Link>
              <Link href="/blog">Blog lesen</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
