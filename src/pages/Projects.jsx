import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Calculator, CheckSquare, Layout, Mail, Clock, HelpCircle, Image } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap = { 1: Calculator, 2: CheckSquare, 3: Mail, 4: Image, 5: Clock, 6: HelpCircle, 7: Layout };

export default function Projects() {
  const { t, projects } = usePortfolio();

  return (
    <div className="fade-in">
      <section className="section-corp-alt">
        <div className="container-corp">
          <p className="section-subtitle">Réalisations</p>
          <h2 className="section-title" style={{ marginBottom: '64px' }}>{t.projectsTitle}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {projects.map((p) => {
              const Icon = iconMap[p.id] || Layout;
              return (
                <div key={p.id} className="project-card">
                  <div className="project-thumb">
                    <Icon size={80} strokeWidth={0.8} />
                  </div>

                  <div style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{p.titre}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.7, fontSize: '0.9rem' }}>{p.desc}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {p.tech.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                      <Link to={`/project/${p.id}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.9rem', transition: 'gap 0.2s' }}>
                        Voir Détails <ArrowRight size={16} />
                      </Link>
                      <a href={`https://github.com/moha4848/${p.repo}`} target="_blank" rel="noreferrer"
                        style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#0f172a'}
                        onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
                        <Github size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
