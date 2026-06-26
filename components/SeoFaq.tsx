'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Was kostet ein SEO-Freelancer im Vergleich zu einer Agentur?',
    a: 'Ein SEO-Freelancer ist in den meisten Fällen günstiger als eine Agentur – und du bekommst direkte Kommunikation mit dem Experten, der die Arbeit macht. Keine Weitergabe an Junior-Mitarbeiter, kein Overhead für Account-Manager. Bei mir startet ein SEO-Audit ab 799 €.',
  },
  {
    q: 'Wie lange dauert es, bis SEO-Maßnahmen Wirkung zeigen?',
    a: 'Ehrliche Antwort: meistens 3 bis 6 Monate für erste spürbare Ergebnisse, 6 bis 12 Monate für nachhaltige Rankings. SEO ist kein Sprint – aber der Aufbau zahlt sich langfristig aus, weil organischer Traffic keine laufenden Anzeigenkosten hat.',
  },
  {
    q: 'Arbeitest du auch mit Agenturen als Weißlabel-Partner?',
    a: 'Ja. Ich arbeite regelmäßig mit Agenturen zusammen, die SEO-Kapazität zukaufen oder spezifisches SEO-Know-how für ein Projekt brauchen. Diskretion ist selbstverständlich.',
  },
  {
    q: 'Welche Tools nutzt du?',
    a: 'Mein Standard-Stack: Ahrefs für Keyword-Recherche und Backlink-Analyse, Screaming Frog für technische Audits, Google Search Console und Analytics für Tracking, AnswerThePublic für Suchintentions-Analyse. Für GEO kommen spezialisierte Tools zur KI-Sichtbarkeit dazu.',
  },
  {
    q: 'Was unterscheidet dich von anderen SEO-Freelancern?',
    a: 'Drei Dinge: Erstens, ich kombiniere SEO mit GEO – ich sorge nicht nur für Sichtbarkeit bei Google, sondern auch in KI-generierten Antworten. Zweitens, ich baue Websites selbst (Next.js, TypeScript, Vercel) – ich verstehe technisches SEO nicht nur theoretisch. Drittens, ich erkläre dir, was ich tue – und warum.',
  },
  {
    q: 'Kann ich auch nur ein einmaliges Audit beauftragen, ohne laufende Zusammenarbeit?',
    a: 'Absolut. Viele Kunden starten mit einem einmaligen Audit und entscheiden danach, ob sie die Umsetzung selbst übernehmen oder mich weiter einbinden. Kein Zwang zur Dauerbindung.',
  },
  {
    q: 'Bist du auch für kleinere Unternehmen oder Selbstständige geeignet?',
    a: 'Für reine SEO-Leistungen spreche ich primär Unternehmen und Agenturen an. Wenn du Selbstständiger oder Coach bist und eine komplette Website mit integriertem SEO suchst, bist du auf meiner Hauptseite besser aufgehoben.',
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
