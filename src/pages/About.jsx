import React from 'react';
import { translations } from '../data/portfolioData';

export default function About({ lang }) {
  const t = translations[lang];

  return (
    <div className="py-20 px-4 min-h-[85vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.aboutTitle}
        </h2>
        
        <div className="gradient-border rounded-2xl bg-slate-800/50 p-8 md:p-12 backdrop-blur-sm shadow-xl">
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              {t.aboutText1}
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              {t.aboutText2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
