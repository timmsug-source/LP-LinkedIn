'use client'

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';
import Pillars from './components/Pillars';
import Insight from './components/Insight';
import Testimonials from './components/Testimonials';
import Approach from './components/Approach';
import EBooks from './components/EBooks';
import BookingCalendar from './components/BookingCalendar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartItem, EBook, Appointment } from './types';

export default function CoachEddyPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [activeAppointment, setActiveAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    try {
      const savedAppt = localStorage.getItem('coachEddy_appt');
      if (savedAppt) setActiveAppointment(JSON.parse(savedAppt));
      const savedCart = localStorage.getItem('coachEddy_cart');
      if (savedCart) setCartItems(JSON.parse(savedCart));
    } catch (e) {
      // ignore
    }
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddToCart = (ebook: EBook) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === ebook.id);
      const updated = existing ? prev : [...prev, { product: ebook, quantity: 1 }];
      localStorage.setItem('coachEddy_cart', JSON.stringify(updated));
      return updated;
    });
    setCartDrawerOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.product.id !== productId);
      localStorage.setItem('coachEddy_cart', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('coachEddy_cart');
  };

  const handleBookAppointment = (appt: Appointment) => {
    setActiveAppointment(appt);
    localStorage.setItem('coachEddy_appt', JSON.stringify(appt));
    setTimeout(() => handleScrollToSection('booking'), 150);
  };

  const handleCancelAppointment = () => {
    if (window.confirm('Möchtest du dein gratis Erstgespräch mit Coach Eddy wirklich absagen? Bitte tu das nur im Notfall.')) {
      setActiveAppointment(null);
      localStorage.removeItem('coachEddy_appt');
    }
  };

  return (
    <div
      className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between font-sans coach-eddy-root"
      style={{ paddingTop: '40px' }}
    >
      <Header
        onScrollToSection={handleScrollToSection}
        onCartOpen={() => setCartDrawerOpen(true)}
        cartItemsCount={cartItems.length}
        activeAppointment={activeAppointment}
        onCancelAppointment={handleCancelAppointment}
      />

      <main className="flex-grow">
        <Hero onScrollToSection={handleScrollToSection} />
        <SuccessStories />
        <Pillars />
        <Insight />
        <Testimonials />
        <Approach />
        <EBooks
          onAddToCart={handleAddToCart}
          cartItemsIds={cartItems.map((item) => item.product.id)}
        />
        <BookingCalendar
          onAppointmentBooked={handleBookAppointment}
          activeAppointment={activeAppointment}
        />
      </main>

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
