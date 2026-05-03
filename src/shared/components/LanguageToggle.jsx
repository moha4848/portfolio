import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { languages } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <motion.div 
      className="relative flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700/50 cursor-pointer overflow-hidden shadow-sm"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      layout
      transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
    >
      <AnimatePresence mode="popLayout">
        {!isHovered ? (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2 px-3 py-1"
          >
            <span className="text-xl filter drop-shadow-sm">{currentLang.flag}</span>
            <span className="hidden sm:inline text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
              {language}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1 px-1"
          >
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage(lang.code);
                    setIsHovered(false);
                  }}
                  className={`px-2 py-1 rounded-full text-xl transition-all duration-300 ${
                    isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-500/20 scale-110 z-10' 
                    : 'hover:scale-110 hover:bg-white dark:hover:bg-slate-700'
                  }`}
                  title={lang.label}
                >
                  <span className={`block filter drop-shadow-sm ${isActive ? 'opacity-100' : 'opacity-80 grayscale-[30%]'}`}>
                    {lang.flag}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
