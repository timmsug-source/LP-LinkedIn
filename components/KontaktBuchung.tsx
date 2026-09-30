import BuchenKnopf from '@/components/BuchenKnopf'

/**
 * Kontakt mit Terminbuchung – geteilt zwischen Startseite und
 * Langenfeld-Seite. Statt eines Formulars führt der Knopf auf
 * die Buchungsseite der Terminplanung von Google Kalender.
 */


export default function KontaktBuchung() {
  return (
    <>
      {/* Überschrift mittig, links die Terminbuchung in einer Karte, rechts
          was man vom Erstgespräch hat. */}
      <section className="v2-kontakt" id="anfrage">
        <div className="wrap">
          <div className="v2-ko-kopf">
            <h2 className="v2-ko-h2">
              Sichere dir dein <span className="hl">kostenloses Erstgespräch</span>
            </h2>
            <p className="v2-ko-sub">
              30 Minuten mit mir persönlich, in denen wir uns anschauen, wo du bei Google und
              in KI-Antworten gerade stehst – und was die nächsten sinnvollen Schritte sind.
            </p>
          </div>

          <div className="v2-ko-grid">
            <div className="v2-ko-karte">
              <span className="v2-ko-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4.5" width="18" height="16" rx="3" /><path d="M3 9.5h18M8 3v3M16 3v3" /><path d="m9 15 2 2 4-4" />
                </svg>
              </span>
              {/* Nur noch die Terminbuchung – das Formular ist bewusst entfallen. */}
              <h3 className="v2-ko-karte-titel">Direkt einen Termin buchen</h3>
              <p className="v2-ko-buchen-text">
                Such dir einen freien Zeitpunkt aus – der Termin landet sofort in deinem Kalender.
              </p>
              <BuchenKnopf className="v2-ko-buchen" />
            </div>

            <div className="v2-ko-vorteile">
              <ul className="v2-ko-liste">
                <li>Du erfährst, <strong>woran es bei deiner Sichtbarkeit gerade hakt</strong> – bei Google, in der Karte und in KI-Antworten.</li>
                <li>Du nimmst <strong>konkrete nächste Schritte</strong> mit – auch wenn wir am Ende nicht zusammenarbeiten.</li>
                <li>Kein Vertrag, keine Verkaufsmasche. <strong>30 Minuten, kostenlos.</strong></li>
              </ul>

              <div className="v2-ko-bewertung">
                <span className="v2-ko-sterne" aria-hidden="true">★★★★★</span>
                <span><strong>5,0</strong> aus 15+ Bewertungen auf Fiverr &amp; Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
