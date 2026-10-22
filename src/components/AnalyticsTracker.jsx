import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-7KPD6NG742';

/**
 * Componente que rastrea de forma automática el cambio de rutas (páginas y propiedades)
 * en aplicaciones Single Page Application (SPA) para Google Analytics 4.
 */
export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
}
