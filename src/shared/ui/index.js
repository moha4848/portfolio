import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, className = '', variant = 'primary', type = 'button' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40',
    secondary: 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const Card = ({ children, className = '', hover = true }) => (
  <motion.div
    whileHover={hover ? { y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } : {}}
    className={`bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] shadow-sm transition-all duration-300 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

export const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-slate-800/50 rounded-2xl shadow-xl ${className}`}>
    {children}
  </div>
);
