import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, Button } from '../../shared/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Layout, Layers, Terminal } from 'lucide-react';
import { statsService } from '../../shared/services/statsService';

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
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {portfolioData.nav[language].projects}
          </h2>
          
          <div className="flex justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group h-full flex flex-col">
                <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                  {project.id === 'souk-saas' ? <Layers size={64} className="text-blue-500" /> : <Terminal size={64} className="text-slate-400" />}
                </div>
                
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    {project.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 mt-auto">
                    <Button 
                      variant="secondary" 
                      className="w-full text-sm"
                      onClick={() => handleSelectProject(project)}
                    >
                      {t.details}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
              >
                <X size={20} className="text-slate-500" />
              </button>

              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.description[language]}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="primary" className="flex-1" onClick={() => {
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
