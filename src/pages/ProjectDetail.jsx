import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CalculatriceDemo, TodoDemo, SoukOverview } from '../components/Demos';

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects, t } = usePortfolio();
  const p = projects.find(proj => proj.id === parseInt(id));
  
  if (!p) return <div className="py-24 text-center">Project not found</div>;

  return (
    <div className="py-24 bg-white min-h-screen fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/projects" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 mb-12 font-bold no-underline transition-colors">
          <ArrowRight className="rotate-180" size={20} /> Retour aux projets
        </Link>
        
        <div className="mb-16">
          <h1 className="text-6xl font-black mb-6 tracking-tighter">{p.titre}</h1>
          <div className="flex flex-wrap gap-2">
            {p.tech.map(tc => <span key={tc} className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">{tc}</span>)}
          </div>
        </div>

        <div className="mb-20">
          {p.id === 1 && <CalculatriceDemo t={t} />}
          {p.id === 2 && <TodoDemo t={t} />}
          {p.id === 7 && <SoukOverview t={t} />}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Description</h2>
            <p className="text-xl text-slate-600 leading-relaxed">{p.details}</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Informations</h2>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm mb-1 uppercase font-bold tracking-wider">Repository</p>
                <a href={`https://github.com/moha4848/${p.repo}`} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline flex items-center gap-2 no-underline">
                  <Github size={18} /> View on GitHub
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1 uppercase font-bold tracking-wider">Difficulté</p>
                <p className="font-bold text-slate-900">Avancé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
