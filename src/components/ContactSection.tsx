import React, { useState } from 'react';
import { Terminal as TerminalIcon, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setConsoleLogs([
        `[error] validation failed: missing required arguments.`,
        `[usage] ./send_mail.sh --name="<str>" --email="<str>" --message="<str>"`
      ]);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setConsoleLogs([
      `user@portfolio:~$ ./send_mail.sh --name="${formData.name}" --email="${formData.email}"`,
      `[system] verifying email address pattern... OK`,
      `[system] validating SSL handshake on port 465...`
    ]);

    // Simulated terminal logger sequence
    const sequences = [
      `[crypto] encrypting message payload using RSA-4096...`,
      `[smtp] routing payload to smtp.eduardomaciel.io...`,
      `[smtp] establishing connection... handshake successful.`,
      `[success] Message compiled and delivered. (Status: 250 OK ID=${Math.floor(Math.random() * 900000 + 100000)})`
    ];

    sequences.forEach((logStep, index) => {
      setTimeout(() => {
        setConsoleLogs(prev => [...prev, logStep]);
        if (index === sequences.length - 1) {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 bg-[#0c0c0e] select-none text-white border-t border-[#121215]"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-[48px] md:text-[64px] font-vt323 font-normal tracking-wider text-white mb-12 flex items-center gap-3 select-text">
          <span className="text-cyber-red animate-pulse font-mono">&gt;</span>
          <span>CONTATO . SH</span>
        </h2>

        {/* Contact Form Terminal Box */}
        <div className="bg-[#0e0e11] border border-[#1f1414] rounded-lg overflow-hidden h-full">
          
          {/* Header */}
          <div className="bg-[#121215] px-4 py-3 border-b border-[#1f1414] flex items-center justify-between">
            <span className="font-mono text-xs text-gray-500 tracking-wider">
              &gt;_ MAIL_CLIENT.SH
            </span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/30"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/20"></span>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="p-6 md:p-8 space-y-6">
            
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider">
                &gt;_ NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Escreva seu nome..."
                className="w-full bg-black/60 border border-[#1f1414] focus:border-cyber-red rounded p-3 font-ibm text-sm md:text-base text-white focus:outline-none transition-all placeholder:text-gray-650"
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider">
                &gt;_ EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Escreva seu email..."
                className="w-full bg-black/60 border border-[#1f1414] focus:border-cyber-red rounded p-3 font-ibm text-sm md:text-base text-white focus:outline-none transition-all placeholder:text-gray-650"
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider">
                &gt;_ MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem!"
                className="w-full bg-black/60 border border-[#1f1414] focus:border-cyber-red rounded p-3 font-ibm text-sm md:text-base text-white focus:outline-none transition-all placeholder:text-gray-650 resize-none"
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Submit Action Block */}
            <div className="flex justify-between items-center pt-4">
              <span className="font-mono text-[10px] text-gray-600">
                SSL: TLS_AES_256_GCM_SHA384
              </span>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-cyber-red hover:bg-red-600 disabled:bg-red-950/20 active:bg-red-700 hover:border-white text-white font-mono font-bold py-3.5 px-6 border border-cyber-red rounded text-sm tracking-widest transition-all duration-200 cursor-pointer text-center group active:scale-98"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                ENVIAR _
              </button>
            </div>

          </form>

          {/* Compiled Output Realtime Log */}
          {consoleLogs.length > 0 && (
            <div className="bg-black p-4 border-t border-[#1f1414] font-mono text-xs text-green-500 relative scanlines max-h-60 overflow-y-auto">
              <div className="border-b border-[#1f1414]/30 pb-1.5 mb-2 text-gray-500 flex justify-between">
                <span>[ TERMINAL LOGGER CONSOLE ]</span>
                <span className="animate-pulse">● INTERACTING DETECTED</span>
              </div>
              <div className="space-y-1.5">
                {consoleLogs.map((log, index) => {
                  const isErr = log.startsWith('[error]');
                  const isSuccess = log.startsWith('[success]');
                  return (
                    <div 
                      key={index} 
                      className={isErr ? 'text-cyber-red' : isSuccess ? 'text-green-400' : 'text-green-500/90'}
                    >
                      {log}
                    </div>
                  );
                })}
              </div>

              {submitSuccess && (
                <div className="mt-4 p-3 border border-green-500/20 bg-green-950/20 text-green-400 rounded flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 animate-bounce" />
                  <span>Mensagem enviada com sucesso! Eduardo responderá em breve.</span>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
