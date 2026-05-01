import React, { useState, useEffect } from 'react';
import { 
  Github, Mail, Phone, MapPin, ExternalLink, Download, Layout, Calculator, CheckSquare, Image, Clock, HelpCircle, ChevronDown, Menu, X, ArrowRight, BookOpen, Briefcase, Cpu, User, Send, ChevronRight, Globe, Server, Database, Wrench, Code, Users, Smartphone, Palette, BarChart3, Cloud, Lock, ShieldCheck, ShoppingBag
} from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const repoMap = {
  1: "calculatrice",
  2: "todo",
  3: "contact",
  4: "gallery",
  5: "clock",
  6: "quiz",
  7: "souk",
};

/* ================= DEMOS ================= */
export const CalculatriceDemo = ({ t }) => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const handleNumber = (num) => setDisplay(display === '0' ? num : display + num);
  const handleOperation = (op) => { setOperation(op); setPreviousValue(display); setDisplay('0'); };
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
    setDisplay(result.toString()); setOperation(''); setPreviousValue('');
  };
  const clear = () => { setDisplay('0'); setOperation(''); setPreviousValue(''); };

  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-xs mx-auto">
      <div className="bg-white p-4 rounded-xl border border-slate-200 mb-4 text-right text-2xl font-mono h-16 flex items-center justify-end">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map(btn => (
          <button key={btn} onClick={() => {
            if (btn === 'C') clear();
            else if (['+','-','×','÷'].includes(btn)) handleOperation(btn);
            else handleNumber(btn);
          }} className="p-3 bg-white border border-slate-200 rounded hover:bg-slate-100 font-bold">{btn}</button>
        ))}
        <button onClick={calculate} className="col-span-4 p-3 bg-blue-600 text-white rounded font-bold">=</button>
      </div>
    </div>
  );
};

export const TodoDemo = ({ t }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => { if (newTask.trim()) { setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]); setNewTask(''); } };
  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input value={newTask} onChange={e => setNewTask(e.target.value)} className="flex-1 p-2 border border-slate-200 rounded" placeholder="New task..." />
        <button onClick={addTask} className="px-4 py-2 bg-blue-600 text-white rounded font-bold">+</button>
      </div>
      <div className="space-y-2">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center gap-2 p-2 bg-white border border-slate-100 rounded">
            <input type="checkbox" checked={task.done} onChange={() => setTasks(tasks.map(tk => tk.id === task.id ? { ...tk, done: !tk.done } : tk))} />
            <span className={task.done ? 'line-through text-slate-400' : ''}>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SoukOverview = ({ t }) => {
  const stats = [
    { label: "Vendeurs", value: '50+', icon: Users, color: 'text-blue-600' },
    { label: "Produits", value: '1.2k+', icon: Layout, color: 'text-blue-600' },
    { label: "Sécurité", value: 'RBAC', icon: Lock, color: 'text-blue-600' },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl text-center">
          <s.icon className={`mx-auto mb-2 ${s.color}`} size={24} />
          <div className="text-xl font-bold">{s.value}</div>
          <div className="text-xs text-slate-500 uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  );
};

const translations = {
  fr: {
    nav: ['Accueil', 'À Propos', 'Expérience', 'Compétences', 'Projets'],
    role: 'Stagiaire en Développement Digital - ISTA',
    downloadCV: 'Télécharger CV',
    aboutTitle: 'À Propos de Moi',
    aboutText1: "Étudiant motivé et passionné par l'informatique, je suis actuellement en formation de Technicien Spécialisé en Développement Informatique à l'ISTA Lazaret, Oujda.",
    aboutText2: "Mon parcours m'a permis de maîtriser les bases du développement web et de la gestion de projets. Je suis curieux, rigoureux et prêt à relever de nouveaux défis techniques.",
    address: 'Hay Samara1, Oujda',
    phoneNumber: '+212 716 288 974',
    email: 'myousfi610@gmail.com',
    skillsTitle: 'Compétences Techniques',
    skills: [
      { nom: 'Frontend', details: 'React.js, Tailwind CSS, HTML5/CSS3', icon: Layout },
      { nom: 'Backend', details: 'Laravel, Node.js, PHP', icon: Server },
      { nom: 'Bases de Données', details: 'MySQL, MongoDB', icon: Database },
      { nom: 'Programmation', details: 'JavaScript, Python', icon: Code },
      { nom: 'Outils', details: 'Git, GitHub, VS Code', icon: Wrench },
      { nom: 'Soft Skills', details: 'Travail en équipe, Agile', icon: Users }
    ],
    experienceTitle: 'Expérience Professionnelle',
    experiences: [
      {
        titre: 'Stage de fin de formation – ONEE',
        periode: '2024 (2 mois)',
        description: 'Développement d’une application de gestion de laboratoire et de suivi des équipements techniques. Utilisation de PHP/Laravel pour le backend.'
      },
      {
        titre: 'Projet SOUK SaaS',
        periode: '2024 - 2025',
        description: 'Création d’une marketplace multi-vendeurs avec gestion complète des stocks et des commandes.'
      }
    ],
    projectsTitle: 'Projets Réalisés',
    projects: [
      { id: 1, titre: 'Calculatrice', desc: 'Opérations mathématiques de base', details: 'Une calculatrice interactive développée en JavaScript.', tech: ['JS', 'CSS'] },
      { id: 2, titre: 'Todo List', desc: 'Gestionnaire de tâches', details: 'Application de productivité avec stockage local.', tech: ['React'] },
      { id: 7, titre: 'SOUK Platform', desc: 'E-commerce SaaS', details: 'Plateforme complète pour vendeurs et acheteurs.', tech: ['Laravel', 'React'] },
    ],
    formationTitle: 'Formation & Diplômes',
    formations: [
      { titre: 'Technicien Spécialisé en Développement Digital', etablissement: 'ISTA Lazaret, Oujda', periode: '2024 - 2026', description: 'Formation en cours.' },
      { titre: 'Baccalauréat Sciences Physiques', etablissement: 'Lycée Larbi al-Houssaini', periode: '2023 - 2024', description: 'Obtenu avec mention.' }
    ],
    details: 'Voir Détails',
    close: 'Fermer',
    rights: 'Tous droits réservés.'
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location]);

  const NavLink = ({ to, children }) => {
    const active = location.pathname === to;
    return (
      <Link to={to} className={`text-sm font-bold transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-500 hover:text-blue-600'}`}>
        {children}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600 no-underline">YM<span className="text-slate-900">.</span></Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <NavLink to="/">{t.nav[0]}</NavLink>
            <NavLink to="/about">{t.nav[1]}</NavLink>
            <NavLink to="/experience">{t.nav[2]}</NavLink>
            <NavLink to="/skills">{t.nav[3]}</NavLink>
            <NavLink to="/projects">{t.nav[4]}</NavLink>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-900">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[49] md:hidden flex flex-col p-10 pt-32 gap-8 animate-in slide-in-from-top duration-300">
          <Link to="/" className="text-3xl font-black text-slate-900 no-underline border-b border-slate-100 pb-4">{t.nav[0]}</Link>
          <Link to="/about" className="text-3xl font-black text-slate-900 no-underline border-b border-slate-100 pb-4">{t.nav[1]}</Link>
          <Link to="/experience" className="text-3xl font-black text-slate-900 no-underline border-b border-slate-100 pb-4">{t.nav[2]}</Link>
          <Link to="/skills" className="text-3xl font-black text-slate-900 no-underline border-b border-slate-100 pb-4">{t.nav[3]}</Link>
          <Link to="/projects" className="text-3xl font-black text-slate-900 no-underline border-b border-slate-100 pb-4">{t.nav[4]}</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20">
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <div className="fade-in">
              <section className="min-h-[80vh] flex items-center bg-slate-50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 tracking-wide uppercase">Portfolio 2024</span>
                    <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 text-slate-900 tracking-tighter">YOUSFI <br /><span className="text-blue-600">MOHAMMED</span></h1>
                    <p className="text-xl text-slate-500 font-medium max-w-lg mb-10 leading-relaxed">{t.role}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/projects" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all no-underline">Voir Mes Projets</Link>
                      <Link to="/about" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all no-underline">En Savoir Plus</Link>
                    </div>
                  </div>
                  <div className="relative hidden md:block">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                      <img src="/profile.jpeg" alt="Yousfi Mohammed" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-12">Me Contacter Directement</h2>
                  <div className="flex justify-center gap-12">
                    <a href={`mailto:${t.email}`} className="text-slate-900 hover:text-blue-600 transition-colors"><Mail size={40} /></a>
                    <a href="https://github.com/moha4848" className="text-slate-900 hover:text-blue-600 transition-colors"><Github size={40} /></a>
                  </div>
                </div>
              </section>
            </div>
          } />

          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <div className="py-24 fade-in">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-5xl font-black mb-12 tracking-tighter border-b border-slate-100 pb-8">{t.aboutTitle}</h2>
                <div className="space-y-8 text-xl text-slate-600 leading-relaxed">
                  <p className="bg-blue-50 p-8 rounded-3xl text-blue-900 font-medium italic border-l-8 border-blue-600">{t.aboutText1}</p>
                  <p>{t.aboutText2}</p>
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-black mb-12 tracking-tighter">{t.formationTitle}</h3>
                  <div className="space-y-10 border-l-2 border-slate-100 pl-8 ml-4">
                    {t.formations.map((f, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                        <h4 className="text-2xl font-bold mb-2">{f.titre}</h4>
                        <p className="text-blue-600 font-bold mb-3">{f.etablissement} • {f.periode}</p>
                        <p className="text-slate-500">{f.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          } />

          {/* EXPERIENCE PAGE */}
          <Route path="/experience" element={
            <div className="py-24 bg-slate-50 min-h-screen fade-in">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-5xl font-black mb-16 tracking-tighter text-center">{t.experienceTitle}</h2>
                <div className="space-y-16">
                  {t.experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all border-t-8 border-t-blue-600">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                        <h3 className="text-3xl font-bold text-slate-900 leading-tight">{exp.titre}</h3>
                        <span className="px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm whitespace-nowrap">{exp.periode}</span>
                      </div>
                      <p className="text-xl text-slate-600 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />

          {/* SKILLS PAGE */}
          <Route path="/skills" element={
            <div className="py-24 fade-in">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl font-black mb-16 tracking-tighter border-b border-slate-100 pb-8">{t.skillsTitle}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.skills.map((skill, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-blue-200 hover:-translate-y-2 transition-all">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                        <skill.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{skill.nom}</h3>
                      <p className="text-slate-500 font-medium mb-6">{skill.details}</p>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />

          {/* PROJECTS PAGE */}
          <Route path="/projects" element={
            <div className="py-24 bg-slate-50 min-h-screen fade-in">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-5xl font-black mb-16 tracking-tighter text-center">{t.projectsTitle}</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  {t.projects.map((p) => (
                    <div key={p.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
                      <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
                        {p.id === 1 && <Calculator size={100} strokeWidth={1} />}
                        {p.id === 2 && <CheckSquare size={100} strokeWidth={1} />}
                        {p.id === 7 && <Layout size={100} strokeWidth={1} />}
                      </div>
                      <div className="p-10">
                        <h3 className="text-3xl font-bold mb-4">{p.titre}</h3>
                        <p className="text-lg text-slate-500 mb-8 leading-relaxed">{p.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-10">
                          {p.tech.map(t => <span key={t} className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest">{t}</span>)}
                        </div>
                        <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                          <button onClick={() => setSelectedProject(p)} className="text-blue-600 font-black hover:underline tracking-tighter text-lg">{t.details}</button>
                          <a href={`https://github.com/moha4848/${repoMap[p.id]}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={24} /></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />
        </Routes>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[100] flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-3xl animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="p-12">
              <div className="flex justify-between items-start mb-10">
                <h2 className="text-4xl font-black tracking-tighter">{selectedProject.titre}</h2>
                <button onClick={() => setSelectedProject(null)} className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors"><X size={32} /></button>
              </div>
              
              <div className="mb-12">
                {selectedProject.id === 1 && <CalculatriceDemo t={t} />}
                {selectedProject.id === 2 && <TodoDemo t={t} />}
                {selectedProject.id === 7 && <SoukOverview t={t} />}
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-slate-400">Description</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{selectedProject.details}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-slate-400">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map(tc => <span key={tc} className="px-6 py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold">{tc}</span>)}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <a href={`https://github.com/moha4848/${repoMap[selectedProject.id]}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all no-underline">
                      <Github size={20} /> Repository GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-black text-slate-900">YM<span className="text-blue-600">.</span></div>
          <div className="flex gap-8 text-slate-400 font-bold uppercase text-xs tracking-widest">
            <Link to="/" className="hover:text-blue-600 no-underline">Accueil</Link>
            <Link to="/about" className="hover:text-blue-600 no-underline">About</Link>
            <Link to="/projects" className="hover:text-blue-600 no-underline">Projets</Link>
          </div>
          <div className="text-slate-400 text-sm font-medium">&copy; 2024. {t.rights}</div>
        </div>
      </footer>
    </div>
  );
}