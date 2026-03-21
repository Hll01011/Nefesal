/**
 * NEFES AL — Yazı Listesi
 * ========================
 * Yeni yazı eklemek için bu dosyaya bir satır ekle.
 * Index sayfaları buradan otomatik güncellenir.
 *
 * Her yazı şu bilgileri içerir:
 *   baslik  → Yazının başlığı
 *   ozet    → Kısa açıklama (1-2 cümle)
 *   url     → Dosya yolu (assets/js klasöründen değil, site kökünden)
 *   kat     → Kategori: "beden", "zihin" veya "yol"
 *   tarih   → Görünen tarih (örn: "Mart 2025")
 *   sure    → Okuma süresi (örn: "5 dk okuma")
 */

const yazilar = [
{
    baslik: "Sabah yürüyüşü neden her şeyden iyi geliyor?",
    ozet:   "Spor salonuna gitmek zorunda değilsin. 20 dakika yeterli.",
    url:    "beden/yazilar/sabah-yuruyusu.html",
    kat:    "beden",
    tarih:  "Nisan 2025",
    sure:   "4 dk"
  },
  
  // ── BEDEN ──────────────────────────────────────────
  {
    baslik: "Sabah 6'da kalkmayı alışkanlığa dönüştürdüm — işte nasıl",
    ozet:   "3 ay boyunca başarısız oldum. Sonra tek bir şeyi değiştirdim.",
    url:    "beden/yazilar/sabah-rutini.html",
    kat:    "beden",
    tarih:  "Mart 2025",
    sure:   "5 dk"
  },
  {
    baslik: "Şeker bırakmanın 30 günü — neler değişti?",
    ozet:   "Büyük bir fedakarlık bekledim. Aslında ilk haftadan sonra en zor kısım geride kalıyor.",
    url:    "beden/yazilar/seker-birakmanin-30-gunu.html",
    kat:    "beden",
    tarih:  "Ocak 2025",
    sure:   "6 dk"
  },
  {
    baslik: "Günde 5 dakika: stresi sıfırlayan nefes egzersizi",
    ozet:   "Karmaşık meditasyon tekniklerine gerek yok. Bu basit egzersiz gerçekten fark yaratıyor.",
    url:    "beden/yazilar/nefes-egzersizi.html",
    kat:    "beden",
    tarih:  "Aralık 2024",
    sure:   "5 dk"
  },

  // ── ZİHİN ──────────────────────────────────────────
  {
    baslik: "Telefonu bırakamıyorsam ne yapmalıyım?",
    ozet:   "İrade meselesi değil bu. Sistemin tasarım sorunu. Ve çözümü de tasarımda.",
    url:    "zihin/yazilar/telefonu-birakamiyorum.html",
    kat:    "zihin",
    tarih:  "Şubat 2025",
    sure:   "7 dk"
  },
  {
    baslik: "Atomic Habits'ten hayatıma uyguladığım 3 şey",
    ozet:   "Kitabın tamamını uygulamak zorunda değilsin. Bu üç fikir bile yeterince dönüştürücü.",
    url:    "zihin/yazilar/atomic-habits.html",
    kat:    "zihin",
    tarih:  "Ocak 2025",
    sure:   "6 dk"
  },
  {
    baslik: "Yapılacaklar listesi neden işe yaramıyor?",
    ozet:   "Her gün liste yapıyorsun, hiçbir zaman bitmiyor. Sorun listenin kendisinde değil.",
    url:    "zihin/yazilar/yapilacaklar-listesi.html",
    kat:    "zihin",
    tarih:  "Aralık 2024",
    sure:   "5 dk"
  },

  // ── YOL ────────────────────────────────────────────
  {
    baslik: "Mersin'den 3 günlük kaçamak rotası",
    ozet:   "Uzağa gitmenize gerek yok. Yakın çevrede nefes alacak yerler bulmak bir sanattır.",
    url:    "yol/yazilar/mersin-kacamak-rotasi.html",
    kat:    "yol",
    tarih:  "Ocak 2025",
    sure:   "8 dk"
  },
  {
    baslik: "Seyahatte sağlıklı beslenmek mümkün mü?",
    ozet:   "Lokanta yemekleri, düzensiz saatler. Yolda da sağlıklı kalmak için 7 pratik yöntem.",
    url:    "yol/yazilar/seyahatte-beslenme.html",
    kat:    "yol",
    tarih:  "Kasım 2024",
    sure:   "6 dk"
  },
  {
    baslik: "Yalnız seyahat zihnini nasıl değiştirir?",
    ozet:   "Korkutucu görünür. Ama kendi başına bir yolculuk, kendinle yüzleşmenin en güzel yolu.",
    url:    "yol/yazilar/yalniz-seyahat.html",
    kat:    "yol",
    tarih:  "Ekim 2024",
    sure:   "7 dk"
  }

  // ──────────────────────────────────────────────────
  // YENİ YAZI EKLEMEK İÇİN BURAYA KOPYALA-YAPISTIR:
  //
  // {
  //   baslik: "Yazının başlığı",
  //   ozet:   "Kısa açıklama.",
  //   url:    "kategori/yazilar/dosya-adi.html",
  //   kat:    "beden",   // beden | zihin | yol
  //   tarih:  "Nisan 2025",
  //   sure:   "5 dk"
  // },
  //
];
