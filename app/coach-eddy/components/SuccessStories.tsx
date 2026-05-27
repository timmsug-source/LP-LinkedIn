'use client'

import { useState, useRef } from 'react';
import {
  ArrowLeftRight, Sparkles, ArrowUpRight, Flame,
} from 'lucide-react';

interface SliderProps {
  id: string;
  title: string;
  sub: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  metricVal?: string;
  details: string[];
}

function BeforeAfterSlider({ title, sub, beforeImg, afterImg, beforeLabel, afterLabel, metricVal, details }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="bg-[#0f0d0c] rounded-3xl border border-stone-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/25 transition-all duration-300 shadow-xl group">
      <div>
        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-[#FF5A1F] font-mono text-[10px] uppercase tracking-widest font-bold">Transformation</span>
            </div>
            <h4 className="text-white font-black text-xl uppercase tracking-tight mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h4>
            <p className="text-stone-400 text-xs mt-0.5">{sub}</p>
          </div>
          {metricVal && (
            <div className="bg-orange-600/10 border border-orange-500/30 text-[#FF5A1F] px-4 py-1.5 rounded-2xl font-mono text-xs font-black tracking-wider flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              <span>{metricVal}</span>
            </div>
          )}
        </div>

        <div
          ref={containerRef}
          className="relative h-96 w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-stone-800 group-hover:border-stone-700 transition-colors"
          onMouseMove={(e) => { if (e.buttons === 1) handleMove(e.clientX); }}
          onTouchMove={(e) => { if (e.touches[0]) handleMove(e.touches[0].clientX); }}
        >
          <div className="absolute inset-0 w-full h-full">
            <img src={beforeImg} alt="Vorher" className="w-full h-full object-cover" style={{ filter: 'brightness(0.75)' }} referrerPolicy="no-referrer" />
            <div className="absolute top-4 left-4 bg-stone-950/95 backdrop-blur-md border border-stone-800/60 px-3 py-1 rounded-xl text-[10px] font-mono uppercase text-stone-500 font-bold tracking-wider">
              {beforeLabel}
            </div>
          </div>

          <div
            className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img src={afterImg} alt="Nachher" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute top-4 left-4 bg-orange-600/90 border border-orange-500 px-3 py-1 rounded-xl text-[10px] font-mono uppercase text-white font-black tracking-wider z-20 shadow-md">
              {afterLabel}
            </div>
          </div>

          <div className="absolute top-0 bottom-0 w-[2px] bg-orange-500 z-30 pointer-events-none" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-600 border-2 border-white text-white flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <p className="text-[10px] text-stone-500 text-center font-mono uppercase mt-3 tracking-widest">
          ↔️ Wische oder ziehe für den Direktvergleich
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-stone-900 grid grid-cols-2 gap-2 text-left">
        {details.map((det, idx) => (
          <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-950/60 border border-stone-900 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="font-black text-stone-300" style={{ fontFamily: "'Outfit', sans-serif" }}>{det}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const sliders: SliderProps[] = [
    {
      id: 'vanessa',
      title: 'Vanessa (@angrygermangirl)',
      sub: 'Diätresistenz durchbrochen & Lebensgefühl zurückerlangt',
      beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
      afterImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
      beforeLabel: 'Vorher (102 KG)',
      afterLabel: 'Nachher (86 KG) • Stolz 😍',
      metricVal: '-16 KILO',
      details: ['Taille: -9 cm', 'Hüfte: -4 cm', 'Oberschenkel: -3 cm', 'Hormone reguliert'],
    },
    {
      id: 'dennis',
      title: 'Dennis (Rücken-Stabilität)',
      sub: 'Körperfett abgebaut & Haltung massiv gestärkt',
      beforeImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
      afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
      beforeLabel: 'Davor (Schwach)',
      afterLabel: 'Danach (-10 KG) • Definition',
      metricVal: '-10 KG',
      details: ['Rücken gestärkt', 'Kraftaufbau', 'Bauchfett attackiert', 'Haltung aufrecht'],
    },
  ];

  return (
    <section id="successes" className="py-24 bg-stone-950 relative overflow-hidden border-b border-stone-900">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(255,90,31,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span className="text-[#FF5A1F] font-mono text-[10px] uppercase tracking-wider font-bold">Echte Transformationen</span>
          </div>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            KUNDENERFOLGE & VERLÄUFE
          </h2>
          <div className="h-[2px] w-24 bg-orange-600 rounded mx-auto mt-4" />
          <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Wissenschaftlich fundierter Progress statt leerer Versprechungen. Hier siehst du die echten Ergebnisse und den authentischen Chat-Austausch direkt nach unseren Coaching-Erfolgen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {sliders.map((slider) => (
            <BeforeAfterSlider key={slider.id} {...slider} />
          ))}
        </div>

        {/* WhatsApp Chats – echte Screenshots */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-stone-500 font-mono text-xs uppercase tracking-[0.2em] font-bold">Unzensiertes WhatsApp & Chat-Feedback</span>
            <div className="h-[1px] w-12 bg-stone-800 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {/* Screenshot 1: Yasmin */}
            <div className="w-full max-w-xs flex flex-col items-center gap-3">
              <div className="w-full rounded-lg overflow-hidden border border-stone-800/60 shadow-md">
                <img
                  src="/IMG_2229-300x537.png"
                  alt="WhatsApp Feedback – Yasmin, Düsseldorf"
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-stone-400 font-mono text-[10px] uppercase tracking-widest">Yasmin · Düsseldorf</span>
              </div>
            </div>

            {/* Screenshot 2: Zufriedener Kunde */}
            <div className="w-full max-w-xs flex flex-col items-center gap-3">
              <div className="w-full rounded-lg overflow-hidden border border-stone-800/60 shadow-md">
                <img
                  src="/IMG_2234-300x537.png"
                  alt="WhatsApp Feedback – Zufriedener Kunde, InBody"
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-stone-400 font-mono text-[10px] uppercase tracking-widest">Zufriedener Kunde · InBody</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2.5 bg-white hover:bg-stone-100 text-stone-950 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span>Jetzt eigene Erfolgsgeschichte starten</span>
            <ArrowUpRight className="w-[18px] h-[18px] text-orange-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
