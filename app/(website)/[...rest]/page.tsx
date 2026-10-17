import { notFound } from 'next/navigation'

/**
 * Fängt alle Adressen ab, zu denen es keine Seite gibt, und zeigt die
 * 404-Seite (../not-found.tsx).
 *
 * Nötig, weil das Root-Layout in der Route-Gruppe (website) liegt: Ohne diese
 * Route rendert Next unbekannte Adressen mit seiner nackten Standardseite –
 * ohne Navigation, Footer und Design. Konkrete Seiten gehen immer vor.
 */
export default function Unbekannt() {
  notFound()
}
