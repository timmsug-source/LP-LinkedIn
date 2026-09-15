'use client'

import { useId, useRef, useState } from 'react'

/**
 * Knopf im Hero plus das Formular, das er öffnet.
 *
 * Bewusst als natives <dialog>: Das bringt Fokusfalle, Schließen mit Escape
 * und die Hintergrund-Abdunklung (::backdrop) von sich aus mit. Nachgebaut
 * wären das drei Effekte und eine Tastatur-Behandlung, die erfahrungsgemäß
 * unvollständig bleibt.
 *
 * Das Formular hat noch kein Ziel auf dem Server – die Seite hat gar keins.
 * Bis dahin geht die ausgefüllte Anfrage über WhatsApp raus, den Kanal, über
 * den auch alles andere auf der Seite läuft.
 */

const WA_NUMMER = '4915229515030'

export default function AuditFormular({ label = 'Kostenloses Audit anfordern' }: { label?: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [gesendet, setGesendet] = useState(false)
  /* Die Überschrift beschriftet den Dialog. Steht der Knopf zweimal auf der
     Seite, gäbe es sonst zweimal dieselbe id. */
  const titelId = useId()

  function oeffnen() {
    setGesendet(false)
    dialog.current?.showModal()
  }

  function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const website = String(f.get('website') || '').trim()
    const zeilen = [
      'Hallo Timm, ich hätte gerne ein kostenloses Audit.',
      '',
      `Name: ${f.get('name')}`,
      `Kontakt: ${f.get('kontakt')}`,
    ]
    zeilen.push(website ? `Website: ${website}` : 'Website: noch keine')
    const ziel = String(f.get('ziel') || '').trim()
    if (ziel) zeilen.push('', `Das größte Problem gerade: ${ziel}`)

    window.open(
      `https://wa.me/${WA_NUMMER}?text=${encodeURIComponent(zeilen.join('\n'))}`,
      '_blank',
      'noopener,noreferrer',
    )
    setGesendet(true)
  }

  return (
    <>
      <button type="button" className="btn" onClick={oeffnen}>
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </button>

      {/* Ein Klick auf die Fläche außerhalb schließt: Das <dialog> selbst ist
          die Fläche, der Inhalt liegt in einem eigenen Kasten darin. */}
      <dialog
        ref={dialog}
        className="v2-dialog"
        onClick={(e) => { if (e.target === dialog.current) dialog.current?.close() }}
        aria-labelledby={titelId}
      >
        <div className="v2-dialog-box">
          <button
            type="button"
            className="v2-dialog-zu"
            onClick={() => dialog.current?.close()}
            aria-label="Schließen"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>

          {gesendet ? (
            <div className="v2-dialog-danke">
              <h2 id={titelId}>Fast geschafft.</h2>
              <p>
                WhatsApp hat sich mit deiner Anfrage geöffnet – du musst sie dort nur noch
                abschicken. Sollte sich nichts geöffnet haben, schreib mir einfach direkt.
              </p>
              <button type="button" className="btn" onClick={() => dialog.current?.close()}>
                Alles klar
              </button>
            </div>
          ) : (
            <>
              <h2 id={titelId}>Kostenloses Audit anfordern</h2>
              <p className="v2-dialog-intro">
                Ich schaue mir deine Website an – Technik, Sichtbarkeit bei Google und in
                KI-Antworten – und schicke dir die konkreten Punkte zurück. Kostenlos und
                ohne Haken.
              </p>

              <form className="v2-form" onSubmit={absenden}>
                {/* Nicht als Pflichtfeld: Über denselben Dialog fragen auch
                    Leute an, die noch gar keine Website haben. */}
                <label>
                  <span>Deine Website <i>falls vorhanden</i></span>
                  <input
                    type="text" name="website"
                    placeholder="beispiel.de"
                    autoComplete="url"
                  />
                </label>

                <label>
                  <span>Name <em>*</em></span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>

                <label>
                  <span>E-Mail oder Telefon <em>*</em></span>
                  <input type="text" name="kontakt" required placeholder="damit ich dich erreiche" />
                </label>

                <label>
                  <span>Woran hakt es gerade? <i>optional</i></span>
                  <textarea name="ziel" rows={3} placeholder="z. B. kaum Anfragen über die Website" />
                </label>

                <button type="submit" className="btn">
                  Anfrage absenden
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>

                <p className="v2-form-hinweis">
                  Deine Angaben gehen als vorbereitete Nachricht an WhatsApp. Kein Newsletter,
                  keine Weitergabe.
                </p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  )
}
