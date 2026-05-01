import React from 'react';
import { Download } from 'lucide-react';
import { translations, LINKS } from '../data/portfolioData';

export default function Home({ lang }) {
  const t = translations[lang];

  return (
    <div className="pt-32 pb-20 px-4 min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Avatar with profile image */}
        <div className="w-40 h-40 rounded-full mx-auto mb-8 p-1.5 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-500 animate-gradient">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 shadow-2xl">
            <img
              src={process.env.PUBLIC_URL + '/profile.jpeg'}
              alt="Yousfi Mohammed"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="eager"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
          Yousfi Mohammed
        </h1>

        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl text-blue-200 font-medium">
            {t.role}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <a
            href="/cv.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group text-white"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            {t.downloadCV}
          </a>
          
          <a
            href={`mailto:${LINKS.email}`}
            className="w-full sm:w-auto px-8 py-3 bg-slate-800 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center gap-2 group text-white"
          >
            {t.contactMe}
          </a>
        </div>
      </div>
    </div>
  );
}
