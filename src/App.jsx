import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from '@components/layout/Navbar';
import ScrollProgress from '@components/ui/ScrollProgress';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Skills from '@components/sections/Skills';
import Projects from '@components/sections/Projects';
import Contact from '@components/ui/Contact';
import Footer from '@components/layout/Footer';

// Hooks
import { useTheme } from '@hooks/useTheme';
import { useScrollSpy } from '@hooks/useScrollSpy';

// Utils
import { pageTransition } from '@utils/animations';


function App() {
  const { isDark } = useTheme();
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'projects', 'contact']);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      {/* Global Components */}
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? '#1f2937' : '#ffffff',
            color: isDark ? '#ffffff' : '#111827',
            border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
          },
        }}
      />

      {/* Main Content */}
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="relative"
      >
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;