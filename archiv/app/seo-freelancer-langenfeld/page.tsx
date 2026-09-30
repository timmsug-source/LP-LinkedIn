import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Rezension from '@/components/Rezension'
import { BASE_URL } from '@/lib/jsonld'

/**
 * Lokale Money-Page: SEO Freelancer Langenfeld.
 *
 * ACHTUNG: Alles mit ⚠️ ist ungeprüft und muss vor dem Deploy bestätigt oder
 * ersetzt werden. Die übrigen Preise stammen aus deiner bestehenden
 * Preisübersicht auf der Startseite.
 */
const WA_HREF = `https://wa.me/4915229515030?text=${encodeURIComponent(
  'Hallo Timm, ich komme aus der Region und würde gerne über SEO für mein Unternehmen sprechen.'
)}`

/* Statt Tool-Logos wie auf der Startseite hier die vier Disziplinen – sie
   sagen auf einer Leistungsseite mehr aus als ein Techniklogo. Jede Kachel
   trägt ein eigenes Icon, damit sie nicht als reine Textpille wirkt. */
const disziplinen = [
  {
    name: 'SEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.2 15.2 21 21" />
      </svg>
    ),
  },
  {
    name: 'GEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.2l1.9 4.6 4.6 1.9-4.6 1.9L12 16.2l-1.9-4.6L5.5 9.7l4.6-1.9z" />
        <path d="M18.4 15.6l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
      </svg>
    ),
  },
  {
    name: 'Local SEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" />
      </svg>
    ),
  },
  {
    name: 'Technisches SEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
      </svg>
    ),
  },
]

const probleme = [
  {
    zitat: '„Wir stehen bei Google auf Seite drei."',
    text: 'Deine Wettbewerber tauchen bei den Suchbegriffen auf, die deine Kunden eingeben. Du nicht. Wer nicht auf der ersten Seite steht, existiert für die meisten Suchenden nicht.',
  },
  {
    zitat: '„Wir bekommen Besucher, aber keine Anfragen."',
    text: 'Traffic allein bringt nichts. Wenn die falschen Leute kommen oder die richtigen nicht wissen, was sie tun sollen, bleibt das Kontaktformular leer.',
  },
  {
    zitat: '„Wir wissen nicht, was unsere Website eigentlich macht."',
    text: 'Kein Reporting, keine Zahlen, kein Gefühl dafür, ob sich die Investition lohnt. Die Search Console ist eingerichtet – geöffnet hat sie zuletzt der Webdesigner.',
  },
  {
    zitat: '„ChatGPT empfiehlt uns nicht."',
    text: 'Immer mehr Menschen fragen KI-Assistenten nach Anbietern. Wenn deine Seite dort nicht als Quelle auftaucht, verlierst du Anfragen, ohne es in irgendeiner Statistik zu sehen.',
  },
  {
    zitat: '„Die letzte Agentur hat viel versprochen."',
    text: 'Monatliche Rechnung, PDF-Report mit 40 Diagrammen, keine spürbare Veränderung. Danach ist das Vertrauen in SEO erst einmal weg.',
  },
]

const pakete = [
  {
    name: 'SEO-Audit',
    preis: 'ab 799 €',
    zusatz: 'einmalig',
    empfohlen: false,
    text: 'Bestandsaufnahme deiner Website mit konkreter Maßnahmenliste. Ideal, wenn du erst wissen willst, wo du stehst.',
    punkte: [
      'Technische Analyse',
      'Keyword- und Wettbewerbsanalyse',
      'Prüfung der KI-Sichtbarkeit',
      'Priorisierte Maßnahmenliste',
      'Ergebnisbesprechung per Video-Call',
    ],
    ergebnis: 'Du weißt, was zu tun ist – und kannst es selbst umsetzen oder umsetzen lassen.',
  },
  {
    name: 'Lokale Sichtbarkeit',
    preis: 'ab 299 €',
    zusatz: '/ Monat',
    empfohlen: true,
    text: 'Für Handwerk, Praxen, Kanzleien und lokale Dienstleister, die vor Ort gefunden werden wollen.',
    punkte: [
      'Google-Unternehmensprofil laufend optimiert',
      'Lokale Landingpages',
      'Einheitliche Firmendaten in Verzeichnissen',
      'Bewertungsstrategie',
      'Monatliches Reporting',
      'Mindestlaufzeit 6 Monate',
    ],
    ergebnis: null,
  },
  {
    name: 'SEO & GEO Betreuung',
    preis: '⚠️ ab 499 €',
    zusatz: '/ Monat',
    empfohlen: false,
    text: 'Für Selbstständige und Unternehmen, die über Langenfeld hinaus sichtbar werden wollen.',
    punkte: [
      'Alles aus „Lokale Sichtbarkeit"',
      'Laufende Content-Optimierung',
      'Neue Inhalte nach Redaktionsplan',
      'GEO-Monitoring in ChatGPT, Gemini, Perplexity',
      'Monatlicher Strategie-Call',
      'Mindestlaufzeit 6 Monate',
    ],
    ergebnis: null,
  },
]

const ablauf = [
  {
    n: '1',
    titel: 'Erstgespräch',
    dauer: '30 Minuten, kostenlos',
    text: 'Wir sprechen über dein Angebot, deine Kunden und dein Ziel. Ich schaue mir vorab deine Website an und sage dir ehrlich, ob und wo ich Potenzial sehe. Wenn ich nicht der Richtige bin, sage ich das auch.',
  },
  {
    n: '2',
    titel: 'Analyse und Plan',
    dauer: 'Woche 1–2',
    text: 'Ich prüfe Technik, Inhalte, lokale Signale und KI-Sichtbarkeit. Du bekommst eine priorisierte Maßnahmenliste – verständlich formuliert, ohne Fachjargon.',
  },
  {
    n: '3',
    titel: 'Umsetzung',
    dauer: 'ab Woche 3',
    text: 'Ich arbeite die Liste ab, beginnend mit den Punkten, die am schnellsten wirken. Was ich brauche: Zugänge zu Website und Search Console sowie dein Fachwissen bei inhaltlichen Rückfragen.',
  },
  {
    n: '4',
    titel: 'Messen und nachschärfen',
    dauer: 'laufend',
    text: 'Monatliches Reporting mit den Zahlen, die tatsächlich etwas aussagen – plus Einordnung, was sie bedeuten. Bei der laufenden Betreuung zusätzlich ein Strategie-Call.',
  },
]

const faq = [
  {
    q: 'Was kostet ein SEO Freelancer in Langenfeld?',
    a: 'Meine laufende Betreuung startet bei 299 € im Monat, ein einmaliges Audit bei 799 €. Freelancer liegen generell etwa 30–50 % unter Agenturpreisen, weil weniger Overhead anfällt.',
    link: { href: '/blog/was-kostet-seo', text: 'Ausführliche Einordnung: Was kostet SEO' },
  },
  {
    q: 'Arbeitest du nur mit Unternehmen aus Langenfeld?',
    a: 'Nein. Der Schwerpunkt liegt im Rheinland, weil Vor-Ort-Termine dort einfach machbar sind. Die Zusammenarbeit läuft aber ohnehin größtenteils remote – Kunden aus dem ganzen deutschsprachigen Raum sind kein Problem.',
    link: null,
  },
  {
    q: 'Wie lange dauert es, bis ich Ergebnisse sehe?',
    a: 'Erste Veränderungen nach vier bis acht Wochen, belastbare Ergebnisse nach vier bis sechs Monaten. Lokale Verbesserungen im Google-Unternehmensprofil wirken oft schon nach zwei bis vier Wochen.',
    link: null,
  },
  {
    q: 'Was ist GEO und brauche ich das?',
    a: 'GEO steht für Generative Engine Optimization – Sichtbarkeit in KI-Systemen wie ChatGPT oder Perplexity. Ob du es brauchst, hängt davon ab, wie deine Kunden recherchieren. Bei beratungsintensiven Leistungen: ja.',
    link: { href: '/geo-agentur-langenfeld', text: 'Hintergrund: Was GEO konkret bedeutet' },
  },
  {
    q: 'Freelancer oder Agentur – was ist besser?',
    a: 'Kommt auf den Umfang an. Für Selbstständige und kleinere Unternehmen ist ein Freelancer meist schneller und günstiger. Bei sehr großen Projekten mit mehreren parallelen Gewerken hat eine Agentur Vorteile.',
    link: null,
  },
  {
    q: 'Gibt es eine Mindestlaufzeit?',
    a: 'Bei der monatlichen Betreuung sechs Monate. Kürzer ergibt fachlich keinen Sinn, weil SEO Vorlauf braucht. Das Audit ist ein einmaliges Projekt ohne Bindung.',
    link: null,
  },
  {
    q: 'Bekomme ich Zugriff auf meine eigenen Daten?',
    a: 'Selbstverständlich. Search Console, Analytics und alle erstellten Inhalte gehören dir – auch nach Ende der Zusammenarbeit.',
    link: null,
  },
]

export const metadata: Metadata = {
  title: 'SEO Freelancer Langenfeld – Sichtbarkeit bei Google & KI',
  description:
    'SEO Freelancer aus Langenfeld für Selbstständige und KMU: bessere Rankings bei Google und Sichtbarkeit in ChatGPT & Co. Transparente Preise, klarer Ablauf.',
  alternates: { canonical: `${BASE_URL}/seo-freelancer-langenfeld` },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${BASE_URL}/seo-freelancer-langenfeld`,
    title: 'SEO Freelancer Langenfeld – Sichtbarkeit bei Google & KI',
    description:
      'Freiberuflicher SEO aus Langenfeld für Selbstständige und KMU im Rheinland. Feste Preise, monatliches Reporting, ein Ansprechpartner.',
    images: [{ url: `${BASE_URL}/og-image-timm-schurig-zentriert.png`, width: 1200, height: 630, alt: 'SEO Freelancer Langenfeld – Timm Schurig' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/seo-freelancer-langenfeld#service`,
  name: 'SEO Freelancer Langenfeld – Timm Schurig',
  description:
    'Freiberufliche Suchmaschinenoptimierung aus Langenfeld für Selbstständige und kleine Unternehmen: technisches SEO, lokale Sichtbarkeit, Content und GEO.',
  url: `${BASE_URL}/seo-freelancer-langenfeld`,
  provider: { '@id': `${BASE_URL}/#person` },
  areaServed: ['Langenfeld', 'Monheim am Rhein', 'Hilden', 'Leverkusen', 'Solingen', 'Düsseldorf', 'Köln', 'NRW'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Zum Galkhausener Bach 72',
    addressLocality: 'Langenfeld',
    postalCode: '40764',
    addressRegion: 'Nordrhein-Westfalen',
    addressCountry: 'DE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO-Pakete',
    itemListElement: pakete.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      description: p.text,
      priceCurrency: 'EUR',
      // Nur der Startpreis – deshalb als Preisspanne mit offenem Ende.
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: p.preis.replace(/[^0-9]/g, ''),
        priceCurrency: 'EUR',
      },
    })),
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function SeoFreelancerLangenfeld() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="sfl-hero">
        {/* Gleiche Bildbehandlung wie auf der Startseite: freigestelltes
            Porträt über der rechten Hälfte, links weich ausgeblendet, damit
            der Text darüber lesbar bleibt. Unter 1024px entfällt es. */}
        <div className="hero-portrait" aria-hidden="true">
          <span className="hero-portrait-glow" />
          <Image
            src="/TS-Herobild-frontal.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        {/* Schweben um das Porträt wie die Logo-Kacheln auf der Startseite. */}
        <ul className="sfl-tags" aria-label="Meine Schwerpunkte">
          {disziplinen.map((d, i) => (
            <li key={d.name} className={`sfl-tag sfl-tag-${i + 1}`}>
              <span className="sfl-tag-icon" aria-hidden="true">{d.icon}</span>
              {d.name}
            </li>
          ))}
        </ul>

        <div className="wrap sfl-hero-inner">
          <div className="label">SEO · Langenfeld · Rheinland</div>
          <h1 className="sfl-h1">SEO Freelancer in Langenfeld</h1>
          <p className="sfl-sub">
            Ich sorge dafür, dass Selbstständige und kleine Unternehmen aus Langenfeld und dem
            Rheinland bei Google gefunden werden – und in ChatGPT, Gemini und Perplexity
            empfohlen werden.
          </p>
          <p className="sfl-text">
            Keine Agentur, kein Account Manager, keine Weitergabe an Praktikanten. Als
            freiberuflicher SEO in Langenfeld arbeite ich direkt an deinem Projekt – mit festen
            Preisen, monatlichen Reportings und einem Ansprechpartner, der auch ans Telefon geht.
          </p>

          <div className="sfl-ctas">
            <a href={WA_HREF} className="btn" target="_blank" rel="noopener noreferrer">
              Kostenloses Erstgespräch vereinbaren
            </a>
            <a href="#preise" className="btn-ghost">Preise ansehen</a>
          </div>

          <p className="sfl-trust">
            ⚠️ Seit 2021 selbstständig · SEO-Werkstudent bei toom Baumarkt · Langenfeld, NRW
          </p>
        </div>
      </section>

      {/* ── REZENSIONEN ── */}
      <Rezension />

      {/* ── PROBLEM ── */}
      <section className="sfl-problem">
        <div className="wrap">
          <div className="sfl-head">
            <div className="label">Das Problem</div>
            <h2>Deine Website ist online – aber es passiert nichts</h2>
            <p>
              Du hast in eine Website investiert. Sie sieht gut aus, sie ist fertig, sie steht.
              Nur: Es kommen keine Anfragen darüber.
            </p>
          </div>

          <div className="sfl-problem-grid">
            {probleme.map((p) => (
              <div key={p.zitat} className="sfl-problem-card">
                <h3>{p.zitat}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <p className="sfl-problem-fazit">
            Alle fünf Fälle haben dieselbe Ursache: Es fehlt eine Struktur, die Suchmaschinen und
            KI-Systeme verstehen – und ein Plan, in welcher Reihenfolge daran gearbeitet wird.
          </p>
        </div>
      </section>

      {/* ── LÖSUNG ── */}
      <section className="sfl-loesung">
        <div className="wrap">
          <div className="sfl-head">
            <div className="label">Die Lösung</div>
            <h2>Was ein SEO Freelancer aus Langenfeld anders macht</h2>
            <p>
              Ich arbeite an drei Ebenen gleichzeitig: an der Technik, an den Inhalten und an
              deiner Sichtbarkeit in KI-Systemen. Ohne die erste funktionieren die anderen beiden
              nicht.
            </p>
          </div>

          <div className="sfl-loesung-grid">
            <article className="sfl-block">
              <h3>Technisches Fundament</h3>
              <p>
                Ladezeit, mobile Darstellung, Indexierbarkeit, Seitenstruktur. Das ist die Basis,
                auf der alles andere aufbaut – und der Bereich, in dem die meisten Websites
                vermeidbare Fehler haben. Ich prüfe unter anderem die Core Web Vitals, die
                Überschriftenhierarchie und strukturierte Daten.
              </p>
              <Link href="/blog/unternehmenswebsite-aufbau">Wie eine gute Unternehmenswebsite aufgebaut ist</Link>
            </article>

            <article className="sfl-block">
              <h3>Lokale Sichtbarkeit</h3>
              <p>
                Für Betriebe in Langenfeld, Monheim, Hilden oder Leverkusen entscheidet sich
                vieles im Local Pack – der Kartenansicht über den Suchergebnissen.
                Google-Unternehmensprofil, einheitliche Firmendaten, echte Bewertungen und lokale
                Landingpages sind hier die Hebel.
              </p>
              <Link href="/blog/seo-langenfeld-lokale-unternehmen">SEO in Langenfeld: der Leitfaden für lokale Betriebe</Link>
            </article>

            <article className="sfl-block">
              <h3>Inhalte, die gefunden werden</h3>
              <p>
                Keine Textmasse, sondern gezielt die Seiten und Themen, nach denen deine Kunden
                tatsächlich suchen. Basis ist eine Keyword-Recherche mit echten Daten, nicht mit
                Bauchgefühl.
              </p>
            </article>

            <article className="sfl-block">
              <h3>GEO – Sichtbarkeit in KI-Systemen</h3>
              <p>
                Das ist der Teil, den die meisten Anbieter im Rheinland noch nicht auf dem Schirm
                haben. Ich optimiere deine Inhalte so, dass ChatGPT, Gemini und Perplexity sie als
                Quelle heranziehen – und prüfe monatlich, ob du bei den relevanten Fragen genannt
                wirst.
              </p>
              <Link href="/geo-agentur-langenfeld">Was GEO konkret bedeutet</Link>
            </article>
          </div>

          {/* Abgrenzung Freelancer vs. Agentur */}
          <div className="sfl-vergleich">
            <h3>Freelancer statt Agentur – was das für dich bedeutet</h3>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr><th></th><th>Bei mir</th><th>Typische Agentur</th></tr>
                </thead>
                <tbody>
                  <tr><td>Ansprechpartner</td><td>Ich, direkt</td><td>Account Manager</td></tr>
                  <tr><td>Wer arbeitet</td><td>Ich</td><td>wechselnde Teams</td></tr>
                  <tr><td>Reaktionszeit</td><td>meist am selben Tag</td><td>Ticketsystem</td></tr>
                  <tr><td>Stundensatz</td><td>ab 85 €</td><td>120–180 €</td></tr>
                  <tr><td>Kapazität</td><td>begrenzt</td><td>skalierbar</td></tr>
                  <tr><td>Vertretung bei Ausfall</td><td>eingeschränkt</td><td>vorhanden</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Ehrlich gesagt: Wenn du zehn Länderseiten parallel betreuen lassen willst, bist du
              bei einer Agentur besser aufgehoben. Für Selbstständige und Unternehmen bis etwa 50
              Mitarbeitende ist ein Freelancer meist die schnellere und günstigere Lösung.
            </p>
          </div>
        </div>
      </section>

      {/* ── PREISE ── */}
      <section className="sfl-preise" id="preise">
        <div className="wrap">
          <div className="sfl-head">
            <div className="label">Preise</div>
            <h2>Transparente Preise – ohne Angebotsanfrage</h2>
            <p>
              Die meisten Anbieter nennen keine Preise. Ich halte das für die falsche
              Entscheidung: Du sollst vorher wissen, worauf du dich einlässt.
            </p>
          </div>

          <div className="sfl-preis-grid">
            {pakete.map((p) => (
              <div key={p.name} className={`sfl-preis-card${p.empfohlen ? ' sfl-preis-card--top' : ''}`}>
                {p.empfohlen && <span className="sfl-preis-badge">Für Betriebe vor Ort</span>}
                <h3>{p.name}</h3>
                <div className="sfl-preis-wert">
                  <strong>{p.preis}</strong>
                  <span>{p.zusatz}</span>
                </div>
                <p className="sfl-preis-text">{p.text}</p>
                <ul>
                  {p.punkte.map((punkt) => <li key={punkt}>{punkt}</li>)}
                </ul>
                {p.ergebnis && <p className="sfl-preis-ergebnis">{p.ergebnis}</p>}
              </div>
            ))}
          </div>

          <p className="sfl-preis-stunde">
            <strong>Stundenweise Beratung: ab 85 € / Stunde</strong> – für punktuelle Fragen,
            Schulungen oder ein Second Opinion zu einem fremden Angebot. Alle Preise zzgl. USt.
            Was hinter den Zahlen steckt, habe ich{' '}
            <Link href="/blog/was-kostet-seo">hier ausführlich aufgeschlüsselt</Link>.
          </p>

          <div className="sfl-ehrlich">
            <h3>Wann sich das für dich nicht lohnt</h3>
            <p>
              Wenn du in vier Wochen Umsatz brauchst, wenn dein durchschnittlicher Auftragswert
              sehr niedrig ist oder wenn deine Website aktuell niemanden zur Anfrage bewegt – dann
              sage ich dir das im Erstgespräch. SEO ist nicht für jeden das richtige Werkzeug.
            </p>
            <Link href="/blog/ist-seo-noch-sinnvoll">Ist SEO überhaupt noch sinnvoll? →</Link>
          </div>
        </div>
      </section>

      {/* ── ABLAUF ── */}
      <section className="sfl-ablauf">
        <div className="wrap">
          <div className="sfl-head">
            <div className="label">Ablauf</div>
            <h2>So läuft die Zusammenarbeit ab</h2>
            <p>Kein Vertrieb, keine Präsentation, kein Nachfassen. Vier Schritte.</p>
          </div>

          <ol className="sfl-schritte howto">
            {ablauf.map((s) => (
              <li key={s.n} className="sfl-schritt">
                <span className="sfl-schritt-num">{s.n}</span>
                <div>
                  <h3>{s.titel} <em>{s.dauer}</em></h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="sfl-zeit">
            Erste Bewegungen sind meist nach vier bis acht Wochen sichtbar, belastbare Ergebnisse
            nach vier bis sechs Monaten. Im Local Pack geht es oft schneller.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sfl-cta">
        <div className="wrap">
          <h2>Lass uns 30 Minuten sprechen</h2>
          <p>
            Du bekommst eine ehrliche Einschätzung, ob sich SEO für dein Unternehmen lohnt – und
            wenn ja, womit ich anfangen würde. Kein Verkaufsgespräch, keine Präsentation.
          </p>
          <p className="sfl-cta-orte">
            Als SEO Freelancer aus Langenfeld arbeite ich vor allem mit Kunden aus dem Rheinland:
            Langenfeld, Monheim, Hilden, Leverkusen, Solingen, Düsseldorf und Köln.
            Remote-Zusammenarbeit deutschlandweit ist ebenso möglich.
          </p>
          <div className="sfl-cta-links">
            <a href={WA_HREF} className="btn" target="_blank" rel="noopener noreferrer">
              Termin über WhatsApp
            </a>
            <a href="mailto:mail@timmschurig.com" className="btn-ghost">mail@timmschurig.com</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sfl-faq">
        <div className="wrap">
          <div className="sfl-head">
            <div className="label">Häufige Fragen</div>
            <h2>Was Kunden vorher wissen wollen</h2>
          </div>

          <div className="sfl-faq-liste">
            {faq.map((f) => (
              <details key={f.q} className="sfl-faq-item">
                <summary>{f.q}</summary>
                <div className="sfl-faq-antwort">
                  <p>{f.a}</p>
                  {f.link && <Link href={f.link.href}>{f.link.text}</Link>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
