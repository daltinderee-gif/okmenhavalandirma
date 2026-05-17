# Ökmen Havalandırma — Astro Projesi

Diyarbakır merkezli Ökmen Havalandırma firması için kurumsal web sitesi.

## Teknoloji Yığını
- **Astro 4** — Statik site üretici (her sayfa için `.html` çıktısı)
- **TailwindCSS 3** — Tek dosyaya minify edilen utility-first CSS
- **TypeScript** — Tipli ürün/bölge veri katmanı
- **@astrojs/sitemap** — Otomatik sitemap-index.xml

## Proje Yapısı

```
okmen-havalandirma/
├── public/                 # Statik kopya (favicon, logo, robots.txt)
├── src/
│   ├── components/         # Header, Footer, Hero, ProductCard, ContactForm, WhatsAppButton
│   ├── data/               # products.ts (20 ürün), regions.ts (6 il)
│   ├── layouts/            # BaseLayout.astro (SEO + Schema.org + OG)
│   ├── pages/
│   │   ├── index.astro              # Ana sayfa (11 bölüm)
│   │   ├── hakkimizda.astro
│   │   ├── galeri.astro             # Filtreli + lightbox
│   │   ├── iletisim.astro
│   │   ├── 404.astro
│   │   ├── blog/index.astro
│   │   ├── urunler/
│   │   │   ├── index.astro          # Tüm ürünler listesi
│   │   │   └── [slug].astro         # 20 ürün için dinamik (build'de statik HTML)
│   │   └── bolgeler/
│   │       └── [slug].astro         # 6 il için dinamik (build'de statik HTML)
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

> **Not:** Astro'nun `[slug].astro` dinamik sayfası build sırasında `getStaticPaths()` üzerinden her ürün/bölge için ayrı bir `index.html` üretir. Yani 20 ürün dosyası yazmak yerine tek dosya, sonuçta aynı statik çıktı.

## Geliştirme

```powershell
# 1. Node PATH'e ekle (oturum bazlı)
$env:Path = "C:\Program Files\nodejs;" + $env:Path

# 2. Bağımlılıkları kur (ilk kez)
npm install

# 3. Geliştirme sunucusu (http://localhost:4321)
npm run dev

# 4. Üretim derlemesi (dist/ klasörüne çıktı)
npm run build

# 5. Build önizleme
npm run preview
```

> PowerShell `npm.ps1`'i bloke ederse `npm` yerine `& "C:\Program Files\nodejs\npm.cmd"` veya `cmd /c npm ...` kullanın.

## Turhost cPanel Yayınlama

1. **Derle**
   ```powershell
   npm run build
   ```
   Çıktı: `dist/` klasörü (≈ 2 MB, 41 dosya).

2. **ZIP'le**
   ```powershell
   Compress-Archive -Path "dist\*" -DestinationPath "okmen-site.zip" -Force
   ```

3. **cPanel File Manager**
   - cPanel'e giriş yap → **File Manager**
   - `public_html/` klasörüne gir
   - Eski dosyaları sil (varsa)
   - **Upload** → `okmen-site.zip` yükle
   - ZIP'e sağ tık → **Extract** → `public_html/`
   - ZIP dosyasını sil

4. **Doğrula**
   - https://okmenhavalandirma.com → ana sayfa
   - https://okmenhavalandirma.com/urunler/aksiyal-fan → ürün
   - https://okmenhavalandirma.com/bolgeler/diyarbakir-havalandirma → bölge
   - https://okmenhavalandirma.com/sitemap-index.xml → SEO

## SEO

- **Meta:** Her sayfada title, description, canonical, OG, Twitter Card
- **Schema.org:** LocalBusiness (her sayfada) + Product (ürün sayfalarında) + Service (bölge sayfalarında)
- **Sitemap:** `/sitemap-index.xml` ve `/sitemap-0.xml` otomatik
- **robots.txt:** `/robots.txt` üretiliyor
- **Yapısal işaretleme:** Breadcrumb, alt etiketleri, semantic HTML
- **Mobil:** Tüm sayfalar responsive, font preload, lazy loading

## Logo

Geçici SVG logo `public/logo.svg` ve `public/favicon.svg`'de. Gerçek logoyu (`WhatsApp_Image_2026-05-17_at_16_23_47.jpeg`) `public/logo.jpeg` adıyla koyup `Header.astro` ve `Footer.astro` içindeki `<img src="/logo.svg">` satırlarını `/logo.jpeg` ile değiştirin.

## Fotoğraflar

Tüm ürün/bölge/galeri fotoğrafları **Pexels CDN**'den (`images.pexels.com`) referans veriliyor — ticari kullanım serbest, API anahtarı gerekmiyor. Daha iyi fotoğraflar için:
- `src/data/products.ts` içindeki `image:` alanları
- `src/data/regions.ts` içindeki `heroImage:` alanları
- `src/pages/galeri.astro` içindeki `images` dizisi
- `src/components/Hero.astro` içindeki `slides` dizisi

## İletişim Formu

`src/components/ContactForm.astro` **Netlify Forms** için ayarlandı (`data-netlify="true"`). Turhost'ta çalışması için aşağıdaki seçeneklerden biri uygulanmalı:

- **Seçenek A:** Form'un `action`'ını bir PHP veya 3. parti servise (Formspree, Web3Forms vb.) yönlendir.
- **Seçenek B:** Form'u `mailto:` ile değiştir (tarayıcıda e-posta açar — basit ama zayıf UX).
- **Seçenek C:** Siteyi Netlify/Vercel'de host et, form sıfır kurulumla çalışır.

## Renk Paleti (`tailwind.config.mjs`)

| Token       | Hex       | Kullanım                |
|-------------|-----------|-------------------------|
| `primary`   | `#1a3a5c` | Ana lacivert            |
| `secondary` | `#2e6ca4` | Mavi vurgu              |
| `accent`    | `#5fa8d3` | Açık mavi CTA           |
| `silver`    | `#8da8bf` | İkincil metin           |
| `pale`      | `#d6eaf8` | Arka plan ton           |

## Tipografi

- **Başlıklar:** Cormorant Garamond (Google Fonts, preload)
- **Gövde:** DM Sans (Google Fonts, preload)

## Performans Notları

- Görseller `loading="lazy"` + `decoding="async"`
- Tailwind PurgeCSS ile minify
- Pexels CDN preconnect
- CSS inlining: Astro `inlineStylesheets: 'auto'`
- HTML sıkıştırma açık (`compressHTML: true`)
- Toplam dist: ≈ 2.1 MB / 41 dosya

## İçerik Güncelleme

- **Yeni ürün eklemek:** `src/data/products.ts` dizisine yeni eleman ekle, sayfa otomatik oluşur.
- **Yeni bölge eklemek:** `src/data/regions.ts` dizisine yeni eleman ekle.
- **Telefon/e-posta değişikliği:** `src/layouts/BaseLayout.astro` (schema) + `src/components/Header.astro` + `src/components/Footer.astro` + `src/components/WhatsAppButton.astro` + `src/components/ContactForm.astro` + `src/pages/iletisim.astro` içinde `+90 530 900 93 44` ve `info@okmenhavalandirma.com` ara değiştir.

## Sorun Giderme

| Sorun                              | Çözüm                                                    |
|------------------------------------|----------------------------------------------------------|
| `npm` PowerShell'de bloke          | `& "C:\Program Files\nodejs\npm.cmd" ...` ile çalıştır   |
| `esbuild postinstall` hatası       | `[Environment]::SetEnvironmentVariable('PATH', ..., 'Process')` ile PATH'i process scope'a yaz |
| Sitemap "reduce undefined" hatası  | `@astrojs/sitemap` versiyonu 3.2.1'de sabit tutulmalı     |
| Fotoğraflar yüklenmiyor            | Pexels CDN'e dış erişim olmalı; offline ise `/public` altına indir |
| Form çalışmıyor                    | Yukarıdaki "İletişim Formu" bölümüne bakın               |

## Build Sonucu

```
✓ 33 sayfa derlendi
✓ sitemap-index.xml + sitemap-0.xml
✓ Toplam: 41 dosya / 2.1 MB
✓ Build süresi: ~7 saniye
```
