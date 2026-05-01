import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const formations = [
  { titre: 'Technicien Spécialisé en Développement Digital', etablissement: 'ISTA Lazaret, Oujda', periode: '2024 – 2026', description: 'Formation complète en développement web full-stack (React, Laravel, PHP, MySQL).' },
  { titre: 'Baccalauréat Sciences Physiques', etablissement: 'Lycée Larbi al-Houssaini, Oujda', periode: '2023 – 2024', description: 'Obtenu avec mention, option Sciences Physiques.' }
];

export default function About() {
  const { t } = usePortfolio();

  return (
    <div className="fade-in">
      <section className="section-corp">
        <div className="container-corp">
          <p className="section-subtitle">Qui suis-je</p>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>{t.aboutTitle}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '64px' }}>
            <div>
              <div style={{ background: '#eff6ff', borderLeft: '4px solid var(--accent-primary)', padding: '28px 32px', borderRadius: '12px', marginBottom: '28px' }}>
                <p style={{ fontSize: '1.1rem', color: '#1e40af', fontWeight: 500, lineHeight: 1.7, fontStyle: 'italic' }}>{t.aboutText1}</p>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{t.aboutText2}</p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border-color)', height: 'fit-content' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '24px' }}>Informations</p>
              {[
                { icon: Mail, label: 'Email', val: t.email },
                { icon: Phone, label: 'Téléphone', val: '+212 716 288 974' },
                { icon: MapPin, label: 'Adresse', val: 'Hay Samara, Oujda' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ background: '#dbeafe', padding: '8px', borderRadius: '8px', color: 'var(--accent-primary)', flexShrink: 0 }}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section className="section-corp-alt">
        <div className="container-corp">
          <p className="section-subtitle">Parcours académique</p>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>{t.formationTitle}</h2>

          <div className="timeline">
            {formations.map((f, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '6px' }}>{f.titre}</h3>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem' }}>{f.etablissement} &bull; {f.periode}</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
