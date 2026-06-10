// Wave 2 workflow sonucundan galeri agent çıktısını al → src/data/gallery.ts yaz.
import { readFile, writeFile } from 'node:fs/promises';
const outFile = 'C:/Users/ADMINI~1/AppData/Local/Temp/claude/C--Users-Administrator/f6bea4bc-3724-43b8-ba1a-9fd850c20dc8/tasks/wd6fzmba9.output';
const raw = await readFile(outFile, 'utf8');
const data = JSON.parse(raw);
const g = data.result.gallery;
if (!g || !g.content) { console.log('HATA: galeri içeriği yok'); process.exit(1); }
await writeFile('src/data/gallery.ts', g.content, 'utf8');
console.log(`gallery.ts yazıldı: ${g.content.length} karakter`);
console.log(`değiştirilen alt: ${g.changedAltCount ?? '?'}`);
if (g.notes) console.log(`not: ${g.notes}`);
