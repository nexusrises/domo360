import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, HeartPulse, Briefcase, Users } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    setIsServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-display ${
      isScrolled 
        ? 'bg-[#070a13]/92 backdrop-blur-md border-b border-[#00f2fe]/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="text-2xl md:text-3xl font-logo flex items-center gap-2 group select-none tracking-wide">
          <img src={`${import.meta.env.BASE_URL}logo3.2.png`} alt="Nexus Rise Logo" className="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-300 group-hover:scale-110" />

          <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">Nexus</span>
          <span className="text-gradient-rise drop-shadow-[0_2px_8px_rgba(0,242,254,0.25)] ml-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">Rise</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider">
          <Link 
            to="/" 
            className={`hover:text-nexus-accent transition-colors duration-200 py-2 uppercase ${isActive('/') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Inicio
          </Link>

          {/* Dropdown Servicios */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 py-2 hover:text-nexus-accent transition-colors duration-200 cursor-pointer uppercase ${
                location.pathname.startsWith('/servicios') ? 'text-nexus-accent' : 'text-white'
              }`}
            >
              Servicios <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Content con Contenedor Puente (pt-2) para evitar gap */}
            <div className={`absolute left-0 top-full pt-2 w-80 transition-all duration-300 origin-top-left z-50 ${
              isServicesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
            }`}>
              <div className="rounded-2xl glass-panel border border-[#00f2fe]/20 shadow-2xl p-4">
                <div className="grid gap-3">
                  <Link 
                    to="/servicios/Constructoras&Inmobiliarias" 
                    onClick={handleLinkClick}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                  >
                    <div className="p-2 rounded-lg bg-nexus-accent/10 text-nexus-accent group-hover:bg-nexus-accent group-hover:text-white transition-colors duration-200">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-wider">Constructoras & Inmobiliarias</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-sans leading-relaxed">Páginas corporativas para constructoras, contratistas y preventas inmobiliarias.</p>
                    </div>
                  </Link>

                  <Link 
                    to="/servicios/Clínicas&CentrosMédicos" 
                    onClick={handleLinkClick}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                  >
                    <div className="p-2 rounded-lg bg-nexus-blue/10 text-nexus-blue group-hover:bg-nexus-blue group-hover:text-white transition-colors duration-200">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-wider">Clínicas & Centros Médicos</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-sans leading-relaxed">Portales con catálogo de especialidades, equipamiento y citas en línea.</p>
                    </div>
                  </Link>

                  <Link 
                    to="/servicios/empresas&comercios" 
                    onClick={handleLinkClick}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-wider">Empresas & Comercios</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-sans leading-relaxed">Sitios corporativos y catálogos digitales interactivos para comercios locales.</p>
                    </div>
                  </Link>

                  <Link 
                    to="/servicios/Profesionales&Consultores" 
                    onClick={handleLinkClick}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                  >
                    <div className="p-2 rounded-lg bg-nexus-purple/10 text-nexus-purple group-hover:bg-nexus-purple group-hover:text-white transition-colors duration-200">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-wider">Profesionales & Consultores</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-sans leading-relaxed">Portafolios interactivos premium, marca personal y blog corporativo optimizado.</p>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>

          <Link 
            to="/proceso" 
            className={`hover:text-nexus-accent transition-colors duration-200 py-2 uppercase ${isActive('/proceso') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Proceso
          </Link>
          <Link 
            to="/portafolio" 
            className={`hover:text-nexus-accent transition-colors duration-200 py-2 uppercase ${isActive('/portafolio') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Portafolio
          </Link>
          <Link 
            to="/nosotros" 
            className={`hover:text-nexus-accent transition-colors duration-200 py-2 uppercase ${isActive('/nosotros') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Nosotros
          </Link>
        </div>

        {/* Contact Button (Desktop) - Estilo botón neón cian */}
        <div className="hidden md:block">
          <Link 
            to="/contacto" 
            className="inline-flex btn-neon-cian px-6 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-200 active:scale-95"
          >
            Contactar
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/5"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#070a13]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.8)] p-6 flex flex-col gap-5 transition-all duration-300 origin-top z-40 ${
        isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col gap-4 text-base font-semibold">
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl hover:bg-white/5 ${isActive('/') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Inicio
          </Link>

          {/* Servicios Mobile Group */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest px-2">Servicios</span>
            <Link 
              to="/servicios/Constructoras&Inmobiliarias" 
              onClick={handleLinkClick}
              className={`flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 ${isActive('/servicios/Constructoras&Inmobiliarias') ? 'text-nexus-accent' : 'text-white'}`}
            >
              <Building2 className="w-5 h-5 text-nexus-accent" /> Constructoras & Inmobiliarias
            </Link>
            <Link 
              to="/servicios/Clínicas&CentrosMédicos" 
              onClick={handleLinkClick}
              className={`flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 ${isActive('/servicios/Clínicas&CentrosMédicos') ? 'text-nexus-blue' : 'text-white'}`}
            >
              <HeartPulse className="w-5 h-5 text-nexus-blue" /> Clínicas & Centros Médicos
            </Link>
            <Link 
              to="/servicios/empresas&comercios" 
              onClick={handleLinkClick}
              className={`flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 ${isActive('/servicios/empresas&comercios') ? 'text-amber-500' : 'text-white'}`}
            >
              <Briefcase className="w-5 h-5 text-amber-500" /> Empresas & Comercios
            </Link>
            <Link 
              to="/servicios/Profesionales&Consultores" 
              onClick={handleLinkClick}
              className={`flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 ${isActive('/servicios/Profesionales&Consultores') ? 'text-nexus-purple' : 'text-white'}`}
            >
              <Users className="w-5 h-5 text-nexus-purple" /> Profesionales & Consultores
            </Link>

          </div>

          <div className="h-px bg-white/10 my-1"></div>

          <Link 
            to="/proceso" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl hover:bg-white/5 ${isActive('/proceso') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Proceso
          </Link>
          <Link 
            to="/portafolio" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl hover:bg-white/5 ${isActive('/portafolio') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Portafolio
          </Link>
          <Link 
            to="/nosotros" 
            onClick={handleLinkClick}
            className={`p-2 rounded-xl hover:bg-white/5 ${isActive('/nosotros') ? 'text-nexus-accent' : 'text-white'}`}
          >
            Nosotros
          </Link>
        </div>

        <Link 
          to="/contacto" 
          onClick={handleLinkClick}
          className="w-full inline-flex items-center justify-center btn-neon-cian py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-200 active:scale-95 text-center"
        >
          Contactar
        </Link>
      </div>
    </nav>
  );
}

