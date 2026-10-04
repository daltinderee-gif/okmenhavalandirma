# Ökmen Havalandırma – Reklam Reel Üretim Hattı

## Çalışma kuralları
- Kullanıcıyla **Türkçe** konuş. Kısa yaz, giriş cümlesi kullanma. Kullanıcı İngilizce bilmiyor.
- İşleri **sırayla** yap: Bir sahne üret → kullanıcıya göster → onay al → sonrakine geç.
- Kullanıcı sadece onay verir; teknik işlerin tamamını sen yaparsın.
- API anahtarlarını asla dosyaya yazma, commit etme. Sadece ortam değişkeninden oku.
- Video dosyalarını (`*.mp4`, `*.mov`, `*.png` çıktılar) commit etme; `.gitignore`'a ekle.
- Bu depo bir web sitesi deposuysa tüm iş `reels/` klasöründe kalsın, site dosyalarına dokunma.

## Hedef
Restoran ve kafe sahiplerine Instagram'da reklam olarak gösterilecek, gerçekçi, ciddi, anlaşılır ve sıkmayan bir hikâye reel'i. Dikey 9:16, 1080p.
İki versiyon: **60 sn hikâye** ve **20 sn kısa kesim**.

## Araçlar
- **Video:** Google Veo 3.1, Gemini API (`GEMINI_API_KEY`). Güncel model adlarını ve image-to-video parametrelerini resmi dokümandan kontrol et.
  - Denemeler: **Veo 3.1 Fast** (1080p ~0,12 $/sn)
  - Onaylanan final sahneler: gerekirse **Veo 3.1 Standard** (~0,40 $/sn)
- **Seslendirme:** Önce aynı anahtarla Gemini TTS dene (Türkçe, ciddi ve güven veren erkek sesi). Yetersiz kalırsa ElevenLabs (`ELEVENLABS_API_KEY`).
- **Kurgu:** ffmpeg (birleştirme, yazı, logo, ses, altyazı).

## Kararlar (4 Ekim 2026)
- Hedef bölge **Diyarbakır ve çevresi** (Şanlıurfa, Batman, Mardin, Gaziantep, Elazığ). Arama ekranında sorgu: "diyarbakır restoran havalandırma".
- **Yazı stili: C – Kurumsal.** Montserrat 800, büyük harf, üstte 90px mavi (#2e6ca4) çizgi; kapanış kartı lacivert degrade + beyaz logo kartı. Şablonlar `reels/scripts/html/yazi-c.html`, `kapanis-c.html`; Chrome headless ile PNG çizilir.
- Sahne 1 ve 8 tek kaynaktan bölündü: `assets/kaynak_gemini.mp4` 0–13 sn / 13–20 sn.
- Video üretimi önce **Gemini uygulaması** (Plus) ile; prompt'lar `reels/prompts/gemini-sahneler.md`. API anahtarı gelirse Veo API'ye geçilir.
- Ekip/Mesut Bey etiketleri kurguda alt yazı olarak eklenir (yelek üstüne logo yok).
- Bekleyen: "24 saat sonra" vaadi gerçek mi; Mesut Bey gerçek çekim mi.

## Bütçe
- Toplam üst sınır: **20 $**. Her üretimden önce tahmini maliyeti yaz, toplamı takip et.
- Sınıra yaklaşınca dur ve kullanıcıdan onay al.

## Sahneler arası devamlılık
Her yeni sahneyi bir önceki klibin **son karesini** başlangıç görseli vererek üret (image-to-video). Son kareyi ffmpeg ile çıkar:
`ffmpeg -sseof -0.1 -i onceki.mp4 -frames:v 1 son_kare.png`

## Görsel kurallar
- Mekân: **Türk restoranı** mutfağı (ocakbaşı, şiş, pide fırını). Aşçılar Türk, beyaz üniforma.
- Videoda **yazı üretme** (model harfleri bozuyor). Yelekler düz lacivert; "Ökmen Havalandırma" logosu ve tüm yazılar kurguda eklenecek.
- Her prompt sonuna ekle: `photorealistic, ambient sounds only, no music, no dialogue, no text, 9:16 vertical`
- Google arayüzü **kullanma**. Arama ekranı için kendi tasarımımız olan sade, markasız bir arama sayfası (HTML → PNG) hazırla.
- Reklamda "tamamladığımız proje" iddiası yok; tasarım/canlandırma çerçevesinde kal.

## Sahne listesi

| # | Sahne | Durum | Kaynak |
|---|-------|-------|--------|
| 1 | Dumanlı mutfak, bunalan aşçılar | ✅ Hazır | `assets/sahne1.mp4` |
| 2 | İşletme sahibi ofiste bilgisayarda arama yapıyor | Üretilecek | Veo |
| 3 | Arama sonuçlarında Ökmen en üstte | ✅ Hazır | `scenes/sahne3_arama.mp4` (`scripts/arama-kareler.py`) |
| 4 | Sahibi telefonla arıyor, akşam randevusu | Üretilecek | Veo |
| 5 | Mesut Bey keşifte, ölçü alıyor | **Kullanıcıya sor:** gerçek çekim mi, AI mı? | — |
| 6 | "Ertesi gün" geçişi | Üretilecek | ffmpeg yazı |
| 7 | Teknik ekip davlumbaz montajı yapıyor | Üretilecek | Veo |
| 8 | Davlumbaz dumanı çekiyor | ✅ Hazır | `assets/sahne8.mp4` |
| 9 | Akşam servisi: ferah ortam, rahat aşçılar | Üretilecek | Veo |
| 10 | Mutlu sahip, dolu restoran + logo + "Ücretsiz keşif" | Üretilecek | Veo + ffmpeg |

### Promptlar (başlangıç; gerekirse iyileştir)

**Sahne 2:**
Turkish restaurant owner in his 40s sitting in a small office next to the kitchen, looking stressed, smoke visible through the kitchen door window behind him, typing on a laptop, close-up of his worried face lit by the screen, warm evening light

**Sahne 4:**
Same restaurant owner holding a smartphone to his ear, his expression changing from worried to relieved as he talks, nodding, small office, warm evening light

**Sahne 5 (AI seçilirse):**
Turkish technician in a plain navy work vest measuring the ceiling above a charcoal grill with a laser distance meter in an empty restaurant kitchen after closing time, restaurant owner watching and nodding, calm evening lighting

**Sahne 7:**
Team of three Turkish technicians in plain navy work vests installing a large stainless steel industrial kitchen hood and ceiling ductwork in a restaurant kitchen, ladders and tools, professional and careful work, bright work lights, time-lapse feeling

**Sahne 9:**
Evening dinner service in a Turkish restaurant kitchen, crystal clear air, steam smoothly pulled into the stainless steel hood, smiling relaxed chefs plating kebab and pide, bright clean atmosphere, smooth gimbal shot

**Sahne 10:**
Restaurant owner standing proudly in his full, busy dining room, waiters carrying plates out of the kitchen quickly, satisfied guests, owner smiling with relief, warm cinematic lighting

## Seslendirme metni (60 sn)
"Mutfağınızda duman, ısı ve koku mu var? Bu sadece konfor değil; çalışanınızın sağlığı, müşterinizin deneyimi demek.
Çözüm bir telefon uzağınızda. Ökmen Havalandırma teknik ekibi mesai sonrası gelir, ücretsiz keşif yapar, mutfağınıza özel planlar.
Ertesi gün montaj tamam. Şimdi mutfağınız nefes alıyor, ekibiniz rahat, servis hızlı.
Çünkü havalandırma, mutfağın bel kemiğidir. Ücretsiz keşif için hemen arayın."

Kısa versiyon (20 sn): Sahne 1 → 8 → 9 → 10, metin: "Mutfağınız nefes alıyor mu? Ökmen Havalandırma ile ücretsiz keşif, mutfağınıza özel çözüm. Hemen arayın."

## Ekran yazıları
- Sahne 1: "Mutfağınız nefes alıyor mu?"
- Sahne 3: Arama kutusunda "restoran havalandırma"
- Sahne 6: "Ertesi gün"
- Sahne 10: Ökmen logosu + "Ücretsiz keşif" + **0530 900 93 44** (sitedeki numara)

## Klasör yapısı
```
reels/
  assets/      # hazır klipler, logo (commit edilmez)
  scenes/      # üretilen klipler (commit edilmez)
  prompts/     # sahne promptları (commit edilir)
  scripts/     # üretim ve kurgu scriptleri
  output/      # final reel'ler (commit edilmez)
```

## İlk yapılacaklar
1. `GEMINI_API_KEY` ortam değişkeninin tanımlı olduğunu kontrol et, yoksa kullanıcıya nasıl ekleyeceğini Türkçe anlat.
2. Ağ erişiminin Google API'ye izin verdiğini test et.
3. Kullanıcıdan Sahne 1 ve 8 videolarını, logoyu ve telefon numarasını iste.
4. Sahne 5 için gerçek çekim mi AI mı diye sor.
5. Sahne 2'yi Veo Fast ile üret, kullanıcıya göster, onay bekle.
