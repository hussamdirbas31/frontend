/////////////////////////////////////
// components/TechShowcase.tsx (معدل)
'use client';

import { Device } from './types';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

export default function TechShowcase({ devices }: { devices: Device[] }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Future Tech Showcase
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the electronics that will define tomorrow
          </motion.p>
        </motion.div>

        <div className="relative h-[600px]">
          {devices.map((device, index) => {
            const positions = [
              { top: '10%', left: '10%' },
              { top: '10%', right: '10%' },
              { bottom: '10%', left: '10%' },
              { bottom: '10%', right: '10%' },
              { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
            ];
            
            return (
              <motion.div
                key={device.id}
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                className="absolute w-48 h-48 md:w-64 md:h-64"
                style={positions[index % positions.length]}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={device.imageUrl}
                    alt={device.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-8 left-0 right-0 text-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="font-bold text-gray-900">{device.name}</h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}