import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  FileText, 
  Mail, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  Award,
  Star,
  Quote,
  ArrowUpRight,
  Lock,
  Unlock,
  MessageSquare,
  Globe,
  X
} from 'lucide-react';

export default function SolucionesProfesionales() {
  // Estado para el simulador interactivo del Embudo de Autoridad
  const [activeStep, setActiveStep] = useState(1); // 1: Atracción SEO, 2: Autoridad en Blog, 3: Conversión
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const pilares = [
    {
      icon: <BookOpen className="w-6 h-6 text-nexus-purple" />,
      title: "Blog de Autoridad SEO",
      desc: "Diseñado para posicionar tus artículos en Google. Escribe sobre tu área de expertise legal, médica o de consultoría y atrae leads orgánicos calificados diariamente sin pagar publicidad constante."
    },
    {
      icon: <FileText className="w-6 h-6 text-nexus-accent" />,
      title: "Filtro Inteligente de Leads",
      desc: "Evita perder tiempo en reuniones sin presupuesto. Un cuestionario estratégico evalúa el presupuesto, urgencia y necesidad de los prospectos antes de darles acceso a tu agenda."
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      title: "Infraestructura Segura",
      desc: "Configuración completa de correos bajo tu dominio (@tu-nombre.com) con registros SPF, DKIM y DMARC optimizados para garantizar que tus correos lleguen directamente a la bandeja de entrada."
    }
  ];

  // Comparativa de adquisición removida para estructura estática de alto impacto

  return (
    <div className="relative animate-fade-in-up">
      {/* 1. HERO SECTION ASIMÉTRICO */}
      <section className="container mx-auto px-6 pt-28 pb-20 relative z-10 overflow-hidden">
        {/* Glows de fondo */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-nexus-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-nexus-blue/5 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Texto */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-4 py-1.5 rounded-full border border-nexus-purple/20 mb-6 inline-block">
              Plataforma de Marca Personal Premium
            </span>
            
            <h1 
              style={{ textWrap: 'balance' }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 leading-[1.15] mb-6 font-display"
            >
              Deja de alquilar atención a las redes. Construye tu <span className="text-gradient-rise font-display font-black">imperio digital</span>.
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base mb-10 max-w-2xl leading-relaxed">
              Diseñamos portales web de alta autoridad para consultores, abogados, médicos y mentores. Posiciona tu conocimiento en Google, filtra leads sin presupuesto y agenda reuniones solo con clientes cualificados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/contacto" 
                className="inline-flex items-center justify-center btn-neon-cian px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
              >
                Comenzar mi Plataforma
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Fotográfica de Autoridad */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-nexus-purple/15 to-nexus-accent/15 rounded-3xl blur-[50px] opacity-60"></div>
            
            <div className="glass-panel border-white/10 rounded-3xl p-5 w-full max-w-md relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-nexus-purple/30 group">
              {/* Imagen del Profesional */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/5 relative mb-5">
                <img 
                  src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/tour/abogado_thumb.png`} 
                  alt="Perfil Profesional de Autoridad" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexus-dark/90 via-nexus-dark/20 to-transparent"></div>
                
                {/* Badge flotante de autoridad */}
                <div className="absolute bottom-4 left-4 glass-panel border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider">Consultor de Alta Autoridad</span>
                </div>
              </div>

              {/* Detalles de la tarjeta */}
              <div className="space-y-2.5 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white font-display">Dra. Andrea Valdivia</h3>
                  <span className="text-[10px] text-nexus-accent font-semibold uppercase tracking-wider font-mono">D. Legal Corporativo</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  "El activo más valioso de un profesional es su reputación y la propiedad de su canal de adquisición."
                </p>
                <div className="flex gap-1.5 pt-1.5 border-t border-white/5 text-xs text-gray-500">
                  <span className="bg-white/5 px-2.5 py-1 rounded-md">&bull; SEO Posicionado</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-md">&bull; Agenda Automatizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN COMPARATIVA (Dolor vs Solución) */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20">La Realidad del Mercado</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 font-display">¿Por qué las redes sociales te limitan?</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
              Las redes sociales son excelentes para atraer visibilidad, pero tu portal web propio es la base sólida que da estabilidad a tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch font-sans">
            {/* Tarjeta Izquierda: Las Redes como Canales de Visibilidad */}
            <div className="glass-panel border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-white/10 bg-white/[0.005]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 opacity-5 rounded-full blur-[40px] pointer-events-none"></div>
              
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-nexus-purple bg-nexus-purple/10 border border-nexus-purple/20 px-3 py-1 rounded-full w-fit block mb-6">
                  Atracción & Alcance (Redes)
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 font-display text-left">
                  Las Redes como Motores de Visibilidad (TikTok, Instagram, Facebook...)
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-nexus-purple/10 text-nexus-purple border border-nexus-purple/20 shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">Gran Alcance de Atención</h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Excelentes canales complementarios para captar atención masiva inicial y dar visibilidad rápida a tu marca personal.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0 mt-0.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">Saturación por Preguntones</h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Atraen una enorme cantidad de mensajes y consultas informales en DMs que consumen tu tiempo valioso sin intención real de compra.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0 mt-0.5">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">Ausencia de Filtro de Calidad</h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Carecen de una herramienta para verificar el presupuesto, la urgencia o el perfil del prospecto antes de iniciar una conversación.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">Atención Efímera sin Base</h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        Sin un portal central sólido, el tráfico que captas se dispersa rápidamente, obligándote a crear contenido diario sin construir un activo duradero.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta Derecha: Tu Ecosistema Digital Nexus */}
            <div className="glass-panel border-nexus-accent/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-nexus-accent/30 bg-nexus-accent/[0.01] shadow-[0_15px_40px_rgba(0,242,254,0.02)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nexus-accent/5 opacity-10 rounded-full blur-[40px] pointer-events-none"></div>
              
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-nexus-accent bg-nexus-accent/10 border border-nexus-accent/20 px-3 py-1 rounded-full w-fit block mb-6 shadow-[0_0_15px_rgba(0,242,254,0.05)]">
                  Plataforma Propia (Nexus Rise)
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 font-display text-left">
                  Tu Web propia como la Base Central y Filtro de Conversión
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 shrink-0 mt-0.5">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Base Central de tu Ecosistema</h4>
                      <p className="text-[13px] text-gray-300 leading-relaxed">
                        Consolida y unifica la atención de todas tus redes en una propiedad digital única que tú controlas, dando solidez a tu presencia.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Educación y Filtrado Automático</h4>
                      <p className="text-[13px] text-gray-300 leading-relaxed">
                        Explica a detalle tu metodología, servicios y condiciones, educando al cliente y resolviendo dudas comunes de manera autónoma.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 shrink-0 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Embudo de Conversión Estable</h4>
                      <p className="text-[13px] text-gray-300 leading-relaxed">
                        Los prospectos cualificados se auto-califican y agendan directo en Calendly, estabilizando tu adquisición de clientes sin altibajos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="p-1.5 rounded-full bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 shrink-0 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Tranquilidad y Ahorro Masivo</h4>
                      <p className="text-[13px] text-gray-300 leading-relaxed">
                        Eliminas las horas perdidas respondiendo chats informales, concentrando tu agenda solo en consultorías de alto valor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID DE PILARES */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">Tu Plataforma Completa</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 font-display">Los 3 pilares de tu ecosistema de alta autoridad</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
              Todo lo necesario para automatizar tu flujo de clientes sin sacrificar tu tiempo o estatus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((pilar, i) => (
              <div 
                key={i} 
                className="glass-panel border-white/5 rounded-3xl p-8 hover:border-nexus-purple/20 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-nexus-purple/5 opacity-20 rounded-full blur-[40px] pointer-events-none"></div>
                <div className="p-3 bg-white/5 border border-white/5 text-white rounded-2xl w-fit mb-6 transition-transform group-hover:scale-105 duration-300">
                  {pilar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">{pilar.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {pilar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIMULADOR INTERACTIVO DEL EMBUDO */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel border-white/10 rounded-3xl p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Información y Pasos Interactivos */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold text-nexus-accent uppercase tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20">
                    Interactúa y Explora
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 font-display">
                    Simulador del Embudo de Autoridad
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed font-sans text-left">
                    Experimenta cómo viaja un cliente potencial de alto valor a través de tu futura plataforma digital. Haz clic en cada fase para ver qué experimenta el usuario final.
                  </p>
                </div>

                {/* Botones de Pasos del Embudo */}
                <div className="flex flex-col gap-3 font-sans">
                  <button
                    onClick={() => { setActiveStep(1); setBookingSuccess(false); setSelectedTime(''); }}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeStep === 1
                        ? 'bg-nexus-accent/10 border-nexus-accent/35 text-white shadow-[0_0_15px_rgba(0,242,254,0.05)]'
                        : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${activeStep === 1 ? 'bg-nexus-accent text-nexus-dark' : 'bg-white/5 border border-white/10 text-white'}`}>1</span>
                      <strong className="text-xs uppercase tracking-wider">Fase 1: Atracción Orgánica (SEO)</strong>
                    </div>
                    <p className="text-[11px] opacity-80 leading-relaxed pl-7.5">
                      El cliente busca en Google problemas críticos que resuelves y encuentra tu portal oficial en la primera posición.
                    </p>
                  </button>

                  <button
                    onClick={() => { setActiveStep(2); setBookingSuccess(false); setSelectedTime(''); }}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeStep === 2
                        ? 'bg-nexus-purple/10 border-nexus-purple/35 text-white shadow-[0_0_15px_rgba(168,85,247,0.05)]'
                        : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${activeStep === 2 ? 'bg-nexus-purple text-white' : 'bg-white/5 border border-white/10 text-white'}`}>2</span>
                      <strong className="text-xs uppercase tracking-wider">Fase 2: Nutrición & Autoridad (Blog)</strong>
                    </div>
                    <p className="text-[11px] opacity-80 leading-relaxed pl-7.5">
                      El cliente lee un artículo técnico de tu autoría, validando tu experiencia y convenciéndose de que eres el experto idóneo.
                    </p>
                  </button>

                  <button
                    onClick={() => { setActiveStep(3); setBookingSuccess(false); setSelectedTime(''); }}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeStep === 3
                        ? 'bg-indigo-500/10 border-indigo-500/35 text-white shadow-[0_0_15px_rgba(99,102,241,0.05)]'
                        : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${activeStep === 3 ? 'bg-indigo-500 text-white' : 'bg-white/5 border border-white/10 text-white'}`}>3</span>
                      <strong className="text-xs uppercase tracking-wider">Fase 3: Conversión Inteligente (Reserva)</strong>
                    </div>
                    <p className="text-[11px] opacity-80 leading-relaxed pl-7.5">
                      El lead cualificado agenda una reunión directamente en tu Calendly sin correos de ida y vuelta ni llamadas en frío.
                    </p>
                  </button>
                </div>
              </div>

              {/* Maqueta Interactiva */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="bg-[#070a13] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative">
                  
                  {/* Navegador Simulado */}
                  <div className="bg-slate-900 px-4 py-2.5 border-b border-white/5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 block"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500 block"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
                    </div>
                    <div className="bg-white/5 rounded-lg text-[10px] text-gray-500 px-6 py-1 mx-auto w-2/3 text-center font-mono overflow-hidden whitespace-nowrap">
                      {activeStep === 1 && "https://google.com/search?q=consultoria+legal+corporativa"}
                      {activeStep === 2 && "https://andrea-valdivia.com/blog/estrategia-legal-startup"}
                      {activeStep === 3 && "https://andrea-valdivia.com/agendar-llamada"}
                    </div>
                  </div>

                  {/* Contenido Dinámico del Navegador */}
                  <div className="p-6 md:p-8 bg-[#070a13] text-white min-h-[380px] flex flex-col justify-between">
                    
                    {/* FASE 1: GOOGLE SEARCH */}
                    {activeStep === 1 && (
                      <div className="space-y-6 animate-fade-in text-left">
                        {/* Buscador de Google */}
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-gray-300">
                          <span className="text-rose-400 font-extrabold">G</span>
                          <span className="text-gray-400">consultoria legal corporativa startups peru</span>
                        </div>
                        
                        {/* Resultados */}
                        <div className="space-y-4">
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Resultado destacado</span>
                          <div className="p-5 rounded-2xl border border-nexus-accent/20 bg-nexus-accent/[0.02] space-y-2 relative group hover:border-nexus-accent/30 transition-all">
                            <span className="absolute top-4 right-4 bg-nexus-accent/10 border border-nexus-accent/20 text-nexus-accent text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-wider">1º Posición</span>
                            <div className="text-[10px] text-gray-400 flex items-center gap-1">
                              <span>andrea-valdivia.com</span>
                              <span>&rsaquo;</span>
                              <span>blog</span>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-nexus-accent hover:underline cursor-pointer" onClick={() => setActiveStep(2)}>
                              Estructuración Legal: Cómo proteger tu startup ante rondas de inversión
                            </h4>
                            <p className="text-xs text-gray-400 leading-relaxed font-sans">
                              Aprende cómo blindar tu negocio. Guía detallada sobre fusiones, contratos de socios y protección de propiedad intelectual en el Perú. Evita errores comunes que ahuyentan inversionistas.
                            </p>
                          </div>

                          {/* Resultados genéricos de relleno */}
                          <div className="opacity-40 pl-5 space-y-1">
                            <span className="text-[9px] text-gray-500">directorio-abogados.pe &rsaquo; legal</span>
                            <h5 className="text-xs font-semibold text-blue-400">Listado de Abogados en Lima</h5>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FASE 2: ARTÍCULO DE BLOG */}
                    {activeStep === 2 && (
                      <div className="space-y-5 text-left animate-fade-in flex flex-col justify-between h-full">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-white/5 pb-3">
                            <span className="text-[9px] text-nexus-purple uppercase tracking-widest font-black">Blog de Autoridad</span>
                            <span className="text-[9px] text-gray-500">Lectura: 5 min</span>
                          </div>
                          
                          <h3 className="text-base md:text-lg font-extrabold text-white font-display leading-snug">
                            Estructuración Legal: Cómo proteger tu startup ante rondas de inversión
                          </h3>
                          
                          <p className="text-xs text-gray-300 leading-relaxed font-sans">
                            Para levantar capital, los inversionistas auditan tu estructura societaria. Un error común es no tener un acuerdo de socios (vesting) o patentes registradas. Un diseño contractual sólido en las etapas tempranas previene conflictos de socios y garantiza la viabilidad del financiamiento.
                          </p>

                          <blockquote className="border-l-2 border-nexus-purple bg-white/[0.01] p-3 rounded-r-lg italic text-[11px] text-gray-400 leading-relaxed">
                            "Los fondos de inversión no buscan la idea perfecta; buscan mitigar riesgos legales de propiedad intelectual y control corporativo."
                          </blockquote>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex justify-end">
                          <button 
                            onClick={() => setActiveStep(3)}
                            className="bg-nexus-purple hover:bg-nexus-purple/90 text-white font-bold px-5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer"
                          >
                            Agendar Llamada de Diagnóstico
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* FASE 3: CALENDARIO DE RESERVAS */}
                    {activeStep === 3 && (
                      <div className="space-y-4 text-left animate-fade-in">
                        <div className="border-b border-white/5 pb-3">
                          <h4 className="text-xs font-black uppercase text-indigo-400 tracking-widest">Reserva tu Sesión</h4>
                          <h3 className="text-sm font-bold text-white mt-1">Llamada de Diagnóstico Corporativo</h3>
                          <span className="text-[10px] text-gray-500">30 min • Reunión vía Zoom</span>
                        </div>

                        {!bookingSuccess ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Selector de Fecha */}
                            <div className="space-y-2">
                              <label className="text-[9px] text-gray-500 uppercase tracking-wider">1. Selecciona el Día</label>
                              <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                                <span className="bg-white/5 border border-white/5 p-2 rounded-lg text-xs text-gray-500 select-none">Lunes</span>
                                <span className="bg-white/5 border border-white/5 p-2 rounded-lg text-xs text-gray-500 select-none">Martes</span>
                                <button className="bg-indigo-500/10 border border-indigo-500/30 p-2 rounded-lg text-xs text-indigo-300 font-bold hover:bg-indigo-500/20 cursor-pointer">Miér.</button>
                              </div>
                              <p className="text-[9px] text-indigo-400 italic font-sans leading-normal">Disponibilidad en tiempo real sincronizada con Google Calendar.</p>
                            </div>

                            {/* Selector de Hora */}
                            <div className="space-y-2">
                              <label className="text-[9px] text-gray-500 uppercase tracking-wider">2. Selecciona la Hora</label>
                              <div className="grid grid-cols-2 gap-1.5 text-center">
                                <button 
                                  onClick={() => setSelectedTime('09:00 AM')}
                                  className={`p-2 rounded-lg text-xs border font-bold transition-all cursor-pointer ${
                                    selectedTime === '09:00 AM' ? 'border-nexus-accent bg-nexus-accent/10 text-white' : 'border-white/5 hover:bg-white/5 text-gray-400'
                                  }`}
                                >
                                  09:00 AM
                                </button>
                                <button 
                                  onClick={() => setSelectedTime('03:30 PM')}
                                  className={`p-2 rounded-lg text-xs border font-bold transition-all cursor-pointer ${
                                    selectedTime === '03:30 PM' ? 'border-nexus-accent bg-nexus-accent/10 text-white' : 'border-white/5 hover:bg-white/5 text-gray-400'
                                  }`}
                                >
                                  03:30 PM
                                </button>
                              </div>
                              
                              {selectedTime && (
                                <button 
                                  onClick={() => setBookingSuccess(true)}
                                  className="mt-3 bg-nexus-accent text-nexus-dark font-black text-[10px] uppercase tracking-wider py-2 px-3 rounded-lg w-full transition-all cursor-pointer"
                                >
                                  Confirmar Cita ({selectedTime}) &rsaquo;
                                </button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="py-8 text-center space-y-4 animate-fade-in flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                              <CheckCircle className="w-6 h-6 animate-pulse" />
                            </div>
                            <div className="space-y-1.5">
                              <h4 className="text-sm font-bold text-white">¡Reunión Agendada Exitosamente!</h4>
                              <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed font-sans">
                                Se ha reservado tu slot para el día <strong>Miércoles a las {selectedTime}</strong>. Hemos enviado la invitación de Google Calendar y el enlace de Zoom a tu correo electrónico de forma automática.
                              </p>
                            </div>
                            <button 
                              onClick={() => { setBookingSuccess(false); setSelectedTime(''); setActiveStep(1); }}
                              className="text-[10px] text-indigo-400 hover:underline cursor-pointer uppercase tracking-wider font-bold pt-2"
                            >
                              Volver a iniciar simulación
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-[10px] text-gray-500 font-sans">
                    Haz clic en los pasos de la izquierda para avanzar, o completa el agendamiento simulado en la Fase 3.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. CASOS DE ÉXITO REALES: PORTAFOLIO DE PROYECTOS */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto font-sans">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">
              Casos de Éxito Reales
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 font-display">Portafolio de Proyectos Entregados</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
              Plataformas web a medida creadas para consultores y marcas personales de alto nivel en el sur del país.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1: Andrea Valdivia */}
            <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-nexus-purple/20 transition-all duration-500 hover:-translate-y-1.5 group hover:shadow-[0_20px_50px_rgba(168,85,247,0.05)] text-left">
              {/* Contenedor de la Imagen */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <img 
                  src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/legal_portal_preview.png`} 
                  alt="Portal Valdivia & Asociados" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Información del Proyecto */}
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-nexus-accent bg-nexus-accent/10 border border-nexus-accent/20 px-3 py-0.5 rounded-full w-fit block">
                    Área: Legal Corporativo
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-display">
                    Dra. Andrea Valdivia — Portal Jurídico de Alta Autoridad
                  </h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed font-sans">
                    Desarrollo de portal web corporativo y blog de autoridad optimizado para SEO en Google. Se integró un sistema automático de agendamiento y filtro de leads para llamadas estratégicas, protegiendo las horas del profesional de consultas informales.
                  </p>
                </div>

                {/* Badges del Proyecto */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Diseño Web Premium</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Blog de Autoridad</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Calendly Integrado</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Filtro de Leads</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2: Carlos Mendoza */}
            <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-nexus-purple/20 transition-all duration-500 hover:-translate-y-1.5 group hover:shadow-[0_20px_50px_rgba(0,242,254,0.05)] text-left">
              {/* Contenedor de la Imagen */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <img 
                  src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/salud_portal_juliaca.png`} 
                  alt="Portal Dr. Carlos Mendoza" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Información del Proyecto */}
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-nexus-purple bg-nexus-purple/10 border border-nexus-purple/20 px-3 py-0.5 rounded-full w-fit block">
                    Área: Salud & Especialidad Médica
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-display">
                    Dr. Carlos Mendoza — Plataforma Médica de Alta Confianza
                  </h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed font-sans">
                    Creación del portal oficial de marca médica para el posicionamiento y la gestión de pacientes privados en el sur. Incluye la visualización interactiva del staff de consultorios, reserva de turnos online y un módulo seguro para la descarga de resultados clínicos.
                  </p>
                </div>

                {/* Badges del Proyecto */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Portal Médico B2C</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Turnos Online</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Resultados Médicos</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-[10px] text-gray-400 font-bold uppercase tracking-wider">&bull; Optimización SEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL ENLAZANDO AL PROCESO */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto glass-panel border border-nexus-purple/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Glows de fondo decorativos */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-purple opacity-[0.03] rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-nexus-accent opacity-[0.02] rounded-full blur-[70px] pointer-events-none"></div>
          
          <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-4 py-1.5 rounded-full border border-nexus-accent/20 mb-6 inline-block font-sans">
            Metodología de Trabajo
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            ¿Cómo construimos tu Plataforma de Alta Autoridad?
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-sans">
            No nos limitamos a diseñar una web. Trabajamos bajo una metodología transparente de 6 fases, con plazos garantizados por contrato y sin sorpresas ni costos ocultos en el camino.
          </p>

          {/* Tres pequeños pilares del proceso */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10 text-left font-sans">
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-nexus-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Sin Sorpresas</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Precios finales garantizados por contrato escrito.</p>
              </div>
            </div>
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-nexus-purple shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Acompañamiento</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Sesiones de fotos y maquetas previas aprobadas por ti.</p>
              </div>
            </div>
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Control Total</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Video tutoriales para gestionar tu web tú mismo.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/proceso" 
              className="inline-flex items-center justify-center btn-neon-cian px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
            >
              Ver Nuestro Proceso de Trabajo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contacto" 
              className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
            >
              Iniciar Directamente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
