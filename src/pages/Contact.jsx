import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { translations, LINKS } from '../data/portfolioData';

export default function Contact({ lang }) {
  const t = translations[lang];
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactErrors, setContactErrors] = useState({});

  const validateContact = () => {
    const errs = {};
    if (!contactForm.name.trim()) errs.name = t.nameRequired;
    if (!contactForm.email.includes('@')) errs.email = t.invalidEmail;
    if (contactForm.message.trim().length < 10) errs.message = t.messageTooShort;
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendMessage = () => {
    if (!validateContact()) return;
    const subject = encodeURIComponent('Contact depuis Portfolio — ' + contactForm.name);
    const body = encodeURIComponent(`Nom: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setContactForm({ name: '', email: '', message: '' });
    setContactErrors({});
  };

  return (
    <div className="py-20 px-4 min-h-[85vh] flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.contactTitle}
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
          {/* Info Side */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t.contactInfo}</h3>
              <div className="space-y-6">
                <a href={`mailto:${LINKS.email}`} className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50">
                    <Mail className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{t.email}</div>
                    <div className="font-medium">{LINKS.email}</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-slate-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/50">
                    <Phone className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{t.phone}</div>
                    <div className="font-medium">+212 716 288 974</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50">
                    <MapPin className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{t.location}</div>
                    <div className="font-medium">Oujda, Maroc</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="md:col-span-3 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{t.contactMessage}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">{t.yourName}</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className={`w-full bg-slate-900/50 border ${contactErrors.name ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {contactErrors.name && <span className="text-red-400 text-xs mt-1">{contactErrors.name}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">{t.yourEmail}</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className={`w-full bg-slate-900/50 border ${contactErrors.email ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {contactErrors.email && <span className="text-red-400 text-xs mt-1">{contactErrors.email}</span>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.yourMessage}</label>
                <textarea
                  rows="4"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className={`w-full bg-slate-900/50 border ${contactErrors.message ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                  placeholder="Hello..."
                ></textarea>
                {contactErrors.message && <span className="text-red-400 text-xs mt-1">{contactErrors.message}</span>}
              </div>
              
              <button
                onClick={handleSendMessage}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group text-white mt-4"
              >
                <span>{t.sendMessage}</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
