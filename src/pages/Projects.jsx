import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckSquare, Layout, Github } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Projects() {
  const { t, projects } = usePortfolio();
  
  return (
    <div className="py-24 bg-slate-50 min-h-screen fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-16 tracking-tighter text-center">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <div key={p.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
              <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
                {p.id === 1 && <Calculator size={100} strokeWidth={1} />}
                {p.id === 2 && <CheckSquare size={100} strokeWidth={1} />}
                {p.id === 7 && <Layout size={100} strokeWidth={1} />}
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-4">{p.titre}</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tech.map(tag => <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest">{tag}</span>)}
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                  <Link to={`/project/${p.id}`} className="text-blue-600 font-black hover:underline tracking-tighter text-lg no-underline">Voir Détails</Link>
                  <a href={`https://github.com/moha4848/${p.repo}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={24} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
