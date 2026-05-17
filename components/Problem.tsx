interface ProblemCard { num: string; icon: string; title: string; text: string }
interface ProblemData {
  title?: string
  intro?: string
  cards?: ProblemCard[]
}

const defaults: ProblemData = {
  title: 'Warum die meisten Websites unsichtbar bleiben',
  intro: 'Eine schöne Website allein reicht nicht. Ohne Strategie verschwindet sie auf Seite 3 von Google – und deine Konkurrenz gewinnt die Kunden, die eigentlich deine sein sollten.',
  cards: [
    { num: '01', icon: '🔍', title: 'Keine Sichtbarkeit bei Google', text: 'Deine Website existiert, aber niemand findet sie. Ohne SEO verlierst du täglich potenzielle Kunden an besser platzierte Wettbewerber.' },
    { num: '02', icon: '📉', title: 'Website überzeugt nicht', text: 'Besucher kommen – und gehen wieder. Schlechtes Design, langsame Ladezeiten und kein klarer Call-to-Action kosten dich Aufträge.' },
    { num: '03', icon: '🏢', title: 'Agenturen: teuer & träge', text: 'Große Agenturen geben dein Projekt an Junior-Mitarbeiter weiter, liefern spät und kommunizieren schlecht. Du zahlst für Overhead, nicht für Ergebnisse.' },
    { num: '04', icon: '📊', title: 'Kein messbarer ROI', text: 'Du investierst in Maßnahmen, weißt aber nie ob sie wirken. Ohne Tracking und klare KPIs verbrennst du Budget ohne Plan.' },
  ],
}

export default function Problem({ data }: { data?: Record<string, unknown> }) {
  const d: ProblemData = { ...defaults, ...(data as ProblemData) }
  const cards = (d.cards as ProblemCard[]) ?? defaults.cards!

  return (
    <section id="problem">
      <div className="wrap">
        <div className="sec-head fu">
          <div className="label">Das Problem</div>
          <h2>{d.title}</h2>
          <p className="sec-intro">{d.intro}</p>
        </div>
        <div className="prob-grid">
          {cards.map((p, i) => (
            <div key={p.num} className={`prob-card fu${i > 0 ? ` d${i}` : ''}`}>
              <div className="pnum">{p.num}</div>
              <div className="picon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
