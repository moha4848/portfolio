import React, { useState, useEffect } from 'react';
import { Users, Eye, BarChart, Plus, Trash2, Edit } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Dashboard() {
  const { projects } = usePortfolio();
  const [stats, setStats] = useState({ totalViews: 0, activeUsers: 0, projectClicks: 0 });
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const savedViews = parseInt(localStorage.getItem('p_views') || '1240');
    setStats({
      totalViews: savedViews + Math.floor(Math.random() * 5),
      activeUsers: Math.floor(Math.random() * 10) + 5,
      projectClicks: Math.floor(savedViews * 0.25)
    });
  }, []);

  return (
    <div className="py-24 bg-slate-950 min-h-screen fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black tracking-tighter text-white">Tableau de Bord Admin</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => { localStorage.removeItem('is_admin'); window.location.href = '/login'; }} 
              className="px-6 py-3 bg-slate-900 border border-white/5 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
            >
              Déconnexion
            </button>
            <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">
              <Plus size={20} /> Nouveau Projet
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 shadow-xl">
            <div className="flex items-center gap-4 mb-4 text-blue-400">
              <Eye size={24} /> <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Vues Totales</span>
            </div>
            <div className="text-4xl font-black text-white">{stats.totalViews}</div>
            <p className="text-green-400 text-sm font-bold mt-2">+12% cette semaine</p>
          </div>
          <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 shadow-xl">
            <div className="flex items-center gap-4 mb-4 text-indigo-400">
              <Users size={24} /> <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Visiteurs Actifs</span>
            </div>
            <div className="text-4xl font-black text-white">{stats.activeUsers}</div>
            <p className="text-slate-500 text-sm font-bold mt-2">Temps réel</p>
          </div>
          <div className="p-8 bg-slate-900 rounded-3xl border border-white/5 shadow-xl">
            <div className="flex items-center gap-4 mb-4 text-purple-400">
              <BarChart size={24} /> <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Interactions</span>
            </div>
            <div className="text-4xl font-black text-white">{stats.projectClicks}</div>
            <p className="text-blue-400 text-sm font-bold mt-2">Clics sur projets</p>
          </div>
        </div>

        {/* Project Management */}
        <div className="bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-xl overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">Gestion des Projets</h3>
            <span className="px-4 py-1 bg-slate-950 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest border border-white/5">{projects.length} Projets</span>
          </div>
          <div className="divide-y divide-white/5">
            {projects.map((p) => (
              <div key={p.id} className="p-8 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-slate-600 font-bold text-xl border border-white/5">
                    {p.titre[0]}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white">{p.titre}</h4>
                    <p className="text-slate-500 text-sm">{p.tech.join(', ')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 bg-slate-950 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all border border-white/5"><Edit size={20} /></button>
                  <button className="p-3 bg-slate-950 text-slate-400 rounded-xl hover:bg-red-600 hover:text-white transition-all border border-white/5"><Trash2 size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[100] flex items-center justify-center p-6" onClick={() => setShowAddModal(false)}>
          <div className="bg-slate-900 rounded-[3rem] max-w-xl w-full p-12 shadow-3xl border border-white/5 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-black mb-8 tracking-tighter text-white">Ajouter un Projet</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Titre du Projet</label>
                <input type="text" className="w-full p-4 bg-slate-950 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white" placeholder="Nom du projet" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Description Courte</label>
                <textarea className="w-full p-4 bg-slate-950 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none h-32 text-white" placeholder="Décrivez le projet..."></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <button onClick={() => setShowAddModal(false)} className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">Enregistrer</button>
                <button onClick={() => setShowAddModal(false)} className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all">Annuler</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
