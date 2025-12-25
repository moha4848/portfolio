import React, { useState, useEffect } from 'react';

const ClockDemo = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="bg-slate-950 rounded-lg p-8 inline-block">
        <div className="text-6xl font-mono font-bold text-green-400 mb-4">
          {time.toLocaleTimeString('fr-FR')}
        </div>
        <div className="text-2xl text-slate-400">
          {time.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default ClockDemo;