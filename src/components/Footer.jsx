import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { t } = usePortfolio();
  
  return (
    <footer className="py-20 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-2xl font-black text-slate-900">YM<span className="text-blue-600">.</span></div>
        <div className="flex gap-8 text-slate-400 font-bold uppercase text-xs tracking-widest">
          <Link to="/" className="hover:text-blue-600 no-underline transition-colors">Accueil</Link>
          <Link to="/about" className="hover:text-blue-600 no-underline transition-colors">About</Link>
          <Link to="/projects" className="hover:text-blue-600 no-underline transition-colors">Projets</Link>
          <Link to="/dashboard" className="hover:text-blue-600 no-underline transition-colors">Admin</Link>
        </div>
        <div className="text-slate-400 text-sm font-medium">&copy; 2024. {t.rights}</div>
      </div>
    </footer>
  );
}
