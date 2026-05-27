'use client'

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Eye, Heart, Activity, ClipboardList,
  Phone, ArrowRight,
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import TherapyDetail from './components/TherapyDetail';
import TherapyList from './components/TherapyList';
import ContactView from './components/ContactView';
import BookingForm from './components/BookingForm';

import { THERAPIES } from './data';

export default function NaturheilpraxisPage() {
  const [currentPage, setCurrentPage] = useState<string>('start');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigateToTherapy = (therapyId: string) => {
    setCurrentPage(therapyId);
  };

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  const activeTherapy = THERAPIES.find((t) => t.id === currentPage);

  return (
    <div className="nb-root min-h-screen bg-brand-beige text-brand-charcoal flex flex-col justify-between font-sans select-none antialiased">

      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* ── HOME ── */}
            {currentPage === 'start' && (
              <div className="space-y-20 pb-16">

                <Hero
                  onScheduleCall={handleOpenBooking}
                  onNavigateToTherapy={handleNavigateToTherapy}
                />

                {/* Behandlungsschwerpunkte */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <span className="text-xs uppercase tracking-widest font-mono text-brand-sage-light">Kompetenzzentrum Leichlingen</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sage tracking-tight">
                      Unsere Behandlungsschwerpunkte
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">
                      Wir betrachten dich als Einheit aus Körper, Geist und biochemischem Milieu. Entdecke unsere vier therapeutischen Säulen für dein Wohlbefinden.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { id: 'akupunktur-makuladegeneration', icon: <Eye className="w-6 h-6" />, title: 'AMD & Augen', desc: 'Spezialisierte Augenakupunktur nach Boel zur Begleitung bei Netzhautverkalkung (feuchter & trockener AMD), Glaukom und Erschöpfung des Sehnervs.' },
                      { id: 'hypnosetherapie', icon: <Activity className="w-6 h-6" />, title: 'Stress & Psyche', desc: 'Achtsame klinische Hypnosetherapie zur Entlastung des Nervensystems bei Überforderung, Ängsten, mentalen Blockaden sowie zur Gewichtsreduktion.' },
                      { id: 'wirbelsaeulentherapie', icon: <Heart className="w-6 h-6" />, title: 'Rücken & Wirbel', desc: 'Sanfte Wirbelausrichtung nach Dorn-Breuss und achtsame Zen-Shiatsu Meridianmassage gegen Verspannungen und schmerzhafte Blockaden.' },
                      { id: 'therapien', icon: <ClipboardList className="w-6 h-6" />, title: 'Diagnostik & Milieu', desc: 'Früherkennung mittels Dunkelfeld-Nativblutanalyse und Frequenzregulation nach Clark & Rife zur umfassenden Stoffwechsel-Entlastung.' },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => { setCurrentPage(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="group bg-white rounded-2xl p-6 sm:p-8 border border-brand-sage-pale hover:border-brand-sage cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-full bg-brand-sage-pale/40 flex items-center justify-center text-brand-sage">
                            {item.icon}
                          </div>
                          <h3 className="font-serif text-lg font-bold text-brand-sage group-hover:text-brand-terracotta transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed font-sans">{item.desc}</p>
                        </div>
                        <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-brand-sage group-hover:text-brand-terracotta font-mono transition-colors">
                          <span>Details ansehen</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Mid-Callout Quote */}
                <section className="bg-brand-cream border-y border-brand-sage-pale py-16">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sage leading-relaxed">
                      &ldquo;Deine Gesundheit in besten Händen. Wir nehmen uns die Zeit, die dein Körper für eine nachhaltige Regeneration braucht.&rdquo;
                    </h3>
                    <p className="text-xs uppercase tracking-widest font-mono text-brand-terracotta font-bold">
                      &mdash; Inhaber Michael &amp; Sabine Brenscheidt
                    </p>
                  </div>
                </section>

                {/* CTA Banner */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-brand-sage text-brand-beige rounded-2xl p-8 sm:p-12 overflow-hidden relative shadow-lg">
                    <div className="absolute top-[-50%] right-[-10%] w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                      <div className="lg:col-span-8 space-y-4">
                        <h3 className="font-serif text-2xl sm:text-4xl font-bold">
                          Interesse an einem unverbindlichen Telefonat?
                        </h3>
                        <p className="text-sm text-brand-sage-pale leading-relaxed max-w-2xl font-sans">
                          Schildere uns kurz deine gesundheitlichen Beschwerden. In einem kostenfreien, telefonischen Erstgespräch (ca. 10 – 15 Min.) klären wir, ob und wie wir dich mit unseren Therapien unterstützen können.
                        </p>
                      </div>
                      <div className="lg:col-span-4 lg:text-right">
                        <button
                          onClick={handleOpenBooking}
                          className="px-6 py-3.5 bg-brand-terracotta text-white font-serif font-semibold text-sm rounded-xl hover:bg-opacity-95 transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4 shrink-0" />
                          <span>Jetzt anfragen</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Team Teaser */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl overflow-hidden shadow-md border border-brand-sage-pale">
                        <img
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
                          alt="Heilpraktiker-Gespräch"
                          className="w-full h-auto object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-6">
                      <span className="text-xs uppercase tracking-widest font-mono text-brand-sage-light">Heilpraktiker-Duo</span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sage">
                        Achtsame Begleitung liegt uns am Herzen
                      </h3>
                      <p className="text-sm text-brand-charcoal/80 leading-relaxed font-sans">
                        In unserer Praxis in Leichlingen/Witzhelden legen wir größten Wert auf eine ruhige, entspannte Atmosphäre ohne Zeitdruck. Michael Brenscheidt ist vor allem für die tiefgehende Augentherapie und Blutdiagnostik zuständig, während Sabine Brenscheidt Menschen mit körper- und seelentherapeutischen Methoden wie Hypnose und Shiatsu stärkt.
                      </p>
                      <button
                        onClick={() => { setCurrentPage('ueber-uns'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="px-5 py-3 border border-brand-sage text-brand-sage hover:bg-brand-sage-pale/40 font-semibold rounded-lg text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Mehr über uns erfahren</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </section>

              </div>
            )}

            {/* ── THERAPY DETAIL ── */}
            {activeTherapy && (
              <TherapyDetail therapy={activeTherapy} onOpenBooking={handleOpenBooking} />
            )}

            {/* ── ALL THERAPIES ── */}
            {currentPage === 'therapien' && (
              <TherapyList onSelectTherapy={(t) => { setCurrentPage(t.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            )}

            {/* ── ABOUT ── */}
            {currentPage === 'ueber-uns' && (
              <AboutUs onScheduleCall={handleOpenBooking} />
            )}

            {/* ── CONTACT ── */}
            {currentPage === 'kontakt' && (
              <ContactView />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-charcoal/45 backdrop-blur-sm"
              onClick={handleCloseBooking}
            />
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl z-20 border border-brand-sage-pale max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={handleCloseBooking}
                className="absolute top-4 right-4 text-brand-sage hover:text-brand-terracotta p-2 rounded-full hover:bg-brand-sage-pale/40 transition-colors cursor-pointer text-xl leading-none"
                aria-label="Schließen"
              >
                &times;
              </button>
              <div className="p-1 sm:p-2">
                <BookingForm onClose={handleCloseBooking} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
