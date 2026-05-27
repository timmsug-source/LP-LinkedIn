'use client'

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KennstDuDas from "./components/KennstDuDas";
import Testimonials from "./components/Testimonials";
import Aufschieben from "./components/Aufschieben";
import Wahrheit from "./components/Wahrheit";
import AboutFabian from "./components/AboutFabian";
import Footer from "./components/Footer";
import FirstGespraechModal from "./components/FirstGespraechModal";

export default function FabianCoachingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="fuel-root relative min-h-screen"
      style={{ background: '#0b0f19', color: '#f1f5f9', fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif' }}
    >
      <Header onOpenConsultation={openModal} />

      <main>
        <Hero onOpenConsultation={openModal} />
        <KennstDuDas />
        <Testimonials />
        <Aufschieben />
        <Wahrheit onOpenConsultation={openModal} />
        <AboutFabian onOpenConsultation={openModal} />
      </main>

      <Footer />

      <FirstGespraechModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
