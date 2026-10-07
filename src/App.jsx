import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';
import ScrollToTop from './components/ScrollToTop';
import TopographicBackground from './components/TopographicBackground';
import Bio from './pages/Bio';

// Carga perezosa (Lazy loading) para que la Bio cargue en milisegundos sin arrastrar el peso de Three.js y visores
const Home = lazy(() => import('./pages/Home'));
const Propiedades = lazy(() => import('./pages/Propiedades'));
const CompraSeguro = lazy(() => import('./pages/CompraSeguro'));
const Servicios360 = lazy(() => import('./pages/Servicios360'));
const VendePropiedad = lazy(() => import('./pages/VendePropiedad'));
const Contacto = lazy(() => import('./pages/Contacto'));
const TourEditorPage = lazy(() => import('./pages/TourEditorPage'));
const PropiedadDetalle = lazy(() => import('./pages/PropiedadDetalle'));

function AppContent() {
  const location = useLocation();
  const isDev = import.meta.env.DEV && import.meta.env.VITE_ENABLE_360_EDITOR === 'true';
  const isBioPage = location.pathname === '/bio';
  const hideFooter = location.pathname === '/contacto' || isBioPage;
  const hideNavbar = isBioPage;
  const hideWhatsAppBubble = isBioPage; // La Bio ya tiene su propio botón principal de WhatsApp destacado

  const [currentTheme, setCurrentTheme] = React.useState(() => {
    return localStorage.getItem('domo360_theme') || 'light';
  });

  React.useEffect(() => {
    const handleThemeChange = (e) => {
      setCurrentTheme(e.detail);
    };
    window.addEventListener('theme-change', handleThemeChange);
    window.addEventListener('bio-theme-change', handleThemeChange);
    return () => {
      window.removeEventListener('theme-change', handleThemeChange);
      window.removeEventListener('bio-theme-change', handleThemeChange);
    };
  }, []);

  const isLightPage = isBioPage 
    ? currentTheme === 'light'
    : location.pathname.startsWith('/editor-360-privado')
      ? false
      : currentTheme === 'light';

  // Configuración del IntersectionObserver para apariciones dinámicas al hacer scroll (optimizado para móviles)
  React.useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -25px 0px',
        threshold: 0.01
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => observer.observe(el));
    }, 180);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return (
    <div className={`min-h-screen overflow-x-hidden relative flex flex-col justify-between transition-colors duration-300 ${
      isLightPage ? 'bg-[#f8fafc] text-slate-900' : 'bg-nexus-dark text-white'
    }`}>
      {/* Fondo Topográfico Interactivo Fijo (TerrainLines) Global */}
      <TopographicBackground />

      {/* Luces de fondo (Efecto glow premium) */}
      {!isLightPage && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-nexus-purple opacity-10 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-nexus-blue opacity-10 rounded-full blur-[140px] pointer-events-none z-0"></div>
        </>
      )}

      <div>
        {/* Renderizado condicional del Navbar global (se oculta en la página Bio para que sea limpia 100%) */}
        {!hideNavbar && <Navbar />}
        
        <Suspense fallback={
          <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
            <span className="text-xs font-mono text-cyan-400/80">Cargando Nexus Domo 360°...</span>
          </div>
        }>
          <Routes>
            {/* Página Principal: Portada Héroe, Beneficios, Carrusel Destacados */}
            <Route path="/" element={<Home />} />
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/proyectos" element={<Propiedades />} />
            <Route path="/catalogo" element={<Propiedades />} />

            {/* Bio Oficial / Enlace Central para Redes Sociales */}
            <Route path="/bio" element={<Bio />} />
            <Route path="/servicios-360" element={<Servicios360 />} />
            <Route path="/servicios" element={<Servicios360 />} />
            <Route path="/vende-tu-propiedad" element={<VendePropiedad />} />
            <Route path="/compra-seguro" element={<CompraSeguro />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/:slug" element={<PropiedadDetalle />} />

            {/* Compatibilidad con rutas directas anteriores o escritas manualmente */}
            <Route path="/domo360" element={<Home />} />
            <Route path="/domo360/servicios-360" element={<Servicios360 />} />
            <Route path="/domo360/vende-tu-propiedad" element={<VendePropiedad />} />
            <Route path="/domo360/compra-seguro" element={<CompraSeguro />} />
            <Route path="/domo360/contacto" element={<Contacto />} />
            <Route path="/domo360/:slug" element={<PropiedadDetalle />} />
            {isDev && <Route path="/editor-360-privado/:paramTourId?" element={<TourEditorPage />} />}
          </Routes>
        </Suspense>
      </div>

      {!hideFooter && <Footer />}
      {!hideWhatsAppBubble && <WhatsAppBubble />}
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
