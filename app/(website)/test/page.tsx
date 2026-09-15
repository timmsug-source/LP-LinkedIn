import type { Metadata } from 'next'
import Image from 'next/image'
import AuditFormular from '@/components/AuditFormular'
import Kundenwebsites from '@/components/Kundenwebsites'

/**
 * Testseite für ein neues Startseiten-Design.
 *
 * Die Navigation kommt aus dem Layout, alles andere wird hier von Grund auf
 * neu aufgebaut. Der Wrapper `.v2` sorgt dafür, dass die Design-Regeln
 * (`.v2 …` in globals.css) ausschließlich hier greifen – die echte
 * Startseite bleibt unberührt.
 *
 * Nicht indexierbar und nicht in der Sitemap.
 */
export const metadata: Metadata = {
  title: 'Testseite – neues Startseiten-Design',
  robots: { index: false, follow: false },
}

/* Drei Belege unter der Subheadline – jeder greift einen Teil der
   Überschrift auf: Google, KI, Buchung. */
const PUNKTE = [
  'Sichtbar bei Google – und in den Antworten von ChatGPT & Perplexity',
  'Websites, die aus Besuchern Anfragen machen',
  'Belegte Zahlen aus der Search Console statt Bauchgefühl',
]

/* Werkzeuge mit Namen und einer kurzen Einordnung: Die Logos allein sagen
   den meisten Kunden nichts – Shopify kennt fast jeder, Vercel fast niemand.
   Die weißen Varianten, weil Next.js und Vercel Schwarz als Markenfarbe
   haben und auf dunklem Grund sonst verschwinden. */
const TOOLS = [
  { name: 'Next.js', datei: 'nextdotjs-weiss', rolle: 'Der technische Unterbau schneller Websites' },
  { name: 'Webflow', datei: 'webflow', rolle: 'Für Seiten, die du danach selbst pflegen willst' },
  { name: 'Shopify', datei: 'shopify', rolle: 'Onlineshops mit Zahlung und Versand' },
  { name: 'Vercel', datei: 'vercel-weiss', rolle: 'Hosting, weltweit und ohne Wartezeit' },
  { name: 'Search Console', datei: 'googlesearchconsole', rolle: 'Die Zahlen direkt von Google' },
  { name: 'Google Analytics', datei: 'googleanalytics', rolle: 'Was Besucher auf der Seite tatsächlich tun' },
  /* Für Ahrefs und Screaming Frog gibt es bei simpleicons kein Logo. Statt
     ein fremdes Zeichen zu basteln, steht dort das Kürzel im selben Chip. */
  { name: 'Ahrefs', kuerzel: 'ah', rolle: 'Keywords und Wettbewerb im Blick' },
  { name: 'Screaming Frog', kuerzel: 'SF', rolle: 'Technische Fehler finden, bevor Google sie findet' },
]


/* Der Ablauf einer Zusammenarbeit. Inhalt und Zeitangaben stammen aus
   components/Prozess.tsx – sie sollen sich nicht auseinanderentwickeln. */
const ABLAUF = [
  {
    n: '01',
    titel: 'Kostenloses Erstgespräch',
    dauer: '30 Minuten',
    text: 'Kein Formular, kein Warten auf Rückruf. Wir klären deine Situation, deine Ziele und ob wir zusammenpassen. Unverbindlich.',
  },
  {
    n: '02',
    titel: 'Analyse & Strategie',
    dauer: '3–5 Werktage',
    text: 'Keyword-Recherche, Wettbewerbsanalyse, technisches Audit. Du bekommst ein konkretes Konzept, bevor wir starten – keine Überraschungen.',
  },
  {
    n: '03',
    titel: 'Design & Umsetzung',
    dauer: 'mit deinem Feedback',
    text: 'Kein „hier ist dein Ergebnis, tschüss". Du siehst Zwischenstände, gibst Feedback, ich setze um.',
  },
  {
    n: '04',
    titel: 'Go-live und Betreuung',
    dauer: 'auf Wunsch monatlich',
    text: 'Der Launch ist nicht das Ende. Auf Wunsch begleite ich dich weiter – mit SEO, Reporting und technischer Betreuung.',
  },
]

/* Alle Angaben stammen aus der Case Study unter /referenzen/hundeshop und
   sind dort mit Screenshots aus der Search Console und dem Shop-Backend
   belegt. Nichts davon ist geschätzt.

   ⚠️ Hinweis: Die Case Study nennt den Kunden bewusst nicht beim Namen
   („ein Onlineshop für Hundeartikel"). Hier steht er namentlich – das sollte
   mit dem Kunden abgestimmt und an einer der beiden Stellen angeglichen
   werden. */
const SHORT_FACTS = [
  { wert: '26.977', label: 'Impressionen' },
  { wert: '4.975', label: 'Klicks' },
  { wert: '18,4 %', label: 'Klickrate' },
  { wert: '430', label: 'in KI-Antworten' },
]

/* Der Streifen unter dem Hero: warum ein Freelancer und keine Agentur. */
const VORTEILE = [
  { titel: 'Direkter Draht', text: 'Du sprichst mit dem, der auch baut. Kein Account-Manager dazwischen.' },
  { titel: 'Feste Preise', text: 'Klare Pakete statt Agenturstunden. Du weißt vorher, was es kostet.' },
  { titel: 'Kurze Wege', text: 'Entscheidungen am selben Tag statt Abstimmungsrunden über Wochen.' },
  { titel: 'Alles aus einer Hand', text: 'Design, Technik und Sichtbarkeit von einer Person gedacht.' },
]

export default function Testseite() {
  return (
    <div className="v2">
      <span className="v2-marke" aria-hidden="true">Testseite</span>

      {/* Hero und Streifen bilden zusammen den ersten Bildschirm. Deshalb
          liegen sie in einer Spalte: Der Hero nimmt sich, was der Streifen
          übrig lässt – und das Porträt steht damit exakt auf dessen Oberkante. */}
      <div className="v2-buehne">
        <section className="v2-hero">
          {/* Hintergrund: stark zurückgenommen, trägt nur die Fläche. */}
          <Image
            src="/Beispiel-Websites-Hero-Hintergrund.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="v2-hero-bild"
          />

          <div className="wrap v2-hero-grid">
            <div className="v2-hero-text">
              <h1 className="v2-hero-h1">
                Präsent auf Google.<br />
                Gefunden von KI.<br />
                <span className="hl">Gebucht von deinen Kunden.</span>
              </h1>
              <p className="v2-hero-sub">
                Ich baue für Selbstständige und Unternehmer Websites, die bei Google
                <strong> UND </strong>
                in KI-Suchen wie ChatGPT &amp; Perplexity sichtbar sind. Nicht irgendwann. Messbar.
              </p>

              <ul className="v2-hero-punkte">
                {PUNKTE.map((p) => (
                  <li key={p}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="v2-hero-cta">
                <AuditFormular />
                <span className="v2-hero-cta-hinweis">Unverbindlich · Antwort meist am selben Tag</span>
              </div>
            </div>

            {/* Rein dekorativ – die Aussage steht links im Text. */}
            {/* Bewusst ohne `fill`: fill setzt Breite, Höhe und alle vier
                Kanten als Inline-Style und überstimmt damit jede Regel aus
                dem Stylesheet. Hier soll aber die Höhe führen und die Breite
                dem Seitenverhältnis folgen. */}
            <div className="v2-hero-portrait" aria-hidden="true">
              <Image
                src="/TS-Herobild-frontal.webp"
                alt=""
                width={1402}
                height={1122}
                priority
                sizes="45vw"
              />
            </div>
          </div>
        </section>

        <div className="v2-streifen">
          <div className="wrap">
            <ul className="v2-streifen-liste">
              {VORTEILE.map((v) => (
                <li key={v.titel}>
                  <span className="v2-streifen-titel">{v.titel}</span>
                  <span className="v2-streifen-text">{v.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ergebnisse – Überschrift und Zahlen folgen, vorerst die Belege:
          die drei Kundenwebsites. Bewusst dieselbe Komponente wie auf der
          Startseite statt einer Kopie – die Bilder und die Technik dahinter
          sind dieselben, sie sollen sich nicht auseinanderentwickeln. */}
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
            <AuditFormular label="Jetzt Projekt anfragen" />
          </div>
        </div>
      </section>

      {/* Über mich: Überschrift mittig, darunter zwei Karten, zwischen denen
          das Porträt steht – es liegt vor den Karten und überragt sie. */}
      <section className="v2-uebermich">
        <div className="wrap">
          <div className="v2-um-kopf">
            <h2 className="v2-um-h2">
              Timm Schurig,<br />
              <span className="hl">SEO und Webdesign Experte</span>
            </h2>
            <p className="v2-um-sub">
              Freelancer aus Langenfeld, NRW – 5,0 Sterne aus 15+ Bewertungen auf
              Fiverr und Google.
            </p>
          </div>

          <div className="v2-um-buehne">
            {/* Je Seite eine Spalte: oben die kleine Karte, darunter die
                große. So bleibt die Reihenfolge im Quelltext auch dann
                sinnvoll, wenn das Raster auf dem Handy einspaltig wird. */}
            <div className="v2-um-spalte v2-um-links">
              <span className="v2-um-mini">5+ Jahre Erfahrung</span>
              <article className="v2-um-karte">
                <h3>Wer ich bin</h3>
                <p>
                  Freelancer aus Langenfeld – kein Team, kein Büro, keine Agentur im
                  Rücken. Ich arbeite remote mit Handwerksbetrieben, Coaches und kleinen
                  Onlineshops und baue jedes Projekt selbst. Wer mit mir spricht, spricht
                  mit dem, der die Website am Ende auch baut.
                </p>
              </article>
              <span className="v2-um-mini">Freelancer</span>
            </div>

            {/* Der Schein liegt bewusst NICHT im Bild-Element: Dessen weicher
                Verlauf an der Unterkante ist eine Maske, und die schneidet
                alles darin mit ab – der Schein stand dadurch als Rechteck
                hinter der Person. */}
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
                  Ich baue Websites von Grund auf – mit Next.js, Webflow oder Shopify, je
                  nachdem, was zum Projekt passt. Danach höre ich nicht auf: Ich schaue in
                  der Search Console nach, was die Seite tatsächlich bringt, und ob sie in
                  KI-Antworten auftaucht.
                </p>
              </article>
              <span className="v2-um-mini">15+ Bewertungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen als Bento: unterschiedlich schwere Kacheln statt eines
          Rasters aus gleich großen Kästen. Die drei Leistungen tragen, die
          vier kleinen Kacheln belegen. */}
      <section className="v2-leistungen">
        <div className="wrap">
          <div className="v2-le-kopf">
            <h2 className="v2-le-h2">
              Die Bausteine, die dich auf ein <span className="hl">neues Level</span> bringen.
            </h2>
            <p className="v2-le-sub">
              Eine Website ohne Sichtbarkeit findet niemand. Sichtbarkeit ohne gute
              Website bringt Besucher, die wieder gehen. Deshalb baue ich beides – und
              sorge dafür, dass es auch in KI-Antworten ankommt.
            </p>
          </div>

          <div className="v2-bento">
            <article className="v2-kachel v2-kachel-gross">
              <div className="v2-kachel-text">
                <h3>Eine Website, die zu dir passt – und Anfragen bringt.</h3>
                <p>
                  Gebaut mit Next.js, Webflow oder Shopify, je nachdem was zum Projekt
                  passt. Schnell, technisch sauber und von der ersten Zeile an auf
                  Auffindbarkeit ausgelegt.
                </p>
              </div>
              {/* Zwei Projekte statt einem: Das zweite liegt versetzt davor,
                  damit die Kachel zeigt, dass es nicht bei einer Website
                  geblieben ist – ohne dafür eine zweite Kachel zu brauchen. */}
              <div className="v2-kachel-bild v2-kachel-bild-website">
                <Image
                  src="/Rezension-Hero-Dr.webp"
                  alt="Ausschnitt der Website Resilient durchs Leben"
                  width={1670}
                  height={912}
                  sizes="(max-width: 900px) 60vw, 380px"
                />
                <Image
                  src="/Rezension-Hero-FS.webp"
                  alt="Ausschnitt der Website FS Performance Lab"
                  width={1670}
                  height={912}
                  sizes="(max-width: 900px) 60vw, 380px"
                />
              </div>
            </article>

            <article className="v2-kachel v2-kachel-breit">
              <div className="v2-kachel-text">
                <h3>Gefunden werden von denen, die schon suchen.</h3>
                <p>
                  Technisches Audit, Keyword-Strategie, Umsetzung – und danach der Beleg
                  in der Search Console statt einer Behauptung.
                </p>
              </div>
              {/* Ohne Bildunterschrift, deshalb div statt figure: Die Grafik
                  zeigt sichtbar ein Beispiel („deine Branche", „Deine Website")
                  und behauptet keine Messwerte. */}
              <div className="v2-kachel-bild v2-kachel-bild-shot">
                <Image
                  src="/SERP-Beispiel-deine-Branche.webp"
                  alt="Beispielhaftes Suchergebnis: eine Website auf Platz 1 für die eigene Branche"
                  width={1134}
                  height={688}
                  sizes="(max-width: 900px) 92vw, 420px"
                />
              </div>
            </article>

            <article className="v2-kachel v2-kachel-breit">
              <div className="v2-kachel-text">
                <h3>Auch dort auftauchen, wo keine Links mehr stehen.</h3>
                <p>
                  ChatGPT und Perplexity beantworten Fragen, statt Ergebnisse zu listen.
                  Ich sorge dafür, dass du in diesen Antworten vorkommst.
                </p>
              </div>
              <div className="v2-kachel-bild v2-kachel-bild-shot">
                <Image
                  src="/KI-Suche-Beispiel-deine-Branche.webp"
                  alt="Beispielhafte KI-Antwort, in der die eigene Website als Quelle genannt wird"
                  width={1130}
                  height={780}
                  sizes="(max-width: 900px) 92vw, 420px"
                />
              </div>
            </article>

            <article className="v2-kachel v2-kachel-tools">
              <h3 className="v2-kachel-titel">Meine Tools</h3>
              <ul className="v2-toolliste">
                {TOOLS.map((t) => (
                  <li key={t.name}>
                    <span className="v2-tool-chip">
                      {t.datei
                        ? <Image src={`/logos/${t.datei}.svg`} alt="" width={20} height={20} />
                        : <em>{t.kuerzel}</em>}
                    </span>
                    <span className="v2-tool-text">
                      <strong>{t.name}</strong>
                      <span>{t.rolle}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="v2-kachel v2-kachel-klein">
              <h3 className="v2-kachel-titel">Local SEO</h3>
              <p>Sichtbar in Google Maps und in deiner Region.</p>
              <div className="v2-kachel-bild v2-kachel-bild-lokal">
                <Image
                  src="/Lokal-Beispiel-deine-Branche.webp"
                  alt="Beispielhaftes lokales Suchergebnis mit Karte und Eintrag auf Platz 1"
                  width={652}
                  height={612}
                  sizes="(max-width: 900px) 92vw, 300px"
                />
              </div>
            </article>

            <article className="v2-kachel v2-kachel-klein v2-kachel-zahl">
              <h3 className="v2-kachel-titel">Ergebnisse</h3>
              <Image
                src="/logos/fiverr.svg"
                alt="Fiverr"
                width={240}
                height={76}
                className="v2-zahl-logo"
              />
              <strong>5,0</strong>
              <p>aus 15+ Bewertungen auf Fiverr und Google</p>
            </article>

            {/* Schließt den Block als flacher Streifen über die volle Breite. */}
            <article className="v2-kachel v2-kachel-streifen">
              <span className="v2-kachel-eyebrow">Reporting</span>
              <p>
                Du siehst monatlich, was es gebracht hat – nicht nur, was getan wurde.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Ablauf: links das Bild, rechts die Schritte an einer Linie, die beim
          Scrollen mitwächst. */}
      <section className="v2-ablauf">
        <div className="wrap">
          <div className="v2-ab-kopf">
            <h2 className="v2-ab-h2">
              So läuft die <span className="hl">Zusammenarbeit</span> ab.
            </h2>
            <p className="v2-ab-sub">
              Du weißt jederzeit, wo wir stehen – und was als Nächstes passiert.
            </p>
          </div>

          <div className="v2-ab-grid">
            {/* ⚠️ Platzhalter: Hier kommt ein Mockup mit MacBook, das aussieht
                wie ein laufendes Videogespräch. Sobald das Bild da ist, ersetzt
                ein <Image> diesen Kasten – die Maße bleiben gleich. */}
            <div className="v2-ab-bild">
              <div className="v2-ab-platzhalter" role="img" aria-label="Platzhalter für ein Mockup">
                <svg viewBox="0 0 200 124" fill="none" aria-hidden="true">
                  <rect x="26" y="10" width="148" height="92" rx="6" stroke="currentColor" strokeWidth="2.5" />
                  <rect x="38" y="22" width="124" height="68" rx="3" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
                  <circle cx="100" cy="49" r="11" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
                  <path d="M82 78c0-9 8-15 18-15s18 6 18 15" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
                  <path d="M8 108h184l-8 8H16l-8-8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                </svg>
                <span>Platzhalter</span>
                <small>MacBook-Mockup, Ansicht im Videogespräch</small>
              </div>
            </div>

            <ol className="v2-ab-schritte">
              {ABLAUF.map((s) => (
                <li key={s.n}>
                  <span className="v2-ab-punkt" aria-hidden="true" />
                  <div className="v2-ab-kopfzeile">
                    <span className="v2-ab-n">{s.n}</span>
                    <h3>{s.titel}</h3>
                    <span className="v2-ab-dauer">{s.dauer}</span>
                  </div>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
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
              Search Console, letzte zwölf Monate · KI-Impressionen über drei Monate.{' '}
              <a href="/referenzen/hundeshop">Zur Case Study mit den Screenshots →</a>
            </p>
          </article>

          {/* ⚠️ Zweites Kundenergebnis – noch vollständig Platzhalter.
              Texte, Zahlen und Bild fehlen; nichts davon ist erfunden, damit
              hier keine Angabe live geht, die niemand belegen kann. */}
          <article className="v2-fall v2-fall--offen">
            <div className="v2-fall-oben">
              <div className="v2-fall-badges">
                <span className="v2-fall-badge">Kundenergebnisse</span>
                <span className="v2-fall-badge v2-fall-badge--art">Redesign</span>
              </div>

              <div className="v2-fall-mitte">
                <div className="v2-fall-text">
                  <div className="v2-fall-block v2-fall-block--vorher">
                    <span className="v2-fall-label">Ausgangssituation</span>
                    <p className="v2-fall-leer">
                      Platzhalter: Wie sah die Website vorher aus, und woran hat es
                      gehakt? Zwei bis drei Sätze.
                    </p>
                  </div>

                  <span className="v2-fall-pfeil" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </span>

                  <div className="v2-fall-block v2-fall-block--nachher">
                    <span className="v2-fall-label v2-fall-label--gut">Ergebnis</span>
                    <p className="v2-fall-leer">
                      Platzhalter: Was wurde gemacht und was ist dabei herausgekommen?
                      Zahlen kommen unten in die Leiste.
                    </p>
                  </div>
                </div>

                <div className="v2-fall-bild">
                  <div className="v2-fall-platzhalter" role="img" aria-label="Platzhalter für den Screenshot der Website">
                    <svg viewBox="0 0 200 124" fill="none" aria-hidden="true">
                      <rect x="12" y="12" width="176" height="100" rx="7" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M12 38h176" stroke="currentColor" strokeWidth="2" />
                      <circle cx="26" cy="25" r="3" fill="currentColor" />
                      <circle cx="38" cy="25" r="3" fill="currentColor" />
                      <circle cx="50" cy="25" r="3" fill="currentColor" />
                      <rect x="28" y="54" width="62" height="8" rx="4" fill="currentColor" opacity=".45" />
                      <rect x="28" y="70" width="90" height="6" rx="3" fill="currentColor" opacity=".25" />
                      <rect x="28" y="82" width="74" height="6" rx="3" fill="currentColor" opacity=".25" />
                      <rect x="130" y="54" width="46" height="42" rx="5" fill="currentColor" opacity=".18" />
                    </svg>
                    <span>Platzhalter</span>
                    <small>Screenshot der Website folgt</small>
                  </div>
                </div>
              </div>

              <p className="v2-fall-zeitraum">Platzhalter: Zeitraum und Umfang</p>
            </div>

            <ul className="v2-fall-facts v2-fall-facts--leer">
              {['Impressionen', 'Klicks', 'Klickrate', 'in KI-Antworten'].map((label) => (
                <li key={label}>
                  <strong>—</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <p className="v2-fall-quelle v2-fall-leer">Platzhalter: Quelle der Zahlen</p>
          </article>

        </div>
      </section>

      {/* Messen statt spekulieren – vorerst nur die Überschrift, der Inhalt kommt später. */}
      <section className="v2-messen">
        <div className="wrap">
          <h2 className="v2-me-h2">Messen statt spekulieren</h2>
        </div>
      </section>

      {/* Der Rest folgt. */}
    </div>
  )
}
