// ── Custom Cursor ──────────────────────────────
// Div'leri JS ile oluşturuyoruz — her sayfada çalışır
const cur  = document.createElement('div'); cur.className  = 'cur';
const ring = document.createElement('div'); ring.className = 'cur-ring';
document.body.prepend(ring);
document.body.prepend(cur);

let mx = 0, my = 0, rx = 0, ry = 0;

// Fare ekrana girince hemen göster
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.opacity  = '1';
  ring.style.opacity = '1';
}, { once: true });

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

// Cursor animasyonu
(function tick() {
  rx += (mx - rx) * .1;
  ry += (my - ry) * .1;
  cur.style.left  = mx + 'px';
  cur.style.top   = my + 'px';
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(tick);
})();

// Linklerde büyü
document.addEventListener('mouseover', e => {
  if (e.target.closest('a, button')) {
    cur.classList.add('big');
    ring.classList.add('big');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a, button')) {
    cur.classList.remove('big');
    ring.classList.remove('big');
  }
});

// ── Mobil nav ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }

  // ── Scroll reveal ────────────────────────
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .kategori-kart, .yazi-kart, .liste-kart').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    obs.observe(el);
  });

  // ── Smooth scroll ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
