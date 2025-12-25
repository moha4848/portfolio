import React, { useState } from 'react';
import { Trash2, Check } from '../ui/Icons';

const TodoDemo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Apprendre HTML/CSS', done: true },
    { id: 2, text: 'Créer un portfolio', done: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Nouvelle tâche..."
          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg font-semibold"
        >
          Ajouter
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <div
            key={task.id}
            className="flex items-center gap-3 bg-slate-950 p-4 rounded-lg"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                task.done ? 'bg-green-600 border-green-600' : 'border-slate-600'
              }`}
            >
              {task.done && <Check size={16} />}
            </button>
            <span className={`flex-1 ${task.done ? 'line-through text-slate-500' : ''}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-400"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-slate-400">
        {tasks.filter(t => !t.done).length} tâche(s) restante(s)
      </div>
    </div>
  );
};

export default TodoDemo;