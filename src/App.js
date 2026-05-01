import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

// Admin (hidden from public)
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(
    () => sessionStorage.getItem('admin_auth') === '1'
  );

  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          {/* ── Public routes ── */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* ── Admin routes (not linked anywhere public) ── */}
          <Route path="/admin" element={<AdminLogin onLogin={() => setIsAdmin(true)} />} />
          <Route path="/admin/dashboard" element={<AdminDashboard onLogout={() => setIsAdmin(false)} />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}

export default App;