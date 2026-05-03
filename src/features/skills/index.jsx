import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Map } from 'lucide-react';

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
            Mon écosystème technique structuré en un seul grand arbre global.
          </p>
        </div>

        {/* --- DESKTOP TREE (Unified Multi-Level Org-Chart) --- */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* Level 0: Root Node */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white shadow-xl shadow-blue-500/30 font-extrabold text-3xl flex items-center gap-4 z-10"
          >
            <Layers size={36} /> L'Arbre des Compétences
          </motion.div>
          
          {/* Main Trunk */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-1.5 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"
          />
          
          {/* Level 1: Branches Container */}
          <div className="relative w-full">
            {/* Horizontal Main Branch */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-[10%] right-[10%] h-1.5 bg-blue-500 rounded-full origin-center"
            />
            
            <div className="flex justify-between w-full">
              {skills.map((skill, catIndex) => {
                const Icon = icons[skill.icon] || Code;
                const subSkills = skill.details.split(', ');
                
                return (
                  <div key={skill.name} className="flex flex-col items-center w-1/5 px-2 lg:px-3 relative">
                    {/* Vertical Drop to Category */}
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 40 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + catIndex * 0.1 }}
                      className="w-1.5 bg-blue-500 rounded-full"
                    />
                    
                    {/* Level 1: Category Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + catIndex * 0.1 }}
                      className="w-full relative z-10"
                    >
                      <Card className="p-4 border-b-4 border-blue-500 hover:-translate-y-1 transition-transform duration-300 shadow-lg flex flex-col items-center gap-2">
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          <Icon size={24} />
                        </div>
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-md lg:text-lg text-center">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                          {skill.level}%
                        </span>
                      </Card>
                    </motion.div>

                    {/* Level 2: Leaves (Stacked vertically) */}
                    <div className="w-full flex flex-col items-center mt-0 relative">
                      {/* Sub-Trunk behind leaves */}
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: 'calc(100% - 24px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 + catIndex * 0.1 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-cyan-500/50 rounded-full"
                      />

                      {subSkills.map((tech, leafIndex) => (
                        <motion.div 
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 1.4 + catIndex * 0.1 + leafIndex * 0.1 }}
                          className="w-full px-2 lg:px-4 mt-4 relative z-10"
                        >
                          <Card className="py-2.5 px-2 hover:scale-105 transition-transform duration-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 shadow-sm flex justify-center items-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
                            <span className="text-[11px] lg:text-sm font-bold text-slate-700 dark:text-slate-300 text-center break-words">
                              {tech}
                            </span>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- MOBILE TREE (Unified Nested File-Tree) --- */}
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
              const subSkills = skill.details.split(', ');
              const isLastCat = catIndex === skills.length - 1;
              
              return (
                <div key={skill.name} className="relative pt-6 pb-4">
                   {/* Level 1 Trunk segment */}
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: isLastCat ? 48 : '100%' }}
                     viewport={{ once: true }}
                     className="absolute left-[0px] top-0 w-1 bg-blue-500 rounded-full z-0"
                   />
                   
                   {/* Horizontal branch to Category */}
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: 32 }}
                     viewport={{ once: true }}
                     className="absolute left-[0px] top-[48px] h-1 bg-blue-500 rounded-full origin-left z-0"
                   />
                   
                   {/* Level 1: Category Card */}
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="ml-8 relative z-10"
                   >
                     <Card className="p-4 shadow-md border-b-4 border-blue-500 flex items-center gap-4">
                       <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                         <Icon size={24} />
                       </div>
                       <div>
                         <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                           {skill.name}
                         </h3>
                         <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full mt-1 inline-block">
                           Niveau: {skill.level}%
                         </span>
                       </div>
                     </Card>
                   </motion.div>

                   {/* Nested Level 2: Leaves */}
                   <div className="relative ml-12 mt-4 pl-6">
                      {subSkills.map((tech, leafIndex) => {
                        const isLastLeaf = leafIndex === subSkills.length - 1;
                        return (
                          <div key={tech} className="relative pt-3 pb-1">
                             {/* Level 2 Trunk segment */}
                             <motion.div 
                               initial={{ height: 0 }}
                               whileInView={{ height: isLastLeaf ? 24 : '100%' }}
                               viewport={{ once: true }}
                               className="absolute left-0 top-0 w-1 bg-cyan-500/50 rounded-full z-0"
                             />
                             
                             {/* Horizontal branch to Leaf */}
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: 16 }}
                               viewport={{ once: true }}
                               className="absolute left-0 top-[24px] h-1 bg-cyan-500/50 rounded-full origin-left z-0"
                             />
                             
                             <motion.div
                               initial={{ opacity: 0, x: 10 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               viewport={{ once: true }}
                               transition={{ delay: 0.1 * leafIndex }}
                               className="ml-6 relative z-10"
                             >
                               <Card className="p-2.5 shadow-sm bg-white/95 dark:bg-slate-800/95 border border-slate-100 dark:border-slate-700">
                                 <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{tech}</span>
                               </Card>
                             </motion.div>
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
