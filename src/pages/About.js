import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const { data } = usePortfolio();

  return (
    <div className="fade-in">
      <Navbar />
      <main className="pt-20">
        <div className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-black mb-12 tracking-tighter border-b border-slate-100 pb-8">
              À Propos de Moi
            </h1>

            <div className="grid md:grid-cols-3 gap-16 mb-24">
              <div className="md:col-span-2 space-y-6 text-xl text-slate-600 leading-relaxed">
                <p className="bg-blue-50 p-8 rounded-3xl text-blue-900 font-medium italic border-l-8 border-blue-600">
                  {data.bio1}
                </p>
                <p>{data.bio2}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">Contact</h2>
                {[
                  { icon: Mail, val: data.email },
                  { icon: Phone, val: data.phone },
                  { icon: MapPin, val: data.address },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-600">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium text-sm">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formation */}
            <h2 className="text-3xl font-black mb-12 tracking-tighter">Formation & Diplômes</h2>
            <div className="space-y-10 border-l-2 border-slate-100 pl-8 ml-4">
              {data.formations.map((f, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                  <h3 className="text-2xl font-bold mb-2">{f.titre}</h3>
                  <p className="text-blue-600 font-bold mb-3">{f.etablissement} • {f.periode}</p>
                  <p className="text-slate-500">{f.description}</p>
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
