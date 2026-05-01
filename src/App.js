import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [lang, setLang] = useState('fr');
  const isRTL = lang === 'ar';

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          * {
            font-family: 'Inter', sans-serif;
          }
          
          .emoji-flag {
            font-family: 'Noto Color Emoji', 'Segoe UI Emoji', sans-serif;
            font-size: 1.5rem;
            line-height: 1;
          }
          
          .gradient-border {
            position: relative;
          }
          
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(45deg, #3b82f6, #06b6d4);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
        `}</style>
        
        <Navbar lang={lang} setLang={setLang} />
        
        <main className="flex-1 mt-16">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/skills" element={<Skills lang={lang} />} />
            <Route path="/experience" element={<Experience lang={lang} />} />
            <Route path="/projects" element={<Projects lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;