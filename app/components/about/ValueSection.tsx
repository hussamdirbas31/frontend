'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent, ValueCard } from '@/lib/about-data';
import type { Variants } from 'framer-motion';

export function ValuesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className="py-20 bg-gradient-to-br from-violet-900 to-violet-800 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-violet-200 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.values.map((value: ValueCard) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={item}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all"
              >
                <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r ${value.color} text-white mb-6`}>
                  <IconComponent className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-violet-100">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}