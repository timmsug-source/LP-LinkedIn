'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Calendar, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export default function Testimonials({ onOpenBooking }: TestimonialsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'unternehmer' | 'fuehrungskraft' | 'selbststaendig'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeTab === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t: Testimonial) => t.category === activeTab);

  const filterTabs = [
    { id: 'all', label: 'Alle Erfolge' },
    { id: 'unternehmer', label: 'Unternehmer' },
    { id: 'fuehrungskraft', label: 'Führungskräfte' },
    { id: 'selbststaendig', label: 'Selbstständige' },
  ] as const;

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {filterTabs.map((tab) => (
          <button key={tab.id} onClick={() => { setActiveTab(tab.id); setExpandedId(null); }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-stone-900 text-white shadow-md' : 'bg-stone-100 hover:bg-stone-200 text-stone-600'}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((item: Testimonial) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div layout key={item.id}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-stone-200/90 p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 hover:shadow-md transition-shadow relative overflow-hidden">
                {item.stats && (
                  <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-700 font-mono text-xs font-bold px-3 py-1.5 rounded-bl-xl border-l border-b border-stone-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {item.stats.weightLost}
                  </div>
                )}
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <div className="space-y-2">
                    <Quote className="text-amber-500" style={{ opacity: 0.3 }} size={32} strokeWidth={1.5} />
                    <h4 className="text-lg font-display font-extrabold text-stone-900 leading-snug">„{item.highlightText}"</h4>
                  </div>
                  <div className="text-stone-600 text-sm leading-relaxed">
                    <p>{isExpanded ? item.fullText : `${item.fullText.slice(0, 160)}...`}</p>
                    <button onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="text-amber-600 hover:text-amber-700 font-bold text-xs mt-3 flex items-center gap-1 hover:underline cursor-pointer">
                      {isExpanded ? 'Kurzfassung herstellen' : 'Ganzen Bericht anzeigen'}
                    </button>
                  </div>
                </div>
                <div className="border-t border-stone-100 pt-6 mt-8 flex items-center gap-4">
                  <div className="relative">
                    <img src={item.avatarUrl} alt={item.name} referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover border border-stone-200" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-stone-900 border border-white rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-stone-900 text-sm leading-tight">{item.name}</h5>
                    <p className="text-xs text-stone-500 font-medium">{item.role}</p>
                    {item.stats && <span className="text-[11px] font-mono text-stone-400 mt-0.5 block">Dauer: {item.stats.duration}</span>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Mini CTA */}
      <div className="bg-gradient-to-r from-amber-50/50 via-stone-50 to-amber-50/50 p-6 rounded-2xl border border-stone-200/60 text-center max-w-2xl mx-auto space-y-4">
        <p className="text-sm text-stone-600 leading-relaxed font-medium">
          Alle diese Ergebnisse wurden im beruflichen Alltag ohne Diät-Frust oder stundenlangen Ausdauersport erzielt. Bereit für deine eigene Transformation?
        </p>
        <button onClick={onOpenBooking}
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-sm cursor-pointer">
          Dein Potenzial berechnen <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
