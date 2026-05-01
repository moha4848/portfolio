import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { t, skills } = usePortfolio();
  
  return (
    <div className="py-24 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-16 tracking-tighter border-b border-slate-100 pb-8">{t.skillsTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-blue-200 hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <skill.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{skill.nom}</h3>
              <p className="text-slate-500 font-medium mb-6">{skill.details}</p>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
