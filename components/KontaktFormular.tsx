'use client'

import { useState } from 'react'

/**
 * Kontaktformular für die Kontakt-Sektion auf /test.
 *
 * Wie das Audit-Popup hat auch dieses Formular noch kein Ziel auf dem Server –
 * die Seite hat keins. Die Angaben gehen als vorbereitete Nachricht an
 * WhatsApp, den Kanal, über den auch alles andere auf der Seite läuft.
 */

const WA_NUMMER = '4915229515030'

export default function KontaktFormular() {
  const [gesendet, setGesendet] = useState(false)

  function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const text = [
      'Hallo Timm, ich hätte gerne ein kostenloses Erstgespräch.',
      '',
      `Name: ${f.get('name')}`,
      `Kontakt: ${f.get('kontakt')}`,
    ].join('\n')

    window.open(
      `https://wa.me/${WA_NUMMER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setGesendet(true)
  }

  if (gesendet) {
    return (
      <div className="v2-kf-danke" role="status">
        <strong>Fast geschafft.</strong>
        <p>
          WhatsApp hat sich mit deiner Anfrage geöffnet – du musst sie dort nur noch
          abschicken. Sollte sich nichts geöffnet haben, schreib mir einfach direkt.
        </p>
      </div>
    )
  }

  return (
    <form className="v2-kf" onSubmit={absenden}>
      <label className="v2-kf-feld">
        <span className="sr-only">Dein Name</span>
        <input type="text" name="name" required autoComplete="name" placeholder="Dein Name" />
      </label>

      <label className="v2-kf-feld">
        <span className="sr-only">Deine E-Mail-Adresse oder Telefonnummer</span>
        <input type="text" name="kontakt" required placeholder="E-Mail oder Telefonnummer" />
      </label>

      <label className="v2-kf-zustimmung">
        <input type="checkbox" name="zustimmung" required />
        <span>
          Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet
          werden. Weitere Infos in der <a href="/datenschutz">Datenschutzerklärung</a>.
        </span>
      </label>

      <button type="submit" className="btn v2-kf-knopf">
        Gespräch anfragen
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </button>
    </form>
  )
}
