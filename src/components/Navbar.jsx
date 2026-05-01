import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar() {
  const { t } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: t.nav[0] },
    { to: '/about', label: t.nav[1] },
    { to: '/experience', label: t.nav[2] },
    { to: '/skills', label: t.nav[3] },
    { to: '/projects', label: t.nav[4] },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="nav-corp">
        <div className="container-corp" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'var(--accent-primary)' }}>
            YM<span style={{ color: 'var(--text-primary)' }}>.</span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
            {navItems.map(item => (
              <Link key={item.to} to={item.to}
                className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                style={{ padding: '8px 16px' }}>
                {item.label}
              </Link>
            ))}
            <div style={{ width: '1px', height: '20px', background: 'var(--border-color)', margin: '0 8px' }} />
            <Link to="/dashboard"
              style={{ padding: '8px 18px', background: 'var(--text-primary)', color: 'white', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.02em', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--text-primary)'; }}>
              Admin
            </Link>
          </nav>

          {/* Mobile Burger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
            className="mobile-burger">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'white', zIndex: 99, display: 'flex', flexDirection: 'column', padding: '100px 32px 48px' }}>
          {navItems.map(item => (
            <Link key={item.to} to={item.to}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.04em', color: isActive(item.to) ? 'var(--accent-primary)' : 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '20px' }}>
              {item.label}
            </Link>
          ))}
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}
            style={{ fontSize: '1.2rem', fontWeight: 700, color: '#94a3b8', marginTop: '16px' }}>
            Dashboard Admin →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
