import React, { useState } from 'react';

const QuizDemo = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      q: 'Que signifie HTML?',
      options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'],
      correct: 0
    },
    {
      q: 'Quel langage est utilisé pour le style?',
      options: ['JavaScript', 'CSS', 'Python'],
      correct: 1
    },
    {
      q: 'Que signifie CSS?',
      options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System'],
      correct: 1
    }
  ];

  const handleAnswer = (index) => {
    if (answered) return;

    setAnswered(true);
    if (index === questions[current].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  if (showResult) {
    return (
      <div className="text-center">
        <div className="bg-slate-950 rounded-lg p-8">
          <h3 className="text-4xl font-bold mb-4">Quiz Terminé!</h3>
          <div className="text-6xl font-bold text-green-400 mb-4">
            {score} / {questions.length}
          </div>
          <p className="text-xl text-slate-400 mb-6">
            {score === questions.length ? 'Parfait! 🎉' : score >= questions.length / 2 ? 'Bien joué! 👍' : 'Continue à apprendre! 📚'}
          </p>
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 text-center text-slate-400">
        Question {current + 1} / {questions.length}
      </div>
      <div className="bg-slate-950 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">{questions[current].q}</h3>
        <div className="space-y-3">
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                answered
                  ? index === questions[current].correct
                    ? 'bg-green-600'
                    : 'bg-slate-800'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDemo;