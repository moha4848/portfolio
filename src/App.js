import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AppRouter } from './app/AppRouter';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-600">
            {/* Global Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>

            <AppRouter />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;