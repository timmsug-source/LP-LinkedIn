'use client'

import { useState, useEffect } from 'react';
import { ShoppingBag, User, Calendar, Menu, X, Clock } from 'lucide-react';
import Logo from './Logo';
import { Appointment } from '../types';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  onCartOpen: () => void;
  cartItemsCount: number;
  activeAppointment: Appointment | null;
  onCancelAppointment: () => void;
}

export default function Header({
  onScrollToSection,
  onCartOpen,
  cartItemsCount,
  activeAppointment,
  onCancelAppointment,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Startseite', id: 'hero' },
    { label: 'Coach Eddy', id: 'profile' },
    { label: 'Feedback', id: 'feedback' },
    { label: 'E-Books', id: 'ebooks' },
    { label: 'Ablauf', id: 'process' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/95 backdrop-blur-md shadow-lg border-b border-stone-800 py-3'
          : 'bg-stone-950/80 backdrop-blur-sm py-5'
      }`}
    >
      {activeAppointment && (
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-stone-950 px-4 py-2 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 relative shadow-inner animate-fade-in">
          <Clock className="w-4 h-4 animate-pulse flex-shrink-0" />
          <span>
            Dein Erstgespräch ist gebucht für:{' '}
            <strong>
              {new Date(activeAppointment.date).toLocaleDateString('de-DE', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              um {activeAppointment.time} Uhr
            </strong>
          </span>
          <button
            onClick={onCancelAppointment}
            className="ml-3 underline hover:text-stone-800 transition-colors text-[11px] uppercase tracking-wider font-bold h-6 px-2 border border-stone-950/20 rounded bg-stone-950/10 hover:bg-stone-950/20"
          >
            Absagen
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="cursor-pointer" onClick={() => handleNavClick('hero')}>
            <Logo size={42} color="#ffffff" showText={true} />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-stone-300 hover:text-white text-xs uppercase tracking-widest font-bold transition-all duration-200 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5A1F] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onCartOpen}
              className="relative p-2.5 rounded-full hover:bg-stone-900 border border-stone-800 text-stone-300 hover:text-[#FF5A1F] transition-all"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF5A1F] text-stone-950 font-mono text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center ring-2 ring-stone-950 animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <a
              href="#profile"
              onClick={(e) => { e.preventDefault(); handleNavClick('profile'); }}
              className="p-2.5 rounded-full hover:bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-all"
            >
              <User className="w-[18px] h-[18px]" />
            </a>

            <button
              onClick={() => handleNavClick('booking')}
              className="bg-[#FF5A1F] hover:bg-[#e44e15] text-stone-950 text-xs font-black uppercase tracking-widest px-5 h-11 rounded-full flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-950/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Gespräch buchen</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button onClick={onCartOpen} className="relative p-2 rounded-full hover:bg-stone-900 text-stone-300">
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF5A1F] text-stone-950 font-mono text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center ring-1 ring-stone-950">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-stone-300 hover:text-white hover:bg-stone-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-stone-950 border-b border-stone-800 py-6 px-4 flex flex-col gap-4 shadow-xl animate-fade-in">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left w-full text-stone-300 hover:text-white text-sm uppercase tracking-wider font-bold pb-2 border-b border-stone-900"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('booking')}
            className="mt-2 w-full bg-[#FF5A1F] text-stone-950 text-xs font-black uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Jetzt Gratis Gespräch Sichern</span>
          </button>
        </div>
      )}
    </header>
  );
}
