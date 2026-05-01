import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const experiences = [
  {
    titre: 'Stage de fin de formation – ONEE',
    company: 'Office National de l\'Électricité et de l\'Eau Potable',
    periode: '2024 · 2 mois',
    type: 'Stage',
    description: 'Développement d\'une application de gestion de laboratoire et de suivi des équipements techniques. Contribution à l\'analyse, conception et développement. Utilisation de PHP/Laravel pour le backend et collaboration avec l\'équipe technique.',
    tasks: ['Analyse des besoins', 'Conception base de données', 'Développement PHP/Laravel', 'Tests et validation']
  },
  {
    titre: 'Développeur Full Stack',
    company: 'SOUK SaaS Marketplace',
    periode: '2024 – 2025',
    type: 'Projet Personnel',
    description: 'Création d\'une plateforme e-commerce multi-vendeurs SaaS avec tableau de bord complet pour Admin, Vendeurs et Clients. Architecture clean avec gestion des rôles (RBAC).',
    tasks: ['Architecture multi-tenant', 'API REST Laravel', 'Frontend React', 'Système RBAC']
  }
];

export default function Experience() {
  const { t } = usePortfolio();

  return (
    <div className="fade-in">
      <section className="section-corp-alt">
        <div className="container-corp">
          <p className="section-subtitle">Parcours professionnel</p>
          <h2 className="section-title" style={{ marginBottom: '64px' }}>{t.experienceTitle}</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '4px' }}>{exp.titre}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>{exp.company}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ background: '#f0f9ff', color: '#0284c7', border: '1px solid #bae6fd', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{exp.type}</span>
                    <span className="period-badge">{exp.periode}</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px', fontSize: '0.95rem' }}>{exp.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tasks.map((task, j) => (
                    <span key={j} className="tech-badge">{task}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
