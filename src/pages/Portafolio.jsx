import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  Briefcase, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles,
  Compass,
  Cpu,
  Hotel,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function Portafolio() {
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    document.title = "Casos de Éxito y Portafolio | Nexus Rise";
  }, []);

  const sectors = [
    { name: 'Inmobiliaria & Preventas 3D', icon: Building2 },
    { name: 'Clínicas & Salud Ocupacional', icon: HeartPulse },
    { name: 'Hoteles & Turismo Inmersivo', icon: Hotel },
    { name: 'Profesionales & Marca Personal', icon: Briefcase },
    { name: 'Sistemas Web & Mypes', icon: Cpu }
  ];

  const proyectos = [
    {
      id: 'seo-posicionamiento',
      title: 'Estrategia de Posicionamiento SEO Local para Pymes',
      category: 'mypes',
      tag: 'SEO & Visibilidad',
      desc: '¿Negocios locales invisibles para clientes que buscan sus servicios en internet? Implementamos una estrategia corporativa de visibilidad directa. Consiguió que las Pymes aparezcan de forma destacada ante búsquedas activas, logrando un incremento del 300% en llamadas de clientes interesados sin gastar en anuncios.',
      icon: Cpu,
      imagen: '/tour/seo_thumb.png',
      color: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(6,182,212,0.25)] hover:border-cyan-400/40',
      colSpan: 'md:col-span-3'
    },
    {
      id: 'sillar-inmobiliaria',
      title: 'Sierra Capital - Inmobiliaria 360°',
      category: 'inmobiliaria',
      tag: 'Inmobiliaria 3D',
      desc: '¿Compradores que dudan de invertir en planos por temor a la informalidad? Sierra Capital implementó un portal corporativo interactivo 360°. Al mostrar de forma transparente los linderos, accesos y vías reales, transmitió la seguridad de una empresa formal, logrando reservas seguras y un +40% en ventas virtuales.',
      icon: Building2,
      imagen: '/tour/Vista Aerea Residencial Maravillas.jpg',
      color: 'text-nexus-accent bg-nexus-accent/15 border-nexus-accent/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)] hover:border-nexus-accent/40',
      colSpan: 'md:col-span-2'
    },
    {
      id: 'clinica-isabel',
      title: 'Centro Ginecólogo Especializado Materno-Fetal "Santa Rosa"',
      category: 'salud',
      tag: 'Salud Digital',
      desc: '¿Pacientes que eligen a tu competencia porque su negocio se ve más consolidado en internet? Diseñamos una vitrina digital que reúne las credenciales del staff médico del Centro Ginecólogo Especializado Materno-Fetal "Santa Rosa" y testimonios reales de pacientes. Esta presencia formal brindó seguridad inmediata, logrando que más personas reserven y reduciendo el ausentismo en 35%.',
      icon: HeartPulse,
      imagen: '/tour/clinica_thumb.png',
      color: 'text-nexus-purple bg-nexus-purple/15 border-nexus-purple/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:border-nexus-purple/40',
      colSpan: 'md:col-span-1'
    },
    {
      id: 'valle-sur-hotel',
      title: 'Experiencia Inmersiva Valle Sur',
      category: 'turismo',
      tag: 'Hotelería & Turismo',
      desc: '¿Clientes corporativos y mineros que dudan de reservar por no conocer las habitaciones reales? Desarrollamos una vitrina virtual 360° interactiva. Al exhibir las instalaciones con total realismo y profesionalismo, eliminaron toda incertidumbre, incrementando en un 25% las reservas directas.',
      icon: Hotel,
      imagen: '/tour/hotel_thumb.png',
      color: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(245,158,11,0.15)] hover:border-amber-500/40',
      colSpan: 'md:col-span-1'
    },
    {
      id: 'abogado-apaza',
      title: 'Estudio Jurídico Apaza & Asociados',
      category: 'profesionales',
      tag: 'Marca Personal',
      desc: '¿Tu firma jurídica pierde credibilidad al no contar con un perfil profesional segmentado? Diseñamos un portal corporativo para el Estudio Apaza. Al estructurar su trayectoria y casos ganados, proyectaron el respaldo legal necesario para cerrar más de 50 contratos corporativos premium en su primer mes.',
      icon: Briefcase,
      imagen: '/tour/abogado_thumb.png',
      color: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] hover:border-blue-500/40',
      colSpan: 'md:col-span-2'
    },
    {
      id: 'cafe-arequipa',
      title: 'E-commerce Café Delicias del Misti',
      category: 'mypes',
      tag: 'Comercio Electrónico',
      desc: '¿Clientes que abandonan la compra al no encontrar una forma de pago segura y formal? Café Delicias implementó una tienda corporativa propia. Al contar con un sistema de pagos seguro y un catálogo profesional, eliminaron toda desconfianza, multiplicando su valor de marca e incrementando en +180% sus ventas directas.',
      icon: Cpu,
      imagen: '/tour/mypes_thumb.png',
      color: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(244,63,94,0.15)] hover:border-rose-500/40',
      colSpan: 'md:col-span-2'
    },
    {
      id: 'psicocentro-sur',
      title: 'Consultorio Psicocentro del Sur',
      category: 'profesionales',
      tag: 'Salud Mental',
      desc: '¿Pacientes que buscan un terapeuta de confianza y dudan por la informalidad de sus canales de contacto? Desarrollamos un portal profesional segmentado que resalta las credenciales de salud mental, proyectando una imagen formal y segura que incrementa la confianza para reservar consultas de forma rápida.',
      icon: Briefcase,
      imagen: '/tour/psicologo_thumb.png',
      color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      shadow: 'hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)] hover:border-emerald-500/40',
      colSpan: 'md:col-span-1'
    }
  ];

  const filteredProyectos = filter === 'todos' 
    ? proyectos 
    : proyectos.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-12 relative z-10 text-center reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[200px] bg-nexus-purple/5 rounded-full blur-[90px] pointer-events-none z-0"></div>
        <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20 relative z-10">CASOS DE ÉXITO</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight max-w-4xl mx-auto relative z-10 font-sans">
          Proyectos Digitales que Impulsan Resultados Reales
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-12 leading-relaxed relative z-10">
          Explora nuestras soluciones interactivas 3D y portales web diseñados a medida. Transformamos ideas en plataformas de alta velocidad que captan clientes calificados.
        </p>
      </section>

      {/* Marquesina de Rubros en Movimiento */}
      <section className="w-full py-8 border-t border-b border-white/5 bg-white/[0.01] overflow-hidden mb-16 relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...sectors, ...sectors, ...sectors].map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <div key={index} className="inline-flex items-center gap-2.5 mx-10 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold tracking-wider uppercase select-none">
                <IconComponent className="w-4 h-4 text-nexus-accent animate-pulse" />
                <span>{sector.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Selector de Filtros */}
      <section className="container mx-auto px-6 pb-8 relative z-10">
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: 'todos', name: 'Todos' },
            { id: 'inmobiliaria', name: 'Inmobiliaria' },
            { id: 'salud', name: 'Salud' },
            { id: 'turismo', name: 'Hoteles' },
            { id: 'profesionales', name: 'Profesionales' },
            { id: 'mypes', name: 'Mypes' }
          ].map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer uppercase tracking-wider ${
                filter === cat.id 
                  ? 'bg-white text-nexus-dark font-bold shadow-lg shadow-white/5' 
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/5 border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Grid del Portafolio */}
      <section className="container mx-auto px-6 pb-32 relative z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-nexus-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
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
                      src={proyecto.imagen} 
                      alt={proyecto.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-35 group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className={`p-2.5 rounded-xl border w-fit mb-6 flex items-center gap-2 font-bold text-[10px] md:text-xs uppercase ${proyecto.color}`}>
                      <IconComponent className="w-4 h-4" />
                      <span>{proyecto.tag}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-nexus-accent transition-colors duration-200">{proyecto.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-8">
                      {proyecto.desc}
                    </p>
                  </div>

                  <div className="relative z-10 px-8 pb-8">
                    <Link 
                      to={`/portafolio/${proyecto.id}`} 
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

      {/* CTA Final */}
      <section className="container mx-auto px-6 pb-24 reveal-on-scroll">
        <div className="max-w-4xl mx-auto glass-panel border-nexus-accent/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-accent opacity-[0.03] rounded-full blur-[80px]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres que tu proyecto sea nuestro próximo caso de éxito?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            Hablemos sobre tus objetivos comerciales y diseñemos juntos una solución web interactiva que marque la diferencia.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex items-center justify-center btn-neon-cian px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
          >
            Iniciar Asesoría Gratuita
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
