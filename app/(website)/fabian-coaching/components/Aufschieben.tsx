'use client'

import { motion } from "motion/react";
import { Clock, Dumbbell, Plane, Flame, Zap, Sparkles, AlertCircle } from "lucide-react";
import { Barrier } from "../types";

export default function Aufschieben() {
  const barriers: Barrier[] = [
    {
      id: "ernaehrung",
      title: "1. 'Gesunde Ernährung ist zu aufwendig'",
      description: "Du denkst, du musst stundenlang in der Küche stehen oder kompliziertes Meal-Prep machen. Die F.U.E.L. Methode bietet dir restauranttaugliche Routinen & 5-Minuten-Strategien, die perfekt in jeden Terminkalender passen.",
      iconName: "clock"
    },
    {
      id: "training",
      title: "2. 'Ich habe keine Zeit für stundenlange Workouts'",
      description: "Du glaubst, du musst 5-mal pro Woche ins Fitnessstudio rennen. Unser hocheffizientes, wissenschaftliches Trainingskonzept benötigt nur 3x 45 Minuten pro Woche – für maximale hormonelle Stimulation bei minimalem Zeiteinsatz.",
      iconName: "gym"
    },
    {
      id: "reisen",
      title: "3. 'Geschäftsreisen & Termine ruinieren alles'",
      description: "Auswärts essen, späte Abend-Events und wenig Schlaf sabotieren dich. Wir designen für dich exakte 'Restaurant- & Hotel-Fahrpläne', mit denen du trotz dicker Partner-Menüs Fett verbrennst und energiegeladen aufwachst.",
      iconName: "plane"
    },
    {
      id: "hunger",
      title: "4. 'Der Heißhunger am Abend holt mich ein'",
      description: "Nach einem langen, anstrengenden Tag siegt die Erschöpfung und du plünderst den Kühlschrank. Durch gezielten Ausgleich von Nährstoff- und Hormondezifiten stoppen wir Heißhunger biochemisch – ganz ohne harte Willenskraft.",
      iconName: "flame"
    },
    {
      id: "aufschieben",
      title: "5. 'Ich mache es, wenn ich mehr Zeit habe...'",
      description: "Dieser 'perfekte Zeitpunkt' wird in deiner Position nie kommen. F.U.E.L. ist keine Diät, die zusätzliche Zeit frisst, sondern ein hocheffizientes Betriebssystem, das sich nahtlos, lautlos und ohne Reibung in deinen Full-Time-Job integriert.",
      iconName: "zap"
    },
    {
      id: "standard",
      title: "6. 'Bei mir funktioniert sowieso nichts dauerhaft'",
      description: "Weil du bisher Standard-Pläne 'von der Stange' befolgt hast. Dein Körper reagiert genetisch anders. Erst wenn wir deine Hormonwerte und DNS-Profile entschlüsseln, nimmt dein Körper fast wie von selbst ab.",
      iconName: "dna"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "clock": return <Clock size={20} style={{ color: '#c1a87b' }} />;
      case "gym": return <Dumbbell className="text-blue-400" size={20} />;
      case "plane": return <Plane className="text-purple-400" size={20} />;
      case "flame": return <Flame className="text-amber-500" size={20} />;
      case "zap": return <Zap className="text-yellow-400" size={20} />;
      case "dna": return <Sparkles className="text-emerald-400" size={20} />;
      default: return <AlertCircle size={20} style={{ color: '#c1a87b' }} />;
    }
  };

  return (
    <section id="methode" className="py-24 text-white relative" style={{ background: '#020617' }}>
      <div className="absolute top-0 inset-x-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0b0f19, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #162235, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-bold font-mono tracking-widest uppercase rounded border mb-4"
            style={{ background: 'rgba(193,168,123,0.1)', color: '#c1a87b', borderColor: 'rgba(193,168,123,0.2)' }}>
            Die 6 Ausreden & Die Realität
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans mb-4">
            Warum du das Abnehmen immer wieder aufschiebst
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Und wie wir diese Barrieren mit wissenschaftlicher Präzision ein für alle Mal aus dem Weg räumen.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barriers.map((bar, index) => (
            <motion.div
              key={bar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 border border-slate-900 hover:border-[#c1a87b]/20 rounded-xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              style={{ background: '#0e1624' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-950 rounded-lg shrink-0 border border-slate-800">
                    {getIcon(bar.iconName)}
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg leading-tight tracking-tight">
                    {bar.title.split("'")[0]}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 italic font-medium">
                  {bar.title.includes("'") ? `"${bar.title.split("'")[1]}"` : ""}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                  {bar.description}
                </p>
              </div>

              <div className="w-full h-[1px] mt-6"
                style={{ background: 'linear-gradient(to right, rgba(193,168,123,0.1), transparent)' }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
