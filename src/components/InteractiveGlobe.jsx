import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export default function InteractiveGlobe() {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionStart = useRef(0)
  const phiRef = useRef(0.6)
  const thetaRef = useRef(0.28)
  const satRef0 = useRef(null)
  const satRef1 = useRef(null)
  const satRef2 = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let globe
    let animFrameId

    // Puntos geográficos con tamaño base > 0 para que se rendericen y pulsen correctamente
    const baseMarkers = [
      { location: [-16.3989, -71.535], size: 0.08, id: 'arequipa' }, /* Arequipa, Perú */
      { location: [-12.0464, -77.0428], size: 0.08, id: 'lima' }, /* Lima, Perú */
      { location: [-18.0138, -70.2512], size: 0.06, id: 'tacna' }, /* Tacna */
      { location: [-17.1956, -71.3417], size: 0.06, id: 'moquegua' }, /* Moquegua */
      { location: [40.7128, -74.0060], size: 0.07, id: 'newyork' }, /* New York */
      { location: [51.5074, -0.1278], size: 0.07, id: 'london' }, /* London */
      { location: [35.6762, 139.6503], size: 0.07, id: 'tokyo' }, /* Tokyo */
    ]

    const initGlobe = () => {
      const size = canvas.offsetWidth || canvas.parentElement?.offsetWidth || 300
      
      if (globe) {
        globe.destroy()
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: size * 2,
        height: size * 2,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6.0,
        baseColor: [0.05, 0.45, 0.65],
        markerColor: [0.0, 0.9, 1.0],
        glowColor: [0.02, 0.35, 0.55],
        markers: baseMarkers,
      })
    }

    // Esperar a que el layout se asiente en la primera carga para evitar tamaño 0 en móvil
    const timer = setTimeout(() => {
      initGlobe()

      const animate = () => {
        // Si el usuario no está arrastrando, rotar automáticamente de forma suave
        if (pointerInteracting.current === null) {
          phiRef.current += 0.002
        }

        const t = Date.now() * 0.003
        // Hacer que los marcadores pulsen suavemente
        const pulsedMarkers = baseMarkers.map((m, i) => ({
          ...m,
          size: m.size * (0.8 + Math.sin(t + i * 1.5) * 0.4),
        }))

        if (globe) {
          globe.update({ 
            phi: phiRef.current, 
            theta: thetaRef.current,
            markers: pulsedMarkers 
          })
        }

        // Animar los 3 satélites independientes
        const now = Date.now()
        const satellites = [
          {
            ref: satRef0,
            speed: 0.0004,   // Desplazamiento más suave y lento
            phase: 0.0,
            alpha: 0.35,     // Inclinación Z
            beta: 0.22,      // Inclinación X
            R_orbit: 1.15,   // Radio órbita (más amplio)
            R_globe: 0.85,   // Radio de oclusión calibrado al horizonte de la esfera
          },
          {
            ref: satRef1,
            speed: 0.0003,   // Desplazamiento más suave y lento
            phase: 2.1,
            alpha: -0.45,
            beta: 0.15,
            R_orbit: 1.28,   // Radio órbita (más amplio)
            R_globe: 0.85,   // Radio de oclusión calibrado al horizonte de la esfera
          },
          {
            ref: satRef2,
            speed: 0.0005,   // Desplazamiento más suave y lento
            phase: 4.2,
            alpha: 0.7,
            beta: 0.3,
            R_orbit: 1.05,   // Radio órbita (más amplio)
            R_globe: 0.85,   // Radio de oclusión calibrado al horizonte de la esfera
          }
        ]

        satellites.forEach((sat) => {
          const element = sat.ref.current
          if (!element) return

          // Ángulo orbital
          const angle = now * sat.speed + sat.phase

          // 3D en plano horizontal (X-Z)
          const x = Math.cos(angle) * sat.R_orbit
          const z = Math.sin(angle) * sat.R_orbit

          // Inclinación X (beta)
          const x1 = x
          const y1 = -z * Math.sin(sat.beta)
          const z1 = z * Math.cos(sat.beta)

          // Inclinación Z (alpha) en plano pantalla
          const x_final = x1 * Math.cos(sat.alpha) - y1 * Math.sin(sat.alpha)
          const y_final = x1 * Math.sin(sat.alpha) + y1 * Math.cos(sat.alpha)
          const z_final = z1

          // Detección de oclusión detrás del planeta (Z < 0 y dentro del radio)
          const dist2d = Math.sqrt(x_final * x_final + y_final * y_final)
          const isBehind = z_final < 0
          const isOccluded = isBehind && (dist2d < sat.R_globe)

          // Posicionamiento en base a coordenadas normalizadas
          element.style.left = `${50 + x_final * 50}%`
          element.style.top = `${50 + y_final * 50}%`
          
          // Oclusión abrupta
          element.style.opacity = isOccluded ? '0' : '1'

          // Escala de profundidad 3D
          const scale = 1 + z_final * 0.15
          element.style.transform = `translate(-50%, -50%) scale(${scale})`
        })

        animFrameId = requestAnimationFrame(animate)
      }
      animFrameId = requestAnimationFrame(animate)
    }, 150)

    // Escuchar cambios de tamaño del contenedor para recalcular el globo (ej: al rotar el móvil)
    const resizeObserver = new ResizeObserver(() => {
      if (canvas.offsetWidth > 0) {
        initGlobe()
      }
    })
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animFrameId)
      resizeObserver.disconnect()
      if (globe) {
        globe.destroy()
      }
    }
  }, [])

  // Controladores de eventos de arrastre
  const handlePointerDown = (e) => {
    pointerInteracting.current = e.clientX - pointerInteractionStart.current
    pointerInteractionStart.current = e.clientX
    canvasRef.current.style.cursor = 'grabbing'
  }

  const handlePointerUp = () => {
    pointerInteracting.current = null
    canvasRef.current.style.cursor = 'grab'
  }

  const handlePointerMove = (e) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteractionStart.current
      pointerInteractionStart.current = e.clientX
      phiRef.current += delta / 200
    }
  }

  return (
    <div style={{ width: 'min(520px, 90vw)', aspectRatio: '1 / 1', position: 'relative' }} className="mx-auto">
      {/* Resplandor atmosférico detrás del globo */}
      <div style={{
        position: 'absolute',
        inset: '8%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(8,145,178,0.1) 45%, transparent 70%)',
        filter: 'blur(28px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Anillo exterior estático */}
      <div style={{
        position: 'absolute',
        inset: '-3%',
        borderRadius: '50%',
        border: '1px solid rgba(6,182,212,0.2)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* Anillo medio giratorio (CSS animation) */}
      <div className="animate-spin" style={{
        position: 'absolute',
        inset: '-8%',
        borderRadius: '50%',
        border: '1px dashed rgba(6,182,212,0.12)',
        pointerEvents: 'none',
        zIndex: 2,
        animationDuration: '24s',
      }} />

      {/* Destello polar superior */}
      <div style={{
        position: 'absolute',
        top: '6%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '35%',
        height: '12%',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.25) 0%, transparent 70%)',
        filter: 'blur(10px)',
        pointerEvents: 'none',
        zIndex: 2,
        borderRadius: '50%',
      }} />

      {/* Líneas de órbita traseras (detrás del globo, zIndex: 0) */}
      {/* Órbita del Satélite 0 */}
      <div style={{
        position: 'absolute',
        width: '115%',
        height: '25.1%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(20deg)',
        borderRadius: '50%',
        border: '1px solid rgba(253, 224, 71, 0.08)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Órbita del Satélite 1 */}
      <div style={{
        position: 'absolute',
        width: '128%',
        height: '19.1%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-25.7deg)',
        borderRadius: '50%',
        border: '1px dashed rgba(253, 224, 71, 0.06)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Órbita del Satélite 2 */}
      <div style={{
        position: 'absolute',
        width: '105%',
        height: '31%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(40deg)',
        borderRadius: '50%',
        border: '1px solid rgba(253, 224, 71, 0.1)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Líneas de órbita delanteras (delante del globo, zIndex: 2, recortadas a la mitad frontal) */}
      {/* Órbita del Satélite 0 */}
      <div style={{
        position: 'absolute',
        width: '115%',
        height: '25.1%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(20deg)',
        borderRadius: '50%',
        border: '1px solid rgba(253, 224, 71, 0.12)',
        pointerEvents: 'none',
        zIndex: 2,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', // Solo mantiene la mitad superior (frontal)
      }} />

      {/* Órbita del Satélite 1 */}
      <div style={{
        position: 'absolute',
        width: '128%',
        height: '19.1%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-25.7deg)',
        borderRadius: '50%',
        border: '1px dashed rgba(253, 224, 71, 0.09)',
        pointerEvents: 'none',
        zIndex: 2,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', // Solo mantiene la mitad superior (frontal)
      }} />

      {/* Órbita del Satélite 2 */}
      <div style={{
        position: 'absolute',
        width: '105%',
        height: '31%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(40deg)',
        borderRadius: '50%',
        border: '1px solid rgba(253, 224, 71, 0.15)',
        pointerEvents: 'none',
        zIndex: 2,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', // Solo mantiene la mitad superior (frontal)
      }} />

      {/* Satélite 0 - Dorado metálico intermedio */}
      <div
        ref={satRef0}
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fef08a 35%, #eab308 70%, #854d0e 100%)',
          boxShadow: '0 0 15px rgba(250, 204, 21, 0.95), 0 0 4px rgba(113, 63, 18, 0.6)',
          pointerEvents: 'none',
          zIndex: 3,
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          opacity: 0,
        }}
      />

      {/* Satélite 1 - Dorado metálico grande */}
      <div
        ref={satRef1}
        style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fde047 35%, #ca8a04 70%, #713f12 100%)',
          boxShadow: '0 0 18px rgba(234, 179, 8, 0.95), 0 0 6px rgba(113, 63, 18, 0.6)',
          pointerEvents: 'none',
          zIndex: 3,
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          opacity: 0,
        }}
      />

      {/* Satélite 2 - Dorado metálico pequeño */}
      <div
        ref={satRef2}
        style={{
          position: 'absolute',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fef08a 35%, #d97706 70%, #78350f 100%)',
          boxShadow: '0 0 12px rgba(245, 158, 11, 0.95), 0 0 4px rgba(120, 53, 15, 0.6)',
          pointerEvents: 'none',
          zIndex: 3,
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          opacity: 0,
        }}
      />

      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onPointerMove={handlePointerMove}
        style={{ 
          width: '100%', 
          height: '100%', 
          contain: 'layout paint size', 
          position: 'relative', 
          zIndex: 1,
          cursor: 'grab'
        }}
      />
    </div>
  )
}
