// Hero görsellerini indir → WebP'ye çevir → public/images/hero/ altına kaydet.
// Çalıştır: node scripts/optimize-hero.mjs
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images', 'hero');

const slides = [
  { name: 'slide-1', url: 'https://images.pexels.com/photos/29802716/pexels-photo-29802716.jpeg?auto=compress&cs=tinysrgb&w=1920' },
  { name: 'slide-2', url: 'https://images.pexels.com/photos/13109834/pexels-photo-13109834.jpeg?auto=compress&cs=tinysrgb&w=1920' },
  { name: 'slide-3', url: 'https://images.pexels.com/photos/13806340/pexels-photo-13806340.jpeg?auto=compress&cs=tinysrgb&w=1920' },
  { name: 'slide-4', url: 'https://images.pexels.com/photos/33986701/pexels-photo-33986701.png?auto=compress&cs=tinysrgb&w=1920' },
  { name: 'slide-5', url: 'https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg?auto=compress&cs=tinysrgb&w=1920' },
];

await mkdir(outDir, { recursive: true });

for (const s of slides) {
  try {
    const res = await fetch(s.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const out = join(outDir, `${s.name}.webp`);
    const info = await sharp(buf)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(out);
    const kb = Math.round(info.size / 1024);
    console.log(`OK  ${s.name}.webp  ${info.width}x${info.height}  ${kb} KB`);
  } catch (err) {
    console.log(`ERR ${s.name}: ${err.message}`);
  }
}
console.log('Bitti → public/images/hero/');
