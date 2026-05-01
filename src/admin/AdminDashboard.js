import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard, FileText, Briefcase, Code2, User, LogOut,
  Save, Plus, Trash2, Edit3, Eye, ChevronRight, X, Check
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const NAV = [
  { id: 'overview', label: 'Vue Générale', icon: LayoutDashboard },
  { id: 'profile', label: 'Mon Profil', icon: User },
  { id: 'experience', label: 'Expériences', icon: Briefcase },
  { id: 'projects', label: 'Projets', icon: Code2 },
  { id: 'formation', label: 'Formation', icon: FileText },
];

/* ─── Toast ─── */
function Toast({ msg, onDone }) {
  setTimeout(onDone, 2500);
  return (
    <div className="fixed bottom-8 right-8 z-[999] flex items-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-2xl shadow-2xl text-sm font-bold">
      <Check size={18} className="text-green-400" /> {msg}
    </div>
  );
}

/* ─── Section: Overview ─── */
function Overview({ data }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black mb-2">Bonjour 👋</h2>
        <p className="text-slate-500">Voici un aperçu de ton portfolio.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Projets', val: data.projects.length, color: 'bg-blue-50 text-blue-600' },
          { label: 'Expériences', val: data.experiences.length, color: 'bg-green-50 text-green-600' },
          { label: 'Compétences', val: data.skills.length, color: 'bg-purple-50 text-purple-600' },
          { label: 'Formations', val: data.formations.length, color: 'bg-orange-50 text-orange-600' },
        ].map((s, i) => (
          <div key={i} className={`p-6 rounded-3xl ${s.color}`}>
            <div className="text-4xl font-black mb-1">{s.val}</div>
            <div className="text-sm font-bold uppercase tracking-wider opacity-70">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
        <h3 className="font-black text-slate-400 text-xs uppercase tracking-widest mb-4">Aperçu du site public</h3>
        <div className="flex gap-4 flex-wrap">
          {['/','about','experience','skills','projects'].map(p => (
            <a key={p} href={`https://ym-webfolio.netlify.app/${p}`} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all no-underline">
              <Eye size={14} /> /{p}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section: Profile ─── */
function ProfileSection({ data, updateData }) {
  const [form, setForm] = useState({
    name: data.name, role: data.role,
    email: data.email, phone: data.phone,
    address: data.address, github: data.github,
    bio1: data.bio1, bio2: data.bio2,
  });
  const [toast, setToast] = useState(false);

  const save = () => { updateData(form); setToast(true); };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black">Mon Profil</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { key: 'name', label: 'Nom complet' },
          { key: 'role', label: 'Titre / Rôle' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Téléphone' },
          { key: 'address', label: 'Adresse' },
          { key: 'github', label: 'GitHub URL' },
        ].map(f => (
          <div key={f.key}>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{f.label}</label>
            <input
              value={form[f.key]}
              onChange={e => setForm({ ...form, [f.key]: e.target.value })}
              className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </div>
        ))}
      </div>
      {['bio1', 'bio2'].map((k, i) => (
        <div key={k}>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Bio {i + 1}</label>
          <textarea
            value={form[k]}
            onChange={e => setForm({ ...form, [k]: e.target.value })}
            rows={4}
            className="w-full px-5 py-3.5 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 resize-none"
          />
        </div>
      ))}
      <button onClick={save} className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
        <Save size={18} /> Sauvegarder
      </button>
      {toast && <Toast msg="Profil sauvegardé ✓" onDone={() => setToast(false)} />}
    </div>
  );
}

/* ─── Section: Experience ─── */
function ExperienceSection({ data, updateData }) {
  const [items, setItems] = useState(data.experiences);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState(false);

  const save = () => { updateData({ experiences: items }); setToast(true); };
  const del = i => setItems(items.filter((_, idx) => idx !== i));
  const add = () => setItems([...items, { titre: 'Nouveau poste', periode: '2024', description: 'Description...' }]);
  const update = (i, key, val) => setItems(items.map((it, idx) => idx === i ? { ...it, [key]: val } : it));

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">Expériences</h2>
        <button onClick={add} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">
          <Plus size={18} /> Ajouter
        </button>
      </div>
      <div className="space-y-6">
        {items.map((exp, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            {editing === i ? (
              <div className="space-y-4">
                <input value={exp.titre} onChange={e => update(i, 'titre', e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl font-bold text-lg focus:outline-none focus:border-blue-400" placeholder="Titre" />
                <input value={exp.periode} onChange={e => update(i, 'periode', e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-400" placeholder="Période" />
                <textarea value={exp.description} onChange={e => update(i, 'description', e.target.value)} rows={3}
                  className="w-full px-4 py-3 border rounded-xl resize-none focus:outline-none focus:border-blue-400" placeholder="Description" />
                <button onClick={() => setEditing(null)} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">OK</button>
              </div>
            ) : (
              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.titre}</h3>
                  <span className="text-blue-600 font-bold text-sm">{exp.periode}</span>
                  <p className="text-slate-500 mt-2">{exp.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => setEditing(i)} className="p-2.5 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"><Edit3 size={18} /></button>
                  <button onClick={() => del(i)} className="p-2.5 bg-slate-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={save} className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
        <Save size={18} /> Sauvegarder
      </button>
      {toast && <Toast msg="Expériences sauvegardées ✓" onDone={() => setToast(false)} />}
    </div>
  );
}

/* ─── Section: Projects ─── */
function ProjectsSection({ data, updateData }) {
  const [items, setItems] = useState(data.projects);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState(false);

  const save = () => { updateData({ projects: items }); setToast(true); };
  const del = id => setItems(items.filter(p => p.id !== id));
  const update = (id, key, val) => setItems(items.map(p => p.id === id ? { ...p, [key]: val } : p));
  const add = () => {
    const id = Math.max(...items.map(p => p.id), 0) + 1;
    setItems([...items, { id, titre: 'Nouveau Projet', desc: 'Description courte', details: 'Détails...', tech: ['JS'], demo: '', repo: '' }]);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">Projets</h2>
        <button onClick={add} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">
          <Plus size={18} /> Ajouter
        </button>
      </div>
      <div className="space-y-6">
        {items.map(p => (
          <div key={p.id} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            {editing === p.id ? (
              <div className="space-y-4">
                <input value={p.titre} onChange={e => update(p.id, 'titre', e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl font-bold text-lg focus:outline-none focus:border-blue-400" />
                <input value={p.desc} onChange={e => update(p.id, 'desc', e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-400" placeholder="Description courte" />
                <textarea value={p.details} onChange={e => update(p.id, 'details', e.target.value)} rows={3}
                  className="w-full px-4 py-3 border rounded-xl resize-none focus:outline-none focus:border-blue-400" placeholder="Détails complets" />
                <input value={p.tech.join(', ')} onChange={e => update(p.id, 'tech', e.target.value.split(',').map(t => t.trim()))}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-400" placeholder="Technologies (séparées par virgule)" />
                <input value={p.repo} onChange={e => update(p.id, 'repo', e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-400" placeholder="Nom du repo GitHub" />
                <button onClick={() => setEditing(null)} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">OK</button>
              </div>
            ) : (
              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{p.titre}</h3>
                  <p className="text-slate-500 mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">{t}</span>)}
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => setEditing(p.id)} className="p-2.5 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"><Edit3 size={18} /></button>
                  <button onClick={() => del(p.id)} className="p-2.5 bg-slate-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={save} className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
        <Save size={18} /> Sauvegarder
      </button>
      {toast && <Toast msg="Projets sauvegardés ✓" onDone={() => setToast(false)} />}
    </div>
  );
}

/* ─── Section: Formation ─── */
function FormationSection({ data, updateData }) {
  const [items, setItems] = useState(data.formations);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState(false);

  const save = () => { updateData({ formations: items }); setToast(true); };
  const del = i => setItems(items.filter((_, idx) => idx !== i));
  const add = () => setItems([...items, { titre: 'Nouvelle formation', etablissement: 'École', periode: '2024', description: '' }]);
  const update = (i, key, val) => setItems(items.map((it, idx) => idx === i ? { ...it, [key]: val } : it));

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">Formation</h2>
        <button onClick={add} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">
          <Plus size={18} /> Ajouter
        </button>
      </div>
      <div className="space-y-6">
        {items.map((f, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            {editing === i ? (
              <div className="space-y-4">
                {['titre', 'etablissement', 'periode', 'description'].map(k => (
                  <input key={k} value={f[k]} onChange={e => update(i, k, e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-400" placeholder={k} />
                ))}
                <button onClick={() => setEditing(null)} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">OK</button>
              </div>
            ) : (
              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{f.titre}</h3>
                  <p className="text-blue-600 font-bold text-sm">{f.etablissement} • {f.periode}</p>
                  <p className="text-slate-500 mt-2">{f.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => setEditing(i)} className="p-2.5 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"><Edit3 size={18} /></button>
                  <button onClick={() => del(i)} className="p-2.5 bg-slate-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={save} className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
        <Save size={18} /> Sauvegarder
      </button>
      {toast && <Toast msg="Formation sauvegardée ✓" onDone={() => setToast(false)} />}
    </div>
  );
}

/* ─── Main Dashboard ─── */
export default function AdminDashboard({ onLogout }) {
  const { data, updateData } = usePortfolio();
  const [active, setActive] = useState('overview');

  if (sessionStorage.getItem('admin_auth') !== '1') return <Navigate to="/admin" replace />;

  const logout = () => { sessionStorage.removeItem('admin_auth'); onLogout(); };

  const sections = { overview: Overview, profile: ProfileSection, experience: ExperienceSection, projects: ProjectsSection, formation: FormationSection };
  const Section = sections[active];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col py-8 px-6 fixed h-full z-10">
        <div className="mb-10">
          <div className="text-2xl font-black text-blue-600">YM<span className="text-slate-900">.</span></div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Admin Panel</div>
        </div>

        <nav className="flex-1 space-y-2">
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all text-left ${
                active === n.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <n.icon size={18} /> {n.label}
              {active === n.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <a
            href="https://ym-webfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all no-underline"
          >
            <Eye size={18} /> Voir le site
          </a>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm text-red-400 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut size={18} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-72 p-12">
        <Section data={data} updateData={updateData} />
      </main>
    </div>
  );
}
