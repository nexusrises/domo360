import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta de destino
const targetDir = path.join(__dirname, '../public/descargas_kuula');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Lista de imágenes a descargar
const images = [
  {
    name: '01_rm_vista_lugares_referencia.jpg',
    url: 'https://files.kuula.io/68b0-c518-9630-a164/01-8192.jpg'
  },
  {
    name: '02_residencial_maravillas.jpg',
    url: 'https://files.kuula.io/68b5-d24e-c304-3180/01-6244.jpg'
  },
  {
    name: '03_maravillas_02.jpg',
    url: 'https://files.kuula.io/68b5-ee8b-7096-5520/01-6206.jpg'
  },
  {
    name: '04_mara_ii_mz_c.jpg',
    url: 'https://files.kuula.io/690b-c4a1-44b3-4943/01-8192.jpg'
  },
  {
    name: '05_mara_ii_mz_b.jpg',
    url: 'https://files.kuula.io/690b-bb51-7c13-8807/01-8192.jpg'
  },
  {
    name: '06_mara_ii_mz_e.jpg',
    url: 'https://files.kuula.io/690b-b47e-b7c5-c169/01-8192.jpg'
  },
  {
    name: '07_mara_ii_mz_d.jpg',
    url: 'https://files.kuula.io/690b-af33-a560-3163/01-8192.jpg'
  },
  {
    name: '08_residencial_maravillas_ii.jpg',
    url: 'https://files.kuula.io/690b-6a11-c38d-5144/01-8192.jpg'
  }
];

const downloadFile = (url, destPath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Error al descargar ${url}: Código de estado HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // Eliminar archivo parcial en caso de error
      reject(err);
    });
  });
};

const run = async () => {
  console.log('Iniciando la descarga de imágenes 360 desde Kuula...');
  console.log(`Guardando en: ${targetDir}\n`);

  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    console.log(`Descargando: ${item.name}...`);
    try {
      await downloadFile(item.url, dest);
      console.log(`✓ Descargado con éxito: ${item.name}`);
    } catch (error) {
      console.error(`✗ Falló la descarga de ${item.name}:`, error.message);
    }
  }

  console.log('\n¡Proceso de descarga finalizado!');
};

run();
