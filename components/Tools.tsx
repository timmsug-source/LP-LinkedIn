const tools = [
  { name: 'Next.js', desc: 'Performance & SEO-Basis' },
  { name: 'Vercel', desc: 'Hosting & Deployment' },
  { name: 'GitHub', desc: 'Versionierung' },
  { name: 'Supabase', desc: 'Datenbank & CMS' },
  { name: 'ahrefs', desc: 'SEO-Analyse' },
  { name: 'Search Console', desc: 'Google-Monitoring' },
  { name: 'Screaming Frog', desc: 'Technical Audit' },
  { name: 'AnswerThePublic', desc: 'Content-Recherche' },
]

export default function Tools() {
  return (
    <section id="tools">
      <div className="wrap">
        <div className="tools-head fu">
          <div className="label">Tools & Technologien</div>
          <h2>Das Werkzeug, das dein Ergebnis sichert.</h2>
          <p className="sec-intro">Nicht als Protz – als Vertrauenssignal. Ich nutze dieselben Tools wie die besten SEO-Agenturen der Welt.</p>
        </div>
        <div className="tools-grid fu d1">
          {tools.map((t) => (
            <div key={t.name} className="tool-pill">
              <span className="tool-name">{t.name}</span>
              <span className="tool-desc">{t.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
