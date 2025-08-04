'use client';

import { heroContent } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Predefined positions and sizes for particles to avoid hydration mismatch
const PARTICLE_DATA = [
  { x: -30, y: 20, width: 8, height: 12 },
  { x: 10, y: -15, width: 12, height: 8 },
  { x: 25, y: 30, width: 10, height: 10 },
  { x: -15, y: -25, width: 9, height: 11 },
  { x: 35, y: 10, width: 11, height: 9 },
  { x: -20, y: 35, width: 7, height: 13 },
  { x: 15, y: -30, width: 13, height: 7 },
  { x: -35, y: -10, width: 10, height: 10 },
  { x: 30, y: 25, width: 8, height: 12 },
  { x: -10, y: 15, width: 12, height: 8 },
  { x: 20, y: -20, width: 9, height: 11 },
  { x: -25, y: 30, width: 11, height: 9 },
  { x: 5, y: -25, width: 7, height: 13 },
  { x: -15, y: 15, width: 13, height: 7 },
  { x: 25, y: -10, width: 10, height: 10 }
];

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const gradientVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800"
    >
      {/* Animated floating particles background - only render on client */}
      {isMounted && (
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          variants={gradientVariants}
        >
          {PARTICLE_DATA.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: particle.x,
                y: particle.y,
                width: particle.width,
                height: particle.height,
                opacity: 0
              }}
              animate={{
                y: [particle.y, particle.y + (Math.random() * 40 - 20)],
                opacity: [0, 0.2, 0],
                transition: {
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5
                }
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
        >
          <motion.div 
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={textVariants}
            >
              {heroContent.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-violet-200 max-w-2xl"
              variants={textVariants}
            >
              {heroContent.subtitle}
            </motion.p>
            <motion.div variants={ctaVariants}>
              <Link 
                href={heroContent.ctaLink}
                className="inline-block px-8 py-4 bg-white text-violet-900 font-bold rounded-full hover:bg-violet-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {heroContent.ctaText}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src={heroContent.imageUrl}
                alt="Featured electronic device"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-violet-900/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
    </motion.section>
  );
}