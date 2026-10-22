import Link from 'next/link'
import { getBeitraege } from '@/lib/hub/blog'

/**
 * Blog-Vorschau für die Startseite: die drei neuesten Beiträge aus dem Hub.
 *
 * Die Karten sind dieselben wie in der Blog-Übersicht (`.v2-bl-karte`), nur
 * mit h3 statt h2, weil sie hier unter der Abschnittsüberschrift stehen.
 * Gibt es keine Beiträge (oder ist der Hub nicht erreichbar), fällt der
 * Abschnitt ganz weg statt leer dazustehen.
 */
const ANZAHL = 3

function datum(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Pfeil() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
  )
}

export default async function BlogVorschau() {
  const posts = (await getBeitraege()).slice(0, ANZAHL)
  if (posts.length === 0) return null

  return (
    <section className="v2-blogvorschau" aria-labelledby="blogvorschau-titel">
      <div className="wrap">
        <div className="v2-bv-kopf">
          <div>
            <h2 className="v2-bv-h2" id="blogvorschau-titel">
              Praxiswissen zu <span className="hl">SEO, GEO &amp; KI</span>
            </h2>
            <p className="v2-bv-sub">
              Was sich bei Google und in KI-Suchen gerade ändert und was das für deine Website
              heißt. Mit Zahlen und Quellen statt Bauchgefühl.
            </p>
          </div>
          <Link href="/blog" className="v2-bv-alle">
            Alle Beiträge <Pfeil />
          </Link>
        </div>

        <div className="v2-bl-grid">
          {posts.map((post) => (
            <article key={post.slug} className="v2-bl-karte">
              <div className="v2-bl-bild">
                {post.category && <span className="v2-bl-kat">{post.category}</span>}
                {post.cover_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.cover_image} alt="" width={640} height={360} loading="lazy" />
                )}
              </div>
              <div className="v2-bl-text">
                <time dateTime={post.published_at}>{datum(post.published_at)}</time>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && <p>{post.excerpt}</p>}
                <span className="v2-bl-weiter" aria-hidden="true">Weiterlesen <Pfeil /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
