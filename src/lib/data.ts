export interface Tour {
  id: string;
  title: string;
  duration: string;
  price: number;
  groupSize: string;
  rating: number;
  reviews: number;
  highlights: string[];
  description: string;
  image: string;
  category: 'angkor' | 'adventure' | 'cultural' | 'multi-day';
}

export interface Stay {
  id: string;
  name: string;
  type: 'Hotel' | 'Boutique' | 'Villa' | 'Hostel';
  pricePerNight: number;
  rating: number;
  reviews: number;
  amenities: string[];
  image: string;
  location: string;
}

export interface TransportOption {
  id: string;
  vehicle: string;
  capacity: string;
  pricePerDay: number;
  features: string[];
  icon: string;
}

export const tours: Tour[] = [
  {
    id: 'angkor-sunrise',
    title: 'Angkor Wat Sunrise Small-Group Tour',
    duration: '1 day',
    price: 45,
    groupSize: 'Max 8 people',
    rating: 4.9,
    reviews: 312,
    highlights: ['Sunrise at Angkor Wat', 'Bayon Temple', 'Ta Prohm (Tomb Raider)'],
    description: 'Experience the iconic sunrise over Angkor Wat, then explore the ancient capital city of Angkor Thom and the jungle-claimed ruins of Ta Prohm.',
    image: 'https://images.unsplash.com/photo-1508009603815-28b7ee6c5b45?w=800&q=80&auto=format&fit=crop',
    category: 'angkor',
  },
  {
    id: 'kulen-waterfall',
    title: 'Phnom Kulen Mountain & Waterfall Adventure',
    duration: '1 day',
    price: 55,
    groupSize: 'Max 10 people',
    rating: 4.8,
    reviews: 187,
    highlights: ['River of a Thousand Lingas', 'Kulen Waterfall swim', 'Reclining Buddha'],
    description: 'Journey to the sacred Phnom Kulen mountain, where you can swim in the spectacular waterfall and discover ancient carvings in the riverbed.',
    image: 'https://images.unsplash.com/photo-1530321341288-9c27f9541c5f?w=800&q=80&auto=format&fit=crop',
    category: 'adventure',
  },
  {
    id: 'floating-village',
    title: 'Tonle Sap Floating Village & Kampong Phluk',
    duration: 'Half day',
    price: 35,
    groupSize: 'Max 12 people',
    rating: 4.7,
    reviews: 156,
    highlights: ['Boat cruise', 'Stilted villages', 'Mangrove forests'],
    description: 'Cruise through the largest freshwater lake in Southeast Asia and witness the unique lifestyle of communities living in stilted and floating villages.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80&auto=format&fit=crop',
    category: 'cultural',
  },
  {
    id: 'beng-melea',
    title: 'Beng Melea Hidden Temple Explorer',
    duration: '1 day',
    price: 50,
    groupSize: 'Max 8 people',
    rating: 4.8,
    reviews: 98,
    highlights: ['Uncrowded ruins', 'Jungle temple', 'Indiana Jones vibes'],
    description: 'Venture off the beaten path to Beng Melea, a sprawling jungle temple left in much the same condition as when it was discovered.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e6de?w=800&q=80&auto=format&fit=crop',
    category: 'adventure',
  },
  {
    id: '3day-angkor',
    title: '3-Day Angkor Temples Grand Circuit',
    duration: '3 days',
    price: 135,
    groupSize: 'Max 8 people',
    rating: 4.9,
    reviews: 241,
    highlights: ['All major temples', 'Grand Circuit', 'Banteay Srei', 'Sunrise & sunset'],
    description: 'A comprehensive three-day pass covering every significant temple in the Angkor complex, including the pink sandstone Banteay Srei and remote Grand Circuit sites.',
    image: 'https://images.unsplash.com/photo-1508298333733-491f15c0399b?w=800&q=80&auto=format&fit=crop',
    category: 'multi-day',
  },
  {
    id: 'cooking-class',
    title: 'Cambodian Cooking Class & Market Tour',
    duration: 'Half day',
    price: 30,
    groupSize: 'Max 6 people',
    rating: 4.9,
    reviews: 203,
    highlights: ['Local market visit', 'Hands-on cooking', '3 authentic dishes'],
    description: 'Visit a vibrant local market to shop for ingredients, then learn to cook traditional Cambodian dishes like Fish Amok and Beef Lok Lak.',
    image: 'https://images.unsplash.com/photo-1556910103-4c04af6774a6?w=800&q=80&auto=format&fit=crop',
    category: 'cultural',
  },
];

export const stays: Stay[] = [
  {
    id: 'stay-1',
    name: 'Angkor Grace Hotel',
    type: 'Hotel',
    pricePerNight: 65,
    rating: 4.8,
    reviews: 412,
    amenities: ['Pool', 'Free WiFi', 'Breakfast', 'Spa', 'Airport shuttle'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    location: 'Taphul Village, Siem Reap',
  },
  {
    id: 'stay-2',
    name: 'Treeline Boutique Lodge',
    type: 'Boutique',
    pricePerNight: 95,
    rating: 4.9,
    reviews: 287,
    amenities: ['Pool', 'Restaurant', 'Bar', 'Bicycle rental', 'Tour desk'],
    image: 'https://images.unsplash.com/photo-1582719508461-52d63aaf1d69?w=800&q=80&auto=format&fit=crop',
    location: 'Wat Bo Area, Siem Reap',
  },
  {
    id: 'stay-3',
    name: 'Palm Villa Retreat',
    type: 'Villa',
    pricePerNight: 180,
    rating: 5.0,
    reviews: 94,
    amenities: ['Private pool', 'Chef', 'Garden', 'Free WiFi', 'Airport shuttle'],
    image: 'https://images.unsplash.com/photo-1610530460358-1b4c7c67c3bd?w=800&q=80&auto=format&fit=crop',
    location: 'Road 60, Siem Reap',
  },
  {
    id: 'stay-4',
    name: 'Downtown Siem Reap Hostel',
    type: 'Hostel',
    pricePerNight: 12,
    rating: 4.5,
    reviews: 521,
    amenities: ['Free WiFi', 'Bar', 'Common area', 'Tour desk', 'Laundry'],
    image: 'https://images.unsplash.com/photo-1555854873-aa1c8334ec16?w=800&q=80&auto=format&fit=crop',
    location: 'Pub Street, Siem Reap',
  },
];

export const transportOptions: TransportOption[] = [
  {
    id: 'tuktuk',
    vehicle: 'Tuk Tuk',
    capacity: '1-4 passengers',
    pricePerDay: 20,
    features: ['Open air', 'Authentic experience', 'Flexible stops', 'English-speaking driver'],
    icon: 'car',
  },
  {
    id: 'sedan',
    vehicle: 'Private Sedan',
    capacity: '1-3 passengers',
    pricePerDay: 45,
    features: ['Air conditioned', 'Comfortable seats', 'Bottled water', 'Professional driver'],
    icon: 'car-front',
  },
  {
    id: 'van',
    vehicle: 'Mini Van',
    capacity: '4-12 passengers',
    pricePerDay: 65,
    features: ['Air conditioned', 'Ample luggage space', 'Perfect for groups', 'Professional driver'],
    icon: 'bus',
  },
  {
    id: 'bus',
    vehicle: 'Private Bus',
    capacity: '15-40 passengers',
    pricePerDay: 120,
    features: ['Air conditioned', 'PA system', 'Large groups', 'Professional driver'],
    icon: 'bus',
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    country: 'Australia',
    rating: 5,
    text: 'Our sunrise tour of Angkor Wat was absolutely magical. Our guide knew every hidden corner and made history come alive. Best travel decision we made!',
    avatar: 'SM',
  },
  {
    id: 't2',
    name: 'Thomas Berger',
    country: 'Germany',
    rating: 5,
    text: 'TOS Travel organized everything flawlessly - airport pickup, hotel, and three days of temple tours. The tuk tuk driver was always on time and so friendly.',
    avatar: 'TB',
  },
  {
    id: 't3',
    name: 'Emily Chen',
    country: 'Singapore',
    rating: 5,
    text: 'The cooking class was the highlight of our trip. Shopping at the local market and learning to make Fish Amok was unforgettable. Highly recommend!',
    avatar: 'EC',
  },
];
