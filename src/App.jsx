import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';
import ScrollToTop from './components/ScrollToTop';
import TopographicBackground from './components/TopographicBackground';
import Home from './pages/Home';
import ServiciosInmobiliaria from './pages/ServiciosInmobiliaria';
import ServiciosSalud from './pages/ServiciosSalud';
import ServiciosEmpresasComercios from './pages/ServiciosEmpresasComercios';
import Proceso from './pages/Proceso';
import Portafolio from './pages/Portafolio';
import ProyectoDetalle from './pages/ProyectoDetalle';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import TourEditorPage from './pages/TourEditorPage';
import SolucionesProfesionales from './pages/SolucionesProfesionales';

function AppContent() {
  const location = useLocation();
  const isDev = import.meta.env.DEV;
  const hideFooter = location.pathname === '/contacto';

  // Configuración del IntersectionObserver para apariciones dinámicas al hacer scroll (optimizado para móviles)
  React.useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -25px 0px', // Relajado de -100px a -25px para compatibilidad móvil
        threshold: 0.01 // Reducido de 0.05 a 0.01 para dispararse de inmediato con el mínimo contacto
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
    }, 180); // Ligeramente incrementado para asegurar el render de rutas dinámicas

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-nexus-dark overflow-x-hidden relative text-white flex flex-col justify-between">
      {/* Fondo Topográfico Interactivo Fijo (TerrainLines) Global */}
      <TopographicBackground />

      {/* Luces de fondo (Efecto glow premium) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-nexus-purple opacity-10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-nexus-blue opacity-10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/Constructoras&Inmobiliarias" element={<ServiciosInmobiliaria />} />
          <Route path="/servicios/Clínicas&CentrosMédicos" element={<ServiciosSalud />} />
          <Route path="/servicios/empresas&comercios" element={<ServiciosEmpresasComercios />} />
          <Route path="/servicios/Profesionales&Consultores" element={<SolucionesProfesionales />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio/:id" element={<ProyectoDetalle />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          {isDev && <Route path="/editor-360-privado/:paramTourId?" element={<TourEditorPage />} />}
        </Routes>
      </div>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

