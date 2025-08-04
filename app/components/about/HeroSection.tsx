'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent } from '@/lib/about-data';
import Image from 'next/image';
import type { Variants } from 'framer-motion';

export function AboutHero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className="relative bg-gradient-to-br from-violet-900 to-violet-800 text-white py-20 overflow-hidden mt-12"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="lg:w-1/2 space-y-6" variants={item}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={item}
            >
              {aboutContent.hero.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-violet-200 font-medium"
              variants={item}
            >
              {aboutContent.hero.subtitle}
            </motion.p>
            <motion.p 
              className="text-lg text-violet-100 max-w-2xl"
              variants={item}
            >
              {aboutContent.hero.description}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-video w-full h-auto">
              <Image
                src={aboutContent.hero.imageUrl}
                alt="ElectroNex store"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}