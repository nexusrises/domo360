import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  const subfolderPath = path.resolve(__dirname, '../public/tour/casasalidapuno');
  const targetPaths = [
    path.resolve(__dirname, '../public/tours/casasalidapuno.json'),
    path.resolve(__dirname, '../src/data/tours/casasalidapuno.json')
  ];

  if (!fs.existsSync(subfolderPath)) {
    console.error("Folder not found:", subfolderPath);
    process.exit(1);
  }

  const files = fs.readdirSync(subfolderPath);
  const images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file) && file !== 'portadacasa1.png');

  // Ordenar alfabéticamente para que queden secuenciales (por el timestamp del nombre)
  images.sort();

  const tourData = {};

  images.forEach((img, idx) => {
    const rawName = img.replace(/\.[^/.]+$/, "");
    // Generar un ID de escena limpio
    const sceneId = rawName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    
    // Generar un nombre de escena legible
    let nombre = "";
    if (img.startsWith('DJI_')) {
      nombre = "Vista Aérea Panorámica";
    } else {
      nombre = `Estancia ${idx + 1}`;
    }

    tourData[sceneId] = {
      nombre: nombre,
      imagen: `/tour/casasalidapuno/${img}`,
      hotspots: [],
      heading: { x: 0, y: 0 },
      norteMagnetico: 0,
      filtro: "normal"
    };
  });

  // Asegurar que la primera escena sea la de la fachada o vista aérea si existe
  const keys = Object.keys(tourData);
  const djiKey = keys.find(k => k.startsWith('dji_'));
  if (djiKey && keys[0] !== djiKey) {
    // Reordenar para que la vista aérea sea la primera escena por defecto
    const reorderedTour = {};
    reorderedTour[djiKey] = tourData[djiKey];
    keys.forEach(k => {
      if (k !== djiKey) {
        reorderedTour[k] = tourData[k];
      }
    });
    
    // Escribir los archivos
    targetPaths.forEach(targetPath => {
      const dir = path.dirname(targetPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(targetPath, JSON.stringify(reorderedTour, null, 2), 'utf-8');
      console.log("Written tour JSON successfully to:", targetPath);
    });
  } else {
    // Escribir los archivos
    targetPaths.forEach(targetPath => {
      const dir = path.dirname(targetPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(targetPath, JSON.stringify(tourData, null, 2), 'utf-8');
      console.log("Written tour JSON successfully to:", targetPath);
    });
  }

} catch (e) {
  console.error("Error generating tour JSON:", e);
}
