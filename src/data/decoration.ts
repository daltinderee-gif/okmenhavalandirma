// Mir Dekorasyon hizmetleri — Ökmen çatı markası altındaki ikinci hizmet kolu
// mirdekorasyon.com · mirdekorasyon.com.tr

export interface DecorationService {
  slug: string;
  title: string;
  seo: string;
  desc: string;
  /** Pre-selected Pexels CDN image URL */
  image: string;
  /** Optional local override — /public/dekorasyon/{slug}.jpg */
  localImage?: string;
  /** Bullet feature list for detail page */
  features: string[];
  /** Use cases / target sectors */
  applications: string[];
  /** Icon SVG path (heroicons-like) */
  icon: string;
  /** Hangi ana kategoriye ait */
  category: 'tasarim' | 'tadilat' | 'uygulama';
}

export function getDecorationImage(s: DecorationService): string {
  return s.localImage || s.image;
}

export const decorationServices: DecorationService[] = [
  {
    slug: 'ic-mimari-tasarim',
    title: 'İç Mimari & Tasarım',
    seo: 'Diyarbakır İç Mimari Tasarım',
    desc: 'Konut, ofis ve ticari mekanlar için fonksiyonel ve estetik iç mimari çözümler',
    image: 'https://images.pexels.com/photos/34538288/pexels-photo-34538288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'İhtiyaç & kullanım analizi',
      'Konsept ve mood-board',
      'Plan ve kesit çizimleri',
      'Malzeme ve renk paleti seçimi',
      'Aydınlatma tasarımı',
    ],
    applications: ['Konut', 'Ofis', 'Restoran', 'Cafe', 'Mağaza', 'Otel'],
    icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 16h18M9 21h6M12 17v4',
    category: 'tasarim',
  },
  {
    slug: '3d-gorsellestirme',
    title: '3D Tasarım & Görselleştirme',
    seo: '3D İç Mekan Görselleştirme',
    desc: 'Uygulamadan önce projeyi fotoğraf gerçekçiliğinde görmenizi sağlayan 3D render',
    image: 'https://images.pexels.com/photos/10145678/pexels-photo-10145678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Foto-gerçekçi 3D render',
      '360° sanal tur',
      'Mobilya ve malzeme animasyonu',
      'Aydınlatma simülasyonu',
      'Sınırsız revizyon hakkı',
    ],
    applications: ['Konut tasarım', 'Ticari proje', 'Restoran', 'Showroom', 'Sunum'],
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    category: 'tasarim',
  },
  {
    slug: 'tadilat-renovasyon',
    title: 'Komple Tadilat & Renovasyon',
    seo: 'Diyarbakır Komple Tadilat',
    desc: 'Anahtar teslim ev ve işyeri tadilatı — projeden teslime tek elden',
    image: 'https://images.pexels.com/photos/15798782/pexels-photo-15798782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Kırım-döküm ve hafriyat',
      'Elektrik & sıhhi tesisat yenileme',
      'Doğramalı kapı ve pencere',
      'Tüm yüzey kaplamaları',
      'Anahtar teslim süreç yönetimi',
    ],
    applications: ['Konut tadilatı', 'Ofis yenileme', 'Dükkân tadilatı', 'Restoran', 'Cafe'],
    icon: 'M10 6H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M21 3l-7 7M14 3h7v7',
    category: 'tadilat',
  },
  {
    slug: 'asma-tavan',
    title: 'Asma Tavan Sistemleri',
    seo: 'Diyarbakır Asma Tavan',
    desc: 'Modern asma tavan tasarımları — alçıpan, akustik panel, dekoratif modeller',
    image: 'https://images.pexels.com/photos/33898341/pexels-photo-33898341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Alçıpan asma tavan',
      'Akustik panel uygulaması',
      'Gizli ışıklandırma kanalı',
      'Çift kademeli dekoratif modeller',
      'Yangına dayanıklı seçenekler',
    ],
    applications: ['Konut', 'Ofis', 'Mağaza', 'Restoran', 'Hastane', 'Okul'],
    icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    category: 'uygulama',
  },
  {
    slug: 'alcipan-duvar',
    title: 'Alçıpan & Duvar Sistemleri',
    seo: 'Alçıpan Duvar Uygulaması',
    desc: 'Bölme duvar, dekoratif niş ve akustik yalıtımlı alçıpan sistemleri',
    image: 'https://images.pexels.com/photos/11427055/pexels-photo-11427055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Bölme duvar (single/double katmanlı)',
      'Dekoratif niş ve raf',
      'Su geçirmez (yeşil alçıpan)',
      'Yangına dayanıklı (kırmızı alçıpan)',
      'Akustik yalıtım entegre',
    ],
    applications: ['Konut', 'Ofis', 'Hastane', 'Otel', 'AVM', 'Mağaza'],
    icon: 'M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3',
    category: 'uygulama',
  },
  {
    slug: 'boya-badana',
    title: 'Boya & Badana',
    seo: 'Diyarbakır Boya Badana',
    desc: 'İç-dış mekan boya, dekoratif boya teknikleri ve profesyonel uygulama',
    image: 'https://images.pexels.com/photos/6764289/pexels-photo-6764289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'İç cephe silikonlu plastik boya',
      'Dış cephe akrilik / silikon',
      'Dekoratif boya teknikleri (taş, beton, eskitme)',
      'Sıhhi alan epoksi boya',
      'Profesyonel ekip · temiz uygulama',
    ],
    applications: ['Konut', 'Ofis', 'Hastane', 'Otel', 'Endüstri', 'Dış cephe'],
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 3l-7 7M14 3h7v7',
    category: 'uygulama',
  },
  {
    slug: 'dis-cephe-kaplama',
    title: 'Dış Cephe Kaplama',
    seo: 'Diyarbakır Dış Cephe Kaplama',
    desc: 'Mantolama, kompozit panel, taş ve klinker tuğla cephe sistemleri',
    image: 'https://images.pexels.com/photos/12789936/pexels-photo-12789936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Mantolama (EPS / XPS / taş yünü)',
      'Alüminyum kompozit panel (ACP)',
      'Doğal taş ve seramik kaplama',
      'Klinker tuğla uygulaması',
      'Isı yalıtımı + estetik tek pakette',
    ],
    applications: ['Bina cephesi', 'Villa', 'Ticari yapı', 'Ofis bloğu', 'Apartman'],
    icon: 'M3 21h18M5 21V8l7-5 7 5v13M9 21V12h6v9M9 8h.01M15 8h.01M12 5h.01',
    category: 'uygulama',
  },
  {
    slug: 'zemin-kaplama',
    title: 'Zemin Kaplama',
    seo: 'Parke Seramik Laminat Diyarbakır',
    desc: 'Laminat parke, masif parke, seramik ve dekoratif beton zemin uygulamaları',
    image: 'https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Laminat parke (AC4 / AC5)',
      'Masif ve mühendislik parke',
      'Seramik & porselen karo',
      'Dekoratif epoksi & beton zemin',
      'Şap & altlık dahil komple çözüm',
    ],
    applications: ['Konut', 'Ofis', 'Mağaza', 'Restoran', 'Endüstri', 'Spor salonu'],
    icon: 'M4 4h16v16H4V4zM4 8h16M4 12h16M4 16h16M8 4v16M12 4v16M16 4v16',
    category: 'uygulama',
  },
];

export const getDecorationService = (slug: string): DecorationService | undefined =>
  decorationServices.find((s) => s.slug === slug);

export const decorationCategories = {
  tasarim: 'Tasarım & Görselleştirme',
  tadilat: 'Tadilat & Renovasyon',
  uygulama: 'Uygulama Hizmetleri',
} as const;
