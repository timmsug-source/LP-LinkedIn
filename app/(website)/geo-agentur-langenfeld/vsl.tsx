'use client'

import { useState } from 'react'

/**
 * VSL-Bereich.
 * Solange kein Video hinterlegt ist, wird ein Poster mit Play-Button gezeigt.
 * Sobald das Video fertig ist: VIDEO_SRC setzen (z.B. '/vsl-geo.mp4') –
 * dann spielt es direkt inline ab.
 */
const VIDEO_SRC = '' // ← hier später den Pfad zum fertigen VSL eintragen

export default function GeoVsl() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="geo-vsl fu d1">
      <div className="geo-vsl-frame">
        {playing && VIDEO_SRC ? (
          <video className="geo-vsl-video" src={VIDEO_SRC} controls autoPlay playsInline />
        ) : (
          <button
            type="button"
            className="geo-vsl-poster"
            onClick={() => VIDEO_SRC && setPlaying(true)}
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
              {VIDEO_SRC ? 'Video abspielen' : 'Video folgt in Kürze'}
              <em>Warum KI-Suchen gerade alles verändern · 3:40 min</em>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
