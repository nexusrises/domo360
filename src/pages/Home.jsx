import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Maximize2,
  ArrowRight,
  Search,
  Camera,
  ShieldCheck,
  Compass,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Sun,
  Moon,
  Building2,
  Share2,
  Check
} from 'lucide-react';
import { propiedades } from '../data/propiedadesData';

const renderPrecio = (precio) => {
  if (!precio) return null;
  const precioStr = String(precio).trim();
  
  if (precioStr.includes('$')) {
    const valor = precioStr.replace('$', '').trim();
    return (
      <>
        $. {valor} <span className="text-emerald-700/80 font-bold text-xs md:text-sm ml-1 tracking-wide">Dol.</span>
      </>
    );
  } else if (precioStr.includes('S/.')) {
    const valor = precioStr.replace('S/.', '').trim();
    return (
      <>
        S/. {valor} <span className="text-emerald-700/80 font-bold text-xs md:text-sm ml-1 tracking-wide">Sol.</span>
      </>
    );
  }
  return precio;
};

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('todos');

  // Estado del tema de iluminación ambiental
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('domo360_theme') || 'light';
  });

  const isDark = themeMode === 'dark';

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setThemeMode(next);
    localStorage.setItem('domo360_theme', next);
    window.dispatchEvent(new CustomEvent('theme-change', { detail: next }));
  };

  // Texto giratorio para el Hero
  const words = ['Recorridos 360°', 'Vuelos de Dron', 'Seguridad Jurídica'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.title = "Nexus Domo 360° | Primera Plataforma Inmobiliaria 360° en Juliaca y Sur del Perú";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 300);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // Manejo de búsqueda: envía automáticamente a /propiedades con query params
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (searchCategory !== 'todos') params.set('cat', searchCategory);
    navigate(`/propiedades?${params.toString()}`);
  };

  // Seleccionar propiedades destacadas (las 4 más atractivas)
  const propiedadesDestacadas = propiedades.slice(0, 4);
  const [carruselIndex, setCarruselIndex] = useState(0);

  const siguienteSlide = () => {
    setCarruselIndex((prev) => (prev + 1) % propiedadesDestacadas.length);
  };

  const anteriorSlide = () => {
    setCarruselIndex((prev) => (prev - 1 + propiedadesDestacadas.length) % propiedadesDestacadas.length);
  };

  // Autoplay suave para el carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      siguienteSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [carruselIndex]);

  const propiedadActual = propiedadesDestacadas[carruselIndex];

  // Estado para copiar enlace en tarjeta destacada
  const [copied, setCopied] = useState(false);
  const handleShare = async (e, prop) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/${prop.slug}`;
    const shareData = {
      title: `${prop.titulo} | Nexus Domo 360°`,
      text: `¡Mira esta propiedad destacada con recorrido 360° en ${prop.ubicacion}!`,
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name !== 'AbortError') console.log(err);
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden bg-transparent ${
      isDark ? 'text-slate-100' : 'text-slate-900'
    }`}>
      
      {/* Botón flotante para alternar modo claro / oscuro (solo icono, sin texto) */}
      <div className="fixed top-24 right-4 sm:right-6 z-40">
        <button
          onClick={toggleTheme}
          title={isDark ? "Activar modo claro" : "Activar modo nocturno"}
          aria-label={isDark ? "Activar modo claro" : "Activar modo nocturno"}
          className={`w-10 h-10 rounded-full border shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer ${
            isDark 
              ? 'bg-slate-900/90 text-amber-300 border-amber-400/40 hover:bg-slate-800 shadow-[0_0_15px_rgba(251,191,36,0.25)]' 
              : 'bg-white/95 text-slate-800 border-slate-300 hover:bg-slate-100 shadow-md'
          }`}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-300 transition-transform duration-300 hover:rotate-45" />
          ) : (
            <Moon className="w-5 h-5 text-cyan-800 transition-transform duration-300 hover:-rotate-12" />
          )}
        </button>
      </div>

      {/* 1. SECCIÓN HÉROE PRINCIPAL DE IMPACTO */}
      <header className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Glows ambientales sutiles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[130px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-400/10 rounded-full blur-[110px] pointer-events-none z-0"></div>

        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md ${
            isDark 
              ? 'bg-cyan-950/60 border border-cyan-400/40 text-cyan-300' 
              : 'bg-cyan-500/10 border border-cyan-500/25 text-[#008b99]'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 animate-pulse ${isDark ? 'text-cyan-300' : 'text-[#008b99]'}`} />
            <span>PORTAL INMOBILIARIO INMERSIVO LÍDER EN EL SUR</span>
          </div>

          <h1
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-5xl md:text-6xl font-black leading-[1.12] mb-5 tracking-tight font-display ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Encuentra tu propiedad con<br />
            <span
              className={`text-gradient-rise inline-block transition-all duration-300 transform ${isFading
                ? 'opacity-0 -translate-y-2 scale-95'
                : 'opacity-100 translate-y-0 scale-100'
                }`}
            >
              {words[wordIndex]}
            </span>
          </h1>

          <p
            style={{ textWrap: 'pretty' }}
            className={`text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            La primera plataforma inmobiliaria en <strong className={isDark ? 'text-white font-bold' : 'text-slate-900 font-bold'}>Juliaca, Puno y Arequipa</strong> que te permite caminar por casas, departamentos y terrenos desde tu celular con tomas aéreas y asesoría jurídica Sunarp garantizada.
          </p>

          {/* BUSCADOR QUE REDIRIGE A /PROPIEDADES */}
          <form 
            onSubmit={handleSearchSubmit}
            className={`w-full max-w-2xl rounded-full p-2 border shadow-xl flex items-center gap-2 backdrop-blur-xl transition-all duration-300 ${
              isDark 
                ? 'bg-slate-900/95 border-cyan-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.7)]' 
                : 'bg-white/95 border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.08)]'
            }`}
          >
            <div className="flex-grow flex items-center gap-3 pl-4 md:pl-6 pr-2">
              <Search className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-[#008b99]'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca por zona, calle o tipo (Ej: Salida Puno, Casa, Lote)..."
                className={`w-full bg-transparent border-0 text-xs md:text-sm font-semibold focus:outline-none focus:ring-0 ${
                  isDark ? 'text-white placeholder-slate-400' : 'text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>

            <div className={`hidden sm:flex items-center border-l px-3 py-1 ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            }`}>
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className={`bg-transparent text-xs font-bold border-0 cursor-pointer focus:ring-0 ${
                  isDark ? 'text-cyan-300 [&>option]:bg-slate-900 [&>option]:text-white' : 'text-slate-700 [&>option]:bg-white [&>option]:text-slate-900'
                }`}
              >
                <option value="todos">Todas las categorías</option>
                <option value="terrenos">Terrenos / Lotes</option>
                <option value="casas">Casas y Dptos</option>
                <option value="oficinas">Oficinas</option>
                <option value="tiendas">Tiendas / Locales</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-slate-900 hover:bg-[#00c4ee] hover:text-black transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md flex-shrink-0"
            >
              <span>Buscar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Accesos rápidos SEO */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-500'}>Búsquedas frecuentes:</span>
            <button
              type="button"
              onClick={() => navigate('/propiedades?q=salida+puno')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                isDark 
                  ? 'bg-slate-800 text-slate-200 hover:text-cyan-300 hover:bg-slate-700 border border-slate-700' 
                  : 'bg-slate-200/60 text-slate-700 hover:text-[#008b99]'
              }`}
            >
              Salida a Puno
            </button>
            <button
              type="button"
              onClick={() => navigate('/propiedades?q=la+capilla')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                isDark 
                  ? 'bg-slate-800 text-slate-200 hover:text-cyan-300 hover:bg-slate-700 border border-slate-700' 
                  : 'bg-slate-200/60 text-slate-700 hover:text-[#008b99]'
              }`}
            >
              La Capilla
            </button>
            <button
              type="button"
              onClick={() => navigate('/propiedades?cat=terrenos')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                isDark 
                  ? 'bg-slate-800 text-slate-200 hover:text-cyan-300 hover:bg-slate-700 border border-slate-700' 
                  : 'bg-slate-200/60 text-slate-700 hover:text-[#008b99]'
              }`}
            >
              Terrenos Solares
            </button>
          </div>
        </div>
      </header>

      {/* 2. CARRUSEL DE PROPIEDADES DESTACADAS DE LA SEMANA */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[#008b99] dark:text-cyan-400 text-xs font-black tracking-widest uppercase block mb-1 font-display">
              OPORTUNIDADES DE INVERSIÓN
            </span>
            <h2 className={`text-2xl sm:text-3xl font-black font-display tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Propiedades Destacadas
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/propiedades"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#008b99] hover:underline"
            >
              Ver las {propiedades.length} propiedades
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={anteriorSlide}
                aria-label="Propiedad anterior"
                className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={siguienteSlide}
                aria-label="Siguiente propiedad"
                className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta Destacada Grande en Formato Carrusel */}
        {propiedadActual && (
          <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 ${
            isDark 
              ? 'bg-[#0b1220] border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
              : 'bg-white/95 border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]'
          }`}>
            {/* Foto Portada con Badge 360 */}
            <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto w-full overflow-hidden bg-slate-950">
              <img
                src={propiedadActual.portada.startsWith('http') || propiedadActual.portada.startsWith('data:') ? propiedadActual.portada : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${propiedadActual.portada}`}
                alt={propiedadActual.titulo}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

              <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase border backdrop-blur-md flex items-center gap-1.5 ${propiedadActual.tipoColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                {propiedadActual.tipo}
              </span>

              {propiedadActual.tiene360 && (
                <span className="absolute top-4 right-4 bg-[#05140b]/95 border border-[#09d261]/45 text-[#4ade80] px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#09d261] animate-pulse"></span>
                  Tour 360° Disponible
                </span>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {propiedadActual.ubicacion}
                </span>
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                  {carruselIndex + 1} de {propiedadesDestacadas.length} destacadas
                </span>
              </div>
            </div>

            {/* Información Detallada de la Propiedad Destacada */}
            <div className="p-6 md:p-8 lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${
                  isDark ? 'text-cyan-400' : 'text-[#008b99]'
                }`}>
                  OPORTUNIDAD EXCLUSIVA
                </span>
                <h3 className={`text-xl md:text-2xl font-black font-display leading-snug mb-3 ${
                  isDark ? 'text-white drop-shadow-sm' : 'text-slate-900'
                }`}>
                  {propiedadActual.titulo}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed mb-6 font-normal line-clamp-3 ${
                  isDark ? 'text-slate-200' : 'text-slate-600'
                }`}>
                  {propiedadActual.descripcionCorta}
                </p>

                <div className={`p-4 rounded-2xl border mb-6 space-y-2 text-xs ${
                  isDark ? 'bg-slate-800/90 border-slate-700 text-slate-100 shadow-inner' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-[10px] uppercase ${isDark ? 'text-slate-300' : 'text-slate-400'}`}>Área:</span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-300">{propiedadActual.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-[10px] uppercase ${isDark ? 'text-slate-300' : 'text-slate-400'}`}>Dirección:</span>
                    <span className="font-semibold truncate max-w-[200px]" title={propiedadActual.direccion}>{propiedadActual.direccion}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-[10px] uppercase ${isDark ? 'text-slate-300' : 'text-slate-400'}`}>Zona:</span>
                    <span className="font-semibold">{propiedadActual.urbanizacion}</span>
                  </div>
                </div>
              </div>

              {/* Precio y Botones de Acción */}
              <div className={`pt-2 border-t flex flex-col gap-3 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className="flex items-baseline justify-between">
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${
                    isDark ? 'text-cyan-300' : 'text-cyan-700'
                  }`}>
                    PRECIO OFICIAL
                  </span>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-display">
                    {renderPrecio(propiedadActual.precio)}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2">
                  <Link
                    to={`/${propiedadActual.slug}`}
                    className="flex-grow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-slate-900 border border-slate-900 hover:bg-[#00c4ee] hover:text-black hover:border-[#00c4ee] transition-all duration-300 shadow-md"
                  >
                    Ver Tour 360° y Detalles
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => handleShare(e, propiedadActual)}
                    title="Compartir propiedad"
                    className={`relative p-3 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                      copied
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                        : 'bg-emerald-50/80 hover:bg-emerald-100 text-emerald-600 border-emerald-200 shadow-sm'
                    }`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Indicadores de bolitas para el carrusel */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {propiedadesDestacadas.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCarruselIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                carruselIndex === idx 
                  ? 'w-8 bg-[#008b99] dark:bg-cyan-400' 
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
              aria-label={`Ir a propiedad ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3. LOS 3 GRANDES BENEFICIOS DE LA EMPRESA (Presentados con Orgullo) */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className={`rounded-3xl p-8 md:p-12 border shadow-xl backdrop-blur-xl ${
          isDark 
            ? 'bg-slate-900/70 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'bg-white/80 border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.05)]'
        }`}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#008b99] dark:text-cyan-400 text-xs font-black tracking-widest uppercase block mb-2 font-display">
              TECNOLOGÍA Y CONFIANZA INMOBILIARIA
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-display mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              ¿Por qué elegir Nexus Domo 360°?
            </h2>
            <p className={`text-sm md:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Eliminamos la incertidumbre y las visitas a ciegas. Somos el primer ecosistema inmobiliario del sur del Perú que fusiona realidad virtual interactiva con rigor legal registral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] text-left flex flex-col justify-between ${
              isDark ? 'bg-slate-900/90 border-slate-700/80 hover:border-cyan-400/50 shadow-md' : 'bg-slate-50 border-slate-200/80 hover:border-cyan-400/40 hover:shadow-md'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 shadow-sm">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className={`font-black text-lg mb-2 font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  1. Recorridos Virtuales 360° y Vuelos de Dron
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
                  No compres a ciegas. Camina por el interior de casas, visualiza la distribución de habitaciones y analiza el entorno urbano y accesos con tomas aéreas de dron en 4K.
                </p>
              </div>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ahorra 90% de visitas innecesarias
              </span>
            </div>

            {/* Pilar 2 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] text-left flex flex-col justify-between ${
              isDark ? 'bg-slate-900/90 border-slate-700/80 hover:border-emerald-400/50 shadow-md' : 'bg-slate-50 border-slate-200/80 hover:border-emerald-400/40 hover:shadow-md'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className={`font-black text-lg mb-2 font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  2. Seguridad Jurídica y Verificación Sunarp
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
                  Cero riesgos de estafas. Nuestro equipo de asesores revisa previamente la partida registral en Sunarp, gravámenes, cargas, minutas e identidad de los propietarios.
                </p>
              </div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Compra 100% formal y transparente
              </span>
            </div>

            {/* Pilar 3 */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] text-left flex flex-col justify-between ${
              isDark ? 'bg-slate-900/90 border-slate-700/80 hover:border-blue-400/50 shadow-md' : 'bg-slate-50 border-slate-200/80 hover:border-blue-400/40 hover:shadow-md'
            }`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className={`font-black text-lg mb-2 font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  3. Cobertura Estratégica en Todo el Sur
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
                  Gestionamos propiedades en las zonas de mayor plusvalía de <strong>Juliaca, Puno, Arequipa y Tacna</strong>, conectando compradores locales, nacionales y residentes en el extranjero.
                </p>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Presencia física y digital sólida
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BANNER DE CAPTACIÓN: ¿TIENES UNA PROPIEDAD PARA VENDER O ALQUILAR? */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20 relative z-10">
        <div className={`rounded-3xl p-8 md:p-10 border shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-left ${
          isDark 
            ? 'bg-gradient-to-r from-slate-900 to-cyan-950/40 border-cyan-500/30' 
            : 'bg-gradient-to-r from-slate-900 to-slate-800 text-white border-slate-700'
        }`}>
          <div className="max-w-xl">
            <span className="text-cyan-400 text-xs font-black tracking-widest uppercase block mb-1">
              ¿ERES PROPIETARIO O INMOBILIARIA?
            </span>
            <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-white mb-2">
              Vende tu propiedad más rápido con un Tour 360°
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Digitalizamos tu casa, lote o local con dron y cámaras panorámicas. Publicamos tu inmueble ante miles de compradores listos para invertir.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <Link
              to="/vende-tu-propiedad"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-black uppercase tracking-wider text-xs bg-[#00c4ee] text-black hover:bg-white transition-all duration-300 shadow-lg active:scale-95"
            >
              Publicar mi Inmueble
            </Link>
            <Link
              to="/propiedades"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
