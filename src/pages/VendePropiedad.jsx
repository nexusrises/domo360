import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  FileCheck2, 
  Ruler,
  Camera, 
  Landmark,
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Home,
  MapPin,
  TrendingUp,
  Send,
  Lock,
  PhoneCall
} from 'lucide-react';
import { openSocialApp, getSocialUrl } from '../utils/deepLink';

export default function VendePropiedad() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Formulario Híbrido Rápido
  const [tipoInmueble, setTipoInmueble] = useState('Terreno / Lote');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [formError, setFormError] = useState('');

  const soluciones = [
    {
      step: "Fase 1",
      title: "1. Acuerdo de Promoción y Exclusividad",
      badge: "Cero Riesgo Financiero",
      description: "Firmamos un contrato interno de promoción exclusiva y corretaje claro y transparente. Sin trámites burocráticos iniciales ni pagos anticipados. Asumimos el 100% de la inversión en marketing 360°, dron y tiempo para defender el verdadero valor comercial de tu predio.",
      image: "/casa_cartel_juliaca.jpg",
      highlight: "Inversión 100% asumida por Nexus Domo. Si no vendemos, no pagas nada.",
      icon: <FileCheck2 className="w-5 h-5" />
    },
    {
      step: "Fase 2",
      title: "2. Estudio Registral SUNARP y Medición Técnica",
      badge: "Verificación de Títulos",
      description: "Como tu socio legal y técnico, auditamos la Partida Registral en SUNARP (CRI, gravámenes, hipotecas y sociedad conyugal/herederos). Al mismo tiempo, nuestro equipo de campo mide con wincha y distanciómetro en el terreno para que los linderos reales cuadren con el plano.",
      image: "/medicion_peritaje_juliaca.jpg",
      highlight: "Evita que un comprador bancario te rechace el trato por discrepancias de metraje.",
      icon: <Ruler className="w-5 h-5" />
    },
    {
      step: "Fase 3",
      title: "3. Producción 360° y Venta a Capitales Estratégicos",
      badge: "Alcance Macrorregional",
      description: "Digitalizamos tu propiedad con tours virtuales 360° interactivos y tomas panorámicas con dron 4K. Conectamos directamente con empresarios del comercio, contratistas y trabajadores de campamentos mineros de todo el sur (Puno, Tacna, Moquegua, Arequipa, Bolivia) que buscan invertir en el polo del Puerto Seco de Juliaca.",
      image: "/lotes_dron_juliaca.jpg",
      highlight: "Compradores con capital listo exploran tu propiedad a distancia y deciden rápido.",
      icon: <Camera className="w-5 h-5" />
    },
    {
      step: "Fase 4",
      title: "4. Cierre Notarial con Pago 100% Garantizado",
      badge: "Seguridad y Dinero en Mano",
      description: "Te acompañamos y asesoramos hasta el último minuto en la Notaría Pública. La firma de la Escritura Pública se realiza con Cheque de Gerencia bancarizado o abono verificado. No se entrega la posesión ni las llaves del inmueble hasta que tengas la totalidad de tu dinero en tu cuenta bancaria.",
      image: "/notaria_firma_juliaca.jpg",
      highlight: "Cierre transparente, asesoría personalizada y pago asegurado ante Notario.",
      icon: <Landmark className="w-5 h-5" />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === soluciones.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? soluciones.length - 1 : prev - 1));
  };

  useEffect(() => {
    document.title = "Vende tu Terreno o Casa en Juliaca y Puno | Nexus Domo 360";
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    if (!cleanNumber || cleanNumber.length < 8) {
      setFormError('Por favor ingresa un número de WhatsApp válido.');
      return;
    }
    setFormError('');
    const mensaje = `Hola Nexus Domo, deseo solicitar una evaluación gratuita para vender mi propiedad.\n\n*Tipo de Inmueble:* ${tipoInmueble}\n*Mi WhatsApp:* ${cleanNumber}\n\nPor favor contáctenme para coordinar la visita técnica y asesoría registral.`;
    openSocialApp(e, 'whatsapp', mensaje);
  };

  const faqs = [
    {
      question: "¿Cómo me ayuda Nexus Domo si mis papeles en SUNARP tienen observaciones o están incompletos?",
      answer: "No te dejamos solo ante la burocracia. Como tu socio inmobiliario, realizamos una revisión registral inicial sin costo: analizamos la Partida Electrónica, identificamos si faltan actualizar datos de estado civil, levantar gravámenes antiguos o regularizar declaratorias de fábrica. Te guiamos paso a paso sobre el trámite exacto a realizar para que tu propiedad quede 100% apta y ningún banco o comprador formal rechace la compra."
    },
    {
      question: "¿Qué pasa si las medidas reales en mi terreno no coinciden con lo que dice el documento de SUNARP?",
      answer: "Es una situación muy común en Juliaca y Puno debido al rápido crecimiento urbano. En Nexus Domo no esperamos a que un comprador descubra el error y cancele el trato. Nuestro equipo técnico va al terreno con wincha y distanciómetro para verificar linderos y colindancias reales. Si hay discrepancias, te orientamos en la rectificación técnica antes de negociar, protegiéndote de conflictos futuros."
    },
    {
      question: "¿Por qué firmamos un contrato interno de promoción exclusiva y cómo me beneficia como dueño?",
      answer: "El contrato interno de exclusividad es un acuerdo de confianza mutua. Al contar con exclusividad, nosotros asumimos el 100% de la inversión y el riesgo: producción de tomas aéreas con dron, escaneo 360°, planos comerciales y pauta publicitaria dirigida a compradores calificados. Si no vendemos tu propiedad en el plazo pactado, tú no pagas absolutamente nada. Tienes a un equipo profesional trabajando para ti sin gastar de tu bolsillo por adelantado."
    },
    {
      question: "¿Ustedes también acompañan y protegen al comprador de mi propiedad?",
      answer: "Totalmente. La única forma de concretar ventas rápidas y sin trabas es que ambas partes tengan absoluta tranquilidad. Al comprador le demostramos con el estudio de títulos SUNARP y los recorridos 360° que está adquiriendo un predio seguro, sin problemas de herederos ni litigios. Cuando el comprador siente transparencia total, paga el precio justo de mercado sin regatear por desconfianza."
    },
    {
      question: "¿Por qué la tecnología 360° y dron atrae a empresarios y trabajadores del sector minero y comercial?",
      answer: "Muchos de los compradores con mayor liquidez trabajan en campamentos mineros (Puno, Cusco, Arequipa, Moquegua) o dirigen negocios comerciales en Tacna, Desaguadero y Bolivia. Estas personas no tienen días libres para viajar a 'curiosear' terrenos. Con nuestros tours virtuales 360° y tomas panorámicas, recorren el lote, el ancho de calle y el entorno urbano desde su celular. Llegan a Juliaca con la decisión tomada y los fondos listos para firmar."
    },
    {
      question: "¿Cómo y cuándo recibo mi dinero al momento de vender ante Notaría?",
      answer: "Tu seguridad patrimonial es prioridad. Nosotros coordinamos y supervisamos la firma en la Notaría Pública. La firma de la Escritura Pública definitiva se realiza únicamente con Cheque de Gerencia bancarizado o abono verificado en presencia notarial. No se entrega la posesión ni las llaves del predio hasta que el 100% de tu dinero esté en tu cuenta."
    },
    {
      question: "¿Cobran algún monto por adelantado para empezar a trabajar mi propiedad?",
      answer: "Ninguno. La visita técnica, la evaluación registral inicial, las tomas con dron y el recorrido virtual 360° son asumidos íntegramente por Nexus Domo. Cobramos una comisión pactada únicamente el día en que tu venta se concreta con éxito ante Notaría. Si tú no ganas, nosotros tampoco."
    }
  ];

  return (
    <div className="animate-fade-in font-sans pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 pt-28 pb-14 relative z-10 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-sky-500/10 rounded-full blur-[90px] pointer-events-none z-0"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 bg-orange-500/10 text-[#ea580c] border border-orange-500/25 relative z-10 shadow-sm font-display">
          <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
          <span>Socio Inmobiliario & Legal en Juliaca y Puno</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mt-2 mb-6 leading-[1.15] max-w-4xl mx-auto relative z-10 font-display">
          Vendemos tu Inmueble con <span className="text-gradient-rise">Respaldo Registral SUNARP</span> y Tecnología 360°
        </h1>
        
        <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-8 leading-relaxed relative z-10 font-sans font-medium">
          Cero curiosos y cero trabas legales. Firmamos un <strong>acuerdo interno de exclusividad sin costo adelantado</strong>: auditamos tu partida en SUNARP, comprobamos medidas con wincha en el terreno y promocionamos con Dron y 360° ante inversionistas con capital en mano.
        </p>

        {/* Formulario Rápido Híbrido de 2 Pasos (Lead Magnet) */}
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xl relative z-10 text-left">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#ea580c] block mb-1">
              Evaluación Gratuita de tu Predio
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              ¿Quieres saber cuánto vale tu propiedad y cómo venderla rápido?
            </h3>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Paso 1: Tipo de Inmueble (Chips) */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                1. Selecciona el tipo de inmueble:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Terreno / Lote', icon: <MapPin className="w-3.5 h-3.5" /> },
                  { label: 'Casa Residencial', icon: <Home className="w-3.5 h-3.5" /> },
                  { label: 'Local Comercial', icon: <Building2 className="w-3.5 h-3.5" /> }
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setTipoInmueble(item.label)}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                      tipoInmueble === item.label
                        ? 'bg-[#ea580c] text-white border-orange-600 shadow-md shadow-orange-950/20'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Teléfono / WhatsApp */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                2. Tu número de WhatsApp:
              </label>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                    +51
                  </span>
                  <input
                    type="tel"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="987 654 321"
                    maxLength={11}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black uppercase tracking-wider text-xs sm:text-sm text-white bg-[#ea580c] hover:bg-[#c2410c] shadow-md shadow-orange-950/20 transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  Solicitar Evaluación Gratuita
                </button>
              </div>
              {formError && (
                <p className="text-red-500 text-xs font-semibold mt-1.5">{formError}</p>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-400" /> Cero spam. 100% confidencial.
              </span>
              <span className="text-emerald-600 font-bold">
                ✓ Visita técnica y peritaje a costo cero
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* 2. EL CONTRASTE: LA REALIDAD DEL MERCADO LOCAL */}
      <section className="container mx-auto px-4 sm:px-6 py-12 relative z-10 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="text-xs uppercase text-[#ea580c] font-black tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            EL PROBLEMA EN JULIACA Y PUNO
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mt-3 font-display">
            ¿Por qué un cartel de "SE VENDE" pasa meses sin resultados?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium">
            El mercado cambió. El comprador con dinero real no está caminando por la calle mirando letreros empolvados; está trabajando en mina o comercio y busca predios seguros con títulos limpios.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Tarjeta 1: La Venta Informal Tradicional */}
          <div className="bg-white border border-red-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm text-left">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 border border-slate-200">
                <img 
                  src="/casa_cartel_juliaca.jpg" 
                  alt="Casa con letrero se vende en Juliaca" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  El Método Tradicional
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-3">
                Letrero expuesto, pérdida de tiempo y riesgo legal
              </h3>
              
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Meses recibiendo llamadas de curiosos que solo regatean o no tienen presupuesto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>El trato se cae al final porque la partida en SUNARP tenía gravámenes o herederos no declarados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Discrepancias en linderos: las medidas físicas no coinciden con los papeles y el banco rechaza al comprador.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-red-600 font-bold">
              Resultado: Desgaste de meses y propiedad malbaratada.
            </div>
          </div>

          {/* Tarjeta 2: El Método Nexus Domo 360 */}
          <div className="bg-white border border-emerald-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md text-left">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 border border-slate-200">
                <img 
                  src="/medicion_peritaje_juliaca.jpg" 
                  alt="Peritaje y medición técnica en Juliaca" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  El Método Nexus Domo
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-3">
                Auditoría registral previa, medición real y tour 360°
              </h3>
              
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Auditoría registral en SUNARP antes de publicar para que la venta sea limpia e inobjetable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Verificación física con wincha en terreno para garantizar metrajes reales y exactos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>Producción 360° y tomas de dron dirigidas a inversionistas mineros y comerciales de todo el sur.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-emerald-700 font-black">
              Resultado: Venta más rápida, sin conflictos y a precio justo.
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROCESO DE 4 FASES */}
      <section className="container mx-auto px-4 sm:px-6 py-12 relative z-10 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs uppercase text-[#ea580c] font-black tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            TRANSPARENCIA TOTAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mt-3 font-display">
            El Proceso de 4 Fases para Vender Seguro
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium">
            Paso a paso, desde el acuerdo inicial sin burocracia hasta el cobro de tu cheque de gerencia en Notaría.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-0 md:px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white relative group shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {soluciones.map((solucion, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col md:flex-row items-stretch min-h-[440px] md:min-h-[480px]">
                  
                  {/* Foto de la etapa */}
                  <div className="w-full md:w-1/2 relative h-56 sm:h-72 md:h-auto overflow-hidden bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200">
                    <img 
                      src={solucion.image} 
                      alt={solucion.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/60 via-transparent to-transparent"></div>
                    <span className="absolute top-6 left-6 text-[10px] uppercase font-black tracking-widest bg-[#ea580c] text-white backdrop-blur-md px-3.5 py-2 rounded-full border border-orange-600 font-display shadow-md">
                      {solucion.badge}
                    </span>
                  </div>

                  {/* Cuerpo */}
                  <div className="w-full md:w-1/2 p-6 sm:p-10 bg-white flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-orange-50 border-orange-200 text-[#ea580c] shrink-0">
                          {solucion.icon}
                        </div>
                        <h3 className="font-bold text-lg sm:text-2xl text-slate-900 font-display">
                          {solucion.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                        {solucion.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-800 font-bold font-sans">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-[#ea580c] font-black uppercase tracking-wider text-[9px] block mb-0.5 font-display">
                          Beneficio Directo para Ti
                        </span>
                        {solucion.highlight}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Controles de Slide */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prevSlide}
              aria-label="Fase anterior"
              className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex justify-center gap-2">
              {soluciones.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Ver ${soluciones[idx].step}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-[#ea580c]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              aria-label="Fase siguiente"
              className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ENFOQUE REGIONAL: EL CORREDOR ECONÓMICO Y PUERTO SECO */}
      <section className="container mx-auto px-4 sm:px-6 py-12 relative z-10 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#ea580c] bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200 inline-block font-display">
              CONEXIÓN REGIONAL & MEGAPROYECTOS
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-slate-900 leading-tight">
              ¿Quiénes son los compradores con dinero real que buscan propiedades en Juliaca?
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
              Juliaca no depende únicamente del comprador vecino. Es el corazón logístico y comercial del sur del Perú. Con la proyección del <strong>Puerto Seco de Juliaca</strong>, la articulación con los corredores interoceánicos (Brasil, Bolivia, Chile) y la conexión hacia el <strong>Megapuerto de Chancay</strong> y el futuro <strong>Megapuerto de Corío</strong>, el interés por terrenos y propiedades con documentos saneados se ha multiplicado:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[#ea580c] font-black text-xs block mb-1">⛏️ Sector Minero</span>
                <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                  Ingenieros, contratistas y empresarios de campamentos mineros de Puno, Cusco, Moquegua y Arequipa que buscan invertir sus utilidades en terrenos de alta plusvalía.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[#ea580c] font-black text-xs block mb-1">🚛 Comercio & Transporte</span>
                <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                  Empresarios de Tacna, Ilo, Desaguadero y Bolivia que necesitan almacenes, locales comerciales y lotes para expansión logística en avenidas clave de Juliaca.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[#ea580c] font-black text-xs block mb-1">🌐 Inversionistas a Distancia</span>
                <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                  Compradores que residen fuera de la región y que, gracias al recorrido 360° y tomas aéreas con dron, verifican accesos y compran con total confianza.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                ¿Tienes un terreno o casa bien ubicado en Juliaca o Puno?
              </span>
              <a
                href={getSocialUrl('whatsapp', 'Hola Nexus Domo, tengo un inmueble bien ubicado y deseo una evaluación para venta.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openSocialApp(e, 'whatsapp', 'Hola Nexus Domo, tengo un inmueble bien ubicado y deseo una evaluación para venta.')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black uppercase tracking-wider text-xs transition-all cursor-pointer shadow-md active:scale-95 shrink-0"
              >
                <PhoneCall className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREGUNTAS FRECUENTES (FAQs) */}
      <section className="container mx-auto px-4 sm:px-6 py-12 relative z-10 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <HelpCircle className="w-8 h-8 text-[#ea580c] mx-auto mb-3" />
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight font-display">
            Tu Socio Estratégico en Cada Paso: Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium">
            Despejamos tus dudas sobre documentos SUNARP, rectificación de áreas, contrato de exclusividad y el pago seguro en Notaría.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5 text-left">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <h3>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-slate-900 text-xs sm:text-sm font-bold text-left hover:bg-slate-50 transition cursor-pointer select-none font-display focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#ea580c] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
              </h3>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx ? 'max-h-[400px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-5 text-slate-600 text-xs leading-relaxed font-sans font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Marcado de Datos Estructurados JSON-LD para Google FAQ Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </section>

      {/* 6. BANNER FINAL DE ACCIÓN */}
      <section className="container mx-auto px-4 sm:px-6 pt-6 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-[#ea580c] rounded-3xl p-7 sm:p-10 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black font-display mb-3">
            ¿Listo para vender tu terreno o casa con respaldo profesional?
          </h3>
          <p className="text-amber-100 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
            Coordinemos una visita técnica sin costo a tu predio. Revisamos tu partida en SUNARP y preparamos el plan de venta con dron y tecnología 360°.
          </p>
          <a
            href={getSocialUrl('whatsapp', 'Hola Nexus Domo, deseo agendar una evaluación gratuita para vender mi propiedad en Juliaca/Puno.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => openSocialApp(e, 'whatsapp', 'Hola Nexus Domo, deseo agendar una evaluación gratuita para vender mi propiedad en Juliaca/Puno.')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-black uppercase tracking-wider text-xs sm:text-sm transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <PhoneCall className="w-4.5 h-4.5 text-[#ea580c]" />
            Solicitar Evaluación Gratuita por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
