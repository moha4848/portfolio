import React from 'react';
import { motion } from 'framer-motion';

export const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto origin-top"
    >
      {children}
    </motion.div>
  );
};
