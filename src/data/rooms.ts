export type RoomCategory = 'Standard' | 'Deluxe' | 'Luxury' | 'Suite'

export interface Room {
  id: string
  name: string
  category: RoomCategory
  price: number
  bed: string
  description: string
  longDescription: string
  amenities: string[]
  image: string
}

export const rooms: Room[] = [
  {
    id: 'standard-single',
    name: 'Standard Single Room',
    category: 'Standard',
    price: 60000,
    bed: 'Single Bed',
    description:
      'A cozy, well-appointed room with everything you need for a comfortable stay.',
    longDescription:
      "Our Standard Single Room is designed for guests who want comfort without compromise. It features a plush single bed, soft lighting, and clean modern decor, giving you a restful retreat after a long day. It's an ideal choice for solo business travelers or short stays.",
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Private Bathroom', 'Daily Housekeeping'],
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'deluxe-single',
    name: 'Deluxe Single Room',
    category: 'Deluxe',
    price: 70000,
    bed: 'Single Bed',
    description:
      'Extra space and upgraded finishes for guests who want a touch more comfort.',
    longDescription:
      'Step up to more space and richer finishes in our Deluxe Single Room. With upgraded furnishings, a dedicated work corner, and warmer ambient lighting, this room suits guests who want a little extra comfort during their stay.',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-screen TV', 'Work Desk', 'Mini Fridge', 'Daily Housekeeping'],
    image:
      '/images/deluxe-room.jpeg',
  },
  {
    id: 'luxury-single',
    name: 'Luxury Single Room',
    category: 'Luxury',
    price: 80000,
    bed: 'Single Bed',
    description:
      'Premium furnishings and refined decor for an elevated solo stay.',
    longDescription:
      'Indulge in premium furnishings, refined decor, and thoughtful details in our Luxury Single Room. Every element, from the bedding to the lighting, is chosen to create a calm, elevated experience for guests who expect more.',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Smart TV', 'Premium Bedding', 'Mini Bar', '24/7 Room Service'],
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'suite-double',
    name: 'Suite Double Room',
    category: 'Suite',
    price: 120000,
    bed: 'Double Bed',
    description:
      'Our most spacious suite, designed for comfort, privacy, and sophistication.',
    longDescription:
      'Our Suite Double Room is the most spacious option at Wasser Hotel, built for comfort, privacy, and sophistication. With a generous double bed, a separate seating area, and elegant finishes throughout, it is perfect for couples or guests who simply want more room to unwind.',
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Smart TV', 'Separate Seating Area', 'Mini Bar', '24/7 Room Service', 'Premium Bedding'],
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  },
]

export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString('en-NG')}`
