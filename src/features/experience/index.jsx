import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap, BookOpen, Code2 } from 'lucide-react';

const Experience = () => {
  const { language } = useLanguage();
  const experience = portfolioData.experience;
  const education = portfolioData.education;

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Experience Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'ar' ? 'الخبرة المهنية' : 'Expérience Professionnelle'}
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Briefcase size={18} />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <Card className="p-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp[language].title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50 uppercase tracking-widest">
                          <Calendar size={12} />
                          {exp[language].period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium italic text-sm">
                        <MapPin size={14} />
                        {exp[language].place}
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exp[language].desc}
                      </p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'ar' ? 'التكوين والتعليم' : 'Formation Académique'}
            </h2>
            <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap size={80} className="text-blue-600" />
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <GraduationCap size={24} />
                      </div>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 uppercase tracking-widest">
                        {edu[language].period}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {edu[language].title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        <BookOpen size={16} />
                        {edu[language].place}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {edu[language].desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
