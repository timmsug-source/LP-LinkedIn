'use client'

import { useEffect, useRef } from 'react'
import Case from './Case'

function LazyIframe({ src, title, className }: { src: string; title: string; className?: string }) {
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.src = src
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  return (
    <iframe
      ref={ref}
      allowFullScreen
      allow="autoplay; fullscreen"
      title={title}
      className={className}
    />
  )
}

export default function Hypothese({ data: _ }: { data?: Record<string, unknown> }) {
  return (
    <section id="hypothese">
      <div className="wrap">
        <div className="hyp-head fu">
          <div className="label">Warum das so ist</div>
          <h2>Das Problem ist nicht dein Angebot.<br />Es ist deine Sichtbarkeit.</h2>
          <p className="hyp-intro">
            Die meisten Websites sind gebaut, um schön auszusehen – nicht um gefunden zu werden.
            Gleichzeitig verändert sich Suche gerade radikal: 30–40 % der Suchanfragen enden heute
            ohne Klick, weil KI direkt antwortet. Wer nur für Google optimiert, verliert die Hälfte
            des Traffics der Zukunft.
          </p>
        </div>
        <div className="hyp-grid">
          <div className="hyp-card fu">
            <div className="hyp-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3>Google-Sichtbarkeit allein reicht nicht mehr</h3>
            <p>ChatGPT, Perplexity und Google AI Overviews beantworten Fragen direkt. Wer nicht auch in diesen Quellen vorkommt, verliert Anfragen – ohne es zu merken.</p>
          </div>
          <div className="hyp-card fu d1">
            <div className="hyp-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3>Design und SEO müssen ein System sein</h3>
            <p>Eine schöne Website ohne SEO bringt keine Anfragen. SEO ohne gutes Design konvertiert nicht. Beides aus einer Hand zu haben ist der entscheidende Vorteil.</p>
          </div>
          <div className="hyp-card fu d2">
            <div className="hyp-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3>Freelancer schlägt Agentur für KMUs</h3>
            <p>Bei Agenturen landest du beim Junior-Account-Manager. Bei mir redest du direkt mit der Person, die deine Website baut, optimiert und wachsen lässt.</p>
          </div>
        </div>

        <div className="vsl vsl-desktop fu d2">
          <LazyIframe src="/vsl.html" title="VSL" />
        </div>
        <div className="vsl vsl-mobile fu d2">
          <LazyIframe src="/vsl-mobile.html" title="VSL Mobil" />
        </div>

        {/* Der Beleg zur These – bewusst am Ende der Sektion, direkt bevor es
            mit den Leistungen ums Angebot geht.

            AUSGEBLENDET, bis echte Projektzahlen vorliegen: Die Karte enthält
            noch Platzhalter, und erfundene Ergebnisse haben auf einer Seite,
            die mit Ehrlichkeit wirbt, nichts verloren. Zum Aktivieren die
            nächste Zeile einkommentieren und die ⚠️-Werte in Case.tsx setzen. */}
        {/* <Case /> */}
      </div>
    </section>
  )
}
