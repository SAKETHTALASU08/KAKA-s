import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVibe from './components/AboutVibe';
import Menu from './components/Menu';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1D11]">
      <Navbar />
      <main>
        <Hero />
        <AboutVibe />
        <Menu />
        <ContactFooter />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
