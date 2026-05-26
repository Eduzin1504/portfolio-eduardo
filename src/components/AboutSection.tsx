import React from 'react';
import { PERSONAL_INFO } from '../data';
import { FileText, Cpu, Clock, HardDrive } from 'lucide-react';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-24 px-4 md:px-8 bg-[#0c0c0e] select-none text-white border-t border-[#121215]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-[48px] md:text-[64px] font-vt323 font-normal tracking-wider text-white mb-12 flex items-center gap-3 select-text">
          <span className="text-cyber-red animate-pulse font-mono">&gt;</span>
          <span>SOBRE . ME</span>
        </h2>

        {/* Notebook Terminal Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main content window */}
          <div className="lg:col-span-3 bg-[#0e0e11] border border-[#1f1414] rounded-lg overflow-hidden group hover:border-red-950/80 duration-300">
            
            {/* Notepad Terminal Window Header */}
            <div className="bg-[#121215] px-4 py-3 flex items-center justify-between border-b border-[#1f1414]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyber-red" />
                <span className="font-mono text-xs text-gray-400 font-bold tracking-wider">
                  {PERSONAL_INFO.bioTitle}
                </span>
              </div>
              
              {/* Colored Dots */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </div>
            </div>

            {/* Readout contents */}
            <div className="p-6 md:p-8 font-ibm leading-relaxed text-gray-300 flex flex-col gap-6 relative">
              
              {/* Grid-lines design background */}
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-red-950/[0.03] to-transparent pointer-events-none" />
              
              {PERSONAL_INFO.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-300 relative pl-4 border-l border-red-950/40 hover:border-cyber-red/50 transition-colors duration-250 text-[18px] sm:text-[22px] select-text">
                  <span className="absolute -left-2 text-cyber-red/20 pointer-events-none text-xs font-mono">●</span>
                  {paragraph}
                </p>
              ))}

              {/* Status footer inside file */}
              <div className="mt-6 pt-4 border-t border-red-950/20 flex flex-wrap gap-4 text-xs text-gray-500 font-mono">
                <span>encoding: UTF-8</span>
                <span>•</span>
                <span>paragraphs: {PERSONAL_INFO.bioParagraphs.length}</span>
                <span>•</span>
                <span>read_time: ~1m</span>
              </div>

            </div>
          </div>

          {/* Right sidebar metadata indicators */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            
            {/* Sub-terminal indicator 1 */}
            <div className="bg-[#0e0e11]/60 border border-[#1f1414] rounded-lg p-4 font-mono text-xs hover:border-[#ff3333]/15 duration-250">
              <div className="flex items-center gap-2 text-cyber-red font-bold mb-3">
                <Cpu className="w-4 h-4 animate-spin-slow text-cyber-red/80" />
                <span>SPECIFICATIONS</span>
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex justify-between">
                  <span>Name:</span>
                  <span className="text-white font-bold">Eduardo Maciel</span>
                </li>
                <li className="flex justify-between">
                  <span>Course:</span>
                  <span className="text-white text-right">Eng. de Software</span>
                </li>
                <li className="flex justify-between">
                  <span>University:</span>
                  <span className="text-white">Inteli</span>
                </li>
              </ul>
            </div>

            {/* Sub-terminal indicator 2 */}
            <div className="bg-[#0e0e11]/60 border border-[#1f1414] rounded-lg p-4 font-mono text-xs hover:border-[#ff3333]/15 duration-250">
              <div className="flex items-center gap-2 text-cyber-red font-bold mb-3">
                <Clock className="w-4 h-4" />
                <span>TIMESTAMPS</span>
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex justify-between">
                  <span>Active node:</span>
                  <span className="text-green-500 font-bold">ONLINE</span>
                </li>
                <li className="flex justify-between">
                  <span>UTC Clock:</span>
                  <span className="text-white font-mono">{new Date().toISOString().substring(11,19)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-white">São Paulo, BR</span>
                </li>
              </ul>
            </div>

            {/* Sub-terminal indicator 3 */}
            <div className="bg-[#0e0e11]/60 border border-[#1f1414] rounded-lg p-4 font-mono text-xs hover:border-[#ff3333]/15 duration-250">
              <div className="flex items-center gap-2 text-cyber-red font-bold mb-3">
                <HardDrive className="w-4 h-4" />
                <span>HOST STORAGE</span>
              </div>
              <div className="space-y-2 text-gray-500">
                <div className="flex justify-between mb-1">
                  <span>Sector Allocation:</span>
                  <span className="text-white">94%</span>
                </div>
                {/* Visual bar tracker */}
                <div className="w-full bg-[#121215] h-1.5 rounded-full overflow-hidden border border-red-950/20">
                  <div className="bg-gradient-to-r from-red-600 to-[#ff3333] h-full w-[94%]" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
