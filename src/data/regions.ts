export interface Region {
  slug: string;
  /** Şehrin sanayisine uygun öne çıkan ürün slug'ları (local SEO + alaka) */
  recommendedProducts: string[];
  city: string;
  title: string;
  description: string;
  intro: string;
  climate: string;
  industrial: string;
  services: string[];
  districts: string[];
  mapEmbed: string;
  heroImage: string;
}

export const regions: Region[] = [
  {
    slug: 'diyarbakir-havalandirma',
    recommendedProducts: ['havalandirma-sistemleri', 'klima-santrali', 'toz-toplama-sistemleri', 'davlumbaz-sistemleri', 'celik-baca-sistemleri', 'hava-kanallari'],
    city: 'Diyarbakır',
    title: 'Diyarbakır Havalandırma Sistemleri',
    description: 'Diyarbakır endüstriyel havalandırma, klima santrali, toz toplama, davlumbaz ve baca sistemleri kurulum, montaj ve servis.',
    intro: 'Diyarbakır merkezimizden 15+ yıldır Güneydoğu Anadolu Bölgesi\'nin tüm endüstriyel ve ticari havalandırma ihtiyaçlarına çözüm üretiyoruz. Şehrin Organize Sanayi Bölgesi, Karacadağ Kalkınma Ajansı çevresi ve ticari merkezlerinde yüzlerce projeye imza attık.',
    climate: 'Diyarbakır karasal iklimi (yaz aylarında 40°C+, kışın -10°C\'ye düşen sıcaklıklar) endüstriyel mekânlarda hem ısıtma hem soğutma açısından özel mühendislik gerektirir. Bizim hesaplarımız bu uç değerleri her zaman dikkate alır.',
    industrial: 'Diyarbakır 1. ve 2. OSB, Bağlar Sanayi Sitesi, Karacadağ Kalkınma çevresi, mermer ocakları ve gıda işleme tesisleri bizim ana çalışma alanlarımız.',
    services: [
      'Endüstriyel havalandırma proje ve kurulum',
      'Klima santrali (AHU) imalat ve montaj',
      'Toz toplama sistemleri (Jet-Pulse)',
      'Davlumbaz ve mutfak egzoz sistemleri',
      'Klima sistemleri (split, VRF/VRV)',
      'Çelik baca ve egzoz hatları',
      'Filtre ve elektrostatik filtre',
      'Bakım, servis ve revizyon',
    ],
    districts: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur', 'Bismil', 'Çınar', 'Ergani', 'Silvan'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50871.46!2d40.197!3d37.910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007588c4b5e8e35%3A0x0!2zRGl5YXJiYWvEsXI!5e0!3m2!1str!2str!4v1700000000',
    heroImage: '/images/lib/pexels-586744.webp',
  },
  {
    slug: 'sanliurfa-havalandirma',
    recommendedProducts: ['aksiyal-fan', 'klima-santrali', 'toz-toplama-sistemleri', 'davlumbaz-sistemleri', 'filtreler', 'hava-kanallari'],
    city: 'Şanlıurfa',
    title: 'Şanlıurfa Havalandırma Sistemleri',
    description: 'Şanlıurfa OSB ve sanayi bölgesinde endüstriyel havalandırma, soğutma, toz toplama ve baca sistemleri.',
    intro: 'Şanlıurfa\'nın gelişen tekstil, gıda ve tarımsal sanayi tesislerine Diyarbakır ekibimizle 1 saatlik mesafeden kesintisiz hizmet veriyoruz. OSB içindeki onlarca fabrikaya kurduğumuz sistemlerle bölgenin tercih edilen havalandırma firması konumundayız.',
    climate: 'Şanlıurfa\'da yaz sıcaklıkları sıkça 45°C\'yi aşar — bu uç koşullar özellikle gıda, tekstil ve depolama tesislerinde özel soğutma ve hava sirkülasyonu hesabı gerektirir.',
    industrial: 'Şanlıurfa OSB, Viranşehir Sanayi Bölgesi, Suruç ve Akçakale tarım işletmeleri, GAP bölgesi yatırımları temel hizmet alanlarımızdır.',
    services: [
      'Endüstriyel havalandırma ve soğutma',
      'Tekstil sektörü için özel filtrasyon',
      'Gıda işletmeleri için klima santrali',
      'Tarım depoları havalandırma',
      'Davlumbaz ve mutfak sistemleri',
      'VRF/VRV klima projeleri',
      'Toz toplama (un, çırçır, hububat)',
      'Bakım ve yıllık servis sözleşmesi',
    ],
    districts: ['Haliliye', 'Eyyübiye', 'Karaköprü', 'Viranşehir', 'Siverek', 'Suruç', 'Akçakale', 'Birecik'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51200!2d38.78!2d3d37.16!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153336!2zxJ5hbmzEsXVyZmE!5e0!3m2!1str!2str!4v1700000000',
    heroImage: '/images/lib/pexels-3964736.webp',
  },
  {
    slug: 'batman-havalandirma',
    recommendedProducts: ['aksiyal-fan', 'celik-baca-sistemleri', 'toz-toplama-sistemleri', 'sulu-filtre', 'elektrostatik-filtre', 'davlumbaz-sistemleri'],
    city: 'Batman',
    title: 'Batman Havalandırma Sistemleri',
    description: 'Batman petrol, kimya ve gıda sanayi tesislerinde havalandırma, Ex-proof fan ve toz toplama çözümleri.',
    intro: 'Batman\'ın petrol rafinerisi, kimya tesisleri ve gelişen sanayi parkına özel mühendislik çözümleri sunuyoruz. Ex-proof (patlamaya dayanıklı) fan ve filtre sistemlerinde bölgenin uzman ekibiyiz.',
    climate: 'Batman, bölgenin görece nemli bir noktası — yaz sıcaklığı 40°C\'yi geçer, neme bağlı korozyon riski sistem seçiminde belirleyicidir.',
    industrial: 'Batman OSB, TÜPRAŞ Batman Rafinerisi çevresi, petrokimya tesisleri ve Beşiri-Kozluk sanayi siteleri çalışma alanımızdır.',
    services: [
      'Ex-proof (ATEX) fan ve havalandırma',
      'Petrol/kimya tesisleri için filtrasyon',
      'Paslanmaz çelik baca sistemleri',
      'Endüstriyel klima santralleri',
      'Davlumbaz ve duman emme',
      'Toz toplama ve sulu filtre',
      'Sıcak hava jeneratörleri',
      'Yıllık bakım sözleşmeleri',
    ],
    districts: ['Merkez', 'Beşiri', 'Gercüş', 'Hasankeyf', 'Kozluk', 'Sason'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d41.13!3d37.88!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40078!2zQmF0bWFu!5e0!3m2!1str!2str!4v1700000000',
    heroImage: '/images/lib/pexels-459728.webp',
  },
  {
    slug: 'mardin-havalandirma',
    recommendedProducts: ['klima-santrali', 'davlumbaz-sistemleri', 'klima-sistemleri', 'celik-baca-sistemleri', 'elektrostatik-filtre', 'menfez'],
    city: 'Mardin',
    title: 'Mardin Havalandırma Sistemleri',
    description: 'Mardin OSB ve turizm tesislerinde havalandırma, klima santrali ve davlumbaz sistemleri.',
    intro: 'Mardin\'in tarihi otelleri, restoranları ve gelişen sanayi bölgesinde estetik ve performans dengesi gözeten çözümler sunuyoruz. Tarihi yapılarda görünmez kanal sistemleri konusunda uzmanız.',
    climate: 'Mardin platosu yüksek rakımı sayesinde nispeten ılıman — ancak yaz aylarında güneşlenme süresi çok uzun, bu da iklimlendirme yüklerini artırır.',
    industrial: 'Mardin OSB, Kızıltepe Sanayi Sitesi, tarihi otel-restoran bölgesi ve Nusaybin sınır ticaret merkezi çalışma alanlarımız arasında.',
    services: [
      'Klima santralleri (otel ve hastane)',
      'Restoran davlumbaz ve egzoz',
      'Tarihi yapılarda gizli kanal',
      'VRF/VRV klima sistemleri',
      'Endüstriyel havalandırma',
      'Çelik baca uygulamaları',
      'Filtre ve elektrostatik',
      'Servis ve bakım',
    ],
    districts: ['Artuklu', 'Kızıltepe', 'Midyat', 'Nusaybin', 'Derik', 'Mazıdağı', 'Savur', 'Yeşilli'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51500!2d40.74!3d37.31!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40076!2zTWFyZGlu!5e0!3m2!1str!2str!4v1700000000',
    heroImage: '/images/lib/pexels-2544829.webp',
  },
  {
    slug: 'gaziantep-havalandirma',
    recommendedProducts: ['toz-toplama-sistemleri', 'aksiyal-fan', 'salyangoz-fan', 'klima-santrali', 'hava-kanallari', 'davlumbaz-sistemleri'],
    city: 'Gaziantep',
    title: 'Gaziantep Havalandırma Sistemleri',
    description: 'Gaziantep OSB, tekstil ve gıda sanayisinde endüstriyel havalandırma ve toz toplama sistemleri.',
    intro: 'Türkiye\'nin en büyük OSB\'lerinden Gaziantep Organize Sanayi Bölgesi\'nde tekstil, gıda, plastik ve mobilya tesislerine geniş kapsamlı havalandırma ve filtrasyon çözümleri sunuyoruz.',
    climate: 'Gaziantep\'te yaz çok sıcak ve kuru, kış orta düzeyde — büyük ölçekli üretim tesislerinde işçi verimliliği için iklimlendirme şart.',
    industrial: '4. ve 5. OSB, Başpınar Sanayi Sitesi, Nizip ve Şahinbey sanayi havzaları ana çalışma alanlarımız.',
    services: [
      'Tekstil sektörü filtrasyonu',
      'Gıda tesisleri klima santrali',
      'Mobilya/ahşap toz toplama',
      'Plastik enjeksiyon havalandırma',
      'Büyük debili aspiratör fanlar',
      'Hava kanalı tesisat',
      'Davlumbaz ve mutfak egzoz',
      'Yıllık servis sözleşmesi',
    ],
    districts: ['Şehitkamil', 'Şahinbey', 'Oğuzeli', 'Nizip', 'İslahiye', 'Nurdağı', 'Araban', 'Yavuzeli'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51800!2d37.38!3d37.07!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153181!2zR2F6aWFudGVw!5e0!3m2!1str!2str!4v1700000000',
    heroImage: '/images/lib/pexels-2760243.webp',
  },
  {
    slug: 'elazig-havalandirma',
    recommendedProducts: ['toz-toplama-sistemleri', 'celik-baca-sistemleri', 'isitma-sistemleri', 'sulu-filtre', 'baca-sistemleri', 'salyangoz-fan'],
    city: 'Elazığ',
    title: 'Elazığ Havalandırma Sistemleri',
    description: 'Elazığ OSB ve sanayi bölgesinde endüstriyel havalandırma, baca ve filtre sistemleri.',
    intro: 'Elazığ\'ın gelişen krom-magnezit madenciliği, mermer işleme ve sanayi tesislerine özel toz toplama ve filtrasyon çözümleri sunuyoruz. Bölgenin tek noktadan endüstriyel havalandırma çözüm ortağıyız.',
    climate: 'Elazığ karasal iklim — yaz sıcakları orta seviyede, ancak kışın -15°C\'ye düşen sıcaklıklar ısıtma sistemi seçiminde belirleyici.',
    industrial: 'Elazığ OSB, Ferrokrom çevresi, mermer ve maden işleme tesisleri, gıda ve hayvancılık işletmeleri çalışma alanımız.',
    services: [
      'Mermer/maden tesisi toz toplama',
      'Ferrokrom için yüksek sıcaklık baca',
      'Endüstriyel ısıtma sistemleri',
      'Klima santrali kurulum',
      'Davlumbaz ve mutfak',
      'Çelik baca ve egzoz',
      'Sulu filtre uygulamaları',
      'Yıllık servis ve bakım',
    ],
    districts: ['Merkez', 'Kovancılar', 'Karakoçan', 'Palu', 'Maden', 'Sivrice', 'Baskil', 'Keban'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52000!2d39.22!3d38.68!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40751!2zRWxhesSxxJ8!5e0!3m2!1str!2str!4v1700000000',
    heroImage: '/images/lib/pexels-162568.webp',
  },
];

export const getRegion = (slug: string): Region | undefined =>
  regions.find((r) => r.slug === slug);
