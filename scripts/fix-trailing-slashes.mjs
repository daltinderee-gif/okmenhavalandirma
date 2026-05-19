// Tüm .astro dosyalarında internal href'lere trailing slash ekle
// /iletisim → /iletisim/
// /urunler/aksiyal-fan → /urunler/aksiyal-fan/
// External (https://) ve hash (#) ve mailto: dokunulmaz
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Glob alternatifi — basit recurse
async function findAstroFiles(dir) {
  const { readdir, stat } = await import('node:fs/promises');
  const out = [];
  async function walk(d) {
    const entries = await readdir(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        if (['node_modules', 'dist', '.git', '.astro'].includes(e.name)) continue;
        await walk(full);
      } else if (e.name.endsWith('.astro')) {
        out.push(full);
      }
    }
  }
  await walk(dir);
  return out;
}

function addTrailingSlash(content) {
  let changed = 0;
  // href="/x" → href="/x/"  (sonu slash veya hash veya query ile bitmiyorsa)
  // Match: href="/[a-z][^"]*" where last char is NOT '/' or '#'
  const newContent = content.replace(
    /href=("|')(\/[a-z][a-zA-Z0-9_\-/]*?)(\1)/g,
    (m, q, url, q2) => {
      if (url.endsWith('/')) return m; // zaten slash
      if (url.includes('#')) return m; // hash içeren
      changed++;
      return `href=${q}${url}/${q2}`;
    }
  );

  // Template literals: href={`/x/${slug}`} → href={`/x/${slug}/`}
  const tplFixed = newContent.replace(
    /href=\{`(\/[^`]+?)`\}/g,
    (m, url) => {
      if (url.endsWith('/')) return m;
      if (url.includes('#')) return m;
      changed++;
      return `href={\`${url}/\`}`;
    }
  );

  return { content: tplFixed, changed };
}

async function main() {
  const files = await findAstroFiles(path.join(ROOT, 'src'));
  console.log(`${files.length} .astro dosyası tarandı.\n`);

  let totalChanges = 0;
  let filesModified = 0;
  for (const f of files) {
    const orig = await readFile(f, 'utf8');
    const { content, changed } = addTrailingSlash(orig);
    if (changed > 0) {
      await writeFile(f, content, 'utf8');
      console.log(`  ✓ ${path.relative(ROOT, f).padEnd(50)} (${changed} link)`);
      totalChanges += changed;
      filesModified++;
    }
  }

  console.log(`\n${filesModified} dosya · toplam ${totalChanges} link güncellendi.`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
