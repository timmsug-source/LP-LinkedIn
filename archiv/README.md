# Archiv

Stand der Website vor dem Umbau im September 2026. Nichts hier wird gebaut
oder ausgeliefert: Next.js routet nur `app/`, und `tsconfig.json` schließt
`archiv/` aus.

## Was hier liegt

| Ordner | Inhalt |
|---|---|
| `app/page.tsx` | alte Startseite (CMS-gestützt, Sektionen aus Supabase `pages`) |
| `app/blog/page.tsx` | alte Blog-Übersicht (die Beiträge unter `/blog/[slug]` sind weiter live) |
| `app/seo-freelancer-langenfeld/` | alte Langenfeld-Seite |
| `app/seo-freelancer/`, `app/geo-agentur-langenfeld/`, `app/referenzen/` | alte Leistungs- und Referenzseiten – leiten per 301 weiter (`next.config.ts`) |
| `app/bewerbung/` | Bewerbungsseite |
| `app/beispiel/`, `app/coach-eddy/`, `app/fabian-coaching/`, `app/fabian-coaching-hell/`, `app/michael-mbr/`, `app/naturheilpraxis-brenscheidt/` | Kunden- und Demoseiten (liefern jetzt 404) |
| `app/api/` | API-Routen der Coaching-Demo (Gemini-Analyse, Terminbuchung) |
| `components/` | Komponenten der alten Seite, dazu `AblaufLinie.tsx` (s. u.) |
| `lib/hub/` | Anbindung an den Platform Hub (nur von der Naturheilpraxis-Seite genutzt) |
| `css/entfernt-aus-globals.css` | alle Regeln, die aus `app/(website)/globals.css` entfernt wurden |
| `public/` | Bilder und HTML-Grafiken, die nur die archivierten Seiten nutzten, dazu nie eingebundene Originale |
| `tailwind.config.js`, `postcss.config.js` | Tailwind wurde nur von den Demoseiten genutzt |

## Etwas zurückholen

Datei an ihren alten Ort verschieben (Pfad unter `archiv/` entspricht dem
Pfad im Projekt, `archiv/app/…` → `app/(website)/…`) und die zugehörigen
CSS-Regeln aus `css/entfernt-aus-globals.css` zurück in `globals.css`
kopieren. Für die Demoseiten zusätzlich Tailwind wieder einrichten
(`tailwind.config.js`, `postcss.config.js`, Pakete `tailwindcss`,
`autoprefixer`, `postcss`) sowie `lucide-react`, `motion` und
`@google/genai` installieren.

### Alte Ablauf-Sektion

Die frühere Ablauf-Sektion der Startseite (Schritte an einer mitwachsenden
Linie, links ein Platzhalter für ein MacBook-Mockup) liegt in
`components/AblaufLinie.tsx`, ihre Regeln (`.v2-ablauf`, `.v2-ab-*`) in
`css/entfernt-aus-globals.css`. Zum Zurückwechseln beides zurückholen und in
`app/(website)/page.tsx` `<AblaufStapel />` durch `<AblaufLinie />` ersetzen.
