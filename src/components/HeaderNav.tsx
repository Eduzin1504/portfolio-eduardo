import React, { useState } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';

interface HeaderNavProps {
  onNavClick: (selector: string) => void;
  activeSection: string;
}

export default function HeaderNav({ onNavClick, activeSection }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: '[01]_HOME.SH', selector: '#home' },
    { id: 'about', label: '[02]_ABOUT.SH', selector: '#about' },
    { id: 'tools', label: '[03]_TOOLS.SH', selector: '#tools' },
    { id: 'projects', label: '[04]_PROJECTS.SH', selector: '#projects' },
    { id: 'career', label: '[05]_CAREER.SH', selector: '#career' },
    { id: 'contact', label: '[06]_CONTACT.SH', selector: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#070708]/95 border-b border-[#1f1414] backdrop-blur-md px-4 py-3 md:px-8 font-mono select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* CLI Prompt Name */}
        <div 
          onClick={() => onNavClick('#home')} 
          className="flex items-center gap-2 text-white/90 hover:text-cyber-red transition-colors cursor-pointer group"
        >
          <TerminalIcon className="w-4 h-4 text-cyber-red animate-pulse group-hover:scale-110 transition-transform" />
          <span className="font-bold tracking-tight text-sm md:text-base">
            ROOT@PORTFOLIO:<span className="text-cyber-red">~#</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.selector)}
                className={`text-base xl:text-lg font-bold tracking-tight font-mono duration-150 relative transition-all group py-1 px-2.5 rounded hover:bg-red-950/20 ${
                  isActive 
                    ? 'text-cyber-red border-b-2 border-cyber-red' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-cyber-red focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-[#070708] border-b border-[#1f1414] px-6 py-4 flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.selector);
                setIsOpen(false);
              }}
              className={`text-left text-sm py-2 px-3 rounded font-mono transition-colors ${
                activeSection === item.id 
                  ? 'bg-red-950/30 text-cyber-red border-l-2 border-cyber-red' 
                  : 'text-gray-400 hover:text-white hover:bg-[#121215]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
