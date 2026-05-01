import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, GlassCard, Button } from '../../shared/ui';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';
import { Login } from './Login';
import { 
  Users, 
  MousePointer2, 
  TrendingUp, 
  Clock, 
  Globe2, 
  LayoutDashboard,
  LogOut,
  Github,
  Code2,
  GitFork,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = portfolioData.nav[language];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check session storage on load
  useEffect(() => {
    const auth = sessionStorage.getItem('dashboard_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch GitHub API data
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/moha4848');
        const userData = await userRes.json();
        
        const reposRes = await fetch('https://api.github.com/users/moha4848/repos?per_page=100');
        const repos = await reposRes.json();

        setGithubData(userData);
        setReposData(repos);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
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

  // Calculate real stats from GitHub
  const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

  const stats = [
    { label: "Projets Publics", value: githubData?.public_repos || 0, icon: LayoutDashboard, color: "blue" },
    { label: "Total Étoiles (Stars)", value: totalStars, icon: Star, color: "emerald" },
    { label: "Total Forks", value: totalForks, icon: GitFork, color: "cyan" },
    { label: "Abonnés GitHub", value: githubData?.followers || 0, icon: Users, color: "purple" }
  ];

  // Chart 1: Top 7 repositories by size (Activity mockup based on real data)
  const topRepos = [...reposData].sort((a, b) => b.size - a.size).slice(0, 7);
  const maxSize = Math.max(...topRepos.map(r => r.size), 1);

  // Chart 2: Top Languages Used
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
                <Github className="text-blue-600" />
                Statistiques en Temps Réel
              </h2>
              <button 
                onClick={handleLogout}
                className="md:hidden p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg"
              >
                <LogOut size={20} />
              </button>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              Données réelles récupérées via l'API GitHub pour le compte @moha4848.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <GlassCard className="px-4 py-2 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Clock size={16} className="text-blue-500" />
              Direct API
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

            {/* Charts Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Activity Chart based on Repo Size */}
              <Card className="lg:col-span-2 p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Activité des Dépôts (Taille KB)</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                    <span className="text-xs text-slate-500">Top 7 Projets</span>
                  </div>
                </div>
                
                {topRepos.length > 0 ? (
                  <div className="h-64 flex items-end gap-2 md:gap-4 pt-8">
                    {topRepos.map((repo, i) => {
                      const heightPercent = Math.max((repo.size / maxSize) * 100, 10);
                      return (
                        <motion.div
                          key={repo.id}
                          initial={{ height: 0 }}
                          animate={{ height: `${heightPercent}%` }}
                          transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg relative group flex flex-col justify-end"
                        >
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {repo.name}: {repo.size} KB
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="h-64 flex items-center justify-center text-slate-400">Aucun projet trouvé</div>
                )}
                
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 dark:border-slate-800">
                  {topRepos.map((r, i) => (
                    <span key={i} className="truncate w-12 text-center" title={r.name}>
                      {r.name.substring(0, 5)}...
                    </span>
                  ))}
                </div>
              </Card>

              {/* Languages Stats */}
              <Card className="p-8 space-y-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Langages Utilisés</h3>
                <div className="space-y-6">
                  {languageStats.length > 0 ? languageStats.map((lang, i) => (
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
                          transition={{ delay: 1 + i * 0.1 }}
                          className="h-full bg-blue-600"
                        />
                      </div>
                    </div>
                  )) : (
                    <div className="text-center text-slate-400 pt-10">Données insuffisantes</div>
                  )}
                </div>
                <div className="pt-4 flex justify-center">
                  <Globe2 size={48} className="text-slate-100 dark:text-slate-800" />
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
