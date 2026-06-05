'use client'
import React, { useState } from 'react';
import { SECTORS_DATA } from '../data';
import { Sector } from '../types';
import { Wrench, Cpu, Anchor, Factory, ShieldCheck, ChevronRight } from 'lucide-react';

export const Sectors = () => {
  const [selectedId, setSelectedId] = useState<string>(SECTORS_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="h-5 w-5" />;
      case 'Cpu': return <Cpu className="h-5 w-5" />;
      case 'Anchor': return <Anchor className="h-5 w-5" />;
      case 'Factory': return <Factory className="h-5 w-5" />;
      default: return <Factory className="h-5 w-5" />;
    }
  };

  const activeSector = SECTORS_DATA.find(s => s.id === selectedId) || SECTORS_DATA[0];

  return (
    <div id="sectors-module" className="bg-slate-50 rounded-xl border border-slate-200/60 p-6 md:p-10">
      <div className="grid gap-10 lg:grid-cols-12">
        
        {/* Left Side: Buttons Selector */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            Branchenschwerpunkte
          </div>
          {SECTORS_DATA.map((sector) => {
            const isSelected = sector.id === selectedId;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedId(sector.id)}
                className={`flex items-start gap-4 rounded-lg p-5 text-left border transition-all ${
                  isSelected
                    ? 'bg-blue-900 border-blue-900 text-white shadow-md shadow-blue-900/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className={`mt-0.5 rounded p-2 ${
                  isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {getIcon(sector.iconName)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm md:text-base">{sector.titleDe}</h4>
                  <p className={`mt-1 text-xs line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {sector.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Spec Sheet */}
        <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-6 md:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded bg-blue-50 px-2.5 py-1 font-mono text-[10px] font-bold text-blue-800 uppercase tracking-wide border border-blue-100">
                Schnittstelle & Qualität
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: MBR-SEC-{activeSector.id.toUpperCase()}</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-extrabold text-slate-950">
              {activeSector.title}
            </h3>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {activeSector.details}
            </p>

            {/* Crucial Quality Qualifications */}
            <div className="mt-8">
              <h5 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Zugeordnete Prüfnormen & Zertifikate
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeSector.standards.map((std, i) => (
                  <span 
                    key={i} 
                    className="rounded bg-slate-100 border border-slate-200/80 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Features list */}
            <div className="mt-6 border-t border-slate-100 pt-6">
              <h5 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3.5">
                Besondere Qualitätsmerkmale
              </h5>
              <ul className="space-y-2">
                {activeSector.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-5 text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>Lieferform: Roh / vorbearbeitet / einbaufertig</span>
            <span className="text-blue-600 font-semibold">ISO 9001 / EN 10204 3.1</span>
          </div>

        </div>

      </div>
    </div>
  );
};
