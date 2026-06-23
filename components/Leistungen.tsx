import GraphicFrame from './GraphicFrame'

const WA_NUMBER = '4915229515030'
const WA_TEXT_CONTACT = encodeURIComponent('Hallo Timm, ich habe deine Leistungen gelesen und würde gerne kurz sprechen.')

const services = [
  {
    emoji: '🌐',
    tag: 'Webdesign',
    title: 'Deine Website soll arbeiten – nicht nur gut aussehen.',
    pain: 'Die meisten Websites von Selbstständigen sind entweder selbst gebastelt oder von einer Agentur gebaut, die keine Ahnung von deiner Zielgruppe hat. Das Ergebnis: Eine Seite, die niemanden abholt und keine Anfragen bringt.',
    value: 'Ich baue dir eine Website, die auf dich und deine Wunschkunden zugeschnitten ist. Kein Template-Einheitsbrei, kein generisches Design. Stattdessen: eine klare Struktur, die deine Besucher von der ersten Zeile bis zur Kontaktanfrage führt.',
    features: [
      'Eine Website, die deine LinkedIn-Positionierung verlängert',
      'Conversion-optimiertes Design – gebaut für Anfragen, nicht für Awards',
      'Technisch sauber auf Next.js & Vercel – schnell, stabil, skalierbar',
    ],
    quote: 'Ich baue keine Websites, die aussehen wie alle anderen. Ich baue Websites, die zu dir passen – und die Arbeit für dich erledigen, während du schläfst.',
    graphic: '/grafik-webdesign.html',
  },
  {
    emoji: '📈',
    tag: 'SEO',
    title: 'Gefunden werden von Menschen, die wirklich kaufen wollen.',
    pain: 'SEO ist nicht tot. Aber schlechtes SEO schon. Wer heute noch auf Keyword-Stuffing und massenhafte Backlinks setzt, verliert. Was wirklich zählt: relevante Inhalte, technisch saubere Seiten und ein klares Thema, das Google versteht.',
    value: 'Ich sorge dafür, dass du bei den Suchanfragen auftauchst, die deine Wunschkunden wirklich eingeben – nicht bei irgendwelchen Begriffen mit viel Volumen und wenig Kaufabsicht.',
    features: [
      'Keyword-Strategie basierend auf echter Suchintention',
      'Technisches SEO-Audit & Umsetzung',
      'Content-Optimierung, die Menschen lesen wollen und Google versteht',
    ],
    quote: 'SEO ohne Strategie ist Raten. Ich zeige dir genau, warum du gefunden wirst – und von wem.',
    image: '/SEO-vorher-nachher.png',
    reverse: true,
  },
  {
    emoji: '🤖',
    tag: 'GEO – Generative Engine Optimization',
    title: 'Die meisten haben noch nie davon gehört. Deine Konkurrenz auch nicht.',
    pain: 'ChatGPT, Perplexity, Google AI Overviews – immer mehr Menschen suchen nicht mehr mit Keywords, sie stellen Fragen. Und die KI antwortet. Die Frage ist: Wirst du genannt? Oder jemand anderes?',
    value: 'GEO bedeutet, deine Website und deinen Content so aufzubauen, dass KI-Systeme dich als relevante Quelle erkennen und empfehlen. Das ist kein Zukunftsthema mehr – es passiert gerade. Ich bin einer der wenigen Freelancer in Deutschland, der GEO aktiv als Leistung anbietet und umsetzt.',
    features: [
      'Strukturierte Daten & semantische Optimierung',
      'Content, der als Antwort auf echte Fragen funktioniert',
      'Positionierung als Autorität in deiner Nische – auch für KI-Suche',
    ],
    quote: 'KI verändert gerade, wie Menschen suchen und entscheiden. Ich sorge dafür, dass du dabei bist – bevor es alle anderen tun.',
    graphic: '/grafik-geo.html',
  },
]

export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="wrap">
        <div className="lst-head fu">
          <div className="label">Was ich für dich tue</div>
          <h2>Du willst keine Website, die irgendwie online ist.</h2>
          <p className="sec-intro">Du willst Anfragen. Sichtbarkeit. Und einen digitalen Auftritt, der zu dir passt – nicht zu irgendeinem Template aus 2018. Hier ist, wie ich das umsetze.</p>
        </div>

        <div className="lst-blocks">
          {services.map((s, i) => (
            <div key={s.tag} className={`lst-service fu d${i}`}>

              {/* Grid 1: Text links, Grafik/Video rechts */}
              <div className={`lst-grid lst-grid--top${s.reverse ? ' lst-grid--reverse' : ''}`}>
                <div className="lst-text">
                  <div className="lst-block-header">
                    <span className="lst-block-emoji">{s.emoji}</span>
                    <span className="lst-block-tag">{s.tag}</span>
                  </div>
                  <h3 className="lst-block-title">{s.title}</h3>
                  <p className="lst-block-pain">{s.pain}</p>
                  <p className="lst-block-value">{s.value}</p>
                </div>
                <div className="lst-media">
                  {s.graphic
                    ? <GraphicFrame src={s.graphic} title={`${s.tag} Grafik`} />
                    : s.image
                    ? <img src={s.image} alt={`${s.tag} Ergebnis`} className="lst-media-img" />
                    : <div className="lst-video-placeholder">
                        <span className="lst-video-icon">📹</span>
                        <span>Video folgt</span>
                      </div>
                  }
                </div>
              </div>

              {/* Grid 2: Features links, Zitat rechts */}
              <div className={`lst-grid lst-grid--bottom${s.reverse ? ' lst-grid--reverse' : ''}`}>
                <div className="lst-features">
                  <p className="lst-block-features-label">Was du bekommst:</p>
                  <ul>
                    {s.features.map((f) => (
                      <li key={f}>
                        <span className="lst-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <blockquote className="lst-quote">
                  <p>{s.quote}</p>
                  <cite>— Timm Schurig</cite>
                </blockquote>
              </div>

            </div>
          ))}
        </div>

        <div className="lst-cta-block fu">
          <h2 className="lst-cta-title">Bereit, wenn du es bist.</h2>
          <p className="lst-cta-text">Du hast jetzt einen Überblick, was ich tue und wie ich arbeite. Wenn du das Gefühl hast, dass wir zusammenpassen – meld dich einfach. Kein Verkaufsgespräch, kein Druck. Nur ein ehrliches Gespräch darüber, was du brauchst.</p>
          <div className="lst-cta-actions">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT_CONTACT}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-wa"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Jetzt Kontakt aufnehmen →
            </a>
            <a
              href="https://www.linkedin.com/in/timm-schurig/"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost"
            >
              Oder schreib mir direkt auf LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
