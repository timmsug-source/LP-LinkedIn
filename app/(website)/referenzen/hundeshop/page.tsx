import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Rezension from '@/components/Rezension'
import { BASE_URL, breadcrumbSchema } from '@/lib/jsonld'

const WA_HREF = `https://wa.me/4915229515030?text=${encodeURIComponent(
  'Hallo Timm, ich habe deine Case Study zum Hundeshop gelesen. Ich hätte ein ähnliches Projekt – können wir kurz sprechen?'
)}`

/**
 * Case Study: Onlineshop für Hundeartikel (anonymisiert).
 *
 * BELEGT sind ausschließlich die Zahlen aus der Google Search Console des
 * Projekts – sie stehen unten in `zahlen` und `kiZahl`.
 *
 * ACHTUNG: Alles mit ⚠️ ist Platzhalter. Diese Angaben kenne ich nicht und
 * habe sie bewusst NICHT plausibel erfunden. Vor dem Deploy ersetzen.
 */
const projekt = {
  zeitraum: 'seit Dezember 2024',
  umfang: 'Aufbau des Shops und SEO',
  rolle: 'Alleinverantwortlich – von der Recherche bis zur laufenden Betreuung',
}

/**
 * Was der Auftrag umfasste. Bewusst zweigeteilt: Der Shop wurde neu gebaut,
 * SEO lief nicht als nachgelagertes Projekt, sondern von Anfang an mit.
 */
const umfang = [
  {
    bereich: 'Aufbau des Shops',
    punkte: [
      'Shop von Grund auf neu aufgesetzt – es gab vorher nichts',
      'Kategorie- und Seitenstruktur entlang der Suchnachfrage geschnitten',
      'Sprechende URLs und eine flache, nachvollziehbare Navigation',
      'Technische Basis: Ladezeit, mobile Darstellung, strukturierte Daten',
    ],
  },
  {
    bereich: 'SEO von Anfang an',
    punkte: [
      'Keyword-Recherche vor dem ersten Entwurf statt Optimierung im Nachhinein',
      'OnPage-Optimierung der Kategorie- und Produktseiten',
      'Google-Unternehmensprofil und Grundlagen der lokalen Sichtbarkeit',
      'Laufendes Monitoring der Rankings und Nachschärfen der Inhalte',
    ],
  },
]

const zahlen = [
  { wert: '26.977', label: 'Impressionen', hinweis: 'in der Google-Suche, letzte 12 Monate' },
  { wert: '4.975', label: 'Klicks', hinweis: 'aus der organischen Suche, letzte 12 Monate' },
  { wert: '18,4 %', label: 'Klickrate', hinweis: 'Anteil der Impressionen, die zu einem Klick wurden' },
  { wert: '11,7', label: 'Ø Position', hinweis: 'über alle Suchbegriffe hinweg' },
]

const kiZahl = { wert: '430', label: 'Impressionen in KI-Antworten', hinweis: 'letzte 3 Monate, Search-Console-Bericht „Auf generativer KI basierende Funktion"' }

const ausgangslage = [
  'Neugründung: Es gab keinen Shop, keine Domain-Historie und keine Sichtbarkeit – der Start war eine leere Seite.',
  'Damit fehlte auch jeder Vertrauensvorschuss bei Google: keine Rankings, keine Backlinks, keine Bestellhistorie.',
  'Das Ziel war von Anfang an doppelt: Platzierungen bei Google – und darüber messbare Umsätze, nicht nur Besucher.',
]

const vorgehen = [
  {
    n: '01',
    titel: 'SEO-Recherche',
    text: 'Vor der ersten Seite die Frage: Wonach wird im Sortiment überhaupt gesucht, mit welchen Begriffen und in welchem Umfang? Aus der Antwort ist die Struktur des Shops entstanden – nicht umgekehrt.',
  },
  {
    n: '02',
    titel: 'Produkte eingepflegt',
    text: 'Das gesamte Sortiment angelegt: Produkte, Varianten und Kategorien so geschnitten, dass sie der Nachfrage aus der Recherche folgen statt einer internen Sortimentslogik.',
  },
  {
    n: '03',
    titel: 'Texte erstellt',
    text: 'Kategorie- und Produkttexte geschrieben, die zwei Aufgaben gleichzeitig erfüllen: die Kaufentscheidung stützen und die Begriffe abdecken, nach denen tatsächlich gesucht wird.',
  },
  {
    n: '04',
    titel: 'Webdesign',
    text: 'Erst jetzt das Design – gebaut um fertige Inhalte herum, statt Texte nachträglich in ein fertiges Layout zu pressen. Diese Reihenfolge erspart später die meiste Nacharbeit.',
  },
  {
    n: '05',
    titel: 'Livegang',
    text: 'Vor dem Start die technische Abnahme: Ladezeit, mobile Ansicht, saubere Überschriftenstruktur, strukturierte Daten, Indexierung freigegeben und die Search Console eingerichtet.',
  },
  {
    n: '06',
    titel: 'Laufende Betreuung',
    text: 'Seitdem im Blick: Welche Suchbegriffe kommen dazu, welche Seiten tragen den Umsatz, wo lohnt Nachschärfen. Der Shop wird weiterentwickelt, statt nach dem Start liegen zu bleiben.',
  },
]

export const metadata: Metadata = {
  title: 'Case Study: Onlineshop für Hundeartikel',
  description:
    'Wie ein Onlineshop für Hundeartikel in zwölf Monaten auf 26.977 Impressionen und 4.975 Klicks aus der organischen Suche kam – inklusive Sichtbarkeit in KI-Antworten.',
  alternates: { canonical: `${BASE_URL}/referenzen/hundeshop` },
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: `${BASE_URL}/referenzen/hundeshop`,
    title: 'Case Study: Onlineshop für Hundeartikel',
    description:
      '26.977 Impressionen, 4.975 Klicks, 18,4 % Klickrate – und sichtbar in KI-Antworten. Der Ablauf hinter dem Projekt.',
    images: [{ url: `${BASE_URL}/og-image-timm-schurig-zentriert.png`, width: 1200, height: 630, alt: 'Case Study Onlineshop für Hundeartikel' }],
  },
}

export default function HundeshopCaseStudy() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: 'Startseite', url: BASE_URL },
    { name: 'Referenzen', url: `${BASE_URL}/referenzen/hundeshop` },
    { name: 'Onlineshop für Hundeartikel', url: `${BASE_URL}/referenzen/hundeshop` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }}
      />

      {/* ── HERO ── */}
      <section className="ref-hero">
        <div className="wrap">
          <div className="ref-breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">/</span>
            <span>Referenz</span>
          </div>

          <div className="label">Case Study · E-Commerce</div>
          <h1 className="ref-title">Onlineshop für Hundeartikel</h1>
          <p className="ref-sub">
            Ein Shop, den ich aufgebaut und über die Suche sichtbar gemacht habe. Der Kunde
            möchte nicht namentlich genannt werden – die Zahlen stammen unverändert aus der
            Google Search Console des Projekts.
          </p>

          <div className="ref-meta">
            <span><strong>Zeitraum:</strong> {projekt.zeitraum}</span>
            <span><strong>Umfang:</strong> {projekt.umfang}</span>
            <span><strong>Rolle:</strong> {projekt.rolle}</span>
          </div>
        </div>
      </section>

      {/* ── ZAHLEN ── */}
      <section className="ref-section ref-section--light">
        <div className="wrap">
          <div className="ref-head">
            <div className="label">Ergebnis</div>
            <h2>Zwölf Monate organische Suche</h2>
            <p>
              Alle Werte aus der Google Search Console, Zeitraum der letzten zwölf Monate,
              Suchtyp Web.
            </p>
          </div>

          <div className="ref-zahlen">
            {zahlen.map((z) => (
              <div key={z.label} className="ref-zahl">
                <span className="ref-zahl-wert">{z.wert}</span>
                <span className="ref-zahl-label">{z.label}</span>
                <p>{z.hinweis}</p>
              </div>
            ))}
          </div>

          <figure className="ref-bild">
            <Image
              src="/hundeshop-search-console-12-monate.png"
              alt="Google Search Console des Shops: 4.975 Klicks und 26.977 Impressionen über zwölf Monate, mit steigendem Verlauf ab Frühjahr"
              width={1600}
              height={638}
              sizes="(max-width: 900px) 92vw, 1000px"
            />
            <figcaption>
              Google Search Console, Suchtyp Web, letzte zwölf Monate. Blau die Klicks,
              violett die Impressionen.
            </figcaption>
          </figure>

          <p className="ref-einordnung">
            Die Klickrate von 18,4 % liegt deutlich über dem, was eine durchschnittliche
            Position von 11,7 normalerweise erwarten lässt. Der Grund ist die Zusammensetzung
            der Suchanfragen: Viele Nutzer suchen bereits konkret nach Produkten oder nach dem
            Shop selbst – und klicken dann auch.
          </p>
        </div>
      </section>

      {/* ── PROJEKT: UMFANG, AUSGANGSLAGE, VORGEHEN ── */}
      <section className="ref-section">
        <div className="wrap">
          <div className="ref-head">
            <div className="label">Projektumfang</div>
            <h2>Was zu diesem Projekt gehörte</h2>
            <p>
              Zwei Bereiche, die üblicherweise getrennt vergeben werden – hier lagen sie in
              einer Hand. Genau das ist der Grund, warum SEO nicht nachträglich draufgesetzt
              werden musste, sondern die Struktur des Shops von Beginn an bestimmt hat.
            </p>
          </div>

          <div className="ref-umfang">
            {umfang.map((u) => (
              <div key={u.bereich} className="ref-umfang-block">
                <h3>{u.bereich}</h3>
                <ul>
                  {u.punkte.map((punkt) => <li key={punkt}>{punkt}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <p className="ref-umfang-note">
            Nicht Teil des Auftrags waren Produktfotografie, Sortimentsauswahl und der
            operative Betrieb des Shops.
          </p>

          <div className="ref-vorgehen">
            <div className="ref-head ref-head--klein">
              <div className="label">Ausgangslage</div>
              <h3>Wo das Projekt gestartet ist</h3>
            </div>
            <ul className="ref-liste">
              {ausgangslage.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>

          <div className="ref-vorgehen">
            <div className="ref-head ref-head--klein">
              <div className="label">Vorgehen</div>
              <h3>Was ich gemacht habe</h3>
            </div>
            <ol className="ref-schritte">
              {vorgehen.map((s) => (
                <li key={s.n} className="ref-schritt">
                  <span className="ref-schritt-num">{s.n}</span>
                  <div>
                    <h4>{s.titel}</h4>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── KI-SICHTBARKEIT ── */}
      <section className="ref-section ref-section--light">
        <div className="wrap">
          <div className="ref-head">
            <div className="label">KI-Sichtbarkeit</div>
            <h2>Auch dort sichtbar, wo nicht mehr geklickt wird</h2>
            <p>
              Seit 2025 weist die Search Console aus, wie oft eine Seite in KI-generierten
              Antworten erscheint. Für diesen Shop sieht das so aus:
            </p>
          </div>

          <div className="ref-ki">
            <div className="ref-ki-wert">
              <span>{kiZahl.wert}</span>
              <strong>{kiZahl.label}</strong>
              <p>{kiZahl.hinweis}</p>
            </div>
            <div className="ref-ki-text">
              <p>
                Die Zahl ist gemessen an der klassischen Suche klein – und trotzdem der
                interessantere Wert. Sie zeigt, dass der Shop in generativen Antworten
                überhaupt als Quelle vorkommt. Genau dort entscheidet sich in den nächsten
                Jahren, wer noch gefunden wird.
              </p>
              <p>
                Bislang ist dieser Wert ein Nebenprodukt guter SEO-Arbeit – gezielt optimiert
                wurde dafür noch nichts. Genau das ist der nächste Schritt, den wir für diesen
                Shop angehen: <Link href="/geo-agentur-langenfeld">Generative Engine
                Optimization</Link>, also Inhalte gezielt so aufzubereiten, dass KI-Systeme sie
                als Quelle heranziehen.
              </p>
            </div>
          </div>

          <figure className="ref-bild">
            <Image
              src="/hundeshop-ki-impressionen.png"
              alt="Search-Console-Bericht „Auf generativer KI basierende Funktion“: 430 Impressionen in KI-Antworten über drei Monate"
              width={1600}
              height={678}
              sizes="(max-width: 900px) 92vw, 1000px"
            />
            <figcaption>
              Der Bericht „Auf generativer KI basierende Funktion“ in der Search Console –
              noch als Beta gekennzeichnet, Zeitraum drei Monate.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ref-cta">
        <div className="wrap">
          <h2>Ähnliches Projekt im Kopf?</h2>
          <p>
            Schreib mir kurz, worum es geht. Ich sage dir ehrlich, ob und in welchem Rahmen
            sich das lohnt – auch wenn die Antwort nein lautet.
          </p>
          <div className="ref-cta-links">
            <a href={WA_HREF} className="btn" target="_blank" rel="noopener noreferrer">
              Projekt anfragen
            </a>
            <Link href="/blog" className="btn-ghost">Zum Blog</Link>
          </div>
        </div>
      </section>

      {/* Bewertungen wie auf der Startseite – heller Grund, schließt sauber an
          den dunklen CTA an. */}
      <Rezension />

      <Footer />
    </>
  )
}
