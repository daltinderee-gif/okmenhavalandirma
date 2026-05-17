// Sektör-temalı hero görselleri çek — her işletme türünün KENDİ ortam fotosu
// (klima/HVAC stok fotosu değil)
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE_PATH = path.join(__dirname, '..', 'src', 'data', 'sectors.ts');
const API_KEY = process.env.PEXELS_API_KEY || 'lIyr1PsXsFdfokCSYzhsNgqzpTpgLnuklB3Ttja1ohe56as16Ewg7vby';

const searchPlans = {
  'restoran-cafe': [
    { q: 'modern restaurant interior dining', color: null },
    { q: 'cozy cafe interior', color: null },
  ],
  'magaza-market': [
    { q: 'modern retail store interior', color: null },
    { q: 'clothing shop boutique', color: null },
  ],
  'ofis-isyeri': [
    { q: 'modern office space interior', color: 'white' },
    { q: 'corporate office workplace', color: null },
  ],
  'otel-konaklama': [
    { q: 'modern hotel lobby interior', color: null },
    { q: 'boutique hotel reception', color: null },
  ],
  'fabrika-uretim': [
    { q: 'factory production line workers', color: 'gray' },
    { q: 'industrial manufacturing plant', color: null },
  ],
  'saglik-klinik': [
    { q: 'modern hospital interior corridor', color: 'white' },
    { q: 'clinic medical waiting room', color: null },
  ],
  'okul-egitim': [
    { q: 'kindergarten classroom kids playing', color: null },
    { q: 'modern preschool classroom', color: null },
    { q: 'school classroom interior', color: null },
  ],
};

const fallback = 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=1600';

async function fetchAttempt(query, color) {
  const params = new URLSearchParams({ query, per_page: '3', orientation: 'landscape' });
  if (color) params.set('color', color);
  const url = `https://api.pexels.com/v1/search?${params}`;
  try {
    const res = await fetch(url, { headers: { Authorization: API_KEY } });
    if (!res.ok) return null;
    const data = await res.json();
    const photo = data.photos?.[0];
    if (!photo) return null;
    return {
      url: (photo.src.large2x || photo.src.large || photo.src.original).replace(/w=\d+/, 'w=1600'),
      photographer: photo.photographer,
      query,
    };
  } catch {
    return null;
  }
}

async function fetchForSlug(slug, plans) {
  for (const plan of plans) {
    const r = await fetchAttempt(plan.q, plan.color);
    if (r) return r;
    await new Promise((res) => setTimeout(res, 200));
  }
  return null;
}

async function main() {
  console.log('Sektörel hero görselleri çekiliyor...\n');
  const results = {};
  for (const [slug, plans] of Object.entries(searchPlans)) {
    process.stdout.write(`  ${slug.padEnd(20)}... `);
    const r = await fetchForSlug(slug, plans);
    if (r) {
      results[slug] = r.url;
      console.log(`✓ "${r.query}" · ${r.photographer}`);
    } else {
      results[slug] = fallback;
      console.log('✗ fallback');
    }
    await new Promise((res) => setTimeout(res, 250));
  }

  console.log('\nsectors.ts güncelleniyor...');
  let source = await readFile(FILE_PATH, 'utf8');
  let changed = 0;
  for (const [slug, imageUrl] of Object.entries(results)) {
    const blockRegex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?heroImage:\\s*)['"][^'"]*['"]`);
    if (blockRegex.test(source)) {
      source = source.replace(blockRegex, (m, prefix) => `${prefix}'${imageUrl}'`);
      changed++;
    }
  }
  await writeFile(FILE_PATH, source, 'utf8');
  console.log(`✓ ${changed}/${Object.keys(results).length} sektör hero güncellendi.`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
