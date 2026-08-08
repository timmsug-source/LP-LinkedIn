/**
 * FAQ-Erkennung für Blogbeiträge.
 *
 * Die Beiträge schreiben ihre häufigen Fragen als Absatz im Muster
 *   <p><strong>Frage?</strong><br>Antwort …</p>
 * Diese Paare werden hier aus dem fertigen HTML gezogen und als FAQPage
 * ausgezeichnet. Dadurch braucht kein Beitrag ein eigenes Datenfeld: Wer den
 * FAQ-Block schreibt, bekommt das Schema automatisch.
 *
 * Bewusst streng: Nur Absätze, die mit <strong> beginnen, deren Text auf ein
 * Fragezeichen endet und auf die eine Antwort folgt. Ein fett gesetzter
 * Einleitungssatz im Fließtext erzeugt so kein falsches Schema.
 */

export interface FaqItem {
  question: string
  answer: string
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
  '&#39;': "'", '&nbsp;': ' ', '&ndash;': '–', '&mdash;': '—',
}

function toText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(?:amp|lt|gt|quot|#39|nbsp|ndash|mdash);/g, (e) => ENTITIES[e] ?? e)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
}

export function extractFaq(html: string): FaqItem[] {
  const items: FaqItem[] = []

  const absaetze = html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)
  for (const [, inner] of absaetze) {
    const treffer = /^\s*<strong>([\s\S]*?)<\/strong>\s*(?:<br\s*\/?>)?([\s\S]*)$/i.exec(inner)
    if (!treffer) continue

    const question = toText(treffer[1])
    const answer = toText(treffer[2])

    if (!question.endsWith('?')) continue
    // Zu kurze Antworten sind meist Zwischenüberschriften, keine echten Antworten.
    if (answer.length < 40) continue

    items.push({ question, answer })
  }

  return items
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}
