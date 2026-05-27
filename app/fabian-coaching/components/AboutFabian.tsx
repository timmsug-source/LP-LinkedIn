'use client'

import { motion } from "motion/react";
import { Award, Check, X, Shield, BookOpen, UserCheck, Stethoscope } from "lucide-react";

interface AboutFabianProps {
  onOpenConsultation: () => void;
}

export default function AboutFabian({ onOpenConsultation }: AboutFabianProps) {
  const comparison = [
    {
      feature: "Ansatz",
      diet: "Standard-Verzichtspläne, Kalorienzählen, Low-Carb",
      fuel: "Biochemische Steuerung auf Basis von Hormonen & Genetik",
    },
    {
      feature: "Methodik",
      diet: "Stundenlanges Ausdauertraining & Quälerei",
      fuel: "3x 45 min hocheffiziente hormonelle Trainings-Reize",
    },
    {
      feature: "Auswärts Essen",
      diet: "Verbot von Restaurants, Wein & Geschäftsessen",
      fuel: "Gezielter Restaurant-Fahrplan ohne sozialen Verzicht",
    },
    {
      feature: "Nachhaltigkeit",
      diet: "Schneller Gewichtsverlust gefolgt von bitterem Jojo-Effekt",
      fuel: "Dauerhaft beschleunigter Stoffwechsel & Testosteron-Anstieg",
    }
  ];

  return (
    <section className="py-24 text-slate-900 relative" style={{ background: '#faf7f2' }}>
      <div className="absolute top-0 inset-x-0 h-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(2,6,23,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Explainer Block */}
        <div className="bg-white border rounded-3xl p-8 sm:p-12 shadow-xl mb-24 max-w-5xl mx-auto"
          style={{ borderColor: 'rgba(193,168,123,0.15)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded font-bold"
                style={{ background: 'rgba(193,168,123,0.1)', color: '#aa9163' }}>
                Erkenntnis des Tages
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
                Warum sich Abnehmen für dich bisher so schwer anfühlt:
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                Du bist weder faul noch disziplinlos. Du wurdest einfach jahrelang falsch beraten.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Klassische Diäten wie Kalorienzählen, extremes Low-Carb oder tägliches Ausdauersporteln bekämpfen nur oberflächliche Symptome. Gleichzeitig ruinieren sie jedoch deinen zellulären Stoffwechsel, drücken dein Testosteron und erzeugen Heißhunger.
              </p>
              <div className="p-4 bg-emerald-50 border border-emerald-500/10 rounded-xl text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-3">
                <Stethoscope size={20} className="text-emerald-600 shrink-0" />
                <span>F.U.E.L. setzt an der echten Ursache an: Deiner biochemischen Steuerung aus DNA, Hormonen und Mineralstoffen.</span>
              </div>
            </div>

            {/* Right: Parameter Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl text-white border relative overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #0e1624, #020617)', borderColor: 'rgba(193,168,123,0.15)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'rgba(193,168,123,0.1)', filter: 'blur(40px)' }} />

              <h4 className="font-bold text-sm sm:text-base text-white mb-4 flex items-center gap-2">
                <Shield size={18} style={{ color: '#c1a87b' }} />
                <span>Gesteuerte Parameter</span>
              </h4>

              <div className="space-y-4">
                {[
                  { title: "DNA-Genetik", desc: "Verstoffwechselst du Fette, Proteine oder Carbs besser?", value: "Aktiviert" },
                  { title: "Testosteron & DHEA", desc: "Zellulärer Fettabbau & Antrieb", value: "Optimiert" },
                  { title: "Schilddrüse & Leptin", desc: "Höhe deines Grundumsatzes", value: "Hoch" },
                  { title: "Mineralisches Gleichgewicht", desc: "Keine Schlaflosigkeit & Heißhunger", value: "Balanciert" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-900/40 border border-slate-800/80 rounded-xl p-3">
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-white leading-tight">{item.title}</p>
                      <p className="text-slate-400 text-[10px] mt-0.5">{item.desc}</p>
                    </div>
                    <span className="px-2 py-0.5 border rounded font-mono text-[9px] uppercase tracking-wider shrink-0 ml-3"
                      style={{ background: 'rgba(193,168,123,0.1)', color: '#c1a87b', borderColor: 'rgba(193,168,123,0.2)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* About Fabian */}
        <div id="about-fabian" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 max-w-5xl mx-auto">

          {/* Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 rounded-2xl transform rotate-3 scale-95 group-hover:rotate-1 transition-transform pointer-events-none"
              style={{ background: 'rgba(193,168,123,0.1)' }} />
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-950/10 shadow-xl bg-slate-300"
              style={{ aspectRatio: '3/4' }}>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                alt="Fabian Schönle - F.U.E.L. Gründer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-500"
                style={{ filter: 'grayscale(20%)' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900/10 text-slate-800 text-xs font-bold font-mono tracking-widest uppercase rounded">
              <UserCheck size={14} />
              <span>Dein Coach & Mentor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
              Fabian Schönle
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Als qualifizierter Experte für molekulare Biochemie, Hormonanalysen und personalisierte Sportwissenschaft unterstützt Fabian Schönle anspruchsvolle Männer wie dich.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Sein Coaching basiert nicht auf Diät-Moden, sondern auf logischer, biochemischer Evidenz. Durch die Kombination modernster Labordiagnostik mit hocheffizienter Alltagsorganisation sorgt er dafür, dass vielbeschäftigte Männer ihre sportlichen Höchstleistungen zurückgewinnen – nachhaltig, stressfrei und auf Autopilot.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Labordiagnostik", Icon: Stethoscope },
                { label: "Genetische Analysen", Icon: Award },
                { label: "Biohacking", Icon: BookOpen }
              ].map((cert, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center text-center shadow-sm">
                  <cert.Icon size={20} className="mb-1.5" style={{ color: '#aa9163' }} />
                  <span className="text-[10px] font-bold text-slate-800 tracking-tight">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 text-center mb-8 font-sans">
            Die F.U.E.L. Methode im direkten Vergleich
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Kategorie</th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-red-500 uppercase tracking-wider">Klassische Diät</th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-500/5">F.U.E.L. Methode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{row.diet}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-900 bg-emerald-500/5 font-semibold">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.fuel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
