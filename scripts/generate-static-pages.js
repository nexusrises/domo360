import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { propiedades } from '../src/data/propiedadesData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const indexHtmlPath = path.join(distDir, 'index.html')

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html no existe. Ejecuta vite build primero.')
  process.exit(1)
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8')

// Rutas estáticas principales a pre-generar
const routes = [
  {
    path: 'bio',
    title: 'Angel Apaza | Domo 360° - Proyectos Inmobiliarios y Recorridos Virtuales',
    description: 'Conoce los proyectos inmobiliarios, terrenos en venta y servicios de recorridos virtuales 360° en Juliaca y Puno con Angel Apaza Domo 360°.'
  },
  {
    path: 'vende-tu-propiedad',
    title: 'Vende tu Terreno o Casa en Juliaca y Puno | Nexus Domo 360°',
    description: 'Vendemos tu predio al mejor precio del mercado con tecnología 360°, vuelos de dron y saneamiento legal SUNARP sin costo anticipado.'
  },
  {
    path: 'servicios-360',
    title: 'Servicios de Recorridos Virtuales 360° y Dron en Juliaca y Puno | Nexus Domo 360°',
    description: 'Digitalización 360° interactiva para proyectos inmobiliarios, lotizaciones, comercios y constructoras en el sur del Perú.'
  },
  {
    path: 'propiedades',
    title: 'Catálogo de Terrenos y Casas en Venta en Juliaca y Puno | Nexus Domo 360°',
    description: 'Explora lotes saneados, terrenos comerciales y casas residenciales en venta en Juliaca con tour virtual 360° y vistas aéreas.'
  },
  {
    path: 'compra-seguro',
    title: 'Compra Seguro: Auditoría Legal y Verificación SUNARP | Nexus Domo 360°',
    description: 'Garantizamos compras inmobiliarias seguras en Juliaca y Puno. Verificamos partidas SUNARP, gravámenes y medidas perimétricas reales.'
  },
  {
    path: 'contacto',
    title: 'Contactar Asesoría Inmobiliaria y Producción 360° | Nexus Domo 360°',
    description: 'Comunícate con nuestro equipo en Juliaca para consultas sobre venta de inmuebles, cotizaciones de tours 360° o asesoría legal.'
  }
]

// Agregar cada propiedad dinámica como ruta física
propiedades.forEach((prop) => {
  routes.push({
    path: prop.slug,
    title: `${prop.titulo} | Nexus Domo 360°`,
    description: `${prop.descripcionCorta || prop.descripcionCompleta?.slice(0, 150) || 'Propiedad en venta en Juliaca con recorrido virtual 360°.'}`,
    image: prop.portada
  })
})

console.log(`🚀 Generando ${routes.length} páginas HTML estáticas para indexación en Google...`)

routes.forEach((route) => {
  const routeDir = path.join(distDir, route.path)
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true })
  }

  // Modificar etiquetas SEO en el HTML para cada página específica
  let customHtml = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://nexusdomo360.com/${route.path}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="https://nexusdomo360.com/${route.path}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)

  if (route.image) {
    const fullImageUrl = route.image.startsWith('http') ? route.image : `https://nexusdomo360.com${route.image.startsWith('/') ? '' : '/'}${route.image}`
    customHtml = customHtml
      .replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${fullImageUrl}" />`)
      .replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${fullImageUrl}" />`)
  }

  const targetFile = path.join(routeDir, 'index.html')
  fs.writeFileSync(targetFile, customHtml, 'utf-8')
  console.log(`  ✓ Creado: dist/${route.path}/index.html (200 OK para Google)`)
})

console.log('✅ ¡Todas las rutas físicas han sido generadas con éxito! Google recibirá código 200 OK.')
