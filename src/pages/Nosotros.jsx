import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Award, 
  Heart,
  Briefcase, 
  Globe, 
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  BadgeCheck,
  Zap,
  MessageSquare
} from 'lucide-react';

// Subcomponente de Conteo Animado que incrementa de 0 al valor actual al volverse visible
function AnimatedCounter({ value, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(value, 10);
          if (start === end) return;

          const totalMiliseconds = duration;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / totalMiliseconds, 1);
            // Easing suave (easeOutQuad)
            const easeProgress = progress * (2 - progress);
            
            const currentValue = Math.floor(easeProgress * end);
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

// Componente de Tarjeta de Miembro Interactiva 3D e Independiente
function MemberCard({ name, role, education, description, status, photoUrl, className = "" }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shadowStyle, setShadowStyle] = useState({});
  const [isTouched, setIsTouched] = useState(false);

  // Efecto dinámico con Giroscopio/Acelerómetro para móviles
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) return;

    const handleOrientation = (event) => {
      // Si el usuario está tocando activamente la tarjeta, el touch-move tiene prioridad sobre el giroscopio
      if (isTouched) return;

      const { beta, gamma } = event; // beta (inclinación adelante/atrás), gamma (izquierda/derecha)
      if (beta === null || gamma === null) return;

      // Suponemos una inclinación normal de lectura del celular de 60 grados para beta
      const targetBeta = Math.min(Math.max(beta, 30), 90); 
      const targetGamma = Math.min(Math.max(gamma, -30), 30);

      // Mapeo suave de rotación de 12 grados máx
      const rX = -((targetBeta - 60) / 30) * 12;
      const rY = (targetGamma / 30) * 12;

      setRotateX(rX);
      setRotateY(rY);
      setShadowStyle({
        boxShadow: `${-rY * 1.5}px ${rX * 1.5}px 30px rgba(59, 130, 246, 0.22)`,
        border: '1px solid rgba(59, 130, 246, 0.4)'
      });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [isTouched]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Posición del cursor relativa al centro de la tarjeta
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calcular grados de rotación (límite de 12 grados para control sutil)
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
    
    // Sombra dinámica opuesta al ratón para simular luz 3D
    setShadowStyle({
      boxShadow: `${-rY * 1.5}px ${rX * 1.5}px 30px rgba(59, 130, 246, 0.15)`,
      border: '1px solid rgba(59, 130, 246, 0.35)'
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShadowStyle({});
  };

  // Interactividad por arrastre táctil (Touch Events)
  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const touch = e.touches[0];
    const touchX = touch.clientX - rect.left - width / 2;
    const touchY = touch.clientY - rect.top - height / 2;

    // Aumentamos ligeramente la sensibilidad en touch (15 grados máx)
    const rX = -(touchY / (height / 2)) * 15;
    const rY = (touchX / (width / 2)) * 15;

    setRotateX(rX);
    setRotateY(rY);
    setShadowStyle({
      boxShadow: `${-rY * 1.8}px ${rX * 1.8}px 30px rgba(59, 130, 246, 0.25)`,
      border: '1px solid rgba(59, 130, 246, 0.45)',
      transform: 'scale(1.02)'
    });
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
    setRotateX(0);
    setRotateY(0);
    setShadowStyle({});
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? 'all 0.5s ease' : 'none',
        ...shadowStyle
      }}
      className={`w-full glass-panel border border-white/10 rounded-3xl p-6 relative flex flex-col items-center justify-between text-center select-none cursor-grab active:cursor-grabbing hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-shadow duration-300 md:hover:scale-[1.02] ${className}`}
    >
      {/* Glow decorativo de tarjeta */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-nexus-accent/10 opacity-5 rounded-full blur-[40px] pointer-events-none"></div>

      <div className="flex flex-col items-center w-full">
        {/* Avatar / Foto del integrante en Rectángulo Horizontal Cristalino con efecto de agua fluyendo */}
        <div className="w-44 h-28 rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#00d2ff] to-[#1e3a8a] p-[1.8px] mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.25)] relative overflow-hidden backdrop-blur-md border border-blue-500/20 avatar-water-border">
          {/* COMENTARIO DE EDICIÓN: En el futuro, reemplaza "photoUrl" o el valor por defecto '/logo2.png' con la ruta de la imagen real del integrante (ej. '/img/miembros/enmanuel.png') */}
          <img 
            src={photoUrl || '/logo2.png'} 
            alt={`Foto de ${name}`} 
            className="w-full h-full rounded-2xl object-cover bg-[#070a13]"
          />
          {status && (
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-nexus-dark flex items-center justify-center shadow-md" title={status}>
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
            </div>
          )}
        </div>

        <div>
          <span className="text-[9px] text-nexus-accent font-bold uppercase tracking-widest bg-nexus-accent/10 px-2.5 py-1 rounded-full border border-nexus-accent/20 block w-max mx-auto mb-3">
            {role}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">{name}</h3>
          <span className="text-[10px] text-nexus-purple font-semibold uppercase tracking-wider block mb-3">
            {education}
          </span>
          <p className="text-gray-400 text-xs leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* COMENTARIO DE EDICIÓN: Si necesitas agregar de nuevo los botones de redes sociales en el futuro, puedes insertar un contenedor flexible aquí con enlaces personalizados utilizando lucide-react o SVG. */}
    </div>
  );
}

export default function Nosotros() {
  const teamMembers = [
    {
      name: "J. Enmanuel",
      role: "CEO & Fundador",
      education: "Director General",
      description: "Líder ejecutivo con más de 5 años de trayectoria estructurando arquitecturas de negocio digitales de alta gama y consolidando alianzas comerciales estratégicas.",
      photoUrl: "/logo2.png", 
      status: "Director General"
    },
    {
      name: "Miguel Ortega",
      role: "CTO & Co-Fundador",
      education: "Director de Sistemas & Devops",
      description: "Arquitecto de infraestructura y sistemas cloud de alta disponibilidad, especializado en la escalabilidad de bases de datos de alto rendimiento y optimización de latencias globales.",
      photoUrl: "/logo2.png", 
      status: "Activo"
    },
    {
      name: "Gabriel Choque",
      role: "Director Creativo & UX/UI",
      education: "Diseñador Visual Principal",
      description: "Especialista en diseño de interfaces premium centrado en la psicología de la conversión y en la creación de flujos de interacción de fricción cero.",
      photoUrl: "/logo2.png", 
      status: "Activo"
    },
    {
      name: "Angel Apaza",
      role: "Jefe de Desarrollo & Tecnología 360°",
      education: "Lead Web Developer & 360° Specialist",
      description: "Ingeniero experto en computación gráfica (WebGL, Three.js), experiencias web inmersivas y dirección de levantamiento multimedia tridimensional.",
      photoUrl: "/logo2.png", 
      status: "Activo"
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Estilos para el efecto de agua fluyendo en el borde del avatar */}
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 relative z-10 text-center reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-nexus-accent/10 to-nexus-purple/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20 relative z-10">NOSOTROS</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight max-w-4xl mx-auto relative z-10">
          Transformamos tu visión en <span className="text-gradient-rise">autoridad digital</span> incontestable
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-12 leading-relaxed relative z-10">
          No diseñamos páginas genéricas ni clonamos plantillas. Desarrollamos arquitecturas web de alta fidelidad e interacciones 3D inmersivas para marcas y negocios donde la confianza, el rigor y la precisión matemática determinan cada conversión.
        </p>
      </section>

      {/* Visión, Valores e Historia */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          <div className="md:col-span-7 flex flex-col justify-center reveal-on-scroll">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium mb-6 w-fit">
              <Target className="w-3.5 h-3.5 text-nexus-accent" />
              <span>DISEÑO CON PROPÓSITO COMERCIAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ingeniería frontend diseñada para capturar la atención y generar confianza
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              En <strong>Nexus Rise</strong> sabemos que en sectores de alto valor (como el inmobiliario o el de salud), una web lenta o con diseño anticuado destruye la credibilidad al instante. Por eso, no nos limitamos a lo visual.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Fusionamos computación gráfica avanzada en tiempo real (WebGL), tomas aéreas hiper-realistas y recorridos interactivos 360° con una infraestructura técnica optimizada para SEO. El resultado es una experiencia de usuario rápida, envolvente y comercialmente orientada a la conversión.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-nexus-accent" />
                <span className="text-sm font-semibold text-white">Experiencias Inmersivas 3D</span>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-nexus-purple" />
                <span className="text-sm font-semibold text-white">Retorno de Inversión Claro</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 glass-panel animate-pulse-glow-white border-white/10 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center reveal-on-scroll reveal-delay-200">
            <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-nexus-accent/5 rounded-full blur-[50px] pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-4">¿Qué resolvemos por ti?</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Olvídate de coordinar con múltiples proveedores o lidiar con sistemas parchados. Te entregamos una solución robusta y unificada bajo una misma dirección estratégica de marca:
            </p>
            <ul className="text-gray-300 text-xs space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-nexus-accent/15 flex items-center justify-center text-nexus-accent font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                <span><strong>Desarrollo a medida premium</strong> optimizado para Google PageSpeed y posicionamiento SEO Local/Nacional e Internacional.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-nexus-accent/15 flex items-center justify-center text-nexus-accent font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                <span><strong>Multimedia 3D e Inmersivo</strong> con tours virtuales 360° interactivos incorporados sin afectar el rendimiento de carga.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-nexus-accent/15 flex items-center justify-center text-nexus-accent font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                <span><strong>Estrategias de Conversión</strong> que guían a tus usuarios hacia formularios, llamadas o WhatsApp mediante flujos pulidos de navegación.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Pilares de Confianza (NUEVA SECCIÓN) */}
      <section className="container mx-auto px-6 pb-24 relative z-10 border-t border-white/5 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
          <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20">GARANTÍA DE EJECUCIÓN</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4">
            Nuestros Pilares de Confiabilidad
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed">
            Eliminamos la incertidumbre y los vicios comunes de la industria tecnológica ofreciendo compromisos contractuales de calidad y entrega.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 rounded-3xl border-white/5 hover:border-nexus-accent/30 transition-all duration-300 relative group reveal-on-scroll">
            <div className="w-12 h-12 rounded-2xl bg-nexus-accent/10 flex items-center justify-center text-nexus-accent mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-white mb-3">Precisión en Tiempos</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cumplimos estrictamente las fechas de entrega pactadas por contrato. Implementamos metodologías ágiles transparentes que te permiten seguir el avance en tiempo real.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/5 hover:border-nexus-purple/30 transition-all duration-300 relative group reveal-on-scroll reveal-delay-150">
            <div className="w-12 h-12 rounded-2xl bg-nexus-purple/10 flex items-center justify-center text-nexus-purple mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-white mb-3">Cero Código Basura</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Evitamos constructores visuales inflados o lentos. Desarrollamos interfaces optimizadas a nivel de servidor (Next.js/React) para lograr puntuaciones excelentes de velocidad.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/5 hover:border-indigo-400/30 transition-all duration-300 relative group reveal-on-scroll reveal-delay-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-400/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-white mb-3">Trato Directo con Expertos</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sin intermediarios que distorsionen los requerimientos. Te comunicas de manera directa con los ingenieros e ingenieras que programan tu producto de software.
            </p>
          </div>
        </div>
      </section>

      {/* Logros en Cifras */}
      <section className="container mx-auto px-6 pb-20 relative z-10 border-t border-white/5 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border-white/5 text-center reveal-on-scroll">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-gradient-rise">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-gray-400 text-xs md:text-sm">Proyectos Entregados</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5 text-center reveal-on-scroll reveal-delay-100">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-gradient-rise">
                <AnimatedCounter value={98} suffix="%" />
              </div>
              <div className="text-gray-400 text-xs md:text-sm">Clientes Satisfechos</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5 text-center reveal-on-scroll reveal-delay-200">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-gradient-rise">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <div className="text-gray-400 text-xs md:text-sm">Años de Experiencia</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5 text-center reveal-on-scroll reveal-delay-300">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-gradient-rise">
                <AnimatedCounter value={200} suffix="%" />
              </div>
              <div className="text-gray-400 text-xs md:text-sm">Aumento Promedio en Conversiones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla Comparativa Premium */}
      <section className="container mx-auto px-6 pb-24 relative z-10 border-t border-white/5 pt-16 reveal-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase text-nexus-purple font-bold tracking-widest bg-nexus-purple/10 px-3 py-1 rounded-full border border-nexus-purple/20">COMPARATIVA</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-4">¿Por qué elegirnos frente a la competencia?</h2>
          </div>
          
          <div className="glass-panel border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-4 text-xs md:text-sm font-bold uppercase tracking-wider text-center">
              <div className="text-left pl-2">Característica</div>
              <div className="text-nexus-accent">✦ Nexus Rise</div>
              <div className="text-gray-400">Agencia Genérica</div>
            </div>
            
            <div className="divide-y divide-white/5 text-xs md:text-sm">
              <div className="grid grid-cols-3 p-4 items-center text-center">
                <div className="text-left font-semibold text-white pl-2">Especialistas en Inmobiliarias y Clínicas</div>
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Sí</div>
                <div className="text-rose-500 font-bold flex items-center justify-center gap-1.5"><XCircle className="w-4 h-4" /> No</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-center">
                <div className="text-left font-semibold text-white pl-2">Drones 360° y Tours Virtuales Integrados</div>
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Sí</div>
                <div className="text-rose-500 font-bold flex items-center justify-center gap-1.5"><XCircle className="w-4 h-4" /> No</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-center">
                <div className="text-left font-semibold text-white pl-2">Estrategia de Contenido & Copywriting</div>
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Sí</div>
                <div className="text-rose-500 font-bold flex items-center justify-center gap-1.5"><XCircle className="w-4 h-4" /> No</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-center">
                <div className="text-left font-semibold text-white pl-2">Reportes con Métricas Reales y Conversión</div>
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Sí</div>
                <div className="text-rose-500 font-bold flex items-center justify-center gap-1.5"><XCircle className="w-4 h-4" /> No</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-center">
                <div className="text-left font-semibold text-white pl-2">Soporte Post-Entrega Activo</div>
                <div className="text-emerald-400 font-bold flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Sí</div>
                <div className="text-gray-400 font-bold flex items-center justify-center gap-1.5">Opcional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="container mx-auto px-6 pb-24 relative z-10 border-t border-white/5 pt-20">
        <div className="max-w-6xl mx-auto text-center mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5 text-nexus-accent" />
            <span>EL EQUIPO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            El Talento Detrás de Cada Línea de Código
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-4">
            Un equipo multidisciplinario altamente calificado que combina metodologías avanzadas de desarrollo y pasión por la excelencia visual.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`reveal-on-scroll reveal-delay-${(index + 1) * 100} w-full flex`}
            >
              <MemberCard 
                name={member.name}
                role={member.role}
                education={member.education}
                description={member.description}
                photoUrl={member.photoUrl}
                status={member.status}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Valores Corporativos */}
      <section className="container mx-auto px-6 pb-24 border-t border-white/5 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 reveal-on-scroll">Los Valores que Guían Nuestro Código</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border-white/5 reveal-on-scroll">
              <Award className="w-8 h-8 text-nexus-accent mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2 text-sm">Excelencia Técnica</h4>
              <p className="text-gray-400 text-xs leading-relaxed">No comprometemos el rendimiento. Buscamos siempre puntajes perfectos en auditorías y Web Vitals.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5 reveal-on-scroll reveal-delay-200">
              <Heart className="w-8 h-8 text-nexus-purple mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2 text-sm">Transparencia Radical</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Trabajamos bajo líneas de tiempo claras y compartimos cada hito de desarrollo contigo de manera honesta.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5 reveal-on-scroll reveal-delay-400">
              <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2 text-sm">Innovación Constante</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Integramos las últimas tendencias visuales y tecnologías inmersivas Web3D para destacar tu marca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto glass-panel border-nexus-purple/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden reveal-on-scroll">
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-purple opacity-[0.03] rounded-full blur-[80px]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para llevar tu marca al siguiente nivel?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
            En 30 minutos analizamos tu negocio y te mostramos exactamente cómo podemos ayudarte. Sin compromiso y sin costos ocultos.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex items-center justify-center btn-neon-purple px-8 py-3.5 rounded-full font-bold transition-all duration-200 active:scale-95 group uppercase tracking-wider text-xs md:text-sm font-sans w-full sm:w-auto"
          >
            Agendar Consulta Gratis
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

