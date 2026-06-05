'use client'
import { Calendar, UserCheck, ShieldCheck, Truck, Scale, Clipboard, Award } from 'lucide-react';

export const AboutUs = () => {
  const MILESTONES = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-700" />,
      title: 'Über 1.5 Jahrzehnte Marktpräsenz',
      description: 'Seit über 15 Jahren agieren wir als verlässliches Bindeglied zwischen mittelständischen Industrieunternehmen und spezialisierten asiatischen Gießereien. Wir kennen die vertraglichen, zollrechtlichen und metallurgischen Herausforderungen präzise.'
    },
    {
      icon: <UserCheck className="h-6 w-6 text-blue-700" />,
      title: 'Eigene Vor-Ort-Auditierung',
      description: 'Durch dauerhaft angestellte, lokale Qualitätsingenieure vor Ort führen wir regelmäßige Prozessaudits durch – insbesondere angelehnt an die Automobilnorm IATF 16949 und VDA 6.3 Standards. Damit minimieren wir Reklamationsraten im einstelligen PPM-Bereich.'
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-700" />,
      title: 'Flexible Lieferformen nach Maß',
      description: 'Sie wählen den Bearbeitungsgrad: MBR liefert Rohguss, vorbearbeitete Komponenten oder montagefertige Präzisionsbauteile. Durch integrierte Logistiklösungen lagern wir Bestände bedarfsgerecht ab und liefern „Just-in-Time".'
    }
  ];

  return (
    <section id="about-us-module" className="space-y-16 py-6 font-sans">
      
      {/* Intro Brand Pitch */}
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
            Das Handelshaus MBR GmbH
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Sicherheit in der globalen Bauteilebeschaffung
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Als inhabergeführtes Handelshaus für Guss- und Schmiedeprodukte mit Sitz in Kappeln an der Schlei steht MBR GmbH für das Prinzip der Risikominimierung im Global Sourcing. Für den modernen Mittelstand identifizieren wir technologisch führende Produktionsstätten in asiatischen Wirtschaftsräumen, evaluieren deren Fertigungskapazitäten und integrieren sie rechtssicher in Ihr Supply Chain Management.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4 flex gap-3.5 items-start">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-slate-950">Vertragsrecht nach BGB/HGB</h4>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">Ihr Ansprechpartner und rechtlicher Vertragspartner sitzt in Deutschland – Rechtssicherheit garantiert.</p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4 flex gap-3.5 items-start">
              <Award className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-slate-950">Vollbelegte Lieferdokumente</h4>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">Keine Teillieferung verlässt das Werk ohne werkseigenes Abnahmeprüfzeugnis und Härteprotokolle.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Value Statement card – Foto oben, Text unten */}
        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 shadow-xl group flex flex-col">
          {/* Foto – kein Overlay, kein Schatten */}
          <div className="overflow-hidden">
            <img
              src="/1517486085172.jpeg"
              alt="M. Bresemann – Geschäftsführer MBR GmbH"
              className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{ maxHeight: '340px' }}
            />
          </div>

          {/* Text darunter */}
          <div className="bg-slate-950 p-8 flex flex-col gap-5 flex-1">
            <span className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest bg-blue-950/50 border border-blue-900/40 px-2 py-0.5 rounded self-start">
              Inhabergeführt & Unabhängig
            </span>
            <h3 className="font-display text-lg font-bold leading-relaxed text-slate-100">
              „Im Mittelstand entscheidet die Planbarkeit. Ein Bauteilfehler bedeutet im schlimmsten Fall Bandstillstand. Deshalb auditieren wir lückenlos."
            </h3>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <img
                src="/1517486085172.jpeg"
                alt="M. Bresemann"
                className="h-10 w-10 shrink-0 rounded-full object-cover object-top border-2 border-slate-700"
              />
              <div>
                <p className="font-display font-bold text-sm text-white">M. Bresemann</p>
                <p className="text-xs text-slate-400">Geschäftsführer, MBR GmbH</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Operational Strengths Cards */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-display text-xl font-bold text-slate-950">Unsere drei strategischen Kernkompetenzen</h3>
          <p className="text-xs text-slate-500">Wie wir die Brücke zwischen asiatischer Effizienz und deutschem Qualitätsverständnis schlagen.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {MILESTONES.map((pt, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col gap-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                {pt.icon}
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-base text-slate-950">{pt.title}</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{pt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supplier audit metrics detail */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-8">
        <h4 className="font-display font-bold text-slate-950 text-base">Unser Audit-Ablauf vor Fertigungsfreigabe</h4>
        <p className="text-xs text-slate-500 mt-1">Strenge Qualifizierungsschritte zur Risikominimierung.</p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-4 font-sans text-xs">
          {[
            { step: '01', title: 'Schnittstellenprüfung', desc: 'Sichtung der Lastenhefte, Toleranzvorgaben & Materialklassen auf Machbarkeit.' },
            { step: '02', title: 'Fabrikaudit vor Ort', desc: 'Prüfung der Gießöfen, Laborinstrumente, Lagersysteme und Qualitätsnachweise im Werk.' },
            { step: '03', title: 'Erstmusterprüfung (FMEA)', desc: 'Gießen von Probeteilen, Maßanalyse, Röntgenprüfung und Vorlage des EMPB nach VDA.' },
            { step: '04', title: 'Qualitätstore im Versand', desc: 'Freigabe jeder einzelnen Schiffsladung erst nach Gegenzeichnung aller Prüfprotokolle (3.1/3.2).' }
          ].map((st, i) => (
            <div key={i} className="relative bg-white border border-slate-200/80 p-5 rounded-lg flex flex-col justify-between gap-4">
              <div>
                <span className="font-mono text-lg font-black text-blue-700">{st.step}</span>
                <h5 className="font-display font-bold text-slate-950 mt-2">{st.title}</h5>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
