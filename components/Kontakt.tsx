'use client'
import { useState } from 'react'

interface ContactDetail { icon: string; label: string; value: string }
interface KontaktData {
  title?: string
  intro?: string
  details?: ContactDetail[]
}

const defaults: KontaktData = {
  title: 'Lass uns reden.',
  intro: 'Du hast ein Projekt, eine Idee oder einfach eine Frage? Schreib mir – ich melde mich in der Regel innerhalb von 24 Stunden. Das Erstgespräch ist kostenlos und unverbindlich.',
  details: [
    { icon: '📍', label: 'Standort', value: 'Langenfeld, NRW' },
    { icon: '⏱️', label: 'Antwortzeit', value: 'Innerhalb von 24h' },
    { icon: '🌍', label: 'Arbeitsweise', value: '100% Remote & flexibel' },
  ],
}

export default function Kontakt({ data }: { data?: Record<string, unknown> }) {
  const d: KontaktData = { ...defaults, ...(data as KontaktData) }
  const details = (d.details as ContactDetail[]) ?? defaults.details!
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mlgzvkpg', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); (e.target as HTMLFormElement).reset() }
      else throw new Error()
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="kontakt">
      <div className="wrap">
        <div className="contact-layout">
          <div className="contact-sticky fu">
            <div className="label">Kontakt</div>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.8vw,3rem)', marginBottom: '16px' }}>{d.title}</h2>
            <p className="sec-intro">{d.intro}</p>
            {details.map((item) => (
              <div key={item.label} className="contact-detail">
                <div className="contact-icon">{item.icon}</div>
                <div><div className="contact-lbl">{item.label}</div><div className="contact-val">{item.value}</div></div>
              </div>
            ))}
          </div>
          <div className="form-box fu d1">
            <form onSubmit={handleSubmit}>
              <div className="form-row2">
                <div className="fg"><label htmlFor="fn">Name</label><input type="text" id="fn" name="name" placeholder="Max Mustermann" required /></div>
                <div className="fg"><label htmlFor="fe">E-Mail</label><input type="email" id="fe" name="email" placeholder="max@firma.de" required /></div>
              </div>
              <div className="fg">
                <label htmlFor="ft">Worum geht es?</label>
                <select id="ft" name="thema">
                  <option value="">Bitte auswählen</option>
                  <option>Neue Website</option>
                  <option>Website optimieren</option>
                  <option>SEO-Beratung</option>
                  <option>Beides</option>
                  <option>Erstmal nur Fragen</option>
                </select>
              </div>
              <div className="fg">
                <label htmlFor="fm">Nachricht / Projektbeschreibung</label>
                <textarea id="fm" name="nachricht" placeholder="Erzähl mir von deinem Projekt – was hast du, was brauchst du, was willst du erreichen?" required />
              </div>
              <button type="submit" className="btn form-submit" disabled={status === 'sending' || status === 'sent'}
                style={status === 'sent' ? { background: '#22c55e', color: '#fff' } : status === 'error' ? { background: '#ef4444', color: '#fff' } : {}}>
                {status === 'idle' && <>Nachricht senden <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
                {status === 'sending' && 'Wird gesendet…'}
                {status === 'sent' && '✓ Nachricht gesendet!'}
                {status === 'error' && '✗ Fehler – bitte per Mail schreiben'}
              </button>
              <p className="form-note">Kostenlos & unverbindlich. Antwort innerhalb von 24h.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
