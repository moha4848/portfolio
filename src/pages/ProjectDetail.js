import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Github, ArrowLeft, Calculator, CheckSquare, Layout, Users, Lock } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ——— Mini demos ——— */
const CalculatriceDemo = () => {
  const [display, setDisplay] = useState('0');
  const [op, setOp] = useState('');
  const [prev, setPrev] = useState('');
  const handleNum = n => setDisplay(display === '0' ? n : display + n);
  const handleOp = o => { setOp(o); setPrev(display); setDisplay('0'); };
  const calc = () => {
    const a = parseFloat(prev), b = parseFloat(display);
    const res = op === '+' ? a+b : op === '-' ? a-b : op === '×' ? a*b : b !== 0 ? a/b : 'Err';
    setDisplay(String(res)); setOp(''); setPrev('');
  };
  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-xs mx-auto">
      <div className="bg-white p-4 rounded-xl border mb-4 text-right text-2xl font-mono h-16 flex items-center justify-end">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map(b => (
          <button key={b} onClick={() => b==='C'?setDisplay('0'):['+','-','×','÷'].includes(b)?handleOp(b):handleNum(b)}
            className="p-3 bg-white border rounded hover:bg-slate-100 font-bold">{b}</button>
        ))}
        <button onClick={calc} className="col-span-4 p-3 bg-blue-600 text-white rounded font-bold">=</button>
      </div>
    </div>
  );
};

const TodoDemo = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: 'Apprendre React', done: true }]);
  const [input, setInput] = useState('');
  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Nouvelle tâche..." />
        <button onClick={()=>{if(input.trim()){setTasks([...tasks,{id:Date.now(),text:input,done:false}]);setInput('');}}} className="px-4 py-2 bg-blue-600 text-white rounded font-bold">+</button>
      </div>
      <div className="space-y-2">
        {tasks.map(t=>(
          <div key={t.id} className="flex items-center gap-3 p-3 bg-white border rounded-lg">
            <input type="checkbox" checked={t.done} onChange={()=>setTasks(tasks.map(tk=>tk.id===t.id?{...tk,done:!tk.done}:tk))} className="w-4 h-4 accent-blue-600"/>
            <span className={t.done?'line-through text-slate-400 flex-1':'flex-1'}>{t.text}</span>
            <button onClick={()=>setTasks(tasks.filter(tk=>tk.id!==t.id))} className="text-slate-300 hover:text-red-400 text-xs">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoukDemo = () => (
  <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
    {[{label:'Vendeurs',val:'50+',icon:Users},{label:'Produits',val:'1.2k+',icon:Layout},{label:'Sécurité',val:'RBAC',icon:Lock}].map((s,i)=>(
      <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl text-center">
        <s.icon className="mx-auto mb-3 text-blue-600" size={28}/>
        <div className="text-2xl font-black text-slate-900">{s.val}</div>
        <div className="text-xs text-slate-400 uppercase font-bold mt-1">{s.label}</div>
      </div>
    ))}
  </div>
);

const demoMap = { calculatrice: CalculatriceDemo, todo: TodoDemo, souk: SoukDemo };

export default function ProjectDetail() {
  const { id } = useParams();
  const { data } = usePortfolio();
  const project = data.projects.find(p => p.id === parseInt(id));

  if (!project) return <Navigate to="/projects" replace />;

  const Demo = demoMap[project.demo];

  return (
    <div className="fade-in">
      <Navbar />
      <main className="pt-20">
        <div className="py-24 bg-white min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back */}
            <Link to="/projects" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 mb-12 font-bold no-underline transition-colors">
              <ArrowLeft size={20} /> Retour aux projets
            </Link>

            {/* Header */}
            <div className="mb-16">
              <h1 className="text-6xl font-black mb-6 tracking-tighter">{project.titre}</h1>
              <p className="text-xl text-slate-500 mb-8 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Demo */}
            {Demo && (
              <div className="mb-20 p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8 text-center">
                  Démonstration Interactive
                </h2>
                <Demo />
              </div>
            )}

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Description</h2>
                <p className="text-xl text-slate-600 leading-relaxed">{project.details}</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-8">
                <div>
                  <p className="text-slate-400 text-xs mb-2 uppercase font-black tracking-wider">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-2 uppercase font-black tracking-wider">Repository</p>
                  <a
                    href={`https://github.com/moha4848/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all no-underline"
                  >
                    <Github size={20} /> Voir sur GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
