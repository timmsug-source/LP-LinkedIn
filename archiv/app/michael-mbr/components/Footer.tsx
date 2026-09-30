'use client'
import { ActivePage } from '../types';
import { Factory, Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer = ({ setActivePage }: { setActivePage: (page: import("../types").ActivePage) => void }) => {
  const handleLinkClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      
      {/* Primary Footer Directories */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          
          {/* Column 1: Brand & Subtitle */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-blue-700 text-white">
                <Factory className="h-4.5 w-4.5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">MBR GmbH</span>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
              Handelsgesellschaft für Guss- und Schmiedeprodukte. Ihr verlässlicher deutscher B2B-Partner für qualitätsgesicherten globalen Einkauf im Mittelstand.
            </p>

            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pt-2">
              QM-System ISO 9001:2015 zertifiziert
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('startseite')} className="hover:text-white transition-colors text-left">
                  Startseite
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('leistungen')} className="hover:text-white transition-colors text-left">
                  Leistungen & Werkstoffe
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('ueber-uns')} className="hover:text-white transition-colors text-left">
                  Über das Unternehmen
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('kontakt')} className="hover:text-white transition-colors text-left">
                  Kontakt & Vertragsbedingungen (AEB/ALB)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide">Kontaktadresse</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong>MBR GmbH</strong><br />
                  Mittelstraße 9, 24375 Kappeln, Deutschland
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-500 shrink-0" />
                <p>+49 (0) 4642 922 00</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                <p>info@mbr-guss-schmiede.de</p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal boundaries / bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <span>&copy; {currentYear} MBR GmbH. Alle Rechte vorbehalten.</span>
            <span className="text-slate-700">|</span>
            <button className="hover:text-white transition-colors">Impressum</button>
            <span className="text-slate-700">|</span>
            <button className="hover:text-white transition-colors">Datenschutzerklärung</button>
            <span className="text-slate-700">|</span>
            <button className="hover:text-white transition-colors">B2B Terms</button>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-850 transition-all font-sans text-xs font-semibold"
          >
            Nach oben <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>

    </footer>
  );
};
