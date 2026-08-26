import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Tools from '@/components/Tools'
import { BASE_URL } from '@/lib/jsonld'
import GeoVsl from './vsl'
import GeoFlipCards from './flip-cards'
import GeoFaq from './faq'
import GeoReviews from './reviews'

const WA_HREF = `https://wa.me/4915229515030?text=${encodeURIComponent(
  'Hallo Timm, ich möchte mit meinem Unternehmen in KI-Suchen sichtbar werden. Können wir kurz sprechen?'
)}`

export const metadata: Metadata = {
  title: 'GEO Agentur Langenfeld: In KI-Suchen sichtbar werden',
  description:
    'GEO Agentur aus Langenfeld: sichtbar in ChatGPT, Perplexity und Google AI Overviews – auf SEO-Fundament, mit wöchentlichem Reporting.',
  alternates: { canonical: `${BASE_URL}/geo-agentur-langenfeld` },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${BASE_URL}/geo-agentur-langenfeld`,
    title: 'GEO Agentur Langenfeld — In KI-Suchen sichtbar werden',
    description:
      'Werde in ChatGPT, Perplexity & Google AI Overviews zitiert. GEO aus Langenfeld — mit SEO-Fundament, wöchentlichem Reporting und messbaren Ergebnissen.',
    images: [
      {
        url: `${BASE_URL}/og-image-timm-schurig-zentriert.png`,
        width: 1200,
        height: 630,
        alt: 'Timm Schurig – GEO Agentur Langenfeld',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Agentur Langenfeld — In KI-Suchen sichtbar werden',
    description: 'Werde in ChatGPT, Perplexity & Google AI Overviews zitiert. GEO aus Langenfeld.',
    images: [`${BASE_URL}/og-image-timm-schurig-zentriert.png`],
  },
}

/* ── JSON-LD: Service + LocalBusiness + FAQ ──────────────────────
   Bewusst ausführlich – genau die strukturierten Daten, über die
   diese Seite selbst spricht. */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/geo-agentur-langenfeld#service`,
  name: 'GEO Agentur Langenfeld – Timm Schurig',
  description:
    'Generative Engine Optimization (GEO) aus Langenfeld: Sichtbarkeit und Zitierungen in ChatGPT, Perplexity, Google AI Overviews und Gemini – auf einem sauberen SEO-Fundament.',
  url: `${BASE_URL}/geo-agentur-langenfeld`,
  image: `${BASE_URL}/timm.png`,
  priceRange: '€€',
  areaServed: ['Langenfeld', 'Düsseldorf', 'Köln', 'Leverkusen', 'Solingen', 'NRW', 'Deutschland'],
  serviceType: [
    'Generative Engine Optimization',
    'GEO',
    'AI Search Optimization',
    'Suchmaschinenoptimierung',
    'Technisches SEO',
    'Structured Data',
  ],
  provider: {
    '@type': 'Person',
    name: 'Timm Schurig',
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zum Galkhausener Bach 72',
      addressLocality: 'Langenfeld',
      postalCode: '40764',
      addressRegion: 'Nordrhein-Westfalen',
      addressCountry: 'DE',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
    bestRating: '5',
  },
}

const faqItems = [
  {
    q: 'Was ist GEO (Generative Engine Optimization)?',
    a: 'GEO sorgt dafür, dass deine Inhalte in KI-Suchen wie ChatGPT, Perplexity, Google AI Overviews oder Gemini als Quelle auftauchen. Klassisches SEO zielt auf Platz 1 bei Google. GEO zielt darauf, dass die KI dich zitiert, wenn jemand eine Frage aus deinem Themenfeld stellt.',
  },
  {
    q: 'Ist GEO nicht einfach das Gleiche wie SEO?',
    a: 'Nein, aber ohne SEO funktioniert GEO nicht. SEO ist das Fundament: Die KI muss deine Seite überhaupt crawlen, verstehen und einordnen können. GEO baut darauf auf und optimiert zusätzlich auf Zitierfähigkeit – also darauf, dass deine Antworten so klar formuliert und strukturiert sind, dass ein Sprachmodell sie direkt übernehmen kann.',
  },
  {
    q: 'Wie lange dauert es, bis ich in KI-Suchen auftauche?',
    a: 'Erste Zitierungen sehen wir in der Regel nach 6 bis 12 Wochen – abhängig davon, wie dein technisches Fundament aussieht und wie viel Wettbewerb in deinem Thema herrscht. Anders als bei Google gibt es keinen festen Index-Rhythmus: Manche Systeme greifen live auf Suchergebnisse zu, andere arbeiten mit trainierten Daten.',
  },
  {
    q: 'Kann man Ergebnisse in KI-Suchen überhaupt messen?',
    a: 'Ja. Wir tracken für definierte Fragestellungen, ob und wie deine Seite in ChatGPT, Perplexity und den AI Overviews als Quelle erscheint. Dazu kommen die klassischen Rankings. Du bekommst jeden Donnerstag ein Reporting – keine Blackbox, keine „Vertrau mir"-Aussagen.',
  },
  {
    q: 'Für wen lohnt sich GEO gerade jetzt?',
    a: 'Für alle, deren Kunden Fragen stellen, bevor sie kaufen – also Dienstleister, Beratung, Handwerk, Gesundheit, B2B. Der Markt ist noch nicht überlaufen. Wer jetzt die Grundlagen legt, sitzt in zwei Jahren auf einer Position, die die Konkurrenz teuer nachbauen muss.',
  },
  {
    q: 'Arbeitest du nur mit Unternehmen aus Langenfeld?',
    a: 'Nein. Ich sitze in Langenfeld und arbeite viel im Rheinland – Düsseldorf, Köln, Leverkusen, Solingen. Die Zusammenarbeit läuft aber ohnehin remote, deshalb betreue ich Kunden in ganz Deutschland. Vor Ort geht in NRW jederzeit.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const heroPoints = [
  {
    title: 'Sichtbar, wo gesucht wird',
    desc: 'ChatGPT, Perplexity, Gemini und Google AI Overviews – dort, wo deine Kunden heute Fragen stellen.',
  },
  {
    title: 'Auf echtem SEO-Fundament',
    desc: 'Kein Trick, kein Hack. Erst die Technik, dann die Sichtbarkeit. Beides aus einer Hand.',
  },
  {
    title: 'Jeden Donnerstag Zahlen',
    desc: 'Rankings, Zitierungen, Entwicklung. In deiner eigenen Plattform – transparent statt Bauchgefühl.',
  },
]

const statusQuo = [
  {
    n: '01',
    title: 'Kein Google-Ranking',
    desc: 'Deine Seite steht auf Position 30. Da klickt niemand. Für Google existierst du praktisch nicht.',
  },
  {
    n: '02',
    title: 'Keine Zitierungen in KI-Suchen',
    desc: 'Fragt jemand ChatGPT nach einem Anbieter in deinem Bereich, kommt ein anderer Name. Nicht deiner.',
  },
  {
    n: '03',
    title: 'Kunden bleiben aus',
    desc: 'Kein Ranking, keine Zitierung, kein Traffic. Deine Website ist eine Visitenkarte, die niemand liest.',
  },
]

/* Der Ablauf einer Zusammenarbeit. Die Zeitangaben sind bewusst konkret –
   „individuell nach Absprache" beantwortet die Frage nicht, die sich jeder an
   dieser Stelle stellt: Wann passiert was, und was muss ich selbst tun? */
const ablauf = [
  {
    n: '01',
    dauer: '30 Minuten',
    title: 'Erstgespräch',
    desc: 'Wir schauen gemeinsam, wo du heute in ChatGPT, Perplexity und den AI Overviews auftauchst — und wo dein Wettbewerb genannt wird. Kostenlos und ohne Verpflichtung.',
    duTust: 'Erzählst mir, was du machst und wen du erreichen willst.',
  },
  {
    n: '02',
    dauer: 'Woche 1–2',
    title: 'Analyse & Fahrplan',
    desc: 'Technisches Audit, Wettbewerbsvergleich und eine Liste der Themen, bei denen du überhaupt zitiert werden kannst. Du bekommst einen Fahrplan mit Reihenfolge und Aufwand.',
    duTust: 'Öffnest mir Website, Search Console und Google-Profil.',
  },
  {
    n: '03',
    dauer: 'Woche 2–6',
    title: 'Fundament & Umsetzung',
    desc: 'Erst die Technik: Crawlbarkeit, Ladezeit, saubere Struktur, strukturierte Daten. Dann die Inhalte: Antworten auf die Fragen deiner Kunden, in der Form, die Sprachmodelle zitieren.',
    duTust: 'Beantwortest Fachfragen und gibst Texte frei.',
  },
  {
    n: '04',
    dauer: 'Laufend',
    title: 'Messen & Nachschärfen',
    desc: 'Jeden Donnerstag Zahlen: Rankings, Zitierungen, Entwicklung. Was funktioniert, wird ausgebaut. Was nicht funktioniert, fliegt raus — statt es zwölf Monate lang schönzureden.',
    duTust: 'Liest das Reporting und sagst mir, was ankommt.',
  },
]

export default function GeoAgenturLangenfeld() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="geo-hero">
        <div className="geo-hero-glow" aria-hidden="true" />
        <div className="wrap">
          {/* Kopf – zentriert */}
          <div className="geo-hero-head">
            <div className="label fu">GEO Agentur · Langenfeld / NRW</div>
            <h1 className="fu d1">
              GEO Agentur aus Langenfeld.<br />
              <span className="geo-hl">Werde in KI-Suchen sichtbar.</span>
            </h1>
            <p className="geo-hero-sub fu d1">
              Bleibe zukunftssicher, indem du in KI-Suchen sichtbar wirst. Jetzt ist der Zeitpunkt,
              in dem du deine Konkurrenz nachhaltig abhängen kannst.
            </p>
          </div>

          {/* Links Video, rechts die drei Punkte */}
          <div className="geo-hero-split">
            <div className="geo-hero-vsl fu d2">
              <GeoVsl />
            </div>

            <div className="geo-hero-aside fu d2">
              <ul className="geo-hero-points">
                {heroPoints.map((p) => (
                  <li key={p.title}>
                    <span className="geo-point-icon" aria-hidden="true">
                      {/* Haken als gefüllte Form – läuft an beiden Enden spitz zu */}
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.6 12 L9.4 18.8 L21.4 4.6 L9.7 15.6 Z" />
                      </svg>
                    </span>
                    <div>
                      <strong>{p.title}</strong>
                      <span>{p.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="geo-hero-cta">
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn">
                  Kostenlose GEO-Analyse anfragen →
                </a>
                <p className="geo-hero-cta-note">Antwort in der Regel innerhalb von 24 Stunden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEWERTUNGEN (Trust, direkt nach Hero) ───────────── */}
      <section className="geo-reviews geo-light">
        <div className="wrap">
          <div className="geo-sec-head fu">
            <div className="label">Stimmen meiner Kunden</div>
            <h2>Was Kunden über die Zusammenarbeit sagen</h2>
            <p className="sec-intro">15+ verifizierte Bewertungen auf Google &amp; Fiverr — Ø 5,0 Sterne.</p>
          </div>
          <GeoReviews />
        </div>
      </section>

      {/* ── PROBLEM / VSL ──────────────────────────────────── */}
      <section className="geo-problem">
        <div className="wrap">
          <div className="geo-sec-head geo-sec-head--center fu">
            <div className="label">Das Problem</div>
            <h2>
              KI wird immer wichtiger.<br />
              <span className="geo-hl-soft">Und genau da liegt dein Vorsprung.</span>
            </h2>
            <p className="sec-intro">
              Immer mehr Menschen stellen ihre Fragen nicht mehr bei Google, sondern direkt einer KI.
              Wer dort als Quelle auftaucht, bekommt die Anfrage. Wer nicht, existiert nicht.
            </p>
          </div>


          <div className="geo-status-head fu">
            <p>Aktuell sieht es bei den meisten so aus:</p>
          </div>
          <div className="geo-status-grid">
            {statusQuo.map((s, i) => (
              <div key={s.n} className={`geo-status-card fu d${i}`}>
                <span className="geo-status-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="geo-status-footer fu d2">
            Das Ergebnis: Niemand findet deine Website — und die Kunden bleiben aus.
          </p>
        </div>
      </section>

      {/* ── LÖSUNG / FLIP CARDS ────────────────────────────── */}
      <section className="geo-loesung geo-light">
        <div className="wrap">
          <div className="geo-sec-head geo-sec-head--center fu">
            <div className="label">Die Lösung</div>
            <h2>So wirst du für KI-Systeme zitierfähig</h2>
            <p className="sec-intro">
              Ich fasse die technischen Wege bewusst knapp — mit dem langweiligen Kram will ich dir
              die Zeit nicht klauen. Wenn du es genau wissen willst: <strong>Klick auf die Kästchen.</strong>
            </p>
          </div>
          <GeoFlipCards />

          {/* Der Ablauf gehört inhaltlich an die Lösung: erst „was passiert",
              dann „wie läuft es ab". Deshalb dieselbe Sektion und derselbe
              helle Grund – ein Farbwechsel würde den Gedanken zerschneiden. */}
          <div className="geo-ablauf">
            <div className="geo-ablauf-head fu">
              <div className="label">Der Ablauf</div>
              <h3>Wie eine Zusammenarbeit aussieht</h3>
              <p>
                Kein Geheimnis, keine Blackbox. Vier Schritte, feste Zeiträume — und bei jedem
                steht dabei, was ich mache und was ich von dir brauche.
              </p>
            </div>

            <ol className="geo-ablauf-steps">
              {ablauf.map((s, i) => (
                <li key={s.n} className={`geo-ablauf-step fu d${i % 3}`}>
                  <div className="geo-ablauf-marker" aria-hidden="true">
                    <span className="geo-ablauf-num">{s.n}</span>
                  </div>
                  <div className="geo-ablauf-body">
                    <span className="geo-ablauf-dauer">{s.dauer}</span>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                    <p className="geo-ablauf-du">
                      <span>Du</span>
                      {s.duTust}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="geo-ablauf-footer fu d2">
              Erste Zitierungen sind meist nach 6 bis 12 Wochen sichtbar. Wer dir etwas anderes
              verspricht, verkauft dir etwas.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRACKING / PLATTFORM ───────────────────────────── */}
      <section className="geo-tracking">
        <div className="wrap">
          <div className="geo-sec-head fu">
            <div className="label">Tracking &amp; Reporting</div>
            <h2>Damit das für dich keine heiße Luft bleibt</h2>
            <p className="sec-intro">
              Alle Ergebnisse werden kontinuierlich getrackt. Jeden Donnerstag bekommst du ein
              Reporting: Rankings, Zitierungen, Entwicklung — in einer Plattform, die nur dir gehört.
            </p>
          </div>

          {/* Plattform-Mockup */}
          <div className="geo-platform fu d1">
            <div className="geo-platform-bar">
              <span className="geo-dot geo-dot--r" />
              <span className="geo-dot geo-dot--y" />
              <span className="geo-dot geo-dot--g" />
              <span className="geo-platform-url">timmschurig.app / dein-unternehmen</span>
            </div>
            <div className="geo-platform-body">
              <div className="geo-platform-stats">
                {[
                  { label: 'Keywords Top 10', value: '24', delta: '+7' },
                  { label: 'KI-Zitierungen', value: '18', delta: '+11' },
                  { label: 'Ø Position', value: '3,2', delta: '−4,1' },
                  { label: 'Sichtbarkeit', value: '68 %', delta: '+22' },
                ].map((s) => (
                  <div key={s.label} className="geo-stat">
                    <span className="geo-stat-label">{s.label}</span>
                    <span className="geo-stat-value">{s.value}</span>
                    <span className="geo-stat-delta">{s.delta}</span>
                  </div>
                ))}
              </div>

              <div className="geo-platform-cols">
                <div className="geo-platform-panel">
                  <div className="geo-panel-head">
                    <span>Ranking-Entwicklung</span>
                    <span className="geo-panel-badge">12 Wochen</span>
                  </div>
                  <div className="geo-chart" aria-hidden="true">
                    <svg viewBox="0 0 320 110" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="geoArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00bc7d" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#00bc7d" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,95 L32,90 L64,84 L96,74 L128,70 L160,56 L192,48 L224,36 L256,30 L288,20 L320,14 L320,110 L0,110 Z"
                        fill="url(#geoArea)"
                      />
                      <path
                        className="geo-chart-line"
                        d="M0,95 L32,90 L64,84 L96,74 L128,70 L160,56 L192,48 L224,36 L256,30 L288,20 L320,14"
                        fill="none"
                        stroke="#00bc7d"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="geo-platform-panel">
                  <div className="geo-panel-head">
                    <span>Zitierungen nach System</span>
                  </div>
                  <ul className="geo-cite-list">
                    {[
                      { name: 'ChatGPT', val: 72 },
                      { name: 'Perplexity', val: 58 },
                      { name: 'Google AI Overviews', val: 46 },
                      { name: 'Gemini', val: 31 },
                    ].map((c) => (
                      <li key={c.name}>
                        <span className="geo-cite-name">{c.name}</span>
                        <span className="geo-cite-bar">
                          <span className="geo-cite-fill" style={{ width: `${c.val}%` }} />
                        </span>
                        <span className="geo-cite-val">{c.val}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Selbst Texte anpassen */}
          <div className="geo-cms fu d2">
            <div className="geo-cms-text">
              <div className="label">Volle Kontrolle</div>
              <h3>Du willst Texte selbst anpassen?</h3>
              <p>
                Auch das ist kein Problem. Über deine Plattform änderst du Texte jederzeit selbst —
                ohne mich, ohne Wartezeit, ohne Technikkenntnisse.
              </p>
              <p>
                Damit die Änderungen nicht gegen die Optimierung arbeiten, bekommst du von mir einen
                <strong> Blueprint</strong>: klare Vorgaben, nach denen du deine Texte schreiben solltest.
              </p>
            </div>
            <ul className="geo-cms-list">
              {[
                'Texte direkt im Browser bearbeiten',
                'Änderungen sofort live — kein Entwickler nötig',
                'Blueprint mit Schreibvorgaben inklusive',
                'Bilder & Blogbeiträge selbst pflegen',
              ].map((item) => (
                <li key={item}>
                  <span className="geo-cms-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ÜBER MICH ──────────────────────────────────────── */}
      <section className="geo-ueber geo-light">
        <div className="wrap">
          <div className="geo-ueber-grid">
            <div className="geo-ueber-img fu">
              <Image
                src="/timm-cta.png"
                alt="Timm Schurig – SEO & GEO Freelancer aus Langenfeld"
                fill
                sizes="(max-width: 900px) 90vw, 380px"
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
              />
            </div>
            <div className="geo-ueber-text fu d1">
              <div className="label">Über mich</div>
              <h2>Kein Agentur-Overhead. Du sprichst direkt mit mir.</h2>
              <p>
                Ich bin Timm Schurig, SEO- und GEO-Freelancer aus Langenfeld. Seit über fünf Jahren
                beschäftige ich mich damit, warum manche Websites gefunden werden — und die meisten nicht.
              </p>
              <p>
                GEO ist gerade dabei, die Spielregeln zu verändern. Es gibt in Deutschland noch sehr
                wenige, die das ernsthaft anbieten. Genau deshalb ist jetzt der richtige Zeitpunkt:
                Was du heute aufbaust, holt deine Konkurrenz so schnell nicht mehr ein.
              </p>
              <p>
                Bei mir gibt es keine Account-Manager-Kette und keine Präsentationen um des Präsentierens
                willen. Du bekommst jemanden, der die Arbeit selbst macht — und dir sagt, was funktioniert
                und was nicht.
              </p>
              <div className="geo-ueber-facts">
                {[
                  { v: '5+', l: 'Jahre SEO' },
                  { v: '12+', l: 'Kundenprojekte' },
                  { v: '5,0', l: 'Ø Bewertung' },
                ].map((f) => (
                  <div key={f.l} className="geo-fact">
                    <span className="geo-fact-v">{f.v}</span>
                    <span className="geo-fact-l">{f.l}</span>
                  </div>
                ))}
              </div>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn geo-btn-dark">
                Lass uns sprechen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ──────────────────────────────────────────── */}
      <Tools />

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="geo-faq geo-light">
        <div className="wrap">
          <div className="geo-sec-head geo-sec-head--center fu">
            <div className="label">FAQ</div>
            <h2>Häufige Fragen zu GEO</h2>
          </div>
          <GeoFaq items={faqItems} />
        </div>
      </section>

      {/* ── FINALER CTA ────────────────────────────────────── */}
      <section className="geo-cta">
        <div className="wrap">
          <div className="geo-cta-box fu">
            <div className="label">Nächster Schritt</div>
            <h2>Werde sichtbar, bevor es alle machen.</h2>
            <p>
              In 20 Minuten schauen wir uns an, wo du heute in KI-Suchen stehst und was konkret
              möglich ist. Kostenlos, unverbindlich und ohne Verkaufsgespräch.
            </p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn">
              Kostenlose GEO-Analyse anfragen →
            </a>
            <div className="geo-cta-links">
              <Link href="/seo-freelancer">SEO-Freelancer für Agenturen</Link>
              <Link href="/blog">Blog lesen</Link>
              <Link href="/#leistungen">Alle Leistungen</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
