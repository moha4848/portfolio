import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const { data } = usePortfolio();

  return (
    <div className="fade-in">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-[85vh] flex items-center bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-20">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 tracking-wide uppercase">
                Portfolio 2024
              </span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 text-slate-900 tracking-tighter">
                {data.name.split(' ')[0]} <br />
                <span className="text-blue-600">{data.name.split(' ')[1]}</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium max-w-lg mb-10 leading-relaxed">
                {data.role}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all no-underline"
                >
                  Voir Mes Projets
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all no-underline"
                >
                  En Savoir Plus
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/profile.jpeg"
                  alt={data.name}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: '3+', label: 'Projets Réalisés' },
                { val: '2', label: 'Expériences' },
                { val: '6', label: 'Technologies' },
                { val: '2026', label: 'Diplôme Prévu' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-black text-blue-600 mb-2">{s.val}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
