import React from 'react';
import { CAREER_HISTORY } from '../data';
import { Briefcase, Calendar, Award } from 'lucide-react';

export default function CareerSection() {
  return (
    <section 
      id="career" 
      className="py-24 px-4 md:px-8 bg-[#070708] select-none text-white border-t border-[#121215]"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-[48px] md:text-[64px] font-vt323 font-normal tracking-wider text-white mb-16 flex items-center gap-3 select-text">
          <span className="text-cyber-red animate-pulse font-mono">&gt;</span>
          <span>CARREIRA --LOG</span>
        </h2>

        {/* Timeline Log Structure */}
        <div className="relative pl-6 border-l border-red-950/50 space-y-16">
          
          {CAREER_HISTORY.map((item, companyIdx) => (
            <div key={item.company} className="relative group">
              
              {/* Timeline outer terminal point */}
              <span className="absolute -left-[30px] top-1.5 w-4 h-4 bg-[#070708] border border-cyber-red rounded-full flex items-center justify-center glow-border-red">
                <span className="w-1.5 h-1.5 bg-[#ff3333] rounded-full animate-pulse" />
              </span>

              {/* Company Title Header */}
              <div className="flex flex-wrap items-baseline gap-2 mb-4">
                <h3 className="font-vt323 text-[32px] md:text-[36px] font-normal text-white uppercase tracking-wide group-hover:text-cyber-red transition-colors duration-200">
                  {item.company}
                </h3>
                
                {item.duration && (
                  <span className="font-mono text-[10px] md:text-xs text-yellow-600/90 font-medium">
                    ({item.duration})
                  </span>
                )}
              </div>

              {/* Roles listing */}
              <div className="space-y-6">
                {item.roles.map((role) => {
                  const isCurrent = role.period.toLowerCase().includes('present');
                  return (
                    <div 
                      key={role.title} 
                      className="pl-4 border-l border-red-950/25 hover:border-cyber-red/30 transition-colors py-1 flex flex-col"
                    >
                      {/* Role header with chevron prompt */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-xs md:text-sm font-bold text-white/95">
                          &gt; {role.title}
                        </span>
                        
                        <span className="hidden sm:inline-block text-gray-600 font-mono text-xs">|</span>
                        
                        <span className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
                          <ClockTiny />
                          {role.period}
                        </span>

                        {isCurrent && (
                          <span className="font-mono text-[8px] bg-green-950/20 border border-green-500/20 text-green-400 py-0.5 px-1.5 rounded uppercase font-bold animate-pulse leading-none ml-1">
                            ACTIVE NODE
                          </span>
                        )}
                      </div>

                      {/* Brief description paragraph */}
                      {role.description && (
                        <p className="font-ibm text-xs md:text-sm text-gray-400 leading-relaxed mt-1 max-w-2xl pl-4 select-text">
                          {role.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

// Micro Clock icon inside career bullets
function ClockTiny() {
  return (
    <svg 
      className="w-3 h-3 text-gray-600 inline-block" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
