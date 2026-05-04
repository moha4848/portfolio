import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ChevronDown, Rocket, CheckCircle2, Star, Award } from 'lucide-react';

const Parcours = () => {
  const { language } = useLanguage();
  const experience = portfolioData.experience;
  const education = portfolioData.education;

  // Descending Path (Newest to Oldest)
  const path = [
    {
      ...education[0], // ISTA
      type: 'edu',
      status: 'in-progress',
      children: [
        { ...experience[1], type: 'work' }, // ONEE Stage
        { ...experience[0], type: 'work' }  // SOUK Project
      ]
    },
    {
      ...education[1], // Bac
      type: 'edu',
      status: 'completed',
      children: []
    }
  ];

  const t = portfolioData.nav[language];

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto space-y-20 py-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
             <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-500/20">
               Timeline
             </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            {t.experience}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
            {language === 'ar' ? 'رحلتي المهنية والأكاديمية (تنازلي)' : 'Une rétrospective de mon parcours académique et de mes premières immersions professionnelles.'}
          </p>
        </div>

        <div className="relative space-y-32">
          {/* Main Path Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 z-0 rounded-full" />

          {path.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative z-10 space-y-12">
              {/* Major Phase Marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center md:justify-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-20 h-20 rounded-[2rem] border-8 border-white dark:border-slate-950 shadow-2xl flex items-center justify-center z-20 transition-transform hover:scale-110 ${
                    phase.status === 'in-progress' ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  }`}>
                    {phase.status === 'in-progress' ? <Rocket size={32} /> : <Award size={32} />}
                  </div>
                  <div className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl">
                    {phase[language].period}
                  </div>
                </div>
              </motion.div>

              {/* Major Phase Card */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[90%]"
                >
                  <Card className="p-10 md:p-14 border-none bg-white dark:bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-blue-500/5 relative overflow-visible rounded-[3rem]">
                    {phase.status === 'in-progress' && (
                      <div className="absolute -top-4 -right-4 px-6 py-2 bg-emerald-500 text-white text-[12px] font-black uppercase rounded-2xl shadow-2xl rotate-6 border-4 border-white dark:border-slate-900">
                        En Cours
                      </div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="p-6 rounded-[2.5rem] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shrink-0">
                        <GraduationCap size={48} />
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
                            {phase[language].title}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">
                            <MapPin size={18} />
                            {phase[language].place}
                          </div>
                        </div>
                        
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          {phase[language].desc}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                           <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 flex items-center gap-2">
                              <Star size={14} className="text-yellow-500 fill-current" /> Excellence Académique
                           </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Nested Children (Work/Projects) */}
              {phase.children.length > 0 && (
                <div className="grid md:grid-cols-2 gap-10 px-4 md:px-0 mt-20">
                  {phase.children.map((child, childIndex) => (
                    <motion.div
                      key={childIndex}
                      initial={{ opacity: 0, scale: 0.9, x: childIndex % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full p-10 bg-slate-50/50 dark:bg-slate-800/30 border-none rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 transition-all group shadow-xl hover:shadow-2xl">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 shadow-xl border border-slate-100 dark:border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                              <Briefcase size={24} />
                            </div>
                            <span className="px-3 py-1 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em]">
                              {child[language].period}
                            </span>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
                              {child[language].title}
                            </h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest">
                              {child[language].place}
                            </p>
                          </div>

                          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            {child[language].desc}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Visual Divider */}
              {phaseIndex < path.length - 1 && (
                <div className="flex justify-center py-10">
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronDown className="text-slate-200 dark:text-slate-800" size={48} />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Parcours;
