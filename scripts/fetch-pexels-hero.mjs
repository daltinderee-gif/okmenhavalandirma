// Hero slider için NET endüstriyel görseller — bokeh/ışık değil
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, '..', 'src', 'components', 'Hero.astro');
const API_KEY = process.env.PEXELS_API_KEY || 'lIyr1PsXsFdfokCSYzhsNgqzpTpgLnuklB3Ttja1ohe56as16Ewg7vby';

// Sırayla 5 slide için tematik aramalar — her birinin başlığıyla uyumlu, NET endüstriyel
const slidePlans = [
  // Slide 1: "Diyarbakırın Havalandırma Uzmanı"
  { queries: ['large industrial fan factory', 'industrial hvac warehouse', 'factory ventilation ducts'] },
  // Slide 2: "Klima Santrali & AHU Sistemleri"
  { queries: ['rooftop air handling unit', 'industrial hvac equipment building', 'commercial ahu unit'] },
  // Slide 3: "Toz Toplama Jet-Pulse Sistemleri"
  { queries: ['industrial dust collector factory', 'baghouse filter industrial', 'cyclone dust separator'] },
  // Slide 4: "Restoran ya da Cafe açıyor musunuz?"
  { queries: ['commercial restaurant kitchen', 'professional kitchen stainless steel', 'restaurant kitchen hood'] },
  // Slide 5: "Havalandırma + Dekorasyon Tek Adres"
  { queries: ['modern minimalist living room', 'modern office interior bright', 'modern hotel lobby interior'] },
];

const fallback = 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=2400';

async function fetchOne(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: API_KEY } });
  if (!res.ok) return null;
  const data = await res.json();
  const photo = data.photos?.[0];
  if (!photo) return null;
  return {
    url: (photo.src.large2x || photo.src.large || photo.src.original).replace(/w=\d+/, 'w=2400'),
    photographer: photo.photographer,
    query,
  };
}

async function fetchForSlide(plans) {
  for (const q of plans.queries) {
    const r = await fetchOne(q);
    if (r) return r;
    await new Promise((res) => setTimeout(res, 200));
  }
  return null;
}

async function main() {
  console.log('Hero slider için NET endüstriyel görseller çekiliyor...\n');
  const results = [];
  for (let i = 0; i < slidePlans.length; i++) {
    process.stdout.write(`  Slide ${i + 1}... `);
    const r = await fetchForSlide(slidePlans[i]);
    if (r) {
      results.push(r.url);
      console.log(`✓ "${r.query}" · ${r.photographer}`);
    } else {
      results.push(fallback);
      console.log('✗ fallback');
    }
    await new Promise((res) => setTimeout(res, 250));
  }

  console.log('\nHero.astro güncelleniyor...');
  let source = await readFile(FILE, 'utf8');

  // Her image: '...' satırını sırayla değiştir (ilk 5 image: satırı = slides)
  let idx = 0;
  source = source.replace(/(image:\s*)['"]https?:\/\/[^'"]+['"]/g, (m, prefix) => {
    if (idx >= results.length) return m;
    const newUrl = results[idx];
    idx++;
    return `${prefix}'${newUrl}'`;
  });

  await writeFile(FILE, source, 'utf8');
  console.log(`✓ ${idx} slide fotoğrafı güncellendi.`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
