import React, { useState } from 'react';

export const ContactDemo = () => {
  const [form, setForm] = useState({ nom:'', email:'', message:'' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nom) e.nom='Nom requis';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email='Email invalide';
    if (form.message.length<10) e.message='Message trop court';
    setErrors(e);
    return Object.keys(e).length===0;
  };

  const submit = (ev) => { ev.preventDefault(); if(validate()) setSent(true); };

  if(sent) return <div className="p-6 bg-green-800 rounded-xl">Message envoyé ✅</div>;

  return (
    <form onSubmit={submit} className="p-6 bg-slate-800 rounded-xl space-y-3">
      <input placeholder="Nom" className="w-full p-2 bg-slate-900 rounded"
        onChange={e=>setForm({...form, nom:e.target.value})}/>
      {errors.nom && <p className="text-red-500">{errors.nom}</p>}

      <input placeholder="Email" className="w-full p-2 bg-slate-900 rounded"
        onChange={e=>setForm({...form, email:e.target.value})}/>
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <textarea placeholder="Message" className="w-full p-2 bg-slate-900 rounded"
        onChange={e=>setForm({...form, message:e.target.value})}/>
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <button className="w-full bg-blue-600 p-2 rounded">Envoyer</button>
    </form>
  );
};
