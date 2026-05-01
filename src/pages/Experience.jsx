import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Experience() {
  const { t } = usePortfolio();
  
  const experiences = [
    {
      titre: 'Stage de fin de formation – ONEE',
      periode: '2024 (2 mois)',
      description: 'Développement d’une application de gestion de laboratoire et de suivi des équipements techniques. Utilisation de PHP/Laravel pour le backend.'
    },
    {
      titre: 'Projet SOUK SaaS',
      periode: '2024 - 2025',
      description: 'Création d’une marketplace multi-vendeurs avec gestion complète des stocks et des commandes.'
    }
  ];

  return (
    <div className="py-24 bg-slate-950 min-h-screen fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-16 tracking-tighter text-center text-white">{t.experienceTitle}</h2>
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-900 p-10 rounded-[2rem] border border-white/5 shadow-2xl hover:border-blue-500/20 transition-all border-t-8 border-t-blue-600">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <h3 className="text-3xl font-bold text-white leading-tight">{exp.titre}</h3>
                <span className="px-5 py-2 bg-blue-500/10 text-blue-400 rounded-full font-bold text-sm whitespace-nowrap border border-blue-500/20">{exp.periode}</span>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
