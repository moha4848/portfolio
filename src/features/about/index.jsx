import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, GlassCard } from '../../shared/ui';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  const p = portfolioData.profile[language];

  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {portfolioData.nav[language].about}
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>{p.about}</p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-4 flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 dark:text-blue-400 shrink-0" size={20} />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {skill}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
