// LCP görseli slide-1'i daha hafif yeniden encode et (mobil için).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'images', 'hero', 'slide-1.webp');
const url = 'https://images.pexels.com/photos/29802716/pexels-photo-29802716.jpeg?auto=compress&cs=tinysrgb&w=1600';
const res = await fetch(url);
const buf = Buffer.from(await res.arrayBuffer());
const info = await sharp(buf).resize({ width: 1366, withoutEnlargement: true }).webp({ quality: 60 }).toFile(out);
console.log(`slide-1.webp yeniden: ${info.width}x${info.height} ${Math.round(info.size / 1024)}KB`);
