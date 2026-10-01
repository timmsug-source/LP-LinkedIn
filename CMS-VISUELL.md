# Visuelles Bearbeiten – Markierungs-Vertrag

Das Website-Hub zeigt die echte Website in einem Rahmen. Ein Brücken-Skript
(`public/cms-bruecke.js`, wird nur im Hub-Rahmen geladen) findet alle Elemente
mit `data-cms` und macht sie anklickbar/bearbeitbar. Für normale Besucher ändert
sich nichts: Die Attribute sind unsichtbar, das Skript wird nicht geladen.

## Attribute

| Attribut | Bedeutung |
|---|---|
| `data-cms="<id>"` | Dieses Element zeigt **genau** den Wert der Id an – nichts anderes darin. |
| `data-cms-art="<art>"` | Wie der Wert dargestellt wird (Standard: `text`). |

### Id-Format

- Einzelfeld (Tabelle `content_blocks`): der Schlüssel, z. B. `hero_title_1`.
- Feld eines Sammlungs-Eintrags (`collection_items`): `@<sammlung>/<slug>/<feld>`,
  z. B. `@publikationen/verlorenes-lachen/title`. Der Fließtext (Markdown-`body`)
  heißt `@<sammlung>/<slug>/body`.
- Feld eines Blog-Beitrags (`blog_posts`): `@blog/<slug>/<feld>` mit `title`,
  `excerpt`, `category`, `badge`, `published_at` (Art `feld`), `content`
  (Artikeltext, Art `feld` – bearbeitet wird er im Blog-Editor),
  `seo_title`, `seo_description`.

### Arten

| Art | Wann | Verhalten im Hub |
|---|---|---|
| `text` | Wert wird als **escapter Text** ausgegeben (`{txt(...)}`, `{text(...)}`) und das Element enthält sonst nichts. | Direkt im Text tippen. |
| `html` | Wert wird als **HTML** ausgegeben (`<Rich>`, `set:html`, `dangerouslySetInnerHTML`). | Direkt tippen, Fett/Kursiv mit ⌘B/⌘I. |
| `bild` | Element ist ein `<img>`, dessen `src` der Wert ist. | Klick öffnet Bildauswahl. |
| `feld` | Wert wird **umgewandelt** angezeigt (Datum formatiert, Sterne aus Zahl, Link aus Telefonnummer, Liste aufgeteilt …) oder ist nur Teil des Elementinhalts. | Klick öffnet das Feld in der Seitenleiste, nach dem Speichern lädt die Vorschau neu. |
| `markdown` | Element enthält den gerenderten Markdown-`body`. | Wie `feld`, mit Markdown-Eingabe. |

## Regeln

1. **Das Element enthält ausschließlich den Wert** (bei `text`/`html`). Steht in
   einer Überschrift Wert A + Leerzeichen + Wert B, bekommt jeder Wert ein
   eigenes `<span data-cms=…>`; Leerzeichen/`{' '}` bleiben außerhalb.
2. Nur ein neues `<span>` hinzufügen, wenn es kein passendes eigenes Element
   gibt. Keine Klassen/Styles am Span, damit sich die Darstellung nicht ändert.
3. Attribute (`alt`, `href`, `aria-label`, Meta-Tags, JSON-LD) werden **nicht**
   markiert – sie tauchen im Hub automatisch unter „Nicht sichtbar“ auf.
4. Wird ein Wert mehrfach angezeigt (Desktop + Mobil, Ticker-Duplikat), jedes
   Vorkommen markieren.
5. Das sichtbare Ergebnis für Besucher bleibt **identisch** (Text, Reihenfolge,
   Abstände). Ausschließlich Attribute bzw. unformatierte Spans kommen dazu.
6. Fällt ein Wert auf einen Standardtext aus dem Code zurück (Feld fehlt im CMS),
   trotzdem markieren – der Hub zeigt dann an, dass das Feld nicht existiert.
