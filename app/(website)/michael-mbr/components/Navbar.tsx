'use client'
import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Factory, Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onSendRequestClick: () => void;
}

export const Navbar = ({ activePage, setActivePage, onSendRequestClick }: { activePage: import("../types").ActivePage; setActivePage: (p: import("../types").ActivePage) => void; onSendRequestClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'startseite' as ActivePage, label: 'Startseite' },
    { id: 'leistungen' as ActivePage, label: 'Leistungen & Werkstoffe' },
    { id: 'ueber-uns' as ActivePage, label: 'Über uns' },
    { id: 'kontakt' as ActivePage, label: 'Kontakt & Bedingungen' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* Upper Info bar for high seriousness */}
      <div className="hidden border-b border-slate-100 bg-slate-50 py-1.5 text-xs text-slate-500 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 font-mono">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone id="phone-icon-top" className="h-3 w-3 text-slate-400" /> +49 (0) 4642 922 00
            </span>
            <span className="flex items-center gap-1.5">
              <Mail id="mail-icon-top" className="h-3 w-3 text-slate-400" /> info@mbr-guss-schmiede.de
            </span>
          </div>
          <div>
            <span className="text-slate-400">Qualitätsführend seit über 15 Jahren</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo with Industrial Flair */}
        <div 
          id="brand-logo"
          className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => handleNavClick('startseite')}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-900 text-white shadow-sm shadow-slate-500">
            <Factory id="header-factory-logo" className="h-5 w-5 text-slate-100" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-bold tracking-tight text-slate-950">MBR GmbH</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-slate-600">B2B</span>
            </div>
            <p className="hidden text-[10px] tracking-wide text-slate-500 max-[420px]:hidden sm:block">
              Handelsgesellschaft für Guss- und Schmiedeprodukte
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`font-display text-sm font-medium transition-colors hover:text-blue-600 px-1 py-2 ${
                      isActive ? 'text-blue-700' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <button
            id="nav-cta-btn"
            onClick={onSendRequestClick}
            className="rounded bg-blue-700 px-4 py-2 font-display text-xs font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Anfrage senden
          </button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            id="nav-cta-btn-mobile"
            onClick={onSendRequestClick}
            className="rounded bg-blue-700 px-3 py-1.5 font-display text-xs font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Anfrage
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Hauptmenü"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 bg-white md:hidden"
          >
            <div className="space-y-1.5 px-6 py-4">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full rounded-md px-3 py-2.5 text-left font-display text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 font-semibold' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3 font-mono text-xs text-slate-500">
                <p className="px-3">Haben Sie Fragen? Rufen Sie uns direkt an:</p>
                <a href="tel:+49464292200" className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded text-slate-800 font-semibold">
                  <Phone className="h-3 w-3 text-blue-600" /> +49 (0) 4642 922 00
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
