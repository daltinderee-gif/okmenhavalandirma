// IndexNow: sitemap'teki tüm adresleri Bing/Yandex'e bildirir (giriş gerekmez).
// Kullanım: node scripts/indexnow.mjs   (deploy'dan sonra çalıştır)
import { readdirSync } from 'node:fs';

const HOST = 'okmenhavalandirma.com';
const key = readdirSync(new URL('../public/', import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.slice(0, -4);
if (!key) throw new Error('public/ altında IndexNow anahtar dosyası yok');

const xml = await (await fetch(`https://${HOST}/sitemap-0.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const cevap = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} adres gönderildi → HTTP ${cevap.status}`);
if (cevap.status >= 400) process.exit(1);
