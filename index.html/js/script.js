// ============================================
// All init after DOM is ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------
  // MARK: Theme toggle (light/dark)
  // ----------------------------
  const html = document.documentElement;
  const themeSwitch = document.getElementById('theme-switch');

  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  if (themeSwitch) {
    themeSwitch.checked = savedTheme === 'dark';
    themeSwitch.addEventListener('change', () => {
      const newTheme = themeSwitch.checked ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ----------------------------
  // MARK: Mobile navigation toggle
  // (safe-guarded; runs only if elements exist)
  // ----------------------------
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

  // ----------------------------
  // MARK: FAQ accordion (image zones)
  // Matches #faq .faq-item/.faq-question/.faq-answer in your HTML
  // ----------------------------
  const faqItems = Array.from(document.querySelectorAll('#faq .faq-item'));

  if (faqItems.length) {
    const closeItem = (item) => {
      item.classList.remove('active');
      const b = item.querySelector('.faq-question');
      const p = item.querySelector('.faq-answer');
      if (b) b.setAttribute('aria-expanded', 'false');
      if (p) p.setAttribute('aria-hidden', 'true');
    };

    const openItem = (item) => {
      item.classList.add('active');
      const b = item.querySelector('.faq-question');
      const p = item.querySelector('.faq-answer');
      if (b) b.setAttribute('aria-expanded', 'true');
      if (p) p.setAttribute('aria-hidden', 'false');
    };

    // Initialize closed and bind events
    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-answer');
      if (!btn || !panel) return;

      closeItem(item);

      btn.addEventListener('click', () => {
        const willOpen = !item.classList.contains('active');
        // Close all
        faqItems.forEach(closeItem);
        // Open this one if it was closed
        if (willOpen) openItem(item);
      });
    });

    // Optional: ESC closes any open item
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') faqItems.forEach(closeItem);
    });
  }

  // ----------------------------
  // MARK: Dynamic footer year
  // ----------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});