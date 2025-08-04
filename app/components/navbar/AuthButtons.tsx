'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function AuthButtons({ isMobile = false }: { isMobile?: boolean }) {
  const buttons = [
    { label: 'Login', path: '/login', variant: 'secondary' as const },
    { label: 'Sign Up', path: '/signup', variant: 'primary' as const },
  ];

  return (
    <div className={`flex ${isMobile ? 'flex-col space-y-4 mt-4' : 'space-x-3'}`}>
      {buttons.map((button, i) => (
        <motion.div
          key={button.path}
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: 0.2 + i * 0.1 }
          }}
          whileHover={{ scale: 1.03 }}
        >
          <Link href={button.path}>
            <motion.button
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                button.variant === 'primary'
                  ? 'bg-gradient-to-r from-violet-600 to-violet-800 text-white shadow-lg hover:shadow-violet-500/30'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-violet-500 hover:text-violet-600'
              }`}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {button.label}
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}