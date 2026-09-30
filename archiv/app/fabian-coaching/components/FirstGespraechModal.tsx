'use client'

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Target, Briefcase, Zap, Flame, Sparkles, Send } from "lucide-react";

interface FirstGespraechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FirstGespraechModal({ isOpen, onClose }: FirstGespraechModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    profession: "",
    challenge: "",
    name: "",
    email: "",
    phone: "",
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setStep(1);
    setFormData({ goal: "", profession: "", challenge: "", name: "", email: "", phone: "", termsAccepted: false });
    setIsSubmitted(false);
  };

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.termsAccepted) return;
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        id="modal-overlay"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={(e) => {
          if ((e.target as HTMLElement).id === "modal-overlay") {
            onClose();
            setTimeout(resetForm, 300);
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl border"
          style={{ background: '#0e1624', borderColor: 'rgba(193,168,123,0.2)' }}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800">
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${isSubmitted ? 100 : (step / 4) * 100}%`,
                background: 'linear-gradient(to right, #c1a87b, #0ea5e9)'
              }}
            />
          </div>

          {/* Close */}
          <button
            onClick={() => { onClose(); setTimeout(resetForm, 300); }}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          <div className="p-6 sm:p-8 pt-10">
            {!isSubmitted ? (
              <div>
                <span className="inline-block px-2.5 py-1 mb-2 text-[10px] font-mono tracking-widest uppercase border rounded-full"
                  style={{ color: '#c1a87b', background: 'rgba(193,168,123,0.1)', borderColor: 'rgba(193,168,123,0.2)' }}>
                  Schritt {step} von 4
                </span>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-sans">
                        Was ist dein primäres Ziel mit F.U.E.L.?
                      </h3>
                      <p className="text-slate-400 text-sm mb-6">Wähle das Ziel, das aktuell die höchste Priorität für dich hat.</p>
                      <div className="space-y-3">
                        {[
                          { id: "fat", label: "15-20 kg reines Körperfett reduzieren", sub: "Nachhaltig & ohne Diät-Quälerei", Icon: Flame },
                          { id: "performance", label: "Fokus & sexuelle / athletische Performance", sub: "Testosteron & Hormon-Optimierung", Icon: Zap },
                          { id: "routine", label: "Wieder einen fitten & definierten Körper", sub: "Beruf & Familie perfekt integriert", Icon: Target },
                          { id: "energy", label: "Ernährung & Training auf Autopilot", sub: "Durch präzise Blut- & DNA-Analysen", Icon: Sparkles }
                        ].map((opt) => (
                          <button key={opt.id} onClick={() => handleSelect("goal", opt.label)}
                            className={`w-full flex items-start gap-4 p-4 text-left border rounded-xl transition-all duration-200 group ${formData.goal === opt.label ? "border-[#c1a87b] bg-[#c1a87b]/5" : "border-slate-800 hover:border-slate-700 bg-slate-900/60"}`}>
                            <div className="p-2 bg-slate-800 group-hover:bg-[#c1a87b]/10 rounded-lg transition-colors" style={{ color: '#c1a87b' }}>
                              <opt.Icon size={18} />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white text-sm sm:text-base">{opt.label}</p>
                              <p className="text-slate-400 text-xs mt-0.5">{opt.sub}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-sans">
                        Was beschreibt deine berufliche Situation am besten?
                      </h3>
                      <p className="text-slate-400 text-sm mb-6">Die F.U.E.L. Methode ist speziell für hohe Workloads optimiert.</p>
                      <div className="space-y-3">
                        {[
                          { id: "entrepreneur", label: "Unternehmer / Inhaber", sub: "Hohe Verantwortung, wenig Freizeit" },
                          { id: "executive", label: "Führungskraft / Manager C-Level", sub: "Tägliche Deadlines, Business-Reisen" },
                          { id: "self-employed", label: "Selbstständiger / Freiberufler", sub: "Flexibel, aber oft unter Strom und Zeitmangel" },
                          { id: "other", label: "Andere anspruchsvolle Tätigkeit", sub: "Wenig Zeit für komplizierte Meal-Prep" }
                        ].map((opt) => (
                          <button key={opt.id} onClick={() => handleSelect("profession", opt.label)}
                            className={`w-full flex items-start gap-4 p-4 text-left border rounded-xl transition-all duration-200 group ${formData.profession === opt.label ? "border-[#c1a87b] bg-[#c1a87b]/5" : "border-slate-800 hover:border-slate-700 bg-slate-900/60"}`}>
                            <div className="p-2 bg-slate-800 group-hover:bg-[#c1a87b]/10 rounded-lg transition-colors" style={{ color: '#c1a87b' }}>
                              <Briefcase size={18} />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white text-sm sm:text-base">{opt.label}</p>
                              <p className="text-slate-400 text-xs mt-0.5">{opt.sub}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setStep(1)} className="mt-6 text-xs text-slate-400 hover:text-white transition-colors underline decoration-dotted">
                        Zurück zu Schritt 1
                      </button>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-sans">
                        Was bremst dich beim Abnehmen bisher am meisten aus?
                      </h3>
                      <p className="text-slate-400 text-sm mb-6">Wir gestalten deinen Fahrplan maßgeschneidert auf diesen Engpass.</p>
                      <div className="space-y-3">
                        {[
                          { id: "time", label: "Zeitmangel & Stress im Alltag", sub: "Keine Kapazitäten für stundenlanges Kochen oder Gym", Icon: Zap },
                          { id: "travel", label: "Geschäftsreisen / Auswärts essen", sub: "Häufiges Restaurant-Essen oder Hotels sabotieren Erfolge", Icon: Briefcase },
                          { id: "sleep", label: "Schlechte Regeneration & Schlafstörungen", sub: "Morgens müde, mittags Heißhunger, abends energielos", Icon: Sparkles },
                          { id: "yo-yo", label: "Jojo-Effekte & Verzicht-Diäten", sub: "Funktioniert kurzfristig, scheitert jedoch langfristig im Alltag", Icon: Target }
                        ].map((opt) => (
                          <button key={opt.id} onClick={() => handleSelect("challenge", opt.label)}
                            className={`w-full flex items-start gap-4 p-4 text-left border rounded-xl transition-all duration-200 group ${formData.challenge === opt.label ? "border-[#c1a87b] bg-[#c1a87b]/5" : "border-slate-800 hover:border-slate-700 bg-slate-900/60"}`}>
                            <div className="p-2 bg-slate-800 group-hover:bg-[#c1a87b]/10 rounded-lg transition-colors" style={{ color: '#c1a87b' }}>
                              <opt.Icon size={18} />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white text-sm sm:text-base">{opt.label}</p>
                              <p className="text-slate-400 text-xs mt-0.5">{opt.sub}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setStep(2)} className="mt-6 text-xs text-slate-400 hover:text-white transition-colors underline decoration-dotted">
                        Zurück zu Schritt 2
                      </button>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-1 font-sans">Fast geschafft!</h3>
                      <p className="text-slate-400 text-sm mb-6">
                        Wohin dürfen wir deine Analyseergebnisse senden und auf welcher Nummer erreichen wir dich für die Terminabstimmung?
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Dein vollständiger Name</label>
                          <input type="text" required placeholder="Z.B. Dr. Michael Schmidt"
                            value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 hover:border-slate-700 focus:border-[#c1a87b] focus:outline-none rounded-xl text-white placeholder-slate-500 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Deine geschäftliche E-Mail-Adresse</label>
                          <input type="email" required placeholder="schmidt@unternehmen.de"
                            value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 hover:border-slate-700 focus:border-[#c1a87b] focus:outline-none rounded-xl text-white placeholder-slate-500 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Deine Telefonnummer</label>
                          <input type="tel" required placeholder="+49 (0) 170 1234567"
                            value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 hover:border-slate-700 focus:border-[#c1a87b] focus:outline-none rounded-xl text-white placeholder-slate-500 transition-colors" />
                        </div>
                        <div className="flex items-start gap-3 pt-2">
                          <input type="checkbox" id="terms" required checked={formData.termsAccepted}
                            onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                            className="mt-1" style={{ accentColor: '#c1a87b' }} />
                          <label htmlFor="terms" className="text-xs text-slate-400 leading-tight">
                            Ich stimme der Verarbeitung meiner Daten zu, um mein kostenloses Erstgespräch mit Fabian Schönle vorzubereiten. Die Daten werden vertraulich behandelt.
                          </label>
                        </div>
                        <button type="submit" disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 mt-6 py-4 text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer text-sm sm:text-base disabled:opacity-50"
                          style={{ background: isSubmitting ? '#1e293b' : 'linear-gradient(to right, #0ea5e9, #3b82f6)' }}>
                          {isSubmitting ? (
                            <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                          ) : (
                            <>
                              <Send size={18} />
                              <span>Jetzt kostenfreies Erstgespräch sichern →</span>
                            </>
                          )}
                        </button>
                      </form>
                      <button onClick={() => setStep(3)} className="mt-4 text-xs text-slate-400 hover:text-white transition-colors underline decoration-dotted block">
                        Zurück zu Schritt 3
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-4">
                  <Check size={30} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">Anfrage erfolgreich gesendet!</h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                  Vielen Dank, <span className="font-semibold text-white">{formData.name}</span>. Wir haben deine Antworten zur{" "}
                  <span className="font-semibold" style={{ color: '#c1a87b' }}>F.U.E.L. Methode</span> erhalten.
                </p>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-left text-xs text-slate-400 space-y-2 mb-6">
                  <p className="font-semibold text-slate-200">Nächste Schritte:</p>
                  <p>1. Ein F.U.E.L. Experte prüft deine Angaben auf Basis deines Ziels (<span className="text-slate-200">{formData.goal}</span>).</p>
                  <p>2. Wir melden uns auf <span className="text-slate-200">{formData.phone}</span> in den nächsten 24-48 Stunden.</p>
                  <p>3. Wir fixieren einen Termin für deine kostenfreie biochemische Ist-Stands-Analyse.</p>
                </div>
                <button onClick={() => { onClose(); setTimeout(resetForm, 300); }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors border border-slate-700">
                  Modal Schließen
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
