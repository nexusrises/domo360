import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  PenTool, 
  Code2, 
  CheckSquare, 
  Rocket, 
  ArrowRight,
  Cpu,
  Layers,
  ChevronDown,
  Clock,
  HelpCircle,
  Check,
  ShieldCheck,
  Zap,
  Sparkles,
  UserCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';

// Subcomponente de tarjeta detallada mejorado y re-estructurado con un diseño premium
function PhaseDetailCard({ fase }) {
  if (!fase) return null;
  const IconComponent = fase.icon;
  return (
    <div 
      style={{ backgroundColor: 'rgba(4, 6, 10, 0.96)' }}
      className={`glass-panel rounded-3xl p-6 md:p-8 border shadow-2xl relative transition-all duration-500 ${fase.glowClass} lg:h-full flex flex-col justify-between`}
    >
      {/* Glow de fondo dinámico y sutil */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20 transition-all duration-500 ${fase.color} pointer-events-none`}></div>
      
      {/* Sticker Dorado Metálico de Oro Reluciente en la esquina superior derecha de la tarjeta */}
      {fase.num === '01' && (
        <div className="absolute top-2 right-2 md:-top-4 md:-right-2 z-30 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#B38728] to-[#FBF5B7] text-slate-950 font-black text-[11px] md:text-sm tracking-widest uppercase px-4 md:px-5 py-1.5 md:py-2 rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.75)] border border-[#f5d061]/60 rotate-12 hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-default select-none animate-pulse">
          ¡GRATIS!
        </div>
      )}

      <div>
        {/* Encabezado panel con Duración y Pasos */}
        <div className="mb-6 pb-5 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-stretch justify-between gap-4">
            {/* Lado Izquierdo: Icono y Título */}
            <div className="flex items-start gap-4 flex-1">
              <div className={`p-3 rounded-2xl ${fase.color} text-white shadow-lg shadow-black/30 shrink-0 mt-1`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                {fase.title}
              </h3>
            </div>
            
            {/* Lado Derecho: Cápsulas de Paso y Tiempo alineadas verticalmente */}
            <div className="flex sm:flex-col justify-between items-end gap-2 sm:gap-0 shrink-0 py-0.5">
              {/* Cápsula de Paso (alineada arriba con el inicio del título) */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white w-fit">
                <span className="text-xs font-semibold">Paso <b className={fase.textColor}>{fase.num}</b></span>
              </div>
              
              {/* Cápsula de Tiempo (alineada abajo con el final del título) */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white w-fit">
                <Clock className="w-4 h-4 text-nexus-accent animate-pulse-slow" />
                <span className="text-xs font-semibold">Tiempo: <b className={fase.textColor}>{fase.duration}</b></span>
              </div>
            </div>
          </div>
        </div>

        {/* Banner llamativo de Diagnóstico Gratis solo para el Paso 1 */}
        {fase.num === '01' && (
          <a 
            href="https://wa.me/51951300535?text=Hola,%20deseo%20agendar%20un%20diagnóstico%20gratuito%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 p-4 bg-gradient-to-r from-nexus-accent/20 to-emerald-500/20 border border-nexus-accent/40 rounded-2xl mb-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] group"
          >
            <div className="flex items-center gap-3">
              <span className="bg-nexus-accent text-black text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg animate-pulse shrink-0">
                Gratis
              </span>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">¿Estás en Juliaca?</h4>
                <p className="text-gray-300 text-[11px] leading-tight mt-0.5">Agenda tu visita o reunión gratuita al WhatsApp <b>951 300 535</b></p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-nexus-accent group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        )}

        {/* Descripción comercial sin jerga técnica */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
          {fase.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Herramientas / Métodos */}
          <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 text-nexus-accent" />
              <span>Lo que hacemos por ti</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {fase.tools.map((tool, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-lg text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Entregables */}
          <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5 text-nexus-purple" />
              <span>¿Qué recibes tú?</span>
            </div>
            <p className="text-white text-xs md:text-sm font-semibold leading-snug">
              {fase.deliverables}
            </p>
          </div>
        </div>
      </div>

      {/* Participación del cliente */}
      <div className="bg-gradient-to-r from-white/[0.02] to-white/[0.04] border border-white/10 rounded-2xl p-4 mt-2 flex items-start gap-3">
        <UserCheck className={`w-5 h-5 shrink-0 mt-0.5 ${fase.textColor}`} />
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Lo que necesitamos de ti:</h4>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            {fase.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Proceso() {
  const [activeFase, setActiveFase] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    document.title = "Metodología y Proceso de Trabajo | Nexus Rise";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Conoce nuestra metodología estructurada, plazos de entrega garantizados y total transparencia de tarifas para la creación de tu página web.");
    }
  }, []);

  const handleMobileStepClick = (index) => {
    const isAlreadySelected = activeFase === index;
    setActiveFase(isAlreadySelected ? -1 : index);
    
    if (!isAlreadySelected) {
      const elementId = `mobile-step-${index}`;
      const startTime = performance.now();
      const duration = 750; // Duración en ms para cubrir la transición de 700ms
      const offset = 95; // Desplazamiento por el Navbar fijo

      const scrollLock = (now) => {
        const elapsed = now - startTime;
        const element = document.getElementById(elementId);
        
        if (element) {
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const targetY = elementPosition - offset;

          window.scrollTo({
            top: targetY,
            behavior: 'auto'
          });
        }

        if (elapsed < duration) {
          requestAnimationFrame(scrollLock);
        }
      };

      // Iniciamos el ciclo de anclaje de scroll en el siguiente frame
      requestAnimationFrame(scrollLock);
    }
  };

  const fases = [
    {
      num: '01',
      title: 'Reunión y Diagnóstico de Rubro',
      subtitle: 'Evaluamos tu negocio y te explicamos cómo ayudarte gratis',
      icon: Search,
      color: 'bg-nexus-accent',
      borderColor: 'border-nexus-accent/30',
      textColor: 'text-nexus-accent',
      rgbColor: '0, 242, 254',
      glowClass: 'card-neon-cian',
      duration: '1 a 3 días',
      desc: 'Nos reuniremos contigo (ya sea por videollamada o presencialmente) para conversar sobre tu empresa, rubro o especialidad. Evaluaremos juntos qué es lo que necesitas para tener presencia en internet y te mostraremos cómo podemos ayudarte a conseguir clientes, diseñando un plan de secciones clave para tu web. Esta sesión y la propuesta inicial son 100% gratuitas, orientativas y sin ningún compromiso. Nota especial: Si tu negocio u oficina física se encuentra en Juliaca, coordinamos una visita y asesoría directamente en tu local de forma totalmente gratuita.',
      tools: ['Conversación de Diagnóstico', 'Evaluación de tu Rubro', 'Plan de Secciones para tu Web'],
      deliverables: 'Propuesta comercial clara, cotización detallada y lista de páginas recomendadas para tu negocio sin costo.',
      role: 'Conversar con nosotros unos minutos, contarnos a qué te dedicas y qué servicios o productos te gustaría destacar en internet.'
    },
    {
      num: '02',
      title: 'Planificación, Contrato y Primer Pago (50%)',
      subtitle: 'Aseguramos tu proyecto con total claridad y honestidad',
      icon: PenTool,
      color: 'bg-indigo-500',
      borderColor: 'border-indigo-500/30',
      textColor: 'text-indigo-400',
      rgbColor: '99, 102, 241',
      glowClass: 'card-neon-indigo',
      duration: '3 a 5 días',
      desc: 'Cuando decidas empezar el desarrollo de tu página web, firmaremos un contrato formal de servicios. En Nexus Rise, nos referimos a una política de transparencia y honestidad comercial total de cara al cliente. Por eso, en este documento garantizamos por escrito que el precio acordado es final y definitivo: no habrá sorpresas, cobros sorpresa, costos ocultos ni letras pequeñas. También detallamos las fechas exactas en que te entregaremos los avances del proyecto. Para iniciar formalmente con el diseño y asegurar tu fecha de entrega, se realiza el abono inicial del 50%.',
      tools: ['Contrato Escrito de Respaldo', 'Fechas de Entrega Pactadas', 'Garantía de Cero Costos Ocultos'],
      deliverables: 'Copia del contrato firmado por ambas partes con plazos claros y el recibo del primer pago del 50%.',
      role: 'Firma del contrato de desarrollo, enviarnos tu logotipo, colores favoritos de tu marca (si los tienes) y realizar el abono del 50%.'
    },
    {
      num: '03',
      title: 'Diseño y Estructura Visual',
      subtitle: 'Vemos cómo lucirá tu página y capturamos tus mejores ángulos',
      icon: Sparkles,
      color: 'bg-nexus-purple',
      borderColor: 'border-nexus-purple/30',
      textColor: 'text-nexus-purple',
      rgbColor: '168, 85, 247',
      glowClass: 'card-neon-purple',
      duration: '2 a 4 días',
      desc: 'Creamos los bocetos visuales (diseño de interfaz) para que veas cómo lucirá tu marca y tus textos. Podrás revisar la propuesta estética y solicitar los ajustes necesarios. No programamos nada hasta que estés 100% conforme con el diseño. Si tu negocio lo requiere (como locales comerciales, consultorios u oficinas), programamos una visita a tus instalaciones para tomar fotos profesionales terrestres y aéreas con dron, e imágenes en 360 grados que darán una enorme confianza a tus clientes cuando visiten tu página.',
      tools: ['Diseño de Muestra de tu Web', 'Fotos de Alta Calidad de tus Espacios', 'Fotos Aéreas con Dron (si aplica)'],
      deliverables: 'Una muestra visual interactiva en internet para que veas el diseño y las fotos profesionales listas para tu web.',
      role: 'Revisar y darnos tu opinión sobre el diseño de muestra, y tener tu local ordenado y limpio para el día de las fotos.'
    },
    {
      num: '04',
      title: 'Programación y Enlace de Prueba (Abono del 30%)',
      subtitle: 'Creamos la página y nos aseguramos de que funcione en celulares',
      icon: Code2,
      color: 'bg-pink-500',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      rgbColor: '236, 72, 153',
      glowClass: 'card-neon-pink',
      duration: '1 a 2 semanas',
      desc: 'Convertimos el diseño visual aprobado en código web real. Programamos tu página asegurando que cargue a máxima velocidad y se adapte perfectamente a la pantalla de cualquier teléfono celular, tablet o computadora, para que tus clientes lean tu información con total fluidez. Una vez que la estructura básica de la web está lista y te la mostramos a través de un enlace de prueba privado en internet para que revises los avances, se realiza el abono intermedio del 30%.',
      tools: ['Programación de tu Página Web', 'Adaptación a Pantallas de Celulares', 'Enlace de Prueba Privado'],
      deliverables: 'Acceso a un enlace temporal en internet para que pruebes y revises el avance real de tu página web.',
      role: 'Enviarnos los textos de tus servicios, darnos tus comentarios sobre el avance y realizar el abono del 30%.'
    },
    {
      num: '05',
      title: 'Optimización de Velocidad y Búsqueda en Google (SEO)',
      subtitle: 'Hacemos tu web ultra rápida y fácil de encontrar',
      icon: CheckSquare,
      color: 'bg-amber-500',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      rgbColor: '245, 158, 11',
      glowClass: 'card-neon-amber',
      duration: '2 a 3 días',
      desc: 'Configuramos tu página web para que cargue en menos de 3 segundos, ya que si una web es lenta, las visitas se aburren y se van. Además, organizamos y optimizamos todos los textos y títulos usando de forma estratégica las palabras exactas que la gente escribe en internet cuando busca tus servicios o productos. Esto ayuda a que los buscadores como Google te den prioridad y muestren tu web en los primeros resultados orgánicos.',
      tools: ['Configuración para Google (SEO)', 'Optimización de Carga Rápida', 'Ajuste de Textos para Buscadores'],
      deliverables: 'Tu página web terminada, optimizada para cargar rápido y lista para ser encontrada en Google.',
      role: 'Navegar por la página desde tu celular o computadora y darnos el visto bueno final a los textos.'
    },
    {
      num: '06',
      title: 'Pruebas, Video Tutorial y Entrega (Liquidación del 20%)',
      subtitle: 'Tu negocio está oficialmente en internet y aprendes a usarlo',
      icon: Rocket,
      color: 'bg-emerald-500',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      rgbColor: '16, 185, 129',
      glowClass: 'card-neon-emerald',
      duration: '1 a 2 días',
      desc: 'Realizamos las últimas pruebas de velocidad y seguridad. Colocamos el candado de seguridad (certificado SSL) para proteger los datos de tus clientes and vinculamos tu dirección en internet (ejemplo: tuempresa.com). Grabamos un video tutorial corto y amigable diseñado exclusivamente para ti, enseñándote cómo cambiar fotos, textos y gestionar tu web de forma sencilla. Tras esto, realizas el pago de liquidación del 20% restante y tu web se publica en vivo. Firmamos un Acta de Entrega y Conformidad formalizando la entrega de todas tus contraseñas y accesos con garantía de 30 días.',
      tools: ['Activación de tu Web en Internet', 'Instalación de Candado de Seguridad', 'Video de Capacitación Sencillo', 'Firma de Acta de Conformidad'],
      deliverables: 'Página web en vivo, accesos de administración propios, video instructivo, Acta de Entrega y soporte de garantía.',
      role: 'Realizar el pago de liquidación del 20% final al recibir tu web completa y el Acta de Entrega.'
    }
  ];

  const planes = [
    {
      title: 'Landing Page de Alta Conversión',
      subtitle: 'Una sola página fluida diseñada específicamente para promocionar y vender un único producto o servicio de manera directa y rápida.',
      price: '1,700',
      time: '2 a 3 semanas',
      ideal: 'Profesionales y negocios que lanzan campañas de publicidad concretas.',
      features: [
        '1 Página Web única enfocada en ventas (Landing Page)',
        'Diseño visual único hecho a tu gusto y marca',
        'Textos redactados profesionalmente para convencer a tus clientes',
        'Velocidad de carga inmediata en celulares',
        'Botón directo a tu WhatsApp y formulario de contacto',
        'Optimización inicial para empezar a aparecer en Google'
      ],
      cta: 'Iniciar Landing',
      popular: false
    },
    {
      title: 'Página Web Corporativa o Profesional',
      subtitle: 'Tu oficina virtual completa en internet. Incluye varias pestañas organizadas (Inicio, Nosotros, Servicios, Contacto). Es fácil de actualizar.',
      price: '2,500',
      time: '3 a 5 semanas',
      ideal: 'Empresas, clínicas y profesionales que buscan proyectar solidez y confianza.',
      features: [
        'Sitio Web institucional completo (Inicio, Nosotros, Servicios, Contacto)',
        'Fácil de actualizar por ti mismo (sin depender de un programador)',
        'Se ve increíble tanto en computadoras como en celulares',
        'Sección de noticias o catálogo completo de tus servicios',
        'Correos profesionales (ejemplo: contacto@tuempresa.com)',
        'Estructura preparada para conectar sistemas de ventas futuros'
      ],
      cta: 'Solicitar Web',
      popular: true
    },
    {
      title: 'Solución Inmobiliaria 360',
      subtitle: 'Un portal inmobiliario completo que permite a los usuarios buscar propiedades con filtros dinámicos, ver fotos aéreas con dron y realizar recorridos virtuales interactivos 3D.',
      price: '4,500',
      time: '4 a 6 semanas',
      ideal: 'Agencias inmobiliarias y agentes independientes que desean vender propiedades en menos tiempo.',
      features: [
        'Portal Inmobiliario interactivo con buscador y catálogo de propiedades',
        '1 Sesión de fotos profesional en el inmueble (terrestre + dron)',
        'Recorrido virtual 3D interactivo del interior de la propiedad',
        'Fotografías aéreas interactivas que muestran los alrededores',
        'Puntos informativos flotantes en el tour detallando acabados',
        'Fichas informativas detalladas e independientes por propiedad'
      ],
      cta: 'Cotizar Proyecto 360',
      popular: false
    },
    {
      title: 'Web Corporativa Enterprise',
      subtitle: 'Programación pura a medida, integraciones complejas con CRM, pasarelas de pago avanzadas y el más alto rendimiento de seguridad.',
      price: '5,500',
      time: '5 a 8 semanas',
      ideal: 'Grandes empresas y corporaciones que necesitan desarrollos a medida, sistemas escalables y alta seguridad.',
      features: [
        'Programación pura y robusta a medida (React / Next.js)',
        'Integración con CRM (HubSpot, Salesforce, Zoho)',
        'Pasarelas de pago y sistemas de facturación en línea',
        'Optimización y arquitectura para alto tráfico de visitas',
        'Seguridad avanzada SSL, protección anti-DDoS y firewalls',
        'Garantía premium extendida por 60 días y soporte prioritized'
      ],
      cta: 'Cotizar Enterprise',
      popular: false
    }
  ];

  const mantenimientos = [
    {
      name: 'Soporte por Horas (On-Demand)',
      price: '80',
      period: 'hora',
      badge: 'Pago por Uso (Flexibilidad)',
      desc: 'Ideal para tareas muy puntuales o ajustes específicos. Pagas únicamente por el tiempo exacto trabajado.',
      responseGlow: 'text-nexus-accent',
      responseTime: 'Sujeto a agenda y disponibilidad (48h a 72h)',
      features: [
        'Edición básica de textos o reemplazo de imágenes (enviadas listas por el cliente)',
        'Modificaciones de enlaces, números de contacto o logos en cabecera/pie de página',
        'Cada solicitud se cotiza y trabaja en bloques mínimos de 1 hora (no fraccionable)',
        'No incluye soporte de emergencia ni atención fuera de horario comercial',
        'No incluye alojamiento (hosting), copias de seguridad ni actualizaciones de seguridad',
        'Excluye: Visitas en campo, desarrollo de secciones nuevas o sesiones de fotos/dron'
      ],
      glowClass: 'card-neon-cian',
      buttonClass: 'bg-white/5 hover:bg-nexus-accent hover:text-black text-white border border-white/10 hover:border-nexus-accent hover:shadow-[0_0_20px_rgba(0,242,254,0.35)]'
    },
    {
      name: 'Plan Soporte Esencial',
      price: '550',
      period: 'mes',
      badge: 'Seguridad y Estabilidad (Tranquilidad)',
      desc: 'El plan ideal para asegurar que tu web funcione perfectamente las 24 horas, protegida contra caídas, virus y ataques cibernéticos.',
      responseGlow: 'text-amber-400',
      responseTime: 'Soporte prioritario en menos de 24 horas',
      features: [
        'Monitoreo de estabilidad 24/7 con alertas automáticas ante caídas',
        'Copias de seguridad semanales en la nube de todo el sitio y bases de datos',
        'Actualización mensual de seguridad y parches contra vulnerabilidades',
        'Hasta 5 cambios agregar/quitar sencillos al mes  (cambios de textos o fotos ya provistos por ti)',
        '30% de DESCUENTO en el diseño y programación integral de nuevas Landing Pages o pestañas extras dentro de tu dominio',
        '20% de descuento exclusivo en nuevas sesiones de fotos, dron o tours 360°',
        'Aclaración: El mantenimiento NO cubre la creación de nuevas páginas desde cero. Éstas se cotizan como trabajo extra aplicando tu 30% de descuento.'
      ],
      glowClass: 'card-neon-amber',
      recommended: true,
      buttonClass: 'bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#B38728] to-[#FBF5B7] hover:brightness-110 text-slate-950 font-black border border-[#f5d061]/50 shadow-lg shadow-amber-500/10 transition-all duration-300 animate-gold-pulse'
    },
    {
      name: 'Plan Crecimiento Activo',
      price: '1350',
      period: 'mes',
      badge: 'Crecimiento y Prioridad Comercial',
      desc: 'Para empresas y negocios dinámicos que actualizan constantemente información, catálogos o requieren soporte de desarrollo continuo.',
      responseGlow: 'text-nexus-purple',
      responseTime: 'Soporte de emergencia preferencial en menos de 4 horas',
      features: [
        'Incluye todo el monitoreo y seguridad del Plan Esencial',
        'Bolsa mensual de 8 horas de soporte para modificaciones, banners o diseño continuo en páginas ya existentes',
        '30% de DESCUENTO en la programación integral de nuevas Landing Pages o catálogos internos dentro de tu dominio',
        'Alojamiento premium optimizado y copias de seguridad del sitio diarias',
        'Soporte preferente vía WhatsApp y videollamadas de asistencia directa',
        '30% de descuento exclusivo en nuevas sesiones de fotos terrestres, dron y 360°',
        'Aclaración: La creación de nuevas páginas web desde cero no usa la bolsa de horas. Se cotiza como trabajo extra aplicando tu 30% de descuento.'
      ],
      glowClass: 'card-neon-purple',
      buttonClass: 'bg-white/5 hover:bg-nexus-purple hover:text-white text-white border border-white/10 hover:border-nexus-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]'
    }
  ];

  const faqs = [
    {
      q: '¿Por qué es necesario tener una página web si ya vendo por redes sociales como Facebook o Instagram?',
      a: 'Las redes sociales atraen atención temporal, pero no te pertenecen y su algoritmo cambia constantemente. Una página web profesional es tu activo digital propio, abierto 24/7. Te otorga total credibilidad comercial, organiza tus servicios, proyectos o propiedades inmobiliarias sin que se pierdan en el muro de publicaciones, y te permite captar clientes cualificados de forma automática en Google mediante posicionamiento SEO local.'
    },
    {
      q: '¿El diseño web estará 100% optimizado para celulares (Diseño Web Responsive)?',
      a: 'Sí, absolutamente. Más del 80% de los usuarios en internet navegan desde smartphones. Por ello, implementamos una metodología "Mobile-First" (móvil primero). Esto garantiza que el tamaño de los textos, la velocidad de carga de las imágenes y la interactividad de los recorridos virtuales 3D se adapten con total fluidez a pantallas de celulares, tablets y computadoras.'
    },
    {
      q: '¿Cómo ayuda un recorrido virtual 3D o tour interactivo a vender una propiedad inmobiliaria más rápido?',
      a: 'El recorrido virtual 3D de Nexus Rise permite a los compradores interesados visitar tus propiedades o negocios interactivos desde su móvil a cualquier hora. Esto ahorra hasta un 80% de visitas físicas improductivas de curiosos, filtrando únicamente a leads de alta calidad que ya conocen el espacio de antemano y están listos para la compra formal.'
    },
    {
      q: '¿Qué preparación requiere un inmueble antes de la sesión de fotos 360° y video con dron?',
      a: 'Para asegurar una calidad visual premium y profesional, aplicamos técnicas de "Home Staging". El inmueble debe estar completamente ordenado, limpio y libre de objetos personales. Nosotros coordinamos la iluminación óptima del lugar y programamos el despegue del dron en días despejados para capturar espectaculares tomas aéreas de la zona.'
    },
    {
      q: '¿Cómo posicionan mi página web en Google y Google Maps (SEO Local)?',
      a: 'Estructuramos tu web con código limpio y semántico adaptado a los buscadores, optimizamos el rendimiento de velocidad al máximo y configuramos técnicamente tus etiquetas SEO. Además, te asistimos en la creación y optimización de tu perfil en Google Business (Google Maps) para que destaques frente a la competencia cuando busquen tus servicios inmobiliarios o comerciales.'
    },
    {
      q: '¿Qué pasa si necesito agregar una Landing Page o sección extra a mi dominio estando en mantenimiento?',
      a: 'La creación de nuevas Landing Pages o secciones internas desde cero no está incluida en la suscripción mensual. Sin embargo, al ser cliente preferencial de Nexus Rise, cuentas con un descuento del 30% (Plan Soporte Esencial) o del 50% (Plan Crecimiento Activo) sobre la tarifa de desarrollo regular de S/. 1,700, permitiéndote expandir tu sitio de forma económica y segura.'
    },
    {
      q: '¿Los planes de desarrollo web incluyen el registro de dominio (.com) y hosting?',
      a: 'Sí. Todos nuestros planes de diseño y desarrollo web profesional incluyen la reserva de tu dominio propio (.com) y alojamiento (hosting) de alta velocidad de forma gratuita durante todo el primer año. A partir del segundo año, puedes renovarlos directamente o delegarnos su administración integral a través de nuestros planes de mantenimiento.'
    },
    {
      q: '¿Cómo es el esquema de pagos para iniciar mi proyecto de desarrollo web?',
      a: 'Para garantizar transparencia y orden, dividimos los pagos en tres etapas por contrato: 50% de pago inicial para reservar fechas y empezar la etapa de diseño de maquetas; 30% a mitad del proyecto una vez aprobado el prototipo visual para iniciar la programación; y el 20% final contra entrega, tras probar que la web funciona al 100% y a tu total satisfacción.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="animate-fade-in-up text-gray-300 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-12 relative z-10 text-center">
        <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-4 py-1.5 rounded-full border border-nexus-purple/20 inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.1)] font-sans">
          <ShieldCheck className="w-3.5 h-3.5" /> Metodología & Transparencia
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-5 mb-6 leading-tight max-w-4xl mx-auto font-sans">
          ¿Cómo trabajamos en Nexus Rise?
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
          Garantizamos un proceso estructurado, plazos de entrega reales y total transparencia en tarifas. Sin sorpresas de último minuto ni presupuestos ocultos.
        </p>
      </section>

      {/* 2. Timeline Interactivo (Fases de Trabajo) */}
      <section className="container mx-auto px-6 pb-24 relative z-10 reveal-on-scroll">
        
        {/* Diseño para Desktop (Pantallas Grandes) */}
        <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-5 gap-12 items-stretch">
          {/* Lado izquierdo: Timeline Vertical (3 columnas) */}
          <div className="col-span-3 flex flex-col gap-5 relative pl-10">
            {/* Línea vertical de fondo */}
            <div className="absolute left-[38px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-nexus-accent via-nexus-purple to-emerald-500 opacity-20"></div>

            {fases.map((fase, index) => {
              const isSelected = activeFase === index;
              return (
                <button 
                  key={`desktop-btn-${index}`}
                  onClick={() => setActiveFase(index)}
                  className={`w-full text-left flex items-start gap-6 p-5 rounded-2xl transition-all duration-500 cursor-pointer relative z-10 active:scale-[0.99] hover:scale-[1.01] ${
                    isSelected 
                      ? `${fase.glowClass} scale-[1.02]` 
                      : 'border border-transparent bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/5'
                  }`}
                >
                  {/* Número y burbuja */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border transition-all duration-500 ${
                    isSelected 
                      ? `${fase.color} text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)]` 
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}>
                    {fase.num}
                  </div>

                  {/* Título y Subtítulo */}
                  <div className="flex-1 font-sans">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-bold transition-colors ${isSelected ? 'text-white' : 'text-gray-400'} flex items-center gap-2`}>
                        {fase.title}
                      </h3>
                      {/* Badge de tiempo rápido en la lista */}
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 font-mono">
                        {fase.duration}
                      </span>
                    </div>
                    <p className={`text-sm transition-colors mt-0.5 ${isSelected ? fase.textColor : 'text-gray-500'}`}>
                      {fase.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lado derecho: Panel Detallado Fijo (2 columnas) */}
          <div className="col-span-2">
            <PhaseDetailCard fase={fases[activeFase === -1 ? 0 : activeFase]} />
          </div>
        </div>

        {/* Diseño para Móvil (Pantallas Medianas y Pequeñas) - Formato de Acordeón In-situ */}
        <div className="lg:hidden max-w-2xl mx-auto flex flex-col gap-4" style={{ overflowAnchor: 'none' }}>
          {fases.map((fase, index) => {
            const isSelected = activeFase === index;

            return (
              <div 
                key={`mobile-step-${index}`} 
                id={`mobile-step-${index}`} 
                className="scroll-mt-[95px] flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                style={{ overflowAnchor: 'none' }}
              >
                {/* Botón Cabecera de Acordeón */}
                <button 
                  onClick={() => handleMobileStepClick(index)}
                  className={`w-full text-left flex items-center justify-between p-4 transition-all duration-500 cursor-pointer rounded-2xl ${
                    isSelected 
                      ? `${fase.glowClass} shadow-lg` 
                      : 'mobile-step-pulse border'
                  }`}
                  style={{
                    '--pulse-color-rgb': fase.rgbColor
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border shrink-0 ${
                      isSelected 
                        ? `${fase.color} text-white border-white/20` 
                        : 'bg-white/5 border-white/10 text-gray-400'
                    }`}>
                      {fase.num}
                    </div>
                    
                    <div className="font-sans">
                       <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-gray-300'} flex items-center gap-1.5`}>
                        {fase.title}
                      </h3>
                      <span className="text-[10px] text-gray-500 font-mono">
                        {fase.duration}
                      </span>
                    </div>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isSelected ? 'rotate-180 text-white' : ''}`} />
                </button>

                <div 
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isSelected ? 'max-h-[1300px] opacity-100 mt-2 pb-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-2 pt-4 pb-4">
                    <PhaseDetailCard fase={fase} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Sección de Planes de Inversión y Precios */}
      <section className="bg-slate-900/40 border-y border-white/5 py-24 relative z-10 reveal-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20">Esquema de Inversión</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 font-sans">Planes de Desarrollo Web</h2>
            <p className="text-gray-400 text-sm md:text-base">Elige la solución que mejor se adapte al crecimiento y objetivos comerciales de tu negocio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto">
            {planes.map((plan, idx) => (
              <div 
                key={idx} 
                style={{ backgroundColor: 'rgba(4, 6, 10, 0.96)' }}
                className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular 
                    ? 'border-nexus-purple/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] animate-pulse-glow' 
                    : 'border-white/10 hover:border-nexus-accent/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.05)]'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-nexus-purple to-indigo-600 text-white font-bold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-purple-400/20 shadow-lg">
                    Más Solicitado
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-sans">{plan.title}</h3>
                  <p className="text-gray-500 text-xs mb-6">{plan.subtitle}</p>

                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-gray-400 text-sm font-semibold">Desde</span>
                    <span className="text-white text-3xl md:text-4xl font-extrabold tracking-tight font-sans">S/. {plan.price}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-2 rounded-xl w-fit">
                    <Clock className="w-4 h-4 text-nexus-accent animate-pulse-slow" />
                    <span>Tiempo de entrega: <b>{plan.time}</b></span>
                  </div>

                  {plan.ideal && (
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-4 text-left">
                      <span className="text-[10px] text-nexus-accent font-bold uppercase tracking-widest block mb-1">¿Para quién es ideal?</span>
                      <p className="text-gray-300 text-xs leading-relaxed font-sans">{plan.ideal}</p>
                    </div>
                  )}

                  <div className="h-px bg-white/10 my-6"></div>

                  <ul className="space-y-3.5 text-xs text-gray-400 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contacto" 
                  className={`w-full py-3.5 rounded-2xl font-bold text-center text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer hover:scale-[1.03] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-nexus-purple to-indigo-600 hover:from-nexus-purple/90 hover:to-indigo-600/90 text-white shadow-lg shadow-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                      : 'bg-white/5 hover:bg-nexus-accent hover:text-black text-white border border-white/10 hover:border-nexus-accent hover:shadow-[0_0_20px_rgba(0,242,254,0.35)]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sección de Mantenimiento y Soporte Premium */}
      <section className="py-24 relative z-10 reveal-on-scroll">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-emerald-400 font-bold tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">Soporte y Garantía</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 font-sans">Planes de Mantenimiento</h2>
            <p className="text-gray-400 text-sm md:text-base">Mantén tu plataforma rápida, segura y siempre al día con soporte experto sin complicaciones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mantenimientos.map((maint, idx) => (
              <div 
                key={idx} 
                style={{ backgroundColor: 'rgba(4, 6, 10, 0.96)' }}
                className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] relative ${maint.glowClass} ${maint.recommended ? 'border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)] animate-pulse-glow-amber' : ''}`}
              >
                {/* Glow decorativo de fondo contenido a los bordes */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-[0.01] rounded-full blur-[40px]"></div>
                </div>

                {maint.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#B38728] to-[#FBF5B7] text-slate-950 font-black text-[10px] md:text-xs tracking-widest uppercase px-4 py-1.5 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-[#f5d061]/60 z-20 animate-gold-pulse">
                    Más Solicitado
                  </span>
                )}
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase text-nexus-accent font-bold tracking-widest bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                      {maint.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">{maint.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">{maint.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-white text-4xl font-extrabold tracking-tight font-sans">S/. {maint.price}</span>
                    <span className="text-gray-500 text-xs font-semibold">/{maint.period}</span>
                  </div>

                  {/* Fila de tiempo de respuesta */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <Zap className={`w-4 h-4 ${maint.responseGlow}`} />
                    <span className="text-xs text-gray-300">Respuesta: <b className="text-white">{maint.responseTime}</b></span>
                  </div>

                  <div className="h-px bg-white/10 my-6"></div>

                  <ul className="space-y-3.5 text-xs text-gray-300 mb-8 font-sans">
                    {maint.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contacto" 
                  className={`w-full py-3.5 rounded-2xl font-bold text-center text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer hover:scale-[1.03] ${maint.buttonClass}`}
                >
                  Contratar Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sección de Protección al Cliente y Garantías del Contrato */}
      <section className="py-24 relative z-10 border-t border-white/5 reveal-on-scroll">
        {/* Decorativo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nexus-dark/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20">
              Garantía y Claridad
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 font-sans leading-tight">
              ¿Cómo protegemos tu inversión?
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Trabajamos con total transparencia. Todo queda respaldado mediante un contrato formal que garantiza la propiedad de tu sitio y la claridad de tu presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tarjeta 1: Propiedad Absoluta */}
            <div 
              style={{ backgroundColor: 'rgba(4, 6, 10, 0.96)' }}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-nexus-accent/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-nexus-accent/10 text-nexus-accent w-fit mb-6 border border-nexus-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-sans">Propiedad 100% Tuya</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans mb-6">
                  El dominio, hosting, código y accesos maestros son siempre de tu propiedad legal. Si optas por un plan de mantenimiento, co-administramos las credenciales para salvaguardar la integridad técnica y tu garantía SLA, pero tienes el control absoluto de tus contraseñas maestras en todo momento.
                </p>
                <ul className="space-y-2.5 text-xs text-gray-400 border-t border-white/5 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-accent shrink-0 mt-1.5"></span>
                    <span>Dominio y hosting 100% bajo tu titularidad legal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-accent shrink-0 mt-1.5"></span>
                    <span>Accesos maestros y base de datos siempre disponibles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-accent shrink-0 mt-1.5"></span>
                    <span>Co-administración segura y ordenada bajo plan de SLA.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tarjeta 2: Garantía Post-Lanzamiento */}
            <div 
              style={{ backgroundColor: 'rgba(4, 6, 10, 0.96)' }}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-nexus-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-nexus-purple/10 text-nexus-purple w-fit mb-6 border border-nexus-purple/20 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-sans">Garantía Post-Estreno</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans mb-6">
                  Incluimos 30 días de garantía de estabilidad técnica 100% gratuita post-lanzamiento. Si decides contratar un plan de mantenimiento desde el primer día, este primer mes de garantía sigue siendo completamente gratuito y el primer cobro del plan (servicio prepago) se efectuará recién a partir del día 31.
                </p>
                <ul className="space-y-2.5 text-xs text-gray-400 border-t border-white/5 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-purple shrink-0 mt-1.5"></span>
                    <span>Primeros 30 días de soporte técnico y monitoreo gratis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-purple shrink-0 mt-1.5"></span>
                    <span>Inicio de planes de mantenimiento a partir del día 31.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-purple shrink-0 mt-1.5"></span>
                    <span>Corrección inmediata ante caídas o bugs sin costo.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tarjeta 3: Transparencia Comercial */}
            <div 
              style={{ backgroundColor: 'rgba(4, 6, 10, 0.96)' }}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-sans">Cero Costos Ocultos</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans mb-6">
                  Trabajamos con presupuestos cerrados y transparentes por contrato. Desglosamos por adelantado el coste de renovación anual del servidor, dominio y el uso de APIs de terceros (si el proyecto las requiere) para que sepas con absoluta precisión el coste total de propiedad de tu web.
                </p>
                <ul className="space-y-2.5 text-xs text-gray-400 border-t border-white/5 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                    <span>Desglose completo de renovación de hosting y dominio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                    <span>Detalle anticipado de suscripciones o APIs externas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                    <span>Precio final cerrado bajo contrato y sin sorpresas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sección FAQ (Acordeón Interactivo) */}
      <section className="bg-slate-900/40 border-t border-white/5 py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">Resolviendo Dudas</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 font-sans">Preguntas Frecuentes</h2>
            <p className="text-gray-400 text-sm md:text-base">Detalles sobre nuestro soporte técnico y políticas de facturación comercial.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="glass-panel border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left text-white hover:bg-white/[0.02] transition-colors cursor-pointer select-none"
                  >
                    <div className="flex gap-3 items-start">
                      <HelpCircle className="w-5 h-5 text-nexus-purple shrink-0 mt-0.5" />
                      <span className="font-bold text-sm md:text-base leading-snug font-sans">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                  </button>

                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-white/5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-5 md:p-6 text-gray-400 text-xs md:text-sm leading-relaxed bg-slate-950/40 font-normal">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto glass-panel border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
            Construyamos algo asombroso juntos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            Nuestro proceso estructurado y precios orientativos garantizan un desarrollo sin fricciones. Agenda una asesoría gratuita hoy.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex items-center justify-center btn-neon-cian px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto cursor-pointer"
          >
            Iniciar Asesoría
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
