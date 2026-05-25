import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID!

// ── Blog types ────────────────────────────────────────────
export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string | null
  cover_image: string | null
  meta_title: string | null
  meta_description: string | null
  related_posts: string[] | null
  cta_enabled: boolean
  cta_position: number
  cta_headline: string | null
  cta_text: string | null
  cta_button_text: string | null
  cta_button_href: string | null
  published_at: string
  created_at: string
}

// ── Blog queries ──────────────────────────────────────────
export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, cover_image, published_at, created_at')
    .eq('site_id', SITE_ID)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
  if (error) {
    console.error('[Blog] getPosts error:', error.message ?? error)
    return []
  }
  return (data ?? []) as Post[]
}

export async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('site_id', SITE_ID)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
  if (error) {
    console.error('[Blog] getPost error:', error.message ?? error)
    return null
  }
  return data
}

// ── CMS queries ───────────────────────────────────────────
export async function getSection(slug: string) {
  const { data } = await supabase
    .from('pages')
    .select('title, content')
    .eq('site_id', SITE_ID)
    .eq('slug', slug)
    .single()
  return data
}

export async function getAllSections() {
  const { data } = await supabase
    .from('pages')
    .select('slug, title, content')
    .eq('site_id', SITE_ID)

  if (!data) return {}

  return data.reduce((acc, page) => {
    try {
      acc[page.slug] = { title: page.title, ...JSON.parse(page.content || '{}') }
    } catch {
      acc[page.slug] = { title: page.title, content: page.content }
    }
    return acc
  }, {} as Record<string, Record<string, unknown>>)
}
