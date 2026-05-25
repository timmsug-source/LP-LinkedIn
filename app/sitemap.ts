import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/supabase'

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
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.timmschurig.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: 'https://www.timmschurig.com/impressum',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: 'https://www.timmschurig.com/datenschutz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    // /bewerbung ist noindex und bleibt bewusst aus der Sitemap
  ]
}
