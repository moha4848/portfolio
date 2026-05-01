import React, { useState, useEffect } from 'react';
import { Eye, Users, BarChart3, Plus, Trash2, Edit3, X, TrendingUp, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Dashboard() {
  const { projects } = usePortfolio();
  const [stats, setStats] = useState({ views: 0, visitors: 0, clicks: 0 });
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ titre: '', desc: '', tech: '' });

  useEffect(() => {
    const base = parseInt(localStorage.getItem('p_views') || '1240');
    const newViews = base + Math.floor(Math.random() * 10);
    localStorage.setItem('p_views', newViews);
    setStats({
      views: newViews,
      visitors: Math.floor(Math.random() * 12) + 6,
      clicks: Math.floor(newViews * 0.27)
    });
  }, []);

  return (
    <div className="fade-in">
      <section className="section-corp-alt" style={{ minHeight: '80vh' }}>
        <div className="container-corp">

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '6px' }}>Espace Privé</p>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.04em' }}>Tableau de Bord</h2>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => { localStorage.removeItem('is_admin'); window.location.href = '/login'; }}
                className="btn-corp-outline" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
                Déconnexion
              </button>
              <button onClick={() => setShowModal(true)} className="btn-corp" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
                <Plus size={18} /> Nouveau Projet
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
            {[
              { icon: Eye, label: 'Vues Totales', val: stats.views.toLocaleString(), trend: '+12%', color: '#2563eb', bg: '#dbeafe' },
              { icon: Users, label: 'Visiteurs Actifs', val: stats.visitors, trend: 'En direct', color: '#059669', bg: '#d1fae5' },
              { icon: TrendingUp, label: 'Interactions', val: stats.clicks, trend: 'Clics projets', color: '#7c3aed', bg: '#ede9fe' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ background: s.bg, padding: '10px', borderRadius: '10px', color: s.color }}>
                    <s.icon size={22} />
                  </div>
                  <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{s.trend}</span>
                </div>
                <div className="stat-value">{s.val}</div>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Project Management Table */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid var(--border-color)', overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Gestion des Projets</h3>
              <span style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '100px', padding: '4px 14px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                {projects.length} projets
              </span>
            </div>

            <div>
              {/* Table Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr auto', gap: '16px', padding: '14px 32px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                {['Projet', 'Technologies', 'Repository', 'Actions'].map(col => (
                  <p key={col} style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>{col}</p>
                ))}
              </div>

              {/* Table Rows */}
              {projects.map((p, i) => (
                <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr auto', gap: '16px', padding: '20px 32px', borderBottom: i < projects.length - 1 ? '1px solid var(--border-color)' : 'none', alignItems: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.titre}</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                  <a href={`https://github.com/moha4848/${p.repo}`} target="_blank" rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600 }}>
                    <ExternalLink size={14} /> moha4848/{p.repo}
                  </a>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ padding: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#dbeafe'; e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = '#bfdbfe'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                      <Edit3 size={16} />
                    </button>
                    <button style={{ padding: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = '#dc2626'; e.currentTarget.style.borderColor = '#fecaca'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add Project Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(8px)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
          onClick={() => setShowModal(false)}>
          <div style={{ background: 'white', borderRadius: '24px', padding: '48px', maxWidth: '520px', width: '100%', boxShadow: '0 32px 80px -16px rgba(0,0,0,0.25)' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.03em' }}>Nouveau Projet</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '8px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Titre du Projet', key: 'titre', placeholder: 'Nom du projet' },
                { label: 'Description courte', key: 'desc', placeholder: 'En une phrase...' },
                { label: 'Technologies', key: 'tech', placeholder: 'React, Laravel, MySQL...' }
              ].map(field => (
                <div key={field.key}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>{field.label}</label>
                  <input type="text" value={form[field.key]} onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    className="input-corp" style={{ paddingLeft: '16px' }}
                    placeholder={field.placeholder} />
                </div>
              ))}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button onClick={() => setShowModal(false)} className="btn-corp" style={{ flex: 1 }}>Enregistrer</button>
                <button onClick={() => setShowModal(false)} className="btn-corp-outline" style={{ flex: 1 }}>Annuler</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
