import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const { language } = useLanguage();
  const education = portfolioData.education;

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
          {portfolioData.nav[language].education}
        </h2>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={120} className="text-blue-600" />
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <GraduationCap size={32} />
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {edu[language].title}
                      </h3>
                      <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold border border-slate-200 dark:border-slate-700">
                        <Calendar size={16} />
                        {edu[language].period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      <BookOpen size={18} />
                      {edu[language].place}
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {edu[language].desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Education;
