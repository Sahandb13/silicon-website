document.addEventListener('DOMContentLoaded', () => {
  // MARK: Theme Toggle Setup
  const html = document.documentElement;
  const sw = document.getElementById('theme-switch');

  // MARK: Load Saved Theme Preference
  let saved = 'light';
  try { saved = localStorage.getItem('theme') || 'light'; } catch(_) {}

  // MARK: Apply Initial Theme Settings
  html.setAttribute('data-bs-theme', saved);
  // MARK: Show/Hide Subscribe Sections Based on Theme
  document.getElementById('subLight')?.classList.toggle('d-none', saved === 'dark');
  document.getElementById('subDark')?.classList.toggle('d-none', saved !== 'dark');

  // MARK: Theme Switch Event Listener
  if (sw) {
    sw.checked = saved === 'dark';
    sw.addEventListener('change', () => {
      const theme = sw.checked ? 'dark' : 'light';
      // MARK: Update Theme Attribute
      html.setAttribute('data-bs-theme', theme);
      // MARK: Save Theme to Local Storage
      try { localStorage.setItem('theme', theme); } catch(_) {}
      // MARK: Toggle Subscribe Section Visibility
      document.getElementById('subLight')?.classList.toggle('d-none', theme === 'dark');
      document.getElementById('subDark')?.classList.toggle('d-none', theme !== 'dark');
    });
  }

  // MARK: Update Footer Year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
});