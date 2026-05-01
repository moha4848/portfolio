import React, { useState, useEffect } from 'react';
import { 
  ChevronDown,
  ChevronRight,
  ChevronLeft, 
  X,
  Menu,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  Trash2,
  Globe,
  Server,
  Database,
  Code,
  Wrench,
  Users,
  Calculator,
  CheckSquare,
  Image,
  Clock,
  HelpCircle,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Lock,
  Search,
  Layout,
  Cpu,
  Languages,
  ShieldCheck,
  ShoppingBag,
  User
} from 'lucide-react';

const IconMapper = ({ iconKey, size = 24, className = "" }) => {
  const icons = {
    globe: Globe,
    server: Server,
    database: Database,
    code: Code,
    wrench: Wrench,
    users: Users,
    calculator: Calculator,
    todo: CheckSquare,
    mail: Mail,
    image: Image,
    clock: Clock,
    quiz: HelpCircle,
    smartphone: Smartphone,
    palette: Palette,
    barchart: BarChart3,
    cloud: Cloud,
    lock: Lock,
    search: Search,
    layout: Layout,
    cpu: Cpu
  };
  const IconComponent = icons[iconKey] || Globe;
  return <IconComponent size={size} className={className} strokeWidth={1.5} />;
};


const repoMap = {
  1: "calculatrice",
  2: "todo",
  3: "contact",
  4: "gallery",
  5: "clock",
  6: "quiz",
  7: "souk",
};

/* ================= CALCULATRICE ================= */
export const CalculatriceDemo = ({ t }) => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const handleNumber = (num) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const handleOperation = (op) => {
    setOperation(op);
    setPreviousValue(display);
    setDisplay('0');
  };

  const calculate = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result;

    switch (operation) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '×': result = prev * current; break;
      case '÷': result = current !== 0 ? prev / current : 'Error'; break;
      default: return;
    }

    setDisplay(result.toString());
    setOperation('');
    setPreviousValue('');
  };

  const clear = () => {
    setDisplay('0');
    setOperation('');
    setPreviousValue('');
  };

  const handleButtonClick = (btn) => {
    if (btn === 'C') clear();
    else if (btn === '=') calculate();
    else if (['+','-','×','÷'].includes(btn)) handleOperation(btn);
    else if (btn === '.' && !display.includes('.')) setDisplay(display + '.');
    else handleNumber(btn);
  };

  return (
    <div className="p-6 glass-card rounded-2xl">
      <div className="text-center text-xl mb-4 text-cyan-400 font-bold">
        {t.calculatorTitle}
      </div>
      <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
        <div className="text-right text-green-400 text-3xl mb-4">{display}</div>
        <div className="grid grid-cols-4 gap-3">
          {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map(btn => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="h-12 glass-card hover:bg-violet-600/20 transition-all"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => handleButtonClick('=')}
            className="col-span-4 h-12 bg-green-600 rounded-lg hover:bg-green-700"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= TODO ================= */
export const TodoDemo = ({ t }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-6 glass-card rounded-2xl">
      <h2 className="text-center text-xl mb-4 text-cyan-400 font-bold">
        {t.todoTitle}
      </h2>
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between bg-violet-900/20 p-3 mb-2 rounded-lg border border-cyan-500/10">
          <span
            onClick={() => toggleTask(task.id)}
            className={task.done ? 'line-through cursor-pointer' : 'cursor-pointer'}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>
            <Trash2 size={18} />
          </button>
        </div>
      ))}
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
        className="w-full p-2 mt-2 bg-slate-900 rounded"
        placeholder={t.newTaskPlaceholder}
      />
    </div>
  );
};

/* ================= CONTACT ================= */
export const ContactDemo = ({ t }) => {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nom) e.nom = t.nameRequired;
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t.invalidEmail;
    if (form.message.length < 10) e.message = t.messageTooShort;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (validate()) setSent(true);
  };

  if (sent) return <div className="p-6 bg-green-800 rounded-xl">{t.messageSent} ✅</div>;

  return (
    <form onSubmit={submit} className="p-6 glass-card rounded-2xl space-y-3">
      <input
        className="w-full p-2 bg-slate-900 rounded"
        placeholder={t.yourName}
        onChange={e => setForm({ ...form, nom: e.target.value })}
      />
      {errors.nom && <p className="text-red-500">{errors.nom}</p>}

      <input
        className="w-full p-2 bg-slate-900 rounded"
        placeholder={t.yourEmail}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <textarea
        className="w-full p-2 bg-slate-900 rounded"
        placeholder={t.yourMessage}
        onChange={e => setForm({ ...form, message: e.target.value })}
      />
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <button className="w-full bg-violet-600 p-2 rounded">{t.sendMessage}</button>
    </form>
  );
};

/* ================= GALLERY ================= */
export const GalleryDemo = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: t.galleryImages.sunrise, emoji: '🌅', color: 'from-purple-500 to-pink-500' },
    { id: 2, title: t.galleryImages.landscape, emoji: '🏞️', color: 'from-cyan-500 to-indigo-500' },
    { id: 3, title: t.galleryImages.ocean, emoji: '🌊', color: 'from-green-500 to-pink-' },
    { id: 4, title: t.galleryImages.city, emoji: '🏙️', color: 'from-orange-500 to-red-500' },
    { id: 5, title: t.galleryImages.mountain, emoji: '🏔️', color: 'from-indigo-500 to-purple-500' },
    { id: 6, title: t.galleryImages.aurora, emoji: '🌄', color: 'from-yellow-500 to-orange-500' },
  ];

  if (selectedImage) {
    return (
      <div className="p-6 glass-card rounded-2xl">
        <button
          onClick={() => setSelectedImage(null)}
          className="flex items-center gap-2 text-slate-300 mb-4 hover:text-white"
        >
          <ChevronLeft size={20} />
          {t.back}
        </button>

        <div
          className={`h-64 rounded-xl bg-gradient-to-br ${selectedImage.color} flex items-center justify-center mb-4`}
        >
          <span className="text-8xl">{selectedImage.emoji}</span>
        </div>

        <h2 className="text-center text-xl font-bold text-white">
          {selectedImage.title}
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 glass-card rounded-2xl">
      <h2 className="text-center text-xl mb-4 text-cyan-400 font-bold">
        {t.galleryTitle}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map(img => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={`h-32 rounded-lg bg-gradient-to-br ${img.color} flex flex-col items-center justify-center hover:scale-105 transition-transform`}
          >
            <span className="text-5xl mb-2">{img.emoji}</span>
            <span className="text-sm font-semibold text-white">{img.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

/* ================= CLOCK ================= */
export const ClockDemo = ({ t }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="p-6 glass-card rounded-2xl text-center">
      <div className="text-4xl text-green-400 font-mono">{time.toLocaleTimeString()}</div>
      <div className="text-slate-300">{time.toLocaleDateString()}</div>
    </div>
  );
};

/* ================= QUIZ ================= */
export const QuizDemo = ({ t }) => {
  const questions = t.quizQuestions;
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const answer = (index) => {
    if (answered) return;
    setAnswered(true);
    if (index === questions[i].c) setScore(s => s + 1);

    setTimeout(() => {
      if (i < questions.length - 1) setI(i + 1);
      else setShowResult(true);
      setAnswered(false);
    }, 1000);
  };

  const reset = () => {
    setI(0); setScore(0); setShowResult(false); setAnswered(false);
  };

  if (showResult) return (
    <div className="p-6 glass-card rounded-2xl text-center">
      <h2 className="text-xl mb-4 text-cyan-400 font-bold">{t.quizFinished}</h2>
      <p className="text-green-400 text-3xl mb-4">{score} / {questions.length}</p>
      <button onClick={reset} className="bg-violet-600 p-2 rounded">{t.restart}</button>
    </div>
  );

  return (
    <div className="p-6 glass-card rounded-2xl">
      <h2 className="text-xl mb-4 text-cyan-400 font-bold">{t.quizTitle}</h2>
      <p className="mb-4 text-white">{questions[i].q}</p>
      {questions[i].a.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => answer(idx)}
          className="block w-full p-2 mb-2 bg-slate-700 rounded text-white"
        >
          {opt}
        </button>
      ))}
      <p className="mt-2 text-green-400">{t.score}: {score}</p>
    </div>
  );
};

/* ================= SOUK OVERVIEW ================= */
export const SoukOverview = ({ t }) => {
  const stats = [
    { label: t.soukStats.merchants, value: '50+', icon: Users, color: 'text-cyan-400' },
    { label: t.soukStats.products, value: '1.2k+', icon: Layout, color: 'text-indigo-400' },
    { label: t.soukStats.security, value: 'RBAC', icon: Lock, color: 'text-green-400' },
    { label: t.soukStats.architecture, value: 'SaaS', icon: Server, color: 'text-purple-400' },
  ];

  const dashboards = [
    { name: t.soukDashboards.admin, desc: t.soukDashboards.adminDesc, icon: ShieldCheck },
    { name: t.soukDashboards.vendor, desc: t.soukDashboards.vendorDesc, icon: ShoppingBag },
    { name: t.soukDashboards.client, desc: t.soukDashboards.clientDesc, icon: User },
  ];

  return (
    <div className="p-6 glass-card rounded-2xl space-y-8 text-left">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
          {t.soukOverviewTitle}
        </h2>
        <p className="text-slate-400">{t.soukOverviewSubtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 text-center group hover:border-cyan-500/50 transition-all">
            <stat.icon className={`mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`} size={24} />
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {dashboards.map((dash, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
              <dash.icon size={20} />
            </div>
            <h4 className="font-bold text-white mb-2">{dash.name}</h4>
            <p className="text-sm text-slate-400">{dash.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-cyan-900/10 border border-cyan-500/20 text-center">
        <p className="text-cyan-300 text-sm italic">{t.soukArchitectureNote}</p>
      </div>
    </div>
  );
};

const translations = {
  fr: {
    nav: ['Accueil', 'À Propos', 'Expérience', 'Compétences', 'Projets', 'Formation', 'Contact'],
    role: 'Stagiaire en Développement Digital - ISTA',
    downloadCV: 'Télécharger CV',
    contactMe: 'Me Contacter',
    aboutTitle: 'À Propos de Moi',
    aboutText1: "Étudiant motivé et passionné par l'informatique, je suis actuellement en formation de Technicien Spécialisé en Développement Informatique à l'ISTA. Ma formation m'a permis d'acquérir des compétences solides en développement web, programmation et gestion de bases de données.",
    aboutText2: "Je suis constamment à la recherche de nouveaux défis et j'aime apprendre de nouvelles technologies. Mon objectif est de contribuer à des projets innovants et de développer mes compétences professionnelles.",
    address: 'Hay Samara1, Oujda',
    school: 'ISTA Lazaret, Oujda',
    phoneNumber: '+212 716 288 974',
    email: 'myousfi610@gmail.com',
    
    skillsTitle: 'Mes Compétences',
    skills: [
      { nom: 'Frontend', details: 'React.js, Tailwind CSS, HTML5/CSS3, JS', icon: 'layout' },
      { nom: 'Backend', details: 'Laravel, Node.js, REST API', icon: 'server' },
      { nom: 'Bases de Données', details: 'MySQL, MongoDB', icon: 'database' },
      { nom: 'Outils', details: 'Git, GitHub, Postman, VS Code', icon: 'wrench' },
      { nom: 'Programmation', details: 'Python', icon: 'code' },
      { nom: 'Soft Skills', details: 'Communication, Travail d\'équipe, Agile', icon: 'users' }
    ],

    experienceTitle: 'Expérience',
    experiences: [
      {
        titre: 'Stage – ONEE (Office National de l\'Électricité et de l\'Eau Potable)',
        periode: '2024',
        description: 'Développement d’une application de gestion de laboratoire et de suivi des équipements techniques. Travail en équipe sur un projet réel en environnement professionnel. Contribution à l’analyse, conception et développement de l’application. Utilisation des bonnes pratiques de développement et collaboration avec l’équipe technique.'
      },
      {
        titre: 'Projet personnel – SOUK SaaS Platform',
        periode: '2024 - 2025',
        description: 'Développement d’une plateforme SaaS multi-tenant de type marketplace. Création d’un système de gestion des rôles (Admin, Seller, Customer). Développement de dashboards pour les vendeurs (ventes, produits, statistiques). Intégration backend Laravel + frontend React.'
      }
    ],

    projectsTitle: 'Mes Projets',
    projects: [
      {
        titre: 'Calculatrice Simple',
        description: 'Calculatrice avec opérations de base et interface moderne',
        details: 'Une calculatrice interactive qui permet d\'effectuer les opérations mathématiques de base : addition, soustraction, multiplication et division.',
        fonctionnalites: ['Addition, soustraction, multiplication, division', 'Interface responsive', 'Affichage des résultats', 'Bouton clear pour réinitialiser'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Liste de Tâches (To-Do List)',
        description: 'Application pour gérer vos tâches quotidiennes',
        details: 'Une application simple pour créer, marquer comme terminées et supprimer des tâches. Les données sont sauvegardées dans le navigateur.',
        fonctionnalites: ['Ajouter des tâches', 'Marquer comme terminé', 'Supprimer des tâches', 'Compteur de tâches'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
      },
      {
        titre: 'Formulaire de Contact',
        description: 'Formulaire avec validation des données',
        details: 'Un formulaire de contact professionnel avec validation en temps réel des champs email, téléphone et message.',
        fonctionnalites: ['Validation email', 'Validation téléphone', 'Messages d\'erreur', 'Design moderne'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Regex']
      },
      {
        titre: 'Galerie d\'Images',
        description: 'Galerie responsive avec effet lightbox',
        details: 'Une galerie d\'images interactive avec possibilité d\'agrandir les images en plein écran et de naviguer entre elles.',
        fonctionnalites: ['Affichage en grille', 'Mode plein écran', 'Navigation entre images', 'Animations fluides'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Horloge Digitale',
        description: 'Horloge en temps réel avec date',
        details: 'Une horloge numérique qui affiche l\'heure et la date en temps réel avec un design élégant.',
        fonctionnalites: ['Heure en temps réel', 'Date du jour', 'Format 24h', 'Design animé'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Quiz Interactif',
        description: 'Quiz avec score et correction',
        details: 'Application de quiz avec questions à choix multiples, système de score et affichage des bonnes réponses.',
        fonctionnalites: ['Questions multiples', 'Calcul du score', 'Feedback immédiat', 'Affichage du résultat final'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'SOUK - Marketplace SaaS',
        description: 'Plateforme SaaS multi-tenant de type marketplace',
        details: 'Développement d’une plateforme SaaS multi-tenant de type marketplace. Création d’un système de gestion des rôles (Admin, Seller, Customer). Développement de dashboards pour les vendeurs (ventes, produits, statistiques). Intégration backend Laravel + frontend React.',
        fonctionnalites: ['Multi-tenant (Boutiques séparées)', 'Tableau de bord Vendeur/Acheteur/Admin', 'Gestion des commandes et produits', 'Interface bilingue (Arabe/Français)', 'Sécurité RBAC'],
        technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'REST API']
      }
    ],
    
    difficulty: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé' },
    details: 'Détails',
    viewCode: 'Voir le code',
    description: 'Description',
    techUsed: 'Technologies utilisées',
    features: 'Fonctionnalités',
    demoNotAvailable: 'Démonstration en direct non disponible pour ce projet complexe. Veuillez consulter le code sur GitHub.',
    
    soukOverviewTitle: 'Aperçu du Système SOUK',
    soukOverviewSubtitle: 'Architecture SaaS Multi-vendeurs de pointe',
    soukStats: {
      merchants: 'Vendeurs',
      products: 'Produits',
      security: 'Sécurité',
      architecture: 'Structure'
    },
    soukDashboards: {
      admin: 'Gouvernance Admin',
      adminDesc: 'Contrôle total du système, validation des vendeurs et gestion globale.',
      vendor: 'Espace Vendeur',
      vendorDesc: 'Gestion des boutiques, produits, commandes et statistiques de vente.',
      client: 'Expérience Acheteur',
      clientDesc: 'Suivi des commandes, gestion du profil et points de fidélité.'
    },
    soukArchitectureNote: 'Propulsé par Laravel (Clean Architecture) et React (Modular Design)',
    
    formationTitle: 'Formation',
    formations: [
      {
        titre: 'Technicien Spécialisé en Développement Digital',
        etablissement: 'ISTA Lazaret, Oujda',
        periode: '2024 - 2026',
        description: 'Formation complète en développement web (DEVOWSF)'
      },
      {
        titre: 'Baccalauréat Sciences Physiques',
        etablissement: 'Lycée Larbi al-Houssaini',
        periode: '2023 - 2024',
        description: 'Option Sciences Physiques'
      }
    ],
    
    interestsTitle: 'Mes Intérêts',
    interests: [
      { icon: 'code', title: 'Développement Web', desc: 'Frontend & Backend' },
      { icon: 'smartphone', title: 'Applications Mobiles', desc: 'React Native' },
      { icon: 'palette', title: 'UI/UX Design', desc: 'Figma' },
      { icon: 'barchart', title: 'Data Science', desc: 'Python' },
      { icon: 'cloud', title: 'Cloud Computing', desc: 'AWS, Docker' },
      { icon: 'lock', title: 'Cybersécurité', desc: 'Sécurité des applications' }
    ],

    
    contactTitle: 'Contactez-moi',
    contactInfo: 'Informations',
    contactMessage: 'Message',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    locationLabel: 'Localisation',
    yourName: 'Votre nom',
    yourEmail: 'Votre email',
    yourMessage: 'Votre message',
    sendMessage: 'Envoyer le Message',
    nameRequired: 'Le nom est requis',
    invalidEmail: 'Email invalide',
    messageTooShort: 'Message trop court (min 10 caractères)',
    messageSent: 'Message envoyé',
    
    footer: '© 2025 Portfolio. Tous droits réservés.',
    footerCredit: 'Créé par un stagiaire ISTA',
    close: 'Fermer',
    viewLive: 'Voir en direct',
    proficiency: 'Maîtrise',
    myInterests: 'Mes Intérêts',
    followMe: 'Suivez-moi',
    
    // Démos
    calculatorTitle: 'Calculatrice',
    todoTitle: 'Liste de Tâches',
    newTaskPlaceholder: 'Nouvelle tâche',
    galleryTitle: 'Galerie',
    back: 'Retour',
    galleryImages: {
      sunrise: 'Lever de soleil',
      landscape: 'Paysage',
      ocean: 'Océan',
      city: 'Ville',
      mountain: 'Montagne',
      aurora: 'Aurore'
    },
    quizTitle: 'Quiz',
    quizFinished: 'Quiz Terminé!',
    restart: 'Recommencer',
    score: 'Score',
    quizQuestions: [
      { 
        q: 'Que signifie HTML ?', 
        a: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'], 
        c: 0 
      },
      { 
        q: 'Quel langage est utilisé pour le style ?', 
        a: ['JavaScript', 'CSS', 'Python'], 
        c: 1 
      },
      { 
        q: 'Que signifie CSS ?', 
        a: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System'], 
        c: 1 
      }
    ],
    
    country: 'Maroc'
  },

  en: {
    nav: ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'],
    role: 'Digital Development Intern - ISTA',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    aboutTitle: 'About Me',
    aboutText1: "I am a motivated and passionate IT student, currently training as a Specialized Technician in Computer Development at ISTA. My training has allowed me to acquire solid skills in web development, programming, and database management.",
    aboutText2: "I am constantly looking for new challenges and enjoy learning new technologies. My goal is to contribute to innovative projects and develop my professional skills.",
    address: 'Hay Samara1, Oujda',
    school: 'ISTA Lazaret, Oujda',
    phoneNumber: '+212 716 288 974',
    email: 'myousfi610@gmail.com',
    
    skillsTitle: 'My Skills',
    skills: [
      { nom: 'Frontend', details: 'React.js, Tailwind CSS, HTML5/CSS3, JS', icon: 'layout' },
      { nom: 'Backend', details: 'Laravel, Node.js, REST API', icon: 'server' },
      { nom: 'Databases', details: 'MySQL, MongoDB', icon: 'database' },
      { nom: 'Tools', details: 'Git, GitHub, Postman, VS Code', icon: 'wrench' },
      { nom: 'Programming', details: 'Python', icon: 'code' },
      { nom: 'Soft Skills', details: 'Communication, Teamwork, Agile', icon: 'users' }
    ],

    experienceTitle: 'Experience',
    experiences: [
      {
        titre: 'Internship – ONEE (National Office of Electricity and Potable Water)',
        periode: '2024',
        description: 'Development of a laboratory management and technical equipment tracking application. Teamwork in a real professional environment. Contribution to the analysis, design, and development of the application. Use of best development practices and collaboration with the technical team.'
      },
      {
        titre: 'Personal Project – SOUK SaaS Platform',
        periode: '2024 - 2025',
        description: 'Development of a multi-tenant SaaS marketplace platform. Creation of a role management system (Admin, Seller, Customer). Development of dashboards for sellers (sales, products, statistics). Laravel backend + React frontend integration.'
      }
    ],

    projectsTitle: 'My Projects',
    projects: [
      {
        titre: 'Simple Calculator',
        description: 'Calculator with basic operations and modern interface',
        details: 'An interactive calculator that performs basic mathematical operations: addition, subtraction, multiplication, and division.',
        fonctionnalites: ['Addition, subtraction, multiplication, division', 'Responsive interface', 'Result display', 'Clear button to reset'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'To-Do List',
        description: 'Application to manage your daily tasks',
        details: 'A simple application to create, mark as completed, and delete tasks. Data is saved in the browser.',
        fonctionnalites: ['Add tasks', 'Mark as completed', 'Delete tasks', 'Task counter'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
      },
      {
        titre: 'Contact Form',
        description: 'Form with data validation',
        details: 'A professional contact form with real-time validation of email, phone, and message fields.',
        fonctionnalites: ['Email validation', 'Phone validation', 'Error messages', 'Modern design'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Regex']
      },
      {
        titre: 'Image Gallery',
        description: 'Responsive gallery with lightbox effect',
        details: 'An interactive image gallery with the ability to enlarge images to full screen and navigate between them.',
        fonctionnalites: ['Grid display', 'Full screen mode', 'Image navigation', 'Smooth animations'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Digital Clock',
        description: 'Real-time clock with date',
        details: 'A digital clock that displays time and date in real time with an elegant design.',
        fonctionnalites: ['Real-time clock', "Today's date", '24-hour format', 'Animated design'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Interactive Quiz',
        description: 'Quiz with score and correction',
        details: 'Quiz application with multiple choice questions, scoring system, and correct answers display.',
        fonctionnalites: ['Multiple questions', 'Score calculation', 'Immediate feedback', 'Final result display'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'SOUK - SaaS Marketplace',
        description: 'Multi-tenant SaaS marketplace platform',
        details: 'Development of a multi-tenant SaaS marketplace platform. Creation of a role management system (Admin, Seller, Customer). Development of dashboards for sellers (sales, products, statistics). Laravel backend + React frontend integration.',
        fonctionnalites: ['Multi-tenant (Separate stores)', 'Vendor/Buyer/Admin dashboards', 'Order and product management', 'Bilingual interface (Arabic/French)', 'RBAC security'],
        technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'REST API']
      }
    ],
    
    difficulty: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    details: 'Details',
    viewCode: 'View Code',
    description: 'Description',
    techUsed: 'Technologies Used',
    features: 'Features',
    demoNotAvailable: 'Live demo not available for this complex project. Please check the code on GitHub.',
    
    soukOverviewTitle: 'SOUK System Overview',
    soukOverviewSubtitle: 'Cutting-edge Multi-vendor SaaS Architecture',
    soukStats: {
      merchants: 'Merchants',
      products: 'Products',
      security: 'Security',
      architecture: 'Structure'
    },
    soukDashboards: {
      admin: 'Admin Governance',
      adminDesc: 'Full system control, vendor validation, and global management.',
      vendor: 'Vendor Space',
      vendorDesc: 'Store management, products, orders, and sales statistics.',
      client: 'Buyer Experience',
      clientDesc: 'Order tracking, profile management, and loyalty points.'
    },
    soukArchitectureNote: 'Powered by Laravel (Clean Architecture) and React (Modular Design)',
    
    formationTitle: 'Education',
    formations: [
      {
        titre: 'Specialized Technician in Digital Development',
        etablissement: 'ISTA Lazaret, Oujda',
        periode: '2024 - 2026',
        description: 'Complete training in web development (DEVOWSF)'
      },
      {
        titre: 'Baccalaureate in Physical Sciences',
        etablissement: 'Larbi al-Houssaini High School',
        periode: '2023 - 2024',
        description: 'Physical Sciences option'
      }
    ],
    
    interestsTitle: 'My Interests',
    interests: [
      { icon: 'code', title: 'Web Development', desc: 'Frontend & Backend' },
      { icon: 'smartphone', title: 'Mobile Applications', desc: 'React Native' },
      { icon: 'palette', title: 'UI/UX Design', desc: 'Figma' },
      { icon: 'barchart', title: 'Data Science', desc: 'Python' },
      { icon: 'cloud', title: 'Cloud Computing', desc: 'AWS, Docker' },
      { icon: 'lock', title: 'Cybersecurity', desc: 'Application Security' }
    ],

    
    contactTitle: 'Contact Me',
    contactInfo: 'Information',
    contactMessage: 'Message',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    yourName: 'Your name',
    yourEmail: 'Your email',
    yourMessage: 'Your message',
    sendMessage: 'Send Message',
    nameRequired: 'Name is required',
    invalidEmail: 'Invalid email',
    messageTooShort: 'Message too short (min 10 characters)',
    messageSent: 'Message sent',
    
    footer: '© 2025 Portfolio. All rights reserved.',
    footerCredit: 'Created by an ISTA intern',
    close: 'Close',
    viewLive: 'View Live',
    proficiency: 'Proficiency',
    myInterests: 'My Interests',
    followMe: 'Follow Me',
    
    // Démos
    calculatorTitle: 'Calculator',
    todoTitle: 'Todo List',
    newTaskPlaceholder: 'New task',
    galleryTitle: 'Gallery',
    back: 'Back',
    galleryImages: {
      sunrise: 'Sunrise',
      landscape: 'Landscape',
      ocean: 'Ocean',
      city: 'City',
      mountain: 'Mountain',
      aurora: 'Aurora'
    },
    quizTitle: 'Quiz',
    quizFinished: 'Quiz Finished!',
    restart: 'Restart',
    score: 'Score',
    quizQuestions: [
      { 
        q: 'What does HTML stand for?', 
        a: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'], 
        c: 0 
      },
      { 
        q: 'Which language is used for styling?', 
        a: ['JavaScript', 'CSS', 'Python'], 
        c: 1 
      },
      { 
        q: 'What does CSS stand for?', 
        a: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System'], 
        c: 1 
      }
    ],
    
    country: 'Morocco'
  },

  ar: {
    nav: ['الرئيسية', 'من أنا', 'الخبرة', 'المهارات', 'المشاريع', 'التعليم', 'اتصل بي'],
    role: 'متدرب في التطوير الرقمي - ISTA',
    downloadCV: 'تحميل السيرة الذاتية',
    contactMe: 'اتصل بي',
    aboutTitle: 'من أنا',
    aboutText1: "أنا طالب في مجال تقنية المعلومات متحمس وشغوف، أتدرب حاليًا كفني متخصص في تطوير الحاسوب في معهد ISTA. تدريبي مكنني من اكتساب مهارات قوية في تطوير الويب، البرمجة، وإدارة قواعد البيانات.",
    aboutText2: "أبحث دائمًا عن تحديات جديدة وأستمتع بتعلم التقنيات الحديثة. هدفي هو المساهمة في مشاريع مبتكرة وتطوير مهاراتي المهنية.",
    address: 'حي الصمارة 1، وجدة',
    school: 'معهد ISTA لازاريت، وجدة',
    phoneNumber: '+212 716 288 974',
    email: 'myousfi610@gmail.com',
    
    skillsTitle: 'مهاراتي',
    skills: [
      { nom: 'الواجهة الأمامية', details: 'React.js, Tailwind CSS, HTML5/CSS3, JS', icon: 'layout' },
      { nom: 'الخلفية', details: 'Laravel, Node.js, REST API', icon: 'server' },
      { nom: 'قواعد البيانات', details: 'MySQL, MongoDB', icon: 'database' },
      { nom: 'الأدوات', details: 'Git, GitHub, Postman, VS Code', icon: 'wrench' },
      { nom: 'البرمجة', details: 'Python', icon: 'code' },
      { nom: 'المهارات الناعمة', details: 'التواصل، العمل الجماعي، Agile', icon: 'users' }
    ],

    experienceTitle: 'الخبرة',
    experiences: [
      {
        titre: 'تدريب – ONEE (المكتب الوطني للكهرباء والماء الصالح للشرب)',
        periode: '2024',
        description: 'تطوير تطبيق لإدارة المختبرات وتتبع المعدات التقنية. العمل الجماعي في بيئة مهنية حقيقية. المساهمة في تحليل وتصميم وتطوير التطبيق. استخدام أفضل ممارسات التطوير والتعاون مع الفريق التقني.'
      },
      {
        titre: 'مشروع شخصي – منصة SOUK SaaS',
        periode: '2024 - 2025',
        description: 'تطوير منصة SaaS متعددة المستأجرين من نوع marketplace. إنشاء نظام لإدارة الأدوار (مدير، بائع، عميل). تطوير لوحات تحكم للبائعين (المبيعات، المنتجات، الإحصائيات). تكامل Laravel في الخلفية مع React في الواجهة الأمامية.'
      }
    ],

    projectsTitle: 'مشاريعي',
    projects: [
      {
        titre: 'آلة حاسبة بسيطة',
        description: 'آلة حاسبة مع عمليات أساسية وواجهة عصرية',
        details: 'آلة حاسبة تفاعلية تؤدي العمليات الحسابية الأساسية: الجمع، الطرح، الضرب، والقسمة.',
        fonctionnalites: ['الجمع، الطرح، الضرب، القسمة', 'واجهة متجاوبة', 'عرض النتائج', 'زر مسح لإعادة التعيين'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'قائمة المهام',
        description: 'تطبيق لإدارة مهامك اليومية',
        details: 'تطبيق بسيط لإنشاء المهام، وضع علامة كمكتملة، وحذف المهام. يتم حفظ البيانات في المتصفح.',
        fonctionnalites: ['إضافة المهام', 'وضع علامة كمكتملة', 'حذف المهام', 'عداد المهام'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
      },
      {
        titre: 'نموذج الاتصال',
        description: 'نموذج مع التحقق من البيانات',
        details: 'نموذج اتصال احترافي مع التحقق في الوقت الفعلي لحقول البريد الإلكتروني، الهاتف، والرسالة.',
        fonctionnalites: ['التحقق من البريد الإلكتروني', 'التحقق من الهاتف', 'رسائل الخطأ', 'تصميم عصري'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Regex']
      },
      {
        titre: 'معرض الصور',
        description: 'معرض متجاوب مع تأثير lightbox',
        details: 'معرض صور تفاعلي مع إمكانية تكبير الصور إلى الشاشة الكاملة والتنقل بينها.',
        fonctionnalites: ['عرض شبكي', 'وضع الشاشة الكاملة', 'التنقل بين الصور', 'حركات سلسة'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'ساعة رقمية',
        description: 'ساعة حقيقية مع التاريخ',
        details: 'ساعة رقمية تعرض الوقت والتاريخ في الوقت الفعلي بتصميم أنيق.',
        fonctionnalites: ['ساعة حقيقية', 'تاريخ اليوم', 'تنسيق 24 ساعة', 'تصميم متحرك'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'اختبار تفاعلي',
        description: 'اختبار مع النقاط والتصحيح',
        details: 'تطبيق اختبار مع أسئلة متعددة الخيارات، نظام النقاط، وعرض الإجابات الصحيحة.',
        fonctionnalites: ['أسئلة متعددة', 'حساب النقاط', 'تغذية راجعة فورية', 'عرض النتيجة النهائية'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'SOUK - منصة سحابية للتجارة الإلكترونية',
        description: 'منصة SaaS متعددة المستأجرين من نوع marketplace',
        details: 'تطوير منصة SaaS متعددة المستأجرين من نوع marketplace. إنشاء نظام لإدارة الأدوار (مدير، بائع، عميل). تطوير لوحات تحكم للبائعين (المبيعات، المنتجات، الإحصائيات). تكامل Laravel في الخلفية مع React في الواجهة الأمامية.',
        fonctionnalites: ['تعدد المستأجرين (متاجر منفصلة)', 'لوحات تحكم للبائع/المشتري/المدير', 'إدارة الطلبات والمنتجات', 'واجهة ثنائية اللغة (عربي/فرنسي)', 'أمان RBAC'],
        technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'REST API']
      }
    ],
    
    difficulty: { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم' },
    details: 'تفاصيل',
    viewCode: 'عرض الكود',
    description: 'الوصف',
    techUsed: 'التقنيات المستخدمة',
    features: 'المميزات',
    demoNotAvailable: 'العرض المباشر غير متاح لهذا المشروع المعقد. يرجى الاطلاع على الكود على GitHub.',
    
    soukOverviewTitle: 'نظرة عامة على نظام SOUK',
    soukOverviewSubtitle: 'هندسة سحابية متطورة لتعدد البائعين',
    soukStats: {
      merchants: 'البائعين',
      products: 'المنتجات',
      security: 'الأمان',
      architecture: 'البنية'
    },
    soukDashboards: {
      admin: 'إدارة النظام',
      adminDesc: 'تحكم كامل في النظام، تفعيل البائعين والإدارة الشاملة.',
      vendor: 'مساحة البائع',
      vendorDesc: 'إدارة المتجر، المنتجات، الطلبات وإحصائيات المبيعات.',
      client: 'تجربة المشتري',
      clientDesc: 'تتبع الطلبات، إدارة الملف الشخصي ونقاط الولاء.'
    },
    soukArchitectureNote: 'يعمل بواسطة Laravel (الهندسة النظيفة) و React (التصميم المعياري)',
    
    formationTitle: 'التعليم',
    formations: [
      {
        titre: 'فني متخصص في التطوير الرقمي',
        etablissement: 'معهد ISTA لازاريت، وجدة',
        periode: '2024 - 2026',
        description: 'تدريب كامل في تطوير الويب (DEVOWSF)'
      },
      {
        titre: 'بكالوريا علوم فيزيائية',
        etablissement: 'ثانوية العربي الحسيني',
        periode: '2023 - 2024',
        description: 'تخصص العلوم الفيزيائية'
      }
    ],
    
    interestsTitle: 'اهتماماتي',
    interests: [
      { icon: 'code', title: 'تطوير الويب', desc: 'الواجهة الأمامية والخلفية' },
      { icon: 'smartphone', title: 'تطبيقات الهاتف', desc: 'React Native' },
      { icon: 'palette', title: 'تصميم واجهة المستخدم/تجربة المستخدم', desc: 'Figma' },
      { icon: 'barchart', title: 'علم البيانات', desc: 'Python' },
      { icon: 'cloud', title: 'الحوسبة السحابية', desc: 'AWS, Docker' },
      { icon: 'lock', title: 'الأمن السيبراني', desc: 'أمن التطبيقات' }
    ],

    
    contactTitle: 'اتصل بي',
    contactInfo: 'المعلومات',
    contactMessage: 'الرسالة',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
    locationLabel: 'الموقع',
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    yourMessage: 'رسالتك',
    sendMessage: 'إرسال الرسالة',
    nameRequired: 'الاسم مطلوب',
    invalidEmail: 'بريد إلكتروني غير صالح',
    messageTooShort: 'الرسالة قصيرة جدًا (10 أحرف على الأقل)',
    messageSent: 'تم إرسال الرسالة',
    
    footer: '© 2025 ملف التعريف. جميع الحقوق محفوظة.',
    footerCredit: 'تم الإنشاء بواسطة متدرب ISTA',
    close: 'إغلاق',
    viewLive: 'عرض مباشر',
    proficiency: 'الإتقان',
    myInterests: 'اهتماماتي',
    followMe: 'تابعني',
    
    // Démos
    calculatorTitle: 'آلة حاسبة',
    todoTitle: 'قائمة المهام',
    newTaskPlaceholder: 'مهمة جديدة',
    galleryTitle: 'معرض الصور',
    back: 'رجوع',
    galleryImages: {
      sunrise: 'شروق الشمس',
      landscape: 'منظر طبيعي',
      ocean: 'محيط',
      city: 'مدينة',
      mountain: 'جبل',
      aurora: 'شفق'
    },
    quizTitle: 'اختبار',
    quizFinished: 'تم الانتهاء من الاختبار!',
    restart: 'إعادة البدء',
    score: 'النقاط',
    quizQuestions: [
      { 
        q: 'ماذا تعني HTML؟', 
        a: ['لغة ترميز النص التشعبي', 'لغة عالية التقنية الحديثة', 'أداة ترميز النص المنزلي'], 
        c: 0 
      },
      { 
        q: 'أي لغة تستخدم للتنسيق؟', 
        a: ['جافا سكريبت', 'CSS', 'بايثون'], 
        c: 1 
      },
      { 
        q: 'ماذا تعني CSS؟', 
        a: ['أوراق أنماط الكمبيوتر', 'أوراق الأنماط المتتالية', 'نظام أنماط إبداعي'], 
        c: 1 
      }
    ],
    
    country: 'المغرب'
  },

  es: {
    nav: ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Formación', 'Contacto'],
    role: 'Pasante en Desarrollo Digital - ISTA',
    downloadCV: 'Descargar CV',
    contactMe: 'Contáctame',
    aboutTitle: 'Sobre Mí',
    aboutText1: "Soy un estudiante de TI motivado y apasionado, actualmente en formación como Técnico Especializado en Desarrollo Informático en ISTA. Mi formación me ha permitido adquirir sólidas habilidades en desarrollo web, programación y gestión de bases de datos.",
    aboutText2: "Constantemente busco nuevos desafíos y disfruto aprendiendo nuevas tecnologías. Mi objetivo es contribuir a proyectos innovadores y desarrollar mis habilidades profesionales.",
    address: 'Hay Samara1, Oujda',
    school: 'ISTA Lazaret, Oujda',
    phoneNumber: '+212 716 288 974',
    email: 'myousfi610@gmail.com',
    
    skillsTitle: 'Mis Habilidades',
    skills: [
      { nom: 'Desarrollo Web', details: 'HTML, CSS, JavaScript, React', icon: '🌐' },
      { nom: 'Backend', details: 'PHP, Node.js, API REST', icon: '⚙️' },
      { nom: 'Bases de Datos', details: 'MySQL', icon: '🗃️' },
      { nom: 'Programación', details: 'Python', icon: '💻' },
      { nom: 'Herramientas', details: 'Git, VS Code, Figma', icon: '🛠️' },
      { nom: 'Habilidades Blandas', details: 'Comunicación, Trabajo en equipo', icon: '🤝' }
    ],
    
    projectsTitle: 'Mis Proyectos',
    projects: [
      {
        titre: 'Calculadora Simple',
        description: 'Calculadora con operaciones básicas e interfaz moderna',
        details: 'Una calculadora interactiva que realiza operaciones matemáticas básicas: suma, resta, multiplicación y división.',
        fonctionnalites: ['Suma, resta, multiplicación, división', 'Interfaz responsive', 'Visualización de resultados', 'Botón clear para reiniciar'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Lista de Tareas',
        description: 'Aplicación para gestionar tus tareas diarias',
        details: 'Una aplicación simple para crear, marcar como completadas y eliminar tareas. Los datos se guardan en el navegador.',
        fonctionnalites: ['Agregar tareas', 'Marcar como completado', 'Eliminar tareas', 'Contador de tareas'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
      },
      {
        titre: 'Formulario de Contacto',
        description: 'Formulario con validación de datos',
        details: 'Un formulario de contacto profesional con validación en tiempo real de campos de correo electrónico, teléfono y mensaje.',
        fonctionnalites: ['Validación de correo', 'Validación de teléfono', 'Mensajes de error', 'Diseño moderno'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Regex']
      },
      {
        titre: 'Galería de Imágenes',
        description: 'Galería responsive con efecto lightbox',
        details: 'Una galería de imágenes interactiva con posibilidad de ampliar imágenes a pantalla completa y navegar entre ellas.',
        fonctionnalites: ['Visualización en cuadrícula', 'Modo pantalla completa', 'Navegación entre imágenes', 'Animaciones fluidas'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Reloj Digital',
        description: 'Reloj en tiempo réel con fecha',
        details: 'Un reloj digital que muestra la hora y la fecha en tiempo real con un diseño elegante.',
        fonctionnalites: ['Reloj en tiempo real', 'Fecha actual', 'Formato 24 horas', 'Diseño animado'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'Cuestionario Interactivo',
        description: 'Cuestionario con puntuación y corrección',
        details: 'Aplicación de cuestionario con preguntas de opción múltiple, sistema de puntuación y visualización de respuestas correctas.',
        fonctionnalites: ['Preguntas múltiples', 'Cálculo de puntuación', 'Retroalimentación inmediata', 'Visualización del resultado final'],
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        titre: 'SOUK - Marketplace SaaS',
        description: 'Plataforma de comercio electrónico multivendedor (SaaS)',
        details: 'Una aplicación de mercado multi-inquilino que permite a los vendedores crear sus propias tiendas. Arquitectura limpia con Laravel (Backend) y React (Frontend).',
        fonctionnalites: ['Multi-inquilino (Tiendas separadas)', 'Tableros de Vendedor/Comprador/Admin', 'Gestión de pedidos y productos', 'Interfaz bilingüe (Árabe/Francés)', 'Seguridad RBAC'],
        technologies: ['Laravel', 'React', 'Tailwind CSS', 'MySQL', 'REST API']
      }
    ],
    
    difficulty: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
    details: 'Detalles',
    viewCode: 'Ver Código',
    description: 'Descripción',
    techUsed: 'Tecnologías Utilizadas',
    features: 'Características',
    demoNotAvailable: 'Demostración en vivo no disponible para este proyecto complejo. Por favor, consulte el código en GitHub.',
    
    soukOverviewTitle: 'Vista General de SOUK',
    soukOverviewSubtitle: 'Arquitectura SaaS Multi-vendedor de Vanguardia',
    soukStats: {
      merchants: 'Vendedores',
      products: 'Productos',
      security: 'Seguridad',
      architecture: 'Estructura'
    },
    soukDashboards: {
      admin: 'Gobernanza Admin',
      adminDesc: 'Control total del sistema, validación de vendedores y gestión global.',
      vendor: 'Espacio Vendedor',
      vendorDesc: 'Gestión de tiendas, productos, pedidos y estadísticas de ventas.',
      client: 'Experiencia Comprador',
      clientDesc: 'Seguimiento de pedidos, gestión de perfil y puntos de fidelidad.'
    },
    soukArchitectureNote: 'Impulsado por Laravel (Arquitectura Limpia) y React (Diseño Modular)',
    
    formationTitle: 'Formación',
    formations: [
      {
        titre: 'Técnico Especializado en Desarrollo Digital',
        etablissement: 'ISTA Lazaret, Oujda',
        periodo: '2024 - 2026',
        description: 'Formación completa en desarrollo web (DEVOWSF)'
      },
      {
        titre: 'Bachillerato en Ciencias Físicas',
        etablissement: 'Instituto Larbi al-Houssaini',
        periodo: '2023 - 2024',
        description: 'Opción Ciencias Físicas'
      }
    ],
    
    interestsTitle: 'Mis Intereses',
    interests: [
      { icon: 'code', title: 'Desarrollo Web', desc: 'Frontend y Backend' },
      { icon: 'smartphone', title: 'Aplicaciones Móviles', desc: 'React Native' },
      { icon: 'palette', title: 'Diseño UI/UX', desc: 'Figma' },
      { icon: 'barchart', title: 'Ciencia de Datos', desc: 'Python' },
      { icon: 'cloud', title: 'Computación en la Nube', desc: 'AWS, Docker' },
      { icon: 'lock', title: 'Ciberseguridad', desc: 'Seguridad de aplicaciones' }
    ],

    
    contactTitle: 'Contáctame',
    contactInfo: 'Información',
    contactMessage: 'Mensaje',
    emailLabel: 'Correo Electrónico',
    phoneLabel: 'Teléfono',
    locationLabel: 'Ubicación',
    yourName: 'Tu nombre',
    yourEmail: 'Tu correo electrónico',
    yourMessage: 'Tu mensaje',
    sendMessage: 'Enviar Mensaje',
    nameRequired: 'El nombre es requerido',
    invalidEmail: 'Correo electrónico inválido',
    messageTooShort: 'Mensaje demasiado corto (mínimo 10 caracteres)',
    messageSent: 'Mensaje enviado',
    
    footer: '© 2025 Portafolio. Todos los derechos reservados.',
    footerCredit: 'Creado por un pasante de ISTA',
    close: 'Cerrar',
    viewLive: 'Ver en Vivo',
    proficiency: 'Competencia',
    myInterests: 'Mis Intereses',
    followMe: 'Sígueme',
    
    // Démos
    calculatorTitle: 'Calculadora',
    todoTitle: 'Lista de Tareas',
    newTaskPlaceholder: 'Nueva tarea',
    galleryTitle: 'Galería',
    back: 'Volver',
    galleryImages: {
      sunrise: 'Amanecer',
      landscape: 'Paisaje',
      ocean: 'Océano',
      city: 'Ciudad',
      mountain: 'Montaña',
      aurora: 'Aurora'
    },
    quizTitle: 'Cuestionario',
    quizFinished: '¡Cuestionario Terminado!',
    restart: 'Reiniciar',
    score: 'Puntuación',
    quizQuestions: [
      { 
        q: '¿Qué significa HTML?', 
        a: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'], 
        c: 0 
      },
      { 
        q: '¿Qué lenguaje se usa para el estilo?', 
        a: ['JavaScript', 'CSS', 'Python'], 
        c: 1 
      },
      { 
        q: '¿Qué significa CSS?', 
        a: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System'], 
        c: 1 
      }
    ],
    

    country: 'Marruecos'
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const [menuOpen, setMenuOpen] = useState(false);
const [, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dynamicProfile, setDynamicProfile] = useState({});

  useEffect(() => {
    // Fetch dynamic profile settings
    fetch('http://localhost:8000/api/profile')
      .then(res => res.json())
      .then(data => {
        // Map keys to match translation structure if necessary
        const mappedData = {};
        if (data.role) mappedData.role = data.role;
        if (data.phone) mappedData.phoneNumber = data.phone;
        if (data.email) mappedData.email = data.email;
        if (data.address) mappedData.address = data.address;
        if (data.school) mappedData.school = data.school;
        if (data.about) mappedData.aboutText1 = data.about; // Using about for the first section
        
        setDynamicProfile(mappedData);
      })
      .catch(err => console.error('Error fetching profile:', err));
  }, []);

  const t = { ...translations[lang], ...dynamicProfile };
  const isRTL = lang === 'ar';

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷', color: 'from-violet-500 to-red-500' },
    { code: 'en', label: 'English', flag: '🇬🇧', color: 'from-violet-600 to-red-600' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦', color: 'from-red-500 to-green-500' },
    { code: 'es', label: 'Español', flag: '🇪🇸', color: 'from-red-600 to-yellow-500' }
  ];

  const competences = [
    { niveau: 90, color: 'from-cyan-500 to-indigo-500' },
    { niveau: 65, color: 'from-purple-500 to-pink-500' },
    { niveau: 85, color: 'from-green-500 to-pink-' },
    { niveau: 60, color: 'from-orange-500 to-yellow-500' },
    { niveau: 80, color: 'from-indigo-500 to-violet-' },
    { niveau: 85, color: 'from-teal-500 to-fuchsia-500' }
  ];

  const projets = [
    { id: 1, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'beginner', demo: 'calculatrice' },
    { id: 2, technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'], difficulte: 'beginner', demo: 'todo' },
    { id: 3, technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'], difficulte: 'intermediate', demo: 'contact' },
    { id: 4, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'intermediate', demo: 'gallery' },
    { id: 5, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'beginner', demo: 'clock' },
    { id: 6, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'intermediate', demo: 'quiz' },
    { id: 7, technologies: ['Laravel', 'React', 'Tailwind', 'MySQL'], difficulte: 'advanced', demo: 'souk' }
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
    if (!contactForm.name.trim()) errs.name = t.nameRequired;
    if (!contactForm.email.includes('@')) errs.email = t.invalidEmail;
    if (contactForm.message.trim().length < 10) errs.message = t.messageTooShort;
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendMessage = () => {
    if (!validateContact()) return;
    const subject = encodeURIComponent('Contact depuis Portfolio — ' + contactForm.name);
    const body = encodeURIComponent(`Nom: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setContactForm({ name: '', email: '', message: '' });
    setContactErrors({});
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/track-visit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch(err => console.error('Failed to track visit', err));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuOpen && !event.target.closest('.language-selector')) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [langMenuOpen]);

  return (
    <div className={`min-h-screen text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .emoji-flag {
          font-family: 'Noto Color Emoji', 'Segoe UI Emoji', sans-serif;
          font-size: 1.5rem;
          line-height: 1;
        }
      `}</style>

      {/* Background Layer */}
      <div className="fixed inset-0 bg-mesh pointer-events-none -z-10"></div>
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="nav-pill flex justify-between items-center shadow-2xl">
          <div className="text-xl font-black tracking-tighter text-white">
            YM <span className="text-sky-500">.</span>
          </div>

          <div className="hidden md:flex gap-8">
            {t.nav.map((item, index) => {
              const sectionIds = ['accueil-section', 'propos-section', 'experience-section', 'competences-section', 'projets-section', 'formation-section', 'contact-section'];
              return (
                <button
                  key={item}
                  onClick={() => document.getElementById(sectionIds[index])?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <span className="text-[10px] font-black text-white">{lang.toUpperCase()}</span>
                <ChevronDown size={12} className={`text-slate-500 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-40 glass-panel rounded-2xl overflow-hidden z-[60]">
                  {languages.map((l) => (
                    <button key={l.code} onClick={() => { setLang(l.code); setLangMenuOpen(false); }} className="w-full p-4 text-xs text-left text-white hover:bg-white/5 flex gap-3">
                      <span>{l.flag}</span> {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#020617] z-[55] md:hidden flex flex-col items-center justify-center gap-10">
          {t.nav.map((item, index) => (
            <button key={item} onClick={() => { setMenuOpen(false); document.getElementById(['accueil-section', 'propos-section', 'experience-section', 'competences-section', 'projets-section', 'formation-section', 'contact-section'][index])?.scrollIntoView({ behavior: 'smooth' }); }} className="text-4xl font-black text-white tracking-tighter italic">
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="accueil-section" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="badge-saas mb-6 w-fit">{t.role}</div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] text-hero-gradient">
              Full Stack <br /> 
              <span className="text-white">Developer</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
              {t.aboutText1.substring(0, 180)}...
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('projets-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-premium"
              >
                View Projects <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-premium-outline"
              >
                {t.contactMe}
              </button>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative z-10">
              <img src="/profile.jpeg" alt="Yousfi Mohammed" className="w-full h-full object-cover scale-105" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
            <div className="absolute top-1/2 -right-6 p-6 glass-panel rounded-3xl z-20">
              <div className="text-3xl font-black text-white">2+</div>
              <div className="text-[10px] font-black uppercase text-sky-400 tracking-tighter">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="propos-section" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">{t.aboutTitle}</h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6">
                {[
                  { icon: Mail, val: t.email, label: 'Email' },
                  { icon: MapPin, val: t.address, label: 'Location' }
                ].map((item, idx) => (
                  <div key={idx} className="saas-card !p-6">
                    <item.icon size={20} className="text-sky-500 mb-3" />
                    <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">{item.label}</div>
                    <div className="text-xs font-bold text-white truncate">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {t.skills.slice(0, 4).map((skill, idx) => (
                <div key={idx} className="saas-card flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500">
                    <IconMapper iconKey={skill.icon} size={24} />
                  </div>
                  <div className="font-bold text-sm text-white">{skill.nom}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience-section" className="py-32 px-4 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white">{t.experienceTitle}</h2>
          <div className="timeline-track space-y-16">
            {t.experiences.map((exp, idx) => (
              <div key={idx} className="relative animate-fade-up">
                <div className="timeline-dot"></div>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">{exp.titre}</h3>
                  <div className="badge-saas h-fit">{exp.periode}</div>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences-section" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {t.skillsTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.skills.map((skill, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] group">
                <div className={`flex items-start gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 p-3 rounded-xl shadow-inner border border-white/5 group-hover:from-cyan-500/25 group-hover:to-indigo-500/25 transition-all">
                    <IconMapper iconKey={skill.icon} size={26} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.nom}</h3>
                    <p className="text-sm text-slate-400 mt-1">{skill.details}</p>
                  </div>
                </div>

                
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-400">{t.proficiency}</span>
                    <span className="text-sm font-semibold text-cyan-400">{competences[index].niveau}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${competences[index].color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${competences[index].niveau}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projets-section" className="py-32 px-4 bg-slate-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white">{t.projectsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projets.map((projet, idx) => {
              const projectData = t.projects[idx];
              return (
                <div key={projet.id} className="saas-card group !p-0">
                  <div className="aspect-video relative overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-800 transition-transform duration-700 group-hover:scale-110">
                      {projet.demo === 'calculatrice' && <Calculator size={120} />}
                      {projet.demo === 'todo' && <CheckSquare size={120} />}
                      {projet.demo === 'contact' && <Mail size={120} />}
                      {projet.demo === 'gallery' && <Image size={120} />}
                      {projet.demo === 'clock' && <Clock size={120} />}
                      {projet.demo === 'quiz' && <HelpCircle size={120} />}
                      {projet.demo === 'souk' && <Layout size={120} />}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
                    <div className="absolute top-6 right-6">
                      <div className="badge-saas !bg-white/10 !backdrop-blur-md">{t.difficulty[projet.difficulte]}</div>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">{projectData.titre}</h3>
                    <p className="text-lg text-slate-400 mb-8 line-clamp-2 leading-relaxed">{projectData.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {projet.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5 text-slate-500">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => setSelectedProject({ ...projet, ...projectData })}
                        className="text-white font-bold text-sm flex items-center gap-2 hover:text-sky-400 transition-colors"
                      >
                        {t.details} <ChevronRight size={18} />
                      </button>
                      <a 
                        href={`https://github.com/moha4848/${repoMap[projet.id]}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal du Projet */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-700/50 p-8 flex justify-between items-center backdrop-blur-sm z-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {selectedProject.titre}
              </h2>

              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a
                  href={`https://github.com/moha4848/${repoMap[selectedProject.id]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:from-cyan-600 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Github size={18} /> {t.viewCode}
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 p-2.5 rounded-lg transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-red-500/50"
                  aria-label={t.close}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                {selectedProject.id === 1 && <CalculatriceDemo t={t} />}
                {selectedProject.id === 2 && <TodoDemo t={t} />}
                {selectedProject.id === 3 && <ContactDemo t={t} />}
                {selectedProject.id === 7 && <SoukOverview t={t} />}
                {selectedProject.id === 4 && <GalleryDemo t={t} />}
                {selectedProject.id === 5 && <ClockDemo t={t} />}
                {selectedProject.id === 6 && <QuizDemo t={t} />}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                      {t.description}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.details}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                      {t.features}
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.fonctionnalites.map((fonc, i) => (
                        <li key={i} className={`flex items-start text-slate-300 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                          <div className="bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] p-1 rounded-full mt-1 flex-shrink-0">
                            <ChevronRight className={`text-white ${isRTL ? 'rotate-180' : ''}`} size={16} />
                          </div>
                          <span className={`${isRTL ? 'mr-3' : 'ml-3'}`}>{fonc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    {t.techUsed}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-cyan-900/30 to-indigo-900/30 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-xl font-bold mb-4 text-white">{t.difficulty[selectedProject.difficulte]}</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm px-4 py-2 rounded-full font-semibold ${
                        selectedProject.difficulte === 'beginner'
                          ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                          : selectedProject.difficulte === 'intermediate'
                          ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30'
                          : 'bg-red-900/30 text-red-400 border border-red-500/30'
                      }`}>
                        {t.difficulty[selectedProject.difficulte]}
                      </span>
                      <span className="text-sm text-slate-400">{t.project} {selectedProject.id}/6</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          selectedProject.difficulte === 'beginner'
                            ? 'bg-gradient-to-r from-green-500 to-pink- w-1/3'
                            : selectedProject.difficulte === 'intermediate'
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 w-2/3'
                            : 'bg-gradient-to-r from-red-500 to-pink-500 w-full'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Timeline */}
      <section id="formation-section" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white">{t.formationTitle}</h2>
          <div className="timeline-track space-y-16">
            {t.formations.map((f, idx) => (
              <div key={idx} className="relative animate-fade-up">
                <div className="timeline-dot"></div>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{f.titre}</h3>
                    <div className="text-sky-400 font-bold text-sm tracking-tight">{f.etablissement}</div>
                  </div>
                  <div className="badge-saas h-fit">{f.periode}</div>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact-section" className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">Ready to build something <span className="text-sky-500">great?</span></h2>
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Github, url: 'https://github.com/moha4848' },
              { icon: Mail, url: `mailto:${t.email}` },
              { icon: ExternalLink, url: '#' }
            ].map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all shadow-xl">
                <item.icon size={24} />
              </a>
            ))}
          </div>
          <div className="text-xs font-bold text-slate-600 uppercase tracking-widest">
            &copy; 2024 Yousfi Mohammed • Full Stack Engineer
          </div>
        </div>
      </footer>

      {/* Contact */}
      <section id="contact-section" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {t.contactTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">{t.contactInfo}</h3>
              
              <div className="space-y-6">
                <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 p-3 rounded-xl">
                    <Mail size={24} className="text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{t.emailLabel}</p>
                    <p className="font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer" 
                       onClick={() => window.location.href = `mailto:${LINKS.email}`}>
                      {t.email}
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 p-3 rounded-xl">
                    <Phone size={24} className="text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{t.phoneLabel}</p>
                    <p className="font-semibold text-white">{t.phoneNumber}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 p-3 rounded-xl">
                    <MapPin size={24} className="text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{t.locationLabel}</p>
                    <p className="font-semibold text-white">{t.address} – {t.country}</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold mb-4 text-white">{t.followMe}</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Github, href: LINKS.github, label: 'GitHub' },
                      { icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
                      { icon: Instagram, href: LINKS.instagram, label: 'Instagram' }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-indigo-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-cyan-500/50 shadow-lg"
                      >
                        <social.icon size={22} className="text-white" strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">{t.contactMessage}</h3>
              
              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder={t.yourName}
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className={`form-input ${contactErrors.name ? 'error' : ''} ${isRTL ? 'text-right' : ''}`}
                  />
                  {contactErrors.name && <p className="text-red-500 text-sm mt-2 ml-1">{contactErrors.name}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder={t.yourEmail}
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className={`form-input ${contactErrors.email ? 'error' : ''} ${isRTL ? 'text-right' : ''}`}
                  />
                  {contactErrors.email && <p className="text-red-500 text-sm mt-2 ml-1">{contactErrors.email}</p>}
                </div>
                
                <div>
                  <textarea
                    placeholder={t.yourMessage}
                    rows="5"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className={`form-input resize-none ${contactErrors.message ? 'error' : ''} ${isRTL ? 'text-right' : ''}`}
                  ></textarea>
                  {contactErrors.message && <p className="text-red-500 text-sm mt-2 ml-1">{contactErrors.message}</p>}
                </div>
                
                <button
                  onClick={handleSendMessage}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:from-cyan-600 hover:to-indigo-700 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <span>{t.sendMessage}</span>
                  <Mail size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Portfolio
              </div>
              <p className="text-slate-400">{t.footer}</p>
              <p className="text-sm text-slate-500 mt-2">{t.footerCredit}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-indigo-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-cyan-500/50 shadow-lg">
                <Github size={20} className="text-white" strokeWidth={1.5} />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-indigo-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-cyan-500/50 shadow-lg">
                <Linkedin size={20} className="text-white" strokeWidth={1.5} />
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-indigo-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-cyan-500/50 shadow-lg">
                <Instagram size={20} className="text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}