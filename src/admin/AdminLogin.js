import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';

// Change this password to whatever you want
const ADMIN_PASSWORD = 'ym2024admin';

export default function AdminLogin({ onLogin }) {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', '1');
      onLogin();
    } else {
      setError('Mot de passe incorrect');
      setShake(true);
      setPw('');
      setTimeout(() => setShake(false), 500);
    }
  };

  if (sessionStorage.getItem('admin_auth') === '1') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className={`bg-white w-full max-w-md p-12 rounded-[2.5rem] border border-slate-100 shadow-xl ${shake ? 'animate-shake' : ''}`}>
        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8">
          <Lock size={36} />
        </div>
        <h1 className="text-3xl font-black text-center tracking-tighter mb-2">Admin Panel</h1>
        <p className="text-slate-400 text-center text-sm mb-10">Accès réservé au propriétaire</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => { setPw(e.target.value); setError(''); }}
              placeholder="Mot de passe"
              className="w-full px-6 py-4 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 pr-14"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm font-bold text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200"
          >
            Connexion
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}
