import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Plugin local para emular endpoints de subida y guardado físico en disco durante el desarrollo
const tourEditorApiPlugin = () => ({
  name: 'tour-editor-api',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Endpoint 1: Guardar la configuración JSON del tour
      if (req.method === 'POST' && req.url?.startsWith('/api/save-tour-data')) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
          try {
            const { tourId, scenes } = JSON.parse(body);
            if (!tourId || !scenes) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Faltan parámetros: tourId o scenes' }));
              return;
            }

            console.log("=== API GUARDANDO TOUR DATA ===");
            console.log("Tour ID:", tourId);
            console.log("Escenas recibidas:", JSON.stringify(scenes, null, 2));

            const toursDir = path.resolve(__dirname, 'public/tours');
            if (!fs.existsSync(toursDir)) {
              fs.mkdirSync(toursDir, { recursive: true });
            }

            fs.writeFileSync(
              path.join(toursDir, `${tourId}.json`), 
              JSON.stringify(scenes, null, 2),
              'utf-8'
            );

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: `Configuración guardada en src/data/tours/${tourId}.json` }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
        return;
      }

      // Endpoint 2: Guardar archivos de imágenes en base64 en la carpeta del proyecto
      if (req.method === 'POST' && req.url?.startsWith('/api/upload-tour-image')) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
          try {
            const { tourId, filename, base64 } = JSON.parse(body);
            if (!tourId || !filename || !base64) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Faltan parámetros: tourId, filename o base64' }));
              return;
            }

            const tourImgDir = path.resolve(__dirname, `public/tour/${tourId}`);
            if (!fs.existsSync(tourImgDir)) {
              fs.mkdirSync(tourImgDir, { recursive: true });
            }

            // Decodificar base64 a buffer
            const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');

            fs.writeFileSync(path.join(tourImgDir, filename), buffer);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ 
              success: true, 
              url: `/tour/${tourId}/${filename}` 
            }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
        return;
      }

      // Endpoint 3: Listar imágenes del proyecto (en la carpeta del tour o en descargas_kuula)
      if (req.method === 'GET' && req.url?.startsWith('/api/list-project-images')) {
        try {
          const urlObj = new URL(req.url, `http://${req.headers.host}`);
          const tourId = urlObj.searchParams.get('tourId') || 'inmobiliaria';

          const imagesList = [];
          const folders = [];

          // Escanear dinámicamente public/tour/ y sus subcarpetas
          const tourBaseDir = path.resolve(__dirname, 'public/tour');
          if (fs.existsSync(tourBaseDir)) {
            const items = fs.readdirSync(tourBaseDir);
            items.forEach(item => {
              const itemPath = path.join(tourBaseDir, item);
              const stats = fs.statSync(itemPath);

              if (stats.isFile()) {
                // Archivos directamente en public/tour/ son Imágenes Generales
                if (/\.(jpg|jpeg|png|webp|gif)$/i.test(item)) {
                  imagesList.push({
                    name: item,
                    url: `/tour/${item}`,
                    category: 'Imágenes Generales'
                  });
                }
              } else if (stats.isDirectory()) {
                // Registrar el nombre de la carpeta (tour)
                folders.push(item);

                // Subcarpetas de public/tour/ representan tours específicos
                const subfolderFiles = fs.readdirSync(itemPath);
                subfolderFiles.forEach(file => {
                  const filePath = path.join(itemPath, file);
                  if (fs.statSync(filePath).isFile() && /\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
                    imagesList.push({
                      name: file,
                      url: `/tour/${item}/${file}`,
                      category: `Tour: ${item}`
                    });
                  }
                });
              }
            });
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.end(JSON.stringify({ success: true, images: imagesList, folders }));
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
        return;
      }

      next();
    });
  }
});

// Plugin para copiar index.html como 404.html para dar soporte de rutas limpias en GitHub Pages
const copyIndexTo404Plugin = () => ({
  name: 'copy-index-to-404',
  closeBundle() {
    try {
      const indexHtmlPath = path.resolve(__dirname, 'dist/index.html')
      const target404Path = path.resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(indexHtmlPath)) {
        fs.copyFileSync(indexHtmlPath, target404Path)
        console.log('✓ Copiado dist/index.html a dist/404.html para soporte de SPA en GitHub Pages!')
      }
    } catch (e) {
      console.error('Error al copiar index.html a 404.html:', e)
    }
  }
});

// https://vite.dev/config/
export default defineConfig({
  base: '/domo360/',
  plugins: [react(), tourEditorApiPlugin(), copyIndexTo404Plugin()],
  resolve: {
    alias: {
      three: path.resolve(__dirname, './node_modules/three'),
    },
    dedupe: ['three'],
  },
})
