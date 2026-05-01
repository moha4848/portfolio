import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { data } = usePortfolio();
  return (
    <footer className="py-16 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-black text-slate-900">
          YM<span className="text-blue-600">.</span>
        </div>

        <div className="flex gap-8 text-slate-400 font-bold uppercase text-xs tracking-widest">
          <Link to="/" className="hover:text-blue-600 no-underline transition-colors">Accueil</Link>
          <Link to="/about" className="hover:text-blue-600 no-underline transition-colors">À Propos</Link>
          <Link to="/projects" className="hover:text-blue-600 no-underline transition-colors">Projets</Link>
        </div>

        <div className="flex items-center gap-6">
          <a href={data.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Github size={22} />
          </a>
          <a href={`mailto:${data.email}`} className="text-slate-400 hover:text-slate-900 transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-slate-400 text-xs font-medium">
        &copy; 2024 Yousfi Mohammed. Tous droits réservés.
      </div>
    </footer>
  );
}
