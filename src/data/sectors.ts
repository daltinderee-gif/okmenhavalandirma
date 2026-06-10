// Sektör paketleri — işletme tipine göre "neye ihtiyacın var" haritası
// Müşteri Restoran açacaksa direkt "Restoran" tıklar, sektörel paket ve ürün önerisi görür

export interface Sector {
  slug: string;
  title: string;
  emoji: string;
  short: string;
  seo: string;
  description: string;
  heroImage: string;
  /** Yalın dilde 3-5 problem (müşterinin yaşadıkları) */
  problems: string[];
  /** Yalın dilde 3-5 çözüm vaadi */
  promises: string[];
  /** Önerilen havalandırma ürünleri — products slug */
  recommendedProducts: string[];
  /** Önerilen dekorasyon hizmetleri — decoration slug */
  recommendedDecoration: string[];
  /** "Standart paket" örnek bütçe aralığı */
  budgetRange: string;
  /** Süre tahmini */
  timeline: string;
  /** Örnek vaka anlatımı */
  caseStudy: { title: string; summary: string };
  icon: string;
}

export const sectors: Sector[] = [
  {
    slug: 'restoran-cafe',
    title: 'Restoran & Cafe',
    emoji: '🍽️',
    short: 'Yeni açılış veya yenileme',
    seo: 'Restoran Cafe Havalandırma',
    description: 'Yeni restoran açıyorsanız ya da mevcut işletmenizde yağ kokusu/duman sorunu yaşıyorsanız — havalandırmadan tadilata her şey burada.',
    heroImage: '/images/lib/pexels-15945660.webp',
    problems: [
      'Mutfaktan yağ kokusu salona geçiyor',
      'Müşteri "havasız" diye şikayet ediyor',
      'Belediye davlumbaz/baca yönetmeliğine uymak gerek',
      'Yeni açılış: nereden başlayacağımı bilmiyorum',
      'Eski sistem ses çıkarıyor, yağdan tıkanıyor',
    ],
    promises: [
      'Yağ kokusu sıfırlanır, müşteri konforu artar',
      'Belediye/itfaiye için tüm belgeler hazır',
      'Tek elden: davlumbaz + baca + klima + dekorasyon',
      '15 günde anahtar teslim açılış paketi',
      '5 yıl boyunca yağ tutucu temizliği dahil',
    ],
    recommendedProducts: [
      'davlumbaz-sistemleri',
      'elektrostatik-filtre',
      'klima-sistemleri',
      'celik-baca-sistemleri',
      'havalandirma-sistemleri',
    ],
    recommendedDecoration: [
      'ic-mimari-tasarim',
      'tadilat-renovasyon',
      'asma-tavan',
      'zemin-kaplama',
    ],
    budgetRange: '50.000 ₺ - 250.000 ₺',
    timeline: '7 - 21 gün',
    caseStudy: {
      title: 'Diyarbakır Şehir Merkezi · 80 kişilik restoran',
      summary: 'Açılışına 3 hafta kala başvuran müşteriye paslanmaz davlumbaz, elektrostatik filtre ve VRF klima sistemi kurduk. Belediye ruhsatı zamanında alındı, açılışta sıfır şikayet.',
    },
    icon: 'M3 8h18l-2 12H5L3 8zM6 8V6a3 3 0 013-3h6a3 3 0 013 3v2',
  },
  {
    slug: 'magaza-market',
    title: 'Mağaza & Market',
    emoji: '🛍️',
    short: 'Perakende mağazası',
    seo: 'Mağaza Market Havalandırma',
    description: 'Giyim mağazası, market, eczane veya kuyumcu — kapalı ortamda müşterinin rahat alışveriş yapması için doğru iklim ve hava kalitesi.',
    heroImage: '/images/lib/pexels-13068378.webp',
    problems: [
      'Yazın klima yeterli gelmiyor, müşteri kaçıyor',
      'Vitrinde buğulanma var',
      'Soğutucu cihaz havayı çok kuru bırakıyor',
      'Mağaza derli toplu görünmüyor (kablo/kanal görünüyor)',
      'Faturalar çok yüksek geliyor',
    ],
    promises: [
      'Doğru kapasite klima — yaz-kış sabit konfor',
      'Görünmez kanal sistemi (asma tavan içinde gizli)',
      'Enerji verimli inverter cihazlar (fatura %30↓)',
      'Estetik menfez ve aydınlatma birleşik',
      'Açık plan tasarım için sessiz çalışma',
    ],
    recommendedProducts: [
      'klima-sistemleri',
      'klima-santrali',
      'menfez',
      'hava-kanallari',
      'havalandirma-sistemleri',
    ],
    recommendedDecoration: [
      'ic-mimari-tasarim',
      'asma-tavan',
      'zemin-kaplama',
      'boya-badana',
    ],
    budgetRange: '25.000 ₺ - 150.000 ₺',
    timeline: '5 - 15 gün',
    caseStudy: {
      title: 'AVM içi 150 m² butik mağaza',
      summary: 'Vitrin alanı için ayrı, satış alanı için ayrı multi-split sistem kurduk. Asma tavan içine gömülü kanal sistemiyle estetik bozulmadı, faturada %35 düşüş.',
    },
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  },
  {
    slug: 'ofis-isyeri',
    title: 'Ofis & İşyeri',
    emoji: '🏢',
    short: 'Ofis veya plaza',
    seo: 'Ofis İşyeri Havalandırma',
    description: 'Plaza, kurumsal ofis, mimarlık bürosu veya 5-50 kişilik işletmeler — çalışan verimliliği için temiz hava ve sessiz iklimlendirme.',
    heroImage: '/images/lib/pexels-5444186.webp',
    problems: [
      'Toplantı odası havasız, dikkat dağılıyor',
      'Klima ses yapıyor, telefon görüşmesinde duyuluyor',
      'Bazı odalar sıcak bazıları soğuk (dengesiz)',
      'Pandemi sonrası taze hava endişesi var',
      'Açık ofiste sigara/koku sorunu',
    ],
    promises: [
      'Oda bazlı sıcaklık kontrolü — herkes mutlu',
      'Sessiz klima santrali (< 40 dB) — toplantıyı bölmez',
      'CO₂ sensörlü taze hava sistemi',
      'HEPA filtre ile virüs/alerjen filtreleme',
      'Görünmez tavan menfez tasarımı',
    ],
    recommendedProducts: [
      'klima-santrali',
      'klima-sistemleri',
      'menfez',
      'filtreler',
      'hava-kanallari',
    ],
    recommendedDecoration: [
      'ic-mimari-tasarim',
      'asma-tavan',
      'alcipan-duvar',
      'zemin-kaplama',
    ],
    budgetRange: '35.000 ₺ - 400.000 ₺',
    timeline: '7 - 30 gün',
    caseStudy: {
      title: 'Diyarbakır Plaza · 30 kişilik mühendislik ofisi',
      summary: 'VRF klima sistemi + CO₂ kontrollü taze hava santrali kurduk. Toplantı odasında 25 dB sessizlik, her çalışan kendi termostatını ayarlıyor.',
    },
    icon: 'M3 21h18M5 21V8l7-5 7 5v13M9 21V12h6v9M9 8h.01M15 8h.01',
  },
  {
    slug: 'otel-konaklama',
    title: 'Otel & Pansiyon',
    emoji: '🏨',
    short: 'Konaklama tesisi',
    seo: 'Otel Pansiyon Havalandırma',
    description: 'Butik otel, apart otel, pansiyon — misafir konforu için odadan ortak alanlara kadar sessiz, verimli ve kontrolü kolay sistem.',
    heroImage: '/images/lib/pexels-7942132.webp',
    problems: [
      'Misafir "klima çok ses yapıyor" diye şikayet ediyor',
      'Banyolarda küf, koku problemi',
      'Lobi/restoran ile odalar dengesiz ısınıyor',
      'Enerji faturası işletme karını yiyor',
      'Yangın yönetmeliği için duman tahliye lazım',
    ],
    promises: [
      'Oda başına sessiz fan-coil sistemi',
      'Banyo emiş + ısı geri kazanım',
      'Lobi için klima santrali (sıcaklık + nem)',
      'Enerji verimli sistem · %40 fatura tasarrufu',
      'Yangın yönetmeliğine tam uyum',
    ],
    recommendedProducts: [
      'klima-santrali',
      'klima-sistemleri',
      'hucreli-aspirator',
      'baca-sistemleri',
      'havalandirma-sistemleri',
    ],
    recommendedDecoration: [
      'ic-mimari-tasarim',
      'asma-tavan',
      'boya-badana',
      'dis-cephe-kaplama',
    ],
    budgetRange: '100.000 ₺ - 1.500.000 ₺',
    timeline: '15 - 60 gün',
    caseStudy: {
      title: 'Mardin · 24 odalı butik otel',
      summary: 'VRF klima + her odada fan-coil, lobi için Eurovent AHU, banyolarda emiş fanı. Misafir memnuniyetinde 4.8/5 puan, enerji faturasında %42 azalma.',
    },
    icon: 'M3 9l9-7 9 7M5 9v11a1 1 0 001 1h12a1 1 0 001-1V9M9 13h6M9 17h6',
  },
  {
    slug: 'fabrika-uretim',
    title: 'Fabrika & Üretim',
    emoji: '🏭',
    short: 'Endüstriyel tesis',
    seo: 'Fabrika Üretim Havalandırma',
    description: 'Tekstil, gıda, metal, plastik üretim — işçi sağlığı, ürün kalitesi ve yönetmeliklere uygun havalandırma çözümleri.',
    heroImage: '/images/lib/pexels-31112181.webp',
    problems: [
      'Toz/duman yönetmeliğe takılıyor',
      'İşçiler "sıcak/havasız" diye verim düşük',
      'Boya/kimyasal buharı sağlıksız ortam yaratıyor',
      'Eski sistem yetersiz, soğutma başarısız',
      'Ex-proof (patlamaya dayanıklı) sistem gerek',
    ],
    promises: [
      'Jet-Pulse toz toplama · %99,9 filtreleme',
      'Salyangoz fan ile yüksek debi havalandırma',
      'Su perdesi/elektrostatik buhar tutma',
      'ATEX sertifikalı Ex-proof seçenekler',
      'OSHA/Bakanlık denetimine uygunluk raporu',
    ],
    recommendedProducts: [
      'toz-toplama-sistemleri',
      'salyangoz-fan',
      'aksiyal-fan',
      'sulu-filtre',
      'baca-sistemleri',
    ],
    recommendedDecoration: [
      'tadilat-renovasyon',
      'dis-cephe-kaplama',
      'zemin-kaplama',
      'boya-badana',
    ],
    budgetRange: '200.000 ₺ - 5.000.000 ₺',
    timeline: '30 - 120 gün',
    caseStudy: {
      title: 'Diyarbakır OSB · 4.000 m² mermer işleme tesisi',
      summary: 'Mermer tozu için 12 noktalı Jet-Pulse toz toplama + sulu filtre kombinasyonu. Ortam tozu yasal limitin %5 altına indi, işçi şikayetleri sıfırlandı.',
    },
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5',
  },
  {
    slug: 'saglik-klinik',
    title: 'Hastane & Klinik',
    emoji: '🏥',
    short: 'Sağlık kuruluşu',
    seo: 'Hastane Klinik Havalandırma',
    description: 'Özel hastane, klinik, diş hekimi, fizik tedavi — Sağlık Bakanlığı standartlarında HEPA filtreli temiz hava sistemleri.',
    heroImage: '/images/lib/pexels-11660582.webp',
    problems: [
      'Sağlık Bakanlığı denetimi geliyor, HEPA gerek',
      'Ameliyathane temiz oda standardı yok',
      'Bekleme salonunda hava sirkülasyonu yetersiz',
      'Lab odasında özel filtreleme gerek',
      'Mevcut sistem sessizlik yönetmeliğine aykırı',
    ],
    promises: [
      'EN ISO 14644 temiz oda sertifikalı sistem',
      'HEPA H13/H14 filtre · virüs/bakteri %99.97 tutma',
      'Pozitif/negatif basınçlı oda dizaynı',
      'Sessiz çalışma (< 35 dB) — hasta konforu',
      'Sağlık Bakanlığı belgeli kurulum raporu',
    ],
    recommendedProducts: [
      'klima-santrali',
      'filtreler',
      'elektrostatik-filtre',
      'menfez',
      'hava-kanallari',
    ],
    recommendedDecoration: [
      'ic-mimari-tasarim',
      'asma-tavan',
      'alcipan-duvar',
      'zemin-kaplama',
    ],
    budgetRange: '150.000 ₺ - 2.000.000 ₺',
    timeline: '20 - 90 gün',
    caseStudy: {
      title: 'Şanlıurfa · Özel diyaliz merkezi',
      summary: 'EN ISO 14644 sınıf 7 temiz oda, HEPA H13 filtreli AHU. Bakanlık denetiminden tam puan, hasta odası konforu 4.9/5.',
    },
    icon: 'M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  },
  {
    slug: 'okul-egitim',
    title: 'Okul & Eğitim',
    emoji: '🎓',
    short: 'Eğitim kurumu',
    seo: 'Okul Kreş Havalandırma',
    description: 'Özel okul, kreş, kurs merkezi, üniversite — öğrenci sağlığı ve dikkat seviyesi için CO₂ kontrollü taze hava.',
    heroImage: '/images/lib/pexels-8363119.webp',
    problems: [
      'Sınıfta 30 çocuk var, hava ağırlaşıyor',
      'Veliler "havasız" diye şikayetçi',
      'Kreş için yangın/temiz hava yönetmeliği var',
      'Yemekhanede koku ve nem problemi',
      'Yazın klima eşitsiz, kışın soba/petek dengesiz',
    ],
    promises: [
      'CO₂ sensörlü taze hava — otomatik artır/azalt',
      'Filtreli hava ile alerjen/virüs kontrolü',
      'Yangın yönetmeliği & MEB standartlarına uygun',
      'Yemekhane için kapsamlı davlumbaz + filtre',
      'Sessiz çalışma — derse konsantrasyonu bozmaz',
    ],
    recommendedProducts: [
      'klima-santrali',
      'filtreler',
      'menfez',
      'davlumbaz-sistemleri',
      'hava-kanallari',
    ],
    recommendedDecoration: [
      'ic-mimari-tasarim',
      'asma-tavan',
      'boya-badana',
      'zemin-kaplama',
    ],
    budgetRange: '80.000 ₺ - 800.000 ₺',
    timeline: '15 - 45 gün',
    caseStudy: {
      title: 'Diyarbakır · 12 sınıflı özel kreş',
      summary: 'Her sınıfa CO₂ sensörlü taze hava kanalı, yemekhane için paslanmaz davlumbaz + elektrostatik filtre. MEB ve İtfaiye onayı, veli memnuniyeti yüksek.',
    },
    icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.42a12 12 0 010 5.84M12 14L5.84 10.58a12 12 0 000 5.84',
  },
];

export const getSector = (slug: string): Sector | undefined =>
  sectors.find((s) => s.slug === slug);
