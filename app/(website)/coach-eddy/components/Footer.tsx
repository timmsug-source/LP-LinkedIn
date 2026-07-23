'use client'

import Logo from './Logo';
import { Shield, Award } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-16 text-stone-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-900">
          <div className="md:col-span-12 lg:col-span-5 space-y-4">
            <Logo size={42} color="#ffffff" showText={true} />
            <p className="text-stone-300 text-xs sm:text-sm max-w-sm leading-relaxed pt-2">
              „Mein Coaching ist provokant, weil ich dir sage, was du hören musst – nicht, was du hören willst. Und es ist zielführend, weil danach alles Klick macht."
            </p>
            <div className="flex items-center gap-1.5 text-stone-500 text-xs font-mono uppercase tracking-wider">
              <Award className="w-[18px] h-[18px] text-orange-500" />
              <span>Geprüfter Personal Trainer & Ernährungsberater</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-12 lg:col-span-7 gap-8">
            <div className="space-y-4">
              <h5 className="font-black text-white text-xs uppercase tracking-widest text-[#FF5A1F]" style={{ fontFamily: "'Outfit', sans-serif" }}>Navigation</h5>
              <div className="flex flex-col gap-2.5 text-xs text-stone-400">
                <button onClick={() => onScrollToSection('hero')} className="text-left hover:text-white transition-colors">Startseite</button>
                <button onClick={() => onScrollToSection('profile')} className="text-left hover:text-white transition-colors">Über Coach Eddy</button>
                <button onClick={() => onScrollToSection('feedback')} className="text-left hover:text-white transition-colors">Kunden Feedback</button>
                <button onClick={() => onScrollToSection('ebooks')} className="text-left hover:text-white transition-colors">E-Books Shop</button>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-black text-white text-xs uppercase tracking-widest text-[#FF5A1F]" style={{ fontFamily: "'Outfit', sans-serif" }}>Coaching</h5>
              <div className="flex flex-col gap-2.5 text-xs text-stone-400">
                <button onClick={() => onScrollToSection('features')} className="text-left hover:text-white transition-colors">Säulen des Erfolgs</button>
                <button onClick={() => onScrollToSection('approach')} className="text-left hover:text-white transition-colors">Philosophie</button>
                <button onClick={() => onScrollToSection('booking')} className="text-left hover:text-white transition-colors">Gratis Erstgespräch</button>
                <button onClick={() => onScrollToSection('profile')} className="text-left hover:text-white transition-colors">Stoffwechsel-Analyse</button>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-4">
              <h5 className="font-black text-white text-xs uppercase tracking-widest text-[#FF5A1F]" style={{ fontFamily: "'Outfit', sans-serif" }}>Kontakt & Recht</h5>
              <div className="flex flex-col gap-2.5 text-xs text-stone-400">
                <span className="text-stone-300">Düsseldorf, Deutschland</span>
                <span className="font-mono text-stone-500">eddy@coach-eddy.de</span>
                <span className="h-[1px] bg-stone-900 my-1" />
                <a href="#impressum" onClick={(e) => { e.preventDefault(); alert('Impressum:\n\nCoach Eddy Personal & Health Coaching\nEddy Fitness & Vitality SRL\nSitz: Düsseldorf, Germany\nUSt-ID: DE2948293'); }} className="hover:text-white transition-colors">Impressum</a>
                <a href="#datenschutz" onClick={(e) => { e.preventDefault(); alert('Datenschutzerklärung:\n\nDeine personenbezogenen Daten werden ausschließlich zur Durchführung des kostenlosen Erstgesprächs verarbeitet und nicht an Dritte weitergegeben.'); }} className="hover:text-white transition-colors">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-wider text-stone-600">
          <span>© {new Date().getFullYear()} COACH EDDY PERSONAL TRAINING. ALLE RECHTE VORBEHALTEN.</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>Demo-Seite – Nur zur Veranschaulichung</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
