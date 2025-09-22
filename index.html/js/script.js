// MARK: Theme toggle (light/dark)
const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;

// Load saved theme from localStorage or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Set toggle state based on saved theme
if (themeSwitch) {
  themeSwitch.checked = savedTheme === 'dark';

  themeSwitch.addEventListener('change', () => {
    const newTheme = themeSwitch.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// MARK: Mobile navigation toggle
const navBtn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (navBtn && nav) {
  navBtn.addEventListener('click', () => {
    const isOpen = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('nav-open');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', (e) => {
    const clickedOutside = !e.target.closest('.nav') && !e.target.closest('.nav-toggle');
    if (nav.classList.contains('nav-open') && clickedOutside) {
      nav.classList.remove('nav-open');
      navBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// MARK: FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all others
    faqItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// MARK: Dynamic footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
