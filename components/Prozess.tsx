const steps = [
  {
    n: '01',
    title: 'Kostenloses Erstgespräch',
    sub: '30 Minuten · via WhatsApp oder Video',
    text: 'Kein Formular, kein Warten auf Rückruf. Wir klären kurz deine Situation, deine Ziele und ob wir zusammenpassen. Unverbindlich.',
  },
  {
    n: '02',
    title: 'Analyse & Strategie',
    sub: '3–5 Werktage',
    text: 'Keyword-Recherche, Wettbewerbsanalyse, technisches Audit. Du bekommst ein konkretes Konzept, bevor wir starten – keine Überraschungen.',
  },
  {
    n: '03',
    title: 'Design & Umsetzung',
    sub: 'iterativ, mit deinem Feedback',
    text: 'Kein "hier ist dein Ergebnis, tschüss". Wir arbeiten gemeinsam – du siehst Zwischenstände, gibst Feedback, ich setze um.',
  },
  {
    n: '04',
    title: 'Go-live + laufende Betreuung',
    sub: 'auf Wunsch monatlich',
    text: 'Launch ist nicht das Ende. Auf Wunsch begleite ich dich mit monatlichem SEO, Reporting und technischer Betreuung – so lange, wie du wächst.',
  },
]

export default function Prozess() {
  return (
    <section id="prozess">
      <div className="wrap">
        <div className="prz-head fu">
          <div className="label">So läuft es ab</div>
          <h2>Kein Chaos. Keine Überraschungen.</h2>
          <p className="sec-intro">Du weißt jederzeit, wo wir stehen. Wer weiß, was ihn erwartet, fragt eher an.</p>
        </div>
        <div className="prz-steps">
          {steps.map((s, i) => (
            <div key={s.n} className={`prz-step fu${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}>
              <div className="prz-num">{s.n}</div>
              <div className="prz-content">
                <div className="prz-title-row">
                  <h3 className="prz-title">{s.title}</h3>
                  <span className="prz-sub">{s.sub}</span>
                </div>
                <p className="prz-text">{s.text}</p>
              </div>
              {i < steps.length - 1 && <div className="prz-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
