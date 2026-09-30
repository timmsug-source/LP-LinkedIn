'use client'
import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Dumbbell, Utensils, Award, Clock, ArrowRight, ArrowLeft, User, Mail, Briefcase, Zap, Calendar, Phone, Sparkles, CheckCircle2, ChevronRight, Calculator } from 'lucide-react'

interface OnboardingData {
  name: string; email: string; age: number; height: number; weight: number
  role: string; workingHours: '40-50h' | '50-60h' | '60h+'
  primaryGoal: 'fat_loss' | 'muscle_gain' | 'energy_focus' | 'general_athletic'
  biggestObstacle: 'cooking_time' | 'business_travel' | 'irregular_hours' | 'lack_of_structure'
  bodyFatPct: 'low' | 'moderate' | 'high' | 'very_high'
}

interface AnalysisResult {
  estimatedDailyCalorieNeeds: number; recommendedProteinGrams: number
  macroRatio: { carbs: number; protein: number; fat: number }
  executiveFitnessStrategy: string
  timeline90Days: { phase1: string; phase2: string; phase3: string }
  travelHack: string; timeEfficiencyTrick: string
}

export default function AiAnalysisWidget({ id = 'bestform-analyser' }: { id?: string }) {
  const [step, setStep] = useState<1 | 2 | 3 | 'loading' | 'result'>(1)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<OnboardingData>({ name: '', email: '', age: 38, height: 180, weight: 85, role: '', workingHours: '50-60h', primaryGoal: 'fat_loss', biggestObstacle: 'cooking_time', bodyFatPct: 'moderate' })
  const [bookingFields, setBookingFields] = useState({ phone: '', notes: '' })
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null)
  const [bookingLoading, setBookingLoading] = useState(false)
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [loadingMessageIdx, setLoadingMessageIdx] = useState(0)

  const loadingMessages = ['Berechne Grundumsatz und Energiekoeffizient...', 'Abgleich mit der 50-60h Arbeitswoche...', 'Filtere Restaurant-Hacks für Geschäftsreisen...', 'Optimiere proteindichte Proteinquellen...', 'Erstelle 3-Phasen-Ablaufplan (90 Tage)...', 'Finalisiere Ihren strategischen Bestform-Bauplan...']

  const handleNext = () => {
    setError(null)
    if (step === 1) { if (!formData.age || !formData.height || !formData.weight) { setError('Bitte füllen Sie alle körperlichen Daten aus.'); return } setStep(2) }
    else if (step === 2) { if (!formData.role.trim()) { setError('Bitte geben Sie Ihre berufliche Position an.'); return } setStep(3) }
  }
  const handlePrev = () => { setError(null); if (step === 2) setStep(1); if (step === 3) setStep(2) }

  const handleCalculate = async (e: FormEvent) => {
    e.preventDefault(); setError(null)
    if (!formData.name.trim() || !formData.email.trim()) { setError('Bitte tragen Sie Ihren Namen und Ihre E-Mailadresse ein.'); return }
    setStep('loading')
    const textInterval = setInterval(() => setLoadingMessageIdx(p => p < loadingMessages.length - 1 ? p + 1 : p), 1500)
    try {
      const res = await fetch('/api/bestform-analysis', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      const data = await res.json(); clearInterval(textInterval)
      if (!res.ok) throw new Error(data.error || 'Fehler beim Abrufen der AI-Analyse.')
      setAnalysis(data); setStep('result')
    } catch (err: any) { clearInterval(textInterval); setStep(3); setError(err.message || 'Verbindungsfehler. Bitte erneut versuchen.') }
  }

  const handleBook = async (e: FormEvent) => {
    e.preventDefault()
    if (!bookingFields.phone.trim()) { alert('Bitte geben Sie eine Telefonnummer an.'); return }
    setBookingLoading(true)
    try {
      const res = await fetch('/api/book-session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: formData.name, email: formData.email, phone: bookingFields.phone, message: bookingFields.notes }) })
      const body = await res.json(); setBookingLoading(false)
      if (res.ok) setBookingSuccess(body.message)
      else alert(body.error || 'Fehler bei der Übermittlung.')
    } catch { setBookingLoading(false); alert('Fehler beim Senden.') }
  }

  return (
    <section id={id} className="py-16 sm:py-24 px-4 bg-zinc-950 relative scroll-mt-12">
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        {step !== 'result' && step !== 'loading' && (
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 bg-gold-950/40 border border-gold-500/20 px-3 py-1 rounded-md text-xs font-mono text-gold-500 uppercase"><Calculator className="w-3.5 h-3.5" />AI Bestform-Analysator</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Erhalten Sie Ihren digitalen Fitness-Fahrplan.</h2>
            <p className="text-gray-400 font-sans max-w-2xl mx-auto text-sm sm:text-base">Berechnen Sie in Echtzeit Ihre optimalen Zielkorridore und erhalten Sie eine praxistaugliche Strategie, die sich 100% nach Ihrem Kalender richtet.</p>
          </div>
        )}

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
          {step !== 'loading' && step !== 'result' && (
            <div className="bg-zinc-900 border-b border-zinc-800 px-6 sm:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-mono text-xs text-gray-500"><span>EINGABE-SCHRITT</span><span className="text-gold-500 font-bold">{step} von 3</span></div>
              <div className="w-32 bg-zinc-800 h-1.5 rounded-full overflow-hidden"><div className="bg-gold-500 h-full transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} /></div>
            </div>
          )}

          <div className="p-6 sm:p-10">
            {error && <div className="mb-6 p-4 bg-red-950/40 border border-red-500/30 rounded-lg text-red-400 text-sm">{error}</div>}
            <AnimatePresence mode="wait">

              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-6 text-left">
                  <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="bg-gold-500/10 text-gold-500 p-1.5 rounded-lg border border-gold-500/20">01</span>Körperliche Ausgangslage</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[{ label: 'Alter (Jahre)', key: 'age', ph: 'Zahl angeben' }, { label: 'Körpergröße (cm)', key: 'height', ph: 'cm' }, { label: 'Gewicht (kg)', key: 'weight', ph: 'kg' }].map(f => (
                      <div key={f.key}><label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">{f.label}</label><input type="number" value={formData[f.key as keyof OnboardingData] as number} onChange={e => setFormData({ ...formData, [f.key]: Number(e.target.value) })} placeholder={f.ph} className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500/60 transition-colors text-white text-sm rounded-lg p-3 outline-none" /></div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 font-semibold">Körperfettanteil (Schätzung)</label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {[{ value: 'low', label: 'Schlank (< 15%)', desc: 'Sichtbare Bauchmuskeln' }, { value: 'moderate', label: 'Normal (15-22%)', desc: 'Leichte Kurven am Bauch' }, { value: 'high', label: 'Erhöht (23-28%)', desc: 'Bauchansatz vorhanden' }, { value: 'very_high', label: 'Deutlich erhöht (> 28%)', desc: 'Ausgeprägtes Übergewicht' }].map(item => (
                        <button key={item.value} type="button" onClick={() => setFormData({ ...formData, bodyFatPct: item.value as any })} className={`p-3 sm:p-4 rounded-xl border text-left cursor-pointer transition-all ${formData.bodyFatPct === item.value ? 'border-gold-500 bg-gold-950/20 text-white' : 'border-zinc-800 bg-zinc-950/60 text-gray-300 hover:border-zinc-700 hover:text-white'}`}>
                          <span className="block text-[11px] sm:text-sm font-semibold leading-snug">{item.label}</span><span className="block text-[10px] text-gray-500 mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end pt-4"><button type="button" onClick={handleNext} className="bg-gold-500 hover:bg-gold-600 text-[#0b0b0b] font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 text-sm transition-all cursor-pointer">Weiter<ChevronRight className="w-4 h-4" /></button></div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-6 text-left">
                  <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="bg-gold-500/10 text-gold-500 p-1.5 rounded-lg border border-gold-500/20">02</span>Alltag & Belastung im Business</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div><label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">Berufliche Rolle / Branche</label><div className="relative"><Briefcase className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" /><input type="text" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} placeholder="z.B. Geschäftsführer, Arzt, Gründer" className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500/60 text-white text-sm rounded-lg p-3 pl-10 outline-none" /></div></div>
                    <div><label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">Wöchentliches Arbeitspensum</label><div className="grid grid-cols-3 gap-2">{(['40-50h', '50-60h', '60h+'] as const).map(h => <button key={h} type="button" onClick={() => setFormData({ ...formData, workingHours: h })} className={`py-3 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${formData.workingHours === h ? 'border-gold-500 bg-gold-950/20 text-white' : 'border-zinc-800 bg-zinc-950/60 text-gray-300 hover:bg-zinc-900 hover:text-white'}`}><Clock className="w-3.5 h-3.5 inline mr-1 text-gold-500" />{h}</button>)}</div></div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 font-semibold">Größte Alltags-Hürde</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[{ value: 'cooking_time', label: 'Keine Kochzeit', desc: 'Ich kann nicht stundenlang vorkochen oder einkaufen.' }, { value: 'business_travel', label: 'Geschäftsreisen & Außendienst', desc: 'Häufiges Restaurantessen, keine festen Studio-Optionen.' }, { value: 'irregular_hours', label: 'Unregelmäßige Abendtermine', desc: 'Späte Verhandlungen, stressiges Termin-Chaos.' }, { value: 'lack_of_structure', label: 'Fehlender roter Faden', desc: 'Standardpläne lassen sich nicht auf lange Sicht halten.' }].map(item => (
                        <button key={item.value} type="button" onClick={() => setFormData({ ...formData, biggestObstacle: item.value as any })} className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${formData.biggestObstacle === item.value ? 'border-gold-500 bg-gold-950/20 text-white' : 'border-zinc-800 bg-zinc-950/60 text-gray-300 hover:bg-zinc-900/60 hover:text-white'}`}>
                          <span className="block text-sm font-semibold">{item.label}</span><span className="block text-xs text-gray-500 mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-zinc-800/50"><button type="button" onClick={handlePrev} className="border border-zinc-800 hover:bg-zinc-900 font-display py-3 px-6 rounded-lg flex items-center gap-2 text-sm text-gray-400 cursor-pointer"><ArrowLeft className="w-4 h-4" />Zurück</button><button type="button" onClick={handleNext} className="bg-gold-500 hover:bg-gold-600 text-[#0b0b0b] font-display font-medium py-3 px-6 rounded-lg flex items-center gap-2 text-sm cursor-pointer">Weiter<ChevronRight className="w-4 h-4" /></button></div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-6 text-left">
                  <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="bg-gold-500/10 text-gold-500 p-1.5 rounded-lg border border-gold-500/20">03</span>Zielsetzung & Kontaktdaten</h3>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">Was ist das wichtigste Ziel?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[{ value: 'fat_loss', label: 'Bauchansatz & Fett verbrennen', desc: 'Umfang reduzieren, ohne Muskelverlust.' }, { value: 'muscle_gain', label: 'Muskelaufbau & Athletische Haltung', desc: 'Breitere Schulter, bessere Rückenspannung.' }, { value: 'energy_focus', label: 'Energie & Mentaler Performance-Booster', desc: 'Durchhänger abschaffen, voller Fokus.' }, { value: 'general_athletic', label: 'Allgemeine Ausdauer & Flexibilität', desc: 'Robuste Corestärke, schnelle Regeneration.' }].map(item => (
                        <button key={item.value} type="button" onClick={() => setFormData({ ...formData, primaryGoal: item.value as any })} className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${formData.primaryGoal === item.value ? 'border-gold-500 bg-gold-950/20 text-white' : 'border-zinc-800 bg-zinc-950/60 text-gray-300 hover:bg-zinc-900/60 hover:text-white'}`}>
                          <span className="block text-sm font-semibold">{item.label}</span><span className="block text-xs text-gray-500 mt-1">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-800/50">
                    <div><label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">Vollständiger Name</label><div className="relative"><User className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" /><input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Vor- und Nachname" className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500/60 text-white text-sm rounded-lg p-3 pl-10 outline-none" /></div></div>
                    <div><label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">E-Mailadresse</label><div className="relative"><Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" /><input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="name@firma.de" className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500/60 text-white text-sm rounded-lg p-3 pl-10 outline-none" /></div></div>
                  </div>
                  <p className="text-[11px] font-sans text-gray-500">*Datenschutzhinweis: Ihre Daten dienen ausschließlich der individuellen Strategieberechnung. Keine Weitergabe an Dritte.</p>
                  <div className="flex justify-between pt-4 border-t border-zinc-800/50"><button type="button" onClick={handlePrev} className="border border-zinc-800 hover:bg-zinc-900 font-display py-3 px-6 rounded-lg flex items-center gap-2 text-sm text-gray-400 cursor-pointer"><ArrowLeft className="w-4 h-4" />Zurück</button><button type="button" onClick={handleCalculate} className="bg-gold-500 hover:bg-gold-600 text-[#0b0b0b] font-display font-bold py-3.5 px-8 rounded-lg flex items-center gap-2 text-sm cursor-pointer shadow-[0_4px_15px_rgba(229,160,52,0.2)]"><Sparkles className="w-4 h-4" />Jetzt AI-Bauplan berechnen</button></div>
                </motion.div>
              )}

              {step === 'loading' && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 text-center space-y-6 flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20"><div className="absolute inset-0 rounded-full border-4 border-gold-500/10" /><div className="absolute inset-0 rounded-full border-4 border-t-gold-500 border-l-gold-500 animate-spin" /><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500 font-mono text-xs font-bold">ML</div></div>
                  <div className="space-y-2"><h3 className="font-display text-lg font-bold text-white">Analyse wird generiert</h3><p className="text-gold-500 font-mono text-xs tracking-wider uppercase animate-pulse">{loadingMessages[loadingMessageIdx]}</p></div>
                </motion.div>
              )}

              {step === 'result' && analysis && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6">
                    <div><span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-bold">Berechnung abgeschlossen</span><h3 className="font-display text-2xl font-extrabold text-white tracking-tight">Ihr maßgeschneiderter Bestform-Bauplan</h3><p className="text-xs text-gray-500 mt-0.5">Generiert für {formData.name} ({formData.role})</p></div>
                    <span className="bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-mono text-xs">Aktivitätsfaktor: Hoch</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl"><span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Ziel-Kalorienbedarf</span><span className="text-3xl font-display font-black text-white block mt-3">{analysis.estimatedDailyCalorieNeeds} <span className="text-xs font-light text-gray-400">kcal/Tag</span></span><p className="text-[11px] text-gray-400 mt-2">Berechnetes Tagesoptimum für Fettabbau & Energie.</p></div>
                    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl"><span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Mindest-Proteinbedarf</span><span className="text-3xl font-display font-black text-white block mt-3">{analysis.recommendedProteinGrams} <span className="text-xs font-light text-gray-400">g/Tag</span></span><p className="text-[11px] text-gray-400 mt-2">Garantiert Muskelerhalt & Sättigung im Business.</p></div>
                    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col justify-between"><span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold mb-3">Soll-Makronährstoffe</span><div className="space-y-2">{[{ key: 'carbs', label: 'KH', color: 'bg-blue-500', textColor: 'text-blue-400' }, { key: 'protein', label: 'PRO', color: 'bg-gold-500', textColor: 'text-gold-500' }, { key: 'fat', label: 'FET', color: 'bg-red-400', textColor: 'text-red-400' }].map(m => <div key={m.key} className="flex items-center text-xs font-mono"><span className={`w-12 ${m.textColor} font-bold`}>{m.label}: {analysis.macroRatio[m.key as keyof typeof analysis.macroRatio]}%</span><div className="flex-1 bg-zinc-800 h-2 rounded-full overflow-hidden ml-2"><div className={`${m.color} h-full`} style={{ width: `${analysis.macroRatio[m.key as keyof typeof analysis.macroRatio]}%` }} /></div></div>)}</div></div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-zinc-950/40 border border-zinc-800 p-6 rounded-xl space-y-3"><h4 className="font-display text-sm font-semibold text-gold-500 tracking-widest uppercase flex items-center gap-1.5 font-mono"><Zap className="w-4 h-4 shrink-0" />Executive Fitness-Strategie</h4><p className="text-gray-300 font-sans text-sm leading-relaxed whitespace-pre-line font-light">{analysis.executiveFitnessStrategy}</p></div>
                    <div className="space-y-3"><h4 className="font-display text-sm font-semibold text-gold-500 tracking-widest uppercase flex items-center gap-1.5 font-mono"><Calendar className="w-4 h-4 shrink-0" />Ablaufplan (Die 90-Tage Phasen)</h4><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{[{ label: 'Phase 1 (Woche 1-4)', content: analysis.timeline90Days.phase1 }, { label: 'Phase 2 (Woche 5-8)', content: analysis.timeline90Days.phase2 }, { label: 'Phase 3 (Woche 9-12)', content: analysis.timeline90Days.phase3 }].map(p => <div key={p.label} className="bg-zinc-950 p-4 rounded-lg border border-zinc-800"><span className="text-[10px] font-mono text-gold-500 uppercase block font-bold">{p.label}</span><p className="text-xs text-gray-300 font-sans mt-1.5 leading-relaxed font-light">{p.content}</p></div>)}</div></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{[{ title: 'Restaurant- & Travel-Hack', content: analysis.travelHack }, { title: 'Ultra-Zeiteffizienz Hack', content: analysis.timeEfficiencyTrick }].map(b => <div key={b.title} className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800/80 space-y-2"><h4 className="font-display text-xs font-bold text-white tracking-widest uppercase font-mono block mb-1">{b.title}</h4><p className="text-xs text-gray-400 font-sans leading-relaxed font-light">{b.content}</p></div>)}</div>
                  </div>

                  <div className="bg-gradient-to-br from-gold-950/20 to-zinc-950 border border-gold-500/30 rounded-xl p-6 sm:p-8 space-y-6">
                    <div className="space-y-2"><div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/20 px-2 py-0.5 rounded text-[10px] font-mono text-gold-500">1:1 Umsetzung</div><h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">Wollen Sie diesen Fahrplan fehlerfrei umsetzen?</h4><p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">Bewerben Sie sich jetzt für ein unverbindliches, 15-minütiges Gespräch, um zu besprechen, wie wir das Konzept in Ihr Leben integrieren.</p></div>
                    {!bookingSuccess ? (
                      <form onSubmit={handleBook} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div><label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Telefonnummer / WhatsApp</label><div className="relative"><Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" /><input type="tel" required value={bookingFields.phone} onChange={e => setBookingFields({ ...bookingFields, phone: e.target.value })} placeholder="+49 170 1234567" className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500/60 text-white text-xs rounded-lg p-2.5 pl-10 outline-none" /></div></div>
                          <div><label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Kurznotiz (Optional)</label><input type="text" value={bookingFields.notes} onChange={e => setBookingFields({ ...bookingFields, notes: e.target.value })} placeholder="z.B. Am besten abends erreichbar" className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500/60 text-white text-xs rounded-lg p-2.5 outline-none" /></div>
                        </div>
                        <button type="submit" disabled={bookingLoading} className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-[#0b0b0b] font-display font-semibold py-3 px-6 rounded-lg text-xs cursor-pointer flex items-center justify-center gap-2">{bookingLoading ? 'Sende Bewerbung...' : 'Kostenloses Erstgespräch anfordern'}<ChevronRight className="w-4 h-4" /></button>
                      </form>
                    ) : (
                      <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-lg flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /><p className="text-xs sm:text-sm text-emerald-300 font-sans leading-relaxed">{bookingSuccess}</p></div>
                    )}
                  </div>

                  <div className="flex justify-center pt-4"><button type="button" onClick={() => { setStep(1); setAnalysis(null); setBookingSuccess(null); setBookingFields({ phone: '', notes: '' }) }} className="text-xs font-mono text-gray-500 hover:text-gold-500 transition-colors">← Zurück zum Start & Daten anpassen</button></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
