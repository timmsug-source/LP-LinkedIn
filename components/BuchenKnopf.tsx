/**
 * Knopf, der direkt zur Terminbuchung führt – Buchungsseite „Kostenloses
 * Erstgespräch mit Timm Schurig" (30 Minuten) in der Terminplanung von
 * Google Kalender. Gleiches Aussehen wie der Knopf des Audit-Formulars, damit
 * sich die Seite beim Austausch optisch nicht verändert.
 *
 * Nur der Knopf im Hero öffnet weiterhin das Audit-Formular.
 */

export const BUCHUNG_URL = 'https://calendar.app.google/VUAH6FDkmzgWv3tcA'

export default function BuchenKnopf({ label = 'Kostenloses Erstgespräch buchen', className = '' }: { label?: string; className?: string }) {
  return (
    <a className={`btn ${className}`.trim()} href={BUCHUNG_URL} target="_blank" rel="noopener noreferrer">
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  )
}
