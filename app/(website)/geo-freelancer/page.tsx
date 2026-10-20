import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL, breadcrumbSchema } from '@/lib/jsonld'
import AblaufStapel, { type Schritt } from '@/components/AblaufStapel'
import BuchenKnopf from '@/components/BuchenKnopf'
import V2Footer from '@/components/V2Footer'

/**
 * Leistungsseite: GEO Freelancer.
 *
 * Grundlage ist die Wettbewerbsanalyse vom 13.10.2026 (Downloads/
 * „Wettbewerbsanalyse & Seitenstruktur geo-freelancer.md"). Die Top 10 für
 * „GEO Freelancer" bauen keine Websites und zielen nicht auf Selbstständige –
 * genau diese Lücken besetzt die Seite: Website, SEO und GEO aus einer Hand,
 * Belege aus der Search Console und ein Festpreis-Einstieg.
 *
 * Streifen, Fallstudie, Über mich und FAQ nutzen dieselben Klassen wie
 * /seo-freelancer-langenfeld. Eigen sind die Bausteine mit `v2-geo-…`
 * (Hero mit Beispiel-KI-Antwort, Definition, Karten, Vergleiche,
 * Pakete), Stile am Ende von globals.css.
 *
 * Links auf geplante Seiten (/blog/was-ist-geo, /blog/geo-vs-seo,
 * /blog/llms-txt-und-schema) fehlen bewusst – erst setzen, wenn sie live sind.
 */
const TITEL = 'GEO Freelancer für Selbstständige | Timm Schurig'
const BESCHREIBUNG =
  'GEO Freelancer aus Langenfeld: Ich mache deine Website sichtbar in ChatGPT, Perplexity und Google AI Overviews. Mit echten Zahlen und Festpreis-Einstieg.'
const URL = `${BASE_URL}/geo-freelancer`

/* Sichtbar im Hero und als dateModified im Schema. Bei jeder inhaltlichen
   Überarbeitung hochsetzen – und in sitemap.ts gleich mit. */
const STAND = '2026-10-13'

/* Preise wie auf den übrigen Leistungsseiten (Audit 799 €, Betreuung ab
   299 € im Monat, sechs Monate Mindestlaufzeit). Die Website hat noch keinen
   festen Einstiegspreis und steht deshalb auf Anfrage. */
const PREIS_AUDIT = '799 €'
const PREIS_BETREUUNG = '299 €'

export const metadata: Metadata = {
  title: TITEL,
  description: BESCHREIBUNG,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: URL,
    title: 'GEO Freelancer: Sichtbar in ChatGPT & Google | Timm Schurig',
    description: BESCHREIBUNG,
    images: [{ url: `${BASE_URL}/og-image-timm-schurig-zentriert.png`, width: 1200, height: 630, alt: 'GEO Freelancer – Timm Schurig' }],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'GEO Freelancer – Generative Engine Optimization',
  serviceType: 'Generative Engine Optimization',
  description:
    'Sichtbarkeit in KI-Antworten von ChatGPT, Perplexity, Gemini, Claude, Copilot und Google AI Overviews: KI-Sichtbarkeits-Check, technisches Fundament, zitierfähige Inhalte, Entitäten, Erwähnungen und monatliches Reporting.',
  url: URL,
  provider: { '@id': `${BASE_URL}/#person` },
  audience: { '@type': 'BusinessAudience', name: 'Selbstständige, Coaches, Personal Brands und kleine Unternehmen' },
  areaServed: ['Langenfeld', 'Düsseldorf', 'Köln', 'Leverkusen', 'Solingen', 'NRW', 'Deutschland'],
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': URL,
  url: URL,
  name: TITEL,
  description: BESCHREIBUNG,
  inLanguage: 'de-DE',
  dateModified: STAND,
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${URL}#service` },
  author: { '@id': `${BASE_URL}/#person` },
}

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Startseite', url: BASE_URL },
  { name: 'GEO Freelancer', url: URL },
])

/* Unter dem Hero: die vier Lücken aus der Wettbewerbsanalyse. */
const STREIFEN = [
  { titel: 'Website, SEO und GEO', text: 'Aus einer Hand, von dem, der die Seite auch baut.' },
  { titel: 'Belegt statt behauptet', text: 'Zahlen aus der Search Console und wiederholte KI-Tests.' },
  { titel: 'Festpreis-Einstieg', text: 'Audit zum Festpreis statt Agenturstunden oder Dauervertrag.' },
  { titel: 'Aus dem Rheinland', text: 'Langenfeld zwischen Düsseldorf und Köln, remote deutschlandweit.' },
]

type Karte = { titel: string; text: ReactNode; icon: ReactNode }
/* Problemkarten tragen statt eines Icons eine Grafik (Grafiken/Probleme-ohne-GEO). */
type Problem = { titel: string; text: string; bild: { src: string; alt: string } }

/* Abschnitt 3: das Problem, an vier Situationen festgemacht. */
const PROBLEME: Problem[] = [
  {
    titel: 'Du rankst gut, aber ChatGPT nennt andere.',
    text: 'Frag ChatGPT nach deiner Leistung in deiner Stadt. Stehen dort drei Wettbewerber und du nicht, verlierst du Anfragen, bevor du davon erfährst.',
    bild: {
      src: '/bilder/geo/Probleme-GEO-01-ChatGPT-nennt-andere.webp',
      alt: 'ChatGPT-Antwort auf „Wer macht gutes Webdesign in Langenfeld?“ nennt drei Wettbewerber. Hinweis: Platz 1 bei Google, aber nicht erwähnt.',
    },
  },
  {
    titel: 'Deine Klicks sinken, obwohl die Rankings halten.',
    text: 'Google beantwortet viele Fragen direkt in den AI Overviews. Dann zählt, ob deine Seite dort als Quelle verlinkt ist.',
    bild: {
      src: '/bilder/geo/Probleme-GEO-02-Klicks-sinken.webp',
      alt: 'Search-Console-Diagramm: Position und Impressionen bleiben stabil, nach dem Start der AI Overviews fallen die Klicks um 58 Prozent.',
    },
  },
  {
    titel: 'Die KI erzählt Falsches über dich.',
    text: 'Alte Preise, falsche Leistungen, ein Angebot, das es nicht mehr gibt. Das passiert, wenn deine Angaben im Netz nicht zusammenpassen.',
    bild: {
      src: '/bilder/geo/Probleme-GEO-03-KI-erzaehlt-Falsches.webp',
      alt: 'Google-Übersicht mit KI nennt einen veralteten Preis, eine falsche Leistung und ein Paket, das es nicht mehr gibt, mit alten Quellen.',
    },
  },
  {
    titel: 'Du bist Experte, aber keiner weiß es.',
    text: 'Auf LinkedIn hast du Reichweite, deine Website erzählt davon nichts. Für eine KI bist du dann kein eindeutiger Experte für dein Thema.',
    bild: {
      src: '/bilder/geo/Probleme-GEO-04-Experte-unbekannt.webp',
      alt: 'Erfolgreicher LinkedIn-Beitrag neben einer nichtssagenden Website. KI-Einschätzung: Expertise unklar.',
    },
  },
]

/* Abschnitt 5: sechs Bausteine, konkret statt Buzzwords. */
const BAUSTEINE: Karte[] = [
  {
    titel: 'KI-Sichtbarkeits-Check',
    text: 'Mit meinem GEO-Sichtbarkeits-Tool stelle ich die Fragen, die deine Kunden einer KI stellen, automatisiert und wiederholt in ChatGPT, Perplexity, Gemini und Google AI Overviews. Du siehst, wie oft du genannt wirst, wer stattdessen auftaucht und welche Quellen die KI nutzt.',
    icon: <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM15.2 15.2 21 21" />,
  },
  {
    titel: 'Technisches Fundament',
    text: 'KI-Systeme suchen für aktuelle Antworten oft selbst im Web. Ich sorge dafür, dass deine Seite schnell lädt, sauber indexiert ist und KI-Crawler wie OAI-SearchBot und PerplexityBot sie lesen dürfen.',
    icon: <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" />,
  },
  {
    titel: 'Zitierfähige Inhalte',
    text: 'Eine KI übernimmt klare Aussagen, keine Werbetexte. Ich baue deine wichtigsten Seiten so um, dass jede Frage deiner Kunden eine direkte Antwort mit konkreten Fakten bekommt.',
    icon: <path d="M7 7h4v4H7c0 2 1 3 3 4M14 7h4v4h-4c0 2 1 3 3 4" />,
  },
  {
    titel: 'Deine Marke als eindeutige Entität',
    text: 'Name, Leistung, Ort und Zielgruppe müssen überall gleich lauten: auf deiner Website, bei LinkedIn, im Google-Unternehmensprofil und in Verzeichnissen. Dazu kommen strukturierte Daten, damit Maschinen dich sicher einordnen.',
    icon: <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6zM9 12l2 2 4-4" />,
  },
  {
    titel: 'Erwähnungen auf anderen Seiten',
    text: 'KI-Antworten stützen sich stark auf Portale, Bewertungen und Fachartikel. Ich finde heraus, welche Seiten in deinem Thema zitiert werden und wo du dort fehlst.',
    icon: <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />,
  },
  {
    titel: 'Messen und nachsteuern',
    text: (
      <>
        Du bekommst <a href="#ablauf">monatlich</a> Zahlen aus der Search Console und wiederholte
        KI-Tests. Du siehst, was sich bewegt hat, nicht nur, was getan wurde.
      </>
    ),
    icon: <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />,
  },
]

/* Abschnitt 6: drei Ausgangslagen, eine Lösung. */
const WEGE = [
  { titel: 'Neue Website', text: 'GEO ist von Anfang an eingebaut.' },
  {
    titel: 'Relaunch',
    text: (
      <>
        Deine Inhalte bleiben, die Struktur wird KI-lesbar.{' '}
        <Link href="/blog/website-relaunch-wann-sinnvoll">Wann sich ein Relaunch lohnt</Link>
      </>
    ),
  },
  { titel: 'Bestehende Seite', text: 'Ich optimiere, was da ist, mit Next.js, Webflow oder Shopify.' },
]

const TOOLS = [
  { name: 'Next.js', datei: 'nextdotjs-weiss' },
  { name: 'Webflow', datei: 'webflow' },
  { name: 'Shopify', datei: 'shopify' },
]

/* Abschnitt 7: Zielgruppen. Personal Brand auf LinkedIn ist die Lücke, die
   kein Wettbewerber besetzt. */

/* Abschnitt 8: Pflichtelement der SERP, bewusst knapp und zitierbar. */
const GEO_VS_SEO = [
  { k: 'Ziel', seo: 'Platz in den Google-Ergebnissen', geo: 'Nennung und Zitat in KI-Antworten' },
  { k: 'Plattformen', seo: 'Google, Bing', geo: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, Google AI Overviews und AI Mode' },
  { k: 'Kennzahlen', seo: 'Rankings, Klicks, Impressionen', geo: 'Nennungen, zitierte Quellen, Erstempfehlungen' },
  { k: 'Inhalte', seo: 'Suchintention und Keywords', geo: 'Direkte Antworten, Fakten, klare Aussagen' },
  { k: 'Autorität', seo: 'Backlinks', geo: 'Erwähnungen, Bewertungen, einheitliche Profile' },
]

/* Abschnitt 9: Ablauf in vier Schritten. */
const ABLAUF: Schritt[] = [
  {
    n: '01',
    bild: '/bilder/ablauf/Ablauf-01-Erstgespraech.webp',
    alt: 'Videogespräch mit Timm Schurig und Gesprächsnotizen zu Situation und Zielen',
    punkte: ['Unverbindlich, ohne Formular', 'Deine Situation und deine Ziele', 'Ob GEO für dich jetzt sinnvoll ist'],
    titel: 'Kostenloses Erstgespräch',
    dauer: '30 Minuten',
    text: 'Wo stehst du, was willst du erreichen und passen wir zusammen? Wenn GEO für dich gerade nicht der richtige Schritt ist, sage ich dir das.',
  },
  {
    n: '02',
    bild: '/bilder/ablauf/Ablauf-GEO-02-Audit.webp',
    alt: 'Prompt-Test in vier KI-Systemen, Nennungen im Vergleich zu Wettbewerbern, Technik-Check und Maßnahmenliste',
    punkte: ['Prompt-Tests in 4 KI-Systemen', 'Technik, Profile und 3 Wettbewerber', 'Maßnahmenliste nach Wirkung sortiert'],
    titel: 'GEO-Audit',
    dauer: 'Festpreis',
    text: 'Ich stelle die Fragen, die deine Kunden einer KI stellen, und prüfe Technik und Profile. Du bekommst eine klare Liste, was zuerst zu tun ist.',
  },
  {
    n: '03',
    bild: '/bilder/ablauf/Ablauf-GEO-03-Umsetzung.webp',
    alt: 'Checkliste der Umsetzung mit Leistungsseiten, strukturierten Daten und Profilen, dazu einheitliche Angaben auf allen Plattformen',
    punkte: ['Website und Inhalte zitierfähig machen', 'Angaben auf allen Profilen vereinheitlichen', 'Zwischenstände statt Überraschungen'],
    titel: 'Umsetzung',
    dauer: 'Schritt für Schritt',
    text: 'Ich setze selbst um, an Website, Inhalten und Profilen. Du siehst jeden Zwischenstand und weißt, woran ich gerade arbeite.',
  },
  {
    n: '04',
    bild: '/bilder/ablauf/Ablauf-04-Golive-Betreuung.webp',
    alt: 'Wachsende organische Besucher, Rankings und Monatsreport',
    punkte: ['Monatlicher Report aus der Search Console', 'Wiederholte KI-Tests', 'Nachsteuern, wo es hakt'],
    titel: 'Messen und nachsteuern',
    dauer: 'monatlich',
    text: 'Jeden Monat Zahlen aus der Search Console und wiederholte KI-Tests. Was nicht wirkt, wird angepasst.',
  },
]

/* Abschnitt 10: Pakete. Der Schnellcheck ist der Einstieg und steht vorn. */
const PAKETE = [
  {
    name: 'KI-Schnellcheck',
    preis: 'kostenlos',
    zusatz: 'unverbindlich',
    text: 'Erster Test mit meinem GEO-Sichtbarkeits-Tool: Wirst du in ChatGPT, Perplexity, Gemini und Google AI Overviews genannt? Das Ergebnis besprechen wir im kostenlosen Erstgespräch.',
    hervorgehoben: true,
  },
  {
    name: 'GEO-Audit',
    preis: PREIS_AUDIT,
    zusatz: 'Festpreis, einmalig',
    text: 'Prompt-Tests in 4 KI-Systemen, Technik-Check, Profile, Vergleich mit 3 Wettbewerbern, Maßnahmenliste und Ergebnis-Call.',
    hervorgehoben: false,
  },
  {
    name: 'GEO-Website',
    preis: 'auf Anfrage',
    zusatz: 'nach Umfang',
    text: 'Neubau oder Relaunch mit Next.js, Webflow oder Shopify, SEO und GEO von Anfang an.',
    hervorgehoben: false,
  },
  {
    name: 'GEO-Betreuung',
    preis: `ab ${PREIS_BETREUUNG}`,
    zusatz: 'pro Monat, 6 Monate Mindestlaufzeit',
    text: 'Umsetzung, Inhalte, Profile und ein monatlicher Report.',
    hervorgehoben: false,
  },
]

/* Abschnitt 11: ehrlicher Vergleich – die Agentur gewinnt dort, wo sie gewinnt. */
const FREELANCER_VS_AGENTUR = [
  { k: 'Ansprechpartner', freelancer: 'Du sprichst mit dem, der baut', agentur: 'Projektmanager dazwischen' },
  { k: 'Entscheidungen', freelancer: 'Oft am selben Tag', agentur: 'Abstimmungsrunden' },
  { k: 'Kosten', freelancer: 'Kein Agentur-Overhead', agentur: 'Team, Büro, Verwaltung' },
  { k: 'Kapazität', freelancer: 'Begrenzt, wenige Projekte gleichzeitig', agentur: 'Mehrere Spezialisten parallel' },
  { k: 'Passt für', freelancer: 'Selbstständige, kleine Unternehmen, Shops', agentur: 'Große Firmen mit vielen Kanälen' },
]

const SHORT_FACTS = [
  { wert: '26.977', label: 'Impressionen' },
  { wert: '4.975', label: 'Klicks' },
  { wert: '18,4 %', label: 'Klickrate' },
  { wert: '430', label: 'in KI-Antworten' },
]

/* Zehn Fragen: die der Wettbewerber plus Garantie, llms.txt und Region. */
const FAQ = [
  {
    q: 'Was kostet ein GEO Freelancer?',
    a: `Das hängt vom Umfang ab. Bei mir startest du mit einem kostenlosen KI-Schnellcheck. Das GEO-Audit kostet ${PREIS_AUDIT} als Festpreis, die laufende Betreuung startet bei ${PREIS_BETREUUNG} im Monat. Agenturen liegen oft höher, weil Team und Büro mitbezahlt werden.`,
    link: null,
  },
  {
    q: 'Brauche ich GEO, wenn ich schon SEO mache?',
    a: 'Ja, wenn deine Kunden vor dem Kauf recherchieren. Gute Rankings helfen, reichen aber nicht: ChatGPT und Co. wählen ihre Quellen auch nach Klarheit, Fakten und Erwähnungen auf anderen Seiten. SEO bleibt die Basis, GEO baut darauf auf.',
    link: { href: '/seo-freelancer-langenfeld', text: 'Mehr zu SEO' },
  },
  {
    q: 'Wie schnell sehe ich Ergebnisse?',
    a: 'Technische Verbesserungen und korrigierte Angaben wirken oft nach wenigen Wochen. Stabile Nennungen in KI-Antworten brauchen meist drei bis sechs Monate. Wie schnell es geht, hängt von deinem Thema und deinem Wettbewerb ab.',
    link: null,
  },
  {
    q: 'Kannst du garantieren, dass ChatGPT mich empfiehlt?',
    a: 'Nein, und das kann niemand seriös. Jede KI-Antwort entsteht neu. Beeinflussen lässt sich die Grundlage: ob deine Seite gefunden wird, ob deine Angaben überall stimmen und ob andere über dich schreiben. Ob es wirkt, zeige ich dir mit Messungen vor und nach der Umsetzung.',
    link: null,
  },
  {
    q: 'Für welche KI-Systeme optimierst du?',
    a: 'Für die, die deine Kunden nutzen: vor allem ChatGPT, Google AI Overviews und AI Mode, Perplexity, Gemini, Claude und Microsoft Copilot. Die Grundlagen wirken auf alle Systeme, gemessen wird je System getrennt.',
    link: null,
  },
  {
    q: 'Funktioniert GEO auch für Selbstständige und kleine Betriebe?',
    a: 'Gerade dort. Fragt jemand eine KI nach einem Coach oder Handwerker in seiner Region, nennt sie oft nur wenige Namen. Mit klaren Angaben, guten Bewertungen und einer sauberen Website hast du gute Chancen, einer davon zu sein.',
    link: null,
  },
  {
    q: 'Was ist der Unterschied zwischen GEO, AEO und LLMO?',
    a: 'Im Kern meinen alle drei dasselbe: Sichtbarkeit in KI-Antworten. AEO (Answer Engine Optimization) betont direkte Antworten, LLMO (Large Language Model Optimization) die Sprachmodelle dahinter. Ich nutze GEO als Oberbegriff.',
    link: null,
  },
  {
    q: 'Brauche ich eine neue Website für GEO?',
    a: 'Nicht unbedingt. Oft reicht es, bestehende Seiten klarer zu gliedern und Fakten zu ergänzen. Ist deine Website technisch veraltet oder kaum zu pflegen, ist ein Relaunch meist der schnellere Weg. Das klären wir im Audit.',
    link: { href: '/blog/website-relaunch-wann-sinnvoll', text: 'Wann sich ein Relaunch lohnt' },
  },
  {
    q: 'Was bringt eine llms.txt?',
    a: 'Eine llms.txt listet die wichtigsten Seiten deiner Website für Sprachmodelle auf. Sie ist kein fester Standard, und Google braucht sie für seine KI-Funktionen nach eigener Aussage nicht. Ich setze sie auf Wunsch um, sie entscheidet aber nie allein über deine Sichtbarkeit.',
    link: null,
  },
  {
    q: 'Arbeitest du nur im Rheinland?',
    a: 'Nein. Ich sitze in Langenfeld zwischen Düsseldorf und Köln und arbeite remote mit Kunden in ganz Deutschland. Im Rheinland, etwa in Düsseldorf, Köln, Leverkusen oder Solingen, treffen wir uns auch gern persönlich.',
    link: null,
  },
]

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

function KartenRaster({ karten, spalten }: { karten: Karte[]; spalten: 2 | 3 }) {
  return (
    <ul className={`v2-geo-raster v2-geo-raster--${spalten}`}>
      {karten.map((k) => (
        <li key={k.titel} className="v2-geo-karte">
          <span className="v2-geo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{k.icon}</svg>
          </span>
          <h3>{k.titel}</h3>
          <p>{k.text}</p>
        </li>
      ))}
    </ul>
  )
}

/* Für wen: vier Karten als Bento-Raster, Breiten im Wechsel (breit/schmal,
   schmal/breit). Jede Karte zeigt ihr Thema an einem kleinen Beispiel: die
   typische KI-Frage, LinkedIn und Website als eine Botschaft, die lokale
   Suchanfrage und was die KI aus einem Shop liest. */
function Pfeil() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
  )
}

function ZgKopf({ n, icon }: { n: string; icon: ReactNode }) {
  return (
    <div className="v2-zg-kopf">
      <span className="v2-zg-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      </span>
      <span className="v2-zg-n" aria-hidden="true">{n}</span>
    </div>
  )
}

function Zielgruppen() {
  return (
    <ul className="v2-zg">
      <li className="v2-zg-karte v2-zg-karte--breit">
        <div className="v2-zg-inhalt">
          <ZgKopf n="01" icon={<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20a7.5 7.5 0 0 1 15 0" />} />
          <h3>Coaches, Berater und Trainer</h3>
          <p>Deine Kunden fragen eine KI, wer ihnen bei ihrem Problem hilft. Ich sorge dafür, dass du mit Namen und Thema genannt wirst.</p>
          <ul className="v2-zg-chips" aria-label="Schwerpunkte">
            <li>Positionierung</li><li>Expertenprofil</li><li>FAQ-Inhalte</li>
          </ul>
        </div>
        <div className="v2-zg-panel" aria-hidden="true">
          <p className="v2-zg-panel-label">Typische Frage an die KI</p>
          <p className="v2-zg-frage">„Welcher Coach hilft mir, als neue Führungskraft souveräner aufzutreten?“</p>
          <p className="v2-zg-antwort">Empfehlenswert ist <strong>[Dein Name]</strong>, spezialisiert auf Führung und Auftreten …</p>
        </div>
      </li>

      <li className="v2-zg-karte">
        <div className="v2-zg-inhalt">
          <ZgKopf n="02" icon={<path d="M4 4h16v16H4zM8 10v6M8 7v.01M12 16v-6M12 13c0-2 4-2.5 4 0v3" />} />
          <h3>Selbstständige mit Personal Brand auf LinkedIn</h3>
          <p>Deine Reichweite wird zur Grundlage. Website und Profil erzählen dieselbe Geschichte, damit die KI dich eindeutig als Experten einordnet.</p>
          <div className="v2-zg-botschaft" aria-hidden="true">
            <span>LinkedIn</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h12l-3-3M17 17H5l3 3" /></svg>
            <span>Website</span>
            <strong>eine Botschaft</strong>
          </div>
          <ul className="v2-zg-chips" aria-label="Schwerpunkte">
            <li>Entitäten</li><li>Autorität</li><li>Konsistenz</li>
          </ul>
        </div>
      </li>

      <li className="v2-zg-karte">
        <div className="v2-zg-inhalt">
          <ZgKopf n="03" icon={<path d="M14.7 6.3a4 4 0 0 0 5.2 5.2l-8.4 8.4a2.5 2.5 0 0 1-3.5-3.5zM4 4l3.5 3.5M4 9h4" />} />
          <h3>Handwerk und lokale Dienstleister</h3>
          <p>„Wer macht in Langenfeld …?“ fragen Menschen jetzt auch ChatGPT. Ich sorge dafür, dass dein Betrieb in der Antwort auftaucht.</p>
          <p className="v2-zg-frage v2-zg-frage--zeile" aria-hidden="true">„Wer macht in Langenfeld zuverlässig Badsanierung?“</p>
          <Link href="/blog/seo-fuer-handwerker" className="v2-zg-link">SEO für Handwerker <Pfeil /></Link>
        </div>
      </li>

      <li className="v2-zg-karte v2-zg-karte--breit">
        <div className="v2-zg-inhalt">
          <ZgKopf n="04" icon={<path d="M4 7h16l-1.5 12h-13zM9 7V5.5a3 3 0 0 1 6 0V7" />} />
          <h3>Kleine Onlineshops</h3>
          <p>KI-Systeme empfehlen Produkte und Shops. Saubere Produktdaten machen den Unterschied, ob deiner dabei ist.</p>
          <Link href="/blog/shopify-suchmaschinenoptimierung" className="v2-zg-link">Shopify-SEO im Detail <Pfeil /></Link>
        </div>
        <div className="v2-zg-panel" aria-hidden="true">
          <p className="v2-zg-panel-label">Was die KI aus deinem Shop liest</p>
          <dl className="v2-zg-daten">
            <div><dt>Produktname</dt><dd>eindeutig</dd></div>
            <div><dt>Preis &amp; Verfügbarkeit</dt><dd>strukturiert</dd></div>
            <div><dt>Eigenschaften</dt><dd>vollständig</dd></div>
            <div className="v2-zg-daten-ergebnis"><dt>Ergebnis</dt><dd>wird empfohlen</dd></div>
          </dl>
        </div>
      </li>
    </ul>
  )
}

/* SEO als Fundament, GEO als Ebene darauf. Beide Ebenen nutzen dieselben
   Kriterien in derselben Reihenfolge (GEO_VS_SEO), so stehen die Werte
   am Desktop genau übereinander. */
function Ebene({ art }: { art: 'geo' | 'seo' }) {
  const geo = art === 'geo'
  return (
    <div className={`v2-geo-ebene v2-geo-ebene--${art}`}>
      <div className="v2-geo-ebene-kopf">
        <span className="v2-geo-spalte-symbol" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {geo
              ? <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
              : <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM15.2 15.2 21 21" />}
          </svg>
        </span>
        <h3>{geo ? 'GEO' : 'SEO'}</h3>
        <span className="v2-geo-ebene-rolle">{geo ? 'Die Ebene obendrauf' : 'Das Fundament'}</span>
      </div>
      <dl className="v2-geo-ebene-werte">
        {GEO_VS_SEO.map((z) => (
          <div key={z.k}>
            <dt>{z.k}</dt>
            <dd>{geo ? z.geo : z.seo}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function GeoAufSeo() {
  return (
    <div className="v2-geo-schichten" role="group" aria-label="GEO baut auf SEO auf">
      <Ebene art="geo" />
      <div className="v2-geo-verbinder" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        baut auf
      </div>
      <Ebene art="seo" />
    </div>
  )
}

/* Freelancer oder Agentur: zwei Karten im Duell statt einer Tabelle. Links
   der Freelancer mit Foto und grünem Rahmen, rechts die Agentur in
   ruhigem Grau. Beide Karten nennen dieselben Kriterien in derselben
   Reihenfolge; „Passt für" steht jeweils als Fazit unten. */
function FreelancerOderAgentur() {
  const kriterien = FREELANCER_VS_AGENTUR.filter((z) => z.k !== 'Passt für')
  const passt = FREELANCER_VS_AGENTUR.find((z) => z.k === 'Passt für')
  return (
    <div className="v2-geo-duell">
      <article className="v2-geo-duell-karte v2-geo-duell-karte--ich">
        <div className="v2-geo-duell-kopf">
          <span className="v2-geo-duell-foto">
            <Image src="/bilder/timm/TS-Anzug-Website.webp" alt="Timm Schurig" width={120} height={160} />
          </span>
          <div>
            <h3>Freelancer</h3>
            <span>So arbeite ich</span>
          </div>
        </div>
        <dl>
          {kriterien.map((z) => (
            <div key={z.k}>
              <dt>{z.k}</dt>
              <dd>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                {z.freelancer}
              </dd>
            </div>
          ))}
        </dl>
        {passt && <p className="v2-geo-duell-passt"><strong>Passt für</strong>{passt.freelancer}</p>}
      </article>

      <span className="v2-geo-duell-vs" aria-hidden="true">vs</span>

      <article className="v2-geo-duell-karte">
        <div className="v2-geo-duell-kopf">
          <span className="v2-geo-duell-foto v2-geo-duell-foto--symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14a6.5 6.5 0 0 1 3.5 6" /></svg>
          </span>
          <div>
            <h3>Agentur</h3>
            <span>Typischer Aufbau</span>
          </div>
        </div>
        <dl>
          {kriterien.map((z) => (
            <div key={z.k}>
              <dt>{z.k}</dt>
              <dd>
                <span className="v2-geo-duell-punkt" aria-hidden="true" />
                {z.agentur}
              </dd>
            </div>
          ))}
        </dl>
        {passt && <p className="v2-geo-duell-passt"><strong>Passt für</strong>{passt.agentur}</p>}
      </article>
    </div>
  )
}

export default function GeoFreelancer() {
  return (
    <div className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* 1. Hero – links Versprechen und Knöpfe, rechts eine Beispiel-KI-Antwort,
          die die Website des Kunden als Quelle nennt, und darunter, wer dahinter
          steht. Streifen darunter wie auf den anderen Leistungsseiten. */}
      <div className="v2-buehne">
        <section className="v2-hero v2-geo-hero">
          {/* Hintergrund wie auf der Startseite, stark zurückgenommen. */}
          <Image
            src="/bilder/hintergruende/Beispiel-Websites-Hero-Hintergrund.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="v2-hero-bild"
          />
          <div className="wrap v2-hero-grid">
            <div className="v2-hero-text">
              <h1 className="v2-hero-h1">
                GEO Freelancer: Damit ChatGPT dich empfiehlt und nicht deine{' '}
                <span className="hl">Konkurrenz</span>
              </h1>
              <p className="v2-hero-sub">
                Immer mehr Kunden fragen zuerst die KI statt Google. Ich sorge dafür,
                dass deine Website dort als Quelle auftaucht und du genannt wirst.
              </p>
              <ul className="v2-hero-punkte">
                <li><Haken />Sichtbar in ChatGPT, Perplexity, Gemini und Google AI Overviews</li>
                <li><Haken />Website, SEO und GEO aus einer Hand</li>
                <li><Haken />Belegt mit Zahlen aus der Search Console statt Bauchgefühl</li>
              </ul>

              <div className="v2-hero-cta">
                <BuchenKnopf />
              </div>
              <p className="v2-geo-vertrauen">
                <span><span className="v2-geo-sterne" aria-hidden="true">★★★★★</span> <strong>5,0</strong> aus 15+ Bewertungen</span>
                <span>Seit 2021 selbstständig</span>
              </p>
            </div>

            <div className="v2-geo-hero-rechts">
              {/* Beispiel statt Screenshot: zeigt das Ziel – deine Website als
                  hervorgehobene Quelle in einer KI-Antwort. Als „Beispiel"
                  gekennzeichnet, damit es nicht als echtes Kundenergebnis gilt. */}
              <figure className="v2-geo-ki">
                <figcaption className="v2-geo-ki-kopf">
                  <strong>KI-Antwort</strong>
                  <span className="v2-geo-ki-marke">Beispiel</span>
                </figcaption>
                <p className="v2-geo-ki-frage">Welcher Coach in Düsseldorf hilft mir bei Stress im Job?</p>
                <div className="v2-geo-ki-antwort">
                  <p>
                    Eine gute Anlaufstelle ist <strong>[Dein Name]</strong>. Sie ist auf
                    Stressbewältigung für Führungskräfte spezialisiert und bietet ein kostenloses
                    Erstgespräch an.
                  </p>
                  <p>
                    Laut Website arbeitet sie in Düsseldorf und online, mit festen Paketen ab drei
                    Sitzungen.
                  </p>
                </div>
                <div className="v2-geo-ki-quellen">
                  <span>Quellen:</span>
                  <span className="v2-geo-ki-quelle v2-geo-ki-quelle--du">deine-website.de</span>
                  <span className="v2-geo-ki-quelle">linkedin.com</span>
                  <span className="v2-geo-ki-quelle">google.com/maps</span>
                </div>
              </figure>

              <div className="v2-geo-person">
                {/* Dasselbe Foto wie in „Über mich", als Gesichtsausschnitt. */}
                <span className="v2-geo-person-bild">
                  <Image src="/bilder/timm/TS-Anzug-Website.webp" alt="Timm Schurig" width={142} height={189} priority />
                </span>
                <div>
                  <strong>Timm Schurig</strong>
                  <span>Webdesign, SEO und GEO aus Langenfeld</span>
                </div>
              </div>
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

      {/* 2. Definition direkt nach dem Hero: zwei, drei Sätze, die eine KI oder
          ein Snippet unverändert übernehmen kann. Links als Lexikon-Eintrag,
          rechts 100 Punkte für 100 Google-Suchen, 62 davon ohne Klick. */}
      <section className="v2-geo-sektion" id="was-ist-geo">
        <div className="wrap">
          <div className="v2-geo-kopf">
            <h2 className="v2-geo-h2">Was macht ein <span className="hl">GEO Freelancer</span>?</h2>
          </div>
          <div className="v2-geo-lex">
            <div className="v2-geo-lex-eintrag">
              <p className="v2-geo-lex-wort">GEO Freelancer</p>
              <p className="v2-geo-lex-text">
                Ein GEO Freelancer optimiert deine Website und deine Online-Präsenz so, dass
                KI-Systeme wie ChatGPT, Perplexity, Gemini und Google AI Overviews dich verstehen,
                dir vertrauen und dich in ihren Antworten nennen. GEO baut auf SEO auf und ergänzt
                es um zitierfähige Inhalte, eindeutige Angaben zu dir oder deiner Firma und
                Erwähnungen auf anderen Seiten.
              </p>
            </div>

            <div className="v2-geo-lex-zahl">
              <p className="v2-geo-lex-zahl-kopf">Warum das jetzt zählt</p>
              <div className="v2-geo-lex-grafik" aria-hidden="true">
                <div className="v2-geo-punkte">
                  {Array.from({ length: 100 }, (_, i) => (
                    <span key={i} className={i < 62 ? 'an' : undefined} />
                  ))}
                </div>
                <p className="v2-geo-lex-wert">
                  <span>62</span>
                  von 100
                </p>
              </div>
              <p className="v2-geo-lex-zahl-text">
                <strong>62 von 100</strong> Google-Suchen in Deutschland enden ohne einen einzigen
                Klick. Dazu fragen immer mehr Menschen direkt eine KI. Wer dort fehlt, bekommt die
                Anfrage nicht, selbst mit gutem Google-Ranking.
              </p>
              <p className="v2-geo-lex-quelle">
                Quelle:{' '}
                <a
                  href="https://sparktoro.com/blog/zero-click-searches-highest-in-the-uk-lowest-in-germany-and-france-has-the-most-efficient-searchers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SparkToro und Similarweb
                </a>
                , Jan. bis Apr. 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem – Aufbau wie die SEO-Leistungen der Langenfeld-Seite: links
          die Überschrift, die beim Scrollen stehen bleibt, rechts die Karten.
          Die Karten bleiben dabei oben kleben und schieben sich übereinander
          wie beim Ablauf-Stapel (reines CSS, position: sticky). */}
      <section className="v2-geo-sektion v2-geo-probleme">
        <div className="wrap v2-ms-grid">
          <div className="v2-ms-text">
            <h2 className="v2-me-h2">
              Bei Google gefunden, <span className="hl">in ChatGPT unsichtbar</span>?
            </h2>
            <p>
              Viele Selbstständige merken erst spät, dass ihre Kunden längst woanders fragen.
              Diese vier Situationen sind die häufigsten.
            </p>
            <p className="v2-geo-hinweis">
              <strong>Teste es selbst:</strong> Frag ChatGPT „Wer ist der beste [deine Leistung] in
              [deiner Stadt]?“
            </p>
          </div>

          <ol className="v2-geo-pstapel">
            {PROBLEME.map((k, i) => (
              <li key={k.titel} className="v2-geo-pkarte" style={{ '--i': i } as CSSProperties}>
                <Image
                  src={k.bild.src}
                  alt={k.bild.alt}
                  width={1120}
                  height={640}
                  sizes="(max-width: 900px) 92vw, 540px"
                  className="v2-geo-pkarte-bild"
                />
                <h3>{k.titel}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Beleg – dieselbe Fallstudie wie auf Startseite und Langenfeld-Seite. */}
      <section className="v2-zahlen">
        <div className="wrap">
          <div className="v2-za-kopf">
            <h2 className="v2-za-h2">
              Zahlen statt Versprechen: <span className="hl">GEO in der Praxis</span>
            </h2>
            <p className="v2-za-sub">
              Woher jede Zahl kommt, steht darunter. So halte ich es bei jedem Projekt.
            </p>
          </div>

          <article className="v2-fall">
            <div className="v2-fall-oben">
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
                    SHS Spürhundesport hatte keinen Onlineshop und damit null Sichtbarkeit.
                    Kein Sortiment im Netz, keine Kategorien, nichts, was Google oder eine KI
                    hätte finden können.
                  </p>
                </div>

                <span className="v2-fall-pfeil" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </span>

                <div className="v2-fall-block v2-fall-block--nachher">
                  <span className="v2-fall-label v2-fall-label--gut">Ergebnis</span>
                  <p>
                    <Link href="/blog/shopify-suchmaschinenoptimierung">Shopify-Shop</Link> von
                    Grund auf gebaut, SEO und KI-Lesbarkeit von der ersten Seite an. Nach zwölf
                    Monaten: 26.977 Impressionen, 4.975 Klicks und 18,4 % Klickrate. Dazu 430
                    Impressionen in KI-Antworten innerhalb von drei Monaten.
                  </p>
                </div>
              </div>

              <div className="v2-fall-bild">
                <Image
                  src="/bilder/referenzen/Rezension-Hero-SHS.webp"
                  alt="Startseite des Onlineshops von SHS Spürhundesport"
                  width={1670}
                  height={912}
                  sizes="(max-width: 900px) 92vw, 560px"
                />
                <span className="v2-fall-tech">
                  <Image src="/logos/shopify.svg" alt="" width={16} height={16} />
                  Shopify
                </span>
              </div>
              </div>

              <p className="v2-fall-zeitraum">Seit Dezember 2024 · Aufbau des Shops, SEO und GEO</p>
            </div>

            <ul className="v2-fall-facts">
              {SHORT_FACTS.map((f) => (
                <li key={f.label}>
                  <strong>{f.wert}</strong>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>

            <p className="v2-fall-quelle">
              Search Console, letzte zwölf Monate · KI-Impressionen über drei Monate.
            </p>
          </article>
        </div>
      </section>

      {/* 5. Über mich – gleicher Aufbau wie auf Startseite und Langenfeld-Seite. */}
      <section className="v2-uebermich" id="ueber-mich">
        <div className="wrap">
          <div className="v2-um-kopf">
            <h2 className="v2-um-h2">
              Timm Schurig,<br />
              <span className="hl">dein GEO Freelancer aus Langenfeld</span>
            </h2>
            <p className="v2-um-sub">
              5,0 Sterne aus 15+ Bewertungen auf Fiverr und Google · Search Console, Ahrefs und
              Screaming Frog im Werkzeugkasten.
            </p>
          </div>

          <div className="v2-um-buehne">
            <div className="v2-um-spalte v2-um-links">
              <span className="v2-um-mini">Seit 2021 selbstständig</span>
              <article className="v2-um-karte">
                <h3>Wer ich bin</h3>
                <p>
                  Ich bin Timm, Freelancer für Webdesign, SEO und GEO aus Langenfeld zwischen
                  Düsseldorf und Köln. Seit 2021 baue ich Websites und mache sie sichtbar, erst
                  bei Google, heute auch in ChatGPT und Co.
                </p>
              </article>
              <span className="v2-um-mini">Aus dem Rheinland</span>
            </div>

            <span className="v2-um-glow" aria-hidden="true" />

            <div className="v2-um-bild">
              <Image
                src="/bilder/timm/TS-Anzug-Website.webp"
                alt="Timm Schurig"
                width={1086}
                height={1448}
                sizes="(max-width: 900px) 72vw, 420px"
              />
            </div>

            <div className="v2-um-spalte v2-um-rechts">
              <span className="v2-um-mini">Website, SEO &amp; GEO</span>
              <article className="v2-um-karte">
                <h3>Wie ich arbeite</h3>
                <p>
                  Kein Team, keine Agentur: Wer mit mir spricht, spricht mit dem, der umsetzt. Ich
                  arbeite remote mit Kunden in ganz Deutschland, im Rheinland auch gern
                  persönlich.{' '}
                  <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">
                    Mehr über mich auf LinkedIn
                  </a>
                </p>
              </article>
              <span className="v2-um-mini">15+ Bewertungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Leistungen */}
      <section className="v2-geo-sektion" id="geo-leistungen">
        <div className="wrap">
          <div className="v2-geo-kopf">
            <h2 className="v2-geo-h2">
              Das setze ich als <span className="hl">GEO Freelancer</span> für dich um
            </h2>
            <p className="v2-geo-sub">
              Sechs Bausteine, die zusammen entscheiden, ob eine KI dich findet, versteht und
              nennt.
            </p>
          </div>
          <KartenRaster karten={BAUSTEINE} spalten={3} />
        </div>
      </section>

      {/* 7. Alleinstellungsmerkmal: kein Top-10-Wettbewerber baut selbst. */}
      <section className="v2-geo-sektion">
        <div className="wrap">
          <div className="v2-geo-split">
            <div className="v2-geo-split-text">
              <p className="label">Der Unterschied</p>
              <h2 className="v2-geo-h2">
                Website, SEO und GEO <span className="hl">aus einer Hand</span>
              </h2>
              <p>
                Die meisten GEO-Anbieter optimieren eine Website, die jemand anderes gebaut hat. Ich
                baue sie selbst. Struktur, Technik und Texte sind von der ersten Zeile an so
                angelegt, dass Google und KI-Systeme sie verstehen.
              </p>
              <p>
                Kein nachträgliches Flicken, kein Abstimmen zwischen Agentur, Entwickler und Texter.{' '}
                <Link href="/#angebot">So baue ich Websites</Link>
              </p>
              <ul className="v2-geo-tools" aria-label="Womit ich baue">
                {TOOLS.map((t) => (
                  <li key={t.name}>
                    <Image src={`/logos/${t.datei}.svg`} alt="" width={18} height={18} />
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="v2-geo-wege">
              {WEGE.map((w) => (
                <li key={w.titel}>
                  <strong>{w.titel}</strong>
                  <span>{w.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Zielgruppen – Bento-Raster mit Beispiel je Zielgruppe. */}
      <section className="v2-geo-sektion" id="fuer-wen">
        <div className="wrap">
          <div className="v2-geo-kopf">
            <h2 className="v2-geo-h2">
              Für wen ich als <span className="hl">GEO Freelancer</span> arbeite
            </h2>
            <p className="v2-geo-sub">
              GEO lohnt sich dort, wo Kunden vor der Entscheidung recherchieren und am Ende nur
              wenige Namen hören.
            </p>
          </div>
          <Zielgruppen />
          <p className="v2-geo-hinweis">
            <strong>Ehrlich gesagt:</strong> Wenn deine Website gerade erst entsteht, starten wir
            mit einer guten Website und soliden SEO-Grundlagen. GEO baut darauf auf.
          </p>
        </div>
      </section>

      {/* 9. GEO vs. SEO – als Schichten statt als Gegenüberstellung: SEO ist das
          Fundament, GEO die Ebene darauf. Die Kriterien stehen in beiden Ebenen
          übereinander, damit der Vergleich trotzdem lesbar bleibt. */}
      <section className="v2-geo-sektion">
        <div className="wrap">
          <div className="v2-geo-kopf">
            <h2 className="v2-geo-h2">
              GEO vs. SEO: <span className="hl">Was ist der Unterschied?</span>
            </h2>
            <p className="v2-geo-sub">
              GEO ist kein Ersatz, sondern die Ebene obendrauf. Das Fundament bleibt SEO.
            </p>
          </div>
          <GeoAufSeo />
          <p className="v2-geo-hinweis">
            GEO ersetzt <Link href="/seo-freelancer-langenfeld">SEO</Link> nicht. KI-Systeme suchen
            für aktuelle Antworten oft selbst bei Google oder Bing. Was dort nicht gefunden wird,
            landet selten in einer KI-Antwort. Deshalb mache ich beides.
          </p>
        </div>
      </section>

      {/* 10. Ablauf – derselbe Stapel wie auf Startseite und Langenfeld-Seite,
          mit eigenen GEO-Schritten. Grafik 2 und 3 aus Grafiken/Ablauf-GEO. */}
      <AblaufStapel
        schritte={ABLAUF}
        sub="Vier Schritte, bei jedem weißt du, was als Nächstes kommt."
        fazit="Erste Effekte wie saubere Indexierung und korrekte Angaben siehst du oft nach wenigen Wochen. Stabile Nennungen in KI-Antworten brauchen meist drei bis sechs Monate."
      />

      {/* 11. Preise */}
      <section className="v2-geo-sektion" id="preise">
        <div className="wrap">
          <div className="v2-geo-kopf">
            <h2 className="v2-geo-h2">
              Was kostet ein <span className="hl">GEO Freelancer</span>?
            </h2>
            <p className="v2-geo-sub">
              Bei mir gibt es feste Pakete statt Agenturstunden. Du weißt vorher, was es kostet.
            </p>
          </div>

          <ul className="v2-geo-pakete">
            {PAKETE.map((p) => (
              <li key={p.name} className={`v2-geo-paket${p.hervorgehoben ? ' v2-geo-paket--start' : ''}`}>
                {p.hervorgehoben && <span className="v2-geo-paket-marke">Einstieg</span>}
                <h3>{p.name}</h3>
                <p className="v2-geo-paket-preis">{p.preis}</p>
                <p className="v2-geo-paket-zusatz">{p.zusatz}</p>
                <p className="v2-geo-paket-text">{p.text}</p>
              </li>
            ))}
          </ul>

          <div className="v2-fw-fuss">
            <p>
              Du willst erst wissen, ob sich GEO für dich lohnt? Im kostenlosen Erstgespräch
              klären wir in 30 Minuten, ob ChatGPT und Perplexity dich überhaupt kennen.
            </p>
            <BuchenKnopf label="Erstgespräch buchen" />
          </div>
        </div>
      </section>

      {/* 12. Freelancer oder Agentur – zwei Karten im Duell. */}
      <section className="v2-geo-sektion">
        <div className="wrap">
          <div className="v2-geo-kopf">
            <h2 className="v2-geo-h2">
              GEO Freelancer <span className="hl">oder Agentur</span>?
            </h2>
          </div>
          <FreelancerOderAgentur />
          <p className="v2-geo-hinweis">
            <strong>Ehrlich:</strong> Für ein Großprojekt mit zehn Baustellen gleichzeitig ist eine
            Agentur die bessere Wahl. Für Selbstständige und kleine Unternehmen ist der direkte
            Draht meist schneller und günstiger.
          </p>
        </div>
      </section>

      {/* FAQ vor dem Abschluss-CTA */}
      <section className="v2-faq" id="haeufige-fragen">
        <div className="wrap">
          <div className="v2-faq-kopf">
            <h2 className="v2-faq-h2">
              Häufige Fragen zum <span className="hl">GEO Freelancer</span>
            </h2>
            <p className="v2-faq-sub">
              Deine Frage ist nicht dabei? Schreib mir, die Antwort kommt meist am selben Tag.
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

      {/* 13. Abschluss-CTA – führt wie alle Knöpfe zur Terminbuchung. */}
      <section className="v2-geo-abschluss" id="anfrage">
        <div className="wrap">
          <div className="v2-geo-abschluss-box">
            <h2 className="v2-geo-h2">
              Finde heraus, <span className="hl">ob ChatGPT dich kennt</span>
            </h2>
            <p>
              Im kostenlosen Erstgespräch schauen wir gemeinsam, ob und wie dich ChatGPT,
              Perplexity und Google AI Overviews nennen, und ich sage dir ehrlich, was sich
              lohnt. 30 Minuten, unverbindlich.
            </p>
            <div className="v2-geo-abschluss-knoepfe">
              <BuchenKnopf />
            </div>
            <p className="v2-geo-vertrauen">
              <span><span className="v2-geo-sterne" aria-hidden="true">★★★★★</span> 5,0 aus 15+ Bewertungen auf Fiverr &amp; Google</span>
            </p>
          </div>
        </div>
      </section>

      <V2Footer
        sprungmarken={[
          { href: '#was-ist-geo', text: 'Was ist GEO?' },
          { href: '#geo-leistungen', text: 'Leistungen' },
          { href: '#preise', text: 'Preise' },
          { href: '#ueber-mich', text: 'Über mich' },
          { href: '#haeufige-fragen', text: 'Häufige Fragen' },
          { href: '#anfrage', text: 'Erstgespräch' },
        ]}
      />
    </div>
  )
}
