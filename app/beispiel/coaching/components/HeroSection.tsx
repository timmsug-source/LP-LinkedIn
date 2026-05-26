'use client'
import { motion } from 'motion/react'
import { ShieldCheck, Flame, Trophy, BatteryCharging } from 'lucide-react'

interface HeroSectionProps {
  onStartAnalysis: () => void
}

export default function HeroSection({ onStartAnalysis }: HeroSectionProps) {
  return (
    <section className="relative sm:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 px-4">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center z-10">
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 self-start bg-gold-950/40 border border-gold-500/30 px-2.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider text-gold-500 uppercase"
          >
            <Flame className="w-4 h-4 text-gold-500 animate-pulse" />
            Für Unternehmer & Mediziner mit wenig Zeit
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[2.1rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Körperliche <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-300">Bestform</span> <br />
              trotz 50–60h Woche.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 font-sans text-sm sm:text-xl max-w-2xl font-light leading-relaxed"
            >
              Als vielbeschäftigter High-Performer 100% digital und zeiteffizient Fett abbauen, Muskeln stärken und das tägliche Energie-Niveau maximieren. Ohne striktes Vorkochen oder stundenlanges Ausdauertraining.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { label: 'Individuell', desc: '100% alltagsbasiert' },
              { label: 'Keine Verbote', desc: 'Geschäftsessen-geeignet' },
              { label: 'Zeiteffizient', desc: 'Maximal 2x 45 min/Woche' }
            ].map((fact, idx) => (
              <div key={idx} className="border-l-2 border-gold-500/40 pl-3 py-1">
                <span className="block font-display text-xs sm:text-base font-semibold text-white tracking-tight">{fact.label}</span>
                <span className="block text-[10px] sm:text-xs font-sans text-gray-500 mt-0.5">{fact.desc}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <button
              onClick={onStartAnalysis}
              className="relative group overflow-hidden bg-gold-500 hover:bg-gold-600 text-[#0b0b0b] font-display font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(229,160,52,0.3)] text-sm sm:text-base text-center cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                Jetzt analysieren
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="inline-block">→</motion.span>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-300" />
            </button>
            <a href="#system" className="bg-zinc-900 border border-zinc-700/80 hover:border-gold-500/50 text-white font-display font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base text-center whitespace-nowrap">
              Das ML-System entdecken
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-zinc-900 text-[10px] sm:text-xs text-gray-500 font-mono"
          >
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gold-500" /> Wissenschaftlich fundiert</span>
            <span className="flex items-center gap-1.5"><BatteryCharging className="w-4 h-4 text-gold-500" /> 100% Fokus-gesteigert</span>
            <span className="flex items-center gap-1.5"><Trophy className="w-4 h-4 text-gold-500" /> Über 140 erfolgreiche Leader</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950/60 p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/coach-portrait.jpg"
              alt="Marc Lindner – Executive Performance Coach"
              className="w-full h-[300px] sm:h-[420px] object-cover object-top rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-zinc-900/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gold-500/30 flex items-center gap-2 sm:gap-3">
              <div className="bg-gold-500/20 p-1.5 sm:p-2 rounded-full">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
              </div>
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 block uppercase tracking-wider">Erfolgsquote</span>
                <span className="font-display font-bold text-white text-base sm:text-lg">98.4%</span>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-zinc-900/95 backdrop-blur-md px-3 py-2.5 sm:p-5 rounded-lg border border-zinc-800">
              <span className="text-[10px] sm:text-xs font-mono text-gold-500 uppercase tracking-widest block mb-0.5 sm:mb-1">Das Ziel</span>
              <p className="text-xs sm:text-sm font-sans text-gray-200 font-medium line-clamp-2 sm:line-clamp-none">
                &ldquo;Körperfett verlieren, Muskeln definieren und die maximale Energiekurve zurückgewinnen – unkompliziert koordiniert über Ihr Smartphone.&rdquo;
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gold-600/10 blur-xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
