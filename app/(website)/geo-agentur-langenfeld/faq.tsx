'use client'

import { useState } from 'react'

export default function GeoFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="geo-faq-list fu d1">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className={`geo-faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="geo-faq-q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="geo-faq-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="geo-faq-a" role="region">
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
