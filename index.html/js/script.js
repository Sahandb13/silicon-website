document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (behålls även om G inte kräver det)
  const html = document.documentElement;
  const sw = document.getElementById('theme-switch');

  let saved = 'light';
  try { saved = localStorage.getItem('theme') || 'light'; } catch(_) {}

  // Sätt initialt tema
  html.setAttribute('data-bs-theme', saved);
  // Visa rätt subscribe-variant
  document.getElementById('subLight')?.classList.toggle('d-none', saved === 'dark');
  document.getElementById('subDark')?.classList.toggle('d-none', saved !== 'dark');

  if (sw) {
    sw.checked = saved === 'dark';
    sw.addEventListener('change', () => {
      const theme = sw.checked ? 'dark' : 'light';
      html.setAttribute('data-bs-theme', theme);
      try { localStorage.setItem('theme', theme); } catch(_) {}
      document.getElementById('subLight')?.classList.toggle('d-none', theme === 'dark');
      document.getElementById('subDark')?.classList.toggle('d-none', theme !== 'dark');
    });
  }

  // Footer-år
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
});
