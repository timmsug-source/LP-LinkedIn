const cards = [
  { title: 'Ich werde bei Google nicht gefunden', text: 'Deine Website existiert – aber auf Seite 3 kauft niemand. Täglich verlierst du Anfragen an Wettbewerber, die du gar nicht kennst.' },
  { title: 'Meine Website macht keinen professionellen Eindruck', text: 'Der erste Eindruck entscheidet in 0,05 Sekunden. Eine veraltete Website signalisiert: "Ich nehme mein Business nicht ernst." Und Kunden gehen.' },
  { title: 'Ich bekomme keine Anfragen über meine Website', text: 'Traffic ist kein Ziel. Anfragen sind das Ziel. Eine Website ohne Conversion-Strategie ist teuer bezahlter Leerstand.' },
  { title: 'ChatGPT empfiehlt nie mich – nur meine Wettbewerber', text: '30–40 % aller Suchanfragen enden heute ohne Klick, weil KI direkt antwortet. Wer nicht für GEO optimiert, verliert die Hälfte des Traffics der Zukunft.' },
]

export default function Problem({ data: _ }: { data?: Record<string, unknown> }) {
  return (
    <section id="problem">
      <div className="wrap">
        <div className="prob-head fu">
          <div className="label prob-label">Erkennst du dich wieder?</div>
          <h2>Das Problem, das dich jeden Monat Kunden kostet</h2>
          <p className="sec-intro">Nicht Budget. Nicht Engagement. Die meisten Websites haben einfach das falsche Fundament.</p>
        </div>
        <div className="prob-grid">
          {cards.map((p, i) => (
            <div key={i} className={`prob-card fu${i > 0 ? ` d${i}` : ''}`}>
              <div className="picon">!</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="prob-footer fu d3">
          Das ist kein Budget-Problem. <strong>Deiner Website fehlt ein System.</strong> Und genau das baue ich für dich.
        </p>
      </div>
    </section>
  )
}
