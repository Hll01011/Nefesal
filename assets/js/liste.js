/**
 * NEFES AL — Otomatik Liste Motoru
 * ==================================
 * Bu dosya yazilar.js'deki listeyi okur ve
 * sayfaya HTML kartlar olarak yazar.
 *
 * Nasıl çalışır?
 * 1. Sayfa yüklenince çalışır
 * 2. yazilar dizisini okur
 * 3. Her sayfanın ihtiyacına göre filtreler
 *    (ana sayfa → hepsi, beden sayfası → sadece beden)
 * 4. HTML kartları üretip sayfaya yerleştirir
 */

// ── Yardımcı fonksiyonlar ─────────────────────────

/**
 * Kategoriye göre etiket HTML'i döndürür
 * Örnek: "beden" → <span class="yazi-kat beden-tag">💪 Beden</span>
 */
function katEtiketi(kat) {
  const map = {
    beden: { cls: "beden-tag", etiket: "💪 Beden" },
    zihin: { cls: "zihin-tag", etiket: "🧠 Zihin" },
    yol:   { cls: "yol-tag",   etiket: "🧭 Yol"   }
  };
  const k = map[kat] || map.beden;
  return `<span class="yazi-kat ${k.cls}">${k.etiket}</span>`;
}

/**
 * Bir yazı nesnesinden kart HTML'i üretir
 * featured=true ise tam genişlik öne çıkan kart olur
 */
function kartHTML(yazi, featured = false, kokYolu = "") {
  const tam = kokYolu + yazi.url;
  return `
    <article class="yazi-kart${featured ? " featured" : ""}">
      <div class="yazi-meta">
        ${katEtiketi(yazi.kat)}
        <span class="yazi-tarih">${yazi.tarih}</span>
        <span class="yazi-tarih" style="opacity:.6">· ${yazi.sure}</span>
      </div>
      <h3 class="yazi-baslik">
        <a href="${tam}">${yazi.baslik}</a>
      </h3>
      <p class="yazi-ozet">${yazi.ozet}</p>
      <a href="${tam}" class="yazi-devami">Devamını oku →</a>
    </article>`;
}

/**
 * Bir yazı nesnesinden liste kartı HTML'i üretir
 * (kategori sayfalarında kullanılır)
 */
function listeKartHTML(yazi, kokYolu = "") {
  const tam = kokYolu + yazi.url;
  return `
    <article class="liste-kart">
      <div class="yazi-meta">
        ${katEtiketi(yazi.kat)}
        <span class="yazi-tarih">${yazi.tarih}</span>
      </div>
      <h2 class="yazi-baslik">
        <a href="${tam}">${yazi.baslik}</a>
      </h2>
      <p class="yazi-ozet">${yazi.ozet}</p>
      <a href="${tam}" class="yazi-devami">Devamını oku →</a>
    </article>`;
}

// ── Ana sayfa listesi ─────────────────────────────

/**
 * Ana sayfada kullanılır.
 * id="son-yazilar-grid" olan elementi doldurur.
 * İlk yazı featured (tam genişlik), geri kalanlar normal.
 * Kaç yazı gösterileceği "adet" parametresiyle ayarlanır.
 */
function anaSayfaListesi(adet = 4) {
  const hedef = document.getElementById("son-yazilar-grid");
  if (!hedef) return; // bu sayfa ana sayfa değilse çalışmaz

  // En yeni adet kadar yazıyı al (dizide üstte olan = en yeni)
  const goster = yazilar.slice(0, adet);

  hedef.innerHTML = goster
    .map((yazi, i) => kartHTML(yazi, i === 0, ""))
    .join("");
}

// ── Kategori sayfası listesi ──────────────────────

/**
 * Kategori sayfalarında kullanılır (beden, zihin, yol).
 * id="kategori-liste" olan elementi doldurur.
 * Sayfanın data-kat özelliğine göre filtreler.
 *
 * Kullanım (beden/index.html içinde):
 *   <div id="kategori-liste" data-kat="beden"></div>
 */
function kategoriListesi() {
  const hedef = document.getElementById("kategori-liste");
  if (!hedef) return;

  // Hangi kategori? data-kat="beden" gibi bir özellik okur
  const kat = hedef.getAttribute("data-kat");

  // Sadece o kategorinin yazılarını filtrele
  const filtrelenmis = yazilar.filter(y => y.kat === kat);

  // Kategori sayfaları bir üst klasörde olduğu için
  // URL'leri site köküne göre düzeltmemiz gerekiyor
  // beden/index.html'den "beden/yazilar/..." → "../beden/yazilar/..."
  hedef.innerHTML = filtrelenmis
    .map(yazi => listeKartHTML(yazi, "../"))
    .join("");
}

// ── Sayfa yüklenince çalıştır ─────────────────────

/**
 * document.addEventListener("DOMContentLoaded") =
 * "HTML tamamen yüklenince şunu çalıştır" demek.
 * Script'i sayfanın en altına koysak da bu iyi bir alışkanlık.
 */
document.addEventListener("DOMContentLoaded", function () {
  anaSayfaListesi(4);   // Ana sayfada son 4 yazıyı göster
  kategoriListesi();    // Kategori sayfasında ilgili yazıları göster
});
