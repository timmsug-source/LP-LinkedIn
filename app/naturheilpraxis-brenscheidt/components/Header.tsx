'use client'
import { useState } from "react";
import { Menu, X, Calendar, Phone } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "start", label: "Startseite" },
    { id: "akupunktur-makuladegeneration", label: "Augen-Akupunktur" },
    { id: "hypnosetherapie", label: "Hypnose" },
    { id: "therapien", label: "Therapien" },
    { id: "ueber-uns", label: "Über uns" },
    { id: "kontakt", label: "Kontakt" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-beige/95 backdrop-blur-md border-b border-brand-sage-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick("start")}
            className="flex items-center space-x-3 cursor-pointer group"
            id="logo-container"
          >
            <div className="w-10 h-10 rounded-full bg-brand-sage flex items-center justify-center text-brand-beige shadow-sm transition-transform group-hover:scale-105">
              {/* Elegant organic sun/tree SVG drawing */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.2 1 2 2 2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-3-3-3-6a3 3 0 016 0c0 3-3 6-3 6z" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl font-semibold tracking-tight block text-brand-sage">
                Naturheilpraxis Brenscheidt
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-sage-light font-mono block">
                Leichlingen &bull; Witzhelden
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-brand-sage bg-brand-sage-pale font-semibold"
                      : "text-brand-charcoal/80 hover:text-brand-sage hover:bg-brand-cream"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="tel:02174748200" 
              className="flex items-center space-x-1.5 text-xs font-medium text-brand-sage-light hover:text-brand-sage transition-colors"
              id="cta-tel-link"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>02174 / 748200</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 bg-brand-sage text-brand-beige text-xs font-semibold rounded-lg hover:bg-brand-sage-light transition-all duration-300 shadow-sm cursor-pointer hover:translate-y-[-1px] active:translate-y-[0px]"
              id="cta-booking-btn"
            >
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Termin anfragen</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-sage p-2 rounded-lg hover:bg-brand-sage-pale focus:outline-none"
              aria-label="Hauptmenü"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-beige border-b border-brand-sage-pale transition-all duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brand-sage-pale text-brand-sage font-bold"
                      : "text-brand-charcoal/90 hover:bg-brand-cream hover:text-brand-sage"
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-brand-sage-pale px-4 flex flex-col space-y-3">
              <a 
                href="tel:02174748200" 
                className="flex items-center space-x-2 text-sm text-brand-sage-light"
                id="mobile-tel-link"
              >
                <Phone className="w-4 h-4" />
                <span>02174 / 748200</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-3 bg-brand-sage text-brand-beige font-semibold rounded-lg shadow-sm font-serif"
                id="mobile-booking-btn"
              >
                Erstgespräch vereinbaren
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
