import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  HeartPulse, 
  Building2, 
  Briefcase, 
  MessageSquare,
  Award,
  Zap,
  Hotel,
  Cpu,
  Compass,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Calendar,
  Camera,
  ShoppingCart,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function ProyectoDetalle() {
  const { id } = useParams();

  const proyectosData = {
    'sillar-inmobiliaria': {
      title: 'Portal Inmobiliario 3D y Recorridos Aéreos',
      category: 'Inmobiliaria',
      client: 'Sierra Capital (Juliaca)',
      icon: Building2,
      imagen: '/tour/Vista Aerea Residencial Maravillas.jpg',
      color: 'text-nexus-accent bg-nexus-accent/10 border-nexus-accent/20',
      beneficioClave: 'Permite que tus prospectos caminen por los terrenos, visualicen linderos y conozcan el entorno de tu condominio en Juliaca desde su celular, generando la seguridad y transparencia necesarias para decidir una inversión importante sin viajar físicamente.',
      metricaClave: { valor: '75%', desc: 'De terrenos reservados y vendidos de forma remota en 8 semanas' },
      desafio: 'Vender lotes y preventas de terrenos a distancia generaba desconfianza y largos viajes exploratorios por parte de los clientes. El negocio requería una forma de validar la formalidad del proyecto, la ubicación exacta y los accesos reales sin depender de folletos de baja credibilidad.',
      solucion: 'Implementamos un portal corporativo interactivo en 3D que integra fotos panorámicas aéreas y linderos digitalizados. Brindamos una vitrina transparente y formal en internet donde el comprador puede ver con sus propios ojos la realidad y servicios básicos del proyecto antes de reservar.',
      resultados: [
        'Ahorro de recursos al evitar la construcción de maquetas físicas de muestra.',
        'Más del 40% de las preventas concretadas con inversionistas nacionales y extranjeros fuera de la región.',
        'Aumento notable de la confianza comercial al transparentar linderos y vías con dron.'
      ],
      solucionRecomendada: {
        tipo: 'Solución Inmobiliaria 360 & Dron',
        detalles: 'La herramienta perfecta para constructoras y desarrolladores inmobiliarios que comercializan proyectos en planos, lotizaciones y preventas. Convierte la incertidumbre del comprador en una experiencia visual inmersiva.',
        iconoPrincipal: Compass,
        puntos: [
          'Visor Virtual 3D interactivo para planos y distribución del proyecto.',
          'Recorrido aéreo 360° con dron para lotizaciones y terrenos grandes en venta.',
          'Integración de vistas de ubicación de servicios cercanos y vías de acceso.',
          'Descarga directa de planos e información comercial con enlace seguro de contacto.'
        ]
      },
      testimonio: {
        text: 'Los compradores separaron sus terrenos con absoluta tranquilidad al ver la lotización completa y el avance real en la web. La transparencia virtual fue la clave para romper la desconfianza.',
        author: 'Ing. Carlos Valencia',
        position: 'Gerente de Proyectos'
      }
    },
    'clinica-isabel': {
      title: 'Vitrina Digital y Portal de Especialidades Médicas',
      category: 'Salud',
      client: 'Centro Ginecólogo Especializado Materno-Fetal "Santa Rosa"',
      icon: HeartPulse,
      imagen: '/tour/clinica_thumb.webp',
      color: 'text-nexus-purple bg-nexus-purple/10 border-nexus-purple/20',
      beneficioClave: 'Construye una presencia profesional y segmentada para tu centro médico. Permite que los pacientes que buscan especialistas con urgencia encuentren tus credenciales y testimonios reales en internet, transmitiendo el prestigio y la seguridad que necesitan para atenderse.',
      metricaClave: { valor: '-35%', desc: 'Reducción del ausentismo mediante un perfil digital seguro y recordatorios' },
      desafio: 'La falta de una identidad corporativa propia y formal en internet hacía que los pacientes dudaran del consultorio, prefiriendo alternativas de la competencia que proyectaban mayor prestigio digital. Se necesitaba un canal que expusiera credenciales oficiales y testimonios verificados.',
      solucion: 'Diseñamos un portal de salud corporativo impecable que presenta de manera detallada las especializaciones, el staff médico avalado y recomendaciones verificadas de pacientes reales. Enfocamos la plataforma en proyectar solidez y la máxima seguridad de datos clínicos.',
      resultados: [
        'Aumento en la captación de nuevas pacientes al resolver la desconfianza digital inicial.',
        'Reducción del 35% en inasistencias gracias a un flujo integrado de comunicación y seguridad.',
        'Posicionamiento y reputación del centro médico muy por encima de alternativas informales.'
      ],
      solucionRecomendada: {
        tipo: 'Portal de Salud Corporativo & Credenciales',
        detalles: 'Especialmente diseñada para clínicas y consultorios médicos que buscan destacar su trayectoria. Organiza y digitaliza la identidad del establecimiento de salud para generar confianza.',
        iconoPrincipal: Calendar,
        puntos: [
          'Catálogo estructurado y limpio de especialidades ginecológicas y médicas.',
          'Directorio del staff médico con especialidades y credenciales de colegio CMP.',
          'Módulo de testimonios y recomendaciones verificadas para generar confianza social.',
          'Flujo de contacto ágil y seguro para la reserva y seguimiento de consultas.'
        ]
      },
      testimonio: {
        text: 'Proyectar nuestra trayectoria y testimonios en un portal formal cambió la percepción de las pacientes. Sentirse en un entorno digital profesional y seguro les dio la tranquilidad de elegirnos.',
        author: 'Dra. Rosa Cárdenas',
        position: 'Directora Médica'
      }
    },
    'abogado-apaza': {
      title: 'Página Corporativa de Alta Reputación para Firmas y Profesionales',
      category: 'Legal',
      client: 'Apaza Bufete Legal (Arequipa)',
      icon: Briefcase,
      imagen: '/tour/abogado_thumb.webp',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      beneficioClave: 'Posiciona tu nombre o el de tu firma en los primeros resultados de Google. Una web corporativa bien estructurada transmite solidez, filtra las consultas de curiosos que no pagan y convence a clientes premium de que tú eres el experto calificado que necesitan para resolver sus problemas.',
      metricaClave: { valor: '+180%', desc: 'Incremento de consultas de clientes corporativos formales' },
      desafio: 'La firma tenía una reputación excelente en el ámbito físico pero carecía de presencia digital. Cuando los gerentes y empresarios buscaban asesoría especializada en Google, terminaban contratando a competidores que sí contaban con una página web moderna, a pesar de tener menos trayectoria real.',
      solucion: 'Creamos una plataforma web corporativa con diseño impecable que transmite seriedad y trayectoria. Diseñamos páginas específicas detallando estudios realizados, especializaciones, trayectoria profesional e historial laboral del equipo. Incorporamos además un formulario de precalificación para asegurar que cada prospecto que contacte califique para los servicios del estudio.',
      resultados: [
        'Aparición en los primeros resultados de Google para búsquedas de asesoría jurídica local.',
        'Filtro efectivo de consultas no calificadas, liberando tiempo a los abogados principales.',
        'Captación de clientes corporativos del sector comercial y de construcción de Arequipa y el sur.'
      ],
      solucionRecomendada: {
        tipo: 'Página Corporativa Profesional Premium',
        detalles: 'Ideal para estudios de abogados, contadores, consultores de negocios y profesionales independientes que exigen transmitir prestigio y autoridad. Su enfoque no es el contenido 3D, sino la impecabilidad visual, la claridad de los servicios y la confianza.',
        iconoPrincipal: ShieldCheck,
        puntos: [
          'Sección detallada de Especialidades y Casos de Éxito de la firma.',
          'Páginas específicas de Trayectoria, Estudios y Experiencia laboral del staff.',
          'Formulario inteligente para precalificación y filtrado de consultas.',
          'Mapa interactivo de ubicación de las oficinas físicas para generar máxima confianza.'
        ]
      },
      testimonio: {
        text: 'La página proyecta exactamente el profesionalismo que nos caracteriza. Ahora las empresas nos contactan conociendo de antemano nuestra especialidad y experiencia.',
        author: 'Dr. Fernando Apaza',
        position: 'Socio Principal'
      }
    },
    'valle-sur-hotel': {
      title: 'Portal de Reservas Directas 360° para Hoteles y Empresas de Turismo',
      category: 'Hoteles & Turismo',
      client: 'Valle Sur Hotel (Moquegua)',
      icon: Hotel,
      imagen: '/tour/hotel_thumb.webp',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      beneficioClave: 'Incrementa tus reservas directas a través de tu propia página web y deja de pagar altas comisiones (de hasta el 20%) a buscadores externos. Permite que los turistas y clientes de negocios exploren las habitaciones en 360° antes de reservar.',
      metricaClave: { valor: '+35%', desc: 'Incremento en reservas directas sin pagar comisiones' },
      desafio: 'El hotel en Moquegua dependía casi en su totalidad de Booking y agencias terceras para captar huéspedes, lo que reducía notablemente sus márgenes de ganancia. Los clientes corporativos y mineros que visitaban la ciudad exigían verificar si el hotel tenía el nivel adecuado de confort para trabajar y descansar antes de hacer su reserva de grupo.',
      solucion: 'Desarrollamos una web con recorridos 360° integrados de cada tipo de habitación y zonas comunes. Sumamos un motor de reservas directas muy intuitivo que calcula precios según fechas, permitiendo pagar con tarjetas y billeteras locales en un entorno seguro y rápido.',
      resultados: [
        'Ahorro inmediato de comisiones hoteleras al redirigir reservas a la web propia.',
        'Reducción drástica del tiempo que el personal de recepción pasaba enviando fotos de las habitaciones por WhatsApp.',
        'Contratos mensuales con empresas contratistas que validaron virtualmente la calidad del hotel.'
      ],
      solucionRecomendada: {
        tipo: 'Portal de Turismo e Inmersión 360',
        detalles: 'Recomendada para hoteles, hostales, resorts y agencias de turismo que desean capturar reservas directamente en su web, aportando transparencia y confianza total mediante recorridos 360 grados.',
        iconoPrincipal: Hotel,
        puntos: [
          'Visor 360° de las habitaciones, suites y salas de conferencias.',
          'Calendario y motor de reserva directa dinámico por tipo de habitación.',
          'Pasarela de cobro seguro compatible con Visa, Mastercard y Yape/Plin.',
          'Optimización móvil para permitir reservas rápidas en pleno viaje.'
        ]
      },
      testimonio: {
        text: 'Mostrar nuestras habitaciones en 360° nos dio una ventaja enorme con los clientes mineros. Entran a la web, confirman la comodidad del hotel y reservan directamente.',
        author: 'Sra. Patricia Fuentes',
        position: 'Administradora General'
      }
    },
    'psicocentro-sur': {
      title: 'Landing Page de Agenda y Cobro Express para Terapeutas y Asesores',
      category: 'Salud Mental',
      client: 'Psicocentro (Tacna)',
      icon: Briefcase,
      imagen: '/tour/psicologo_thumb.webp',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      beneficioClave: 'Automatiza por completo la recepción de citas y cobros de tus consultas virtuales o presenciales. Libérate de la tediosa tarea de enviar tus horarios disponibles por chat y de validar capturas de Yape o transferencias de forma manual.',
      metricaClave: { valor: '10 hrs', desc: 'Semanales ahorradas en coordinación telefónica y cobros' },
      desafio: 'El terapeuta pasaba horas respondiendo mensajes de WhatsApp para cuadrar horarios de cita con los pacientes. Además, la gestión de pagos (esperar el comprobante, validarlo y agendar el enlace de Zoom manualmente) consumía demasiado tiempo y generaba errores de cruces de agenda.',
      solucion: 'Implementamos una página de aterrizaje (landing page) optimizada para conversión. Los pacientes ingresan, eligen el tipo de sesión, ven las horas libres del profesional, pagan de inmediato vía Yape, Plin o tarjeta, y el sistema les agenda automáticamente la cita en Google Calendar junto con el enlace de Zoom.',
      resultados: [
        'Cero errores humanos en cruces de citas y reservas en horarios no disponibles.',
        'Atracción de pacientes nacionales e internacionales de habla hispana gracias a la facilidad de la consulta virtual.',
        'Liberación de tiempo administrativo para enfocarse en la atención del paciente.'
      ],
      solucionRecomendada: {
        tipo: 'Landing Page de Reserva y Pago Express',
        detalles: 'Ideal para psicólogos, nutricionistas, consultores, coaches y profesionales que atienden por teleconsulta o citas privadas y quieren un flujo simplificado en una sola pantalla.',
        iconoPrincipal: Zap,
        puntos: [
          'Estructura de una sola página enfocada al 100% en conseguir que el cliente reserve.',
          'Sincronización directa con Google Calendar para mostrar disponibilidad real.',
          'Cobro inmediato con Yape, Plin y tarjetas integrado en el flujo de reserva.',
          'Creación y envío automático del enlace de videollamada (Zoom o Google Meet).'
        ]
      },
      testimonio: {
        text: 'Mis pacientes reservan su terapia incluso de madrugada. Yo solo reviso mi calendario y me conecto directamente al enlace que el sistema ya creó.',
        author: 'Lic. Milagros Centeno',
        position: 'Psicóloga Clínica Principal'
      }
    },
    'cafe-arequipa': {
      title: 'Tienda Virtual Automatizada con Envío Calculado y Pagos Express',
      category: 'Mypes & E-commerce',
      client: 'Café Gourmet Delicias (Arequipa)',
      icon: Cpu,
      imagen: '/tour/mypes_thumb.webp',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      beneficioClave: 'Lleva tus productos a nivel nacional y vende las 24 horas del día. Ahorra tiempo automatizando la cotización de los gastos de envío por courier y recibe pagos directos sin comisiones excesivas.',
      metricaClave: { valor: '+120%', desc: 'Crecimiento de ventas despachadas a nivel nacional' },
      desafio: 'La marca de café gourmet de Arequipa deseaba expandirse a Lima y otras regiones del país, pero atender las solicitudes, calcular las tarifas de envío de Olva Courier de forma manual para cada cliente y validar transferencias por chat limitaba su capacidad de atender más de 5 pedidos al día.',
      solucion: 'Desarrollamos una tienda virtual ultra veloz y optimizada para pantallas móviles. Diseñamos un flujo de pago directo que calcula en tiempo real el costo del courier según el distrito del cliente e integra opciones de pago express como Yape, tarjetas de débito y crédito.',
      resultados: [
        'Duplicación de las ventas en el primer mes de lanzamiento de la tienda virtual.',
        'El proceso de compra en móviles se redujo a menos de 45 segundos totales.',
        'Automatización del cálculo logístico de envíos a nivel nacional.'
      ],
      solucionRecomendada: {
        tipo: 'Tienda Online (E-commerce) de Alta Conversión',
        detalles: 'Ideal para marcas, productores, artesanos y negocios con inventario físico que buscan simplificar el flujo de venta minorista a nivel regional y nacional.',
        iconoPrincipal: ShoppingCart,
        puntos: [
          'Catálogo interactivo con carrito de compras rápido y autoadministrable.',
          'Módulo de envíos integrado con cálculo automático de tarifas por zona.',
          'Pasarela de pagos directos con Yape, Plin, tarjetas y transferencias.',
          'Gestión interna simplificada de stock y control de pedidos listos para despacho.'
        ]
      },
      testimonio: {
        text: 'Nuestra logística de ventas se simplificó por completo. La web calcula el envío según la provincia, cobra el monto y nos notifica para empacar.',
        author: 'Sr. Jorge Valdivia',
        position: 'Fundador & Maestro Tostador'
      }
    },
    'seo-posicionamiento': {
      title: 'Estrategia de SEO Local para Captar Clientes en Google sin Pagar Publicidad',
      category: 'Aparición en Google',
      client: 'Posicionamiento en Google',
      icon: Cpu,
      imagen: '/tour/seo_thumb.webp',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      beneficioClave: 'Consigue que tu negocio sea el primero que vean tus clientes en tu ciudad de forma orgánica. Aparecer en Google cuando alguien busca exactamente lo que tú vendes genera contactos listos para comprar sin gastar presupuesto diario en anuncios.',
      metricaClave: { valor: 'Top #1', desc: 'En búsquedas locales para palabras clave clave de su rubro' },
      desafio: 'Muchas empresas gastan presupuestos elevados en diseñar páginas web hermosas que luego quedan archivadas y sin visitas porque nadie las encuentra en internet. Depender únicamente de pagar anuncios en Facebook o Instagram encarece los costos de captación de clientes de forma insostenible.',
      solucion: 'Aplicamos una estrategia técnica de SEO Local integral: optimización de velocidad de carga extrema para móviles, redacción de contenidos persuasivos basados en intenciones de búsqueda reales de la zona y vinculación estratégica del perfil de Google Business para dominación en Google Maps.',
      resultados: [
        'Aparición orgánica constante en la primera página de búsquedas comerciales de la ciudad.',
        'Flujo predecible y diario de clientes potenciales calificados sin costo por clic.',
        'Posicionamiento y reputación del negocio muy por encima de los competidores locales.'
      ],
      solucionRecomendada: {
        tipo: 'Estrategia SEO Local & Posicionamiento en Google',
        detalles: 'La solución fundamental para cualquier empresa de servicios u oficina física que dependa de captar clientes en su zona de influencia directa.',
        iconoPrincipal: TrendingUp,
        puntos: [
          'Optimización técnica del sitio web para puntuaciones elevadas en velocidad.',
          'Investigación de palabras de búsqueda de alta intención de compra.',
          'Estrategia de contenidos y SEO Local enlazada a Google Maps.',
          'Implementación de llamadas de contacto directas y formularios rastreables.'
        ]
      },
      testimonio: {
        text: 'Dejamos de perseguir clientes en redes sociales. Ahora las personas que nos buscan en Google nos llaman directamente y concretan la compra.',
        author: 'Ing. Angel Apaza',
        position: 'Especialista en Desarrollo & SEO'
      }
    }
  };

  const proyecto = proyectosData[id];

  if (!proyecto) {
    return (
      <div className="container mx-auto px-6 py-32 text-center relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-bold text-white mb-4">Caso de Estudio No Encontrado</h2>
        <p className="text-gray-400 mb-8 max-w-md">El caso de estudio al que intentas acceder no existe o ha sido modificado.</p>
        <Link to="/servicios-3d" className="inline-flex bg-nexus-accent text-white px-6 py-2.5 rounded-full font-semibold transition active:scale-95">
          Volver a Servicios 3D
        </Link>
      </div>
    );
  }

  const ProjectIcon = proyecto.icon;
  const RecommendedIcon = proyecto.solucionRecomendada?.iconoPrincipal || Compass;

  return (
    <div className="animate-fade-in-up">
      {/* Header Caso de Estudio */}
      <section className="container mx-auto px-6 pt-28 pb-8 relative z-10">
        <Link 
          to="/servicios-3d" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Volver a Servicios 3D
        </Link>

        <div className="max-w-4xl">
          <div className={`p-2 py-1 rounded border w-fit mb-6 flex items-center gap-2 font-bold text-xs uppercase ${proyecto.color}`}>
            <ProjectIcon className="w-4 h-4" />
            <span>{proyecto.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight font-sans">
            {proyecto.title}
          </h1>
          <p className="text-nexus-accent text-sm md:text-base font-semibold">
            Cliente de la Agencia: {proyecto.client}
          </p>
        </div>
      </section>

      {/* Imagen Destacada y Métrica Destacada */}
      <section className="container mx-auto px-6 pb-12 relative z-10 reveal-on-scroll">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
            <img 
              src={proyecto.imagen ? (proyecto.imagen.startsWith('http') || proyecto.imagen.startsWith('data:') ? proyecto.imagen : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${proyecto.imagen}`) : ''} 
              alt={proyecto.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
          
          <div className="lg:col-span-4 bg-gradient-to-br from-nexus-purple/20 via-slate-950 to-nexus-blue/20 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-nexus-accent opacity-[0.05] rounded-full blur-2xl"></div>
            <TrendingUp className="w-8 h-8 text-nexus-accent mb-4 animate-bounce" />
            <span className="text-4xl md:text-5xl font-extrabold text-gradient-rise mb-2">{proyecto.metricaClave.valor}</span>
            <span className="text-xs uppercase text-gray-400 font-bold tracking-wider mb-2">Impacto Comercial</span>
            <p className="text-gray-300 text-xs md:text-sm font-sans">
              {proyecto.metricaClave.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Beneficio Comercial Rápido */}
      <section className="container mx-auto px-6 pb-12 relative z-10 reveal-on-scroll">
        <div className="max-w-6xl mx-auto bg-white/[0.02] border border-white/15 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-[4px] bg-nexus-accent"></div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-nexus-accent/10 text-nexus-accent mt-1 border border-nexus-accent/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-white text-base md:text-lg font-bold mb-2">Por qué este enfoque es indispensable para tu negocio</h2>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans">
                {proyecto.beneficioClave}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desafío y Estrategia - Grid de 2 Columnas Asimétricas */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* El Desafío */}
          <div className="reveal-on-scroll w-full flex">
            <div className="card-neon-red hover:scale-[1.01] transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group w-full border border-white/5">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <Zap className="w-5 h-5 animate-pulse" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">El Problema de Partida</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans">
                  {proyecto.desafio}
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-red-500/20 to-transparent w-full mt-8 group-hover:from-red-500/50 transition-all"></div>
            </div>
          </div>

          {/* La Estrategia */}
          <div className="reveal-on-scroll reveal-delay-150 w-full flex">
            <div className="card-neon-cian hover:scale-[1.01] transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group w-full border border-white/5">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2 rounded-lg bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/20 group-hover:bg-nexus-accent/20 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">La Solución Implementada</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans">
                  {proyecto.solucion}
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-nexus-accent/20 to-transparent w-full mt-8 group-hover:from-nexus-accent/50 transition-all"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Resultados e Impacto Real */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel border-white/10 rounded-3xl p-8 md:p-12 reveal-on-scroll">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Logros Comerciales Tangibles</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proyecto.resultados.map((res, index) => (
                <div key={index} className="flex gap-4 items-start border-l border-white/15 pl-4 relative group">
                  <div className="absolute top-0 left-0 w-[1px] h-0 bg-emerald-400 group-hover:h-full transition-all duration-500"></div>
                  <div className="text-gradient-rise font-extrabold text-lg md:text-xl">0{index + 1}</div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans pt-1">
                    {res}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Ficha de Recomendación del Rubro */}
      {proyecto.solucionRecomendada && (
        <section className="container mx-auto px-6 pb-12 relative z-10 pt-10">
          <div className="max-w-6xl mx-auto glass-panel border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-nexus-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Lado Izquierdo: Descripción y Rol de la Solución (7 cols) */}
              <div className="lg:col-span-7">
                <span className="text-[10px] md:text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20">ARQUITECTURA RECOMENDADA</span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-4 font-sans flex items-center gap-3">
                  <RecommendedIcon className="w-8 h-8 text-nexus-accent animate-pulse shrink-0" />
                  <span>{proyecto.solucionRecomendada.tipo}</span>
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans">
                  {proyecto.solucionRecomendada.detalles}
                </p>
              </div>

              {/* Lado Derecho: Puntos Clave de la Arquitectura (5 cols) */}
              <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-2xl">
                <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-nexus-purple animate-spin-slow" />
                  <span>Características Clave Indispensables</span>
                </h4>
                <ul className="space-y-4 text-xs md:text-sm text-gray-300 font-sans">
                  {proyecto.solucionRecomendada.puntos.map((punto, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonio y CTA */}
      <section className="container mx-auto px-6 pb-12 pt-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Bloque Testimonio Premium Dinámico */}
          <div className="reveal-on-scroll">
            <div className="animate-pulse-glow glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 cursor-default">
              {/* Orbe de brillo interactivo */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-nexus-purple opacity-[0.01] group-hover:opacity-[0.06] rounded-full blur-[60px] transition-all duration-700"></div>
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-nexus-accent opacity-[0.01] group-hover:opacity-[0.06] rounded-full blur-[60px] transition-all duration-700"></div>

              {/* Icono de cita con animación */}
              <MessageSquare className="absolute -top-4 -right-4 w-28 h-28 text-white/[0.02] group-hover:text-nexus-purple/[0.08] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 pointer-events-none" />
              
              {/* Texto del testimonio */}
              <p className="text-white italic text-base md:text-lg leading-relaxed mb-8 relative z-10 group-hover:text-gray-100 transition-colors duration-300 font-sans">
                <span className="text-3xl md:text-4xl text-nexus-accent mr-1 font-serif select-none">“</span>
                {proyecto.testimonio.text}
                <span className="text-3xl md:text-4xl text-nexus-purple ml-1 font-serif select-none">”</span>
              </p>

              {/* Fila del Autor con Avatar de Iniciales */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-nexus-purple via-indigo-500 to-nexus-accent flex items-center justify-center font-bold text-white shadow-lg shadow-black/40 text-sm select-none shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                  {proyecto.testimonio.author.replace(/^(Ing\.|Dr\.|Dra\.|Lic\.|Sr\.|Sra\.)\s+/, '').split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()}
                </div>
                <div>
                  <span className="text-white font-bold text-sm block tracking-wide">{proyecto.testimonio.author}</span>
                  <span className="text-nexus-accent text-xs block mt-0.5 group-hover:text-nexus-accent/90 transition-colors">{proyecto.testimonio.position}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA integrador */}
          <div className="reveal-on-scroll text-center mt-6 flex flex-col items-center gap-4 justify-center font-sans">
            <h3 className="text-xl md:text-2xl font-bold text-white">¿Quieres lograr resultados similares en tu negocio?</h3>
            <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed mb-4">
              Trabajemos juntos. Desarrollamos la arquitectura digital que tu negocio del sur necesita para crecer en internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link 
                to="/contacto" 
                className="inline-flex items-center justify-center btn-neon-cian px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
              >
                Contactar Ahora
              </Link>
              <Link 
                to="/servicios-3d" 
                className="inline-flex items-center justify-center glass-panel border border-white/10 hover:border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition active:scale-95 text-xs md:text-sm uppercase tracking-wider font-sans w-full sm:w-auto"
              >
                Volver a Servicios 3D
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
