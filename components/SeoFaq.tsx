'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Wie schnell kannst du in ein laufendes Projekt einsteigen?',
    a: 'In der Regel innerhalb von einer Woche nach Briefing. Ich brauche Zugang zu Google Search Console, Ahrefs (oder eurem Tool-Stack) und eine kurze Einführung in den Status quo. Den Rest erarbeite ich selbst.',
  },
  {
    q: 'Arbeitest du mit NDA?',
    a: 'Ja, standardmäßig. Ich unterzeichne euren NDA oder stelle auf Wunsch eine eigene Vertraulichkeitsvereinbarung bereit.',
  },
  {
    q: 'Welche Tools nutzt du – und kannst du mit unserem Stack arbeiten?',
    a: 'Mein Standard-Stack: Ahrefs, Screaming Frog, Google Search Console, AnswerThePublic. Ich kann mich an euren Stack anpassen – ob Semrush, Sistrix oder andere Tools. Kurze Einführung vorausgesetzt.',
  },
  {
    q: 'Wie sieht dein Reporting aus – passt du dich unserem Format an?',
    a: 'Ja. Ich liefere Reports im Format, das ihr braucht – ob euer eigenes Template, ein Looker Studio Dashboard oder ein strukturiertes Dokument. Kein Zwang zum Timm-Schurig-Template.',
  },
  {
    q: 'Kannst du auch GEO übernehmen, wenn wir das intern noch nicht aufgebaut haben?',
    a: 'Ja. GEO ist aktuell noch wenig standardisiert – ich gehöre zu den wenigen Freelancern in Deutschland, die das aktiv pilotieren. Ich kann euch eine GEO-Strategie entwickeln, die erste Umsetzung übernehmen und euer Team dabei einführen.',
  },
  {
    q: 'Wie viele parallele Projekte betreust du gleichzeitig?',
    a: 'Ich bin bewusst selektiv, damit ich für jeden Kunden wirklich verfügbar bin. Aktuelle Kapazität und Timelines bespreche ich transparent im Erstgespräch.',
  },
  {
    q: 'Hast du Erfahrung mit Enterprise-SEO oder großen Seiten mit hunderttausenden URLs?',
    a: 'Ja. Technisches SEO auf großen Seiten – Crawl-Budget-Management, Indexierungssteuerung, JavaScript-Rendering – ist ein Schwerpunkt meiner Arbeit. Referenzen auf Anfrage.',
  },
  {
    q: 'Was unterscheidet dich von anderen SEO-Freelancern?',
    a: 'Drei Dinge: Ich entwickle Websites selbst (Next.js, TypeScript) – das bedeutet, ich verstehe technisches SEO nicht nur in der Theorie, sondern in der Implementierung. Ich bin einer der wenigen, die GEO aktiv anbieten. Und ich liefere – ohne Overhead, ohne Zwischenstationen.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function SeoFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  )
}
