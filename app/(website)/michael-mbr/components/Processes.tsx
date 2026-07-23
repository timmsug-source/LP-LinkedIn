'use client'
import React, { useState } from 'react';
import { PROCESSES_DATA } from '../data';
import { ManufacturingProcess } from '../types';
import { Hammer, Landmark, Flame, Compass, Settings, CheckSquare } from 'lucide-react';

export const Processes = () => {
  const [activeTab, setActiveTab2] = useState<'all' | 'guss' | 'schmied' | 'rohre'>('all');

  const filteredProcesses = PROCESSES_DATA.filter(p => {
    if (activeTab === 'all') return true;
    return p.type === activeTab;
  });

  const getSubTitleIcon = (type: string) => {
    switch (type) {
      case 'guss': return <Flame className="h-4 w-4 text-orange-600" />;
      case 'schmied': return <Hammer className="h-4 w-4 text-blue-600" />;
      default: return <Settings className="h-4 w-4 text-emerald-600" />;
    }
  };

  return (
    <div id="processes-module" className="space-y-8">
      {/* Category Selection Tabs */}
      <div className="flex border-b border-slate-200">
        {[
          { id: 'all', label: 'Alle Verfahren' },
          { id: 'guss', label: 'Hauptgießverfahren' },
          { id: 'schmied', label: 'Schmiedetechnik & Umformung' },
          { id: 'rohre', label: 'Spezialrohre & Profile' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab2(tab.id as any)}
            className={`font-display text-sm font-semibold px-4 pb-3 border-b-2 transition-all ${
              activeTab === tab.id
                ? 'border-blue-700 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Processes */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProcesses.map((proc) => (
          <div 
            key={proc.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] font-bold text-slate-700 uppercase">
                  {getSubTitleIcon(proc.type)}
                  {proc.type === 'guss' ? 'Gießverfahren' : proc.type === 'schmied' ? 'Schmiedeverfahren' : 'Hohlkörper'}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">CODE: {proc.id.toUpperCase()}</span>
              </div>

              <h4 className="mt-4 font-display font-bold text-slate-950 leading-snug">
                {proc.title}
              </h4>

              <p className="mt-2 text-xs font-medium text-slate-600">
                {proc.description}
              </p>

              <p className="mt-3 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                {proc.details}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-50 flex items-center gap-2 text-[11px] font-mono font-medium text-slate-400">
              <CheckSquare className="h-3.5 w-3.5 text-blue-600" />
              <span>Geprüftes Partnerverfahren</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
