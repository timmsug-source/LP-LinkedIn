'use client'

import { useState, useRef } from 'react';
import {
  ArrowLeftRight, CheckCheck, Star, Smartphone,
  Sparkles, ArrowUpRight, Flame, Camera, Plus, Mic, ShieldCheck, Heart
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

        {/* WhatsApp Chats */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="text-center mb-10">
            <span className="text-stone-500 font-mono text-xs uppercase tracking-[0.2em] font-bold">Unzensiertes WhatsApp & Chat-Feedback</span>
            <div className="h-[1px] w-12 bg-stone-800 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chat 1: Yasmin */}
            <div className="bg-[#0b141a] rounded-3xl border border-[#202c33] overflow-hidden flex flex-col shadow-2xl max-w-md mx-auto w-full relative">
              <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between border-b border-[#313d45]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-600 text-stone-950 flex items-center justify-center font-black text-sm relative">
                    Y
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-[#202c33]" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold font-sans">Yasmin (Düsseldorf)</h5>
                    <span className="text-[10px] text-emerald-400 font-sans block mt-0.5 animate-pulse">online</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-stone-400">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-[10px] font-mono text-stone-500 font-bold uppercase tracking-wider">Erfolg</span>
                </div>
              </div>

              <div
                className="p-4 flex-grow space-y-4 min-h-[360px] relative"
                style={{ backgroundImage: 'radial-gradient(#202c33 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              >
                <div className="flex justify-center">
                  <span className="bg-[#182229] border border-[#2b3942]/60 text-stone-400 text-[10px] px-3 py-1 rounded-xl font-sans tracking-wide">
                    HEUTE • 16:19
                  </span>
                </div>

                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-none p-3.5 text-xs leading-relaxed font-sans shadow-md select-text">
                    <p className="font-medium text-stone-100 mb-1.5">Hallo Eddy 👋</p>
                    <p className="mb-2">Ich hoffe es geht dir sehr gut. Ich wollte dir nur mal sagen, dass ich wirklich nie wieder so einen Spaß beim Training hatte wie mit dir und dass ich dir dafür unheimlich dankbar bin...</p>
                    <p className="mb-2">...weil mich diese Freude dafür bis heute begleitet und mir das <strong className="text-orange-400">„die Scheu" vor Fitnessstudios</strong> und den Trainingsgeräten genommen hat.</p>
                    <p className="mb-2">Leider hab ich nie wieder einen Trainer gefunden der einen mit so viel Spaß motiviert und bei dem man sich auf (fast) jede Stunde freut aber ich geb nicht auf. 😉</p>
                    <p className="mb-3">Hoffe du bist und bleibst so ein positiver und glücklicher Mensch, wo auch immer dich dein Weg hingebracht hat. ✨💪🏻👍🏻</p>
                    <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono mt-1 pt-1 border-t border-stone-800">
                      <span>Viele Grüße, Yasmin</span>
                      <div className="flex items-center gap-1 text-[#53bdeb]">
                        <span>16:19</span>
                        <CheckCheck className="w-[18px] h-[18px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[40%] right-10 bg-rose-500 text-white rounded-2xl px-3 py-1.5 flex items-center gap-1.5 shadow-2xl animate-bounce pointer-events-none">
                  <Heart className="w-3.5 h-3.5 fill-current text-white" />
                  <span className="font-black text-[11px]" style={{ fontFamily: "'Outfit', sans-serif" }}>1</span>
                </div>
              </div>

              <div className="bg-[#2a3942] p-3 flex items-center gap-3 border-t border-[#313d45]">
                <Plus className="w-5 h-5 text-stone-400" />
                <div className="flex-grow bg-[#3b4a54] py-1.5 px-4 rounded-xl text-[11px] text-stone-400 font-sans">
                  Nachricht schreiben...
                </div>
                <div className="flex items-center gap-2.5 text-stone-400">
                  <Camera className="w-4 h-4" />
                  <Mic className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Chat 2: Zufriedener Kunde */}
            <div className="bg-[#0b141a] rounded-3xl border border-[#202c33] overflow-hidden flex flex-col shadow-2xl max-w-md mx-auto w-full relative">
              <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between border-b border-[#313d45]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-stone-950 flex items-center justify-center font-black text-sm relative">
                    K
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-[#202c33]" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold font-sans">Zufriedener Kunde</h5>
                    <span className="text-[10px] text-emerald-400 font-sans block mt-0.5 animate-pulse">online</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-stone-400">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-mono text-stone-500 font-bold uppercase tracking-wider">InBody</span>
                </div>
              </div>

              <div
                className="p-4 flex-grow space-y-4 min-h-[360px] relative"
                style={{ backgroundImage: 'radial-gradient(#202c33 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              >
                <div className="flex justify-center my-1">
                  <span className="bg-[#fed9cd]/90 text-stone-900 border border-[#e86c43]/30 text-[9px] px-4 py-1.5 rounded-xl font-sans font-black tracking-widest uppercase">
                    1 UNGELESENE NACHRICHT
                  </span>
                </div>

                <div className="flex items-start gap-2 max-w-[85%] float-left">
                  <div className="bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-none p-3.5 text-xs leading-relaxed font-sans shadow-md select-text">
                    <p className="mb-2">Ich wollte dir noch mal danke für die heutige Ernährungsberatung sagen und die <strong className="text-orange-400">Inbody-Messung</strong>, die mir nur noch mehr die Augen geöffnet hat! - <strong className="text-orange-400">Hammer Gerät! 👍😍</strong></p>
                    <p className="mb-2">Anfangs hatte ich echt Angst, dass ich mich so blamiere, aber ihr seid so ein tolles Team!!! 🍀</p>
                    <p className="mb-3">Wenn man denkt, man kann nicht mehr, kommt so viel Motivation und so schöne Worte!! Ich bin zwar noch nicht so lange da, aber fühle mich echt wohl! Ich danke euch so sehr und bin so gespannt auf das, was alles noch auf mich zukommt. 💪💪</p>
                    <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono mt-1 pt-1 border-t border-stone-800">
                      <span>Mitglieds-Feedback</span>
                      <div className="flex items-center gap-1 text-[#53bdeb]">
                        <span>20:46</span>
                        <CheckCheck className="w-[18px] h-[18px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-stone-900/90 border border-[#3b4a54] rounded-2xl p-2.5 flex flex-col items-center gap-1 shadow-2xl animate-pulse pointer-events-none">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider">5.0 Sterne</span>
                </div>
              </div>

              <div className="bg-[#2a3942] p-3 flex items-center gap-3 border-t border-[#313d45]">
                <Plus className="w-5 h-5 text-stone-400" />
                <div className="flex-grow bg-[#3b4a54] py-1.5 px-4 rounded-xl text-[11px] text-stone-400 font-sans">
                  Nachricht schreiben...
                </div>
                <div className="flex items-center gap-2.5 text-stone-400">
                  <Camera className="w-4 h-4" />
                  <Mic className="w-4 h-4" />
                </div>
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
