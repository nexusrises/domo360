import React from 'react';

/**
 * NexusRiseLogo - Un logotipo vectorial (SVG) ultra-premium y responsivo.
 * Representa "nexus rise" en una tipografía geométrica futurista personalizada
 * inspirada en el estilo 'Eco Regular' / 'Sweeto Star'.
 *
 * @param {Object} props
 * @param {string} props.className - Clases de CSS adicionales para el contenedor.
 * @param {string|number} props.height - Altura del logotipo (por defecto "100%").
 * @param {string|number} props.width - Ancho del logotipo (por defecto "100%").
 */
export default function NexusRiseLogo({ className = '', height = '100%', width = '100%' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268 40"
      width={width}
      height={height}
      className={`nexus-rise-logo-svg select-none ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Degradado plateado metálico premium para "nexus" */}
        <linearGradient id="nexus-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Degradado neón enérgico y futurista para "rise" */}
        <linearGradient id="rise-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f2fe" />     {/* Cian Neón */}
          <stop offset="50%" stopColor="#3b82f6" />    {/* Azul Nexus */}
          <stop offset="100%" stopColor="#a855f7" />   {/* Púrpura Neón */}
        </linearGradient>

        {/* Filtro de resplandor neón (Glow) de alta fidelidad */}
        <filter id="nr-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Estilos autocompletados y optimizados para interacciones fluidas */}
        <style>{`
          .nr-letter {
            fill: none;
            stroke-width: 6.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            transition: stroke-width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                        filter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          /* Estilo para el punto de la 'i' */
          .nr-dot {
            fill: none;
            stroke-width: 6.5;
            stroke-linecap: round;
            transition: stroke-width 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                        filter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          /* Colores por grupo */
          .grp-nexus .nr-letter {
            stroke: url(#nexus-grad);
          }
          
          .grp-rise .nr-letter, .grp-rise .nr-dot {
            stroke: url(#rise-grad);
          }

          /* Interacciones en Hover */
          .nexus-rise-logo-svg:hover .nr-letter,
          .nexus-rise-logo-svg:hover .nr-dot {
            stroke-width: 7.2;
            filter: url(#nr-glow);
          }

          /* Animación sutil de pulso en el brillo al cargar */
          @keyframes glow-pulse {
            0%, 100% { filter: none; }
            50% { filter: drop-shadow(0 0 1px rgba(0, 242, 254, 0.15)); }
          }
          .nexus-rise-logo-svg {
            animation: glow-pulse 3s infinite ease-in-out;
            cursor: pointer;
          }
        `}</style>
      </defs>

      {/* GRUPO 1: "nexus" (Plateado Metálico) */}
      <g className="grp-nexus">
        {/* Letra 'n' */}
        <g transform="translate(0, 0)">
          <path d="M 4,40 L 4,16 A 9,9 0 0,1 22,16 L 22,40" className="nr-letter" />
        </g>

        {/* Letra 'e' */}
        <g transform="translate(28, 0)">
          <path d="M 22,16 A 9,9 0 1,0 22,24 M 4,20 L 22,20" className="nr-letter" />
        </g>

        {/* Letra 'x' */}
        <g transform="translate(56, 0)">
          <path d="M 4,8 L 22,32 M 22,8 L 4,32" className="nr-letter" />
        </g>

        {/* Letra 'u' */}
        <g transform="translate(84, 0)">
          <path d="M 4,0 L 4,24 A 9,9 0 0,0 22,24 L 22,0" className="nr-letter" />
        </g>

        {/* Letra 's' */}
        <g transform="translate(112, 0)">
          <path
            d="M 22,8 C 22,4 18,4 13,4 C 8,4 4,7 4,12 C 4,18 22,18 22,26 C 22,32 18,36 13,36 C 8,36 4,32 4,28"
            className="nr-letter"
          />
        </g>
      </g>

      {/* GRUPO 2: "rise" (Degradado Neón Cian-Azul-Púrpura) */}
      <g className="grp-rise">
        {/* Letra 'r' */}
        <g transform="translate(158, 0)">
          <path d="M 4,40 L 4,16 A 9,9 0 0,1 13,7 L 22,7" className="nr-letter" />
        </g>

        {/* Letra 'i' */}
        <g transform="translate(186, 0)">
          {/* Cuerpo de la i */}
          <path d="M 13,16 L 13,40" className="nr-letter" />
          {/* Punto de la i dibujado como un sub-trazado circular */}
          <path d="M 13,5 L 13,5.1" className="nr-dot" />
        </g>

        {/* Letra 's' */}
        <g transform="translate(214, 0)">
          <path
            d="M 22,8 C 22,4 18,4 13,4 C 8,4 4,7 4,12 C 4,18 22,18 22,26 C 22,32 18,36 13,36 C 8,36 4,32 4,28"
            className="nr-letter"
          />
        </g>

        {/* Letra 'e' */}
        <g transform="translate(242, 0)">
          <path d="M 22,16 A 9,9 0 1,0 22,24 M 4,20 L 22,20" className="nr-letter" />
        </g>
      </g>
    </svg>
  );
}
