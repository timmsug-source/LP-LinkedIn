'use client'
import { useState } from "react";
import { Therapy } from "../types";
import { THERAPIES } from "../data";
import { ArrowRight, Eye, Heart, Activity, ClipboardList, Sparkles } from "lucide-react";

interface TherapyListProps {
  onSelectTherapy: (therapy: Therapy) => void;
}

export default function TherapyList({ onSelectTherapy }: TherapyListProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "Alle Angebote", icon: null },
    { id: "eyes", label: "Augengesundheit", icon: <Eye className="w-3.5 h-3.5" /> },
    { id: "body", label: "Körper & Gelenke", icon: <Heart className="w-3.5 h-3.5" /> },
    { id: "psyche", label: "Psyche & Achtsamkeit", icon: <Activity className="w-3.5 h-3.5" /> },
    { id: "diagnostics", label: "Diagnostik & Regulation", icon: <ClipboardList className="w-3.5 h-3.5" /> },
  ];

  const filteredTherapies = activeTab === "all" 
    ? THERAPIES 
    : THERAPIES.filter((t) => t.category === activeTab);

  const getCategoryImage = (id: string) => {
    switch (id) {
      case "akupunktur-makuladegeneration":
        return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop";
      case "hypnosetherapie":
        return "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop";
      case "wirbelsaeulentherapie":
        return "https://images.unsplash.com/photo-1519824141121-997e3295e813?q=80&w=600&auto=format&fit=crop";
      case "shiatsu":
        return "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop";
      case "frequenztherapie":
        return "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop";
    }
  };

  const getCategoryColorClass = (category: string) => {
    switch (category) {
      case "eyes":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "body":
        return "bg-orange-50 text-orange-800 border-orange-200";
      case "psyche":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      default:
        return "bg-slate-50 text-slate-800 border-slate-200";
    }
  };

  const getCategoryThemeLabel = (category: string) => {
    switch (category) {
      case "eyes":
        return "Augen";
      case "body":
        return "Körper";
      case "psyche":
        return "Psyche";
      default:
        return "Regulierung";
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-brand-beige" id="therapy-list-parent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1 border border-brand-sage-pale px-3.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-brand-sage-light">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Therapeutische Vielfalt</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-sage">
            Unsere Behandlungsangebote
          </h1>
          <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
            Wähle das passende Therapieverfahren aus, um alle Details, Abläufe und häufige Patientenfragen kennenzulernen. Gerne beraten wir dich auch persönlich.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="therapy-category-tabs">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border cursor-pointer transition-all ${
                  isActive
                    ? "bg-brand-sage border-brand-sage text-brand-beige shadow-sm"
                    : "bg-white border-brand-sage-pale text-brand-charcoal hover:bg-brand-sage-pale/40"
                }`}
                id={`tab-select-${cat.id}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Therapy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="therapy-grid-cards">
          {filteredTherapies.map((therapy) => (
            <div
              key={therapy.id}
              onClick={() => onSelectTherapy(therapy)}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-sage-pale hover:border-brand-sage cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              id={`therapy-card-${therapy.id}`}
            >
              <div className="space-y-4">
                {/* Wrap Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                  <img
                    src={getCategoryImage(therapy.id)}
                    alt={therapy.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono font-bold rounded-full border ${getCategoryColorClass(therapy.category)}`}>
                      {getCategoryThemeLabel(therapy.category)}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-brand-sage leading-relaxed group-hover:text-brand-terracotta transition-colors">
                    {therapy.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans line-clamp-3">
                    {therapy.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action trigger footer */}
              <div className="p-6 pt-4 mt-4 border-t border-brand-sage-pale flex items-center justify-between text-xs font-bold text-brand-sage">
                <span>Mehr Details erfahren</span>
                <div className="w-8 h-8 rounded-full bg-brand-cream group-hover:bg-brand-sage-pale flex items-center justify-center text-brand-sage transition-colors">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Disclaimer underneath grid */}
        <div className="mt-16 bg-white border border-brand-sage-pale p-6 rounded-2xl max-w-3xl mx-auto flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center shrink-0 text-brand-sage font-bold font-serif">!</div>
          <div className="text-xs text-gray-500 leading-relaxed space-y-1">
            <span className="font-bold text-brand-sage">Umfassende Erstdiagnostik:</span>
            <p>
              In unserer Heilpraktikerpraxis verknüpfen wir die oben gelisteten Therapiemethoden oft integrativ. Nach einer ausführlichen Dunkelfeld-Untersuchung oder Urindiagnostik stimmen wir die Augenakupunktur, Frequenztherapie und naturheilkundliche Vitalstofftherapien ideal aufeinander ab.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
