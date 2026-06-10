// fonklima referans thumbnail'lerini slug isimleriyle, hafif upscale ederek
// Downloads/fonklima-ref/{slug}.jpg olarak hazırla (Gemini image-to-image girişi için).
// Çalıştır: node scripts/prep-fonklima-ref.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const dl = join(homedir(), 'Downloads');
const srcDir = join(dl, 'okmen-gorseller');
const outDir = join(dl, 'fonklima-ref');

// fonklima dosya adı  ->  bizim ürün slug'ı
const map = {
  '210x370_userfiles!images!aksiyal-fan.jpg':          'aksiyal-fan',
  '210x370_userfiles!images!hucreli-fan.jpg':          'hucreli-aspirator',
  '210x370_userfiles!images!menfez.jpg':               'menfez',
  '210x370_userfiles!images!davlumbaz-cesitleri.jpg':  'davlumbaz-sistemleri',
  '210x370_userfiles!images!toz-toplama-sistemleri.jpg':'toz-toplama-sistemleri',
  '210x370_userfiles!images!sulu-filtre.jpg':          'sulu-filtre',
  '210x370_userfiles!images!Elektrostatik-Filtre.jpg': 'elektrostatik-filtre',
  '210x370_userfiles!images!filtreler.jpg':            'filtreler',
  '210x370_userfiles!images!Flexible-Borular.jpg':     'flexible-borular',
  '210x370_userfiles!images!isitma-sitemleri.jpg':     'isitma-sistemleri',
  '210x370_userfiles!images!esmatik.jpg':              'esmatik',
  '210x370_userfiles!images!baglanti_elemanlari.jpg':  'baglanti-ekipmanlari',
  '210x370_userfiles!images!kara-hava-kanali.jpg':     'hava-kanallari',
  '210x370_userfiles!images!fon-klima-celik-baca.jpg': 'celik-baca-sistemleri',
  '210x370_userfiles!images!split-klima(1).jpg':       'klima-sistemleri',
  '210x370_userfiles!files!klima-sld.jpg':             'klima-santrali',
  '210x370_userfiles!images!med.jpg':                  'medikal-gaz-tesisati',
};

await mkdir(outDir, { recursive: true });

let ok = 0, miss = 0;
for (const [file, slug] of Object.entries(map)) {
  const src = join(srcDir, file);
  if (!existsSync(src)) { console.log(`ATLA ${slug}: kaynak yok`); miss++; continue; }
  const out = join(outDir, `${slug}.jpg`);
  const meta = await sharp(src).metadata();
  const scale = Math.min(4, Math.max(2, Math.round(1024 / Math.max(meta.width || 400, 1))));
  const info = await sharp(src)
    .resize({ width: (meta.width || 210) * scale, kernel: 'lanczos3' })
    .sharpen()
    .jpeg({ quality: 90 })
    .toFile(out);
  console.log(`OK ${slug}.jpg  ${info.width}x${info.height}`);
  ok++;
}
console.log(`Bitti → ${outDir}  (${ok} hazır, ${miss} eksik)`);
