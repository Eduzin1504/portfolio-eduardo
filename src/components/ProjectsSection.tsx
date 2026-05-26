import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data';
import { Project } from '../types';
import { Play, ShieldAlert, Cpu, Terminal as TerminalIcon, X, Check, Eye } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const startSimulator = (project: Project) => {
    setSelectedProject(project);
    setIsRunning(true);
    setTerminalLogs([
      `sh: Initializing sandbox for "${project.title}"`,
      `user@portfolio:~$ chmod +x ./run_${project.id}.sh`,
      `user@portfolio:~$ ./run_${project.id}.sh --verbose --port=3000`,
      `[info] loading workspace environments...`,
      `[info] resolving server configurations...`
    ]);

    // Staggered boot sequences simulating executable launch
    const steps = [
      `[dependencies] matching active packages... verified.`,
      `[db_pool] establishing secure tunnels... socket up.`,
      `[runtime] bootstrap compiler sequence: initial sync success.`,
      project.status === 'deployed' 
        ? `[dns_resolve] routed to production build. URL: https://demo.${project.id}.io` 
        : `[localhost] bind successful on node server port 3000.`,
      `[status] CORE_VM ON-LINE. Executed in 143ms.`
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 800);
    });
  };

  const closeSimulator = () => {
    setSelectedProject(null);
    setTerminalLogs([]);
    setIsRunning(false);
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-4 md:px-8 bg-[#0c0c0e] select-none text-white border-t border-[#121215]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-[48px] md:text-[64px] font-vt323 font-normal tracking-wider text-white mb-12 flex items-center gap-3 select-text">
          <span className="text-cyber-red animate-pulse font-mono">&gt;</span>
          <span>PROJETOS . EXE</span>
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_LIST.map((project: Project) => {
            const isDeployed = project.status === 'deployed';
            
            return (
              <div 
                key={project.id}
                className="bg-[#0e0e11] border border-[#1f1414] rounded-lg overflow-hidden flex flex-col justify-between group hover:border-[#ff3333]/40 duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative"
              >
                {/* Accent red corner banner */}
                <div className={`absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden ${
                  isDeployed ? 'opacity-80' : 'opacity-40'
                }`}>
                  <div className={`absolute top-2 right-[-24px] w-20 py-0.5 text-[8px] font-mono font-bold text-center text-white rotate-45 ${
                    isDeployed ? 'bg-[#ff3333]' : 'bg-yellow-600'
                  }`}>
                    {project.status.toUpperCase()}
                  </div>
                </div>

                {/* Card Header Status Line */}
                <div className="bg-[#121215] px-5 py-3.5 flex items-center justify-between border-b border-[#1f1414]">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      isDeployed ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                    }`} />
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest leading-none">
                      status: {project.status}
                    </span>
                  </div>
                  
                  {/* Decorative symbols resembling developer file flags */}
                  <span className="text-gray-600 font-mono text-xs">
                    {isDeployed ? '⚡' : '💾'}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-vt323 text-[32px] md:text-[36px] font-normal text-white mb-4 group-hover:text-cyber-red tracking-wide leading-none transition-colors duration-200">
                      &gt;_ {project.title}
                    </h3>
                    
                    <p className="font-ibm text-sm text-gray-400 leading-relaxed mb-6 select-text">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="font-mono text-[10px] bg-red-950/10 border border-red-950/40 text-gray-400 group-hover:text-[#ff3333] group-hover:border-[#ff3333]/20 py-0.5 px-2 rounded transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive run button block */}
                <button
                  onClick={() => startSimulator(project)}
                  className="w-full bg-[#121215] hover:bg-red-950/30 font-mono text-xs text-center border-t border-[#1f1414] hover:text-cyber-red hover:border-[#ff3333]/40 py-4 transition-all duration-200 tracking-widest cursor-pointer font-bold select-none group-hover:tracking-wider"
                >
                  [ {project.runLabel || 'RUN EXECUTABLE'} ]
                </button>
              </div>
            );
          })}
        </div>

        {/* Simulated Bash Terminal Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/98 backdrop-blur-sm select-none font-mono">
            <div className="w-full max-w-2xl bg-black border border-cyber-red rounded-lg overflow-hidden glow-border-red flex flex-col shadow-[0_0_30px_rgba(255,51,51,0.3)]">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#121215] border-b border-[#1f1414] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-cyber-red animate-pulse" />
                  <span className="text-xs text-white">SIMULADOR_CONTAINER.EXE</span>
                </div>
                <button 
                  onClick={closeSimulator}
                  className="text-gray-500 hover:text-cyber-red transition-colors p-1"
                  aria-label="Filter"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Terminal Workspace Buffer output */}
              <div className="p-6 h-[350px] overflow-y-auto flex flex-col gap-2 text-xs text-green-500 bg-black relative scanlines">
                {terminalLogs.map((log, i) => {
                  const isCommand = log.startsWith('user@') || log.startsWith('sh:');
                  return (
                    <div key={i} className={isCommand ? 'text-white' : 'text-green-400'}>
                      {log}
                    </div>
                  );
                })}

                {/* Loader status line prompt */}
                {isRunning && (
                  <div className="flex items-center gap-1.5 text-cyber-red animate-pulse mt-1">
                    <span className="w-2 h-2 bg-cyber-red rounded-full" />
                    <span>Compilando binários ativos, por favor aguarde...</span>
                  </div>
                )}

                {/* Active output dashboard once compiled */}
                {!isRunning && (
                  <div className="mt-6 p-4 border border-[#1f1414] bg-[#0e0e11] text-gray-300 rounded-lg flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#ff3333] font-bold border-b border-[#1f1414] pb-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{selectedProject.title} ATIVO</span>
                    </div>
                    
                    <div className="space-y-1.5 text-xs text-gray-400 font-ibm">
                      <p><strong className="text-white">Descrição:</strong> {selectedProject.description}</p>
                      <p><strong className="text-white">Escopo Técnico:</strong> {selectedProject.techStack.join(', ')}</p>
                      <p><strong className="text-white">Configuração Ingress:</strong> Port 3000 (HTTPS TLS Proxy)</p>
                      <p><strong className="text-white">Status Node:</strong> <span className="text-green-500 font-bold">ALOCADO</span></p>
                    </div>

                    <div className="mt-2 text-center border border-red-950/20 py-2 rounded bg-black/50 text-[10px] text-gray-500 tracking-wider">
                      CONEXÃO SEGURA CRIPTOGRAFADA SSL ESTABELECIDA
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Bottom Command Input Box */}
              <div className="bg-[#121215] px-4 py-3 flex items-center justify-between border-t border-[#1f1414] text-[10px] text-gray-500">
                <span>host: ais-cloudrun-node-v20</span>
                <span>CTRL+C para sair ou clique no topo</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
