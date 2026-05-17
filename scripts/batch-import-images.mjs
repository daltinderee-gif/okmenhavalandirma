// Toplu görsel import scripti
// Kullanım:
//   1) Görselleri C:\Users\Administrator\Downloads\okmen-gorseller\ klasörüne koy
//   2) Dosya adları slug ile eşleşmeli: salyangoz-fan.png, aksiyal-fan.jpg, ic-mimari-tasarim.jpeg vs.
//   3) Çalıştır: node scripts/batch-import-images.mjs
// Script:
//   - PNG/JPEG dosyaları okur
//   - Resize + JPG dönüşüm + sıkıştırma (Windows System.Drawing yerine native Node? Sharp gerekirdi.)
//   - public/products/ veya public/dekorasyon/ veya public/sektor/ klasörüne kopyalar (slug'a göre)
//   - products.ts / decoration.ts / sectors.ts içine localImage / heroImage path ekler/günceller

import { readdir, readFile, writeFile, copyFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(process.env.USERPROFILE || 'C:\\Users\\Administrator', 'Downloads', 'okmen-gorseller');

const PRODUCTS_FILE = path.join(PROJECT_ROOT, 'src', 'data', 'products.ts');
const DECORATION_FILE = path.join(PROJECT_ROOT, 'src', 'data', 'decoration.ts');
const SECTORS_FILE = path.join(PROJECT_ROOT, 'src', 'data', 'sectors.ts');

const PRODUCTS_DEST = path.join(PROJECT_ROOT, 'public', 'products');
const DECORATION_DEST = path.join(PROJECT_ROOT, 'public', 'dekorasyon');
const SECTORS_DEST = path.join(PROJECT_ROOT, 'public', 'sektor');

// Her slug için hangi data dosyası ve hangi public klasörüne ait
const productSlugs = [
  'havalandirma-sistemleri','aksiyal-fan','hucreli-aspirator','salyangoz-fan','klima-santrali',
  'toz-toplama-sistemleri','celik-baca-sistemleri','hava-kanallari','elektrostatik-filtre','filtreler',
  'flexible-borular','baglanti-ekipmanlari','menfez','davlumbaz-sistemleri','isitma-sistemleri',
  'sulu-filtre','esmatik','baca-sistemleri','klima-sistemleri','izolasyon-kaplama',
  'medikal-gaz-tesisati','somine-sistemleri',
];
const decorationSlugs = [
  'ic-mimari-tasarim','3d-gorsellestirme','tadilat-renovasyon','asma-tavan',
  'alcipan-duvar','boya-badana','dis-cephe-kaplama','zemin-kaplama',
];
const sectorSlugs = [
  'restoran-cafe','magaza-market','ofis-isyeri','otel-konaklama',
  'fabrika-uretim','saglik-klinik','okul-egitim',
];

// PowerShell ile PNG/JPG -> optimized JPG (quality 88)
async function convertToJpg(src, dest) {
  const ps = `
    Add-Type -AssemblyName System.Drawing
    $img = [System.Drawing.Image]::FromFile('${src.replace(/\\/g, '\\\\')}')
    $bmp = New-Object System.Drawing.Bitmap $img.Width, $img.Height, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::White)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
    $g.Dispose()
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters 1
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 88L
    $bmp.Save('${dest.replace(/\\/g, '\\\\')}', $encoder, $params)
    $bmp.Dispose()
    $img.Dispose()
  `.replace(/\n/g, ';');
  await execAsync(`powershell -NoProfile -Command "${ps.replace(/"/g, '\\"')}"`);
}

async function updateDataFile(filePath, slug, fieldName, imagePath) {
  let source = await readFile(filePath, 'utf8');
  // Try to find existing localImage or heroImage line in this slug's block
  const slugBlock = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?)(${fieldName}:\\s*['"][^'"]*['"])`);
  if (slugBlock.test(source)) {
    source = source.replace(slugBlock, (m, before, oldField) => `${before}${fieldName}: '${imagePath}'`);
  } else {
    // Insert before the `features:` line (products) or `applications:` line (services) — generic anchor: first newline after slug
    // Strategy: insert after the `image:` line if it exists, else after slug line
    const imageLineRegex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?image:\\s*['"][^'"]*['"],?)`);
    if (imageLineRegex.test(source)) {
      source = source.replace(imageLineRegex, (m) => `${m}\n    ${fieldName}: '${imagePath}',`);
    } else {
      console.warn(`  ⚠ Slug ${slug} için ${fieldName} eklenecek yer bulunamadı`);
      return false;
    }
  }
  await writeFile(filePath, source, 'utf8');
  return true;
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`\n❌ Kaynak klasör bulunamadı: ${SOURCE_DIR}`);
    console.error(`Lütfen şu klasörü oluştur ve görselleri içine koy:`);
    console.error(`   ${SOURCE_DIR}\n`);
    process.exit(1);
  }

  // Ensure destination folders exist
  for (const d of [PRODUCTS_DEST, DECORATION_DEST, SECTORS_DEST]) {
    if (!existsSync(d)) await mkdir(d, { recursive: true });
  }

  const files = (await readdir(SOURCE_DIR)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  console.log(`\n📂 ${SOURCE_DIR}\n   ${files.length} görsel bulundu\n`);

  let success = 0, skipped = 0, failed = 0;

  for (const file of files) {
    const slug = path.basename(file, path.extname(file)).toLowerCase().trim();
    const srcPath = path.join(SOURCE_DIR, file);

    let destDir, dataFile, fieldName, publicPrefix;
    if (productSlugs.includes(slug)) {
      destDir = PRODUCTS_DEST;
      dataFile = PRODUCTS_FILE;
      fieldName = 'localImage';
      publicPrefix = '/products';
    } else if (decorationSlugs.includes(slug)) {
      destDir = DECORATION_DEST;
      dataFile = DECORATION_FILE;
      fieldName = 'localImage';
      publicPrefix = '/dekorasyon';
    } else if (sectorSlugs.includes(slug)) {
      destDir = SECTORS_DEST;
      dataFile = SECTORS_FILE;
      fieldName = 'heroImage';
      publicPrefix = '/sektor';
    } else {
      console.log(`  ⊘ ${file.padEnd(40)} — tanınmayan slug, atlandı`);
      skipped++;
      continue;
    }

    const destFile = `${slug}.jpg`;
    const destPath = path.join(destDir, destFile);

    process.stdout.write(`  → ${slug.padEnd(28)} `);
    try {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg') {
        await copyFile(srcPath, destPath);
      } else {
        await convertToJpg(srcPath, destPath);
      }
      await updateDataFile(dataFile, slug, fieldName, `${publicPrefix}/${destFile}`);
      console.log('✓');
      success++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Özet: ${success} başarılı · ${skipped} atlandı · ${failed} hata`);
  if (success > 0) {
    console.log(`\n▶ Şimdi: npm run build`);
  }
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
