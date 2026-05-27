'use client'
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Footer({ setCurrentPage, onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-brand-charcoal/10" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-brand-beige flex items-center justify-center text-brand-sage">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-brand-cream">
                Naturheilpraxis Brenscheidt
              </span>
            </div>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Deine Heilpraktiker in Leichlingen und Witzhelden. Begleitung auf Augenhöhe mit jahrzehntelanger Praxiserfahrung und einfühlsamen Behandlungskonzepten.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-[11px] font-mono tracking-wider uppercase border border-brand-sage-light text-brand-sage-pale rounded-full">
                Heilpraktikerpraxis
              </span>
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="text-sm font-semibold text-brand-cream uppercase tracking-wider font-mono mb-4">
              Therapien
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => handleNav("akupunktur-makuladegeneration")} 
                  className="hover:text-brand-terracotta transition-colors text-left cursor-pointer"
                  id="foot-link-amd"
                >
                  Augenakupunktur (AMD)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav("hypnosetherapie")} 
                  className="hover:text-brand-terracotta transition-colors text-left cursor-pointer"
                  id="foot-link-hypnos"
                >
                  Hypnosetherapie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav("therapien")} 
                  className="hover:text-brand-terracotta transition-colors text-left cursor-pointer"
                  id="foot-link-all"
                >
                  Wirbelsäulentherapie & Shiatsu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav("therapien")} 
                  className="hover:text-brand-terracotta transition-colors text-left cursor-pointer"
                  id="foot-link-diag"
                >
                  Dunkelfeld & Frequenztherapie
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-sm font-semibold text-brand-cream uppercase tracking-wider font-mono mb-4">
              Kontakt & Ort
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                <span>
                  Naturheilpraxis Brenscheidt<br />
                  Fachpraxis für Naturheilkunde<br />
                  Witzhelden / Leichlingen
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-terracotta shrink-0" />
                <a href="tel:02174748200" className="hover:text-white transition-colors">
                  02174 / 748200
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-terracotta shrink-0" />
                <a href="mailto:info@naturheilpraxis-brenscheidt.de" className="hover:text-white transition-colors">
                  info@naturheilpraxis-brenscheidt.de
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h3 className="text-sm font-semibold text-brand-cream uppercase tracking-wider font-mono mb-4">
              Sprechzeiten
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-terracotta mt-0.5 shrink-0" />
                <div>
                  <p>Mo. - Fr.: Termin nach Vereinbarung</p>
                  <p className="text-xs text-brand-sage-light mt-1">
                    Telefonische Erreichbarkeit täglich gegeben. Hinterlasse gern eine Nachricht.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-4 py-2.5 bg-brand-terracotta text-white rounded-lg text-xs font-semibold hover:bg-opacity-90 transition-all cursor-pointer text-center"
                id="footer-booking-btn"
              >
                Kostenfreies Erstgespräch
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer section - transparent and honest */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 max-w-4xl mx-auto space-y-4">
          <p>
            <strong>Wichtiger rechtlicher Hinweis:</strong> Die in unserer Praxis angebotenen Therapieverfahren (wie Augenakupunktur nach Boel, Dunkelfeld-Untersuchung, Shiatsu oder Dorn-Breuss-Therapie) sind Heilmethoden der komplementären Naturheilkunde. Sie sind von der Schulmedizin wissenschaftlich nicht oder nur teilweise anerkannt, da klinische Nachweise nach schulmedizinischen Maßstäben ausstehen. Alle Angaben beruhen auf überlieferten Erfahrungen und Heilerfolgen unserer jahrelangen Praxis.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 text-gray-400">
            <button onClick={() => alert("Impressum:\nNaturheilpraxis Michael & Sabine Brenscheidt\nWitzhelden / Leichlingen\nTel: 02174 / 748200\nE-Mail: info@naturheilpraxis-brenscheidt.de")} className="hover:text-brand-terracotta transition-colors cursor-pointer text-xs">
              Impressum
            </button>
            <span>&bull;</span>
            <button onClick={() => alert("Datenschutz:\nIhre Daten werden streng vertraulich und nur zur Bearbeitung Ihrer Terminanfrage verarbeitet. Wir geben keinerlei Daten an Dritte weiter. Auskunftsrechte stehen Ihnen jederzeit kostenlos zu.")} className="hover:text-brand-terracotta transition-colors cursor-pointer text-xs">
              Datenschutzerklärung
            </button>
            <span>&bull;</span>
            <span>&copy; {currentYear} Naturheilpraxis Brenscheidt. Alle Rechte vorbehalten.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
