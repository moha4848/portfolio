import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper } from '../../shared/components/PageWrapper';
import { Card, Button } from '../../shared/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Layout, Layers, Terminal, Eye, Play, Sparkles, Code2, Globe } from 'lucide-react';
import { statsService } from '../../shared/services/statsService';

// Import project images
import soukImg from '../../assets/projects/souk.png';
import calculatorImg from '../../assets/projects/calculator.png';
import todoImg from '../../assets/projects/todo.png';
import contactImg from '../../assets/projects/contact.png';

// Import Demos
import { 
  CalculatriceDemo, 
  TodoDemo, 
  ContactDemo, 
  GalleryDemo, 
  ClockDemo, 
  QuizDemo 
} from '../../components/demos/Demos';

const projectImages = {
  "souk.png": soukImg,
  "calculator.png": calculatorImg,
  "todo.png": todoImg,
  "contact.png": contactImg
};

const projectDemos = {
  "calculator": <CalculatriceDemo />,
  "todo-list": <TodoDemo />,
  "contact-form": <ContactDemo />,
  "image-gallery": <GalleryDemo />,
  "digital-clock": <ClockDemo />,
  "quiz-app": <QuizDemo />
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

  const categories = [
    { id: 'All', label: t.all },
    { id: 'Full-Stack', label: t.fullstack },
    { id: 'Frontend', label: t.frontend }
  ];

  const projects = portfolioData.projects;

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <PageWrapper>
      <div className="space-y-24 py-10">
        {/* Pro Header */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-500/20"
          >
            <Sparkles size={12} /> {t.featuredProjects}
          </motion.div>
          
          <h2 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.8]">
             {t.workShowcase.split(' ')[0]} <br /> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
               {t.workShowcase.split(' ').slice(1).join(' ')}
             </span>
          </h2>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            {t.workDesc}
          </p>
          
          <div className="flex justify-center gap-4 pt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === cat.id 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] scale-105' 
                  : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pro Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                <div 
                  className="relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:scale-[0.98] group-hover:shadow-blue-500/20"
                  onClick={() => handleSelectProject(project)}
                >
                  {/* Background Layer (Real Preview or Image) */}
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800">
                    {project.id === 'souk-saas' ? (
                      <img 
                        src={soukImg} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                      />
                    ) : projectDemos[project.id] ? (
                      <div className="w-full h-full p-8 flex items-center justify-center overflow-hidden">
                        <div className="w-[400px] transform scale-[0.6] origin-center opacity-40 group-hover:opacity-80 group-hover:scale-[0.65] transition-all duration-700 pointer-events-none grayscale group-hover:grayscale-0">
                           {projectDemos[project.id]}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 p-20 flex items-center justify-center">
                        <div className="text-white/20 scale-[4]">
                           <Code2 />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Gradient Overlay (Darker for contrast) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-6">
                    <div className="flex items-center gap-3">
                       <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20">
                         {project.category || 'Development'}
                       </span>
                       {projectDemos[project.id] && (
                         <span className="px-4 py-1.5 bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl shadow-blue-500/40">
                           <Play size={10} className="fill-current" /> Live Demo
                         </span>
                       )}
                    </div>

                    <div className="space-y-2">
                       <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                         {project.title}
                       </h3>
                       <p className="text-slate-300 text-lg font-medium max-w-md line-clamp-2">
                         {project.description[language]}
                       </p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                       <div className="flex -space-x-2">
                          {project.tech.slice(0, 3).map((t, i) => (
                            <div key={i} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-black text-white uppercase">
                               {t[0]}
                            </div>
                          ))}
                       </div>
                       <div className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-2xl">
                          <Eye size={24} />
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Pro Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              className="relative w-full h-full md:h-[90vh] max-w-7xl bg-white dark:bg-slate-900 md:rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-10 right-10 p-5 bg-slate-900 text-white rounded-full hover:scale-110 transition-all z-50 shadow-2xl"
              >
                <X size={24} />
              </button>

              {/* Demo Section */}
              <div className="lg:w-2/3 bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex items-center justify-center p-6 md:p-20">
                <div className="absolute inset-0 opacity-10">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent blur-3xl" />
                </div>
                
                {projectDemos[selectedProject.id] ? (
                  <div className="w-full max-w-2xl mx-auto z-10">
                    <div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl border-8 border-slate-800">
                       <div className="flex gap-2 mb-4 px-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                       </div>
                       {projectDemos[selectedProject.id]}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-8 z-10">
                    <img 
                      src={selectedProject.image?.startsWith('http') ? selectedProject.image : (projectImages[selectedProject.image] || soukImg)} 
                      alt={selectedProject.title}
                      className="w-full max-w-2xl rounded-3xl shadow-2xl rotate-2"
                    />
                    <div className="flex gap-4">
                       <Button variant="primary" onClick={() => window.open(selectedProject.github, '_blank')}>
                          <Github size={20} /> Repository Code
                       </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="lg:w-1/3 p-10 md:p-16 overflow-y-auto space-y-12 custom-scrollbar bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-5 py-2 rounded-2xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/20">
                      Case Study
                    </span>
                  </div>
                  <h3 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                    {selectedProject.title}
                  </h3>
                  <div className="h-2 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Background</h4>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedProject.description[language]}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.tech.map(tech => (
                      <div key={tech} className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-xs font-black text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 text-center uppercase tracking-tighter">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 space-y-4">
                  <Button variant="primary" className="w-full py-6 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/40 group" onClick={() => window.open(selectedProject.github, '_blank')}>
                    <Github size={20} className="group-hover:rotate-12 transition-transform" />
                    Explorer le Code
                  </Button>
                  <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Available on GitHub for review
                  </p>
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
