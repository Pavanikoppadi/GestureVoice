'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`glass rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 bg-white/5 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
