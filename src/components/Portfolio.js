import React, { useState } from 'react';

import {
  Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Instagram,
  Server,  GraduationCap, ChevronRight
} from './ui/Icons';

import CalculatriceDemo from './demos/CalculatriceDemo';
import TodoDemo from './demos/TodoDemo';
import ContactDemo from './demos/ContactDemo';
import GalleryDemo from './demos/GalleryDemo';
import ClockDemo from './demos/ClockDemo';
import QuizDemo from './demos/QuizDemo';



export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedProject, setSelectedProject] = useState(null);

  const competences = [
    { nom: 'Développement Web', icone: Code, niveau: 85, details: 'HTML, CSS, JavaScript, React' },
    { nom: 'Backend', icone: Server, niveau: 70, details: 'PHP, Node.js, API REST' },
    { nom: 'Bases de Données', icone: Database, niveau: 80, details: 'MySQL' },
    { nom: 'Programmation', icone: Code, niveau: 65, details: ' Python' }
  ];

  const projets = [
    {
      id: 1,
      titre: 'Calculatrice Simple',
      description: 'Calculatrice avec opérations de base et interface moderne',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      difficulte: 'Débutant',
      details: 'Une calculatrice interactive qui permet d\'effectuer les opérations mathématiques de base : addition, soustraction, multiplication et division.',
      fonctionnalites: ['Addition, soustraction, multiplication, division', 'Interface responsive', 'Affichage des résultats', 'Bouton clear pour réinitialiser'],
      repoUrl: 'https://github.com/moha4848/calculatrice'
    },
    {
      id: 2,
      titre: 'Liste de Tâches (To-Do List)',
      description: 'Application pour gérer vos tâches quotidiennes',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      difficulte: 'Débutant',
      details: 'Une application simple pour créer, marquer comme terminées et supprimer des tâches. Les données sont sauvegardées dans le navigateur.',
      fonctionnalites: ['Ajouter des tâches', 'Marquer comme terminé', 'Supprimer des tâches', 'Compteur de tâches'],
      repoUrl: 'https://github.com/moha4848/todo'
    },
    {
      id: 3,
      titre: 'Formulaire de Contact',
      description: 'Formulaire avec validation des données',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      difficulte: 'Débutant',
      details: 'Un formulaire de contact professionnel avec validation en temps réel des champs email, téléphone et message.',
      fonctionnalites: ['Validation email', 'Validation téléphone', 'Messages d\'erreur', 'Design moderne'],
      repoUrl: 'https://github.com/moha4848/contact'
    },
    {
      id: 4,
      titre: 'Galerie d\'Images',
      description: 'Galerie responsive avec effet lightbox',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      difficulte: 'Intermédiaire',
      details: 'Une galerie d\'images interactive avec possibilité d\'agrandir les images en plein écran et de naviguer entre elles.',
      fonctionnalites: ['Affichage en grille', 'Mode plein écran', 'Navigation entre images', 'Animations fluides'],
      repoUrl: 'https://github.com/moha4848/gallery'
    },
    {
      id: 5,
      titre: 'Horloge Digitale',
      description: 'Horloge en temps réel avec date',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      difficulte: 'Débutant',
      details: 'Une horloge numérique qui affiche l\'heure et la date en temps réel avec un design élégant.',
      fonctionnalites: ['Heure en temps réel', 'Date du jour', 'Format 24h', 'Design animé'],
    
      repoUrl: 'https://github.com/moha4848/clock'
    },
    {
      id: 6,
      titre: 'Quiz Interactif',
      description: 'Quiz avec score et correction',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      difficulte: 'Intermédiaire',
      details: 'Application de quiz avec questions à choix multiples, système de score et affichage des bonnes réponses.',
      fonctionnalites: ['Questions multiples', 'Calcul du score', 'Feedback immédiat', 'Affichage du résultat final'],
     
      repoUrl: 'https://github.com/moha4848/quiz'
    }
  ];

  const formations = [
    {
      titre: 'Technicien Spécialisé en Développement Digitale',
      etablissement: 'ISTA Lazaret, Oujda ',
      periode: '2024 - 2026',
      description: 'Formation complète en développement web (DEVOWSF)'
    },
    {
      titre: 'Baccalauréat Sciences Physiques',
      etablissement: 'Lycée Larbi al-Houssaini',
      periode: '2023 - 2024',
      description: 'Option Sciences Physiques'
    }
  ];

  const LINKS = {
    instagram: 'https://www.instagram.com/moh_y48?igsh=aTBxbzg0YTlzM2Jz',
    github: 'https://github.com/moha4848',
    linkedin: 'https://www.linkedin.com/in/yousfi-mohammed-189224311',
    email: 'myousfi610@gmail.com'
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactErrors, setContactErrors] = useState({});

  const validateContact = () => {
    const errs = {};
    if (!contactForm.name.trim()) errs.name = 'Le nom est requis';
    if (!contactForm.email.includes('@')) errs.email = 'Email invalide';
    if (contactForm.message.trim().length < 10) errs.message = 'Message trop court (min 10 caractères)';
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendMessage = () => {
    if (!validateContact()) return;

    const subject = encodeURIComponent('Contact depuis Portfolio — ' + contactForm.name);
    const body = encodeURIComponent(
      `Nom: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );

    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;

    setContactForm({ name: '', email: '', message: '' });
    setContactErrors({});
    setTimeout(() => {
      alert('Le client email devrait s\'ouvrir avec votre message. Si rien ne s\'ouvre, vérifiez votre client mail.');
    }, 100);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  // Rendu du composant (identique à votre code original, mais avec les composants importés)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Contact'].map((item) => {
                const sectionId = item === 'Accueil' ? 'accueil-section'
                  : item === 'À Propos' ? 'propos-section'
                    : item === 'Compétences' ? 'competences-section'
                      : item === 'Projets' ? 'projets-section'
                        : item === 'Formation' ? 'formation-section'
                          : 'contact-section';

                return (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase().replace('à ', ''));
                      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`hover:text-blue-400 transition-colors ${
                      activeSection === item.toLowerCase().replace('à ', '') ? 'text-blue-400' : ''
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Contact'].map((item) => {
              const sectionId = item === 'Accueil' ? 'accueil-section'
                : item === 'À Propos' ? 'propos-section'
                  : item === 'Compétences' ? 'competences-section'
                    : item === 'Projets' ? 'projets-section'
                      : item === 'Formation' ? 'formation-section'
                        : 'contact-section';

              return (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase().replace('à ', ''));
                    setMenuOpen(false);
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-slate-700 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil-section" className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Avatar with profile image */}
          <div className="w-48 h-48 rounded-full mx-auto mb-6 p-1 bg-gradient-to-br from-blue-500 to-cyan-500 ">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 shadow-lg">
              <img
                src="/profile.jpeg"
                alt=" Yousfi Mohammed"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Yousfi Mohammed
          </h1>

          {/* Job / Role */}
          <p className="text-xl md:text-2xl text-blue-300 mb-6">
            Stagiaire en Développement Digitale - ISTA
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="/CV_Yousfi_Mohammed.pdf"
              download="CV_Yousfi_Mohammed.pdf"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              Télécharger CV
            </a>
            <button 
              onClick={() => {
                const section = document.getElementById('contact-section');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Me Contacter
            </button>
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section id="propos-section" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              À Propos de Moi
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Étudiant motivé et passionné par l'informatique, je suis actuellement en formation
                de Technicien Spécialisé en Développement Informatique à l'ISTA. Ma formation
                m'a permis d'acquérir des compétences solides en développement web, programmation
                et gestion de bases de données.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Je suis constamment à la recherche de nouveaux défis et j'aime apprendre
                de nouvelles technologies. Mon objectif est de contribuer à des projets innovants
                et de développer mes compétences professionnelles.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="text-blue-400" size={20} />
                <span>Hay Samara1, Oujda – Maroc</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="text-blue-400" size={20} />
                <span>myousfi610@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="text-blue-400" size={20} />
                <span>+212 716 288 974</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <GraduationCap className="text-blue-400" size={20} />
                <span>ISTA Lazaret, Oujda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences-section" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mes Compétences
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {competences.map((comp, index) => {
              const IconComponent = comp.icone;
              return (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-all">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-blue-400 mr-3" size={28} />
                    <div>
                      <h3 className="text-xl font-semibold">{comp.nom}</h3>
                      <p className="text-sm text-slate-400">{comp.details}</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${comp.niveau}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-slate-400 mt-2">{comp.niveau}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets-section" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projets.map((projet) => (
              <div
                key={projet.id}
                className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Code size={64} className="text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{projet.titre}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      projet.difficulte === 'Débutant'
                        ? 'bg-green-600/20 text-green-400'
                        : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {projet.difficulte}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-4">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons: détails (modal), live demo, repo */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => setSelectedProject(projet)}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Détails <ChevronRight size={20} />
                    </button>

                  

                    {projet.repoUrl && (
                      <a
                        href={projet.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2"
                        aria-label={`Voir le code ${projet.titre}`}
                      >
                        <Github size={16} /> Voir le code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal du Projet */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold">{selectedProject.titre}</h2>

              <div className="flex items-center gap-3">
                

                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2"
                  >
                    <Github size={16} /> Voir le code
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Demo du projet */}
              <div className="bg-slate-800 rounded-xl p-8 mb-6">
                {selectedProject.id === 1 && <CalculatriceDemo />}
                {selectedProject.id === 2 && <TodoDemo />}
                {selectedProject.id === 3 && <ContactDemo />}
                {selectedProject.id === 4 && <GalleryDemo />}
                {selectedProject.id === 5 && <ClockDemo />}
                {selectedProject.id === 6 && <QuizDemo />}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Description</h3>
                <p className="text-slate-300 text-lg">{selectedProject.details}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fonctionnalités */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Fonctionnalités</h3>
                <ul className="space-y-2">
                  {selectedProject.fonctionnalites.map((fonc, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <ChevronRight className="text-cyan-400 mt-1 mr-2 flex-shrink-0" size={20} />
                      <span>{fonc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formation */}
      <section id="formation-section" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {formations.map((formation, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{formation.titre}</h3>
                  <span className="text-blue-400 text-sm whitespace-nowrap ml-4">
                    {formation.periode}
                  </span>
                </div>
                <p className="text-cyan-400 mb-2">{formation.etablissement}</p>
                <p className="text-slate-400">{formation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-section" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Informations</h3>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="font-semibold">{LINKS.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Téléphone</p>
                  <p className="font-semibold">+212 716 288 974</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Localisation</p>
                  <p className="font-semibold">Hay Samara1, Oujda – Maroc</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-slate-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Message</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className={`w-full bg-slate-900 border ${contactErrors.name ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                    aria-label="Votre nom"
                  />
                  {contactErrors.name && <p className="text-red-500 text-sm mt-1">{contactErrors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className={`w-full bg-slate-900 border ${contactErrors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                    aria-label="Votre email"
                  />
                  {contactErrors.email && <p className="text-red-500 text-sm mt-1">{contactErrors.email}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="Votre message"
                    rows="5"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className={`w-full bg-slate-900 border ${contactErrors.message ? 'border-red-500' : 'border-slate-700'} rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                    aria-label="Votre message"
                  ></textarea>
                  {contactErrors.message && <p className="text-red-500 text-sm mt-1">{contactErrors.message}</p>}
                </div>

                <button
                  onClick={handleSendMessage}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  aria-label="Envoyer le message"
                >
                  Envoyer le Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 text-center text-slate-400">
        <div className="flex items-center justify-center gap-4 mb-4">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
            <Github />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
            <Instagram />
          </a>
        </div>
        <p>© 2025 Portfolio. Tous droits réservés.</p>
        <p className="text-sm mt-2">Créé par un stagiaire ISTA</p>
      </footer>
    </div>
  );
}