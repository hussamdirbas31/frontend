'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent, Milestone } from '@/lib/about-data';
import type { Variants } from 'framer-motion';

export function TimelineSection() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key milestones in our growth story
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-violet-500 to-violet-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {aboutContent.milestones.map((milestone: Milestone, index: number) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  variants={item}
                  className="relative"
                >
                  <div className={`flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white text-xl font-bold absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'top-0' : 'top-full'}`}>
                    <Icon className="text-2xl" />
                  </div>
                  <div className={`p-6 rounded-2xl shadow-md ${index % 2 === 0 ? 'ml-auto mr-0 md:mr-12 md:ml-24 bg-gray-50' : 'ml-0 mr-auto md:ml-12 md:mr-24 bg-violet-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      <span className="text-violet-600 font-bold">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}