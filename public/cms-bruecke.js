/**
 * Brücke zum visuellen Editor im Website-Hub.
 *
 * Wird nur geladen, wenn die Website im Rahmen des Hubs läuft (siehe Lader im
 * Layout und CMS-VISUELL.md). Macht alle Elemente mit `data-cms` anklickbar und
 * direkt bearbeitbar und meldet Änderungen per postMessage an das Hub. Das
 * Speichern übernimmt ausschließlich das Hub – mit dem Login des Nutzers. Diese
 * Datei kennt keine Zugangsdaten und schreibt nirgendwohin.
 *
 * Identisch in allen angebundenen Websites. Änderungen hier bitte überall
 * übernehmen.
 */
(function () {
  'use strict';

  if (window.self === window.top || window.__cmsBruecke) return;
  window.__cmsBruecke = true;

  /* ── Wer darf sprechen? ─────────────────────────────────────────────── */

  var ERLAUBT = [
    /^http:\/\/localhost:3400$/,
    /^https:\/\/([a-z0-9-]+\.)*timmschurig\.app$/
  ];

  function erlaubterUrsprung(u) {
    return typeof u === 'string' && ERLAUBT.some(function (m) { return m.test(u); });
  }

  var hub = null;
  try {
    var ausAdresse = new URLSearchParams(location.search).get('cms-vorschau');
    if (erlaubterUrsprung(ausAdresse)) sessionStorage.setItem('cms-vorschau', ausAdresse);
    hub = sessionStorage.getItem('cms-vorschau');
  } catch (e) { /* Speicher blockiert */ }
  if (!erlaubterUrsprung(hub)) return;

  function senden(typ, daten) {
    var nachricht = Object.assign({ quelle: 'cms-bruecke', typ: typ }, daten || {});
    window.parent.postMessage(nachricht, hub);
  }

  /* ── Zustand ────────────────────────────────────────────────────────── */

  var bearbeiten = true;
  var felder = {};          // id → { label, vorhanden }
  var ausgewaehlt = null;   // Element
  var aktiv = null;         // Element, das gerade bearbeitet wird
  var original = '';        // Wert vor dem Bearbeiten (für Esc)
  var ueber = null;         // Element unter der Maus
  var eingehaengt = false;  // Ebene erst nach der Hydration einhängen

  var ART_STANDARD = 'text';
  function idVon(el) { return el.getAttribute('data-cms'); }
  function artVon(el) { return el.getAttribute('data-cms-art') || ART_STANDARD; }
  function alleMit(id) {
    return Array.prototype.filter.call(document.querySelectorAll('[data-cms]'), function (el) { return idVon(el) === id; });
  }
  function markiert(ziel) {
    return ziel && ziel.closest ? ziel.closest('[data-cms]') : null;
  }

  /* ── HTML wie die Websites es zulassen ──────────────────────────────── */

  var ERLAUBTE_TAGS = { STRONG: 1, B: 1, EM: 1, I: 1, U: 1, S: 1, BR: 1, A: 1 };

  function bereinigen(html) {
    var box = document.createElement('div');
    box.innerHTML = html || '';
    (function gehe(knoten) {
      Array.prototype.slice.call(knoten.childNodes).forEach(function (kind) {
        if (kind.nodeType === 8) { kind.remove(); return; }
        if (kind.nodeType !== 1) return;
        if (/^(SCRIPT|STYLE|TEMPLATE|IFRAME|OBJECT|EMBED|NOSCRIPT)$/.test(kind.tagName)) { kind.remove(); return; }
        gehe(kind);
        if (kind.tagName === 'DIV' || kind.tagName === 'P') {
          // Zeilen aus dem Editor als Zeilenumbruch übernehmen
          var frag = document.createDocumentFragment();
          if (kind.previousSibling) frag.appendChild(document.createElement('br'));
          while (kind.firstChild) frag.appendChild(kind.firstChild);
          kind.replaceWith(frag);
          return;
        }
        if (!ERLAUBTE_TAGS[kind.tagName]) { kind.replaceWith.apply(kind, Array.prototype.slice.call(kind.childNodes)); return; }
        Array.prototype.slice.call(kind.attributes).forEach(function (a) {
          var bleibt = kind.tagName === 'A' && a.name === 'href' && /^(https?:|mailto:|tel:|\/|#)/i.test(a.value);
          if (!bleibt) kind.removeAttribute(a.name);
        });
      });
    })(box);
    return box.innerHTML.replace(/(<br>\s*)+$/i, '').trim();
  }

  function alsText(wert) {
    var box = document.createElement('div');
    box.innerHTML = String(wert || '').replace(/<br\s*\/?>/gi, ' ');
    return (box.textContent || '').trim();
  }

  function aktuellerWert(el) {
    var art = artVon(el);
    if (art === 'html') return bereinigen(el.innerHTML);
    if (art === 'bild') return el.getAttribute('src') || '';
    // textContent statt innerText: innerText liefert den Text so, wie CSS ihn zeigt
    // (z. B. text-transform: uppercase) – gespeichert werden muss der echte Wert.
    return (el.textContent || '').replace(/\u00a0/g, ' ');
  }

  function anzeigen(el, wert) {
    var art = artVon(el);
    if (art === 'text') el.textContent = alsText(wert);
    else if (art === 'html') el.innerHTML = bereinigen(wert);
    else if (art === 'bild') {
      el.setAttribute('src', wert);
      el.removeAttribute('srcset');
      if (el.parentElement && el.parentElement.tagName === 'PICTURE') {
        Array.prototype.forEach.call(el.parentElement.querySelectorAll('source'), function (s) { s.remove(); });
      }
    }
  }

  /* ── Ebene mit Rahmen und Beschriftung ──────────────────────────────── */

  var ebene = document.createElement('div');
  ebene.setAttribute('data-cms-ebene', '');
  ebene.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483646;';
  var schatten = ebene.attachShadow({ mode: 'open' });
  schatten.innerHTML =
    '<style>' +
    '.r{position:fixed;border-radius:6px;transition:opacity .12s;opacity:0;box-sizing:border-box}' +
    '.h{outline:1.5px dashed rgba(46,214,155,.9);outline-offset:3px;background:rgba(46,214,155,.06)}' +
    '.h.fehlt{outline-color:rgba(245,181,68,.95);background:rgba(245,181,68,.07)}' +
    '.a{outline:2px solid #00bc7d;outline-offset:3px;box-shadow:0 0 0 6px rgba(0,188,125,.18)}' +
    '.c{position:fixed;opacity:0;transform:translateY(-100%);margin-top:-8px;font:600 11px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
    'letter-spacing:.01em;padding:5px 8px;border-radius:6px;background:#04121f;color:#5ce8b4;border:1px solid rgba(0,188,125,.45);' +
    'white-space:nowrap;max-width:320px;overflow:hidden;text-overflow:ellipsis;box-shadow:0 6px 18px -6px rgba(0,0,0,.6)}' +
    '.c.fehlt{color:#f5b544;border-color:rgba(245,181,68,.5)}' +
    '.t{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);opacity:0;transition:opacity .2s;font:500 13px/1.3 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
    'padding:9px 14px;border-radius:10px;background:#04121f;color:#e6edf5;border:1px solid rgba(255,255,255,.14)}' +
    '</style>' +
    '<div class="r h"></div><div class="r a"></div><div class="c"></div><div class="t"></div>';
  var rahmenHover = schatten.querySelector('.h');
  var rahmenAuswahl = schatten.querySelector('.a');
  var chip = schatten.querySelector('.c');
  var toast = schatten.querySelector('.t');

  function beschriftung(el) {
    var id = idVon(el);
    var f = felder[id];
    return f ? f.label : id + ' · fehlt im CMS';
  }

  function positionieren(rahmen, el) {
    if (!el || !el.isConnected) { rahmen.style.opacity = '0'; return null; }
    var r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) { rahmen.style.opacity = '0'; return null; }
    rahmen.style.left = r.left + 'px';
    rahmen.style.top = r.top + 'px';
    rahmen.style.width = r.width + 'px';
    rahmen.style.height = r.height + 'px';
    rahmen.style.opacity = '1';
    return r;
  }

  function zeichnen() {
    // React/Astro können beim Hydrieren fremde Knoten entfernen – dann neu einhängen
    if (!eingehaengt) return;
    if (!ebene.isConnected && document.body) document.body.appendChild(ebene);
    var zeigeHover = bearbeiten && ueber && ueber !== ausgewaehlt;
    positionieren(rahmenHover, zeigeHover ? ueber : null);
    if (zeigeHover) rahmenHover.classList.toggle('fehlt', !felder[idVon(ueber)]);
    positionieren(rahmenAuswahl, bearbeiten ? ausgewaehlt : null);

    var chipZiel = zeigeHover ? ueber : (bearbeiten ? ausgewaehlt : null);
    var r = chipZiel && chipZiel.isConnected ? chipZiel.getBoundingClientRect() : null;
    if (r && (r.width || r.height)) {
      chip.textContent = beschriftung(chipZiel);
      chip.classList.toggle('fehlt', !felder[idVon(chipZiel)]);
      chip.style.left = Math.max(6, r.left) + 'px';
      chip.style.top = Math.max(r.top, 30) + 'px';
      chip.style.opacity = '1';
    } else {
      chip.style.opacity = '0';
    }
  }

  var geplant = false;
  function neuZeichnen() {
    if (geplant) return;
    geplant = true;
    requestAnimationFrame(function () { geplant = false; zeichnen(); });
  }

  var toastTimer = null;
  function hinweis(text) {
    toast.textContent = text;
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.style.opacity = '0'; }, 2600);
  }

  /* ── Bestandsaufnahme ───────────────────────────────────────────────── */

  function sichtbar(el) {
    if (!el.getClientRects().length) return false;
    var s = getComputedStyle(el);
    return s.visibility !== 'hidden' && s.opacity !== '0';
  }

  var letztesInventar = '';
  function inventarSenden(erzwingen) {
    var liste = {};
    Array.prototype.forEach.call(document.querySelectorAll('[data-cms]'), function (el) {
      var id = idVon(el);
      var e = liste[id] || (liste[id] = { id: id, art: artVon(el), sichtbar: false, anzahl: 0, wert: aktuellerWert(el) });
      e.anzahl++;
      if (!e.sichtbar && sichtbar(el)) e.sichtbar = true;
    });
    var werte = Object.keys(liste).map(function (k) { return liste[k]; });
    var kennung = JSON.stringify(werte.map(function (w) { return [w.id, w.sichtbar, w.anzahl]; }));
    if (!erzwingen && kennung === letztesInventar) return;
    letztesInventar = kennung;
    senden('inventar', { pfad: location.pathname, felder: werte });
  }

  var inventarTimer = null;
  new MutationObserver(function () {
    clearTimeout(inventarTimer);
    inventarTimer = setTimeout(function () { inventarSenden(false); }, 350);
    neuZeichnen();
  }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style', 'hidden', 'open', 'data-cms'] });

  /* ── Bearbeiten ─────────────────────────────────────────────────────── */

  function auswaehlen(el, mitCursor) {
    if (ausgewaehlt === el) return;
    beenden(false);
    ausgewaehlt = el;
    ueber = null;
    var art = artVon(el);
    senden('auswahl', { id: idVon(el), art: art, wert: aktuellerWert(el), vorhanden: !!felder[idVon(el)] });
    if ((art === 'text' || art === 'html') && felder[idVon(el)]) starten(el, mitCursor);
    neuZeichnen();
  }

  function starten(el, punkt) {
    aktiv = el;
    original = aktuellerWert(el);
    var art = artVon(el);
    var nurText = art === 'text';
    try { el.contentEditable = nurText ? 'plaintext-only' : 'true'; } catch (e) { el.contentEditable = 'true'; }
    if (nurText && el.contentEditable !== 'plaintext-only') el.contentEditable = 'true';
    el.setAttribute('data-cms-aktiv', '');
    el.style.outline = 'none';
    el.style.caretColor = '#00bc7d';
    el.spellcheck = true;
    el.focus({ preventScroll: true });

    var sel = window.getSelection();
    var bereich = null;
    if (punkt && document.caretRangeFromPoint) bereich = document.caretRangeFromPoint(punkt.x, punkt.y);
    else if (punkt && document.caretPositionFromPoint) {
      var pos = document.caretPositionFromPoint(punkt.x, punkt.y);
      if (pos) { bereich = document.createRange(); bereich.setStart(pos.offsetNode, pos.offset); }
    }
    if (!bereich || !el.contains(bereich.startContainer)) {
      bereich = document.createRange();
      bereich.selectNodeContents(el);
      bereich.collapse(false);
    }
    sel.removeAllRanges();
    sel.addRange(bereich);
  }

  function beenden(abbrechen) {
    if (aktiv) {
      var el = aktiv;
      if (abbrechen) {
        alleMit(idVon(el)).forEach(function (x) { anzeigen(x, original); });
        senden('eingabe', { id: idVon(el), wert: original });
      }
      aktiv = null;
      el.removeAttribute('contenteditable');
      el.removeAttribute('data-cms-aktiv');
      el.style.outline = '';
      el.style.caretColor = '';
      senden('fertig', { id: idVon(el) });
    }
    ausgewaehlt = null;
    neuZeichnen();
  }

  function eingabe() {
    if (!aktiv) return;
    var id = idVon(aktiv);
    var wert = aktuellerWert(aktiv);
    alleMit(id).forEach(function (x) { if (x !== aktiv) anzeigen(x, wert); });
    senden('eingabe', { id: id, wert: wert });
    neuZeichnen();
  }

  document.addEventListener('input', function (e) {
    if (aktiv && aktiv.contains(e.target)) { e.stopPropagation(); eingabe(); }
  }, true);

  document.addEventListener('paste', function (e) {
    if (!aktiv || !aktiv.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    var text = (e.clipboardData && e.clipboardData.getData('text/plain')) || '';
    if (artVon(aktiv) === 'text') text = text.replace(/\s*\n\s*/g, ' ');
    document.execCommand('insertText', false, text);
  }, true);

  window.addEventListener('keydown', function (e) {
    if (!aktiv) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); beenden(true); return; }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (artVon(aktiv) === 'html' && e.shiftKey) { document.execCommand('insertLineBreak'); return; }
      aktiv.blur();
      beenden(false);
      return;
    }
    if (artVon(aktiv) === 'text' && (e.metaKey || e.ctrlKey) && /^[biu]$/i.test(e.key)) { e.preventDefault(); return; }
    e.stopPropagation();
  }, true);

  document.addEventListener('focusout', function (e) {
    if (aktiv && e.target === aktiv) setTimeout(function () { if (aktiv && document.activeElement !== aktiv) beenden(false); }, 0);
  }, true);

  /* ── Maus ───────────────────────────────────────────────────────────── */

  window.addEventListener('mousemove', function (e) {
    if (!bearbeiten) { if (ueber) { ueber = null; neuZeichnen(); } return; }
    var el = markiert(e.target);
    if (el !== ueber) { ueber = el; neuZeichnen(); }
  }, true);

  document.addEventListener('mouseleave', function () { ueber = null; neuZeichnen(); });

  function klickAbfangen(e) {
    if (!bearbeiten) return;
    var el = markiert(e.target);
    if (aktiv && el === aktiv) {
      // Im bearbeiteten Text: Cursor setzen erlauben, aber keine Links/Knöpfe auslösen
      if (e.type === 'click') { e.preventDefault(); }
      e.stopPropagation();
      return;
    }
    if (el) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === 'click') auswaehlen(el, { x: e.clientX, y: e.clientY });
      return;
    }
    var link = e.target.closest && e.target.closest('a[href]');
    if (link && e.type === 'click') {
      e.preventDefault();
      e.stopPropagation();
      hinweis('Zum Folgen von Links oben auf „Navigieren“ umschalten.');
    }
    if (e.type === 'click' && aktiv) beenden(false);
  }
  window.addEventListener('mousedown', function (e) {
    if (!bearbeiten) return;
    var el = markiert(e.target);
    // Fokus-Diebstahl durch Knöpfe/Links verhindern, solange ein markiertes Element getroffen wird
    if (el && el !== aktiv) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  window.addEventListener('click', klickAbfangen, true);
  window.addEventListener('auxclick', function (e) { if (bearbeiten && markiert(e.target)) e.preventDefault(); }, true);

  // Formulare der Website nie aus der Vorschau absenden
  window.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    hinweis('Formulare sind in der Vorschau deaktiviert.');
  }, true);

  var scrollTimer = null;
  window.addEventListener('scroll', function () {
    neuZeichnen();
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () { senden('scroll', { y: Math.round(window.scrollY) }); }, 250);
  }, true);
  window.addEventListener('resize', function () { neuZeichnen(); inventarSenden(false); });

  /* ── Nachrichten vom Hub ────────────────────────────────────────────── */

  window.addEventListener('message', function (e) {
    if (e.origin !== hub || e.source !== window.parent) return;
    var n = e.data;
    if (!n || n.quelle !== 'hub') return;

    if (n.typ === 'start' || n.typ === 'felder') {
      felder = n.felder || {};
      if (typeof n.bearbeiten === 'boolean') bearbeiten = n.bearbeiten;
      if (n.typ === 'start') {
        inventarSenden(true);
        // Nach dem Neuladen an dieselbe Stelle springen
        if (typeof n.scrollY === 'number' && n.scrollY > 0) window.scrollTo(0, n.scrollY);
      }
      neuZeichnen();
    } else if (n.typ === 'modus') {
      bearbeiten = !!n.bearbeiten;
      if (!bearbeiten) { beenden(false); ueber = null; }
      document.documentElement.toggleAttribute('data-cms-bearbeiten', bearbeiten);
      neuZeichnen();
    } else if (n.typ === 'wert') {
      alleMit(n.id).forEach(function (el) {
        if (el === aktiv && aktuellerWert(el) === n.wert) return;
        anzeigen(el, n.wert);
      });
      neuZeichnen();
    } else if (n.typ === 'zeigen') {
      var ziele = alleMit(n.id);
      var ziel = ziele.filter(sichtbar)[0] || ziele[0];
      if (!ziel) return;
      ziel.scrollIntoView({ block: 'center', behavior: 'smooth' });
      if (bearbeiten) {
        beenden(false);
        ausgewaehlt = ziel;
        neuZeichnen();
        setTimeout(neuZeichnen, 450);
      }
    } else if (n.typ === 'abwaehlen') {
      beenden(false);
    }
  });

  /* ── Seitenwechsel erkennen (auch ohne Neuladen) ────────────────────── */

  var pfad = location.pathname;
  setInterval(function () {
    if (location.pathname === pfad) return;
    pfad = location.pathname;
    beenden(false);
    senden('navigiert', { pfad: pfad, titel: document.title });
    letztesInventar = '';
    setTimeout(function () { inventarSenden(true); }, 300);
  }, 400);

  function los() {
    eingehaengt = true;
    document.body.appendChild(ebene);
    document.documentElement.toggleAttribute('data-cms-bearbeiten', bearbeiten);
    senden('bereit', { pfad: location.pathname, titel: document.title });
  }
  // Erst nach dem Laden (und damit nach der Hydration der Website) einhängen,
  // sonst hält React die zusätzliche Ebene für einen Fehler im Markup.
  if (document.readyState === 'complete') setTimeout(los, 200);
  else window.addEventListener('load', function () { setTimeout(los, 200); });
})();
