
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import { portfolioData } from './config';

const App: React.FC = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>(['[SYSTEM_READY]', 'Type "help" for commands...']);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let out: string | string[] = `Error: '${cmd}' not recognized. Type 'help' for available commands.`;
    
    // Commands matching your screenshot
    if (cmd === 'help') {
      out = ['Available: status, run-audit, diagnostics, clear, whoami'];
    } else if (cmd === 'status') {
      out = 'CLUSTER_HEALTH: 100% | TESTS_PENDING: 0 | API_LATENCY: 42ms | REGRESSION_STATUS: PASS';
    } else if (cmd === 'whoami') {
      out = `User: ${portfolioData.name} | Role: ${portfolioData.title} | Stack: n8n, Make.com, GitHub Copilot`;
    } else if (cmd === 'run-audit') {
      out = ['INITIATING AUDIT...', 'SCANNING_DB... [OK]', 'CHECKING_API_ENDPOINTS... [OK]', 'RESULT: SYSTEM SECURE.'];
    } else if (cmd === 'diagnostics') {
      out = ['CPU: 12%', 'RAM: 4.2GB / 16GB', 'LATENCY: 14ms', 'UPTIME: 99.99%'];
    } else if (cmd === 'clear') {
      setTerminalLines(['[SYSTEM_REFRESHED]']);
      setTerminalInput('');
      return;
    }

    setTerminalLines(prev => [...prev, `> ${terminalInput}`, ...(Array.isArray(out) ? out : [out])]);
    setTerminalInput('');
  };

  const workProcess = [
    { step: "01", title: "Discovery & Audit", detail: "Deep dive into your current manual bottlenecks and data pipelines." },
    { step: "02", title: "Architectural Blueprint", detail: "Designing the n8n logic or SDET framework architecture." },
    { step: "03", title: "Development Sprint", detail: "High-speed engineering using GitHub Copilot and Python/Playwright." },
    { step: "04", title: "Validation & Handover", detail: "Rigorous stress testing followed by live deployment and training." }
  ];

  return (
    <div className="min-h-screen relative bg-[#050505]">
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]">
        <div className="absolute inset-0 scanline"></div>
      </div>
      <Navbar />

      <main className="relative">
        
        {/* HERO */}
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-20 px-6 bg-blueprint relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/95 to-[#050505]"></div>
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="max-w-6xl relative">
              
              {/* Status Section */}
              <div className="flex flex-wrap gap-8 mb-16">
                <div className="flex flex-col gap-2">
                  <span className="text-[7px] font-mono font-black text-neutral-600 uppercase tracking-[0.4em] ml-1">Live_Status</span>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-emerald-500/5 border border-emerald-500/20">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 font-mono">
                      {portfolioData.contact.availability}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[7px] font-mono font-black text-neutral-600 uppercase tracking-[0.4em] ml-1">Engineering_Heritage</span>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-blue-500/5 border border-blue-500/20">
                    <svg className="w-3 h-3 text-blue-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 font-mono">
                      CERTIFIED_MAINTENANCE_TECH
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-serif mb-12 text-platinum leading-[0.9] tracking-tighter platinum-gradient text-left">
                Precision.<br/>
                <span className="italic font-light opacity-80">Autonomous.</span>
              </h1>
              
              <p className="text-2xl md:text-4xl text-neutral-400 font-light leading-tight tracking-tight mb-16 max-w-4xl text-left">
                Bridging <span className="text-white font-medium italic">industrial-grade maintenance</span> with <span className="text-emerald-500 font-medium font-mono uppercase text-sm tracking-[0.2em]">AI-driven testing</span> to ensure absolute system integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-24">
                <a href="#contact" className="btn-industrial px-12 py-5 text-[11px] text-center flex items-center justify-center gap-3">
                  INITIATE_ENGAGEMENT
                </a>
                <a href="/resume.pdf" target="_blank" className="px-12 py-5 border border-white/10 hover:border-emerald-500/50 text-white text-[11px] font-black rounded-sm transition-all text-center uppercase tracking-[0.2em] bg-white/5 flex items-center justify-center gap-3 group">
                  <span className="group-hover:text-emerald-400 transition-colors">VIEW_PROFESSIONAL_CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Overlay on Hero */}
          <div className="hidden xl:block absolute right-20 bottom-20 w-80 glass-industrial mechanical-border p-8 shadow-2xl z-20">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[8px] font-mono font-bold text-neutral-500 uppercase tracking-widest">System_Metrics</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-emerald"></div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Total XP', val: '3.5 YEARS', color: 'text-platinum' },
                  { label: 'Uptime Goal', val: '99.9%', color: 'text-emerald-500' },
                  { label: 'Automation', val: 'ENABLED', color: 'text-blue-400' }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">{stat.label}</span>
                    <span className={`text-sm font-mono font-bold ${stat.color}`}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* BLUEPRINT (ABOUT) */}
        <section id="about" className="py-24 md:py-32 px-6 bg-[#050505] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
                <div>
                  <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-6 font-mono">01_BLUEPRINT</h2>
                  <h3 className="text-5xl font-serif mb-8 text-platinum leading-none tracking-tight">System Integrity.</h3>
                  <p className="text-xl text-neutral-400 leading-relaxed font-light italic text-left">
                    {portfolioData.detailedBio}
                  </p>
                </div>
                
                {/* Mechanical Callout */}
                <div className="p-8 border border-blue-500/20 bg-blue-500/5 corner-tl corner-br mechanical-border relative group overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="text-6xl uppercase font-black text-blue-500 font-mono">ROOT</span>
                   </div>
                   <h4 className="text-blue-400 font-mono text-[10px] font-bold uppercase tracking-[0.5em] mb-4">THE_FOUNDATION</h4>
                   <p className="text-sm text-neutral-400 leading-relaxed italic text-left">
                     My background as a **Certified Maintenance Technician** gives me a unique advantage in QA: I don't just look for software bugs; I understand systemic failure points and root-cause analysis like a hardware engineer.
                   </p>
                </div>

                <div className="grid gap-5">
                  {portfolioData.personalValues.map((v, i) => (
                    <div key={i} className="flex gap-6 p-8 mechanical-border corner-tl corner-br glass-industrial group">
                      <div className="text-4xl shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">{v.icon}</div>
                      <div className="text-left">
                        <h4 className="font-bold text-white text-lg mb-1 uppercase tracking-widest">{v.title}</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed font-light italic">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-12">
                <div className="glass-industrial mechanical-border p-1 rounded-sm overflow-hidden shadow-2xl">
                  <div className="bg-neutral-900/50 px-10 py-8 border-b border-white/5 flex justify-between items-center">
                    <p className="text-xl font-serif text-white tracking-tight italic">Technical Capability Stack</p>
                  </div>
                  <div className="divide-y divide-white/5">
                    {portfolioData.skills.map((cat, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-12 hover:bg-emerald-500/[0.02] transition-colors">
                        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-white/5 bg-neutral-900/20 text-left">
                          <span className="text-sm font-serif text-white/90 uppercase tracking-wider">{cat.name}</span>
                        </div>
                        <div className="md:col-span-8 p-8">
                          <div className="flex flex-wrap gap-3">
                            {cat.skills.map((s, j) => (
                              <span key={j} className="px-4 py-2 bg-neutral-800/40 border border-white/10 text-neutral-300 text-[10px] font-bold uppercase rounded-sm hover:border-emerald-500/50 hover:text-white transition-all font-mono">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TERMINAL */}
                <div className="bg-black/80 rounded-sm mechanical-border p-6 shadow-2xl font-mono text-[10px] leading-relaxed relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 text-neutral-500 border-b border-white/5 pb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <span className="ml-2">terminal — suraj-nawle-core</span>
                  </div>
                  <div className="h-48 overflow-y-auto space-y-1 text-emerald-500/80 mb-4 scrollbar-hide text-left">
                    {terminalLines.map((line, i) => (
                      <div key={i} className={line.startsWith('>') ? 'text-blue-400' : ''}>{line}</div>
                    ))}
                    <div ref={terminalBodyRef} />
                  </div>
                  <form onSubmit={handleTerminalSubmit} className="flex gap-2 items-center">
                    <span className="text-blue-400">λ</span>
                    <input 
                      type="text" 
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type 'help'..."
                      className="bg-transparent border-none outline-none flex-1 text-platinum placeholder:text-neutral-700"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK PROCESS */}
        <section id="process" className="py-24 md:py-32 px-6 bg-[#0a0a0a] border-y border-white/5 scroll-mt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
             <div className="mb-24 text-center">
                <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 font-mono">02_EXECUTION_LIFECYCLE</h2>
                <h3 className="text-6xl font-serif text-white tracking-tighter italic leading-none">The Methodology.</h3>
             </div>
             <div className="grid md:grid-cols-4 gap-12 relative">
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-white/5"></div>
                {workProcess.map((item, i) => (
                   <div key={i} className="relative group text-center md:text-left">
                      <div className="w-16 h-16 bg-neutral-900 mechanical-border corner-tl corner-br text-emerald-500 flex items-center justify-center font-mono font-black text-xl mb-10 mx-auto md:mx-0 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                         {item.step}
                      </div>
                      <h4 className="text-2xl font-serif text-white mb-4 italic">{item.title}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed font-light italic">{item.detail}</p>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 md:py-32 px-6 bg-[#050505] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 font-mono">03_OPERATIONAL_CAPACITY</h2>
              <h3 className="text-6xl md:text-8xl font-serif text-white tracking-tighter italic leading-none">Specialized Solutions.</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioData.services.map((service, i) => (
                <div key={i} className="p-10 glass-industrial mechanical-border corner-tl corner-br group flex flex-col items-center text-center hover:bg-emerald-500/[0.03] transition-all">
                  <div className="text-6xl mb-10 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">{service.icon}</div>
                  <h4 className="text-2xl font-serif text-white mb-6 tracking-tight uppercase italic">{service.title}</h4>
                  <p className="text-base text-neutral-500 leading-relaxed font-light flex-1 italic">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHRONICLE (EXPERIENCE) */}
        <section id="experience" className="py-24 md:py-32 px-6 bg-[#0a0a0a] relative scroll-mt-20 border-y border-white/5">
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="mb-24 text-center">
              <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 font-mono">04_PROFESSIONAL_CHRONICLE</h2>
              <h3 className="text-6xl md:text-8xl font-serif text-white tracking-tighter italic leading-none">Career Roadmap.</h3>
            </div>
            <div className="relative timeline-industrial">
              {portfolioData.experience.map((exp, i) => (
                <div key={i} className={`relative lg:w-1/2 mb-24 last:mb-0 ${i % 2 === 0 ? 'lg:pr-16 lg:ml-0' : 'lg:pl-16 lg:ml-auto'}`}>
                  <div className={`absolute left-[16px] lg:left-1/2 lg:-translate-x-1/2 top-4 w-3 h-3 bg-[#050505] border-2 border-emerald-500 z-10`}></div>
                  <div className="pl-12 lg:pl-0">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <div className="px-5 py-1.5 bg-neutral-900 border border-white/10 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] font-mono">{exp.period}</div>
                      <div className="px-3 py-1 bg-white/5 text-neutral-500 text-[8px] font-bold uppercase tracking-widest rounded-full">{exp.type}</div>
                    </div>
                    <div className="p-12 glass-industrial mechanical-border shadow-2xl bg-gradient-to-br from-neutral-900/50 to-transparent text-left">
                      <h4 className="text-4xl font-serif text-white mb-2 tracking-tight italic">{exp.role}</h4>
                      <p className="text-emerald-500 font-bold uppercase text-xs tracking-[0.5em] mb-10 font-mono">{exp.company}</p>
                      <ul className="space-y-4">
                        {exp.description.map((item, j) => (
                          <li key={j} className="text-lg text-neutral-400 leading-relaxed flex gap-4 font-light italic">
                            <span className="text-emerald-500 text-sm mt-1">::</span>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 md:py-32 px-6 bg-[#050505] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 font-mono">05_VERIFICATION_LOG</h2>
              <h3 className="text-6xl md:text-8xl font-serif text-white tracking-tighter italic leading-none">Impact Case Studies.</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {portfolioData.projects.map((project, i) => (
                <div key={i} className="glass-industrial mechanical-border overflow-hidden flex flex-col group shadow-2xl bg-[#0a0a0a]">
                  <div className="h-72 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                  </div>
                  <div className="p-12 flex-1 text-left">
                    <h4 className="text-4xl font-serif text-white mb-6 uppercase italic group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                    <p className="text-lg text-neutral-400 font-light mb-12 italic">{project.description}</p>
                    <div className="pt-10 border-t border-white/5">
                      <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.5em] mb-3 font-mono">OUTCOME:</p>
                      <p className="text-3xl text-white font-serif italic">{project.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE PACKAGES */}
        <section id="packages" className="py-24 md:py-32 px-6 bg-[#0a0a0a] border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
             <div className="mb-24 text-center md:text-left">
                <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-4 font-mono">06_ENGAGEMENT_MODULES</h2>
                <h3 className="text-6xl font-serif text-white tracking-tighter italic">Introductory Offers.</h3>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
                {portfolioData.packages.map((pkg, i) => (
                   <div key={i} className={`p-10 mechanical-border corner-tl corner-br flex flex-col group transition-all duration-500 ${pkg.isPopular ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-neutral-900/30'} hover:translate-y-[-8px] text-left`}>
                      {pkg.isPopular && <span className="text-[8px] font-mono text-emerald-500 font-bold mb-4 uppercase tracking-[0.4em]">RECOMMENDED_START</span>}
                      <h4 className="text-2xl font-serif text-white mb-2 italic">{pkg.name}</h4>
                      <p className="text-emerald-500 font-mono text-xl font-bold mb-8 group-hover:text-white transition-colors">{pkg.price}</p>
                      <ul className="space-y-4 mb-10 flex-1">
                         {pkg.features.map((feat, j) => (
                            <li key={j} className="text-sm text-neutral-400 flex gap-3 font-light italic">
                               <span className="text-emerald-500 text-[10px] mt-1 group-hover:scale-125 transition-transform">✓</span>
                               {feat}
                            </li>
                         ))}
                      </ul>
                      <a href="#contact" className={`py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] font-mono transition-all ${pkg.isPopular ? 'bg-emerald-500 text-black hover:bg-white' : 'border border-white/10 text-white hover:border-emerald-500'}`}>
                         ACQUIRE_MODULE
                      </a>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 md:py-32 px-6 bg-[#050505] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="text-left">
                   <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-6 font-mono">07_CLIENT_FEEDBACK</h2>
                   <h3 className="text-6xl font-serif text-white tracking-tighter italic leading-tight mb-8">Professional<br/>Endorsements.</h3>
                   <div className="space-y-12">
                      {portfolioData.testimonials.map((t, i) => (
                         <div key={i} className="relative pl-12 border-l border-emerald-500/30">
                            <span className="absolute left-[-15px] top-0 text-4xl text-emerald-500/20 italic font-serif">"</span>
                            <p className="text-xl text-neutral-400 leading-relaxed font-light italic mb-6">
                               {t.text}
                            </p>
                            <div>
                               <p className="text-white font-bold uppercase tracking-widest">{t.name}</p>
                               <p className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">{t.role}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="mechanical-border p-12 bg-neutral-900/40 rounded-sm">
                   <p className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.4em] mb-8 font-bold text-left">PERFORMANCE_METRICS</p>
                   <div className="space-y-8">
                      {[
                        { label: 'System Uptime', val: '99.9%' },
                        { label: 'Bug Detection Rate', val: '98.5%' },
                        { label: 'Automation Coverage', val: '88%' }
                      ].map((m, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-xs mb-2 uppercase tracking-widest font-mono">
                               <span>{m.label}</span>
                               <span className="text-emerald-500 font-bold">{m.val}</span>
                            </div>
                            <div className="h-1 bg-neutral-800 w-full overflow-hidden">
                               <div className="h-full bg-emerald-500/50" style={{ width: m.val }}></div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 md:py-32 px-6 bg-[#050505] scroll-mt-20 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="text-left">
                   <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-6 font-mono">08_COMMUNICATION</h2>
                   <h3 className="text-7xl font-serif text-white tracking-tighter italic mb-10">Establish<br/>Connection.</h3>
                   <div className="space-y-8">
                      <div className="group">
                        <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em] mb-2 font-mono group-hover:text-emerald-500 transition-colors">Endpoint</p>
                        <a href={`mailto:${portfolioData.contact.email}`} className="text-2xl font-serif text-white hover:text-emerald-500 transition-all border-b border-emerald-500/10 pb-2 inline-block">
                          {portfolioData.contact.email}
                        </a>
                      </div>
                      <div className="group">
                        <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em] mb-2 font-mono group-hover:text-blue-400 transition-colors">LinkedIn</p>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl font-serif text-white hover:text-blue-400 transition-all border-b border-blue-400/10 pb-2 inline-block uppercase">VIEW_PROFILE</a>
                      </div>
                   </div>
                </div>
                <div className="glass-industrial mechanical-border p-16 text-center relative shadow-2xl bg-neutral-900/20">
                   <h4 className="text-3xl font-serif text-white mb-8 uppercase italic leading-tight">Ready for System Audit?</h4>
                   <div className="flex flex-col gap-4">
                     <a href={`mailto:${portfolioData.contact.email}`} className="btn-industrial inline-block w-full py-7 text-[11px]">REQUEST_TECHNICAL_HANDSHAKE</a>
                     <a href={portfolioData.contact.linkedin} target="_blank" className="border border-white/10 hover:border-emerald-500/50 py-5 text-[10px] font-bold text-white tracking-widest uppercase transition-all flex items-center justify-center gap-3">
                       CONNECT_ON_LINKEDIN
                     </a>
                   </div>
                   <div className="mt-8">
                     <p className="text-[10px] font-mono text-emerald-500/70 uppercase tracking-[0.3em] font-bold">STATUS: {portfolioData.contact.availability}</p>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-emerald-500 text-black flex items-center justify-center font-black font-mono text-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]">QA</div>
              <p className="text-[10px] font-mono uppercase tracking-[0.6em] text-neutral-600">© {new Date().getFullYear()} ENGINEERED_FOR_INTEGRITY</p>
            </div>
            <p className="text-[8px] font-mono text-neutral-700 uppercase tracking-widest">Architected & Verified by {portfolioData.name.toUpperCase()}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 font-bold">
            <a href="#hero" className="hover:text-emerald-500 transition-colors">ROOT</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors">BLUEPRINT</a>
            <a href="#services" className="hover:text-emerald-500 transition-colors">MODULES</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">AUDITS</a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-emerald-500/60 hover:text-emerald-500 transition-colors border-l border-white/10 pl-10">VIEW_SOURCE</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
