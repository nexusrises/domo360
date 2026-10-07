import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Video, 
  Laptop, 
  Layers, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Activity, 
  Users, 
  Sparkles, 
  Eye, 
  MapPin, 
  Compass, 
  Send, 
  FileText, 
  Boxes, 
  ShieldCheck,
  CheckCircle2,
  Calendar,
  PhoneCall
} from 'lucide-react';
import { openSocialApp, SOCIAL_URLS } from '../utils/deepLink';

export default function Servicios360() {
  const [activeTab, setActiveTab] = useState('todos');

  useEffect(() => {
    document.title = "Recorridos Virtuales 360°, Páginas Web y Renders 3D en Juliaca y Puno | Nexus Domo 360°";
    window.scrollTo(0, 0);
  }, []);

  const whatsappGeneralMsg = "Hola Angel, vi la página de Servicios 360° de Nexus Domo 360. Me gustaría cotizar un proyecto digital para mi empresa o lotización.";
  const whatsappPlanosMsg = "Hola Angel, tengo unos planos en 2D / PDF de un proyecto y deseo cotizar su modelado en Planos 3D y Renders fotorrealistas con tu equipo.";

  const serviciosPrincipales = [
    {
      id: 'tours-360',
      badge: 'PRODUCCIÓN AUDIOVISUAL AÉREA & 360°',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      icon: Video,
      iconColor: 'bg-cyan-500/10 text-[#008b99]',
      title: 'Recorridos Virtuales 360° & Dron 4K',
      subtitle: 'Para lotizaciones, urbanizaciones, terrenos y condominios',
      desc: 'Digitalizamos tu predio con vuelos de Dron DJI en ultra alta definición y escaneos panorámicos 360°. Delimitamos linderos lote por lote, manzanas interactivas y avenidas proyectadas para que tus clientes caminen y elijan su lote desde cualquier parte del Perú o el mundo.',
      previewImg: `${import.meta.env.BASE_URL}lotes_dron_juliaca.jpg`,
      previewAlt: 'Delimitación aérea real de lotes y manzanas en Juliaca Puno con dron y recorrido 360',
      previewTag: 'Levantamiento Aéreo & Lotes 360°',
      chips: ['Lotes interactivos', 'Dron 4K Juliaca', 'Puntos de interés', 'WhatsApp directo'],
      beneficios: [
        'Vuelo con Dron 4K para ubicación estratégica y accesos',
        'Delimitación exacta de perímetros y manzanas interactivas',
        'Compatibilidad total con smartphones, tablets y computadoras',
        'Cero instalaciones requeridas: tus clientes abren un solo enlace'
      ],
      ctaText: 'Cotizar Tour 360° para mi Terreno',
      ctaMsg: 'Hola Angel, deseo cotizar un recorrido virtual 360° con fotos de dron para mi proyecto inmobiliario o lotización en el sur.'
    },
    {
      id: 'desarrollo-web',
      badge: 'SOFTWARE & VISIBILIDAD CORPORATIVA',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-300',
      icon: Laptop,
      iconColor: 'bg-amber-500/10 text-amber-700',
      title: 'Páginas Web Corporativas & Profesionales',
      subtitle: 'Aparece en el radar de empresas y clientes que buscan tus servicios en Google',
      desc: 'Si una empresa o profesional no figura en internet, pierde contratos millonarios ante consorcios o clientes que buscan en Google. Desarrollamos páginas web de máxima velocidad con diseño ejecutivo, catálogo de obras o servicios, ficha de contacto directo a WhatsApp y optimización SEO local para búsquedas en Juliaca, Puno y todo el Perú.',
      previewImg: `${import.meta.env.BASE_URL}web_corporativa_peru.jpg`,
      previewAlt: 'Página web corporativa y profesional para empresas en Perú con catálogo y WhatsApp',
      previewTag: 'Presencia Web Corporativa',
      chips: ['Carta de presentación 24/7', 'SEO Google Juliaca/Puno', 'Conexión a WhatsApp', 'Catálogo de obras'],
      beneficios: [
        'Posicionamiento en Google para aparecer cuando busquen tus servicios',
        'Carta de presentación ejecutiva que genera máxima seriedad y confianza',
        'Botones de conversión directa a WhatsApp sin fricciones ni formularios tediosos',
        'Adaptación impecable para celulares, tablets y computadoras de escritorio'
      ],
      ctaText: 'Cotizar Página Web para mi Empresa',
      ctaMsg: 'Hola Angel, deseo cotizar una página web profesional / corporativa para mi empresa o servicios profesionales.'
    },
    {
      id: 'renders-3d',
      badge: 'SERVICIO ARQUITECTÓNICO & MODELADO',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Boxes,
      iconColor: 'bg-emerald-500/10 text-emerald-600',
      title: 'Planos 3D & Renders Arquitectónicos',
      subtitle: 'Vende tu casa, condominio o centro comercial antes de construirlo',
      desc: 'El comprador común no entiende planos en 2D ni líneas sobre papel blanco. Junto a nuestro equipo de arquitectura y modelado 3D, transformamos tus planos de AutoCAD en impresionantes plantas tridimensionales isométricas y Renders fotorrealistas 4K que muestran fachadas, acabados, locales comerciales e iluminación como si ya estuvieran construidos.',
      previewImg: `${import.meta.env.BASE_URL}render_3d_juliaca.jpg`,
      previewAlt: 'De planos 2D a renders 3D arquitectónicos fotorrealistas en Juliaca',
      previewTag: 'De Plano 2D a Render 4K',
      chips: ['Planos Isométricos 3D', 'Renders Fachadas 4K', 'Locales comerciales', 'Venta en preventa'],
      beneficios: [
        'De Plano 2D a Planta 3D Isométrica con muebles y distribución clara',
        'Renders fotorrealistas 4K de fachadas, interiores y locales comerciales',
        'Imágenes de alto impacto listas para vallas publicitarias y redes sociales',
        'Acelera las preventas captando inversionistas desde el día uno'
      ],
      ctaText: 'Enviar Planos para Cotización 3D',
      ctaMsg: whatsappPlanosMsg
    }
  ];

  const industrias = [
    {
      nombre: 'Empresas Lotizadoras & Desarrolladores',
      icono: Building2,
      desc: 'Vende manzanas y terrenos completos mostrando topografía, avances de obras y servicios básicos en 360°.'
    },
    {
      nombre: 'Constructoras & Edificios Multifamiliares',
      icono: Layers,
      desc: 'Renders 3D fotorrealistas de departamentos y recorridos virtuales para vender en planos y pozo.'
    },
    {
      nombre: 'Agentes & Corredores Inmobiliarios',
      icono: Users,
      desc: 'Tu propia página web profesional y catálogo digital para destacar sobre la competencia tradicional.'
    },
    {
      nombre: 'Centros Comerciales, Hoteles & Negocios',
      icono: Sparkles,
      desc: 'Digitalización 360° para exhibir locales comerciales, galerías y hoteles a turistas e inversionistas.'
    }
  ];

  const pasosTrabajo = [
    {
      num: '01',
      title: 'Recepción & Diagnóstico',
      desc: 'Revisamos tu terreno, planos en AutoCAD o requerimientos de página web para definir la propuesta exacta y el alcance.'
    },
    {
      num: '02',
      title: 'Levantamiento & Producción',
      desc: 'Realizamos los vuelos con dron, escaneo 360° en campo, modelado 3D de planos y la programación del sistema interactivo.'
    },
    {
      num: '03',
      title: 'Entrega & Lanzamiento Comercial',
      desc: 'Publicamos el visor interactivo en la web, configuramos los enlaces a WhatsApp y entregamos el material publicitario listo para vender.'
    }
  ];

  return (
    <div className="animate-fade-in text-slate-900 font-sans pb-20">
      
      {/* 1. HERO SECTION (ALTO IMPACTO Y SEO PRINCIPAL) */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Glow de fondo: azul marino y ámbar suave técnico */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-400/15 via-cyan-400/10 to-amber-400/10 rounded-full blur-[90px] pointer-events-none z-0"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-amber-800 text-xs md:text-sm font-black tracking-widest uppercase bg-amber-50 border border-amber-300 px-4 py-1.5 rounded-full mb-4 inline-block font-display shadow-sm">
            TECNOLOGÍA 360° PARA INMOBILIARIAS & EMPRESAS
          </span>

          {/* H1 SEO PRINCIPAL */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight font-display max-w-4xl">
            Recorridos Virtuales 360°, Páginas Web y <span className="text-gradient-rise">Renders 3D en Juliaca y Puno</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-10 font-medium">
            Impulsamos las ventas de tu proyecto inmobiliario o empresa. Unimos <strong>tomas con dron 4K</strong>, <strong>visores 360° interactivos</strong>, <strong>páginas web de alta velocidad</strong> y <strong>modelado arquitectónico en 3D</strong> para que tus clientes se enamoren de su futura propiedad antes de visitarla.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={SOCIAL_URLS.whatsapp(whatsappGeneralMsg)}
              onClick={(e) => openSocialApp(e, 'whatsapp', whatsappGeneralMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 active:scale-95 shadow-md shadow-emerald-900/10 flex items-center justify-center gap-2.5 font-display"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              <span>Cotizar Proyecto para mi Empresa</span>
            </a>

            <a
              href="#servicios"
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 font-display shadow-sm"
            >
              Ver Servicios & Opciones
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Cobertura en Juliaca, Puno y todo el sur</span>
            <span className="hidden sm:flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Entrega rápida y soporte técnico</span>
          </div>
        </div>
      </section>

      {/* 2. MÉTRICAS COMERCIALES (POR QUÉ FUNCIONA) */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#008b99] flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black font-display text-slate-900">+45%</span>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Cierres a Distancia</span>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Inversionistas de Lima, Arequipa y el extranjero eligen y separan lotes sin necesidad de viajar presencialmente.
            </p>
          </div>

          <div className="flex flex-col text-left border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-3">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black font-display text-slate-900">-70%</span>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Visitas Físicas Inútiles</span>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Filtra a los curiosos. Solo los compradores con presupuesto real y decisión firme agendan cita presencial.
            </p>
          </div>

          <div className="flex flex-col text-left border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-3xl font-black font-display text-slate-900">100%</span>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">Claridad & Confianza</span>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Linderos exactos, metrajes transparentes y planos fotorrealistas que eliminan el miedo a comprar en planos.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 SECCIÓN RESULTADOS REALES (ESTILO JEBN HUNTER) */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#008b99] bg-cyan-50 border border-cyan-200/80 px-3.5 py-1 rounded-full font-display inline-block mb-3">
            • RESULTADOS REALES & APLICACIÓN EN CAMPO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display leading-tight">
            No le expliques cómo “podría verse”. <br />
            <span className="text-gradient-rise">Enséñale el tipo de resultado que va a recibir.</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed font-sans font-medium">
            Estas son aplicaciones reales de nuestro trabajo en el sur del Perú: delimitación de lotizaciones sobre tomas de dron, páginas web corporativas y modelado 3D de planos para venta en pozo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Lotificación Aérea 360 */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
              <img 
                src={`${import.meta.env.BASE_URL}lotes_dron_juliaca.jpg`} 
                alt="Resultado de lotificación interactiva y manzanas con dron en Juliaca" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 text-slate-900 text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#008b99] bg-cyan-50 border border-cyan-200/80 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3">
                  PRESENTACIÓN DE LOTIZACIÓN INMOBILIARIA
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
                  Ubicación + Lotes delimitados + Estado en tiempo real
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-medium">
                  El comprador de Lima o Arequipa deja de adivinar dónde queda el lote: camina la manzana desde su celular, ve qué terrenos están vendidos o disponibles y pide separar con un clic en WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Lotes interactivos</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Dron 4K Juliaca</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Vialidades y accesos</span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">WhatsApp directo</span>
              </div>
            </div>
          </div>

          {/* Card 2: Render 3D desde Planos 2D */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
              <img 
                src={`${import.meta.env.BASE_URL}render_3d_juliaca.jpg`} 
                alt="Conversión de planos 2D a renders 3D fotorrealistas en Juliaca Puno" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 text-slate-900 text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3">
                  ARQUITECTURA & PREVENTA EN POZO
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
                  De líneas en papel a imagen fotorrealista para vender
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-medium">
                  El 90% de los clientes no comprende un plano de AutoCAD. Transformamos las medidas en fachadas vivas y plantas isométricas con muebles que enamoran al inversionista antes de poner el primer ladrillo.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Planos 2D a 3D</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Fachadas comerciales</span>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Iluminación 4K</span>
                <span className="text-[11px] font-bold text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">Venta anticipada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Callout de valor */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <strong>Esto es lo que hace que tu proyecto gane valor comercial:</strong> no entregamos una foto aislada o un archivo pesado; entregamos una herramienta lista para publicar, enviar por WhatsApp y cerrar tratos con clientes que valoran la formalidad.
          </p>
          <a
            href={SOCIAL_URLS.whatsapp(whatsappGeneralMsg)}
            onClick={(e) => openSocialApp(e, 'whatsapp', whatsappGeneralMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 font-display text-center shadow-md shadow-emerald-900/10 cursor-pointer"
          >
            Consultar Proyecto →
          </a>
        </div>
      </section>

      {/* 3. LOS 3 PILARES DE SERVICIO PRINCIPALES */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 mb-20 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#008b99] text-xs font-black uppercase tracking-widest block mb-2 font-display">
            NUESTRO CATÁLOGO DE SERVICIOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display">
            Tecnología Especializada para Desarrollos Inmobiliarios
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Elige la solución que tu empresa necesita o combinamos las tres en un sistema de ventas integral.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {serviciosPrincipales.map((servicio, idx) => {
            const IconComp = servicio.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div 
                key={servicio.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 text-left"
              >
                {/* Lado Contenido */}
                <div className={`flex-1 space-y-4 w-full ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${servicio.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${servicio.badgeColor} font-display`}>
                        {servicio.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display mt-1">
                        {servicio.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-cyan-700 uppercase tracking-wide font-display">
                    {servicio.subtitle}
                  </p>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                    {servicio.desc}
                  </p>

                  {/* Chips interactivos estilo JEBN Hunter */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {servicio.chips?.map((chip, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-800 border border-slate-200/90 px-3 py-1 rounded-full transition-colors font-display"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase text-slate-800 tracking-wider block mb-2 font-display">
                      ¿Qué incluye este servicio?
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {servicio.beneficios.map((ben, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a
                      href={SOCIAL_URLS.whatsapp(servicio.ctaMsg)}
                      onClick={(e) => openSocialApp(e, 'whatsapp', servicio.ctaMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 items-center justify-center gap-2.5 font-display text-center shadow-md shadow-emerald-900/10 cursor-pointer"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>{servicio.ctaText}</span>
                    </a>
                  </div>
                </div>

                {/* Lado Visual: Mockup de pantalla / Navegador estilo JEBN Hunter */}
                <div className={`w-full lg:w-[460px] shrink-0 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl p-2.5 bg-slate-900/95 border border-slate-700/80 shadow-xl group overflow-hidden">
                    {/* Barra de cabecera de ventana */}
                    <div className="flex items-center justify-between pb-2 px-1 border-b border-white/10 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase">
                        {servicio.previewTag}
                      </span>
                    </div>

                    {/* Imagen con zoom sutil al pasar cursor */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950">
                      <img 
                        src={servicio.previewImg} 
                        alt={servicio.previewAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="text-[11px] font-bold text-white font-display drop-shadow-md block">
                          {servicio.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SECCIÓN ESPECIAL: EL SERVICIO ARQUITECTÓNICO (FONDO BLANCO ELEGANTE Y ARMONIOSO) */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden text-left">
          {/* Sutil halo decorativo en tono cian/esmeralda */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/50 via-emerald-50/40 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full font-display inline-block mb-3">
              ★ PLANOS 3D & RENDERS ARQUITECTÓNICOS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display leading-tight mb-4 text-slate-900">
              ¿Tienes planos en 2D de una casa, condominio o centro comercial? <br />
              <span className="text-gradient-rise">Los convertimos en Renders 3D fotorrealistas</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-medium">
              No esperes a construir para empezar a vender. Diseñamos plantas 3D isométricas que muestran la distribución exacta con muebles, y renders en 4K con iluminación real para fachadas e interiores. Ideal para que arquitectos, constructores y propietarios vendan en preventa al mejor precio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-cyan-300 transition-all duration-200">
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block mb-1">Nivel 1</span>
                <h4 className="font-bold text-base text-slate-900 font-display">Planos 2D a 3D</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Plantas isométricas con acabados, distribución clara y mobiliario completo.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all duration-200">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">Nivel 2</span>
                <h4 className="font-bold text-base text-slate-900 font-display">Renders 4K Fachadas</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Imágenes fotorrealistas con iluminación natural para letreros, redes y vallas.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-300 transition-all duration-200">
                <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider block mb-1">Nivel 3</span>
                <h4 className="font-bold text-base text-slate-900 font-display">Proyectos Completos</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Centros comerciales, condominios, urbanizaciones y recorridos 3D.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SOCIAL_URLS.whatsapp(whatsappPlanosMsg)}
                onClick={(e) => openSocialApp(e, 'whatsapp', whatsappPlanosMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 active:scale-95 shadow-md shadow-emerald-900/10 flex items-center justify-center gap-2.5 font-display"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Enviar Planos por WhatsApp para Cotizar</span>
              </a>
              <span className="text-xs text-slate-500 italic">
                Aceptamos archivos en AutoCAD (.dwg), PDF o bocetos a mano.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ¿A QUIÉN AYUDAMOS? (SECTORES) */}
      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <span className="text-[#008b99] text-xs font-black uppercase tracking-widest block mb-2 font-display">
          SECTORES QUE IMPULSAMOS
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-10">
          Diseñado para Quienes Construyen y Venden en el Sur del Perú
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {industrias.map((ind, i) => {
            const IndIcon = ind.icono;
            return (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#008b99] border border-cyan-200/60 flex items-center justify-center mb-4">
                    <IndIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-2 font-display">{ind.nombre}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. PROCESO DE TRABAJO (PASO A PASO) */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#008b99] font-display block mb-2">
            PASO A PASO TRANSPARENTE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-10">
            ¿Cómo Trabajamos con tu Proyecto?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {pasosTrabajo.map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
                <span className="text-3xl font-black font-display text-cyan-600/30 block mb-2">{p.num}</span>
                <h3 className="font-bold text-base text-slate-900 mb-2 font-display">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 PREGUNTAS FRECUENTES CLAVE (PARA EMPRESAS, INMOBILIARIAS Y PROFESIONALES) */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#008b99] text-xs font-black uppercase tracking-widest block mb-2 font-display">
            RESOLVEMOS TUS DUDAS ANTES DE EMPEZAR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display">
            ¿Por qué una Página Web y Tecnología 360° son vitales para tu negocio?
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 font-medium">
            Respuestas claras y directas para empresas, inmobiliarias y profesionales del sur del Perú.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* FAQ 1: Empresas y Proveedores */}
          <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                Empresas & Proveedores
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                ¿Por qué mi empresa necesita una página web si ya tengo Facebook o TikTok?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                Las redes sociales son para interacción rápida, pero los consorcios, empresas mineras y constructoras de Lima <strong>buscan proveedores formales en Google</strong>. Si no tienes una página web corporativa con RUC, catálogo de obras y correo formal, no apareces en su radar y pierdes licitaciones frente a competidores que sí se ven profesionales.
              </p>
            </div>
          </div>

          {/* FAQ 2: Inmobiliarias y Lotizadoras */}
          <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#008b99] bg-cyan-50 border border-cyan-200 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                Inmobiliarias & Desarrolladores
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                ¿Cómo un Recorrido 360° y vuelos de dron ayudan a vender más lotes?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                En Juliaca y Puno, más del 45% de los compradores con presupuesto real están en Arequipa, Lima o centros mineros y no pueden viajar a ver trochas. Con un tour 360° caminan el predio desde su celular, ven avenidas proyectadas y separan su lote con un clic en WhatsApp, cerrando tratos sin esperar semanas.
              </p>
            </div>
          </div>

          {/* FAQ 3: Profesionales Independientes */}
          <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                Profesionales Independientes
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                Soy ingeniero, arquitecto o abogado: ¿para qué me sirve una web personal?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                Es tu <strong>carta de presentación ejecutiva activa las 24 horas</strong>. En lugar de mandar un PDF pesado por WhatsApp que nadie abre, envías tu enlace con tus obras ejecutadas, especialidades y testimonios. Filtra a los clientes que buscan regatear y atrae a empresas que pagan bien por tu experiencia.
              </p>
            </div>
          </div>

          {/* FAQ 4: Planos 2D a Renders 3D */}
          <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                Arquitectura & 3D
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                ¿Por qué invertir en Renders 3D si ya tengo los planos en AutoCAD?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                Porque el 90% de los compradores no sabe interpretar planos técnicos ni líneas negras sobre papel. Un render en 4K con fachada realista y muebles permite que el cliente "sienta" su futuro hogar o local comercial, permitiéndote vender en preventa pozo a mejor precio mucho antes de gastar en construcción.
              </p>
            </div>
          </div>

          {/* FAQ 5: Compatibilidad y Celulares */}
          <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-800 bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                Tecnología Sin Fricción
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                ¿Mis clientes necesitan instalar alguna aplicación para ver el tour 360°?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                <strong>Absolutamente no.</strong> Todo se ejecuta en el navegador web estándar de cualquier celular (Android o iPhone), tablet o laptop. Abren un enlace directo o escanean un código QR y navegan al instante en segundos sin instalaciones raras ni complicaciones.
              </p>
            </div>
          </div>

          {/* FAQ 6: Mantenimiento y Costos */}
          <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-800 bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                Inversión & Transparencia
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-2">
                ¿Tener una web o tour 360° genera costos mensuales abusivos?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                No. Diseñamos sistemas limpios y directos. No te cobramos tarifas ocultas mensuales. Te entregamos la solución funcionando, conectada a tu WhatsApp corporativo y te enseñamos a administrar la disponibilidad de tus lotes o propiedades desde un Google Sheets simple.
              </p>
            </div>
          </div>
        </div>

        {/* Schema JSON-LD para Google FAQ Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Por qué mi empresa necesita una página web si ya tengo Facebook o TikTok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los consorcios y empresas mineras buscan proveedores formales en Google. Una página web corporativa te posiciona en el radar de empresas que hoy buscan tus servicios."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo un Recorrido 360° y vuelos de dron ayudan a vender más lotes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Permite que compradores de Lima o Arequipa exploren el terreno desde su celular y separen con un clic en WhatsApp, cerrando tratos sin esperar semanas."
                }
              },
              {
                "@type": "Question",
                "name": "Soy profesional independiente: ¿para qué me sirve una página web personal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Es tu carta de presentación ejecutiva 24/7. Muestra tus obras realizadas y especialidades, filtrando a clientes poco serios y atrayendo contratos con empresas formales."
                }
              }
            ]
          })}
        </script>
      </section>

      {/* 7. BANNER FINAL DE ACCIÓN (ESTÉTICA BLANCA Y ARMONIOSA CON EL SITIO) */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="p-10 md:p-14 rounded-3xl bg-white text-slate-900 border border-slate-200/90 shadow-xl relative overflow-hidden text-left">
          {/* Halo sutil */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#008b99] bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full inline-block mb-4">
              • DA EL SIGUIENTE PASO COMERCIAL
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display leading-[1.1] mb-5 text-slate-900">
              Puede quedarse como “algo interesante”... <br />
              <span className="text-gradient-rise">o puede convertirse en la herramienta que multiplique tus ventas este mes.</span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-medium">
              Si tienes un proyecto inmobiliario, planos para modelar en 3D o una empresa que necesita aparecer en el mapa digital de Google en Juliaca y Puno, conversemos ahora mismo. Te asesoramos sin compromiso sobre la mejor estrategia para tu presupuesto.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SOCIAL_URLS.whatsapp(whatsappGeneralMsg)}
                onClick={(e) => openSocialApp(e, 'whatsapp', whatsappGeneralMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 active:scale-95 shadow-md shadow-emerald-900/10 flex items-center justify-center gap-2.5 font-display"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>Conversar por WhatsApp con Angel</span>
              </a>

              <Link
                to="/contacto"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 font-display text-center"
              >
                Ir al Cotizador Interactivo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
