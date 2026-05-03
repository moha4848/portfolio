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
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {portfolioData.nav[language].skills}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mon parcours technique structuré sous forme d'arbre de compétences.
          </p>
        </div>

        {/* --- DESKTOP TREE (Org-Chart Style) --- */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* Root Node */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white shadow-xl shadow-blue-500/20 font-extrabold text-2xl flex items-center gap-3 z-10"
          >
            <Layers size={28} /> Arbre de Compétences
          </motion.div>
          
          {/* Trunk */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-1 bg-gradient-to-b from-blue-600 to-blue-500 dark:to-blue-400"
          />
          
          {/* Branches Container */}
          <div className="relative w-full">
            {/* Horizontal Main Branch */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-[10%] right-[10%] h-1 bg-blue-500 dark:bg-blue-400 origin-center rounded-full"
            />
            
            <div className="flex justify-between w-full">
              {skills.map((skill, index) => {
                const Icon = icons[skill.icon] || Code;
                return (
                  <div key={skill.name} className="flex flex-col items-center w-1/5 px-2 lg:px-3 relative">
                    {/* Vertical Drop Branch */}
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 40 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="w-1 bg-gradient-to-t from-transparent to-blue-500 dark:to-blue-400"
                    />
                    
                    {/* Leaf Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="w-full"
                    >
                      <Card className="w-full p-4 lg:p-5 hover:-translate-y-2 transition-transform duration-300 relative group border-2 border-transparent hover:border-blue-500/30 shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="flex flex-col items-center text-center gap-3 relative z-10">
                          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <Icon size={24} />
                          </div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-md lg:text-lg">
                            {skill.name}
                          </h3>
                          <p className="text-[11px] lg:text-xs text-slate-500 dark:text-slate-400 font-medium h-12 flex items-center justify-center">
                            {skill.details}
                          </p>
                          
                          <div className="w-full space-y-1 mt-2">
                            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                              <span>Niveau</span>
                              <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                                className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- MOBILE TREE (File-Tree Style) --- */}
        <div className="md:hidden flex flex-col w-full px-2">
          {/* Root Node */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 z-10 relative mb-2"
          >
            <div className="p-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg z-10 relative">
              <Layers size={24} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Compétences</h2>
          </motion.div>
          
          <div className="relative w-full">
            {skills.map((skill, index) => {
              const Icon = icons[skill.icon] || Code;
              const isLast = index === skills.length - 1;
              
              return (
                <div key={skill.name} className="relative pl-14 pt-8 pb-2">
                   {/* Vertical line segment for this child */}
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: isLast ? 64 : '100%' }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.2 }}
                     className="absolute left-[24px] top-0 w-1 bg-blue-500 dark:bg-blue-400 rounded-full"
                   />
                   
                   {/* Horizontal branch */}
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: 24 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
                     className="absolute left-[24px] top-[64px] h-1 bg-blue-500 dark:bg-blue-400 rounded-full origin-left"
                   />
                   
                   {/* Leaf Card */}
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                   >
                     <Card className="p-5 flex flex-col gap-4 shadow-lg border-2 border-transparent active:border-blue-500/30">
                       <div className="flex items-center gap-4">
                         <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                           <Icon size={24} />
                         </div>
                         <div>
                           <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                             {skill.name}
                           </h3>
                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                             {skill.details}
                           </p>
                         </div>
                       </div>
                       
                       <div className="space-y-1 mt-2">
                         <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                           <span>Niveau</span>
                           <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                         </div>
                         <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                           <motion.div
                             initial={{ width: 0 }}
                             whileInView={{ width: `${skill.level}%` }}
                             viewport={{ once: true }}
                             transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                             className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                           />
                         </div>
                       </div>
                     </Card>
                   </motion.div>
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
