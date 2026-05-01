import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '../shared/components/Navbar';
import { Footer } from '../shared/components/Footer';

// Lazy loading features
const Home = lazy(() => import('../features/home'));
const About = lazy(() => import('../features/about'));
const Skills = lazy(() => import('../features/skills'));
const Projects = lazy(() => import('../features/projects'));
const Experience = lazy(() => import('../features/experience'));
const Contact = lazy(() => import('../features/contact'));
const Dashboard = lazy(() => import('../features/dashboard'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const AppRouter = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <Suspense fallback={<LoadingFallback />}>
      {!isDashboard && <Navbar />}
      <main className={!isDashboard ? "relative z-10" : "w-full h-screen"}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isDashboard && <Footer />}
    </Suspense>
  );
};
