'use client';

import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import { MobileMenuWrapper } from './MobileMenuWrapper';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <motion.header 
      className="w-full fixed top-0 left-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <motion.div
        className={`w-full mx-auto px-4 sm:px-6 py-4 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/50' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        animate={isScrolled ? 'scrolled' : 'default'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-1">
            <Logo />
          </div>
          
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              <NavLinks />
            </ul>
          </nav>

          <div className="hidden lg:flex items-center flex-1 justify-end space-x-3">
            <AuthButtons />
          </div>

          <MobileMenuWrapper />
        </div>
      </motion.div>
    </motion.header>
  );
}