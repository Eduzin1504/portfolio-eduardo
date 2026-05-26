import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { Terminal as TerminalIcon, Eye, Mail } from 'lucide-react';

interface HeroSectionProps {
  onNavClick: (selector: string) => void;
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  const [activeTaglineIndex, setActiveTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const taglines = PERSONAL_INFO.taglines;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activePhrase = taglines[activeTaglineIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(activePhrase.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length === activePhrase.length) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        // Deleting
        setCurrentText(activePhrase.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setActiveTaglineIndex((prev) => (prev + 1) % taglines.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, activeTaglineIndex, taglines, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen pt-12 pb-20 px-4 md:px-8 flex items-center bg-gradient-to-b from-[#070708] to-[#0c0c0e] select-none text-white overflow-hidden"
    >
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(255,0,0,0.1)_50%)] bg-[size:100%_4px]" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left terminal metadata column */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-gray-500">
            <span className="text-cyber-red animate-pulse">&gt;_</span>
            <span>SYSTEM.INIT() SUCCESSFUL</span>
          </div>

          {/* Name Display */}
          <h1 className="text-[72px] sm:text-[88px] lg:text-[110px] font-vt323 leading-none text-cyber-red mb-6 drop-shadow-[0_2px_15px_rgba(255,51,51,0.3)] flex flex-col tracking-wide select-text glow-text-red">
            <span>EDUARDO</span>
            <span>MACIEL</span>
          </h1>

          {/* Dynamic Typist Taglines */}
          <div className="font-mono text-base sm:text-xl lg:text-2xl text-gray-300 mb-10 h-16 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-cyber-red font-bold">&gt;_</span>
              <span className="text-gray-400">status:</span>
              <span className="text-white font-medium border-r border-[#ff3333] pr-1 animate-shimmer whitespace-pre">
                {currentText}
              </span>
              <span className="w-2.5 h-5 bg-cyber-red inline-block mb-1 animate-pulse"></span>
            </div>
            
            <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500 mt-2">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                sec_conn: active
              </span>
              <span>•</span>
              <span>role: full-stack_eng</span>
              <span>•</span>
              <span>location: brazil_utc-3</span>
            </div>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavClick('#projects')}
              className="flex items-center gap-2 bg-cyber-red hover:bg-red-600 active:bg-red-700 text-white font-mono font-bold py-3.5 px-6 border border-[#ff3333] hover:border-white rounded text-sm tracking-widest transition-all duration-250 cursor-pointer text-center group active:scale-98 shadow-[0_0_15px_rgba(255,51,51,0.2)]"
            >
              <Eye className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              VIZUALIZAR
            </button>
            
            <button
              onClick={() => onNavClick('#contact')}
              className="flex items-center gap-2 bg-transparent hover:bg-white/5 active:bg-white/10 text-[#ff3333] hover:text-white font-mono py-3.5 px-6 border border-red-950/80 hover:border-cyber-red rounded text-sm tracking-widest transition-all duration-250 cursor-pointer text-center group active:scale-98"
            >
              <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              CONTACT
            </button>
          </div>
        </div>

        {/* Right terminal image column */}
        <div className="col-span-1 lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md bg-[#0e0e11] border border-[#1f1414] rounded-lg overflow-hidden group hover:border-[#ff3333]/40 duration-300 shadow-[0_5px_25px_rgba(0,0,0,0.4)]">
            
            {/* Window control bar */}
            <div className="bg-[#121215] px-4 py-2 flex items-center justify-between border-b border-[#1f1414]">
              <span className="font-mono text-[10px] text-gray-500 tracking-wider">
                &gt;_ PROFILE_IMG.JPG
              </span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors"></span>
              </div>
            </div>

            {/* Profile image with subtle scanner line overlay */}
            <div className="relative aspect-[3/4] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={PERSONAL_INFO.profileImg}
                alt="Eduardo Hirohito Izawa Maciel Portrait"
                className="w-full h-full object-cover rounded opacity-85 group-hover:opacity-100 transition-opacity duration-300 filter grayscale-[20%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* Terminal glowing overlay scanlines */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-35" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-cyber-red/20 glow-border-red animate-[scan_6s_linear_infinite]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
