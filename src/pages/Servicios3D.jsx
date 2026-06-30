import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  Briefcase, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles,
  Cpu,
  Hotel,
  Award,
  Check,
  Video,
  Smartphone,
  Laptop,
  Eye,
  CheckCircle2,
  TrendingUp,
  Activity,
  Users
} from 'lucide-react';

const sectors = [
  { name: 'Lotizaciones Interactivas 3D', icon: Building2 },
  { name: 'Tours Virtuales 360°', icon: Laptop },
  { name: 'Tomas Aéreas & Dron', icon: Video },
  { name: 'Portales Inmobiliarios Premium', icon: Cpu }
];

const proyectos = [
  {
    id: 'lotizacion-maravillas',
    title: 'Residencial Maravillas - Lotización Interactiva 3D',
    category: 'lotizaciones',
    tag: 'Lotización Interactiva',
    desc: '¿Inversionistas que dudan de separar lotes en planos? Residencial Maravillas implementó un plano urbanístico interactivo en 3D. Al permitir recorrer las calles, ver la topografía real y verificar la disponibilidad de lotes en tiempo real desde celulares, el proyecto generó confianza inmediata acelerando sus preventas a distancia.',
    icon: Building2,
    imagen: '/tour/Vista Aerea Residencial Maravillas.jpg',
    color: 'text-nexus-accent bg-nexus-accent/15 border-nexus-accent/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(6,182,212,0.25)] hover:border-nexus-accent/40',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'tour-hacienda-sol',
    title: 'Hacienda del Sol - Casa de Campo 360°',
    category: 'tours',
    tag: 'Tour Virtual 360°',
    desc: '¿Clientes que no pueden viajar para conocer el departamento piloto o casa de campo? Desarrollamos un recorrido virtual interactivo en alta definición. Los compradores exploren cada habitación, la terraza con vista al paisaje y la distribución exacta, reduciendo las visitas presenciales infructuosas en un 75%.',
    icon: Eye,
    imagen: '/tour/sala.jpg',
    color: 'text-nexus-purple bg-nexus-purple/15 border-nexus-purple/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:border-nexus-purple/40',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'dron-mirador-juliaca',
    title: 'Condominio Mirador Juliaca - Avance con Dron',
    category: 'drones',
    tag: 'Tomas con Dron',
    desc: '¿Compradores preocupados por la accesibilidad y el estado de las obras del condominio? Realizamos un levantamiento multimedia aéreo con drones y demarcamos digitalmente los linderos en 3D sobre imágenes reales de alta resolución, facilitando la visualización del entorno comercial y las vías pavimentadas.',
    icon: Video,
    imagen: '/tour/02_residencial_maravillas.jpg',
    color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(245,158,11,0.15)] hover:border-amber-500/40',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'portal-sierra-capital',
    title: 'Sierra Capital - Portal Inmobiliario Corporativo',
    category: 'portales',
    tag: 'Desarrollo Web Inmobiliario',
    desc: '¿Constructoras que pierden preventas al carecer de una presencia digital profesional y transparente? Diseñamos y desarrollamos el portal corporativo para Sierra Capital, integrando su portafolio de proyectos, visores inmersivos 360° y formularios de reservas directos, logrando un incremento de +40% en ventas virtuales.',
    icon: Cpu,
    imagen: '/tour/seo_thumb.png',
    color: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
    shadow: 'hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] hover:border-blue-500/40',
    colSpan: 'md:col-span-2'
  }
];

export default function Servicios3D() {
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    document.title = "Servicios de Tecnología 3D y Web Inmobiliaria | Nexus Domo 360°";
    window.scrollTo(0, 0);
  }, []);

  const filteredProyectos = filter === 'todos'
    ? proyectos
    : proyectos.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in-up">
      {/* 1. HERO SECTION (B2B ORIENTED) */}
      <section className="container mx-auto px-6 pt-28 pb-16 relative z-10 text-center reveal-on-scroll">
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-nexus-accent/10 to-nexus-purple/10 rounded-full blur-[90px] pointer-events-none z-0"></div>
        
        <span className="text-xs uppercase text-[#00f2fe] font-black tracking-widest bg-[#00f2fe]/10 px-3.5 py-1.5 rounded-full border border-[#00f2fe]/20 relative z-10 inline-block drop-shadow-[0_2px_8px_rgba(0,242,254,0.25)]">
          SOLUCIONES TECNOLÓGICAS B2B
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-5 mb-6 leading-[1.15] max-w-4xl mx-auto relative z-10 font-display">
          Transforma tus planos en ventas con <span className="text-gradient-rise">Experiencias 3D</span> e Interactividad
        </h1>
        
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed relative z-10">
          Desarrollamos portales web inmobiliarios premium, levantamientos multimedia con drones y visores virtuales 360° fluidos que aceleran tus cierres de venta y transmiten total seguridad jurídica a tus compradores.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center btn-neon-cian px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-200 active:scale-95 group w-full sm:w-auto"
          >
            Cotizar Solución Inmobiliaria
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-xs md:text-sm text-gray-300 border border-white/10 hover:border-white/25 hover:bg-white/5 transition duration-200 w-full sm:w-auto cursor-pointer"
          >
            Explorar Servicios
          </a>
        </div>
      </section>

      {/* 2. MÉTRICAS DE IMPACTO COMERCIAL */}
      <section className="container mx-auto px-6 pb-10 relative z-10">
        <div className="max-w-5xl mx-auto glass-panel border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-purple opacity-[0.02] rounded-full blur-[85px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center md:items-start md:pr-8">
              <div className="w-10 h-10 rounded-xl bg-nexus-accent/15 flex items-center justify-center text-nexus-accent mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-3xl md:text-4xl font-black text-white font-display">+40%</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">En Reservas a Distancia</span>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed font-sans">
                Permite a inversionistas nacionales y extranjeros elegir y separar lotes de forma 100% interactiva sin necesidad de viajar.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start pt-6 md:pt-0 md:px-8">
              <div className="w-10 h-10 rounded-xl bg-nexus-purple/15 flex items-center justify-center text-nexus-purple mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-3xl md:text-4xl font-black text-white font-display">-70%</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">Visitas Físicas Innecesarias</span>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed font-sans">
                Filtra a los curiosos. Solo los clientes realmente interesados y calificados agendan una visita de campo presencial.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start pt-6 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-3xl md:text-4xl font-black text-white font-display">100%</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">Transparencia Visual</span>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed font-sans">
                Elimina desconfianzas mostrando linderos precisos con Dron y giros 360°, demostrando solidez legal ante notarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPUESTA DE SERVICIOS INTEGRALES */}
      <section id="servicios" className="container mx-auto px-6 pb-12 relative z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">TECNOLOGÍA INMOBILIARIA</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Nuestros Servicios Especializados B2B
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed">
            Unificamos hardware multimedia, computación en la nube y desarrollo web a medida para entregar una experiencia comercial superior.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="glass-panel p-8 rounded-3xl border-white/5 hover:border-nexus-accent/30 transition-all duration-300 relative group flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-nexus-accent/10 flex items-center justify-center text-nexus-accent mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-4 font-display">Levantamiento con Dron e Imagen Aérea</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Captura la inmensidad de tus condominios. Realizamos tomas en alta definición, topografía digital visual y marcado de linderos exactos sobre imágenes reales. Perfecto para mostrar accesos, avenidas proyectadas e inclinación real del terreno.
              </p>
            </div>
            <ul className="text-xs text-gray-300 space-y-2.5 pt-4 border-t border-white/5 font-sans">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-nexus-accent flex-shrink-0" /> Fotografía aérea en 4K UHD</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-nexus-accent flex-shrink-0" /> Videos panorámicos promocionales</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-nexus-accent flex-shrink-0" /> Delimitación tridimensional digital</li>
            </ul>
          </div>

          {/* Servicio 2 */}
          <div className="glass-panel p-8 rounded-3xl border-white/5 hover:border-nexus-purple/30 transition-all duration-300 relative group flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-nexus-purple/10 flex items-center justify-center text-nexus-purple mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-4 font-display">Recorridos Virtuales 360° Interactivos</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Levamos las visitas a la web de forma instantánea. Escaneamos e implementamos visores inmersivos fluidos basados en WebGL de carga ultrarrápida. Los clientes pueden girar, hacer zoom e interactuar con botones informativos del lote o departamento.
              </p>
            </div>
            <ul className="text-xs text-gray-300 space-y-2.5 pt-4 border-t border-white/5 font-sans">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-nexus-purple flex-shrink-0" /> Tours web fluidos y sin fricción</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-nexus-purple flex-shrink-0" /> Puntos interactivos (Hotspots) informativos</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-nexus-purple flex-shrink-0" /> Compatibilidad total con móviles y VR</li>
            </ul>
          </div>

          {/* Servicio 3 */}
          <div className="glass-panel p-8 rounded-3xl border-white/5 hover:border-indigo-400/30 transition-all duration-300 relative group flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-400/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-4 font-display">Portales Web Inmobiliarios Integrados</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Tu vitrina de ventas digital. Diseñamos y desarrollamos plataformas web corporativas rápidas, optimizadas para SEO local que integran de forma natural tus recorridos 360°, mapas dinámicos y formularios directos a tu CRM o WhatsApp de ventas.
              </p>
            </div>
            <ul className="text-xs text-gray-300 space-y-2.5 pt-4 border-t border-white/5 font-sans">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400 flex-shrink-0" /> Diseño UX/UI premium a medida</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400 flex-shrink-0" /> Carga rápida de alto rendimiento (Next/React)</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400 flex-shrink-0" /> Posicionamiento en Google (SEO Local)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. MARQUESINA DE SECTORES */}
      <section className="w-full py-8 border-t border-b border-white/5 bg-white/[0.01] overflow-hidden mb-16 relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...sectors, ...sectors, ...sectors].map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div key={index} className="inline-flex items-center gap-2.5 mx-10 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider uppercase select-none">
                <IconComponent className="w-4 h-4 text-nexus-accent" />
                <span>{sector.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SECCIÓN DE CASOS DE ÉXITO (BENTO GRID REUTILIZADO) */}
      <section className="container mx-auto px-6 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">CASOS DE ÉXITO Y CAPACIDAD</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4 font-display">
            Demostración de Nuestra Capacidad Técnica
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed">
            Explora portales corporativos, sistemas web y visores interactivos reales desarrollados anteriormente. Diseñados para convertir y optimizados en rendimiento.
          </p>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap font-display">
          {[
            { id: 'todos', name: 'Todos' },
            { id: 'lotizaciones', name: 'Lotizaciones 3D' },
            { id: 'tours', name: 'Tours 360°' },
            { id: 'drones', name: 'Multimedia Dron' },
            { id: 'portales', name: 'Portales Web' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer uppercase tracking-wider ${filter === cat.id
                  ? 'bg-white text-nexus-dark font-bold shadow-lg shadow-white/5'
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5 border-white/5'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {filteredProyectos.map((proyecto, idx) => {
            const IconComponent = proyecto.icon;
            const delayClass = `reveal-delay-${((idx % 3) + 1) * 100}`;

            return (
              <div
                key={proyecto.id}
                className={`reveal-on-scroll ${delayClass} ${proyecto.colSpan} w-full flex`}
              >
                <div
                  className={`glass-panel border border-white/10 rounded-3xl flex flex-col justify-between transition-all duration-300 group ${proyecto.shadow} relative overflow-hidden min-h-[350px] w-full`}
                >
                  {/* Imagen de Portada con Gradiente Oscuro encima */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={proyecto.imagen ? (proyecto.imagen.startsWith('http') || proyecto.imagen.startsWith('data:') ? proyecto.imagen : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${proyecto.imagen}`) : ''}
                      alt={proyecto.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-30 group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className={`p-2.5 rounded-xl border w-fit mb-6 flex items-center gap-2 font-bold text-[10px] md:text-xs uppercase ${proyecto.color}`}>
                      <IconComponent className="w-4 h-4" />
                      <span>{proyecto.tag}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-nexus-accent transition-colors duration-200 font-display">{proyecto.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8 font-sans">
                      {proyecto.desc}
                    </p>
                  </div>

                  <div className="relative z-10 px-8 pb-8 font-display">
                    <Link
                      to={`/servicios-3d/${proyecto.id}`}
                      className="inline-flex items-center text-white font-semibold text-xs md:text-sm hover:text-nexus-accent group cursor-pointer"
                    >
                      Ver Caso de Estudio
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="container mx-auto px-6 pb-24 reveal-on-scroll">
        <div className="max-w-4xl mx-auto glass-panel border-nexus-accent/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-accent opacity-[0.03] rounded-full blur-[80px]"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            ¿Listo para acelerar tus ventas inmobiliarias con tecnología 3D?
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-sans">
            Hablemos sobre tus condominios, lotizaciones o proyectos de construcción. Diseñamos una propuesta visual personalizada, cotización transparente y plazos de entrega garantizados.
          </p>
          
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center btn-neon-cian px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
          >
            Iniciar Asesoría y Cotización Gratis
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
