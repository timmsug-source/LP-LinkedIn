'use client'

import { useState } from 'react'

/**
 * VSL-Bereich.
 *
 * Der VSL ist aktuell keine Videodatei, sondern eine animierte HTML-Seite
 * (neun Szenen, ca. 67 s, Endlosschleife, ohne Ton) – sie liegt als
 * gebündelte Einzeldatei unter /geo-vsl.html.
 *
 * Deshalb wird sie in einem iframe eingebettet, und zwar erst nach dem Klick:
 * Das Bündel bringt React und den Animations-Renderer mit und wiegt gut 1 MB.
 * Vor dem Klick lädt davon nichts – der Hero bleibt so leicht wie vorher.
 *
 * Sobald eine echte Videodatei existiert, VIDEO_SRC setzen (z. B.
 * '/vsl-geo.mp4'); dann läuft wieder der native Player statt des iframes.
 */
const VIDEO_SRC = ''
const EMBED_SRC = '/geo-vsl.html'
const LAUFZEIT = '1:07 min'

export default function GeoVsl() {
  const [playing, setPlaying] = useState(false)
  const hasMedia = Boolean(VIDEO_SRC || EMBED_SRC)

  return (
    <div className="geo-vsl fu d1">
      <div className="geo-vsl-frame">
        {playing && VIDEO_SRC ? (
          <video className="geo-vsl-video" src={VIDEO_SRC} controls autoPlay playsInline />
        ) : playing && EMBED_SRC ? (
          <iframe
            className="geo-vsl-embed"
            src={EMBED_SRC}
            title="GEO erklärt – warum KI-Suchen gerade alles verändern"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            className="geo-vsl-poster"
            onClick={() => hasMedia && setPlaying(true)}
            aria-label="Video abspielen"
          >
            {/* Hintergrund-Grid + Glow */}
            <span className="geo-vsl-grid" aria-hidden="true" />
            <span className="geo-vsl-glow" aria-hidden="true" />

            {/* Simulierter KI-Chat als Poster-Motiv */}
            <span className="geo-vsl-mock" aria-hidden="true">
              <span className="geo-vsl-prompt">
                <span className="geo-vsl-prompt-label">Frage an die KI</span>
                „Wer ist ein guter Anbieter für … in meiner Nähe?"
              </span>
              <span className="geo-vsl-answer">
                <span className="geo-vsl-typing">
                  <span /><span /><span />
                </span>
                <span className="geo-vsl-answer-text">
                  Empfehlenswert ist <mark>dein Unternehmen</mark> …
                </span>
              </span>
            </span>

            <span className="geo-vsl-play">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.28-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
              </svg>
            </span>
            <span className="geo-vsl-caption">
              {hasMedia ? 'Video abspielen' : 'Video folgt in Kürze'}
              <em>Warum KI-Suchen gerade alles verändern · {LAUFZEIT}</em>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
