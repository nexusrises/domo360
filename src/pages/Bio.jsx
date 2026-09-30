import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  MessageCircle,
  Home,
  Share2,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { openSocialApp, SOCIAL_URLS } from '../utils/deepLink';

export default function Bio() {
  // Estado para el tema: por defecto oscuro (dark) para máximo impacto visual en móvil
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('domo360_bio_theme') || 'dark';
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Angel Domo 360° | Enlaces y Redes Oficiales";
    localStorage.setItem('domo360_bio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      window.dispatchEvent(new CustomEvent('bio-theme-change', { detail: next }));
      return next;
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Angel Domo 360°',
      text: 'Conoce los proyectos y recorridos virtuales 360° con Angel Domo 360°',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Usuario canceló compartir
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 relative flex flex-col items-center justify-between px-4 py-8 sm:py-12 ${
        isDark
          ? 'text-white selection:bg-cyan-500 selection:text-black'
          : 'text-slate-900 selection:bg-cyan-500 selection:text-white'
      }`}
    >
      {/* Luces de fondo ambientadas sutiles que complementan las líneas topográficas */}
      <div
        className={`fixed top-[-10%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 -z-10 ${
          isDark ? 'bg-cyan-500/10 opacity-100' : 'bg-sky-400/15 opacity-80'
        }`}
      />
      <div
        className={`fixed bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 -z-10 ${
          isDark ? 'bg-purple-600/10 opacity-100' : 'bg-purple-400/10 opacity-60'
        }`}
      />

      {/* Barra superior de controles: Botón Compartir + Botón Tema (Sol / Luna Menguante) */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between mb-6 z-20">
        {/* Botón Compartir Perfil */}
        <button
          onClick={handleShare}
          className={`p-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 active:scale-90 flex items-center justify-center cursor-pointer ${
            isDark
              ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-white/10 text-gray-300 hover:text-white'
              : 'bg-white/80 border-slate-200 hover:border-cyan-500/50 hover:bg-white text-slate-700 shadow-sm'
          }`}
          title="Compartir perfil"
          aria-label="Compartir perfil"
        >
          {copied ? (
            <span className="text-[11px] font-bold text-emerald-500 px-1">¡Copiado!</span>
          ) : (
            <Share2 className="w-4 h-4" />
          )}
        </button>

        {/* Botón de Modo Oscuro / Claro con Sol y Luna en cuarto menguante */}
        <button
          onClick={toggleTheme}
          className={`relative p-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 active:scale-90 flex items-center justify-center cursor-pointer group shadow-sm ${
            isDark
              ? 'bg-white/5 border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-400/10 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
              : 'bg-white/90 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600 shadow-[0_4px_15px_rgba(99,102,241,0.12)]'
          }`}
          title={isDark ? 'Cambiar a modo Claro (Sol)' : 'Cambiar a modo Oscuro (Luna menguante)'}
          aria-label="Cambiar tema visual"
        >
          {isDark ? (
            // Sol radiante para pasar a claro
            <Sun className="w-5 h-5 text-amber-400 animate-spin-slow group-hover:scale-110 transition-transform" />
          ) : (
            // Luna en cuarto menguante precisa para pasar a oscuro
            <svg 
              className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>

      {/* Contenedor Principal (Tarjeta Vertical centrada) */}
      <main className="w-full max-w-md mx-auto flex flex-col items-center text-center z-10 space-y-6">
        
        {/* FOTO DE PERFIL / AVATAR CON ARO PREMIUM */}
        <div className="relative group">
          {/* Aro exterior con gradiente animado */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-80 blur-sm group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
          
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/80 p-0.5 shadow-2xl bg-black">
            <img
              src={`${import.meta.env.BASE_URL}miembros/angel.webp`}
              alt="Angel Domo 360°"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Insignia de Verificado / Estado Activo */}
          <div 
            className="absolute bottom-1 right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-md flex items-center justify-center"
            title="Asesor Inmobiliario Activo"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* NOMBRE Y DESCRIPCIÓN CON ENFOQUE HÍBRIDO (INMOBILIARIO + DESARROLLO WEB 360°) */}
        <div className="space-y-3 px-2">
          <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight flex items-center justify-center gap-2">
            <span>Angel</span>
            <span className="text-gradient-rise">Domo 360°</span>
          </h1>

          <div
            className={`text-xs sm:text-sm font-sans leading-relaxed max-w-md mx-auto space-y-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <p className="font-extrabold tracking-wide uppercase text-[11px] sm:text-xs">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>Asesor Inmobiliario</span>
              <span className="mx-1.5 text-cyan-400 font-black">&</span>
              <span className="text-gradient-rise font-black">Desarrollador Web 360°</span>
            </p>

            <p>
              Impulso la <strong className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>venta de inmuebles e inversiones seguras</strong> en{' '}
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Juliaca y el sur del Perú</strong> con tecnología interactiva.{' '}
              ¿Buscas tu próxima propiedad o deseas{' '}
              <strong className={`font-black ${isDark ? 'text-[#00f2fe]' : 'text-[#008b99]'}`}>digitalizar tus proyectos con recorridos 360° y desarrollo a medida</strong>?{' '}
              <span className={`font-extrabold block sm:inline mt-1 sm:mt-0 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                Estás en el lugar correcto.
              </span>
            </p>
          </div>
        </div>

        {/* FILA DE REDES SOCIALES (ICONOS OFICIALES ULTRA NÍTIDOS) */}
        <div className="flex items-center justify-center gap-3.5 py-1">
          {/* WhatsApp Directo */}
          <a
            href={SOCIAL_URLS.whatsapp('Hola Angel Domo 360°, vi tu perfil y deseo más información.')}
            onClick={(e) => openSocialApp(e, 'whatsapp', 'Hola Angel Domo 360°, vi tu perfil y deseo más información.')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] active:scale-95 group cursor-pointer ${
              isDark ? 'border-white/10 bg-white/[0.05] text-gray-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
            }`}
            aria-label="WhatsApp"
            title="Escribir a WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={SOCIAL_URLS.facebook}
            onClick={(e) => openSocialApp(e, 'facebook')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] hover:shadow-[0_0_20px_rgba(24,119,242,0.5)] active:scale-95 group cursor-pointer ${
              isDark ? 'border-white/10 bg-white/[0.05] text-gray-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
            }`}
            aria-label="Facebook"
            title="Página de Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={SOCIAL_URLS.instagram}
            onClick={(e) => openSocialApp(e, 'instagram')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-[#ee2a7b] hover:shadow-[0_0_20px_rgba(238,42,123,0.5)] active:scale-95 group cursor-pointer ${
              isDark ? 'border-white/10 bg-white/[0.05] text-gray-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
            }`}
            aria-label="Instagram"
            title="Perfil de Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href={SOCIAL_URLS.youtube}
            onClick={(e) => openSocialApp(e, 'youtube')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-[#ff0000] hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] active:scale-95 group cursor-pointer ${
              isDark ? 'border-white/10 bg-white/[0.05] text-gray-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
            }`}
            aria-label="YouTube"
            title="Canal de YouTube"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.53 12 3.53 12 3.53s-7.53 0-9.388.525a3.003 3.003 0 0 0-2.11 2.108C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.47 12 20.47 12 20.47s7.53 0 9.388-.525a3.003 3.003 0 0 0 2.11-2.108C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href={SOCIAL_URLS.tiktok}
            onClick={(e) => openSocialApp(e, 'tiktok')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-[#010101] hover:border-slate-700 hover:shadow-[0_0_20px_rgba(0,180,216,0.35)] active:scale-95 group cursor-pointer ${
              isDark ? 'border-white/10 bg-white/[0.05] text-gray-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'
            }`}
            aria-label="TikTok"
            title="Cuenta de TikTok"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.56 4.2 1.12 1.35 2.7 2.29 4.38 2.68v3.83c-1.89-.01-3.76-.58-5.33-1.66v7.4c.03 2.13-.57 4.29-1.9 5.96-1.76 2.24-4.56 3.58-7.39 3.58-2.6 0-5.17-1.12-6.84-3.13C-.17 20.35-1.01 16.86-.41 13.88c.6-2.92 2.61-5.46 5.4-6.67 1.24-.55 2.58-.82 3.93-.82.38 0 .76.02 1.14.07v3.91c-.48-.07-.98-.1-1.47-.08-1.57.06-3.11.75-4.11 1.96-1.17 1.4-1.53 3.42-1.04 5.14.49 1.76 1.88 3.19 3.63 3.69 1.88.54 4.02-.03 5.31-1.46.99-1.11 1.43-2.61 1.41-4.09l.01-15.52z"/>
            </svg>
          </a>
        </div>

        {/* LISTADO DE BOTONES / ENLACES DE ACCIÓN (ESTILO LINK IN BIO MEJORADO) */}
        <div className="w-full space-y-3.5 pt-2">
          
          {/* BOTÓN 1 (HERO CTA): WHATSAPP BUSINESS DIRECTO */}
          <a
            href={SOCIAL_URLS.whatsapp('Hola Angel Domo 360°, deseo coordinar una visita o hacer una consulta inmobiliaria.')}
            onClick={(e) => openSocialApp(e, 'whatsapp', 'Hola Angel Domo 360°, deseo coordinar una visita o hacer una consulta inmobiliaria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative group overflow-hidden rounded-2xl p-4 flex items-center justify-between transition-all duration-300 active:scale-98 shadow-[0_10px_25px_rgba(16,185,129,0.25)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.45)] bg-gradient-to-r from-[#0d9488] via-[#10b981] to-[#059669] hover:from-[#0f766e] hover:via-[#059669] hover:to-[#047857] text-white font-display text-left border border-emerald-300/30"
          >
            {/* Destello de luz interna superior */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <div className="flex items-center gap-3.5 min-w-0 z-10">
              <div className="w-11 h-11 rounded-xl bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform text-white">
                <svg className="w-6 h-6 fill-current drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono uppercase tracking-wider block text-emerald-100 font-bold">
                  Respuesta Rápida
                </span>
                <span className="text-sm sm:text-base font-black text-white block truncate tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Escríbeme al WhatsApp Business
                </span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/90 shrink-0 group-hover:translate-x-1.5 transition-transform z-10" />
          </a>

          {/* BOTÓN 2: VER PROPIEDADES Y TERRENOS 360° (PROYECTOS) */}
          <Link
            to="/proyectos"
            className={`w-full group rounded-2xl p-4 flex items-center justify-between border transition-all duration-300 active:scale-98 text-left ${
              isDark
                ? 'bg-white/[0.04] border-cyan-500/30 hover:border-cyan-400 hover:bg-white/[0.08] hover:shadow-[0_0_25px_rgba(0,242,254,0.15)] text-white'
                : 'bg-white border-slate-200/90 hover:border-cyan-500 hover:bg-slate-50 hover:shadow-md text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 p-1.5 transition-transform duration-300 group-hover:scale-105 ${
                  isDark ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-500/20 shadow-sm'
                }`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}logo3.2.webp`}
                  alt="Nexus Domo 360 Logo"
                  className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,242,254,0.3)]"
                />
              </div>
              <div className="truncate">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                    isDark ? 'text-cyan-400' : 'text-[#008b99]'
                  }`}
                >
                  Tours Virtuales 3D & Dron
                </span>
                <span className="text-sm sm:text-base font-bold font-display block truncate">
                  Ver Propiedades y Terrenos 360°
                </span>
              </div>
            </div>
            <ChevronRight
              className={`w-5 h-5 shrink-0 group-hover:translate-x-1.5 transition-transform ${
                isDark ? 'text-gray-400 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-slate-900'
              }`}
            />
          </Link>

          {/* BOTÓN 3: TIKTOK OFICIAL */}
          <a
            href={SOCIAL_URLS.tiktok}
            onClick={(e) => openSocialApp(e, 'tiktok')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full group rounded-2xl p-3.5 flex items-center justify-between border transition-all duration-300 active:scale-98 text-left ${
              isDark
                ? 'bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06] text-white'
                : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-slate-800'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.56 4.2 1.12 1.35 2.7 2.29 4.38 2.68v3.83c-1.89-.01-3.76-.58-5.33-1.66v7.4c.03 2.13-.57 4.29-1.9 5.96-1.76 2.24-4.56 3.58-7.39 3.58-2.6 0-5.17-1.12-6.84-3.13C-.17 20.35-1.01 16.86-.41 13.88c.6-2.92 2.61-5.46 5.4-6.67 1.24-.55 2.58-.82 3.93-.82.38 0 .76.02 1.14.07v3.91c-.48-.07-.98-.1-1.47-.08-1.57.06-3.11.75-4.11 1.96-1.17 1.4-1.53 3.42-1.04 5.14.49 1.76 1.88 3.19 3.63 3.69 1.88.54 4.02-.03 5.31-1.46.99-1.11 1.43-2.61 1.41-4.09l.01-15.52z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-xs sm:text-sm font-bold block truncate">
                  Sígueme en TikTok (@angel.domo360)
                </span>
                <span className={`text-[11px] block truncate ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Videos cortos y novedades inmobiliarias
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors shrink-0" />
          </a>

          {/* BOTÓN 4: YOUTUBE OFICIAL */}
          <a
            href={SOCIAL_URLS.youtube}
            onClick={(e) => openSocialApp(e, 'youtube')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full group rounded-2xl p-3.5 flex items-center justify-between border transition-all duration-300 active:scale-98 text-left ${
              isDark
                ? 'bg-white/[0.03] border-white/10 hover:border-red-500/40 hover:bg-white/[0.06] text-white'
                : 'bg-white border-slate-200/80 hover:border-red-500/40 hover:bg-slate-50 text-slate-800'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#ff0000] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.53 12 3.53 12 3.53s-7.53 0-9.388.525a3.003 3.003 0 0 0-2.11 2.108C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.47 12 20.47 12 20.47s7.53 0 9.388-.525a3.003 3.003 0 0 0 2.11-2.108C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-xs sm:text-sm font-bold block truncate">
                  Únete al Canal YouTube (@angel.domo360)
                </span>
                <span className={`text-[11px] block truncate ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Recorridos completos y análisis de lotes
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors shrink-0" />
          </a>

          {/* BOTÓN 5: INSTAGRAM */}
          <a
            href={SOCIAL_URLS.instagram}
            onClick={(e) => openSocialApp(e, 'instagram')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full group rounded-2xl p-3.5 flex items-center justify-between border transition-all duration-300 active:scale-98 text-left ${
              isDark
                ? 'bg-white/[0.03] border-white/10 hover:border-pink-500/40 hover:bg-white/[0.06] text-white'
                : 'bg-white border-slate-200/80 hover:border-pink-500/40 hover:bg-slate-50 text-slate-800'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-xs sm:text-sm font-bold block truncate">
                  Sígueme en Instagram (@angel.domo360)
                </span>
                <span className={`text-[11px] block truncate ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Historias y publicaciones diarias
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-400 transition-colors shrink-0" />
          </a>

          {/* BOTÓN 6: FACEBOOK */}
          <a
            href={SOCIAL_URLS.facebook}
            onClick={(e) => openSocialApp(e, 'facebook')}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full group rounded-2xl p-3.5 flex items-center justify-between border transition-all duration-300 active:scale-98 text-left ${
              isDark
                ? 'bg-white/[0.03] border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] text-white'
                : 'bg-white border-slate-200/80 hover:border-blue-500/40 hover:bg-slate-50 text-slate-800'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#1877f2] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-xs sm:text-sm font-bold block truncate">
                  Mi Página de Facebook (@angel.domo360)
                </span>
                <span className={`text-[11px] block truncate ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Comunidad y transmisiones en vivo
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors shrink-0" />
          </a>

        </div>

      </main>

      {/* PIE DE PÁGINA (SUTIL Y ELEGANTE) */}
      <footer className="w-full max-w-md mx-auto pt-8 pb-4 text-center z-10">
        <p className={`text-[11px] font-sans font-medium tracking-wide ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
          &copy; {new Date().getFullYear()} Nexus Domo 360°. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
