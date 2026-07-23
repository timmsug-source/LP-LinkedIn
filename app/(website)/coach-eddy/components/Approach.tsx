'use client'

import { useState } from 'react';
import { ShieldAlert, Sparkles, AlertCircle, Quote, RefreshCw, ThumbsUp } from 'lucide-react';

export default function Approach() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const testQuestions = [
    {
      q: 'Ich habe keine Zeit für stundenlange Kochexzesse.',
      a: 'Perfekt. Meine E-Books und Rezepte dauern im Durchschnitt 15 Minuten. Wenn du lernecht effizient einkaufst, sparst du im Alltag sogar Zeit statt welche zu verlieren.',
    },
    {
      q: 'Ich mache viel EMS, nehme aber trotzdem nicht ab.',
      a: 'Externe Reize wie EMS bringen gar nichts, wenn dein Hormonhaushalt im Keller ist und du das falsche Fett anvisierst. Wir reparieren das Fundament.',
    },
    {
      q: 'Andere Pläne habe ich nie länger als 4 Wochen durchgehalten.',
      a: 'Weil sie dir Verzicht aufgebürdet haben! Mein Coaching zielt auf Verhaltenspsychologie ab. Wir etablieren Routinen, die sich anfühlen wie ein Upgrade deines Lifestyles, nicht wie ein Entzug.',
    },
  ];

  return (
    <section id="approach" className="py-24 bg-stone-950 border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-[0.2em] font-bold">Die Philosophie</span>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase mt-3 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            WAS MEIN COACHING ANDERS MACHT
          </h2>
          <div className="h-1 w-20 bg-[#FF5A1F] mx-auto mt-4 rounded-full" />
          <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            "Ich gehe nicht mit dir durch einen Standardplan. Ich gehe mit dir durch deine ganz persönliche Geschichte." — Coach Eddy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Standard */}
          <div className="bg-stone-900/40 p-8 rounded-3xl border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/20 text-red-400 border border-red-900/30 rounded-full font-mono text-[10px] uppercase font-bold mb-6">
                <ShieldAlert className="w-4 h-4" />
                <span>Standard-Trainer & Online-Pläne</span>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Boring Standard-Diäten', text: 'Zwingen dich zu extremen Kaloriendefiziten und permanentem Verzicht auf Kohlenhydrate oder soziale Events. Führt unweigerlich zum Jo-Jo-Effekt.' },
                  { title: 'Mangelnde Betreuung', text: 'Schicken dir einmalig ein Standard-PDF zu und fragen dich nach vier Wochen lustlos per E-mail: "Ist alles in Ordnung bei dir?". Keine echten Antworten.' },
                  { title: 'Zuckerschlecken-Feedback', text: 'Nicken all deine Entschuldigungen und Ausreden mitleidig ab. Du stagnierst wochenlang, weil dir niemand den Spiegel vorhält.' },
                ].map((item, i) => (
                  <div key={i} className={i < 2 ? 'border-b border-stone-800/40 pb-5' : 'pb-2'}>
                    <h4 className="text-stone-300 font-black text-sm uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</h4>
                    <p className="text-stone-500 text-xs sm:text-sm mt-1 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-stone-800/40 text-stone-600 font-mono text-xs uppercase">
              Ergebnis: Frust, Stagnation & neuer Höchststand auf der Waage
            </div>
          </div>

          {/* Eddy */}
          <div className="bg-gradient-to-br from-orange-600/10 to-stone-900 p-8 rounded-3xl border-2 border-[#FF5A1F]/30 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5A1F]/10 rounded-full blur-2xl" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5A1F]/15 text-[#FF5A1F] border border-[#FF5A1F]/30 rounded-full font-mono text-[10px] uppercase font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Coach Eddy Methode</span>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Hormon- & Vitalstoff-Boost', text: 'Keine Hungerkuren. Wir bauen eine Ernährungsbalance auf, die deine Lieblingsspeisen optimiert, deine Schilddrüse anheizt und hartnäckiges Fett effektiv attackiert.' },
                  { title: 'Verhaltens- und Gewohnheitspsychologie', text: 'Wir setzen an der Wurzel an: Warum tust du es nicht, obwohl du es weißt? Tägliches Health-Tracking und engmaschige Begleitung, bis es vollautomatisch Klick macht.' },
                  { title: 'Ehrliches, Provokantes Feedback', text: 'Ich sage dir ungefiltert, was du hören musst – nicht das, was dir schmeichelt. Nur schonungsloser Klartext rüttelt dich wach und initiiert die echte Veränderung.' },
                ].map((item, i) => (
                  <div key={i} className={i < 2 ? 'border-b border-[#FF5A1F]/10 pb-5' : 'pb-2'}>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</h4>
                    <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#FF5A1F]/15 text-[#FF5A1F] font-mono text-xs uppercase font-extrabold flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              <span>Ergebnis: -10 KG Fettverlust, Hormonbalance & neuer Lebensantrieb</span>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center bg-stone-900/60 rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-4 relative">
          <Quote className="w-12 h-12 text-[#FF5A1F]/20 absolute top-4 left-6" />
          <h3 className="font-black text-lg sm:text-xl text-white uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            "Mein Coaching ist provokant. Weil nette Worte noch nie Fett verbrannt haben."
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Ich kuschele nicht mit deinen Ausreden wie Stress im Büro, schlechtem Wetter oder Genetik. Wenn du dich für mich entscheidest, entscheidest du dich für Wahrheit. Und diese Wahrheit wird dich befreien.
          </p>
        </div>

        <div className="mt-20 max-w-2xl mx-auto space-y-4">
          <h3 className="font-black text-center text-sm uppercase text-[#FF5A1F] font-mono tracking-widest mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Zweifelst du noch? Antworte ehrlich:
          </h3>
          {testQuestions.map((item, index) => (
            <div
              key={index}
              className={`bg-stone-900 border ${
                activeQuestion === index ? 'border-orange-500/50 bg-stone-900/90' : 'border-stone-800 hover:border-stone-700'
              } rounded-2xl overflow-hidden transition-all duration-200`}
            >
              <button
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-xs sm:text-sm text-stone-200 uppercase tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="flex items-center gap-2.5">
                  <AlertCircle className="w-[18px] h-[18px] text-orange-500 flex-shrink-0" />
                  {item.q}
                </span>
                <span className="text-stone-500 text-lg font-mono">{activeQuestion === index ? '-' : '+'}</span>
              </button>
              {activeQuestion === index && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-400 leading-relaxed font-sans border-t border-stone-800/40 bg-stone-950/40 animate-slide-down">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#FF5A1F] mb-1.5 flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5" /> Eddy's Antwort:
                  </div>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
