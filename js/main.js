// Loads shop settings (name, contact) into header/footer on every page,
// and wires up the mobile nav toggle.
async function loadShop() {
  try {
    const res = await fetch('/data/shop.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('no shop data');
    return await res.json();
  } catch (e) {
    return {
      name: 'M. Babu Dress House',
      tagline: 'পোশাকের বিশ্বস্ত ঠিকানা',
      phone: '',
      whatsapp: '',
      address: ''
    };
  }
}

function applyShopToHeader(shop) {
  document.querySelectorAll('[data-shop-name]').forEach(el => el.textContent = shop.name || 'M. Babu Dress House');
  document.querySelectorAll('[data-shop-tagline]').forEach(el => el.textContent = shop.tagline || '');
  document.querySelectorAll('[data-shop-phone]').forEach(el => {
    if (shop.phone) { el.textContent = shop.phone; el.href = 'tel:' + shop.phone; }
  });
  document.querySelectorAll('[data-shop-whatsapp]').forEach(el => {
    if (shop.whatsapp) el.href = 'https://wa.me/' + shop.whatsapp.replace(/[^0-9]/g, '');
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  document.body.classList.add('loaded');

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const backdrop = document.querySelector('.nav-backdrop');
  function closeNav() {
    nav && nav.classList.remove('open');
    backdrop && backdrop.classList.remove('show');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      backdrop && backdrop.classList.toggle('show');
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeNav);
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', closeNav));

  const shop = await loadShop();
  applyShopToHeader(shop);

  // Scroll-reveal for elements marked .reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
});
