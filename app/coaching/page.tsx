'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import HeroSection from './components/HeroSection'
import FeatureGrid from './components/FeatureGrid'
import AiAnalysisWidget from './components/AiAnalysisWidget'
import SuccessStories from './components/SuccessStories'
import CoachBio from './components/CoachBio'

const faqs = [
  { q: 'Wie viel Zeit muss ich pro Woche wirklich investieren?', a: 'Erfahrungsgemäß genügen bereits 2x 45 Minuten fokussiertes Krafttraining pro Woche, um signifikante Veränderungen an Kraft, Haltung und Stoffwechsel zu sehen. Wir stimmen Ihr Trainingsfenster jede Woche neu mit Ihrem Kalender ab, damit Sie niemals unter Zeitstress geraten.' },
  { q: 'Ich bin geschäftlich viel auf Reisen & esse im Restaurant. Funktioniert das trotzdem?', a: 'Ja, absolut. Über 70% meiner Klienten sind wöchentlich auf Reisen. Das ML-System ist genau für solche Situationen gebaut. Sie lernen, Speisekarten im Restaurant strategisch zu lesen – komplett unauffällig.' },
  { q: 'Gibt es feste Ernährungspläne mit trockenem Hühnchen und Brokkoli?', a: 'Nein. Feste, restriktive Pläne scheitern in einer 60h-Woche sofort. Stattdessen arbeiten wir mit alltagstauglichen Bausteinen, individuellen Proteinkorridoren und extrem dichten Nährstoff-Hacks für unterwegs.' },
  { q: 'Wie genau läuft das Online-Coaching ab?', a: 'Alles läuft extrem zeitsparend und digital über Ihr Smartphone. Nach Ihrer Bestform-Analyse und dem Erstgespräch legen wir Ihre genauen Stoffwechselziele fest. Über WhatsApp stehe ich Ihnen täglich zur Seite.' },
]

export default function CoachingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="coaching-root bg-[#0b0b0b] min-h-screen text-gray-200 antialiased relative">

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-zinc-900 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo('top')}>
            <span className="bg-gradient-to-r from-gold-500 to-amber-400 text-black font-display font-extrabold px-3 py-1 rounded text-sm tracking-wider">ML</span>
            <div className="text-left">
              <span className="font-display font-black text-white text-base tracking-tight block leading-none">MARC LINDNER</span>
              <span className="text-[9px] font-mono text-gold-500 uppercase tracking-widest block mt-0.5 leading-none font-bold">Performance Coaching</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-gray-400 font-medium">
            {[['top', 'Start'], ['system', 'Die Methode'], ['bestform-analyser', 'Bestform-Analysator'], ['success', 'Erfolge'], ['coach', 'Über mich']].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`hover:text-gold-500 transition-colors cursor-pointer ${id === 'bestform-analyser' ? 'text-gold-500 font-bold' : ''}`}>{label}</button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button onClick={() => scrollTo('bestform-analyser')} className="bg-gold-500 hover:bg-gold-600 text-black font-display font-bold py-2.5 px-5 rounded text-xs transition-all uppercase tracking-wider cursor-pointer">
              Kostenlose Analyse
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white p-1 cursor-pointer">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 w-full bg-[#0b0b0b] border-b border-zinc-800 p-6 space-y-4 flex flex-col shadow-2xl z-50">
            {[['top', 'Start'], ['system', 'Die Methode'], ['bestform-analyser', 'Bestform-Analysator'], ['success', 'Erfolge'], ['coach', 'Über Marc']].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`py-2 text-sm font-mono uppercase tracking-widest text-left cursor-pointer ${id === 'bestform-analyser' ? 'text-gold-500 font-bold' : 'text-gray-400 hover:text-white'}`}>{label}</button>
            ))}
            <button onClick={() => scrollTo('bestform-analyser')} className="w-full bg-gold-500 text-black font-display font-bold py-3 text-xs uppercase tracking-widest rounded text-center cursor-pointer mt-2">Kostenlose Analyse starten</button>
          </motion.div>
        )}
      </header>

      {/* Main */}
      <main id="top">
        <HeroSection onStartAnalysis={() => scrollTo('bestform-analyser')} />
        <FeatureGrid />
        <AiAnalysisWidget id="bestform-analyser" />
        <SuccessStories />
        <CoachBio />

        {/* FAQ */}
        <section className="py-16 sm:py-24 px-4 bg-zinc-950/40 relative" id="faq">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-bold">Häufig gestellte Fragen</span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">FAQ — Klarheit für Entscheider</h2>
              <p className="text-gray-400 font-sans text-sm max-w-lg mx-auto leading-relaxed">Bevor vielbeschäftigte Executives starten, wollen sie präzise Antworten.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300">
                  <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-zinc-900/60 transition-colors cursor-pointer">
                    <span className="font-display font-semibold text-white text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-6 pt-1 border-t border-zinc-800/40">
                      <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed font-light">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-16 px-4 text-xs font-sans text-gray-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-gold-500 text-black font-display font-black px-2 py-0.5 rounded text-xs">ML</span>
              <span className="font-display font-bold text-white text-sm">Marc Lindner Coaching</span>
            </div>
            <p className="text-gray-500 leading-relaxed font-light text-[11px] max-w-sm">Premium Performance- und Fitnessbetreuung für vielbeschäftigte Unternehmer. Datenbasierte Trainingsreize, alltagstaugliche Ernährung und maximale Zeiteffizienz.</p>
            <p className="text-[10px] text-gray-600 font-mono">© {new Date().getFullYear()} Marc Lindner Coaching. Alle Rechte vorbehalten.</p>
          </div>
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-[10px] uppercase font-bold text-gray-400 tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-400">
              {[['top', 'Home'], ['system', 'Die Methode'], ['bestform-analyser', 'Bestform-Analysator'], ['success', 'Erfolge'], ['coach', 'Über Marc'], ['faq', 'FAQ']].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-gold-500 text-left transition-colors cursor-pointer">{label}</button>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[10px] uppercase font-bold text-gray-400 tracking-wider">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <a href="mailto:info@marclindner-coaching.de" className="flex items-center gap-2 hover:text-gold-500 transition-colors"><Mail className="w-4 h-4 text-gold-500" />info@marclindner-coaching.de</a>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold-500" />+49 170 9876543</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
