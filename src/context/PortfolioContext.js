import React, { createContext, useContext, useState } from 'react';
import { Layout, Server, Database, Code, Wrench, Users } from 'lucide-react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  
  const translations = {
    fr: {
      nav: ['Accueil', 'À Propos', 'Expérience', 'Compétences', 'Projets'],
      role: 'Stagiaire en Développement Digital - ISTA',
      aboutTitle: 'À Propos de Moi',
      aboutText1: "Étudiant motivé et passionné par l'informatique, je suis actuellement en formation de Technicien Spécialisé en Développement Informatique à l'ISTA Lazaret, Oujda.",
      aboutText2: "Mon parcours m'a permis de maîtriser les bases du développement web et de la gestion de projets. Je suis curieux, rigoureux et prêt à relever de nouveaux défis techniques.",
      email: 'myousfi610@gmail.com',
      skillsTitle: 'Compétences Techniques',
      experienceTitle: 'Expérience Professionnelle',
      projectsTitle: 'Projets Réalisés',
      formationTitle: 'Formation & Diplômes',
      rights: 'Tous droits réservés.'
    }
  };

  const skills = [
    { nom: 'Frontend', details: 'React.js, Tailwind CSS', icon: Layout },
    { nom: 'Backend', details: 'Laravel, Node.js, PHP', icon: Server },
    { nom: 'Bases de Données', details: 'MySQL, MongoDB', icon: Database },
    { nom: 'Programmation', details: 'JavaScript, Python', icon: Code },
    { nom: 'Outils', details: 'Git, GitHub, VS Code', icon: Wrench },
    { nom: 'Soft Skills', details: 'Travail en équipe, Agile', icon: Users }
  ];

  const projects = [
    { id: 1, titre: 'Calculatrice', desc: 'Opérations mathématiques de base', details: 'Une calculatrice interactive développée en JavaScript.', tech: ['JS', 'CSS'], repo: 'calculatrice' },
    { id: 2, titre: 'Todo List', desc: 'Gestionnaire de tâches', details: 'Application de productivité avec stockage local.', tech: ['React'], repo: 'todo' },
    { id: 7, titre: 'SOUK Platform', desc: 'E-commerce SaaS', details: 'Plateforme complète pour vendeurs et acheteurs.', tech: ['Laravel', 'React'], repo: 'souk' },
  ];

  const value = {
    lang,
    setLang,
    t: translations[lang],
    skills,
    projects
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
