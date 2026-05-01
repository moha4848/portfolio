import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Parcours = () => {
  const { language } = useLanguage();
  const experience = portfolioData.experience;
  const education = portfolioData.education;

  // Merge and sort data by year (descending)
  const unifiedParcours = [
    ...experience.map(item => ({ ...item, type: 'work' })),
    ...education.map(item => ({ ...item, type: 'edu' }))
  ].sort((a, b) => {
    const getYear = (str) => {
      const years = str.match(/\d{4}/g);
      return years ? Math.max(...years.map(Number)) : 0;
    };
    return getYear(b[language].period) - getYear(a[language].period);
  });

  const t = portfolioData.nav[language];

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            {t.experience}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {language === 'ar' ? 'رحلتي المهنية والأكاديمية' : 'Mon voyage professionnel et académique'}
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
          {unifiedParcours.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12"
            >
              {/* Dot Icon */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border-4 border-white dark:border-slate-950 shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 ${
                item.type === 'work' 
                ? 'bg-blue-600 text-white rotate-12 group-hover:rotate-0' 
                : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 -rotate-12 group-hover:rotate-0'
              }`}>
                {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]">
                <Card className="p-0 border-none bg-transparent shadow-none" hover={false}>
                  <div className={`p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${
                    item.type === 'work' 
                    ? 'bg-white dark:bg-slate-900 border-blue-100 dark:border-blue-900/30 group-hover:border-blue-500' 
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 group-hover:border-slate-400'
                  }`}>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit ${
                          item.type === 'work' 
                          ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' 
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}>
                          <Calendar size={12} />
                          {item[language].period}
                        </span>
                        
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                          {item[language].title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm">
                        <MapPin size={16} className="text-blue-500" />
                        {item[language].place}
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {item[language].desc}
                      </p>

                      {item.type === 'work' && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {['Laravel', 'React', 'Tailwind'].map(tag => (
                            <span key={tag} className="text-[9px] font-bold px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg border border-blue-100 dark:border-blue-800/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Parcours;
