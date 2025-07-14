import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
// import Experience from './pages/Experience'; // Uncomment if you want to add Experience section

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  // Custom cursor logic
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && trailRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        trailRef.current.style.left = `${e.clientX}px`;
        trailRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Loader isLoading={isLoading} onComplete={handleLoaderComplete} />
      {!isLoading && (
        <>
          {/* Custom Cursor */}
          <div ref={trailRef} className="custom-cursor-trail" />
          <div ref={cursorRef} className="custom-cursor" />
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            {/* <section id="experience"><Experience /></section> */}
            <section id="contact"><Contact /></section>
          </main>
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </>
      )}
    </div>
  );
};

export default App; 