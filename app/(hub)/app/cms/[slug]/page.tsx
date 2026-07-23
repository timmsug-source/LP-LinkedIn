import { createClient } from '@/lib/hub/server'
import { redirect, notFound } from 'next/navigation'
import CmsShell from './cms-shell'

export default async function CmsSitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  const isAdmin = profile?.role === 'admin'

  // Fetch site — admin can see any, client only own
  const query = supabase.from('sites').select('*').eq('slug', slug)
  const { data: site } = isAdmin
    ? await query.single()
    : await query.eq('owner_id', user.id).single()

  if (!site) notFound()

  // Load existing CMS content blocks
  const { data: blocks } = await supabase
    .from('content_blocks')
    .select('*')
    .eq('site_id', site.id)
    .order('sort_order')

  // Load blog posts
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, published, published_at, updated_at')
    .eq('site_id', site.id)
    .order('updated_at', { ascending: false })

  return (
    <CmsShell
      site={site}
      initialBlocks={blocks ?? []}
      initialPosts={posts ?? []}
      isAdmin={isAdmin}
    />
  )
}
