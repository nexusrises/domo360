import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Lock, 
  Scale,
  Search,
  AlertTriangle,
  FileCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function InvierteSeguro() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    document.title = "Inversión Inmobiliaria Segura y Transparente | Nexus Domo 360°";
    window.scrollTo(0, 0);
  }, []);

  const peligros = [
    {
      id: 1,
      titulo: "1. Tráfico de tierras o múltiples dueños",
      descripcion: "Es el fraude más común en terrenos sin independizar en el altiplano. Estafadores venden un mismo lote a dos o más personas distintas utilizando minutas y documentos de posesión falsificados. Los compradores terminan en largos y costosos litigios judiciales por la posesión física de la propiedad.",
      imagen: "/trafico_tierras_puno.png",
      tag: "⚠️ Riesgo de Doble Venta",
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
      solucion: "Evitamos ventas duplicadas mediante estudio registral SUNARP obligatorio antes de publicar."
    },
    {
      id: 2,
      titulo: "2. Cargas o hipotecas ocultas",
      descripcion: "Muchas propiedades o casas en venta en Juliaca arrastran deudas imprevistas, embargos por créditos bancarios impagos, litigios de herencias familiares no declarados o cargas técnicas que impiden construir legalmente. El comprador descubre la deuda recién cuando acude a formalizar su firma ante notaría.",
      imagen: "/hipoteca_oculta_puno.png",
      tag: "🔒 Cargas Financieras Ocultas",
      icon: <Lock className="w-5 h-5 text-red-400" />,
      solucion: "Filtramos deudas, gravámenes y realizamos estudio de títulos completo con asesores legales."
    },
    {
      id: 3,
      titulo: "3. Linderos y medidas falsas",
      descripcion: "Terrenos que en los documentos de compraventa dicen medir una superficie determinada (ej. 160 m²), pero al medir físicamente en campo, el lote resulta ser mucho más angosto debido a invasiones de vecinos colindantes o errores de delimitación topográfica en el plano inicial de lotización.",
      imagen: "/medidas_falsas_puno.png",
      tag: "📐 Medidas Físicas Falsas",
      icon: <Scale className="w-5 h-5 text-red-400" />,
      solucion: "Verificamos mediciones perimétricas exactas en campo mediante levantamiento topográfico con dron."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === peligros.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? peligros.length - 1 : prev - 1));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo puedo verificar si un terreno en Juliaca tiene un título de propiedad real inscrito en la SUNARP?",
      answer: "El único documento legal que garantiza la propiedad absoluta es la Copia Literal o la Partida Registral emitida por la SUNARP Juliaca. En este registro público se detalla el historial de dueños, las dimensiones exactas del lote y si cuenta con embargos, hipotecas o juicios pendientes. Comprar solo con 'minuta de posesión' o documentos comunales en Juliaca representa un riesgo extremo de doble venta. En Nexus Domo 360, realizamos este estudio legal de forma obligatoria y gratuita para ti antes de publicar cualquier inmueble."
    },
    {
      question: "¿Qué peligro real corro al comprar un lote en Juliaca que solo cuenta con minuta o constancia de posesión?",
      answer: "La constancia de posesión o la minuta de compraventa sin inscripción registral no acreditan propiedad ante la ley peruana; solo certifican quién ocupa físicamente el suelo. Estafadores en Juliaca suelen vender un mismo lote a varias personas usando minutas firmadas legalmente en notaría, pero sin valor en Registros Públicos. Si compras un terreno sin título en la SUNARP, podrías perder toda tu inversión en un litigio judicial. En nuestro portal solo listamos propiedades con Partida Registral independizada o en proyectos de habilitación urbana debidamente aprobados."
    },
    {
      question: "¿Por qué el servicio de verificación legal y topografía de Nexus Domo es 100% gratuito para mí como comprador?",
      answer: "Así es. Como comprador, no nos pagas absolutamente nada por la búsqueda de tu terreno, el estudio de títulos registrales, la verificación topográfica con dron ni el acompañamiento legal en notaría. Nuestros honorarios de corretaje son cubiertos en su totalidad por el propietario vendedor o la constructora del proyecto inmobiliario en Juliaca. Tu único gasto será el precio real del inmueble y las tasas notariales de ley."
    },
    {
      question: "¿Qué pasa si me interesa un lote en una nueva habilitación urbana en las salidas de Juliaca que aún no tiene agua ni luz?",
      answer: "En las zonas de expansión de Juliaca (salida a Puno, Cusco o Huancané), es común que los proyectos estén en fase de desarrollo. En Nexus Domo 360 no nos basamos en promesas verbales. Auditamos los expedientes técnicos municipales y las resoluciones de habilitación urbana. Verificamos que la empresa desarrolladora tenga firmados los plazos obligatorios de entrega de redes de agua, desagüe, luz y pistas en el contrato de compraventa, asegurando que tu lote adquiera alta plusvalía legalmente."
    },
    {
      question: "¿Cómo es el proceso de firma y pago seguro para comprar un terreno verificado con ustedes?",
      answer: "Para tu total seguridad, todo pago importante (cuota inicial o saldo total) se realiza mediante un cheque de gerencia no negociable o transferencia bancaria directa a nombre del titular registral de la SUNARP, nunca a terceros. La firma del contrato de compraventa (minuta) y la firma de la Escritura Pública se realizan exclusivamente de forma física dentro de una Notaría Pública autorizada en Juliaca. Nosotros te guiamos paso a paso hasta que tu propiedad quede debidamente inscrita a tu nombre en Registros Públicos."
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  const prevActiveStepRef = useRef(-1);

  // Posicionar al inicio (hero) al ingresar o actualizar la página "Invierte Seguro"
  useEffect(() => {
    let originalScrollRestoration;
    if ('scrollRestoration' in window.history) {
      originalScrollRestoration = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
    }

    // Scroll inmediato al inicio de la página
    window.scrollTo(0, 0);

    // Respaldo de seguridad diferido
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => {
      clearTimeout(timer);
      if ('scrollRestoration' in window.history && originalScrollRestoration) {
        window.history.scrollRestoration = originalScrollRestoration;
      }
    };
  }, []);

  // Desplazar automáticamente la pantalla de forma fluida a la cabecera del nivel al expandirlo
  useEffect(() => {
    if (activeStep !== -1) {
      const prevActiveStep = prevActiveStepRef.current;
      prevActiveStepRef.current = activeStep;

      const element = document.getElementById(`acordeon-nivel-${activeStep}`);
      if (element) {
        const yOffset = -96; // Compensar la altura del navbar fijo
        let y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        // Si la tarjeta previa estaba arriba de la tarjeta nueva, restamos la altura de su contenido colapsable
        if (prevActiveStep !== -1 && prevActiveStep < activeStep) {
          const prevElement = document.getElementById(`acordeon-nivel-${prevActiveStep}`);
          if (prevElement) {
            const panel = prevElement.children[1];
            if (panel) {
              const panelHeight = panel.scrollHeight;
              y -= panelHeight;
            }
          }
        }

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      prevActiveStepRef.current = activeStep;
    }
  }, [activeStep]);

  const pasos = [
    {
      id: 0,
      numero: "01",
      titulo: "Filtro 1: Legal Registral (SUNARP)",
      descripcion: "Validamos que cada propiedad cuente con una partida registral activa y título de propiedad debidamente inscrito en los Registros Públicos (SUNARP). Extraemos y analizamos la Copia Literal completa para certificar que esté limpia de gravámenes, hipotecas, cargas técnicas, demandas activas o litigios familiares de herencias.",
      color: "text-nexus-accent",
      bgColor: "bg-nexus-accent/10",
      borderColor: "border-nexus-accent/20",
      glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.15)]",
      imagen: "/filtro_sunarp_juliaca.png",
      puntos: [
        "Estudio integral de Partida Registral y Copia Literal",
        "Verificación de gravámenes, hipotecas y embargos activos",
        "Estudio de tracto sucesivo y antecedentes de transferencia",
        "Certificación de firmas limpias ante Notaría Pública"
      ]
    },
    {
      id: 1,
      numero: "02",
      titulo: "Filtro 2: Municipal y Tributario",
      descripcion: "Verificamos que los impuestos prediales autovalúo (Hoja de Resumen HR y Predio Urbano PU) estén completamente al día y pagados ante la municipalidad. Corroboramos la inexistencia de multas administrativas de construcción, linderos proyectados de habilitación urbana y la plena compatibilidad de zonificación para residencial o comercial.",
      color: "text-nexus-purple",
      bgColor: "bg-nexus-purple/10",
      borderColor: "border-nexus-purple/20",
      glowColor: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      imagen: "/filtro_municipal_juliaca.png",
      puntos: [
        "Validación de autovalúo al día (formularios HR y PU)",
        "Verificación de deudas de arbitrios o multas municipales",
        "Análisis de compatibilidad de zonificación del suelo",
        "Validación de planos de lotización aprobados"
      ]
    },
    {
      id: 2,
      numero: "03",
      titulo: "Filtro 3: Físico y Topográfico (Dron)",
      descripcion: "Acudimos físicamente al terreno para realizar un levantamiento topográfico visual mediante vuelos con dron. Verificamos que las colindancias, medidas perimétricas y linderos coincidan con total precisión matemática con el plano archivado en la SUNARP. Asimismo, corroboramos en el lugar el estado real de los servicios básicos (agua, desagüe y luz).",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
      borderColor: "border-indigo-400/20",
      glowColor: "shadow-[0_0_15px_rgba(129,140,248,0.15)]",
      imagen: "/filtro_dron_juliaca.png",
      puntos: [
        "Inspección física en campo y linderos perimétricos",
        "Levantamiento topográfico aéreo digital mediante dron",
        "Superposición geométrica de coordenadas SUNARP vs. Terreno",
        "Comprobación in situ de la factibilidad de agua, desagüe y luz"
      ]
    }
  ];

  return (
    <div className="animate-fade-in-up font-sans">
      {/* Estilos locales de animación */}
      <style>{`
        @keyframes avatarWaterFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .avatar-water-border {
          background-size: 200% 200%;
          animation: avatarWaterFlow 6s ease infinite;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 pt-28 pb-16 relative z-10 text-center reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-nexus-accent/10 to-nexus-purple/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3.5 py-1.5 rounded-full border border-nexus-accent/20 relative z-10 inline-block">
          CERO RIESGOS DE ESTAFAS
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-5 mb-6 leading-[1.15] max-w-4xl mx-auto relative z-10 font-display">
          Tu inversión protegida: Compra con absoluta <span className="text-gradient-rise">Seguridad y Transparencia</span>
        </h1>
        
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-10 leading-relaxed relative z-10">
          En el dinámico mercado inmobiliario del departamento de Puno en el sur del Perú, la protección de tu capital es nuestra prioridad absoluta. En Nexus Domo 360° auditamos con rigor legal, técnico y físico cada terreno, lote y vivienda en Juliaca, la ciudad de Puno y sus principales zonas de expansión antes de su publicación. Cero riesgos, cero informalidad; solo inversiones con seguridad jurídica garantizada.
        </p>

        <div className="flex justify-center relative z-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center btn-neon-cian px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 active:scale-95 group font-display"
          >
            <Search className="w-4.5 h-4.5 mr-2" />
            🔍 Ver Propiedades Verificadas
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 2. LA REALIDAD DEL MERCADO (PELIGROS - CAROUSEL PREMIUM RESPONSIVE) */}
      <section className="container mx-auto px-6 pb-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-red-400 font-bold tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">ALERTAS DEL MERCADO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Los 3 mayores peligros al comprar un terreno en Juliaca (y cómo te protegemos)
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed font-sans">
            Comprar un lote de manera informal puede costar los ahorros de toda tu vida. A continuación, te mostramos los riesgos más comunes y cómo te protegemos de ellos de forma activa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-0 md:px-6 reveal-on-scroll">
          {/* Contenedor Principal del Carrusel */}
          <div className="overflow-hidden rounded-3xl border border-white/5 glass-panel relative group shadow-[0_15px_60px_rgba(0,0,0,0.6)]">
            
            {/* Contenedor de las Slides con efecto de transición horizontal y soporte táctil */}
            <div 
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {peligros.map((peligro, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col md:flex-row items-stretch min-h-[440px] md:min-h-[480px]">
                  
                  {/* Columna Izquierda: Imagen responsiva fotorrealista */}
                  <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-auto overflow-hidden bg-black/40 border-b md:border-b-0 md:border-r border-white/5">
                    <img 
                      src={peligro.imagen.startsWith('http') || peligro.imagen.startsWith('data:') ? peligro.imagen : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${peligro.imagen}`} 
                      alt={peligro.titulo} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0d14] via-transparent to-transparent md:via-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/50 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Etiqueta flotante */}
                    <span className="absolute top-6 left-6 text-[10px] uppercase font-black tracking-widest bg-red-950/80 border border-red-500/30 backdrop-blur-md px-3.5 py-2 rounded-full text-red-400 shadow-lg select-none">
                      {peligro.tag}
                    </span>
                  </div>

                  {/* Columna Derecha: Contenido Informativo & Garantía */}
                  <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-12 flex flex-col justify-between bg-[#0a0d14]/95">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
                          {peligro.icon}
                        </div>
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white font-display leading-tight text-left">
                          {peligro.titulo}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-left font-sans font-normal tracking-wide">
                        {peligro.descripcion}
                      </p>
                    </div>

                    {/* Alerta de Garantía en Verde */}
                    <div className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-white/5 flex items-start gap-2.5 text-[#4ade80] text-[11px] sm:text-xs leading-relaxed text-left font-semibold font-sans">
                      <div className="p-0.5 rounded-full bg-[#09d261]/10 border border-[#09d261]/20 text-[#09d261] shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[#4ade80] font-black uppercase tracking-wider text-[9px] block mb-1 font-display">Garantía de Compra Segura</span>
                        {peligro.solucion}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles del Carrusel (Flechas y Dots de Navegación) */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-red-400" />
            </button>

            <div className="flex justify-center gap-2">
              {peligros.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-red-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al peligro ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-red-400" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. LA SOLUCIÓN (PROTOCOLO DE VERIFICACIÓN DE 3 NIVELES - STEPPER PREMIUM) */}
      <section className="container mx-auto px-6 pb-12 relative z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">PROTOCOLO DE SEGURIDAD</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Nuestro Protocolo de Verificación de 3 Niveles
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed font-sans">
            No dejamos nada al azar. Cada inmueble y lote listado en Nexus Domo 360° atraviesa un riguroso proceso de tres filtros independientes antes de ser publicado.
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL STEPPER */}
        <div className="max-w-6xl mx-auto">
          
          {/* VISTA DE ESCRITORIO (md y superior): DOBLE COLUMNA CON BOTONES VERTICALES E IMAGEN DINÁMICA */}
          <div className="hidden md:flex gap-8 lg:gap-12 items-stretch min-h-[520px]">
            {(() => {
              const stepToShow = activeStep === -1 ? 0 : activeStep;
              return (
                <>
                  {/* Columna Izquierda: Selector de Pasos (40% de ancho) */}
                  <div className="w-[40%] flex flex-col justify-between relative py-4">
                    
                    {/* Línea vertical de progreso */}
                    <div className="absolute left-12 top-12 bottom-12 w-0.5 bg-white/10 z-0">
                      {/* Relleno brillante de progreso basado en el paso activo */}
                      <div 
                        className="w-full bg-gradient-to-b from-nexus-accent via-nexus-purple to-indigo-400 transition-all duration-500 rounded-full"
                        style={{ 
                          height: `${(stepToShow / (pasos.length - 1)) * 100}%`,
                          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                        }}
                      />
                    </div>

                    {pasos.map((paso, idx) => (
                      <button
                        key={paso.id}
                        onClick={() => setActiveStep(idx)}
                        className={`w-full flex items-center gap-6 p-6 rounded-2xl border text-left transition-all duration-300 relative z-10 focus:outline-none cursor-pointer ${
                          stepToShow === idx 
                            ? `glass-panel ${paso.borderColor} ${paso.glowColor} bg-[#0a0d14]/70` 
                            : 'border-transparent hover:bg-white/[0.02] bg-transparent'
                        }`}
                      >
                        {/* Número de Paso */}
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-display text-xl font-black shrink-0 border transition-all duration-300 ${
                          stepToShow === idx 
                            ? `${paso.bgColor} ${paso.color} ${paso.borderColor}` 
                            : 'bg-white/5 border-white/5 text-gray-500'
                        }`}>
                          {paso.numero}
                        </div>

                        {/* Título de Paso */}
                        <div className="space-y-1">
                          <span className={`text-[10px] uppercase font-black tracking-wider transition-colors duration-300 ${
                            stepToShow === idx ? paso.color : 'text-gray-500'
                          }`}>
                            Nivel {paso.numero}
                          </span>
                          <h3 className={`font-bold text-base lg:text-lg font-display transition-colors duration-300 ${
                            stepToShow === idx ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                          }`}>
                            {paso.titulo.split(': ')[1] || paso.titulo}
                          </h3>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Columna Derecha: Panel de Detalle Dinámico (60% de ancho) */}
                  <div className="w-[60%] glass-panel border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a0d14]/60">
                    
                    {/* Imagen del paso con efecto de fade suave */}
                    <div className="w-full h-64 lg:h-72 relative overflow-hidden bg-black/30 border-b border-white/5">
                      {pasos.map((paso, idx) => (
                        <div 
                          key={paso.id}
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            stepToShow === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
                          }`}
                        >
                          <img 
                            src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}${paso.imagen}`} 
                            alt={paso.titulo} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                          />
                          {/* Gradientes premium */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-transparent"></div>
                          <span className={`absolute top-6 right-6 text-[9px] uppercase font-black tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-md shadow-md ${paso.bgColor} ${paso.color} ${paso.borderColor}`}>
                            Filtro Activo
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Contenido del paso */}
                    <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <h3 className={`font-bold text-xl lg:text-2xl font-display text-white transition-colors duration-300`}>
                          {pasos[stepToShow].titulo}
                        </h3>
                        <p className="text-gray-300 text-xs lg:text-sm leading-relaxed font-sans font-normal">
                          {pasos[stepToShow].descripcion}
                        </p>
                      </div>

                      {/* Lista de Puntos Clave de Verificación */}
                      <div className="border-t border-white/5 pt-6">
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 block mb-3.5 font-display">Tareas de Auditoría Legal y Técnica</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {pasos[stepToShow].puntos.map((punto, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] lg:text-xs text-gray-300 font-sans leading-relaxed">
                              <div className={`p-0.5 rounded-full mt-0.5 shrink-0 border ${pasos[stepToShow].bgColor} ${pasos[stepToShow].color} ${pasos[stepToShow].borderColor}`}>
                                <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>{punto}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}

          </div>

          {/* VISTA MÓVIL (Menor que md): ACORDEONES EXPANDIBLES ENRIQUECIDOS */}
          <div className="flex md:hidden flex-col gap-4">
            {pasos.map((paso, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div 
                  key={paso.id} 
                  id={`acordeon-nivel-${idx}`}
                  className={`glass-panel border rounded-2xl overflow-hidden transition-all duration-300 scroll-mt-24 ${
                    isOpen ? `${paso.borderColor} ${paso.glowColor} bg-[#0a0d14]/80` : 'border-white/5 bg-[#0a0d14]/40'
                  }`}
                >
                  {/* Botón Cabecera de Acordeón */}
                  <button
                    onClick={() => setActiveStep(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Número */}
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-display text-sm font-black shrink-0 border transition-all duration-300 ${
                        isOpen 
                          ? `${paso.bgColor} ${paso.color} ${paso.borderColor}` 
                          : 'bg-white/5 border-white/5 text-gray-500'
                      }`}>
                        {paso.numero}
                      </div>
                      
                      {/* Título de Cabecera */}
                      <div>
                        <span className={`text-[9px] uppercase font-bold tracking-widest block ${
                          isOpen ? paso.color : 'text-gray-500'
                        }`}>
                          Nivel {paso.numero}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base font-display text-white leading-tight">
                          {paso.titulo.split(': ')[1] || paso.titulo}
                        </h3>
                      </div>
                    </div>

                    {/* Flecha de estado */}
                    <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : 'rotate-0 text-gray-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Panel de Contenido Desplegable (Animado) */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[750px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    {/* Imagen de fondo */}
                    <div className="w-full h-44 relative bg-black/30 overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}${paso.imagen}`} 
                        alt={paso.titulo} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-transparent"></div>
                    </div>

                    {/* Descripción y checklist */}
                    <div className="p-5 space-y-5">
                      <p className="text-gray-300 text-xs leading-relaxed font-sans">
                        {paso.descripcion}
                      </p>

                      <div className="border-t border-white/5 pt-4">
                        <span className="text-[9px] uppercase font-black tracking-widest text-gray-500 block mb-3 font-display">Tareas de Auditoría Legal y Técnica</span>
                        <div className="flex flex-col gap-3">
                          {paso.puntos.map((punto, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-[11px] text-gray-300 font-sans leading-relaxed">
                              <div className={`p-0.5 rounded-full mt-0.5 shrink-0 border ${paso.bgColor} ${paso.color} ${paso.borderColor}`}>
                                <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>{punto}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CIERRE Y TEXTO DE CONFIANZA (CONVERSIÓN DE LEADS EN INVERSIONISTAS) */}
      <section className="container mx-auto px-6 pb-20 relative z-10 text-center">
        <div className="max-w-3xl mx-auto glass-panel border-emerald-500/20 rounded-3xl p-8 md:p-12 bg-emerald-500/[0.01] shadow-[0_15px_40px_rgba(16,185,129,0.08)]">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mx-auto mb-6">
            <FileCheck className="w-6 h-6" />
          </div>
          
          <span className="text-[10px] uppercase font-black tracking-widest text-[#4ade80] bg-[#4ade80]/10 px-3.5 py-1.5 rounded-full border border-[#4ade80]/20 mb-4 inline-block font-display">
            RESPALDO LEGAL Y TÉCNICO COMPLETO
          </span>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 font-display">
            La Garantía de Inversión Segura Nexus Domo
          </h3>
          
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-sans mb-10 max-w-2xl mx-auto">
            Si un lote o vivienda lleva nuestro sello de verificación, tienes la tranquilidad de que tu capital está protegido contra cualquier tipo de fraude, doble venta o vicio legal en Juliaca. Nuestro equipo de abogados e ingenieros te acompaña y asesora de principio a fin, desde la revisión de partidas en la SUNARP hasta la firma de la escritura pública ante notario. No arriesgues tus ahorros en la informalidad.
          </p>

          <div className="flex justify-center items-center font-display mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-between gap-4 px-8 py-4 rounded-full border border-nexus-accent text-white hover:text-white bg-[#0a0d14]/40 hover:bg-[#0a0d14]/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 group w-full sm:w-auto uppercase text-xs md:text-sm font-bold tracking-wider cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-nexus-accent group-hover:scale-110 transition-transform duration-200" />
                <span>Ver Propiedades Verificadas</span>
              </div>
              <ArrowRight className="w-4 h-4 text-nexus-accent group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>



      {/* 8. SECCIÓN DE PREGUNTAS FRECUENTES (FAQs) */}
      <section className="container mx-auto px-6 pb-16 relative z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">INVERSIONISTAS INFORMADOS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed font-sans">
            Resolvemos tus dudas legales, técnicas y procedimentales para que compres tu próximo lote con total seguridad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass-panel border-white/5 rounded-2xl overflow-hidden transition-colors duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none"
              >
                <span className="font-bold text-sm md:text-base text-white font-display leading-snug">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-nexus-accent transition-transform duration-300 shrink-0 ${
                    openFaq === idx ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 font-sans">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto glass-panel border-nexus-purple/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden reveal-on-scroll">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-purple opacity-[0.03] rounded-full blur-[80px]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            ¿Deseas invertir en tu próximo lote de forma segura?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-sans">
            Agenda una llamada de asesoría gratuita con nuestros asesores inmobiliarios. Analizamos tu presupuesto y te mostramos las mejores oportunidades con planos registrados en mano.
          </p>
          <a 
            href="https://wa.me/51915300535?text=Hola%2C%20deseo%20agendar%20una%20asesor%C3%ADa%20inmobiliaria%20gratuita%20para%20invertir%20en%20un%20lote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center btn-neon-purple px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
          >
            Agendar Asesoría Inmobiliaria
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
