// Google yorum QR kartı: node uret.mjs "<yorum linki>"
// Çıktı: kart.pdf (A6, baskı), kart.png (WhatsApp/ekran), qr.png
// qrcode paketi gerekir: npm i qrcode (ya da NODE_PATH ile)
import QRCode from 'qrcode';
import { writeFileSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const KOK = dirname(fileURLToPath(import.meta.url));
const link = process.argv[2];
if (!link) { console.error('kullanım: node uret.mjs "<yorum linki>"'); process.exit(1); }
const svg = await QRCode.toString(link, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#0b1f35', light: '#ffffff' } });
await QRCode.toFile(join(KOK, 'qr.png'), link, { width: 1200, margin: 2, color: { dark: '#0b1f35', light: '#ffffff' } });
const html = readFileSync(join(KOK, 'kart.html'), 'utf8').replace('{{QR}}', svg).replace('{{LINK}}', link);
writeFileSync(join(KOK, '_kart.html'), html);
const C = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const url = 'file://' + join(KOK, '_kart.html');
execFileSync(C, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--no-pdf-header-footer', `--print-to-pdf=${join(KOK, 'kart.pdf')}`, url], { stdio: 'ignore' });
execFileSync(C, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', '--window-size=1050,1480', `--screenshot=${join(KOK, 'kart.png')}`, url + '#ekran'], { stdio: 'ignore' });
console.log('bitti: kart.pdf, kart.png, qr.png');
