import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Calculator, CheckSquare, Layout, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const demoIconMap = {
  calculatrice: Calculator,
  todo: CheckSquare,
  souk: Layout,
};

export default function Projects() {
  const { data } = usePortfolio();

  return (
    <div className="fade-in">
      <Navbar />
      <main className="pt-20">
        <div className="py-24 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-black mb-6 tracking-tighter text-center">Projets Réalisés</h1>
            <p className="text-center text-slate-500 mb-16 text-lg">
              {data.projects.length} projets réalisés avec passion
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {data.projects.map((p) => {
                const Icon = demoIconMap[p.demo] || Layout;
                return (
                  <div
                    key={p.id}
                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-slate-50 flex items-center justify-center text-slate-200 group-hover:bg-blue-50 transition-colors duration-300">
                      <Icon size={100} strokeWidth={1} className="group-hover:text-blue-200 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-10">
                      <h2 className="text-3xl font-bold mb-3">{p.titre}</h2>
                      <p className="text-lg text-slate-500 mb-6 leading-relaxed">{p.desc}</p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {p.tech.map(t => (
                          <span key={t} className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                        <Link
                          to={`/project/${p.id}`}
                          className="flex items-center gap-2 text-blue-600 font-black hover:underline text-lg no-underline"
                        >
                          Voir Détails →
                        </Link>
                        <a
                          href={`https://github.com/moha4848/${p.repo}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-300 hover:text-slate-900 transition-colors"
                          title="Voir sur GitHub"
                        >
                          <Github size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
