const tools = [
  {
    name: 'Next.js',
    desc: 'Performance & SEO-Basis',
    logo: (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_408_139" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#mask0_408_139)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/><rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/></g><defs><linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient><linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs></svg>
    ),
  },
  {
    name: 'Vercel',
    desc: 'Hosting & Deployment',
    logo: (
      <svg viewBox="0 0 116 100" fill="white" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z"/></svg>
    ),
  },
  {
    name: 'GitHub',
    desc: 'Versionierung',
    logo: (
      <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="white"/></svg>
    ),
  },
  {
    name: 'Supabase',
    desc: 'Datenbank & CMS',
    logo: (
      <svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supaS1)"/><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supaS2)" fillOpacity="0.2"/><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.04094L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/><defs><linearGradient id="supaS1" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/></linearGradient><linearGradient id="supaS2" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stopOpacity="0"/></linearGradient></defs></svg>
    ),
  },
  {
    name: 'ahrefs',
    desc: 'SEO-Analyse',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#FF6600"/><text x="20" y="27" textAnchor="middle" fontSize="18" fontWeight="800" fill="white" fontFamily="Arial">ah</text></svg>
    ),
  },
  {
    name: 'Search Console',
    desc: 'Google-Monitoring',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#4285F4"/><circle cx="18" cy="18" r="7" stroke="white" strokeWidth="3" fill="none"/><line x1="23" y1="23" x2="30" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
  },
  {
    name: 'Screaming Frog',
    desc: 'Technical Audit',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#6ABF4B"/><text x="20" y="27" textAnchor="middle" fontSize="20" fill="white" fontFamily="Arial">🐸</text></svg>
    ),
  },
  {
    name: 'AnswerThePublic',
    desc: 'Content-Recherche',
    logo: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#E84B37"/><circle cx="20" cy="15" r="6" fill="white"/><path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="white"/></svg>
    ),
  },
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
              <div className="tool-logo">{t.logo}</div>
              <div className="tool-info">
                <span className="tool-name">{t.name}</span>
                <span className="tool-desc">{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
