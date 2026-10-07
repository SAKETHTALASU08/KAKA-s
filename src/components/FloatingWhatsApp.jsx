import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('home');
    if (!heroElement) return;

    const handleScroll = () => {
      const heroRect = heroElement.getBoundingClientRect();
      // Hide floating CTA while hero section / hero CTAs / value-prop cards are in viewport
      // Show floating CTA only after scrolling past the hero section
      if (heroRect.bottom > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Delivery via WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto whatsapp-pulse'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="font-extrabold text-sm hidden sm:inline tracking-wide">
        Order via WhatsApp
      </span>
    </a>
  );
}
