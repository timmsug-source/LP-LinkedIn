'use client'
import React, { useState, useMemo } from 'react';
import { MATERIALS_DATA } from '../data';
import { MaterialSpec } from '../types';
import { Search, Info, HelpCircle, FileText, CheckCircle2, FlaskConical } from 'lucide-react';

export const Materials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('Alle');
    MATERIALS_DATA.forEach(m => {
      // Group them into friendly filters
      if (m.category.includes('Stahlguss')) cats.add('Stahlguss');
      else if (m.category.includes('Gusseisen')) cats.add('Gusseisen');
      else if (m.category.includes('Nichteisen') || m.category.includes('Aluminium')) cats.add('Aluminium / Sonstige');
    });
    return Array.from(cats);
  }, []);

  const filteredMaterials = useMemo(() => {
    return MATERIALS_DATA.filter(m => {
      // Text Match
      const matchesText = 
        m.dinCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.nameDe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category Match
      if (selectedCategory === 'Alle') return matchesText;
      if (selectedCategory === 'Stahlguss') return matchesText && m.category.includes('Stahlguss');
      if (selectedCategory === 'Gusseisen') return matchesText && m.category.includes('Gusseisen');
      if (selectedCategory === 'Aluminium / Sonstige') {
        return matchesText && (m.category.includes('Nichteisen') || m.category.includes('Aluminium'));
      }
      return matchesText;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div id="materials-module" className="space-y-8">
      
      {/* Information Header */}
      <div className="rounded-lg bg-blue-50 border border-blue-200 p-5 flex gap-4">
        <Info className="h-6 w-6 shrink-0 text-blue-700 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-display font-bold text-slate-900 text-sm md:text-base">Garantierte Normkonformität</h4>
          <p className="text-xs text-slate-600 leading-relaxed md:text-sm">
            Alle Werkstoffe werden ausschließlich auf Basis gültiger DIN-, EN- und ISO-Regelwerke bezogen. Jede Lieferung wird von uns mit einem Abnahmeprüfzeugnis (APZ) nach <strong>DIN EN 10204-3.1</strong> oder <strong>3.2</strong> ausgeliefert, das chemische Analysen (Spektroskopie) und Zerstörungsfreie Werkstoffprüfungen (NDT) dokumentiert.
          </p>
        </div>
      </div>

      {/* Database Search & Filters Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-6">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Werkstoff o. DIN-Norm filtern..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 font-display text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 font-display text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Materials List Grid */}
      {filteredMaterials.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredMaterials.map((mat, i) => (
            <div 
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-slate-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-3.5">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase border border-blue-100">
                      {mat.dinCode}
                    </span>
                    <h4 className="mt-2 font-display text-base font-extrabold text-slate-950">
                      {mat.nameDe}
                    </h4>
                    <p className="mt-0.5 font-mono text-[10px] text-slate-400 italic">
                      {mat.nameEn}
                    </p>
                  </div>
                  <FlaskConical className="h-5 w-5 text-slate-400" />
                </div>

                {/* Properties */}
                <div className="mt-4">
                  <h5 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    Werkstoffeigenschaften
                  </h5>
                  <ul className="space-y-1">
                    {mat.properties.map((prop, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <h5 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    Typische Anwendungsfelder
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {mat.applications.map((app, idx) => (
                      <span 
                        key={idx} 
                        className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-0.5 font-sans text-[11px] text-slate-700 font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specs classification foot */}
              <div className="mt-5 pt-3.5 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Lieferklasse: {mat.category}</span>
                <span>Zugehörig EN 10204</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-slate-500">
          <HelpCircle className="mx-auto h-12 w-12 text-slate-300" />
          <h4 className="mt-4 font-display font-bold">Keine Werkstoffe gefunden</h4>
          <p className="mt-1 text-xs text-slate-400">Versuchen Sie ein anderes Suchwort (z. B. "Stahlguss", "Grauguss" oder die konkrete EN-Nummer).</p>
        </div>
      )}

    </div>
  );
};
