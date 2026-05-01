import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Button } from '../../shared/ui';
import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const { language } = useLanguage();
  const p = portfolioData.profile[language];
  const social = portfolioData.social;

  const icons = { Github, Linkedin, Instagram, Mail };

  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
        <div className="flex-1 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase mb-2">
              {p.role}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {p.name}
            </h1>
          </motion.div>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {p.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button variant="primary" className="group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              {p.downloadCV}
            </Button>
            <Button variant="secondary">
              {p.contactMe}
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6">
            {social.map((item) => {
              const Icon = icons[item.icon];
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative max-w-md"
        >
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl rotate-3"
          >
            <img 
              src={process.env.PUBLIC_URL + '/profile.jpeg'}
              alt="Yousfi Mohammed" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
            />
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Home;
