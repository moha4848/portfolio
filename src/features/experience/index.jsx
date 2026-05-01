import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, Rocket, Laptop } from 'lucide-react';

const Parcours = () => {
  const { language } = useLanguage();
  const experience = portfolioData.experience;
  const education = portfolioData.education;

  // Manual mapping for a logical "Nested Path" (Oldest to Newest)
  const path = [
    {
      ...education[1], // Bac
      type: 'edu',
      status: 'completed',
      children: []
    },
    {
      ...education[0], // ISTA
      type: 'edu',
      status: 'in-progress',
      children: [
        { ...experience[1], type: 'work' }, // ONEE Stage
        { ...experience[0], type: 'work' }  // SOUK Project
      ]
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
            {language === 'ar' ? 'رحلتي المهنية والأكاديمية (تصاعدي)' : 'Ma progression chronologique (Ascendante)'}
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="relative space-y-20">
          {/* Main Path Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 -translate-x-1/2 z-0" />

          {path.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative z-10 space-y-8">
              {/* Major Phase Marker (Education) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center md:justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full border-4 border-white dark:border-slate-950 shadow-2xl flex items-center justify-center z-20 ${
                    phase.status === 'in-progress' ? 'bg-blue-600 text-white animate-bounce' : 'bg-slate-900 text-white'
                  }`}>
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-[10px] font-black bg-slate-900 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                    {phase[language].period}
                  </span>
                </div>
              </motion.div>

              {/* Major Phase Card */}
              <div className="flex flex-col items-center">
                <Card className="w-full md:w-[80%] p-8 border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {phase[language].title}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-bold">
                      <MapPin size={18} />
                      {phase[language].place}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {phase[language].desc}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Nested Children (Work/Projects) */}
              {phase.children.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 pl-12 md:pl-0">
                  {phase.children.map((child, childIndex) => (
                    <motion.div
                      key={childIndex}
                      initial={{ opacity: 0, x: childIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Connection Line */}
                      <div className="hidden md:block absolute top-1/2 left-[-1rem] right-[-1rem] h-0.5 bg-slate-100 dark:bg-slate-800 -z-10" />
                      
                      <Card className="h-full p-6 bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 hover:border-blue-500 transition-all">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="p-2 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                              {childIndex === 0 ? <Briefcase size={16} /> : <Rocket size={16} />}
                            </div>
                            <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded-md">
                              {child[language].period}
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <h4 className="font-bold text-slate-900 dark:text-white">
                              {child[language].title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                              {child[language].place}
                            </p>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {child[language].desc}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Visual Divider between phases */}
              {phaseIndex < path.length - 1 && (
                <div className="flex justify-center py-4">
                  <ChevronDown className="text-slate-200 dark:text-slate-800 animate-bounce" size={32} />
                </div>
              )}
            </div>
          ))}

          {/* Current Status Marker */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center pt-10"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping mb-4" />
            <span className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/30">
              {language === 'ar' ? 'مستمر حتى اليوم' : 'En continu jusqu\'à aujourd\'hui'}
            </span>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Parcours;
