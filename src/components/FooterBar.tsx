import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';

export default function FooterBar() {
  const [cpu, setCpu] = useState(12);
  const [ram, setRam] = useState(4.2);
  const [latency, setLatency] = useState(14);

  // Fluctuating real-time telemetry metrics simulating server indicators
  useEffect(() => {
    const timer = setInterval(() => {
      setCpu(prev => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + delta;
        return Math.max(5, Math.min(28, next));
      });

      setLatency(prev => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1 to +1
        const next = prev + delta;
        return Math.max(9, Math.min(19, next));
      });

      setRam(prev => {
        const delta = parseFloat((Math.random() * 0.2 - 0.1).toFixed(2));
        const next = prev + delta;
        return parseFloat(Math.max(3.8, Math.min(4.8, next)).toFixed(2));
      });

    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#050506] border-t border-[#121215] py-4 px-6 md:px-8 font-mono text-[10px] md:text-xs text-gray-500 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Dynamic Telemetry stats */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            CPU_LOAD: <span className="text-white font-bold">{cpu}%</span>
          </span>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            RAM_USAGE: <span className="text-white font-bold">{ram}GB</span>
          </span>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            LATENCY: <span className="text-white font-bold">{latency}MS</span>
          </span>
        </div>

        {/* Brand System Metadata */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span>
            © 2024 {PERSONAL_INFO.name}
          </span>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <span className="text-gray-600">
            [ SYSTEM_VERSION: {PERSONAL_INFO.systemVersion} ]
          </span>
        </div>

      </div>
    </footer>
  );
}
