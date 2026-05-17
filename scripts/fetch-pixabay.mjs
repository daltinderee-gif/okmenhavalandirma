// Pixabay API ile ürün görsellerini çek
// https://pixabay.com/api/docs/
// Ücretsiz: 5000 req/saat, ticari kullanım serbest
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = path.join(__dirname, '..', 'src', 'data', 'products.ts');

const API_KEY = process.env.PIXABAY_API_KEY || '55904528-5c7e39f1bca14aa952df4506a';

// Pixabay'de category=industry HVAC'a en yakın
const searchPlans = {
  'havalandirma-sistemleri':
    ['ventilation duct', 'industrial ventilation', 'hvac system'],
  'aksiyal-fan':
    ['axial fan', 'industrial fan', 'wall fan industrial'],
  'hucreli-aspirator':
    ['ventilation unit', 'inline fan', 'duct fan'],
  'salyangoz-fan':
    ['centrifugal fan', 'industrial blower', 'air blower'],
  'klima-santrali':
    ['air handling unit', 'air conditioner industrial', 'hvac unit'],
  'toz-toplama-sistemleri':
    ['dust collector', 'cyclone separator', 'industrial filter'],
  'celik-baca-sistemleri':
    ['steel chimney', 'metal flue', 'stainless chimney'],
  'hava-kanallari':
    ['air duct', 'ventilation duct ceiling', 'spiral duct'],
  'elektrostatik-filtre':
    ['air purifier', 'electrostatic filter', 'air cleaning device'],
  'filtreler':
    ['air filter', 'hepa filter', 'filter cartridge'],
  'flexible-borular':
    ['flexible duct', 'aluminum duct', 'flex pipe'],
  'baglanti-ekipmanlari':
    ['pipe fitting', 'duct fitting', 'pipe elbow'],
  'menfez':
    ['air vent', 'air diffuser ceiling', 'ventilation grille'],
  'davlumbaz-sistemleri':
    ['kitchen hood', 'restaurant hood', 'exhaust hood'],
  'isitma-sistemleri':
    ['industrial heater', 'heater warehouse', 'unit heater'],
  'sulu-filtre':
    ['wet scrubber', 'industrial scrubber', 'gas washer'],
  'esmatik':
    ['roof ventilator', 'turbine ventilator', 'whirlybird'],
  'baca-sistemleri':
    ['factory chimney', 'industrial chimney', 'smokestack'],
  'klima-sistemleri':
    ['air conditioner', 'split ac unit', 'outdoor ac unit'],
  'izolasyon-kaplama':
    ['pipe insulation', 'thermal insulation', 'insulated pipe'],
  'medikal-gaz-tesisati':
    ['medical gas', 'hospital oxygen', 'gas pipeline hospital'],
  'somine-sistemleri':
    ['modern fireplace', 'wood stove', 'fireplace insert'],
};

const fallback = 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=1280';

async function fetchPixabay(query, useCategoryIndustry = true) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    min_width: '1200',
    per_page: '5',
  });
  if (useCategoryIndustry) params.set('category', 'industry');

  try {
    const res = await fetch(`https://pixabay.com/api/?${params}`);
    if (!res.ok) {
      const txt = await res.text();
      console.error(`  HTTP ${res.status}: ${txt.slice(0, 100)}`);
      return null;
    }
    const data = await res.json();
    if (!data.hits?.length) return null;
    const photo = data.hits[0];
    return {
      url: photo.largeImageURL || photo.webformatURL,
      user: photo.user,
      tags: photo.tags,
      query,
    };
  } catch (e) {
    console.error(`  Hata: ${e.message}`);
    return null;
  }
}

async function fetchForSlug(slug, queries) {
  // 1) Önce industry kategorisinde ara
  for (const q of queries) {
    const r = await fetchPixabay(q, true);
    if (r) return r;
    await new Promise((res) => setTimeout(res, 150));
  }
  // 2) Bulamazsa kategori sınırı olmadan ara
  for (const q of queries) {
    const r = await fetchPixabay(q, false);
    if (r) return r;
    await new Promise((res) => setTimeout(res, 150));
  }
  return null;
}

async function main() {
  console.log('Pixabay API ile fotoğraflar çekiliyor...\n');
  const results = {};
  for (const [slug, queries] of Object.entries(searchPlans)) {
    process.stdout.write(`  ${slug.padEnd(28)}... `);
    const r = await fetchForSlug(slug, queries);
    if (r) {
      results[slug] = r.url;
      console.log(`✓ "${r.query}" · ${r.user}`);
    } else {
      results[slug] = fallback;
      console.log('✗ atlandı, fallback');
    }
    await new Promise((res) => setTimeout(res, 200));
  }

  console.log('\nproducts.ts güncelleniyor...');
  let source = await readFile(PRODUCTS_FILE, 'utf8');
  let changed = 0;
  for (const [slug, url] of Object.entries(results)) {
    const blockRegex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?image:\\s*)['"][^'"]*['"]`);
    if (blockRegex.test(source)) {
      source = source.replace(blockRegex, (m, prefix) => `${prefix}'${url}'`);
      changed++;
    }
  }
  await writeFile(PRODUCTS_FILE, source, 'utf8');
  console.log(`✓ ${changed}/${Object.keys(results).length} ürün foto güncellendi.`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
