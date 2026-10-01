/**
 * Blog aus dem Website-Hub (Supabase).
 *
 * Wie bei den Kundenseiten (fs-performance, dr-heidi-klein) liest die Website
 * ihre Beiträge beim Abruf über eine Lesefunktion der Datenbank. Geschrieben
 * wird ausschließlich im Hub; hier wird nur gelesen. Der Anon-Schlüssel ist
 * öffentlich und erlaubt nur diese Funktion – alle Tabellen sind per Row Level
 * Security gesperrt.
 */

const HUB_URL =
  process.env.NEXT_PUBLIC_HUB_SUPABASE_URL || 'https://mozhptupmycfmfojbofh.supabase.co'

const HUB_ANON_KEY =
  process.env.NEXT_PUBLIC_HUB_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vemhwdHVwbXljZm1mb2pib2ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MTIxMjUsImV4cCI6MjA5OTM4ODEyNX0.nJ6rpsYIf8BeLPTuMDGaNqWNAPx2h3QTz8GGZiELfQo'

/** Kennung dieser Website im Hub. */
export const SITE_SLUG = 'timmschurig-com'

/** Ein Beitrag, so wie der Hub ihn ausliefert. */
export interface Beitrag {
  slug: string
  title: string
  excerpt: string
  content: string
  cover_image: string | null
  cover_alt: string
  category: string
  badge: string
  author: string
  tags: string[]
  seo_title: string
  seo_description: string
  published_at: string
  updated_at: string
  /** Hinweisblock mitten im Artikel */
  cta_enabled: boolean
  cta_position: number
  cta_headline: string
  cta_button_text: string
  cta_button_href: string
  /** Slugs der empfohlenen Beiträge – leer heißt: die neuesten anderen */
  related_posts: string[]
}

/**
 * Alle veröffentlichten Beiträge, neueste zuerst. Geplante Beiträge liefert
 * der Hub erst ab ihrem Erscheinungstermin aus.
 *
 * Die Seiten setzen `revalidate`, deshalb liegt die Antwort zwischen zwei
 * Abrufen im Seiten-Cache. Fällt der Hub aus, liefert Next weiter die zuletzt
 * erzeugte Fassung aus, statt die Seite kaputtzurendern.
 */
export async function getBeitraege(): Promise<Beitrag[]> {
  try {
    const antwort = await fetch(`${HUB_URL}/rest/v1/rpc/get_site_blog`, {
      method: 'POST',
      headers: {
        apikey: HUB_ANON_KEY,
        Authorization: `Bearer ${HUB_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ p_slug: SITE_SLUG }),
      next: { revalidate: 300 },
    })
    if (!antwort.ok) {
      console.error('[Blog] Hub antwortete mit HTTP', antwort.status, await antwort.text())
      return []
    }
    const daten = (await antwort.json()) as Beitrag[] | null
    return (daten ?? []).map((b) => ({ ...b, tags: b.tags ?? [], related_posts: b.related_posts ?? [] }))
  } catch (fehler) {
    console.error('[Blog] Hub nicht erreichbar:', fehler)
    return []
  }
}

export async function getBeitrag(slug: string): Promise<Beitrag | null> {
  return (await getBeitraege()).find((b) => b.slug === slug) ?? null
}

/* ── Artikeltext absichern ────────────────────────────────────────────── */

const ERLAUBTE_TAGS = new Set([
  'p', 'br', 'h2', 'h3', 'h4', 'strong', 'b', 'em', 'i', 's', 'u', 'ul', 'ol', 'li',
  'blockquote', 'a', 'img', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre',
  'figure', 'figcaption',
])

const SICHERE_ADRESSE = /^(https?:|mailto:|tel:|\/|#)/i

/**
 * Artikel-HTML aus dem Hub für `dangerouslySetInnerHTML`. Durchgelassen wird
 * nur, was ein Beitrag braucht – Absätze, Zwischenüberschriften, Listen,
 * Zitate, Tabellen, Links und Bilder. Attribute bleiben nur, wo sie nötig und
 * ungefährlich sind, damit über ein Konto im Hub kein Skript auf die Website
 * gelangen kann.
 */
export function artikelHtml(roh: string): string {
  return (roh ?? '')
    .replace(/<(script|style|iframe|object|embed|template|noscript)\b[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?([a-z][a-z0-9]*)\b([^>]*)>/gi, (tag, name: string, attribute: string) => {
      const n = name.toLowerCase()
      if (!ERLAUBTE_TAGS.has(n)) return ''
      if (tag.startsWith('</')) return `</${n}>`
      const behalten: string[] = []
      for (const m of attribute.matchAll(/([a-z-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/gi)) {
        const a = m[1].toLowerCase()
        const wert = (m[2] ?? m[3] ?? m[4] ?? '').replace(/"/g, '&quot;')
        const ok =
          (n === 'a' && a === 'href' && SICHERE_ADRESSE.test(wert.trim())) ||
          (n === 'a' && a === 'rel' && /^[a-z ]+$/i.test(wert)) ||
          (n === 'img' && a === 'src' && /^https?:/i.test(wert.trim())) ||
          (n === 'img' && (a === 'alt' || a === 'width' || a === 'height')) ||
          (/^h[234]$/.test(n) && a === 'id' && /^[\w-]+$/.test(wert))
        if (ok) behalten.push(`${a}="${wert}"`)
      }
      return behalten.length ? `<${n} ${behalten.join(' ')}>` : `<${n}>`
    })
}
