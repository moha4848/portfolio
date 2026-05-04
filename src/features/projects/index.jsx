import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, Button } from '../../shared/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Layout, Layers, Terminal, Search, Eye } from 'lucide-react';
import { statsService } from '../../shared/services/statsService';

// Import project images
import soukImg from '../../assets/projects/souk.png';
import calculatorImg from '../../assets/projects/calculator.png';
import todoImg from '../../assets/projects/todo.png';

const projectImages = {
  "souk.png": soukImg,
  "calculator.png": calculatorImg,
  "todo.png": todoImg
};

const Projects = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = portfolioData.common[language];

  const handleSelectProject = (project) => {
    statsService.trackProjectClick();
    setSelectedProject(project);
  };

  const categories = ['All', 'Full-Stack', 'Frontend'];
  const projects = portfolioData.projects;

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <PageWrapper>
      <div className="space-y-16 py-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
            {portfolioData.nav[language].projects}
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Une sélection de mes travaux les plus récents, allant des outils frontend aux plateformes full-stack.
          </p>
          
          <div className="flex justify-center gap-3 pt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 ring-4 ring-blue-500/10' 
                  : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full"
              >
                <Card className="group h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  {/* Project Image / Preview */}
                  <div className="relative h-56 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    {project.image && projectImages[project.image] ? (
                      <img 
                        src={projectImages[project.image]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                        {project.id === 'souk-saas' ? <Layers size={80} className="text-blue-500 opacity-20" /> : <Terminal size={80} className="text-slate-400 opacity-20" />}
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button 
                        onClick={() => handleSelectProject(project)}
                        className="p-4 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-xl"
                      >
                        <Eye size={24} />
                      </button>
                    </div>

                    <div className="absolute top-4 right-4">
                       <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg border border-slate-200/50 dark:border-slate-800/50">
                         {project.category || 'Personal'}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col space-y-4 bg-white dark:bg-slate-900">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-[10px] font-black px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 mt-auto">
                      <Button 
                        variant="secondary" 
                        className="w-full text-xs font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all"
                        onClick={() => handleSelectProject(project)}
                      >
                        {t.details}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal (L'aperçu détaillé) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all z-50 text-white border border-white/20"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image Preview */}
              <div className="lg:w-3/5 bg-slate-100 dark:bg-slate-800 relative h-[300px] lg:h-auto">
                {selectedProject.image && projectImages[selectedProject.image] ? (
                  <img 
                    src={projectImages[selectedProject.image]} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                    <Layout size={120} className="text-blue-500 opacity-30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden" />
              </div>

              {/* Right Side: Details */}
              <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto space-y-10 custom-scrollbar">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                      {selectedProject.category || 'Personal'}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                    {selectedProject.title}
                  </h3>
                  <div className="w-16 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Description</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedProject.description[language]}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  <Button variant="primary" className="flex-1 py-4 text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30" onClick={() => {
                    statsService.trackProjectClick();
                    window.open(selectedProject.github, '_blank');
                  }}>
                    <Github size={20} />
                    {t.github}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Projects;
