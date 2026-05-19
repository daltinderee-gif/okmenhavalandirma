# 🚀 Cloudflare Pages Otomatik Deploy Rehberi

Her değişiklikten sonra zip yüklemek yerine **otomatik deploy**.
Bir kerelik kurulum (~30 dakika), sonra her `git push` 30 saniyede canlıda.

## ✅ Avantajlar
- **Ücretsiz** (sınırsız bant genişliği)
- **En hızlı CDN** (Türkiye'de Cloudflare çok iyi)
- **Otomatik HTTPS** (Let's Encrypt)
- **Otomatik deploy** her değişiklikte
- **Preview deploys** (canlıdan önce test)
- **Rollback** (kötü deploy 1 tıkla geri)

---

## ADIM 1 — GitHub hesabı aç (3 dakika)

1. https://github.com/signup adresine git
2. E-posta gir: **info@okmenhavalandirma.com** (veya kişisel mail)
3. Şifre + kullanıcı adı seç (önerim: `okmen-havalandirma`)
4. Mail kutuna gelen doğrulama kodunu gir
5. Ücretsiz plan seç ("Free" — Continue for free)
6. "Personal account" → Continue

**✓ Tamamlandı:** kullanıcı adın oluştu (örnek: `github.com/okmen-havalandirma`)

---

## ADIM 2 — GitHub'da boş repo oluştur (2 dakika)

1. Sağ üst köşe → **+ ikonu** → **New repository**
2. Repository name: **`okmen-havalandirma`**
3. Description: `Ökmen Havalandırma & Mir Dekorasyon web sitesi`
4. **Private** seç (kaynak kodunu kimse görmesin)
5. **README.md ekleme** (boş bırak — bizde dosyalar var)
6. **Create repository**

Açılan sayfada `…or push an existing repository from the command line` bölümü altında 2 satır görürsün:
```
git remote add origin https://github.com/SENINKULLANICIADIN/okmen-havalandirma.git
git branch -M main
git push -u origin main
```

**Bu komutları bana yapıştır**, ben senin terminalinden çalıştırıyorum.

---

## ADIM 3 — Cloudflare hesabı aç (3 dakika)

1. https://dash.cloudflare.com/sign-up
2. E-posta + şifre
3. Mail doğrula
4. Plan: **Free** seç

**✓ Tamamlandı:** Cloudflare Dashboard'a giriş yaptın

---

## ADIM 4 — Cloudflare Pages projesi oluştur (5 dakika)

1. Cloudflare Dashboard → Sol menüde **"Workers & Pages"**
2. **"Create application"** → **"Pages"** sekmesi
3. **"Connect to Git"** seç (GitHub seçeneği)
4. GitHub hesabını bağla (yetki ver)
5. Repository seç: **`okmen-havalandirma`**
6. **"Begin setup"**

### Build ayarları:

| Alan | Değer |
|------|-------|
| Project name | `okmen-havalandirma` |
| Production branch | `main` |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `20` (Environment variables'a ekle: `NODE_VERSION` = `20`) |

7. **"Save and Deploy"**
8. İlk build 2-3 dakika sürer. Logları izleyebilirsin.

**✓ Site geçici URL'de canlı:**
`https://okmen-havalandirma.pages.dev`

---

## ADIM 5 — Domain'i Bağla (10 dakika)

`okmenhavalandirma.com` → Cloudflare Pages'a yönlendir.

### A) Domain'i Cloudflare'e ekle

1. Cloudflare Dashboard → **"Add a domain"**
2. `okmenhavalandirma.com` yaz → **Continue**
3. **Free plan** seç
4. Cloudflare DNS kayıtlarını taradı → **Continue**

### B) Turhost'tan nameserver değiştir

Cloudflare sana 2 nameserver verir, örneğin:
```
brad.ns.cloudflare.com
sue.ns.cloudflare.com
```

1. **Turhost panele giriş** → Domain Yönetimi → `okmenhavalandirma.com`
2. **"Nameserver Değiştir"** seçeneği
3. Mevcut nameserver'ları sil (genelde `ns1.turhost.com` vb.)
4. Cloudflare'in verdiği 2 adresi yapıştır
5. Kaydet

DNS yayılma 5 dakika - 24 saat arası sürer. Çoğu zaman 15-30 dakika.

### C) Cloudflare Pages'e custom domain ekle

1. Cloudflare Dashboard → **Workers & Pages** → `okmen-havalandirma`
2. **"Custom domains"** sekmesi
3. **"Set up a custom domain"**
4. `okmenhavalandirma.com` yaz → Continue
5. Cloudflare otomatik DNS kaydı (CNAME) ekler → Activate
6. `www.okmenhavalandirma.com` için de ekle (opsiyonel)

**✓ Site canlı:** https://okmenhavalandirma.com

---

## 🔄 Bundan Sonra: Değişiklik Yapmak

Lokalde değişiklik yaptıktan sonra:

```powershell
# Bilgisayarda terminal aç
cd C:\Users\Administrator\okmen-havalandirma

# Değişiklikleri kaydet (commit)
git add .
git commit -m "Yeni ürün görseli eklendi"

# Cloudflare'a push et (otomatik deploy başlar)
git push
```

**30 saniye sonra** site canlıda. Cloudflare email'de "Deploy successful" bildirimi gönderir.

### Pratik script

Aşağıdaki batch dosyası bir tıkla yapar (`canli-yayinla.bat` adıyla):

```bat
@echo off
cd /d "%~dp0"
git add .
set /p msg="Değişiklik özeti: "
git commit -m "%msg%"
git push
echo.
echo Cloudflare'de deploy başladı, 30 saniye sonra canli olacak.
echo https://okmenhavalandirma.com
pause
```

---

## 💰 Maliyet

| Servis | Aylık |
|--------|-------|
| Cloudflare Pages | **0 ₺** (sınırsız bant) |
| Cloudflare DNS | **0 ₺** |
| GitHub Private Repo | **0 ₺** |
| **TOPLAM** | **0 ₺** |

Turhost hosting'i artık iptal edebilirsin (yıllık ~500 ₺ tasarruf).
Sadece **domain kayıt ücreti** Turhost'ta kalır (yıllık ~120 ₺).

---

## ❓ Sık Sorulan Sorular

**Q: Turhost'taki dosyalar ne olacak?**
A: Cloudflare yayına geçince Turhost public_html'i boşalt veya iptal et. Domain Turhost'ta kalmaya devam edebilir.

**Q: Email (info@okmenhavalandirma.com) nasıl çalışacak?**
A: Email Turhost'ta kalabilir — sadece web hosting Cloudflare'e taşındı. Email için MX kayıtları DNS'te ayrı tutulur. Cloudflare DNS'te bunları otomatik korur.

**Q: Form mail göndermeli mi?**
A: Cloudflare Pages **form handling YOK**. İletişim formu için **Web3Forms** kullanılır (5 dk kurulum, ücretsiz). `YAYINLAMA.md`'de detay var.

**Q: Build hata verirse?**
A: Cloudflare Pages logu gösterir. Bana logu yapıştır, düzeltirim.

**Q: Daha eski bir deploy'a geri dönmek istersem?**
A: Cloudflare Pages → Deployments → istediğin deploy → "Rollback". 5 saniye.

---

## ✅ Bir sonraki adım

1. **GitHub hesabı aç** (ADIM 1)
2. **Boş repo oluştur** (ADIM 2)
3. Yukarıdaki `git remote add ...` komutlarını bana yapıştır
4. Geri kalanını ben yapıyorum

Hazır mısın?
