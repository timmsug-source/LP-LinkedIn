import type { Metadata } from 'next'
import V2Footer from '@/components/V2Footer'

export const metadata: Metadata = {
  title: 'Impressum · Timm Schurig, SEO & Webdesign Langenfeld',
  description: 'Impressum von Timm Schurig – SEO & Webdesign Freelancer aus Langenfeld (Rheinland). Angaben gemäß § 5 DDG.',
  alternates: { canonical: 'https://www.timmschurig.com/impressum' },
  // Bewusst indexierbar: Google nutzt die Impressumsdaten (Name, Adresse)
  // als Bestätigung der lokalen Identität. Erbt index/follow vom Root-Layout.
}

export default function Impressum() {
  return (
    <div className="v2 v2-re-seite">
      {/* Aufbau wie die Blog-Übersicht: dunkler Kopf, darunter die Angaben in
          Karten und der Footer der Website. */}
      <section className="v2-re-hero">
        <div className="wrap">
          <span className="v2-re-kicker">Rechtliches</span>
          <h1 className="v2-re-h1">Impressum &amp; <span className="hl">Anbieterkennzeichnung</span></h1>
        </div>
      </section>

      <section className="v2-recht">
        <div className="wrap">
          <div className="v2-re-spalte">
            <div className="v2-re-block">
              <h2>Angaben gemäß § 5 DDG</h2>
              <p><strong>Timm Schurig</strong></p>
              <p>Zum Galkhausener Bach 72<br />40764 Langenfeld (Rheinland)</p>
            </div>
            <div className="v2-re-block">
              <h2>Kontakt</h2>
              <p>E-Mail: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
              <p>Website: <a href="https://www.timmschurig.com">www.timmschurig.com</a></p>
            </div>
            <div className="v2-re-block">
              <h2>Berufsbezeichnung</h2>
              <p><strong>SEO & Webdesign Freelancer</strong></p>
              <p>Kleingewerbetreibender gemäß § 19 UStG – keine Umsatzsteuer-Identifikationsnummer erforderlich.</p>
            </div>
            <div className="v2-re-block">
              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p><strong>Timm Schurig</strong><br />Zum Galkhausener Bach 72<br />40764 Langenfeld (Rheinland)</p>
            </div>
            <div className="v2-re-block">
              <h2>Haftungsausschluss</h2>
              <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
              <p>Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
            </div>
            <div className="v2-re-block">
              <h2>Urheberrecht</h2>
              <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.</p>
            </div>
            <div className="v2-re-hinweis">
              <p>Bei Fragen zum Impressum: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <V2Footer basis="/" />
    </div>
  )
}
