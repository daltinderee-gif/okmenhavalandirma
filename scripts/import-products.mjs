// Gemini ile üretilen ürün görsellerini WebP'ye çevir → public/products/{slug}.webp
// Çalıştır: node scripts/import-products.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'products');
const dl = join(homedir(), 'Downloads');

// Görsele bakılarak elle doğrulanmış eşleşme (timestamp sırasıyla)
const map = [
  { slug: 'aksiyal-fan',             file: 'Gemini_Generated_Image_bxrm4gbxrm4gbxrm.png' },
  { slug: 'hucreli-aspirator',       file: 'Gemini_Generated_Image_niweilniweilniwe.png' },
  { slug: 'klima-santrali',          file: 'Gemini_Generated_Image_ke864tke864tke86.png' },
  { slug: 'toz-toplama-sistemleri',  file: 'Gemini_Generated_Image_hspdq2hspdq2hspd.png' },
  { slug: 'davlumbaz-sistemleri',    file: 'Gemini_Generated_Image_g3mk61g3mk61g3mk.png' },
  { slug: 'celik-baca-sistemleri',   file: 'Gemini_Generated_Image_qyf7adqyf7adqyf7.png' },
];

await mkdir(outDir, { recursive: true });

for (const { slug, file } of map) {
  const src = join(dl, file);
  if (!existsSync(src)) { console.log(`ATLA ${slug}: kaynak yok (${file})`); continue; }
  const out = join(outDir, `${slug}.webp`);
  const info = await sharp(src)
    .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(`OK ${slug}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
console.log('Bitti → public/products/');
