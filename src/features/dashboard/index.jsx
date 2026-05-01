import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, GlassCard, Button } from '../../shared/ui';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';
import { Login } from './Login';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer2, 
  TrendingUp, 
  Clock, 
  Globe2, 
  LayoutDashboard,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = portfolioData.nav[language];
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check session storage on load
  useEffect(() => {
    const auth = sessionStorage.getItem('dashboard_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('dashboard_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('dashboard_auth');
    setIsAuthenticated(false);
  };

  const stats = [
    { label: "Total Views", value: "1,284", change: "+12%", icon: Eye, color: "blue" },
    { label: "Project Clicks", value: "432", change: "+5%", icon: MousePointer2, color: "cyan" },
    { label: "CV Downloads", value: "89", change: "+18%", icon: TrendingUp, color: "emerald" },
    { label: "Inquiries", value: "12", change: "+2%", icon: Mail, color: "purple" }
  ];

  // Using Mail from lucide-react (imported in a sec)
  const Mail = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <PageWrapper>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <LayoutDashboard className="text-blue-600" />
                {t.dashboard}
              </h2>
              <button 
                onClick={handleLogout}
                className="md:hidden p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <LogOut size={20} />
              </button>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Bienvenue sur votre espace privé. (Données de démonstration)
            </p>
          </div>
          <div className="flex items-center gap-4">
            <GlassCard className="px-4 py-2 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Clock size={16} className="text-blue-500" />
              Last updated: Today, 10:45 AM
            </GlassCard>
            <Button variant="secondary" onClick={handleLogout} className="hidden md:flex gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
              <LogOut size={16} />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400`}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                    {stat.change}
                    <TrendingUp size={14} />
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Mockup */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visitor Traffic</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span className="text-xs text-slate-500">Last 7 Days</span>
              </div>
            </div>
            <div className="h-64 flex items-end gap-2 md:gap-4">
              {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                  className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg relative group"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {Math.floor(h * 12.4)}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 dark:border-slate-800">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </Card>

          <Card className="p-8 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Geographic Reach</h3>
            <div className="space-y-6">
              {[
                { country: "Morocco", flag: "🇲🇦", percent: 65 },
                { country: "France", flag: "🇫🇷", percent: 20 },
                { country: "USA", flag: "🇺🇸", percent: 10 },
                { country: "Other", flag: "🌍", percent: 5 }
              ].map((loc, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="flex items-center gap-2 dark:text-slate-200">
                      <span>{loc.flag}</span> {loc.country}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">{loc.percent}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${loc.percent}%` }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 flex justify-center">
              <Globe2 size={48} className="text-slate-100 dark:text-slate-800" />
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
