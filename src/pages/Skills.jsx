import React from 'react';
import { translations, competences } from '../data/portfolioData';

export default function Skills({ lang }) {
  const t = translations[lang];

  return (
    <div className="py-20 px-4 min-h-[85vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.skillsTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.map((skill, index) => (
            <div key={index} className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl bg-slate-900 p-3 rounded-xl border border-slate-700 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skill.nom}
                </h3>
              </div>
              <p className="text-slate-400 mb-6">{skill.details}</p>
              
              {/* Animated Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{t.proficiency || 'Niveau'}</span>
                  <span className="text-blue-400 font-medium">{competences[index % competences.length].niveau}%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-700/50">
                  <div 
                    className={`h-full bg-gradient-to-r ${competences[index % competences.length].color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${competences[index % competences.length].niveau}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
