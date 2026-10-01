/**
 * Markierungen für den visuellen Editor im Website-Hub (siehe CMS-VISUELL.md).
 * Reine Funktionen ohne Abhängigkeiten – auch in Client-Komponenten nutzbar.
 */

export type CmsArt = 'text' | 'html' | 'bild' | 'feld' | 'markdown'

/** Markiert ein Element, das genau den Wert eines CMS-Feldes zeigt. */
export function cms(id: string, art: CmsArt = 'text'): Record<string, string> {
  return art === 'text' ? { 'data-cms': id } : { 'data-cms': id, 'data-cms-art': art }
}
