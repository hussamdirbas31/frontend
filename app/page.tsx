import HeroSection from './components/home/HeroSection';
import Slider from './components/home/Slider';
import TechShowcase from './components/home/TechShowcase';
import { featuredDevices } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <Slider 
        items={featuredDevices} 
        title="Featured Devices" 
        subtitle="Our curated selection of premium electronics"
        className="bg-gray-50"
      />
      
      <TechShowcase devices={featuredDevices.slice(0, 5)} />
      
    
    </main>
  );
}