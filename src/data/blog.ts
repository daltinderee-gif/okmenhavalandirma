export interface BlogPost {
  /** URL slug — /blog/{slug}/ */
  slug: string;
  /** H1 / kart başlığı */
  title: string;
  /** SEO meta açıklaması + kart özeti */
  excerpt: string;
  /** Lokal görsel yolu (public/images/lib/*.webp veya /products/*.webp) */
  image: string;
  /** Görselin alt metni */
  imageAlt: string;
  /** İnsan-okunur tarih, örn "12 Mayıs 2026" */
  date: string;
  /** ISO tarih (schema + <time> için), örn "2026-05-12" */
  isoDate: string;
  /** Kategori etiketi */
  category: string;
  /** Yazar adı */
  author: string;
  /** Tahmini okuma süresi, örn "7 dk" */
  readingTime: string;
  /** Tam yazı içeriği — güvenilir HTML (kendi içeriğimiz) */
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'fan-secimi',
    title: 'Endüstriyel Havalandırmada Doğru Fan Seçimi',
    excerpt:
      'Aksiyal mı, salyangoz mu, hücreli aspiratör mü? Tesisinize uygun fan tipini seçmenin püf noktaları, debi-basınç hesabı ve enerji verimliliği ipuçları.',
    image: '/images/lib/pexels-162568.webp',
    imageAlt: 'Endüstriyel aksiyal fan ve havalandırma sistemi',
    date: '12 Mayıs 2026',
    isoDate: '2026-05-12',
    category: 'Mühendislik',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '7 dk',
    body: `
<p>Bir tesisin havalandırma performansı, kalbindeki <strong>fan seçimi</strong> ile başlar. Yanlış seçilmiş bir fan; yetersiz hava sirkülasyonu, gereksiz enerji tüketimi, aşırı gürültü ve erken arıza demektir. Doğru fan ise sessiz, verimli ve on yıllar boyunca sorunsuz çalışır. Bu yazıda endüstriyel havalandırmada fan tiplerini, seçim kriterlerini ve sık yapılan hataları mühendis gözüyle ele alıyoruz.</p>

<h2>Fan Tipleri: Hangisi Nerede Kullanılır?</h2>
<p>Endüstride en sık karşılaştığımız üç ana fan ailesi vardır ve her birinin kendine özgü bir çalışma karakteri bulunur:</p>
<ul>
  <li><strong>Aksiyal fanlar:</strong> Havayı eksen doğrultusunda iter. Yüksek debi, düşük statik basınç isteyen uygulamalar için idealdir. Otopark egzozu, tünel havalandırması, sera ve ahır havalandırması ilk akla gelen alanlardır. Detaylar için <a href="/urunler/aksiyal-fan/">aksiyal fan ürün sayfamıza</a> göz atabilirsiniz.</li>
  <li><strong>Salyangoz (santrifüj) fanlar:</strong> Havayı 90° çevirerek yüksek statik basınç üretir. Uzun kanal hatları, filtreli sistemler, toz toplama ve davlumbaz egzozu gibi dirençli sistemlerde tercih edilir. İleri ve geri eğimli kanat seçenekleri farklı verim eğrileri sunar. <a href="/urunler/salyangoz-fan/">Salyangoz fan</a> sayfamızda kanat tiplerini karşılaştırdık.</li>
  <li><strong>Hücreli aspiratörler:</strong> Akustik yalıtımlı bir kabin içine yerleştirilmiş santrifüj fanlardır. Ses seviyesinin kritik olduğu otel, hastane, ofis ve restoran uygulamalarında öne çıkar. <a href="/urunler/hucreli-aspirator/">Hücreli aspiratör</a> ürünümüz EC motor seçeneğiyle gelir.</li>
</ul>

<h2>Debi ve Statik Basınç: İki Temel Parametre</h2>
<p>Fan seçiminin matematiği iki değere dayanır. Birincisi <strong>hava debisi</strong> (m³/h): ortamdan ne kadar havayı tahliye etmeniz veya ne kadar taze hava basmanız gerektiğidir. Genel kural, mekânın hacmini saatlik hava değişim sayısı (ACH) ile çarpmaktır. Örneğin 5.000 m³ hacimli bir boyahanede saatte 15 hava değişimi gerekiyorsa, debiniz 75.000 m³/h olmalıdır.</p>
<p>İkincisi <strong>statik basınç</strong> (Pa): havanın kanallar, dirsekler, filtreler ve menfezlerden geçerken karşılaştığı toplam dirençtir. Uzun ve dar kanallar, kirli filtreler ve çok sayıda dirsek basınç kaybını artırır. Fanın çalışma noktası, sistem direnç eğrisi ile fan eğrisinin kesiştiği yerdir; bu noktayı doğru hesaplamak verimliliğin anahtarıdır. Kanal tasarımını <a href="/urunler/hava-kanallari/">hava kanalları</a> ve <a href="/urunler/baglanti-ekipmanlari/">bağlantı ekipmanları</a> sayfalarımızda detaylandırdık.</p>

<h2>Enerji Verimliliği ve Motor Seçimi</h2>
<p>Bir fanın ömrü boyunca harcadığı enerjinin maliyeti, satın alma bedelinin çok üzerindedir. Bu nedenle motor verimi büyük önem taşır. <strong>EC (elektronik komütasyonlu) motorlar</strong>, klasik AC motorlara kıyasla %30'a varan tasarruf sağlar ve kademesiz hız kontrolü sunar. Değişken debili sistemlerde frekans invertörü (VFD) kullanmak, kısmi yükte ciddi enerji kazanımı demektir; çünkü fan gücü devir sayısının küpüyle orantılı azalır. Yani devri %20 düşürmek, gücü yaklaşık yarıya indirir.</p>

<h2>Sık Yapılan 4 Hata</h2>
<ol>
  <li><strong>Aşırı boyutlandırma:</strong> "Garanti olsun" diye büyük seçilen fan, sürekli kısık çalışır, gürültü yapar ve enerji israfı yaratır.</li>
  <li><strong>Statik basıncı ihmal etmek:</strong> Sadece debiye bakıp filtre ve kanal direncini hesaba katmamak, fanın gerçekte hedeflenen havayı basamamasına yol açar.</li>
  <li><strong>Yanlış fan tipi:</strong> Yüksek dirençli bir sisteme aksiyal fan koymak, çalışma noktasını verimsiz bölgeye iter.</li>
  <li><strong>Titreşim ve montaj kusuru:</strong> Esnek bağlantı elemanı kullanılmadan monte edilen fan, yapıya titreşim aktarır ve rulman ömrünü kısaltır. <a href="/urunler/flexible-borular/">Flexible borular</a> bu sorunu çözer.</li>
</ol>

<h2>Bölgesel Koşulları Unutmayın</h2>
<p>Güneydoğu Anadolu'nun karasal ikliminde yaz sıcaklıkları 40°C'yi rahatlıkla aşar. Bu, hem motor soğutması hem de hava yoğunluğu açısından fan seçimini etkiler. <a href="/bolgeler/diyarbakir-havalandirma/">Diyarbakır</a> ve <a href="/bolgeler/sanliurfa-havalandirma/">Şanlıurfa</a> gibi sıcak bölgelerde, IP koruma sınıfı yüksek ve termik korumalı motorlar tercih edilmelidir.</p>

<h2>Sonuç</h2>
<p>Doğru fan seçimi; debi, basınç, verim ve uygulama koşullarının birlikte değerlendirildiği bir mühendislik kararıdır. Ökmen Havalandırma olarak her projede ücretsiz keşif yapıyor, debi-basınç hesabını çıkarıyor ve size en uygun fanı net bir raporla öneriyoruz. Tesisinize özel hesap için bizimle iletişime geçin.</p>
`,
  },
  {
    slug: 'klima-santrali',
    title: 'Klima Santrali (AHU) Nedir, Nasıl Çalışır?',
    excerpt:
      'Modern binalarda iklimlendirmenin kalbi olan AHU sistemlerinin çalışma prensibi, bileşenleri, ısı geri kazanımı ve seçim kriterleri.',
    image: '/products/klima-santrali.webp',
    imageAlt: 'Endüstriyel klima santrali (AHU) ünitesi',
    date: '5 Mayıs 2026',
    isoDate: '2026-05-05',
    category: 'Eğitim',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '8 dk',
    body: `
<p>Bir hastanenin ameliyathanesinde, bir AVM'nin yüzlerce mağazasında ya da bir üretim tesisinin temiz odasında soluduğunuz hava tesadüfen orada değildir. Onu işleyen, filtreleyen, ısıtan ya da soğutan, nemini ayarlayan büyük bir makine vardır: <strong>klima santrali (AHU – Air Handling Unit)</strong>. Bu yazıda AHU'nun ne işe yaradığını, bileşenlerini ve doğru seçimi adım adım açıklıyoruz.</p>

<h2>Klima Santrali Tam Olarak Ne Yapar?</h2>
<p>Klima santrali, dışarıdan aldığı taze hava ile ortamdan geri dönen havayı belirli oranlarda karıştırır, bu havayı bir dizi işlemden geçirir ve istenen sıcaklık, nem ve temizlik değerlerine getirerek mahalle gönderir. Yani bir AHU aslında bir "hava fabrikasıdır": ham hava girer, işlenmiş konforlu hava çıkar. <a href="/urunler/klima-santrali/">Klima santrali ürün sayfamızda</a> modüler kapasite seçeneklerini bulabilirsiniz.</p>

<h2>Bir AHU'nun Temel Bileşenleri</h2>
<p>Modüler yapısı sayesinde her AHU, ihtiyaca göre farklı hücrelerin birleşiminden oluşur. Tipik bileşenler şunlardır:</p>
<ul>
  <li><strong>Karışım hücresi ve damperler:</strong> Taze hava ile dönüş havasını oranlayarak hem konforu hem enerji ekonomisini sağlar.</li>
  <li><strong>Filtre kademeleri:</strong> Kaba (G4), ince (F7-F9) ve gerektiğinde HEPA (H13-H14) filtreler havayı temizler. Filtre seçenekleri için <a href="/urunler/filtreler/">filtreler</a> sayfamıza bakın.</li>
  <li><strong>Isıtma ve soğutma serpantinleri:</strong> Sıcak/soğuk su ya da direkt genleşmeli (DX) batarya ile havanın sıcaklığını ayarlar.</li>
  <li><strong>Nemlendirme/nem alma:</strong> Özellikle tekstil, ilaç ve müze gibi nem-hassas ortamlarda kritiktir.</li>
  <li><strong>Fan grubu:</strong> İşlenmiş havayı sisteme basar. Genellikle plug-fan (kovansız) yapıda ve frekans kontrollüdür.</li>
  <li><strong>Isı geri kazanım ünitesi:</strong> Atılan havadaki enerjiyi taze havaya aktararak büyük tasarruf sağlar.</li>
</ul>

<h2>Isı Geri Kazanımı: AHU'nun En Değerli Özelliği</h2>
<p>Kışın 22°C'ye ısıttığınız havayı dışarı atıp yerine -5°C'lik soğuk havayı içeri almak, enerjiyi pencereden atmak gibidir. <strong>Isı geri kazanım üniteleri</strong> (rotorlu, plakalı veya run-around tipi), atık havanın enerjisinin %60-85'ini geri kazanarak işletme maliyetini ciddi biçimde düşürür. Diyarbakır gibi hem çok sıcak yaz hem soğuk kış yaşanan <a href="/bolgeler/diyarbakir-havalandirma/">karasal iklim bölgelerinde</a> bu teknoloji yatırımın kendini en hızlı amorti ettiği noktadır.</p>

<h2>Doğru AHU Nasıl Seçilir?</h2>
<p>Seçim sürecinde dikkate aldığımız temel kriterler:</p>
<ol>
  <li><strong>Hava debisi (m³/h):</strong> Mahallin ısı yükü ve taze hava gereksinimine göre hesaplanır.</li>
  <li><strong>Panel kalitesi:</strong> Eurovent sertifikalı, ısı köprüsü kesilmiş çift cidarlı paneller hem yalıtım hem dayanım sağlar.</li>
  <li><strong>Filtrasyon sınıfı:</strong> Hastane ve temiz oda için HEPA, ofis için F7 yeterli olabilir.</li>
  <li><strong>SFP değeri (Özgül Fan Gücü):</strong> Düşük SFP, enerji verimli bir santral demektir.</li>
  <li><strong>Hijyen sertifikası:</strong> Hastane ve gıda uygulamalarında VDI 6022 uyumu aranır.</li>
</ol>

<h2>Hangi Sektörler AHU Kullanır?</h2>
<p>Hastaneler, AVM'ler, ofis kuleleri, oteller, ilaç ve gıda üretim tesisleri, müzeler ve veri merkezleri klima santralinin vazgeçilmez olduğu yapılardır. Üretim tesislerinde AHU çoğu zaman <a href="/urunler/toz-toplama-sistemleri/">toz toplama</a> ve <a href="/urunler/havalandirma-sistemleri/">genel havalandırma</a> sistemleriyle entegre çalışır. <a href="/bolgeler/gaziantep-havalandirma/">Gaziantep OSB</a> gibi yoğun sanayi bölgelerinde büyük debili santralleri tekstil ve gıda tesisleri için yaygın olarak uyguluyoruz.</p>

<h2>Sonuç</h2>
<p>Klima santrali, bir binanın iç hava kalitesini ve enerji performansını belirleyen en kritik ekipmandır. Yanlış seçilmiş bir AHU, hem konforsuzluk hem yüksek fatura getirir; doğru projelendirilmiş bir santral ise yıllarca sessiz tasarruf sağlar. Ökmen Havalandırma olarak ihtiyaç analizinden devreye almaya kadar tüm süreci tek elden yürütüyoruz.</p>
`,
  },
  {
    slug: 'toz-toplama',
    title: 'Toz Toplama Sistemlerinde Jet-Pulse Teknolojisi',
    excerpt:
      'Otomatik filtre temizleme nasıl çalışır, hangi sektörlerde tercih edilir, verim hesabı ve patlama güvenliği (ATEX) konuları.',
    image: '/products/toz-toplama-sistemleri.webp',
    imageAlt: 'Jet-Pulse filtreli endüstriyel toz toplama ünitesi',
    date: '28 Nisan 2026',
    isoDate: '2026-04-28',
    category: 'Teknoloji',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '6 dk',
    body: `
<p>Marangoz atölyesindeki ahşap tozu, mermer kesimindeki silis, metal taşlamadaki çapaklar, un fabrikasındaki hububat tozu... Endüstride toz, hem işçi sağlığını hem ürün kalitesini hem de yangın/patlama güvenliğini tehdit eden bir sorundur. Modern <strong>Jet-Pulse toz toplama sistemleri</strong> bu sorunu yüksek verimle ve kendi kendini temizleyerek çözer. İşte teknolojinin perde arkası.</p>

<h2>Jet-Pulse Nedir, Nasıl Çalışır?</h2>
<p>Toz toplama sisteminin kalbi <strong>kartuş veya torba filtrelerdir</strong>. Kirli hava fana doğru çekilirken bu filtrelerin yüzeyinden geçer; tozlar dışarıda kalır, temiz hava içeri süzülür. Zamanla filtre yüzeyi tıkanır ve direnç artar. İşte burada Jet-Pulse devreye girer: bir PLC kontrolü, belirli aralıklarla filtrelerin içine <strong>ters yönde yüksek basınçlı kısa bir hava darbesi</strong> (genellikle 5-6 bar, milisaniyeler süren) gönderir. Bu darbe, filtre yüzeyindeki toz keki̇ni silkeleyerek aşağıdaki toplama haznesine düşürür.</p>
<p>Bu işlem sistem çalışırken, üretimi durdurmadan otomatik gerçekleşir. Sonuç: sabit hava debisi, sabit emiş gücü ve uzun filtre ömrü. <a href="/urunler/toz-toplama-sistemleri/">Toz toplama sistemleri</a> ürünümüz M-sınıfı kartuş filtre ve PLC kontrol paneli ile gelir.</p>

<h2>Filtreleme Verimi Neden %99,9?</h2>
<p>Modern kartuş filtreler, plise edilmiş geniş yüzey alanı sayesinde aynı hacimde çok daha fazla filtreleme yüzeyi sunar. Doğru seçilmiş bir M-sınıfı filtre, mikron altı partikülleri bile <strong>%99,9 verimle</strong> tutar. Verim, filtre alanı ile hava debisinin oranı olan "kumaş-hava oranına" (air-to-cloth ratio) bağlıdır. Bu oran ne kadar düşükse, filtre o kadar rahat çalışır ve ömrü uzar. Bunu doğru hesaplamak, sistemin uzun ömürlü olmasının anahtarıdır.</p>

<h2>Hangi Sektörler Jet-Pulse Tercih Eder?</h2>
<ul>
  <li><strong>Ahşap ve mobilya:</strong> Zımpara ve kesim tozu yoğundur, sürekli temizlik şarttır.</li>
  <li><strong>Mermer ve doğal taş:</strong> Silis tozu hem sağlık (silikozis) hem makine açısından risklidir. <a href="/bolgeler/elazig-havalandirma/">Elazığ</a> mermer ve maden tesislerinde sık uyguladığımız bir çözümdür.</li>
  <li><strong>Metal işleme:</strong> Taşlama ve lazer kesim partikülleri için ideal.</li>
  <li><strong>Gıda ve hububat:</strong> Un, çırçır ve tahıl tozunda hem hijyen hem patlama güvenliği gerekir.</li>
  <li><strong>Kimya ve çimento:</strong> İnce ve aşındırıcı tozlarda yüksek dayanım ister.</li>
</ul>

<h2>Patlama Güvenliği: ATEX ve Ex-Proof</h2>
<p>Bazı tozlar (ahşap, un, alüminyum, şeker) havada belli yoğunlukta dağıldığında patlayıcı bir atmosfer oluşturur. Bu tür ortamlarda <strong>ATEX direktiflerine uygun, Ex-proof (patlamaya dayanıklı) ekipman</strong> kullanmak yasal ve hayati bir zorunluluktur. Patlama tahliye panelleri, geri tepme klapeleri ve antistatik filtreler sistemin güvenlik katmanlarıdır. Batman gibi <a href="/bolgeler/batman-havalandirma/">petrol ve kimya yoğun bölgelerde</a> Ex-proof çözümler bizim uzmanlık alanımızdır.</p>

<h2>Sulu Filtre Alternatifi</h2>
<p>Boya, döküm ve lehim gibi yapışkan veya kıvılcımlı uygulamalarda kuru filtre yerine <a href="/urunler/sulu-filtre/">sulu filtre</a> sistemleri tercih edilebilir. Su perdesi hem tozu hem kokuyu tutar, yangın riskini ortadan kaldırır. Doğru teknolojiyi seçmek, toz tipine ve süreç koşullarına bağlıdır.</p>

<h2>Sonuç</h2>
<p>Jet-Pulse teknolojisi, toz toplamayı "ara sıra filtre temizleme" işinden, kesintisiz ve otomatik bir sisteme dönüştürür. İşçi sağlığına, ürün kalitesine ve güvenliğe yapılan bu yatırım, kısa sürede kendini amorti eder. Ökmen Havalandırma olarak toz tipinize özel ölçüm yapıyor, doğru filtre ve kapasiteyi mühendislik raporuyla öneriyoruz.</p>
`,
  },
  {
    slug: 'davlumbaz-hesabi',
    title: 'Endüstriyel Davlumbaz Hesabı: Mutfak vs Üretim',
    excerpt:
      'Restoran ve endüstriyel üretim alanları için davlumbaz boyutlandırma, egzoz debisi hesabı, yağ filtresi ve elektrostatik filtre seçimi.',
    image: '/products/davlumbaz-sistemleri.webp',
    imageAlt: 'Paslanmaz çelik endüstriyel mutfak davlumbazı',
    date: '20 Nisan 2026',
    isoDate: '2026-04-20',
    category: 'Mühendislik',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '7 dk',
    body: `
<p>Bir restoran mutfağında dumanın, yağ buharının ve kokunun ortamda asılı kalması; hem müşteri konforunu hem işçi sağlığını hem de yangın güvenliğini tehdit eder. Doğru hesaplanmış bir <strong>davlumbaz sistemi</strong> bu sorunu kökten çözer. Ancak "davlumbaz" dendiğinde akla gelen tek bir formül yoktur: ticari mutfak ile endüstriyel üretim alanının ihtiyaçları temelden farklıdır. Bu yazıda iki senaryoyu da hesaplarıyla ele alıyoruz.</p>

<h2>Davlumbaz Egzoz Debisi Nasıl Hesaplanır?</h2>
<p>Temel mantık, davlumbazın altındaki sıcak ve kirli havayı kaçırmadan yakalayıp dışarı atmaktır. Ticari mutfaklarda yaygın yöntem, <strong>davlumbaz açık alanı üzerinden yüzey hızıyla</strong> hesaplamaktır. Tipik bir duvar tipi davlumbaz için yakalama hızı 0,25-0,40 m/s arasında alınır. Açıklık alanı (m²) ile bu hızı çarpıp 3600 ile katlayınca m³/h cinsinden egzoz debisini buluruz.</p>
<p>Bir başka pratik yaklaşım, davlumbaz çevre uzunluğu ve ocak tipine (hafif, orta, ağır yük) göre metre başına debi atamaktır. Kömür ızgara ve wok gibi ağır yük üreten ocaklar, fritöz veya benmari gibi hafif kaynaklara göre çok daha yüksek debi ister. <a href="/urunler/davlumbaz-sistemleri/">Davlumbaz sistemleri</a> ürünümüzü her ocak tipine göre özel boyutlandırıyoruz.</p>

<h2>Mutfak Davlumbazı: Kritik Noktalar</h2>
<ul>
  <li><strong>Yağ tutucu kasetli filtreler:</strong> Labirent yapısıyla yağ damlacıklarını tutar, yangın riskini azaltır ve kanalların yağlanmasını önler.</li>
  <li><strong>Taze hava takviyesi (make-up air):</strong> Egzozla atılan hava kadar taze hava içeri verilmezse mutfak negatif basınca girer, kapılar zor açılır ve egzoz verimi düşer. İyi bir tasarım egzoz ile beslemeyi dengeler.</li>
  <li><strong>UV ve elektrostatik filtre:</strong> Koku ve ince yağ buharını gidermek için davlumbaza <a href="/urunler/elektrostatik-filtre/">elektrostatik filtre</a> eklenir. Şehir merkezindeki ya da AVM içindeki restoranlarda komşu şikayetini önlemek için bu neredeyse zorunludur.</li>
  <li><strong>Otomatik söndürme uyumu:</strong> Davlumbaz, yangın söndürme sistemiyle entegre çalışacak şekilde tasarlanmalıdır.</li>
</ul>

<h2>Endüstriyel Üretim Davlumbazı: Farklı Bir Dünya</h2>
<p>Üretim alanlarında davlumbaz çoğu zaman yemek değil; <strong>kaynak dumanı, lehim gazı, kimyasal buhar, ısıl işlem dumanı veya boya sisi</strong> yakalamak için kullanılır. Burada hesabın temeli "kirletici kaynağının karakteridir":</p>
<ol>
  <li>Kaynak sıcak ve yükselen bir duman üretiyorsa (kaynak, fırın), termik çekiş lehimize çalışır, davlumbazı kaynağın hemen üzerine konumlandırırız.</li>
  <li>Kaynak partikül veya yapışkan buhar üretiyorsa (boya, döküm), genellikle <a href="/urunler/sulu-filtre/">sulu filtre</a> ile birleştirilir.</li>
  <li>Yüksek sıcaklık varsa, davlumbaz ve kanallar paslanmaz çelikten (<a href="/urunler/celik-baca-sistemleri/">çelik baca</a> mantığıyla) imal edilir.</li>
</ol>
<p>Üretim davlumbazlarında yakalama hızları genellikle ticari mutfaktan yüksek tutulur, çünkü kirletici daha tehlikeli ve dağılgan olabilir. Ayrıca egzoz havası <a href="/urunler/hava-kanallari/">hava kanalları</a> ile dış ortama veya filtreleme ünitesine taşınırken basınç kaybı titizlikle hesaplanmalıdır.</p>

<h2>Mutfak ve Üretim Karşılaştırması</h2>
<p>Özetle: ticari mutfakta amaç ısı, yağ ve koku konforudur; yakalama hızları orta seviyede, yağ filtresi ve elektrostatik filtre öne çıkar. Endüstriyel üretimde amaç sağlık ve güvenliktir; yakalama hızları yüksek, malzeme dayanımı ve özel filtrasyon belirleyicidir. İki senaryoda da ortak nokta, <strong>egzoz ile taze hava dengesinin</strong> doğru kurulmasıdır.</p>

<h2>Sonuç</h2>
<p>Davlumbaz, "tavana takılan bir kapak" değil; ocak tipinden bina basınç dengesine, filtre seçiminden kanal hesabına kadar bir mühendislik bütünüdür. <a href="/bolgeler/mardin-havalandirma/">Mardin</a> ve <a href="/bolgeler/diyarbakir-havalandirma/">Diyarbakır</a> başta olmak üzere bölgemizdeki yüzlerce restoran ve üretim tesisine kurduğumuz sistemlerle bu işin inceliklerini biliyoruz. Ücretsiz keşif için bize ulaşın.</p>
`,
  },
  {
    slug: 'enerji-verimi',
    title: 'HVAC Sistemlerinde Enerji Verimi: 7 Pratik Önlem',
    excerpt:
      'İşletme maliyetlerini %30’a kadar düşüren pratik enerji verimliliği önlemleri: VFD, ısı geri kazanımı, filtre bakımı, izolasyon ve otomasyon.',
    image: '/images/lib/pexels-3964736.webp',
    imageAlt: 'Enerji verimli HVAC ve klima santrali sistemi',
    date: '14 Nisan 2026',
    isoDate: '2026-04-14',
    category: 'Tasarruf',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '6 dk',
    body: `
<p>Bir endüstriyel tesisin elektrik faturasının önemli bir kısmı havalandırma, ısıtma ve soğutma (HVAC) sistemlerine gider. İyi haber şu: bu maliyetin büyük bölümü, doğru önlemlerle düşürülebilir. Üstelik bunların çoğu pahalı yatırımlar değil, akıllı mühendislik kararlarıdır. İşte işletme maliyetinizi <strong>%30'a kadar</strong> düşürebilecek 7 pratik önlem.</p>

<h2>1. Frekans İnvertörü (VFD) Kullanın</h2>
<p>Fan ve pompaları sabit hızda çalıştırıp havayı damperle kısmak, gaz pedalına basılı tutup freni çekmek gibidir. <strong>VFD ile fan hızını ihtiyaca göre ayarlamak</strong>, kısmi yükte muazzam tasarruf sağlar; çünkü fan gücü devir sayısının küpüyle değişir. Devri %20 azaltmak gücü neredeyse yarıya indirir. Bu, en hızlı geri dönüş sağlayan önlemlerden biridir.</p>

<h2>2. Isı Geri Kazanımına Yatırım Yapın</h2>
<p>Egzozla dışarı attığınız havanın enerjisini taze havaya aktaran ısı geri kazanım üniteleri, atık enerjinin %60-85'ini geri kazanır. Hem çok sıcak hem soğuk geçen <a href="/bolgeler/diyarbakir-havalandirma/">Diyarbakır iklimi</a> gibi bölgelerde bu, ısıtma ve soğutma yükünü ciddi şekilde azaltır. Modern <a href="/urunler/klima-santrali/">klima santrali</a> sistemlerimizde bu üniteyi standart olarak öneriyoruz.</p>

<h2>3. Filtreleri Düzenli Değiştirin</h2>
<p>Kirli filtre, fanın daha çok çalışıp daha çok enerji harcaması demektir. Tıkanmış bir filtre, sistem direncini artırarak hem debiyi düşürür hem faturayı yükseltir. Düzenli bir bakım takvimiyle <a href="/urunler/filtreler/">filtrelerinizi</a> zamanında değiştirmek, en ucuz ve en etkili tasarruf yöntemlerindendir.</p>

<h2>4. Kanal ve Boruları İzole Edin</h2>
<p>Yalıtımsız bir soğuk su borusu ya da klimalanmış hava kanalı, taşıdığı enerjiyi yol boyunca kaybeder. Kaliteli <a href="/urunler/izolasyon-kaplama/">izolasyon kaplaması</a> hem enerji kaybını hem de kondens (terleme) sorununu önler. Bu, görünmez ama sürekli çalışan bir tasarruf kalemidir.</p>

<h2>5. Kanal Sızdırmazlığını Sağlayın</h2>
<p>Kötü birleştirilmiş kanallardan kaçan hava, doğrudan boşa harcanan enerjidir. Bir sistemde sızıntı oranı %20'ye kadar çıkabilir. Sızdırmazlık sınıfı yüksek <a href="/urunler/hava-kanallari/">hava kanalları</a> ve doğru <a href="/urunler/baglanti-ekipmanlari/">bağlantı ekipmanları</a> kullanmak, bastığınız havanın hedefe ulaşmasını garanti eder.</p>

<h2>6. Otomasyon ve Talebe Bağlı Havalandırma</h2>
<p>Boş bir salonu tam kapasite havalandırmanın anlamı yoktur. CO₂ veya doluluk sensörleriyle çalışan <strong>talebe bağlı havalandırma (DCV)</strong>, havayı yalnızca ihtiyaç oldukça besler. Bina otomasyonu ile zaman programı ve set değerleri optimize edilerek mesai dışı tüketim sıfıra yaklaştırılır.</p>

<h2>7. Doğru Boyutlandırma ve Bakım</h2>
<p>Aşırı büyük seçilmiş bir sistem sürekli verimsiz bölgede çalışır. Tasarrufun temeli, baştan doğru hesaplanmış bir sistemdir. Buna ek olarak düzenli bakım — rulman, kayış, motor verimi kontrolü — sistemin ilk günkü verimini korumasını sağlar. Verimli bir <a href="/urunler/havalandirma-sistemleri/">havalandırma sistemi</a> ancak doğru bakımla verimli kalır.</p>

<h2>Sonuç</h2>
<p>Enerji verimliliği, tek bir cihaz değil; tasarım, ekipman seçimi, otomasyon ve bakımın bütünüdür. Bu yedi önlemin birkaçını bile uygulamak, faturanızda gözle görülür bir fark yaratır. Ökmen Havalandırma olarak mevcut sisteminizi ücretsiz analiz ediyor, geri dönüş süresiyle birlikte iyileştirme önerilerini raporluyoruz. <a href="/bolgeler/gaziantep-havalandirma/">Gaziantep</a> ve <a href="/bolgeler/sanliurfa-havalandirma/">Şanlıurfa</a> OSB'lerindeki büyük ölçekli tesislerde bu yaklaşımla ciddi tasarruflar sağladık.</p>
`,
  },
  {
    slug: 'baca-yangin-guvenligi',
    title: 'Endüstriyel Bacalarda Yangın ve Egzoz Güvenliği',
    excerpt:
      'Çelik baca sistemlerinde yangın güvenliği önlemleri, malzeme seçimi, izolasyon, statik hesap ve TS EN standartlarına genel bakış.',
    image: '/products/celik-baca-sistemleri.webp',
    imageAlt: 'Paslanmaz çelik endüstriyel baca sistemi',
    date: '8 Nisan 2026',
    isoDate: '2026-04-08',
    category: 'Güvenlik',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '6 dk',
    body: `
<p>Bir baca yalnızca dumanı dışarı atan bir boru değildir; yüksek sıcaklığa, korozyona ve basınca maruz kalan, doğru tasarlanmadığında yangına yol açabilen kritik bir güvenlik ekipmanıdır. Kazan dairelerinden jeneratör egzozlarına, endüstriyel fırınlardan şöminelere kadar her uygulamada <strong>baca güvenliği</strong> mühendislik titizliği ister. Bu yazıda çelik baca sistemlerinde güvenliğin temel taşlarını ele alıyoruz.</p>

<h2>Doğru Malzeme: Paslanmaz Çelik Neden Önemli?</h2>
<p>Baca, yanma sonucu oluşan asidik yoğuşma ve yüksek sıcaklığa sürekli maruz kalır. Bu yüzden malzeme seçimi ömrün belirleyicisidir. <strong>AISI 304 ve 316 paslanmaz çelik</strong>, korozyona üstün direnç gösterir; 316 kalitesi özellikle klorür ve agresif gazların bulunduğu uygulamalar için tercih edilir. Galvaniz baca düşük sıcaklıkta ekonomik bir seçenek olsa da, yüksek sıcaklık ve yoğuşma riski olan yerlerde paslanmaz şarttır. <a href="/urunler/celik-baca-sistemleri/">Çelik baca sistemleri</a> ürünümüzde AISI 304/316 seçenekleri ve 50 yıla varan korozyon dayanımı sunuyoruz.</p>

<h2>Çift Cidarlı ve İzoleli Baca</h2>
<p>Yangın güvenliğinin en önemli unsurlarından biri <strong>izolasyondur</strong>. Çift cidarlı, arası yalıtım malzemesiyle doldurulmuş baca; dış yüzey sıcaklığını güvenli seviyede tutarak yanıcı yapı elemanlarıyla temas riskini ortadan kaldırır. Ayrıca izolasyon, baca gazının soğuyup yoğuşmasını önleyerek hem çekişi iyileştirir hem korozyonu azaltır. Yanıcı malzemelere mesafe (güvenlik açıklığı), üreticinin sıcaklık sınıfına göre belirlenir ve montajda mutlaka korunur.</p>

<h2>Statik Hesap: Rüzgar ve Kendi Ağırlığı</h2>
<p>Özellikle serbest duran yüksek bacalarda <strong>statik hesap</strong> hayatidir. Baca; kendi ağırlığı, rüzgar yükü ve deprem etkisi altında güvenli kalacak şekilde hesaplanmalı, gerekli yerlerde gergi telleri (guy wire) veya çelik konstrüksiyon ile desteklenmelidir. Güneydoğu'da rüzgar yükleri ve <a href="/bolgeler/elazig-havalandirma/">Elazığ</a> gibi deprem hassasiyeti yüksek bölgelerde bu hesap göz ardı edilemez. Biz her projede statik hesabı mühendislik raporuna dahil ediyoruz.</p>

<h2>Çekiş, Çap ve Yükseklik</h2>
<p>Baca güvenliği aynı zamanda doğru çekiş demektir. Yetersiz çapta veya yükseklikte bir baca, dumanı dışarı atamaz; geri tepme ve karbonmonoksit riski doğar. Aşırı büyük baca ise çekişi zayıflatır ve yoğuşmayı artırır. Doğru çap-yükseklik dengesi, yakıt tipi, cihaz gücü ve baca güzergahına göre hesaplanır. Bu hesap, <a href="/urunler/baca-sistemleri/">baca sistemleri</a> projelendirmemizin merkezindedir.</p>

<h2>Yangın Damperleri ve Kanal Güvenliği</h2>
<p>Havalandırma kanallarının yangın bölmelerinden geçtiği noktalarda <strong>yangın damperleri</strong> kullanılır. Yangın anında otomatik kapanarak alev ve dumanın kanal yoluyla yayılmasını önlerler. Egzoz ve baca hatlarının yanıcı yüklerle kesiştiği her noktada bu önlem dikkate alınmalıdır. Doğru <a href="/urunler/hava-kanallari/">hava kanalı</a> ve damper seçimi, binanın pasif yangın güvenliğinin parçasıdır.</p>

<h2>Şömine Bacalarında Özel Durum</h2>
<p>Konut ve villa şöminelerinde baca güvenliği, hem çekiş hem yangın açısından titizlik ister. Yanlış çekiş, içeriye duman dolmasına; yetersiz izolasyon ise çatı arası yangınlarına yol açabilir. <a href="/urunler/somine-sistemleri/">Şömine sistemleri</a> kurulumlarımızda baca ve duman yolu, hazne ile birlikte tek bütün olarak projelendirilir.</p>

<h2>Standartlar ve Belgelendirme</h2>
<p>Endüstriyel ve konut bacalarında TS EN serisi standartlar (malzeme, sıcaklık sınıfı, basınç ve korozyon dayanımına ilişkin) belirleyicidir. CE belgeli üretim, ürünün bu standartlara uygunluğunun göstergesidir. Belgesiz ve standart dışı baca, hem yasal hem güvenlik açısından ciddi risk taşır. Ökmen Havalandırma olarak tüm baca sistemlerimizi CE belgeli üretim ve standartlara uygun montajla teslim ediyoruz.</p>

<h2>Sonuç</h2>
<p>Güvenli bir baca; doğru malzeme, yeterli izolasyon, sağlam statik hesap ve standartlara uygun montajın birleşimidir. Bu unsurlardan herhangi birini atlamak, hem yangın hem sağlık riski demektir. <a href="/bolgeler/batman-havalandirma/">Batman</a>, <a href="/bolgeler/diyarbakir-havalandirma/">Diyarbakır</a> ve bölge genelindeki kazan dairesi, jeneratör ve fırın projelerinde anahtar teslim baca çözümlerimizle yanınızdayız.</p>
`,
  },
];

/** Slug ile tek bir blog yazısını döndürür. */
export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
