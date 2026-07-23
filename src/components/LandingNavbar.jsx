import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const whatsappUrl = `https://wa.me/51951300535?text=${encodeURIComponent(
    'Hola Nexus Rise, me interesa desarrollar un proyecto web / recorrido 360° para mi negocio en la región. Deseo solicitar una cotización.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-display ${
      isScrolled 
        ? 'bg-[#070a13]/92 backdrop-blur-md border-b border-[#00f2fe]/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent border-b border-white/5 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo NEXUS RISE con logo3.2.webp */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-2xl md:text-3xl font-logo flex items-center gap-3 group select-none tracking-wide"
        >
          <img 
            src={`${import.meta.env.BASE_URL}logo3.2.webp`} 
            alt="Nexus Rise Logo" 
            className="w-9 h-9 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,242,254,0.4)]" 
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-extrabold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                NEXUS
              </span>
              <span className="text-gradient-rise font-black drop-shadow-[0_2px_8px_rgba(0,242,254,0.3)]">
                RISE
              </span>
            </div>
            <span className="text-[10px] text-gray-400 tracking-widest font-mono uppercase -mt-1 flex items-center gap-1">
              <ShieldCheck className="w-2.5 h-2.5 text-nexus-accent inline" /> Software & 360° Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Solo Plataforma Domo360) */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-gray-300">
          <Link 
            to="/proyectos" 
            className="hover:text-nexus-accent transition-colors py-2 flex items-center gap-1.5 text-purple-300 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20"
          >
            Plataforma Domo360 <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        {/* Desktop CTA WhatsApp */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-cian px-5 py-2.5 rounded-full font-extrabold uppercase tracking-wider text-xs flex items-center gap-2 transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)]"
          >
            <svg 
              className="w-4 h-4 fill-emerald-400 shrink-0" 
              viewBox="0 0 448 512" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-nexus-accent" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#070a13]/98 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-6 flex flex-col gap-4 transition-all duration-300 origin-top z-50 ${
        isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider">
          <Link 
            to="/proyectos" 
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 font-bold flex items-center justify-between"
          >
            <span>🏛️ Ir a Portal Domo360</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-2 w-full btn-neon-cian py-3.5 rounded-xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.4)]"
        >
          <svg 
            className="w-5 h-5 fill-emerald-400 shrink-0" 
            viewBox="0 0 448 512" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
          <span>Hablar por WhatsApp Directo</span>
        </a>
      </div>
    </nav>
  );
}

