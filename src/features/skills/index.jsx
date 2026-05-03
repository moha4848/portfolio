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
    accent: "blue"
  },
  "Backend": {
    glow: "shadow-emerald-500/20",
    line: "from-emerald-500 to-teal-400",
    text: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    accent: "emerald"
  },
  "Database": {
    glow: "shadow-amber-500/20",
    line: "from-amber-500 to-orange-400",
    text: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500/10",
    accent: "amber"
  },
  "Tools": {
    glow: "shadow-violet-500/20",
    line: "from-violet-500 to-purple-400",
    text: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-500/10",
    accent: "violet"
  },
  "Other": {
    glow: "shadow-rose-500/20",
    line: "from-rose-500 to-pink-400",
    text: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10",
    accent: "rose"
  }
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers, Cpu, Terminal, Shield, Workflow };

  return (
    <PageWrapper>
      <div className="relative min-h-screen py-20 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-blue-500/20">
                Ecosystem & Mastery
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
                Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Architecture</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/50" />
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Une visualisation structurée de mes capacités techniques, organisée par domaines d'expertise.
              </p>
            </motion.div>
          </div>

          {/* --- DESKTOP VIEW --- */}
          <div className="hidden lg:block relative">
            {/* The Root Node */}
            <div className="flex justify-center mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative px-12 py-6 bg-slate-900 rounded-2xl border border-slate-700 flex items-center gap-4 shadow-2xl overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                   <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl">
                     <Layers className="text-white" size={32} />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Main Node</div>
                     <div className="text-2xl font-black text-white">Full-Stack Core</div>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Main Tree Connections */}
            <div className="flex justify-between relative px-4">
              {skills.map((skill, idx) => {
                const theme = categoryColors[skill.name] || categoryColors["Frontend"];
                const Icon = icons[skill.icon] || Code;
                
                return (
                  <div key={skill.name} className="flex-1 flex flex-col items-center">
                    {/* Main Branch Line */}
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 60 }}
                      viewport={{ once: true }}
                      className={`w-0.5 bg-gradient-to-b ${theme.line} opacity-50`}
                    />
                    
                    {/* Category Hub */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="relative z-10 w-full px-4"
                    >
                      <div className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${theme.glow} transition-all duration-300 hover:border-${theme.accent}-500/50 group`}>
                         <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg ${theme.bg} ${theme.text}`}>
                              <Icon size={20} />
                            </div>
                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">
                              {skill.name}
                            </h3>
                         </div>

                         {/* Sub-Groups Container */}
                         <div className="space-y-6 relative pl-2">
                            {/* Vertical Line for Sub-groups */}
                            <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b ${theme.line} opacity-20`} />
                            
                            {skill.groups.map((group, gIdx) => (
                              <div key={group.name} className="relative pl-4">
                                {/* Connector Dot */}
                                <div className={`absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full ${theme.line} bg-gradient-to-r`} />
                                
                                <h4 className={`text-[10px] font-black uppercase tracking-widest ${theme.text} mb-3 opacity-70`}>
                                  {group.name}
                                </h4>
                                
                                <div className="grid grid-cols-1 gap-2">
                                  {group.items.map((item, iIdx) => (
                                    <motion.div
                                      key={item}
                                      whileHover={{ x: 5 }}
                                      className="flex items-center gap-2 group/item"
                                    >
                                      <div className={`w-1 h-1 rounded-full ${theme.bg} group-hover/item:scale-150 transition-transform`} />
                                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                                        {item}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            ))}
                         </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- MOBILE VIEW --- */}
          <div className="lg:hidden space-y-8">
            {skills.map((skill, idx) => {
              const theme = categoryColors[skill.name] || categoryColors["Frontend"];
              const Icon = icons[skill.icon] || Code;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className={`p-6 border-l-4 ${theme.border} relative overflow-hidden group`}>
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${theme.bg} opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${theme.bg} ${theme.text}`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {skill.groups.map(group => (
                        <div key={group.name}>
                          <h4 className={`text-xs font-black uppercase tracking-widest ${theme.text} mb-3 opacity-80 flex items-center gap-2`}>
                            <Workflow size={12} /> {group.name}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map(item => (
                              <span 
                                key={item}
                                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 transition-colors"
                              >
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
