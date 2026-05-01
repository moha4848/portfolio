import React, { useState } from 'react';
import { ExternalLink, X, Code, Github } from 'lucide-react';
import { translations, projetsDetails } from '../data/portfolioData';
import { CalculatriceDemo, TodoDemo, ContactDemo, GalleryDemo, ClockDemo, QuizDemo } from '../components/demos/Demos';

export default function Projects({ lang }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang];

  return (
    <div className="py-20 px-4 min-h-[85vh]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t.projectsTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((projet, index) => {
            const details = projetsDetails.find(p => p.id === (index + 1));
            return (
              <div key={index} className="group bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm flex flex-col">
                <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  
                  <div className="flex justify-between items-start z-10">
                    <h3 className="font-bold text-xl text-white">{projet.titre}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border
                      ${details?.difficulte === 'beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                      details?.difficulte === 'intermediate' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                      'bg-purple-500/10 text-purple-400 border-purple-500/20'}`}>
                      {t.difficulty[details?.difficulte]}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm z-10">{projet.description}</p>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between border-t border-slate-700/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {details?.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-300 border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <button 
                      onClick={() => setSelectedProject({ ...projet, detailsInfo: details })}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group/btn text-white"
                    >
                      <span>{t.details}</span>
                      <ExternalLink size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <a href="https://github.com/moha4848" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 bg-slate-800 rounded-lg font-medium hover:bg-slate-700 transition-colors border border-slate-700 flex items-center justify-center text-white">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="text-blue-400" />
                {selectedProject.titre}
              </h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content area */}
            <div className="overflow-y-auto flex-1 p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column: Info */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">{t.description}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">{t.features}</h4>
                    <ul className="space-y-2">
                      {selectedProject.fonctionnalites.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-cyan-500 mt-1">▹</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">{t.techUsed}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailsInfo?.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-200 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Column: Interactive Demo */}
                <div className="lg:border-l lg:border-slate-800 lg:pl-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Démo Interactive
                  </h4>
                  <div className="relative group/demo">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover/demo:opacity-40 transition duration-500"></div>
                    <div className="relative bg-slate-950 rounded-xl overflow-hidden ring-1 ring-slate-800">
                      {/* Render appropriate demo based on selected project */}
                      {selectedProject.detailsInfo?.demo === 'calculatrice' && <CalculatriceDemo />}
                      {selectedProject.detailsInfo?.demo === 'todo' && <TodoDemo />}
                      {selectedProject.detailsInfo?.demo === 'contact' && <ContactDemo />}
                      {selectedProject.detailsInfo?.demo === 'gallery' && <GalleryDemo />}
                      {selectedProject.detailsInfo?.demo === 'clock' && <ClockDemo />}
                      {selectedProject.detailsInfo?.demo === 'quiz' && <QuizDemo />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md flex justify-end gap-4">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 text-slate-300 hover:text-white transition-colors"
              >
                {t.close}
              </button>
              <a 
                href={`https://github.com/moha4848/${selectedProject.detailsInfo?.demo || ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-lg transition-all flex items-center gap-2"
              >
                <Github size={18} />
                {t.viewCode}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
