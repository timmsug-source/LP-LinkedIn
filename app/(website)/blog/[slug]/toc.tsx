'use client'

import { useEffect, useRef, useState } from 'react'
import type { TocItem } from '@/lib/toc'

/**
 * Mitlaufendes Inhaltsverzeichnis.
 *
 * Die Sprünge selbst macht der Browser (href="#id" + scroll-behavior: smooth),
 * damit die Links auch ohne JavaScript funktionieren. Das JS markiert nur,
 * in welchem Abschnitt man sich gerade befindet – und hält den markierten
 * Eintrag im Kasten sichtbar, weil die Liste darin scrollt.
 */
export default function PostToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '')
  const liste = useRef<HTMLOListElement>(null)

  // Der Kasten ist niedriger als die Liste. Wandert die Markierung beim Lesen
  // nach unten, scrollt die Liste mit. Bewusst über scrollTop statt
  // scrollIntoView: Letzteres würde auf dem Handy, wo das Verzeichnis im
  // Textfluss steht, die ganze Seite dorthin zurückspringen lassen.
  useEffect(() => {
    const box = liste.current
    const link = box?.querySelector<HTMLElement>('a.is-active')
    if (!box || !link) return
    // Die Liste ist position: relative – offsetTop zählt also schon ab ihr.
    const oben = link.offsetTop
    const unten = oben + link.offsetHeight
    if (oben < box.scrollTop) box.scrollTop = oben - 8
    else if (unten > box.scrollTop + box.clientHeight) box.scrollTop = unten - box.clientHeight + 8
  }, [active])

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el)
    if (headings.length === 0) return

    // Offset = fixierte Navigation + etwas Luft, damit der Wechsel dort
    // passiert, wo die Überschrift optisch oben ankommt.
    const OFFSET = 140

    const update = () => {
      let current = headings[0].id
      for (const h of headings) {
        if (h.getBoundingClientRect().top > OFFSET) break
        current = h.id
      }
      // Am Seitenende den letzten Abschnitt markieren – sonst bleibt der
      // vorletzte aktiv, weil der letzte nie ganz nach oben scrollt.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120
      if (atBottom) current = headings[headings.length - 1].id

      setActive((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [items])

  // Bei ein, zwei Überschriften bringt ein Verzeichnis nichts.
  if (items.length < 3) return null

  return (
    <nav className="post-toc" aria-label="Inhaltsverzeichnis">
      <p className="post-toc-title">Inhaltsverzeichnis</p>
      <ol className="post-toc-list" ref={liste}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? 'is-active' : undefined}
              aria-current={item.id === active ? 'true' : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
