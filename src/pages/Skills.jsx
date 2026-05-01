import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { t, skills } = usePortfolio();
  
  return (
    <div className="py-24 bg-slate-950 min-h-screen fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-16 tracking-tighter border-b border-white/5 pb-8 text-white">{t.skillsTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-3xl shadow-xl hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                <skill.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{skill.nom}</h3>
              <p className="text-slate-500 font-medium mb-6">{skill.details}</p>
              <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-1.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]" style={{ width: '85%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
