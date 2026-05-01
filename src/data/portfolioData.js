export const portfolioData = {
  profile: {
    fr: {
      name: "Yousfi Mohammed",
      title: "Stagiaire en Développement Digital - ISTA",
      description: "Étudiant motivé et passionné par l'informatique, je suis actuellement en formation de Technicien Spécialisé en Développement Informatique à l'ISTA Oujda. Ma formation m'a permis d'acquérir des compétences solides en développement full-stack, conception logicielle et gestion de bases de données. Je suis à la recherche de défis innovants pour mettre à profit ma créativité et ma rigueur technique.",
      about: "Je suis un développeur passionné par la création de solutions web modernes et performantes. Mon approche combine une solide base technique avec une curiosité constante pour les nouvelles technologies. J'aime résoudre des problèmes complexes et transformer des idées en produits fonctionnels.",
      softSkills: ["Communication", "Travail d'équipe", "Rigueur", "Autonomie", "Adaptabilité", "Créativité"],
      role: "Développeur Full-Stack Passionné",
      downloadCV: "Télécharger CV",
      contactMe: "Me Contacter",
    },
    en: {
      name: "Yousfi Mohammed",
      title: "Digital Development Intern - ISTA",
      description: "Motivated and passionate IT student, currently training as a Specialized Technician in Computer Development at ISTA Oujda. My training has allowed me to acquire solid skills in full-stack development, software design, and database management. I am looking for innovative challenges to use my creativity and technical rigor.",
      about: "I am a developer passionate about creating modern and efficient web solutions. My approach combines a solid technical base with a constant curiosity for new technologies. I love solving complex problems and turning ideas into functional products.",
      softSkills: ["Communication", "Teamwork", "Rigor", "Autonomy", "Adaptability", "Creativity"],
      role: "Passionate Full-Stack Developer",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    ar: {
      name: "يوسفي محمد",
      title: "متدرب في التطوير الرقمي - ISTA",
      description: "طالب طموح وشغوف بمجال المعلوميات، أتابع حالياً تكويني كتقني متخصص في تطوير الحاسوب بمعهد ISTA وجدة. مكنني هذا التكوين من اكتساب مهارات قوية في تطوير الويب الكامل، تصميم البرمجيات وإدارة قواعد البيانات. أبحث عن تحديات مبتكرة لاستثمار إبداعي ودقتي التقنية.",
      about: "أنا مطور شغوف بإنشاء حلول ويب حديثة وفعالة. يجمع نهجي بين قاعدة تقنية صلبة وفضول مستمر للتقنيات الجديدة. أحب حل المشكلات المعقدة وتحويل الأفكار إلى منتجات وظيفية.",
      softSkills: ["التواصل", "العمل الجماعي", "الدقة", "الاستقلالية", "القدرة على التكيف", "الإبداع"],
      role: "مطور ويب شغوف",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
    },
    es: {
      name: "Yousfi Mohammed",
      title: "Pasante de Desarrollo Digital - ISTA",
      description: "Estudiante de TI motivado y apasionado, actualmente en formación como Técnico Especializado en Desarrollo Informático en ISTA Oujda. Mi formación me ha permitido adquirir sólidas habilidades en desarrollo full-stack, diseño de software y gestión de bases de datos. Busco desafíos innovadores para utilizar mi creatividad y rigor técnico.",
      about: "Soy un desarrollador apasionado por crear soluciones web modernas y eficientes. Mi enfoque combina una sólida base técnica con una curiosidad constante por las nuevas tecnologías. Me encanta resolver problemas complejos y transformar ideas en productos funcionales.",
      softSkills: ["Comunicación", "Trabajo en equipo", "Rigor", "Autonomía", "Adaptabilidad", "Creatividad"],
      role: "Desarrollador Full-Stack Apasionado",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame",
    }
  },
  social: [
    { name: "GitHub", url: "https://github.com/moha4848", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yousfi-mohammed-189224311", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/moh_y48?igsh=aTBxbzg0YTlzM2Jz", icon: "Instagram" },
    { name: "Email", url: "mailto:myousfi610@gmail.com", icon: "Mail" }
  ],
  skills: [
    { name: "Frontend", details: "HTML, CSS, JavaScript, React", level: 90, icon: "Globe", category: "frontend" },
    { name: "Backend", details: "PHP, Laravel, Node.js", level: 80, icon: "Server", category: "backend" },
    { name: "Database", details: "MySQL, MongoDB", level: 85, icon: "Database", category: "backend" },
    { name: "Tools", details: "Git, GitHub, Postman, VS Code", level: 80, icon: "Wrench", category: "tools" },
    { name: "Other", details: "API Integration, Responsive Design", level: 85, icon: "Layers", category: "general" }
  ],
  projects: [
    {
      id: "souk-saas",
      title: "SOUK SaaS Platform",
      description: {
        fr: "Plateforme marketplace multi-tenant construite avec Laravel et React.",
        en: "Multi-tenant marketplace platform built with Laravel and React.",
        ar: "منصة سوق إلكتروني متعدد المتاجر مبنية باستخدام Laravel و React.",
        es: "Plataforma de mercado multitienda construida con Laravel y React."
      },
      tech: ["Laravel", "React", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/moha4848/souk",
      category: "Full-Stack",
      featured: true
    },
    {
      id: "calculator",
      title: "Modern Calculator",
      description: {
        fr: "Une calculatrice interactive avec un design moderne et responsive.",
        en: "An interactive calculator with a modern and responsive design.",
        ar: "آلة حاسبة تفاعلية بتصميم حديث ومتجاوب.",
        es: "Una calculadora interactiva con un diseño moderno y responsive."
      },
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/moha4848/calculator",
      category: "Frontend"
    },
    {
      id: "todo-list",
      title: "Smart Task Manager",
      description: {
        fr: "Application de gestion de tâches avec stockage local et interface intuitive.",
        en: "Task management application with local storage and intuitive interface.",
        ar: "تطبيق إدارة المهام مع تخزين محلي وواجهة سهلة الاستخدام.",
        es: "Aplicación de gestión de tareas con almacenamiento local e interfaz intuitiva."
      },
      tech: ["React", "LocalStorage", "Tailwind CSS"],
      github: "https://github.com/moha4848/todo",
      category: "Frontend"
    }
  ],
  experience: [
    {
      fr: { title: "Projet SOUK SaaS Platform", place: "Projet Personnel", period: "2024", desc: "Développement d’une plateforme SaaS multi-tenant de type marketplace (Laravel + React)." },
      en: { title: "SOUK SaaS Platform Project", place: "Personal Project", period: "2024", desc: "Development of a multi-tenant SaaS marketplace platform (Laravel + React)." },
      ar: { title: "مشروع منصة SOUK SaaS", place: "مشروع شخصي", period: "2024", desc: "تطوير منصة SaaS متعددة المتاجر من نوع marketplace (Laravel + React)." },
      es: { title: "Proyecto Plataforma SOUK SaaS", place: "Proyecto Personal", period: "2024", desc: "Desarrollo de una plataforma SaaS multitienda tipo marketplace (Laravel + React)." }
    },
    {
      fr: { title: "Stage – ONEE", place: "Office National de l'Électricité et de l'Eau Potable", period: "2024", desc: "Développement d’une application de gestion de laboratoire et de suivi des équipements techniques." },
      en: { title: "Internship – ONEE", place: "National Office of Electricity and Drinking Water", period: "2024", desc: "Development of a laboratory management application and tracking of technical equipment." },
      ar: { title: "تدريب – ONEE", place: "المكتب الوطني للكهرباء والماء الصالح للشرب", period: "2024", desc: "تطوير تطبيق لإدارة المختبرات وتتبع المعدات التقنية." },
      es: { title: "Pasantía – ONEE", place: "Oficina Nacional de Electricidad y Agua Potable", period: "2024", desc: "Desarrollo de una aplicación de gestión de laboratorios y seguimiento de equipos técnicos." }
    }
  ],
  education: [
    {
      fr: { title: "Technicien Spécialisé en Développement Digital", place: "ISTA Lazaret, Oujda", period: "2024 - 2026", desc: "Formation complète en développement web (DEVOWSF)" },
      en: { title: "Specialized Technician in Digital Development", place: "ISTA Lazaret, Oujda", period: "2024 - 2026", desc: "Complete training in web development (DEVOWSF)" },
      ar: { title: "تقني متخصص في التطوير الرقمي", place: "معهد ISTA لازاريت، وجدة", period: "2024 - 2026", desc: "تكوين كامل في تطوير الويب (DEVOWSF)" },
      es: { title: "Técnico Especializado en Desarrollo Digital", place: "ISTA Lazaret, Oujda", period: "2024 - 2026", desc: "Formación completa en desarrollo web (DEVOWSF)" }
    },
    {
      fr: { title: "Baccalauréat Sciences Physiques", place: "Lycée Larbi al-Houssaini", period: "2023 - 2024", desc: "Option Sciences Physiques" },
      en: { title: "Physics Sciences Baccalaureate", place: "Larbi al-Houssaini High School", period: "2023 - 2024", desc: "Physics Sciences option" },
      ar: { title: "بكالوريا العلوم الفيزيائية", place: "ثانوية العربي الحسيني", period: "2023 - 2024", desc: "شعبة العلوم الفيزيائية" },
      es: { title: "Bachillerato en Ciencias Físicas", place: "Instituto Larbi al-Houssaini", period: "2023 - 2024", desc: "Opción de Ciencias Físicas" }
    }
  ],
  nav: {
    fr: { home: "Accueil", about: "À propos", skills: "Compétences", projects: "Projets", experience: "Formation", contact: "Contact", dashboard: "Tableau de Bord" },
    en: { home: "Home", about: "About", skills: "Skills", projects: "Projects", experience: "Experience & Education", contact: "Contact", dashboard: "Dashboard" },
    ar: { home: "الرئيسية", about: "حول", skills: "المهارات", projects: "المشاريع", experience: "الخبرة والتعليم", contact: "اتصل بنا", dashboard: "لوحة التحكم" },
    es: { home: "Inicio", about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", experience: "Experiencia y Formación", contact: "Contacto", dashboard: "Panel de Control" }
  },
  common: {
    fr: { viewProject: "Voir le projet", github: "GitHub", details: "Détails", send: "Envoyer", name: "Nom", email: "Email", message: "Message" },
    en: { viewProject: "View Project", github: "GitHub", details: "Details", send: "Send", name: "Name", email: "Email", message: "Message" },
    ar: { viewProject: "عرض المشروع", github: "جيت هاب", details: "التفاصيل", send: "إرسال", name: "الاسم", email: "الإيميل", message: "الرسالة" },
    es: { viewProject: "Ver proyecto", github: "GitHub", details: "Detalles", send: "Enviar", name: "Nombre", email: "Email", message: "Mensaje" }
  }
};

export const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];
