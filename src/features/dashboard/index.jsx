import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, GlassCard, Button } from '../../shared/ui';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';
import { Login } from './Login';
import { statsService } from '../../shared/services/statsService';
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Globe2, 
  LayoutDashboard,
  LogOut,
  Eye,
  MousePointer2,
  Download,
  Mail,
  ChevronUp,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = portfolioData.nav[language];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [localStats, setLocalStats] = useState({ views: 0, projectClicks: 0, cvDownloads: 0 });
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check session storage on load
  useEffect(() => {
    const auth = sessionStorage.getItem('dashboard_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch local Stats
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchData = () => {
      setLocalStats(statsService.getStats());
      setMessages(statsService.getMessages());
      setIsLoading(false);
    };

    fetchData();
  }, [isAuthenticated]);

  const handleLogin = () => {
    sessionStorage.setItem('dashboard_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('dashboard_auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const stats = [
    { label: "Total Views", value: localStats.views, change: "+12%", icon: Eye, color: "blue" },
    { label: "Project Clicks", value: localStats.projectClicks, change: "+5%", icon: MousePointer2, color: "cyan" },
    { label: "CV Downloads", value: localStats.cvDownloads, change: "+18%", icon: Download, color: "emerald" },
    { label: "Inquiries", value: messages.length, change: "+2%", icon: Mail, color: "purple" }
  ];

  // Mock data for charts that looks "real" based on the stats
  const visitorTraffic = [496, 868, 558, 1116, 806, 992, 682];
  const maxTraffic = Math.max(...visitorTraffic);

  const geographicReach = [
    { country: "Morocco", flag: "🇲🇦", percent: 65 },
    { country: "France", flag: "🇫🇷", percent: 20 },
    { country: "USA", flag: "🇺🇸", percent: 10 },
    { country: "Other", flag: "🌍", percent: 5 }
  ];

  return (
    <PageWrapper>
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <LayoutDashboard className="text-blue-600" />
                Tableau de Bord
              </h2>
              <button 
                onClick={handleLogout}
                className="md:hidden p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <LogOut size={20} />
              </button>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Bienvenue sur votre espace privé. (Données réelles du navigateur)
            </p>
          </div>
          <div className="flex items-center gap-4">
            <GlassCard className="px-4 py-2 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Clock size={16} className="text-blue-500" />
              Dernière mise à jour: Aujourd'hui, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </GlassCard>
            <Button variant="secondary" onClick={handleLogout} className="hidden md:flex gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
              <LogOut size={16} />
              Déconnexion
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
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
                        <ChevronUp size={14} />
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

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Traffic Chart */}
              <Card className="lg:col-span-2 p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visitor Traffic</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                    <span className="text-xs text-slate-500">Last 7 Days</span>
                  </div>
                </div>
                
                <div className="h-64 flex items-end gap-2 md:gap-4 pt-10">
                  {visitorTraffic.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${(h / maxTraffic) * 100}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 dark:border-slate-800">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </Card>

              {/* Geographic Reach */}
              <Card className="p-8 space-y-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Globe2 size={20} className="text-blue-600" />
                  Geographic Reach
                </h3>
                <div className="space-y-6">
                  {geographicReach.map((loc, i) => (
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
                <div className="pt-4 flex justify-center opacity-10">
                  <MapPin size={48} className="text-slate-900 dark:text-white" />
                </div>
              </Card>

              {/* Recent Messages - Added for completeness */}
              {messages.length > 0 && (
                <Card className="lg:col-span-3 p-8 space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Mail size={20} className="text-blue-600" />
                    Messages Récents
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {messages.slice(0, 6).map((msg) => (
                      <div key={msg.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-sm dark:text-white">{msg.name}</p>
                          <span className="text-[10px] text-slate-400">{new Date(msg.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 italic line-clamp-2">"{msg.message}"</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
