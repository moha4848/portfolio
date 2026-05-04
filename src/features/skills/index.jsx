import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Zap, Terminal, Cpu, Workflow } from 'lucide-react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiBootstrap, 
  SiTailwindcss, 
  SiPhp, 
  SiLaravel, 
  SiNodedotjs, 
  SiMysql, 
  SiMongodb,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman
} from 'react-icons/si';

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

const groupIcons = {
  "Core": <SiJavascript size={14} />,
  "Frameworks": <SiReact size={14} />,
  "Styling": <SiTailwindcss size={14} />,
  "Languages": <SiPhp size={14} />,
  "SQL": <SiMysql size={14} />,
  "NoSQL": <SiMongodb size={14} />,
  "Editors": <SiVisualstudiocode size={14} />,
  "VCS": <SiGit size={14} />,
  "Design": <SiFigma size={14} />,
  "Testing": <SiPostman size={14} />,
  "API": <Zap size={14} />,
  "Methods": <Users size={14} />
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { 
    Globe: SiReact, 
    Server: SiLaravel, 
    Database: SiMysql, 
    Code: SiJavascript, 
    Wrench: SiVisualstudiocode, 
    Users: Users, 
    Layers: Layers 
  };
  const t = portfolioData.common[language];

  const categoryLabels = {
    "Frontend": t.catFrontend,
    "Backend": t.catBackend,
    "Database": t.catDatabase,
    "Tools": t.catTools,
    "Other": t.catOther
  };

  const groupLabels = {
    "Core": t.grpCore,
    "Frameworks": t.grpFrameworks,
    "Styling": t.grpStyling,
    "Languages": t.grpLanguages,
    "SQL": t.grpSQL,
    "NoSQL": t.grpNoSQL,
    "Editors": t.grpEditors,
    "VCS": t.grpVCS,
    "Design": t.grpDesign,
    "Testing": t.grpTesting,
    "API": t.grpAPI,
    "Methods": t.grpMethods
  };

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
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.techArchitecture}</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 leading-none">
              {t.skillsTree.split(' ')[0]} <span className="text-blue-600">{t.skillsTree.split(' ')[1]}</span>
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
                   <Layers size={28} className="text-blue-400" /> {t.globalTree}
                 </span>
              </Card>
            </motion.div>

            {/* Tree Structure SVG (Connections) */}
            <div className="w-full relative mt-[-2px]">
               <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none">
                  <line x1="50%" y1="0" x2="50%" y2="48" stroke="#94a3b8" strokeWidth="2" className="dark:stroke-slate-700" />
                  <line x1="10%" y1="48" x2="90%" y2="48" stroke="#94a3b8" strokeWidth="2" className="dark:stroke-slate-700" />
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
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-full mb-10 z-20"
                    >
                      <Card className={`p-6 border-b-4 ${theme.border} bg-white dark:bg-slate-900 shadow-xl hover:-translate-y-2 transition-all duration-300 relative group`}>
                        <div className="flex flex-col items-center text-center gap-4">
                          <div className={`relative p-5 rounded-2xl ${theme.bg} ${theme.text} shadow-inner group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
                            {/* Inner Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Icon size={36} strokeWidth={1.5} className="relative z-10" />
                            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-slate-900 text-white text-[8px] font-black rounded-full border border-slate-700">
                              {skill.level}%
                            </div>
                          </div>
                          <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                            {categoryLabels[skill.name]}
                          </h3>
                        </div>

                        <div className="mt-10 space-y-8 relative pl-4">
                          <div className={`absolute left-0 top-0 bottom-4 w-1 bg-gradient-to-b ${theme.main === '#3b82f6' ? 'from-blue-500' : theme.main === '#10b981' ? 'from-emerald-500' : theme.main === '#f59e0b' ? 'from-amber-500' : theme.main === '#8b5cf6' ? 'from-violet-500' : 'from-rose-500'} to-transparent opacity-20`} />
                          {skill.groups.map((group, gIdx) => (
                            <div key={group.name} className="relative">
                              <div className={`absolute left-[-16px] top-4 w-4 h-1 ${theme.bg} opacity-40`} />
                              <h4 className={`text-[10px] font-black uppercase tracking-widest ${theme.text} mb-3 opacity-80 flex items-center gap-2`}>
                                <span className={`p-1.5 rounded-lg border border-current/20 bg-current/5 shadow-sm`}>
                                  {groupIcons[group.name] || <Zap size={12} />}
                                </span>
                                {groupLabels[group.name]}
                              </h4>
                              <div className="space-y-2 pl-6 relative">
                                {group.items.map(item => (
                                  <div key={item} className="flex items-center gap-2 group/item py-0.5 relative">
                                    <div className={`absolute left-[-10px] top-1/2 -translate-y-1/2 w-2 h-px bg-slate-200 dark:bg-slate-800`} />
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

          {/* --- ENHANCED MOBILE VIEW --- */}
          <div className="lg:hidden space-y-12">
            {/* Mobile Root Indicator */}
            <div className="flex justify-center mb-10">
               <div className="px-6 py-3 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3">
                 <Layers size={20} className="text-blue-500" />
                 <span className="text-sm font-black text-white uppercase tracking-widest">{t.globalTree}</span>
               </div>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-12">
              {skills.map((skill, idx) => {
                const theme = categoryColors[skill.name] || categoryColors["Frontend"];
                const Icon = icons[skill.icon] || Code;
                
                return (
                  <motion.div 
                    key={skill.name} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Connection to mobile trunk */}
                    <div className="absolute left-[-24px] top-8 w-6 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                    
                    <Card className={`p-6 border-l-4 ${theme.border} bg-white dark:bg-slate-900 shadow-xl overflow-hidden`}>
                       <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-4">
                             <div className={`p-3 rounded-xl ${theme.bg} ${theme.text}`}>
                               <Icon size={24} />
                             </div>
                             <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                               {categoryLabels[skill.name]}
                             </h3>
                          </div>
                          <span className={`text-[10px] font-black px-2 py-1 ${theme.bg} ${theme.text} rounded-lg`}>
                            {skill.level}%
                          </span>
                       </div>

                       <div className="space-y-8">
                          {skill.groups.map(group => (
                            <div key={group.name} className="relative">
                               <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme.text} mb-4 flex items-center gap-2 opacity-80`}>
                                 {groupIcons[group.name] || <Zap size={12} />} {groupLabels[group.name]}
                               </h4>
                               <div className="grid grid-cols-2 gap-3">
                                 {group.items.map(item => (
                                   <div key={item} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 flex items-center gap-2">
                                      <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} border border-current`} />
                                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{item}</span>
                                   </div>
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
      </div>
    </PageWrapper>
  );
};

export default Skills;
