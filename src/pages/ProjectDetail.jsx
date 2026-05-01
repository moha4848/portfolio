import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CalculatriceDemo, TodoDemo, SoukOverview } from '../components/Demos';

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects, t } = usePortfolio();
  const p = projects.find(proj => proj.id === parseInt(id));
  
  if (!p) return <div className="py-24 text-center text-white">Project not found</div>;

  return (
    <div className="py-24 bg-slate-950 min-h-screen fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/projects" className="flex items-center gap-2 text-slate-500 hover:text-blue-400 mb-12 font-bold no-underline transition-colors">
          <ArrowRight className="rotate-180" size={20} /> Retour aux projets
        </Link>
        
        <div className="mb-16">
          <h1 className="text-6xl font-black mb-6 tracking-tighter text-white">{p.titre}</h1>
          <div className="flex flex-wrap gap-2">
            {p.tech.map(tc => <span key={tc} className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">{tc}</span>)}
          </div>
        </div>

        <div className="mb-20">
          <div className="p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2.5rem]">
            <div className="bg-slate-900 rounded-[2.4rem] p-12 shadow-2xl">
              {p.id === 1 && <CalculatriceDemo />}
              {p.id === 2 && <TodoDemo />}
              {p.id === 7 && <SoukOverview />}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6">Description</h2>
            <p className="text-xl text-slate-400 leading-relaxed">{p.details}</p>
          </div>
          <div className="p-10 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6">Informations</h2>
            <div className="space-y-6">
              <div>
                <p className="text-slate-500 text-sm mb-1 uppercase font-bold tracking-wider">Repository</p>
                <a href={`https://github.com/moha4848/${p.repo}`} target="_blank" rel="noreferrer" className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2 no-underline transition-colors">
                  <Github size={18} /> View on GitHub
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-sm mb-1 uppercase font-bold tracking-wider">Difficulté</p>
                <p className="font-bold text-white">Avancé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
