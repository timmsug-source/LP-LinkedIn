import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { getPost, getPosts } from '@/lib/supabase'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Nicht gefunden · Timm Schurig' }
  return {
    title: `${post.title} · Timm Schurig`,
    description: post.excerpt,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const html = marked(post.content ?? '')

  return (
    <>
      <nav className="scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Timm <em>Schurig</em></Link>
          <Link href="/blog" className="nav-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Alle Beiträge
          </Link>
        </div>
      </nav>

      <article className="post-wrap">
        <div className="post-header">
          <time className="blog-date">{formatDate(post.published_at)}</time>
          <h1 className="post-title">{post.title}</h1>
          {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
        </div>

        {post.cover_image && (
          <div className="post-cover" style={{ backgroundImage: `url(${post.cover_image})` }} />
        )}

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="post-footer">
          <Link href="/blog" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Alle Beiträge
          </Link>
          <a href="#kontakt" className="btn">
            Projekt anfragen
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>

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
