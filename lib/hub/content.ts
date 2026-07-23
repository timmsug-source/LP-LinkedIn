import 'server-only'
import { createAdminClient } from './admin'

/**
 * Fetch all editable content blocks for a site (by slug), server-side.
 * Returns a { key: value } map for easy lookup in the page.
 * Uses the service role → runs ONLY on the server, no RLS/anon exposure.
 */
export async function getSiteContent(slug: string): Promise<Record<string, string>> {
  try {
    const supabase = createAdminClient()

    const { data: site } = await supabase
      .from('sites')
      .select('id')
      .eq('slug', slug)
      .single()

    if (!site) return {}

    const { data: blocks } = await supabase
      .from('content_blocks')
      .select('key, value')
      .eq('site_id', site.id)

    const map: Record<string, string> = {}
    for (const b of blocks ?? []) map[b.key] = b.value ?? ''
    return map
  } catch (err) {
    // CMS nicht erreichbar → Seite fällt auf die eingebauten Texte zurück
    console.error('[getSiteContent] Fehler beim Laden, nutze Fallback-Texte:', err)
    return {}
  }
}
