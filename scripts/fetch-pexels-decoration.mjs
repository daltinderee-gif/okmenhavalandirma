// Fetches photos for Mir Dekorasyon services and rewrites decoration.ts
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE_PATH = path.join(__dirname, '..', 'src', 'data', 'decoration.ts');
const API_KEY = process.env.PEXELS_API_KEY || 'lIyr1PsXsFdfokCSYzhsNgqzpTpgLnuklB3Ttja1ohe56as16Ewg7vby';

const searchPlans = {
  'ic-mimari-tasarim': [
    { q: 'modern living room interior', color: 'white' },
    { q: 'interior design modern', color: null },
  ],
  '3d-gorsellestirme': [
    { q: '3d render interior', color: 'white' },
    { q: 'interior visualization', color: null },
  ],
  'tadilat-renovasyon': [
    { q: 'home renovation construction', color: 'gray' },
    { q: 'house renovation', color: null },
  ],
  'asma-tavan': [
    { q: 'modern ceiling design', color: 'white' },
    { q: 'suspended ceiling', color: null },
  ],
  'alcipan-duvar': [
    { q: 'drywall construction', color: 'gray' },
    { q: 'gypsum wall installation', color: null },
  ],
  'boya-badana': [
    { q: 'interior paint wall', color: 'white' },
    { q: 'paint roller wall', color: null },
  ],
  'dis-cephe-kaplama': [
    { q: 'modern building facade', color: 'white' },
    { q: 'building cladding', color: null },
  ],
  'zemin-kaplama': [
    { q: 'wood flooring installation', color: 'white' },
    { q: 'laminate floor', color: null },
  ],
};

const fallback = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1280';

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
      url: photo.src.large || photo.src.large2x || photo.src.original,
      photographer: photo.photographer,
      query,
      color: color || 'any',
    };
  } catch {
    return null;
  }
}

async function fetchForSlug(slug, plans) {
  for (const plan of plans) {
    const result = await fetchAttempt(plan.q, plan.color);
    if (result) return result;
    await new Promise((r) => setTimeout(r, 200));
  }
  return null;
}

async function main() {
  console.log('Mir Dekorasyon için Pexels fotoğrafları çekiliyor...\n');
  const results = {};
  for (const [slug, plans] of Object.entries(searchPlans)) {
    process.stdout.write(`  ${slug.padEnd(24)}... `);
    const result = await fetchForSlug(slug, plans);
    if (result) {
      results[slug] = result.url;
      console.log(`✓ "${result.query}" [${result.color}] · ${result.photographer}`);
    } else {
      results[slug] = fallback;
      console.log('✗ fallback');
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  console.log('\ndecoration.ts güncelleniyor...');
  let source = await readFile(FILE_PATH, 'utf8');
  let changed = 0;
  for (const [slug, imageUrl] of Object.entries(results)) {
    const blockRegex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?image:\\s*)['"][^'"]*['"]`);
    if (blockRegex.test(source)) {
      source = source.replace(blockRegex, (m, prefix) => `${prefix}'${imageUrl}'`);
      changed++;
    }
  }
  await writeFile(FILE_PATH, source, 'utf8');
  console.log(`✓ ${changed}/${Object.keys(results).length} hizmet fotoğrafı güncellendi.`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
