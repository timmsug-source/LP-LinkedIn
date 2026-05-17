import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID!

// Blog types
export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string | null
  cover_image: string | null
  published_at: string
  created_at: string
}

// Blog queries
export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, cover_image, published_at, created_at')
    .order('published_at', { ascending: false })
  if (error) { console.error(error); return [] }
  return (data ?? []) as Post[]
}

export async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) { console.error(error); return null }
  return data
}

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
