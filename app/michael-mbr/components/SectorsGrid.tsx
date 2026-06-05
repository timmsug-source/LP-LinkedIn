'use client'
import { motion, type Variants } from 'motion/react';
import { SECTORS_DATA } from '../data';
import { Wrench, Cpu, Anchor, Factory, ShieldCheck } from 'lucide-react';

export const SectorsGrid = () => {
  const getIcon = (iconName: string, className: string = 'h-6 w-6 text-blue-600') => {
    switch (iconName) {
      case 'Wrench': return <Wrench className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Anchor': return <Anchor className={className} />;
      case 'Factory': return <Factory className={className} />;
      default: return <Factory className={className} />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:grid-cols-2"
      id="sectors-grid-container"
    >
      {SECTORS_DATA.map((sector) => (
        <motion.div
          key={sector.id}
          variants={itemVariants}
          id={`sector-card-${sector.id}`}
          className="bg-white border border-slate-200/80 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 relative overflow-hidden group"
        >
          {/* subtle ambient graphic on hover */}
          <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 bg-gradient-to-br from-blue-50 to-indigo-50/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10">
            {/* Sector Image Banner */}
            <div className="relative h-48 w-full overflow-hidden rounded-lg mb-6 border border-slate-100 shadow-sm">
              <img 
                src={sector.imageUrl} 
                alt={sector.titleDe} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Header / Meta */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 border border-blue-100 p-2.5 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                  {getIcon(sector.iconName)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base md:text-lg text-slate-900">
                    {sector.titleDe}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block mt-0.5">
                    Modul ID: MBR-SEC-{sector.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-5 space-y-4">
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                {sector.description}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sector.details}
              </p>
            </div>

            {/* Normen / Standards */}
            <div className="mt-6 pt-5 border-t border-slate-100/80">
              <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                Zertifizierungs- & Prüfstandards:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {sector.standards.map((std, i) => (
                  <span 
                    key={i} 
                    className="rounded bg-slate-50 border border-slate-200/50 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-700"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Features checkmarks */}
            <div className="mt-6 pt-5 border-t border-slate-100/80">
              <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Besondere Qualitätsmerkmale:
              </span>
              <ul className="space-y-1.5">
                {sector.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer of the box */}
          <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center justify-between text-[10px] text-slate-400 font-mono relative z-10">
            <span>Lieferform: Roh / Einbaufertig</span>
            <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform duration-200">
              ISO 9001 QS ★
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
