'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface Review {
  text: string
  source: 'Google' | 'Fiverr'
  date: string
}

/* Hinweis: Die Datumsangaben sind Platzhalter – bitte gegen die echten
   Veröffentlichungsdaten der Bewertungen tauschen. */
const reviews: Review[] = [
  { text: 'Timm ist individuell auf mich eingegangen und hat mir mit meiner Homepage super geholfen. Danke dir und kann ich nur weiterempfehlen.', source: 'Google', date: 'Mai 2024' },
  { text: 'Netter Kontakt, schnelle und zuverlässige Lieferung – alles bestens. Danke Timm!', source: 'Fiverr', date: 'März 2024' },
  { text: 'Danke Timm, es war mir eine Freude. Es war genau das, wonach ich gesucht habe. Kann Timm nur weiterempfehlen!', source: 'Fiverr', date: 'Februar 2024' },
  { text: 'Timm did a great job, the communication was easy and clear and the results are stunning – thank you so much!', source: 'Fiverr', date: 'Januar 2024' },
  { text: 'Nur zu empfehlen! Alles wie gewünscht umgesetzt.', source: 'Fiverr', date: 'Dezember 2023' },
  { text: 'Superschnelle, kompetente Umsetzung – besten Dank!', source: 'Fiverr', date: 'November 2023' },
]

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.55 10.78l7.98-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
)

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.6 5.4c-3.1 1.5-5.2 4.4-5.2 8.1 0 3.1 1.9 5.1 4.4 5.1 2.2 0 3.9-1.7 3.9-3.8 0-2.1-1.5-3.6-3.4-3.6-.4 0-.9.1-1 .1-.3 0-.4-.2-.3-.5.5-1.6 2-3.1 3.6-3.9.4-.2.5-.5.3-.9l-.5-.8c-.2-.3-.5-.4-.8-.2zm9.3 0c-3.1 1.5-5.2 4.4-5.2 8.1 0 3.1 1.9 5.1 4.4 5.1 2.2 0 3.9-1.7 3.9-3.8 0-2.1-1.5-3.6-3.4-3.6-.4 0-.9.1-1 .1-.3 0-.4-.2-.3-.5.5-1.6 2-3.1 3.6-3.9.4-.2.5-.5.3-.9l-.5-.8c-.2-.3-.5-.4-.8-.2z" />
  </svg>
)

const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M8 12.3l2.7 2.7L16.2 9.3" />
      </svg>
    ),
    title: '15+ Bewertungen',
    desc: 'auf Google & Fiverr',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.2l2.7 5.8 6.3.8-4.7 4.3 1.2 6.3L12 17.3l-5.5 3.1 1.2-6.3L3 9.8l6.3-.8z" />
      </svg>
    ),
    title: 'Ø 5,0 Sterne',
    desc: 'durchweg positive Rückmeldungen',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.8l7.5 3v5.6c0 4.6-3.1 8.4-7.5 9.8-4.4-1.4-7.5-5.2-7.5-9.8V5.8z" />
        <path d="M9 12.2l2.2 2.2 4-4.3" />
      </svg>
    ),
    title: '100 % verifiziert',
    desc: 'echte Kunden, echte Ergebnisse',
  },
]

export default function GeoReviews() {
  const viewport = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const el = viewport.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  function scroll(dir: 1 | -1) {
    const el = viewport.current
    if (!el) return
    const card = el.querySelector('.geo-rv-card') as HTMLElement | null
    const step = card ? card.offsetWidth + 18 : 320
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="geo-rv fu d1">
      <div className="geo-rv-stage">
        <button
          type="button"
          className="geo-rv-arrow geo-rv-arrow--prev"
          onClick={() => scroll(-1)}
          disabled={!canPrev}
          aria-label="Vorherige Bewertungen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="geo-rv-viewport" ref={viewport} onScroll={update}>
          {reviews.map((r, i) => (
            <figure key={i} className="geo-rv-card">
              <div className="geo-rv-top">
                <span className="geo-rv-quote"><QuoteIcon /></span>
                <span className="geo-rv-stars" aria-label="5 von 5 Sternen">★★★★★</span>
              </div>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="geo-rv-source">
                  {r.source === 'Google'
                    ? <span className="geo-rv-logo geo-rv-logo--google"><GoogleLogo /></span>
                    : <span className="geo-rv-logo geo-rv-logo--fiverr">fiverr<em>.</em></span>}
                </span>
                <span className="geo-rv-meta">
                  <strong>{r.source === 'Google' ? 'Google-Bewertung' : 'Fiverr Review'}</strong>
                  <span>{r.date}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="geo-rv-arrow geo-rv-arrow--next"
          onClick={() => scroll(1)}
          disabled={!canNext}
          aria-label="Weitere Bewertungen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="geo-rv-trust">
        {trustItems.map((t) => (
          <div key={t.title} className="geo-rv-trust-item">
            <span className="geo-rv-trust-icon">{t.icon}</span>
            <span className="geo-rv-trust-text">
              <strong>{t.title}</strong>
              <span>{t.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
