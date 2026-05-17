# AI ile Görsel Üretme Rehberi — Tüm Site Envanteri

Pexels stok fotoları yerine **AI ile üretilmiş** profesyonel görseller kullanmak için bu rehber.

> **Telif uyarısı:** Başka firma fotoğrafı (Serinair, Polatsan, Fonklima vb.) izinsiz indirilemez — telif ihlali + Google "kopya içerik" cezası. Onun yerine bu rehberle telifsiz, size özel görseller üretin.

## 🎯 Toplam Görsel Sayısı

| Öncelik | Kategori | Adet | Süre |
|---------|----------|------|------|
| 🔴 ZORUNLU | Ürünler (havalandırma) | 22 | ~1.5 saat |
| 🔴 ZORUNLU | Dekorasyon hizmetleri | 8 | ~30 dk |
| 🟡 ÖNERILEN | Sektör hero görselleri | 7 | ~25 dk |
| 🟡 ÖNERILEN | Ana sayfa hero slider | 5 | ~20 dk |
| 🟢 OPSIYONEL | Ana sayfa diğer (showcase) | 3 | ~10 dk |
| 🟢 OPSIYONEL | Bölge hero görselleri | 6 | ~25 dk |
| 🟢 OPSIYONEL | Galeri | 24 | ~1.5 saat |
| 🟢 OPSIYONEL | Blog kapak | 6 | ~25 dk |
| **TOPLAM** | | **81** | **~5 saat** |

Sadece zorunluları yaparsanız 2 saat, tüm site 5 saat.

## 🛠️ Hangi AI aracını kullanmalıyım?

| Araç | Ücret | Kalite | Hız | Link |
|------|-------|--------|-----|------|
| **Bing Image Creator** (DALL-E 3) | Ücretsiz | ★★★★★ | ~1 dk | https://www.bing.com/create |
| **ChatGPT (DALL-E 3)** | Plus 20$/ay | ★★★★★ | ~1 dk | https://chat.openai.com |
| **Manus AI** | Ücretsiz/Premium | ★★★★ | ~30 sn | https://manus.im |
| **Leonardo AI** | Ücretsiz + Premium | ★★★★ | ~30 sn | https://leonardo.ai |
| **Midjourney** | 10$/ay | ★★★★★ | ~30 sn | https://www.midjourney.com |

**Önerim:** Bing Image Creator — ücretsiz, kaliteli, hızlı.

## 📋 Adım Adım Süreç

1. **Bing Image Creator'a git** → https://www.bing.com/create
2. **Microsoft hesabıyla giriş** (yoksa 1 dk'da kur)
3. Aşağıdaki **prompt'lardan birini kopyala** (sırayla)
4. Boş alana yapıştır → **Oluştur**
5. 4 görsel üretilir (~1 dakika), **en iyisini seç**
6. Görsele tıkla → indir butonuna bas
7. İndirilen dosyayı yeniden adlandır: `aksiyal-fan.jpg` (slug ile aynı)
8. `C:\Users\Administrator\okmen-havalandirma\public\products\` klasörüne kaydet
9. (Opsiyonel) [TinyPNG](https://tinypng.com)'da sıkıştır — boyut yarıya iner
10. Sıradaki ürüne geç

### ✅ Sonra: products.ts'i güncelle

`src/data/products.ts` dosyasını aç, ilgili ürünün `image: '...'` satırını şu hâle getir:

```ts
// Önce:
image: 'https://images.pexels.com/photos/12345/...'

// Sonra (Pexels'i sil, local path koy):
image: '/products/aksiyal-fan.jpg'

// VEYA Pexels'i fallback olarak tut, localImage ekle:
localImage: '/products/aksiyal-fan.jpg'  // bunu öncelikle kullanır
```

Tüm görseller eklendikten sonra:
```bash
npm run build
```

---

## 🎨 ANCHOR PROMPT (her prompt'un sonuna ekle)

Tüm ürün görselleri aynı stilde olsun diye anchor:
```
professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

Sektör/işletme görselleri için:
```
modern interior photography, soft natural lighting, no people, photorealistic, 4K resolution, architectural digest style
```

---

# 🔴 ZORUNLU — Ürünler (22 adet)

Dosya yolu: `public/products/{slug}.jpg`

### 1. Havalandırma Sistemleri → `havalandirma-sistemleri.jpg`
```
Industrial ventilation system with galvanized metal ducts, multiple round and rectangular pipes connected at a ceiling junction, T-fittings and elbows, blue-gray metallic finish, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 2. Aksiyal Fan → `aksiyal-fan.jpg`
```
Industrial axial fan with large metal propeller blades inside a circular orange-red mounting frame, electric motor at center, wall-mount style, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 3. Hücreli Aspiratör → `hucreli-aspirator.jpg`
```
Inline cabinet ventilation fan unit, rectangular galvanized steel box with backward-curved impeller visible through inspection panel, two flanged duct connections, gray metallic finish, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 4. Salyangoz Fan → `salyangoz-fan.jpg`
```
Industrial centrifugal blower fan with snail-shell shaped scroll housing, blue and silver metal finish, mounted on a base plate, belt-driven motor on side, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 5. Klima Santrali → `klima-santrali.jpg`
```
Modular air handling unit (AHU), rectangular sections with sandwich panels, filter section, fan section, heat exchanger section, gray painted steel finish, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 6. Toz Toplama Sistemleri → `toz-toplama-sistemleri.jpg`
```
Industrial dust collector with cylindrical filter cartridges, jet-pulse cleaning manifold on top, conical dust hopper at bottom, blue painted steel finish, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 7. Çelik Baca Sistemleri → `celik-baca-sistemleri.jpg`
```
Double-wall insulated stainless steel chimney flue pipes, polished metal finish, modular sections with locking bands, T-piece and 45-degree elbow, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 8. Hava Kanalları → `hava-kanallari.jpg`
```
Spiral round galvanized steel air ducts, multiple diameters arranged in a row, helical lock-seam visible, silver metallic finish, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 9. Elektrostatik Filtre → `elektrostatik-filtre.jpg`
```
Electrostatic precipitator cabinet for restaurant kitchen exhaust, stainless steel housing with inspection panel, ionizer cells visible, control panel on front, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 10. Filtreler → `filtreler.jpg`
```
HVAC filter cartridges in different sizes, pleated white filter material, metal end caps, HEPA and bag filter types displayed together, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 11. Flexible Borular → `flexible-borular.jpg`
```
Flexible aluminum HVAC duct hose, accordion-style corrugated metal pipe, silver metallic finish, coiled and uncoiled examples shown side by side, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 12. Bağlantı Ekipmanları → `baglanti-ekipmanlari.jpg`
```
HVAC duct fittings collection, galvanized steel elbows, T-pieces, reducers, dampers and clamps arranged neatly, silver metallic finish, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 13. Menfez → `menfez.jpg`
```
Modern square ceiling air diffuser with 4-way blade pattern, white powder-coated aluminum finish, plus a slot diffuser on the side, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 14. Davlumbaz Sistemleri → `davlumbaz-sistemleri.jpg`
```
Commercial stainless steel kitchen exhaust hood, wall-mount canopy style, polished AISI 304 finish, grease baffle filters visible, LED lights underneath, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 15. Isıtma Sistemleri → `isitma-sistemleri.jpg`
```
Industrial unit heater for warehouse, suspended hot-air blower, painted metal cabinet with louvered front, mounting brackets visible, red or blue accents, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 16. Sulu Filtre → `sulu-filtre.jpg`
```
Wet scrubber industrial filter, vertical cylindrical tank with water curtain system, stainless steel construction, water inlet and outlet visible, control valves, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 17. Esmatik → `esmatik.jpg`
```
Roof turbine ventilator (whirlybird), polished aluminum dome with curved vanes, vertical exhaust shaft, base flange visible, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 18. Baca Sistemleri → `baca-sistemleri.jpg`
```
Industrial steel chimney stack section, painted gray finish, modular cylindrical sections with flange connections, support brackets, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 19. Klima Sistemleri → `klima-sistemleri.jpg`
```
VRF air conditioner outdoor unit, white painted metal cabinet with side grille and top fan, plus a wall-mount indoor unit, modern slim design, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 20. İzolasyon Kaplama → `izolasyon-kaplama.jpg`
```
Insulated HVAC pipe with foam insulation and aluminum cladding finish, cross-section showing layers, silver metallic exterior, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, industrial HVAC catalog style
```

### 21. Medikal Gaz Tesisatı → `medikal-gaz-tesisati.jpg`
```
Medical gas pipeline system, copper pipes with color-coded labels (oxygen blue, vacuum white, nitrogen black), wall-mount manifold with pressure gauges, hospital wall outlet, clean medical aesthetic, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, medical equipment catalog style
```

### 22. Şömine Sistemleri → `somine-sistemleri.jpg`
```
Modern minimalist fireplace, rectangular steel firebox with large glass window, polished black metal finish, mounted on stone or concrete wall surround, glowing wood logs inside, professional product photography, clean white seamless studio background, soft even lighting, no people, no text, no logo, isometric 3/4 view, photorealistic, 4K resolution, architectural fireplace catalog style
```

---

# 🔴 ZORUNLU — Dekorasyon Hizmetleri (8 adet)

Dosya yolu: `public/dekorasyon/{slug}.jpg`
products.ts yerine `src/data/decoration.ts` güncellenir.

### 23. İç Mimari & Tasarım → `ic-mimari-tasarim.jpg`
```
Modern minimalist living room interior, neutral colors, large windows with natural light, designer furniture, oak wood floor, accent wall, plants, architectural interior photography, no people, photorealistic, 4K resolution, premium home design magazine style
```

### 24. 3D Görselleştirme → `3d-gorsellestirme.jpg`
```
3D architectural visualization of a modern apartment interior, photorealistic render, soft natural lighting, contemporary furniture, large windows, hardwood floor, neutral palette, V-Ray quality render, no people, 4K resolution
```

### 25. Tadilat & Renovasyon → `tadilat-renovasyon.jpg`
```
Construction renovation site, partial wall demolition, new drywall going up, exposed framing, tools and materials neatly placed, work-in-progress home interior, professional construction photography, no people, photorealistic, 4K resolution
```

### 26. Asma Tavan → `asma-tavan.jpg`
```
Modern recessed ceiling design, multi-level dropped ceiling with hidden LED cove lighting, geometric patterns, white painted plaster, architectural interior photography, no people, photorealistic, 4K resolution, premium interior design style
```

### 27. Alçıpan & Duvar → `alcipan-duvar.jpg`
```
Drywall installation in progress, metal stud framing visible, gypsum boards being mounted, screw gun and tools, white drywall sheets, professional construction photography, no people, photorealistic, 4K resolution
```

### 28. Boya & Badana → `boya-badana.jpg`
```
Interior wall painting, fresh white paint roller application, paint tray, smooth wall surface, soft natural light, professional construction photography, no people, photorealistic, 4K resolution
```

### 29. Dış Cephe Kaplama → `dis-cephe-kaplama.jpg`
```
Modern residential building facade with aluminum composite panel cladding, geometric pattern, white and gray finish, large windows, urban architecture, architectural photography, no people, photorealistic, 4K resolution, premium building exterior style
```

### 30. Zemin Kaplama → `zemin-kaplama.jpg`
```
Engineered hardwood floor installation, oak wood planks being laid in living room, tongue-and-groove pattern, soft natural lighting, professional flooring photography, no people, photorealistic, 4K resolution, premium home design style
```

---

# 🟡 ÖNERİLEN — Sektör Hero Görselleri (7 adet)

Dosya yolu: `public/sektor/{slug}.jpg`
`src/data/sectors.ts` içinde `heroImage` alanını güncelle.

### 31. Restoran & Cafe → `restoran-cafe.jpg`
```
Modern upscale restaurant interior, warm ambient lighting, wooden tables set for service, exposed brick or concrete wall, plants, cozy atmosphere, professional architectural photography, no people, photorealistic, 4K resolution
```

### 32. Mağaza & Market → `magaza-market.jpg`
```
Modern retail clothing store interior, minimalist design, well-organized displays, warm spotlights, polished concrete floor, large mirrors, architectural interior photography, no people, photorealistic, 4K resolution
```

### 33. Ofis & İşyeri → `ofis-isyeri.jpg`
```
Modern open-plan office workspace, ergonomic desks with monitors, glass partition walls, abundant natural daylight, indoor plants, minimalist design, architectural interior photography, no people, photorealistic, 4K resolution
```

### 34. Otel & Pansiyon → `otel-konaklama.jpg`
```
Luxury boutique hotel lobby, marble floor, statement chandelier, modern reception desk, comfortable seating area, warm ambient lighting, architectural interior photography, no people, photorealistic, 4K resolution
```

### 35. Fabrika & Üretim → `fabrika-uretim.jpg`
```
Modern industrial factory production floor, conveyor belts and assembly equipment, clean and organized workspace, overhead lighting, industrial machinery, professional industrial photography, no people, photorealistic, 4K resolution
```

### 36. Hastane & Klinik → `saglik-klinik.jpg`
```
Modern hospital corridor, bright clean interior, white walls, polished floor, sliding doors, medical equipment, professional architectural photography, no people, photorealistic, 4K resolution, clinical aesthetic
```

### 37. Okul & Kreş → `okul-egitim.jpg`
```
Bright colorful kindergarten classroom, child-sized furniture, educational toys and books on shelves, large windows with natural light, wooden floor, warm friendly atmosphere, professional interior photography, no people, photorealistic, 4K resolution
```

---

# 🟡 ÖNERİLEN — Ana Sayfa Hero Slider (5 adet)

Dosya yolu: `public/hero/slide-{n}.jpg`
`src/components/Hero.astro` içinde `image:` alanlarını güncelle.

### 38. Slide 1 — Genel Tanıtım → `hero-1.jpg`
```
Industrial HVAC system in a large warehouse facility, large fans and ducts visible, professional industrial photography, soft natural lighting, no people, photorealistic, 4K resolution, cinematic wide shot
```

### 39. Slide 2 — Klima Santrali → `hero-2.jpg`
```
Rooftop air handling unit installation on commercial building, large gray painted AHU equipment, blue sky background, professional industrial photography, no people, photorealistic, 4K resolution, cinematic wide shot
```

### 40. Slide 3 — Toz Toplama → `hero-3.jpg`
```
Industrial dust collection system inside factory with metal cyclone separators and filter cartridges, gray steel construction, overhead lighting, professional industrial photography, no people, photorealistic, 4K resolution, cinematic wide shot
```

### 41. Slide 4 — Restoran Davlumbaz → `hero-4.jpg`
```
Commercial restaurant kitchen with large stainless steel exhaust hood over cooking line, polished stainless steel surfaces, professional kitchen photography, no people, photorealistic, 4K resolution, cinematic wide shot
```

### 42. Slide 5 — İki Marka → `hero-5.jpg`
```
Modern residential interior with both stylish design elements and visible HVAC vents, fusion of decor and engineering, warm lighting, architectural photography, no people, photorealistic, 4K resolution, cinematic wide shot
```

---

# 🟢 OPSIYONEL — Bölge Görselleri (6 adet)

Dosya yolu: `public/bolgeler/{slug}.jpg`
`src/data/regions.ts` içinde `heroImage` alanını güncelle.

Şehir-temalı görseller (her şehrin tipik özelliğini yansıtsın):

### 43-48. Şehirler
```
[ŞEHİR ADI]:
Diyarbakır: Aerial view of Diyarbakir city with historic Hevsel gardens and Tigris river, modern skyline mixed with stone walls, professional architectural photography, no people, photorealistic, 4K resolution
Şanlıurfa: Modern Sanliurfa city aerial view with mosque domes and modern buildings, golden hour lighting, professional architectural photography, no people, photorealistic, 4K resolution
Batman: Modern Batman city aerial view, industrial area with refinery in distance, oil and gas infrastructure, professional architectural photography, no people, photorealistic, 4K resolution
Mardin: Historic Mardin city stone houses on hillside, ancient architecture overlooking plain, golden sunset, professional architectural photography, no people, photorealistic, 4K resolution
Gaziantep: Gaziantep city industrial OSB zone, modern factories and warehouses, professional industrial photography, no people, photorealistic, 4K resolution
Elazığ: Elazig city industrial zone aerial, factory buildings with mountains in background, professional industrial photography, no people, photorealistic, 4K resolution
```

---

# 🟢 OPSIYONEL — Galeri (24 adet)

Dosya yolu: `public/galeri/{n}.jpg`
`src/data/gallery.ts` içinde `src` alanlarını güncelle (auto-generated, script ile yeniden üretilebilir).

Kategorilere göre 3'er adet:
- **Havalandırma:** 3× endüstriyel havalandırma sahne
- **Klima Santrali:** 3× AHU/rooftop unit
- **Toz Toplama:** 3× cyclone/baghouse
- **Davlumbaz:** 3× restaurant kitchen hood
- **Baca:** 3× chimney stack
- **Fan & Aspiratör:** 3× industrial fan
- **Filtre:** 3× HVAC filter
- **Klima Sistemleri:** 3× VRF/split unit

Genel prompt formatı (kategoriye göre uyarlayın):
```
[KATEGORI] system installed in a real facility, professional industrial photography, soft natural lighting, no people, photorealistic, 4K resolution, documentary style site photography
```

---

# 🟢 OPSIYONEL — Blog Kapak Görselleri (6 adet)

Dosya yolu: `public/blog/{slug}.jpg`
`src/pages/blog/index.astro` içindeki `image:` alanlarını güncelle.

### 75. Fan Seçimi → `fan-secimi.jpg`
```
Engineer comparing different industrial fan types on workbench, technical drawings and tablet visible, professional engineering photography, no people, photorealistic, 4K resolution, blog post hero image
```

### 76. Klima Santrali → `klima-santrali-blog.jpg`
```
Cross-section diagram of an air handling unit showing filter, fan, coil sections, technical illustration style, photorealistic 3D rendering, no people, 4K resolution, educational diagram
```

### 77. Toz Toplama Jet-Pulse → `toz-toplama-blog.jpg`
```
Close-up of jet-pulse dust collector filter cartridges, compressed air valve visible, technical industrial photography, no people, photorealistic, 4K resolution
```

### 78. Davlumbaz Hesabı → `davlumbaz-blog.jpg`
```
Modern restaurant commercial kitchen with large stainless steel hood and venting system, professional kitchen photography, no people, photorealistic, 4K resolution
```

### 79. Enerji Verimi → `enerji-verimi-blog.jpg`
```
Energy efficiency dashboard with green metrics on a screen, modern building HVAC controls, professional photography, no people, photorealistic, 4K resolution
```

### 80. Baca Yangın Güvenliği → `baca-yangin-blog.jpg`
```
Stainless steel chimney with fire safety certification badges, industrial photography, no people, photorealistic, 4K resolution
```

---

# 💡 İpuçları

- **Aynı stilde tut** — "white background", "no people" eklemeyi unutma
- **İngilizce yaz** — AI Türkçe'ye iyi cevap vermez
- **4 görselin en iyisini seç** — genelde isometric 3/4 view en iyisi
- **Resolution** — 1280×960 yeterli, daha büyük gereksiz dosya
- **JPG yeterli** — PNG 3-5× daha büyük
- **Sıkıştır** — [TinyPNG](https://tinypng.com) ile yarıya iner, kalite kaybı yok

# 📝 Son Adım

Tüm görseller hazır olunca:

```bash
# products.ts/decoration.ts/sectors.ts'leri güncelledikten sonra
npm run build
npm run preview  # http://localhost:4321
```

Site artık tamamen size özel, telifsiz, AI üretimi görsellerle çalışır.

---

## 🆘 Bir görseli atlamak istiyorsanız

Şu görseli üretmediniz → Pexels fallback olarak kalır, site çalışmaya devam eder. Hiçbir görsel ZORUNLU değildir kodda — sadece Pexels yerine sizin AI görselinizi gösterir.

Yani: bir saatte sadece 5-10 ürünün görselini üretip diğerlerini sonra ekleyebilirsiniz.
