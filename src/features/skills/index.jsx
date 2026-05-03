import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Code, Wrench, Users, Layers, Map } from 'lucide-react';

const SkillTree = ({ skill, index, icons }) => {
  const Icon = icons[skill.icon] || Code;
  const subSkills = skill.details.split(', ');

  return (
    <div className="w-full flex flex-col items-center mb-24">
      {/* Category Root Node */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white shadow-xl shadow-blue-500/20 font-extrabold text-2xl flex items-center gap-4 z-10"
      >
        <Icon size={32} /> {skill.name}
      </motion.div>
      
      {/* Trunk (Desktop) */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: 40 }}
        viewport={{ once: true }}
        className="hidden md:block w-1 bg-gradient-to-b from-blue-600 to-blue-500 dark:to-blue-400"
      />

      {/* Branches & Leaves (Desktop) */}
      <div className="hidden md:flex justify-center w-full max-w-6xl relative">
        {subSkills.map((tech, i, arr) => {
          const isFirst = i === 0;
          const isLast = i === arr.length - 1;
          const isOnly = arr.length === 1;

          return (
            <div key={tech} className="flex flex-col items-center relative flex-1">
              {/* Horizontal Line halves */}
              <div className="absolute top-0 w-full flex h-1">
                 <div className={`w-1/2 h-full ${isFirst || isOnly ? 'bg-transparent' : 'bg-blue-500 dark:bg-blue-400'}`} />
                 <div className={`w-1/2 h-full ${isLast || isOnly ? 'bg-transparent' : 'bg-blue-500 dark:bg-blue-400'}`} />
              </div>
              
              {/* Vertical Drop Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="w-1 bg-gradient-to-t from-transparent to-blue-500 dark:to-blue-400" 
              />
              
              {/* Leaf */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="w-full px-2 mt-0"
              >
                <Card className="py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-blue-500/30 flex justify-center items-center h-full shadow-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <span className="text-[12px] lg:text-sm font-extrabold text-slate-800 dark:text-slate-200 text-center break-words relative z-10">
                    {tech}
                  </span>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Mobile Tree (Vertical) */}
      <div className="md:hidden w-full flex flex-col mt-4 px-4">
        <div className="relative w-full max-w-sm mx-auto">
          {subSkills.map((tech, i, arr) => {
            const isLast = i === arr.length - 1;
            return (
              <div key={tech} className="relative pl-12 pb-4">
                 {/* Vertical Trunk */}
                 <motion.div 
                   initial={{ height: 0 }}
                   whileInView={{ height: isLast ? 40 : '100%' }}
                   viewport={{ once: true }}
                   className={`absolute left-[18px] top-0 w-1 bg-blue-500 dark:bg-blue-400 rounded-full`}
                 />
                 
                 {/* Horizontal Branch */}
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: 24 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + i * 0.1 }}
                   className="absolute left-[18px] top-[40px] h-1 bg-blue-500 dark:bg-blue-400 rounded-full origin-left"
                 />

                 <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + i * 0.1 }}
                   className="pt-4"
                 >
                   <Card className="p-4 w-full shadow-md border-2 border-transparent active:border-blue-500/30">
                     <span className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">{tech}</span>
                   </Card>
                 </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Overall Proficiency Bar */}
      <div className="w-full max-w-3xl mt-12 px-6">
        <div className="flex justify-between items-center text-xs md:text-sm font-extrabold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest">
          <span>Maîtrise Globale</span>
          <span className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm shadow-sm">
            {skill.level}%
          </span>
        </div>
        <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { language } = useLanguage();
  const skills = portfolioData.skills;
  const icons = { Globe, Server, Database, Code, Wrench, Users, Layers, Map };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto py-10">
        <div className="text-center space-y-4 mb-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 mb-4"
          >
            <Layers size={36} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {portfolioData.nav[language].skills}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Chaque domaine de compétence est représenté par son propre arbre technique.
          </p>
        </div>

        <div className="space-y-10">
          {skills.map((skill, index) => (
            <SkillTree key={skill.name} skill={skill} index={index} icons={icons} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
