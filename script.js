// ==========================
// Top bar hide / navbar fix
// ==========================
let lastScrollY = window.scrollY;
const topBar = document.querySelector('.top-bar');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (topBar && navbar) {
    if (currentScrollY > lastScrollY) {
      topBar.classList.add('hidden');
      navbar.classList.add('fixed');
    } else {
      topBar.classList.remove('hidden');
      navbar.classList.remove('fixed');
    }
  }
  lastScrollY = currentScrollY;
});

// ==========================
// Mobile menu
// ==========================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu   = document.getElementById('mobile-menu');
const closeBtn     = document.getElementById('close-btn');

if (hamburgerBtn && mobileMenu && closeBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') mobileMenu.classList.remove('open');
  });
}

// ==========================
// FAQ accordion (About page only)
// ==========================
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.faq-item');

  if (items.length > 0) {
    items.forEach((item) => {
      const btn = item.querySelector('.faq-question');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all first
        items.forEach(i => {
          i.classList.remove('open');
          const b = i.querySelector('.faq-question');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        // Open this one
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
});
