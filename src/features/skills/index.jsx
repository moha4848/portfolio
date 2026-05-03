import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Cpu, Terminal, Shield, Workflow, Zap } from 'lucide-react';

const categoryColors = {
  "Frontend": {
    color: "#3b82f6",
    glow: "shadow-blue-500/20",
    line: "from-blue-500 to-cyan-400",
    text: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/50"
  },
  "Backend": {
    color: "#10b981",
    glow: "shadow-emerald-500/20",
    line: "from-emerald-500 to-teal-400",
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/50"
  },
  "Database": {
    color: "#f59e0b",
    glow: "shadow-amber-500/20",
    line: "from-amber-500 to-orange-400",
    text: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/50"
  },
  "Tools": {
    color: "#8b5cf6",
    glow: "shadow-violet-500/20",
    line: "from-violet-500 to-purple-400",
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/50"
  },
  "Other": {
    color: "#ef4444",
    glow: "shadow-rose-500/20",
    line: "from-rose-500 to-pink-400",
    text: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/50"
  }
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers, Cpu, Terminal, Shield, Workflow, Zap };

  return (
    <PageWrapper>
      <div className="relative min-h-screen py-20 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase"
            >
              Unified Skill Architecture
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-6 uppercase">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Tree</span>
            </h2>
          </div>

          {/* --- THE GREAT CENTRAL TREE (Desktop) --- */}
          <div className="hidden lg:block relative">
            
            {/* The Heart / Root Node */}
            <div className="flex justify-center mb-0 relative z-30">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="px-10 py-6 bg-slate-900 rounded-3xl border-2 border-slate-700 shadow-2xl flex flex-col items-center gap-2">
                  <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/50">
                    <Zap className="text-white fill-white" size={32} />
                  </div>
                  <span className="text-xl font-black text-white uppercase tracking-widest">Master Trunk</span>
                </div>
              </motion.div>
            </div>

            {/* The Main Vertical Trunk Line */}
            <div className="flex justify-center h-20">
              <div className="w-2 bg-gradient-to-b from-blue-600 to-slate-400 dark:to-slate-700 relative shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                 <motion.div 
                   animate={{ top: ["0%", "100%"] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                   className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/80 to-transparent"
                 />
              </div>
            </div>

            {/* The Great Horizontal Branch */}
            <div className="relative h-1">
              <div className="absolute left-[5%] right-[5%] h-full bg-slate-400 dark:bg-slate-700 rounded-full shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full -mt-1.5 shadow-xl border-2 border-white dark:border-slate-900" />
              </div>
            </div>

            {/* The Categories Distribution */}
            <div className="flex justify-between relative px-4">
              {skills.map((skill, idx) => {
                const theme = categoryColors[skill.name] || categoryColors["Frontend"];
                const Icon = icons[skill.icon] || Code;
                
                return (
                  <div key={skill.name} className="flex-1 flex flex-col items-center relative pt-10">
                    {/* Connection Line to Horizontal Branch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-1 bg-slate-400 dark:bg-slate-700" />
                    
                    {/* Category Node */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative z-20 mb-10 w-full px-4"
                    >
                      <Card className={`p-5 rounded-2xl border-b-8 ${theme.border} bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}>
                         <div className="flex flex-col items-center gap-3">
                            <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text} group-hover:scale-110 transition-transform`}>
                              <Icon size={28} />
                            </div>
                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-lg">
                              {skill.name}
                            </h3>
                         </div>

                         {/* SUB-TREE LIAISONS */}
                         <div className="mt-10 space-y-8 relative pl-6">
                            {/* The vertical sub-trunk */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.line} opacity-40 rounded-full`} />
                            
                            {skill.groups.map((group, gIdx) => (
                              <div key={group.name} className="relative group/group">
                                {/* Horizontal Branch to Group */}
                                <div className={`absolute left-[-24px] top-4 w-6 h-1 bg-gradient-to-r ${theme.line} opacity-50 rounded-full`} />
                                
                                <div className="mb-4">
                                  <span className={`inline-block text-[11px] font-black uppercase tracking-widest ${theme.text} px-3 py-1 bg-white dark:bg-slate-800 border border-current rounded-lg shadow-sm`}>
                                    {group.name}
                                  </span>
                                </div>

                                {/* Skills in Group with individual liaisons */}
                                <div className="space-y-3 pl-4 relative">
                                   <div className="absolute left-0 top-0 bottom-6 w-px bg-slate-300 dark:bg-slate-700 opacity-50" />
                                   
                                   {group.items.map((item, iIdx) => (
                                     <motion.div 
                                       key={item}
                                       whileHover={{ x: 6 }}
                                       className="flex items-center gap-3 relative group/item"
                                     >
                                       {/* The specific liaison line */}
                                       <div className="absolute left-[-16px] top-3 w-4 h-px bg-slate-300 dark:bg-slate-700 opacity-40" />
                                       
                                       <div className={`w-2 h-2 rounded-full ${theme.bg} border border-current opacity-60 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all`} />
                                       <span className="text-[13px] font-bold text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white">
                                         {item}
                                       </span>
                                     </motion.div>
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

          {/* --- MOBILE TREE (The "File System" Connected Look) --- */}
          <div className="lg:hidden space-y-12 pl-4 border-l-4 border-blue-500/20">
            {skills.map((skill, idx) => {
              const theme = categoryColors[skill.name] || categoryColors["Frontend"];
              const Icon = icons[skill.icon] || Code;
              
              return (
                <div key={skill.name} className="relative">
                   {/* Connection point from mobile main trunk */}
                   <div className="absolute left-[-20px] top-8 w-5 h-1 bg-blue-500/20 rounded-full" />
                   
                   <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text} border ${theme.border} shadow-lg`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        {skill.name}
                      </h3>
                   </div>

                   <div className="pl-10 space-y-10">
                      {skill.groups.map(group => (
                        <div key={group.name} className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6">
                           <div className={`absolute left-[-2px] top-0 w-1 h-6 bg-gradient-to-b ${theme.line}`} />
                           <h4 className={`text-xs font-black uppercase tracking-widest ${theme.text} mb-4 flex items-center gap-2`}>
                             <Workflow size={14} /> {group.name}
                           </h4>
                           <div className="grid grid-cols-2 gap-3">
                             {group.items.map(item => (
                               <div key={item} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} border border-current`} />
                                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{item}</span>
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
