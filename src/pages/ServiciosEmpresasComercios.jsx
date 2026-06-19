import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  ShoppingCart,
  Store,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Smartphone,
  Search,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
  Zap,
  Clock,
  Tag,
  Database,
  MessageSquare,
  Globe,
  Plus,
  Minus,
  Trash2,
  Send,
  CreditCard,
  Building,
  Truck,
  FileText,
  MapPin,
  Activity,
  ChevronRight
} from 'lucide-react';

export default function ServiciosEmpresasComercios() {
  const [activeTab, setActiveTab] = useState('asfalto');
  const [viewMode, setViewMode] = useState('v2'); // 'v2' (Diseño) o 'mockup' (Estructura)
  const previews = {
    asfalto: {
      title: 'Portal para Empresas de Asfalto, Pavimentos y Obras Viales',
      subtitle: 'La vitrina de capacidad técnica que te adjudica subcontratos de carreteras y pavimentación.',
      deseosCliente: '«Las constructoras de proyectos o megaproyectos y tramos viales nos exigen certificar que contamos con las maquinarias apropiadas (en frío o caliente), pool de maquinaria pesada operativo y experiencia comprobada en m² pavimentados. La web debe demostrar que no somos un intermediario, sino un socio ejecutor con capacidad real y maquinaria física lista para desplegar en obra.»',
      features: [
        'Exhibición del Pool de Maquinarias Propias: Catálogo interactivo con fichas técnicas y fotos reales de tus pavimentadoras, rodillos y plantas de asfalto, demostrando capacidad logística inmediata sin depender de terceros.',
        'Portafolio Visual de Carreteras y Pavimentos: Galería fotográfica organizada por tramos viales, m² ejecutados e historial de obras urbanas e interprovinciales concluidas con éxito para evidenciar tu acabado y calidad.',
        'Acreditación de Mano de Obra y Equipo Técnico: Sección dedicada a presentar las credenciales de tus ingenieros residentes, topógrafos y operarios de maquinaria pesada, demostrando solvencia operativa y técnica en obra.',
        'Generación de Confianza y Control de Mezclas: Acceso rápido para que inspectores y supervisores descarguen ensayos de laboratorio, diseños de mezcla asfáltica (Marshall/Superpave) y actas de conformidad.'
      ],
      images: {
        mockup: '/pavimentos_mockup.png',
        v2: '/constructora_v2.png'
      }
    },
    metalmecanica: {
      title: 'Posición Digital para Empresas Constructuras y Empresas Estructuras Metálicas',
      subtitle: 'Tu ingeniería de detalle expuesta con la solidez técnica que exigen los jefes de proyectos.',
      deseosCliente: '«Los desarrolladores de almacenes logísticos y coberturas parabólicas no compran por catálogo simple. Necesitan evaluar nuestra capacidad de taller, planos de ingeniería de detalle en DWG/PDF, homologaciones de soldadores AWS y toneladas de acero montadas. La web debe ser nuestro portafolio de alta ingeniería para cerrar el trato.»',
      features: [
        'Exhibición de Infraestructura y Taller de Fabricación: Catálogo visual de tu taller industrial, capacidad de rolado, corte por plasma y puentes grúa, demostrando solvencia operativa propia para procesar grandes tonelajes de acero.',
        'Portafolio de Proyectos y Montajes Realizados: Galería técnica interactiva de naves industriales, almacenes logísticos y techos parabólicos terminados, evidenciando precisión estructural en obra.',
        'Acreditación de Soldadores Homologados y Personal: Sección dedicada a certificar las homologaciones de tu equipo (soldadores calificados AWS 3G/4G/6G, ingenieros estructuristas y prevencionistas).',
        'Validación de Calidad y Ensayos No Destructivos: Acceso para que jefes de proyectos descarguen reportes de ensayos de calidad (tintes penetrantes, ultrasonido) e historial de cumplimiento de especificaciones técnicas.'
      ],
      images: {
        mockup: '/estructuras_mockup.png',
        v2: '/estructuras_v2.png'
      }
    },
    transporte: {
      title: 'Portal para Empresas de Transporte Pesado y Logística Internacional',
      subtitle: 'Posiciona tu flota y rutas clave ante el auge de importaciones y exportaciones en el sur del Perú.',
      deseosCliente: '«Con el incremento de carga por el Megapuerto de Chancay, el proyecto de Corío y la conexión vial con Brasil y Bolivia, los agentes de aduana y exportadores buscan transportistas formales y homologados en internet. Necesitamos una web que demuestre que tenemos flota moderna, GPS activo, pólizas de seguro de carga internacional y permisos vigentes para que nos adjudiquen las rutas críticas en segundos.»',
      features: [
        'Exhibición de Flota Homologada y Unidades: Inventario técnico y fotográfico de tus tractocamiones, semirremolques, plataformas y camas bajas, certificando disponibilidad física y operatividad inmediata.',
        'Visualización de Rutas e Historial Logístico: Mapa interactivo del corredor vial del sur y rutas transfronterizas (Bolivia y Brasil), mostrando fletes y cargas complejas transportados con éxito.',
        'Acreditación de Conductores y Personal en Ruta: Sección que resalta la calificación técnica de tu personal (licencias especiales, cursos de manejo defensivo, operadores de escolta y prevencionistas).',
        'Generación de Confianza y Seguridad de Carga: Acceso rápido para que agentes logísticos y de aduana auditen tus estándares BASC, pólizas de seguro de carga internacional y monitoreo GPS 24/7.'
      ],
      images: {
        mockup: '/transporte_mockup.png',
        v2: '/seccion_logistica_v2.png'
      }
    }
  };

  const seccionesMuestra = [
    {
      step: "01",
      title: "1. Definición de Propuesta de Valor (El Mensaje que Atrapa)",
      proceso: "Definimos el núcleo comercial del negocio: qué ofreces, a quién y por qué eres la mejor opción en el sur del país.",
      informacion: "Tu propuesta de valor principal, cobertura geográfica y botones de llamada a la acción directos (WhatsApp o Cotizar).",
      comoSeVe: "Un titular imponente en la parte superior (Hero Section) con fotos reales de tus proyectos o flota y botones de conversión llamativos.",
      paraQueSirve: "Retiene al visitante de inmediato. Evita que abandone tu web y demuestra formalidad operativa y seriedad comercial desde el primer segundo.",
      img: "/propuesta_valor_hero.png",
      icon1: <FileText className="w-4 h-4" />,
      icon2: <Globe className="w-4 h-4" />,
      icon3: <TrendingUp className="w-4 h-4" />
    },
    {
      step: "02",
      title: "2. Diseño de la Maqueta Operativa (Estructura Visual)",
      proceso: "Creamos un plano visual interactivo (wireframe o prototipo) donde organizamos la distribución estratégica de la información.",
      informacion: "La distribución en bloques: menú limpio, sección de activos físicos, zona de credenciales y formularios optimizados.",
      comoSeVe: "Un esquema visual o plano estructural sin colores definitivos, enfocado puramente en la usabilidad y la navegación del usuario.",
      paraQueSirve: "Te permite validar cómo navegará el cliente y dónde se ubicarán los puntos clave antes de programar, evitando retrabajos.",
      img: "/constructora_mockup.png",
      icon1: <FileText className="w-4 h-4" />,
      icon2: <Activity className="w-4 h-4" />,
      icon3: <ShieldCheck className="w-4 h-4" />
    },
    {
      step: "03",
      title: "3. Carga de Datos Técnicos y Certificados (El Escudo de Credibilidad)",
      proceso: "Recopilamos y estructuramos digitalmente tus activos: certificados de homologación, normas ISO, seguros y pool de maquinarias.",
      informacion: "Logotipos de certificaciones oficiales, pólizas de seguros vigentes e historial técnico descargable de tus equipos.",
      comoSeVe: "Un panel interactivo con logotipos de certificaciones que abren documentos PDF al hacer clic, junto a fichas con especificaciones técnicas.",
      paraQueSirve: "Supera auditorías de proveedores de inmediato. Tu cliente autoevalúa tu capacidad sin pedirte carpetas físicas, acelerando contratos.",
      img: "/seccion_homologaciones_v2.png",
      icon1: <FileText className="w-4 h-4" />,
      icon2: <Database className="w-4 h-4" />,
      icon3: <ShieldCheck className="w-4 h-4" />
    },
    {
      step: "04",
      title: "4. Pruebas de Velocidad y Seguridad (Blindaje y Estabilidad)",
      proceso: "Optimizamos el código e imágenes para carga ultra rápida y encriptamos la información con certificados SSL.",
      informacion: "Formularios de contacto protegidos, procesamiento seguro de cotizaciones y rendimiento optimizado para baja señal en obra.",
      comoSeVe: "Una carga instantánea de imágenes pesadas de maquinaria y el candado de seguridad SSL en la barra de direcciones del navegador.",
      paraQueSirve: "Evita perder clientes por esperas prolongadas. Proyecta alta tecnología y garantiza que tu web esté siempre activa y protegida.",
      img: "/seccion_logistica_v2.png",
      icon1: <FileText className="w-4 h-4" />,
      icon2: <Zap className="w-4 h-4" />,
      icon3: <CheckCircle className="w-4 h-4" />
    },
    {
      step: "05",
      title: "5. Publicación y Captación de Clientes (Lanzamiento y Conversión)",
      proceso: "Publicamos la web bajo tu dominio corporativo, la indexamos en Google y conectamos herramientas de contacto comercial.",
      informacion: "Enlaces directos a tu WhatsApp corporativo, formularios integrados a tu correo y posicionamiento en buscadores.",
      comoSeVe: "Tu web oficial activa en internet, visible en Google, con botones interactivos que inician chats o solicitudes de cotización al instante.",
      paraQueSirve: "Convierte tu web en un canal de ventas 24/7. Atrae constructoras y mineras que buscan proveedores formales en internet.",
      img: "/publicacion_captacion.png",
      icon1: <FileText className="w-4 h-4" />,
      icon2: <MessageSquare className="w-4 h-4" />,
      icon3: <TrendingUp className="w-4 h-4" />
    }
  ];

  const pilaresEnfoque = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-amber-500" />,
      title: "1. Credibilidad Industrial y Cumplimiento",
      desc: "Estructuramos tus certificaciones BASC, soldaduras AWS y normativas ISO. Es tu carta de presentación formal para calificar ante auditorías técnicas y operadores internacionales.",
      neonClass: "card-neon-amber",
      iconBg: "bg-amber-500/10 border border-amber-500/20"
    },
    {
      icon: <Building className="w-7 h-7 text-nexus-accent" />,
      title: "2. Capacidad Física y Operativa Demostrable",
      desc: "Exhibe tu infraestructura real en internet: flota de camiones, plantas de asfalto y talleres metalmecánicos. Rompe la desconfianza demostrando activos reales y equipos propios.",
      neonClass: "card-neon-cian",
      iconBg: "bg-nexus-accent/10 border border-nexus-accent/20"
    },
    {
      icon: <Zap className="w-7 h-7 text-nexus-purple" />,
      title: "3. Captación y Herramientas Técnicas B2B",
      desc: "Facilitamos la cotización de proyectos con herramientas de alta fidelidad: cotizadores de fletes, formularios de planos estructurales (DWG/PDF) y pliegos de términos de referencia (TDR).",
      neonClass: "card-neon-purple",
      iconBg: "bg-nexus-purple/10 border border-nexus-purple/20"
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        const element = document.getElementById(`acordeon-${tabId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  const renderDetailContent = (tabKey) => {
    const preview = previews[tabKey];
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">

        {/* Columna Izquierda: Información de Conversión */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="text-[10px] font-bold text-nexus-purple uppercase tracking-widest bg-nexus-purple/10 px-2.5 py-1 rounded-full border border-nexus-purple/20 w-fit block">
              Así se Estructura tu Sitio Web
            </span>
            <h2 className="text-xl md:text-3.5xl font-bold text-white mt-4 leading-tight">
              {preview.title}
            </h2>
            <p className="text-amber-400 text-xs md:text-sm font-medium mt-1">
              {preview.subtitle}
            </p>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-2xl p-5 italic text-gray-300 text-xs md:text-sm leading-relaxed relative mt-2 text-left">
            <span className="absolute -top-3 left-4 bg-nexus-purple text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              El Deseo del Empresario
            </span>
            {preview.deseosCliente}
          </div>

          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">
              Características Clave de Conversión:
            </h4>
            {preview.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Mockup / Visor de Diseño */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          <div className="bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative w-full">

            {/* Browser Chrome Simulation Header */}
            <div className="bg-[#182035] px-4 py-2.5 border-b border-white/5 flex items-center justify-between gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              </div>
              <div className="bg-white/5 rounded-lg text-[10px] text-gray-400 px-6 py-1 mx-auto w-3/4 text-center font-mono overflow-hidden whitespace-nowrap">
                {tabKey === 'asfalto' && 'https://pavimentosandinos.com/planta-y-maquinaria'}
                {tabKey === 'metalmecanica' && 'https://nexussteel.com/catalogo-estructuras'}
                {tabKey === 'transporte' && 'https://transportsur.com/flota-y-rutas'}
              </div>
            </div>

            {/* Visor de Imagen y Controles */}
            <div className="relative bg-[#070a13] min-h-[300px] md:min-h-[400px] overflow-hidden flex flex-col justify-between w-full">
              {/* Imagen principal con transición y efecto scroll-on-hover */}
              <div className="w-full h-[300px] md:h-[350px] overflow-hidden relative group">
                <img
                  src={preview.images[viewMode] ? (preview.images[viewMode].startsWith('http') || preview.images[viewMode].startsWith('data:') ? preview.images[viewMode] : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${preview.images[viewMode]}`) : ''}
                  alt={`${tabKey} ${viewMode}`}
                  className="w-full h-auto absolute top-0 left-0 transition-transform duration-[3000ms] ease-in-out group-hover:-translate-y-[calc(100%-300px)] md:group-hover:-translate-y-[calc(100%-350px)]"
                />
              </div>

              {/* Controles de Conmutación del Carrusel */}
              <div className="bg-[#121829] border-t border-white/5 px-6 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans text-left">
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Alternar Visualización</span>
                  <span className="text-[11px] text-gray-200 font-medium font-sans">Compara el plano estructural con el render final</span>
                </div>
                <div className="flex bg-slate-900 border border-white/10 p-1 rounded-xl shrink-0 w-fit">
                  <button
                    onClick={() => setViewMode('mockup')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewMode === 'mockup'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    Estructura
                  </button>
                  <button
                    onClick={() => setViewMode('v2')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewMode === 'v2'
                      ? 'bg-nexus-accent text-slate-950 shadow-md'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    Diseño V2
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 relative z-10 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        <span className="text-xs uppercase text-amber-500 font-bold tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          PRESENCIA DIGITAL E INDUSTRIAL - SUR DEL PERÚ
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight max-w-5xl mx-auto">
          Consolida tu Credibilidad B2B ante los Megaproyectos de Chancay y Corío
        </h1>
        <p className="text-gray-300 max-w-4xl mx-auto text-base md:text-lg mb-12 leading-relaxed">
          El auge comercial del sur peruano y los megaproyectos de Chancay y Corío demandan proveedores de infraestructura con solvencia técnica real. Diseñamos plataformas web corporativas de máxima seriedad para empresas de asfalto, estructuras metálicas y postores de licitaciones B2B.
        </p>
      </section>

      {/* Tabs Selector de Rubro / Tipo de Web */}
      <section className="container mx-auto px-6 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* DISEÑO EN ESCRITORIO: Pestañas en Grid y Contenedor abajo */}
          <div className="hidden md:block">
            {/* Tabs Nav */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <button
                onClick={() => handleTabClick('asfalto')}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border border-white/5 cursor-pointer ${activeTab === 'asfalto'
                  ? 'bg-white text-nexus-dark border-white shadow-xl translate-y-[-4px]'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${activeTab === 'asfalto' ? 'text-nexus-purple' : 'text-amber-500'}`}>
                  ASFALTO Y PAVIMENTOS
                </span>
                <h3 className="text-lg font-bold">Asfalto & Obras Viales</h3>
                <p className="text-xs mt-2 opacity-80 leading-relaxed">
                  Portales corporativos con catálogo de plantas de producción, pool de maquinaria pesada e historial de m² pavimentados.
                </p>
              </button>

              <button
                onClick={() => handleTabClick('metalmecanica')}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border border-white/5 cursor-pointer ${activeTab === 'metalmecanica'
                  ? 'bg-white text-nexus-dark border-white shadow-xl translate-y-[-4px]'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${activeTab === 'metalmecanica' ? 'text-nexus-purple' : 'text-amber-500'}`}>
                  METALMECÁNICA E INDUSTRIAL
                </span>
                <h3 className="text-lg font-bold">Estructuras & Coberturas</h3>
                <p className="text-xs mt-2 opacity-80 leading-relaxed">
                  Dossieres técnicos interactivos con planos en DWG/PDF, homologaciones de soldadura AWS e hitos de acero montado.
                </p>
              </button>

              <button
                onClick={() => handleTabClick('transporte')}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border border-white/5 cursor-pointer ${activeTab === 'transporte'
                  ? 'bg-white text-nexus-dark border-white shadow-xl translate-y-[-4px]'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${activeTab === 'transporte' ? 'text-nexus-purple' : 'text-amber-500'}`}>
                  TRANSPORTE Y LOGÍSTICA
                </span>
                <h3 className="text-lg font-bold">Transporte & Logística Pesada</h3>
                <p className="text-xs mt-2 opacity-80 leading-relaxed">
                  Portales B2B con mapas de cobertura, flota homologada, seguros de carga y monitoreo GPS ante el auge comercial del sur.
                </p>
              </button>
            </div>

            {/* Vitrina Digital - Muestra Visual de las Webs */}
            <div className="glass-panel border border-white/10 rounded-3xl p-6 md:p-10 animate-fade-in-up mb-8">
              {renderDetailContent(activeTab)}
            </div>
          </div>

          {/* DISEÑO EN MÓVILES: Acordeón Interactivo Colapsable */}
          <div className="block md:hidden space-y-4 mb-12">
            
            {/* Acordeón Asfalto */}
            <div id="acordeon-asfalto" className="rounded-3xl overflow-hidden border border-white/5 bg-nexus-dark/40 text-left">
              <button
                onClick={() => handleTabClick('asfalto')}
                className={`w-full p-5 text-left transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  activeTab === 'asfalto' ? 'bg-white text-nexus-dark font-bold' : 'glass-panel text-gray-400'
                }`}
              >
                <div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 ${activeTab === 'asfalto' ? 'text-nexus-purple' : 'text-amber-500'}`}>ASFALTO Y PAVIMENTOS</span>
                  <h3 className="text-base font-bold">Asfalto & Obras Viales</h3>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'asfalto' ? 'rotate-90 text-nexus-dark' : 'text-gray-500'}`} />
              </button>
              
              {activeTab === 'asfalto' && (
                <div className="p-4 border-t border-white/10 glass-panel animate-fade-in bg-nexus-dark/60">
                  {renderDetailContent('asfalto')}
                </div>
              )}
            </div>

            {/* Acordeón Metalmecánica */}
            <div id="acordeon-metalmecanica" className="rounded-3xl overflow-hidden border border-white/5 bg-nexus-dark/40 text-left">
              <button
                onClick={() => handleTabClick('metalmecanica')}
                className={`w-full p-5 text-left transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  activeTab === 'metalmecanica' ? 'bg-white text-nexus-dark font-bold' : 'glass-panel text-gray-400'
                }`}
              >
                <div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 ${activeTab === 'metalmecanica' ? 'text-nexus-purple' : 'text-amber-500'}`}>METALMECÁNICA E INDUSTRIAL</span>
                  <h3 className="text-base font-bold">Estructuras & Coberturas</h3>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'metalmecanica' ? 'rotate-90 text-nexus-dark' : 'text-gray-500'}`} />
              </button>
              
              {activeTab === 'metalmecanica' && (
                <div className="p-4 border-t border-white/10 glass-panel animate-fade-in bg-nexus-dark/60">
                  {renderDetailContent('metalmecanica')}
                </div>
              )}
            </div>

            {/* Acordeón Transporte */}
            <div id="acordeon-transporte" className="rounded-3xl overflow-hidden border border-white/5 bg-nexus-dark/40 text-left">
              <button
                onClick={() => handleTabClick('transporte')}
                className={`w-full p-5 text-left transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  activeTab === 'transporte' ? 'bg-white text-nexus-dark font-bold' : 'glass-panel text-gray-400'
                }`}
              >
                <div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 ${activeTab === 'transporte' ? 'text-nexus-purple' : 'text-amber-500'}`}>TRANSPORTE Y LOGÍSTICA</span>
                  <h3 className="text-base font-bold">Transporte & Logística Pesada</h3>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'transporte' ? 'rotate-90 text-nexus-dark' : 'text-gray-500'}`} />
              </button>
              
              {activeTab === 'transporte' && (
                <div className="p-4 border-t border-white/10 glass-panel animate-fade-in bg-nexus-dark/60">
                  {renderDetailContent('transporte')}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* NUEVO ENFOQUE: Cómo estructuramos la información de la página */}
      <section className="container mx-auto px-6 pt-6 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-xs uppercase text-amber-500 font-bold tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Estrategia y Estructura
              </span>
              <h2 className="text-3xl font-bold text-white mt-4">
                ¿Cómo Estructuramos una Web de Ventas para Empresas?
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                No construimos plantillas genéricas. Cada bloque está estratégicamente diseñado para guiar al usuario desde la primera impresión hasta la conversión final.
              </p>
            </div>

            <div className="flex flex-col gap-24">
              {seccionesMuestra.map((sec, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'
                      }`}
                  >
                    {/* Contenedor de la Imagen con Simulación de Navegador */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className={`absolute -inset-6 rounded-[40px] bg-gradient-to-tr ${isEven ? 'from-amber-500/25 to-orange-500/15' : 'from-nexus-purple/25 to-pink-500/15'
                        } opacity-40 blur-3xl transition-all duration-700 animate-soft-glow-pulsing pointer-events-none group-hover:opacity-60`} />

                      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#070a13] z-10">
                        {/* Cabecera del Navegador Simulada */}
                        <div className="bg-[#182035]/80 px-4 py-2.5 border-b border-white/5 flex items-center justify-between gap-2">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
                          </div>
                          <div className="bg-white/5 rounded-lg text-[9px] text-gray-400 px-6 py-0.5 mx-auto w-1/2 text-center font-mono overflow-hidden whitespace-nowrap">
                            fase-desarrollo_paso-{sec.step}.html
                          </div>
                          <span className={`text-[8px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border ${isEven ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-nexus-purple/10 border-nexus-purple/20 text-nexus-purple'}`}>
                            Paso {sec.step}
                          </span>
                        </div>

                        <div className="relative h-72 md:h-[400px] overflow-hidden">
                          <img
                            src={sec.img ? (sec.img.startsWith('http') || sec.img.startsWith('data:') ? sec.img : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${sec.img}`) : ''}
                            alt={sec.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 font-sans"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-[#070a13]/10 to-transparent pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    {/* Contenedor del Contenido */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
                      <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-2 leading-tight tracking-tight">
                        {sec.title}
                      </h3>

                      <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                        {sec.proceso}
                      </p>

                      <div className="flex flex-col gap-4">
                        {/* Caja 1: ¿Qué información se muestra? */}
                        <div className="glass-panel border border-white/5 rounded-2xl p-4.5 flex gap-4 items-start hover:border-nexus-purple/20 transition-all duration-300">
                          <div className="p-2 rounded-xl bg-nexus-purple/10 text-nexus-purple border border-nexus-purple/20 shrink-0 mt-0.5">
                            {sec.icon1}
                          </div>
                          <div>
                            <strong className="text-nexus-purple text-xs font-bold uppercase tracking-widest block mb-1">
                              ¿Qué información se muestra?
                            </strong>
                            <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed font-medium">
                              {sec.informacion}
                            </p>
                          </div>
                        </div>

                        {/* Caja 2: ¿Cómo se ve en la Web? */}
                        <div className="glass-panel border border-white/5 rounded-2xl p-4.5 flex gap-4 items-start hover:border-nexus-purple/20 transition-all duration-300">
                          <div className="p-2 rounded-xl bg-[#0b0f19] text-nexus-accent border border-white/5 shrink-0 mt-0.5">
                            {sec.icon2}
                          </div>
                          <div>
                            <strong className="text-nexus-accent text-xs font-bold uppercase tracking-widest block mb-1">
                              ¿Cómo se ve en la Web?
                            </strong>
                            <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed font-medium">
                              {sec.comoSeVe}
                            </p>
                          </div>
                        </div>

                        {/* Caja 3: ¿Para qué te sirve? (Valor de Negocio) */}
                        <div className="glass-panel border border-amber-500/10 rounded-2xl p-4.5 flex gap-4 items-start hover:border-amber-500/30 transition-all duration-300 bg-amber-500/[0.02]">
                          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0 mt-0.5">
                            {sec.icon3}
                          </div>
                          <div>
                            <strong className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                              ¿Para qué te sirve? (Beneficio de Negocio)
                            </strong>
                            <p className="text-gray-200 text-[13px] md:text-sm leading-relaxed font-medium">
                              {sec.paraQueSirve}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pilares de Conversión - Tres bloques informativos */}
          <div className="mb-8 border-t border-white/5 pt-20">
            <div className="text-center mb-16">
              <span className="text-xs uppercase text-amber-500 font-bold tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Criterios de Calidad y Rendimiento
              </span>
              <h2 className="text-3xl font-bold text-white mt-4">Criterios Clave para tu Éxito Digital</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                Diseñamos pensando en la usabilidad del comprador final y en facilitar la gestión diaria del negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pilaresEnfoque.map((pilar, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl flex flex-col gap-5 ${pilar.neonClass} border shadow-2xl hover:-translate-y-1.5 duration-300 transition-all`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${pilar.iconBg}`}>
                    {pilar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{pilar.title}</h3>
                  <p className="text-xs md:text-[13px] text-gray-400 leading-relaxed font-medium">
                    {pilar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto glass-panel border border-amber-500/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500 opacity-[0.03] rounded-full blur-[80px] pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Cómo Creamos la Vitrina Digital de tu Empresa?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            Consolidar la presencia digital de tu empresa ante el auge de los megaproyectos de Chancay, Corío y el desarrollo de infraestructura en el sur peruano es un proceso claro, estructurado y sin complicaciones. Te invitamos a conocer cómo planificamos, diseñamos y entregamos tu plataforma web corporativa de alta credibilidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/proceso"
              className="inline-flex items-center justify-center btn-neon-amber px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto text-white"
            >
              Ver Proceso de Trabajo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/5 px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 text-gray-400 hover:text-white uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
