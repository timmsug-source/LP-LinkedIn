import Image from 'next/image'

const skills = ['On-Page SEO', 'Technical SEO', 'Keyword Research', 'Webdesign', 'WordPress', 'Core Web Vitals', 'Google Analytics', 'Search Console']

export default function About() {
  return (
    <section id="ueber">
      <div className="wrap">
        <div className="about-layout">
          <div className="about-img fu">
            <Image src="/timm.png" alt="Timm Schurig" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="fu d1">
            <div className="label">Über mich</div>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.8vw,3rem)', marginBottom: '22px' }}>Hallo, ich bin Timm.</h2>
            <p className="about-text">Ich bin 23 Jahre alt, komme aus Langenfeld und arbeite als freier SEO- und Webdesign-Spezialist. Was mich antreibt: das Gefühl, wenn eine Website, an der ich gearbeitet habe, plötzlich auf Seite 1 landet – und mein Kunde deswegen morgens Anfragen im Postfach hat.</p>
            <p className="about-text">Ich beschäftige mich seit 5 Jahren mit SEO und seit 3 Jahren mit Webdesign – nicht als Hobby, sondern als Handwerk, das ich täglich verfeinere. Mir ist wichtig, die Zusammenhänge wirklich zu verstehen, nicht nur Checklisten abzuarbeiten.</p>
            <p className="about-text">Auf LinkedIn teile ich regelmäßig, was ich lerne und was in meinen Projekten funktioniert.</p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="about-li-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn aufrufen →
            </a>
            <div className="skills">
              {skills.map((s) => <span key={s} className="skill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
