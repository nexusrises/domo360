import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle,
  HelpCircle,
  Compass,
  MessageCircle,
  ShieldCheck,
  Clock,
  Zap,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [servicio, setServicio] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  // Enlazar automáticamente el servicio seleccionado con el rango de presupuesto correspondiente
  const handleServicioChange = (val) => {
    setServicio(val);
    switch (val) {
      case 'landing':
        setPresupuesto('S/. 1,700 - S/. 2,400');
        break;
      case 'salud':
        setPresupuesto('S/. 2,500 - S/. 4,400');
        break;
      case 'inmobiliaria':
        setPresupuesto('S/. 4,500 - S/. 5,400');
        break;
      case 'enterprise':
        setPresupuesto('S/. 5,500 - S/. 10,000');
        break;
      case 'otro':
        setPresupuesto('S/. 11,000+');
        break;
      default:
        break;
    }
  };

  // Enlazar automáticamente el presupuesto seleccionado con el servicio de interés correspondiente
  const handlePresupuestoChange = (val) => {
    setPresupuesto(val);
    switch (val) {
      case 'S/. 1,700 - S/. 2,400':
        setServicio('landing');
        break;
      case 'S/. 2,500 - S/. 4,400':
        setServicio('salud');
        break;
      case 'S/. 4,500 - S/. 5,400':
        setServicio('inmobiliaria');
        break;
      case 'S/. 5,500 - S/. 10,000':
        setServicio('enterprise');
        break;
      case 'S/. 11,000+':
        setServicio('otro');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.title = "Agenda tu Diagnóstico Gratuito | Nexus Rise";
  }, []);

  // Función preventiva de sanitización contra ataques de inyección XSS en el frontend
  const sanitizeInput = (val) => {
    if (typeof val !== 'string') return val;
    return val
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !telefono || !servicio) return;

    // Sanitización proactiva de los campos del formulario
    const sanitizedNombre = sanitizeInput(nombre);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedTelefono = sanitizeInput(telefono);
    const sanitizedEmpresa = sanitizeInput(empresa);
    const sanitizedMensaje = sanitizeInput(mensaje);

    setStatus('submitting');
    setTimeout(() => {
      // Simulación de envío
      console.log('Datos de contacto sanitizados de forma segura:', {
        nombre: sanitizedNombre,
        email: sanitizedEmail,
        telefono: sanitizedTelefono,
        empresa: sanitizedEmpresa,
        servicio,
        presupuesto,
        mensaje: sanitizedMensaje
      });
      setStatus('success');
    }, 2000);
  };

  const handleReset = () => {
    setNombre('');
    setEmail('');
    setTelefono('');
    setEmpresa('');
    setServicio('');
    setPresupuesto('');
    setMensaje('');
    setStatus('idle');
  };

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-12 relative z-10 text-center reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-nexus-accent/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
        <span className="text-xs uppercase text-nexus-accent font-bold tracking-widest bg-nexus-accent/10 px-3 py-1 rounded-full border border-nexus-accent/20 relative z-10">CONTACTO</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight max-w-4xl mx-auto relative z-10">
          Inicia tu <span className="text-gradient-rise">Diagnóstico Gratuito</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-12 leading-relaxed relative z-10">
          Cuéntanos sobre tu negocio. Diseñaremos una propuesta de secciones clave a medida, cotización y plazos de entrega sin costo ni compromiso.
        </p>
      </section>

      {/* Formulario y Canales / Datos de contacto */}
      <section className="container mx-auto px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          
          {/* Formulario Interactivo (3 columnas) */}
          <div className="lg:col-span-3 glass-panel border-white/10 rounded-3xl p-8 relative flex flex-col justify-between reveal-on-scroll">
            <div className="absolute top-0 right-0 w-48 h-48 bg-nexus-accent/5 rounded-full blur-[50px] pointer-events-none"></div>
            
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-2xl bg-nexus-accent/10 text-nexus-accent">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Háblanos sobre tu proyecto</h3>
                      <p className="text-xs text-gray-400">Precios y plazos transparentes garantizados por contrato escrito.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Nombre */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Nombre Completo</label>
                      <input 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej: Alejandro Silva"
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Correo Electrónico</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej: alejandro@empresa.com"
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Teléfono */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ej: +51 951 300 535"
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all"
                        required
                      />
                    </div>

                    {/* Empresa */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Empresa / Negocio (Opcional)</label>
                      <input 
                        type="text" 
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        placeholder="Ej: Clinica Dental o Inmobiliaria"
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Servicio que necesita */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Servicio de Interés</label>
                      <select 
                        value={servicio}
                        onChange={(e) => handleServicioChange(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all"
                        required
                      >
                        <option value="" disabled className="bg-[#0b0f19]">Selecciona una solución</option>
                        <option value="landing" className="bg-[#0b0f19]">Landing Page de Conversión</option>
                        <option value="salud" className="bg-[#0b0f19]">Página Web Corporativa</option>
                        <option value="inmobiliaria" className="bg-[#0b0f19]">Solución Inmobiliaria 360</option>
                        <option value="enterprise" className="bg-[#0b0f19]">Desarrollo Enterprise Medida</option>
                        <option value="otro" className="bg-[#0b0f19]">Mantenimiento o Consultoría Externa</option>
                      </select>
                      <span className="text-[10px] text-gray-500 font-medium">Precios y plazos extraídos directamente de nuestra metodología.</span>
                    </div>

                    {/* Rango de Presupuesto */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Mi Presupuesto (S/.)</label>
                      <select 
                        value={presupuesto}
                        onChange={(e) => handlePresupuestoChange(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all"
                        required
                      >
                        <option value="" disabled className="bg-[#0b0f19]">Selecciona su presupuesto</option>
                        <option value="S/. 1,700 - S/. 2,400" className="bg-[#0b0f19]">S/. 1,700 - S/. 2,400</option>
                        <option value="S/. 2,500 - S/. 4,400" className="bg-[#0b0f19]">S/. 2,500 - S/. 4,400</option>
                        <option value="S/. 4,500 - S/. 5,400" className="bg-[#0b0f19]">S/. 4,500 - S/. 5,400</option>
                        <option value="S/. 5,500 - S/. 10,000" className="bg-[#0b0f19]">S/. 5,500 - S/. 10,000</option>
                        <option value="S/. 11,000+" className="bg-[#0b0f19]">S/. 11,000 a más</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-2 mb-6">
                    <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Detalles Adicionales del Proyecto</label>
                    <textarea 
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Ej: Necesitamos 10 propiedades con tours interactivos en 3D, pasarela de pagos, o integración con CRM..."
                      rows="4"
                      className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent/35 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full btn-neon-cian py-4 rounded-xl font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider text-xs md:text-sm font-sans"
                >
                  {status === 'submitting' ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Solicitar Diagnóstico Gratuito</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center flex flex-col items-center justify-center h-full py-16 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Recibida!</h3>
                <p className="text-gray-400 text-sm max-w-sm mb-8">
                  Hemos registrado tus datos. Nuestro equipo analizará tu rubro y te contactará en un plazo máximo de 24 horas hábiles para coordinar la reunión o videollamada.
                </p>
                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-white/10 hover:border-nexus-accent/40 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 uppercase tracking-wider"
                >
                  Enviar otra solicitud
                </button>
              </div>
            )}

          </div>

          {/* Información y Mapa (2 columnas) */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-between">
            
            {/* Canales Directos */}
            <div className="glass-panel border-white/10 rounded-3xl p-6 flex flex-col gap-4 reveal-on-scroll reveal-delay-150">
              <h3 className="text-white font-bold text-base mb-2 uppercase tracking-wider">Contacto Directo</h3>
              
              <a href="https://wa.me/51951300535?text=Hola%20Nexus%20Rise,%20me%20gustar%C3%ADa%20agendar%20una%20asesor%C3%ADa%20gratuita." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#09d261]/10 text-[#09d261] hover:bg-[#09d261]/20 border border-[#09d261]/15 transition duration-150 group">
                <div className="p-2 rounded-xl bg-[#09d261] text-white">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.573 1.453 5.361 1.454h.005c5.548 0 10.067-4.515 10.07-10.066.002-2.687-1.043-5.216-2.946-7.12C17.228 1.517 14.7 .472 12.013.472c-5.55 0-10.069 4.515-10.073 10.066-.001 2.036.53 4.02 1.536 5.761l-.183-.284-1.01 3.687 3.774-.99-.262-.156zM15.968 13.09c-.258-.129-1.528-.755-1.765-.84-.237-.086-.41-.129-.582.129t-.667.84c-.161.183-.323.205-.582.076-1.018-.51-1.838-.909-2.548-1.517-.547-.468-.847-1.01-.98-1.242-.132-.233-.014-.359.104-.475.106-.104.237-.276.355-.414.119-.138.158-.233.237-.388.08-.155.04-.293-.02-.422-.06-.129-.582-1.402-.797-1.919-.21-.504-.44-.435-.582-.442l-.497-.008c-.172 0-.452.065-.688.323-.237.258-.905.884-.905 2.155s.927 2.496 1.056 2.668c.13.172 1.824 2.785 4.42 3.904.618.266 1.1.424 1.477.544.62.197 1.185.169 1.631.102.497-.075 1.528-.625 1.744-1.23.215-.603.215-1.12.15-1.23-.064-.11-.236-.174-.495-.304z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-white">WhatsApp Corporativo</h4>
                  <p className="text-[11px] text-gray-400">Respuesta rápida por chat el mismo día.</p>
                </div>
              </a>

              <a href="mailto:contacto@nexusrise.com?subject=Consulta%20sobre%20Desarrollo%20Web%20-%20Nexus%20Rise" className="flex items-center gap-3.5 p-3 rounded-2xl bg-nexus-purple/10 text-nexus-purple border border-nexus-purple/15 hover:bg-nexus-purple/20 transition duration-150 group">
                <div className="p-2 rounded-xl bg-nexus-purple text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-white">Correo Electrónico</h4>
                  <p className="text-[11px] text-gray-400">contacto@nexusrise.com</p>
                </div>
              </a>

              <a href="tel:+51951300535" className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:border-white/15 transition duration-150 group">
                <div className="p-2 rounded-xl bg-white/5 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-white">Línea Directa Telefónica</h4>
                  <p className="text-[11px] text-gray-400">+51 951 300 535</p>
                </div>
              </a>
            </div>

            {/* Mapa de Google Maps */}
            <div className="glass-panel border-white/10 rounded-3xl p-6 flex-1 flex flex-col justify-between min-h-[250px] relative overflow-hidden reveal-on-scroll reveal-delay-300">
              <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-nexus-accent opacity-[0.03] rounded-full blur-[50px] pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  <Compass className="w-3.5 h-3.5 text-nexus-accent" />
                  <span>Sede Central</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Juliaca, Perú</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Brindamos consultoría y desarrollo a empresas en todo Latinoamérica con total transparencia de costos y metodologías ágiles.
                </p>
              </div>

              {/* Contenedor de Google Maps Real y Responsivo */}
              <div className="w-full h-52 bg-nexus-dark border border-white/10 rounded-2xl mt-4 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] group/map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5968.414272319901!2d-70.13478994714418!3d-15.497418550135656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f3e5361625b9%3A0x2a1629113760cbfc!2sJuliaca!5e1!3m2!1ses!2spe!4v1780340457115!5m2!1ses!2spe" 
                  className="w-full h-full border-0 rounded-2xl opacity-75 group-hover/map:opacity-100 transition-opacity duration-300" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Nexus Rise en Juliaca, Perú"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
