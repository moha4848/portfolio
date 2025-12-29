import React, { useState } from 'react';
import { Trash2, Check } from 'lucide-react';

export const TodoDemo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="p-6 bg-slate-800 rounded-xl">
      <h2 className="text-center text-xl mb-4 text-blue-400 font-bold">Todo List</h2>
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between bg-slate-700 p-2 mb-2 rounded">
          <span onClick={() => toggleTask(task.id)} className={task.done ? 'line-through cursor-pointer' : 'cursor-pointer'}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}><Trash2 size={18} /></button>
        </div>
      ))}
      <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTask()}
        className="w-full p-2 mt-2 bg-slate-900 rounded" placeholder="Nouvelle tâche"/>
    </div>
  );
};
