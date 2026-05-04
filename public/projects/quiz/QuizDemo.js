import React, { useState } from 'react';

export const QuizDemo = () => {
  const questions=[
    {q:'Que signifie HTML ?', a:['HyperText Markup Language','High Tech Modern Language','Home Tool Markup Language'], c:0},
    {q:'Quel langage est utilisé pour le style ?', a:['JavaScript','CSS','Python'], c:1},
    {q:'Que signifie CSS ?', a:['Computer Style Sheets','Cascading Style Sheets','Creative Style System'], c:1}
  ];

  const [i,setI]=useState(0);
  const [score,setScore]=useState(0);
  const [answered,setAnswered]=useState(false);
  const [showResult,setShowResult]=useState(false);

  const answer=(index)=>{
    if(answered) return;
    setAnswered(true);
    if(index===questions[i].c) setScore(s=>s+1);
    setTimeout(()=>{
      if(i<questions.length-1) setI(i+1);
      else setShowResult(true);
      setAnswered(false);
    },1000);
  };

  const reset=()=>{setI(0); setScore(0); setShowResult(false); setAnswered(false);};

  if(showResult) return (
    <div className="p-6 bg-slate-800 rounded-xl text-center">
      <h2 className="text-xl mb-4 text-blue-400 font-bold">Quiz Terminé!</h2>
      <p className="text-green-400 text-3xl mb-4">{score} / {questions.length}</p>
      <button onClick={reset} className="bg-blue-600 p-2 rounded">Recommencer</button>
    </div>
  );

  return (
    <div className="p-6 bg-slate-800 rounded-xl">
      <h2 className="text-xl mb-4 text-blue-400 font-bold">Quiz</h2>
      <p className="mb-4 text-white">{questions[i].q}</p>
      {questions[i].a.map((opt,idx)=>(
        <button key={idx} onClick={()=>answer(idx)} className="block w-full p-2 mb-2 bg-slate-700 rounded text-white">{opt}</button>
      ))}
      <p className="mt-2 text-green-400">Score: {score}</p>
    </div>
  );
};
