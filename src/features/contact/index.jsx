import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, Button } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const t = portfolioData.common[language];
  const p = portfolioData.profile[language];

  const contactDetails = [
    { icon: Mail, label: t.email, value: "myousfi610@gmail.com", href: "mailto:myousfi610@gmail.com" },
    { icon: Phone, label: "Phone", value: "+212 6XXXXXXXX", href: "tel:+2126XXXXXXXX" },
    { icon: MapPin, label: "Location", value: "Oujda, Maroc", href: "#" }
  ];

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              {portfolioData.nav[language].contact}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Card key={index} className="p-4 group cursor-pointer" hover={false}>
                  <a href={detail.href} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{detail.label}</p>
                      <p className="text-slate-700 dark:text-slate-200 font-semibold">{detail.value}</p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="p-8 sm:p-10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">{t.name}</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">{t.email}</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">{t.message}</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <Button variant="primary" className="w-full py-5 text-lg">
                <Send size={20} />
                {t.send}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
