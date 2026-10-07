import React, { useState } from 'react';
import { Car, Accessibility, Tv, Dog, CheckCircle2, Send, Heart } from 'lucide-react';
import { AMENITIES } from '../data/menuData';

export default function AboutVibe() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const getAmenityIcon = (iconName) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-[#B7410E]" />;
      case 'Accessibility':
        return <Accessibility className="w-6 h-6 text-[#B7410E]" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-[#B7410E]" />;
      case 'Dog':
        return <Dog className="w-6 h-6 text-[#B7410E]" />;
      default:
        return <Heart className="w-6 h-6 text-[#B7410E]" />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      partySize: '2',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B7410E] bg-[#F4E6D9] px-4 py-1.5 rounded-full">
            Our Story & Vibe
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1D11] mt-3">
            Welcome to Kaka's Restaurant
          </h2>
          <p className="text-lg text-[#5A4638] mt-4 font-medium leading-relaxed">
            Kaka's Restaurant offers a casual, quiet, spacious atmosphere — good for solo dining, student birthday parties, group study breaks, and family dinners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Vibe Image + Amenities Grid */}
          <div className="lg:col-span-6 space-y-8">
            {/* Vibe Image Card */}
            <div className="relative rounded-3xl overflow-hidden card-shadow border-4 border-white">
              <img
                src="/images/restaurant_vibe.jpg"
                alt="Kaka's Restaurant cozy indoor and outdoor seating atmosphere"
                className="w-full h-[320px] sm:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold">Casual & Spacious Dining</h3>
                <p className="text-sm text-gray-200 mt-1">
                  Enjoy outdoor breeze or air-conditioned indoor comfort opposite ICFAI campus.
                </p>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 className="text-xl font-extrabold text-[#2C1D11] mb-4">
                Restaurant Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AMENITIES.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-[#EADFCF] card-shadow flex items-start gap-4"
                  >
                    <div className="p-3 bg-[#FAF2EB] rounded-xl flex-shrink-0">
                      {getAmenityIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#2C1D11]">{item.title}</h4>
                      <p className="text-xs text-[#735A4A] mt-1 font-medium">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Reservation Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EADFCF] card-shadow">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B7410E]">
                  Table Reservation
                </span>
                <h3 className="text-2xl font-extrabold text-[#2C1D11] mt-1">
                  Reserve a Table or Party Space
                </h3>
                <p className="text-sm text-[#735A4A] mt-1">
                  Planning a birthday party, group break, or dinner? Reserve your spot in advance!
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] p-8 rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 bg-[#DCFCE7] text-[#166534] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#166534]">
                    Reservation Request Received!
                  </h4>
                  <p className="text-sm text-[#15803D] font-medium leading-relaxed">
                    Thank you, <span className="font-bold">{formData.name}</span>! We have received your reservation request for <span className="font-bold">{formData.partySize} guests</span> on <span className="font-bold">{formData.date || 'your selected date'}</span>.
                  </p>
                  <p className="text-xs text-[#65A30D]">
                    * Note: This form records your details locally on the front-end. Our staff will confirm via phone call at <span className="font-bold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-[#166534] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#14532D] transition-colors mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#4A382A] uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EADFCF] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#B7410E] focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#4A382A] uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EADFCF] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#B7410E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Date */}
                    <div>
                      <label className="block text-xs font-bold text-[#4A382A] uppercase tracking-wider mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-3 bg-[#FAF7F2] border border-[#EADFCF] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#B7410E] focus:outline-none"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-bold text-[#4A382A] uppercase tracking-wider mb-1">
                        Time
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-3 bg-[#FAF7F2] border border-[#EADFCF] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#B7410E] focus:outline-none"
                      />
                    </div>

                    {/* Party Size */}
                    <div>
                      <label className="block text-xs font-bold text-[#4A382A] uppercase tracking-wider mb-1">
                        Party Size
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full px-3 py-3 bg-[#FAF7F2] border border-[#EADFCF] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#B7410E] focus:outline-none"
                      >
                        <option value="1">1 Person (Solo)</option>
                        <option value="2">2 People</option>
                        <option value="4">4 People</option>
                        <option value="6">6 People</option>
                        <option value="8+">8+ People (Group/Party)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A382A] uppercase tracking-wider mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Outdoor seating preference, birthday arrangement, match day table..."
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EADFCF] rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#B7410E] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#B7410E] hover:bg-[#913007] text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Reservation Request</span>
                  </button>

                  <p className="text-xs text-center text-[#8C6B58] italic pt-1">
                    * No backend server required for demo. Form records locally on front-end.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
