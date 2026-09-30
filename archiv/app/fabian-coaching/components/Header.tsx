'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

// Inline SVG brand icons (not available in lucide-react v1.x)
const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Start", href: "#start" },
    { label: "Fabian Schönle", href: "#about" },
    { label: "Methode", href: "#methode" },
    { label: "Symptome", href: "#symptome" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0f19]/90 backdrop-blur-md py-3 border-b border-[#c1a87b]/10 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#start" className="flex items-center gap-2.5 group">
              <span className="font-sans font-black text-sm sm:text-base tracking-[0.25em] text-white group-hover:text-[#c1a87b] transition-colors uppercase">
                F.U.E.L.{" "}
                <span className="text-[#c1a87b] font-medium tracking-widest uppercase ml-1.5 text-[10px] hidden sm:inline-block">
                  Fabian Schönle
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-400 hover:text-[#c1a87b] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3 border-r border-slate-800 pr-5">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="p-1.5 text-slate-400 hover:text-[#c1a87b] hover:bg-slate-900 rounded-full transition-all" aria-label="LinkedIn">
                  <LinkedinIcon size={15} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"
                  className="p-1.5 text-slate-400 hover:text-[#c1a87b] hover:bg-slate-900 rounded-full transition-all" aria-label="YouTube">
                  <YoutubeIcon size={15} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="p-1.5 text-slate-400 hover:text-[#c1a87b] hover:bg-slate-900 rounded-full transition-all" aria-label="Instagram">
                  <InstagramIcon size={15} />
                </a>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase text-slate-950 bg-[#c1a87b] hover:bg-[#aa9163] rounded cursor-pointer shadow-md transition-all hover:scale-[1.01]"
              >
                Erstgespräch sichern
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2.5 text-[9px] font-bold tracking-[0.1em] uppercase text-slate-950 bg-[#c1a87b] hover:bg-[#aa9163] rounded transition-all cursor-pointer"
              >
                Erstgespräch
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
                aria-label="Menü umschalten"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0e1624] border-b border-[#c1a87b]/10 overflow-hidden"
            >
              <div className="px-4 py-5 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-[#c1a87b] hover:bg-slate-900 rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 px-3 pt-3 border-t border-slate-800">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#c1a87b]"><LinkedinIcon size={18} /></a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#c1a87b]"><YoutubeIcon size={18} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#c1a87b]"><InstagramIcon size={18} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
