import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Maximize2,
  ArrowRight,
  Search,
  X,
  Grid,
  Map,
  Home as HomeIcon,
  Briefcase,
  Store,
  Share2,
  Check
} from 'lucide-react';
import { propiedades } from '../data/propiedadesData';
import { fetchLotesFromSheets } from '../services/googleSheets';

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

export default function Propiedades() {
  const [searchTerm, setSearchTerm] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  });
  const [activeCategory, setActiveCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || 'todos';
  });

  const categorias = [
    { id: 'todos', label: 'Todos', labelShort: 'Todos', icon: Grid, count: propiedades.length },
    { id: 'terrenos', label: 'Terrenos / Lotizaciones', labelShort: 'Terrenos', icon: Map, count: propiedades.filter(p => p.tipo === 'TERRENO / LOTE').length },
    { id: 'casas', label: 'Casas y Departamentos', labelShort: 'Casas/Dptos', icon: HomeIcon, count: propiedades.filter(p => p.tipo === 'CASA' || p.tipo === 'CASA RESIDENCIAL' || p.tipo === 'DEPARTAMENTO').length },
    { id: 'oficinas', label: 'Oficinas Corporativas', labelShort: 'Oficinas', icon: Briefcase, count: propiedades.filter(p => p.tipo === 'OFICINA').length },
    { id: 'tiendas', label: 'Tiendas / Locales', labelShort: 'Tiendas/Locales', icon: Store, count: propiedades.filter(p => p.tipo === 'TIENDA / LOCAL').length }
  ];

  useEffect(() => {
    document.title = "Catálogo de Propiedades en Juliaca y Puno | Casas, Terrenos y Recorridos 360° | Nexus Domo 360°";
    fetchLotesFromSheets().catch((err) => {
      console.warn("Fallo al precargar lotes desde Google Sheets:", err);
    });
  }, []);

  // Filtrado en tiempo real interactivo
  const propiedadesFiltradas = propiedades.filter((p) => {
    const matchCategory = activeCategory === 'todos' ||
      (activeCategory === 'terrenos' && p.tipo === 'TERRENO / LOTE') ||
      (activeCategory === 'casas' && (p.tipo === 'CASA' || p.tipo === 'CASA RESIDENCIAL' || p.tipo === 'DEPARTAMENTO')) ||
      (activeCategory === 'oficinas' && p.tipo === 'OFICINA') ||
      (activeCategory === 'tiendas' && p.tipo === 'TIENDA / LOCAL');

    const term = searchTerm.toLowerCase();
    const matchSearch = p.titulo.toLowerCase().includes(term) ||
      p.ubicacion.toLowerCase().includes(term) ||
      p.descripcionCorta.toLowerCase().includes(term) ||
      p.descripcionCompleta.toLowerCase().includes(term);

    return matchCategory && matchSearch;
  });

  const [copiedId, setCopiedId] = useState(null);

  const handleShare = async (e, propiedad) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/${propiedad.slug}`;
    const shareData = {
      title: `${propiedad.titulo} | Nexus Domo 360°`,
      text: `¡Mira esta propiedad con recorrido virtual 360° en ${propiedad.ubicacion}!`,
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Error sharing:', err);
        }
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedId(propiedad.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(propiedad.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-900 flex flex-col items-center overflow-x-hidden bg-transparent">
      
      {/* Header Catálogo */}
      <header className="relative w-full pt-32 pb-4 md:pt-36 md:pb-6 px-6 overflow-hidden flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="text-[#008b99] text-xs md:text-sm font-black tracking-widest uppercase block mb-3 font-display drop-shadow-[0_2px_8px_rgba(0,180,216,0.15)]">
            CATÁLOGO OFICIAL DE PROPIEDADES
          </span>

          <h1
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-4.5 tracking-tight font-display"
          >
            Inmuebles Verificados con <span className="text-gradient-rise">Tours 360°</span>
          </h1>

          <p
            style={{ textWrap: 'pretty' }}
            className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed mb-6 font-medium"
          >
            Explora casas, departamentos, terrenos solares y locales en Juliaca, Puno y el sur del Perú con recorridos virtuales y asesoría jurídica Sunarp garantizada.
          </p>
        </div>
      </header>

      {/* BARRA DE BÚSQUEDA Y FILTROS ESTILO AIRBNB INTEGRADA */}
      <div className="w-full max-w-3xl mx-auto px-6 mb-8 relative z-20">
        <div className="hidden md:flex bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-full p-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] items-center justify-between gap-1 w-full relative">
          
          <div className="flex-grow flex items-center gap-3.5 pl-6 pr-4 py-1">
            <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
            <div className="flex flex-col min-w-0 w-full text-left">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">¿Dónde buscas?</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por zona, calle o tipo de inmueble..."
                className="bg-transparent border-0 p-0 text-xs md:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 w-full"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-slate-700 transition cursor-pointer flex-shrink-0"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="w-px h-10 bg-slate-200 self-center"></div>

          <div className="w-[32%] flex items-center gap-3.5 px-6 py-1 text-left relative cursor-pointer group/select">
            <div className="flex flex-col min-w-0 w-full">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Categoría</label>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="bg-transparent border-0 p-0 text-xs md:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-0 w-full cursor-pointer appearance-none pr-6 [&>option]:bg-white [&>option]:text-slate-900 font-display"
              >
                <option value="todos">Todos ({propiedades.length})</option>
                <option value="terrenos">Terrenos ({propiedades.filter(p => p.tipo === 'TERRENO / LOTE').length})</option>
                <option value="casas">Casas y Dptos ({propiedades.filter(p => p.tipo === 'CASA' || p.tipo === 'CASA RESIDENCIAL' || p.tipo === 'DEPARTAMENTO').length})</option>
                <option value="oficinas">Oficinas ({propiedades.filter(p => p.tipo === 'OFICINA').length})</option>
                <option value="tiendas">Tiendas ({propiedades.filter(p => p.tipo === 'TIENDA / LOCAL').length})</option>
              </select>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-slate-800 transition-colors duration-200">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          <div className="pr-1.5 flex-shrink-0">
            <button
              onClick={() => {
                if (searchTerm || activeCategory !== 'todos') {
                  setSearchTerm('');
                  setActiveCategory('todos');
                }
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer ${
                searchTerm || activeCategory !== 'todos'
                  ? 'bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/25 hover:text-red-700 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                  : 'bg-[#ea580c] text-white shadow-md shadow-orange-950/20 hover:bg-[#c2410c]'
              }`}
              title={searchTerm || activeCategory !== 'todos' ? "Limpiar filtros" : "Búsqueda activa"}
            >
              {searchTerm || activeCategory !== 'todos' ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Versión Móvil */}
        <div className="md:hidden flex flex-col gap-3 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-4 shadow-lg text-left">
          <div className="flex items-center gap-3 bg-slate-100/70 border border-slate-200/60 rounded-2xl px-4 py-3">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <div className="flex flex-col min-w-0 w-full">
              <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Buscar propiedad</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ej. Salida a Puno, La Capilla..."
                className="bg-transparent border-0 p-0 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 w-full"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-slate-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 bg-slate-100/70 border border-slate-200/60 rounded-2xl px-4 py-3 relative group/select">
            <div className="flex flex-col min-w-0 w-full">
              <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Categoría</label>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="bg-transparent border-0 p-0 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-0 w-full cursor-pointer appearance-none pr-6 [&>option]:bg-white [&>option]:text-slate-900 font-display"
              >
                <option value="todos">Todos ({propiedades.length})</option>
                <option value="terrenos">Terrenos ({propiedades.filter(p => p.tipo === 'TERRENO / LOTE').length})</option>
                <option value="casas">Casas y Dptos ({propiedades.filter(p => p.tipo === 'CASA' || p.tipo === 'CASA RESIDENCIAL' || p.tipo === 'DEPARTAMENTO').length})</option>
                <option value="oficinas">Oficinas ({propiedades.filter(p => p.tipo === 'OFICINA').length})</option>
                <option value="tiendas">Tiendas ({propiedades.filter(p => p.tipo === 'TIENDA / LOCAL').length})</option>
              </select>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>

          {(searchTerm || activeCategory !== 'todos') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('todos');
              }}
              className="w-full py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 hover:bg-red-500/20 font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
              Limpiar Búsqueda y Filtros
            </button>
          )}
        </div>
      </div>

      {/* GRID DE TODAS LAS PROPIEDADES */}
      <section className="w-full max-w-7xl mx-auto px-3.5 md:px-6 pb-16 relative z-10">
        {propiedadesFiltradas.length === 0 ? (
          <div className="w-full py-20 text-center bg-white/90 border border-slate-200/90 rounded-3xl backdrop-blur-md shadow-md">
            <p className="text-slate-600 text-base font-medium">No se encontraron propiedades que coincidan con los criterios de búsqueda.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('todos'); }}
              className="mt-4 px-6 py-2 rounded-full font-bold text-xs text-[#008b99] border border-[#008b99]/30 bg-[#008b99]/10 hover:bg-[#008b99]/20 transition duration-200 cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {propiedadesFiltradas.map((propiedad) => {
              const esCasaODepto = propiedad.tipo?.toUpperCase().includes('CASA') || 
                                   propiedad.tipo?.toUpperCase().includes('DEPARTAMENTO') || 
                                   propiedad.tipo?.toUpperCase().includes('OFICINA') || 
                                   propiedad.tipo?.toUpperCase().includes('LOCAL') || 
                                   propiedad.tipo?.toUpperCase().includes('TIENDA');
              return (
                <div
                  key={propiedad.id}
                  className="group/card bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(0,180,216,0.12)] transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <Link
                    to={`/${propiedad.slug}`}
                    className="relative block aspect-video w-full overflow-hidden bg-slate-900/10 border-b border-slate-200/60 cursor-pointer"
                  >
                    <img
                      src={propiedad.portada.startsWith('http') || propiedad.portada.startsWith('data:') ? propiedad.portada : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${propiedad.portada}`}
                      alt={`${propiedad.titulo} - ${propiedad.tipo} en ${propiedad.ubicacion} con Recorrido Virtual 360°`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none"></div>

                    <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase border backdrop-blur-md flex items-center gap-1.5 ${propiedad.tipoColor}`}>
                      <span className={`w-1 h-1 rounded-full ${propiedad.tipo === 'TERRENO / LOTE' ? 'bg-blue-400 animate-pulse' : 'bg-cyan-400 animate-pulse'}`}></span>
                      {propiedad.tipo}
                    </span>

                    {propiedad.tiene360 && (
                      <span
                        className="absolute top-4 right-4 bg-[#05140b]/95 border border-[#09d261]/45 text-[#4ade80] px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-[0_2px_8px_rgba(9,210,97,0.15)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#09d261] animate-pulse"></span>
                        Vista 360°
                      </span>
                    )}
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 text-cyan-700 text-xs font-bold mb-2.5">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{propiedad.ubicacion}</span>
                    </div>

                    <h3 className="text-slate-900 text-base md:text-lg font-black font-display leading-snug tracking-tight mb-2 flex items-start">
                      <Link to={`/${propiedad.slug}`} className="hover:text-cyan-700 transition-colors duration-200 text-left">
                        {propiedad.titulo}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-xs md:text-sm font-sans leading-relaxed tracking-wide mb-4 text-left font-normal line-clamp-3">
                      {propiedad.descripcionCorta}
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 mt-auto mb-4 text-left">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none mb-1">Dirección</span>
                        <span className="text-slate-800 text-xs font-semibold truncate" title={propiedad.direccion}>{propiedad.direccion}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3.5 pt-2 border-t border-slate-200/60">
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none mb-1">Urbanización</span>
                          <span className="text-slate-800 text-xs font-semibold break-words leading-tight" title={propiedad.urbanizacion}>{propiedad.urbanizacion}</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none mb-1">Referencia</span>
                          <span className="text-slate-800 text-xs font-medium break-words leading-tight" title={propiedad.referencia}>{propiedad.referencia}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-slate-700 text-xs font-bold py-3.5 border-t border-b border-slate-200 mb-4">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                        <span>
                          {esCasaODepto ? 'Área: ' : 'Área desde: '}
                          <span className="text-cyan-700 font-black">{propiedad.area}</span>
                        </span>
                      </div>
                      {propiedad.medidasCortas && (
                        <span className="text-slate-700 text-xs font-bold tracking-wide pr-1">
                          Medidas: <span className="text-cyan-700 font-black">{propiedad.medidasCortas}</span>
                        </span>
                      )}
                    </div>

                    {/* Pie de Tarjeta: Precio y Acciones en Extremos */}
                    <div className="flex flex-wrap items-center justify-between gap-3.5 pt-1">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-cyan-700 font-bold uppercase tracking-widest">
                          {esCasaODepto ? 'PRECIO ESPECIAL' : 'PRECIO DESDE'}
                        </span>
                        <span className="text-2xl font-black text-emerald-600 font-display leading-none mt-1">{renderPrecio(propiedad.precio)}</span>
                      </div>

                      <div className="w-full flex items-center justify-between pt-1">
                        <Link
                          to={`/${propiedad.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#ea580c] hover:bg-[#c2410c] shadow-md shadow-orange-950/20 transition-all duration-300 cursor-pointer select-none active:scale-95"
                        >
                          Ver Propiedad
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={(e) => handleShare(e, propiedad)}
                          title="Compartir propiedad por WhatsApp, redes o copiar enlace"
                          className={`relative inline-flex items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                            copiedId === propiedad.id
                              ? 'bg-emerald-500 text-white border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                              : 'bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-600 hover:text-emerald-700 border-emerald-200/80 hover:border-emerald-300 shadow-sm'
                          }`}
                        >
                          {copiedId === propiedad.id ? (
                            <>
                              <Check className="w-4 h-4 text-white animate-bounce" />
                              <span className="absolute -top-8 right-0 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap">
                                ¡Copiado!
                              </span>
                            </>
                          ) : (
                            <Share2 className="w-4 h-4 text-emerald-600" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

    </div>
  );
}
