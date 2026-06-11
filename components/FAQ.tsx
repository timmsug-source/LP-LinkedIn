'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Was kostet eine Website bei dir?',
    a: 'Eine einfache, professionelle Website startet bei 1.200 €. Komplexere Projekte mit SEO-Integration, mehreren Seiten und individuellem Design liegen zwischen 2.000–4.500 €. Ich gebe dir im Erstgespräch ein transparentes Angebot – ohne versteckte Kosten.',
  },
  {
    q: 'Wie lange dauert ein Projekt?',
    a: 'Eine Website ist typischerweise in 3–5 Wochen live. SEO-Ergebnisse sind messbar nach 8–12 Wochen. Ich kommuniziere dir von Anfang an realistische Zeitrahmen – keine Wunderversprechungen.',
  },
  {
    q: 'Was ist GEO – brauche ich das?',
    a: 'Generative Engine Optimization (GEO) sorgt dafür, dass KI-Systeme wie ChatGPT, Perplexity und Google AI Overviews dich als Experten in deinem Bereich empfehlen. Für lokale KMUs wird das zunehmend wichtiger, da 30–40 % der Suchen heute ohne Klick enden.',
  },
  {
    q: 'Arbeitest du auch remote / deutschlandweit?',
    a: 'Ja, komplett. Ich habe Kunden in ganz Deutschland. Alle Abstimmungen laufen über WhatsApp und Video-Calls. Das macht die Zusammenarbeit schneller und effizienter als endlose Agentur-Meetings.',
  },
  {
    q: 'Was unterscheidet dich von einer Agentur?',
    a: 'Bei einer Agentur redest du mit einem Account-Manager, der dein Projekt an einen Junior weitergibt. Bei mir redest du direkt mit der Person, die deine Website baut und optimiert. Kein Overhead, keine Chinese Whispers, schnellere Umsetzung.',
  },
  {
    q: 'Wie sieht Wartung und Pflege nach Go-live aus?',
    a: 'Auf Wunsch begleite ich dich mit monatlichem SEO-Reporting, technischen Updates und Content-Optimierung. Das ist optional – kein Abo-Zwang. Du kannst auch einmalig buchen und dann selbst weitermachen.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq">
      <div className="wrap">
        <div className="faq-head fu">
          <div className="label">FAQ</div>
          <h2>Die Fragen, die alle haben –<br />beantwortet, bevor sie gestellt werden.</h2>
        </div>
        <div className="faq-list fu d1">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? ' faq-open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
