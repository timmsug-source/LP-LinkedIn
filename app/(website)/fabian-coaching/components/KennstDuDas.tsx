'use client'

import { motion } from "motion/react";
import { Coffee, HeartPulse, TrendingDown, Users, AlertCircle } from "lucide-react";
import { PainPoint } from "../types";

export default function KennstDuDas() {
  const painPoints: PainPoint[] = [
    {
      id: "leistung",
      title: "Leistungsabfall & Müdigkeit",
      description: "Nachmittags sinkt deine Konzentration massiv in den Keller. Heißhungerattacken kicken ein und du brauchst den 4. Kaffee, um überhaupt arbeitsfähig zu bleiben.",
      iconName: "coffee"
    },
    {
      id: "bauch",
      title: "Der 'Unternehmer-Bauch'",
      description: "Du blickst in den Spiegel und stellst fest, dass das Hemd spannt. Der klassische stressbedingte 'Wohlstandsbauch' stört dich nicht nur optisch, sondern senkt auch dein Selbstbewusstsein.",
      iconName: "bauch"
    },
    {
      id: "werte",
      title: "Warnsignale deines Körpers",
      description: "Dein Arzt warnt dich vor schlechten Cholesterinwerten, Bluthochdruck oder sinkendem Testosteron. Du realisierst: Dein Körper sendet erste ernstzunehmende Alarmsignale.",
      iconName: "heart"
    },
    {
      id: "familie",
      title: "Die Familie bekommt nur die Reste",
      description: "Nach einem 12-Stunden-Arbeitstag fehlt dir jede Energie. Du schleppst dich lethargisch nach Hause und bist für deine Familie nicht mehr der präsente Ehemann und Vater, der du sein willst.",
      iconName: "users"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "coffee": return <Coffee className="text-amber-400" size={24} />;
      case "bauch": return <TrendingDown className="text-rose-400" size={24} />;
      case "heart": return <HeartPulse className="text-red-400" size={24} />;
      case "users": return <Users className="text-sky-400" size={24} />;
      default: return <AlertCircle size={24} style={{ color: '#c1a87b' }} />;
    }
  };

  return (
    <section id="symptome" className="py-24 text-white relative overflow-hidden" style={{ background: '#0b0f19' }}>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold font-mono tracking-widest uppercase rounded border border-red-500/25 mb-4">
            Die Bestandsaufnahme
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans mb-4">
            Hand aufs Herz: Kennst du das auch?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Die meisten erfolgreichen Männer opfern unbewusst ihre Gesundheit für das Business – bis der Körper die Notbremse zieht.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 border border-slate-800/80 hover:border-[#c1a87b]/25 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col sm:flex-row gap-5"
              style={{ background: '#0e1624' }}
            >
              <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(193,168,123,0.05), transparent)' }} />

              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                {getIcon(point.iconName)}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#c1a87b] transition-colors font-sans">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notice Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl border border-amber-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5"
          style={{ background: 'linear-gradient(to right, rgba(245,158,11,0.1), rgba(217,119,6,0.05), transparent)' }}>
          <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl text-amber-400">
            <AlertCircle size={28} />
          </div>
          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-1">Wichtiger Hinweis:</h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Ignorieren beschleunigt den Hormonverfall. Ab 30 sinkt das biologisch freie Testosteron beim Mann jährlich um ca. 1-2%. Die F.U.E.L. Methode greift durch bio-identische Steuerung gezielt ein.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
