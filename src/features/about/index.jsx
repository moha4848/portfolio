import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, GlassCard } from '../../shared/ui';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Target, Zap, Coffee, Sparkles } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  const t = portfolioData.common[language];

  const values = [
    { icon: Target, title: t.precision, desc: t.precisionDesc },
    { icon: Zap, title: t.efficiency, desc: t.efficiencyDesc },
    { icon: Heart, title: t.passion, desc: t.passionDesc }
  ];

  return (
    <PageWrapper>
      <div className="space-y-20 py-10">
        {/* Top Section: Journey */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                {portfolioData.nav[language].about}
              </h2>
              <div className="w-20 h-2 bg-blue-600 rounded-full" />
            </div>
            
            <div className="relative">
               <div className="absolute -left-6 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800" />
               <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium pl-6 italic">
                "{p.about}"
              </p>
            </div>
 
            <div className="flex gap-4 pt-4">
               {values.map((v, i) => (
                 <div key={i} className="flex flex-col items-center gap-2">
                   <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl">
                     <v.icon size={20} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{v.title}</span>
                 </div>
               ))}
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden group shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Sparkles size={120} className="text-blue-500 opacity-20 group-hover:scale-125 transition-transform duration-1000" />
            </div>
            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
               <p className="text-sm font-bold text-white uppercase tracking-[0.2em] text-center">
                 "{t.tagline}"
               </p>
            </div>
          </motion.div>
        </div>
 
        {/* Bottom Section: Skills Bento Grid */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              {t.softSkillsTitle}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">{t.softSkillsDesc}</p>
          </div>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 flex flex-col items-center text-center gap-4 group hover:border-blue-500/50 transition-all shadow-xl hover:shadow-blue-500/10">
                  <div className="p-4 bg-blue-600 text-white rounded-2xl group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      {skill}
                    </span>
                    <div className="h-1 w-8 bg-blue-600 mx-auto rounded-full group-hover:w-16 transition-all" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Fun Fact Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-12 bg-slate-900 rounded-[3rem] text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Coffee size={200} className="text-white" />
          </div>
          <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-sm">{t.anecdote}</h4>
          <p className="text-2xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            {t.anecdoteDesc}
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default About;
