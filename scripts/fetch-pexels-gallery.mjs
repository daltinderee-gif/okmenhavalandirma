// Galeri için ek fotoğraflar çek — 24+ görsel, kategoriler dolu görünsün
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = process.env.PEXELS_API_KEY || 'lIyr1PsXsFdfokCSYzhsNgqzpTpgLnuklB3Ttja1ohe56as16Ewg7vby';

// 8 kategori × 3-4 foto = ~28 görsel
const categoryPlans = [
  { cat: 'Havalandırma', queries: ['industrial ventilation ducts', 'air ducts ceiling factory', 'hvac system installation'] },
  { cat: 'Klima Santrali', queries: ['rooftop air handling unit', 'commercial hvac equipment', 'ahu installation'] },
  { cat: 'Toz Toplama', queries: ['dust collector industrial', 'cyclone separator', 'baghouse filter system'] },
  { cat: 'Davlumbaz', queries: ['commercial kitchen hood', 'restaurant kitchen exhaust', 'stainless steel hood'] },
  { cat: 'Baca', queries: ['industrial chimney stack', 'factory smokestack', 'stainless steel flue'] },
  { cat: 'Fan & Aspiratör', queries: ['industrial axial fan', 'large industrial blower', 'centrifugal fan factory'] },
  { cat: 'Filtre', queries: ['hvac filter cartridge', 'air filter installation', 'industrial air filter'] },
  { cat: 'Klima Sistemleri', queries: ['vrf outdoor unit', 'air conditioner installation', 'split ac wall'] },
];

async function fetchOne(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: API_KEY } });
  if (!res.ok) return null;
  const data = await res.json();
  const photo = data.photos?.[0];
  if (!photo) return null;
  return {
    url: (photo.src.large2x || photo.src.large || photo.src.original).replace(/w=\d+/, 'w=1200'),
    photographer: photo.photographer,
    alt: photo.alt || query,
    query,
  };
}

async function main() {
  console.log('Galeri için kategori-temalı görseller çekiliyor...\n');
  const out = [];
  for (const { cat, queries } of categoryPlans) {
    for (const q of queries) {
      process.stdout.write(`  ${cat.padEnd(20)} "${q}"... `);
      const r = await fetchOne(q);
      if (r) {
        out.push({ src: r.url, cat, alt: `${cat} — ${r.alt}` });
        console.log(`✓ ${r.photographer}`);
      } else {
        console.log('✗ atlandı');
      }
      await new Promise((res) => setTimeout(res, 250));
    }
  }

  console.log(`\n✓ ${out.length} foto toplandı.`);
  const filePath = path.join(__dirname, '..', 'src', 'data', 'gallery.ts');
  const code = `// Auto-generated gallery dataset — re-run scripts/fetch-pexels-gallery.mjs to refresh
export interface GalleryImage { src: string; cat: string; alt: string; }
export const galleryImages: GalleryImage[] = ${JSON.stringify(out, null, 2)};
`;
  await writeFile(filePath, code, 'utf8');
  console.log(`✓ Yazıldı: src/data/gallery.ts (${out.length} görsel)`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
