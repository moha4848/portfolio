export const translations = {
  fr: {
    nav: ['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Contact'],
    role: 'Stagiaire en Développement Digital - ISTA',
    downloadCV: 'Télécharger CV',
    contactMe: 'Me Contacter',
    aboutTitle: 'À Propos de Moi',
    aboutText1: "Étudiant motivé et passionné par l'informatique, je suis actuellement en formation de Technicien Spécialisé en Développement Informatique à l'ISTA. Ma formation m'a permis d'acquérir des compétences solides en développement web, programmation et gestion de bases de données.",
    aboutText2: "Je suis constamment à la recherche de nouveaux défis et j'aime apprendre de nouvelles technologies. Mon objectif est de contribuer à des projets innovants et de développer mes compétences professionnelles.",
    skillsTitle: 'Mes Compétences',
    skills: [
      { nom: 'Développement Web', details: 'HTML, CSS, JavaScript, React', icon: '🌐' },
      { nom: 'Backend', details: 'PHP, Node.js, API REST', icon: '⚙️' },
      { nom: 'Bases de Données', details: 'MySQL, MongoDB', icon: '🗃️' },
      { nom: 'Programmation', details: 'Python, Java', icon: '💻' },
      { nom: 'Outils', details: 'Git, VS Code, Figma', icon: '🛠️' },
      { nom: 'Soft Skills', details: 'Communication, Travail d\'équipe', icon: '🤝' }
    ],
    projectsTitle: 'Mes Projets',
    projects: [
      { id: 1, titre: 'Calculatrice Simple', description: 'Calculatrice avec opérations de base et interface moderne', details: 'Une calculatrice interactive qui permet d\'effectuer les opérations mathématiques de base : addition, soustraction, multiplication et division.', fonctionnalites: ['Addition, soustraction, multiplication, division', 'Interface responsive', 'Affichage des résultats', 'Bouton clear pour réinitialiser'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 2, titre: 'Liste de Tâches (To-Do List)', description: 'Application pour gérer vos tâches quotidiennes', details: 'Une application simple pour créer, marquer comme terminées et supprimer des tâches. Les données sont sauvegardées dans le navigateur.', fonctionnalites: ['Ajouter des tâches', 'Marquer comme terminé', 'Supprimer des tâches', 'Compteur de tâches'], technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'] },
      { id: 3, titre: 'Formulaire de Contact', description: 'Formulaire avec validation des données', details: 'Un formulaire de contact professionnel avec validation en temps réel des champs email, téléphone et message.', fonctionnalites: ['Validation email', 'Validation téléphone', 'Messages d\'erreur', 'Design moderne'], technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'] },
      { id: 4, titre: 'Galerie d\'Images', description: 'Galerie responsive avec effet lightbox', details: 'Une galerie d\'images interactive avec possibilité d\'agrandir images en plein écran et naviguer.', fonctionnalites: ['Affichage en grille', 'Mode plein écran', 'Navigation', 'Animations fluides'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 5, titre: 'Horloge Digitale', description: 'Horloge en temps réel avec date', details: 'Une horloge numérique qui affiche l\'heure et la date en temps réel avec un design élégant.', fonctionnalites: ['Heure en temps réel', 'Date du jour', 'Format 24h', 'Design animé'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 6, titre: 'Quiz Interactif', description: 'Quiz avec score et correction', details: 'Application de quiz avec questions à choix multiples, système de score et affichage des bonnes réponses.', fonctionnalites: ['Questions multiples', 'Calcul du score', 'Feedback immédiat', 'Affichage du résultat final'], technologies: ['HTML', 'CSS', 'JavaScript'] }
    ],
    difficulty: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé' },
    details: 'Détails', viewCode: 'Voir le code', description: 'Description', techUsed: 'Technologies utilisées', features: 'Fonctionnalités',
    formationTitle: 'Formation',
    formations: [
      { titre: 'Technicien Spécialisé en Développement Digital', etablissement: 'ISTA Lazaret, Oujda', periode: '2024 - 2026', description: 'Formation complète en développement web (DEVOWSF)' },
      { titre: 'Baccalauréat Sciences Physiques', etablissement: 'Lycée Larbi al-Houssaini', periode: '2023 - 2024', description: 'Option Sciences Physiques' }
    ],
    contactTitle: 'Contactez-moi', contactInfo: 'Informations', contactMessage: 'Message', email: 'Email', phone: 'Téléphone', location: 'Localisation', yourName: 'Votre nom', yourEmail: 'Votre email', yourMessage: 'Votre message', sendMessage: 'Envoyer le Message', nameRequired: 'Le nom est requis', invalidEmail: 'Email invalide', messageTooShort: 'Message trop court (min 10 caractères)', footer: '© 2025 Portfolio. Tous droits réservés.', footerCredit: 'Créé par un stagiaire ISTA', close: 'Fermer', viewLive: 'Voir en direct', proficiency: 'Maîtrise'
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'],
    role: 'Digital Development Intern - ISTA',
    downloadCV: 'Download CV', contactMe: 'Contact Me', aboutTitle: 'About Me',
    aboutText1: "I am a motivated and passionate IT student, currently training as a Specialized Technician in Computer Development at ISTA. My training has allowed me to acquire solid skills in web development, programming, and database management.",
    aboutText2: "I am constantly looking for new challenges and enjoy learning new technologies. My goal is to contribute to innovative projects and develop my professional skills.",
    skillsTitle: 'My Skills',
    skills: [
      { nom: 'Web Development', details: 'HTML, CSS, JavaScript, React', icon: '🌐' }, { nom: 'Backend', details: 'PHP, Node.js, REST API', icon: '⚙️' }, { nom: 'Databases', details: 'MySQL, MongoDB', icon: '🗃️' }, { nom: 'Programming', details: 'Python, Java', icon: '💻' }, { nom: 'Tools', details: 'Git, VS Code, Figma', icon: '🛠️' }, { nom: 'Soft Skills', details: 'Communication, Teamwork', icon: '🤝' }
    ],
    projectsTitle: 'My Projects',
    projects: [
      { id: 1, titre: 'Simple Calculator', description: 'Calculator with basic operations and modern interface', details: 'An interactive calculator that performs basic mathematical operations.', fonctionnalites: ['Operations', 'Responsive interface', 'Result display'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 2, titre: 'To-Do List', description: 'Application to manage your daily tasks', details: 'A simple application to create, mark as completed, and delete tasks.', fonctionnalites: ['Add tasks', 'Mark as completed', 'Delete tasks'], technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'] },
      { id: 3, titre: 'Contact Form', description: 'Form with data validation', details: 'A professional contact form with real-time validation.', fonctionnalites: ['Email validation', 'Phone validation', 'Error messages'], technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'] },
      { id: 4, titre: 'Image Gallery', description: 'Responsive gallery with lightbox effect', details: 'An interactive image gallery.', fonctionnalites: ['Grid display', 'Full screen mode', 'Image navigation'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 5, titre: 'Digital Clock', description: 'Real-time clock with date', details: 'A digital clock that displays time and date in real time.', fonctionnalites: ['Real-time clock', "Today's date", '24-hour format'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 6, titre: 'Interactive Quiz', description: 'Quiz with score and correction', details: 'Quiz application with multiple choice questions.', fonctionnalites: ['Multiple questions', 'Score calculation', 'Immediate feedback'], technologies: ['HTML', 'CSS', 'JavaScript'] }
    ],
    difficulty: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
    details: 'Details', viewCode: 'View Code', description: 'Description', techUsed: 'Technologies Used', features: 'Features',
    formationTitle: 'Education',
    formations: [
      { titre: 'Specialized Technician in Digital Development', etablissement: 'ISTA Lazaret, Oujda', periode: '2024 - 2026', description: 'Complete training in web development (DEVOWSF)' },
      { titre: 'Baccalaureate in Physical Sciences', etablissement: 'Larbi al-Houssaini High School', periode: '2023 - 2024', description: 'Physical Sciences option' }
    ],
    contactTitle: 'Contact Me', contactInfo: 'Information', contactMessage: 'Message', email: 'Email', phone: 'Phone', location: 'Location', yourName: 'Your name', yourEmail: 'Your email', yourMessage: 'Your message', sendMessage: 'Send Message', nameRequired: 'Name is required', invalidEmail: 'Invalid email', messageTooShort: 'Message too short (min 10 characters)', footer: '© 2025 Portfolio. All rights reserved.', footerCredit: 'Created by an ISTA intern', close: 'Close', viewLive: 'View Live', proficiency: 'Proficiency'
  },
  ar: {
    nav: ['الرئيسية', 'من أنا', 'المهارات', 'المشاريع', 'التعليم', 'اتصل بي'],
    role: 'متدرب في التطوير الرقمي - ISTA',
    downloadCV: 'تحميل السيرة الذاتية', contactMe: 'اتصل بي', aboutTitle: 'من أنا',
    aboutText1: "أنا طالب في مجال تقنية المعلومات متحمس وشغوف، أتدرب حاليًا كفني متخصص في تطوير الحاسوب في معهد ISTA. تدريبي مكنني من اكتساب مهارات قوية في تطوير الويب، البرمجة، وإدارة قواعد البيانات.",
    aboutText2: "أبحث دائمًا عن تحديات جديدة وأستمتع بتعلم التقنيات الحديثة. هدفي هو المساهمة في مشاريع مبتكرة وتطوير مهاراتي المهنية.",
    skillsTitle: 'مهاراتي',
    skills: [
      { nom: 'تطوير الويب', details: 'HTML, CSS, JavaScript, React', icon: '🌐' }, { nom: 'الخلفية', details: 'PHP, Node.js, REST API', icon: '⚙️' }, { nom: 'قواعد البيانات', details: 'MySQL, MongoDB', icon: '🗃️' }, { nom: 'البرمجة', details: 'Python, Java', icon: '💻' }, { nom: 'الأدوات', details: 'Git, VS Code, Figma', icon: '🛠️' }, { nom: 'المهارات الناعمة', details: 'التواصل، العمل الجماعي', icon: '🤝' }
    ],
    projectsTitle: 'مشاريعي',
    projects: [
      { id: 1, titre: 'آلة حاسبة بسيطة', description: 'آلة حاسبة مع عمليات أساسية وواجهة عصرية', details: 'آلة حاسبة تفاعلية تؤدي العمليات الحسابية الأساسية.', fonctionnalites: ['الجمع، الطرح، الضرب، القسمة', 'واجهة متجاوبة'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 2, titre: 'قائمة المهام', description: 'تطبيق لإدارة مهامك اليومية', details: 'تطبيق بسيط لإنشاء المهام، وضع علامة كمكتملة، وحذف المهام.', fonctionnalites: ['إضافة المهام', 'وضع علامة كمكتملة'], technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'] },
      { id: 3, titre: 'نموذج الاتصال', description: 'نموذج مع التحقق من البيانات', details: 'نموذج اتصال احترافي مع التحقق في الوقت الفعلي.', fonctionnalites: ['التحقق من البريد الإلكتروني'], technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'] },
      { id: 4, titre: 'معرض الصور', description: 'معرض متجاوب مع تأثير lightbox', details: 'معرض صور تفاعلي.', fonctionnalites: ['عرض شبكي'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 5, titre: 'ساعة رقمية', description: 'ساعة حقيقية مع التاريخ', details: 'ساعة رقمية تعرض الوقت والتاريخ في الوقت الفعلي.', fonctionnalites: ['ساعة حقيقية'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 6, titre: 'اختبار تفاعلي', description: 'اختبار مع النقاط والتصحيح', details: 'تطبيق اختبار مع أسئلة متعددة الخيارات.', fonctionnalites: ['أسئلة متعددة'], technologies: ['HTML', 'CSS', 'JavaScript'] }
    ],
    difficulty: { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم' },
    details: 'تفاصيل', viewCode: 'عرض الكود', description: 'الوصف', techUsed: 'التقنيات المستخدمة', features: 'المميزات',
    formationTitle: 'التعليم',
    formations: [
      { titre: 'فني متخصص في التطوير الرقمي', etablissement: 'معهد ISTA لازاريت، وجدة', periode: '2024 - 2026', description: 'تدريب كامل في تطوير الويب (DEVOWSF)' },
      { titre: 'بكالوريا علوم فيزيائية', etablissement: 'ثانوية العربي الحسيني', periode: '2023 - 2024', description: 'تخصص العلوم الفيزيائية' }
    ],
    contactTitle: 'اتصل بي', contactInfo: 'المعلومات', contactMessage: 'الرسالة', email: 'البريد الإلكتروني', phone: 'الهاتف', location: 'الموقع', yourName: 'اسمك', yourEmail: 'بريدك الإلكتروني', yourMessage: 'رسالتك', sendMessage: 'إرسال الرسالة', nameRequired: 'الاسم مطلوب', invalidEmail: 'بريد إلكتروني غير صالح', messageTooShort: 'الرسالة قصيرة جدًا (10 أحرف على الأقل)', footer: '© 2025 ملف التعريف. جميع الحقوق محفوظة.', footerCredit: 'تم الإنشاء بواسطة متدرب ISTA', close: 'إغلاق', viewLive: 'عرض مباشر', proficiency: 'الإتقان'
  },
  es: {
    nav: ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Formación', 'Contacto'],
    role: 'Pasante en Desarrollo Digital - ISTA',
    downloadCV: 'Descargar CV', contactMe: 'Contáctame', aboutTitle: 'Sobre Mí',
    aboutText1: "Soy un estudiante de TI motivado y apasionado, actualmente en formación como Técnico Especializado en Desarrollo Informático en ISTA. Mi formación me ha permitido adquirir sólidas habilidades en desarrollo web, programación y gestión de bases de datos.",
    aboutText2: "Constantemente busco nuevos desafíos y disfruto aprendiendo nuevas tecnologías. Mi objetivo es contribuir a proyectos innovadores y desarrollar mis habilidades profesionales.",
    skillsTitle: 'Mis Habilidades',
    skills: [
      { nom: 'Desarrollo Web', details: 'HTML, CSS, JavaScript, React', icon: '🌐' }, { nom: 'Backend', details: 'PHP, Node.js, API REST', icon: '⚙️' }, { nom: 'Bases de Datos', details: 'MySQL, MongoDB', icon: '🗃️' }, { nom: 'Programación', details: 'Python, Java', icon: '💻' }, { nom: 'Herramientas', details: 'Git, VS Code, Figma', icon: '🛠️' }, { nom: 'Habilidades Blandas', details: 'Comunicación, Trabajo en equipo', icon: '🤝' }
    ],
    projectsTitle: 'Mis Proyectos',
    projects: [
      { id: 1, titre: 'Calculadora Simple', description: 'Calculadora con operaciones básicas e interfaz moderna', details: 'Una calculadora interactiva.', fonctionnalites: ['Suma, resta, multiplicación, división'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 2, titre: 'Lista de Tareas', description: 'Aplicación para gestionar tus tareas diarias', details: 'Una aplicación simple para crear, marcar como completadas y eliminar tareas.', fonctionnalites: ['Agregar tareas'], technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'] },
      { id: 3, titre: 'Formulario de Contacto', description: 'Formulario con validación de datos', details: 'Un formulario de contacto profesional.', fonctionnalites: ['Validación de correo'], technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'] },
      { id: 4, titre: 'Galería de Imágenes', description: 'Galería responsive con efecto lightbox', details: 'Una galería de imágenes interactiva.', fonctionnalites: ['Visualización en cuadrícula'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 5, titre: 'Reloj Digital', description: 'Reloj en tiempo real con fecha', details: 'Un reloj digital.', fonctionnalites: ['Reloj en tiempo real'], technologies: ['HTML', 'CSS', 'JavaScript'] },
      { id: 6, titre: 'Cuestionario Interactivo', description: 'Cuestionario con puntuación y corrección', details: 'Aplicación de cuestionario.', fonctionnalites: ['Preguntas múltiples'], technologies: ['HTML', 'CSS', 'JavaScript'] }
    ],
    difficulty: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
    details: 'Detalles', viewCode: 'Ver Código', description: 'Descripción', techUsed: 'Tecnologías Utilizadas', features: 'Características',
    formationTitle: 'Formación',
    formations: [
      { titre: 'Técnico Especializado en Desarrollo Digital', etablissement: 'ISTA Lazaret, Oujda', periode: '2024 - 2026', description: 'Formación completa en desarrollo web (DEVOWSF)' },
      { titre: 'Bachillerato en Ciencias Físicas', etablissement: 'Instituto Larbi al-Houssaini', periode: '2023 - 2024', description: 'Opción Ciencias Físicas' }
    ],
    contactTitle: 'Contáctame', contactInfo: 'Información', contactMessage: 'Mensaje', email: 'Correo Electrónico', phone: 'Teléfono', location: 'Ubicación', yourName: 'Tu nombre', yourEmail: 'Tu correo electrónico', yourMessage: 'Tu mensaje', sendMessage: 'Enviar Mensaje', nameRequired: 'El nombre es requerido', invalidEmail: 'Correo electrónico inválido', messageTooShort: 'Mensaje demasiado corto (mínimo 10 caracteres)', footer: '© 2025 Portafolio. Todos los derechos reservados.', footerCredit: 'Creado por un pasante de ISTA', close: 'Cerrar', viewLive: 'Ver en Vivo', proficiency: 'Competencia'
  }
};

export const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', color: 'from-blue-500 to-red-500' },
  { code: 'en', label: 'English', flag: '🇬🇧', color: 'from-blue-600 to-red-600' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦', color: 'from-red-500 to-green-500' },
  { code: 'es', label: 'Español', flag: '🇪🇸', color: 'from-red-600 to-yellow-500' }
];

export const LINKS = {
  instagram: 'https://www.instagram.com/moh_y48?igsh=aTBxbzg0YTlzM2Jz',
  github: 'https://github.com/moha4848',
  linkedin: 'https://www.linkedin.com/in/yousfi-mohammed-189224311',
  email: 'myousfi610@gmail.com'
};

export const competences = [
  { niveau: 90, color: 'from-blue-500 to-cyan-500' },
  { niveau: 75, color: 'from-purple-500 to-pink-500' },
  { niveau: 85, color: 'from-green-500 to-emerald-500' },
  { niveau: 70, color: 'from-orange-500 to-yellow-500' },
  { niveau: 80, color: 'from-indigo-500 to-blue-500' },
  { niveau: 85, color: 'from-teal-500 to-cyan-500' }
];

export const projetsDetails = [
  { id: 1, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'beginner', demo: 'calculatrice' },
  { id: 2, technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'], difficulte: 'beginner', demo: 'todo' },
  { id: 3, technologies: ['HTML', 'CSS', 'JavaScript', 'Regex'], difficulte: 'intermediate', demo: 'contact' },
  { id: 4, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'intermediate', demo: 'gallery' },
  { id: 5, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'beginner', demo: 'clock' },
  { id: 6, technologies: ['HTML', 'CSS', 'JavaScript'], difficulte: 'intermediate', demo: 'quiz' }
];
