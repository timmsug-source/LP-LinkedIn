'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check, ArrowRight, Activity,
  Menu, X, Sparkles, ChevronRight, Award
} from 'lucide-react';

import { FAQS, GOLD_RULES } from './data';
import LeadBooking from './components/LeadBooking';
import Testimonials from './components/Testimonials';
import PainPoints from './components/PainPoints';

export default function FabianCoachingHellPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (idx: number) => setExpandedFaq(expandedFaq === idx ? null : idx);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="fuel-hell-root min-h-screen bg-[#fcfcfb] overflow-x-hidden" style={{ fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif' }}>

      {/* ── NAVIGATION ──────────────────────────────────────────────── */}
      {/* top-10 = 40px to sit flush below the fixed demo banner */}
      <nav className="fixed top-10 left-0 right-0 z-40 backdrop-blur-md border-b border-stone-200/50" style={{ background: 'rgba(255,255,255,0.85)' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('fuel-hero')}>
            <span className="text-lg font-display font-black tracking-tight text-stone-900 leading-none">F.U.E.L. METHODE</span>
            <span className="text-[10px] font-mono font-bold tracking-wider text-amber-600 uppercase mt-0.5">by Fabian Schönle</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {[['risiko','Symptome & Risiko'],['methode','Die Methode'],['erfolge','Erfolgsberichte'],['faq','Details & FAQ']].map(([id, label]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-stone-600 hover:text-stone-950 font-medium text-sm transition-colors cursor-pointer">{label}</button>
            ))}
            <span className="w-px h-5 bg-stone-200" />
            <button onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm cursor-pointer">
              Potenzial berechnen
            </button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-stone-700 hover:text-stone-950 transition-colors" aria-label="Navigation umschalten">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-stone-100 bg-white">
              <div className="p-6 flex flex-col gap-4">
                {[['risiko','Symptome & Risiko'],['methode','Die Methode'],['erfolge','Erfolgsberichte'],['faq','Details & FAQ']].map(([id, label]) => (
                  <button key={id} onClick={() => scrollToSection(id)} className="text-left py-2 text-stone-700 font-semibold text-sm">{label}</button>
                ))}
                <button onClick={() => { setMobileMenuOpen(false); setIsBookingOpen(true); }}
                  className="w-full text-center py-3 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors">
                  Jetzt Analyse starten
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer: 40px banner + 80px nav = 120px */}
      <div id="fuel-hero" style={{ height: '120px' }} />

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative py-12 lg:py-24 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 rounded-full pointer-events-none"
          style={{ height: '350px', background: 'rgba(245,158,11,0.05)', filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 right-10 rounded-full pointer-events-none"
          style={{ width: '200px', height: '200px', background: 'rgba(29,78,216,0.05)', filter: 'blur(100px)' }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-md border border-amber-200">
              <Sparkles size={14} className="text-amber-600" style={{ fill: 'rgba(245,158,11,0.2)' }} />
              <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-widest">Diagnostik-gestützte Fettverbrennung</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-stone-900" style={{ lineHeight: 1.1 }}>
                Wie vielbeschäftigte Männer in{' '}
                <span className="text-amber-600" style={{ borderBottom: '4px solid #fef3c7' }}>16 Wochen</span>{' '}
                ihren Fettstoffwechsel auf Sportmodus stellen.
              </h1>
              <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                Indem du deinen Körper durch präzise Blutwerte und DNA-Analysen entschlüsselst. Verliere hartnäckigen Bauchspeck, verdopple deine Energie im Büro und schütze deine Gesundheit nachhaltig – komplett ohne stundenlangen Cardio-Zwang oder drastischen Verzicht.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {[
                { title: 'Kein Rätseln: 100% Medizinische Diagnostik', text: 'Laborgeprüfte Analyse deiner Bluthormone und Stoffwechsel-Gene als feste Grundlage.' },
                { title: 'Geschäftsreise- & Restauranttauglich', text: 'Smarte Nährstoff-Auswahl nach Baukasten-Prinzip statt mühsamem Besteck-Vorkochen.' },
                { title: 'Minimaler Zeitaufwand (2x 35 min / Woche)', text: 'Hocheffiziente, zielgerichtete Trainingsreize, die du überall umsetzen kannst.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-stone-900 leading-none">{item.title}</h4>
                    <p className="text-xs text-stone-500 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer group">
                  Jetzt Potenzial berechnen
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-1 px-4 py-2 bg-stone-100 rounded-xl text-[11px] font-mono text-stone-500 font-semibold border border-stone-200">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>NUR NOCH 2 PLÄTZE DIESEN MONAT FREI</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono font-medium text-stone-400">
                <span>✅ 100% Kostenfreie Erstberatung</span>
                <span>✅ Keine Verträge oder Abos im Test</span>
                <span>✅ Laboranalysen nach DIN ISO</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm md:max-w-md">
              <div className="rounded-3xl border-4 p-2.5 shadow-2xl relative overflow-hidden" style={{ borderColor: 'rgba(245,158,11,0.1)', background: 'rgba(255,255,255,0.7)' }}>
                <img
                  src="/Bilder Website Coaching Kopie.png"
                  alt="Fabian Schönle - Coach"
                  className="w-full h-auto object-cover rounded-2xl aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.8, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 bg-stone-900 border border-stone-800 text-white p-4 rounded-2xl shadow-xl space-y-1 text-left hidden sm:block max-w-[170px]">
                <span className="text-[10px] font-mono text-amber-500 font-bold tracking-widest uppercase">Resultat</span>
                <p className="font-display font-black text-lg leading-tight text-white">-13.4 kg</p>
                <p className="text-[10px] text-stone-400 leading-relaxed font-medium">Mittlerer Fettverlust nach 16 Wochen Coaching</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8, x: -10 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="absolute bottom-6 -left-8 backdrop-blur-md border border-stone-200/90 p-3.5 rounded-2xl shadow-xl items-center gap-3 text-left hidden sm:flex max-w-[220px]" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <div className="p-2.5 bg-brand-blue-50 text-brand-blue-600 rounded-xl"><Activity size={18} /></div>
                <div>
                  <h5 className="font-display font-black text-stone-900 text-xs">Labor-Diagnostik</h5>
                  <p className="text-[9px] text-stone-500 font-medium leading-relaxed mt-0.5">Blutgase, Mikronährstoffe, Gen-Anfälligkeiten</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 right-10 bg-amber-500 text-stone-950 font-display font-black text-xs px-4 py-2 rounded-xl border border-white shadow-md">
                FABIAN SCHÖNLE • GRÜNDER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED SECTORS BAR ─────────────────────────────────────── */}
      <section className="bg-stone-50 py-10 border-y border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <p className="text-[10px] font-mono font-bold tracking-widest text-stone-400 uppercase">GEEIGNET FÜR VERANTWORTUNGSTRÄGER AUS DIESEN BEREICHEN</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm font-semibold text-stone-400">
            {['🏛️ CORPORATE LEADERSHIP','💻 SOFTWARE & TECH','📊 CONSULTING & AUDITING','📈 INDEPENDENT FINANCE','🩺 CLINICAL LEADERS'].map(s => (
              <span key={s} className="hover:text-stone-700 transition-colors">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYMPTOME & RISIKO ────────────────────────────────────────── */}
      <section id="risiko" className="py-20 lg:py-28 px-6 bg-stone-50/30 scroll-mt-[120px]">
        <div className="max-w-7xl mx-auto">
          <PainPoints />
        </div>
      </section>

      {/* ── DANGER CALLOUT ───────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto border border-rose-500" style={{ background: 'rgba(239,68,68,0.1)', color: '#fb7185' }}>
            <Activity size={24} className="animate-pulse" />
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white leading-tight">
              Das ist kein Zustand, den du ignorieren solltest.
            </h3>
            <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Dauerhafter Schlafmangel, ein schleichend wachsender Bauchumfang und chronischer Alltagsstress belasten nicht nur deine tägliche Performance – sie sind der Nährboden für Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes und einen drastischen Testosteronabfall unter Männern.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-stone-700 max-w-xl mx-auto text-left flex gap-4 items-start" style={{ background: 'rgba(30,41,59,0.8)' }}>
            <span className="text-amber-500 font-mono text-sm font-bold pt-0.5">Hinweis:</span>
            <p className="text-xs text-stone-300 leading-relaxed">
              Du bezahlst deinen Erfolg aktuell mit deiner Gesundheit und der kostbaren Zeit mit deiner Familie. Es braucht keine heroischen Qualen – es braucht wissenschaftliche Genauigkeit im biochemischen System.
            </p>
          </div>
          <button onClick={() => setIsBookingOpen(true)}
            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold rounded-xl text-xs transition-colors shadow-lg cursor-pointer">
            Jetzt Stoffwechsel-Sollwert anfordern
          </button>
        </div>
      </section>

      {/* ── METHODE ─────────────────────────────────────────────────── */}
      <section id="methode" className="py-20 lg:py-28 px-6 bg-white scroll-mt-[120px]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-md">Das Wirkprinzip</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight">Die 3 Säulen der F.U.E.L. Methode</h2>
            <p className="text-stone-500 text-sm leading-relaxed">Wir arbeiten nicht mit vagen Erwartungen. Unser Weg führt dich über messbare biologische Fakten zur nachhaltigen Traumform.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { num: '01', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', title: 'Präzise Labor-Diagnostik', sub: 'Blut- & Genanalyse', footerColor: 'text-amber-700', desc: 'Über ein unkompliziertes Labor-Kit werden deine Schilddrüsenhormone, Cortisol-Level, Fettzell-Sensibilität und Mineralien präzise gemessen. Wir raten nicht – wir ermitteln deine genaue biochemische Ausgangslage.', footer: '🎯 Ziel: Biochemische Bremsen lösen' },
              { num: '02', bg: 'bg-brand-blue-50', text: 'text-brand-blue-700', border: 'border-brand-blue-100', title: 'Alltagstauglicher Baukasten', sub: 'Keine Diäten oder Verbote', footerColor: 'text-brand-blue-700', desc: 'Basierend auf deinen Laborberichten erhältst du simple Baukasten-Guides, die dir exakt diktieren, was du unterwegs oder im Restaurant wählen kannst. Genieße weiterhin Pasta oder Steaks strategisch passend zu deiner Biologie.', footer: '🍷 Ziel: 100% soziale Vereinbarkeit' },
              { num: '03', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', title: 'Dynamisches 1:1 Feintuning', sub: 'Täglicher WhatsApp-Support', footerColor: 'text-emerald-700', desc: 'Dein Coach Fabian reagiert auf hektische Tage, verringerte Schlafzeiten oder Last-Minute Überstunden in Echtzeit. Dein Trainingsplan und dein Nährstofffokus passen sich täglich flexibel an deinen realen Terminkalender an.', footer: '📱 Ziel: Keine Terminstress-Überlastung' },
            ].map((p) => (
              <div key={p.num} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-6">
                  <div className={`w-12 h-12 ${p.bg} ${p.text} rounded-xl flex items-center justify-center font-mono font-black border ${p.border}`}>{p.num}</div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-lg text-stone-950">{p.title}</h4>
                    <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">{p.sub}</p>
                  </div>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className={`border-t border-stone-200 pt-4 mt-6 text-xs ${p.footerColor} font-medium`}>{p.footer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLDEN RULES ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 bg-stone-50/40 border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-md">Die Gesetze des Erfolgs</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight">Die 3 Grundprinzipien für müheloses Abnehmen</h2>
            <p className="text-stone-500 text-sm leading-relaxed">Konventioneller Fitness-Sprech basiert oft auf Scham und Zwang. Unsere goldenen Regeln beweisen dir das Gegenteil.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GOLD_RULES.map((rule) => (
              <div key={rule.id} className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg text-amber-600 flex items-center justify-center"><Check size={18} strokeWidth={3} /></div>
                  <h4 className="font-display font-black text-stone-900 text-base leading-snug">{rule.title}</h4>
                  <p className="text-xs text-stone-400 font-mono">{rule.subtitle}</p>
                  <p className="text-stone-600 text-xs leading-relaxed">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section id="erfolge" className="py-20 lg:py-28 px-6 bg-white scroll-mt-[120px]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md">Echte Berichte</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight">Was unsere Teilnehmer der F.U.E.L. Methode sagen</h2>
            <p className="text-stone-500 text-sm leading-relaxed">Lese echtes Feedback von Geschäftsführern, Entwicklern und Beratern, die das Coaching bereits erfolgreich durchlaufen haben.</p>
          </div>
          <Testimonials onOpenBooking={() => setIsBookingOpen(true)} />
        </div>
      </section>

      {/* ── ABOUT COACH ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 bg-stone-50/20 border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-white p-3">
              <img
                src="/Bilder Website Coaching Kopie.png"
                alt="Fabian Schönle"
                className="w-full h-auto object-cover rounded-2xl shadow-sm mb-3"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="flex gap-4 p-4 text-left">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl flex-shrink-0"><Award size={24} /></div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 text-sm leading-snug">Akademische Präzision</h4>
                  <p className="text-xs text-stone-500 mt-1">Ständige Weiterbildung im Bereich der funktionellen Medizin, Hormonphysiologie und sportbiologischen Genomik.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-md">Deine Begleitung</span>
            <h3 className="text-3xl font-display font-extrabold text-stone-900 tracking-tight">Dein Mentor: Fabian Schönle</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Jahrelang habe ich beobachtet, wie ambitionierte Männer im Beruf Unsummen an Geld generieren, aber körperlich zunehmend verfallen. Sie quälen sich durch Diäten, zerstören ihre kostbare Freizeit mit ineffektiven Workouts und scheitern schließlich am Jo-Jo-Effekt.</p>
            <p className="text-stone-600 text-sm leading-relaxed">Mit der <strong>F.U.E.L. Methode</strong> habe ich ein System entwickelt, das endlich mit wissenschaftlicher Gewissheit aufräumt. Ich helfe dir dabei, die biologischen Hindernisse deines Körpers zu entfernen und Gesundheit, Performance und Ästhetik in Rekordzeit zu vereinen.</p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200/60 text-xs">
              <div className="space-y-1">
                <h5 className="font-display font-bold text-stone-900">🔬 Molekulare Gewissheit</h5>
                <p className="text-stone-500 leading-relaxed">Keine fiktiven Pauschaltipps. Deine Biologie bestimmt den Plan.</p>
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-stone-900">⌚ Volle Zeiteffizienz</h5>
                <p className="text-stone-500 leading-relaxed">Deine Arbeit wird geschützt. Die Abnehmhebel passen sich dir an.</p>
              </div>
            </div>
            <div className="pt-4">
              <button onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3 bg-stone-950 hover:bg-stone-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer">
                Mehr über die Methodik erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 lg:py-28 px-6 bg-white scroll-mt-[120px]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue-700 bg-brand-blue-50 px-3 py-1.5 rounded-md">Häufige Fragen</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight">Häufig gestellte Fragen (FAQ)</h2>
            <p className="text-stone-500 text-sm leading-relaxed">Hast du noch Fragen zur Methodik oder den Abläufen? Hier findest du die Antworten.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors">
                  <button onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-stone-50 transition-colors cursor-pointer">
                    <span className="font-display font-bold text-stone-900 text-sm md:text-base pr-4">{faq.question}</span>
                    <div className={`p-1.5 rounded-full bg-stone-100 text-stone-500 transform transition-transform ${isOpen ? 'rotate-180 bg-stone-900 text-white' : ''}`}>
                      <ChevronRight size={16} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <div className="px-6 pb-6 pt-2 text-stone-600 text-xs md:text-sm leading-relaxed border-t border-stone-100/80 bg-white">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-emerald-100" style={{ background: '#f0fcf4' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono px-3.5 py-1.5 rounded-full">
            🚀 DEIN ERSTER SCHRITT ZUR HÖCHSTFORM
          </div>
          <h3 className="text-3xl font-display font-black text-emerald-950 tracking-tight">Sichere dir jetzt deine unverbindliche F.U.E.L. Potenzialanalyse!</h3>
          <p className="text-emerald-900 text-sm max-w-xl mx-auto leading-relaxed" style={{ opacity: 0.8 }}>
            In deiner 25-minütigen Live-Analyse via Zoom berechnen wir deinen exakten Fettstoffwechsel-Stau und klären, wie die F.U.E.L. Methode in deinen Terminkalender integriert werden kann.
          </p>
          <div className="pt-2">
            <button onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-sm transition-all shadow-lg cursor-pointer">
              Jetzt kostenlose Analyse sichern
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-stone-900 text-stone-500 py-12 px-6 border-t border-stone-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-xs">
          <div>
            <span className="font-display font-black text-white text-sm">F.U.E.L. METHODE</span>
            <span className="text-[10px] text-amber-500 font-mono block mt-1">FABIAN SCHÖNLE COACHING</span>
            <p className="text-stone-400 mt-3 leading-relaxed max-w-xs">Das Premium-Coaching für nachhaltigen Fettverlust und zelluläre Leistungsfähigkeit bei vielbeschäftigten Männern.</p>
          </div>
          <div className="md:text-right space-y-4">
            <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-2 font-medium">
              <span className="hover:text-stone-300 transition-colors cursor-pointer">Impressum & Angaben</span>
              <span className="hover:text-stone-300 transition-colors cursor-pointer">Datenschutzerklärung</span>
              <span className="hover:text-stone-300 transition-colors cursor-pointer">Coaching Bedingungen</span>
            </div>
            <p className="text-stone-500 leading-relaxed font-mono text-[10px]">
              © {new Date().getFullYear()} Fabian Schönle. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      {/* ── BOOKING MODAL ───────────────────────────────────────────── */}
      <AnimatePresence>
        {isBookingOpen && (
          <LeadBooking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} isModal={true} />
        )}
      </AnimatePresence>

    </div>
  );
}
