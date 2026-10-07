import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Leaf, MessageCircle, Phone } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [vegOnlyFilter, setVegOnlyFilter] = useState(false);

  // Filter menu items based on selected category and Veg/Vegan toggle
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesVeg = vegOnlyFilter ? item.isVeg === true : true;
    return matchesCategory && matchesVeg;
  });

  return (
    <section id="menu" className="py-16 lg:py-24 bg-white border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B7410E] bg-[#F4E6D9] px-4 py-1.5 rounded-full">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C1D11] mt-3">
            Explore Kaka's Delicious Menu
          </h2>
          <p className="text-base sm:text-lg text-[#5A4638] mt-3 font-medium">
            Freshly prepared tandoori delicacies, aromatic Hyderabadi biryanis, and Chinese stir-fries.
          </p>
        </div>

        {/* Filter Bar: Category Tabs + Veg/Vegan Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#FAF7F2] p-4 rounded-3xl border border-[#EADFCF]">

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#B7410E] text-white shadow-md'
                    : 'bg-white text-[#4A382A] hover:bg-[#F2E8DC] border border-[#EADFCF]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Distinct Veg/Vegan Filter Toggle */}
          <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-[#EADFCF] shadow-sm">
            <Leaf className={`w-5 h-5 ${vegOnlyFilter ? 'text-[#16A34A]' : 'text-[#8C6B58]'}`} />
            <span className="text-sm font-extrabold text-[#2C1D11]">
              Veg & Vegan Only
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={vegOnlyFilter}
              onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16A34A] ${
                vegOnlyFilter ? 'bg-[#16A34A]' : 'bg-[#D1D5DB]'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  vegOnlyFilter ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

        </div>

        {/* Menu Cards Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#EADFCF] card-shadow card-shadow-hover flex flex-col justify-between"
            >
              <div>
                {/* Badge & Veg Indicator Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    {/* Green circle for Veg / Red for Non-veg */}
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        item.isVeg
                          ? 'border-green-600 bg-green-50'
                          : 'border-red-600 bg-red-50'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? 'bg-green-600' : 'bg-red-600'
                        }`}
                      ></span>
                    </span>

                    <span className="text-xs font-bold text-[#8C6B58] capitalize">
                      {item.category === 'starters'
                        ? 'Tandoori Starter'
                        : item.category === 'mains'
                        ? 'Main Course'
                        : 'Vegetarian Special'}
                    </span>
                  </div>

                  {item.badge && (
                    <span className="bg-[#FFF3C4] text-[#854D0E] text-xs font-extrabold px-3 py-1 rounded-full border border-[#FDE047] shadow-sm flex items-center gap-1">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Dish Name */}
                <h3 className="text-xl font-extrabold text-[#2C1D11]">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#665042] mt-2 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Quick Order Link */}
              <div className="pt-6 mt-6 border-t border-[#EADFCF] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#8C6B58] block font-bold uppercase tracking-wider">
                    Price
                  </span>
                  <span
                    className={`text-xl font-extrabold ${
                      item.price === 'Ask for price'
                        ? 'text-[#B7410E] text-base italic'
                        : 'text-[#2C1D11]'
                    }`}
                  >
                    {item.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#F2E8DC] hover:bg-[#B7410E] text-[#B7410E] hover:text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all border border-[#D9C4AD] hover:border-[#B7410E]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filtered */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#FAF7F2] rounded-3xl border border-[#EADFCF]">
            <p className="text-lg font-bold text-[#5A4638]">
              No items match your selected filter criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setVegOnlyFilter(false);
              }}
              className="mt-4 bg-[#B7410E] text-white text-sm font-bold px-6 py-2.5 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Note under menu section */}
        <div className="mt-12 text-center bg-[#FFF8EE] border border-[#FDE68A] p-6 rounded-2xl max-w-3xl mx-auto">
          <p className="text-sm sm:text-base font-bold text-[#92400E]">
            📌 "Prices for unlisted items available on request — call or WhatsApp us."
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a
              href="tel:+919951777989"
              className="text-xs sm:text-sm font-extrabold text-[#B7410E] hover:underline flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> +91 99517 77989
            </a>
            <span className="text-[#D9C4AD]">|</span>
            <a
              href="https://wa.me/919951777989?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20menu%20prices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-extrabold text-[#25D366] hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Inquiry
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
