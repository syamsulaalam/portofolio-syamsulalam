import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'projects', 'skills', 'certificates', 'about', 'experience', 'galeri', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#c9d1d9] flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero onViewProjects={handleScrollToProjects} />
        <Projects />
        <Skills />
        <Certificates />
        <About />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
