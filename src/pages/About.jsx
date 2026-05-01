import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function About() {
  const { t } = usePortfolio();
  
  const formations = [
    { titre: 'Technicien Spécialisé en Développement Digital', etablissement: 'ISTA Lazaret, Oujda', periode: '2024 - 2026', description: 'Formation en cours.' },
    { titre: 'Baccalauréat Sciences Physiques', etablissement: 'Lycée Larbi al-Houssaini', periode: '2023 - 2024', description: 'Obtenu avec mention.' }
  ];

  return (
    <div className="py-24 bg-slate-950 min-h-screen fade-in">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-12 tracking-tighter border-b border-white/5 pb-8 text-white">{t.aboutTitle}</h2>
        <div className="space-y-8 text-xl text-slate-400 leading-relaxed">
          <p className="bg-slate-900 p-8 rounded-3xl text-slate-200 font-medium italic border-l-8 border-blue-500 shadow-xl">{t.aboutText1}</p>
          <p>{t.aboutText2}</p>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-black mb-12 tracking-tighter text-white">{t.formationTitle}</h3>
          <div className="space-y-12 border-l-2 border-white/5 pl-8 ml-4">
            {formations.map((f, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <h4 className="text-2xl font-bold mb-2 text-white">{f.titre}</h4>
                <p className="text-blue-400 font-bold mb-3">{f.etablissement} • {f.periode}</p>
                <p className="text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
