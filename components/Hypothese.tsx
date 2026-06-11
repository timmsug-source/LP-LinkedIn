interface HypCard { title: string; text: string }
interface HypotheseData {
  title?: string
  intro?: string
  cards?: HypCard[]
}

const defaults: HypotheseData = {
  title: 'Was sich ändert, wenn deine Website und SEO als ein System arbeiten',
  intro: 'Unterschiedliche Ziele — und ein Muster: Wer SEO und Webdesign zusammendenkt, gewinnt.',
  cards: [
    {
      title: 'Du weißt exakt, welcher Kanal welche Anfrage bringt',
      text: 'Kein Raten mehr. Kein Hoffen auf den nächsten Report. Du siehst in Echtzeit, was dein stärkster Hebel ist — und was du ignorieren kannst. Entscheidungen auf Basis von Fakten, nicht von Meinungen.',
    },
    {
      title: 'SEO und Website verstärken sich gegenseitig — automatisch',
      text: 'Was deine Besucher bei Google suchen, verbessert deine Seiten. Was deine Seiten zeigen, stärkt dein Ranking. Kein Kanal existiert für sich allein — alles arbeitet zusammen.',
    },
    {
      title: 'Dein Marketing wird jeden Monat besser — ohne Mehraufwand',
      text: 'Weil das System aus jedem Ergebnis lernt. Aus deinen Daten. Aus 5+ Jahren Erfahrung. Was andere erst herausfinden müssen, weißt du ab Tag 1.',
    },
  ],
}

export default function Hypothese({ data }: { data?: Record<string, unknown> }) {
  const d: HypotheseData = { ...defaults, ...(data as HypotheseData) }
  const cards = (d.cards as HypCard[]) ?? defaults.cards!

  return (
    <section id="hypothese">
      <div className="wrap">
        <div className="hyp-head fu">
          <div className="label">Dein Vorteil</div>
          <h2>{d.title}</h2>
          <p className="hyp-intro">{d.intro}</p>
        </div>
        <div className="hyp-grid">
          {cards.map((c, i) => (
            <div key={i} className={`hyp-card fu${i > 0 ? ` d${i}` : ''}`}>
              <div className="hyp-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
