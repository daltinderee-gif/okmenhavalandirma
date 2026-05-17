// Fetches FIELD/INSTALLATION style photos from Pexels for HVAC products.
// Strategy (matches polatsanhavalandirma.com): use "where it's installed"
// queries instead of "what the product is" — Pexels has many factory/HVAC
// scene photos but few isolated product shots.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_PATH = path.join(__dirname, '..', 'src', 'data', 'products.ts');
const API_KEY = process.env.PEXELS_API_KEY || 'lIyr1PsXsFdfokCSYzhsNgqzpTpgLnuklB3Ttja1ohe56as16Ewg7vby';

// Each plan: a sequence of attempts. Strategy = "installed in context"
// (rooftop, ceiling, factory, restaurant) — these match what HVAC catalogs
// actually use and what visitors expect to see.
const searchPlans = {
  'havalandirma-sistemleri': [
    { q: 'industrial ventilation ducts ceiling', color: null },
    { q: 'factory ventilation system', color: null },
  ],
  'aksiyal-fan': [
    { q: 'large industrial fan blades', color: 'gray' },
    { q: 'tunnel ventilation fan', color: null },
    { q: 'industrial ceiling fan', color: null },
  ],
  'hucreli-aspirator': [
    { q: 'ventilation unit ceiling mounted', color: 'gray' },
    { q: 'hvac fan unit', color: null },
  ],
  'salyangoz-fan': [
    { q: 'industrial blower scroll housing', color: 'gray' },
    { q: 'industrial blower fan', color: null },
    { q: 'centrifugal blower factory', color: null },
  ],
  'klima-santrali': [
    { q: 'rooftop air handling unit', color: 'gray' },
    { q: 'commercial hvac equipment rooftop', color: null },
  ],
  'toz-toplama-sistemleri': [
    { q: 'dust collector factory installed', color: 'gray' },
    { q: 'industrial dust extraction', color: null },
  ],
  'celik-baca-sistemleri': [
    { q: 'industrial smokestack metal', color: 'gray' },
    { q: 'factory metal chimney', color: null },
  ],
  'hava-kanallari': [
    { q: 'air ducts ceiling industrial', color: 'gray' },
    { q: 'industrial duct work ceiling', color: null },
  ],
  'elektrostatik-filtre': [
    { q: 'restaurant exhaust system roof', color: 'gray' },
    { q: 'commercial air purification', color: null },
  ],
  'filtreler': [
    { q: 'hvac filter cartridge', color: 'white' },
    { q: 'industrial air filter', color: null },
  ],
  'flexible-borular': [
    { q: 'flexible duct installation', color: 'gray' },
    { q: 'aluminum flex duct ceiling', color: null },
  ],
  'baglanti-ekipmanlari': [
    { q: 'duct fittings installation', color: 'gray' },
    { q: 'metal pipe fittings', color: null },
  ],
  'menfez': [
    { q: 'ceiling air diffuser modern', color: 'white' },
    { q: 'office ceiling vent', color: null },
  ],
  'davlumbaz-sistemleri': [
    { q: 'commercial kitchen exhaust hood', color: 'gray' },
    { q: 'restaurant kitchen hood', color: null },
  ],
  'isitma-sistemleri': [
    { q: 'warehouse heater industrial', color: 'gray' },
    { q: 'industrial unit heater', color: null },
  ],
  'sulu-filtre': [
    { q: 'industrial scrubber installed', color: 'gray' },
    { q: 'wet scrubber factory', color: null },
  ],
  'esmatik': [
    { q: 'rooftop turbine ventilator', color: 'gray' },
    { q: 'whirlybird roof vent', color: null },
  ],
  'baca-sistemleri': [
    { q: 'factory chimney building', color: 'gray' },
    { q: 'industrial chimney stack', color: null },
  ],
  'klima-sistemleri': [
    { q: 'outdoor ac units building', color: 'gray' },
    { q: 'air conditioner outdoor wall', color: null },
  ],
  'izolasyon-kaplama': [
    { q: 'insulated pipes industrial', color: 'gray' },
    { q: 'pipe insulation duct', color: null },
  ],
};

const fallback = 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=1280';

async function fetchAttempt(query, color) {
  const params = new URLSearchParams({ query, per_page: '5', orientation: 'landscape' });
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
  console.log('Pexels API ile SAHA/MONTAJ tarzı fotoğraflar çekiliyor...\n');
  const results = {};
  for (const [slug, plans] of Object.entries(searchPlans)) {
    process.stdout.write(`  ${slug.padEnd(28)}... `);
    const result = await fetchForSlug(slug, plans);
    if (result) {
      results[slug] = result.url;
      console.log(`✓ "${result.query}" · ${result.photographer}`);
    } else {
      results[slug] = fallback;
      console.log('✗ fallback');
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  console.log('\nproducts.ts güncelleniyor...');
  let source = await readFile(PRODUCTS_PATH, 'utf8');
  let changed = 0;
  for (const [slug, imageUrl] of Object.entries(results)) {
    const blockRegex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?image:\\s*)['"][^'"]*['"]`);
    if (blockRegex.test(source)) {
      source = source.replace(blockRegex, (m, prefix) => `${prefix}'${imageUrl}'`);
      changed++;
    }
  }
  await writeFile(PRODUCTS_PATH, source, 'utf8');
  console.log(`✓ ${changed}/${Object.keys(results).length} ürünün fotoğrafı güncellendi.`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
