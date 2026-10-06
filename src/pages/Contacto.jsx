import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle,
  HelpCircle,
  Compass,
  Gavel,
  Check,
  ChevronDown,
  Camera,
  Share2,
  Building2,
  Sparkles,
  Calculator,
  Layers,
  Video,
  Globe,
  Laptop,
  Clock
} from 'lucide-react';
import { openSocialApp } from '../utils/deepLink';

export default function Contacto() {
  // Pestaña activa: 'vender' (Propietarios) | 'cotizador' (Empresas y Lotizaciones)
  const [activeTab, setActiveTab] = useState('cotizador');

  // Estados Formulario 1: Vender mi Propiedad (Propietarios)
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [email, setEmail] = useState(''); // Opcional
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [ubicacionPropiedad, setUbicacionPropiedad] = useState('');
  const [estadoLegal, setEstadoLegal] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isMensajeCustom, setIsMensajeCustom] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [whatsappLink, setWhatsappLink] = useState('');

  // Estados Formulario 2: Cotizador Interactivo según Tarifario Oficial de Nexus Domo 360
  const [cotizServicio, setCotizServicio] = useState('landing'); // 'landing' | 'corporativa' | 'catalogo' | 'escaneo'
  const [cotizEscaneoModalidad, setCotizEscaneoModalidad] = useState('individual'); // 'individual' (1 lote S/1000) | 'combo' (3 lotes S/2500)
  const [cotizPlanMensual, setCotizPlanMensual] = useState('ninguno'); // 'ninguno' | 'plan_a' | 'plan_b' | 'plan_c'
  const [cotizEmpresa, setCotizEmpresa] = useState('');
  const [cotizUbicacion, setCotizUbicacion] = useState('');
  const [cotizTelefono, setCotizTelefono] = useState('');
  const [cotizStatus, setCotizStatus] = useState('idle');

  // Actualizar el título de la página según la pestaña
  useEffect(() => {
    if (activeTab === 'cotizador') {
      document.title = "Cotizador Oficial de Servicios 360° & Web | Nexus Domo 360°";
    } else {
      document.title = "Vender mi Propiedad con Tecnología 3D | Angel Domo 360°";
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Cálculo exacto según la Estructura Oficial de Precios (Juliaca - Sur del Perú)
  const calcularPresupuesto = () => {
    let rango = { min: 0, max: 0, tiempo: '', entrega: '' };

    if (cotizServicio === 'landing') {
      rango = { min: 1200, max: 1500, tiempo: '1 a 2 semanas', descripcion: 'Landing Page / Perfil Profesional (Marca Personal)' };
    } else if (cotizServicio === 'corporativa') {
      rango = { min: 2500, max: 3500, tiempo: '3 a 5 semanas', descripcion: 'Página Web Corporativa Multi-pestaña' };
    } else if (cotizServicio === 'catalogo') {
      rango = { min: 4500, max: 6000, tiempo: '4 a 6 semanas', descripcion: 'Sistema Catálogo Domo 360° Multi-propiedad' };
    } else if (cotizServicio === 'escaneo') {
      if (cotizEscaneoModalidad === 'combo') {
        rango = { min: 2500, max: 2500, tiempo: '1 jornada de rodaje', descripcion: 'Paquete Combo: 3 Terrenos/Propiedades (Dron Mini 5 + Osmo 360)' };
      } else {
        rango = { min: 1000, max: 1000, tiempo: '1 jornada de rodaje', descripcion: 'Escaneo 360° + Dron (1 Terreno/Propiedad Nueva)' };
      }
    }

    let planRecurrente = null;
    if (cotizPlanMensual === 'plan_a') {
      planRecurrente = { nombre: 'Plan A: Soporte & Mantenimiento Esencial', costo: 'S/. 150 - S/. 250 / mes' };
    } else if (cotizPlanMensual === 'plan_b') {
      planRecurrente = { nombre: 'Plan B: Crecimiento & Posicionamiento Google/Maps', costo: 'S/. 600 - S/. 750 / mes' };
    } else if (cotizPlanMensual === 'plan_c') {
      planRecurrente = { nombre: 'Plan C: Proyectos 360° (Incluye 1 Escaneo Dron/360 mensual)', costo: 'S/. 1,250 / mes' };
    }

    return { ...rango, planRecurrente };
  };

  const handleCotizadorSubmit = (e) => {
    e.preventDefault();
    const cotiz = calcularPresupuesto();
    
    const serviciosNombres = {
      landing: 'Landing Page / Perfil Profesional (S/ 1,200 - S/ 1,500)',
      corporativa: 'Página Web Corporativa (S/ 2,500 - S/ 3,500)',
      catalogo: 'Sistema Catálogo Domo 360° (Desde S/ 4,500 a más)',
      escaneo: cotizEscaneoModalidad === 'combo' 
        ? 'Paquete Combo: 3 Terrenos en 1 jornada (S/ 2,500)' 
        : 'Escaneo 360° + Dron DJI Mini 5 para 1 Propiedad (S/ 1,000)'
    };

    let baseText = `Hola Angel, estuve en el cotizador interactivo de Nexus Domo 360° y me interesa el siguiente servicio:\n\n` +
      `*Servicio Principal:* ${serviciosNombres[cotizServicio]}\n` +
      `*Tiempo Estimado de Entrega:* ${cotiz.tiempo}\n` +
      `*Rango de Inversión:* ${cotiz.min === cotiz.max ? `S/. ${cotiz.min}` : `S/. ${cotiz.min} - S/. ${cotiz.max}`}\n`;

    if (cotiz.planRecurrente) {
      baseText += `*Plan de Mantenimiento Mensual:* ${cotiz.planRecurrente.nombre} (${cotiz.planRecurrente.costo})\n`;
    }

    if (cotizEmpresa) baseText += `*Empresa / Proyecto:* ${cotizEmpresa}\n`;
    if (cotizUbicacion) baseText += `*Ubicación:* ${cotizUbicacion}\n`;

    baseText += `\n¿Podemos coordinar una llamada o reunión para revisar detalles de mi proyecto?`;

    const url = `https://wa.me/51951300535?text=${encodeURIComponent(baseText)}`;
    window.open(url, '_blank');
  };

  // Autocompletar mensaje según las opciones seleccionadas
  useEffect(() => {
    if (isMensajeCustom) return;

    let nuevoMensaje = '';
    if (tipoPropiedad || ubicacionPropiedad || estadoLegal) {
      nuevoMensaje = `Deseo vender mi propiedad de tipo: ${tipoPropiedad || '______'}. ` +
        `Ubicada en: ${ubicacionPropiedad || '______'}. ` +
        `Estado legal: ${estadoLegal || '______'}. ` +
        `Me interesa coordinar la sesión multimedia 3D y video con dron gratis.`;
    }
    setMensaje(nuevoMensaje);
  }, [tipoPropiedad, ubicacionPropiedad, estadoLegal, isMensajeCustom]);

  // Función preventiva de sanitización contra ataques de inyección XSS
  const sanitizeInput = (val) => {
    if (typeof val !== 'string') return val;
    return val
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  const handleTelefonoChange = (e) => {
    const rawVal = e.target.value;
    setTelefono(rawVal);
    const val = rawVal.replace(/\s+/g, ''); // Quitar espacios

    if (val.startsWith('+')) {
      if (val.length < 11) {
        setTelefonoError('El número internacional parece muy corto');
      } else {
        setTelefonoError('');
      }
    } else {
      if (val.length > 0 && !/^[9]\d{8}$/.test(val)) {
        setTelefonoError('Debe empezar con 9 y tener exactamente 9 dígitos (Ej: 951300535)');
      } else {
        setTelefonoError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !tipoPropiedad || !ubicacionPropiedad || !estadoLegal || telefonoError) return;

    const sanitizedNombre = sanitizeInput(nombre);
    const sanitizedTelefono = sanitizeInput(telefono);
    const sanitizedMensaje = sanitizeInput(mensaje);
    const sanitizedUbicacion = sanitizeInput(ubicacionPropiedad);

    setStatus('submitting');
    
    const payload = {
      tipoContacto: 'Vender mi Propiedad (Propietario/B2C)',
      nombre: sanitizedNombre,
      telefono: sanitizedTelefono,
      email: sanitizeInput(email) || 'No especificado',
      tipoPropiedad: tipoPropiedad,
      ubicacionPropiedad: sanitizedUbicacion,
      estadoLegal: estadoLegal,
      mensaje: sanitizedMensaje
    };

    setTimeout(() => {
      console.log('Datos de venta registrados con éxito:', payload);
      
      const baseText = `Hola Angel, deseo solicitar una evaluación y fotos 3D gratis para vender mi propiedad. Aquí están los detalles:\n\n` +
        `*Nombre:* ${sanitizedNombre}\n` +
        `*Teléfono:* ${sanitizedTelefono}\n` +
        `*Correo:* ${email ? sanitizeInput(email) : 'No especificado'}\n` +
        `*Tipo de Inmueble:* ${tipoPropiedad}\n` +
        `*Ubicación:* ${sanitizedUbicacion}\n` +
        `*Estado Legal:* ${estadoLegal}\n` +
        `*Detalles:* ${sanitizedMensaje}`;

      const waUrl = `https://wa.me/51951300535?text=${encodeURIComponent(baseText)}`;
      setWhatsappLink(waUrl);
      setStatus('success');

      window.open(waUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setNombre('');
    setTelefono('');
    setTelefonoError('');
    setEmail('');
    setTipoPropiedad('');
    setUbicacionPropiedad('');
    setEstadoLegal('');
    setMensaje('');
    setIsMensajeCustom(false);
    setStatus('idle');
    setWhatsappLink('');
  };

  return (
    <div className="animate-fade-in font-sans pb-16 pt-24 md:pt-28">
      {/* 1. HEADER INTEGRADO COMPACTO CON SELECTOR DE PESTAÑAS */}
      <section className="container mx-auto px-6 mb-8 text-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-sky-400/10 rounded-full blur-[60px] pointer-events-none z-0"></div>
        
        {activeTab === 'cotizador' ? (
          <>
            <span className="text-[10px] uppercase text-[#008b99] font-black tracking-widest bg-[#008b99]/10 px-3 py-1.5 rounded-full border border-[#008b99]/30 relative z-10 inline-block font-display">
              COTIZADOR DIGITAL PARA EMPRESAS & LOTIZADORAS
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight max-w-3xl mx-auto relative z-10 font-display">
              Calcula el presupuesto de tu <span className="text-gradient-rise">Tour 360° o Portal Web</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed relative z-10 font-sans font-medium">
              Obtén una estimación inmediata según el alcance de tu proyecto y recibe atención prioritaria en WhatsApp de Ángel Domo 360°.
            </p>
          </>
        ) : (
          <>
            <span className="text-[10px] uppercase text-[#008b99] font-black tracking-widest bg-[#008b99]/10 px-3 py-1.5 rounded-full border border-[#008b99]/30 relative z-10 inline-block font-display">
              MARKETING INMOBILIARIO DE ÉLITE EN JULIACA
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight max-w-3xl mx-auto relative z-10 font-display">
              Agenda la producción multimedia de tu inmueble <span className="text-gradient-rise">a Costo Cero</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed relative z-10 font-sans font-medium">
              Diseñamos recorridos virtuales 360° fluidos y videos con dron profesionales gratis para captar compradores serios en todo el país, respaldando la venta con asesoría legal absoluta.
            </p>
          </>
        )}

        {/* SELECTOR DE PESTAÑAS */}
        <div className="flex justify-center mt-6">
          <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex flex-wrap justify-center gap-2 border border-slate-200/90 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('cotizador')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-display flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'cotizador'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Cotizador 360° & Web (Empresas / Lotizaciones)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vender')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-display flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'vender'
                  ? 'bg-white text-slate-900 shadow-md border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Camera className="w-4 h-4 text-[#008b99]" />
              <span>Vender mi Inmueble (Propietarios)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. FORMULARIO Y CANALES DE CONTACTO */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO SEGÚN PESTAÑA (lg:col-span-7) */}
          <div className="lg:col-span-7 border border-slate-200/90 rounded-3xl p-6 sm:p-8 bg-white backdrop-blur-md relative shadow-xl">
            {activeTab === 'cotizador' ? (
              /* ============================================================== */
              /* PESTAÑA 1: COTIZADOR INTERACTIVO 360 & WEB                     */
              /* ============================================================== */
              <div className="space-y-6">
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-[#008b99] flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5.5 h-5.5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900 font-display">Calculadora de Presupuesto 360°</h3>
                    <p className="text-[11px] text-slate-500 font-sans font-medium">Configura tu proyecto para generar una cotización instantánea personalizada.</p>
                  </div>
                </div>

                <form onSubmit={handleCotizadorSubmit} className="space-y-5 text-left">
                  {/* PASO 1: SERVICIO PRINCIPAL DE DESARROLLO O PRODUCCIÓN */}
                  <div>
                    <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display block mb-2">
                      1. Selecciona el Paquete o Servicio que deseas:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { 
                          id: 'landing', 
                          label: 'Landing Page / Perfil Profesional', 
                          tarifa: 'S/. 1,200 – S/. 1,500',
                          tiempo: 'Entrega: 1 a 2 semanas',
                          desc: 'Página web única de presentación digital y marca personal para agentes inmobiliarios y profesionales. Tu tarjeta de presentación virtual con foto, trayectoria, servicios, redes sociales y botón directo a tu WhatsApp.',
                          icon: Sparkles 
                        },
                        { 
                          id: 'corporativa', 
                          label: 'Página Web Corporativa', 
                          tarifa: 'S/. 2,500 – S/. 3,500',
                          tiempo: 'Entrega: 3 a 5 semanas',
                          desc: 'Sitio multi-pestaña (Inicio, Proyectos, Nosotros, Contacto, Equipo). Presencia institucional sólida para tu empresa.',
                          icon: Globe 
                        },
                        { 
                          id: 'catalogo', 
                          label: 'Sistema Catálogo Domo 360°', 
                          tarifa: 'Desde S/. 4,500 a más',
                          tiempo: 'Entrega: 4 a 6 semanas',
                          desc: 'Plataforma completa tipo catálogo con tarjetas de propiedades, buscador, mapas, fotos de dron y recorridos 360°.',
                          icon: Building2 
                        },
                        { 
                          id: 'escaneo', 
                          label: 'Solo Escaneo 360° + Dron', 
                          tarifa: cotizEscaneoModalidad === 'combo' ? 'S/. 2,500 (Combo 3 Lotes)' : 'S/. 1,000 (1 Lote)',
                          tiempo: 'Entrega: 1 jornada de rodaje',
                          desc: 'Tomas aéreas con Dron DJI Mini 5 + Fotografía 360° con Osmo 360 + Integración directa en tu web existente.',
                          icon: Video 
                        }
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = cotizServicio === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setCotizServicio(item.id)}
                            className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-50/80 border-[#008b99] shadow-md ring-2 ring-[#008b99]/30'
                                : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/70'
                            }`}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-[#008b99] text-white shadow-sm' : 'bg-slate-200 text-slate-700'}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <p className={`text-xs font-bold ${isSelected ? 'text-[#008b99]' : 'text-slate-900'}`}>{item.label}</p>
                                <span className="inline-block mt-0.5 text-[11px] font-mono font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                                  {item.tarifa}
                                </span>
                              </div>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed mb-2">{item.desc}</p>
                            <span className="text-[9px] font-mono text-slate-400 border-t border-slate-200/70 pt-1.5 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-cyan-600" /> {item.tiempo}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* SUB-SELECTOR: MODALIDAD PARA ESCANEO 360 + DRON */}
                  {cotizServicio === 'escaneo' && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left">
                      <label className="text-[10px] text-amber-900 font-bold uppercase tracking-wider font-display block mb-2">
                        Modalidad de Escaneo Multimedia:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setCotizEscaneoModalidad('individual')}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                            cotizEscaneoModalidad === 'individual'
                              ? 'bg-amber-500 text-black border-amber-500 shadow-sm'
                              : 'bg-white border-amber-200 text-slate-800'
                          }`}
                        >
                          1 Propiedad Nueva (S/. 1,000)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCotizEscaneoModalidad('combo')}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                            cotizEscaneoModalidad === 'combo'
                              ? 'bg-amber-500 text-black border-amber-500 shadow-sm'
                              : 'bg-white border-amber-200 text-slate-800'
                          }`}
                        >
                          Paquete Combo: 3 Lotes (S/. 2,500)
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PASO 2: PLAN DE MANTENIMIENTO & SOPORTE MENSUAL (OPCIONAL) */}
                  <div>
                    <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display block mb-2">
                      2. Plan de Suscripción Mensual (Opcional):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { 
                          id: 'ninguno', 
                          label: 'Sin suscripción mensual', 
                          tarifa: 'Solo pago único del proyecto',
                          desc: 'Entrega final sin servicio de mantenimiento recurrente.' 
                        },
                        { 
                          id: 'plan_a', 
                          label: 'Plan A: Soporte & Mantenimiento', 
                          tarifa: 'S/. 150 – S/. 250 / mes',
                          desc: 'Hosting + SSL + Backups semanales + Monitoreo 24/7 + hasta 2 cambios menores al mes.' 
                        },
                        { 
                          id: 'plan_b', 
                          label: 'Plan B: Crecimiento & SEO Web', 
                          tarifa: 'S/. 600 – S/. 750 / mes',
                          desc: 'Todo el Plan A + Ubicación Maps, contacto y posicionamiento en Google.' 
                        },
                        { 
                          id: 'plan_c', 
                          label: 'Plan C: Proyectos 360° Activos', 
                          tarifa: 'S/. 1,250 / mes',
                          desc: 'Servidor veloz optimizado para 360° + hasta 5 tours activos + 1 ESCANEO CON DRON Y CÁMARA 360° MENSUAL INCLUIDO.' 
                        }
                      ].map((plan) => {
                        const isSelected = cotizPlanMensual === plan.id;
                        return (
                          <button
                            key={plan.id}
                            type="button"
                            onClick={() => setCotizPlanMensual(plan.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-800'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <p className="text-xs font-bold flex items-center justify-between">
                              <span>{plan.label}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                            </p>
                            <p className={`text-[10px] font-mono mt-0.5 font-bold ${isSelected ? 'text-cyan-300' : 'text-emerald-700'}`}>
                              {plan.tarifa}
                            </p>
                            <p className={`text-[9px] mt-1 leading-tight ${isSelected ? 'text-gray-300' : 'text-slate-500'}`}>
                              {plan.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* DATOS DE CONTACTO OPCIONALES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-600 font-bold uppercase font-display">Empresa o Nombre del Proyecto</label>
                      <input 
                        type="text" 
                        value={cotizEmpresa} 
                        onChange={(e) => setCotizEmpresa(e.target.value)} 
                        placeholder="Ej: Inmobiliaria Horizonte / Loteo Las Flores"
                        className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#008b99]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] text-slate-600 font-bold uppercase font-display">Ubicación del Proyecto</label>
                      <input 
                        type="text" 
                        value={cotizUbicacion} 
                        onChange={(e) => setCotizUbicacion(e.target.value)} 
                        placeholder="Ej: Juliaca / Salida Arequipa / Puno"
                        className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#008b99]"
                      />
                    </div>
                  </div>

                  {/* BANNER DE RESULTADO EN VIVO CON TARIFAS OFICIALES */}
                  {(() => {
                    const res = calcularPresupuesto();
                    return (
                      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d1627] to-slate-900 text-white shadow-xl border border-cyan-500/30">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-300 font-bold block mb-1">
                              INVERSIÓN OFICIAL (PAGO ÚNICO)
                            </span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl sm:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
                                {res.min === res.max ? `S/. ${res.min}` : `S/. ${res.min} - S/. ${res.max}`}
                              </span>
                              <span className="text-xs text-slate-400 font-mono">PEN</span>
                            </div>
                            <p className="text-[10px] text-gray-300 font-mono mt-1">
                              ⏱️ Tiempo de entrega: <strong className="text-cyan-300">{res.tiempo}</strong>
                            </p>
                          </div>
                          <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4">
                            {res.planRecurrente ? (
                              <>
                                <span className="text-[9px] uppercase font-mono tracking-wider text-purple-300 block">Suscripción Mensual:</span>
                                <span className="text-xs font-bold text-white block">{res.planRecurrente.nombre}</span>
                                <span className="text-[11px] font-mono text-emerald-400 font-bold block">{res.planRecurrente.costo}</span>
                              </>
                            ) : (
                              <>
                                <span className="text-[10px] text-slate-400 block font-mono">
                                  {cotizServicio === 'landing' ? '✓ Enlaces a Redes + WhatsApp Directo' : '✓ Dron DJI Mini 5 + Osmo 360'}
                                </span>
                                <span className="text-[10px] text-emerald-400 font-bold font-mono">✓ Garantía y soporte técnico</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* POLÍTICA DE PAGO OFICIAL */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-mono flex items-center justify-between">
                    <span>💳 Forma de pago oficial:</span>
                    <span className="font-bold text-slate-800">50% Anticipo · 30% Avance · 20% Entrega</span>
                  </div>

                  {/* BOTÓN ENVIAR COTIZACIÓN A WHATSAPP */}
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-4 py-3.5 sm:py-4 rounded-xl font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 cursor-pointer shadow-lg uppercase tracking-wider text-xs md:text-sm font-display text-center"
                  >
                    <svg 
                      className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 fill-slate-950" 
                      viewBox="0 0 448 512" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    <span className="text-center leading-snug">
                      ENVIAR COTIZACIÓN A WHATSAPP DE ÁNGEL DOMO 360 ➔
                    </span>
                  </button>
                </form>
              </div>
            ) : status !== 'success' ? (
              /* ============================================================== */
              /* PESTAÑA 2: FICHA TÉCNICA PARA VENDER PROPIEDAD (PROPIETARIOS)  */
              /* ============================================================== */
              <div className="space-y-6">
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-[#008b99] flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5.5 h-5.5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900 font-display">Ficha Técnica de Evaluación</h3>
                    <p className="text-[11px] text-slate-500 font-sans font-medium">Ingresa los datos para estructurar la producción 360° y saneamiento legal.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Fila 1: Nombre y Teléfono */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Nombre Completo</label>
                      <input 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej: María Pérez"
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#008b99] focus:ring-1 focus:ring-[#008b99]/35 transition-all font-sans font-medium"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        value={telefono}
                        onChange={handleTelefonoChange}
                        placeholder="Ej: 951 300 535"
                        className={`bg-slate-50 border rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all font-sans font-medium ${
                          telefonoError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/25' : 'border-slate-200 focus:border-[#008b99] focus:ring-[#008b99]/35'
                        }`}
                        required
                      />
                      {telefonoError && (
                        <span className="text-[10px] text-red-600 font-bold tracking-wide animate-fade-in-up mt-1">{telefonoError}</span>
                      )}
                    </div>
                  </div>

                  {/* Fila 2: Correo y Tipo de Propiedad */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Correo Electrónico <span className="text-slate-400 font-normal lowercase">(opcional)</span></label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej: maria@correo.com"
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#008b99] focus:ring-1 focus:ring-[#008b99]/35 transition-all font-sans font-medium"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 relative">
                      <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Tipo de Propiedad</label>
                      <select 
                        value={tipoPropiedad}
                        onChange={(e) => setTipoPropiedad(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#008b99] focus:ring-1 focus:ring-[#008b99]/35 transition-all font-sans appearance-none pr-10 cursor-pointer font-medium"
                        required
                      >
                        <option value="" disabled className="bg-white text-slate-900">Selecciona tipo de inmueble</option>
                        <option value="Terreno / Lote de campo" className="bg-white text-slate-900">Terreno / Lote</option>
                        <option value="Casa Residencial" className="bg-white text-slate-900">Casa Residencial</option>
                        <option value="Departamento" className="bg-white text-slate-900">Departamento</option>
                        <option value="Local Comercial / Otro" className="bg-white text-slate-900">Local / Oficina Comercial</option>
                      </select>
                      <div className="absolute right-4 bottom-3 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Fila 3: Ubicación y Estado Legal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Ubicación del Inmueble</label>
                      <input 
                        type="text" 
                        value={ubicacionPropiedad}
                        onChange={(e) => setUbicacionPropiedad(e.target.value)}
                        placeholder="Ej: Salida a Huancané Km 4, Juliaca"
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#008b99] focus:ring-1 focus:ring-[#008b99]/35 transition-all font-sans font-medium"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 relative">
                      <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Estado Legal</label>
                      <select 
                        value={estadoLegal}
                        onChange={(e) => setEstadoLegal(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#008b99] focus:ring-1 focus:ring-[#008b99]/35 transition-all font-sans appearance-none pr-10 cursor-pointer font-medium"
                        required
                      >
                        <option value="" disabled className="bg-white text-slate-900">Selecciona la situación legal</option>
                        <option value="Inscrita en SUNARP (Título de propiedad limpio)" className="bg-white text-slate-900">Inscrita en SUNARP (Título limpio)</option>
                        <option value="En proceso de independización / Minuta" className="bg-white text-slate-900">En proceso / Minuta de Posesión</option>
                        <option value="Derechos y acciones" className="bg-white text-slate-900">Derechos y Acciones</option>
                        <option value="Otra situación legal" className="bg-white text-slate-900">Otra Situación Legal</option>
                      </select>
                      <div className="absolute right-4 bottom-3 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Mensaje / Detalles */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-[10px] text-slate-600 font-bold uppercase tracking-wider font-display">Mensaje / Detalles Adicionales</label>
                    <textarea 
                      value={mensaje}
                      onChange={(e) => {
                        setMensaje(e.target.value);
                        setIsMensajeCustom(true);
                      }}
                      placeholder="Deseo vender mi casa de 2 pisos. Cuenta con título inscrito en SUNARP. Me interesa la sesión de fotos 360° y video con dron gratis..."
                      rows="4"
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#008b99] focus:ring-1 focus:ring-[#008b99]/35 transition-all resize-none font-sans font-medium"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting' || !!telefonoError}
                    className="w-full bg-slate-900 text-white hover:bg-[#00c4ee] hover:text-black py-4 rounded-xl font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider text-xs md:text-sm font-display mt-4 cursor-pointer shadow-md"
                  >
                    {status === 'submitting' ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <span>SOLICITAR EVALUACIÓN Y FOTOS 3D GRATIS ➔</span>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center flex flex-col items-center justify-center py-12 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-500/20 shadow-md">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">¡Solicitud Registrada!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-8 font-sans font-medium">
                  Hemos registrado los detalles de tu propiedad. Te hemos redirigido a WhatsApp para enviar el mensaje con los detalles al asesor inmobiliario en Juliaca.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-black hover:bg-[#20ba5a] rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md font-display"
                  >
                    Abrir WhatsApp Manualmente
                  </a>
                  <button 
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 uppercase tracking-wider font-display"
                  >
                    Registrar otra propiedad
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA: CANALES RÁPIDOS Y MAPA (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Canales Directos */}
            <div className="border border-slate-200/90 rounded-3xl p-6 flex flex-col gap-4 bg-white shadow-md">
              <h3 className="text-slate-900 font-bold text-base mb-2 uppercase tracking-wider font-display">Canales de Atención</h3>
              
              <a 
                href="https://wa.me/51951300535?text=Hola%20Angel%2C%20deseo%20hacer%20una%20consulta%20inmobiliaria."
                onClick={(e) => openSocialApp(e, 'whatsapp', 'Hola Angel, deseo hacer una consulta inmobiliaria.')}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition duration-150 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-[#25D366] text-white shadow-sm flex items-center justify-center">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-display">WhatsApp Corporativo</h4>
                  <p className="text-[10px] text-slate-600 font-sans font-medium">Atención instantánea por chat.</p>
                </div>
              </a>

              <a href="mailto:nexus.agencia360@gmail.com?subject=Consulta%20Nexus" className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100 transition duration-150 group cursor-pointer">
                <div className="p-2.5 rounded-xl bg-purple-700 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-display">Correo Electrónico</h4>
                  <p className="text-[10px] text-slate-600 font-sans font-medium">nexus.agencia360@gmail.com</p>
                </div>
              </a>

              <a href="tel:+51951300535" className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100 transition duration-150 group cursor-pointer">
                <div className="p-2.5 rounded-xl bg-slate-800 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-display">Línea Directa</h4>
                  <p className="text-[10px] text-slate-600 font-sans font-medium">+51 951 300 535</p>
                </div>
              </a>
            </div>

            {/* Sede Central (SEO Local en Juliaca, Perú) */}
            <div className="border border-slate-200/90 rounded-3xl p-6 bg-white shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-sky-400/10 rounded-full blur-[50px] pointer-events-none"></div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2.5 text-[10px] font-bold text-[#008b99] uppercase tracking-widest font-display">
                  <Compass className="w-3.5 h-3.5 text-[#008b99]" />
                  <span>Sede Central</span>
                </div>
                <h3 className="text-slate-900 font-bold text-base md:text-lg mb-2 font-display">Juliaca, Perú</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium">
                  Nuestra oficina central de coordinación de habilitación urbana, levantamientos topográficos en campo y soporte digital inmobiliario está ubicada en la ciudad de <strong>Juliaca, Perú</strong>, permitiéndonos consolidar nuestra presencia física y legal en el departamento de Puno.
                </p>
              </div>

              {/* Contenedor de Google Maps Responsivo */}
              <div className="w-full h-44 bg-slate-100 border border-slate-200 rounded-2xl relative overflow-hidden shadow-inner group/map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5697.505940433812!2d-70.13363217418762!3d-15.49384603421494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2spe!4v1791312729866!5m2!1ses!2spe" 
                  className="w-full h-full border-0 rounded-2xl opacity-90 group-hover/map:opacity-100 transition-opacity duration-300" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ubicación Nexus Domo 360° en el Centro de Juliaca, Perú"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
