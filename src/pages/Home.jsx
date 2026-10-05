import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Search,
  Camera,
  ShieldCheck,
  Compass,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Share2,
  Check,
  Building2,
  Video,
  Layers,
  Hotel,
  TrendingUp,
  Eye,
  Clock,
  PhoneCall
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

  // Texto giratorio para el Hero con palabras clave SEO
  const words = ['Tours 360°', 'Vuelos de Dron', 'Seguridad Jurídica'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.title = "Nexus Domo 360° | Tours Virtuales 360°, Lotes y Propiedades en Juliaca y Sur del Perú";
    localStorage.setItem('domo360_theme', 'light');
    window.dispatchEvent(new CustomEvent('theme-change', { detail: 'light' }));
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
  }, [words.length]);

  // Manejo de búsqueda: envía automáticamente a /propiedades con query params
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (searchCategory !== 'todos') params.set('cat', searchCategory);
    navigate(`/propiedades?${params.toString()}`);
  };

  // Seleccionar propiedades destacadas
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
  }, [carruselIndex, propiedadesDestacadas.length]);

  // Precarga ultra rápida de imágenes en memoria
  useEffect(() => {
    propiedadesDestacadas.forEach((prop) => {
      const src = prop.portada.startsWith('http') || prop.portada.startsWith('data:')
        ? prop.portada
        : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${prop.portada}`;
      const img = new Image();
      img.src = src;
    });
  }, []);

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
    <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden bg-transparent text-slate-900">
      
      {/* 1. SECCIÓN HÉROE PRINCIPAL DE IMPACTO */}
      <header className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Glows ambientales sutiles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[130px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-400/10 rounded-full blur-[110px] pointer-events-none z-0"></div>

        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md bg-cyan-500/10 border border-cyan-500/25 text-[#008b99]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#008b99]" />
            <span>PORTAL INMOBILIARIO INMERSIVO LÍDER EN JULIACA Y EL SUR DEL PERÚ</span>
          </div>

          <h1
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.12] mb-5 tracking-tight font-display text-slate-900"
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

          <div
            style={{ textWrap: 'pretty' }}
            className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium text-slate-600 space-y-2"
          >
            <p className="font-semibold text-slate-800">
              Una foto muestra. Un video llama la atención. Un <strong className="text-[#008b99]">Tour 360°</strong> hace que tu cliente camine, entienda y compre antes de viajar.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              La primera plataforma inmobiliaria en <strong className="text-slate-900 font-bold">Juliaca, Puno y el Sur del Perú</strong> que te permite recorrer casas, departamentos y proyectos de terrenos desde tu celular con títulos verificados en SUNARP.
            </p>
          </div>

          {/* BUSCADOR QUE REDIRIGE A /PROPIEDADES */}
          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-2xl rounded-full p-2 border shadow-xl flex items-center gap-2 backdrop-blur-xl transition-all duration-300 bg-white/95 border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
          >
            <div className="flex-grow flex items-center gap-3 pl-4 md:pl-6 pr-2">
              <Search className="w-5 h-5 flex-shrink-0 text-[#008b99]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca por zona, calle o tipo (Ej: Salida Puno, Casa, Lote)..."
                className="w-full bg-transparent border-0 text-xs md:text-sm font-semibold focus:outline-none focus:ring-0 text-slate-900 placeholder-slate-400"
              />
            </div>

            <div className="hidden sm:flex items-center border-l px-3 py-1 border-slate-200">
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="bg-transparent text-xs font-bold border-0 cursor-pointer focus:ring-0 text-slate-700 [&>option]:bg-white [&>option]:text-slate-900"
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
              className="px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-900/10 flex-shrink-0"
            >
              <span>Buscar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Accesos rápidos SEO */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-slate-500">Búsquedas frecuentes:</span>
            <button
              type="button"
              onClick={() => navigate('/propiedades?q=salida+puno')}
              className="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer bg-slate-200/60 text-slate-700 hover:text-[#008b99]"
            >
              Salida a Puno
            </button>
            <button
              type="button"
              onClick={() => navigate('/propiedades?q=la+capilla')}
              className="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer bg-slate-200/60 text-slate-700 hover:text-[#008b99]"
            >
              La Capilla
            </button>
            <button
              type="button"
              onClick={() => navigate('/propiedades?cat=terrenos')}
              className="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer bg-slate-200/60 text-slate-700 hover:text-[#008b99]"
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
            <span className="text-[#008b99] text-xs font-black tracking-widest uppercase block mb-1 font-display">
              OPORTUNIDADES DE INVERSIÓN
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-slate-900">
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
                className="p-2 rounded-xl border transition-all duration-200 cursor-pointer bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={siguienteSlide}
                aria-label="Siguiente propiedad"
                className="p-2 rounded-xl border transition-all duration-200 cursor-pointer bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta Destacada Grande en Formato Carrusel */}
        {propiedadActual && (
          <div className="rounded-3xl border overflow-hidden shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 bg-white/95 border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            {/* Foto Portada con Badge 360 y transición fluida sin lag */}
            <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto w-full overflow-hidden bg-slate-950 min-h-[260px] sm:min-h-[350px]">
              {propiedadesDestacadas.map((prop, idx) => {
                const isActivo = carruselIndex === idx;
                const imgSrc = prop.portada.startsWith('http') || prop.portada.startsWith('data:')
                  ? prop.portada
                  : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${prop.portada}`;

                return (
                  <div
                    key={prop.id || idx}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                      isActivo ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={prop.titulo}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

                    <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase border backdrop-blur-md flex items-center gap-1.5 ${prop.tipoColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      {prop.tipo}
                    </span>

                    {prop.tiene360 && (
                      <span className="absolute top-4 right-4 bg-[#05140b]/95 border border-[#09d261]/45 text-[#4ade80] px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#09d261] animate-pulse"></span>
                        Tour 360° Disponible
                      </span>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {prop.ubicacion}
                      </span>
                      <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                        {idx + 1} de {propiedadesDestacadas.length} destacadas
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Información Detallada de la Propiedad Destacada */}
            <div className="p-6 md:p-8 lg:col-span-5 flex flex-col justify-between text-left transition-all duration-300">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block text-[#008b99]">
                  OPORTUNIDAD EXCLUSIVA
                </span>
                <h3 className="text-xl md:text-2xl font-black font-display leading-snug mb-3 text-slate-900">
                  {propiedadActual.titulo}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed mb-6 font-normal line-clamp-3 text-slate-600">
                  {propiedadActual.descripcionCorta}
                </p>

                <div className="p-4 rounded-2xl border mb-6 space-y-2 text-xs bg-slate-50 border-slate-200 text-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[10px] uppercase text-slate-400">Área:</span>
                    <span className="font-bold text-cyan-600">{propiedadActual.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[10px] uppercase text-slate-400">Dirección:</span>
                    <span className="font-semibold truncate max-w-[200px]" title={propiedadActual.direccion}>{propiedadActual.direccion}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[10px] uppercase text-slate-400">Zona:</span>
                    <span className="font-semibold">{propiedadActual.urbanizacion}</span>
                  </div>
                </div>
              </div>

              {/* Precio y Botones de Acción */}
              <div className="pt-2 border-t flex flex-col gap-3 border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-700">
                    PRECIO OFICIAL
                  </span>
                  <span className="text-2xl font-black text-emerald-600 font-display">
                    {renderPrecio(propiedadActual.precio)}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2">
                  <Link
                    to={`/${propiedadActual.slug}`}
                    className="flex-grow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-emerald-600 border border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-300 shadow-md shadow-emerald-900/10"
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
                  ? 'w-8 bg-[#008b99]' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir a propiedad ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN PROTAGONISTA: TOURS 360° PARA LOTES Y TERRENOS CON DOMO 360° */}
      <section id="tours-360-lotes" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="rounded-3xl p-8 md:p-12 border shadow-xl relative overflow-hidden bg-white/95 border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] text-slate-900">
          {/* Luces de ambientación sutiles */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Encabezado de la sección */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase mb-3 bg-cyan-500/10 border border-cyan-500/25 text-[#008b99]">
                <Camera className="w-3.5 h-3.5 text-[#008b99]" />
                <span>TOURS VIRTUALES 360° & VUELOS DE DRON</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-slate-900 mb-4">
                Tours 360° para Lotes y Terrenos con <span className="text-gradient-rise">Domo 360°</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                ¿Inversionistas que están fuera de la ciudad o de viaje y no pueden viajar a ver la zona? ¿Clientes con dudas intentando descifrar un plano 2D en papel?
              </p>
            </div>

            {/* Mensaje Clave Destacado */}
            <div className="max-w-2xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-cyan-50/90 border border-cyan-200/80 text-center shadow-sm">
              <p className="text-sm sm:text-base font-bold text-cyan-900">
                “El cliente deja de imaginar dónde queda su terreno y lo ve con sus propios ojos antes de pagar.”
              </p>
            </div>

            {/* Los 3 Pilares del Sistema de Lotes 360° - Tarjetas Claras como Imagen 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
              {/* Pilar 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-[#008b99] flex items-center justify-center mb-4">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2 font-display">
                  Dron 4K & Entorno Real 360°
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tomas aéreas a altitud estratégica con dron DJI para verificar vías de acceso asfaltadas, postes de luz, topografía y cercanía a avenidas principales.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-400/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2 font-display">
                  Linderos y Manzanas Lote por Lote
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  El comprador toca cualquier lote en pantalla y ve de inmediato metraje exacto (ej. 120 m²), frente, fondo, manzana y orientación solar.
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-[#008b99] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2 font-display">
                  Disponibilidad & Separación en Tiempo Real
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lotes clasificados en Disponibles (verde), Separados (amarillo) y Vendidos (rojo), con enlace directo a WhatsApp para apartar sin intermediarios.
                </p>
              </div>
            </div>

            {/* Barra de llamada a la acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-200">
              <Link
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-900/15 cursor-pointer"
              >
                <span>Cotizar Tour 360° para mi Proyecto de Lotes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/propiedades?cat=terrenos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50/70 border border-emerald-200 hover:bg-emerald-100/70 transition-all duration-300 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-emerald-600" />
                <span>Explorar Lotes Disponibles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUCIONES INMERSIVAS POR INDUSTRIA (SEGMENTACIÓN POR 4 INDUSTRIAS) */}
      <section id="soluciones-industrias" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-2 bg-slate-900/5 text-[#008b99] border border-cyan-500/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>SOLUCIONES DE ALTO IMPACTO COMERCIAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-slate-900 mb-3">
            Tecnología <span className="text-gradient-rise">Domo 360°</span> Adaptada a tu Sector
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
            No importa si comercializas terrenos por hectáreas, departamentos de estreno o gestionas un hotel. Diseñamos la experiencia inmersiva que multiplica tus conversiones y ahorra tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Industria 1: Lotizadoras & Desarrolladores */}
          <div className="rounded-3xl p-7 border bg-white border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-[#008b99] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  LOTIZACIONES & PROYECTOS
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black font-display text-slate-900 mb-2">
                Lotizadoras & Desarrolladores
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                Recorridos aéreos con dron y planos interactivos con delimitación exacta de linderos, metrajes y disponibilidad lote por lote en tiempo real.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                <p className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Venta a distancia garantizada:</strong> Cierra tratos con inversionistas de Lima, Arequipa o el extranjero sin que viajen a pisar tierra.</span>
                </p>
              </div>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-sm"
            >
              <span>Cotizar Proyecto de Lotes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Industria 2: Inmobiliarias & Propietarios */}
          <div className="rounded-3xl p-7 border bg-white border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  CASAS & DEPARTAMENTOS
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black font-display text-slate-900 mb-2">
                Inmobiliarias & Propietarios
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                Tours virtuales 360° habitación por habitación. El comprador inspecciona acabados, iluminación y distribución arquitectónica antes de pedir cita.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                <p className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Filtra curiosos:</strong> Ahorra hasta el 90% de traslados innecesarios y muestra tu propiedad solo a clientes listos para firmar.</span>
                </p>
              </div>
            </div>
            <Link
              to="/vende-tu-propiedad"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-sm"
            >
              <span>Publicar Inmueble con Tour 360°</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Industria 3: Constructoras & Ingenieros */}
          <div className="rounded-3xl p-7 border bg-white border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  AVANCES DE OBRA
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black font-display text-slate-900 mb-2">
                Constructoras & Ingenieros
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                Control y reporte visual mensual en 360° con vuelos de dron programados para registrar el vaciado, estructura y acabados de tu edificación.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                <p className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Reportes para inversionistas:</strong> Muestra el avance real de obra a socios y bancos de forma incontrastable y sin pisar barro.</span>
                </p>
              </div>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-sm"
            >
              <span>Solicitar Bitácora de Obra con Dron</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Industria 4: Negocios, Hoteles & Salones */}
          <div className="rounded-3xl p-7 border bg-white border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Hotel className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  HOSPEDAJE & EVENTOS
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black font-display text-slate-900 mb-2">
                Negocios, Hoteles & Salones
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                Digitalización de instalaciones para Google Maps, Street View y fichas comerciales interactivas para salones de recepciones y hospedajes turísticos.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                <p className="text-xs font-semibold text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Reservas anticipadas seguras:</strong> Permite que los huéspedes conozcan cada ambiente antes de reservar con total confianza.</span>
                </p>
              </div>
            </div>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-sm"
            >
              <span>Digitalizar mi Local en 360°</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOS 3 GRANDES BENEFICIOS DE LA EMPRESA (Presentados con Orgullo) */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="rounded-3xl p-8 md:p-12 border shadow-xl backdrop-blur-xl bg-white/80 border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#008b99] text-xs font-black tracking-widest uppercase block mb-2 font-display">
              TECNOLOGÍA Y CONFIANZA INMOBILIARIA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-display mb-4 text-slate-900">
              ¿Por qué elegir Nexus <span className="text-gradient-rise">Domo 360°</span>?
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-600">
              Eliminamos la incertidumbre y las visitas a ciegas. Somos el primer ecosistema inmobiliario del sur del Perú que fusiona realidad virtual interactiva con rigor legal registral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] text-left flex flex-col justify-between bg-slate-50 border-slate-200/80 hover:border-cyan-400/40 hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-[#008b99] flex items-center justify-center mb-5 shadow-sm">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg mb-2 font-display text-slate-900">
                  1. Recorridos Virtuales 360° y Vuelos de Dron
                </h3>
                <p className="text-xs md:text-sm leading-relaxed mb-4 text-slate-600">
                  No compres a ciegas. Camina por el interior de casas, visualiza la distribución de habitaciones y analiza el entorno urbano y accesos con tomas aéreas de dron en 4K.
                </p>
              </div>
              <span className="text-[#008b99] font-bold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ahorra 90% de visitas innecesarias
              </span>
            </div>

            {/* Pilar 2 */}
            <div className="p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] text-left flex flex-col justify-between bg-slate-50 border-slate-200/80 hover:border-emerald-400/40 hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg mb-2 font-display text-slate-900">
                  2. Seguridad Jurídica y Verificación Sunarp
                </h3>
                <p className="text-xs md:text-sm leading-relaxed mb-4 text-slate-600">
                  Cero riesgos de estafas. Nuestro equipo de asesores revisa previamente la partida registral en Sunarp, gravámenes, cargas, minutas e identidad de los propietarios.
                </p>
              </div>
              <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Compra 100% formal y transparente
              </span>
            </div>

            {/* Pilar 3 */}
            <div className="p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] text-left flex flex-col justify-between bg-slate-50 border-slate-200/80 hover:border-blue-400/40 hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-black text-lg mb-2 font-display text-slate-900">
                  3. Cobertura Estratégica en Todo el Sur
                </h3>
                <p className="text-xs md:text-sm leading-relaxed mb-4 text-slate-600">
                  Gestionamos propiedades en las zonas de mayor plusvalía de <strong>Juliaca, Puno, Arequipa y Tacna</strong>, conectando compradores locales, nacionales y residentes en el extranjero.
                </p>
              </div>
              <span className="text-blue-600 font-bold text-xs flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Presencia física y digital sólida
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BANNER DE CAPTACIÓN DUAL: PROPIETARIOS Y EMPRESAS */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20 relative z-10">
        <div className="rounded-3xl p-8 md:p-10 border shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left bg-gradient-to-br from-white via-cyan-50/30 to-white text-slate-900 border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
          <div className="max-w-xl">
            <span className="text-[#008b99] text-xs font-black tracking-widest uppercase block mb-1">
              ¿LISTO PARA DIGITALIZAR TUS PROPIEDADES O COMPRAR?
            </span>
            <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 mb-2">
              Lleva tus ventas inmobiliarias al siguiente nivel
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Digitalizamos tu casa, lote o proyecto urbano con Dron DJI y fotografía 360°. O si buscas invertir, explora cientos de oportunidades con verificación legal garantizada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0 w-full lg:w-auto">
            <Link
              to="/contacto"
              className="text-center px-6 py-3.5 rounded-xl font-black uppercase tracking-wider text-xs bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-900/15 active:scale-95"
            >
              Cotizar Tours 360° / Web
            </Link>
            <Link
              to="/vende-tu-propiedad"
              className="text-center px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#008b99] transition-all duration-300 shadow-sm"
            >
              Publicar mi Inmueble
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

