import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Maximize2, 
  ArrowLeft, 
  ExternalLink, 
  Check,
  Ruler,
  Share2
} from 'lucide-react';
import VirtualTour from '../components/VirtualTour';
import { propiedades } from '../data/propiedadesData';
import { openSocialApp } from '../utils/deepLink';

const renderPrecio = (precio) => {
  if (!precio) return null;
  const precioStr = String(precio).trim();
  
  if (precioStr.includes('$')) {
    const valor = precioStr.replace('$', '').trim();
    return (
      <>
        $. {valor} <span className="text-white/90 font-bold text-xs md:text-sm ml-1.5 tracking-wide select-none">Dol.</span>
      </>
    );
  } else if (precioStr.includes('S/.')) {
    const valor = precioStr.replace('S/.', '').trim();
    return (
      <>
        S/. {valor} <span className="text-white/90 font-bold text-xs md:text-sm ml-1.5 tracking-wide select-none">Sol.</span>
      </>
    );
  }
  return precio;
};

const getArticuloTipo = (prop) => {
  if (!prop) return 'la propiedad';
  const t = prop.tipo ? prop.tipo.toUpperCase() : '';
  const titulo = prop.titulo ? prop.titulo.trim().toUpperCase() : '';
  
  if (t.includes('CASA')) {
    if (titulo.startsWith('CASA')) return 'la';
    return 'la casa';
  }
  if (t.includes('OFICINA')) {
    if (titulo.startsWith('OFICINA')) return 'la';
    return 'la oficina';
  }
  if (t.includes('DEPARTAMENTO')) {
    if (titulo.startsWith('DEPARTAMENTO') || titulo.startsWith('APARTMENT') || titulo.startsWith('SMART APARTMENT')) return 'el';
    return 'el departamento';
  }
  if (t.includes('TIENDA') || t.includes('LOCAL')) {
    if (titulo.startsWith('LOCAL') || titulo.startsWith('TIENDA')) return 'el';
    return 'el local';
  }
  if (t.includes('TERRENO') || t.includes('LOTE')) {
    if (titulo.startsWith('LOTE') || titulo.startsWith('TERRENO') || titulo.startsWith('RESIDENCIAL')) return 'el';
    return 'el proyecto';
  }
  return 'la propiedad';
};

export default function PropiedadDetalle() {
  const { slug } = useParams();
  const propiedad = propiedades.find((p) => p.slug === slug);

  const [isTourLoaded, setIsTourLoaded] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!propiedad) return;
    const shareUrl = window.location.href;
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (propiedad) {
      document.title = `${propiedad.titulo} | Angel Domo 360°`;
    }
  }, [propiedad]);

  if (!propiedad) {
    return (
      <div className="container mx-auto px-6 pt-32 pb-32 relative z-10 flex flex-col items-center text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Propiedad no encontrada</h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-8">El proyecto solicitado no existe o ha sido retirado.</p>
        <Link 
          to="/proyectos" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-slate-900 border border-slate-900 hover:bg-[#00c4ee] hover:text-black transition-all duration-300 shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Barra Superior con botón Volver, Compartir y Etiqueta en escalón */}
        <div className="flex flex-col gap-2.5">
          {/* Fila 1: Volver al Catálogo a la izquierda y Compartir a la derecha */}
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-white border border-slate-200/90 hover:bg-slate-50 transition-all duration-200 select-none cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#008b99]" />
              Volver al Catálogo
            </Link>

            {/* Botón Compartir al extremo derecho en Verde Esmeralda */}
            <button
              type="button"
              onClick={handleShare}
              title="Compartir esta propiedad por WhatsApp o copiar enlace"
              className={`relative inline-flex items-center justify-center p-2.5 md:px-3 md:py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all duration-200 select-none cursor-pointer shadow-sm active:scale-95 ${
                copied
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  : 'bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-600 hover:text-emerald-700 border-emerald-200/80 hover:border-emerald-300 shadow-sm'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white animate-bounce" />
                  <span className="hidden sm:inline text-xs font-bold text-white ml-1.5">¡Copiado!</span>
                  <span className="sm:hidden absolute -top-8 right-0 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap">
                    ¡Copiado!
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline ml-1.5">Compartir</span>
                </>
              )}
            </button>
          </div>

          {/* Fila 2: Etiqueta de Tipo de Propiedad (un escalón abajo, apegado al lado derecho) */}
          <div className="flex justify-end w-full">
            <span className={`px-3 py-1.5 rounded-md text-[9px] font-black tracking-wider uppercase border backdrop-blur-md flex items-center gap-1.5 shadow-sm ${propiedad.tipoColor}`}>
              <span className={`w-1 h-1 rounded-full ${propiedad.tipo === 'TERRENO / LOTE' ? 'bg-blue-400 animate-pulse' : 'bg-cyan-400 animate-pulse'}`}></span>
              {propiedad.tipo}
            </span>
          </div>
        </div>

        {/* Cabecera del Proyecto */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 font-display leading-tight">
            {propiedad.titulo}
          </h1>
          <p className="text-sm text-slate-600 flex items-center justify-center md:justify-start gap-1 font-medium">
            <MapPin className="w-4 h-4 text-[#008b99]" />
            {propiedad.ubicacion}
          </p>
        </div>

        {/* CUERPO PRINCIPAL REESTRUCTURADO */}
        <div className="flex flex-col gap-8 text-left">
          
          {/* Fila 1: Visor VirtualTour 360° en Ancho Completo */}
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-black rounded-3xl overflow-hidden border border-slate-300 shadow-xl relative">
            {isTourLoaded ? (
              <VirtualTour
                tourId={propiedad.tourId}
                isExpanded={false}
                setIsExpanded={() => {}}
                autoRotate={true}
                showThumbnails={true}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
                <img 
                  src={propiedad.portada.startsWith('http') || propiedad.portada.startsWith('data:') ? propiedad.portada : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${propiedad.portada}`}
                  alt="Cargando visor" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
                />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
                  <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase font-display">Iniciando Visor 360°</span>
                </div>
              </div>
            )}
          </div>

          {/* Fila 2: Información en 2 Columnas Balanceadas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Columna Izquierda: Detalles Narrativos, Beneficios y Mapa (8/12) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Descripción Completa */}
              <div className="border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 bg-white backdrop-blur-md shadow-md">
                <h3 className="text-slate-900 text-sm md:text-base font-black tracking-wider uppercase flex items-center gap-2 font-display">
                  <span className="w-1.5 h-3.5 bg-[#008b99] rounded-full"></span>
                  {propiedad.tipo.toUpperCase() === 'CASA' ? 'Descripción de la Casa' : 'Descripción del Proyecto'}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans text-left tracking-wide font-normal">
                  {propiedad.descripcionCompleta}
                </p>
              </div>

              {/* Beneficios */}
              <div className="border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 bg-white backdrop-blur-md shadow-md">
                <h3 className="text-slate-900 text-sm md:text-base font-black tracking-wider uppercase flex items-center gap-2 font-display">
                  <span className="w-1.5 h-3.5 bg-[#008b99] rounded-full"></span>
                  Beneficios Destacados
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {propiedad.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700 text-xs md:text-sm leading-relaxed">
                      <div className="p-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#008b99] mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-left font-medium">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Columna Derecha: Tarjeta de Venta y Datos Rápidos (Sticky 4/12) */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              
              <div className="flex flex-col gap-6 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 backdrop-blur-md shadow-xl">
                
                {/* Datos Técnicos (Área, Medidas y Precio) */}
                <div className="flex flex-col gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col text-left">
                    <span className="text-[9px] text-[#008b99] font-bold uppercase tracking-widest leading-none mb-1.5">Área Total</span>
                    <span className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                      <Maximize2 className="w-5 h-5 text-[#008b99]" />
                      {propiedad.area}
                    </span>
                  </div>
                  {propiedad.medidas && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col text-left">
                      <span className="text-[9px] text-[#008b99] font-bold uppercase tracking-widest leading-none mb-1.5">Medidas de Terreno</span>
                      <span className="text-base font-black text-slate-900 flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-[#008b99]" />
                        {propiedad.medidas}
                      </span>
                    </div>
                  )}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-900 flex flex-col text-left text-white shadow-md">
                    <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-widest leading-none mb-1.5">Precio Especial</span>
                    <span className="text-xl md:text-2xl font-black text-emerald-400 font-display flex items-baseline gap-1">
                      {renderPrecio(propiedad.precio)}
                    </span>
                  </div>
                </div>

                {/* Dirección y Referencias de Ubicación */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-left">
                  <span className="text-[#008b99] text-[9px] font-black tracking-widest uppercase block">Ubicación y Accesos</span>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Dirección</span>
                      <span className="text-slate-800 text-xs md:text-sm font-medium">{propiedad.direccion}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200">
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Urbanización</span>
                        <span className="text-slate-800 text-xs font-semibold">{propiedad.urbanizacion}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Referencia</span>
                        <span className="text-slate-800 text-xs font-medium">{propiedad.referencia}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enlace WhatsApp Dinámico */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/51951300535?text=Hola%20Angel%2C%20estoy%20interesado%20en%20${getArticuloTipo(propiedad)}%20*${encodeURIComponent(propiedad.titulo)}*%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20propiedad.`}
                    onClick={(e) => openSocialApp(e, 'whatsapp', `Hola Angel, estoy interesado en ${getArticuloTipo(propiedad)} *${propiedad.titulo}*, me gustaría recibir más información sobre esta propiedad.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3.5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left hover:bg-emerald-100 transition-all duration-300 shadow-sm cursor-pointer select-none group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-black shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                      <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5 select-none text-left">
                      <span className="text-slate-900 text-xs md:text-sm font-black tracking-wide font-display group-hover:text-[#008b99] transition-colors duration-200">
                        Consultar Disponibilidad
                      </span>
                      <span className="text-slate-500 text-[9px] md:text-[10px] font-semibold leading-none">
                        Pregunta por precios y planos en tiempo real
                      </span>
                    </div>
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Fila 3: Mapa de ubicación geográfica en Ancho Completo (Último abajo del todo) */}
          <div className="w-full border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 bg-white backdrop-blur-md shadow-md">
            <h3 className="text-slate-900 text-sm md:text-base font-black tracking-wider uppercase flex items-center gap-2 font-display">
              <span className="w-1.5 h-3.5 bg-[#008b99] rounded-full"></span>
              Ubicación Geográfica
            </h3>
            <div className="w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
              {isTourLoaded ? (
                <iframe
                  src={propiedad.mapsIframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`Mapa de ubicación de ${propiedad.titulo}`}
                  className="w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                  <div className="w-6 h-6 border-2 border-slate-300 border-t-[#008b99] rounded-full animate-spin"></div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
