import React, { useState } from 'react';

const ContactDemo = () => {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!form.email.includes('@')) newErrors.email = 'Email invalide';
    if (form.message.length < 10) newErrors.message = 'Message trop court (min 10 caractères)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message envoyé avec succès! ✓');
      setForm({ nom: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md w-full space-y-4 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Contactez-moi</h2>
      <input
        type="text"
        placeholder="Votre nom"
        value={form.nom}
        onChange={(e) => setForm({ ...form, nom: e.target.value })}
        className={`w-full bg-slate-700 border ${errors.nom ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500`}
      />
      {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}

      <input
        type="email"
        placeholder="Votre email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={`w-full bg-slate-700 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <textarea
        placeholder="Votre message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows="4"
        className={`w-full bg-slate-700 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500`}
      ></textarea>
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition-colors"
      >
        Envoyer le Message
      </button>
    </div>
  );
};

export default ContactDemo;
