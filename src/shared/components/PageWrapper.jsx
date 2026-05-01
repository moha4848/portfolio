import React from 'react';
import { motion } from 'framer-motion';

export const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
};
