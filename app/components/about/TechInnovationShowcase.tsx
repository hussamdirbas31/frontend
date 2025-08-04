'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from 'framer-motion';
import Image from 'next/image';

const innovations = [
  {
    title: "AI-Powered Recommendations",
    description: "Our smart system learns your preferences to suggest perfect tech products",
    icon: "/ai-icon.svg",
    color: "from-purple-600 to-indigo-600"
  },
  {
    title: "AR Product Preview",
    description: "Try products in your space before buying with augmented reality",
    icon: "/ar-icon.svg",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Eco-Friendly Tech",
    description: "Sustainable electronics with minimal environmental impact",
    icon: "/eco-icon.svg",
    color: "from-emerald-500 to-teal-600"
  }
];

export function TechInnovationShowcase() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={card}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we&apos;re revolutionizing tech retail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ y: -10 }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-8">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-6`}>
                  <div className="relative w-10 h-10">
                    <Image src={item.icon} alt="" fill className="object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-6">
                  <button className="text-sm font-medium text-violet-600 hover:text-violet-800 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}