import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ton fichier CSS ou Tailwind
import App from './App';
import reportWebVitals from './reportWebVitals';

// Création du root React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances (optionnel)
reportWebVitals();
