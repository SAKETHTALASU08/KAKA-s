import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, UtensilsCrossed, ExternalLink, Compass } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-[#1F1614] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#F6AD55] bg-[#3B251F] px-4 py-1.5 rounded-full border border-[#5C3A32]">
            Location & Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            Visit Kaka's Restaurant
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-3 font-medium">
            Located directly opposite ICFAI Foundation for Higher Education campus in Shankarpally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

          {/* Left Column: Address, Phone, Instagram & Operating Hours */}
          <div className="lg:col-span-5 space-y-8">

            {/* Address Card */}
            <div className="bg-[#2B1F1C] p-6 rounded-3xl border border-[#44322D]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B7410E] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Address</h3>
                  <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                    I.B.S, Shankarpalle, Rangareddy, Telangana – 501203
                  </p>
                  <p className="text-xs font-extrabold text-[#F6AD55] mt-2 inline-block bg-[#3D2821] px-3 py-1 rounded-full border border-[#5C3A32]">
                    📍 Directly opposite ICFAI Campus Gate
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Instagram Card */}
            <div className="bg-[#2B1F1C] p-6 rounded-3xl border border-[#44322D] space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold text-gray-400">Phone & WhatsApp</h3>
                  <a
                    href="tel:+919951777989"
                    className="text-lg font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    +91 99517 77989
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3D2821] flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold text-gray-400">Follow Us</h3>
                  <a
                    href="https://instagram.com/kakas_restaurant_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>@kakas_restaurant_</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#2B1F1C] p-6 rounded-3xl border border-[#44322D]">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#F6AD55]" />
                <h3 className="text-lg font-bold text-white">Hours of Operation</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#3D2821]">
                  <span className="text-gray-300 font-medium">Dine-in & Takeout</span>
                  <span className="font-extrabold text-[#F6AD55]">11:00 AM – 11:00 PM, every day</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300 font-medium">Home Delivery</span>
                  <span className="font-extrabold text-[#25D366]">11:00 AM – 10:30 PM, every day</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#2B1F1C] p-4 sm:p-6 rounded-3xl border border-[#44322D]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#B7410E]" />
                  <h3 className="text-base font-bold text-white">Map Location</h3>
                </div>
                <span className="text-xs text-gray-400">Shankarpally, Rangareddy</span>
              </div>

              {/* Google Maps Responsive Iframe Placeholder */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#44322D]">
                <iframe
                  title="Kaka's Restaurant Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.614838634812!2d78.1884!3d17.4045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9746e3199df1%3A0x868c26c0ffb4a2f8!2sICFAI%20Foundation%20for%20Higher%20Education%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[110%]"
                ></iframe>
              </div>

              <p className="text-xs text-gray-400 mt-3 text-center">
                💡 Note: Replace embed source with verified Google Place ID when deploying live.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#3D2821] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B7410E] text-white flex items-center justify-center font-bold">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white">Kaka's Restaurant</p>
              <p className="text-xs text-gray-400">Budget-Friendly Non-Veg & Veg Dining near ICFAI Hyderabad</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order via WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/kakas_restaurant_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3D2821] hover:bg-[#5C3A32] text-gray-200 px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#5C3A32]"
            >
              <Instagram className="w-4 h-4" />
              <span>@kakas_restaurant_</span>
            </a>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Kaka's Restaurant. All rights reserved. Designed for ICFAI Students & Campus Community.
        </div>

      </div>
    </section>
  );
}
