import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'

marked.use({ gfm: true, breaks: true })
import { getPost, getPosts } from '@/lib/supabase'
import { BASE_URL, articleSchema, breadcrumbSchema } from '@/lib/jsonld'
import { buildToc } from '@/lib/toc'
import { extractFaq, faqSchema } from '@/lib/faq'
import { extractHowTo, howToSchema } from '@/lib/howto'
import PostToc from './toc'

interface Props { params: Promise<{ slug: string }> }

export const revalidate = 0 // always fresh — CTA position changes apply instantly

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Nicht gefunden' }

  const metaTitle = post.meta_title || post.title
  const metaDescription = post.meta_description || post.excerpt || ''
  const canonicalUrl = `${BASE_URL}/blog/${slug}`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      locale: 'de_DE',
      siteName: 'Timm Schurig – SEO & Webdesign',
      publishedTime: post.published_at,
      modifiedTime: post.published_at,
      authors: ['Timm Schurig'],
      images: post.cover_image
        ? [{ url: post.cover_image, width: 1200, height: 630, alt: metaTitle }]
        : [{ url: `${BASE_URL}/timm.png`, width: 1200, height: 630, alt: metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [post.cover_image || `${BASE_URL}/timm.png`],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const [post, allPosts] = await Promise.all([getPost(slug), getPosts()])
  if (!post) notFound()

  let related: typeof allPosts = []
  if (post.related_posts && post.related_posts.length > 0) {
    related = post.related_posts
      .map(id => allPosts.find(p => p.id === id))
      .filter((p): p is NonNullable<typeof p> => !!p)
  } else {
    related = allPosts.filter((p) => p.slug !== slug).slice(0, 3)
  }

  // Tiptap saves HTML directly — use it as-is.
  // Only run marked() on legacy Markdown content (doesn't start with '<').
  const content = post.content ?? ''
  const rawHtml = content.trimStart().startsWith('<')
    ? content
    : marked(content) as string

  function buildHtmlWithCta(source: string): string {
    if (!post?.cta_enabled) return source

    const headline = post.cta_headline || 'Bereit für mehr Sichtbarkeit?'
    const btnText = post.cta_button_text || 'Kostenloses Erstgespräch'
    const btnHref = post.cta_button_href || '/#kontakt'

    const ctaHtml = [
      '<div class="post-cta">',
      '<div class="post-cta-img-wrap">',
      '<img src="/timm-cta.png" alt="Timm Schurig" class="post-cta-img" loading="lazy" />',
      '</div>',
      '<div class="post-cta-text">',
      '<p class="post-cta-label">Kostenlos &amp; unverbindlich</p>',
      '<p class="post-cta-headline">' + headline + '</p>',
      '</div>',
      '<a href="' + btnHref + '" class="post-cta-btn">',
      '<span>' + btnText + '</span>',
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
      '</a>',
      '</div>',
    ].join('')

    const MARKER = '<div data-cta-block=""></div>'
    if (source.includes(MARKER)) return source.replaceAll(MARKER, ctaHtml)

    const position = post.cta_position ?? 0
    if (position < 1) return source

    const tag = '</p>'
    let insertAt = -1, count = 0, search = 0
    while (count < position) {
      const found = source.indexOf(tag, search)
      if (found === -1) break
      insertAt = found + tag.length; search = insertAt; count++
    }
    if (insertAt < 0 || insertAt >= source.length - 50) return source + ctaHtml
    return source.slice(0, insertAt) + ctaHtml + source.slice(insertAt)
  }

  // Tabellen in einen scrollbaren Rahmen packen, damit sie auf dem Handy
  // nicht das Layout sprengen.
  const withTables = buildHtmlWithCta(rawHtml)
    .replaceAll('<table', '<div class="table-scroll"><table')
    .replaceAll('</table>', '</table></div>')

  // IDs an die Überschriften hängen und daraus das Inhaltsverzeichnis bauen.
  const { html, toc } = buildToc(withTables)

  const ldArticle = articleSchema(post)
  const ldBreadcrumb = breadcrumbSchema([
    { name: 'Startseite', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${slug}` },
  ])

  // Beiträge mit einem FAQ-Abschnitt bekommen zusätzlich FAQPage-Markup.
  // Ab zwei Paaren – ein einzelnes ergibt als FAQ-Seite keinen Sinn.
  const faq = extractFaq(html)
  const ldFaq = faq.length >= 2 ? faqSchema(faq) : null

  // Anleitung nur, wenn der Beitrag eine Liste ausdrücklich als solche markiert
  // hat (<ol class="howto">) – siehe lib/howto.ts.
  const howto = extractHowTo(html)
  const ldHowTo = howto ? howToSchema(howto, `${BASE_URL}/blog/${slug}`) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }}
      />
      {ldFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }}
        />
      )}
      {ldHowTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldHowTo) }}
        />
      )}

      <article className="post-wrap" itemScope itemType="https://schema.org/Article">
        {/* Kopf, Titelbild, Verzeichnis und Text liegen bewusst alle direkt im
            Grid: am Desktop landen Kopf/Bild/Text in der rechten Spalte und das
            Verzeichnis daneben, ohne Grid steht es in genau der Reihenfolge
            untereinander, in der man es auf dem Handy lesen will. */}
        <div className="post-grid">
          <div className="post-header">
            <div role="navigation" aria-label="Breadcrumb" className="post-breadcrumb">
              <Link href="/blog">← Alle Beiträge</Link>
            </div>
            <time className="blog-date" dateTime={post.published_at} itemProp="datePublished">
              {formatDate(post.published_at)}
            </time>
            <h1 className="post-title" itemProp="headline">{post.title}</h1>
            {post.excerpt && <p className="post-excerpt" itemProp="description">{post.excerpt}</p>}
            <div className="post-author" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">Timm Schurig</span>
              <span className="post-author-role">SEO & Webdesign Freelancer</span>
            </div>
          </div>

          {post.cover_image && (
            <div className="post-cover" style={{ backgroundImage: `url(${post.cover_image})` }} role="img" aria-label={post.title} />
          )}

          <aside className="post-aside">
            <PostToc items={toc} />
          </aside>

          <div className="post-main">
            <div
              className="post-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Weitere Ratgeber */}
            {related.length > 0 && (
              <section className="related-section related-section--inline" aria-label="Weitere Artikel">
                <div className="related-head">
                  <h2 className="label">Weitere Ratgeber</h2>
                </div>
                <div className="related-grid">
                  {related.map((p) => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="blog-card" aria-label={p.title}>
                      {p.cover_image && (
                        <div className="blog-card-img">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.cover_image} alt={p.title} width={640} height={360} loading="lazy" />
                        </div>
                      )}
                      {/* Bewusst ohne Anrisstext: Die Karten stehen hier in der
                          schmalen Textspalte, drei nebeneinander. Mit Auszug
                          werden sie zu drei hohen, kaum lesbaren Säulen –
                          Datum und Titel reichen für die Auswahl. */}
                      <div className="blog-card-body">
                        <time className="blog-date" dateTime={p.published_at}>{formatDate(p.published_at)}</time>
                        <h2 className="blog-card-title">{p.title}</h2>
                        <span className="blog-card-cta">
                          Weiterlesen
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="post-footer">
              <Link href="/blog" className="btn-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                Alle Beiträge
              </Link>
              <a href="/#kontakt" className="btn">
                Projekt anfragen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      <footer>
        <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
        <div className="foot-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
