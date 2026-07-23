'use client'

import { useState } from 'react';
import { Flame, Moon, Heart, Dna, Utensils, Zap, ChevronRight, X, AlertTriangle, Lightbulb } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  mistake: string;
  solution: string;
  icon: React.ReactNode;
  bgGrad: string;
}

export default function Pillars() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const pillars: Pillar[] = [
    {
      id: 'weightloss',
      title: 'Langfristig Abnehmen',
      shortDesc: 'Gewichtsreduktion ohne Jo-Jo-Effekt durch tiefgreifende Gewohnheitsänderung.',
      longDesc: 'Schluss mit Crash-Diäten, die den Stoffwechsel ruinieren. Wir programmieren deinen Ernährungs- und Bewegungsalltag auf zellulärer Ebene um. So schmilzt überschüssiges Fett kontinuierlich, während deine vitale Muskelmasse erhalten bleibt.',
      mistake: 'Zu hohes Kaloriendefizit und exzessives Ausdauertraining zerstören Muskeln und drosseln die Schilddrüsenhormone.',
      solution: 'Proteindichte Mahlzeiten, kontrollierte Kraftimpulse und ein alltagstaugliches Essfenster ohne quälende Hungergefühle.',
      icon: <Flame className="w-6 h-6" />,
      bgGrad: 'from-orange-600/20 to-amber-600/5',
    },
    {
      id: 'sleep',
      title: 'Besserer Schlaf',
      shortDesc: 'Tiefe Regeneration. Schlafe durch und wache morgens voller Energie auf.',
      longDesc: 'Schlaf ist die stärkste legale Leistungsdroge der Welt. Wir analysieren deine Einschlafrituale, optimieren dein Schlafsetup und regulieren deine Melatonin-Ausschüttung, damit du echtes Tiefschlafniveau erreichst.',
      mistake: 'Abendlicher Blaulicht-Konsum, spätes Essen und mentale To-Do-Listen halten das sympathische Nervensystem blockiert.',
      solution: 'Ein 10-minütiges digitalfreies Abend-Herunterfahren, gezielte Atemzyklen und Magnesium-Optimierung vor dem Bettgehen.',
      icon: <Moon className="w-6 h-6" />,
      bgGrad: 'from-purple-600/20 to-indigo-600/5',
    },
    {
      id: 'wellbeing',
      title: 'Mehr Wohlbefinden',
      shortDesc: 'Dein Körper als Kraftwerk. Energie über den ganzen Tag ohne Leistungstiefs.',
      longDesc: 'Du fühlst dich steif, träge und ausgelaugt? Wir integrieren kurze, hochwirksame Mobilitätseinheiten und Entzündungshemmer im Alltag, damit deine Gelenke geschmeidig bleiben und du schmerzfreie Vitalität genießt.',
      mistake: 'Sitzblockaden werden ignoriert und am Wochenende durch Übertraining kompensiert – das fördert chronische Entzündungen.',
      solution: 'Mikro-Bewegungssnacks alle 90 Minuten und mikronährstoffreiche Nahrungsmittel für einen sauberen Darm.',
      icon: <Heart className="w-6 h-6" />,
      bgGrad: 'from-rose-600/20 to-red-600/5',
    },
    {
      id: 'hormones',
      title: 'Hormonbalance',
      shortDesc: 'Reguliere Testosteron, Cortisol und Schilddrüsenwerte für maximale Vitalität.',
      longDesc: 'Hormone steuern deine Fettverbrennung, deinen Muskelaufbau und deine Stimmung. Ein konstanter Stresspegel flutet deinen Körper mit Cortisol und schaltet dein Testosteron sowie deine Schilddrüse ab. Wir bringen dein Hormonsystem ins Gleichgewicht.',
      mistake: 'Unkontrollierter Kaffeekonsum auf nüchternen Magen pusht Cortisol und blockiert die Fettverbrennung im Bauchbereich.',
      solution: 'Stressreduzierende Kraftreize, gesunde Fette (Omega-3) als Hormonbausteine und gezieltes Coffein-Timing.',
      icon: <Dna className="w-6 h-6" />,
      bgGrad: 'from-blue-600/20 to-teal-600/5',
    },
    {
      id: 'nutrition',
      title: 'Gesunde Ernährung',
      shortDesc: 'Smarte Integration statt blindem Verzicht. Alltagskonzept für Genießer.',
      longDesc: 'Eine Ernährungsform ist nur dann brillant, wenn du sie unendlich lange durchhalten kannst. Wir kochen nicht kompliziert, sondern optimieren deine Lieblingsgerichte so, dass sie Sättigung und maximalen Nährstoffgehalt liefern.',
      mistake: 'Sich alles zu verbieten führt zu Heißhungerattacken und emotionalem Stress-Eating.',
      solution: 'Die 80/20-Regel: Basiere deine Ernährung auf unverarbeiteten Lebensmitteln, lass aber bewusst Raum für soziale Genussmomente.',
      icon: <Utensils className="w-6 h-6" />,
      bgGrad: 'from-emerald-600/20 to-green-600/5',
    },
    {
      id: 'energy',
      title: 'Energie & Vitalität',
      shortDesc: 'Power im Alltag. Gib im Beruf und privat kompromisslose 100%.',
      longDesc: 'Lerne, wie du dein neurologisches System auflädst. Wir kombinieren neuro-athletische Reize, Kältetherapie und energetisierende Atem-Frequenzen, um deine mitochondrialen Kraftwerke in Bestform zu versetzen.',
      mistake: 'Sich mit Zucker, Energydrinks und schnellen Kohlenhydraten mühsam durch den Tag zu hangeln.',
      solution: 'Aufbau mitochondrialer Belastbarkeit durch Intervallfasten, kurze intensive Cooldowns und gezieltes Krafttraining.',
      icon: <Zap className="w-6 h-6" />,
      bgGrad: 'from-yellow-600/20 to-amber-600/5',
    },
  ];

  return (
    <section id="features" className="py-24 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-[0.2em] font-bold">Die Säulen deines Erfolgs</span>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase mt-3 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            DEINE ABKÜRZUNG ZUR BESTFORM
          </h2>
          <div className="h-1 w-20 bg-[#FF5A1F] mx-auto mt-4 rounded-full" />
          <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed">
            Ein gesunder, starker Körper beruht nicht auf Glück. Er beruht auf einem koordinierten System. Klicke auf die Säulen, um das Insider-Wissen freizuschalten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setSelectedPillar(pillar)}
              className={`group cursor-pointer bg-gradient-to-br ${pillar.bgGrad} hover:from-stone-800/80 hover:to-stone-800/20 p-8 rounded-2xl border border-stone-800 hover:border-stone-700 transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-white/5 to-transparent rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-white/10 transition-colors" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-stone-950 text-[#FF5A1F] flex items-center justify-center mb-6 shadow-inner border border-stone-800 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-black text-xl text-white uppercase tracking-tight mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {pillar.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{pillar.shortDesc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF5A1F] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform mt-auto">
                <span>Details ansehen</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {selectedPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedPillar(null)}
          >
            <div
              className="bg-stone-900 border border-stone-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 border border-stone-800 text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] flex items-center justify-center shadow-lg">
                  {selectedPillar.icon}
                </div>
                <div>
                  <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-widest font-bold">Coaching Säule</span>
                  <h3 className="font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 text-stone-300 text-sm font-sans">
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-[#FF5A1F] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Wie wir vorgehen:</h4>
                  <p className="text-stone-300 leading-relaxed bg-stone-950/40 p-4 rounded-xl border border-stone-800">
                    {selectedPillar.longDesc}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest font-black mb-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Häufiger Fehler:</span>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">{selectedPillar.mistake}</p>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest font-black mb-1.5">
                      <Lightbulb className="w-4 h-4" />
                      <span>Eddy's Lösung:</span>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">{selectedPillar.solution}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-stone-500 text-xs font-mono">Hast du das Gefühl, dieser Fehler betrifft dich?</span>
                  <button
                    onClick={() => {
                      setSelectedPillar(null);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto bg-[#FF5A1F] hover:bg-[#e44e15] text-stone-950 font-black text-xs uppercase tracking-widest py-3 px-6 rounded-full transition-all"
                  >
                    Jetzt analysieren lassen
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
