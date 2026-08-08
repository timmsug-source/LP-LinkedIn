/**
 * HowTo-Auszeichnung für Schritt-für-Schritt-Abschnitte in Blogbeiträgen.
 *
 * Bewusst als Opt-in: Ausgezeichnet wird nur eine nummerierte Liste, die im
 * Beitrag ausdrücklich mit class="howto" markiert ist. Eine automatische
 * Erkennung wäre hier falsch – ein Beitrag enthält oft mehrere nummerierte
 * Listen ("7 Fehler", "Aufbau der Startseite"), und nur eine davon ist eine
 * echte Anleitung.
 *
 * Der Name der Anleitung kommt aus der letzten Überschrift vor der Liste.
 *
 * HINWEIS: Google hat die HowTo-Rich-Results 2023 aus der Suche entfernt. Das
 * Markup erzeugt dort also keine Sonderdarstellung mehr. Es bleibt trotzdem
 * gültiges schema.org und hilft Systemen, die den Ablauf maschinell auslesen –
 * genau der Fall, um den es bei GEO geht.
 */

export interface HowToStep {
  name: string
  text: string
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

export function extractHowTo(html: string): { name: string; steps: HowToStep[] } | null {
  const liste = /<ol[^>]*class="[^"]*\bhowto\b[^"]*"[^>]*>([\s\S]*?)<\/ol>/i.exec(html)
  if (!liste) return null

  // Überschrift direkt vor der Liste – sie benennt die Anleitung.
  const davor = html.slice(0, liste.index)
  const ueberschriften = [...davor.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)]
  const name = ueberschriften.length ? toText(ueberschriften[ueberschriften.length - 1][1]) : ''

  const steps: HowToStep[] = []
  for (const [, inner] of liste[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
    const fett = /^\s*<strong>([\s\S]*?)<\/strong>([\s\S]*)$/i.exec(inner)
    if (fett) {
      steps.push({
        // "Ziel festlegen." → "Ziel festlegen"
        name: toText(fett[1]).replace(/[.:]$/, ''),
        text: toText(fett[2]) || toText(fett[1]),
      })
    } else {
      const text = toText(inner)
      if (text) steps.push({ name: text.slice(0, 60), text })
    }
  }

  if (steps.length < 2) return null
  return { name, steps }
}

export function howToSchema(anleitung: { name: string; steps: HowToStep[] }, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: anleitung.name,
    step: anleitung.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${url}#schritt-${i + 1}`,
    })),
  }
}
