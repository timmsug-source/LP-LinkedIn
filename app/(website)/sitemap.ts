import type { MetadataRoute } from 'next'
import { getBeitraege } from '@/lib/hub/blog'
import { BASE_URL } from '@/lib/jsonld'

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
  home: '2026-09-30',
  seoFreelancerLangenfeld: '2026-09-30',
  impressum: '2026-10-01',
} as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBeitraege()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.published_at,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED.home,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      // Die Übersicht ist so aktuell wie ihr jüngster Beitrag.
      url: `${BASE_URL}/blog`,
      lastModified: posts[0]?.published_at ?? LAST_UPDATED.home,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/seo-freelancer-langenfeld`,
      lastModified: LAST_UPDATED.seoFreelancerLangenfeld,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...blogEntries,
    {
      url: `${BASE_URL}/impressum`,
      lastModified: LAST_UPDATED.impressum,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    // /datenschutz ist noindex und bleibt bewusst aus der Sitemap
  ]
}
