import React from 'react';

export const CalculatriceDemo = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50">
    <div className="text-center text-2xl mb-4 font-bold text-blue-400">Calculatrice</div>
    <div className="bg-slate-900/80 p-4 rounded-lg">
      <div className="h-8 bg-slate-800 rounded mb-4 flex items-center justify-end px-3 text-xl">0</div>
      <div className="grid grid-cols-4 gap-3">
        {['7','8','9','+','4','5','6','-','1','2','3','×','C','0','=','÷'].map((btn) => (
          <div key={btn} className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 h-12 rounded-lg flex items-center justify-center hover:from-blue-800/40 hover:to-cyan-800/40 transition-all cursor-pointer">
            {btn}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TodoDemo = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50">
    <div className="text-center text-2xl mb-4 font-bold text-blue-400">To-Do List</div>
    <div className="space-y-3">
      <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span>Faire les courses</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-slate-600"></div>
          <span>Réviser React</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-slate-900/50 rounded-lg">
        <input type="text" placeholder="Ajouter une tâche..." className="bg-transparent flex-1 outline-none text-white placeholder:text-slate-400" />
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-1 rounded-lg text-sm">+</button>
      </div>
    </div>
  </div>
);

export const ContactDemo = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50">
    <div className="text-center text-2xl mb-4 font-bold text-blue-400">Contact Form</div>
    <div className="space-y-3">
      <input type="text" placeholder="Nom" className="w-full bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-white placeholder:text-slate-400" />
      <input type="email" placeholder="Email" className="w-full bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-white placeholder:text-slate-400" />
      <textarea placeholder="Message" rows="3" className="w-full bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-white placeholder:text-slate-400"></textarea>
      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
        Envoyer
      </button>
    </div>
  </div>
);

export const GalleryDemo = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50">
    <div className="text-center text-2xl mb-4 font-bold text-blue-400">Gallery</div>
    <div className="grid grid-cols-2 gap-3">
      {[1,2,3,4].map((i) => (
        <div key={i} className="bg-slate-900/80 aspect-square rounded-lg flex items-center justify-center">
          <div className="text-4xl">📷</div>
        </div>
      ))}
    </div>
  </div>
);

export const ClockDemo = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50">
    <div className="text-center text-2xl mb-4 font-bold text-blue-400">Digital Clock</div>
    <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-6 rounded-xl">
      <div className="text-4xl font-mono text-center mb-2 font-bold">14:30:45</div>
      <div className="text-center text-slate-300">Lundi 15 Décembre 2025</div>
    </div>
  </div>
);

export const QuizDemo = () => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/50">
    <div className="text-center text-2xl mb-4 font-bold text-blue-400">Quiz</div>
    <div className="space-y-4">
      <div className="bg-slate-900/80 p-4 rounded-lg">
        <div className="font-semibold mb-3">Question 1/5</div>
        <div className="text-lg mb-4">Quel langage est utilisé pour le style web ?</div>
        <div className="space-y-2">
          {['HTML', 'CSS', 'JavaScript', 'Python'].map((opt, i) => (
            <div key={i} className={`p-3 rounded-lg ${i === 1 ? 'bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30' : 'bg-slate-800/50'}`}>
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
