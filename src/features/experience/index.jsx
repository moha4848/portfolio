import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ChevronDown, Rocket, CheckCircle2 } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            {t.experience}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {language === 'ar' ? 'رحلتي المهنية والأكاديمية (تنازلي)' : 'Ma progression chronologique (Décroissante)'}
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="relative space-y-20">
          {/* Main Path Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 z-0" />

          {path.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative z-10 space-y-8">
              {/* Major Phase Marker */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center md:justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full border-4 border-white dark:border-slate-950 shadow-2xl flex items-center justify-center z-20 ${
                    phase.status === 'in-progress' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  }`}>
                    {phase.status === 'in-progress' ? <Rocket size={24} className="animate-pulse" /> : <CheckCircle2 size={24} />}
                  </div>
                  <span className="text-[10px] font-black bg-slate-900 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                    {phase[language].period}
                  </span>
                </div>
              </motion.div>

              {/* Major Phase Card */}
              <div className="flex flex-col items-center">
                <Card className="w-full md:w-[85%] p-8 border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-visible relative">
                  {phase.status === 'in-progress' && (
                    <div className="absolute -top-3 -right-3 px-4 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase rounded-lg shadow-lg rotate-12">
                      Current
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <GraduationCap size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                        {phase[language].title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-bold ml-1">
                      <MapPin size={18} />
                      {phase[language].place}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 font-medium ml-1">
                      {phase[language].desc}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Nested Children (Work/Projects) */}
              {phase.children.length > 0 && (
                <div className="grid md:grid-cols-2 gap-8 px-6 md:px-0 mt-12">
                  {phase.children.map((child, childIndex) => (
                    <motion.div
                      key={childIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Card className="h-full p-8 bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all group">
                        <div className="space-y-5">
                          <div className="flex items-center justify-between">
                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-blue-600 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Briefcase size={20} />
                            </div>
                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                              {child[language].period}
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                              {child[language].title}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                              {child[language].place}
                            </p>
                          </div>

                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
                <div className="flex justify-center py-6">
                  <ChevronDown className="text-slate-200 dark:text-slate-800" size={32} />
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
