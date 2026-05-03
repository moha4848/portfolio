import React from 'react';
import { portfolioData, languages } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const social = portfolioData.social;
  const icons = { Github, Linkedin, Instagram, Mail };

  return (
    <footer className="mt-20 py-12 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-10">
          
          {/* Unique Language Selector */}
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl md:rounded-full border border-slate-200 dark:border-slate-700/50 shadow-sm">
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl md:rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105' 
                    : 'bg-transparent text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200 hover:shadow-sm'
                  }`}
                >
                  <span className="text-xl filter drop-shadow-sm">{lang.flag}</span>
                  <span className={`${isActive ? 'opacity-100' : 'opacity-80'}`}>{lang.label}</span>
                </button>
              );
            })}
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center md:text-left space-y-1">
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Yousfi Mohammed
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                © {new Date().getFullYear()} — Créé par Yousfi Mohammed
              </p>
            </div>

            <div className="flex gap-3">
              {social.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
