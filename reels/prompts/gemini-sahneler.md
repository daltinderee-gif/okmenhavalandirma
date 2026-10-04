# Gemini uygulaması için sahne prompt'ları

Nasıl kullanılır:
1. Gemini uygulamasında **Video** seçeneğini aç.
2. Aşağıdaki kutudaki İngilizce metni **olduğu gibi** kopyala, yapıştır, gönder.
3. "Başlangıç görseli" yazan sahnelerde önce o görseli ekle (📎), sonra metni yapıştır.
4. Videoyu indir; dosya adını değiştirmene gerek yok, bana "Sahne X indi" de.

Her sahne 8 saniye. Yazı/logo yok; hepsini kurguda ben ekliyorum.

Ortak karakterler (her prompt'ta aynı tarif var, yüzler tutarlı kalsın diye):
- **İşletme sahibi:** 45 yaşlarında Türk erkek, kısa kır düşmüş saç ve bıyık, koyu lacivert gömlek.
- **Teknik ekip / Mesut Bey:** düz lacivert iş yeleği (yazısız), gri tişört.

---

## Sahne 2: Sahibi bilgisayarda arıyor
Başlangıç görseli: yok

```
Vertical 9:16 video. A Turkish restaurant owner in his mid-40s with short greying hair and a moustache, wearing a dark navy shirt, sits in a small office next to a busy kebab restaurant kitchen in Diyarbakır. Through the glass door behind him, grill smoke fills the kitchen. He rubs his forehead, then leans toward his laptop and starts typing, his worried face lit by the screen. Slow push-in close-up, warm evening light, shallow depth of field. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos.
```

## Sahne 4: Telefonla arıyor, rahatlıyor
Başlangıç görseli: Sahne 2'nin son karesi (ben çıkarıp göndereceğim)

```
Vertical 9:16 video. The same Turkish restaurant owner in his mid-40s with short greying hair, moustache and dark navy shirt, in the same small office, holds a smartphone to his ear. As he listens, his expression slowly changes from worried to relieved; he nods and almost smiles. Static medium close-up, warm evening light. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos.
```

## Sahne 5: Mesut Bey keşifte (gerçek yüzüyle, 2 adım)
Mesut Bey'in yüzü fotoğraftan alınır. Önce bir **fotoğraf**, sonra o fotoğraftan **video** üretilir; böylece yüz videoda bozulmaz.
Referans fotoğraflar: `reels/assets/mesut/mesut_referans_1.jpg` ve `mesut_referans_2.jpg` (başka kişiler kırpıldı).

**Adım 1: Fotoğraf (Gemini'de normal sohbet, iki referansı ekle 📎)**
```
Using the man in these two reference photos (keep his face, beard, hairstyle and build exactly the same), create a photorealistic vertical 9:16 photo: he is a ventilation technician standing in an empty Turkish ocakbaşı restaurant kitchen after closing time, wearing a plain navy work vest with no text or logo over a grey t-shirt, holding a laser distance meter pointed at the ceiling above a long charcoal grill, with a clipboard under his arm. Calm warm evening light, realistic skin texture, no text anywhere.
```
Yüz benzemezse "make his face match the reference more closely" yazıp tekrar iste. Beğendiğin fotoğrafı indir.

**Adım 2: Video (Video seçeneği, Adım 1'in fotoğrafını başlangıç görseli olarak ekle)**
```
Vertical 9:16 video starting from this image. The technician aims the laser distance meter at the ceiling above the grill, glances at the reading, then writes a note on his clipboard and nods confidently. The restaurant owner with greying hair and moustache in a dark navy shirt steps into frame and nods. Smooth slow handheld shot, calm evening light. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos. Keep the technician's face identical to the starting image.
```

Gemini gerçek kişi fotoğrafından üretimi reddederse bana söyle; o zaman sahneyi tarif ederek (yüz benzerliği olmadan) üretiriz ya da Mesut Bey'in 5–6 saniyelik gerçek çekimini kullanırız.

### Sahne 5 (yedek): yüz benzerliği olmadan

```
Vertical 9:16 video. After closing time, in an empty Turkish ocakbaşı restaurant kitchen with a long charcoal grill, a Turkish technician in his 40s wearing a plain navy work vest with no text and a grey t-shirt measures the ceiling above the grill with a laser distance meter, then writes notes on a clipboard. The restaurant owner with greying hair and moustache in a dark navy shirt stands beside him, watching and nodding. Calm evening light, smooth handheld shot. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos.
```

## Sahne 7: Ekip montaj yapıyor
Başlangıç görseli: yok

```
Vertical 9:16 video. Three Turkish technicians in plain navy work vests with no text install a large stainless steel kitchen hood and silver ceiling ductwork above a charcoal grill in a restaurant kitchen. Ladders, drills, careful professional teamwork, bright work lights, slightly sped-up time-lapse feeling, camera slowly tilting up along the new duct. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos.
```

## Sahne 9: Akşam servisi, ferah mutfak
Başlangıç görseli: yok

```
Vertical 9:16 video. Evening dinner service in a Turkish kebab restaurant kitchen in Diyarbakır. The air is crystal clear; light steam and grill smoke rise straight up and are smoothly pulled into a large stainless steel hood. Relaxed, smiling Turkish chefs in white uniforms grill liver and lamb skewers and slide pide out of a wood-fired oven, plating quickly. Bright clean atmosphere, smooth gimbal shot moving along the grill. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos.
```

## Sahne 10: Mutlu sahip, dolu salon
Başlangıç görseli: yok

```
Vertical 9:16 video. The same Turkish restaurant owner in his mid-40s with short greying hair, moustache and dark navy shirt stands proudly in his full, busy restaurant dining room in the evening. Waiters carry plates of kebab out of the kitchen quickly, guests are eating and talking happily. The owner takes a deep relaxed breath and smiles at the camera. Warm cinematic lighting, slow push-in. Photorealistic, ambient sounds only, no music, no dialogue, no text on screen, no logos.
```

---

Beğenmediğin sahneyi tekrar üret; Gemini her seferinde farklı çıkarır. En iyisini seç.
Karakterin yüzü sahneler arasında çok değişirse söyle, başlangıç görseli yöntemine geçeriz.
