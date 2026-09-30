interface ContactDetail { icon: string; label: string; value: string }
interface KontaktData {
  title?: string
  intro?: string
  details?: ContactDetail[]
}

const defaults: KontaktData = {
  title: 'Lass uns reden.',
  intro: 'Du hast ein Projekt, eine Idee oder einfach eine Frage? Schreib mir direkt auf WhatsApp – ich melde mich in der Regel innerhalb weniger Stunden. Das Erstgespräch ist kostenlos und unverbindlich.',
  details: [
    { icon: '📍', label: 'Standort', value: 'Langenfeld, NRW' },
    { icon: '⏱️', label: 'Antwortzeit', value: 'Innerhalb von 24h' },
    { icon: '🌍', label: 'Arbeitsweise', value: '100% Remote & flexibel' },
  ],
}

const WA_NUMBER = '4915229515030'
const WA_TEXT = encodeURIComponent('Hallo Timm, ich interessiere mich für deine Leistungen und würde mich gerne kurz vorstellen.')

export default function Kontakt({ data }: { data?: Record<string, unknown> }) {
  const d: KontaktData = { ...defaults, ...(data as KontaktData) }
  const details = (d.details as ContactDetail[]) ?? defaults.details!

  return (
    <section id="kontakt">
      <div className="wrap">
        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-sticky fu">
            <div className="label">Kontakt</div>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.8vw,3rem)', marginBottom: '16px' }}>{d.title}</h2>
            <p className="sec-intro">{d.intro}</p>
            {details.map((item) => (
              <div key={item.label} className="contact-detail">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-lbl">{item.label}</div>
                  <div className="contact-val">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: WhatsApp Card */}
          <div className="wa-card fu d1">
            <div className="wa-card-top">
              <div className="wa-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/timm.png" alt="Timm Schurig" width={64} height={64} />
              </div>
              <div className="wa-card-info">
                <p className="wa-name">Timm Schurig</p>
                <p className="wa-role">SEO &amp; Webdesign Freelancer</p>
                <span className="wa-status">
                  <span className="wa-dot" />
                  Verfügbar für neue Projekte
                </span>
              </div>
            </div>

            <div className="wa-bubble">
              <p>Hey! 👋 Schreib mir einfach auf WhatsApp – ich freue mich auf deine Nachricht und melde mich schnellstmöglich zurück.</p>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Jetzt auf WhatsApp schreiben
            </a>

            <p className="wa-note">Kostenlos &amp; unverbindlich · Kein Spam · Antwort innerhalb von 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
