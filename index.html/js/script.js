// === Theme toggle (light/dark) ===
const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

if (themeSwitch) {
  themeSwitch.checked = savedTheme === 'dark';

  themeSwitch.addEventListener('change', () => {
    const theme = themeSwitch.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}

// === Mobile navigation toggle ===
const navBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (navBtn && nav) {
  navBtn.addEventListener('click', () => {
    const isOpen = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', !isOpen);
    nav.classList.toggle('nav-open');
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    const clickedOutside = !e.target.closest('.nav') && !e.target.closest('.nav-toggle');
    if (nav.classList.contains('nav-open') && clickedOutside) {
      nav.classList.remove('nav-open');
      navBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// === FAQ accordion ===
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// === Dynamic footer year ===
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
