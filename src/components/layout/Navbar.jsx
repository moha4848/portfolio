import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { translations, languages } from '../../data/portfolioData';

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

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-xl z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative group px-3 py-2 transition-colors ${location.pathname === link.path ? 'text-white font-bold' : 'text-slate-300 hover:text-white'}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 shadow-lg"
              >
                <span className="emoji-flag text-xl">{languages.find(l => l.code === lang)?.flag}</span>
                <span className="text-sm font-medium hidden sm:block text-white">
                  {languages.find(l => l.code === lang)?.code.toUpperCase()}
                </span>
                <ChevronDown size={16} className={`text-white ${langMenuOpen ? 'rotate-180 transition-transform' : ''}`} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-slate-700/50 z-50">
                  <div className="p-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => { setLang(language.code); setLangMenuOpen(false); }}
                        className={`w-full flex items-center gap-3 p-3 text-white rounded-lg transition-all duration-200 ${lang === language.code ? 'bg-gradient-to-r from-blue-900/40 to-cyan-900/30' : 'hover:bg-slate-800/80'}`}
                      >
                        <span className="emoji-flag text-xl">{language.flag}</span>
                        <span className="flex-1 text-left font-medium">{language.label}</span>
                        {lang === language.code && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-white bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
          <div className="p-4 border-b border-slate-800">
            <div className="grid grid-cols-2 gap-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => { setLang(language.code); setMenuOpen(false); }}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${lang === language.code ? 'bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-500/50 text-white' : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300'}`}
                >
                  <span className="emoji-flag text-2xl mb-1">{language.flag}</span>
                  <span className="text-sm font-medium">{language.label}</span>
                </button>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`w-full text-left px-6 py-4 transition-colors border-b border-slate-800/50 block ${location.pathname === link.path ? 'text-blue-400 font-bold bg-slate-800/30' : 'text-slate-300 hover:bg-slate-800/50'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
