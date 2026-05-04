import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers } from 'lucide-react';

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            {portfolioData.nav[language].skills}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* --- CLASSIC VERTICAL TREE (Desktop) --- */}
        <div className="hidden lg:flex flex-col items-center">
          {/* Level 0: Root */}
          <div className="z-10">
            <Card className="px-10 py-4 bg-slate-900 border-slate-700 shadow-xl">
              <span className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                <Layers size={24} className="text-blue-500" /> Arbre des Compétences
              </span>
            </Card>
          </div>

          {/* Main Trunk */}
          <div className="w-1 h-12 bg-slate-200 dark:bg-slate-800" />

          {/* Level 1: Categories Bar */}
          <div className="relative w-full">
            {/* Horizontal connection line */}
            <div className="absolute top-0 left-[12%] right-[12%] h-1 bg-slate-200 dark:bg-slate-800" />
            
            <div className="flex justify-between items-start pt-1">
              {skills.map((skill, idx) => {
                const Icon = icons[skill.icon] || Code;
                return (
                  <div key={skill.name} className="flex-1 flex flex-col items-center px-4">
                    {/* Vertical drop to category */}
                    <div className="w-1 h-10 bg-slate-200 dark:bg-slate-800" />
                    
                    {/* Category Card (Original Style) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-full z-10"
                    >
                      <Card className="p-6 border-b-4 border-blue-600 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                            <Icon size={28} />
                          </div>
                          <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            {skill.name}
                          </h3>
                        </div>

                        {/* Level 2: Skills List (Connected by internal tree lines) */}
                        <div className="mt-8 space-y-3 relative">
                          {/* Inner vertical line */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800/50" />
                          
                          {skill.groups.map(group => (
                            <div key={group.name} className="space-y-2">
                               {group.items.map(item => (
                                 <div key={item} className="relative flex justify-center">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm z-10">
                                      {item}
                                    </span>
                                 </div>
                               ))}
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
        </div>

        {/* --- MOBILE VIEW (Simple List) --- */}
        <div className="lg:hidden space-y-8">
          {skills.map((skill, idx) => {
            const Icon = icons[skill.icon] || Code;
            return (
              <Card key={skill.name} className="p-6 border-l-4 border-blue-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.groups.flatMap(g => g.items).map(item => (
                    <span key={item} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
