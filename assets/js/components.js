/**
 * NEFES AL — Ortak Bileşenler
 * ============================
 * Nav ve footer tüm sayfalarda buradan yüklenir.
 * Tasarım değişince sadece bu dosyayı güncelle.
 *
 * Kullanım: Her HTML sayfasına şunu ekle:
 *   <script src="/assets/js/components.js"></script>
 *   (ya da ../../assets/js/components.js alt klasörler için)
 */

// ── Aktif sayfayı bul ──────────────────────────────
// URL'e bakarak hangi kategoride olduğumuzu anlarız
function aktifSayfa() {
  const url = window.location.pathname;
  if (url.includes('/beden'))   return 'beden';
  if (url.includes('/zihin'))   return 'zihin';
  if (url.includes('/yol'))     return 'yol';
  if (url.includes('/hakkimda')) return 'hakkimda';
  return 'ana';
}

// ── Kök yolu hesapla ─────────────────────────────
// GitHub Pages'de URL şöyle görünür:
// /Nefesal/                        → kök
// /Nefesal/beden/                  → 1 seviye
// /Nefesal/beden/yazilar/yazi.html → 2 seviye
function kokYolu() {
  const url = window.location.pathname;
  // Slash sayısına göre değil, bilinen path segmentlerine göre belirle
  if (url.match(/\/(beden|zihin|yol|hakkimda)\/yazilar\//)) return '../../';
  if (url.match(/\/(beden|zihin|yol|hakkimda)\//)) return '../';
  if (url.match(/\/(beden|zihin|yol|hakkimda)$/)) return '../';
  return './';
}

// ── Nav HTML'ini üret ────────────────────────────
function navHTML() {
  const kok  = kokYolu();
  const aktif = aktifSayfa();

  const linkler = [
    { id: 'beden',    label: '💪 Beden',   href: `${kok}beden/`    },
    { id: 'zihin',    label: '🧠 Zihin',   href: `${kok}zihin/`    },
    { id: 'yol',      label: '🧭 Yol',     href: `${kok}yol/`      },
    { id: 'hakkimda', label: 'Hakkımda',   href: `${kok}hakkimda/` },
  ];

  const linkHTML = linkler.map(l => `
    <li>
      <a href="${l.href}" ${aktif === l.id ? 'style="color:var(--toprak);font-weight:500;"' : ''}>
        ${l.label}
      </a>
    </li>
  `).join('');

  return `
    <header class="site-header">
      <nav class="nav container">
        <a href="${kok}" class="logo">🌿 Nefes Al</a>
        <button class="nav-toggle" id="navToggle" aria-label="Menüyü aç">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${linkHTML}
        </ul>
      </nav>
    </header>
  `;
}

// ── Footer HTML'ini üret ─────────────────────────
function footerHTML() {
  const kok = kokYolu();
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p class="footer-logo">🌿 Nefes Al</p>
        <p class="footer-slogan">Her gün biraz daha iyi. Her yerde biraz daha özgür.</p>
        <nav class="footer-nav">
          <a href="${kok}beden/">Beden</a>
          <a href="${kok}zihin/">Zihin</a>
          <a href="${kok}yol/">Yol</a>
          <a href="${kok}hakkimda/">Hakkımda</a>
        </nav>
        <p class="footer-copy">© 2025 Nefes Al. Sevgiyle yazıldı.</p>
      </div>
    </footer>
  `;
}

// ── Mobil menü toggle ────────────────────────────
function mobilMenu() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

// ── Sayfaya yerleştir ────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // Nav: <div id="nav-placeholder"> olan yere ekle
  const navSlot = document.getElementById('nav-placeholder');
  if (navSlot) navSlot.outerHTML = navHTML();

  // Footer: <div id="footer-placeholder"> olan yere ekle
  const footerSlot = document.getElementById('footer-placeholder');
  if (footerSlot) footerSlot.outerHTML = footerHTML();

  // Mobil menüyü başlat
  mobilMenu();
});
