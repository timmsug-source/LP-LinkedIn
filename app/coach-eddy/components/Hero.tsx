'use client'

import { ArrowDown, Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-stone-950 flex flex-col justify-between overflow-hidden pt-28"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Gym Training"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
          style={{ filter: 'blur(1px) brightness(0.7) contrast(1.1)' }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 20%, #0c0a09 90%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-stone-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-stone-950/80 to-transparent" />
      </div>

      <div className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="max-w-2xl text-center space-y-4 px-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 border border-orange-500/20 text-[#FF5A1F] text-[10px] font-mono uppercase tracking-[0.15em]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Verfügbare Plätze für diesen Monat: Begrenzt
            </span>

            <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05] drop-shadow-md" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Du weißt, was du tun müsstest.{' '}
              <br />
              <span className="text-gradient-orange">
                Du weißt nur nicht, warum du es nicht tust.
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
              Ich bin kein Trainer, der dir Pläne schickt und verschwindet. Ich bin derjenige, der mit dir hinschaut – auf das, was du vielleicht schon lange weißt, aber noch nie angepackt hast.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center px-4">
            <button
              onClick={() => onScrollToSection('booking')}
              className="bg-[#FF5A1F] hover:bg-[#e44e15] text-stone-950 font-black text-sm uppercase tracking-wide whitespace-nowrap h-14 px-8 rounded-full flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-orange-950/40"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>Gratis Erstgespräch Sichern</span>
            </button>

            <button
              onClick={() => onScrollToSection('profile')}
              className="bg-stone-900/90 hover:bg-stone-800 text-white font-black text-sm uppercase tracking-wide whitespace-nowrap h-14 px-8 rounded-full flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-600 transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>Wer ist Coach Eddy?</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-stone-400 text-xs font-mono">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FF5A1F] text-[#FF5A1F]" />
              ))}
              <span className="text-white font-bold ml-1">4.9 / 5</span> Kundenbewertung
            </span>
            <span className="h-3 w-[1px] bg-stone-800 hidden md:inline-block" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Wissenschaftlich basierter Ansatz
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex flex-col items-center">
        <button
          onClick={() => onScrollToSection('profile')}
          className="p-3 rounded-full bg-stone-900/50 border border-stone-800 text-stone-400 hover:text-white transition-colors hover:bg-stone-900 animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
