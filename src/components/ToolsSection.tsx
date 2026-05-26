import React, { useState } from 'react';
import { TOOLS_LIST } from '../data';
import { Tool } from '../types';
import * as Icons from 'lucide-react';

export default function ToolsSection() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Dynamic Lucide helper resolver
  const renderIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Icons.Terminal className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'GitBranch':
        return <Icons.GitBranch className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'Zap':
        return <Icons.Zap className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'Code2':
        return <Icons.Code2 className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'Shield':
        return <Icons.Shield className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'Target':
        return <Icons.Target className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'Bot':
        return <Icons.Bot className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      case 'FileCode':
        return <Icons.FileCode className={`w-8 h-8 ${colorClass} transition-colorsDuration`} />;
      default:
        return <Icons.Code2 className={`w-8 h-8 ${colorClass}`} />;
    }
  };

  // Brief dynamic tool tip sentences to surprise the user when they hover
  const getToolDescription = (toolId: string) => {
    switch (toolId) {
      case 'linux': return 'Sistemas Unix, shell scripting e comandos avançados de sistema.';
      case 'git': return 'Controle de versão, CI/CD, ramificação e automação Git.';
      case 'supabase': return 'Backend as a Service, PostgreSQL flexível, triggers e channels em tempo real.';
      case 'htmlcss': return 'Designs de alta fidelidade responsivos, estruturados com Tailwind CSS sem limites.';
      case 'cybersecurity': return 'Análise de vulnerabilidades, SIEM, pentest de rede e segurança defensiva.';
      case 'burp': return 'Intercepção de tráfego, web suite pentest e engenharia reversa de APIs.';
      case 'ai': return 'Integrações robustas LLM (Gemini API), agentes inteligentes e workflows cognitivos.';
      case 'python': return 'Scripts automatizados de automotivação, pacotes backend rápidos e análise.';
      default: return 'Recurso técnico ativo.';
    }
  };

  return (
    <section 
      id="tools" 
      className="py-24 px-4 md:px-8 bg-[#070708] select-none text-white border-t border-[#121215]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12">
          <h2 className="text-[48px] md:text-[64px] font-vt323 font-normal tracking-wider text-white flex items-center gap-3 select-text">
            <span className="text-cyber-red animate-pulse font-mono">&gt;</span>
            <span>FERRAMENTAS . LS</span>
          </h2>
          <span className="font-mono text-xs text-gray-400">
            {hoveredTool ? `[ COMMAND ECHO ]: ${getToolDescription(hoveredTool)}` : '[ HOVER OVER AN ENVELOPE TO DECRYPT SECTOR INFORMATION ]'}
          </span>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS_LIST.map((tool: Tool) => {
            const isHovered = hoveredTool === tool.id;
            
            return (
              <div
                key={tool.id}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                className={`relative bg-[#0e0e11] border rounded-lg p-6 md:p-8 flex flex-col justify-between aspect-[1.5/1] transition-all duration-300 group cursor-pointer ${
                  isHovered 
                    ? 'border-[#ff3333] shadow-[0_0_15px_rgba(255,51,51,0.15)] bg-red-950/[0.04]' 
                    : 'border-[#1f1414] hover:border-red-900/45'
                }`}
              >
                {/* Visual grid overlay for premium look */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#ff3333_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Cyber Red Accent dot on active row */}
                <div className={`absolute top-3 left-3 w-1 h-1 rounded-full transition-colors ${
                  isHovered ? 'bg-[#ff3333] animate-ping' : 'bg-transparent'
                }`} />

                {/* Icon Rendering */}
                <div className="mb-4">
                  {renderIcon(
                    tool.iconName, 
                    isHovered ? 'text-cyber-red glow-text-red scale-110' : 'text-gray-400 group-hover:text-white'
                  )}
                </div>

                {/* Label & Details */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1 select-none">
                      {tool.category}
                    </span>
                    <h3 className="font-vt323 text-[32px] md:text-[36px] font-normal leading-none text-white group-hover:text-cyber-red transition-colors duration-200 uppercase tracking-wide">
                      {tool.name}
                    </h3>
                  </div>
                  
                  {/* File Index code bottom-right */}
                  <span className="font-mono text-xs text-gray-650 group-hover:text-[#ff3333] font-bold duration-200">
                    {tool.indexCode}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
