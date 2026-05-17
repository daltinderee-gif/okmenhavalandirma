// OpenVerse API'sinden CC lisanslı ürün fotoğrafları çek (anahtar yok, ücretsiz)
// https://api.openverse.org/v1/images/
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = path.join(__dirname, '..', 'src', 'data', 'products.ts');

const searchPlans = {
  'havalandirma-sistemleri': ['industrial ventilation', 'hvac duct'],
  'aksiyal-fan': ['axial fan industrial', 'wall fan industrial'],
  'hucreli-aspirator': ['inline fan', 'duct fan unit'],
  'salyangoz-fan': ['centrifugal fan', 'industrial blower'],
  'klima-santrali': ['air handling unit', 'rooftop hvac'],
  'toz-toplama-sistemleri': ['dust collector', 'industrial dust filter'],
  'celik-baca-sistemleri': ['stainless chimney', 'metal flue'],
  'hava-kanallari': ['air duct ceiling', 'spiral duct'],
  'elektrostatik-filtre': ['electrostatic filter', 'air purifier industrial'],
  'filtreler': ['hepa filter', 'air filter cartridge'],
  'flexible-borular': ['flexible duct', 'hvac flex hose'],
  'baglanti-ekipmanlari': ['duct fittings', 'pipe elbow industrial'],
  'menfez': ['air diffuser ceiling', 'ventilation grille'],
  'davlumbaz-sistemleri': ['kitchen exhaust hood', 'commercial range hood'],
  'isitma-sistemleri': ['industrial heater', 'warehouse heater'],
  'sulu-filtre': ['wet scrubber', 'industrial scrubber'],
  'esmatik': ['roof turbine vent', 'whirlybird ventilator'],
  'baca-sistemleri': ['factory chimney', 'industrial smokestack'],
  'klima-sistemleri': ['split air conditioner', 'vrf outdoor unit'],
  'izolasyon-kaplama': ['pipe insulation', 'insulated duct'],
  'medikal-gaz-tesisati': ['hospital gas pipeline', 'medical oxygen'],
  'somine-sistemleri': ['modern fireplace', 'wood stove'],
};

const fallback = 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=1280';

async function fetchOpenverse(query) {
  // OpenVerse: license_type=commercial guarantees commercial use OK
  const params = new URLSearchParams({
    q: query,
    license_type: 'commercial',
    aspect_ratio: 'wide',
    size: 'large',
    page_size: '5',
  });
  try {
    const res = await fetch(`https://api.openverse.org/v1/images/?${params}`, {
      headers: { 'User-Agent': 'Okmen-Havalandirma-Website/1.0' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.results?.length) return null;
    // Prefer high-resolution; pick first with a valid URL
    const photo = data.results.find((p) => p.url) || data.results[0];
    return {
      url: photo.url,
      creator: photo.creator || 'unknown',
      source: photo.source || 'openverse',
      query,
    };
  } catch (e) {
    return null;
  }
}

async function fetchForSlug(slug, queries) {
  for (const q of queries) {
    const r = await fetchOpenverse(q);
    if (r) return r;
    await new Promise((res) => setTimeout(res, 300));
  }
  return null;
}

async function main() {
  console.log('OpenVerse (CC lisanslı, ücretsiz, anahtarsız) fotoğraf çekiliyor...\n');
  const results = {};
  for (const [slug, queries] of Object.entries(searchPlans)) {
    process.stdout.write(`  ${slug.padEnd(28)}... `);
    const r = await fetchForSlug(slug, queries);
    if (r) {
      results[slug] = r.url;
      console.log(`✓ "${r.query}" · ${r.creator} (${r.source})`);
    } else {
      results[slug] = fallback;
      console.log('✗ atlandı, Pexels yedek');
    }
    await new Promise((res) => setTimeout(res, 350));
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
  console.log(`✓ ${changed}/${Object.keys(results).length} ürün foto güncellendi.\n`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
