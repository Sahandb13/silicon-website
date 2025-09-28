document.addEventListener('DOMContentLoaded', function () {

  // MARK: Theme toggle
  var html = document.documentElement;
  var themeSwitch = document.getElementById('theme-switch');

  var savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  if (themeSwitch) {
    themeSwitch.checked = savedTheme === 'dark';
    themeSwitch.addEventListener('change', function () {
      var newTheme = themeSwitch.checked ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // MARK: Mobile navigation
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var isOpen = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('nav-open');
    });

    document.addEventListener('click', function (e) {
      var clickedOutside = !e.target.closest('.nav') && !e.target.closest('.nav-toggle');
      if (nav.classList.contains('nav-open') && clickedOutside) {
        nav.classList.remove('nav-open');
        navBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // MARK: FAQ accordion
  var faqItems = Array.prototype.slice.call(document.querySelectorAll('#faq .faq-item'));

  if (faqItems.length) {
    var closeItem = function (item) {
      item.classList.remove('active');
      var b = item.querySelector('.faq-question');
      var p = item.querySelector('.faq-answer');
      if (b) b.setAttribute('aria-expanded', 'false');
      if (p) p.setAttribute('aria-hidden', 'true');
    };

    var openItem = function (item) {
      item.classList.add('active');
      var b = item.querySelector('.faq-question');
      var p = item.querySelector('.faq-answer');
      if (b) b.setAttribute('aria-expanded', 'true');
      if (p) p.setAttribute('aria-hidden', 'false');
    };

    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      var panel = item.querySelector('.faq-answer');
      if (!btn || !panel) return;

      closeItem(item);

      btn.addEventListener('click', function () {
        var willOpen = !item.classList.contains('active');
        faqItems.forEach(closeItem);
        if (willOpen) openItem(item);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') faqItems.forEach(closeItem);
    });
  }

  // MARK: Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
