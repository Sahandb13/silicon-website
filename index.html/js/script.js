// MARK: Theme toggle
const themeSwitch = document.getElementById('theme-switch');
const rootEl = document.documentElement;

// Använd sparat tema eller systemets preferens
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
rootEl.setAttribute('data-theme', savedTheme);

if (themeSwitch) {
  themeSwitch.checked = savedTheme === 'dark';

  themeSwitch.addEventListener('change', () => {
    const newTheme = themeSwitch.checked ? 'dark' : 'light';
    rootEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// MARK: Mobile navigation
const navBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (navBtn && nav) {
  navBtn.addEventListener('click', () => {
    const isOpen = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('nav-open');
  });

  // Stäng menyn om man klickar utanför
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav, .nav-toggle')) {
      nav.classList.remove('nav-open');
      navBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// MARK: FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Stäng alla
    faqItems.forEach(i => {
      i.classList.remove('active');
      const q = i.querySelector('.faq-question');
      if (q) q.setAttribute('aria-expanded', 'false');
    });

    // Öppna aktuell
    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// MARK: Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
