import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts, Post } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Blog · Timm Schurig',
  description: 'SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus der Praxis eines Freelancers.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <nav className="scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Timm <em>Schurig</em></Link>
          <Link href="/" className="nav-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Zurück
          </Link>
        </div>
      </nav>

      <div className="blog-hero">
        <div className="wrap">
          <div className="page-label">Blog</div>
          <h1 className="blog-hero-title">Aus der Praxis.</h1>
          <p className="blog-hero-sub">SEO-Tipps, Webdesign-Insights und ehrliche Einblicke aus meiner Arbeit als Freelancer.</p>
        </div>
      </div>

      <div className="wrap blog-wrap">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>Noch keine Beiträge vorhanden. Schau bald wieder rein.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post: Post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                {post.cover_image && (
                  <div className="blog-card-img" style={{ backgroundImage: `url(${post.cover_image})` }} />
                )}
                <div className="blog-card-body">
                  <time className="blog-date">{formatDate(post.published_at)}</time>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-cta">
                    Weiterlesen
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer>
        <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
        <div className="foot-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
