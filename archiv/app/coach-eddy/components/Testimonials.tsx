'use client'

import { useState } from 'react';
import { Star, ShieldCheck, Check, Filter, Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  category: 'all' | 'weight' | 'energy' | 'training';
  rating: number;
  tags: string[];
  quote: string;
  text: string;
  avatarLetter: string;
  avatarColor: string;
  metric?: { label: string; value: string };
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'weight' | 'energy' | 'training'>('all');

  const categories = [
    { id: 'all', label: 'Alle Berichte' },
    { id: 'weight', label: 'Gewichtsverlust & Fettabbau' },
    { id: 'energy', label: 'Energie & Vitalität' },
    { id: 'training', label: 'Training & Motivation' },
  ] as const;

  const testimonials: Testimonial[] = [
    {
      id: 'marc', name: 'Marc B.', role: 'Senior Project Manager', city: 'Köln', category: 'weight', rating: 5,
      tags: ['Ernährungsumstellung', 'Online-Betreuung'],
      quote: 'EMS Training und Holi-Meals sind völlig unsinnig 😂 Das war alles seit dem 11. Januar. -10 KG in 4 Wochen!',
      text: 'Danke Eddy, dass du mir bei jedem Training meine Grenzen aufzeigst. \'Holi-Meals\' hat sich extrem für mich gelohnt, ich gehe heute ganz anders einkaufen und habe meinen Terminkalender voll im Griff, ohne auf Genuss verzichten zu müssen.',
      avatarLetter: 'M', avatarColor: 'bg-orange-600', metric: { label: 'Gewichtsverlust', value: '-10 KG' }
    },
    {
      id: 'anja', name: 'Anja K.', role: 'Marketing Director', city: 'München', category: 'weight', rating: 5,
      tags: ['Fettreduktion', 'Zentimeter-Erfolg'],
      quote: 'Taille um sagenhafte 9 Zentimeter geschrumpft. 9 Kilo reines Fett verloren seit August!',
      text: 'Brust: 98 -> -5 cm, Taille: 94 -> -9 cm, Hüfte: 100 -> -4 cm, Oberschenkel: 68 -> -3 cm. Das wöchentliche Monitoring und Eddys präzise Anpassungen der Ernährungsstruktur geben mir unglaublichen Halt im stressigen Alltag.',
      avatarLetter: 'A', avatarColor: 'bg-amber-600', metric: { label: 'Bauchumfang', value: '-9 cm' }
    },
    {
      id: 'yasmin', name: 'Yasmin S.', role: 'Creative Leader', city: 'Düsseldorf', category: 'training', rating: 5,
      tags: ['Mindset', 'Personal Training'],
      quote: 'Ich hatte noch nie wieder so einen immensen Spaß beim Training!',
      text: 'Ich wollte dir nur mal sagen, dass ich wirklich noch nie so viel Freude an körperlicher Anstrengung hatte wie mit dir, Eddy. Du weißt exakt, wie du mich fordern musst, ohne mich zu überlasten. Dafür bin ich dir unheimlich dankbar.',
      avatarLetter: 'Y', avatarColor: 'bg-rose-600', metric: { label: 'Zufriedenheit', value: '100%' }
    },
    {
      id: 'thomas', name: 'Thomas M.', role: 'Unternehmer (Inhaber)', city: 'Stuttgart', category: 'energy', rating: 5,
      tags: ['Leistungsfähigkeit', 'Bio-Hacking'],
      quote: 'Kein Nachmittagstief mehr ab 15 Uhr. Der Fokus im Business ist absolut messerscharf.',
      text: 'Zuerst war ich als vielbeschäftigter Unternehmer skeptisch, was Zeitinvestitionen angeht. Doch Eddys gezielte Reize für meinen Stoffwechsel haben mir ein massives Energieplus geliefert. Ich fühle mich so wach und leistungsfähig wie vor 15 Jahren.',
      avatarLetter: 'T', avatarColor: 'bg-blue-600', metric: { label: 'Energie-Level', value: 'Maximum' }
    },
    {
      id: 'stefan', name: 'Stefan W.', role: 'IT Consultant', city: 'Frankfurt', category: 'training', rating: 5,
      tags: ['Ernährungscoaching', 'Teamfit'],
      quote: 'Hatte Angst mich zu blamieren, aber ihr seid ein unfassbar starkes, motivierendes Team!',
      text: 'Vielen Dank für die intensive Ernährungsberatung heute. Ich hatte echte Bedenken, weil meine Fitness im Keller war. Doch bei euch herrscht absoluter Respekt und professioneller Rückhalt ab der allerersten Sekunde.',
      avatarLetter: 'S', avatarColor: 'bg-stone-700', metric: { label: 'Sicherheit', value: 'Sorglos' }
    },
    {
      id: 'christiane', name: 'Dr. med. Christiane R.', role: 'Praktizierende Ärztin', city: 'München', category: 'energy', rating: 5,
      tags: ['Stoffwechsel-Physiologie', 'Prävention'],
      quote: 'Aus medizinischer Sicht absolut fundiert – Entzündungsmarker messbar gesenkt.',
      text: 'Ich schätze Eddys wissenschaftlich orientierte Herangehensweise. Wir setzen an den Hormonen, dem Blutzuckerspiegel und der Stoffwechsel-Aktivität an. Das viszerale Fett ging drastisch zurück und meine Blutwerte sprechen für sich.',
      avatarLetter: 'C', avatarColor: 'bg-teal-600', metric: { label: 'Blutwerte', value: 'Optimiert' }
    },
  ];

  const filtered = activeCategory === 'all' ? testimonials : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section id="feedback" className="py-24 bg-stone-900 border-y border-stone-800 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-[0.2em] font-bold">Echte Resultate</span>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase mt-3 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            WAS MEINE KUNDEN SAGEN
          </h2>
          <div className="h-1 w-20 bg-[#FF5A1F] mx-auto mt-4 rounded-full" />
          <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Keine theoretischen Floskeln, sondern unzensiertes, greifbares Feedback aus dem fordernden Alltag.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 bg-stone-950/60 rounded-2xl border border-stone-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center text-[#FF5A1F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Höchste Kundenzufriedenheit</h4>
              <p className="text-xs text-stone-400 mt-0.5 font-sans">Basierend auf über 140+ betreuten Transformationen im Premium-Segment.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center md:text-right">
              <div className="flex items-center gap-1 justify-center md:justify-end text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="block text-white font-mono text-xs font-bold mt-1.5">5.0 von 5.0 Gesamtbewertung</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 mr-2 text-stone-500 text-xs font-mono uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtern:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#FF5A1F] border-[#FF5A1F] text-stone-950 shadow-lg shadow-orange-600/10'
                  : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-stone-950/80 rounded-2xl border border-stone-800 hover:border-stone-700 transition-all duration-300 p-6 flex flex-col justify-between relative group select-text"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-stone-900/40 pointer-events-none group-hover:text-stone-900/60 transition-colors" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  {item.metric && (
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-600/10 text-[#FF5A1F] font-mono text-[10px] uppercase font-bold border border-orange-500/20">
                      {item.metric.value}
                    </span>
                  )}
                </div>
                <h4 className="text-white font-black text-sm uppercase leading-snug tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  "{item.quote}"
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed">{item.text}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] font-mono uppercase tracking-wider text-stone-500 bg-stone-900 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-900 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${item.avatarColor} text-stone-950 font-black flex items-center justify-center text-sm shadow-inner`}>
                    {item.avatarLetter}
                  </div>
                  <div>
                    <h5 className="text-white font-black text-xs uppercase leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.name}</h5>
                    <span className="text-[10px] text-stone-500 font-sans mt-0.5 block">{item.role} · {item.city}</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-stone-900 flex items-center justify-center text-stone-500 group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-950 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span>Deine eigene Erfolgsstory starten</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
