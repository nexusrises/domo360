import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar';
import Footer from '../components/Footer';
import VirtualTour from '../components/VirtualTour';
import { propiedades } from '../data/propiedadesData';
import { 
  Sparkles, 
  MessageCircle, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Code2, 
  Compass, 
  Camera, 
  Maximize2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Award,
  Globe,
  PhoneCall,
  User,
  Users,
  MapPin,
  Eye
} from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const whatsappNumber = "51951300535";
  const getWhatsappUrl = (msg) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  const heroWhatsappMsg = "Hola Nexus Rise, vengo de la página principal. Me gustaría cotizar un proyecto web / recorrido 360 para mi empresa.";
  const finalWhatsappMsg = "Hola Angel, estoy listo para digitalizar mi empresa o proyecto inmobiliario. ¿Cuándo podemos agendar una llamada?";

  const [activeTabPreview, setActiveTabPreview] = useState('demo360');

  // Obtener únicamente propiedades ID 1 e ID 2 para la muestra en la Landing Page
  const heroProperties = propiedades.filter(p => p.id === 1 || p.id === 2);

  return (
    <div className="min-h-screen bg-nexus-dark text-white font-sans overflow-x-hidden selection:bg-nexus-accent selection:text-black">
      {/* Navbar Exclusivo de la Landing */}
      <LandingNavbar />

      {/* ========================================================================= */}
      {/* SECCIÓN 1: HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-10 md:pt-36 md:pb-12 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Glow de fondo superior del Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-nexus-accent/15 via-blue-600/10 to-nexus-purple/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Badge Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(0,242,254,0.15)] animate-pulse">
          <Sparkles className="w-4 h-4 text-nexus-accent" />
          <span>DESARROLLO DE SOFTWARE & STUDIO 360° EN JULIACA</span>
        </div>

        {/* Título Principal Impactante */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight leading-[1.1] max-w-5xl">
          Transformamos tu negocio con <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-accent via-cyan-300 to-blue-400 drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
            Páginas Web Interactivas
          </span>{' '}
          y <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-nexus-purple drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
            Tours 360°
          </span>
        </h1>

        {/* Subtítulo Descriptivo */}
        <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl font-light leading-relaxed">
          Llevamos la presencia digital de inmobiliarias, lotizaciones y empresas en <strong className="text-white font-bold">Juliaca y la región Puno</strong> al siguiente nivel tecnológico. Soluciones a medida que aceleran tus ventas.
        </p>

        {/* Botones de Acción CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/proyectos"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-neon-cian text-xs font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:shadow-[0_0_45px_rgba(0,242,254,0.7)] transition-all duration-300 active:scale-95"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping"></span>
            <span>VER NUESTRO TRABAJO 360°</span>
          </Link>

          <a
            href={getWhatsappUrl(heroWhatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-300 font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg 
              className="w-5 h-5 fill-emerald-400 shrink-0" 
              viewBox="0 0 448 512" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span>💬 Cotizar por WhatsApp</span>
          </a>
        </div>

        {/* TARJETAS DESTACADAS GIGANTES (RECORRIDOS Y PROYECTOS SINCRO EN VIVO) */}
        <div id="trabajos-destacados" className="w-full max-w-6xl mt-10 text-left">
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-nexus-accent animate-ping"></span>
              <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-300 font-bold">
                Nuestros Proyectos Destacados (Demo 360° en Vivo)
              </h3>
            </div>
            <Link 
              to="/proyectos"
              className="text-xs text-nexus-accent hover:underline font-mono font-bold flex items-center gap-1"
            >
              Ver Catálogo Completo <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {heroProperties.map((propiedad) => (
              <div 
                key={propiedad.id}
                className="group relative rounded-3xl bg-[#0c111d]/90 backdrop-blur-xl border border-cyan-500/30 p-1.5 hover:border-nexus-accent shadow-[0_0_30px_rgba(0,242,254,0.15)] hover:shadow-[0_0_50px_rgba(0,242,254,0.4)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Glow ambiental interno en hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full bg-[#080d19] rounded-[22px] overflow-hidden p-5 sm:p-6">
                  {/* Portada con efecto Zoom */}
                  <Link 
                    to={`/${propiedad.slug}`}
                    className="relative block aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/50 transition duration-300 mb-5"
                  >
                    <img 
                      src={propiedad.portada.startsWith('http') || propiedad.portada.startsWith('data:') ? propiedad.portada : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${propiedad.portada}`} 
                      alt={propiedad.titulo} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge Tipo de Propiedad */}
                    <span className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-[10px] font-black tracking-wider uppercase border backdrop-blur-md flex items-center gap-1.5 ${propiedad.tipoColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      {propiedad.tipo}
                    </span>

                    {/* Badge Vista 360° */}
                    {propiedad.tiene360 && (
                      <span className="absolute top-3 right-3 bg-[#05140b]/95 border border-[#09d261]/60 text-[#4ade80] px-3 py-1.5 rounded-lg text-[10px] font-black tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-[0_0_15px_rgba(9,210,97,0.3)]">
                        <Compass className="w-3.5 h-3.5 text-[#09d261] animate-spin-slow" />
                        Vista 360° Interactiva
                      </span>
                    )}

                    {/* Precio y Área sobre la Imagen */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xl font-black font-display text-emerald-400 drop-shadow-[0_2px_8px_rgba(16,185,129,0.5)]">
                        {propiedad.precio}
                      </span>
                      <span className="text-xs font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-gray-300">
                        Área: {propiedad.area}
                      </span>
                    </div>
                  </Link>

                  {/* Detalles del Proyecto */}
                  <div className="flex items-center gap-1.5 text-nexus-accent text-xs font-bold mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{propiedad.ubicacion}</span>
                  </div>

                  <h4 className="text-white text-xl font-black font-display leading-snug tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    <Link to={`/${propiedad.slug}`}>
                      {propiedad.titulo}
                    </Link>
                  </h4>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {propiedad.descripcionCorta}
                  </p>

                  {/* Ficha técnica resumida */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 mb-6 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Dirección:</span>
                      <span className="font-semibold text-gray-200 truncate max-w-[200px]">{propiedad.direccion}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-1.5">
                      <span className="text-gray-500 font-mono text-[10px] uppercase">Urbanización:</span>
                      <span className="font-semibold text-cyan-300">{propiedad.urbanizacion}</span>
                    </div>
                  </div>

                  {/* Botón CTA Interactivo */}
                  <Link
                    to={`/${propiedad.slug}`}
                    className="w-full mt-auto py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all duration-300"
                  >
                    <Eye className="w-4 h-4 text-black" />
                    <span>Explorar Recorrido 360°</span>
                    <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: EL PROBLEMA VS LA SOLUCIÓN */}
      {/* ========================================================================= */}
      <section id="problema-solucion" className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-nexus-accent mb-2">
            Transformación Digital Inmobiliaria
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
            ¿Sigues vendiendo con fotos planas por WhatsApp?
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg font-light">
            Las fotos tradicionales y videos borrosos generan dudas y hacen perder tiempo en visitas presenciales con curiosos que no compran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* TARJETA 1: El Método Tradicional */}
          <div className="p-8 rounded-3xl bg-[#0c101d] border border-red-500/20 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-red-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-500/20">
                <XCircle className="w-4 h-4" /> Método Tradicional
              </div>

              <h4 className="text-2xl font-bold font-display text-white mb-6">
                Limitado, lento y costoso en tiempo
              </h4>

              <ul className="space-y-4 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Visitas físicas con curiosos:</strong> Inviertes horas mostrando lotes o casas a personas que solo quieren "curiosear".</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Clientes con dudas de espacio:</strong> Las fotos planas no transmiten la distribución ni la dimensión real del inmueble.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Cierre de ventas lento:</strong> El comprador tarda semanas en decidirse porque requiere múltiples visitas presenciales.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-red-400/80 font-mono">
              ❌ Bajo porcentaje de conversión por cliente atendido.
            </div>
          </div>

          {/* TARJETA 2: Con Nexus Rise */}
          <div className="p-8 rounded-3xl bg-[#0b1526] border border-cyan-500/40 shadow-[0_0_30px_rgba(0,242,254,0.15)] relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-nexus-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-500/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Con Nexus Rise
              </div>

              <h4 className="text-2xl font-bold font-display text-white mb-6">
                Experiencia 360° Inmersiva 24/7
              </h4>

              <ul className="space-y-4 text-gray-200 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Filtro 100% interactivo:</strong> Quienes piden visita presencial ya conocen la propiedad y están verdaderamente interesados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Recorridos 360° en Ultra HD:</strong> El comprador camina virtualmente por el terreno o casa desde su smartphone o laptop.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Agiliza la decisión de compra:</strong> Transmite confianza inmediata y acelera el cierre comercial hasta un 70%.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-500/20 text-xs text-cyan-300 font-mono flex items-center justify-between">
              <span>🚀 Máximo impacto visual y diferenciación de marca.</span>
              <span className="text-emerald-400 font-bold">10x ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: SERVICIOS PRINCIPALES */}
      {/* ========================================================================= */}
      <section id="servicios" className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-nexus-purple mb-2">
            Nuestras Capacidades Tecnológicas
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight">
            Servicios Principales para tu Empresa
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg font-light">
            Creamos herramientas digitales modernas, rápidas y orientadas a resultados medibles para empresarios locales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Servicio 1: Desarrollo Web */}
          <div className="card-neon-cian p-8 rounded-3xl flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-nexus-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-7 h-7" />
              </div>

              <h4 className="text-2xl font-bold font-display text-white mb-3">
                Desarrollo Web & Software a Medida
              </h4>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Sitios web ultra rápidos, adaptables a móviles, landing pages de alta conversión y sistemas de gestión digitales (CRM, cotizadores, inventarios) diseñados exactamente para la necesidad de tu negocio.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-gray-400 font-mono border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> React, Node.js & Carga en milisegundos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Optimización SEO para Juliaca y Puno
              </li>
            </ul>
          </div>

          {/* Servicio 2: Plataformas 360° */}
          <div className="card-neon-purple p-8 rounded-3xl flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-nexus-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-7 h-7" />
              </div>

              <h4 className="text-2xl font-bold font-display text-white mb-3">
                Plataformas 360° Interactivas
              </h4>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Visores virtuales inmersivos para lotizaciones, terrenos en venta, departamentos, hoteles y locales comerciales. Con puntos de interés (hotspots) con información, fotos y botones de compra.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-gray-400 font-mono border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Navegación 360° HD en Smartphone/PC
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Integración de planos y mapas interactivos
              </li>
            </ul>
          </div>

          {/* Servicio 3: Captura Multimedia */}
          <div className="card-neon-blue p-8 rounded-3xl flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-7 h-7" />
              </div>

              <h4 className="text-2xl font-bold font-display text-white mb-3">
                Captura Multimedia 360° & Dron
              </h4>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Fotografía esférica panorámica de alta resolución con equipos profesionales 360, tomas aéreas con dron y producción audiovisual para destacar tus propiedades e instalaciones frente a la competencia.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-gray-400 font-mono border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Cámaras 360° HDR de alta precisión
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Edición y retoque digital profesional
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 4: PORTAFOLIO Y VITRINA (DOMO 360) */}
      {/* ========================================================================= */}
      <section id="vitrina-360" className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a1122] via-[#070a13] to-[#120a22] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Globe className="w-4 h-4" /> Portafolio en Vivo
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-display">
                Nuestra Vitrina en Vivo: <span className="text-gradient-rise">Angel Domo 360°</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-1">
                Explora los proyectos e inmuebles que ya tenemos digitalizados en la región Puno.
              </p>
            </div>

            <Link
              to="/proyectos"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-nexus-accent to-nexus-blue text-black font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>🔗 Ir a la plataforma completa</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Visor 360° Interactivo Directo de la propiedad ID 1 */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-black">
            <VirtualTour
              tourId="casasalidapuno"
              isExpanded={false}
              setIsExpanded={() => {}}
              autoRotate={true}
              showThumbnails={false}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Acceso directo disponible en: <strong>nexusrises.github.io/domo360/proyectos</strong></span>
            </div>
            <Link to="/proyectos" className="text-nexus-accent hover:underline flex items-center gap-1 font-sans font-semibold text-sm">
              Ver catálogo completo de propiedades 360° <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 5: SOBRE EL EQUIPO Y SOCIOS / AUTORIDAD */}
      {/* ========================================================================= */}
      <section id="equipo" className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto relative">
        {/* Glows de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-nexus-purple/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Users className="w-4 h-4 text-nexus-accent" />
            <span>EL EQUIPO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
            El Talento Detrás de Cada Línea de Código
          </h2>

          <p className="text-gray-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Un equipo multidisciplinario altamente calificado que combina metodologías avanzadas de desarrollo y pasión por la excelencia visual.
          </p>
        </div>

        {/* Grid de 4 Tarjetas de Socios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* SOCIO 1: J. Enmanuel */}
          <div className="bg-[#070c18]/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,242,254,0.18)] rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="w-full">
              {/* Foto de perfil con marco brillante y punto de estado */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-cyan-400/70 overflow-hidden relative shadow-[0_0_20px_rgba(0,242,254,0.25)] mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}miembros/enmanuel.webp`} 
                  alt="J. Enmanuel - CEO & Fundador" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#070c18] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.9)]"></div>
              </div>

              {/* Badge superior */}
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                CEO & FUNDADOR
              </div>

              {/* Nombre y Cargo */}
              <h3 className="text-xl font-bold font-display text-white mb-1">
                J. Enmanuel
              </h3>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 mb-3">
                DIRECTOR GENERAL
              </p>

              {/* Descripción */}
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Líder ejecutivo con más de 5 años de trayectoria estructurando arquitecturas de negocio digitales de alta gama y consolidando alianzas comerciales estratégicas.
              </p>
            </div>
          </div>

          {/* SOCIO 2: Miguel Ortega */}
          <div className="bg-[#070c18]/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,242,254,0.18)] rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="w-full">
              {/* Foto de perfil con marco brillante y punto de estado */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-cyan-400/70 overflow-hidden relative shadow-[0_0_20px_rgba(0,242,254,0.25)] mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}miembros/miguel.webp`} 
                  alt="Miguel Ortega - CTO & Co-Fundador" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#070c18] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.9)]"></div>
              </div>

              {/* Badge superior */}
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                CTO & CO-FUNDADOR
              </div>

              {/* Nombre y Cargo */}
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Miguel Ortega
              </h3>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 mb-3">
                DIRECTOR DE SISTEMAS & DEVOPS
              </p>

              {/* Descripción */}
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Arquitecto de infraestructura y sistemas cloud de alta disponibilidad, especializado en la escalabilidad de bases de datos de alto rendimiento y optimización de latencias globales.
              </p>
            </div>
          </div>

          {/* SOCIO 3: Gabriel Choque */}
          <div className="bg-[#070c18]/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,242,254,0.18)] rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="w-full">
              {/* Foto de perfil con marco brillante y punto de estado */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-cyan-400/70 overflow-hidden relative shadow-[0_0_20px_rgba(0,242,254,0.25)] mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}miembros/gabriel.webp`} 
                  alt="Gabriel Choque - Director Creativo & UX/UI" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#070c18] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.9)]"></div>
              </div>

              {/* Badge superior */}
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                DIRECTOR CREATIVO & UX/UI
              </div>

              {/* Nombre y Cargo */}
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Gabriel Choque
              </h3>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 mb-3">
                DISEÑADOR VISUAL PRINCIPAL
              </p>

              {/* Descripción */}
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Especialista en diseño de interfaces premium centrado en la psicología de la conversión y en la creación de flujos de interacción de fricción cero.
              </p>
            </div>
          </div>

          {/* SOCIO 4: Angel Apaza */}
          <div className="bg-[#070c18]/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,242,254,0.18)] rounded-3xl p-5 transition-all duration-300 flex flex-col justify-between items-center text-center group">
            <div className="w-full">
              {/* Foto de perfil con marco brillante y punto de estado */}
              <div className="w-full aspect-[4/3] rounded-2xl border-2 border-cyan-400/70 overflow-hidden relative shadow-[0_0_20px_rgba(0,242,254,0.25)] mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}miembros/angel.webp`} 
                  alt="Angel Apaza - Jefe de Desarrollo & Tecnología 360°" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#070c18] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.9)]"></div>
              </div>

              {/* Badge superior */}
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                JEFE DE DESARROLLO & TECNOLOGÍA 360°
              </div>

              {/* Nombre y Cargo */}
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Angel Apaza
              </h3>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 mb-3">
                LEAD WEB DEVELOPER & 360° SPECIALIST
              </p>

              {/* Descripción */}
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Ingeniero experto en computación gráfica (WebGL, Three.js), experiencias web inmersivas y dirección de levantamiento multimedia tridimensional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 6: CALL TO ACTION FINAL + FOOTER & BOTÓN FLOTANTE */}
      {/* ========================================================================= */}
      <section id="contacto" className="py-10 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto text-center relative">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0c162b] via-[#070a13] to-[#170a2c] border border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.2)] relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Zap className="w-8 h-8 animate-bounce" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight mb-4">
            ¿Listo para digitalizar tu empresa o proyecto inmobiliario?
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light">
            Conversemos sobre tus metas y te mostraremos una demostración personalizada sin compromiso.
          </p>

          <a
            href={getWhatsappUrl(finalWhatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg 
              className="w-6 h-6 fill-black shrink-0" 
              viewBox="0 0 448 512" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span>🟢 HABLAR DIRECTAMENTE POR WHATSAPP</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-xs text-gray-500 font-mono">
        <p>© 2026 Nexus Rise - Juliaca, Perú. Todos los derechos reservados.</p>
        <p className="mt-1 text-gray-600">Desarrollo de Software & Experiencias Digitales 360°</p>
      </footer>
    </div>
  );
}
