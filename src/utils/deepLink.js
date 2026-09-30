/**
 * Utilidad inteligente de Redirección / Deep Linking para Redes Sociales
 * Optimizado para abrir la aplicación nativa en dispositivos móviles (Android / iOS)
 * y redirigir a la versión web oficial en computadoras de escritorio o cuando la app no está instalada.
 */

export const SOCIAL_URLS = {
  youtube: 'https://www.youtube.com/@angel.domo360',
  tiktok: 'https://www.tiktok.com/@angel.domo360',
  instagram: 'https://www.instagram.com/angel.domo360/',
  facebook: 'https://www.facebook.com/angel.domo360',
  whatsapp: (msg = 'Hola Angel Domo 360°, deseo más información.') => 
    `https://wa.me/51951300535?text=${encodeURIComponent(msg)}`
};

export function openSocialApp(e, platform, customParam) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const ua = typeof navigator !== 'undefined' ? (navigator.userAgent || '') : '';
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isMobile = isAndroid || isIOS;

  let webUrl = '';
  let appUri = '';

  switch (platform) {
    case 'whatsapp': {
      const msg = customParam || 'Hola Angel Domo 360°, deseo más información.';
      const enc = encodeURIComponent(msg);
      webUrl = `https://wa.me/51951300535?text=${enc}`;
      appUri = `whatsapp://send?phone=51951300535&text=${enc}`;
      break;
    }
    case 'youtube': {
      webUrl = SOCIAL_URLS.youtube;
      if (isAndroid) {
        appUri = 'intent://www.youtube.com/@angel.domo360#Intent;package=com.google.android.youtube;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.youtube.com%2F%40angel.domo360;end';
      } else if (isIOS) {
        appUri = 'vnd.youtube://www.youtube.com/@angel.domo360';
      } else {
        appUri = 'vnd.youtube://www.youtube.com/@angel.domo360';
      }
      break;
    }
    case 'tiktok': {
      webUrl = SOCIAL_URLS.tiktok;
      if (isAndroid) {
        appUri = 'intent://tiktok.com/@angel.domo360#Intent;package=com.zhiliaoapp.musically;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.tiktok.com%2F%40angel.domo360;end';
      } else if (isIOS) {
        appUri = 'snssdk1233://user/profile?unique_id=angel.domo360';
      } else {
        appUri = 'snssdk1233://user/profile?unique_id=angel.domo360';
      }
      break;
    }
    case 'instagram': {
      webUrl = SOCIAL_URLS.instagram;
      if (isAndroid) {
        appUri = 'intent://instagram.com/_u/angel.domo360/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.instagram.com%2Fangel.domo360%2F;end';
      } else if (isIOS) {
        appUri = 'instagram://user?username=angel.domo360';
      } else {
        appUri = 'instagram://user?username=angel.domo360';
      }
      break;
    }
    case 'facebook': {
      webUrl = SOCIAL_URLS.facebook;
      if (isAndroid) {
        appUri = 'intent://facebook.com/angel.domo360#Intent;package=com.facebook.katana;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.facebook.com%2Fangel.domo360;end';
      } else if (isIOS) {
        appUri = 'fb://facewebmodal/f?href=https://www.facebook.com/angel.domo360';
      } else {
        appUri = 'fb://facewebmodal/f?href=https://www.facebook.com/angel.domo360';
      }
      break;
    }
    default:
      if (typeof platform === 'object' && platform?.webUrl) {
        webUrl = platform.webUrl;
        appUri = isAndroid ? (platform.androidUri || platform.appUri) : (platform.iosUri || platform.appUri);
      }
      break;
  }

  // 1. En PC / Laptop / Desktop: Abrir pestaña web limpia
  if (!isMobile) {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // 2. En Android con Intent de Google Chrome: Lanzar intent nativo
  if (isAndroid && appUri && appUri.startsWith('intent://')) {
    window.location.href = appUri;
    return;
  }

  // 3. En iOS o WhatsApp: esquema directo con detección de fallback
  let appOpened = false;
  const onBlurOrHidden = () => {
    appOpened = true;
  };

  window.addEventListener('blur', onBlurOrHidden, { once: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) appOpened = true;
  }, { once: true });

  if (appUri) {
    window.location.href = appUri;
  } else {
    window.location.href = webUrl;
    return;
  }

  // Si pasados 900ms la app no abrió la pantalla, ir a la web
  setTimeout(() => {
    window.removeEventListener('blur', onBlurOrHidden);
    if (!appOpened && !document.hidden) {
      window.location.href = webUrl;
    }
  }, 900);
}
