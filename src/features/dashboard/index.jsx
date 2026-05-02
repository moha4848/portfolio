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
  Github,
  Code2,
  GitFork,
  Star,
  Eye,
  MousePointer2,
  Download,
  Mail,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = portfolioData.nav[language];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [reposData, setReposData] = useState([]);
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

  // Fetch GitHub API data and Local Stats
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchData = async () => {
      try {
        // Local tracking data
        setLocalStats(statsService.getStats());
        setMessages(statsService.getMessages());

        // Global GitHub data
        const userRes = await fetch('https://api.github.com/users/moha4848');
        const userData = await userRes.json();
        
        const reposRes = await fetch('https://api.github.com/users/moha4848/repos?per_page=100');
        const repos = await reposRes.json();

        setGithubData(userData);
        setReposData(repos);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
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
    { label: "Total Views", value: localStats.views, icon: Eye, color: "blue" },
    { label: "Project Clicks", value: localStats.projectClicks, icon: MousePointer2, color: "cyan" },
    { label: "CV Downloads", value: localStats.cvDownloads, icon: Download, color: "emerald" },
    { label: "Inquiries", value: messages.length, icon: Mail, color: "purple" }
  ];

  // Chart 1: Language usage from GitHub (Real percentages)
  const languagesMap = reposData.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});
  
  const totalReposWithLang = Object.values(languagesMap).reduce((a, b) => a + b, 0);
  const languageStats = Object.entries(languagesMap)
    .map(([lang, count]) => ({
      name: lang,
      percent: Math.round((count / totalReposWithLang) * 100)
    }))
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 4);

  return (
    <PageWrapper>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <LayoutDashboard className="text-blue-600" />
                Tableau de Bord Réel
              </h2>
              <button 
                onClick={handleLogout}
                className="md:hidden p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <LogOut size={20} />
              </button>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Statistiques réelles basées sur l'activité de ce navigateur et votre profil GitHub.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <GlassCard className="px-4 py-2 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Clock size={16} className="text-blue-500" />
              Mise à jour: {new Date(localStats.lastUpdated || Date.now()).toLocaleTimeString()}
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
              {/* Messages Section */}
              <Card className="lg:col-span-2 p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Mail size={20} className="text-blue-600" />
                    Messages Récents (Inquiries)
                  </h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full font-bold">
                    {messages.length} Total
                  </span>
                </div>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {messages.length > 0 ? (
                    <AnimatePresence>
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-500/30 transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white">{msg.name}</p>
                              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{msg.email}</p>
                            </div>
                            <span className="text-[10px] text-slate-400">
                              {new Date(msg.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                            "{msg.message}"
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  ) : (
                    <div className="h-40 flex flex-col items-center justify-center text-slate-400 gap-2">
                      <Mail size={32} strokeWidth={1} />
                      <p>Aucun message pour le moment.</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Languages Chart (Real Percentages) */}
              <Card className="p-8 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Expertise Réelle</h3>
                  <p className="text-xs text-slate-500">Basé sur vos dépôts GitHub</p>
                </div>
                <div className="space-y-6">
                  {languageStats.map((lang, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="flex items-center gap-2 dark:text-slate-200">
                          <Code2 size={16} className="text-blue-500" /> {lang.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400">{lang.percent}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="h-full bg-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 flex flex-col items-center gap-4">
                  <Github size={48} className="text-slate-200 dark:text-slate-800" />
                  <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
                    Données Synchronisées
                  </p>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
