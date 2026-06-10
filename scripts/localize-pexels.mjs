// Tüm harici Pexels görsellerini indir → WebP → public/images/lib/ + data dosyalarını yeniden bağla.
// Çalıştır: node scripts/localize-pexels.mjs
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const libDir = join(root, 'public', 'images', 'lib');
await mkdir(libDir, { recursive: true });

const files = [
  'src/data/regions.ts',
  'src/data/sectors.ts',
  'src/data/decoration.ts',
  'src/data/gallery.ts',
  'src/pages/index.astro',
];

const urlRe = /https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^\s"'`)]+/g;

// 1. Benzersiz URL'leri topla (id bazında)
const byId = new Map();
for (const rel of files) {
  const content = await readFile(join(root, rel), 'utf8');
  for (const m of content.matchAll(urlRe)) {
    if (!byId.has(m[1])) byId.set(m[1], m[0]);
  }
}
console.log(`${byId.size} benzersiz Pexels görseli bulundu`);

// 2. İndir + WebP'ye çevir
const failed = new Set();
for (const [id, url] of byId) {
  const out = join(libDir, `pexels-${id}.webp`);
  if (existsSync(out)) { console.log(`zaten var: ${id}`); continue; }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const info = await sharp(buf).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
    console.log(`OK pexels-${id}.webp ${info.width}x${info.height} ${Math.round(info.size / 1024)}KB`);
  } catch (e) {
    console.log(`ERR ${id}: ${e.message}`);
    failed.add(id);
  }
}

// 3. Dosyalardaki URL'leri lokal yola çevir (indirilemeyenler hariç)
for (const rel of files) {
  const p = join(root, rel);
  let content = await readFile(p, 'utf8');
  let n = 0;
  content = content.replace(urlRe, (full, id) => {
    if (failed.has(id)) return full;
    n++;
    return `/images/lib/pexels-${id}.webp`;
  });
  await writeFile(p, content, 'utf8');
  console.log(`${rel}: ${n} URL lokalleştirildi`);
}
console.log(`Bitti. ${failed.size} indirilemeyen kaldı.`);
