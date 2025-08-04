import { AboutHero}  from '../components/about/HeroSection';
import { MissionStatement } from '../components/about/MissionStatment';
import { TeamSection } from '../components/about/TeamSection';
import { TimelineSection } from '../components/about/TimeLineSection';
import { ValuesSection } from '../components/about/ValueSection';
import { TechInnovationShowcase } from '../components/about/TechInnovationShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ElectroNex',
  description: 'Discover our story, mission, and the innovative tech behind ElectroNex',
  keywords: ['ElectroNex', 'tech store', 'about us', 'electronics retailer'],
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <MissionStatement />
      <TechInnovationShowcase />
      <TeamSection />
      <TimelineSection />
      <ValuesSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers in discovering cutting-edge technology
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-800 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-violet-600 text-violet-600 font-bold rounded-full hover:bg-violet-50 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}