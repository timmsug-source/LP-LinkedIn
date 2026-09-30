const projects = [
  {
    tag: 'Fitness Coaching',
    name: 'FuelByFabian',
    title: '"Personal Trainer NRW" – von Seite 3 auf Position 4',
    desc: 'Ein Fitness-Coach aus NRW, der ausschließlich über Instagram Kunden gewann. Kein organischer Traffic, keine Website-Anfragen.',
    before: 'Keine organischen Rankings, 0 Anfragen über Google',
    after: 'Top-5 für "Personal Trainer NRW" – messbare Anfragen',
    stats: [
      { val: 'Top 5', lbl: 'Ranking "Personal Trainer NRW"' },
      { val: '+340%', lbl: 'organischer Traffic' },
      { val: '8–12', lbl: 'neue Anfragen/Monat' },
    ],
    color: '#00bc7d',
  },
  {
    tag: 'Naturheilpraxis',
    name: 'Naturheilpraxis Brenscheidt',
    title: 'Lokale Sichtbarkeit für eine Naturheilpraxis in Hattingen',
    desc: 'Eine Naturheilpraxis mit veralteter Website und keiner Google-Präsenz. Ziel: Neue Patienten über organische Suche gewinnen.',
    before: 'Veraltete Website, kaum Sichtbarkeit in Google Maps',
    after: 'Moderner Auftritt, Top-3 in Google Maps für relevante Keywords',
    stats: [
      { val: 'Top 3', lbl: 'Google Maps lokal' },
      { val: '4,9★', lbl: 'Google Bewertung' },
      { val: '+180%', lbl: 'mehr Aufrufe/Monat' },
    ],
    color: '#6366f1',
  },
]

export default function Projekte() {
  return (
    <section id="projekte">
      <div className="wrap">
        <div className="proj-head fu">
          <div className="label">Ausgewählte Projekte</div>
          <h2>Projekte, die Ergebnisse gebracht haben.</h2>
          <p className="sec-intro">Keine Mockups. Keine Hochglanz-Cases. Echte Projekte, echte Zahlen, echte Menschen.</p>
        </div>
        <div className="proj-list">
          {projects.map((p, i) => (
            <div key={p.name} className={`proj-card fu${i > 0 ? ' d1' : ''}`}>
              <div className="proj-left">
                <span className="proj-tag" style={{ '--proj-color': p.color } as React.CSSProperties}>{p.tag}</span>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-before-after">
                  <div className="proj-ba">
                    <span className="proj-ba-label">Vorher</span>
                    <span className="proj-ba-text">{p.before}</span>
                  </div>
                  <div className="proj-ba-arrow">→</div>
                  <div className="proj-ba proj-ba--after">
                    <span className="proj-ba-label">Nachher</span>
                    <span className="proj-ba-text">{p.after}</span>
                  </div>
                </div>
              </div>
              <div className="proj-right">
                <div className="proj-stats">
                  {p.stats.map((s) => (
                    <div key={s.lbl} className="proj-stat">
                      <div className="proj-stat-val" style={{ color: p.color }}>{s.val}</div>
                      <div className="proj-stat-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
