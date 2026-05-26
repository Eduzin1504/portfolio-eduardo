import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ToolsSection from './components/ToolsSection';
import ProjectsSection from './components/ProjectsSection';
import CareerSection from './components/CareerSection';
import ContactSection from './components/ContactSection';
import FooterBar from './components/FooterBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler which navigates to selected page partitions
  const handleNavClick = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Tracking page intersection arrays to set the active nav menu highlighted item dynamically
  useEffect(() => {
    const sections = ['home', 'about', 'tools', 'projects', 'career', 'contact'];
    
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { 
          rootMargin: '-30% 0px -60% 0px', // Trigger slightly before center screen view
          threshold: 0 
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#070708] min-h-screen flex flex-col antialiased selection:bg-red-950/40 selection:text-cyber-red">
      
      {/* Visual Scanline Filter overlay standard on top of entire portfolio */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] opacity-10" />

      {/* Cyber Red Ambient Corner Glow effects */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyber-red/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyber-red/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Scaffold components */}
      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* Navigation Toolbar Header */}
        <HeaderNav 
          onNavClick={handleNavClick} 
          activeSection={activeSection} 
        />

        {/* Dynamic content panels */}
        <main className="flex-grow">
          <HeroSection onNavClick={handleNavClick} />
          
          <AboutSection />
          
          <ToolsSection />
          
          <ProjectsSection />
          
          <CareerSection />
          
          <ContactSection />
        </main>

        {/* Telemetry Footer Status Ticker */}
        <FooterBar />

      </div>
    </div>
  );
}
