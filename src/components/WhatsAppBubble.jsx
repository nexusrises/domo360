import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function WhatsAppBubble() {
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Obtener mensajes y textos de WhatsApp adaptados dinámicamente según la sub-página visitada
  const getContextualContent = () => {
    const path = location.pathname.toLowerCase();

    // 1. Sub-página: Vende tu Propiedad
    if (path.includes('vende-tu-propiedad')) {
      return {
        messages: [
          "¿Quieres vender tu casa o terreno rápido y al mejor precio de mercado? Te regalamos fotos 360° y tomas de dron 🚁📸",
          "¿Tienes un lote o casa y no sabes cómo sanear sus documentos para venderlo? Nuestro equipo legal te ayuda gratis ⚖️🏡",
          "Publicamos tu propiedad con tecnología 3D y la mostramos a compradores calificados en todo Juliaca y Puno 🚀",
          "¿Quieres que digitalicemos tu inmueble en 360° para venderlo sin perder tiempo con curiosos? Escríbenos hoy 📲"
        ],
        whatsappTexts: [
          "Hola Angel, soy propietario y deseo vender mi propiedad. Me gustaría recibir asesoría legal y el servicio de fotos 360° y dron.",
          "Hola Angel, necesito ayuda para sanear los documentos de mi propiedad para ponerla en venta de forma rápida.",
          "Hola Angel, me interesa publicar mi terreno/casa en el portal Domo 360° con recorridos virtuales y fotos de dron.",
          "Hola Angel, deseo coordinar una visita para la toma de fotos 360° y la publicación de mi propiedad."
        ]
      };
    }

    // 2. Sub-página: Compra con Seguridad
    if (path.includes('compra-seguro')) {
      return {
        messages: [
          "¿Tienes dudas legales sobre una propiedad que quieres comprar en Juliaca? Consulta gratis con nuestro abogado ⚖️🛡️",
          "Evita estafas, dobles ventas o hipotecas ocultas. Auditamos el título de tu lote en SUNARP antes de que firmes 📑✅",
          "¿Quieres verificar si un terreno tiene partida registrada y plano independizado? Te ayudamos en minutos por WhatsApp 📲",
          "Protege el dinero de tu familia. Te asesoramos paso a paso en el saneamiento y compra legal de inmuebles en Puno 🏡🛡️"
        ],
        whatsappTexts: [
          "Hola Angel, estoy en la sección Compra Seguro y me gustaría una consulta gratuita con su abogado sobre el estado legal de una propiedad.",
          "Hola Angel, deseo auditar la partida registral y documentos de un terreno antes de realizar la compra.",
          "Hola Angel, necesito asesoría legal para verificar si un lote cuenta con plano independizado y título limpio en SUNARP.",
          "Hola Angel, me gustaría agendar una asesoría de compra segura para revisar la documentación de una vivienda."
        ]
      };
    }

    // 3. Sub-página: Detalle de Propiedad Específica
    const pathParts = path.split('/').filter(Boolean);
    const isDetail = (pathParts.length >= 2 && pathParts[0] === 'domo360' && !['vende-tu-propiedad', 'compra-seguro', 'contacto'].includes(pathParts[1])) || 
                     (pathParts.length === 1 && !['domo360', 'vende-tu-propiedad', 'compra-seguro', 'contacto'].includes(pathParts[0]));
    
    if (isDetail) {
      return {
        messages: [
          "¿Te interesa esta propiedad? Escríbeme y te envío la ficha técnica completa y el enlace de Google Maps 📍📲",
          "¿Quieres agendar una visita presencial para ver esta casa o terreno? Reservamos tu cita de inmediato 🗓️🏡",
          "¿Deseas saber las facilidades de pago o el estado legal de esta propiedad? Consúltanos directamente por WhatsApp 💬"
        ],
        whatsappTexts: [
          "Hola Angel, estoy interesado en recibir más información, ubicación en Google Maps y agendar una visita para esta propiedad.",
          "Hola Angel, me interesa visitar esta propiedad y quisiera coordinar fecha y hora para la visita presencial.",
          "Hola Angel, quisiera consultar el precio final y las facilidades de pago para esta propiedad."
        ]
      };
    }

    // 4. Sub-página: Catálogo General de Proyectos / Domo 360 (/domo360)
    if (path.includes('domo360')) {
      return {
        messages: [
          "¿Buscas comprar un lote o casa en Juliaca sin riesgo de estafas? Te enviamos opciones con títulos limpios en SUNARP 📲🏡",
          "¿Deseas conocer más detalles de nuestras propiedades digitalizadas en 360°? Escríbeme y te envío planos y ubicación 📍",
          "¿Buscas un terreno comercial o residencial con alta plusvalía en la región? Te asesoramos en vivo por WhatsApp 🚀",
          "¿Quieres agendar una visita guiada a los lotes o casas disponibles? Escríbenos para reservar tu horario 🗓️📲"
        ],
        whatsappTexts: [
          "Hola Angel, estoy viendo los proyectos inmobiliarios en Domo 360° y me gustaría recibir información sobre terrenos y casas disponibles.",
          "Hola Angel, busco opciones de terrenos en Juliaca/Puno con documentación saneada e inscritos en SUNARP.",
          "Hola Angel, me gustaría coordinar una reunión/visita para ver opciones de lotes comerciales y residenciales.",
          "Hola Angel, quisiera que me envíen la lista de precios y planos de los proyectos disponibles."
        ]
      };
    }

    // 5. Landing Page Principal de Nexus Rise (Ruta '/')
    return {
      messages: [
        "¿Buscas una página web moderna e interactiva para tu empresa en la región Puno? Cotiza tu web a medida aquí 💻✨",
        "¿Quieres destacar frente a tu competencia con recorridos virtuales 360° y desarrollo web corporativo? Escríbenos hoy 🚀",
        "¿Necesitas una plataforma web inmobiliaria, tienda online o sistema corporativo rápido y seguro? Hablemos por WhatsApp 💼⚡",
        "Digitalizamos tu negocio con diseño web de nivel internacional y alta conversión. ¡Solicita tu cotización gratis! 🌐📲"
      ],
      whatsappTexts: [
        "Hola Nexus Rise, me interesa cotizar el desarrollo de una página web profesional e interactiva para mi empresa.",
        "Hola Nexus Rise, deseo información sobre la implementación de tours 360° y páginas webs corporativas a medida.",
        "Hola Nexus Rise, busco desarrollar un sistema web / tienda digital para mi negocio y me gustaría solicitar una propuesta.",
        "Hola Nexus Rise, vi sus proyectos interactivos y deseo asesoría gratuita para digitalizar mi empresa en la región."
      ]
    };
  };

  const { messages, whatsappTexts } = getContextualContent();

  // Resetear el índice al cambiar de ruta para que empiece en el primer mensaje de la sección
  useEffect(() => {
    setCurrentMessageIndex(0);
  }, [location.pathname]);

  useEffect(() => {
    if (isHovered) {
      setShowTooltip(true);
      return;
    }

    let timeoutId;

    const runCycle = (step) => {
      if (isHovered) return;

      if (step === 'show') {
        setShowTooltip(true);
        timeoutId = setTimeout(() => runCycle('hide'), 9000);
      } else if (step === 'hide') {
        setShowTooltip(false);
        timeoutId = setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          runCycle('show');
        }, 18000);
      }
    };

    timeoutId = setTimeout(() => runCycle('show'), 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered, messages.length, location.pathname]);

  if (location.pathname === '/contacto' || location.pathname === '/domo360/contacto') {
    return null;
  }

  const safeIndex = currentMessageIndex % messages.length;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none whatsapp-global-bubble transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip elegante animado con auto-ajuste de ancho para móvil */}
      <div className={`px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#25d366]/40 text-slate-800 font-bold text-[11px] sm:text-xs shadow-2xl transition-all duration-300 transform origin-right max-w-[220px] sm:max-w-[300px] whitespace-normal ${
        showTooltip 
          ? 'opacity-100 scale-100 translate-x-0 visible' 
          : 'opacity-0 scale-95 translate-x-4 invisible pointer-events-none'
      }`}>
        <span className="flex items-start gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse shrink-0 mt-1"></span>
          <span className="leading-relaxed font-sans">{messages[safeIndex]}</span>
        </span>
      </div>

      {/* Botón flotante interactivo */}
      <a 
        href={`https://wa.me/51951300535?text=${encodeURIComponent(whatsappTexts[safeIndex])}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto radar de pulsación verde neón */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-35 animate-ping pointer-events-none"></span>
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-20 animate-pulse pointer-events-none scale-125"></span>

        {/* Icono de WhatsApp nativo SVG para máxima calidad */}
        <svg 
          className="w-7 h-7 drop-shadow-md fill-white" 
          viewBox="0 0 448 512" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
}
