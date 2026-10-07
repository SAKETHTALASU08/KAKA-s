import React, { useState } from 'react';
import { UtensilsCrossed, Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About & Vibe', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-[#EADFCF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B7410E] rounded-lg p-1">
            <div className="w-12 h-12 rounded-xl bg-[#B7410E] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-[#2C1D11] block leading-tight">
                Kaka's <span className="text-[#B7410E]">Restaurant</span>
              </span>
              <span className="text-xs font-semibold text-[#8C6B58] block tracking-wide">
                Opp. ICFAI Campus, Shankarpally
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-[#4A382A] hover:text-[#B7410E] transition-colors py-2 border-b-2 border-transparent hover:border-[#B7410E]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#25D366] text-white rounded-full shadow-sm text-xs font-bold flex items-center"
              aria-label="Order via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#2C1D11] hover:text-[#B7410E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B7410E]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EADFCF] px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-lg font-bold text-[#2C1D11] hover:bg-[#F2E8DC] rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#EADFCF]">
            <a
              href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Order Delivery via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
