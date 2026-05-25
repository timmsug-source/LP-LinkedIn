'use client'
import { useEffect, useRef } from 'react'

interface Step { n: string; title: string; text: string }
interface Bar { label: string; w: number; pct: string }
interface SolutionData {
  title?: string
  intro?: string
  steps?: Step[]
  bars?: Bar[]
}

const defaults: SolutionData = {
  title: 'Website + SEO als ein gemeinsames System',
  intro: 'Ich kombiniere technisch sauberes Webdesign mit durchdachter SEO-Strategie – damit deine Website nicht nur schön aussieht, sondern auch gefunden wird und konvertiert.',
  steps: [
    { n: '01', title: 'Analyse & Strategie', text: 'Ich analysiere deine Situation, Konkurrenz und Zielkunden und entwickle einen konkreten Aktionsplan.' },
    { n: '02', title: 'Website-Entwicklung', text: 'Performance-optimierte, mobilfreundliche Website – designed für Vertrauen und Conversions.' },
    { n: '03', title: 'On-Page SEO', text: 'Technisches SEO, Keyword-Optimierung und Content-Struktur für nachhaltige Top-Rankings.' },
    { n: '04', title: 'Tracking & Reporting', text: 'Du siehst jederzeit, was dein Investment bringt – transparent und verständlich.' },
  ],
  bars: [
    { label: 'Google Sichtbarkeit', w: 87, pct: '87%' },
    { label: 'Page Speed Score', w: 94, pct: '94' },
    { label: 'Conversion Rate', w: 72, pct: '+72%' },
    { label: 'Core Web Vitals', w: 91, pct: '91' },
  ],
}

export default function Solution({ data }: { data?: Record<string, unknown> }) {
  const d: SolutionData = { ...defaults, ...(data as SolutionData) }
  const steps = (d.steps as Step[]) ?? defaults.steps!
  const bars = (d.bars as Bar[]) ?? defaults.bars!
  const visRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = visRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll<HTMLElement>('.bar-fill').forEach((bar) => {
          bar.style.width = bar.dataset.w + '%'
        })
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="solution">
      <div className="wrap">
        <div className="sol-layout">
          <div>
            <div className="sec-head fu">
              <div className="label">Die Lösung</div>
              <h2>{d.title}</h2>
              <p className="sec-intro">{d.intro}</p>
            </div>
            <div className="steps">
              {steps.map((s, i) => (
                <div key={s.n} className={`step fu${i > 0 ? ` d${i}` : ''}`}>
                  <div className="step-n">{s.n}</div>
                  <div>
                    <h3 className="step-title">{s.title}</h3>
                    <div className="step-txt">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sol-visual fu d1" ref={visRef}>
            <div className="sol-box">
              <div className="sol-badge"><span>●</span> Live Performance</div>
              <div className="bar-row">
                {bars.map((b) => (
                  <div key={b.label} className="bar-item">
                    <div className="bar-lbl">{b.label}</div>
                    <div className="bar-track">
                      <div className="bar-fill" data-w={b.w} />
                    </div>
                    <div className="bar-pct">{b.pct}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
