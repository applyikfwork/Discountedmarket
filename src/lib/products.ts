export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  isDailyDeal?: boolean;
  isTrending?: boolean;
};

export const CATEGORIES = ['Electronics', 'Fashion', 'Home', 'Books', 'Sports', 'Toys'];

const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immerse yourself in sound with these premium noise-cancelling headphones. Features bluetooth 5.0, 30-hour battery life, and a comfortable over-ear design.',
    price: 349.99,
    discountPercentage: 25,
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/headphones/600/600',
    imageHint: 'headphones',
    isDailyDeal: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker Watch',
    description: 'Track your steps, heart rate, and sleep patterns with this sleek and stylish fitness tracker. Waterproof design and a vibrant AMOLED display.',
    price: 199.99,
    discountPercentage: 15,
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/smartwatch/600/600',
    imageHint: 'smartwatch',
  },
  {
    id: '3',
    name: 'Modern Leather Backpack',
    description: 'A stylish and durable backpack for work or travel. Made from genuine leather with multiple compartments, including a padded laptop sleeve.',
    price: 129.99,
    discountPercentage: 30,
    category: 'Fashion',
    imageUrl: 'https://picsum.photos/seed/backpack/600/600',
    imageHint: 'backpack leather',
  },
  {
    id: '4',
    name: 'Classic Aviator Sunglasses',
    description: 'Protect your eyes in style with these timeless aviator sunglasses. Features polarized lenses and a lightweight metal frame.',
    price: 79.99,
    discountPercentage: 20,
    category: 'Fashion',
    imageUrl: 'https://picsum.photos/seed/sunglasses/600/600',
    imageHint: 'sunglasses',
    isDailyDeal: true,
  },
  {
    id: '5',
    name: 'Robotic Vacuum Cleaner',
    description: 'Keep your floors clean effortlessly. This smart robotic vacuum features advanced navigation, powerful suction, and app control.',
    price: 499.99,
    discountPercentage: 40,
    category: 'Home',
    imageUrl: 'https://picsum.photos/seed/vacuum/600/600',
    imageHint: 'robotic vacuum',
  },
  {
    id: '6',
    name: 'Espresso Machine',
    description: 'Become your own barista with this semi-automatic espresso machine. Brew rich, flavorful espresso shots and create perfect cappuccinos and lattes.',
    price: 299.99,
    discountPercentage: 10,
    category: 'Home',
    imageUrl: 'https://picsum.photos/seed/espresso/600/600',
    imageHint: 'espresso machine',
  },
  {
    id: '7',
    name: 'The Midnight Library',
    description: 'A captivating novel by Matt Haig that explores the choices that go into a life well lived. A #1 New York Times bestseller.',
    price: 26.00,
    discountPercentage: 35,
    category: 'Books',
    imageUrl: 'https://picsum.photos/seed/book/600/600',
    imageHint: 'book cover',
  },
  {
    id: '8',
    name: 'Professional Yoga Mat',
    description: 'Enhance your practice with this non-slip, extra-cushioned yoga mat. Made from eco-friendly materials for a comfortable and stable workout.',
    price: 89.99,
    discountPercentage: 22,
    category: 'Sports',
    imageUrl: 'https://picsum.photos/seed/yoga/600/600',
    imageHint: 'yoga mat',
    isDailyDeal: true,
  },
   {
    id: '9',
    name: 'Portable Bluetooth Speaker',
    description: 'Take your music anywhere with this compact and powerful Bluetooth speaker. Waterproof, dustproof, and features a 12-hour battery life.',
    price: 99.99,
    discountPercentage: 18,
    category: 'Electronics',
    imageUrl: 'https://picsum.photos/seed/speaker/600/600',
    imageHint: 'bluetooth speaker',
  },
  {
    id: '10',
    name: 'Organic Cotton Bath Towel Set',
    description: 'Wrap yourself in luxury with this ultra-soft and absorbent bath towel set. Made from 100% organic cotton.',
    price: 69.99,
    discountPercentage: 25,
    category: 'Home',
    imageUrl: 'https://picsum.photos/seed/towels/600/600',
    imageHint: 'bath towels',
  },
  {
    id: '11',
    name: 'Leather Strap Watch',
    description: 'A timeless timepiece featuring a minimalist dial and a genuine leather strap. A perfect blend of classic design and modern sophistication.',
    price: 250.00,
    discountPercentage: 50,
    category: 'Fashion',
    imageUrl: 'https://picsum.photos/seed/leatherwatch/600/600',
    imageHint: 'leather watch',
  },
  {
    id: '12',
    name: '"Atomic Habits" by James Clear',
    description: 'An easy & proven way to build good habits & break bad ones. A runaway bestseller that will reshape the way you think about progress and success.',
    price: 27.00,
    discountPercentage: 33,
    category: 'Books',
    imageUrl: 'https://picsum.photos/seed/habits/600/600',
    imageHint: 'book cover business',
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getDailyDeals() {
  return products.filter((p) => p.isDailyDeal);
}

export function getDiscountedPrice(product: Product) {
    return product.price * (1 - product.discountPercentage / 100);
}
