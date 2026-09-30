'use client'
import { ActivePage } from '../types';
import { ShieldAlert, CheckCircle, ArrowRight, Award, ServerCrash, Layers, CalendarRange, Scale } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onSendRequestClick: () => void;
  onViewServicesClick: () => void;
}

export const Hero = ({ onSendRequestClick, onViewServicesClick }: { onSendRequestClick: () => void; onViewServicesClick: () => void }) => {
  const USP_ITEMS = [
    { text: 'Auditierten Gießereien & Schmiedewerken (ISO 9001, IATF 16949)' },
    { text: 'Druckprüfung, Röntgenprüfung & Zeugnisbelegung DIN EN 10204 3.1/3.2' },
    { text: 'Flexible Beschaffung (vom rohen Guss bis zum montagefertigen Teil)' }
  ];

  return (
    <section id="hero-section" className="relative overflow-hidden bg-slate-900 pb-20 pt-24 text-white">
      {/* Hero Industrial Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80" 
          alt="MBR GmbH Guss- und Schmiedeprodukte Background" 
          className="h-full w-full object-cover opacity-15 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlays to maintain superb text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-slate-950/80" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-0" />
      
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] z-0" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase border border-blue-500/20">
              <Award className="h-3.5 w-3.5" /> Strategische Beschaffung
            </span>
            
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
              Globaler Einkauf von <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Industriegütern</span> für den Mittelstand
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              MBR bietet kosteneffiziente Beschaffung direkt aus auditierten asiatischen Produktionsstätten. 
              Von Gussgehäusen der DIN EN Werkstoffklassen bis hin zu hochpräzisen Schmiedeprodukten – wir sichern Ihre Lieferkette wirtschaftlich ab.
            </p>

            {/* List USP */}
            <ul className="mt-8 space-y-3.5">
              {USP_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-slate-200 text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                id="hero-cta-primary"
                onClick={onSendRequestClick}
                className="group inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-3.5 font-display text-sm font-semibold text-white shadow-xl shadow-blue-900/30 transition-all hover:bg-blue-500 active:scale-98"
              >
                Anfrage senden 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                id="hero-cta-secondary"
                onClick={onViewServicesClick}
                className="inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-800/80 px-6 py-3.5 font-display text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
              >
                Leistungen ansehen
              </button>
            </div>
          </div>

          {/* Premium Industrial Stats / Cards Block */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-8 backdrop-blur-md shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-slate-600 pointer-events-none uppercase">
                Zertifiziertes QM-System
              </div>
              <h3 className="font-display text-lg font-bold text-white border-b border-slate-800 pb-4">
                Technische Leistungskenngrößen
              </h3>
              
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-slate-900 text-blue-400 border border-slate-800">
                    <CalendarRange className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xl font-bold text-white">15+ Jahre</div>
                    <p className="text-xs text-slate-400">Erfolgreiches Lieferanten-Management</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-slate-900 text-blue-400 border border-slate-800">
                    <Scale className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xl font-bold text-white">Bis 12 Tonnen</div>
                    <p className="text-xs text-slate-400">Maximales Stückgewicht im Sandgussverfahren</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-slate-900 text-blue-400 border border-slate-800">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xl font-bold text-white">5 Werkstoffhauptklassen</div>
                    <p className="text-xs text-slate-400">Edelstahlguss, Grauguss, Sphäroguss, Alu, Schmiedestück</p>
                  </div>
                </div>
              </div>

              {/* Dynamic trust rating */}
              <div className="mt-8 rounded bg-slate-900/50 p-4 border border-slate-900/85">
                <p className="text-[11px] font-mono leading-relaxed text-slate-400 uppercase tracking-wider">
                  Garantierte Konformität
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Prüfgrundlagen nach DIN, EN, ISO, ASTM mit vollständiger Erstellung von Abnahmeprüfzeugnissen (APZ 3.1 & 3.2).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
