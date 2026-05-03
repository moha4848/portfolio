import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Zap, ChevronRight, Activity } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <PageWrapper>
      <div className="relative min-h-screen py-24 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Futuristic Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.07] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24 relative flex flex-col items-center lg:items-start">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-3 mb-4"
             >
               <div className="w-12 h-1 bg-blue-600 rounded-full" />
               <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Expertise Ecosystem</span>
             </motion.div>
             <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">
               Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Architecture</span>
             </h2>
          </div>

          {/* --- ADVANCED HORIZONTAL TECH-TREE (Desktop) --- */}
          <div className="hidden xl:flex items-stretch relative min-h-[700px]">
            
            {/* 1. MASTER HUB (Left) */}
            <div className="flex flex-col justify-center relative z-30">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center gap-4 w-44 shadow-2xl">
                  <div className="relative">
                    <Activity className="text-blue-500 animate-pulse" size={40} />
                    <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fill-white" size={16} />
                  </div>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Main Core</span>
                </div>
              </motion.div>
            </div>

            {/* 2. CATEGORY BRANCHES & CONNECTIONS */}
            <div className="flex-1 flex flex-col justify-between py-10 pl-32 relative">
              {/* Dynamic SVG Connection Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible">
                {skills.map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M -128,${350} C -60,${350} -60,${120 + (i * 120)} 0,${120 + (i * 120)}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.15 }}
                    className="text-slate-400 dark:text-slate-700"
                  />
                ))}
              </svg>

              {skills.map((skill, idx) => {
                const color = categoryColors[skill.name] || "blue";
                const Icon = icons[skill.icon] || Code;
                const isActive = activeCategory === skill.name;
                
                return (
                  <div 
                    key={skill.name} 
                    className="relative flex items-center gap-16 group"
                    onMouseEnter={() => setActiveCategory(skill.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {/* Category Node */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-72 flex-shrink-0"
                    >
                      <div className={`p-6 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 hover:shadow-${color}-500/20 group-hover:scale-105 group-hover:border-${color}-500/50`}>
                         <div className="flex items-center gap-4 mb-2">
                            <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500 group-hover:bg-${color}-500 group-hover:text-white transition-all duration-300`}>
                              <Icon size={24} />
                            </div>
                            <div>
                               <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-lg leading-none mb-1">
                                 {skill.name}
                               </h3>
                               <div className={`text-[10px] font-bold text-${color}-500 uppercase tracking-widest opacity-60`}>
                                 Expertise Level
                               </div>
                            </div>
                         </div>
                      </div>
                    </motion.div>

                    {/* Sub-Groups (Horizontal Grid) */}
                    <div className="flex gap-10 items-start overflow-visible">
                      {skill.groups.map((group, gIdx) => (
                        <motion.div 
                          key={group.name} 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (gIdx * 0.1) }}
                          className="flex flex-col gap-4 min-w-[160px] relative"
                        >
                           {/* Connection Liaison to Category */}
                           <div className={`absolute left-[-40px] top-4 w-10 h-[2px] bg-gradient-to-r from-${color}-500 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                           
                           <h4 className={`text-[11px] font-black uppercase tracking-[0.2em] text-${color}-600 dark:text-${color}-400 flex items-center gap-2`}>
                             <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 shadow-[0_0_8px_rgba(var(--tw-shadow-color),0.5)]`} />
                             {group.name}
                           </h4>
                           
                           <div className="space-y-2">
                             {group.items.map(item => (
                               <div key={item} className="group/item relative px-3 py-2 bg-white/50 dark:bg-slate-900/30 rounded-lg border border-slate-200/50 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default">
                                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                                    {item}
                                  </span>
                               </div>
                             ))}
                           </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- MOBILE VIEW (Vertical Tech-Stack) --- */}
          <div className="xl:hidden space-y-12">
            {skills.map((skill, idx) => {
              const color = categoryColors[skill.name] || "blue";
              const Icon = icons[skill.icon] || Code;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-8 border-t-8 border-${color}-500 relative overflow-hidden group`}>
                    <div className={`absolute top-0 right-0 p-10 bg-${color}-500/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700`} />
                    
                    <div className="flex items-center gap-4 mb-10">
                      <div className={`p-4 rounded-2xl bg-${color}-500/10 text-${color}-500`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {skill.groups.map(group => (
                        <div key={group.name} className="relative">
                           <h4 className={`text-xs font-black uppercase tracking-widest text-${color}-500 mb-6 flex items-center gap-2`}>
                             <div className={`w-2 h-2 rounded-full bg-${color}-500`} />
                             {group.name}
                           </h4>
                           <div className="flex flex-wrap gap-3">
                             {group.items.map(item => (
                               <span key={item} className="px-4 py-2 bg-slate-100 dark:bg-slate-800/80 backdrop-blur shadow-sm rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                 {item}
                               </span>
                             ))}
                           </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
