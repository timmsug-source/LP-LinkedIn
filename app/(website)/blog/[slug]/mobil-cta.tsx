'use client'

import { useEffect, useState } from 'react'
import BuchenKnopf from '@/components/BuchenKnopf'

/**
 * Ersatz für die CTA-Karte neben dem Inhaltsverzeichnis auf kleinen
 * Bildschirmen: eine schmale Leiste am unteren Rand.
 *
 * Sie erscheint erst, wenn man rund drei Viertel des Artikels gelesen hat –
 * wer so weit kommt, ist interessiert, und vorher würde sie beim Lesen nur
 * stören. Am Ende (Beitragsfuß mit eigenem Anfrage-Knopf) blendet sie sich
 * wieder aus, damit nichts doppelt dasteht. Wann sie überhaupt in Frage kommt,
 * regelt das CSS: genau dort, wo die Karte neben dem Verzeichnis ausgeblendet ist.
 */
const SCHWELLE = 0.75

export default function MobilCta() {
  const [gelesen, setGelesen] = useState(false)
  const [amEnde, setAmEnde] = useState(false)

  useEffect(() => {
    const text = document.querySelector('.post-content')
    const fuss = document.querySelector('.post-footer')
    if (!text || !fuss) return

    // Gelesen ist, was oberhalb der Unterkante des Fensters liegt. Eine
    // Messung pro Scroll-Ereignis ist billig; React rendert nur bei Wechsel.
    const pruefen = () => {
      const r = text.getBoundingClientRect()
      setGelesen((window.innerHeight - r.top) / r.height >= SCHWELLE)
    }
    pruefen()
    window.addEventListener('scroll', pruefen, { passive: true })
    window.addEventListener('resize', pruefen)

    const beobachter = new IntersectionObserver(([e]) => {
      setAmEnde(e.isIntersecting || e.boundingClientRect.top < 0)
    })
    beobachter.observe(fuss)

    return () => {
      window.removeEventListener('scroll', pruefen)
      window.removeEventListener('resize', pruefen)
      beobachter.disconnect()
    }
  }, [])

  const sichtbar = gelesen && !amEnde

  return (
    <div className={`post-mobil-cta${sichtbar ? ' is-sichtbar' : ''}`} aria-hidden={!sichtbar} inert={!sichtbar}>
      <div className="post-mobil-cta-text">
        <span className="post-mobil-cta-label">Kostenlos &amp; unverbindlich</span>
        <span className="post-mobil-cta-titel">Wie sichtbar bist du?</span>
      </div>
      <BuchenKnopf label="Erstgespräch buchen" />
    </div>
  )
}
