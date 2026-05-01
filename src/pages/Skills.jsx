import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const skillLevels = [90, 70, 85, 80, 75, 90];

export default function Skills() {
  const { t, skills } = usePortfolio();

  return (
    <div className="fade-in">
      <section className="section-corp">
        <div className="container-corp">
          <p className="section-subtitle">Expertise technique</p>
          <h2 className="section-title" style={{ marginBottom: '64px' }}>{t.skillsTitle}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {skills.map((skill, i) => (
              <div key={i} className="corp-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: '#dbeafe', padding: '12px', borderRadius: '12px', color: 'var(--accent-primary)', flexShrink: 0 }}>
                    <skill.icon size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '2px' }}>{skill.nom}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{skill.details}</p>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8' }}>Maîtrise</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{skillLevels[i]}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${skillLevels[i]}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
