'use client'

import { AlertCircle, HeartPulse } from 'lucide-react';

export default function Insight() {
  return (
    <section id="profile" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/3 h-96 bg-gradient-to-r from-orange-600/10 to-transparent blur-3xl rounded-full" />
      <div className="absolute top-1/2 right-0 w-1/4 h-96 bg-gradient-to-l from-[#FF5A1F]/10 to-transparent blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-[0.2em] font-bold">
              Wissenschaftlicher Hintergrund
            </span>
            <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              ES GEHT NICHT UM OPTIK.{' '}
              <br />
              <span className="text-[#FF5A1F]">ES GEHT UM DEIN LEBEN.</span>
            </h2>
            <div className="h-[2px] w-24 bg-orange-600 rounded mx-auto" />
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans text-center max-w-3xl mx-auto">
            Du hast schon so vieles versucht. Kalorienzählen, Intervallfasten, Shakes. Und trotzdem stehst du vor dem Spiegel und fragst dich, warum die Ergebnisse ausbleiben.
            <br /><br />
            Die brutale Wahrheit: <strong>Bauchfett (viszerales Fett) ist kein kosmetischer Makel.</strong> Es ist hochgradig stoffwechselaktives Gewebe, das wie ein eigenständiges Organ wirkt. Es produziert permanent Entzündungsstoffe, blockiert die Fettverbrennung, drosselt deinen Testosteronspiegel und erhöht drastisch dein Risiko für Typ-2-Diabetes, Herzinfarkte und chronische Müdigkeit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex gap-4 items-start p-5 rounded-xl bg-stone-900/50 border border-stone-800">
              <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-white text-sm uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Hormon-Falle</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Viszerales Fett wandelt Testosteron aktiv in Östrogen um. Du verlierst Antrieb und Spannkraft.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 rounded-xl bg-stone-900/50 border border-stone-800">
              <HeartPulse className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-black text-white text-sm uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Entzündungsherd</h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">Es schüttet Zytokine aus, die deine Blutgefäße schädigen und deine Arterien verstopfen.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0a09] border border-stone-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start max-w-3xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1506150786131-b2bc87254390?auto=format&fit=crop&q=80&w=400"
              alt="Coach Eddy Portrait"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-orange-500/40 object-top shadow-md flex-shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-2 text-center sm:text-left">
              <p className="italic text-stone-300 text-sm leading-relaxed">
                "Das Gute: Genau dieses Fett reagiert am schnellsten auf die richtigen Impulse – wenn du aufhörst, falsche Standarddiäten zu befolgen, und wir gezielt an deinem Hormonsystem ansetzen."
              </p>
              <h5 className="font-mono text-xs uppercase tracking-wider text-[#FF5A1F] font-bold">
                — Coach Eddy, Gesundheitsexperte
              </h5>
            </div>
          </div>
        </div>

        <div className="mt-28 pt-8 border-t border-stone-900 text-center space-y-6">
          <p className="text-stone-500 font-mono text-[10px] uppercase tracking-[0.25em]">
            BEKANNT AUS & PARTNER VON
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-30 select-none">
            <span className="font-black text-white text-xl uppercase tracking-tighter" style={{ fontFamily: "'Outfit', sans-serif" }}>Men's Health</span>
            <span className="font-bold text-white text-xl" style={{ fontFamily: 'Georgia, serif' }}>Weltbild</span>
            <span className="font-semibold tracking-wide text-white text-lg">Hugendubel</span>
            <span className="font-black text-white text-2xl tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>BASF</span>
            <span className="font-black text-white text-lg tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>YouTube</span>
          </div>
        </div>
      </div>
    </section>
  );
}
