import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, label }) => {
    const active = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-bold transition-all no-underline ${
          active ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
        }`}
      >
        {label}
      </Link>
    );
  };

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À Propos' },
    { to: '/experience', label: 'Expérience' },
    { to: '/skills', label: 'Compétences' },
    { to: '/projects', label: 'Projets' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600 no-underline">
          YM<span className="text-slate-900">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => <NavLink key={l.to} {...l} />)}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-900">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-10 pt-32 gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black text-slate-900 no-underline border-b border-slate-100 pb-4"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
