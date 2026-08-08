import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/supabase'

/**
 * Ohne diese Angabe wird die Sitemap beim Build erzeugt und bleibt es. Neue
 * Blogbeiträge stehen dann zwar sofort auf der Seite, tauchen aber erst beim
 * nächsten Deploy in der Sitemap auf. Einmal pro Stunde neu erzeugen reicht,
 * um Google zeitnah auf neue Beiträge zu stoßen.
 */
export const revalidate = 3600

/**
 * lastmod meldet den letzten inhaltlichen Stand einer Seite – nicht den
 * Zeitpunkt des Builds. Mit `new Date()` bekam jede Seite bei jedem Deploy
 * ein neues Datum, auch wenn sich an ihr nichts geändert hat. Google wertet
 * das als Aktualisierung und zeigt es im Suchergebnis als Datum an ("vor
 * 1 Tag") – bei einer Leistungsseite unerwünscht.
 *
 * Datum hier von Hand hochsetzen, wenn die Seite inhaltlich überarbeitet
 * wurde. Blogbeiträge brauchen das nicht, die bringen ihr eigenes mit.
 */
const LAST_UPDATED = {
  home: '2026-07-23',
  geo: '2026-07-30',
  seoFreelancer: '2026-07-23',
  impressum: '2026-07-30',
} as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.timmschurig.com/blog/${post.slug}`,
    lastModified: post.published_at,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://www.timmschurig.com',
      lastModified: LAST_UPDATED.home,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      // Die Übersicht ist so aktuell wie ihr jüngster Beitrag.
      url: 'https://www.timmschurig.com/blog',
      lastModified: posts[0]?.published_at ?? LAST_UPDATED.home,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.timmschurig.com/geo-agentur-langenfeld',
      lastModified: LAST_UPDATED.geo,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.timmschurig.com/seo-freelancer',
      lastModified: LAST_UPDATED.seoFreelancer,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: 'https://www.timmschurig.com/impressum',
      lastModified: LAST_UPDATED.impressum,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    // /datenschutz und /bewerbung sind noindex und bleiben bewusst aus der Sitemap
  ]
}
