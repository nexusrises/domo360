import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';

export default function PhotoSphereViewer({ 
  panorama = '/tour/sala.webp', 
  markers = [], 
  onMarkerClick,
  height = '500px',
  autorotate = false,
  containerClass = "relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black",
  showNavbar = true,
  interactive = true
}) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let active = true;
    let viewerInstance = null;
    let animationId;
    let interactionTimeout;

    const initViewer = () => {
      if (!active || !containerRef.current) return;

      // Limpiar el contenedor y destruir la instancia anterior si existe para evitar duplicidades
      if (viewerRef.current) {
        try {
          viewerRef.current.destroy();
        } catch (err) {
          // Silenciar
        }
        viewerRef.current = null;
      }

      containerRef.current.innerHTML = '';

      // Crear un div hijo dedicado para asegurar un DOM limpio para el canvas WebGL
      const viewerDiv = document.createElement('div');
      viewerDiv.style.width = '100%';
      viewerDiv.style.height = '100%';
      containerRef.current.appendChild(viewerDiv);

      // Inicializar el visor
      viewerInstance = new Viewer({
        container: viewerDiv,
        panorama: panorama,
        loadingImg: `${import.meta.env.BASE_URL}logo3.2.png`,
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        mousewheel: interactive,
        mousemove: interactive,
        touchmove: interactive,
        navbar: showNavbar ? [
          'zoom',
          'move',
          'download',
          'fullscreen'
        ] : false,
        plugins: [
          [MarkersPlugin, {
            markers: markers
          }]
        ]
      });

      viewerRef.current = viewerInstance;

      // Obtener plugin de marcadores y suscribir eventos
      const markersPlugin = viewerInstance.getPlugin(MarkersPlugin);
      
      if (markersPlugin) {
        markersPlugin.addEventListener('select-marker', (e) => {
          if (onMarkerClick) {
            onMarkerClick(e.marker, viewerInstance);
          }
        });
      }

      // Autorotación manual suave por API
      let isInteracting = false;

      const handleInteractionStart = () => {
        isInteracting = true;
        if (interactionTimeout) clearTimeout(interactionTimeout);
      };

      const handleInteractionEnd = () => {
        interactionTimeout = setTimeout(() => {
          isInteracting = false;
        }, 3000); // Reanudar tras 3 segundos de inactividad
      };

      viewerInstance.addEventListener('ready', () => {
        if (!active) return;
        const canvas = containerRef.current?.querySelector('canvas');
        if (canvas && interactive) {
          canvas.addEventListener('pointerdown', handleInteractionStart);
          window.addEventListener('pointerup', handleInteractionEnd);
        }

        if (autorotate) {
          const rotateLoop = () => {
            if (active && viewerRef.current && !isInteracting) {
              try {
                const pos = viewerRef.current.getPosition();
                viewerRef.current.rotate({
                  yaw: pos.yaw + 0.0015, // velocidad constante y suave
                  pitch: pos.pitch
                });
              } catch (err) {
                // Silenciar errores en desmontajes rápidos
              }
            }
            if (active) {
              animationId = requestAnimationFrame(rotateLoop);
            }
          };
          animationId = requestAnimationFrame(rotateLoop);
        }
      });
    };

    // Retrasar ligeramente la inicialización para evitar conflictos con React Strict Mode
    const timer = setTimeout(initViewer, 50);

    // Limpieza al desmontar el componente
    return () => {
      active = false;
      clearTimeout(timer);
      if (animationId) cancelAnimationFrame(animationId);
      if (interactionTimeout) clearTimeout(interactionTimeout);
      
      const canvas = containerRef.current?.querySelector('canvas');
      if (canvas && interactive) {
        canvas.removeEventListener('pointerdown', () => {});
      }
      if (interactive) {
        window.removeEventListener('pointerup', () => {});
      }

      if (viewerInstance) {
        try {
          viewerInstance.destroy();
        } catch (err) {
          // Silenciar
        }
        if (viewerRef.current === viewerInstance) {
          viewerRef.current = null;
        }
      }
    };
  }, [panorama, autorotate, interactive, showNavbar]);

  // Actualizar marcadores dinámicamente si cambian sin reconstruir todo el visor
  useEffect(() => {
    if (viewerRef.current) {
      const markersPlugin = viewerRef.current.getPlugin(MarkersPlugin);
      if (markersPlugin) {
        markersPlugin.clearMarkers();
        markers.forEach(m => markersPlugin.addMarker(m));
      }
    }
  }, [markers]);

  return (
    <div className={containerClass}>
      <div 
        ref={containerRef} 
        style={{ width: '100%', height: height }}
        className="w-full"
      />
      
      {!interactive && (
        <div className="absolute inset-0 z-30 bg-transparent cursor-default pointer-events-auto" />
      )}
      
      {/* Indicador interactivo */}
      {interactive && (
        <div className="absolute top-4 left-4 bg-nexus-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-nexus-accent font-bold font-mono pointer-events-none flex items-center gap-1.5 z-40">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          Vista 360° Interactiva
        </div>
      )}
    </div>
  );
}
