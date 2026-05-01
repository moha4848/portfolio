import React, { useState } from 'react';
import { Trash2, Users, Layout, Lock } from 'lucide-react';

export const CalculatriceDemo = () => {
  const [display, setDisplay] = useState('0');
  const [op, setOp] = useState('');
  const [prev, setPrev] = useState('');

  const handleNum = (n) => setDisplay(display === '0' ? n : display + n);
  const handleOp = (o) => { setOp(o); setPrev(display); setDisplay('0'); };
  const calc = () => {
    const a = parseFloat(prev), b = parseFloat(display);
    const res = op === '+' ? a + b : op === '-' ? a - b : op === '×' ? a * b : op === '÷' && b !== 0 ? a / b : 'Error';
    setDisplay(String(res)); setOp(''); setPrev('');
  };
  const clear = () => { setDisplay('0'); setOp(''); setPrev(''); };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', background: 'white', border: '1px solid var(--border-color)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--card-shadow)' }}>
      <div style={{ background: 'var(--text-primary)', padding: '24px 20px 16px', textAlign: 'right' }}>
        <p style={{ color: '#475569', fontSize: '0.75rem', height: '18px', marginBottom: '4px' }}>{prev && `${prev} ${op}`}</p>
        <p style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.04em', fontFamily: 'monospace' }}>{display}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border-color)' }}>
        {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map(btn => (
          <button key={btn} onClick={() => {
            if (btn === 'C') clear();
            else if (['+','-','×','÷'].includes(btn)) handleOp(btn);
            else handleNum(btn);
          }} style={{ padding: '16px', background: ['+','-','×','÷'].includes(btn) ? '#eff6ff' : 'white', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '1rem', color: ['+','-','×','÷'].includes(btn) ? 'var(--accent-primary)' : btn === 'C' ? '#dc2626' : 'var(--text-primary)', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
            onMouseLeave={e => e.currentTarget.style.background = ['+','-','×','÷'].includes(btn) ? '#eff6ff' : 'white'}>
            {btn}
          </button>
        ))}
        <button onClick={calc} style={{ gridColumn: 'span 4', padding: '16px', background: 'var(--accent-primary)', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem', color: 'white', transition: 'background 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-primary)'}>
          =
        </button>
      </div>
    </div>
  );
};

export const TodoDemo = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: 'Exemple de tâche', done: false }]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <input value={newTask} onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          className="input-corp" style={{ flex: 1, paddingLeft: '16px' }} placeholder="Ajouter une tâche..." />
        <button onClick={addTask} className="btn-corp" style={{ padding: '12px 20px', flexShrink: 0 }}>+</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {tasks.map(task => (
          <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'white', border: '1px solid var(--border-color)', borderRadius: '12px', transition: 'all 0.2s' }}>
            <input type="checkbox" checked={task.done} onChange={() => setTasks(tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t))}
              style={{ accentColor: 'var(--accent-primary)', width: '16px', height: '16px', cursor: 'pointer' }} />
            <span style={{ flex: 1, fontWeight: 500, color: task.done ? '#94a3b8' : 'var(--text-primary)', textDecoration: task.done ? 'line-through' : 'none', fontSize: '0.95rem' }}>
              {task.text}
            </span>
            <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', transition: 'color 0.2s', padding: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#dc2626'}
              onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}>
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '12px', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textAlign: 'right' }}>
        {tasks.filter(t => t.done).length}/{tasks.length} terminées
      </p>
    </div>
  );
};

export const SoukOverview = () => {
  const stats = [
    { label: 'Vendeurs Actifs', value: '50+', icon: Users, color: 'var(--accent-primary)', bg: '#dbeafe' },
    { label: 'Produits Listés', value: '1.2k+', icon: Layout, color: '#059669', bg: '#d1fae5' },
    { label: 'Sécurité', value: 'RBAC', icon: Lock, color: '#7c3aed', bg: '#ede9fe' },
  ];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', textAlign: 'center', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ background: s.bg, width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: s.color }}>
              <s.icon size={22} />
            </div>
            <p style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>{s.value}</p>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '4px' }}>{s.label}</p>
          </div>
        ))}
      </div>
      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '16px 20px', textAlign: 'center' }}>
        <p style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600 }}>
          ⚡ Propulsé par Laravel (Clean Architecture) + React (Modular Design)
        </p>
      </div>
    </div>
  );
};
