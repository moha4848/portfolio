import React, { useState } from 'react';

export const CalculatriceDemo = () => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousValue, setPreviousValue] = useState('');

  const handleNumber = (num) => setDisplay(display === '0' ? num : display + num);

  const handleOperation = (op) => {
    setOperation(op);
    setPreviousValue(display);
    setDisplay('0');
  };

  const calculate = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result;
    switch (operation) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '×': result = prev * current; break;
      case '÷': result = current !== 0 ? prev / current : 'Erreur'; break;
      default: return;
    }
    setDisplay(result.toString());
    setOperation('');
    setPreviousValue('');
  };

  const clear = () => { setDisplay('0'); setOperation(''); setPreviousValue(''); };

  const handleButtonClick = (btn) => {
    if (btn === 'C') clear();
    else if (btn === '=') calculate();
    else if (['+','-','×','÷'].includes(btn)) handleOperation(btn);
    else if (btn === '.' && !display.includes('.')) setDisplay(display + '.');
    else handleNumber(btn);
  };

  return (
    <div className="p-6 bg-slate-800 rounded-xl">
      <div className="text-center text-xl mb-4 text-blue-400 font-bold">Calculatrice</div>
      <div className="bg-slate-900 p-4 rounded-lg">
        <div className="text-right text-green-400 text-3xl mb-4">{display}</div>
        <div className="grid grid-cols-4 gap-3">
          {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map(btn => (
            <button key={btn} onClick={() => handleButtonClick(btn)}
              className="h-12 bg-slate-700 rounded-lg hover:bg-slate-600">{btn}</button>
          ))}
          <button onClick={() => handleButtonClick('=')} className="col-span-4 h-12 bg-green-600 rounded-lg hover:bg-green-700">=</button>
        </div>
      </div>
    </div>
  );
};
