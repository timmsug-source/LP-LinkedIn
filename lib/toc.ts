/**
 * Inhaltsverzeichnis für Blogbeiträge.
 *
 * Zieht die Überschriften aus dem fertigen Artikel-HTML, vergibt stabile
 * IDs als Sprungziele und gibt das HTML mit den ergänzten IDs zurück.
 *
 * Die Beiträge kommen aus Tiptap bzw. aus Markdown; die H1 ist immer der
 * Beitragstitel und wird separat gerendert. Ins Verzeichnis kommen bewusst
 * NUR die H2 – die H3 sind Unterpunkte und würden die Liste aufblähen.
 */

export interface TocItem {
  id: string
  text: string
}

const UMLAUTE: Record<string, string> = {
  ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss',
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
  '&#39;': "'", '&nbsp;': ' ', '&ndash;': '–', '&mdash;': '—',
}

function decodeEntities(input: string): string {
  return input
    .replace(/&(?:amp|lt|gt|quot|#39|nbsp|ndash|mdash);/g, (e) => ENTITIES[e] ?? e)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
}

/** Reiner Text einer Überschrift – ohne <strong>, <em>, <a> usw. */
function toPlainText(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => UMLAUTE[c])
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  // Überschriften wie "1. Lokale Keywords" ergäben eine ID, die mit einer
  // Ziffer beginnt. Als Sprungziel funktioniert das zwar, aber querySelector
  // und CSS :target scheitern daran – deshalb ein Buchstabe davor.
  return /^\d/.test(slug) ? `abschnitt-${slug}` : slug
}

export function buildToc(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = []
  const used = new Set<string>()

  const withIds = html.replace(
    /<h(2)([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, lvl: string, attrs: string, inner: string) => {
      const text = toPlainText(inner)
      if (!text) return match

      // Eine bereits vorhandene ID gewinnt – sonst brechen alte Links.
      const existing = /\sid\s*=\s*["']([^"']+)["']/i.exec(attrs)
      const base = existing?.[1] || slugify(text) || `abschnitt-${toc.length + 1}`

      let id = base
      let n = 2
      while (used.has(id)) id = `${base}-${n++}`
      used.add(id)

      toc.push({ id, text })

      const rest = attrs.replace(/\sid\s*=\s*["'][^"']*["']/i, '')
      return `<h${lvl}${rest} id="${id}">${inner}</h${lvl}>`
    },
  )

  return { html: withIds, toc }
}
