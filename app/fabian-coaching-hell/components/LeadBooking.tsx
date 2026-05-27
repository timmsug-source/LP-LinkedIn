'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check, Calendar, ArrowRight, ArrowLeft, User, Mail,
  Phone, Clock, Target, ShieldCheck, X
} from 'lucide-react';

interface LeadBookingProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export default function LeadBooking({ isOpen, onClose, isModal = false }: LeadBookingProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: 'mann',
    currentWeight: 95,
    targetWeight: 80,
    biggestObstacle: 'time',
    career: 'Unternehmer',
    name: '',
    email: '',
    phone: '',
    selectedDay: '',
    selectedTimeSlot: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedWeeks, setCalculatedWeeks] = useState(16);

  useEffect(() => {
    const loss = formData.currentWeight - formData.targetWeight;
    if (loss > 0) {
      const weeks = Math.max(8, Math.round(loss / 0.9));
      setCalculatedWeeks(weeks);
    }
  }, [formData.currentWeight, formData.targetWeight]);

  const getNextDays = () => {
    const days: { id: string; label: string }[] = [];
    const locale = 'de-DE';
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let count = 0;
    while (count < 5) {
      if (tomorrow.getDay() !== 0) {
        const dayName = tomorrow.toLocaleDateString(locale, { weekday: 'short' });
        const dateStr = tomorrow.toLocaleDateString(locale, { day: '2-digit', month: '2-digit' });
        days.push({ id: tomorrow.toISOString().split('T')[0], label: `${dayName}, ${dateStr}` });
        count++;
      }
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return days;
  };

  const daysList = getNextDays();
  const timeSlots = ['08:30 - 10:00 Uhr', '10:00 - 12:00 Uhr', '13:00 - 15:00 Uhr', '15:00 - 17:00 Uhr', '17:00 - 19:30 Uhr'];

  const handleNext = () => { if (step < 3) setStep(step + 1); };
  const handleBack = () => { if (step > 1) setStep(step - 1); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); };

  const isStepValid = () => {
    if (step === 1) return formData.currentWeight > formData.targetWeight;
    if (step === 2) return formData.selectedDay !== '' && formData.selectedTimeSlot !== '';
    if (step === 3) return formData.name.trim().length > 2 && formData.email.includes('@') && formData.phone.trim().length > 5;
    return true;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const content = (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden max-w-2xl w-full mx-auto">
      {/* Header */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-xs font-mono font-medium tracking-wider text-stone-500 uppercase">F.U.E.L. Analyse-Assistent</span>
        </div>
        {!isSubmitted && (
          <div className="text-xs text-stone-500 font-medium">Schritt {step} von 3</div>
        )}
        {isModal && onClose && (
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 p-1 rounded-full hover:bg-stone-100 transition-colors" aria-label="Schließen">
            <X size={20} />
          </button>
        )}
      </div>

      <div className="p-6 md:p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Step 1 */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-stone-900 tracking-tight">Lass uns dein Potenzial ermitteln</h3>
                  <p className="text-stone-500 text-sm mt-1">Trage deine Werte ein, um deine personalisierte F.U.E.L.-Prognose zu erhalten.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: 'mann', label: '🚀 Für mich als Mann' }, { val: 'frau', label: '👑 Für mich als Frau' }].map(g => (
                    <button key={g.val} type="button" onClick={() => setFormData({ ...formData, gender: g.val })}
                      className={`py-3 px-4 rounded-xl border-2 text-center font-medium transition-all ${formData.gender === g.val ? 'border-amber-500 bg-amber-50 text-stone-900 shadow-sm' : 'border-stone-200 hover:border-stone-300 text-stone-600'}`}>
                      {g.label}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { key: 'currentWeight', label: 'Aktuelles Gewicht', min: 50, max: 220 },
                    { key: 'targetWeight', label: 'Wunschgewicht', min: 40, max: 180 }
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-2">{f.label}</label>
                      <div className="relative">
                        <input type="number" min={f.min} max={f.max}
                          value={formData[f.key as keyof typeof formData] as number}
                          onChange={(e) => setFormData({ ...formData, [f.key]: Number(e.target.value) })}
                          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800 pr-12 text-lg" />
                        <span className="absolute right-4 top-3.5 text-stone-400 font-medium">kg</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-2">Deine größte Hürde beim Abnehmen</label>
                  <select value={formData.biggestObstacle} onChange={(e) => setFormData({ ...formData, biggestObstacle: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800">
                    <option value="time">Extremer Zeitmangel / Voller Terminkalender</option>
                    <option value="energy">Mittagstief & ständige Trägheit</option>
                    <option value="diet">Verzicht auf Restaurantbesuche/Gläschen Wein fällt schwer</option>
                    <option value="metabolism">Stoffwechsel fühlt sich eingeschlafen an</option>
                  </select>
                </div>
                {formData.currentWeight > formData.targetWeight && (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex gap-4 items-start">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-700 mt-1"><Target size={20} /></div>
                    <div>
                      <h4 className="font-display font-semibold text-stone-900 text-sm">Berechnete F.U.E.L.-Prognose</h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        Zielwert: <span className="font-bold text-stone-900">-{formData.currentWeight - formData.targetWeight} kg</span> Körperfettverlust.
                        Bei präziser Justierung deiner Hormone und DNA-Hebeleffekte ist dieses Ziel in ca.{' '}
                        <span className="font-bold text-amber-600 font-mono text-sm">{calculatedWeeks} Wochen</span> nachhaltig erreichbar.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-stone-900 tracking-tight">Wähle dein Zeitfenster</h3>
                  <p className="text-stone-500 text-sm mt-1">Das Erstgespräch dauert ca. 25-30 Minuten und ist zu 100% vertraulich und kostenfrei.</p>
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-3">1. Tag auswählen</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {daysList.map((day) => (
                      <button key={day.id} type="button" onClick={() => setFormData({ ...formData, selectedDay: day.label })}
                        className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${formData.selectedDay === day.label ? 'border-amber-500 bg-amber-50 text-stone-900 font-bold shadow-sm' : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-stone-50'}`}>
                        <span className="text-xs uppercase font-mono">{day.label.split(',')[0]}</span>
                        <span className="text-sm font-semibold mt-1">{day.label.split(',')[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-3">2. Bevorzugte Uhrzeit</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button key={slot} type="button" onClick={() => setFormData({ ...formData, selectedTimeSlot: slot })}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${formData.selectedTimeSlot === slot ? 'border-amber-500 bg-amber-50 text-stone-900 font-medium' : 'border-stone-200 hover:border-stone-300 text-stone-600'}`}>
                        <span className="text-sm">{slot}</span>
                        {formData.selectedTimeSlot === slot
                          ? <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white"><Check size={12} strokeWidth={3} /></div>
                          : <Clock size={16} className="text-stone-400" />}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3 text-xs text-stone-500">
                  <ShieldCheck size={16} className="text-amber-500 flex-shrink-0" />
                  <span>Deine Daten sind verschlüsselt und werden nicht an Dritte weitergegeben.</span>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-stone-900 tracking-tight">Wer bist du?</h3>
                  <p className="text-stone-500 text-sm mt-1">An welche E-Mail und Rufnummer dürfen wir die Bestätigung und deine F.U.E.L. Vorabberechnung senden?</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-2">Dein vollständiger Name</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-stone-400"><User size={18} /></span>
                      <input type="text" required placeholder="z.B. Robert R." value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-2">E-Mail-Adresse</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-stone-400"><Mail size={18} /></span>
                        <input type="email" required placeholder="z.B. robert@firma.de" value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-2">Telefonnummer</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-stone-400"><Phone size={18} /></span>
                        <input type="tel" required placeholder="z.B. +49 176 1234567" value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-stone-800" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-500 uppercase mb-2">Deine berufliche Position</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Unternehmer', 'Führungskraft', 'Selbstständig'].map((pos) => (
                        <button key={pos} type="button" onClick={() => setFormData({ ...formData, career: pos })}
                          className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${formData.career === pos ? 'border-amber-500 bg-amber-50 text-stone-900 font-semibold' : 'border-stone-200 text-stone-500'}`}>
                          {pos}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex gap-3 text-xs text-stone-600 leading-relaxed">
                  <Check size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Unser Team kontaktiert dich an deinem Wunschtermin: <strong>{formData.selectedDay}</strong> im Zeitfenster <strong>{formData.selectedTimeSlot}</strong>.</span>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
              {step > 1
                ? <button type="button" onClick={handleBack} className="px-5 py-3 rounded-xl hover:bg-stone-100 font-medium text-stone-600 flex items-center gap-1.5 transition-all text-sm"><ArrowLeft size={16} /> Zurück</button>
                : <div />}
              {step < 3
                ? <button type="button" disabled={!isStepValid()} onClick={handleNext}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-stone-950 font-bold rounded-xl flex items-center gap-2 transition-all text-sm shadow-md cursor-pointer">
                    Weiter <ArrowRight size={16} />
                  </button>
                : <button type="submit" disabled={!isStepValid()}
                    className="px-8 py-3.5 bg-brand-blue-600 hover:bg-brand-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center gap-2 transition-all text-sm shadow-md cursor-pointer">
                    <Calendar size={16} /> Jetzt Termin anfragen
                  </button>}
            </div>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check size={32} strokeWidth={3} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-extrabold text-stone-900 tracking-tight">Anfrage eingegangen!</h3>
              <p className="text-stone-500 max-w-md mx-auto leading-relaxed">Vielen Dank, <strong className="text-stone-800">{formData.name}</strong>. Deine F.U.E.L.-Werte wurden übermittelt.</p>
            </div>
            <div className="bg-stone-50 max-w-sm mx-auto p-5 rounded-xl border border-stone-200 text-left space-y-3">
              <div className="text-xs uppercase font-mono font-bold tracking-wider text-amber-500">Reservierter Termin</div>
              <div className="flex items-center gap-2.5 text-stone-800 font-semibold text-sm"><Calendar size={18} className="text-stone-500" /><span>{formData.selectedDay}</span></div>
              <div className="flex items-center gap-2.5 text-stone-800 font-semibold text-sm"><Clock size={18} className="text-stone-500" /><span>{formData.selectedTimeSlot}</span></div>
              <div className="text-xs text-stone-500 border-t border-stone-200 pt-2 leading-relaxed">Wir rufen dich an oder senden dir den WhatsApp-Einwahllink direkt auf die Nummer <strong>{formData.phone}</strong>.</div>
            </div>
            <div className="pt-4">
              <button onClick={() => { setIsSubmitted(false); setStep(1); if (onClose) onClose(); }}
                className="px-6 py-2.5 border border-stone-200 hover:bg-stone-50 rounded-lg text-stone-600 font-medium transition-colors text-xs">
                Assistent schließen
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );

  if (isModal) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm" />
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="relative z-50 max-w-2xl w-full">
          {content}
        </motion.div>
      </div>
    );
  }

  return content;
}
