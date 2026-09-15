import Image from 'next/image'

/**
 * Hinweis zu den Logos: Next.js, Vercel und GitHub haben Schwarz als
 * Markenfarbe. Auf den dunklen Chips wären sie unsichtbar, deshalb kommen
 * dort die weißen Varianten zum Einsatz. Shopify bleibt in seinem Grün.
 *
 * Drei Kundenwebsites direkt unter dem Hero – als Beleg, bevor die Seite
 * anfängt zu argumentieren. Gezeigt wird jeweils der obere Bereich der
 * echten Website, dazu die Technik dahinter.
 *
 * ⚠️ `href` ist noch leer: Sobald die Adressen feststehen, hier eintragen –
 * dann werden die Karten anklickbar und verlinken auf die Projekte.
 */
const projekte = [
  {
    bild: '/Rezension-Hero-SHS.webp',
    name: 'SHS Spürhundesport',
    stack: [{ name: 'Shopify', logo: 'shopify' }],
    href: '',
  },
  {
    bild: '/Rezension-Hero-Dr.webp',
    name: 'Resilient durchs Leben',
    stack: [
      { name: 'Next.js', logo: 'nextdotjs-weiss' },
      { name: 'Vercel', logo: 'vercel-weiss' },
      { name: 'GitHub', logo: 'github-weiss' },
    ],
    href: '',
  },
  {
    bild: '/Rezension-Hero-FS.webp',
    name: 'FS Performance Lab',
    stack: [
      { name: 'Next.js', logo: 'nextdotjs-weiss' },
      { name: 'Vercel', logo: 'vercel-weiss' },
      { name: 'GitHub', logo: 'github-weiss' },
    ],
    href: '',
  },
]

export default function Kundenwebsites() {
  return (
    <section className="kw-section" aria-label="Kundenwebsites">
      <div className="wrap">
        <div className="kw-grid">
          {projekte.map((p) => (
            <article key={p.name} className="kw-card">
              <div className="kw-shot">
                <Image
                  src={p.bild}
                  alt={`Startseite von ${p.name}`}
                  width={1670}
                  height={912}
                  sizes="(max-width: 900px) 92vw, 400px"
                />
              </div>
              {/* Nur die Technik dahinter. Der Name der Website steht im
                  Alt-Text des Screenshots – sichtbar würde er die Karten nur
                  beschweren. */}
              <div className="kw-body">
                {p.stack.map((t) => (
                  <span key={t.name} className="kw-tech" title={`${p.name} – ${t.name}`}>
                    <Image src={`/logos/${t.logo}.svg`} alt="" width={16} height={16} />
                    {t.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
