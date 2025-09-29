document.addEventListener('DOMContentLoaded', () => {

  // MARK: Theme toggle
  const html = document.documentElement;
  const themeSwitch = document.getElementById('theme-switch');

  let savedTheme = 'light';
  try {
    savedTheme = localStorage.getItem('theme') || 'light';
  } catch (_) {
    // Om localStorage är spärrad (t.ex. i privat läge), ignorera
  }

  html.setAttribute('data-theme', savedTheme);

  if (themeSwitch) {
    themeSwitch.checked = savedTheme === 'dark';
    themeSwitch.addEventListener('change', () => {
      const newTheme = themeSwitch.checked ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (_) {}
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

    document.addEventListener('click', (e) => {
      const clickedOutside = !e.target.closest('.nav') && !e.target.closest('.nav-toggle');
      if (nav.classList.contains('nav-open') && clickedOutside) {
        nav.classList.remove('nav-open');
        navBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // MARK: FAQ accordion
  const faqItems = [...document.querySelectorAll('#faq .faq-item')];

  if (faqItems.length) {
    const closeItem = (item) => {
      item.classList.remove('active');
      const btn = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-answer');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (panel) panel.setAttribute('aria-hidden', 'true');
    };

    const openItem = (item) => {
      item.classList.add('active');
      const btn = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-answer');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      if (panel) panel.setAttribute('aria-hidden', 'false');
    };

    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-answer');
      if (!btn || !panel) return;

      // startläge: stängd
      closeItem(item);

      btn.addEventListener('click', () => {
        const willOpen = !item.classList.contains('active');
        faqItems.forEach(closeItem);
        if (willOpen) openItem(item);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') faqItems.forEach(closeItem);
    });
  }

  // MARK: Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
