'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function NavLinks({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      {links.map((link, i) => (
        <motion.li
          key={link.path}
          className={isMobile ? 'py-2 border-b border-gray-100 last:border-0' : 'mx-2'}
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: i * 0.1,
              type: "spring",
              stiffness: 150
            }
          }}
        >
          <Link href={link.path} className="relative block">
            <motion.div
              className={`${
                isMobile 
                  ? 'text-gray-800 hover:text-violet-600 text-lg font-medium px-4 py-2' 
                  : 'text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-colors duration-300'
              } ${
                pathname === link.path && !isMobile 
                  ? 'bg-violet-50 text-violet-700' 
                  : ''
              }`}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: isMobile ? '' : 'rgba(238, 242, 255, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {pathname === link.path && !isMobile && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-violet-600 rounded-full"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </motion.div>
          </Link>
        </motion.li>
      ))}
    </>
  );
}