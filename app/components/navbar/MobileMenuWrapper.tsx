'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import type { Variants } from 'framer-motion';

export function MobileMenuWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3,
        ease: "easeInOut" // تم تغيير هذا من مصفوفة إلى سلسلة نصية
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut" // تم تغيير هذا من مصفوفة إلى سلسلة نصية
      }
    }
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 }
  };

  return (
    <>
      <button
        className="lg:hidden p-2 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <motion.span 
            className="absolute block h-0.5 w-6 bg-gray-800 rounded-full"
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          />
          <motion.span 
            className="absolute block h-0.5 w-6 bg-gray-800 rounded-full mt-2"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span 
            className="absolute block h-0.5 w-6 bg-gray-800 rounded-full mt-4"
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-lg z-50 lg:hidden shadow-xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <div className="px-6 py-4">
                <ul className="flex flex-col space-y-2">
                  <NavLinks isMobile />
                </ul>
                <div className="mt-6">
                  <AuthButtons isMobile />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}