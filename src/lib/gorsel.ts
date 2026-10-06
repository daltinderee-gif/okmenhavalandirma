import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PUBLIC = fileURLToPath(new URL('../../public', import.meta.url));

/** Kartlarda küçük gösterilen görseller için 800px'lik varyantı (varsa) döndürür.
 *  Varyantlar public/ altında `<ad>-800.webp` olarak duruyor; yoksa asıl dosya kullanılır. */
export function kucuk(src: string): string {
  if (!src.startsWith('/') || !src.endsWith('.webp') || src.endsWith('-800.webp')) return src;
  const aday = src.replace(/\.webp$/, '-800.webp');
  return existsSync(PUBLIC + aday) ? aday : src;
}
