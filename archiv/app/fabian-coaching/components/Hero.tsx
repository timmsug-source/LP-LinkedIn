'use client'

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Play, ShieldAlert } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const bulletPoints = [
    {
      title: "Biochemische Präzision",
      text: "Verstehe durch Laboranalysen exakt, welche Ernährung und welches Training für deinen individuellen Genotyp funktionieren."
    },
    {
      title: "Maximale Energie auf Knopfdruck",
      text: "Befreie dich vom Heißhunger und Nachmittagstief – erlebe klaren Fokus, felsenfesten Antrieb und exzellente Belastbarkeit."
    },
    {
      title: "Optimale Hormonsteuerung",
      text: "Verliere hartnäckiges Fett an Bauch & Hüfte – komplett ohne Diätverzicht, durch gezielte Balance von Insulin, Cortisol und Testosteron."
    },
    {
      title: "Stoffwechsel-Revival statt Bremse",
      text: "Erfahre wissenschaftlich präzise, wie dein stressiger Berufsalltag deine Schilddrüsenfunktion bisher blockiert hat."
    }
  ];

  return (
    <section
      id="start"
      className="relative pt-32 sm:pt-40 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020617, #0b0f19, #162235)' }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(193,168,123,0.05)', filter: 'blur(120px)' }} />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(14,165,233,0.05)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
            style={{ background: 'rgba(193,168,123,0.1)', borderColor: 'rgba(193,168,123,0.2)' }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#c1a87b' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#c1a87b' }}></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold font-mono uppercase tracking-wider" style={{ color: '#c1a87b' }}>
              NEU: Die Geheimwaffe für selbstständige Männer & Führungskräfte
            </span>
          </motion.div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight font-sans"
          >
            Wie du mit der{" "}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(to right, #c1a87b, #ffffff, #aa9163)'
            }}>
              F.U.E.L. - Methode
            </span>{" "}
            innerhalb von 16 Wochen nachhaltig{" "}
            <span style={{ color: '#c1a87b' }}>15-20 kg Körperfett</span> verlierst
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-8 border-l-2 border-emerald-500/50 pl-4 sm:pl-6 text-left sm:text-center inline-block"
          >
            Trotz Deadlines, Geschäftsreisen und Familienleben – ohne dein Leben völlig umzukrempeln. Indem du deinen Fettstoffwechsel durch die präzise Anwendung von{" "}
            <span className="text-white font-bold px-1 border border-emerald-500/20 rounded" style={{ background: 'rgba(6,78,59,0.4)', color: '#6ee7b7' }}>
              Blut- und DNA-Tests
            </span>{" "}
            auf Sportmodus stellst.
          </motion.p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Video Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 relative aspect-video rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/40 shadow-2xl group"
          >
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
                  alt="Fabian Schönle F.U.E.L. Coaching"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                  style={{ filter: 'brightness(0.6)' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(to top, #020617, rgba(14,22,36,0.55), transparent)'
                }} />

                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 flex items-center justify-center text-slate-950 rounded-full cursor-pointer shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300 mb-5"
                    style={{ background: '#c1a87b' }}
                    aria-label="Video abspielen"
                  >
                    <Play size={22} className="fill-slate-950 translate-x-0.5" />
                  </button>
                  <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase font-sans select-none" style={{ color: '#c1a87b' }}>
                    ZELLULÄREN FETTSTOFFWECHSEL ZÜNDEN
                  </p>
                  <p className="text-slate-400 text-xs mt-1.5 font-sans tracking-wide select-none">
                    Video abspielen (4:12 min Explainer)
                  </p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="FUEL Methode Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded transition-colors"
                >
                  Video Schließen
                </button>
              </div>
            )}
          </motion.div>

          {/* Bullet Points & CTA */}
          <div className="lg:col-span-6 space-y-8 pl-0 lg:pl-4">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-slate-300 tracking-tight leading-snug font-sans mb-4">
                Warum die F.U.E.L. Strategie deine Blockaden bricht:
              </h2>
            </div>

            <div className="space-y-6">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="w-5 h-5 rounded-full border border-slate-700/80 flex items-center justify-center shrink-0 mt-1 select-none">
                    <Check size={11} className="text-slate-400 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight font-sans leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed font-normal">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg flex items-center justify-center gap-1.5 hover:scale-[1.01] cursor-pointer whitespace-nowrap"
                  style={{ background: '#c1a87b' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#aa9163')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#c1a87b')}
                >
                  Kostenfreies Erstgespräch sichern
                </button>

                <a
                  href="#symptome"
                  className="px-4 py-2 border border-slate-800 hover:border-[#c1a87b]/30 bg-[#0e1624]/60 hover:bg-[#162235] text-slate-300 hover:text-white font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 group text-center whitespace-nowrap"
                >
                  <span>Symptome abgleichen</span>
                  <span className="transform group-hover:translate-x-1 transition-transform text-slate-400 font-normal">→</span>
                </a>
              </div>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-4 flex items-center gap-1.5 font-medium ml-1">
                <ShieldAlert size={12} className="text-slate-600 shrink-0" />
                <span>Absolut unverbindlich • Die Analyse dauert ca. 15 Minuten</span>
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
