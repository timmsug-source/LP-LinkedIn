'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ZapOff, TrendingUp, Activity, HeartHandshake,
  Apple, Dumbbell, Ban, Calculator, Clock,
  ShieldAlert, AlertCircle, ChevronDown, Check
} from 'lucide-react';
import { PAIN_POINTS, OBSTACLES } from '../data';
import { PainPoint, Obstacle } from '../types';

const IconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  ZapOff, TrendingUp, Activity, HeartHandshake,
  Apple, Dumbbell, Ban, Calculator, Clock, ShieldAlert
};

export default function PainPoints() {
  const [selectedPainPoint, setSelectedPainPoint] = useState<string | null>(null);
  const [activeObstacle, setActiveObstacle] = useState<string | null>('ernaehrung');

  return (
    <div className="space-y-24">

      {/* Section 1: Pain Points */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1.5 rounded-md">
            Die Symptome ignorieren
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Kennst du diese unbemerkten Alltagsblocker?
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            Als Führungskraft oder Unternehmer blendest du körperliche Symptome oft aus. Aber sie beschränken deine Leistung und dein Wohlbefinden täglich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PAIN_POINTS.map((item: PainPoint) => {
            const IconComponent = IconMap[item.iconName] || AlertCircle;
            const isSelected = selectedPainPoint === item.id;
            return (
              <div key={item.id}
                className={`text-left rounded-2xl border p-6 transition-all ${isSelected ? 'border-stone-900 bg-stone-900 text-white shadow-lg' : 'border-stone-200 bg-white shadow-sm text-stone-800 hover:border-stone-300 hover:shadow'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-amber-500 text-stone-950' : 'bg-stone-100 text-stone-700'}`}>
                    <IconComponent size={22} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className={`text-base font-display font-bold leading-snug transition-colors ${isSelected ? 'text-amber-400' : 'text-stone-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {item.shortText}
                    </p>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-stone-800 space-y-4">
                          <p className="text-stone-300 text-xs leading-relaxed">{item.longText}</p>
                          <div className="p-3 bg-stone-800/60 rounded-xl border border-stone-700/50 flex gap-2 items-start text-xs text-amber-400 font-medium">
                            <span className="text-stone-400 font-mono">Typisches Beispiel:</span>
                            <span>„{item.realLifeExample}"</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button onClick={() => setSelectedPainPoint(isSelected ? null : item.id)}
                      className={`text-xs font-bold pt-2 flex items-center gap-1 hover:underline cursor-pointer ${isSelected ? 'text-amber-400' : 'text-stone-600 hover:text-stone-900'}`}>
                      {isSelected ? 'Details einklappen' : 'Dein Risiko analysieren'}
                      <ChevronDown size={14} className={`transform transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Obstacles */}
      <div className="space-y-12 pt-12 border-t border-stone-200/85">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue-700 bg-brand-blue-50 px-3 py-1.5 rounded-md">
            Mythen & Ausreden
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight">
            Warum du den Fettabbau bisher weggeschoben hast
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            Meistens ist es nicht mangelnde Lust – sondern die falsche Vorstellung davon, wie Abnehmen auszusehen hat. Klicke auf die 6 Säulen, um das Geheimnis dahinter zu verstehen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: obstacle list */}
          <div className="lg:col-span-5 space-y-2">
            {OBSTACLES.map((obs: Obstacle) => {
              const IconComponent = IconMap[obs.iconName] || Apple;
              const isActive = activeObstacle === obs.id;
              return (
                <button key={obs.id} onClick={() => setActiveObstacle(obs.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 cursor-pointer ${isActive ? 'border-stone-900 bg-stone-900 text-white shadow-md' : 'border-stone-200 bg-white shadow-sm hover:border-stone-300 hover:shadow text-stone-700'}`}>
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-amber-500 text-stone-950' : 'bg-stone-200 text-stone-600'}`}>
                    <IconComponent size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display font-bold text-sm tracking-tight truncate">{obs.title}</h5>
                    <p className={`text-xs truncate ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>{obs.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-stone-200/90 shadow-sm relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeObstacle && (() => {
                const item = OBSTACLES.find((o: Obstacle) => o.id === activeObstacle)!;
                const IconComponent = IconMap[item.iconName] || Apple;
                return (
                  <motion.div key={item.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-50 rounded-lg text-amber-600"><IconComponent size={20} /></div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Themenschwerpunkt</span>
                        <h4 className="font-display font-black text-stone-900 text-xl leading-none">{item.title}</h4>
                      </div>
                    </div>
                    <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-100 flex flex-col sm:flex-row gap-2 sm:gap-3.5 sm:items-start">
                      <div className="p-1 px-1.5 bg-rose-100 text-rose-700 font-bold font-mono text-[10px] rounded-sm self-start sm:mt-0.5 shrink-0">MYTHOS</div>
                      <div className="space-y-1">
                        <h5 className="font-display font-bold text-rose-950 text-xs">Der weit verbreitete Trugschluss:</h5>
                        <p className="text-stone-600 text-xs leading-relaxed">{item.problemText}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 flex flex-col sm:flex-row gap-2 sm:gap-3.5 sm:items-start">
                      <div className="p-1 px-1.5 bg-emerald-100 text-emerald-700 font-bold font-mono text-[10px] rounded-sm self-start sm:mt-0.5 shrink-0">F.U.E.L.</div>
                      <div className="space-y-1">
                        <h5 className="font-display font-bold text-emerald-800 text-xs">Die intelligente Alltagslösung:</h5>
                        <p className="text-stone-700 text-xs leading-relaxed">{item.solutionText}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
            <div className="border-t border-stone-100 pt-5 mt-6 flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>Wissenschaftliche Steuerung</span>
              <div className="flex items-center gap-1.5 text-emerald-600 font-semibold font-sans">
                <Check size={14} /><span>Präzise & hocheffizient</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
