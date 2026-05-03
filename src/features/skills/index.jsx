import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Map } from 'lucide-react';

const categoryColors = {
  "Frontend": {
    line: "bg-blue-500 dark:bg-blue-400",
    lineLight: "bg-blue-400/50 dark:bg-blue-500/50",
    text: "text-blue-600 dark:text-blue-400",
    bgLight: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-500",
    hoverBorder: "hover:border-blue-500/50",
  },
  "Backend": {
    line: "bg-emerald-500 dark:bg-emerald-400",
    lineLight: "bg-emerald-400/50 dark:bg-emerald-500/50",
    text: "text-emerald-600 dark:text-emerald-400",
    bgLight: "bg-emerald-50 dark:bg-emerald-900/30",
    border: "border-emerald-500",
    hoverBorder: "hover:border-emerald-500/50",
  },
  "Database": {
    line: "bg-amber-500 dark:bg-amber-400",
    lineLight: "bg-amber-400/50 dark:bg-amber-500/50",
    text: "text-amber-600 dark:text-amber-400",
    bgLight: "bg-amber-50 dark:bg-amber-900/30",
    border: "border-amber-500",
    hoverBorder: "hover:border-amber-500/50",
  },
  "Tools": {
    line: "bg-violet-500 dark:bg-violet-400",
    lineLight: "bg-violet-400/50 dark:bg-violet-500/50",
    text: "text-violet-600 dark:text-violet-400",
    bgLight: "bg-violet-50 dark:bg-violet-900/30",
    border: "border-violet-500",
    hoverBorder: "hover:border-violet-500/50",
  },
  "Other": {
    line: "bg-rose-500 dark:bg-rose-400",
    lineLight: "bg-rose-400/50 dark:bg-rose-500/50",
    text: "text-rose-600 dark:text-rose-400",
    bgLight: "bg-rose-50 dark:bg-rose-900/30",
    border: "border-rose-500",
    hoverBorder: "hover:border-rose-500/50",
  }
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers, Map };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto py-10 overflow-x-hidden">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {portfolioData.nav[language].skills}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mon écosystème technique structuré par catégories et sous-groupes spécialisés.
          </p>
        </div>

        {/* --- DESKTOP TREE (4-Level Unified Tree) --- */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* Level 0: Root Node */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white shadow-xl shadow-blue-500/30 font-extrabold text-3xl flex items-center gap-4 z-10"
          >
            <Layers size={36} /> Arbre des Compétences
          </motion.div>
          
          {/* Main Trunk */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"
          />
          
          {/* Level 1: Categories Branches Container */}
          <div className="relative w-full">
            {/* Horizontal Main Branch */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-[10%] right-[10%] h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full origin-center"
            />
            
            <div className="flex justify-between w-full">
              {skills.map((skill, catIndex) => {
                const Icon = icons[skill.icon] || Code;
                const theme = categoryColors[skill.name] || categoryColors["Frontend"];
                
                return (
                  <div key={skill.name} className="flex flex-col items-center w-1/5 px-2 lg:px-3 relative">
                    {/* Vertical Drop to Category */}
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 40 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + catIndex * 0.1 }}
                      className={`w-1.5 rounded-full ${theme.line}`}
                    />
                    
                    {/* Level 1: Category Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + catIndex * 0.1 }}
                      className="w-full relative z-10"
                    >
                      <Card className={`p-4 border-b-4 ${theme.border} hover:-translate-y-1 transition-transform duration-300 shadow-lg flex flex-col items-center gap-2`}>
                        <div className={`p-2 rounded-lg ${theme.bgLight} ${theme.text}`}>
                          <Icon size={24} />
                        </div>
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-md lg:text-lg text-center">
                          {skill.name}
                        </h3>
                      </Card>
                    </motion.div>

                    {/* Level 2 & 3: Groups and Items (Nested) */}
                    <div className="w-full flex flex-col mt-4 space-y-8 relative pb-10">
                      {/* Sub-Trunk for Category groups */}
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 + catIndex * 0.1 }}
                        className={`absolute top-0 left-1/2 -translate-x-1/2 w-1 rounded-full ${theme.lineLight}`}
                      />

                      {skill.groups.map((group, groupIndex) => (
                        <div key={group.name} className="flex flex-col items-center relative">
                          {/* Level 2: Group Node */}
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.4 + catIndex * 0.1 + groupIndex * 0.1 }}
                            className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${theme.text} ${theme.bgLight} border ${theme.border}/30 z-10 shadow-sm`}
                          >
                            {group.name}
                          </motion.div>

                          {/* Level 3: Items within Group */}
                          <div className="flex flex-col gap-2 mt-2 w-full px-2">
                            {group.items.map((tech, itemIndex) => (
                              <motion.div 
                                key={tech}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.6 + catIndex * 0.1 + groupIndex * 0.1 + itemIndex * 0.05 }}
                                className="relative z-10"
                              >
                                <Card className={`py-2 px-2 hover:scale-105 transition-transform duration-300 border border-slate-200 dark:border-slate-700 ${theme.hoverBorder} shadow-sm flex justify-center items-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm`}>
                                  <span className="text-[10px] lg:text-xs font-bold text-slate-700 dark:text-slate-300 text-center">
                                    {tech}
                                  </span>
                                </Card>
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

        {/* --- MOBILE TREE (Unified Nested 4-Level) --- */}
        <div className="md:hidden flex flex-col w-full px-2">
          {/* Level 0: Root Node */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 z-20 relative mb-2"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg relative z-20">
              <Layers size={24} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Arbre Global
            </h2>
          </motion.div>
          
          <div className="relative w-full pl-6">
            {skills.map((skill, catIndex) => {
              const Icon = icons[skill.icon] || Code;
              const isLastCat = catIndex === skills.length - 1;
              const theme = categoryColors[skill.name] || categoryColors["Frontend"];
              
              return (
                <div key={skill.name} className="relative pt-6 pb-4">
                   {/* Level 1 Trunk segment */}
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: isLastCat ? 48 : '100%' }}
                     viewport={{ once: true }}
                     className={`absolute left-[0px] top-0 w-1 rounded-full z-0 ${theme.line}`}
                   />
                   
                   {/* Horizontal branch to Category */}
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: 32 }}
                     viewport={{ once: true }}
                     className={`absolute left-[0px] top-[48px] h-1 rounded-full origin-left z-0 ${theme.line}`}
                   />
                   
                   {/* Level 1: Category Card */}
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="ml-8 relative z-10"
                   >
                     <Card className={`p-4 shadow-md border-b-4 ${theme.border} flex items-center gap-4`}>
                       <div className={`p-2 rounded-xl ${theme.bgLight} ${theme.text}`}>
                         <Icon size={24} />
                       </div>
                       <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                         {skill.name}
                       </h3>
                     </Card>
                   </motion.div>

                   {/* Nested Level 2: Groups */}
                   <div className="relative ml-12 mt-4 pl-6">
                      {skill.groups.map((group, groupIndex) => {
                        const isLastGroup = groupIndex === skill.groups.length - 1;
                        return (
                          <div key={group.name} className="relative pt-6 pb-2">
                             {/* Level 2 Trunk segment */}
                             <motion.div 
                               initial={{ height: 0 }}
                               whileInView={{ height: isLastGroup ? 24 : '100%' }}
                               viewport={{ once: true }}
                               className={`absolute left-0 top-0 w-1 rounded-full z-0 ${theme.lineLight}`}
                             />
                             
                             {/* Horizontal branch to Group */}
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: 16 }}
                               viewport={{ once: true }}
                               className={`absolute left-0 top-[24px] h-1 rounded-full origin-left z-0 ${theme.lineLight}`}
                             />
                             
                             <div className="ml-6 relative z-10">
                               <div className={`text-[10px] font-bold uppercase tracking-widest ${theme.text} mb-3 opacity-80`}>
                                 {group.name}
                               </div>
                               
                               {/* Nested Level 3: Items */}
                               <div className="space-y-2">
                                  {group.items.map((tech, itemIndex) => (
                                    <motion.div
                                      key={tech}
                                      initial={{ opacity: 0, x: 10 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: 0.1 * itemIndex }}
                                    >
                                      <Card className={`p-2.5 shadow-sm bg-white/95 dark:bg-slate-800/95 border border-slate-100 dark:border-slate-700 ${theme.hoverBorder}`}>
                                        <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{tech}</span>
                                      </Card>
                                    </motion.div>
                                  ))}
                               </div>
                             </div>
                          </div>
                        )
                      })}
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
