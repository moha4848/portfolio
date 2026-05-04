import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { code: 'fr', label: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'en', label: 'GB', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ar', label: 'MA', flag: 'https://flagcdn.com/w40/ma.png' },
    { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png' }
  ];

  const current = options.find(o => o.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all hover:scale-105 active:scale-95 z-20"
      >
        <img 
          src={current.flag} 
          alt={current.label} 
          className="w-6 h-6 object-cover rounded-full border border-white/20 shadow-sm" 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute top-full right-0 mt-3 p-2 bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-3xl z-30 flex flex-col gap-2"
          >
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  setLanguage(opt.code);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                  language === opt.code 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <img 
                  src={opt.flag} 
                  alt={opt.label} 
                  className="w-5 h-5 object-cover rounded-full border border-white/10" 
                />
                <span className="text-xs font-black tracking-widest">{opt.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
