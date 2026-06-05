'use client'
import { Search, ShieldCheck, Factory, Settings, Users, ClipboardCheck, ArrowRight } from 'lucide-react';

interface ServicesSummaryProps {
  onLearnMoreClick: () => void;
}

export const ServicesSummary = ({ onLearnMoreClick }: { onLearnMoreClick: () => void }) => {
  const PILLARS = [
    {
      icon: <Search className="h-6 w-6 text-blue-700" />,
      title: 'Global Sourcing & Konditionen',
      subtitle: 'Direktbeschaffung ohne Zwischenhändler',
      description: 'Durch langjährige Exklusivvereinbarungen mit auditierten Gießereien und Schmieden in Asien realisiert MBR signifikante Einsparpotenziale für mittelständische Unternehmen – ohne Qualitätskompromisse.'
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-blue-700" />,
      title: 'Audits & Qualitätssicherung',
      subtitle: 'Überwachung nach Automotive-Richtlinien',
      description: 'Vor-Ort-Fabrikaudits werden durch qualifizierte lokale Ingenieure durchgeführt. Die Qualitätssicherung erfolgt streng nach ISO 9001 und IATF 16949 Standards, inklusive lückenloser Proben- und Schmelzenverfolgung.'
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-700" />,
      title: 'Komplettbearbeitung & Montage',
      subtitle: 'Einbaufertige Systemkomponenten',
      description: 'Wir liefern nicht nur Rohteile, sondern die fertige Komplettlösung. Unsere Partnerwerke übernehmen das Vor- und Fertigdrehen, Fräsen, Bohren, Schleifen sowei Wärmebehandlungen und seewasserbeständige Lackierungen.'
    }
  ];

  return (
    <section id="services-summary" className="bg-white py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">MBR Wertschöpfungskette</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Unser Leistungsspektrum: Präzision von der Spezifikation bis zur Baugruppe
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Als spezialisiertes B2B-Handelshaus koordinieren wir den gesamten Beschaffungsprozess hochbeanspruchter Industrie- und Investitionsgüter – vertragssicher, zertifiziert und termingetreu.
          </p>
        </div>

        {/* 3-Column Pillars Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p, idx) => (
            <div 
              key={idx}
              className="group relative rounded-xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {p.icon}
              </div>
              
              <h3 className="font-display text-lg font-bold text-slate-950 group-hover:text-blue-700 transition-colors">
                {p.title}
              </h3>
              
              <p className="mt-1 font-mono text-[11px] font-medium tracking-wide text-blue-600 uppercase">
                {p.subtitle}
              </p>
              
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick specs section below pillars */}
        <div className="mt-16 rounded-xl bg-slate-950 p-8 text-white md:p-12 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 font-mono text-[140px] font-bold select-none leading-none pointer-events-none translate-y-2 translate-x-3">
            QM
          </div>
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h4 className="font-display text-xl font-bold">Sie suchen nach konkreten Guss- und Schmiedeteilen?</h4>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                Erleben Sie eine lückenlose Qualitätskette. Unsere Kooperationspartner in Asien werden fortlaufend auf Einhaltung der Toleranzen, Werkstoffintegrität und Liefertreue geprüft.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 font-display text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Werkstoffe & Verfahren ansehen
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
