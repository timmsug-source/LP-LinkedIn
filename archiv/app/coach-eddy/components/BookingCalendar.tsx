'use client'

import { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, User, Mail, Target, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Appointment } from '../types';

interface BookingCalendarProps {
  onAppointmentBooked: (appointment: Appointment) => void;
  activeAppointment: Appointment | null;
}

export default function BookingCalendar({ onAppointmentBooked, activeAppointment }: BookingCalendarProps) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [dates, setDates] = useState<{ dayName: string; dateStr: string; rawDate: string }[]>([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', mainGoal: 'weightloss', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const list = [];
    const weekdays = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      if (d.getDay() === 0) continue;
      let label = i === 0 ? 'Heute' : i === 1 ? 'Morgen' : weekdays[d.getDay()];
      list.push({
        dayName: label,
        dateStr: d.toLocaleDateString('de-DE', { day: 'numeric', month: 'short' }),
        rawDate: d.toISOString().split('T')[0],
      });
    }
    setDates(list);
  }, []);

  const timeSlots = [
    { time: '09:30', label: 'Morgenslot' },
    { time: '11:00', label: 'Vormittag' },
    { time: '14:00', label: 'Nachmittag' },
    { time: '16:30', label: 'Spätnachmittag' },
    { time: '18:00', label: 'Feierabend (Beliebt)', popular: true },
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!selectedTime) { setErrorMsg('Bitte wähle zuerst eine Uhrzeit für dein Gespräch aus.'); return; }
    if (!form.name.trim()) { setErrorMsg('Bitte gib deinen Namen an.'); return; }
    if (!form.phone.trim()) { setErrorMsg('Bitte gib deine Telefonnummer an, damit Eddy dich anrufen kann.'); return; }
    if (!form.email.trim() || !form.email.includes('@')) { setErrorMsg('Bitte gib eine gültige E-Mail Adresse an.'); return; }
    setIsSubmitting(true);
    setTimeout(() => {
      const appt: Appointment = {
        id: 'appt_' + Date.now(),
        date: dates[selectedDateIndex]?.rawDate || '',
        time: selectedTime,
        name: form.name,
        email: form.email,
        phone: form.phone,
        mainGoal: form.mainGoal,
        notes: form.notes,
      };
      onAppointmentBooked(appt);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="booking" className="py-24 bg-stone-950 border-t border-stone-900 relative">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A1F]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-[0.2em] font-bold">Direkter Draht</span>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase mt-3 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            DEIN KOSTENLOSES ERSTGESPRÄCH
          </h2>
          <div className="h-1 w-20 bg-[#FF5A1F] mx-auto mt-4 rounded-full" />
          <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Sichere dir einen der wenigen freien Plätze für diese Woche. Dauer: 15-20 Minuten. 100% kostenlos und unverbindlich.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-stone-900 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl">
          {activeAppointment ? (
            <div className="p-8 sm:p-12 text-center space-y-6 flex flex-col items-center animate-scale-up">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-900/10">
                <CheckCircle2 className="w-10 h-10 animate-scale-up" />
              </div>
              <div className="space-y-2">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] font-black">Erfolgreich Gebucht!</span>
                <h3 className="font-black text-2xl sm:text-3xl text-white uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  DEIN NEUSTART IST GEPLANT
                </h3>
                <p className="text-[#FF5A1F] font-mono text-sm uppercase tracking-wide font-black">
                  {new Date(activeAppointment.date).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })} um {activeAppointment.time} Uhr
                </p>
              </div>
              <div className="max-w-md p-5 rounded-2xl bg-stone-950 border border-stone-800 text-stone-300 text-xs sm:text-sm font-sans leading-relaxed text-left space-y-3">
                <p className="font-bold text-center text-white mb-2 pb-2 border-b border-stone-900">⚠️ WICHTIGE HINWEISE VON EDDY</p>
                <p>1. <strong>Telefon parat legen:</strong> Eddy ruft dich persönlich unter <strong>{activeAppointment.phone}</strong> an.</p>
                <p>2. <strong>Stift & Zettel bereitlegen:</strong> Wir steigen direkt tief in deinen Tagesablauf ein. Schreib dir deine Fragen auf.</p>
                <p>3. <strong>Pünktlichkeit:</strong> Meine Zeit ist kostbar und deine auch. Sei bitte pünktlich erreichbar.</p>
              </div>
              <p className="italic text-stone-400 text-xs font-sans max-w-sm">"Ich freue mich darauf, deine Geschichte zu hören. Wir sprechen uns bald." — Eddy</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Date & Time */}
              <div className="lg:col-span-6 bg-stone-950 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-stone-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#FF5A1F]">
                    <span className="w-6 h-6 rounded-full bg-orange-600/10 font-mono text-xs font-black flex items-center justify-center border border-orange-500/20">1</span>
                    <h4 className="font-black text-xs uppercase tracking-widest text-[#FF5A1F]" style={{ fontFamily: "'Outfit', sans-serif" }}>Datum Wählen</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {dates.map((d, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => { setSelectedDateIndex(index); setSelectedTime(null); }}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDateIndex === index
                            ? 'bg-stone-100 border-white text-stone-950 font-bold'
                            : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">{d.dayName}</span>
                        <span className="text-sm font-black mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{d.dateStr}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-2 text-[#FF5A1F]">
                    <span className="w-6 h-6 rounded-full bg-orange-600/10 font-mono text-xs font-black flex items-center justify-center border border-orange-500/20">2</span>
                    <h4 className="font-black text-xs uppercase tracking-widest text-[#FF5A1F]" style={{ fontFamily: "'Outfit', sans-serif" }}>Uhrzeit Wählen</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedTime(slot.time)}
                        className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all text-xs font-sans cursor-pointer ${
                          selectedTime === slot.time
                            ? 'bg-gradient-to-r from-orange-600 to-amber-600 border-orange-500 text-stone-950 font-black shadow-lg'
                            : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
                        }`}
                      >
                        <span className="flex items-center gap-2 font-mono">
                          <Clock className="w-4 h-4 text-stone-500" />
                          {slot.time} Uhr
                        </span>
                        <span className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${
                          selectedTime === slot.time ? 'bg-stone-950 text-[#FF5A1F]' : slot.popular ? 'bg-orange-600/10 text-[#FF5A1F]' : 'bg-stone-950/40 text-stone-500'
                        }`}>
                          {slot.popular ? 'Empfohlen' : slot.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <form onSubmit={handleBook} className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#FF5A1F]">
                    <span className="w-6 h-6 rounded-full bg-orange-600/10 font-mono text-xs font-black flex items-center justify-center border border-orange-500/20">3</span>
                    <h4 className="font-black text-xs uppercase tracking-widest text-[#FF5A1F]" style={{ fontFamily: "'Outfit', sans-serif" }}>Deine Kontaktdaten</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="w-[18px] h-[18px] text-stone-500 absolute left-3 top-3.5" />
                      <input type="text" placeholder="Dein Vor- und Nachname" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl h-11 pl-10 pr-4 text-xs font-sans text-white placeholder-stone-600 focus:outline-none focus:border-[#FF5A1F] transition-all" required />
                    </div>
                    <div className="relative">
                      <Mail className="w-[18px] h-[18px] text-stone-500 absolute left-3 top-3.5" />
                      <input type="email" placeholder="Deine E-Mail Adresse" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl h-11 pl-10 pr-4 text-xs font-sans text-white placeholder-stone-600 focus:outline-none focus:border-[#FF5A1F] transition-all" required />
                    </div>
                    <div className="relative">
                      <Phone className="w-[18px] h-[18px] text-stone-500 absolute left-3 top-3.5" />
                      <input type="tel" placeholder="Deine Telefonnummer (für Eddy's Anruf)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl h-11 pl-10 pr-4 text-xs font-sans text-white placeholder-stone-600 focus:outline-none focus:border-[#FF5A1F] transition-all" required />
                    </div>
                    <div className="relative">
                      <Target className="w-[18px] h-[18px] text-stone-500 absolute left-3 top-3.5" />
                      <select value={form.mainGoal} onChange={(e) => setForm({ ...form, mainGoal: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl h-11 pl-10 pr-4 text-xs font-sans text-white focus:outline-none focus:border-[#FF5A1F] appearance-none cursor-pointer transition-all">
                        <option value="weightloss">Langfristig Abnehmen & Körperfett reduzieren</option>
                        <option value="sleep">Schlaftiefe & Regeneration maximieren</option>
                        <option value="hormones">Hormonbalance (Testosteron-Anstieg)</option>
                        <option value="energy">Mehr Lebensenergie im Joballtag</option>
                      </select>
                      <div className="absolute right-3 top-4 pointer-events-none text-stone-500 text-[10px] font-mono">▼</div>
                    </div>
                    <textarea placeholder="Optionale Anmerkung (Wo stehst du gerade?)" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs font-sans text-white placeholder-stone-600 h-20 resize-none focus:outline-none focus:border-[#FF5A1F] transition-all" />
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/20 border border-red-900/40 rounded-xl flex items-center gap-2 text-red-400 text-xs font-sans">
                    <ShieldAlert className="w-[18px] h-[18px] flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-[#FF5A1F] hover:bg-orange-600 text-stone-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}>
                    <span>{isSubmitting ? 'Wird gesendet...' : 'Gratis Erstgespräch Sichern'}</span>
                  </button>
                  <p className="text-center text-[10px] text-stone-500 mt-2 font-mono uppercase tracking-wider">
                    🔒 Deine Daten sind zu 100% verschlüsselt & geschützt
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
