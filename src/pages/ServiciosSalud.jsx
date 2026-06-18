import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  ShieldCheck,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  UserCheck,
  CheckCircle,
  FileCheck,
  Award,
  ExternalLink,
  Search,
  Activity,
  Heart,
  FileText,
  Activity as Stethoscope,
  Smile,
  ShieldAlert
} from 'lucide-react';

export default function ServiciosSalud() {
  const [activeTab, setActiveTab] = useState('clinica');
  const [showCallToast, setShowCallToast] = useState(false);

  const handleCallDemo = (e) => {
    e.preventDefault();
    setShowCallToast(true);
    // Auto-ocultar después de 6 segundos
    setTimeout(() => {
      setShowCallToast(false);
    }, 6000);
  };

  const previews = {
    clinica: {
      title: 'Tu Portal Clínico con Reserva de Citas en Línea',
      subtitle: 'Diseñado para optimizar tus consultas y dar comodidad a tus pacientes.',
      heroImg: '/salud_portal_juliaca.png',
      deseosCliente: '«Quiero que mis pacientes puedan ver todas nuestras especialidades médicas, conocer al staff de doctores de confianza y agendar su cita médica de forma autónoma las 24 horas del día.»',
      features: [
        'Calendario de reservas en tiempo real integrado con las agendas internas de tus médicos.',
        'Notificación y recordatorios de confirmación automatizados directo al WhatsApp del paciente.',
        'Buscador y catálogo limpio de especialidades médicas (Cardiología, Pediatría, Ginecología, etc.).',
        'Directorio completo del staff médico con especialidades y códigos de colegio (CMP).'
      ],
      badgeText: 'Agendamiento Fluido',
      mockupTitle: 'Reserva tu Cita Médica hoy',
      mockupDesc: 'Elige especialidad, tu médico de preferencia y programa tu cita en menos de 2 minutos.',
      mockupBtnText: 'Reservar en Línea'
    },
    ocupacional: {
      title: 'Tu Plataforma de Salud Ocupacional para Empresas',
      subtitle: 'Diseñada para agilizar la entrega de aptitudes médicas corporativas.',
      heroImg: '/salud_urgencias_puno.png',
      deseosCliente: '«Necesito una web donde los coordinadores de Recursos Humanos de las empresas clientes puedan descargar las aptitudes médicas ocupacionales en PDF de forma rápida y segura.»',
      features: [
        'Módulo seguro y privado de descarga de certificados de aptitud médica mediante token o login.',
        'Sección explicativa y estructurada de cumplimiento de la Ley N° 29783.',
        'Formularios dinámicos para solicitar cotizaciones masivas de exámenes preempleo o periódicos.',
        'Panel de descarga de brochures de servicios preventivos para empresas y fábricas.'
      ],
      badgeText: 'Salud Ocupacional',
      mockupTitle: 'Descarga de Aptitudes Médicas',
      mockupDesc: 'Accede al portal de empresas para consultar y descargar informes de aptitud ocupacional de tus colaboradores.',
      mockupBtnText: 'Ingresar al Portal'
    },
    laboratorio: {
      title: 'Tu Portal de Resultados de Laboratorio e Imágenes',
      subtitle: 'Diseñado para entregar resultados clínicos con celeridad y seguridad.',
      heroImg: '/salud_resultados_laboratorio.png',
      deseosCliente: '«Quiero que el paciente evite regresar a la clínica solo para recoger sus resultados. Que ingrese su DNI y obtenga sus informes de laboratorio o placas al instante.»',
      features: [
        'Módulo de consulta de resultados de análisis clínicos mediante código de ticket o DNI.',
        'Acreditaciones de bioseguridad, ISO 15189 de laboratorios y convenios de EPS visibles.',
        'Explicación clara de preparaciones previas a exámenes (ayuno, recolección de muestras).',
        'Botón de llamada rápida para coordinar urgencias o resultados críticos.'
      ],
      badgeText: 'Resultados en Línea',
      mockupTitle: 'Consulta de Resultados Médicos',
      mockupDesc: 'Ingresa tu documento de identidad para descargar de inmediato tus análisis clínicos de forma segura.',
      mockupBtnText: 'Ver Resultados'
    }
  };

  const seccionesMuestra = [
    {
      step: "01",
      title: "1. Confianza y Autoridad Médica (Staff de Especialistas)",
      estrategia: "La web es la carta de presentación de tu clínica en Puno y Juliaca. Publicar de forma transparente los perfiles, fotos reales, especialidades y colegiaturas (CMP/RNE) de tus médicos disipa cualquier duda del paciente antes de su primera consulta.",
      paciente: "Obtiene la seguridad y garantía absoluta de que su dolencia será tratada por profesionales médicos titulados y especialistas acreditados de la región, facilitando su elección de manera informada.",
      img: "/salud_staff_medico.png",
      icon1: <UserCheck className="w-4 h-4" />,
      icon2: <Award className="w-4 h-4" />
    },
    {
      step: "02",
      title: "2. Automatización y Gestión de Citas (Reserva en Línea)",
      estrategia: "Reduce en un 30% el ausentismo y descongestiona la recepción telefónica. Permite el agendamiento digital dinámico las 24 horas del día, sincronizado con las agendas médicas y configurando recordatorios por WhatsApp.",
      paciente: "Encuentra comodidad y rapidez al programar su cita médica en menos de 2 minutos, seleccionando la especialidad, el médico de su preferencia y el horario exacto desde cualquier dispositivo.",
      img: "/salud_portal_juliaca.png",
      icon1: <Calendar className="w-4 h-4" />,
      icon2: <Clock className="w-4 h-4" />
    },
    {
      step: "03",
      title: "3. Canal de Emergencias, Triaje y Ubicación Satelital 24/7",
      estrategia: "Garantiza la máxima visibilidad en momentos críticos. Integrar Google Maps interactivo, fotografías reales de la fachada e ingresos de la clínica y geolocalización local (SEO), asegura que tu centro de salud sea el primero que encuentren y ubiquen en Puno y Juliaca cuando cada segundo cuenta.",
      paciente: "Encuentra el camino más rápido sin perder tiempo valioso. El paciente puede trazar su ruta GPS directa a emergencias, reconocer el edificio con fotos reales de las instalaciones y saber qué médicos de guardia y ambulancias están disponibles al instante.",
      img: "/salud_urgencias_puno.png",
      icon1: <ShieldAlert className="w-4 h-4" />,
      icon2: <Heart className="w-4 h-4" />
    },
    {
      step: "04",
      title: "4. Entrega de Resultados Online y Educación al Paciente",
      estrategia: "Fideliza al paciente and reduce drásticamente los gastos operativos de impresión y colas. Integra un módulo encriptado de consulta y descarga de análisis clínicos e informes de diagnóstico por DNI.",
      paciente: "Recibe certeza médica rápida y privada sin tener que realizar viajes innecesarios a la clínica. Descarga sus informes y accede a guías de preparación o cuidados post-consulta explicadas didácticamente.",
      img: "/salud_resultados_laboratorio.png",
      icon1: <FileCheck className="w-4 h-4" />,
      icon2: <Smile className="w-4 h-4" />
    },
    {
      step: "05",
      title: "5. Análisis de Resultados y Retorno de Inversión (ROI)",
      estrategia: "Administración clínica basada en datos. Medimos con precisión matemática qué especialidades y tratamientos médicos son los más consultados por la población para optimizar el presupuesto del centro médico.",
      paciente: "Siente el respaldo de un centro médico en constante optimización, que analiza las necesidades y la experiencia de los usuarios en la web para mejorar la disponibilidad de turnos y especialidades.",
      img: "/salud_analisis_clinica.png",
      icon1: <Activity className="w-4 h-4" />,
      icon2: <FileText className="w-4 h-4" />
    }
  ];

  const pilaresEnfoque = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-nexus-blue" />,
      title: "Privacidad de Datos (HIPAA)",
      desc: "Cumplimos con la Ley de Protección de Datos Personales. Encriptación SSL/TLS y base de datos securizada para proteger la información médica de tus pacientes."
    },
    {
      icon: <Smile className="w-8 h-8 text-nexus-purple" />,
      title: "Accesibilidad para Todos",
      desc: "Tipografías contrastadas y botones de gran tamaño (mínimo 44px de área táctil) diseñados específicamente para facilitar el uso a pacientes de la tercera edad."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "Recordatorios de WhatsApp",
      desc: "Integración para disparar avisos de confirmación y recordatorios de citas de manera automatizada, reduciendo el ausentismo de pacientes en un 30%."
    }
  ];

  const currentPreview = previews[activeTab];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 relative z-10 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-nexus-blue/5 rounded-full blur-[80px] pointer-events-none"></div>
        <span className="text-xs uppercase text-nexus-blue font-bold tracking-widest bg-nexus-blue/10 px-3 py-1 rounded-full border border-nexus-blue/20">
          CLÍNICAS & CENTROS DE SALUD
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight max-w-4xl mx-auto">
          ¿Cómo se Vería la Página Web de tu Centro Médico?
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-12 leading-relaxed">
          Explora los modelos de plataformas de salud que diseñamos para clínicas, centros ocupacionales y laboratorios. Enfocados en generar máxima confianza y usabilidad.
        </p>
      </section>

      {/* Tabs Selector */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <button
              onClick={() => setActiveTab('clinica')}
              className={`p-6 rounded-3xl text-left transition-all duration-300 border border-white/5 cursor-pointer ${activeTab === 'clinica'
                  ? 'bg-white text-nexus-dark border-white shadow-xl translate-y-[-4px]'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${activeTab === 'clinica' ? 'text-nexus-purple' : 'text-nexus-blue'}`}>Clínicas & Consultorios</span>
              <h3 className="text-lg font-bold">Portal Médico de Citas</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Web para agendar citas, mostrar especialidades y dar a conocer a tu staff de médicos especialistas.</p>
            </button>

            <button
              onClick={() => setActiveTab('ocupacional')}
              className={`p-6 rounded-3xl text-left transition-all duration-300 border border-white/5 cursor-pointer ${activeTab === 'ocupacional'
                  ? 'bg-white text-nexus-dark border-white shadow-xl translate-y-[-4px]'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${activeTab === 'ocupacional' ? 'text-nexus-purple' : 'text-nexus-blue'}`}>Salud en el Trabajo</span>
              <h3 className="text-lg font-bold">Plataforma Ocupacional</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Portal corporativo para empresas, descarga segura de aptitudes médicas y Ley N° 29783.</p>
            </button>

            <button
              onClick={() => setActiveTab('laboratorio')}
              className={`p-6 rounded-3xl text-left transition-all duration-300 border border-white/5 cursor-pointer ${activeTab === 'laboratorio'
                  ? 'bg-white text-nexus-dark border-white shadow-xl translate-y-[-4px]'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${activeTab === 'laboratorio' ? 'text-nexus-purple' : 'text-nexus-blue'}`}>Centros de Diagnóstico</span>
              <h3 className="text-lg font-bold">Laboratorio & Imágenes</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Entrega digitalizada de resultados clínicos, preparación de análisis y acreditaciones de calidad.</p>
            </button>
          </div>

          {/* Maqueta Interactiva */}
          <div className="glass-panel border border-white/10 rounded-3xl p-6 md:p-10 animate-fade-in-up mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Copy / Características */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold text-nexus-purple uppercase tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">
                    Así se Estructura tu Sitio Web
                  </span>
                  <h2 className="text-2xl md:text-3.5xl font-bold text-white mt-4">
                    {currentPreview.title}
                  </h2>
                  <p className="text-nexus-blue text-sm md:text-base font-medium">
                    {currentPreview.subtitle}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 italic text-gray-300 text-xs md:text-sm leading-relaxed relative">
                  <span className="absolute -top-3 left-4 bg-nexus-purple text-white text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">El Deseo de tu Negocio</span>
                  {currentPreview.deseosCliente}
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Características Clave de Conversión:</h4>
                  {currentPreview.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup de Pantalla */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">

                  {/* Browser Chrome Simulation */}
                  <div className="bg-[#182035] px-4 py-2 border-b border-white/5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
                    </div>
                    <div className="bg-white/5 rounded-lg text-[10px] text-gray-400 px-6 py-1 mx-auto w-3/4 text-center font-mono overflow-hidden whitespace-nowrap">
                      https://tu-clinica-medica.com
                    </div>
                  </div>

                  {/* Screenshot / Render Content */}
                  <div className="relative h-64 md:h-[400px] overflow-hidden">
                    <img
                      src={currentPreview.heroImg ? (currentPreview.heroImg.startsWith('http') || currentPreview.heroImg.startsWith('data:') ? currentPreview.heroImg : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${currentPreview.heroImg}`) : ''}
                      alt="Visualización del diseño web médico"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                    {/* Floating Web UI Simulation elements */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="max-w-xl">
                        <span className={`text-[9px] uppercase font-bold tracking-widest border px-2 py-0.5 rounded ${activeTab === 'ocupacional'
                            ? 'text-rose-400 bg-rose-950/40 border-rose-500/30'
                            : activeTab === 'laboratorio'
                              ? 'text-nexus-purple bg-nexus-purple/20 border-nexus-purple/30'
                              : 'text-nexus-blue bg-nexus-blue/20 border-nexus-blue/30'
                          }`}>{currentPreview.badgeText}</span>
                        <h4 className="text-lg md:text-xl font-bold text-white mt-1.5">{currentPreview.mockupTitle}</h4>
                        <p className="text-[10px] text-gray-300 mt-1 line-clamp-2">{currentPreview.mockupDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-sans">Visualización interactiva: La imagen superior emula la interfaz limpia y navegable que verán tus pacientes.</p>
                </div>
              </div>

            </div>
          </div>

          {/* NUEVO ENFOQUE: Cómo estructuramos la información de la página */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-xs uppercase text-nexus-blue font-bold tracking-widest bg-nexus-blue/10 px-3 py-1 rounded-full border border-nexus-blue/20">
                Estructura de Contenido
              </span>
              <h2 className="text-3xl font-bold text-white mt-4">¿Cómo Organizamos la Información de tu Web?</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                Diseñamos flujos limpios y jerárquicos para que el paciente encuentre rápidamente lo que necesita y agende con total tranquilidad.
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
                    {/* Contenedor de la Imagen con Resplandor Palpitante */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className={`absolute -inset-6 rounded-[40px] bg-gradient-to-tr ${isEven ? 'from-nexus-blue/25 to-cyan-500/15' : 'from-nexus-purple/25 to-pink-500/15'
                        } opacity-40 blur-3xl transition-all duration-700 animate-soft-glow-pulsing pointer-events-none group-hover:opacity-60`} />

                      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#070a13] z-10 w-full h-72 md:h-[380px]">
                        {sec.step === "03" ? (
                          /* Mockup Interactivo del Mapa y Ubicación GPS en Puno */
                          <div className="w-full h-full relative bg-[#090d16] overflow-hidden flex flex-col font-sans">
                            {/* Mapa de fondo simulado (Modo Oscuro) */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none">
                              {/* Cuadrícula de calles */}
                              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b263b_1px,transparent_1px),linear-gradient(to_bottom,#1b263b_1px,transparent_1px)] bg-[size:30px_30px]" />
                              
                              {/* Lago Titicaca Simulado (Azul profundo a la derecha) */}
                              <div className="absolute top-1/4 right-0 w-48 h-64 bg-blue-900/30 rounded-l-full blur-xl border-l border-blue-500/20" />
                              
                              {/* Río Coata / Calles de Juliaca */}
                              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-20,150 Q100,120 200,220 T500,200" fill="none" stroke="#1d2d44" strokeWidth="6" />
                                <path d="M150,-20 L150,500" fill="none" stroke="#1d2d44" strokeWidth="3" />
                                <path d="M320,-20 L320,500" fill="none" stroke="#1d2d44" strokeWidth="4" />
                                
                                {/* Ruta GPS neón animada */}
                                <path d="M50,300 L250,300 L250,180 L380,180" fill="none" stroke="#00f5ff" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
                              </svg>
                            </div>

                            {/* Contenido en dos columnas (Mapa + Detalle Fachada) */}
                            <div className="relative z-10 w-full h-full flex flex-col sm:flex-row">
                              {/* Lado Izquierdo: Mapa de Puno/Juliaca interactivo */}
                              <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between h-1/2 sm:h-full border-b sm:border-b-0 sm:border-r border-white/5 relative">
                                <div className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Tu Ubicación (GPS Activo)</span>
                                </div>

                                {/* Pin de la Clínica */}
                                <div className="absolute top-[80px] left-[100px] sm:top-[160px] sm:left-[140px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                  <div className="bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg border border-rose-400 flex items-center gap-1 animate-bounce">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    CLÍNICA ALTIPLANO
                                  </div>
                                  <div className="w-3 h-3 bg-rose-500 rounded-full border-2 border-white shadow-xl mt-1" />
                                  <div className="w-8 h-8 bg-rose-500/20 rounded-full absolute top-5 animate-ping" />
                                </div>

                                <div className="text-[10px] text-gray-400 font-mono">
                                  Región Puno • GPS: -15.4984, -70.1308
                                </div>
                              </div>

                              {/* Lado Derecho: Fachada del Hospital y Botones de Conversión */}
                              <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative overflow-hidden flex flex-col justify-between p-4 bg-[#0a0f1d]/90">
                                {/* Imagen de fachada en miniatura */}
                                <div className="absolute inset-0 opacity-20">
                                  <img 
                                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80" 
                                    alt="Fachada Clínica" 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent"></div>

                                {/* Info de la Clínica en Puno */}
                                <div className="relative z-10 flex flex-col gap-1">
                                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Sede Central Puno</h4>
                                  <p className="text-[10px] text-gray-400 font-medium">Av. Floral 450 (Frente a la UANCV), Puno</p>
                                  <span className="text-[9px] text-nexus-blue font-semibold uppercase tracking-wider bg-nexus-blue/10 px-2 py-0.5 rounded-full border border-nexus-blue/20 w-fit mt-1">
                                    INGRESO DE EMERGENCIAS POR JR. LIMA
                                  </span>
                                </div>

                                {/* Botones Interactivos de Acción */}
                                <div className="relative z-10 flex flex-col gap-2 mt-4 sm:mt-0">
                                  <a 
                                    href="https://maps.google.com" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-full py-2 bg-nexus-blue hover:bg-nexus-blue/90 text-white rounded-xl text-center text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(0,245,255,0.15)] border border-cyan-400/20 active:scale-95"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    Abrir Ruta en GPS
                                  </a>
                                  <button 
                                    onClick={handleCallDemo}
                                    className="w-full py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/30 rounded-xl text-center text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                                  >
                                    <Clock className="w-3 h-3" />
                                    Ambulancia Puno: 951-234567 (Ejemplo)
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Imagen convencional para los otros pasos */
                          <>
                            <img
                              src={sec.img ? (sec.img.startsWith('http') || sec.img.startsWith('data:') ? sec.img : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${sec.img}`) : ''}
                              alt={sec.title}
                              className="w-full h-72 md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-[#070a13]/10 to-transparent pointer-events-none"></div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
                      <h3 className="text-2xl md:text-3.5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        {sec.title}
                      </h3>

                      <div className="flex flex-col gap-4">
                        {/* Caja: Estrategia para tu Clínica */}
                        <div className="glass-panel border border-white/5 rounded-2xl p-5 flex gap-4 items-start hover:border-nexus-blue/20 transition-all duration-300">
                          <div className="p-2 rounded-xl bg-nexus-blue/10 text-nexus-blue border border-nexus-blue/20 shrink-0 mt-0.5">
                            {sec.icon1}
                          </div>
                          <div>
                            <strong className="text-nexus-blue text-[10px] font-bold uppercase tracking-widest block mb-1">Estrategia para tu Clínica</strong>
                            <p className="text-gray-300 text-xs md:text-[13px] leading-relaxed font-medium">
                              {sec.estrategia}
                            </p>
                          </div>
                        </div>

                        {/* Caja: Tranquilidad para el Paciente */}
                        <div className="glass-panel border border-nexus-purple/10 rounded-2xl p-5 flex gap-4 items-start hover:border-nexus-purple/30 transition-all duration-300 bg-nexus-purple/[0.02]">
                          <div className="p-2 rounded-xl bg-nexus-purple/10 text-nexus-purple border border-nexus-purple/20 shrink-0 mt-0.5">
                            {sec.icon2}
                          </div>
                          <div>
                            <strong className="text-nexus-purple text-[10px] font-bold uppercase tracking-widest block mb-1">Tranquilidad para el Paciente</strong>
                            <p className="text-gray-200 text-xs md:text-[13px] leading-relaxed font-medium">
                              {sec.paciente}
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
          <div className="mb-24 border-t border-white/5 pt-20">
            <div className="text-center mb-16">
              <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">
                Nuestros Criterios de Calidad
              </span>
              <h2 className="text-3xl font-bold text-white mt-4">Criterios Clave para tu Éxito Digital</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                La seriedad y la rapidez de respuesta son fundamentales cuando se trata de la salud de tus pacientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pilaresEnfoque.map((pilar, i) => (
                <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    {pilar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{pilar.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto glass-panel border border-nexus-blue/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-blue opacity-[0.03] rounded-full blur-[80px] pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Eleva la Confianza Médica de tus Pacientes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            Consigue un portal médico completo con agendamiento dinámico, vitrina de especialidades, perfiles del staff y altos estándares de seguridad.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center btn-neon-blue px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto text-white"
          >
            Empezar Plataforma Médica
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Toast Flotante de Simulación para el Cliente */}
      {showCallToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm glass-panel border border-nexus-blue/30 rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,245,255,0.15)] animate-fade-in-up flex gap-4 items-start bg-[#090d16]/95">
          <div className="p-2 rounded-xl bg-nexus-blue/15 text-nexus-blue border border-nexus-blue/30 shrink-0">
            <HeartPulse className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 font-sans">
              <span className="w-2 h-2 rounded-full bg-nexus-blue animate-ping"></span>
              Demostración de Integración
            </h5>
            <p className="text-gray-300 text-[11px] leading-relaxed font-sans">
              En la página web oficial de tu clínica, al pulsar este botón desde un celular, el sistema <strong>iniciará automáticamente la llamada de emergencia</strong> al número de tu ambulancia o central médica.
            </p>
            <button 
              onClick={() => setShowCallToast(false)} 
              className="mt-3 text-[10px] font-bold text-nexus-purple uppercase tracking-wider hover:text-white transition-colors cursor-pointer font-sans"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
