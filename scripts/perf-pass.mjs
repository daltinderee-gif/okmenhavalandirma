// Performans paçı: /images/lib ve /products görsellerini gösterim boyutuna yakın küçült,
// logo.png -> logo.webp üret. Çalıştır: node scripts/perf-pass.mjs
import sharp from 'sharp';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function reencodeDir(rel, maxDim, quality) {
  const dir = join(root, rel);
  let files;
  try { files = await readdir(dir); } catch { return; }
  let before = 0, after = 0, n = 0;
  for (const f of files) {
    if (!f.endsWith('.webp')) continue;
    const p = join(dir, f);
    const buf = await readFile(p);
    before += buf.length;
    const out = await sharp(buf)
      .resize({ width: maxDim, height: maxDim, fit: 'inside', withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
    await writeFile(p, out);
    after += out.length;
    n++;
  }
  console.log(`${rel}: ${n} dosya  ${Math.round(before/1024)}KB -> ${Math.round(after/1024)}KB`);
}

// Galeri/kart/hero arka plan görselleri: maksimum kenar 1100, q68
await reencodeDir('public/images/lib', 1100, 68);
// Ürün kartları ~389px gösteriliyor -> 800px yeter
await reencodeDir('public/products', 800, 74);

// Logo: png -> webp (gösterim ~144px, retina için 360px)
const logoBuf = await readFile(join(root, 'public', 'logo.png'));
const logoInfo = await sharp(logoBuf).resize({ width: 360, withoutEnlargement: true }).webp({ quality: 88 }).toFile(join(root, 'public', 'logo.webp'));
console.log(`logo.webp: ${logoInfo.width}x${logoInfo.height}  ${Math.round(logoInfo.size/1024)}KB (önce png 170KB)`);
