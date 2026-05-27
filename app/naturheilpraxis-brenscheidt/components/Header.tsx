'use client'
import { useState, useRef, useEffect } from "react";
import { Menu, X, Calendar, Phone, ChevronDown } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

const THERAPY_ITEMS = [
  { id: "akupunktur-makuladegeneration", label: "Augenakupunktur (AMD)", tag: "Augen" },
  { id: "hypnosetherapie",               label: "Hypnosetherapie",        tag: "Psyche" },
  { id: "wirbelsaeulentherapie",         label: "Wirbelsäulentherapie",   tag: "Körper" },
  { id: "shiatsu",                       label: "Shiatsu Körpertherapie", tag: "Körper" },
  { id: "frequenztherapie",              label: "Frequenztherapie",       tag: "Diagnostik" },
  { id: "dunkelfeld-diagnostik",         label: "Dunkelfeld-Diagnostik",  tag: "Diagnostik" },
];

const TOP_ITEMS = [
  { id: "start",     label: "Startseite" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "kontakt",   label: "Kontakt" },
];

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen]       = useState(false);
  const [therapyDropOpen, setTherapyDropOpen]     = useState(false); // desktop hover
  const [mobileTherapyOpen, setMobileTherapyOpen] = useState(false); // mobile accordion
  const dropRef    = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrop  = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTherapyDropOpen(true);
  };
  const closeDrop = () => {
    // 200 ms grace period so a click on a menu item can land before the panel disappears
    closeTimer.current = setTimeout(() => setTherapyDropOpen(false), 200);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setTherapyDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setTherapyDropOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isTherapyActive = THERAPY_ITEMS.some((t) => t.id === currentPage) || currentPage === "therapien";

  return (
    <header className="sticky top-0 z-50 bg-brand-beige/95 backdrop-blur-md border-b border-brand-sage-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ── Logo ── */}
          <div
            onClick={() => handleNavClick("start")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-sage flex items-center justify-center text-brand-beige shadow-sm transition-transform group-hover:scale-105">
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

          {/* ── Desktop Navigation ── */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">

            {/* Startseite */}
            <button
              onClick={() => handleNavClick("start")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentPage === "start"
                  ? "text-brand-sage bg-brand-sage-pale font-semibold"
                  : "text-brand-charcoal/80 hover:text-brand-sage hover:bg-brand-cream"
              }`}
            >
              Startseite
            </button>

            {/* Therapien dropdown */}
            <div
              ref={dropRef}
              className="relative"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <button
                onClick={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setTherapyDropOpen((v) => !v); }}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isTherapyActive
                    ? "text-brand-sage bg-brand-sage-pale font-semibold"
                    : "text-brand-charcoal/80 hover:text-brand-sage hover:bg-brand-cream"
                }`}
              >
                Therapien
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${therapyDropOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown panel */}
              {therapyDropOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-brand-sage-pale overflow-hidden z-50">
                  {/* "Alle Therapien" link */}
                  <button
                    onClick={() => handleNavClick("therapien")}
                    className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest font-mono border-b border-brand-sage-pale transition-colors ${
                      currentPage === "therapien"
                        ? "bg-brand-sage-pale text-brand-sage"
                        : "text-brand-sage-light hover:bg-brand-cream hover:text-brand-sage"
                    }`}
                  >
                    Alle Therapien ansehen →
                  </button>

                  {THERAPY_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-colors ${
                        currentPage === item.id
                          ? "bg-brand-sage-pale text-brand-sage"
                          : "hover:bg-brand-cream text-brand-charcoal/80 hover:text-brand-sage"
                      }`}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-terracotta bg-brand-terracotta/10 px-1.5 py-0.5 rounded-full shrink-0">
                        {item.tag}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Über uns + Kontakt */}
            {TOP_ITEMS.filter((i) => i.id !== "start").map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  currentPage === item.id
                    ? "text-brand-sage bg-brand-sage-pale font-semibold"
                    : "text-brand-charcoal/80 hover:text-brand-sage hover:bg-brand-cream"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ── CTA Desktop ── */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:02174748200"
              className="flex items-center space-x-1.5 text-xs font-medium text-brand-sage-light hover:text-brand-sage transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>02174 / 748200</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 bg-brand-sage text-brand-beige text-xs font-semibold rounded-lg hover:bg-brand-sage-light transition-all duration-300 shadow-sm cursor-pointer hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Termin anfragen</span>
              </div>
            </button>
          </div>

          {/* ── Mobile Menu Button ── */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-sage p-2 rounded-lg hover:bg-brand-sage-pale focus:outline-none"
              aria-label="Hauptmenü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-beige border-b border-brand-sage-pale">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">

            {/* Startseite */}
            <button
              onClick={() => handleNavClick("start")}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPage === "start"
                  ? "bg-brand-sage-pale text-brand-sage font-bold"
                  : "text-brand-charcoal/90 hover:bg-brand-cream hover:text-brand-sage"
              }`}
            >
              Startseite
            </button>

            {/* Therapien accordion */}
            <div>
              <button
                onClick={() => setMobileTherapyOpen((v) => !v)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                  isTherapyActive
                    ? "bg-brand-sage-pale text-brand-sage font-bold"
                    : "text-brand-charcoal/90 hover:bg-brand-cream hover:text-brand-sage"
                }`}
              >
                <span>Therapien</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileTherapyOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileTherapyOpen && (
                <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-brand-sage-pale pl-3">
                  <button
                    onClick={() => handleNavClick("therapien")}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest font-mono text-brand-sage-light hover:bg-brand-cream hover:text-brand-sage transition-colors"
                  >
                    Alle Therapien →
                  </button>
                  {THERAPY_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        currentPage === item.id
                          ? "bg-brand-sage-pale text-brand-sage font-semibold"
                          : "text-brand-charcoal/80 hover:bg-brand-cream hover:text-brand-sage"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-mono uppercase text-brand-terracotta shrink-0">{item.tag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Über uns + Kontakt */}
            {TOP_ITEMS.filter((i) => i.id !== "start").map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-brand-sage-pale text-brand-sage font-bold"
                    : "text-brand-charcoal/90 hover:bg-brand-cream hover:text-brand-sage"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* CTA */}
            <div className="pt-4 pb-2 border-t border-brand-sage-pale px-4 flex flex-col space-y-3">
              <a
                href="tel:02174748200"
                className="flex items-center space-x-2 text-sm text-brand-sage-light"
              >
                <Phone className="w-4 h-4" />
                <span>02174 / 748200</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full text-center py-3 bg-brand-sage text-brand-beige font-semibold rounded-lg shadow-sm font-serif"
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
