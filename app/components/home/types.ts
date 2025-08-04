export type Device = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    category: string;
  };
  
  export type HeroContent = {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageUrl: string;
  };
  
  export type SliderProps = {
    items: Device[];
    title: string;
    subtitle?: string;
    className?: string;
  };