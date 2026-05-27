'use client'

import { BookOpen, Check, ShoppingCart, Percent, Clock, FileText } from 'lucide-react';
import { EBook } from '../types';

interface EBooksProps {
  onAddToCart: (ebook: EBook) => void;
  cartItemsIds: string[];
}

export default function EBooks({ onAddToCart, cartItemsIds }: EBooksProps) {
  const ebooks: EBook[] = [
    {
      id: 'cookingsoul2',
      title: 'Cooking Soul 2',
      subtitle: 'Das Premium Kochbuch für stressfreie Alltags-Power',
      originalPrice: 14.90,
      promoPrice: 9.90,
      coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
      features: [
        'Inklusive Holi-Meals Konzept (extrem sättigend)',
        'Über 45 leckere Gourmet-Rezepte',
        'Echter Geschmack ohne leere Kalorien',
        'Durchschnittliche Zubereitungszeit: 15 Minuten',
        'Detaillierte Nährwertangaben zu jedem Gericht',
        'Einkaufslisten & Zutaten-Tipps für jeden Supermarkt',
      ],
      cookingTime: '15 Min',
      pages: 124,
    },
    {
      id: 'testoup',
      title: 'TestOup Guide',
      subtitle: 'Der ultimative Hormon-Hebel für Männer',
      originalPrice: 19.90,
      promoPrice: 14.90,
      coverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
      features: [
        'Natürliche Testosteron-Maximierung',
        'Regulations-Tricks für dichte Schilddrüsenwerte',
        'Senkung des Stresshormons Cortisol im Alltag',
        'Gezielte Trainingsimpulse für deine Muskelreize',
        'Wissenschaftlich belegte Nahrungsergänzungs-Matrix',
        'Anti-Ostrogen Ernährungsrichtlinien',
      ],
      cookingTime: 'Bio-Hacking',
      pages: 82,
    },
  ];

  return (
    <section id="ebooks" className="py-24 bg-stone-900 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5A1F] font-mono text-xs uppercase tracking-[0.2em] font-bold">Wissens-Datenbank</span>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase mt-3 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            MEINE DIGITALEN RATGEBER
          </h2>
          <div className="h-1 w-20 bg-[#FF5A1F] mx-auto mt-4 rounded-full" />
          <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Hole dir das praxiserprobte System für zu Hause. Komprimiertes Wissen ohne Schnickschnack – direkt anwendbar für sofortige Fortschritte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {ebooks.map((ebook) => {
            const isInCart = cartItemsIds.includes(ebook.id);
            return (
              <div
                key={ebook.id}
                className="bg-stone-950 rounded-3xl border border-stone-800 p-6 sm:p-8 flex flex-col md:flex-row gap-8 hover:border-stone-700 transition-all shadow-xl group"
              >
                <div className="w-full md:w-48 flex-shrink-0 relative">
                  <div className="absolute top-2 left-2 z-10 bg-orange-600 text-stone-950 font-mono text-[10px] font-black uppercase px-2 py-1 rounded flex items-center gap-0.5 shadow-md">
                    <Percent className="w-3 h-3" />
                    <span>SALE</span>
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={ebook.coverImage}
                      alt={`${ebook.title} eBook Cover`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ filter: 'brightness(0.85) contrast(1.05)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent p-4 flex flex-col justify-end">
                      <h4 className="font-black text-white text-lg uppercase tracking-tight leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>{ebook.title}</h4>
                      <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest mt-1 block">COACH EDDY EDITION</span>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-white/15 shadow-[1px_0_4px_rgba(0,0,0,0.5)] border-r border-black/15" />
                  </div>
                  <div className="flex gap-4 justify-center mt-3 text-[10px] font-mono text-stone-500">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {ebook.cookingTime}</span>
                    <span className="h-4 w-[1px] bg-stone-800" />
                    <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {ebook.pages} Seiten</span>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-black text-2xl text-white uppercase tracking-tight leading-tight group-hover:text-[#FF5A1F] transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {ebook.title}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">{ebook.subtitle}</p>
                    <div className="flex items-baseline gap-3 pt-1">
                      <span className="text-2xl font-black text-white font-mono">{ebook.promoPrice.toFixed(2).replace('.', ',')} €</span>
                      <span className="text-sm text-stone-500 line-through font-mono">{ebook.originalPrice.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  </div>
                  <div className="space-y-2.5 pt-2">
                    {ebook.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-300 font-sans">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => onAddToCart(ebook)}
                      className={`w-full py-3 px-6 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] cursor-pointer ${
                        isInCart
                          ? 'bg-emerald-600 text-white shadow-inner'
                          : 'bg-[#FF5A1F] hover:bg-orange-600 text-stone-950 shadow-md hover:scale-[1.01]'
                      }`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {isInCart ? (
                        <><Check className="w-[18px] h-[18px]" /><span>Im Warenkorb</span></>
                      ) : (
                        <><ShoppingCart className="w-[18px] h-[18px]" /><span>In den Warenkorb</span></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center text-center">
          <div className="p-4 bg-stone-950/60 border border-stone-800 rounded-2xl flex items-center gap-3 text-stone-400 text-xs max-w-md">
            <BookOpen className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <p className="font-sans leading-relaxed text-left">
              <strong>Sofortiger Download:</strong> Direkt nach dem Checkout erhältst du deinen verschlüsselten PDF-Link per E-Mail zugeschickt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
