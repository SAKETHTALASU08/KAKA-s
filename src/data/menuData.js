export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items' },
  { id: 'starters', name: '🍗 Tandoori Starters & Platters' },
  { id: 'mains', name: '🍛 Signature Biryanis & Mains' },
  { id: 'veg', name: '🥦 Vegetarian & Vegan Specials' }
];

export const MENU_ITEMS = [
  // Tandoori Starters & Platters
  {
    id: 1,
    name: 'Mixed Non-Veg Platter',
    category: 'starters',
    price: '₹1119',
    badge: null,
    isVeg: false,
    description: 'An assortment of our finest tandoori kebabs, tikka, and juicy chicken specialties served with green chutney.'
  },
  {
    id: 2,
    name: 'Chicken Platter',
    category: 'starters',
    price: '₹899',
    badge: null,
    isVeg: false,
    description: 'Generous platter of tender chicken tikka, kalmi kebab, and seekh kebab roasted in clay tandoor.'
  },
  {
    id: 3,
    name: 'Chicken Tikka',
    category: 'starters',
    price: 'Ask for price',
    badge: '⭐ Top Reviewed',
    isVeg: false,
    description: 'Succulent boneless chicken marinated in spiced yogurt and grilled to smoky perfection.'
  },
  {
    id: 4,
    name: 'Chicken Seekh Kebab',
    category: 'starters',
    price: 'Ask for price',
    badge: null,
    isVeg: false,
    description: 'Minced chicken blended with fresh herbs and spices, skewered and cooked over live charcoal.'
  },
  {
    id: 5,
    name: 'Kalmi Kebab',
    category: 'starters',
    price: 'Ask for price',
    badge: null,
    isVeg: false,
    description: 'Rich and creamy marinated chicken drumsticks slow-grilled with aromatic Hyderabadi spices.'
  },
  {
    id: 6,
    name: 'Malai Tangdi',
    category: 'starters',
    price: 'Ask for price',
    badge: null,
    isVeg: false,
    description: 'Mouth-melting chicken leg pieces bathed in cashew malai marinade, mildly spiced and grilled.'
  },

  // Signature Biryanis & Mains
  {
    id: 7,
    name: 'Kaka Special Chicken Biryani',
    category: 'mains',
    price: 'Ask for price',
    badge: '⭐ Customer Favorite',
    isVeg: false,
    description: 'Our house-special dum biryani cooked with long-grain basmati rice, tender chicken, and secret spice blend.'
  },
  {
    id: 8,
    name: 'Chicken 65 Biryani',
    category: 'mains',
    price: 'Ask for price',
    badge: null,
    isVeg: false,
    description: 'Spicy South-Indian style Chicken 65 layered over fragrant dum biryani rice.'
  },
  {
    id: 9,
    name: 'Chicken Burnt Garlic Noodles',
    category: 'mains',
    price: 'Ask for price',
    badge: null,
    isVeg: false,
    description: 'Wok-tossed Indo-Chinese noodles infused with golden toasted garlic and sliced chicken.'
  },

  // Vegetarian & Vegan Specials
  {
    id: 10,
    name: 'Gobhi Manchuria',
    category: 'veg',
    price: 'Ask for price',
    badge: '⭐ Highly Rated',
    isVeg: true,
    isVegan: true,
    description: 'Crispy cauliflower florets tossed in tangy Manchurian sauce with chopped spring onions.'
  }
];

export const VALUE_BADGES = [
  {
    icon: 'GraduationCap',
    title: 'Student Budget Friendly',
    detail: 'Avg. ₹200–400 for two'
  },
  {
    icon: 'Trees',
    title: 'Indoor & Cozy Outdoor Seating',
    detail: 'Casual indoor & outdoor spaces'
  },
  {
    icon: 'Clock',
    title: 'Open Daily 11:00 AM – 11:00 PM',
    detail: 'Dine-in, Takeout & Delivery'
  },
  {
    icon: 'Smartphone',
    title: 'Digital Payments Accepted',
    detail: 'UPI, Credit & Debit Cards'
  }
];

export const AMENITIES = [
  {
    icon: 'Car',
    title: 'Free parking',
    detail: 'Lot + street parking available'
  },
  {
    icon: 'Accessibility',
    title: 'Wheelchair accessible',
    detail: 'Entrance, restrooms, and seating'
  },
  {
    icon: 'Tv',
    title: 'Live sports screening',
    detail: 'Watch live matches on match days'
  },
  {
    icon: 'Dog',
    title: 'Dogs allowed',
    detail: 'Welcome in outdoor seating'
  }
];
