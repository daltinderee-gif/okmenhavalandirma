# 🚀 Yayınlama Rehberi — Turhost cPanel

Site hazır! `okmen-deploy.zip` dosyası proje kök klasöründe (0.94 MB).
İçeriği: 53 sayfa, sitemap, .htaccess, optimize edilmiş CSS/JS, görseller.

## ⚡ Hızlı Yayınlama (5 dakika)

### 1. Turhost cPanel'e giriş yap
- https://cpanel.okmenhavalandirma.com:2083 (veya Turhost'un verdiği panel URL)
- Kullanıcı adı + şifre

### 2. File Manager'ı aç
- Sol menüde **"Files" → "File Manager"**
- Sağ üstte **Settings** → "Show Hidden Files (.htaccess)" işaretle

### 3. public_html klasörüne git
- Eski dosyalar varsa hepsini seç → **Delete** (boşalt)
- Boş public_html olmalı

### 4. ZIP'i yükle
- Üst menüden **"Upload"**
- `C:\Users\Administrator\okmen-havalandirma\okmen-deploy.zip` dosyasını seç
- Yükleme tamamlanınca **"Go Back to /home/.../public_html"**

### 5. Aç (Extract)
- `okmen-deploy.zip` dosyasına sağ tık → **Extract**
- "Extract Files" diyalogu: konum **`/public_html`** olmalı → Extract Files
- Çıkarım bitince ZIP dosyasını sil (sağ tık → Delete)

### 6. Test et
- Tarayıcı: https://okmenhavalandirma.com
- Sayfalar açılıyor mu? Logo görünüyor mu? Hero slider dönüyor mu?

---

## ⚠️ ÖNEMLİ: İletişim Formunu Aktif Et (5 dakika)

Şu an form **görünüyor ama gönderim yapmıyor**. Aktif etmek için:

### Adım 1: Web3Forms Access Key Al
1. https://web3forms.com/ → ücretsiz, kayıt yok
2. **"Get Access Key"** kutusuna mail yaz: `info@okmenhavalandirma.com`
3. **"Create Access Key"** tıkla
4. Mail kutuna bakın → "Web3Forms Access Key" mail'i
5. Key formatı: `a1b2c3d4-e5f6-7890-1234-567890abcdef` (UUID)

### Adım 2: Key'i Koda Yapıştır
1. Geliştirici ortamında (bilgisayarda):
   - `src/components/ContactForm.astro` dosyasını aç
   - `WEB3FORMS_ACCESS_KEY = 'BURAYA-WEB3FORMS-ACCESS-KEY-YAZIN'` satırını bul
   - `'BURAYA-...'` yerine mail'den gelen UUID'i yapıştır

2. Sonra:
   ```
   npm run build
   ```
   ve `okmen-deploy.zip`'i tekrar oluştur, Turhost'a yükle.

### Adım 3: Test
- https://okmenhavalandirma.com/iletisim
- Formu doldur, **Teklif Talebi Gönder**
- info@okmenhavalandirma.com'a mail gelmelidir

> **Alternatif:** Formspree, FormKeep gibi servisler de aynı şekilde çalışır.

---

## 🌐 SSL Sertifikası

Turhost cPanel → **Security → SSL/TLS** veya **AutoSSL**.
Ücretsiz Let's Encrypt SSL otomatik aktif olur (~5 dakika).

`.htaccess` zaten HTTP → HTTPS yönlendirmesi yapıyor. SSL aktif olunca otomatik çalışır.

---

## 📊 SEO Kontrol Listesi

| Konu | Durum |
|------|-------|
| Title + Description | ✅ Her sayfada özel |
| Schema.org (LocalBusiness, Product, Service) | ✅ |
| Open Graph + Twitter Card | ✅ |
| Canonical URL | ✅ |
| Sitemap (52 sayfa) | ✅ `/sitemap-index.xml` |
| robots.txt | ✅ |
| Mobile responsive | ✅ |
| Sayfa hızı (gzip, cache) | ✅ .htaccess'te |
| 404 sayfası | ✅ |
| Admin gizli (noindex) | ✅ |

### Google Search Console'a ekle
1. https://search.google.com/search-console → Add Property
2. Domain → `okmenhavalandirma.com`
3. DNS doğrulama: Turhost cPanel'den TXT kaydı ekle
4. **Sitemap'ı gönder:** `https://okmenhavalandirma.com/sitemap-index.xml`
5. Google 1-7 gün içinde indekslemeye başlar

### Google Analytics (opsiyonel)
1. https://analytics.google.com → Yeni mülk
2. Measurement ID'yi al (`G-XXXXXXXXXX`)
3. `BaseLayout.astro` `<head>` içine ekle:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Sonra yeniden build + upload.

---

## 🔄 Site Güncelleme (sonradan)

Görsel ekledikten ya da metni değiştirdikten sonra:

```powershell
# 1. Bilgisayarda
npm run build

# 2. Yeni dist.zip oluştur
Compress-Archive -Path "dist\*" -DestinationPath "okmen-deploy.zip" -Force

# 3. cPanel File Manager'da:
#    - public_html boşalt
#    - yeni okmen-deploy.zip yükle
#    - Extract et
```

Veya FTP ile sadece değişen dosyaları senkronlayabilirsin (FileZilla).

---

## 🆘 Sorun Olursa

| Sorun | Çözüm |
|-------|-------|
| Sayfa açılmıyor | DNS yayılma (24 saat bekle) veya cPanel'de domain ayarı |
| HTTPS çalışmıyor | cPanel → SSL/TLS → AutoSSL aktif et |
| Form mail gelmiyor | Web3Forms access key eklenmemiş (yukarıdaki adımı tekrar) |
| Görsel görünmüyor | dist klasörü tam yüklendi mi kontrol et |
| 404 hatası | .htaccess yüklendi mi (hidden files göster) |

---

## ✅ Yayın Sonrası Yapılacaklar

1. ⬜ Google Search Console'a sitemap gönder
2. ⬜ Web3Forms access key ekle, form'u test et
3. ⬜ Google Analytics ekle (opsiyonel)
4. ⬜ AI ile ürün görsellerini üret (`/admin` paneli + Manus)
5. ⬜ Müşteri yorumları gerçek olanlarla değiştir (`src/pages/index.astro`)
6. ⬜ Referans markaları gerçek tedarikçilerinle güncelle
7. ⬜ Sosyal medya hesaplarına website linki ekle
8. ⬜ Google My Business'a kaydol (Diyarbakır, havalandırma)

🎉 **Site hazır!**
