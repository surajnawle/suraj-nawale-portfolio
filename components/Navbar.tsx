
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../config';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blueprint', id: 'about' },
    { name: 'Modules', id: 'services' },
    { name: 'Chronicle', id: 'experience' },
    { name: 'Audits', id: 'projects' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-xl' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Dynamic Brand Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-emerald-500 text-black flex items-center justify-center font-mono font-black text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">QA</div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tighter text-white uppercase italic leading-none truncate max-w-[200px]">
                  {portfolioData.name}.
                </span>
                <span className="text-[7px] font-mono text-emerald-500 font-bold uppercase tracking-[0.4em] mt-1 opacity-60">
                  SYSTEM_VERIFIED
                </span>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-[10px] font-bold text-neutral-400 hover:text-emerald-400 transition-all uppercase tracking-[0.5em] font-mono relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-6 py-2.5 bg-white text-[#050505] text-[10px] font-black hover:bg-emerald-500 hover:text-white transition-all uppercase tracking-[0.2em] font-mono"
              >
                CONNECT
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white bg-neutral-900 border border-white/10 rounded-sm"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[55] lg:hidden bg-[#050505] flex flex-col justify-center items-center px-6 transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="text-4xl font-serif text-white uppercase italic tracking-widest">{link.name}</a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mt-8 px-12 py-4 bg-emerald-500 text-black text-xs font-black uppercase tracking-[0.4em] font-mono">ESTABLISH_LINK</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
