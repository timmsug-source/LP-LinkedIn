-- Run this in Supabase SQL Editor to seed initial content for the LP LinkedIn site
-- site_id: 09409653-2c1a-40ad-952a-65509c07a252

INSERT INTO public.pages (site_id, slug, title, content, meta_title, meta_description) VALUES

('09409653-2c1a-40ad-952a-65509c07a252', 'hero', 'Mehr Kunden. Durch Sichtbarkeit, die wirklich wirkt.', '{
  "eyebrow": "SEO · Webdesign · Freelancer",
  "subtitle": "Ich baue Websites, die gefunden werden – und die Besucher in Kunden verwandeln. Kein Agentur-Overhead. Direkte Kommunikation. Messbarer Erfolg.",
  "cta_primary": "Kostenloses Erstgespräch",
  "cta_secondary": "Wie ich arbeite ↓",
  "stats": [
    { "value": "5+", "label": "Jahre SEO" },
    { "value": "3+", "label": "Jahre Webdesign" },
    { "value": "100%", "label": "Remote & flexibel" }
  ]
}', 'Timm Schurig – SEO & Webdesign Freelancer', 'Ich baue Websites, die bei Google gefunden werden und Besucher in Kunden verwandeln. SEO & Webdesign aus einer Hand.'),

('09409653-2c1a-40ad-952a-65509c07a252', 'problem', 'Warum die meisten Websites unsichtbar bleiben', '{
  "intro": "Eine schöne Website allein reicht nicht. Ohne Strategie verschwindet sie auf Seite 3 von Google – und deine Konkurrenz gewinnt die Kunden, die eigentlich deine sein sollten.",
  "cards": [
    { "num": "01", "icon": "🔍", "title": "Keine Sichtbarkeit bei Google", "text": "Deine Website existiert, aber niemand findet sie. Ohne SEO verlierst du täglich potenzielle Kunden an besser platzierte Wettbewerber." },
    { "num": "02", "icon": "📉", "title": "Website überzeugt nicht", "text": "Besucher kommen – und gehen wieder. Schlechtes Design, langsame Ladezeiten und kein klarer Call-to-Action kosten dich Aufträge." },
    { "num": "03", "icon": "🏢", "title": "Agenturen: teuer & träge", "text": "Große Agenturen geben dein Projekt an Junior-Mitarbeiter weiter, liefern spät und kommunizieren schlecht. Du zahlst für Overhead, nicht für Ergebnisse." },
    { "num": "04", "icon": "📊", "title": "Kein messbarer ROI", "text": "Du investierst in Maßnahmen, weißt aber nie ob sie wirken. Ohne Tracking und klare KPIs verbrennst du Budget ohne Plan." }
  ]
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'solution', 'Website + SEO als ein gemeinsames System', '{
  "intro": "Ich kombiniere technisch sauberes Webdesign mit durchdachter SEO-Strategie – damit deine Website nicht nur schön aussieht, sondern auch gefunden wird und konvertiert.",
  "steps": [
    { "n": "01", "title": "Analyse & Strategie", "text": "Ich analysiere deine Situation, Konkurrenz und Zielkunden und entwickle einen konkreten Aktionsplan." },
    { "n": "02", "title": "Website-Entwicklung", "text": "Performance-optimierte, mobilfreundliche Website – designed für Vertrauen und Conversions." },
    { "n": "03", "title": "On-Page SEO", "text": "Technisches SEO, Keyword-Optimierung und Content-Struktur für nachhaltige Top-Rankings." },
    { "n": "04", "title": "Tracking & Reporting", "text": "Du siehst jederzeit, was dein Investment bringt – transparent und verständlich." }
  ],
  "bars": [
    { "label": "Google Sichtbarkeit", "w": 87, "pct": "87%" },
    { "label": "Page Speed Score", "w": 94, "pct": "94" },
    { "label": "Conversion Rate", "w": 72, "pct": "+72%" },
    { "label": "Core Web Vitals", "w": 91, "pct": "91" }
  ]
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'vorteile', 'Was dich bei mir erwartet', '{
  "intro": "Freelancer sein bedeutet für mich: volle Verantwortung, direkte Kommunikation und echtes Engagement – kein Weiterdelegieren, kein Bullshit.",
  "cards": [
    { "icon": "⚡", "title": "Alles aus einer Hand", "text": "Design, Entwicklung und SEO kommen von derselben Person. Das spart Zeit, Abstimmungsaufwand und Reibungsverluste." },
    { "icon": "🚀", "title": "Schnelle Umsetzung", "text": "Keine Warteschlange, kein Projektmanager-Ping-Pong. Ich liefere schnell und halte meine Deadlines ein." },
    { "icon": "💬", "title": "Direkter Draht", "text": "Du sprichst immer mit mir – dem Menschen, der auch wirklich daran arbeitet." },
    { "icon": "🎯", "title": "Fokus auf Ergebnisse", "text": "Mir ist nicht wichtig, wie viele Stunden ich abrechne. Mir ist wichtig, dass deine Website dir Kunden bringt." },
    { "icon": "🔎", "title": "5 Jahre SEO-Erfahrung", "text": "Ich weiß, was Google wirklich will. Keine Tricks, keine Black-Hat-Methoden, kein Risiko." },
    { "icon": "💰", "title": "Faire Preise", "text": "Kein Agentur-Aufschlag. Du bekommst Profi-Qualität zum Freelancer-Preis." }
  ]
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'rezension', 'Kundenstimme', '{
  "text": "Timm ist individuell auf mich eingegangen und hat mir mit meiner Homepage super geholfen. Danke dir und kann ich nur weiterempfehlen.",
  "author": "Markus",
  "role": "Verified Client",
  "stars": 5
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'about', 'Hallo, ich bin Timm.', '{
  "bio": [
    "Ich bin 23 Jahre alt, komme aus Langenfeld und arbeite als freier SEO- und Webdesign-Spezialist. Was mich antreibt: das Gefühl, wenn eine Website, an der ich gearbeitet habe, plötzlich auf Seite 1 landet – und mein Kunde deswegen morgens Anfragen im Postfach hat.",
    "Ich beschäftige mich seit 5 Jahren mit SEO und seit 3 Jahren mit Webdesign – nicht als Hobby, sondern als Handwerk, das ich täglich verfeinere. Mir ist wichtig, die Zusammenhänge wirklich zu verstehen, nicht nur Checklisten abzuarbeiten.",
    "Auf LinkedIn teile ich regelmäßig, was ich lerne und was in meinen Projekten funktioniert."
  ],
  "linkedin_url": "https://linkedin.com",
  "skills": ["On-Page SEO", "Technical SEO", "Keyword Research", "Webdesign", "WordPress", "Core Web Vitals", "Google Analytics", "Search Console"]
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'kontakt', 'Lass uns reden.', '{
  "intro": "Du hast ein Projekt, eine Idee oder einfach eine Frage? Schreib mir – ich melde mich in der Regel innerhalb von 24 Stunden. Das Erstgespräch ist kostenlos und unverbindlich.",
  "details": [
    { "icon": "📍", "label": "Standort", "value": "Langenfeld, NRW" },
    { "icon": "⏱️", "label": "Antwortzeit", "value": "Innerhalb von 24h" },
    { "icon": "🌍", "label": "Arbeitsweise", "value": "100% Remote & flexibel" }
  ]
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'nav', 'Timm Schurig', '{
  "logo": "Timm Schurig",
  "links": [
    { "label": "Problem", "href": "#problem" },
    { "label": "Lösung", "href": "#solution" },
    { "label": "Warum ich", "href": "#vorteile" },
    { "label": "Über mich", "href": "#ueber" }
  ],
  "cta": "Erstgespräch anfragen →",
  "cta_href": "#kontakt"
}', null, null),

('09409653-2c1a-40ad-952a-65509c07a252', 'footer', 'Footer', '{
  "copyright": "© 2026 Timm Schurig · SEO & Webdesign Freelancer · Langenfeld",
  "links": [
    { "label": "Impressum", "href": "/impressum" },
    { "label": "Datenschutz", "href": "/datenschutz" },
    { "label": "LinkedIn", "href": "https://linkedin.com", "external": true }
  ]
}', null, null);
