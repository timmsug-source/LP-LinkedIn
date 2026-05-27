'use client'
import { useState } from "react";
import { Therapy } from "../types";
import { Check, ChevronRight, ChevronDown, Calendar, Eye, Activity, Heart, Info, HelpCircle } from "lucide-react";

interface TherapyDetailProps {
  therapy: Therapy;
  onOpenBooking: () => void;
}

export default function TherapyDetail({ therapy, onOpenBooking }: TherapyDetailProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Helper to resolve decorative category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "eyes":
        return <Eye className="w-5 h-5 text-brand-sage" />;
      case "psyche":
        return <Activity className="w-5 h-5 text-brand-sage" />;
      case "body":
        return <Heart className="w-5 h-5 text-brand-sage" />;
      default:
        return <Info className="w-5 h-5 text-brand-sage" />;
    }
  };

  const getCategoryImage = (id: string) => {
    switch (id) {
      case "akupunktur-makuladegeneration":
        return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";
      case "hypnosetherapie":
        return "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop";
      case "wirbelsaeulentherapie":
        return "https://images.unsplash.com/photo-1519824141121-997e3295e813?q=80&w=800&auto=format&fit=crop";
      case "shiatsu":
        return "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop";
      case "frequenztherapie":
        return "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16" id={`therapy-page-${therapy.id}`}>
      
      {/* Page Header / Hero Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 bg-brand-cream border border-brand-sage-pale px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-mono text-brand-sage">
              {getCategoryIcon(therapy.category)}
              <span>{therapy.category === "eyes" ? "Augengesundheit" : therapy.category === "psyche" ? "Psyche & Seelenruhe" : therapy.category === "body" ? "Körper & Statik" : "Innere Regulation"}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-sage leading-[1.15]">
              {therapy.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-sans font-medium">
              {therapy.shortDesc}
            </p>

            <div className="prose prose-sage max-w-none text-brand-charcoal/80 leading-relaxed text-sm sm:text-base space-y-4">
              <p>{therapy.longDesc}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-brand-sage text-white font-serif font-semibold text-sm rounded-xl tracking-wide shadow-md hover:bg-brand-sage-light transition-all flex items-center space-x-2 cursor-pointer"
                id="therapy-book-btn"
              >
                <Calendar className="w-4 h-4 text-brand-terracotta" />
                <span>Termin für Erstberatung anfragen</span>
              </button>
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 border border-brand-sage rounded-2xl transform translate-x-4 translate-y-4 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-sage-pale bg-white">
                <img
                  src={getCategoryImage(therapy.id)}
                  alt={therapy.title}
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Benefits and Symptoms grid */}
      <div className="bg-brand-cream py-16 border-y border-brand-sage-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Benefits box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sage-pale space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-sage flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-terracotta rounded-full inline-block" />
                Vorteile der Behandlung
              </h3>
              <div className="space-y-4">
                {therapy.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-brand-charcoal/90">
                    <div className="w-5 h-5 rounded-full bg-brand-sage-pale/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-sage" />
                    </div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Indication / Symptoms box */}
            {therapy.symptoms && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sage-pale space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-sage flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-brand-sage rounded-full inline-block" />
                  Typische Anwendungsbereiche
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-charcoal/80">
                  {therapy.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-brand-beige border border-brand-sage-pale/40 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-brand-terracotta shrink-0" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Methods Section */}
      {therapy.methods && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="font-serif text-2xl font-bold text-brand-sage">
              Verwendete Methoden &amp; Begleitung
            </h3>
            <p className="text-xs uppercase tracking-widest font-mono text-brand-sage-light">
              Ganzheitliche Kombinationen für dich
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapy.methods.map((method, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-brand-sage-pale shadow-sm hover:border-brand-sage transition-all">
                <span className="text-xs font-bold text-brand-terracotta tracking-widest font-mono block mb-2">0{idx + 1}</span>
                <h4 className="font-serif text-base font-bold text-brand-sage mb-2">{method}</h4>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                  Präzise auf dich und deine Diagnose abgestimmte Integrativbehandlung zur Stärkung der körpereigenen Regulationskraft.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Accordion Section */}
      {therapy.faqs && therapy.faqs.length > 0 && (
        <div className="bg-brand-cream/40 py-16 border-t border-brand-sage-pale">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 space-y-2">
              <div className="inline-flex justify-center p-2 rounded-full bg-brand-sage-pale/50 text-brand-sage">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sage">
                Häufige Fragen zur {therapy.title}
              </h3>
              <p className="text-xs font-mono text-brand-sage-light">
                Antworten aus unserer täglichen Praxis
              </p>
            </div>

            <div className="space-y-4" id="faq-accordion-group">
              {therapy.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-brand-sage-pale overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-serif text-sm sm:text-base font-bold text-brand-charcoal hover:bg-brand-beige/40 transition-colors focus:outline-none cursor-pointer"
                      id={`faq-btn-${idx}`}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4 text-brand-terracotta shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-brand-sage shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-brand-beige/60 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans animate-fade-in" id={`faq-panel-${idx}`}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Action Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-6">
        <div className="bg-brand-sage/10 p-8 sm:p-12 rounded-2xl border border-brand-sage-pale space-y-4">
          <h3 className="font-serif text-2xl font-bold text-brand-sage">
            Möchtest du herausfinden, ob dir diese Therapie helfen kann?
          </h3>
          <p className="text-sm text-brand-charcoal/80 max-w-xl mx-auto leading-relaxed">
            In einem unverbindlichen Telefongespräch besprechen wir deine Symptome und klären, welche Heilverfahren am besten für dich geeignet sind.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-brand-sage hover:bg-brand-sage-light text-brand-beige font-semibold rounded-xl text-neutral font-serif shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              id="therapy-detail-footer-cta"
            >
              <span>Terminanfrage stellen</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
