import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts, Post } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'SEO & Webdesign News: Praxiswissen aus Langenfeld',
  description: 'SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus der Praxis eines Freelancers. Praxisnahes Wissen für mehr Sichtbarkeit im Netz.',
  alternates: { canonical: 'https://www.timmschurig.com/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.timmschurig.com/blog',
    title: 'Blog · Timm Schurig',
    description: 'SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus der Praxis eines Freelancers.',
    locale: 'de_DE',
    siteName: 'Timm Schurig – SEO & Webdesign',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <div className="blog-hero">
        <div className="wrap">
          <div className="page-label">Blog</div>
          <h1 className="blog-hero-title">SEO &amp; Webdesign News</h1>
          <p className="blog-hero-sub">SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus meiner Arbeit als Freelancer.</p>
          {/* Kurze Einordnung: Die Übersicht hatte im Audit nur 381 Wörter und
              bestand fast ausschließlich aus Anrisstexten der Beiträge. */}
          <p className="blog-hero-text">
            Hier schreibe ich über das, was ich täglich mache: Websites bauen, sie bei Google
            sichtbar machen und dafür sorgen, dass sie auch in KI-Antworten auftauchen. Keine
            Trend-Listen und keine Theorie aus zweiter Hand – sondern das, was in Projekten
            mit Handwerksbetrieben, Coaches und kleinen Onlineshops tatsächlich funktioniert
            hat. Wo es passt, stehen die Zahlen dazu.
          </p>
          <p className="blog-hero-text">
            Wenn du gerade vor einer konkreten Frage sitzt: Was SEO kostet, wie eine
            Unternehmenswebsite aufgebaut sein sollte und ob sich der Aufwand 2026 überhaupt
            noch lohnt, beantworten die Beiträge unten mit belegten Zahlen statt mit
            „das kommt darauf an".
          </p>
        </div>
      </div>

      <div className="wrap blog-wrap">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>Noch keine Beiträge vorhanden. Schau bald wieder rein.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {/* Nur der Titel ist der Link. Vorher umschloss der Link die ganze
                Karte – damit bestand der Linktext aus Datum, Titel, Anrisstext
                und "Weiterlesen" und war über 120 Zeichen lang. Klickbar bleibt
                die ganze Karte über .blog-card-title a::after. */}
            {posts.map((post: Post) => (
              <article key={post.id} className="blog-card">
                {post.cover_image && (
                  <div className="blog-card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.cover_image} alt={post.title} width={640} height={360} loading="lazy" />
                  </div>
                )}
                <div className="blog-card-body">
                  <time className="blog-date" dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                  <h2 className="blog-card-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-cta" aria-hidden="true">
                    Weiterlesen
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <footer>
        <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
        <div className="foot-links">
          <Link href="/referenzen/hundeshop">Referenzen</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
