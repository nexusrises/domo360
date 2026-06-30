import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Compass, 
  Laptop, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Building, 
  ShieldCheck, 
  HelpCircle,
  TrendingUp,
  FileText,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function VendePropiedad() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const soluciones = [
    {
      title: "Vuelos de Dron DJI",
      description: "Mostramos la ubicación exacta, vías de acceso pavimentadas o afirmadas, áreas verdes, servicios colindantes y todo el entorno del terreno o casa desde el aire en alta resolución 4K. El comprador sabrá exactamente dónde se ubica la propiedad.",
      image: "/vuelos_dron_preview.png",
      tag: "Perspectiva aérea profesional",
      icon: <Video className="w-5 h-5" />,
      color: "text-[#00f2fe] bg-[#00f2fe]/10 border-[#00f2fe]/20"
    },
    {
      title: "Recorridos Virtuales 360°",
      description: "Permitimos que los compradores interesados caminen virtualmente por las habitaciones, sala, cocina, baños y cocheras desde su celular, computadora o tablet antes de agendar la visita física. Ahorramos tu tiempo y filtramos solo a compradores reales.",
      image: "/recorrido_360_preview.png",
      tag: "Visita inmersiva interactiva",
      icon: <Compass className="w-5 h-5" />,
      color: "text-nexus-purple bg-nexus-purple/10 border-nexus-purple/20"
    },
    {
      title: "Ficha Web Interactiva Premium",
      description: "Tu propiedad no se perderá en un catálogo de redes sociales. Tendrá su propia sección optimizada, elegante y de carga súper rápida en nuestro portal inmobiliario de alto rendimiento, diseñada psicológicamente para convertir las visitas en ofertas reales.",
      image: "/ficha_web_preview.png",
      tag: "Vitrina web de alta conversión",
      icon: <Laptop className="w-5 h-5" />,
      color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === soluciones.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? soluciones.length - 1 : prev - 1));
  };

  useEffect(() => {
    document.title = "Vende tu Propiedad en Juliaca con Tecnología 3D | Nexus Domo 360°";
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Es verdad que la fotografía 360°, videos con dron y ficha web de mi propiedad son 100% gratis?",
      answer: "Sí, es totalmente real. En Nexus Domo 360 asumimos el costo total de la producción multimedia premium, las tomas aéreas con dron 4K, el recorrido virtual interactivo 360° y la creación de la ficha web exclusiva en nuestro portal (valorizado en más de S/. 1,500). No pagas ni un solo sol por adelantado. Nosotros recuperamos esta inversión a través de nuestra comisión estándar de corretaje únicamente cuando logremos vender tu propiedad con éxito ante notaría. Si no se vende, no nos debes nada."
    },
    {
      question: "¿Por qué exigen un contrato de exclusividad para vender mi casa o terreno en Juliaca?",
      answer: "La exclusividad es la única forma que nos permite invertir nuestro propio capital, tecnología premium y pautas publicitarias de alto presupuesto en tu propiedad de manera segura. Cuando un inmueble es publicado por múltiples inmobiliarias de manera informal, suele aparecer con fotos de mala calidad, descripciones contradictorias y precios diferentes, lo que devalúa la propiedad y ahuyenta a los compradores serios. Con la exclusividad, nos comprometemos a vender tu inmueble en tiempo récord y al mejor precio del mercado."
    },
    {
      question: "¿Cuánto tiempo dura el acuerdo de exclusividad y qué pasa si no se vende en ese plazo?",
      answer: "El acuerdo estándar de corretaje exclusivo se firma por un periodo de 3 a 6 meses, dependiendo del tipo de propiedad (lote, casa o departamento en Juliaca o San Román). Este tiempo es el necesario para realizar la producción multimedia, filtrar a los prospectos interesados de forma digital y coordinar los créditos hipotecarios. Si por alguna razón el plazo expira y la propiedad no se vende, el contrato se disuelve automáticamente sin que tengas que pagarnos penalidades ni costos de publicidad."
    },
    {
      question: "¿Qué documentos necesito para comenzar a promover mi propiedad y qué pasa si no los tengo al día?",
      answer: "Requerimos principalmente la Copia Literal de la partida registral (SUNARP), la copia del DNI de los propietarios, y los recibos de autovalúo municipal (Hoja de Resumen HR y Predio Urbano PU) del año vigente. Si tienes algún documento vencido, inconcluso, problemas de herencia (sucesión intestada) o linderos sin sanear, nuestro equipo legal y técnico te asesora y apoya en los trámites en Juliaca para dejar los papeles en regla y acelerar la venta."
    },
    {
      question: "¿Cómo determinan el precio de venta de mi inmueble en Juliaca para no malbaratarlo?",
      answer: "No jugamos a las adivinanzas ni inflamos los precios de forma irreal. Realizamos un Análisis Comparativo de Mercado (ACM) científico y gratuito, cruzando datos de ventas reales y tasaciones comerciales recientes en tu zona de Juliaca. Esto nos permite establecer un precio competitivo de alta plusvalía que atraiga rápidamente a compradores con presupuesto calificado, logrando que obtengas la máxima ganancia por tu patrimonio en menos de 90 días."
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 pt-28 pb-16 relative z-10 text-center reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-nexus-accent/10 to-nexus-purple/10 rounded-full blur-[90px] pointer-events-none z-0"></div>
        
        <span className="text-xs uppercase text-[#00f2fe] font-black tracking-widest bg-[#00f2fe]/10 px-3.5 py-1.5 rounded-full border border-[#00f2fe]/20 relative z-10 inline-block drop-shadow-[0_2px_8px_rgba(0,242,254,0.25)]">
          EXCLUSIVIDAD DIGITAL PREMIUM
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-5 mb-6 leading-[1.15] max-w-4xl mx-auto relative z-10 font-display">
          Vende tu propiedad al precio correcto y en <span className="text-gradient-rise">TIEMPO RÉCORD</span>
        </h1>
        
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-10 leading-relaxed relative z-10">
          Llevamos tu casa, departamento o lote al mundo virtual. Te ofrecemos tomas aéreas con dron y recorridos 360° interactivos de última generación de forma 100% gratuita al confiar la venta exclusiva de tu inmueble a nuestro equipo. Sin costos iniciales.
        </p>

        <div className="flex justify-center relative z-10">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-between gap-6 px-8 py-3.5 rounded-full border border-nexus-accent text-white hover:text-white bg-[#0a0d14]/40 hover:bg-[#0a0d14]/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 group w-full sm:w-auto uppercase text-xs md:text-sm font-bold tracking-wider cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-nexus-accent animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
              <span>Quiero Vender mi Propiedad</span>
            </div>
            <ArrowRight className="w-4 h-4 text-nexus-accent group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* 2. EL PROBLEMA (EMPATÍA CON EL DUEÑO) */}
      <section className="container mx-auto px-6 pb-8 relative z-10">
        {/* Título de la Sección en la parte superior */}
        <div className="max-w-3xl mx-auto text-center mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium mb-6 w-fit font-display mx-auto">
            <HelpCircle className="w-3.5 h-3.5 text-nexus-accent" />
            <span>EL RETO DEL MERCADO ACTUAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
            El letrero de "Se vende" en la ventana ya no es suficiente
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Lado Izquierdo: Descripción */}
          <div className="flex flex-col justify-center reveal-on-scroll">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Hoy en día, el <strong>90% de los compradores</strong> busca su próximo hogar o terreno desde su teléfono celular. Si las fotos de tu propiedad son oscuras, están desordenadas o solo envías un PDF plano por WhatsApp, tu inmueble perderá el interés de los compradores frente a la competencia.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
              Los inversionistas y compradores serios ya no quieren perder tiempo en visitas físicas a propiedades que no se ajustan a lo que buscan. Tu propiedad merece ser mostrada en su máximo esplendor inmersivo para atraer ofertas de compra reales desde el primer clic.
            </p>
          </div>

          {/* Lado Derecho: Imagen de la casa estancada en Puno */}
          <div className="glass-panel border-white/10 rounded-3xl overflow-hidden relative group shadow-[0_0_30px_rgba(0,0,0,0.3)] reveal-on-scroll reveal-delay-200">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img 
                src="/casa_estancada_puno.png" 
                alt="Casa estancada con cartel de Se Vende en Puno" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/70 via-transparent to-transparent"></div>
              
              <span className="absolute bottom-4 left-4 text-[10px] uppercase font-bold tracking-widest bg-red-500/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/20 text-white shadow-lg">
                ⚠️ Propiedad Estancada en el Mercado
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. LA SOLUCIÓN (TU ARSENAL TECNOLÓGICO GRATUITO) */}
      <section className="container mx-auto px-3 sm:px-6 pb-12 relative z-10 pt-8">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">MÁXIMO IMPACTO VISUAL</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Cómo hacemos que tu propiedad destaque en el mercado
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed font-sans">
            Implementamos un despliegue de marketing digital inmersivo de última generación para capturar el interés del comprador desde el primer clic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-0 md:px-12 reveal-on-scroll">
          {/* Contenedor del Carrusel */}
          <div className="overflow-hidden rounded-3xl border border-white/5 glass-panel relative group">
            
            {/* Contenedor de las Slides con efecto de transición horizontal */}
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {soluciones.map((solucion, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col">
                  {/* Imagen de cabecera de la tarjeta */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                    <img 
                      src={solucion.image} 
                      alt={solucion.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent"></div>
                    
                    {/* Etiqueta flotante */}
                    <span className="absolute top-6 left-6 text-[10px] uppercase font-black tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white">
                      {solucion.tag}
                    </span>
                  </div>

                  {/* Cuerpo de la tarjeta */}
                  <div className="p-8 sm:p-10 bg-[#0a0d14]/90 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${solucion.color}`}>
                          {solucion.icon}
                        </div>
                        <h3 className="font-bold text-xl md:text-2xl text-white font-display">
                          {solucion.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                        {solucion.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles del Carrusel (Flechas y Puntos integrados abajo) */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Flecha Izquierda */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00f2fe]/10 hover:border-[#00f2fe]/30 transition-all duration-200 active:scale-90 focus:outline-none"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicadores en Puntos (Dots) */}
            <div className="flex justify-center gap-2">
              {soluciones.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentSlide === idx ? 'w-8 bg-nexus-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#00f2fe]/10 hover:border-[#00f2fe]/30 transition-all duration-200 active:scale-90 focus:outline-none"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. LA PROPUESTA (ALIANZA POR EXCLUSIVIDAD) */}
      <section className="container mx-auto px-6 pb-10 relative z-10 pt-8">
        <div className="max-w-4xl mx-auto glass-panel border-[#00f2fe]/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-accent opacity-[0.02] rounded-full blur-[80px]"></div>
          
          <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3.5 py-1.5 rounded-full border border-nexus-accent/20 relative z-10 inline-block font-display">
            S/. 0 INVERSIÓN INICIAL
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 font-display">
            Tecnología Premium a costo cero para ti
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-sans">
            No te cobramos nada por adelantado. Toda la producción de video con dron, fotografía 360° y el diseño de la ficha web interactiva valorizados en <strong>más de S/. 1,500</strong> es asumido al 100% por Nexus Domo 360°. Solo cobramos nuestra comisión estándar del mercado cuando la propiedad se venda con éxito. Si no se vende, no pagas nada.
          </p>

          <div className="flex justify-center items-center font-display mt-6 w-full">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-between gap-6 px-8 py-4 rounded-full border border-nexus-accent text-white hover:text-white bg-[#0a0d14]/40 hover:bg-[#0a0d14]/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 group w-full sm:w-auto uppercase text-xs md:text-sm font-bold tracking-wider cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-nexus-accent animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                <span>Quiero Vender mi Propiedad</span>
              </div>
              <ArrowRight className="w-4 h-4 text-nexus-accent group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE PREGUNTAS FRECUENTES (FAQs) */}
      <section className="container mx-auto px-6 pb-16 relative z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">RESOLVEMOS TUS DUDAS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed font-sans">
            Despejamos las inquietudes más comunes sobre nuestro servicio premium de corretaje exclusivo y despliegue tecnológico.
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

    </div>
  );
}
