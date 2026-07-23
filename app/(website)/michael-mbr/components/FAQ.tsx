'use client'
import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { HelpCircle, ChevronDown, ChevronRight, Check } from 'lucide-react';

export const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({ 0: true });

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div id="faq-module" className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-6 w-6 text-blue-700" />
        <div>
          <h3 className="font-display text-xl font-extrabold text-slate-950">
            Häufig gestellte Fragen (B2B FAQ)
          </h3>
          <p className="text-xs text-slate-500 font-mono uppercase tracking-wide mt-0.5">
            Abnahmerichtlinien, Lieferketten & Prüfungsverfahren
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {FAQ_DATA.map((item, index) => {
          const isOpen = !!openIndexes[index];
          return (
            <div 
              key={index}
              className={`rounded-lg border transition-all duration-200 ${
                isOpen 
                  ? 'bg-slate-50 border-blue-200 shadow-sm' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Trigger Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-5 text-left font-display font-bold text-slate-900 focus:outline-none"
              >
                <span className="text-sm md:text-base pr-4">{item.question}</span>
                <span className={`shrink-0 rounded-full p-1 bg-white border border-slate-200 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-700 border-blue-200' : ''}`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 border-t border-slate-100 bg-white/50 leading-relaxed rounded-b-lg">
                  <p>{item.answer}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                    <Check className="h-3 w-3" /> Kategorie: {item.category}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
