'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

export function Logo() {
  const path1 = useMotionValue(0);
  const path2 = useMotionValue(0);
  const path3 = useMotionValue(0);
  const scale = useMotionValue(0.8);
  const rotate = useMotionValue(0);
  const textOpacity = useMotionValue(0);
  const textX = useMotionValue(-10);

  useEffect(() => {
    const sequence = async () => {
      await animate(path1, 1, { duration: 0.8, ease: "easeInOut" });
      await animate(path2, 1, { duration: 0.8, ease: "easeInOut", delay: 0.2 });
      await animate(path3, 1, { duration: 0.8, ease: "easeInOut", delay: 0.4 });
      await animate(scale, 1, { duration: 0.6, ease: "backOut" });
      animate(rotate, 360, { duration: 8, repeat: Infinity, ease: "linear" });
      await animate(textOpacity, 1, { duration: 0.5, ease: "easeOut" });
      await animate(textX, 0, { duration: 0.4, ease: "easeOut" });
    };

    sequence();
  }, []);

  return (
    <motion.div 
      className="flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ scale, rotate }}
      >
        <motion.path
          d="M22 0L30 12H14L22 0Z"
          fill="#7C3AED" 
          style={{ pathLength: path1 }}
          stroke="#7C3AED"
          strokeWidth="0.5"
        />
        <motion.path
          d="M22 44L14 32H30L22 44Z"
          fill="#6D28D9"
          style={{ pathLength: path2 }}
          stroke="#6D28D9"
          strokeWidth="0.5"
        />
        <motion.circle
          cx="22"
          cy="22"
          r="8"
          fill="#8B5CF6" 
          stroke="#8B5CF6"
          strokeWidth="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
        />
        <motion.path
          d="M22 12V32"
          stroke="white"
          strokeWidth="2"
          style={{ pathLength: path3 }}
        />
        <motion.path
          d="M12 22H32"
          stroke="white"
          strokeWidth="2"
          style={{ pathLength: path3 }}
        />
      </motion.svg>

      <motion.span 
        className="ml-3 text-xl font-bold tracking-tight" 
        style={{ 
          opacity: textOpacity,
          x: textX,
          background: "linear-gradient(90deg, #7C3AED 0%, #6D28D9 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        ElectroNex
      </motion.span>
    </motion.div>
  );
}