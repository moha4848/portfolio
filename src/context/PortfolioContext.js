import React, { createContext, useContext, useState } from 'react';
import { Layout, Server, Database, Code, Wrench, Users } from 'lucide-react';

const defaultData = {
  name: 'Yousfi Mohammed',
  role: 'Stagiaire en Développement Digital - ISTA',
  email: 'myousfi610@gmail.com',
  phone: '+212 716 288 974',
  address: 'Hay Samara1, Oujda',
  github: 'https://github.com/moha4848',
  bio1: "Étudiant motivé et passionné par l'informatique, je suis actuellement en formation de Technicien Spécialisé en Développement Informatique à l'ISTA Lazaret, Oujda.",
  bio2: "Mon parcours m'a permis de maîtriser les bases du développement web et de la gestion de projets. Je suis curieux, rigoureux et prêt à relever de nouveaux défis techniques.",
  skills: [
    { nom: 'Frontend', details: 'React.js, Tailwind CSS, HTML5/CSS3', icon: Layout },
    { nom: 'Backend', details: 'Laravel, Node.js, PHP', icon: Server },
    { nom: 'Bases de Données', details: 'MySQL, MongoDB', icon: Database },
    { nom: 'Programmation', details: 'JavaScript, Python', icon: Code },
    { nom: 'Outils', details: 'Git, GitHub, VS Code', icon: Wrench },
    { nom: 'Soft Skills', details: 'Travail en équipe, Agile', icon: Users },
  ],
  experiences: [
    {
      titre: 'Stage de fin de formation – ONEE',
      periode: '2024 (2 mois)',
      description: "Développement d'une application de gestion de laboratoire et de suivi des équipements techniques. Utilisation de PHP/Laravel pour le backend.",
    },
    {
      titre: 'Projet SOUK SaaS',
      periode: '2024 - 2025',
      description: "Création d'une marketplace multi-vendeurs avec gestion complète des stocks et des commandes.",
    },
  ],
  formations: [
    {
      titre: 'Technicien Spécialisé en Développement Digital',
      etablissement: 'ISTA Lazaret, Oujda',
      periode: '2024 - 2026',
      description: 'Formation en cours — Développement web full stack.',
    },
    {
      titre: 'Baccalauréat Sciences Physiques',
      etablissement: 'Lycée Larbi al-Houssaini',
      periode: '2023 - 2024',
      description: 'Obtenu avec mention.',
    },
  ],
  projects: [
    {
      id: 1,
      titre: 'Calculatrice',
      desc: 'Opérations mathématiques de base',
      details: 'Une calculatrice interactive développée en JavaScript pur.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      demo: 'calculatrice',
      repo: 'calculatrice',
    },
    {
      id: 2,
      titre: 'Todo List',
      desc: 'Gestionnaire de tâches quotidiennes',
      details: 'Application de productivité avec stockage local (localStorage).',
      tech: ['React', 'CSS'],
      demo: 'todo',
      repo: 'todo',
    },
    {
      id: 7,
      titre: 'SOUK Platform',
      desc: 'E-commerce SaaS multi-vendeurs',
      details: "Plateforme complète pour vendeurs et acheteurs avec système RBAC, dashboards et gestion des commandes.",
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind'],
      demo: 'souk',
      repo: 'souk',
    },
  ],
};

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_data');
      return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    } catch {
      return defaultData;
    }
  });

  const updateData = (newData) => {
    const merged = { ...data, ...newData };
    setData(merged);
    localStorage.setItem('portfolio_data', JSON.stringify(merged));
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData, defaultData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
