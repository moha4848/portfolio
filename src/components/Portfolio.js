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
  Trash2
} from 'lucide-react';

const repoMap = {
  1: "calculatrice",
  2: "todo",
  3: "contact",
  4: "gallery",
  5: "clock",
  6: "quiz",
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
    <div className="p-6 bg-slate-800 rounded-xl">
      <div className="text-center text-xl mb-4 text-blue-400 font-bold">
        {t.calculatorTitle}
      </div>
      <div className="bg-slate-900 p-4 rounded-lg">
        <div className="text-right text-green-400 text-3xl mb-4">{display}</div>
        <div className="grid grid-cols-4 gap-3">
          {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map(btn => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="h-12 bg-slate-700 rounded-lg hover:bg-slate-600"
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
    <div className="p-6 bg-slate-800 rounded-xl">
      <h2 className="text-center text-xl mb-4 text-blue-400 font-bold">
        {t.todoTitle}
      </h2>
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between bg-slate-700 p-2 mb-2 rounded">
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
    <form onSubmit={submit} className="p-6 bg-slate-800 rounded-xl space-y-3">
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

      <button className="w-full bg-blue-600 p-2 rounded">{t.sendMessage}</button>
    </form>
  );
};

/* ================= GALLERY ================= */
export const GalleryDemo = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: t.galleryImages.sunrise, emoji: '🌅', color: 'from-purple-500 to-pink-500' },
    { id: 2, title: t.galleryImages.landscape, emoji: '🏞️', color: 'from-blue-500 to-cyan-500' },
    { id: 3, title: t.galleryImages.ocean, emoji: '🌊', color: 'from-green-500 to-emerald-500' },
    { id: 4, title: t.galleryImages.city, emoji: '🏙️', color: 'from-orange-500 to-red-500' },
    { id: 5, title: t.galleryImages.mountain, emoji: '🏔️', color: 'from-indigo-500 to-purple-500' },
    { id: 6, title: t.galleryImages.aurora, emoji: '🌄', color: 'from-yellow-500 to-orange-500' },
  ];

  if (selectedImage) {
    return (
      <div className="p-6 bg-slate-800 rounded-xl">
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
    <div className="p-6 bg-slate-800 rounded-xl">
      <h2 className="text-center text-xl mb-4 text-blue-400 font-bold">
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
    <div className="p-6 bg-slate-800 rounded-xl text-center">
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
    <div className="p-6 bg-slate-800 rounded-xl text-center">
      <h2 className="text-xl mb-4 text-blue-400 font-bold">{t.quizFinished}</h2>
      <p className="text-green-400 text-3xl mb-4">{score} / {questions.length}</p>
      <button onClick={reset} className="bg-blue-600 p-2 rounded">{t.restart}</button>
    </div>
  );

  return (
    <div className="p-6 bg-slate-800 rounded-xl">
      <h2 className="text-xl mb-4 text-blue-400 font-bold">{t.quizTitle}</h2>
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

const translations = {
  fr: {
    nav: ['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Contact'],
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
      { nom: 'Développement Web', details: 'HTML, CSS, JavaScript, React', icon: '🌐' },
      { nom: 'Backend', details: 'PHP, Node.js, API REST', icon: '⚙️' },
      { nom: 'Bases de Données', details: 'MySQL', icon: '🗃️' },
      { nom: 'Programmation', details: 'Python', icon: '💻' },
      { nom: 'Outils', details: 'Git, VS Code, Figma', icon: '🛠️' },
      { nom: 'Soft Skills', details: 'Communication, Travail d\'équipe', icon: '🤝' }
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
      }
    ],
    
    difficulty: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé' },
    details: 'Détails',
    viewCode: 'Voir le code',
    description: 'Description',
    techUsed: 'Technologies utilisées',
    features: 'Fonctionnalités',
    
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
      { icon: '💻', title: 'Développement Web', desc: 'Frontend & Backend' },
      { icon: '📱', title: 'Applications Mobiles', desc: 'React Native' },
      { icon: '🎨', title: 'UI/UX Design', desc: 'Figma' },
      { icon: '📊', title: 'Data Science', desc: 'Python' },
      { icon: '☁️', title: 'Cloud Computing', desc: 'AWS, Docker' },
      { icon: '🔒', title: 'Cybersécurité', desc: 'Sécurité des applications' }
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
    nav: ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'],
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
      { nom: 'Web Development', details: 'HTML, CSS, JavaScript, React', icon: '🌐' },
      { nom: 'Backend', details: 'PHP, Node.js, REST API', icon: '⚙️' },
      { nom: 'Databases', details: 'MySQL', icon: '🗃️' },
      { nom: 'Programming', details: 'Python', icon: '💻' },
      { nom: 'Tools', details: 'Git, VS Code, Figma', icon: '🛠️' },
      { nom: 'Soft Skills', details: 'Communication, Teamwork', icon: '🤝' }
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
      }
    ],
    
    difficulty: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    details: 'Details',
    viewCode: 'View Code',
    description: 'Description',
    techUsed: 'Technologies Used',
    features: 'Features',
    
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
      { icon: '💻', title: 'Web Development', desc: 'Frontend & Backend' },
      { icon: '📱', title: 'Mobile Applications', desc: 'React Native' },
      { icon: '🎨', title: 'UI/UX Design', desc: 'Figma' },
      { icon: '📊', title: 'Data Science', desc: 'Python' },
      { icon: '☁️', title: 'Cloud Computing', desc: 'AWS, Docker' },
      { icon: '🔒', title: 'Cybersecurity', desc: 'Application Security' }
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
    nav: ['الرئيسية', 'من أنا', 'المهارات', 'المشاريع', 'التعليم', 'اتصل بي'],
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
      { nom: 'تطوير الويب', details: 'HTML, CSS, JavaScript, React', icon: '🌐' },
      { nom: 'الخلفية', details: 'PHP, Node.js, REST API', icon: '⚙️' },
      { nom: 'قواعد البيانات', details: 'MySQL', icon: '🗃️' },
      { nom: 'البرمجة', details: 'Python', icon: '💻' },
      { nom: 'الأدوات', details: 'Git, VS Code, Figma', icon: '🛠️' },
      { nom: 'المهارات الناعمة', details: 'التواصل، العمل الجماعي', icon: '🤝' }
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
      }
    ],
    
    difficulty: { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم' },
    details: 'تفاصيل',
    viewCode: 'عرض الكود',
    description: 'الوصف',
    techUsed: 'التقنيات المستخدمة',
    features: 'المميزات',
    
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
      { icon: '💻', title: 'تطوير الويب', desc: 'الواجهة الأمامية والخلفية' },
      { icon: '📱', title: 'تطبيقات الهاتف', desc: 'React Native' },
      { icon: '🎨', title: 'تصميم واجهة المستخدم/تجربة المستخدم', desc: 'Figma' },
      { icon: '📊', title: 'علم البيانات', desc: 'Python' },
      { icon: '☁️', title: 'الحوسبة السحابية', desc: 'AWS, Docker' },
      { icon: '🔒', title: 'الأمن السيبراني', desc: 'أمن التطبيقات' }
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
      }
    ],
    
    difficulty: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
    details: 'Detalles',
    viewCode: 'Ver Código',
    description: 'Descripción',
    techUsed: 'Tecnologías Utilizadas',
    features: 'Características',
    
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
      { icon: '💻', title: 'Desarrollo Web', desc: 'Frontend y Backend' },
      { icon: '📱', title: 'Aplicaciones Móviles', desc: 'React Native' },
      { icon: '🎨', title: 'Diseño UI/UX', desc: 'Figma' },
      { icon: '📊', title: 'Ciencia de Datos', desc: 'Python' },
      { icon: '☁️', title: 'Computación en la Nube', desc: 'AWS, Docker' },
      { icon: '🔒', title: 'Ciberseguridad', desc: 'Seguridad de aplicaciones' }
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

  const t = translations[lang];
  const isRTL = lang === 'ar';

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷', color: 'from-blue-500 to-red-500' },
    { code: 'en', label: 'English', flag: '🇬🇧', color: 'from-blue-600 to-red-600' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦', color: 'from-red-500 to-green-500' },
    { code: 'es', label: 'Español', flag: '🇪🇸', color: 'from-red-600 to-yellow-500' }
  ];

  const competences = [
    { niveau: 90, color: 'from-blue-500 to-cyan-500' },
    { niveau: 65, color: 'from-purple-500 to-pink-500' },
    { niveau: 85, color: 'from-green-500 to-emerald-500' },
    { niveau: 60, color: 'from-orange-500 to-yellow-500' },
    { niveau: 80, color: 'from-indigo-500 to-blue-500' },
    { niveau: 85, color: 'from-teal-500 to-cyan-500' }
  ];

  const projets = [
    { id: 1, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'beginner', demo: 'calculatrice' },
    { id: 2, technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'], difficulte: 'beginner', demo: 'todo' },
    { id: 3, technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'], difficulte: 'intermediate', demo: 'contact' },
    { id: 4, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'intermediate', demo: 'gallery' },
    { id: 5, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'beginner', demo: 'clock' },
    { id: 6, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'intermediate', demo: 'quiz' }
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
    const handleClickOutside = (event) => {
      if (langMenuOpen && !event.target.closest('.language-selector')) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [langMenuOpen]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-xl z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                {t.nav.map((item, index) => {
                  const sectionIds = ['accueil-section', 'propos-section', 'competences-section', 'projets-section', 'formation-section', 'contact-section'];
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item.toLowerCase());
                        document.getElementById(sectionIds[index])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="relative group px-3 py-2 text-slate-300 hover:text-white transition-colors"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Language Selector and Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative language-selector">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangMenuOpen(!langMenuOpen);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 shadow-lg"
                  aria-label="Select language"
                >
                  <span className="emoji-flag text-xl">
                    {languages.find(l => l.code === lang)?.flag}
                  </span>
                  <span className="text-sm font-medium hidden sm:block">
                    {languages.find(l => l.code === lang)?.code.toUpperCase()}
                  </span>
                  <ChevronDown size={16} className={langMenuOpen ? 'rotate-180 transition-transform' : ''} />
                </button>
                
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-slate-700/50 z-50">
                    <div className="p-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            setLang(language.code);
                            setLangMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                            lang === language.code 
                              ? 'bg-gradient-to-r from-blue-900/40 to-cyan-900/30' 
                              : 'hover:bg-slate-800/80'
                          }`}
                        >
                          <span className="emoji-flag text-xl">{language.flag}</span>
                          <span className="flex-1 text-left font-medium">{language.label}</span>
                          {lang === language.code && (
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
            <div className="p-4 border-b border-slate-800">
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLang(language.code);
                      setMenuOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
                      lang === language.code 
                        ? 'bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-500/50' 
                        : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <span className="emoji-flag text-2xl mb-1">{language.flag}</span>
                    <span className="text-sm font-medium">{language.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {t.nav.map((item, index) => {
              const sectionIds = ['accueil-section', 'propos-section', 'competences-section', 'projets-section', 'formation-section', 'contact-section'];
              return (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMenuOpen(false);
                    document.getElementById(sectionIds[index])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full text-left px-6 py-4 hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 flex items-center justify-between group"
                >
                  <span className="font-medium">{item}</span>
                  <ChevronRight size={20} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil-section" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Avatar with profile image */}
          <div className="w-40 h-40 rounded-full mx-auto mb-8 p-1.5 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-500 animate-gradient">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 shadow-2xl">
              <img
                src="/profile.jpeg"
                alt="Yousfi Mohammed"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="eager"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
            Yousfi Mohammed
          </h1>

          <p className="text-xl md:text-2xl text-blue-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.role}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/CV_Yousfi_Mohammed.pdf"
              download="CV_Yousfi_Mohammed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
            >
              <span>{t.downloadCV}</span>
              <ExternalLink size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-slate-700 hover:border-blue-500/50"
            >
              {t.contactMe}
            </button>
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section id="propos-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.aboutTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.aboutText1}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.aboutText2}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: MapPin, label: t.address },
                  { icon: Mail, label: t.email },
                  { icon: Phone, label: t.phoneNumber },
                  { icon: GraduationCap, label: t.school }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-2 rounded-lg">
                      <item.icon className="text-blue-400" size={20} />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.interestsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {t.interests.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 hover:from-slate-800 hover:to-slate-900 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 group">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences-section" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.skillsTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] group">
                <div className={`flex items-start gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-3 rounded-xl group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{skill.nom}</h3>
                    <p className="text-sm text-slate-400 mt-1">{skill.details}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-400">{t.proficiency}</span>
                    <span className="text-sm font-semibold text-blue-400">{competences[index].niveau}%</span>
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

      {/* Projets */}
      <section id="projets-section" className="py-20 px-4 bg-gradient-to-b from-slate-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.projectsTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, idx) => {
              const projectData = t.projects[idx];
              const repoName = repoMap[projet.id];

              return (
                <div
                  key={projet.id}
                  className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-slate-700/30 shadow-2xl hover:shadow-3xl group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-900/40 via-cyan-900/40 to-blue-900/40 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="relative z-10 p-4">
                      {projet.demo === 'calculatrice' && <div className="text-6xl">🧮</div>}
                      {projet.demo === 'todo' && <div className="text-6xl">✅</div>}
                      {projet.demo === 'contact' && <div className="text-6xl">📧</div>}
                      {projet.demo === 'gallery' && <div className="text-6xl">🖼️</div>}
                      {projet.demo === 'clock' && <div className="text-6xl">🕒</div>}
                      {projet.demo === 'quiz' && <div className="text-6xl">❓</div>}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {projectData.titre}
                      </h3>
                      <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                        projet.difficulte === 'beginner'
                          ? 'bg-green-900/30 text-green-400 border border-green-500/30'
                          : projet.difficulte === 'intermediate'
                          ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30'
                          : 'bg-red-900/30 text-red-400 border border-red-500/30'
                      }`}>
                        {t.difficulty[projet.difficulte]}
                      </span>
                    </div>

                    <p className="text-slate-400 mb-4 line-clamp-2">
                      {projectData.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projet.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 text-blue-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex items-center justify-between pt-4 border-t border-slate-800/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <button
                        onClick={() => setSelectedProject({ ...projet, ...projectData })}
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        <span className="mr-2">{t.details}</span>
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://github.com/moha4848/${repoName}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-500/50"
                        >
                          <Github size={16} /> {t.viewCode}
                        </a>
                      </div>
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
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {selectedProject.titre}
              </h2>

              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a
                  href={`https://github.com/moha4848/${repoMap[selectedProject.id]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
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
                {selectedProject.id === 4 && <GalleryDemo t={t} />}
                {selectedProject.id === 5 && <ClockDemo t={t} />}
                {selectedProject.id === 6 && <QuizDemo t={t} />}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {t.description}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.details}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {t.features}
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.fonctionnalites.map((fonc, i) => (
                        <li key={i} className={`flex items-start text-slate-300 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-1 rounded-full mt-1 flex-shrink-0">
                            <ChevronRight className={`text-white ${isRTL ? 'rotate-180' : ''}`} size={16} />
                          </div>
                          <span className={`${isRTL ? 'mr-3' : 'ml-3'}`}>{fonc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {t.techUsed}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg border border-blue-500/30"
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
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 w-1/3'
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

      {/* Formation */}
      <section id="formation-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.formationTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-cyan-500/30 to-blue-500/30 md:left-1/2 md:transform md:-translate-x-1/2"></div>
              
              {t.formations.map((formation, index) => (
                <div key={index} className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-auto md:w-1/2' : 'md:pl-8 md:text-left md:ml-auto md:w-1/2'}`}>
                  <div className="absolute top-6 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 border-4 border-slate-900 shadow-lg md:left-1/2 md:transform md:-translate-x-1/2"></div>
                  
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/50 shadow-xl ml-10 md:ml-0">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="text-blue-400 text-sm font-semibold mb-2 px-3 py-1 bg-blue-900/30 rounded-full inline-block">
                        {formation.periode}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{formation.titre}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{formation.etablissement}</p>
                      <p className="text-slate-400">{formation.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-section" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.contactTitle}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">{t.contactInfo}</h3>
              
              <div className="space-y-6">
                <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-3 rounded-xl">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{t.emailLabel}</p>
                    <p className="font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer" 
                       onClick={() => window.location.href = `mailto:${LINKS.email}`}>
                      {t.email}
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-3 rounded-xl">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{t.phoneLabel}</p>
                    <p className="font-semibold text-white">{t.phoneNumber}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-3 rounded-xl">
                    <MapPin size={24} className="text-blue-400" />
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
                        className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-blue-600 hover:to-cyan-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-blue-500/50 shadow-lg"
                      >
                        <social.icon size={22} className="text-white" />
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
                    className={`w-full bg-gradient-to-br from-slate-900 to-slate-950 border ${contactErrors.name ? 'border-red-500/50' : 'border-slate-700/50'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 shadow-inner ${isRTL ? 'text-right' : ''} text-white`}
                  />
                  {contactErrors.name && <p className="text-red-500 text-sm mt-2 ml-1">{contactErrors.name}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder={t.yourEmail}
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className={`w-full bg-gradient-to-br from-slate-900 to-slate-950 border ${contactErrors.email ? 'border-red-500/50' : 'border-slate-700/50'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 shadow-inner ${isRTL ? 'text-right' : ''} text-white`}
                  />
                  {contactErrors.email && <p className="text-red-500 text-sm mt-2 ml-1">{contactErrors.email}</p>}
                </div>
                
                <div>
                  <textarea
                    placeholder={t.yourMessage}
                    rows="5"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className={`w-full bg-gradient-to-br from-slate-900 to-slate-950 border ${contactErrors.message ? 'border-red-500/50' : 'border-slate-700/50'} rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 shadow-inner resize-none ${isRTL ? 'text-right' : ''} text-white`}
                  ></textarea>
                  {contactErrors.message && <p className="text-red-500 text-sm mt-2 ml-1">{contactErrors.message}</p>}
                </div>
                
                <button
                  onClick={handleSendMessage}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <span>{t.sendMessage}</span>
                  <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
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
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Portfolio
              </div>
              <p className="text-slate-400">{t.footer}</p>
              <p className="text-sm text-slate-500 mt-2">{t.footerCredit}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-blue-600 hover:to-cyan-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-blue-500/50 shadow-lg">
                <Github size={20} className="text-white" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-blue-600 hover:to-cyan-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-blue-500/50 shadow-lg">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-blue-600 hover:to-cyan-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-blue-500/50 shadow-lg">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}