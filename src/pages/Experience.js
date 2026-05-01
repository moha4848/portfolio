import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Experience() {
  const { data } = usePortfolio();

  return (
    <div className="fade-in">
      <Navbar />
      <main className="pt-20">
        <div className="py-24 bg-slate-50 min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-black mb-16 tracking-tighter text-center">
              Expérience Professionnelle
            </h1>
            <div className="space-y-16">
              {data.experiences.map((exp, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all border-t-8 border-t-blue-600"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight">{exp.titre}</h2>
                    <span className="px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm whitespace-nowrap">
                      {exp.periode}
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
