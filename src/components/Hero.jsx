import React from 'react';
import { Utensils, MessageCircle, GraduationCap, Trees, Clock, Smartphone, ChevronRight } from 'lucide-react';
import { VALUE_BADGES } from '../data/menuData';

export default function Hero() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[#B7410E]" />;
      case 'Trees':
        return <Trees className="w-7 h-7 text-[#B7410E]" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#B7410E]" />;
      case 'Smartphone':
        return <Smartphone className="w-7 h-7 text-[#B7410E]" />;
      default:
        return <Utensils className="w-7 h-7 text-[#B7410E]" />;
    }
  };

  return (
    <section id="home" className="relative hero-gradient pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#EADFCF] overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D69E2E]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#B7410E]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Location Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2E8DC] border border-[#D9C4AD] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#8C461C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping"></span>
              <span>Directly Opposite ICFAI Campus Gate, Shankarpally</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C1D11] tracking-tight leading-tight">
              Taste the <span className="text-[#B7410E] underline decoration-[#D69E2E] decoration-4 underline-offset-4">Best</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#5A4638] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your favorite budget-friendly hangout spot right across the ICFAI Foundation for Higher Education campus!
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B7410E] hover:bg-[#913007] text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#B7410E]/30"
              >
                <Utensils className="w-5 h-5" />
                <span>View Full Menu</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#25D366]/30"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Order Delivery via WhatsApp</span>
              </a>
            </div>

            {/* Quick highlight info */}
            <p className="text-xs text-[#8C6B58] font-semibold pt-1">
              🚀 Fast Delivery to Hostels & ICFAI Campus Gate | Fresh & Hot Guaranteed
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/hero_biryani.jpg"
                  alt="Kaka's Restaurant Special Chicken Biryani and Tandoori Platter"
                  className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Image Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#F6AD55] font-extrabold">Student Favorite</p>
                      <h3 className="text-lg font-bold text-white">Kaka Special Chicken Biryani</h3>
                    </div>
                    <span className="bg-[#B7410E] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Hot & Fresh
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Positioned at top-right with z-10 to prevent overlapping overlay text) */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#EADFCF] hidden sm:flex items-center gap-3 z-10">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5F0] text-[#B7410E] flex items-center justify-center font-extrabold text-xl">
                  ₹
                </div>
                <div>
                  <p className="text-xs text-[#8C6B58] font-bold uppercase">Budget Friendly</p>
                  <p className="text-sm font-extrabold text-[#2C1D11]">₹200–400 for two</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Four Value-Prop Icons / Badges Below Fold */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#EADFCF] card-shadow card-shadow-hover flex items-start gap-4"
            >
              <div className="p-3 bg-[#FAF2EB] rounded-xl flex-shrink-0">
                {getIcon(badge.icon)}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#2C1D11] leading-snug">
                  {badge.title}
                </h3>
                <p className="text-sm text-[#735A4A] font-medium mt-1">
                  {badge.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
