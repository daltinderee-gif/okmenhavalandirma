// 2. parti ürün görselleri (generic 16) → WebP → public/products/{slug}.webp
// Eşleşme görsele bakılarak elle doğrulandı. Çalıştır: node scripts/import-products-batch2.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'products');
const dl = join(homedir(), 'Downloads');

const map = [
  { slug: 'havalandirma-sistemleri', file: 'Gemini_Generated_Image_osmpgmosmpgmosmp.png' },
  { slug: 'salyangoz-fan',           file: 'Gemini_Generated_Image_dhkc90dhkc90dhkc.png' },
  { slug: 'hava-kanallari',          file: 'Gemini_Generated_Image_t5st0jt5st0jt5st.png' },
  { slug: 'elektrostatik-filtre',    file: 'Gemini_Generated_Image_enowq3enowq3enow.png' },
  { slug: 'filtreler',               file: 'Gemini_Generated_Image_m7q7o1m7q7o1m7q7.png' },
  { slug: 'flexible-borular',        file: 'Gemini_Generated_Image_isocz1isocz1isoc.png' },
  { slug: 'baglanti-ekipmanlari',    file: 'Gemini_Generated_Image_1y1nwb1y1nwb1y1n.png' },
  { slug: 'menfez',                  file: 'Gemini_Generated_Image_u4u8l3u4u8l3u4u8.png' },
  { slug: 'isitma-sistemleri',       file: 'Gemini_Generated_Image_52w7a452w7a452w7.png' },
  { slug: 'sulu-filtre',             file: 'Gemini_Generated_Image_s12ttxs12ttxs12t.png' },
  { slug: 'esmatik',                 file: 'Gemini_Generated_Image_a4r8sxa4r8sxa4r8.png' },
  { slug: 'baca-sistemleri',         file: 'Gemini_Generated_Image_67agux67agux67ag.png' },
  { slug: 'klima-sistemleri',        file: 'Gemini_Generated_Image_jys5wgjys5wgjys5.png' },
  { slug: 'izolasyon-kaplama',       file: 'Gemini_Generated_Image_8nd7fd8nd7fd8nd7.png' },
  { slug: 'medikal-gaz-tesisati',    file: 'Gemini_Generated_Image_cpf049cpf049cpf0.png' },
  { slug: 'somine-sistemleri',       file: 'Gemini_Generated_Image_rgihv4rgihv4rgih.png' },
];

await mkdir(outDir, { recursive: true });
let ok = 0;
for (const { slug, file } of map) {
  const src = join(dl, file);
  if (!existsSync(src)) { console.log(`ATLA ${slug}: kaynak yok (${file})`); continue; }
  const out = join(outDir, `${slug}.webp`);
  const info = await sharp(src)
    .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(`OK ${slug}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
  ok++;
}
console.log(`Bitti → public/products/  (${ok} görsel)`);
