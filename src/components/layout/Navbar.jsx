import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Sparkles } from 'lucide-react';
import { translations, languages } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuOpen && !event.target.closest('.language-selector')) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [langMenuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.nav[0], path: '/' },
    { name: t.nav[1], path: '/about' },
    { name: t.nav[2], path: '/skills' },
    { name: t.nav[3], path: '/projects' },
    { name: t.nav[4], path: '/experience' },
    { name: t.nav[5], path: '/contact' }
  ];

  const currentLang = languages.find(l => l.code === lang);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-2xl z-[100] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center group relative">
              <div className="absolute -inset-2 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="h-12 w-auto relative z-10" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    location.pathname === link.path 
                    ? 'text-white bg-white/5' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Pro Language Switcher */}
            <div className="relative language-selector hidden sm:block">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm border border-blue-500/30">
                  {currentLang?.flag}
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {currentLang?.label}
                </span>
                <ChevronDown size={14} className={`text-slate-500 group-hover:text-white transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 w-56 bg-slate-900/90 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/10 p-3 z-50"
                  >
                    <div className="space-y-1">
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                          className={`w-full flex items-center gap-4 p-3 rounded-[1.2rem] transition-all group ${
                            lang === l.code 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="text-xl">{l.flag}</span>
                          <span className="flex-1 text-left text-[11px] font-black uppercase tracking-widest">{l.label}</span>
                          {lang === l.code && <Sparkles size={14} className="animate-pulse" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-4 rounded-2xl text-white bg-white/5 border border-white/10"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-t border-white/5 overflow-hidden"
          >
            <div className="p-6 space-y-6">
              {/* Mobile Lang Selector */}
              <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setMenuOpen(false); }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl whitespace-nowrap border transition-all ${
                      lang === l.code 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg' 
                      : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="text-xl">{l.flag}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{l.label}</span>
                  </button>
                ))}
              </div>

              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`w-full px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                      location.pathname === link.path 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

