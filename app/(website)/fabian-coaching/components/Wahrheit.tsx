'use client'

import { motion } from "motion/react";
import { Check, X, Flame, Zap, Award } from "lucide-react";

interface WahrheitProps {
  onOpenConsultation: () => void;
}

export default function Wahrheit({ onOpenConsultation }: WahrheitProps) {
  const truths = [
    {
      myth: "Du brauchst eiserne Disziplin, Willenskraft & musst hungern.",
      truth: "Du brauchst korrekte biologische Systeme.",
      desc: "Wenn deine Hormone, Schilddrüsenwerte und Mineralstoffe ideal balanciert sind, hat dein Körper von Natur aus erstklassigen Antrieb, Fett zu verbrennen. Heißhunger verschwindet biochemisch komplett.",
      Icon: Flame,
      accentColor: 'rgba(239,68,68,0.15)',
      hoverBorder: 'rgba(239,68,68,0.35)',
    },
    {
      myth: "Du musst täglich stundenlang Cardio- & Ausdauertraining machen.",
      truth: "Hocheffiziente, progressive Kontraktionen reichen.",
      desc: "3-mal pro Woche 45 Minuten intelligentes Krafttraining im optimalen Stoffwechselpuls reichen völlig aus, um Muskeln zu festigen und das Fettgewebe gezielt als primäre Energiequelle anzuzapfen.",
      Icon: Zap,
      accentColor: 'rgba(245,158,11,0.15)',
      hoverBorder: 'rgba(245,158,11,0.35)',
    },
    {
      myth: "Du musst auf Wein, Restaurant-Besuche und Genuss verzichten.",
      truth: "Dein Stoffwechsel lernt, Sünden sofort zu verbrennen.",
      desc: "Wir verbieten dir weder das Geschäftsessen mit Partnern noch das edle Dinner mit deiner Familie. F.U.E.L. macht deinen Motor so effizient, dass gelegentliche Genussmomente spurlos verstoffwechselt werden.",
      Icon: Award,
      accentColor: 'rgba(16,185,129,0.15)',
      hoverBorder: 'rgba(16,185,129,0.35)',
    }
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden" style={{ background: '#0e1624' }}>
      <div className="absolute top-0 inset-x-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(2,6,23,0.2), transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(193,168,123,0.05)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-bold font-mono tracking-widest uppercase rounded border mb-4"
            style={{ background: 'rgba(193,168,123,0.1)', color: '#c1a87b', borderColor: 'rgba(193,168,123,0.2)' }}>
            Die F.U.E.L. Philosophie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            Die Wahrheit ist: Du musst dich nicht quälen
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Verabschiede dich von veralteten Mythen. Nachhaltiges Abnehmen ist das logische Resultat eines optimierten biochemischen Milieus.
          </p>
        </div>

        {/* Truth Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {truths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              style={{
                background: '#0f172a',
                border: `1px solid ${item.accentColor}`,
                boxShadow: `0 0 0 1px ${item.accentColor}`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = item.hoverBorder; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = item.accentColor; }}
            >
              <div>
                {/* Myth */}
                <div className="flex items-start gap-3 mb-5 pb-5 border-b border-slate-800/60">
                  <div className="p-1.5 bg-rose-500/10 text-rose-400 rounded-lg shrink-0 mt-0.5">
                    <X size={16} className="stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-rose-400 uppercase font-bold block mb-1">
                      Irrglaube / Mythos:
                    </span>
                    <p className="text-slate-400 text-sm font-medium line-through">{item.myth}</p>
                  </div>
                </div>

                {/* Truth */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Check size={16} className="stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold block mb-1">
                      Die F.U.E.L. Wahrheit:
                    </span>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2 leading-snug font-sans tracking-tight">
                      {item.truth}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <item.Icon size={16} style={{ color: 'rgba(193,168,123,0.3)' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl"
          style={{ background: 'linear-gradient(to bottom, #0f172a, #020617)' }}>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Bereit, deinen biologischen Fettstoffwechsel zu entschlüsseln?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            In deiner kostenfreien Analyse zeigt dir Fabian Schönle Schritt für Schritt, wie die F.U.E.L. Methode auf Basis deiner individuellen Voraussetzungen in deinen Alltag integriert wird.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-slate-950 font-bold uppercase text-xs sm:text-sm tracking-wider rounded-xl transition-all hover:scale-[1.01] shadow-lg cursor-pointer"
              style={{ background: '#c1a87b' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#aa9163')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c1a87b')}
            >
              Jetzt Erstgespräch buchen →
            </button>
            <span className="text-slate-500 text-xs sm:text-sm font-semibold">
              Nur 5 Plätze pro Monat verfügbar
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
