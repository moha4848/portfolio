import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Cpu, Terminal, Shield, Workflow } from 'lucide-react';

const categoryColors = {
  "Frontend": {
    glow: "shadow-blue-500/20",
    line: "from-blue-500 to-cyan-400",
    text: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/50",
    accent: "blue"
  },
  "Backend": {
    glow: "shadow-emerald-500/20",
    line: "from-emerald-500 to-teal-400",
    text: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/50",
    accent: "emerald"
  },
  "Database": {
    glow: "shadow-amber-500/20",
    line: "from-amber-500 to-orange-400",
    text: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/50",
    accent: "amber"
  },
  "Tools": {
    glow: "shadow-violet-500/20",
    line: "from-violet-500 to-purple-400",
    text: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/50",
    accent: "violet"
  },
  "Other": {
    glow: "shadow-rose-500/20",
    line: "from-rose-500 to-pink-400",
    text: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/50",
    accent: "rose"
  }
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers, Cpu, Terminal, Shield, Workflow };

  return (
    <PageWrapper>
      <div className="relative min-h-screen py-20 px-4">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-32 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 uppercase">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Tree</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
                Exploration de mon écosystème technique à travers une structure connectée.
              </p>
            </motion.div>
          </div>

          {/* --- DESKTOP VIEW --- */}
          <div className="hidden xl:block">
            {/* Root Node */}
            <div className="flex justify-center mb-10">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-20"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse" />
                <div className="relative px-8 py-4 bg-slate-900 border border-slate-700 rounded-2xl flex items-center gap-4 shadow-2xl">
                  <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/50">
                    <Layers className="text-white" size={24} />
                  </div>
                  <span className="text-xl font-black text-white tracking-tight uppercase">Skills Ecosystem</span>
                </div>
              </motion.div>
            </div>

            {/* Tree Structure */}
            <div className="relative">
              {/* Horizontal Trunk Bar */}
              <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
              
              <div className="flex justify-between items-start pt-1">
                {skills.map((skill, idx) => {
                  const theme = categoryColors[skill.name] || categoryColors["Frontend"];
                  const Icon = icons[skill.icon] || Code;
                  
                  return (
                    <div key={skill.name} className="flex-1 flex flex-col items-center px-4 relative">
                      {/* Vertical Connection to Main Trunk */}
                      <div className="h-10 w-px bg-slate-300 dark:bg-slate-700 relative">
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${theme.line} bg-gradient-to-r`} />
                      </div>

                      {/* Category Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="w-full mb-8"
                      >
                        <div className={`p-4 rounded-xl bg-white dark:bg-slate-900 border ${theme.border} shadow-xl relative group overflow-hidden`}>
                           <div className={`absolute top-0 right-0 w-16 h-16 ${theme.bg} rounded-bl-full opacity-50`} />
                           <div className="flex items-center gap-3 relative z-10">
                              <div className={`p-2 rounded-lg ${theme.bg} ${theme.text}`}>
                                <Icon size={18} />
                              </div>
                              <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-xs">
                                {skill.name}
                              </h3>
                           </div>
                        </div>
                      </motion.div>

                      {/* Sub-groups and Liaisons */}
                      <div className="w-full space-y-8 relative pl-4">
                        {/* Vertical Path for category */}
                        <div className={`absolute left-0 top-0 bottom-10 w-0.5 bg-gradient-to-b ${theme.line} opacity-30`} />

                        {skill.groups.map((group, gIdx) => (
                          <div key={group.name} className="relative">
                            {/* Horizontal connection to Group */}
                            <div className={`absolute left-[-16px] top-4 w-4 h-0.5 bg-gradient-to-r ${theme.line} opacity-40`} />
                            
                            <div className="mb-4">
                              <span className={`text-[10px] font-black uppercase tracking-widest ${theme.text} px-2 py-1 ${theme.bg} rounded-md border border-current opacity-80`}>
                                {group.name}
                              </span>
                            </div>

                            {/* Skills in Group with Liaisons */}
                            <div className="space-y-2 pl-4 relative">
                               {/* Inner vertical liaison */}
                               <div className={`absolute left-0 top-0 bottom-4 w-px bg-slate-300 dark:bg-slate-700 opacity-40`} />
                               
                               {group.items.map((item, iIdx) => (
                                 <motion.div 
                                   key={item}
                                   whileHover={{ x: 4 }}
                                   className="flex items-center gap-2 relative group/skill"
                                 >
                                   {/* L-shaped liaison */}
                                   <div className="absolute left-[-16px] top-3 w-4 h-px bg-slate-300 dark:bg-slate-700 opacity-30" />
                                   
                                   <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} group-hover/skill:scale-150 transition-transform duration-300`} />
                                   <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                                     {item}
                                   </span>
                                 </motion.div>
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

          {/* --- MOBILE/TABLET VIEW --- */}
          <div className="xl:hidden space-y-12">
            {skills.map((skill, idx) => {
              const theme = categoryColors[skill.name] || categoryColors["Frontend"];
              const Icon = icons[skill.icon] || Code;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text} shadow-lg border ${theme.border}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 ml-8">
                    {skill.groups.map(group => (
                      <div key={group.name} className="relative">
                        {/* Mobile liaison to group */}
                        <div className={`absolute left-[-24px] top-3 w-6 h-0.5 bg-slate-300 dark:bg-slate-800`} />
                        
                        <h4 className={`text-xs font-black uppercase tracking-widest ${theme.text} mb-4 bg-white dark:bg-slate-900 inline-block px-2`}>
                          {group.name}
                        </h4>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {group.items.map(item => (
                            <div 
                              key={item}
                              className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 group"
                            >
                              <div className={`w-1 h-1 rounded-full ${theme.bg} group-hover:scale-150 transition-transform`} />
                              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
