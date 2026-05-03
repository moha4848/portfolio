import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, ChevronRight, Zap } from 'lucide-react';

const categoryColors = {
  "Frontend": "blue",
  "Backend": "emerald",
  "Database": "amber",
  "Tools": "violet",
  "Other": "rose"
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers };

  return (
    <PageWrapper>
      <div className="relative min-h-screen py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-4">
              Skills <span className="text-blue-600">Map</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl">
              Une vue panoramique et connectée de mon expertise technique.
            </p>
          </div>

          {/* --- HORIZONTAL MIND MAP (Desktop) --- */}
          <div className="hidden lg:flex items-start gap-0 relative">
            
            {/* 1. ROOT NODE (Left) */}
            <div className="flex flex-col justify-center min-h-[600px] z-20">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-2xl flex flex-col items-center gap-3 w-48 text-center"
              >
                <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/50">
                  <Zap className="text-white fill-white" size={24} />
                </div>
                <span className="text-sm font-black text-white uppercase tracking-widest">Yousfi.Dev</span>
              </motion.div>
            </div>

            {/* 2. THE MAIN HUB & CATEGORIES */}
            <div className="flex-1 flex flex-col justify-center gap-12 pl-24 relative">
              {/* Vertical line connecting categories */}
              <div className="absolute left-0 top-[10%] bottom-[10%] w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
              
              {skills.map((skill, idx) => {
                const color = categoryColors[skill.name] || "blue";
                const Icon = icons[skill.icon] || Code;
                
                return (
                  <div key={skill.name} className="relative group">
                    {/* Horizontal connection from root vertical line */}
                    <div className="absolute left-[-96px] top-1/2 -translate-y-1/2 w-24 h-1 bg-slate-200 dark:bg-slate-800" />
                    {/* Small junction point */}
                    <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600" />

                    <div className="flex items-start gap-12">
                       {/* Category Card */}
                       <motion.div
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: idx * 0.1 }}
                         className="w-64 flex-shrink-0"
                       >
                         <div className={`p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-xl group-hover:border-${color}-500 transition-colors duration-300`}>
                            <div className="flex items-center gap-3">
                               <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-500`}>
                                 <Icon size={20} />
                               </div>
                               <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">
                                 {skill.name}
                               </h3>
                               <ChevronRight className="ml-auto text-slate-400" size={16} />
                            </div>
                         </div>
                       </motion.div>

                       {/* Sub-Groups (Horizontal distribution) */}
                       <div className="flex gap-8 items-start pt-2">
                          {skill.groups.map((group, gIdx) => (
                            <div key={group.name} className="flex flex-col gap-3 min-w-[140px] relative">
                               {/* Connection to category */}
                               <div className="absolute left-[-32px] top-3 w-8 h-px bg-slate-200 dark:bg-slate-800" />
                               
                               <h4 className={`text-[10px] font-black uppercase tracking-widest text-${color}-600 dark:text-${color}-400 mb-1`}>
                                 {group.name}
                               </h4>
                               
                               <div className="space-y-1.5">
                                 {group.items.map(item => (
                                   <div key={item} className="flex items-center gap-2 group/item">
                                      <div className={`w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/item:bg-${color}-500 transition-colors`} />
                                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors cursor-default">
                                        {item}
                                      </span>
                                   </div>
                                 ))}
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- MOBILE VIEW --- */}
          <div className="lg:hidden space-y-16">
            {skills.map((skill, idx) => {
              const color = categoryColors[skill.name] || "blue";
              const Icon = icons[skill.icon] || Code;
              
              return (
                <div key={skill.name}>
                   <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl bg-${color}-500/10 text-${color}-500 border-2 border-${color}-500/20 shadow-lg`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {skill.name}
                      </h3>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-8">
                      {skill.groups.map(group => (
                        <div key={group.name}>
                           <h4 className={`text-xs font-black uppercase tracking-widest text-${color}-600 dark:text-${color}-400 mb-4`}>
                             {group.name}
                           </h4>
                           <div className="flex flex-wrap gap-2">
                             {group.items.map(item => (
                               <span key={item} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                                 {item}
                               </span>
                             ))}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
