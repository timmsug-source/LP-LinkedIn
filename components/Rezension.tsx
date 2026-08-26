'use client'

interface Review { text: string; source: 'Google' | 'Fiverr' }

const reviews: Review[] = [
  { text: 'Timm ist individuell auf mich eingegangen und hat mir mit meiner Homepage super geholfen. Danke dir und kann ich nur weiterempfehlen.', source: 'Google' },
  { text: 'gerne wieder. Sehr Professionell', source: 'Fiverr' },
  { text: 'schnelle und unkomplizierte Lieferung!', source: 'Fiverr' },
  { text: 'Schnell und unkompliziert, gerne wieder :)', source: 'Fiverr' },
  { text: 'Es hat alles prima geklappt, danke!', source: 'Fiverr' },
  { text: 'Nur zu Empfehlen! Alles wie gewünscht umgesetzt.', source: 'Fiverr' },
  { text: 'superschnelle kompetente Umsetzung – besten Dank!', source: 'Fiverr' },
  { text: 'Netter Kontakt, schnelle und zuverlässige Lieferung – alles bestens. Danke Timm!', source: 'Fiverr' },
  { text: 'Quick and Efficient – the address to go for future projects.', source: 'Fiverr' },
  { text: 'Vielen Dank Tim, alles perfekt umgesetzt! :-)', source: 'Fiverr' },
  { text: 'Danke Timm, es war mir eine Freude. Es war genau das, wonach ich gesucht habe. Kann Timm nur weiterempfehlen!', source: 'Fiverr' },
  { text: 'Timm did a great job, the communication was easy and clear and the results are stunning – thank you so much!', source: 'Fiverr' },
  { text: 'Danke für eine sehr gute Bearbeitung unseres Auftrags. Gerne wieder!', source: 'Fiverr' },
  { text: 'Super service, fast and competent.', source: 'Fiverr' },
  { text: 'Fast and good communication.', source: 'Fiverr' },
]

const row1 = reviews.slice(0, 8)
const row2 = reviews.slice(8)

/* `doppelt` markiert die Kopie, die das Laufband endlos wirken lässt. Sie ist
   für Screenreader und Crawler ausgeblendet – sonst zählt jede Bewertung als
   doppelter Textblock auf der Seite. */
function ReviewCard({ r, doppelt = false }: { r: Review; doppelt?: boolean }) {
  return (
    <div className="rz-card" aria-hidden={doppelt || undefined} data-nosnippet={doppelt || undefined}>
      <div className="rz-card-top">
        <div className="rz-stars">★★★★★</div>
        <span className={`rz-badge rz-badge--${r.source.toLowerCase()}`}>{r.source}</span>
      </div>
      <p className="rz-text">&bdquo;{r.text}&ldquo;</p>
    </div>
  )
}

export default function Rezension({ data: _ }: { data?: Record<string, unknown> }) {
  return (
    <section id="rezension" className="rz-section">
      <div className="wrap rz-head">
        <div className="label">Bewertungen</div>
        <h2 className="rz-h2">Was Kunden über meine Arbeit sagen</h2>
        <p className="sec-intro rz-intro">
          {reviews.length}+ verifizierte Bewertungen auf Google &amp; Fiverr
        </p>
      </div>

      <div className="rz-tracks">
        {/* Row 1 – scrolls left */}
        <div className="rz-track">
          <div className="rz-inner rz-inner--left">
            {[...row1, ...row1].map((r, i) => <ReviewCard key={i} r={r} doppelt={i >= row1.length} />)}
          </div>
        </div>
        {/* Row 2 – scrolls right */}
        <div className="rz-track">
          <div className="rz-inner rz-inner--right">
            {[...row2, ...row2].map((r, i) => <ReviewCard key={i} r={r} doppelt={i >= row2.length} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
