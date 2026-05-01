import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, MapPin, Phone } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { t } = usePortfolio();

  return (
    <footer className="footer-corp">
      <div className="container-corp">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '64px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'white', marginBottom: '16px' }}>
              YM<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </div>
            <p style={{ lineHeight: 1.7, fontSize: '0.9rem', maxWidth: '280px', marginBottom: '24px' }}>
              Développeur Full Stack passionné, basé à Oujda. Disponible pour stages et opportunités professionnelles.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/moha4848" target="_blank" rel="noreferrer"
                style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <Github size={18} />
              </a>
              <a href={`mailto:${t.email}`}
                style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.4)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#475569', marginBottom: '20px' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { to: '/', label: 'Accueil' },
                { to: '/about', label: 'À Propos' },
                { to: '/experience', label: 'Expérience' },
                { to: '/skills', label: 'Compétences' },
                { to: '/projects', label: 'Projets' },
              ].map(item => (
                <Link key={item.to} to={item.to}
                  style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#475569', marginBottom: '20px' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Mail, val: t.email, href: `mailto:${t.email}` },
                { icon: Phone, val: '+212 716 288 974', href: 'tel:+212716288974' },
                { icon: MapPin, val: 'Hay Samara, Oujda', href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <item.icon size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  {item.href ? (
                    <a href={item.href} style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                      {item.val}
                    </a>
                  ) : (
                    <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>{item.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
            &copy; 2024 Yousfi Mohammed. {t.rights}
          </p>
          <Link to="/login" style={{ fontSize: '0.75rem', color: '#334155', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#64748b'}
            onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
            Admin ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
