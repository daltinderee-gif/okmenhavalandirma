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
  /** İsteğe bağlı SSS — yazının sonunda gösterilir + FAQPage schema */
  faq?: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ocakbasi-davlumbazi-nasil-secilir',
    title: "Ocakbaşı Davlumbazı Nasıl Seçilir? Diyarbakır'daki Kebapçılar İçin Rehber",
    excerpt:
      'Ocak uzunluğu ve taşma payı, duvar ya da ada tipi, yağ tutucu filtre, fan çekişi ve kanal güzergâhı: ocakbaşı ve kebap mutfakları için davlumbaz seçerken bilmeniz gerekenler.',
    image: '/products/davlumbaz-sistemleri.webp',
    imageAlt: 'Ocakbaşı mangalının üzerinde paslanmaz çelik davlumbaz',
    date: '4 Ekim 2026',
    isoDate: '2026-10-04',
    category: 'Restoran',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '8 dk',
    body: `
<p>Ocakbaşı, kebap ve ciğer mutfakları havalandırma açısından en zorlu mutfaklardır. Kömür ateşi yüksek ısı üretir, etten damlayan yağ dumana karışır, servis yoğunlaştıkça mangalın önü bir anda sise döner. Böyle bir mutfakta davlumbaz bir dekor parçası değil; ustanın sağlığını, salonun havasını ve müşterinin üstüne sinen kokuyu belirleyen asıl sistemdir. Bu rehberde Diyarbakır ve çevresindeki kebapçı, ciğerci ve ocakbaşı işletmeleri için davlumbaz seçerken nelere bakmanız gerektiğini adım adım anlatıyoruz.</p>

<h2>1. Ölçü: Ocak Uzunluğu ve Taşma Payı</h2>
<p>Davlumbaz seçiminde ilk ve en sık yapılan hata, davlumbazı ocakla aynı boyda ya da ondan kısa almaktır. Duman ve sıcak hava mangalın üstünden dimdik yükselmez; ustanın hareketi, salondan gelen hava akımı ve kapı açılıp kapanması dumanı yanlara iter. Bu yüzden davlumbazın ocağın her yanından bir miktar <strong>taşması</strong> gerekir.</p>
<ul>
  <li><strong>Uzunluk:</strong> Davlumbaz, mangalın iki ucundan da taşmalıdır. Taşma ne kadar cömertse, yana kaçan duman o kadar azalır.</li>
  <li><strong>Derinlik:</strong> Ustanın durduğu ön kenarı da kapsamalıdır. Ön kenar kısa kalırsa duman tam ustanın yüzüne gelir.</li>
  <li><strong>Yükseklik:</strong> Davlumbaz çok yüksekte kalırsa duman dağılır; çok alçakta olursa usta çalışamaz ve ısıdan bunalır. Doğru yükseklik mangalın tipine ve tavan durumuna göre yerinde belirlenir.</li>
</ul>
<p>Bu ölçüleri katalogdan değil, mutfağın kendisinden almak gerekir. Bu yüzden keşifte mangalın, pide fırınının ve varsa döner ocağının ölçüsünü tek tek alıyoruz. Ölçü mantığını daha teknik merak ediyorsanız <a href="/blog/davlumbaz-hesabi/">davlumbaz hesabı</a> yazımıza da bakabilirsiniz.</p>

<h2>2. Duvar Tipi mi, Ada Tipi mi?</h2>
<p>Mutfağın yerleşimi davlumbaz tipini belirler:</p>
<ul>
  <li><strong>Duvar tipi davlumbaz:</strong> Mangal duvara dayalıysa kullanılır. Arka tarafı duvar olduğu için duman tek yönden kaçabilir; aynı performans için genelde daha düşük çekiş yeterli olur. Kebapçıların büyük çoğunluğu bu düzendedir.</li>
  <li><strong>Ada (orta) tipi davlumbaz:</strong> Mangal salonun ya da mutfağın ortasındaysa, müşteri ustayı her yönden görüyorsa kullanılır. Dört tarafı açık olduğu için hava akımlarından daha çok etkilenir; daha geniş taşma payı ve daha güçlü çekiş ister.</li>
</ul>
<p>Açık mutfaklı, "ustayı izleyerek yemek" konseptli ocakbaşılarda ada tipi hem görsel hem işlevsel olarak doğru tercihtir; ama doğru hesaplanmazsa salonun dumanla dolmasına en hızlı yol açan tip de odur.</p>

<h2>3. Malzeme: Paslanmaz Gövde</h2>
<p>Ocakbaşı davlumbazı yağ, ısı ve sık temizlikle yaşar. Bu yüzden gövdenin paslanmaz çelikten olması ve kaynak yerlerinin düzgün işlenmesi önemlidir. Ökmen'in davlumbazlarında gövde AISI 304 paslanmaz çeliktir; aydınlatma ve otomatik söndürme sistemiyle uyumlu yapılabilir. Yoğun kullanılan mangallarda daha kalın sac tercih etmek, davlumbazın yıllar içinde eğilip çarpılmasını önler.</p>

<h2>4. Yağ Tutucu Filtre</h2>
<p>Kebap dumanı yalnızca duman değildir; içinde buharlaşmış yağ vardır. Bu yağ filtrede tutulmazsa kanalın iç yüzeyine yapışır, zamanla kalınlaşır ve hem çekişi düşürür hem de yangın riskini artırır. Bu nedenle ocakbaşı davlumbazında <strong>yağ tutucu kasetli filtre</strong> şarttır.</p>
<ul>
  <li>Kasetler sökülüp yıkanabilir olmalı, ustanın elinin ulaşacağı yükseklikte durmalıdır.</li>
  <li>Filtrelerin altında toplanan yağ için bir oluk veya toplama kabı bulunmalıdır.</li>
  <li>Koku şikâyeti olan, binanın içinde ya da komşulara yakın işletmelerde ek olarak <a href="/urunler/elektrostatik-filtre/">elektrostatik filtre</a> düşünülebilir.</li>
</ul>
<p>Filtrelerin ne sıklıkla temizlenmesi gerektiğini <a href="/blog/davlumbaz-filtresi-temizligi/">davlumbaz filtresi bakımı</a> yazımızda ayrıca anlattık.</p>

<h2>5. Fan Çekişi: Ne Az Ne Çok</h2>
<p>Davlumbazın duman toplayıp toplamayacağını büyük ölçüde fan belirler. Burada iki mantık vardır:</p>
<ul>
  <li><strong>Debi:</strong> Fanın saatte ne kadar havayı dışarı atabildiğidir. Mangalın büyüklüğü, davlumbazın açık kenar sayısı ve mutfağın yoğunluğu arttıkça gereken debi de artar.</li>
  <li><strong>Basınç:</strong> Havanın kanal, dirsek ve filtrelerden geçerken karşılaştığı dirençtir. Kanal uzadıkça, dirsek sayısı arttıkça fanın "nefesi" o kadar zorlanır.</li>
</ul>
<p>Sadece "büyük motor takalım" demek çözüm değildir. Gereğinden güçlü fan gürültü yapar, gereksiz elektrik harcar ve mutfaktaki havayı fazla emerek kapılarda ıslık, ocakta alev yönünde bozulma gibi sorunlar çıkarır. Gereğinden zayıf fan ise duman toplamaz. Doğru fan; mangal, davlumbaz ve kanal birlikte hesaplanarak seçilir. Yüksek dirençli hatlarda genellikle <a href="/urunler/salyangoz-fan/">salyangoz fan</a>, sesin önemli olduğu yerlerde <a href="/urunler/hucreli-aspirator/">hücreli aspiratör</a> tercih edilir.</p>

<h2>6. Kanal Güzergâhı ve Baca Çıkışı</h2>
<p>Davlumbaz ne kadar iyi olursa olsun, dumanı dışarı taşıyan kanal kötü tasarlanmışsa sistem çalışmaz. Kanal mümkün olduğunca kısa ve düz olmalı, dirsek sayısı az tutulmalıdır. Bağlantı yerleri sızdırmaz olmalı; aksi halde duman ve yağ kanaldan tavana, tavan arasından salona sızar.</p>
<p>Baca çıkışının yeri de önemlidir. Çıkış komşu pencerelerine, binanın hava alış noktalarına ya da teras oturma alanlarına yakın olursa koku şikâyeti kaçınılmaz olur. Yüksek sıcaklık ve yağ nedeniyle bu hatlarda <a href="/urunler/celik-baca-sistemleri/">çelik baca</a> ve doğru izolasyon kullanmak gerekir.</p>

<h2>7. Taze Hava Dengesi</h2>
<p>Davlumbaz mutfaktan hava çeker; çekilen havanın yerine bir yerden yenisinin gelmesi gerekir. Taze hava girişi planlanmamışsa:</p>
<ul>
  <li>Kapılar zor açılır, kapı aralıklarından ıslık sesi gelir,</li>
  <li>Fan gücüne rağmen davlumbaz duman toplamaz,</li>
  <li>Salondan mutfağa sıcak ve kokulu hava çekilir, salon da ısınır.</li>
</ul>
<p>Bu yüzden iyi bir ocakbaşı projesinde egzozun yanında kontrollü bir <strong>temiz hava girişi</strong> de bulunur. Diyarbakır'ın yaz aylarında 40°C'yi aşan sıcaklıklarında bu denge, ustanın ocak başında dayanabilmesi için hayati önemdedir.</p>

<h2>Sık Yapılan Hatalar</h2>
<ol>
  <li><strong>Davlumbazı ocakla aynı boyda almak:</strong> Taşma payı olmayan davlumbaz yana kaçan dumanı yakalayamaz.</li>
  <li><strong>Filtresiz ya da düz ızgara filtre kullanmak:</strong> Yağ kanala geçer, kanal kirlenir, yangın riski artar.</li>
  <li><strong>Uzun ve dolambaçlı kanal:</strong> Her ek dirsek fanın gücünü yer.</li>
  <li><strong>Taze havayı unutmak:</strong> En güçlü fan bile havası olmayan mutfaktan duman çekemez.</li>
  <li><strong>Bakımı ertelemek:</strong> İlk gün iyi çalışan sistem, filtreleri temizlenmezse birkaç ay içinde performansını kaybeder.</li>
</ol>

<h2>Sonuç</h2>
<p>Ocakbaşı davlumbazı; ölçü, tip, filtre, fan, kanal ve taze hava birlikte düşünüldüğünde işe yarar. Bunlardan biri eksik kalırsa duman, ısı ve koku mutfakta kalır. Ökmen Havalandırma olarak 15 yılı aşkın tecrübemizle Diyarbakır, Şanlıurfa, Batman, Mardin, Gaziantep ve Elazığ'da işletmelere ücretsiz keşif yapıyor, ölçü alıp mutfağınıza özel sistemi planlıyoruz. Detaylar için <a href="/ocakbasi-davlumbaz/">ocakbaşı ve restoran davlumbazı</a> sayfamıza göz atabilir ya da 0530 900 93 44 numarasından bize ulaşabilirsiniz.</p>
`,
    faq: [
      {
        q: 'Ocakbaşı davlumbazı ocaktan ne kadar büyük olmalı?',
        a: 'Davlumbaz mangalın iki ucundan ve ustanın durduğu ön kenardan taşmalıdır. Kesin ölçü mangalın tipine, davlumbazın duvar ya da ada tipi olmasına ve tavan yüksekliğine göre keşifte belirlenir.',
      },
      {
        q: 'Ada tipi mi duvar tipi mi davlumbaz almalıyım?',
        a: 'Mangal duvara dayalıysa duvar tipi, salonun ortasında ve her yönden açıksa ada tipi kullanılır. Ada tipi daha geniş taşma payı ve daha güçlü çekiş ister.',
      },
      {
        q: 'Kebap mutfağında yağ tutucu filtre şart mı?',
        a: 'Evet. Kebap dumanındaki yağ filtrede tutulmazsa kanala yapışır, çekişi düşürür ve yangın riskini artırır. Sökülüp yıkanabilen kasetli yağ tutucu filtre kullanılmalıdır.',
      },
      {
        q: 'Davlumbazın fiyatı neye göre değişir?',
        a: 'Ocak uzunluğu, davlumbaz tipi, kanal mesafesi, fan kapasitesi, malzeme kalınlığı ve filtre tipine göre değişir. Net fiyat keşif ve ölçüden sonra verilir; keşif ücretsizdir.',
      },
      {
        q: 'Diyarbakır dışına da keşfe geliyor musunuz?',
        a: 'Evet. Diyarbakır merkezli ekibimiz Şanlıurfa, Batman, Mardin, Gaziantep ve Elazığ’a da keşif, montaj ve servis hizmeti veriyor.',
      },
    ],
  },
  {
    slug: 'restoran-mutfaginda-duman-ve-koku',
    title: 'Restoran Mutfağında Duman ve Koku Neden Olur? 7 Sebep ve Çözümü',
    excerpt:
      'Davlumbaz olduğu halde mutfak neden dumanla doluyor, koku neden salona yayılıyor? Restoran mutfaklarında en sık karşılaştığımız 7 sebep ve her birinin çözümü.',
    image: '/products/elektrostatik-filtre.webp',
    imageAlt: 'Restoran mutfağı egzoz sisteminde kullanılan elektrostatik filtre',
    date: '3 Ekim 2026',
    isoDate: '2026-10-03',
    category: 'Restoran',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '7 dk',
    body: `
<p>"Davlumbazımız var ama mutfak yine dumanla doluyor." Restoran sahiplerinden en sık duyduğumuz cümle bu. Duman ve koku sadece bir rahatsızlık değildir: ustanın sağlığını bozar, servis hızını düşürür, salona yayılan koku müşterinin kıyafetine siner ve komşulardan şikâyet gelir. Çoğu zaman sorun tek bir parçada değil, sistemin bir halkasındadır. Aşağıda Diyarbakır ve çevresindeki restoran, kebapçı ve kafe mutfaklarında en sık karşılaştığımız yedi sebebi ve çözümlerini sıraladık.</p>

<h2>1. Fan Yetersiz ya da Yanlış Seçilmiş</h2>
<p>Davlumbazın duman toplayabilmesi için fanın yeterli havayı, yeterli basınçla çekmesi gerekir. Mutfak büyüdüğü, mangal eklendiği ya da kanal uzadığı halde fan değişmediyse sistem yetersiz kalır. Bazen de tersi olur: debisi kâğıt üstünde yeterli görünen bir fan, uzun ve dirsekli bir kanala bağlandığında beklenen havayı çekemez.</p>
<p><strong>Çözüm:</strong> Fan; mangal, davlumbaz ve kanal birlikte değerlendirilerek seçilmelidir. Dirençli hatlarda <a href="/urunler/salyangoz-fan/">salyangoz fan</a>, sessiz çalışması gereken yerlerde <a href="/urunler/hucreli-aspirator/">hücreli aspiratör</a> doğru seçenek olabilir. Mevcut fanın gücü, devri ve bağlı olduğu hat keşifte kontrol edilmelidir.</p>

<h2>2. Davlumbaz Kısa ya da Yanlış Yerde</h2>
<p>Davlumbaz ocaktan kısa kalırsa yanlardan ve önden kaçan duman doğrudan mutfağa yayılır. Davlumbaz çok yüksekte asılıysa duman ona ulaşmadan dağılır. Sonradan eklenen bir fritöz, ızgara ya da pide fırını davlumbazın dışında kalmışsa sorun yine aynıdır.</p>
<p><strong>Çözüm:</strong> Davlumbaz, altındaki tüm pişirme ekipmanlarından her yönde taşmalı ve doğru yükseklikte olmalıdır. Ocakbaşı mutfakları için ölçü mantığını <a href="/blog/ocakbasi-davlumbazi-nasil-secilir/">ocakbaşı davlumbazı seçim rehberimizde</a> anlattık.</p>

<h2>3. Filtreler Kirli</h2>
<p>Yağ tutucu filtreler zamanla yağla dolar. Dolan filtre havanın geçişini zorlaştırır; fan aynı gücü harcar ama çok daha az hava çeker. Sonuç: dün iyi çalışan davlumbaz bugün duman toplamaz. Üstelik filtreden geçemeyen yağ damlar, kanala geçen yağ birikir.</p>
<p><strong>Çözüm:</strong> Filtreler kullanım yoğunluğuna göre düzenli olarak sökülüp temizlenmelidir. Ne sıklıkla temizleneceğini <a href="/blog/davlumbaz-filtresi-temizligi/">filtre bakımı yazımızda</a> ayrıntılı anlattık. Yıpranmış, eğilmiş filtreler değiştirilmelidir; uygun modeller için <a href="/urunler/filtreler/">filtreler</a> sayfamıza bakabilirsiniz.</p>

<h2>4. Kanalda Kaçak, Fazla Dirsek ya da Daralma</h2>
<p>Davlumbazdan çıkan duman, kanalda bir sızıntı bulursa oradan geri döner. Tavan arası, asma tavan ya da salonun üstünden geçen kanaldaki küçük bir açıklık bile kokunun salona yayılmasına yeter. Gereğinden fazla dirsek ya da sonradan yapılan bir daralma ise havayı yavaşlatır ve fanın gücünü boşa harcar.</p>
<p><strong>Çözüm:</strong> Kanal mümkün olduğunca kısa ve düz olmalı, birleşim yerleri sızdırmaz yapılmalıdır. Eski ve sızdıran hatlar onarılmalı ya da yenilenmelidir. Doğru çapta ve sağlam bağlantılı <a href="/urunler/hava-kanallari/">hava kanalları</a>, sistemin sessiz ve verimli çalışmasının temelidir.</p>

<h2>5. Mutfağa Taze Hava Girmiyor</h2>
<p>Bu, gözden en çok kaçan sebeptir. Davlumbaz mutfaktan hava çeker; ama çekilen havanın yerine yenisi gelmezse mutfak "nefessiz" kalır. Belirtileri kolay tanınır: kapılar zor açılır, kapı aralıklarından ıslık gelir, fan çalıştığı halde duman yukarı gitmez, salondaki sıcak ve kokulu hava mutfağa çekilir.</p>
<p><strong>Çözüm:</strong> Egzoz ile birlikte kontrollü bir temiz hava girişi planlanmalıdır. Taze hava doğru yerden ve doğru miktarda verildiğinde hem duman davlumbaza yönelir hem de ustanın çalıştığı alan serinler. Bu özellikle yazları 40°C'yi aşan Güneydoğu mutfaklarında büyük fark yaratır.</p>

<h2>6. Baca Çıkışı Yanlış Yerde</h2>
<p>Duman mutfaktan çıksa bile baca çıkışı yanlış yerdeyse koku geri gelir. Çıkış, binanın kendi pencerelerine, havalandırma girişlerine ya da komşu binalara yakınsa ve rüzgâr da o yöne esiyorsa, dışarı atılan duman kısa yoldan içeri döner. Bu durum komşu şikâyetlerinin de en büyük sebebidir.</p>
<p><strong>Çözüm:</strong> Baca çıkışı yeri, yüksekliği ve yönü projede belirlenmelidir. Yüksek ısı ve yağ taşıyan hatlarda <a href="/urunler/celik-baca-sistemleri/">çelik baca sistemleri</a> kullanmak hem güvenlik hem dayanıklılık için doğru tercihtir. Koku hassasiyeti yüksek yerlerde çıkıştan önce <a href="/urunler/elektrostatik-filtre/">elektrostatik filtre</a> ile yağ ve koku partikülleri tutulabilir.</p>

<h2>7. Bakım Yapılmıyor</h2>
<p>İyi kurulmuş bir sistem bile bakımsız kalırsa zamanla performansını kaybeder. Fan kayışları gevşer, rulmanlar aşınır, motor ısınır, kanal içinde yağ birikir. Çoğu işletme sorun büyüyene kadar fark etmez; fark ettiğinde de genellikle en yoğun servis saatidir.</p>
<p><strong>Çözüm:</strong> Filtre temizliği, fan kontrolü ve kanal temizliği düzenli bir takvime bağlanmalıdır. Bir servis anlaşmasıyla bu işler aksamadan yürür ve arıza çıkmadan önce yakalanır.</p>

<h2>Sorun Neden Yazın Daha Çok Hissedilir?</h2>
<p>Güneydoğu Anadolu'da yaz sıcaklıkları 40°C'yi rahatlıkla aşar. Dışarısı bu kadar sıcakken mutfağa giren hava da sıcaktır; mangalın ve fırının ürettiği ısı buna eklenince ocak başı dayanılmaz hale gelir. Aynı dönemde salonda klimalar tam güç çalışır, kapılar daha sık açılıp kapanır ve hava akımları değişir. Kışın idare eden bir sistemin yazın yetersiz kalmasının sebebi budur. Davlumbaz ve fan kapasitesi, taze hava girişi ve mutfağın soğutulması bu en zor dönem düşünülerek planlanmalıdır. Sistemi yaz gelmeden kontrol ettirmek, en yoğun sezonda arıza ve şikâyet riskini azaltır.</p>

<h2>Sorunu Nasıl Tespit Ederiz?</h2>
<p>Yukarıdaki sebeplerin birkaçı genellikle aynı anda vardır. Bu yüzden tek bir parçayı değiştirmek yerine sistemin tamamına bakmak gerekir. Keşifte şunları kontrol ediyoruz:</p>
<ul>
  <li>Davlumbazın ölçüsü, yüksekliği ve altındaki ekipmanlarla uyumu,</li>
  <li>Filtrelerin tipi ve durumu,</li>
  <li>Fanın tipi, gücü ve gerçek çekişi,</li>
  <li>Kanal güzergâhı, sızıntılar ve dirsekler,</li>
  <li>Taze hava girişi olup olmadığı,</li>
  <li>Baca çıkışının yeri ve çevresi.</li>
</ul>
<p>Bu kontrolün sonunda sorunun nerede olduğunu ve çözmek için neyin yeterli olduğunu net olarak söylüyoruz. Bazen bir filtre değişimi ve taze hava girişi yeterlidir; bazen de davlumbaz ve fanın yeniden planlanması gerekir.</p>

<h2>Sonuç</h2>
<p>Mutfaktaki duman ve koku, çoğu zaman tek bir parçanın değil, sistemin dengesizliğinin sonucudur. Doğru fan, doğru boyutta davlumbaz, temiz filtre, sızdırmaz kanal, taze hava ve doğru baca çıkışı bir araya geldiğinde mutfak gerçekten "nefes alır". Ökmen Havalandırma olarak Diyarbakır merkezli ekibimizle bölgedeki restoran ve kafelere ücretsiz keşif yapıyoruz. Restoranlara yönelik çözümlerimizi <a href="/isletmeler/restoran-cafe/">restoran ve kafe havalandırması</a> ve <a href="/ocakbasi-davlumbaz/">ocakbaşı davlumbazı</a> sayfalarımızda bulabilir, 0530 900 93 44 numarasından bize ulaşabilirsiniz.</p>
`,
    faq: [
      {
        q: 'Davlumbaz olduğu halde mutfak neden dumanla doluyor?',
        a: 'En sık sebepler yetersiz fan, kısa ya da yüksekte kalan davlumbaz, kirli filtre ve mutfağa taze hava girmemesidir. Genellikle birkaç sebep aynı anda vardır; sistemin tamamına bakmak gerekir.',
      },
      {
        q: 'Mutfak kokusu salona neden yayılıyor?',
        a: 'Kanaldaki sızıntılar, taze hava eksikliği nedeniyle salondan mutfağa hava çekilmesi ve yanlış yerdeki baca çıkışı kokunun salona dönmesine yol açar.',
      },
      {
        q: 'Sadece fanı değiştirmek sorunu çözer mi?',
        a: 'Her zaman değil. Davlumbaz kısa, filtre kirli ya da taze hava girişi yoksa daha güçlü fan gürültü ve elektrik tüketimini artırır ama dumanı yine toplamayabilir.',
      },
      {
        q: 'Komşulardan koku şikâyeti geliyor, ne yapmalıyım?',
        a: 'Baca çıkışının yeri ve yüksekliği kontrol edilmeli, kanaldaki sızıntılar giderilmelidir. Gerekirse çıkıştan önce elektrostatik filtre ile yağ ve koku partikülleri tutulabilir.',
      },
      {
        q: 'Keşif için ücret alıyor musunuz?',
        a: 'Hayır, keşif ücretsizdir. Ekibimiz yerinde sistemi kontrol eder, sorunun kaynağını belirler ve çözüm önerisini teklifle birlikte sunar.',
      },
    ],
  },
  {
    slug: 'davlumbaz-filtresi-temizligi',
    title: 'Davlumbaz Filtresi Ne Sıklıkla Temizlenmeli? Bakım ve Yangın Güvenliği',
    excerpt:
      'Davlumbaz filtresi ve egzoz kanalı ne sıklıkla temizlenmeli? Yağ birikiminin yangın riskine etkisi, mutfak yoğunluğuna göre bakım takvimi ve servis anlaşmasının faydaları.',
    image: '/products/filtreler.webp',
    imageAlt: 'Davlumbaz için paslanmaz yağ tutucu kasetli filtreler',
    date: '2 Ekim 2026',
    isoDate: '2026-10-02',
    category: 'Güvenlik',
    author: 'Ökmen Mühendislik Ekibi',
    readingTime: '7 dk',
    body: `
<p>Davlumbaz kurulduğu gün iyi çalışır. Asıl soru, altı ay ya da bir yıl sonra da aynı performansı gösterip göstermediğidir. Bunu belirleyen şey bakımdır; bakımın en önemli parçası da yağ tutucu filtrelerin ve egzoz kanalının temizliğidir. Bu yazıda filtrelerin ne sıklıkla temizlenmesi gerektiğini, yağ birikiminin neden bir yangın riski olduğunu ve bakımı aksatmadan yürütmenin yollarını anlatıyoruz.</p>

<h2>Filtre Ne İşe Yarar?</h2>
<p>Pişirme sırasında yükselen dumanın içinde buharlaşmış yağ bulunur. Davlumbazdaki <strong>yağ tutucu kasetli filtreler</strong>, bu havayı labirent gibi kanallardan geçirerek yağ damlacıklarının metal yüzeye çarpıp tutunmasını sağlar. Yağ filtrede kalır, alttaki oluğa ya da toplama kabına akar. Filtre görevini yaptığı sürece kanal ve fan temiz kalır.</p>
<p>Filtre dolduğunda ise iki şey olur: Hava geçişi zorlaşır, davlumbaz duman toplayamaz hale gelir. Filtreden geçemeyen ya da filtreyi aşan yağ ise kanalın iç yüzeyine yapışmaya başlar.</p>

<h2>Yağ Birikimi Neden Yangın Riski?</h2>
<p>Kanalın iç yüzeyinde biriken yağ tabakası zamanla kalınlaşır ve kurur. Ocaktan sıçrayan bir kıvılcım, mangaldan yükselen bir alev ya da aşırı ısınan bir yüzey bu tabakayı tutuşturabilir. Kanal içindeki yangın, havanın sürekli çekildiği ve tavan arasından geçen kapalı bir hatta ilerlediği için fark edilmesi ve söndürülmesi zordur; hızla binanın başka bölümlerine yayılabilir.</p>
<p>Bu yüzden filtre ve kanal temizliği sadece "davlumbaz iyi çeksin" diye değil, <strong>işletmenin güvenliği için</strong> yapılır. Kanal ve baca güvenliği hakkında daha fazlası için <a href="/blog/baca-yangin-guvenligi/">baca ve yangın güvenliği</a> yazımıza bakabilirsiniz.</p>

<h2>Filtre Ne Sıklıkla Temizlenmeli?</h2>
<p>Tek bir doğru cevap yoktur; sıklığı mutfağın ne pişirdiği ve ne kadar yoğun çalıştığı belirler. Genel bir yol gösterici olarak:</p>
<ul>
  <li><strong>Çok yoğun ocakbaşı, kebap ve ızgara mutfakları:</strong> Kömür ateşi ve yağlı etle uzun saatler çalışan mutfaklarda filtreler çok hızlı dolar. Bu mutfaklarda filtreleri <strong>her gün ya da birkaç günde bir</strong> yıkamak alışkanlık haline getirilmelidir.</li>
  <li><strong>Orta yoğunluktaki restoranlar:</strong> Günlük servisi olan ama mangal ağırlıklı olmayan mutfaklarda <strong>haftada bir</strong> temizlik çoğu zaman yeterlidir.</li>
  <li><strong>Hafif kullanım (kafe, az pişirme yapan mutfaklar):</strong> Birkaç haftada bir kontrol edip gerektiğinde temizlemek yeterli olabilir.</li>
</ul>
<p>En güvenilir ölçü gözdür: Filtrenin yüzeyinde yağ parlaması, damlama ya da renk koyulaşması görüyorsanız temizlik zamanı gelmiştir. Davlumbaz eskisi kadar çekmiyorsa ilk bakılacak yer de filtrelerdir.</p>
<p><strong>Önemli not:</strong> İşletmenizin bulunduğu yerin itfaiye ve belediye kuralları, mutfak egzoz sistemlerinin temizlik ve kontrol sıklığı için ayrıca şartlar koyabilir. Yerel itfaiye ve ilgili yönetmelik gerekliliklerini mutlaka kontrol edin; yukarıdaki aralıklar genel bir öneridir, yasal bir takvim değildir.</p>

<h2>Filtre Nasıl Temizlenir?</h2>
<ol>
  <li>Ocak kapalıyken ve filtreler soğuduktan sonra kasetleri sökün.</li>
  <li>Sıcak su ve yağ çözücü deterjanla doldurulmuş bir kapta bir süre bekletin.</li>
  <li>Yumuşak bir fırçayla, özellikle kanal aralıklarındaki yağı temizleyin. Filtreyi ezecek ya da bükecek sert aletlerden kaçının.</li>
  <li>Bol suyla durulayın, tamamen kuruduktan sonra yerine takın.</li>
  <li>Bu sırada yağ toplama oluğunu ya da kabını da boşaltıp temizleyin.</li>
</ol>
<p>Ezilmiş, eğilmiş ya da delinmiş filtreler yağı tutamaz; bunlar temizlenmek yerine değiştirilmelidir. Uygun yedek filtreler için <a href="/urunler/filtreler/">filtreler</a> sayfamıza bakabilirsiniz. Koku ve ince partikül sorunu olan işletmelerde <a href="/urunler/elektrostatik-filtre/">elektrostatik filtrelerin</a> de kendi bakım takvimi vardır.</p>

<h2>Kanal ve Fan Temizliği</h2>
<p>Filtreler ne kadar iyi bakılırsa bakılsın, bir miktar yağ zamanla kanala ve fana geçer. Bu yüzden filtre temizliğine ek olarak:</p>
<ul>
  <li><strong>Egzoz kanalı</strong> belirli aralıklarla içeriden kontrol edilmeli, yağ tabakası oluşmuşsa profesyonelce temizlenmelidir. Yoğun mangal mutfaklarında bu aralık daha kısa tutulmalıdır.</li>
  <li><strong>Fan</strong> kanatları, gövdesi ve yağ tahliye noktası temizlenmeli; kayış, rulman ve motor kontrol edilmelidir.</li>
  <li><strong>Baca çıkışı</strong> çevresinde yağ birikimi ve tıkanma olup olmadığına bakılmalıdır.</li>
</ul>
<p>Kanal temizliği için kanalda servis kapakları bulunması işi kolaylaştırır. Yeni kurulan sistemlerde bu kapakların baştan planlanması, ileride temizlik maliyetini ciddi şekilde düşürür. Kanal hatları hakkında bilgi için <a href="/urunler/hava-kanallari/">hava kanalları</a> sayfamıza bakabilirsiniz.</p>

<h2>Pratik Bakım Kontrol Listesi</h2>
<p>Mutfak ekibinizin kolayca takip edebileceği basit bir liste, bakımın unutulmasını önler. Yoğun bir ocakbaşı mutfağı için örnek bir düzen:</p>
<ul>
  <li><strong>Her gün (servis sonunda):</strong> Filtrelerin yüzeyine bakın, yağlanmışsa yıkayın. Yağ toplama oluğunu ya da kabını boşaltın. Davlumbazın dış yüzeyini silin.</li>
  <li><strong>Her hafta:</strong> Tüm filtreleri söküp detaylı temizleyin. Filtre yuvalarını ve davlumbazın iç yüzeyini silin. Fanın çalışırken alışılmadık bir ses ya da titreşim yapıp yapmadığını dinleyin.</li>
  <li><strong>Her ay:</strong> Filtrelerde ezilme veya delinme olup olmadığını kontrol edin. Davlumbazın çekişini gözle değerlendirin; duman eskisinden daha fazla yana kaçıyorsa not alın.</li>
  <li><strong>Belirli aralıklarla (servis ekibiyle):</strong> Kanal içi kontrol ve temizlik, fan ve motor bakımı, baca çıkışının kontrolü.</li>
</ul>
<p>Bu listeyi mutfakta görünür bir yere asmak ve her temizliği tarih ve imzayla işaretlemek, hem ekip içinde sorumluluğu netleştirir hem de olası bir denetimde düzenli bakım yaptığınızı gösterir.</p>

<h2>Bakımı Aksatmamanın Yolu: Servis Anlaşması</h2>
<p>Yoğun bir mutfakta bakım işleri çoğu zaman "yarın yaparız" diye ertelenir. Bir servis anlaşması bu riski ortadan kaldırır:</p>
<ul>
  <li>Filtre, fan ve kanal kontrolü belirli bir takvimle yapılır,</li>
  <li>Aşınan parçalar arıza çıkmadan önce fark edilir,</li>
  <li>Servis saatleri işletmenin çalışma düzenine göre planlanır,</li>
  <li>Her bakımın kaydı tutulur; denetimlerde ne zaman ne yapıldığı bellidir.</li>
</ul>

<h2>Sonuç</h2>
<p>Davlumbaz filtresi ve egzoz kanalı temiz tutulduğunda sistem ilk günkü gibi çeker, mutfak ferah kalır ve yangın riski azalır. Yoğun ocakbaşı mutfaklarında filtre temizliği günlük bir alışkanlık, kanal ve fan bakımı ise düzenli bir takvim olmalıdır. Ökmen Havalandırma olarak Diyarbakır, Şanlıurfa, Batman, Mardin, Gaziantep ve Elazığ'da davlumbaz sistemlerinin kurulumu kadar bakım ve servisini de yapıyoruz. Ürünlerimiz CE belgelidir; üretim ve montaj 2 yıl garantilidir. <a href="/ocakbasi-davlumbaz/">Ocakbaşı ve restoran davlumbazı</a> sayfamızdan detaylara ulaşabilir, bakım ve ücretsiz keşif için 0530 900 93 44 numarasından bizi arayabilirsiniz.</p>
`,
    faq: [
      {
        q: 'Ocakbaşı davlumbazının filtresi ne sıklıkla temizlenmeli?',
        a: 'Kömür ateşi ve yağlı etle uzun saatler çalışan yoğun mutfaklarda filtreler her gün ya da birkaç günde bir yıkanmalıdır. Bu genel bir öneridir; yerel itfaiye ve yönetmelik gerekliliklerini ayrıca kontrol edin.',
      },
      {
        q: 'Filtre temizlenmezse ne olur?',
        a: 'Dolan filtre hava geçişini zorlaştırır ve davlumbaz duman toplayamaz. Filtreden geçen yağ kanala yapışır; bu birikim zamanla tutuşabilir ve kanal yangınına yol açabilir.',
      },
      {
        q: 'Filtreleri bulaşık makinesinde yıkayabilir miyim?',
        a: 'Filtrenin üreticisi uygun olduğunu belirtiyorsa yıkanabilir. Genel yöntem sıcak su ve yağ çözücüyle bekletip yumuşak fırçayla temizlemektir; ezilmiş ya da eğilmiş filtreler değiştirilmelidir.',
      },
      {
        q: 'Egzoz kanalı da temizlenmeli mi?',
        a: 'Evet. Filtreler iyi bakılsa da bir miktar yağ kanala ve fana geçer. Kanal belirli aralıklarla kontrol edilmeli, yağ tabakası oluşmuşsa profesyonelce temizlenmelidir.',
      },
      {
        q: 'Bakım ve servis hizmeti veriyor musunuz?',
        a: 'Evet. Diyarbakır merkezli ekibimiz Şanlıurfa, Batman, Mardin, Gaziantep ve Elazığ’da filtre, fan ve kanal bakımı ile arıza servisi veriyor.',
      },
    ],
  },
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
