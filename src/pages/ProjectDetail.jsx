import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Code, CheckCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CalculatriceDemo, TodoDemo, SoukOverview } from '../components/Demos';

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects } = usePortfolio();
  const p = projects.find(proj => proj.id === parseInt(id));

  if (!p) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Projet introuvable.</p>
      <Link to="/projects" className="btn-corp">Retour aux projets</Link>
    </div>
  );

  return (
    <div className="fade-in">
      <section className="section-corp">
        <div className="container-corp">
          {/* Back */}
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '48px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <ArrowLeft size={18} /> Retour aux projets
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '16px' }}>{p.titre}</h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {p.tech.map(tc => <span key={tc} className="tech-badge">{tc}</span>)}
            </div>
          </div>

          {/* Demo */}
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '20px', padding: '40px', border: '1px solid var(--border-color)', marginBottom: '48px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '24px' }}>Démonstration interactive</p>
            {p.id === 1 && <CalculatriceDemo />}
            {p.id === 2 && <TodoDemo />}
            {p.id === 7 && <SoukOverview />}
            {![1, 2, 7].includes(p.id) && (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
                <Code size={48} style={{ marginBottom: '12px', opacity: 0.4 }} />
                <p style={{ fontWeight: 600 }}>Voir le code sur GitHub</p>
              </div>
            )}
          </div>

          {/* Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '16px' }}>Description</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{p.details}</p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '28px', border: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '24px' }}>Informations</h2>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>Repository</p>
                <a href={`https://github.com/moha4848/${p.repo}`} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                  <Github size={18} /> GitHub →
                </a>
              </div>
              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>Stack</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.tech.map(tc => (
                    <div key={tc} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                      <CheckCircle size={14} style={{ color: 'var(--accent-primary)' }} /> {tc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
