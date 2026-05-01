import React, { useState } from 'react';
import { Users, Layout, Lock, Trash2 } from 'lucide-react';

export const CalculatriceDemo = () => {
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

export const TodoDemo = () => {
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
            <button onClick={() => setTasks(tasks.filter(tk => tk.id !== task.id))} className="ml-auto text-slate-300 hover:text-red-500"><Trash2 size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SoukOverview = () => {
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
