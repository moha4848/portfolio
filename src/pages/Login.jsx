import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 600)); // simulate loading
    if (email === 'mohy0820@port.ma' && password === 'zimo0820') {
      localStorage.setItem('is_admin', 'true');
      navigate('/dashboard');
    } else {
      setError('Email ou mot de passe incorrect.');
    }
    setLoading(false);
  };

  return (
    <div className="fade-in" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', padding: '48px 24px' }}>
      <div className="login-card" style={{ width: '100%', maxWidth: '440px' }}>
        {/* Icon */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', background: 'var(--accent-primary)', color: 'white', padding: '18px', borderRadius: '18px', marginBottom: '20px', boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}>
            <Lock size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '6px' }}>Accès Admin</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Espace réservé à l'administrateur</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: '8px' }}>Adresse Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                className="input-corp" placeholder="votre@email.com" required />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: '8px' }}>Mot de Passe</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
                className="input-corp" placeholder="••••••••" required />
              <button type="button" onClick={() => setShowPass(!showPass)}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '12px 16px', color: '#dc2626', fontSize: '0.875rem', fontWeight: 600 }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button type="submit" className="btn-corp" style={{ width: '100%', marginTop: '8px', opacity: loading ? 0.7 : 1 }} disabled={loading}>
            {loading ? 'Connexion...' : (<>Se Connecter <ArrowRight size={18} /></>)}
          </button>
        </form>

        <div style={{ marginTop: '28px', paddingTop: '28px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
            Portfolio public → <a href="/" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Retour à l'accueil</a>
          </p>
        </div>
      </div>
    </div>
  );
}
