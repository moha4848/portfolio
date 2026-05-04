import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Button } from '../../shared/ui';
import { Github, Linkedin, Instagram, Mail, Download, ExternalLink, Code2, Database, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import { statsService } from '../../shared/services/statsService';

const Home = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const p = portfolioData.profile[language];
  const social = portfolioData.social;

  const icons = { Github, Linkedin, Instagram, Mail };

  const techFloating = [
    { icon: <Code2 size={24} />, label: "React", color: "blue", pos: "top-0 -left-10" },
    { icon: <Database size={24} />, label: "Laravel", color: "red", pos: "bottom-10 -right-10" },
    { icon: <Layout size={24} />, label: "UI/UX", color: "purple", pos: "-bottom-5 left-1/4" }
  ];

  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10 min-h-[70vh]">
        <div className="flex-1 text-center lg:text-left space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-12 h-1.5 bg-blue-600 rounded-full" />
              <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-[0.3em] uppercase text-sm">
                {p.role}
              </h2>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
              {p.name.split(' ').map((part, i) => (
                <span key={i} className={i === 1 ? "block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" : ""}>
                  {part}{' '}
                </span>
              ))}
            </h1>
          </motion.div>
 
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            {p.description}
          </motion.p>
 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <a 
              href={process.env.PUBLIC_URL + '/CV_Yousfi_Mohammed.pdf'} 
              download="CV_Yousfi_Mohammed.pdf"
              onClick={() => statsService.trackCVDownload()}
              className="group px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 active:scale-95"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              {p.downloadCV}
            </a>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 text-xs font-black uppercase tracking-widest border-2"
            >
              <Mail size={18} />
              {p.contactMe}
            </Button>
          </motion.div>

          <div className="flex justify-center lg:justify-start gap-4 pt-6">
            {social.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xl border border-slate-100 dark:border-slate-800"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex-1 relative max-w-lg lg:max-w-md w-full"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[4rem] blur-2xl opacity-20 animate-pulse" />
          
          {/* Floating Tech Badges */}
          {techFloating.map((tech, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${tech.pos} z-30 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 hidden md:flex`}
            >
              <div className={`text-${tech.color}-500`}>{tech.icon}</div>
              <span className="text-xs font-black uppercase tracking-tighter dark:text-white">{tech.label}</span>
            </motion.div>
          ))}

          <motion.div 
            whileHover={{ scale: 1.02, rotate: -2 }}
            className="relative aspect-square rounded-[4rem] overflow-hidden border-[12px] border-white dark:border-slate-900 shadow-2xl z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-20 pointer-events-none" />
            <img 
              src={process.env.PUBLIC_URL + '/profile.jpeg'}
              alt="Yousfi Mohammed" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
            />
          </motion.div>
          
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 -right-6 z-20 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center min-w-[120px] rotate-6"
          >
            <span className="text-3xl font-black">2+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Ans d'Études</span>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Home;
