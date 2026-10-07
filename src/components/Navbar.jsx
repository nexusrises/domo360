import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    if (path === '/propiedades') {
      return location.pathname === '/propiedades' || location.pathname === '/proyectos' || location.pathname === '/catalogo';
    }
    if (path === '/servicios-360') {
      return location.pathname === '/servicios-360' || location.pathname === '/servicios';
    }
    return location.pathname === path;
  };
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('domo360_theme') || 'light';
  });

  useEffect(() => {
    const handleThemeChange = (e) => {
      setCurrentTheme(e.detail);
    };
    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  const isLightPage = location.pathname.startsWith('/editor-360-privado')
    ? false
    : currentTheme === 'light';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-display ${
      isScrolled 
        ? isLightPage
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
          : 'bg-[#070a13]/92 backdrop-blur-md border-b border-[#00f2fe]/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/propiedades" onClick={handleLinkClick} className="text-2xl md:text-3xl font-logo flex items-center gap-2 group select-none tracking-wide whitespace-nowrap" title="Nexus Domo 360° | Propiedades">
          <img src={`${import.meta.env.BASE_URL}logo3.2.webp`} alt="Nexus Domo 360 Logo" className="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-300 group-hover:scale-110" />

          <span className={`transition-transform duration-300 group-hover:scale-105 ${isLightPage ? 'text-slate-900' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'}`}>Nexus</span>
          <span className="text-gradient-rise drop-shadow-[0_2px_8px_rgba(0,242,254,0.25)] ml-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">Domo 360°</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider">
          <Link 
            to="/" 
            className={`transition-colors duration-200 py-2 uppercase ${
              isLightPage
                ? isActive('/') ? 'text-[#008b99] font-black' : 'text-slate-700 hover:text-[#008b99]'
                : isActive('/') ? 'text-nexus-accent' : 'text-white hover:text-nexus-accent'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/propiedades" 
            className={`transition-colors duration-200 py-2 uppercase ${
              isLightPage
                ? isActive('/propiedades') ? 'text-[#008b99] font-black' : 'text-slate-700 hover:text-[#008b99]'
                : isActive('/propiedades') ? 'text-nexus-accent' : 'text-white hover:text-nexus-accent'
            }`}
          >
            Propiedades
          </Link>
          <Link 
            to="/servicios-360" 
            className={`transition-colors duration-200 py-2 uppercase ${
              isLightPage
                ? isActive('/servicios-360') ? 'text-[#008b99] font-black' : 'text-slate-700 hover:text-[#008b99]'
                : isActive('/servicios-360') ? 'text-nexus-accent' : 'text-white hover:text-nexus-accent'
            }`}
          >
            Servicios 360°
          </Link>
          <Link 
            to="/vende-tu-propiedad" 
            className={`transition-colors duration-200 py-2 uppercase ${
              isLightPage
                ? isActive('/vende-tu-propiedad') ? 'text-[#008b99] font-black' : 'text-slate-700 hover:text-[#008b99]'
                : isActive('/vende-tu-propiedad') ? 'text-nexus-accent' : 'text-white hover:text-nexus-accent'
            }`}
          >
            Vende tu Propiedad
          </Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link 
            to="/contacto" 
            className={`inline-flex px-6 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-200 active:scale-95 ${
              isLightPage
                ? 'bg-[#ea580c] hover:bg-[#c2410c] text-white shadow-md shadow-orange-950/20'
                : 'btn-neon-cian'
            }`}
          >
            Contactar
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 focus:outline-none w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-200 ${
            isLightPage
              ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/50'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          } ${isOpen ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full p-6 pb-7 flex flex-col gap-5 transition-all duration-300 origin-top z-40 ${
        isLightPage
          ? 'bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl'
          : 'bg-[#070a13]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.8)]'
      } ${
        isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col gap-4 text-base font-semibold">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl ${
              isLightPage
                ? isActive('/') ? 'text-[#008b99] font-bold bg-slate-200/40' : 'text-slate-800 hover:bg-slate-200/40'
                : isActive('/') ? 'text-nexus-accent' : 'text-white hover:bg-white/5'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/propiedades" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl ${
              isLightPage
                ? isActive('/propiedades') ? 'text-[#008b99] font-bold bg-slate-200/40' : 'text-slate-800 hover:bg-slate-200/40'
                : isActive('/propiedades') ? 'text-nexus-accent' : 'text-white hover:bg-white/5'
            }`}
          >
            Propiedades
          </Link>
          <Link 
            to="/servicios-360" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl ${
              isLightPage
                ? isActive('/servicios-360') ? 'text-[#008b99] font-bold bg-slate-200/40' : 'text-slate-800 hover:bg-slate-200/40'
                : isActive('/servicios-360') ? 'text-nexus-accent' : 'text-white hover:bg-white/5'
            }`}
          >
            Servicios 360°
          </Link>
          <Link 
            to="/vende-tu-propiedad" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl ${
              isLightPage
                ? isActive('/vende-tu-propiedad') ? 'text-[#008b99] font-bold bg-slate-200/40' : 'text-slate-800 hover:bg-slate-200/40'
                : isActive('/vende-tu-propiedad') ? 'text-nexus-accent' : 'text-white hover:bg-white/5'
            }`}
          >
            Vende tu Propiedad
          </Link>
        </div>

        <Link 
          to="/contacto" 
          onClick={handleLinkClick}
          className={`w-full inline-flex items-center justify-center py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-200 active:scale-95 text-center ${
            isLightPage
              ? 'bg-[#ea580c] text-white hover:bg-[#c2410c] shadow-md shadow-orange-950/20'
              : 'btn-neon-cian'
          }`}
        >
          Contactar
        </Link>

        {/* Botón adhesivo/sticker de cerrar en la línea inferior del menú */}
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute -bottom-4.5 left-1/2 -translate-x-1/2 px-4.5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap z-50 ${
            isLightPage
              ? 'bg-white border border-slate-300 text-slate-700 hover:text-[#008b99] shadow-md'
              : 'bg-[#070a13] border border-white/10 text-gray-400 hover:text-nexus-accent shadow-[0_4px_12px_rgba(0,0,0,0.5)]'
          }`}
        >
          <X className="w-3 h-3" />
          Cerrar menú
        </button>
      </div>
    </nav>
  );
}

