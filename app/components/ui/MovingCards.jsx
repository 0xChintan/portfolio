'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    title: "An exceptional developer who brings both technical expertise and creative problem-solving to every project.",
    description: "Sarah Chen, CTO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2069"
  },
  {
    title: "Delivered our project ahead of schedule with outstanding attention to detail and performance optimization.",
    description: "Michael Rodriguez, Product Manager, InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070"
  },
  {
    title: "A true professional who understands both the technical and business aspects of software development.",
    description: "Emily Johnson, CEO, StartupX",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070"
  },
  {
    title: "Transformed our legacy system into a modern, scalable architecture. Exceptional problem-solving skills.",
    description: "David Kim, Tech Lead, Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
  },
  {
    title: "Outstanding ability to translate complex requirements into elegant technical solutions.",
    description: "Lisa Zhang, Director of Engineering",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070"
  }
];

export const MovingCards = ({
  items = testimonials,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSpeed = () => {
    switch (speed) {
      case 'fast':
        return 20;
      case 'normal':
        return 40;
      case 'slow':
        return 60;
      default:
        return 40;
    }
  };

  const containerVariants = {
    initial: { x: direction === 'left' ? 0 : '-100%' },
    animate: {
      x: direction === 'left' ? '-100%' : 0,
      transition: {
        duration: getSpeed(),
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      },
    },
    paused: {
      x: direction === 'left' ? '-100%' : 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? 'paused' : 'animate'}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] h-[400px] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black to-zinc-900/50 p-4">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
