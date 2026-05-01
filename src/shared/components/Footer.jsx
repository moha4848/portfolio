import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  const social = portfolioData.social;
  const icons = { Github, Linkedin, Instagram, Mail };

  return (
    <footer className="mt-20 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-2">
          <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Yousfi Mohammed
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} — Built with React & Framer Motion
          </p>
        </div>

        <div className="flex gap-4">
          {social.map((item) => {
            const Icon = icons[item.icon];
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
