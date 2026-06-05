'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Building, ShieldCheck, Award, Server,
  Users, CheckCircle2, Phone, Mail,
  Briefcase, FileText, MapPin, Clock, ArrowRight
} from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSummary } from './components/ServicesSummary';
import { Sectors } from './components/Sectors';
import { SectorsGrid } from './components/SectorsGrid';
import { Materials } from './components/Materials';
import { Processes } from './components/Processes';
import { AboutUs } from './components/AboutUs';
import { ContactTerms } from './components/ContactTerms';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ActivePage } from './types';

export default function MBRPage() {
  const [activePage, setActivePage] = useState<ActivePage>('startseite');

  const handleSendRequestClick = () => {
    setActivePage('kontakt');
    setTimeout(() => {
      const element = document.getElementById('contact-form-card');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleViewServicesClick = () => {
    setActivePage('leistungen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mbr-root flex min-h-screen flex-col bg-[#F8FAFC] pt-9">

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onSendRequestClick={handleSendRequestClick}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">

          {/* ── STARTSEITE ── */}
          {activePage === 'startseite' && (
            <motion.div
              key="startseite"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Hero
                onSendRequestClick={handleSendRequestClick}
                onViewServicesClick={handleViewServicesClick}
              />

              {/* Trust Ticker */}
              <div className="bg-slate-950 border-y border-slate-900 py-4 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                  <div className="flex flex-wrap items-center justify-between gap-y-4 gap-6 text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-500" /> TÜV AD 2000-W0</span>
                    <span className="text-slate-800 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-blue-500" /> IATF 16949 Zertifiziert</span>
                    <span className="text-slate-800 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><Building className="h-4 w-4 text-slate-400" /> ISO 9001:2015</span>
                    <span className="text-slate-800 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-teal-400" /> APZ nach DIN EN 10204 3.1 & 3.2</span>
                    <span className="text-slate-800 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-purple-400" /> Premium B2B Zulieferer</span>
                  </div>
                </div>
              </div>

              <ServicesSummary onLearnMoreClick={handleViewServicesClick} />

              {/* Sektoren */}
              <section className="mx-auto max-w-7xl px-6 py-24 border-b border-slate-100">
                <div className="mb-14 text-center max-w-3xl mx-auto">
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 font-mono text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                    Branchenspezifische Bauteile
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    Erprobte Bauteilelösungen nach Branchensegment
                  </h2>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    Wählen Sie einen Industriesektor, um spezifische Prüfvorgaben, Toleranzanforderungen und die zugeordneten Fertigungsverfahren unserer Partnerwerke einzusehen.
                  </p>
                </div>
                <Sectors />
              </section>

              {/* Kontaktperson */}
              <section className="bg-slate-50 border-b border-slate-100 py-24">
                <div className="mx-auto max-w-7xl px-6">
                  <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-6 space-y-6">
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">Persönliche Verantwortung</span>
                      <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950">
                        Ihr Partner für den technischen Guss- und Schmiedebedarf
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        MBR GmbH wird von Herrn M. Bresemann persönlich geführt. Mit über fünfzehn Jahren Erfahrung in Gießereiaudits, Metallurgie und asiatischer Logistikberatung steht er Ihnen als kompetenter Berater zur Seite.
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Wir pflegen bewusste Exklusivkontakte, statt unverbindliche Portale zu betreiben. Jede Anfrage durchläuft eine strenge technische Machbarkeitsanalyse, bevor Kapazitäten im Werk gebucht werden.
                      </p>
                      <div className="flex flex-col gap-3 font-mono text-xs">
                        <div className="flex items-center gap-3 text-slate-700">
                          <Clock className="h-4 w-4 text-blue-700 shrink-0" />
                          <span>B2B-Angebotsbewertung in der Regel innerhalb von 24 bis 48 Stunden.</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Vollständige Vertragsabwicklung nach deutschem Schuldrecht.</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-5 font-mono text-[9px] text-slate-400 uppercase">
                          Direktkontakt Geschäftsführung
                        </div>
                        <div className="flex items-center gap-5">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-200 text-white font-display font-extrabold text-xl">
                            MB
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold text-slate-950">M. Bresemann</h3>
                            <p className="font-mono text-[11px] text-blue-700 font-bold uppercase tracking-wider">Geschäftsführer / Managing Director</p>
                            <p className="text-xs text-slate-400 mt-0.5">MBR GmbH Handelsgesellschaft</p>
                          </div>
                        </div>
                        <div className="mt-8 border-t border-slate-100 pt-6 space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                            <span className="text-slate-400 uppercase tracking-wide">Zentrale Telefon</span>
                            <a href="tel:+49464292200" className="font-semibold text-slate-950 hover:text-blue-700 transition-colors">+49 (0) 4642 922 00</a>
                          </div>
                          <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                            <span className="text-slate-400 uppercase tracking-wide">Mobiltelefon</span>
                            <a href="tel:+491714113988" className="font-semibold text-slate-950 hover:text-emerald-700 transition-colors">+49 (0) 171 411 39 88</a>
                          </div>
                          <div className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100">
                            <span className="text-slate-400 uppercase tracking-wide">Direkt-E-Mail</span>
                            <a href="mailto:info@mbr-guss-schmiede.de" className="font-semibold text-slate-950 hover:text-blue-700 transition-colors">info@mbr-guss-schmiede.de</a>
                          </div>
                        </div>
                        <button
                          onClick={handleSendRequestClick}
                          className="mt-8 w-full rounded bg-slate-900 py-3.5 font-display text-xs font-bold text-white transition-colors hover:bg-slate-800 cursor-pointer"
                        >
                          Rückruf anfordern oder Pläne einreichen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mx-auto max-w-7xl px-6 py-24">
                <FAQ />
              </section>
            </motion.div>
          )}

          {/* ── LEISTUNGEN ── */}
          {activePage === 'leistungen' && (
            <motion.div
              key="leistungen"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-7xl px-6 py-16 space-y-20"
            >
              <div className="max-w-4xl border-b border-slate-200 pb-10">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">Technische Qualifikation</span>
                <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Leistungsspektrum, Sektoren & Werkstoffklassen
                </h1>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Entdecken Sie das vollumfängliche Leistungsspektrum der MBR GmbH. Von bewährten Schiffbau- und Hochdruckwerkstoffen über DIN EN-Normstahlguss bis hin zu hochproduktiven automatischen Formstraßen.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display text-2xl font-bold text-slate-950">1. Sektoren & Regelwerke</h3>
                  <p className="text-xs text-slate-500">Zugeordnete Prüfnormen und Branchensegmente unserer Partnerbetriebe.</p>
                </div>
                <SectorsGrid />
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display text-2xl font-bold text-slate-950">2. Herstellungsverfahren</h3>
                  <p className="text-xs text-slate-500">Automatischer Sandguss, Feinguss bis 50 kg & Gesenkschmiedeverfahren.</p>
                </div>
                <Processes />
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display text-2xl font-bold text-slate-950">3. Werkstoff-Datenbank (DIN EN-Klassen)</h3>
                  <p className="text-xs text-slate-500">Technische Eigenschaften und Verwendungszwecke unserer Hauptwerkstoffe.</p>
                </div>
                <Materials />
              </div>
            </motion.div>
          )}

          {/* ── ÜBER UNS ── */}
          {activePage === 'ueber-uns' && (
            <motion.div
              key="ueber-uns"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-7xl px-6 py-16"
            >
              <div className="max-w-4xl border-b border-slate-200 pb-10 mb-16">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">Mit Brief & Siegel</span>
                <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Über das Handelshaus MBR GmbH
                </h1>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Erfahren Sie mehr über unsere Unternehmensgeschichte, unsere Vor-Ort-Zusammenarbeit mit asiatischen Partnergießereien und unser deutsches Servicenetzwerk auf Basis nationaler Normtreue.
                </p>
              </div>
              <AboutUs />
            </motion.div>
          )}

          {/* ── KONTAKT ── */}
          {activePage === 'kontakt' && (
            <motion.div
              key="kontakt"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-7xl px-6 py-16 space-y-16"
            >
              <div className="max-w-4xl border-b border-slate-200 pb-10">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">Zertifizierte Transparenz</span>
                <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Kontakt, Anfrage & Vertragsbedingungen
                </h1>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Laden Sie unsere gültigen Allgemeine Einkaufs-, Liefer- und Zahlungsbedingungen (AEB / ALB) herunter. Reichen Sie hier direkt Bauteilzeichnungen ein, um eine detaillierte technische Machbarkeitsprüfung zu veranlassen.
                </p>
              </div>
              <ContactTerms />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
