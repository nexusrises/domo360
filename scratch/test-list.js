import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  const subfolderPath = path.resolve(__dirname, '../public/tour/casasalidapuno');

  if (fs.existsSync(subfolderPath)) {
    const files = fs.readdirSync(subfolderPath);
    let totalSize = 0;
    
    console.log("Files in 'casasalidapuno':");
    files.forEach(file => {
      const filePath = path.join(subfolderPath, file);
      const stats = fs.statSync(filePath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      totalSize += stats.size;
      console.log(`- ${file}: ${sizeMB} MB`);
    });
    
    console.log(`\nTotal Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  }
} catch (e) {
  console.error("Error:", e);
}
