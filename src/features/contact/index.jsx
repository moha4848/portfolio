import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, Button } from '../../shared/ui';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { statsService } from '../../shared/services/statsService';

const Contact = () => {
  const { language } = useLanguage();
  const t = portfolioData.common[language];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      statsService.saveMessage(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };
  const p = portfolioData.profile[language];

  const contactDetails = [
    { icon: Mail, label: t.email, value: "myousfi610@gmail.com", href: "mailto:myousfi610@gmail.com" },
    { icon: Phone, label: "Phone", value: "+212 716288974", href: "tel:+212716288974" },
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
          <Card className="p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
              >
                <CheckCircle size={64} className="text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Envoyé !</h3>
                <p className="text-slate-600 dark:text-slate-400">Merci {formData.name}, je vous répondrai dès que possible.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">{t.name}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">{t.email}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">{t.message}</label>
                <textarea 
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full py-5 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    {t.send}
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
