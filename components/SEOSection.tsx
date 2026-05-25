'use client'
import { useEffect, useRef, useState } from 'react'

/* ── Animated counter ── */
function StatCounter({ to, suffix, prefix = '' }: { to: number; suffix: string; prefix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return
      fired.current = true
      obs.disconnect()
      const t0 = performance.now()
      const dur = 1800
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(Math.round(eased * to))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])

  return (
    <div ref={ref} className="seo-stat-val">
      {prefix}{val}<span>{suffix}</span>
    </div>
  )
}

/* ── SERP bar chart ── */
const serpRows = [
  { pos: 1, label: 'Position 1', ctr: 32.5 },
  { pos: 2, label: 'Position 2', ctr: 17.6 },
  { pos: 3, label: 'Position 3', ctr: 10.1 },
  { pos: 4, label: 'Position 4', ctr:  6.9 },
  { pos: 5, label: 'Position 5', ctr:  5.1 },
]
const MAX_CTR = 35

function SerpChart() {
  const ref = useRef<HTMLDivElement>(null)
  const [go, setGo] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setGo(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="serp-card">
      <div className="serp-card-head">
        <span className="serp-card-title">Klickrate nach Google-Position</span>
        <span className="serp-card-src">Quelle: Backlinko 2024</span>
      </div>
      {serpRows.map((row) => (
        <div key={row.pos} className={`serp-row${row.pos === 1 ? ' serp-row--top' : ''}`}>
          <div className="serp-pos">{row.pos}</div>
          <div className="serp-track">
            <div
              className="serp-bar"
              style={{ width: go ? `${(row.ctr / MAX_CTR) * 100}%` : '0%' }}
            />
          </div>
          <div className="serp-pct">{row.ctr}%</div>
        </div>
      ))}
      <p className="serp-note">
        Die erste Position erhält <strong>fast doppelt so viele Klicks</strong> wie Platz 2.
      </p>
    </div>
  )
}

/* ── Section ── */
const stats = [
  { to: 93, suffix: '%', prefix: '', label: 'aller Klicks gehen auf die Top‑3‑Ergebnisse' },
  { to: 127, suffix: '%', prefix: '+', label: 'mehr organischer Traffic – im Durchschnitt meiner Projekte' },
  { to: 5, suffix: 'x', prefix: '', label: 'mehr Anfragen durch nachhaltige Top‑Rankings' },
]

export default function SEOSection() {
  return (
    <section id="seo" className="seo-section">
      <div className="wrap">
        <div className="seo-layout">

          {/* Left */}
          <div className="seo-left">
            <div className="sec-head fu">
              <div className="label">SEO</div>
              <h2>Sichtbarkeit,<br />die Kunden bringt</h2>
              <p className="sec-intro">
                Wer nicht auf Seite 1 steht, existiert nicht. Ich bringe dich dort hin –
                nachhaltig, ohne Tricks und ohne monatliche Werbekosten.
              </p>
            </div>
            <div className="seo-stats">
              {stats.map((s, i) => (
                <div key={s.label} className={`seo-stat fu d${i + 1}`}>
                  <StatCounter to={s.to} suffix={s.suffix} prefix={s.prefix} />
                  <p className="seo-stat-lbl">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="seo-right fu d1">
            <SerpChart />
          </div>

        </div>
      </div>
    </section>
  )
}
