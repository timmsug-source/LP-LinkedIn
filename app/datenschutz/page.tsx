import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Timm Schurig – Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf timmschurig.com.',
  alternates: { canonical: 'https://www.timmschurig.com/datenschutz' },
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <>
      <div className="page">
        <div className="page-label">Rechtliches</div>
        <h1>Datenschutzerklärung</h1>

        <div className="block">
          <h2>1. Verantwortlicher</h2>
          <p><strong>Timm Schurig</strong><br />Zum Galkhausener Bach 72<br />40764 Langenfeld (Rheinland)<br />E-Mail: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
        </div>

        <div className="block">
          <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.</p>
        </div>

        <div className="block">
          <h2>3. Kontaktaufnahme via WhatsApp</h2>
          <p>Wenn Sie über den WhatsApp-Link auf dieser Website Kontakt aufnehmen, werden Sie zur App <strong>WhatsApp</strong> (Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) weitergeleitet. Die Verarbeitung Ihrer Nachrichten und personenbezogenen Daten unterliegt den Datenschutzbestimmungen von WhatsApp/Meta. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
          <p>Weitere Informationen zum Datenschutz bei WhatsApp finden Sie unter: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">whatsapp.com/legal/privacy-policy</a></p>
        </div>

        <div className="block">
          <h2>4. Cookies</h2>
          <p>Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind.</p>
        </div>

        <div className="block">
          <h2>5. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung sowie das Recht auf Datenübertragbarkeit. Wenn Sie Ihre Einwilligung zur Datenverarbeitung widerrufen oder Auskunft über Ihre gespeicherten Daten erhalten möchten, wenden Sie sich bitte an: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
        </div>

        <div className="block">
          <h2>6. Hosting</h2>
          <p>Diese Website wird bei <strong>Vercel Inc.</strong> (340 Pine Street, Suite 801, San Francisco, CA 94104, USA) gehostet. Vercel verarbeitet die Serveranfragen und speichert temporär Server-Logfiles. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></p>
        </div>

        <div className="block">
          <h2>7. Aktualität dieser Erklärung</h2>
          <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Durch die Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung dieser Datenschutzerklärung notwendig werden.</p>
        </div>

        <div className="legal-notice">
          <p>Bei Fragen zum Datenschutz: <a href="mailto:mail@timmschurig.com">mail@timmschurig.com</a></p>
        </div>
      </div>
      <footer>
        <p className="foot-copy">© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld</p>
        <div className="foot-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="https://www.linkedin.com/in/timm-schurig/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}
