import React from 'react';
import { translations } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Experience({ lang }) {
  const t = translations[lang];

  return (
    <div className="py-20 px-4 min-h-[85vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.formationTitle}
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-500 before:to-blue-500">
          {t.formations.map((form, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                <GraduationCap size={20} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">{form.titre}</h3>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 whitespace-nowrap">
                    {form.periode}
                  </span>
                </div>
                <div className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {form.etablissement}
                </div>
                <p className="text-slate-400 leading-relaxed">{form.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
