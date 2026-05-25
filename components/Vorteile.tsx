interface Benefit { icon: string; title: string; text: string }
interface VorteileData {
  title?: string
  intro?: string
  cards?: Benefit[]
}

const defaults: VorteileData = {
  title: 'Was dich bei mir erwartet',
  intro: 'Freelancer sein bedeutet für mich: volle Verantwortung, direkte Kommunikation und echtes Engagement – kein Weiterdelegieren, kein Bullshit.',
  cards: [
    { icon: '⚡', title: 'Alles aus einer Hand', text: 'Design, Entwicklung und SEO kommen von derselben Person. Das spart Zeit, Abstimmungsaufwand und Reibungsverluste.' },
    { icon: '🚀', title: 'Schnelle Umsetzung', text: 'Keine Warteschlange, kein Projektmanager-Ping-Pong. Ich liefere schnell und halte meine Deadlines ein.' },
    { icon: '💬', title: 'Direkter Draht', text: 'Du sprichst immer mit mir – dem Menschen, der auch wirklich daran arbeitet.' },
    { icon: '🎯', title: 'Fokus auf Ergebnisse', text: 'Mir ist nicht wichtig, wie viele Stunden ich abrechne. Mir ist wichtig, dass deine Website dir Kunden bringt.' },
    { icon: '🔎', title: '5 Jahre SEO-Erfahrung', text: 'Ich weiß, was Google wirklich will. Keine Tricks, keine Black-Hat-Methoden, kein Risiko.' },
    { icon: '💰', title: 'Faire Preise', text: 'Kein Agentur-Aufschlag. Du bekommst Profi-Qualität zum Freelancer-Preis.' },
  ],
}

export default function Vorteile({ data }: { data?: Record<string, unknown> }) {
  const d: VorteileData = { ...defaults, ...(data as VorteileData) }
  const cards = (d.cards as Benefit[]) ?? defaults.cards!

  return (
    <section id="vorteile">
      <div className="wrap">
        <div className="sec-head fu">
          <div className="label">Warum ich</div>
          <h2>{d.title}</h2>
          <p className="sec-intro">{d.intro}</p>
        </div>
        <div className="ben-grid">
          {cards.map((b, i) => (
            <div key={b.title} className={`ben-card${i === 0 ? ' ben-card--lg' : ''} fu${i % 3 !== 0 ? ` d${i % 3}` : ''}`}>
              <span className="ben-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
