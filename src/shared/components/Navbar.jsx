import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const t = portfolioData.nav[language];

  const links = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.skills, path: '/skills' },
    { name: t.projects, path: '/projects' },
    { name: t.experience, path: '/experience' },
    { name: t.education, path: '/education' },
    { name: t.contact, path: '/contact' },
    { name: t.dashboard, path: '/dashboard' }
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-slate-800/50 rounded-2xl shadow-2xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          YM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                location.pathname === link.path 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
