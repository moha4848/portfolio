import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Zap } from 'lucide-react';

const categoryColors = {
  "Frontend": {
    main: "#3b82f6",
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/30"
  },
  "Backend": {
    main: "#10b981",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/30"
  },
  "Database": {
    main: "#f59e0b",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/30"
  },
  "Tools": {
    main: "#8b5cf6",
    bg: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/30"
  },
  "Other": {
    main: "#ef4444",
    bg: "bg-rose-500/10",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/30"
  }
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers };

  return (
    <PageWrapper>
      <div className="relative min-h-screen py-20 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6"
            >
              <Zap size={14} className="text-blue-500 fill-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full-Stack Ecosystem</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 leading-none">
              Compétences <span className="text-blue-600">&</span> Expertise
            </h2>
          </div>

          {/* --- THE UNIFIED TREE (Desktop) --- */}
          <div className="hidden lg:flex flex-col items-center relative">
            
            {/* Root Node */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="z-30 relative"
            >
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full" />
              <Card className="px-12 py-5 bg-slate-900 border-slate-700 shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="text-xl font-black text-white uppercase tracking-[0.3em] flex items-center gap-4 relative z-10">
                   <Layers size={28} className="text-blue-400" /> Arbre Global
                 </span>
              </Card>
            </motion.div>

            {/* Tree Structure SVG (Connections) */}
            <div className="w-full relative mt-[-2px]">
               <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none">
                  {/* Vertical Trunk */}
                  <line x1="50%" y1="0" x2="50%" y2="48" stroke="#94a3b8" strokeWidth="2" className="dark:stroke-slate-700" />
                  {/* Horizontal Bar */}
                  <line x1="10%" y1="48" x2="90%" y2="48" stroke="#94a3b8" strokeWidth="2" className="dark:stroke-slate-700" />
                  {/* Vertical Drops */}
                  {[10, 30, 50, 70, 90].map((pos, i) => (
                    <line key={i} x1={`${pos}%`} y1="48" x2={`${pos}%`} y2="96" stroke="#94a3b8" strokeWidth="2" className="dark:stroke-slate-700" />
                  ))}
               </svg>
            </div>

            <div className="flex justify-between w-full px-4 mt-[-2px]">
              {skills.map((skill, idx) => {
                const theme = categoryColors[skill.name] || categoryColors["Frontend"];
                const Icon = icons[skill.icon] || Code;
                
                return (
                  <div key={skill.name} className="flex-1 flex flex-col items-center px-4 relative">
                    {/* Category Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-full mb-10 z-20"
                    >
                      <Card className={`p-6 border-b-4 ${theme.border} bg-white dark:bg-slate-900 shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                        <div className="flex flex-col items-center text-center gap-4">
                          <div className={`p-4 ${theme.bg} ${theme.text} rounded-2xl shadow-inner`}>
                            <Icon size={32} />
                          </div>
                          <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                            {skill.name}
                          </h3>
                        </div>

                        {/* Sub-Groups (Connected Tree) */}
                        <div className="mt-10 space-y-8 relative pl-4">
                          {/* Vertical line for sub-groups */}
                          <div className={`absolute left-0 top-0 bottom-4 w-1 bg-gradient-to-b ${theme.bg.replace('bg-', 'from-').replace('/10', '')} to-transparent opacity-20`} />
                          
                          {skill.groups.map((group, gIdx) => (
                            <div key={group.name} className="relative group/group">
                              {/* Horizontal branch to group */}
                              <div className={`absolute left-[-16px] top-4 w-4 h-1 ${theme.bg} opacity-40`} />
                              
                              <h4 className={`text-[10px] font-black uppercase tracking-widest ${theme.text} mb-3 opacity-80`}>
                                {group.name}
                              </h4>

                              <div className="space-y-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                                {group.items.map(item => (
                                  <div key={item} className="flex items-center gap-2 group/item py-0.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} border border-current opacity-60 group-hover/item:scale-125 transition-transform`} />
                                    <span className="text-[13px] font-bold text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- MOBILE VIEW (Simple Connected List) --- */}
          <div className="lg:hidden space-y-12 pl-4 border-l-4 border-slate-200 dark:border-slate-800">
            {skills.map((skill, idx) => {
              const theme = categoryColors[skill.name] || categoryColors["Frontend"];
              const Icon = icons[skill.icon] || Code;
              
              return (
                <div key={skill.name} className="relative">
                   <div className="absolute left-[-24px] top-8 w-6 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                   <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text} border ${theme.border} shadow-lg`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {skill.name}
                      </h3>
                   </div>

                   <div className="pl-6 space-y-8">
                      {skill.groups.map(group => (
                        <div key={group.name} className="border-l-2 border-slate-200 dark:border-slate-800 pl-6 relative">
                           <div className={`absolute left-[-2px] top-0 w-0.5 h-6 bg-${theme.main}`} />
                           <h4 className={`text-xs font-black uppercase tracking-widest ${theme.text} mb-4`}>
                             {group.name}
                           </h4>
                           <div className="grid grid-cols-2 gap-3">
                             {group.items.map(item => (
                               <div key={item} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} border border-current`} />
                                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{item}</span>
                               </div>
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
