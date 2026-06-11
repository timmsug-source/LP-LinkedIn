interface ProblemCard { icon: string; title: string; text: string }
interface ProblemData {
  title?: string
  intro?: string
  footer?: string
  cards?: ProblemCard[]
}

const defaults: ProblemData = {
  title: 'Diese drei Fehler kosten Unternehmen tausende Euro — jeden Monat',
  intro: 'Budget investiert. Agentur beauftragt. Und am Ende weißt du immer noch nicht, was davon wirklich Kunden bringt.',
  footer: 'Das ist kein Budget-Problem. Deiner Website fehlt ein System, das lernt. Und genau so ein System gibt es.',
  cards: [
    { icon: '!', title: 'Du investierst in Marketing — aber kannst nicht messen, was es bringt', text: 'Reports sehen professionell aus. Aber sagen sie dir, welcher Kanal deine letzten 10 Anfragen gebracht hat? Wenn nicht, fährst du blind. Und wer blind fährt, verbrennt Geld.' },
    { icon: '!', title: 'Deine Kanäle arbeiten gegeneinander statt füreinander', text: 'SEO hier, Ads da, Social dort. Nichts ist vernetzt, niemand hat den Überblick. Du investierst dreimal — und bekommst weniger raus, als ein einziger vernetzter Kanal liefern würde.' },
    { icon: '!', title: 'Jeden Monat fängst du bei null an', text: 'Was letzten Monat funktioniert hat, fließt nicht in diesen Monat ein. Keine Kampagne wird besser, kein Kanal lernt vom anderen. Du investierst weiter — aber dein Marketing baut nicht auf.' },
  ],
}

export default function Problem({ data }: { data?: Record<string, unknown> }) {
  const d: ProblemData = { ...defaults, ...(data as ProblemData) }
  const cards = (d.cards as ProblemCard[]) ?? defaults.cards!

  return (
    <section id="problem">
      <div className="wrap">
        <div className="prob-head fu">
          <div className="label" style={{ color: '#c084fc' }}>
            <span style={{ background: '#c084fc' }} />
            Das Problem
          </div>
          <h2>{d.title}</h2>
          <p className="sec-intro">{d.intro}</p>
        </div>
        <div className="prob-grid">
          {cards.map((p, i) => (
            <div key={i} className={`prob-card fu${i > 0 ? ` d${i}` : ''}`}>
              <div className="picon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        {d.footer && (
          <p className="prob-footer fu d2" dangerouslySetInnerHTML={{ __html: d.footer }} />
        )}
      </div>
    </section>
  )
}
