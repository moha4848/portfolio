import React, { useState } from 'react';

const CalculatriceDemo = () => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const handleNumber = (num) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const handleOperation = (op) => {
    setOperation(op);
    setPreviousValue(display);
    setDisplay('0');
  };

  const calculate = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '×': result = prev * current; break;
      case '÷': result = prev / current; break;
      default: return;
    }

    setDisplay(result.toString());
    setOperation('');
    setPreviousValue('');
  };

  const clear = () => {
    setDisplay('0');
    setOperation('');
    setPreviousValue('');
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-slate-950 p-6 rounded-lg mb-4">
        <div className="text-right text-4xl font-mono text-green-400 mb-2 h-12 overflow-hidden">
          {display}
        </div>
        <div className="text-right text-sm text-slate-500">
          {previousValue} {operation}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <button onClick={clear} className="col-span-2 bg-red-600 hover:bg-red-700 p-4 rounded-lg font-bold text-lg">C</button>
        <button onClick={() => handleOperation('÷')} className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold text-lg">÷</button>
        <button onClick={() => handleOperation('×')} className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold text-lg">×</button>

        {[7, 8, 9].map(n => (
          <button key={n} onClick={() => handleNumber(n.toString())} className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg font-bold text-lg">{n}</button>
        ))}
        <button onClick={() => handleOperation('-')} className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold text-lg">-</button>

        {[4, 5, 6].map(n => (
          <button key={n} onClick={() => handleNumber(n.toString())} className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg font-bold text-lg">{n}</button>
        ))}
        <button onClick={() => handleOperation('+')} className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold text-lg">+</button>

        {[1, 2, 3].map(n => (
          <button key={n} onClick={() => handleNumber(n.toString())} className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg font-bold text-lg">{n}</button>
        ))}
        <button onClick={calculate} className="row-span-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-lg">=</button>

        <button onClick={() => handleNumber('0')} className="col-span-2 bg-slate-700 hover:bg-slate-600 p-4 rounded-lg font-bold text-lg">0</button>
        <button onClick={() => handleNumber('.')} className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg font-bold text-lg">.</button>
      </div>
    </div>
  );
};

export default CalculatriceDemo;