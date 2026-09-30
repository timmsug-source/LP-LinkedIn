import type { Metadata } from 'next'
import Image from 'next/image'
import { BASE_URL } from '@/lib/jsonld'
import Link from 'next/link'
import AuditFormular from '@/components/AuditFormular'
import BuchenKnopf from '@/components/BuchenKnopf'
import Kundenwebsites from '@/components/Kundenwebsites'
import V2Footer from '@/components/V2Footer'
import AblaufStapel from '@/components/AblaufStapel'
import KontaktBuchung from '@/components/KontaktBuchung'

/**
 * Lokale Leistungsseite: SEO Freelancer Langenfeld.
 *
 * Hero und Streifen nutzen dieselben Klassen wie die Startseite – das
 * Porträt steht auch hier auf der Oberkante des Streifens.
 */
const TITEL = 'SEO Freelancer Langenfeld – Sichtbarkeit bei Google & KI'
const BESCHREIBUNG =
  'SEO Freelancer aus Langenfeld für Selbstständige und KMU: bessere Rankings bei Google und Sichtbarkeit in ChatGPT & Co. Feste Preise, klarer Ablauf.'
const URL = `${BASE_URL}/seo-freelancer-langenfeld`

export const metadata: Metadata = {
  title: TITEL,
  description: BESCHREIBUNG,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: URL,
    title: TITEL,
    description:
      'Freiberuflicher SEO aus Langenfeld für Selbstständige und KMU im Rheinland. Feste Preise, monatliches Reporting, ein Ansprechpartner.',
    images: [{ url: `${BASE_URL}/og-image-timm-schurig-zentriert.png`, width: 1200, height: 630, alt: 'SEO Freelancer Langenfeld – Timm Schurig' }],
  },
}

/* Strukturierte Daten zur Leistung – übernommen von der früheren
   Langenfeld-Seite, ohne den Preiskatalog (die Pakete gibt es hier nicht). */
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${URL}#service`,
  name: 'SEO Freelancer Langenfeld – Timm Schurig',
  description:
    'Freiberufliche Suchmaschinenoptimierung aus Langenfeld für Selbstständige und kleine Unternehmen: technisches SEO, lokale Sichtbarkeit, Content und GEO.',
  url: URL,
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
}

/* Unter dem Hero: was für einen Betrieb aus der Region zählt – wo ich arbeite,
   was andere sagen, mit wem man es zu tun hat und wo man gefunden wird. */
const STREIFEN = [
  { titel: 'Vor Ort im Rheinland', text: 'Langenfeld, Monheim, Hilden, Leverkusen, Solingen, Düsseldorf und Köln.' },
  { titel: 'Ein Ansprechpartner', text: 'Du sprichst mit dem, der auch umsetzt – ohne Account Manager.' },
  { titel: 'Kurze Wege', text: 'Antwort meist am selben Tag statt Ticketsystem.' },
  { titel: 'Deine Daten bleiben deine', text: 'Search Console, Analytics und Inhalte gehören dir – auch danach.' },
]

/* Chips um das Porträt. „5,0" und „Google/KI" standen vorher im Streifen –
   dort sind sie jetzt durch andere Punkte ersetzt, damit auf einem Bildschirm
   nichts doppelt steht. */
const CHIPS = [
  {
    text: 'Langenfeld',
    pos: 'v2-sfl-chip--1',
    icon: <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11zM12 12.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z" />,
  },
  {
    text: 'Google',
    pos: 'v2-sfl-chip--2',
    icon: <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM15.2 15.2 21 21" />,
  },
  {
    text: 'ChatGPT & Co.',
    pos: 'v2-sfl-chip--3',
    icon: <path d="M12 3.2l1.9 4.6 4.6 1.9-4.6 1.9L12 16.2l-1.9-4.6L5.5 9.7l4.6-1.9zM18.4 15.6l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />,
  },
  {
    text: '5,0 Sterne',
    pos: 'v2-sfl-chip--4',
    icon: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />,
  },
]

/* Für wen SEO passt. Bewusst an Situationen festgemacht statt an Branchen –
   „Handwerker" trifft sonst genauso den, für den es sich nicht lohnt. */
const PASST = [
  { titel: 'Du wirst über Google gesucht', text: 'Es gibt Suchanfragen nach deiner Leistung – lokal oder deutschlandweit.' },
  { titel: 'Ein Kunde ist dir viel wert', text: 'Bei höheren Auftragswerten rechnet sich jede zusätzliche Anfrage schnell.' },
  { titel: 'Du denkst in Jahren, nicht in Wochen', text: 'SEO wirkt langsam, dafür bleibt die Sichtbarkeit – anders als bezahlte Anzeigen.' },
  { titel: 'Du hast eine eigene Website', text: 'Oder bist bereit, eine zu bauen. Ohne eigene Seite gibt es nichts zu optimieren.' },
  { titel: 'Du arbeitest in einer Region', text: 'Wer Kunden aus Langenfeld, Düsseldorf oder Köln sucht, hat es bei lokalen Suchen leichter als bundesweite Anbieter.' },
]

const PASST_NICHT = [
  { titel: 'Du brauchst sofort Aufträge', text: 'Die ersten Ergebnisse kommen nach Monaten. Für nächste Woche sind Anzeigen der bessere Weg.' },
  { titel: 'Niemand sucht nach deinem Angebot', text: 'Bei etwas völlig Neuem gibt es noch keine Nachfrage – die muss anders geweckt werden.' },
  { titel: 'Du verkaufst nur über Empfehlungen', text: 'Läuft dein Geschäft über persönliche Netzwerke, ist dein Geld dort oft besser angelegt.' },
  { titel: 'Du suchst eine einmalige Optimierung', text: 'SEO ist laufende Arbeit. Einmal aufgesetzt und nie wieder angefasst bringt wenig.' },
]

/* Branchen für die Wischleiste. Jede mit einem Beispiel, wie danach gesucht
   wird – das macht abstraktes „SEO" sofort greifbar. Später bekommt jede
   Branche eine eigene Seite, dann werden aus den Karten Links. */
const BRANCHEN = [
  { name: 'Handwerk', bild: '/Branche-Handwerk.webp', beispiel: '„Elektriker Langenfeld"', icon: <path d="M14.7 6.3a4 4 0 0 0 5.2 5.2l-8.4 8.4a2.5 2.5 0 0 1-3.5-3.5zM4 4l3.5 3.5M4 9h4" /> },
  { name: 'Ärzte & Praxen', bild: '/Branche-Praxis.webp', beispiel: '„Zahnarzt in der Nähe"', icon: <path d="M12 5v14M5 12h14" /> },
  { name: 'Anwälte & Steuerberater', bild: '/Branche-Anwalt.webp', beispiel: '„Steuerberater Monheim"', icon: <path d="M12 3v18M5 7h14M7 7l-3 6h6zM17 7l3 6h-6z" /> },
  { name: 'Physio & Therapie', bild: '/Branche-Physio.webp', beispiel: '„Physiotherapie Hilden"', icon: <path d="M20.8 7.6a4.6 4.6 0 0 0-7.9-2.6L12 6l-.9-1a4.6 4.6 0 1 0-6.6 6.4l7.5 7.4 7.5-7.4c.9-.9 1.3-2 1.3-3.8z" /> },
  { name: 'Fitness & Sport', bild: '/Branche-Fitness.webp', beispiel: '„Fitnessstudio Leverkusen"', icon: <path d="M4 9v6M8 6v12M16 6v12M20 9v6M8 12h8" /> },
  { name: 'Restaurants & Cafés', bild: '/Branche-Restaurant.webp', beispiel: '„Italiener Langenfeld"', icon: <path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10M17 3c-1.5 1-2 3-2 5s.5 3 2 3v10" /> },
  { name: 'Immobilien', bild: '/Branche-Immobilien.webp', beispiel: '„Makler Düsseldorf Süd"', icon: <path d="M4 10.5 12 4l8 6.5V20H4zM10 20v-6h4v6" /> },
  { name: 'Auto & Werkstatt', bild: '/Branche-Autowerkstatt.webp', beispiel: '„Werkstatt in meiner Nähe"', icon: <path d="M4 16v-3l2-5h12l2 5v3M4 16h16M7 16v2M17 16v2M7.5 12.5h2M14.5 12.5h2" /> },
  { name: 'Coaches & Berater', bild: '/Branche-Berater.webp', beispiel: '„Business Coach NRW"', icon: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20a7.5 7.5 0 0 1 15 0" /> },
  { name: 'Onlineshops', bild: '/Branche-Onlineshop.webp', beispiel: '„[Produkt] online kaufen"', icon: <path d="M4 7h16l-1.5 12h-13zM9 7V5.5a3 3 0 0 1 6 0V7" /> },
  { name: 'Kosmetik & Friseur', bild: '/Branche-Friseur.webp', beispiel: '„Friseur Solingen"', icon: <path d="M7.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM9.5 7.5 20 18M9.5 16.5 20 6" /> },
  { name: 'Bau & Garten', bild: '/Branche-Garten.webp', beispiel: '„Garten- und Landschaftsbau Köln"', icon: <path d="M12 21v-7M12 14c0-3.9 3.1-7 7-7 0 3.9-3.1 7-7 7zM12 14c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6z" /> },
]

/* Der Weg von der Suche bis zur Anfrage. Vier Stufen statt einer Liste:
   Sichtbarkeit allein bringt Besucher, erst die letzten beiden Stufen machen
   daraus Kunden – das soll die Reihenfolge sichtbar machen.

   Die Grafiken stammen aus Grafiken/Customer Journey. Sie sind als Markup
   nachgebaut statt eingebettet: So erben sie Schrift und Farben der Seite und
   passen sich der Kartenbreite an. Die ersten beiden tragen die Akzentfarbe
   (Sichtbarkeit), die letzten beiden sind neutral (Kundengewinnung). */
const PFEIL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

const STERN = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
)

const WEG = [
  {
    stufe: 'Sichtbarkeit',
    titel: 'Gefunden werden',
    text: 'Deine Seite taucht dort auf, wo gesucht wird: bei Google, in der Karte und in KI-Antworten.',
    grafik: (
      <div className="v2-cj v2-cj--suche">
        <svg className="v2-cj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <span className="v2-cj-text">
          Webdesign NRW
          {/* Der blinkende Strich macht aus dem Feld eine Eingabe, die gerade
              passiert – ohne ihn wäre es nur ein Suchfeld. */}
          <i className="v2-cj-cursor" aria-hidden="true" />
        </span>
        <span className="v2-cj-knopf" aria-hidden="true">{PFEIL}</span>
      </div>
    ),
  },
  {
    stufe: 'Sichtbarkeit',
    titel: 'Angeklickt werden',
    text: 'Zwischen zehn Treffern entscheiden Titel, Beschreibung und Bewertungen, wer den Klick bekommt.',
    grafik: (
      <div className="v2-cj v2-cj--treffer">
        <span className="v2-cj-rang" aria-hidden="true">1</span>
        <div className="v2-cj-treffer-text">
          <span className="v2-cj-titel">Dein Unternehmen – Startseite</span>
          <span className="v2-cj-zeile" aria-hidden="true" />
        </div>
        <svg className="v2-cj-zeiger" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /></svg>
      </div>
    ),
  },
  {
    stufe: 'Kundengewinnung',
    titel: 'Überzeugt werden',
    text: 'In den ersten Sekunden muss klar sein, was du machst, für wen – und warum ausgerechnet du.',
    grafik: (
      <div className="v2-cj v2-cj--bewertung">
        <svg className="v2-cj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
        <span className="v2-cj-trenner" aria-hidden="true" />
        <span className="v2-cj-sterne" aria-hidden="true">{[0, 1, 2, 3, 4].map((n) => <span key={n}>{STERN}</span>)}</span>
        <span className="v2-cj-note">4,9</span>
      </div>
    ),
  },
  {
    stufe: 'Kundengewinnung',
    titel: 'Anfrage bekommen',
    text: 'Ein klarer nächster Schritt: Formular, WhatsApp oder Anruf – ohne Umweg und ohne Hürde.',
    grafik: (
      <div className="v2-cj v2-cj--anfrage">
        <svg className="v2-cj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        <span className="v2-cj-text">Anfrage senden</span>
        <span className="v2-cj-knopf" aria-hidden="true">{PFEIL}</span>
      </div>
    ),
  },
]

/* Gleiche Zahlen und Redesign-Punkte wie auf der Startseite, damit beide
   Seiten dasselbe belegen. Quelle: Case Study zum Hundeshop (archiviert unter
   archiv/app/referenzen/hundeshop).

   ⚠️ Hinweis: Die Case Study nannte den Kunden bewusst nicht beim Namen.
   Hier steht er namentlich – das sollte mit dem Kunden abgestimmt sein. */
const SHORT_FACTS = [
  { wert: '26.977', label: 'Impressionen' },
  { wert: '4.975', label: 'Klicks' },
  { wert: '18,4 %', label: 'Klickrate' },
  { wert: '430', label: 'in KI-Antworten' },
]

/* Was sich beim Redesign von Resilient durchs Leben konkret geändert hat. */
const REDESIGN_PUNKTE = [
  {
    titel: 'Navigation',
    vorher: 'gebogene Schrift im Bild, vier Ziele ohne Reihenfolge.',
    nachher: 'feste Navigationsleiste mit fünf Punkten, Telefon und Terminbuchung.',
  },
  {
    titel: 'Inhalt',
    vorher: 'Name, Titel und ein Slogan – keine Beschreibung der Leistungen.',
    nachher: 'Leistungen im Titel, Einleitungstext, Qualifikation, Wartezeit und Stundensatz.',
  },
  {
    titel: 'Handlung',
    vorher: 'kein Button, Kontakt nur als kleiner Link unten im Bild.',
    nachher: '„Erstgespräch vereinbaren" und „Leistungen ansehen" direkt im ersten Bildschirm.',
  },
]

/* Häufige Fragen. Die ersten sieben stammen aus /seo-freelancer-langenfeld
   (Preise aus der Preisübersicht der Startseite), die letzte ist neu und
   beantwortet die typische Frage lokaler Betriebe nach dem Unternehmensprofil. */
const FAQ = [
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
    q: 'Brauche ich ein Google-Unternehmensprofil?',
    a: 'Für lokale Suchen ja. Das Profil entscheidet mit, ob du bei Suchen wie „Elektriker Langenfeld" in der Karte und den lokalen Ergebnissen auftauchst. Einrichtung und Pflege gehören bei lokalem SEO deshalb dazu.',
    link: null,
  },
  {
    q: 'Was ist GEO und brauche ich das?',
    a: 'GEO steht für Generative Engine Optimization – Sichtbarkeit in KI-Systemen wie ChatGPT oder Perplexity. Ob du es brauchst, hängt davon ab, wie deine Kunden recherchieren. Bei beratungsintensiven Leistungen: ja.',
    link: null,
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

/* Strukturierte Daten für die FAQ – damit Google die Fragen der Seite
   zuordnen kann. Gleicher Aufbau wie auf /seo-freelancer-langenfeld. */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function Haken() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
  )
}

export default function SeoFreelancerLangenfeld() {
  return (
    <div className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Hero und Streifen teilen sich einen Bildschirm, das Porträt steht auf
          der Oberkante des Streifens – wie auf der Startseite. */}
      <div className="v2-buehne">
        <section className="v2-hero v2-sfl-hero">
          <div className="wrap v2-hero-grid">
            <div className="v2-hero-text">
              <h1 className="v2-hero-h1">
                SEO Freelancer<br />
                <span className="hl">aus Langenfeld</span>
              </h1>
              <p className="v2-hero-sub">
                Ich sorge dafür, dass Selbstständige und kleine Unternehmen aus Langenfeld und
                dem Rheinland bei Google gefunden werden – und in ChatGPT, Gemini und Perplexity
                empfohlen werden.
              </p>
              <ul className="v2-hero-punkte">
                <li><Haken />Keine Agentur – ich arbeite selbst an deinem Projekt</li>
                <li><Haken />Feste Preise und monatliches Reporting</li>
                <li><Haken />Vor Ort im Rheinland, remote deutschlandweit</li>
              </ul>

              {/* Gleicher Knopf wie auf der Startseite – öffnet das Audit-Popup, deshalb
                  auch dieselbe Beschriftung wie dessen Überschrift. */}
              <div className="v2-hero-cta">
                <AuditFormular />
                <span className="v2-hero-cta-hinweis">Unverbindlich · Antwort meist am selben Tag</span>
              </div>
            </div>

            {/* Das Bild ist Dekoration (alt=""), die Chips tragen Aussagen –
                deshalb ist der Kasten nicht aria-hidden, nur das Bild stumm. */}
            <div className="v2-hero-portrait v2-sfl-portrait">
              {/* Rahmen genau so groß wie das Bild: Die Chips beziehen ihre
                  Prozentwerte auf die Person, nicht auf die Rasterspalte – sonst
                  wandern sie je nach Fensterbreite über Gesicht oder Anzug. */}
              <span className="v2-sfl-bildrahmen">
              <Image
                src="/TS-Anzug-Website.webp"
                alt=""
                width={1086}
                height={1448}
                priority
                sizes="(max-width: 1024px) 80vw, 460px"
              />
              <ul className="v2-sfl-chips" aria-label="Schwerpunkte">
                {CHIPS.map((c) => (
                  <li key={c.text} className={`v2-sfl-chip ${c.pos}`}>
                    <span className="v2-sfl-chip-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                    </span>
                    {c.text}
                  </li>
                ))}
              </ul>
              </span>
            </div>
          </div>
        </section>

        <div className="v2-streifen">
          <div className="wrap">
            <ul className="v2-streifen-liste">
              {STREIFEN.map((s) => (
                <li key={s.titel}>
                  <span className="v2-streifen-titel">{s.titel}</span>
                  <span className="v2-streifen-text">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Wie auf der Startseite unter dem Hero: die drei Kundenwebsites und darunter der
          liegende CTA-Kasten. Gleiche Komponente und gleiche Klassen. */}
      <section className="v2-ergebnisse" aria-label="Ergebnisse">
        <Kundenwebsites />

        <div className="wrap">
          <div className="v2-cta">
            <div>
              <h2 className="v2-cta-titel">Du willst deine Website endlich in Angriff nehmen?</h2>
              <p className="v2-cta-text">
                Dann schau ich mir an, wo du stehst – und sage dir ehrlich, was sich lohnt
                und was nicht. Kostenlos, unverbindlich und ohne Verkaufsgespräch.
              </p>
            </div>
            <BuchenKnopf />
          </div>
        </div>
      </section>

      {/* SEO – gleicher Aufbau wie „Messen statt spekulieren" auf der Startseite: links der
          Text, der beim Scrollen stehen bleibt, rechts die Karten untereinander.
          Die Karten stammen aus Grafiken/SEO; Hülle, Glow und Textblock teilen sie
          sich mit der Startseite, nur die Motive oben sind eigene Klassen (ts-seo-…). */}
      <section className="v2-messen" id="seo-leistungen">
        <div className="wrap v2-ms-grid">
          <div className="v2-ms-text">
            <h2 className="v2-me-h2">
              Werde sichtbar auf <span className="hl">Google</span>, in{' '}
              <span className="hl">KI-Suchen</span> und <span className="hl">lokal</span>.
            </h2>
            <p>
              Deine Kunden suchen nicht mehr nur bei Google. Sie fragen ChatGPT, Gemini oder
              Perplexity – und sie suchen nach Anbietern in ihrer Nähe. Wer in Langenfeld und
              Umgebung nach deiner Leistung sucht, soll überall bei dir landen, nicht bei der
              Konkurrenz.
            </p>
            <p>Damit das klappt, arbeite ich an diesen Stellen:</p>
            <BuchenKnopf />
          </div>

          <div className="v2-ms-karten">
            <article className="ts-card">
              <div className="ts-card__glow" />
              <div className="ts-card__visual ts-card__visual--seo">
                <div className="ts-seo-karte">
                  <svg className="ts-seo-karte__netz" viewBox="0 0 420 236" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <g stroke="#1E2C40" strokeWidth="1">
                      <path d="M0 58H420M0 130H420M0 192H420M78 0V236M186 0V236M298 0V236" />
                    </g>
                    <path d="M-10 168 C 80 150, 130 112, 210 108 C 290 104, 350 70, 440 56" stroke="#2A3A52" strokeWidth="6" />
                  </svg>
                  <div className="ts-seo-karte__radius" />
                  <div className="ts-seo-karte__pin">
                    <div className="ts-seo-karte__label"><span className="ts-seo-punkt" />Deine Region</div>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#16C98A" aria-hidden="true"><path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
                  </div>
                </div>
              </div>
              <div className="ts-card__text">
                <h3>Lokales SEO</h3>
                <p>Sichtbar in deiner Region: optimiert für Suchen mit lokalem Bezug und für Kunden, die in deiner Nähe suchen.</p>
              </div>
            </article>

            <article className="ts-card">
              <div className="ts-card__glow" />
              <div className="ts-card__visual ts-card__visual--seo">
                <div className="ts-seo-serp">
                  <div className="ts-seo-suche">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7C92" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L21 21" /></svg>
                    <span>dein wichtigstes keyword</span>
                  </div>
                  <div className="ts-seo-treffer">
                    <div className="ts-seo-treffer__rang"><span className="ts-seo-punkt" />Platz 1 · organisch</div>
                    <div className="ts-seo-treffer__titel">Deine Leistung in deiner Stadt</div>
                    <i /><i style={{ width: '72%' }} />
                  </div>
                  <div className="ts-seo-rest">
                    <i style={{ width: '60%' }} /><i style={{ width: '84%' }} />
                  </div>
                </div>
              </div>
              <div className="ts-card__text">
                <h3>On-Page SEO</h3>
                <p>Inhalte, Titel und Seitenstruktur so aufgebaut, dass Google sofort versteht, worum es geht – und deine Seite für die richtigen Suchanfragen ausspielt.</p>
              </div>
            </article>

            <article className="ts-card">
              <div className="ts-card__glow" />
              <div className="ts-card__visual ts-card__visual--seo">
                <div className="ts-seo-technik">
                  <div className="ts-seo-ladezeit">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16C98A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg>
                    <div className="ts-seo-ladezeit__body">
                      <span>Ladezeit</span>
                      <div className="ts-seo-ladezeit__balken"><i /></div>
                    </div>
                  </div>
                  <ul className="ts-seo-checks">
                    {['Crawlbar & indexiert', 'Mobil optimiert', 'Saubere Weiterleitungen'].map((c) => (
                      <li key={c}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16C98A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4.5 4.5L19 7" /></svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="ts-card__text">
                <h3>Technisches SEO</h3>
                <p>Ladezeit, Crawlbarkeit und Indexierung sauber aufgesetzt, damit deiner Sichtbarkeit technisch nichts im Weg steht.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Für wen SEO passt – und für wen nicht. Zwei Spalten statt einer Liste:
          Die Absage steht gleichberechtigt daneben, sonst liest sich der Block
          wie ein Verkaufsargument. Kopf mittig wie bei den Sektionen der Startseite. */}
      <section className="v2-fuerwen" id="fuer-wen">
        <div className="wrap">
          <div className="v2-fw-kopf">
            <h2 className="v2-fw-h2">
              Für wen ist SEO <span className="hl">das Richtige</span>?
            </h2>
            <p className="v2-fw-sub">
              SEO lohnt sich nicht für jeden – und ich sage dir lieber vorher, wenn dein
              Geld woanders besser aufgehoben ist.
            </p>
          </div>

          <div className="v2-fw-grid">
            <div className="v2-fw-spalte v2-fw-spalte--ja">
              <h3 className="v2-fw-titel">
                <span className="v2-fw-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                Passt zu dir, wenn …
              </h3>
              <ul className="v2-fw-liste">
                {PASST.map((p) => (
                  <li key={p.titel}>
                    <strong>{p.titel}</strong>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="v2-fw-spalte v2-fw-spalte--nein">
              <h3 className="v2-fw-titel">
                <span className="v2-fw-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                </span>
                Eher nicht, wenn …
              </h3>
              <ul className="v2-fw-liste">
                {PASST_NICHT.map((p) => (
                  <li key={p.titel}>
                    <strong>{p.titel}</strong>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="v2-fw-fuss">
            <p>
              Du bist dir nicht sicher, wo du stehst? Dann schau ich mir deine Website an und
              sage dir ehrlich, ob sich SEO für dich lohnt.
            </p>
            <BuchenKnopf />
          </div>
        </div>
      </section>

      {/* Über mich – gleicher Aufbau wie auf der Startseite: das Porträt in der Mitte,
          links und rechts je eine Karte, dazwischen die kleinen Schilder. Die
          Texte sind hier auf die Region zugeschnitten. */}
      <section className="v2-uebermich" id="ueber-mich">
        <div className="wrap">
          <div className="v2-um-kopf">
            <h2 className="v2-um-h2">
              Timm Schurig,<br />
              <span className="hl">SEO Freelancer aus Langenfeld</span>
            </h2>
            <p className="v2-um-sub">
              Kein Team, kein Büro, keine Agentur im Rücken – 5,0 Sterne aus 15+ Bewertungen
              auf Fiverr und Google.
            </p>
          </div>

          <div className="v2-um-buehne">
            <div className="v2-um-spalte v2-um-links">
              <span className="v2-um-mini">5+ Jahre Erfahrung</span>
              <article className="v2-um-karte">
                <h3>Wer ich bin</h3>
                <p>
                  Ich komme aus Langenfeld und arbeite mit Betrieben aus dem Rheinland –
                  Handwerk, Praxen, Coaches und kleinen Onlineshops. Jedes Projekt baue ich
                  selbst. Wer mit mir spricht, spricht mit dem, der die Website am Ende auch
                  baut.
                </p>
              </article>
              <span className="v2-um-mini">Aus der Region</span>
            </div>

            {/* Der Schein liegt bewusst NICHT im Bild-Element: Dessen weicher
                Verlauf an der Unterkante ist eine Maske, die alles darin
                mitschneidet – der Schein stand dadurch als Rechteck dahinter. */}
            <span className="v2-um-glow" aria-hidden="true" />

            <div className="v2-um-bild">
              <Image
                src="/TS-Anzug-Website.webp"
                alt="Timm Schurig"
                width={1086}
                height={1448}
                sizes="(max-width: 900px) 72vw, 420px"
              />
            </div>

            <div className="v2-um-spalte v2-um-rechts">
              <span className="v2-um-mini">SEO &amp; Webdesign</span>
              <article className="v2-um-karte">
                <h3>Wie ich arbeite</h3>
                <p>
                  Erst schaue ich, wonach in deiner Region tatsächlich gesucht wird, dann
                  baue oder überarbeite ich die Seite dazu – mit Next.js, Webflow oder
                  Shopify. Danach höre ich nicht auf: In der Search Console sehen wir
                  schwarz auf weiß, was die Arbeit gebracht hat.
                </p>
              </article>
              <span className="v2-um-mini">15+ Bewertungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Branchen als Wischleiste: waagerecht scrollbar, mit Einrasten pro Karte.
          Bewusst ohne Pfeil-Knöpfe und ohne Skript – die Leiste funktioniert mit
          Wischen, Trackpad, Scrollrad und Tastatur (tabindex + Rolle), und bleibt
          damit eine Server-Komponente. */}
      <section className="v2-branchen" id="branchen">
        <div className="wrap">
          <div className="v2-br-kopf">
            <h2 className="v2-br-h2">
              Fast jede Branche <span className="hl">braucht SEO</span>.
            </h2>
            <p className="v2-br-sub">
              Überall dort, wo Menschen nach einer Leistung suchen, entscheidet die
              Reihenfolge der Ergebnisse darüber, wer die Anfrage bekommt.
            </p>
          </div>
        </div>

        {/* Außerhalb von .wrap: Die Leiste läuft bis an den Bildschirmrand, damit
            man sieht, dass rechts noch etwas kommt. Der Innenabstand hält die
            erste Karte trotzdem auf der Textkante. */}
        <ul
          className="v2-br-bahn"
          tabIndex={0}
          role="region"
          aria-label="Branchen, waagerecht scrollbar"
        >
          {BRANCHEN.map((b) => (
            <li key={b.name} className="v2-br-karte">
              {/* Bild, solange es eines gibt – sonst weiter der Platzhalter mit
                  dem Branchensymbol. alt="" , weil der Name direkt darunter steht. */}
              {b.bild ? (
                <div className="v2-br-bild">
                  <Image src={b.bild} alt="" fill sizes="(max-width: 860px) 250px, 300px" />
                </div>
              ) : (
                <div className="v2-br-bild" role="img" aria-label={`Platzhalter für ein Bild zur Branche ${b.name}`}>
                  <svg className="v2-br-bild-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{b.icon}</svg>
                  <span className="v2-br-platzhalter">Platzhalter</span>
                </div>
              )}

              <div className="v2-br-text">
                <span className="v2-br-name">{b.name}</span>
                <span className="v2-br-beispiel">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5 21 21" /></svg>
                  {b.beispiel}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="wrap">
          <p className="v2-br-hinweis">Nach links wischen für mehr Branchen</p>
        </div>
      </section>

      {/* Sichtbarkeit & Kundengewinnung als Kette: vier Stufen nebeneinander,
          verbunden durch eine Linie. Die ersten beiden sind Sichtbarkeit, die
          letzten beiden Kundengewinnung – die Marke über den Stufen zeigt, wo
          das eine aufhört und das andere anfängt. */}
      <section className="v2-weg" id="sichtbarkeit">
        <div className="wrap">
          <div className="v2-weg-kopf">
            <h2 className="v2-weg-h2">
              Sichtbarkeit &amp; <span className="hl">Kundengewinnung</span>
            </h2>
            <p className="v2-weg-sub">
              Gefunden zu werden ist nur die halbe Strecke. Aus einem Besucher wird erst
              dann eine Anfrage, wenn auch die Seite selbst ihre Arbeit macht.
            </p>
          </div>

          <ol className="v2-weg-kette">
            {WEG.map((s, i) => (
              <li key={s.titel} className={`v2-weg-stufe v2-weg-stufe--${s.stufe === 'Sichtbarkeit' ? 'sicht' : 'kunde'}`}>
                <h3 className="v2-weg-titel">
                  <span className="v2-weg-n" aria-hidden="true">{i + 1}</span>
                  {s.titel}
                </h3>
                {s.grafik}
                <p className="v2-weg-text">{s.text}</p>
              </li>
            ))}
          </ol>

          <p className="v2-weg-fazit">
            Deshalb mache ich als SEO Freelancer aus Langenfeld beides: Ich sorge dafür, dass du
            gefunden wirst, und dass die Seite, auf der die Leute landen, auch zu einer Anfrage führt.
          </p>
        </div>
      </section>

      {/* Zahlen & Fakten – jede Zahl mit ihrer Quelle, sonst wäre die
          Überschrift ein leeres Versprechen. */}
      <section className="v2-zahlen">
        <div className="wrap">
          <div className="v2-za-kopf">
            <h2 className="v2-za-h2">
              Zahlen &amp; Fakten – <span className="hl">keine leeren Versprechen</span>.
            </h2>
            <p className="v2-za-sub">
              Jede Zahl hier lässt sich nachprüfen. Woher sie kommt, steht darunter.
            </p>
          </div>

          <article className="v2-fall">
            <div className="v2-fall-oben">
              {/* Badge und Zeitraum stehen über bzw. unter dem Raster, nicht
                  darin: Sonst beginnt das Bild rechts auf Höhe des Badges und
                  nicht auf Höhe der Ausgangssituation. */}
              <div className="v2-fall-badges">
                <span className="v2-fall-badge">Kundenergebnisse</span>
                <span className="v2-fall-badge v2-fall-badge--art">Shop-Aufbau</span>
                <span className="v2-fall-badge v2-fall-badge--art">SEO</span>
                <span className="v2-fall-badge v2-fall-badge--art">GEO</span>
              </div>

              <div className="v2-fall-mitte">
              <div className="v2-fall-text">
                <div className="v2-fall-block v2-fall-block--vorher">
                  <span className="v2-fall-label">Ausgangssituation</span>
                  <p>
                    SHS Spürhundesport hatte keinen Onlineshop – es gab schlicht nichts,
                    was bei Google auffindbar gewesen wäre. Kein Sortiment im Netz, keine
                    Kategorien, keine Sichtbarkeit.
                  </p>
                </div>

                {/* Der Pfeil trägt die Leserichtung: von dem, was war, zu dem,
                    was daraus wurde. */}
                <span className="v2-fall-pfeil" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </span>

                <div className="v2-fall-block v2-fall-block--nachher">
                  <span className="v2-fall-label v2-fall-label--gut">Ergebnis</span>
                  <p>
                    Shop von Grund auf neu gebaut, SEO von der ersten Stunde an
                    mitgedacht statt hinterhergeschoben. Zwölf Monate später kommen
                    rund 5.000 Besucher im Jahr über die organische Suche – und der
                    Shop taucht in KI-Antworten auf.
                  </p>
                </div>

              </div>

              <div className="v2-fall-bild">
                <Image
                  src="/Rezension-Hero-SHS.webp"
                  alt="Startseite des Onlineshops von SHS Spürhundesport"
                  width={1670}
                  height={912}
                  sizes="(max-width: 900px) 92vw, 560px"
                />
                {/* Gleiche Kennzeichnung wie auf den Kundenwebsite-Karten:
                    kleiner Chip mit Logo, kein zweiter Blickfang. */}
                <span className="v2-fall-tech">
                  <Image src="/logos/shopify.svg" alt="" width={16} height={16} />
                  Shopify
                </span>
              </div>
              </div>

              <p className="v2-fall-zeitraum">Seit Dezember 2024 · Aufbau des Shops und SEO</p>
            </div>

            <ul className="v2-fall-facts">
              {SHORT_FACTS.map((f) => (
                <li key={f.label}>
                  <strong>{f.wert}</strong>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>

            {/* Die Quelle gehört an den Fall, nicht unter den ganzen Abschnitt:
                Der zweite Fall ist ein anderes Projekt mit anderen Zahlen. */}
            <p className="v2-fall-quelle">
              Search Console, letzte zwölf Monate · KI-Impressionen über drei Monate.
            </p>
          </article>

          {/* Zweites Kundenergebnis: Redesign. Statt Zahlen der direkte Vergleich
              der Startseite vorher und nachher – darunter, was sich konkret
              geändert hat. Screenshots aus dem Ordner Redesigns. */}
          <article className="v2-fall v2-rd">
            <div className="v2-fall-badges">
              <span className="v2-fall-badge">Kundenergebnisse</span>
              <span className="v2-fall-badge v2-fall-badge--art">Redesign</span>
            </div>

            <div className="v2-rd-vergleich">
              <figure className="v2-rd-panel">
                <figcaption>
                  <span className="v2-rd-stand">Vorher</span>
                  <span className="v2-rd-hinweis">Alter Stand</span>
                </figcaption>
                <div className="v2-rd-bild">
                  <Image
                    src="/Redesign-Resilient-vorher.webp"
                    alt="Alte Startseite von Resilient durchs Leben: gebogene Menüschrift auf rotem Holzbild, Kontakt nur als kleiner Link"
                    width={1600}
                    height={851}
                    sizes="(max-width: 900px) 92vw, 560px"
                  />
                </div>
              </figure>

              {/* Pfeil auf der Naht zwischen den Paneelen: absolut positioniert,
                  damit er keine eigene Rasterzelle belegt. Auf dem Handy zeigt
                  er nach unten. */}
              <span className="v2-rd-pfeil" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </span>

              <figure className="v2-rd-panel v2-rd-panel--nachher">
                <figcaption>
                  <span className="v2-rd-stand">Nachher</span>
                  <span className="v2-rd-hinweis">Optimiert</span>
                </figcaption>
                <div className="v2-rd-bild">
                  <Image
                    src="/Redesign-Resilient-nachher.webp"
                    alt="Neue Startseite von Resilient durchs Leben: Navigationsleiste, Leistungen im Titel und zwei Buttons im ersten Bildschirm"
                    width={1600}
                    height={774}
                    sizes="(max-width: 900px) 92vw, 560px"
                  />
                </div>
              </figure>
            </div>

            <div className="v2-rd-punkte">
              {REDESIGN_PUNKTE.map((r) => (
                <div key={r.titel} className="v2-rd-punkt">
                  <h3>{r.titel}</h3>
                  <p className="v2-rd-vorher">Vorher: {r.vorher}</p>
                  <p className="v2-rd-nachher">Nachher: {r.nachher}</p>
                </div>
              ))}
            </div>
          </article>

        </div>
      </section>

      <AblaufStapel />

      {/* FAQ als Akkordeon mit <details>: öffnet und schließt ohne Skript,
          funktioniert mit Tastatur und bleibt für Google vollständig lesbar,
          auch wenn eine Antwort zugeklappt ist. */}
      <section className="v2-faq" id="haeufige-fragen">
        <div className="wrap">
          <div className="v2-faq-kopf">
            <h2 className="v2-faq-h2">
              Häufig gestellte Fragen zum <span className="hl">SEO Freelancer aus Langenfeld</span>
            </h2>
            <p className="v2-faq-sub">
              Deine Frage ist nicht dabei? Schreib mir – die Antwort kommt meist am selben Tag.
            </p>
          </div>

          <div className="v2-faq-liste">
            {FAQ.map((f) => (
              <details key={f.q} className="v2-faq-item">
                <summary>
                  {f.q}
                  <span className="v2-faq-plus" aria-hidden="true" />
                </summary>
                <div className="v2-faq-antwort">
                  <p>{f.a}</p>
                  {f.link && <Link href={f.link.href}>{f.link.text} →</Link>}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <KontaktBuchung />

      {/* Sprungmarken passend zu den Sektionen dieser Seite – die Standardliste
          des Footers verweist auf #angebot, das es nur auf der Startseite gibt. */}
      <V2Footer
        sprungmarken={[
          { href: '#seo-leistungen', text: 'Leistungen' },
          { href: '#ueber-mich', text: 'Über mich' },
          { href: '#ablauf', text: 'Ablauf' },
          { href: '#haeufige-fragen', text: 'Häufige Fragen' },
          { href: '#anfrage', text: 'Erstgespräch' },
        ]}
      />
    </div>
  )
}
