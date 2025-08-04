// lib/data.ts
import { HeroContent, Device } from '../app/components/home/types';

export const heroContent: HeroContent = {
  title: "Next-Gen Electronics for 2025",
  subtitle: "Experience cutting-edge technology with our premium collection of futuristic devices",
  ctaText: "Explore Now",
  ctaLink: "/products",
  imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

export const featuredDevices: Device[] = [
  {
    id: "1",
    name: "Quantum Laptop X9",
    description: "With neural processing and holographic display",
    imageUrl: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2499,
    category: "laptops"
  },
  {
    id: "2",
    name: "Neural Headphones Pro",
    description: "Brainwave-sync audio technology",
    imageUrl: "https://images.unsplash.com/photo-1584160390777-01f8d88f98c5?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 599,
    category: "audio"
  },
];