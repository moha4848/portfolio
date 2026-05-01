import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, ArrowRight, Download } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Home() {
  const { t } = usePortfolio();

  return (
    <div className="fade-in">
      {/* HERO */}
      <section className="hero-section">
        <div className="container-corp">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}
               className="md:grid-cols-2">
            <div>
              <div className="hero-badge">Portfolio 2024</div>
              <h1 className="hero-title">
                Yousfi<br />
                <span style={{ color: 'var(--accent-primary)' }}>Mohammed</span>
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '24px 0 40px', fontWeight: 500, lineHeight: 1.7 }}>
                {t.role}
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/projects" className="btn-corp">Voir Mes Projets <ArrowRight size={16} /></Link>
                <Link to="/about" className="btn-corp-outline">À Propos</Link>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="hidden-mobile">
              <div style={{
                width: '340px', height: '420px',
                borderRadius: '24px', overflow: 'hidden',
                border: '6px solid white',
                boxShadow: '0 32px 64px -16px rgba(37,99,235,0.2)',
                transform: 'rotate(2deg)',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(2deg)'}>
                <img src="/profile.jpeg" alt="Yousfi Mohammed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT RAPIDE */}
      <section className="section-corp" style={{ background: 'white', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-corp" style={{ textAlign: 'center' }}>
          <p className="section-subtitle">Contact Direct</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
            <a href={`mailto:${t.email}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', border: '1.5px solid var(--border-color)', borderRadius: '12px', fontWeight: 600, color: 'var(--text-primary)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
              <Mail size={20} /> {t.email}
            </a>
            <a href="https://github.com/moha4848" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', border: '1.5px solid var(--border-color)', borderRadius: '12px', fontWeight: 600, color: 'var(--text-primary)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0f172a'; e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
