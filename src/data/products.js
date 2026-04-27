export const categories = [
  { id: 'sofas', label: 'Sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { id: 'couches', label: 'Couches', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4e47b?w=600&q=80' },
  { id: 'wardrobes', label: 'Wardrobes', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
  { id: 'kitchens', label: 'Kitchen Sets', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { id: 'tables', label: 'Dining Tables', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80' },
  { id: 'beds', label: 'Beds & Frames', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80' },
];

export const products = [
  // Sofas
  {
    id: 1,
    name: 'Milano 3-Seater Sofa',
    category: 'sofas',
    price: 480000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
    ],
    description: 'An iconic piece of contemporary elegance. The Milano sofa combines cloud-like cushioning with a sleek, low-profile silhouette. Upholstered in premium linen-blend fabric with solid hardwood legs.',
    features: ['Premium linen-blend upholstery', 'Solid hardwood frame & legs', 'High-density foam cushions', 'Available in 3 colour options'],
    featured: true,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Venezia L-Shaped Sofa',
    category: 'sofas',
    price: 720000,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    ],
    description: 'A spacious L-shaped sectional that transforms any living room into a relaxation sanctuary. The Venezia features deep seats, plush cushions, and a chaise extension for ultimate comfort.',
    features: ['Modular design', 'Velvet or fabric upholstery', 'Ottoman extension included', 'Stain-resistant treatment'],
    featured: true,
    badge: 'New Arrival',
  },
  {
    id: 3,
    name: 'Oxford 2-Seater Sofa',
    category: 'sofas',
    price: 310000,
    image: 'https://images.unsplash.com/photo-1540518614846-65e1e91b2ea6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-65e1e91b2ea6?w=800&q=80',
    ],
    description: 'Refined simplicity at its best. The Oxford is a versatile 2-seater perfect for smaller spaces without compromising on style or comfort.',
    features: ['Compact design', 'Premium fabric upholstery', 'Solid wood legs', 'Easy assembly'],
    featured: false,
    badge: null,
  },

  // Couches
  {
    id: 4,
    name: 'Havana Leather Couch',
    category: 'couches',
    price: 650000,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4e47b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aaa4e47b?w=800&q=80',
    ],
    description: 'Crafted from genuine top-grain leather, the Havana exudes old-world luxury with modern sensibilities. Its tufted back and rolled arms make it a timeless statement piece.',
    features: ['Top-grain genuine leather', 'Hand-tufted backrest', 'Solid oak frame', 'Feather-down cushion filling'],
    featured: true,
    badge: 'Premium',
  },
  {
    id: 5,
    name: 'Lagos Sectional Couch',
    category: 'couches',
    price: 830000,
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    ],
    description: 'Bold and contemporary, the Lagos sectional is designed for large living spaces that demand presence. Features a chaise lounge and built-in storage ottomans.',
    features: ['Built-in storage ottomans', 'Chaise lounge extension', 'Performance fabric', 'Available in 5 colours'],
    featured: false,
    badge: null,
  },
  {
    id: 6,
    name: 'Serene Velvet Couch',
    category: 'couches',
    price: 390000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    ],
    description: 'Luxurious velvet upholstery meets clean Scandinavian lines in this elegant 3-seater couch. A perfect blend of luxury and minimalism.',
    features: ['Premium velvet upholstery', 'Brass-finish legs', 'High-resilience foam', 'Removable & washable covers'],
    featured: false,
    badge: null,
  },

  // Wardrobes
  {
    id: 7,
    name: 'Lumina Sliding Wardrobe',
    category: 'wardrobes',
    price: 560000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    ],
    description: 'Floor-to-ceiling storage elegance. The Lumina sliding wardrobe features mirrored doors that amplify light and space, with a thoughtful interior layout for optimal organisation.',
    features: ['Mirror-panel sliding doors', 'Full-height design', 'Customisable interior layout', 'Soft-close mechanism'],
    featured: true,
    badge: 'Popular',
  },
  {
    id: 8,
    name: 'Nordic 4-Door Wardrobe',
    category: 'wardrobes',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    description: 'Clean lines and practical storage. The Nordic wardrobe offers generous hanging space and integrated drawers in a sleek white or wood-grain finish.',
    features: ['4 large door panels', 'Integrated drawers', 'Adjustable shelving', 'White or oak finish'],
    featured: false,
    badge: null,
  },
  {
    id: 9,
    name: 'Palazzo Walk-In Wardrobe',
    category: 'wardrobes',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    ],
    description: 'Transform your bedroom into a boutique. The Palazzo walk-in system includes shoe racks, jewellery drawers, full-length mirrors and integrated LED lighting.',
    features: ['Integrated LED strip lighting', 'Shoe & accessory sections', 'Full-length mirror panels', 'Custom sizing available'],
    featured: false,
    badge: 'Luxury',
  },

  // Kitchens
  {
    id: 10,
    name: 'Modena Kitchen Suite',
    category: 'kitchens',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
    description: 'A complete kitchen transformation. The Modena suite features handleless cabinets, quartz countertops, and soft-close drawers in a sleek high-gloss finish.',
    features: ['Handleless gloss cabinets', 'Quartz countertop included', 'Soft-close drawers & doors', 'Under-cabinet LED lighting'],
    featured: true,
    badge: 'Featured',
  },
  {
    id: 11,
    name: 'Hampton Kitchen Set',
    category: 'kitchens',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1556909048-3e8cd48c8a55?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909048-3e8cd48c8a55?w=800&q=80',
    ],
    description: 'Classic shaker-style kitchen with a warm, inviting aesthetic. The Hampton set brings timeless charm with modern functionality, perfect for family homes.',
    features: ['Shaker-style door profiles', 'Solid wood frame', 'Granite or laminate countertop', 'Pantry unit included'],
    featured: false,
    badge: null,
  },
  {
    id: 12,
    name: 'Studio Compact Kitchen',
    category: 'kitchens',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
    description: 'Maximising every inch of space without sacrificing style. Ideal for apartments and studio homes, the Studio kitchen is clever, compact and complete.',
    features: ['Space-saving design', 'Integrated appliance spaces', 'Multi-functional island option', 'Easy-clean surfaces'],
    featured: false,
    badge: null,
  },

  // Tables
  {
    id: 13,
    name: 'Florence Dining Table',
    category: 'tables',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80',
    ],
    description: 'A masterpiece of natural beauty. The Florence dining table features a solid oak tabletop with a live-edge finish, supported by elegant steel hairpin legs.',
    features: ['Solid oak live-edge top', 'Hairpin steel legs', 'Seats 6–8 persons', 'Natural oil finish'],
    featured: true,
    badge: 'Bestseller',
  },
  {
    id: 14,
    name: 'Roma Round Table',
    category: 'tables',
    price: 210000,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80',
    ],
    description: 'Perfect for intimate dining settings, the Roma round table encourages conversation with its circular form and pedestal base. Available in marble or wood-top finishes.',
    features: ['Pedestal base design', 'Marble or wood top', 'Seats 4 persons', 'Compact footprint'],
    featured: false,
    badge: null,
  },
  {
    id: 15,
    name: 'Extenda Dining Table',
    category: 'tables',
    price: 440000,
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80',
    ],
    description: 'The smart solution for growing families and entertaining. The Extenda extends from a 6-seater to a 10-seater in seconds with a smooth butterfly-leaf mechanism.',
    features: ['Butterfly-leaf extension', 'Extends from 6 to 10 seats', 'Scratch-resistant surface', 'Walnut or white oak finish'],
    featured: false,
    badge: 'Smart Pick',
  },

  // Beds
  {
    id: 16,
    name: 'Serene King Bed Frame',
    category: 'beds',
    price: 520000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    ],
    description: 'Make your bedroom a sanctuary. The Serene king bed features an upholstered headboard in premium boucle fabric, with a low-profile frame and hidden storage drawers.',
    features: ['Boucle upholstered headboard', 'Under-bed storage drawers', 'Solid wood slat base', 'King or queen sizing'],
    featured: true,
    badge: 'Popular',
  },
  {
    id: 17,
    name: 'Capri Platform Bed',
    category: 'beds',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1540518614846-65e1e91b2ea6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-65e1e91b2ea6?w=800&q=80',
    ],
    description: 'A study in minimalist luxury. The Capri platform bed sits close to the ground for a calming, zen-inspired bedroom aesthetic. No box spring required.',
    features: ['Ultra-low profile design', 'No box spring needed', 'Solid walnut or oak', 'Available in 3 sizes'],
    featured: false,
    badge: null,
  },
  {
    id: 18,
    name: 'Regal Canopy Bed',
    category: 'beds',
    price: 780000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    ],
    description: 'An opulent centrepiece for the master suite. The Regal canopy bed features four solid posts with a fabric-draped crown, creating an immersive retreat.',
    features: ['Four-post canopy design', 'Fabric canopy draping included', 'Hand-carved wood details', 'Custom sizing available'],
    featured: false,
    badge: 'Luxury',
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (cat) => products.filter(p => p.category === cat);
export const getProductById = (id) => products.find(p => p.id === Number(id));
