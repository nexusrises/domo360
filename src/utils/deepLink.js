/**
 * Utilidad inteligente y universal para Redes Sociales y WhatsApp
 * Nexus Domo 360°
 * 
 * Utiliza URLs oficiales HTTPS (estándar Universal Links / Android App Links):
 * - En Android (Chrome, Brave, Samsung Internet): El sistema operativo abre la App oficial automáticamente si está instalada, o la versión web si no.
 * - En iOS (Safari, Chrome): Universal Links abren la App nativa sin bloqueos.
 * - En Desktop / PC: Abre la pestaña limpia en una nueva ventana.
 * - Cero errores de protocolo 'ERR_UNKNOWN_URL_SCHEME'.
 */

export const SOCIAL_URLS = {
  youtube: 'https://www.youtube.com/@angel.domo360',
  tiktok: 'https://www.tiktok.com/@angel.domo360',
  instagram: 'https://www.instagram.com/angel.domo360/',
  facebook: 'https://www.facebook.com/angel.domo360',
  whatsapp: (msg = 'Hola Angel Domo 360°, deseo más información.') => 
    `https://wa.me/51951300535?text=${encodeURIComponent(msg)}`
};

/**
 * Obtiene la URL canónica segura de una red o canal
 */
export function getSocialUrl(platform, customParam) {
  if (!platform) return '#';
  if (typeof platform === 'object' && platform?.webUrl) {
    return platform.webUrl;
  }
  switch (platform) {
    case 'whatsapp':
      return SOCIAL_URLS.whatsapp(customParam);
    case 'youtube':
      return SOCIAL_URLS.youtube;
    case 'tiktok':
      return SOCIAL_URLS.tiktok;
    case 'instagram':
      return SOCIAL_URLS.instagram;
    case 'facebook':
      return SOCIAL_URLS.facebook;
    default:
      return typeof platform === 'string' && platform.startsWith('http') ? platform : '#';
  }
}

/**
 * Manejador de clic universal para enlaces y botones sociales
 * Si se invoca desde un enlace <a href="..."> deja que el navegador
 * y el sistema operativo abran la aplicación de forma nativa sin romper el flujo.
 */
export function openSocialApp(e, platform, customParam) {
  // Si el clic viene de una etiqueta <a> con un href válido,
  // NO prevenimos la acción por defecto para permitir que Android App Links / iOS Universal Links actúen.
  const anchor = e?.currentTarget?.closest 
    ? e.currentTarget.closest('a') 
    : (e?.currentTarget?.tagName === 'A' ? e.currentTarget : null);

  if (anchor && anchor.getAttribute('href') && anchor.getAttribute('href') !== '#') {
    return;
  }

  // Si proviene de un <button> o llamada sin href:
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const targetUrl = getSocialUrl(platform, customParam);
  if (targetUrl && targetUrl !== '#') {
    const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.assign(targetUrl);
    }
  }
}
