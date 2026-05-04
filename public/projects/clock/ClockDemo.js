import React, { useState, useEffect } from 'react';

export const ClockDemo = () => {
  const [time, setTime] = useState(new Date());
  useEffect(()=>{
    const i=setInterval(()=>setTime(new Date()),1000);
    return ()=>clearInterval(i);
  },[]);
  return (
    <div className="p-6 bg-slate-800 rounded-xl text-center">
      <div className="text-4xl text-green-400 font-mono">{time.toLocaleTimeString()}</div>
      <div className="text-slate-300">{time.toLocaleDateString()}</div>
    </div>
  );
};
