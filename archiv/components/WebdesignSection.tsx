'use client'
import { useEffect, useRef } from 'react'

/* ── Animated SVG ring ── */
const R = 38
const CIRC = 2 * Math.PI * R

function ScoreRing({ score, label, delay = 0 }: { score: number; label: string; delay?: number }) {
  const circleRef = useRef<SVGCircleElement>(null)
  const wrapRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap   = wrapRef.current
    const circle = circleRef.current
    if (!wrap || !circle) return
    const target = CIRC - (score / 100) * CIRC

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      setTimeout(() => {
        if (circle) circle.style.strokeDashoffset = String(target)
      }, delay)
    }, { threshold: 0.4 })
    obs.observe(wrap)
    return () => obs.disconnect()
  }, [score, delay])

  return (
    <div ref={wrapRef} className="score-ring-wrap">
      <div className="score-ring">
        <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
          {/* Track */}
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="6" />
          {/* Progress */}
          <circle
            ref={circleRef}
            cx="50" cy="50" r={R}
            fill="none"
            stroke="var(--acc)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC}
            style={{
              transition: 'stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
        </svg>
        <div className="score-num">{score}</div>
      </div>
      <div className="score-lbl">{label}</div>
    </div>
  )
}

/* ── Key facts ── */
const facts = [
  {
    num: '50ms',
    label: 'Erste Impression',
    text: 'So schnell entscheidet ein Besucher, ob er bleibt oder die Seite verlässt.',
  },
  {
    num: '70%',
    label: 'Mobiler Traffic',
    text: 'Aller Besucher kommen vom Smartphone – Mobile‑First ist keine Option, sondern Pflicht.',
  },
  {
    num: '3 Sek.',
    label: 'Ladezeit‑Grenze',
    text: 'Lädt deine Seite länger, verlässt jeder zweite Besucher sie sofort – für immer.',
  },
]

/* ── Section ── */
export default function WebdesignSection() {
  return (
    <section id="webdesign" className="webdesign-section">
      <div className="wrap">
        <div className="wd-layout">

          {/* Left – score rings */}
          <div className="wd-left fu">
            <div className="wd-rings">
              <ScoreRing score={94}  label="PageSpeed" delay={0}   />
              <ScoreRing score={98}  label="SEO Score"  delay={200} />
              <ScoreRing score={100} label="Mobile"     delay={400} />
            </div>
            <p className="wd-rings-note">
              Durchschnittliche Lighthouse‑Scores meiner Projekte
            </p>
          </div>

          {/* Right – header + facts */}
          <div className="wd-right">
            <div className="sec-head fu">
              <div className="label">Webdesign</div>
              <h2>Websites, die laden, überzeugen und konvertieren</h2>
              <p className="sec-intro">
                Gutes Design ist kein Selbstzweck – es ist das Fundament für Vertrauen,
                Geschwindigkeit und Conversions.
              </p>
            </div>
            <div className="wd-facts">
              {facts.map((f, i) => (
                <div key={f.num} className={`wd-fact fu d${i + 1}`}>
                  <div className="wd-fact-num">{f.num}</div>
                  <div>
                    <div className="wd-fact-label">{f.label}</div>
                    <div className="wd-fact-text">{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
