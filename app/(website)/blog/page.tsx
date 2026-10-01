import type { Metadata } from 'next'
import Link from 'next/link'
import { getBeitraege } from '@/lib/hub/blog'
import { BASE_URL } from '@/lib/jsonld'
import { cms } from '@/lib/hub/markierung'
import BuchenKnopf from '@/components/BuchenKnopf'
import V2Footer from '@/components/V2Footer'

/**
 * Blog-Übersicht im Design der Startseite. Die Beiträge kommen aus dem
 * Website-Hub (siehe lib/hub/blog.ts) und werden dort auch geschrieben.
 *
 * Die Karten verlinken auf die Beiträge unter /blog/[slug] – die bleiben
 * vorerst im bisherigen Design. Titel und Beschreibung stammen von der
 * früheren Übersicht, damit sich an Suchergebnissen nichts ändert.
 */
export const metadata: Metadata = {
  title: 'SEO & Webdesign News: Praxiswissen aus Langenfeld',
  description:
    'SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus der Praxis eines Freelancers. Praxisnahes Wissen für mehr Sichtbarkeit im Netz.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/blog`,
    title: 'Blog · Timm Schurig',
    description: 'SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus der Praxis eines Freelancers.',
    locale: 'de_DE',
    siteName: 'Timm Schurig – SEO & Webdesign',
  },
}

// Wie bei den Beiträgen: neue Artikel erscheinen nach spätestens fünf Minuten.
export const revalidate = 300

function datum(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Id eines Beitragsfeldes für den visuellen Editor im Hub. */
const feld = (slug: string, name: string) => `@blog/${slug}/${name}`

function Pfeil() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
  )
}

export default async function BlogUebersicht() {
  const posts = await getBeitraege()
  const [neuster, ...weitere] = posts

  return (
    <div className="v2">

      <section className="v2-bl-hero">
        <div className="wrap">
          <h1 className="v2-bl-h1">
            SEO &amp; Webdesign <span className="hl">News</span>
          </h1>
          <p className="v2-bl-sub">
            SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus meiner Arbeit als
            Freelancer – mit Zahlen, wo es welche gibt.
          </p>
          {posts.length > 0 && (
            <span className="v2-bl-anzahl">{posts.length} Beiträge</span>
          )}
        </div>
      </section>

      <section className="v2-bl-liste" aria-label="Beiträge">
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="v2-bl-leer">Noch keine Beiträge vorhanden. Schau bald wieder rein.</p>
          ) : (
            <>
              {/* Der neueste Beitrag groß: Er ist der Grund, warum jemand
                  wiederkommt. Nur der Titel ist Link, klickbar ist über
                  ::after trotzdem die ganze Karte – so bleibt der Linktext kurz. */}
              <article className="v2-bl-top">
                <div className="v2-bl-bild">
                  {neuster.cover_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={neuster.cover_image} alt="" width={960} height={600} />
                  )}
                </div>
                <div className="v2-bl-top-text">
                  <div className="v2-bl-meta">
                    <span className="v2-bl-neu">Neu</span>
                    <time dateTime={neuster.published_at} {...cms(feld(neuster.slug, 'published_at'), 'feld')}>{datum(neuster.published_at)}</time>
                  </div>
                  <h2>
                    <Link href={`/blog/${neuster.slug}`} {...cms(feld(neuster.slug, 'title'))}>{neuster.title}</Link>
                  </h2>
                  {neuster.excerpt && <p {...cms(feld(neuster.slug, 'excerpt'))}>{neuster.excerpt}</p>}
                  <span className="v2-bl-weiter" aria-hidden="true">Weiterlesen <Pfeil /></span>
                </div>
              </article>

              {weitere.length > 0 && (
                <div className="v2-bl-grid">
                  {weitere.map((post) => (
                    <article key={post.slug} className="v2-bl-karte">
                      <div className="v2-bl-bild">
                        {post.cover_image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={post.cover_image} alt="" width={640} height={360} loading="lazy" />
                        )}
                      </div>
                      <div className="v2-bl-text">
                        <time dateTime={post.published_at} {...cms(feld(post.slug, 'published_at'), 'feld')}>{datum(post.published_at)}</time>
                        <h2>
                          <Link href={`/blog/${post.slug}`} {...cms(feld(post.slug, 'title'))}>{post.title}</Link>
                        </h2>
                        {post.excerpt && <p {...cms(feld(post.slug, 'excerpt'))}>{post.excerpt}</p>}
                        <span className="v2-bl-weiter" aria-hidden="true">Weiterlesen <Pfeil /></span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Einordnung unten statt im Kopf: Die Übersicht bestand im Audit fast
              nur aus Anrisstexten. Der Text bleibt für Suchmaschinen erhalten,
              ohne den Kopf der Seite zu beschweren. */}
          <div className="v2-bl-ueber">
            <h2>Worum es hier geht</h2>
            <p>
              Hier schreibe ich über das, was ich täglich mache: Websites bauen, sie bei Google
              sichtbar machen und dafür sorgen, dass sie auch in KI-Antworten auftauchen. Keine
              Trend-Listen und keine Theorie aus zweiter Hand – sondern das, was in Projekten
              mit Handwerksbetrieben, Coaches und kleinen Onlineshops tatsächlich funktioniert
              hat. Wo es passt, stehen die Zahlen dazu.
            </p>
            <p>
              Wenn du gerade vor einer konkreten Frage sitzt: Was SEO kostet, wie eine
              Unternehmenswebsite aufgebaut sein sollte und ob sich der Aufwand 2026 überhaupt
              noch lohnt, beantworten die Beiträge oben mit belegten Zahlen statt mit
              „das kommt darauf an".
            </p>
          </div>

          <div className="v2-cta v2-bl-cta">
            <div>
              <h2 className="v2-cta-titel">Lieber gleich wissen, wo deine Website steht?</h2>
              <p className="v2-cta-text">
                Statt zehn Artikel zu lesen: Ich schaue mir deine Seite an und sage dir, was
                sich lohnt. Kostenlos und unverbindlich.
              </p>
            </div>
            <BuchenKnopf />
          </div>
        </div>
      </section>

      <V2Footer basis="/" />
    </div>
  )
}
