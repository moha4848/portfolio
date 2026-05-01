import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar() {
  const { t } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const active = location.pathname === to;
    return (
      <Link to={to} className={`text-sm font-bold transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-500 hover:text-blue-600'}`} onClick={() => setMenuOpen(false)}>
        {children}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600 no-underline">YM<span className="text-slate-900">.</span></Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/">{t.nav[0]}</NavLink>
          <NavLink to="/about">{t.nav[1]}</NavLink>
          <NavLink to="/experience">{t.nav[2]}</NavLink>
          <NavLink to="/skills">{t.nav[3]}</NavLink>
          <NavLink to="/projects">{t.nav[4]}</NavLink>
          <Link to="/dashboard" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-black transition-all no-underline">Dashboard</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-900">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[49] md:hidden flex flex-col p-10 pt-32 gap-8 animate-in slide-in-from-top duration-300">
          <NavLink to="/">{t.nav[0]}</NavLink>
          <NavLink to="/about">{t.nav[1]}</NavLink>
          <NavLink to="/experience">{t.nav[2]}</NavLink>
          <NavLink to="/skills">{t.nav[3]}</NavLink>
          <NavLink to="/projects">{t.nav[4]}</NavLink>
          <NavLink to="/dashboard">Dashboard Admin</NavLink>
        </div>
      )}
    </header>
  );
}
