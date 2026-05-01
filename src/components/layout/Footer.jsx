import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { LINKS, translations } from '../../data/portfolioData';

export default function Footer({ lang }) {
  const t = translations[lang];
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex gap-6 mb-8 text-white">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
            <Github size={24} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors">
            <Instagram size={24} />
          </a>
          <a href={`mailto:${LINKS.email}`} className="p-3 bg-slate-800 rounded-full hover:bg-cyan-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="text-slate-400 text-center">
          <p>{t.footer}</p>
          <p className="mt-2 text-sm">{t.footerCredit}</p>
        </div>
      </div>
    </footer>
  );
}
