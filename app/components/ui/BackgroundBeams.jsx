'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BackgroundBeams = () => {
  const beamsRef = useRef(null);

  useEffect(() => {
    const moveBeams = (e) => {
      if (!beamsRef.current) return;

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      beamsRef.current.style.setProperty('--x', `${x}%`);
      beamsRef.current.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', moveBeams);
    return () => window.removeEventListener('mousemove', moveBeams);
  }, []);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5 }}
        ref={beamsRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          '--color-1': 'rgb(59, 130, 246)',
          '--color-2': 'rgb(168, 85, 247)',
        }}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at var(--x, 50%) var(--y, 50%), var(--color-1), transparent 25%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at var(--x, 50%) var(--y, 50%), var(--color-2), transparent 25%)',
          }}
        />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-600/30" />
      </motion.div>
    </div>
  );
};
