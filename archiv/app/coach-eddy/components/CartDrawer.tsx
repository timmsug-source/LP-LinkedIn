'use client'

import { useState } from 'react';
import { X, Trash2, ShieldCheck, Mail, ArrowRight, Download, CheckCircle, FileDown } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }: CartDrawerProps) {
  const [email, setEmail] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'loading' | 'success'>('cart');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.promoPrice * item.quantity, 0);
  const vatAmount = subtotal * 0.07;
  const totalPrice = subtotal;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setCheckoutStep('loading');
    setTimeout(() => setCheckoutStep('success'), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div onClick={onClose} className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm animate-fade-in" />
      <div
        className="relative w-full max-w-md bg-stone-900 border-l border-stone-800 h-full flex flex-col justify-between shadow-2xl z-10 animate-slide-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-stone-800 pb-5">
          <div className="flex items-baseline gap-2">
            <h3 className="font-black text-white text-xl uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Dein Warenkorb</h3>
            <span className="font-mono text-xs text-stone-500">({cartItems.length} Artikel)</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-950 text-stone-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutStep === 'cart' && (
          <div className="flex-grow flex flex-col justify-between overflow-y-auto pt-5">
            {cartItems.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center text-stone-600">🛒</div>
                <h4 className="font-black text-white text-sm uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Der Warenkorb ist leer</h4>
                <p className="text-xs text-stone-500 max-w-xs font-sans">Suche dir einen meiner digitalen Ebooks unten in den Shop-Cards aus, um den Grundstein zu legen.</p>
                <button onClick={onClose} className="bg-[#FF5A1F] text-stone-950 text-xs font-black uppercase tracking-widest py-3 px-6 rounded-full" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Weiter Shoppen
                </button>
              </div>
            ) : (
              <div className="flex-grow flex flex-col justify-between">
                <div className="space-y-4 overflow-y-auto max-h-[380px] pr-2">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-3 bg-stone-950 rounded-2xl border border-stone-800 flex gap-4 items-center justify-between group animate-scale-up">
                      <img src={item.product.coverImage} alt="Cover" className="w-12 h-16 rounded-lg object-cover" referrerPolicy="no-referrer" />
                      <div className="flex-grow min-w-0">
                        <h4 className="font-black text-white text-xs uppercase truncate" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.product.title}</h4>
                        <span className="block text-[10px] text-stone-500 font-mono">Digitaler PDF-Ratgeber</span>
                        <span className="block text-xs font-black text-[#FF5A1F] mt-1 font-mono">{item.product.promoPrice.toFixed(2).replace('.', ',')} €</span>
                      </div>
                      <button onClick={() => onRemoveItem(item.product.id)} className="p-2 rounded-lg bg-stone-900 border border-stone-800 hover:border-red-900 text-stone-500 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-stone-800 space-y-5 bg-stone-900">
                  <div className="space-y-2 text-stone-400 text-xs font-sans">
                    <div className="flex justify-between"><span>Zwischensumme:</span><span className="font-mono text-stone-200">{subtotal.toFixed(2).replace('.', ',')} €</span></div>
                    <div className="flex justify-between text-[11px] text-stone-500"><span>Darin enthaltene MwSt. (7%):</span><span className="font-mono">{vatAmount.toFixed(2).replace('.', ',')} €</span></div>
                    <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-stone-800">
                      <span>Gesamtsumme (inkl. MwSt.):</span>
                      <span className="font-mono text-[#FF5A1F]">{totalPrice.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  </div>

                  <form onSubmit={handleCheckoutSubmit} className="space-y-3">
                    <div className="space-y-1.5">
                      <label className="block text-stone-400 text-[10px] font-mono uppercase tracking-wider">E-Mail für PDF-Zustellung</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                        <input type="email" placeholder="deine-adresse@domain.de" value={email} onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-stone-950 border border-stone-800 rounded-xl h-11 pl-10 pr-4 text-xs font-sans text-white placeholder-stone-600 focus:outline-none focus:border-[#FF5A1F] transition-all" required />
                      </div>
                    </div>
                    <button type="submit" className="w-full h-12 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-stone-950 font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      <span>Jetzt Kaufen & Sofort Laden</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[9px] text-stone-600 font-mono uppercase tracking-wider">🔒 Sichere SSL-Verbindung · 7 Tage Geld-zurück-Garantie</p>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {checkoutStep === 'loading' && (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-stone-800 border-t-[#FF5A1F] animate-spin" />
            <h4 className="font-black text-white text-sm uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Erstelle Transaktion...</h4>
            <span className="text-xs text-stone-500 font-mono uppercase tracking-widest">Sicherer Zahlungsabgleich</span>
          </div>
        )}

        {checkoutStep === 'success' && (
          <div className="flex-grow flex flex-col justify-between pt-6 space-y-6">
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-widest font-black">Kauf Abgeschlossen!</span>
                <h4 className="font-black text-white text-xl uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>WISSEN IST ENTSPERRT</h4>
                <p className="text-xs text-stone-400 max-w-xs font-sans mx-auto">
                  Vielen Dank! Wir haben deine Bestellbestätigung an <strong>{email}</strong> geschickt.
                </p>
              </div>
            </div>

            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-4 space-y-3">
              <span className="block text-[10px] text-stone-500 font-mono uppercase tracking-wider mb-2">Deine Downloads (PDF):</span>
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-3 bg-stone-900 rounded-xl border border-stone-800 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <div className="min-w-0">
                      <h5 className="font-black text-white uppercase truncate" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.product.title}</h5>
                      <span className="block text-[9px] text-stone-500 font-mono">14.2 MB · PDF Datei</span>
                    </div>
                  </div>
                  <a href={`#download-${item.product.id}`} onClick={(e) => { e.preventDefault(); alert(`Mock Download: ${item.product.title}_Eddy_Edition.pdf`); }}
                    className="p-2 px-3 rounded-lg bg-[#FF5A1F] hover:bg-orange-600 text-stone-950 font-black uppercase text-[10px] font-mono tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer">
                    <Download className="w-3.5 h-3.5" />
                    <span>Laden</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 text-center space-y-3">
              <p className="text-stone-400 text-xs font-sans">Willst du das theoretische Wissen mit Eddys individuellem Blick kombinieren?</p>
              <button onClick={() => { onClose(); onClearCart(); setCheckoutStep('cart'); setEmail(''); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full h-10 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Gratis Analyse Buchen
              </button>
            </div>

            <button onClick={() => { onClose(); onClearCart(); setCheckoutStep('cart'); setEmail(''); }}
              className="w-full text-center text-stone-500 hover:text-white transition-colors text-[10px] uppercase font-mono tracking-wider pt-2">
              Warenkorb schließen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
