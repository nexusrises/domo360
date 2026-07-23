import React, { useState, useEffect, useRef } from 'react';

// Componente de Tarjeta de Miembro Interactiva 3D e Independiente
export default function MemberCard({ name, role, education, description, status, photoUrl, className = "" }) {
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
          <img 
            src={photoUrl ? (photoUrl.startsWith('http') || photoUrl.startsWith('data:') ? photoUrl : `${import.meta.env.BASE_URL.replace(/\/$/, "")}${photoUrl}`) : `${import.meta.env.BASE_URL}logo2.webp`} 
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
    </div>
  );
}
