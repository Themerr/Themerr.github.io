const page = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let chosenTheme = page.dataset.theme;

function showTheme(theme) {
  page.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#100d13' : '#fff8f5';
}

function usePreferredTheme() {
  showTheme(chosenTheme || (systemTheme.matches ? 'dark' : 'light'));
}

usePreferredTheme();
themeToggle.hidden = false;
themeToggle.addEventListener('click', () => {
  chosenTheme = page.dataset.theme === 'dark' ? 'light' : 'dark';
  showTheme(chosenTheme);
  try {
    localStorage.setItem('themerr-site-theme', chosenTheme);
  } catch { /* Keep the selection for this page when storage is unavailable. */ }
});
systemTheme.addEventListener('change', usePreferredTheme);
