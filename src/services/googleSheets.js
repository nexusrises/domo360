// Servicio para consultar y formatear datos de lotes desde Google Sheets en tiempo real

const API_URL = import.meta.env.VITE_GOOGLE_SHEETS_API_URL || 'https://script.google.com/macros/s/AKfycbyzQdWdh8QEeoO-277fk7r36k1nAgE7Vi4B5l2yUmQ2CnZEBrrS6Jy2iCXjEWyRXArCfQ/exec';

// Caché en memoria para evitar llamadas redundantes de red
let cachedLotes = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // 60 segundos

/**
 * Obtiene la lista completa de lotes registrados en la hoja de cálculo de Google Sheets.
 * @returns {Promise<Array>} Array de lotes con campos normalizados en minúsculas.
 */
export async function fetchLotesFromSheets() {
  if (!API_URL) {
    console.warn("VITE_GOOGLE_SHEETS_API_URL no está definida en las variables de entorno.");
    return [];
  }

  const now = Date.now();
  if (cachedLotes && (now - lastFetchTime < CACHE_DURATION)) {
    return cachedLotes;
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error en la consulta a Google Sheets: ${response.statusText}`);
    }
    const data = await response.json();
    cachedLotes = Array.isArray(data) ? data : [];
    lastFetchTime = Date.now();
    return cachedLotes;
  } catch (error) {
    console.error("Error al obtener los lotes desde Google Sheets:", error);
    // Si la llamada falla, devolvemos la caché si existe como plan de respaldo
    if (cachedLotes) {
      console.log("Retornando datos antiguos de caché como respaldo ante fallo.");
      return cachedLotes;
    }
    return [];
  }
}

/**
 * Retorna el color correspondiente al estado del lote para los marcadores 3D.
 * @param {string} estado Estado del lote (ej: 'Disponible', 'Vendido').
 * @returns {string} Código de color hexadecimal.
 */
export function getColorForEstado(estado) {
  if (!estado) return '#22c55e'; // Verde por defecto para Disponible

  const estadoLimpio = estado.toString().trim().toLowerCase();

  if (estadoLimpio === 'disponible') {
    return '#22c55e'; // Verde
  }
  if (estadoLimpio.includes('reservado')) {
    return '#eab308'; // Amarillo
  }
  if (estadoLimpio === 'financiado') {
    return '#f97316'; // Naranja
  }
  if (estadoLimpio === 'vendido') {
    return '#ef4444'; // Rojo
  }

  return '#22c55e'; // Default
}

/**
 * Formatea el precio para mostrar en pantalla de forma estética.
 * @param {any} precio Valor del precio (ej: 32000 o "S/. 32,000").
 * @returns {string} Precio formateado.
 */
export function formatPrecio(precio) {
  if (precio === undefined || precio === null || precio === '') return '';
  const strPrecio = precio.toString().trim();
  
  // Si ya tiene símbolos monetarios, devolverlo tal cual
  if (strPrecio.includes('$') || strPrecio.toLowerCase().includes('s/.') || strPrecio.toLowerCase().includes('soles')) {
    return strPrecio;
  }
  
  // Si es un número puro, formatear a Soles peruanos por defecto
  const num = parseFloat(strPrecio.replace(/[^0-9.-]/g, ''));
  if (!isNaN(num)) {
    return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN', maximumFractionDigits: 0 }).format(num);
  }
  
  return strPrecio;
}

/**
 * Formatea el área para mostrarla estéticamente.
 * @param {any} area Valor del área (ej: 160 o "160 m²").
 * @returns {string} Área formateada.
 */
export function formatArea(area) {
  if (area === undefined || area === null || area === '') return '';
  const strArea = area.toString().trim();
  
  if (strArea.includes('m²') || strArea.toLowerCase().includes('m2') || strArea.toLowerCase().includes('metros')) {
    return strArea;
  }
  
  const num = parseFloat(strArea.replace(/[^0-9.-]/g, ''));
  if (!isNaN(num)) {
    return `${num} m²`;
  }
  
  return strArea;
}
