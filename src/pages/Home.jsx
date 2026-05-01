import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Home() {
  const { t } = usePortfolio();
  
  return (
    <div className="fade-in">
      <section className="min-h-[85vh] flex items-center bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 tracking-wide uppercase border border-blue-500/20">Portfolio 2024</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 text-white tracking-tighter">YOUSFI <br /><span className="text-blue-500">MOHAMMED</span></h1>
            <p className="text-xl text-slate-400 font-medium max-w-lg mb-10 leading-relaxed">{t.role}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all no-underline">Voir Mes Projets</Link>
              <Link to="/about" className="px-8 py-4 bg-slate-900 border border-white/5 text-white rounded-xl font-bold hover:bg-slate-800 hover:-translate-y-1 transition-all no-underline">En Savoir Plus</Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/profile.jpeg" alt="Yousfi Mohammed" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-12">Me Contacter Directement</h2>
          <div className="flex justify-center gap-12">
            <a href={`mailto:${t.email}`} className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110"><Mail size={40} /></a>
            <a href="https://github.com/moha4848" className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110"><Github size={40} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
