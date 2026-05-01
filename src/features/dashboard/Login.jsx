import React, { useState } from 'react';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, Button } from '../../shared/ui';
import { Lock, User, KeyRound } from 'lucide-react';
import { motion } from 'framer-motion';

export const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded password for the static portfolio
    if (password === 'zimo0820') {
      onLogin();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Accès Restreint
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Veuillez entrer le mot de passe pour accéder au tableau de bord.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                    placeholder="Mot de passe..."
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm font-medium pl-1">{error}</p>
                )}
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center">
                Se Connecter
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
};
