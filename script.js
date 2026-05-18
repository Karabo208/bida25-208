// Apply saved theme preference on page load
function applyThemePreference() {
  const btn = document.querySelector('#dark-toggle');
  if (!btn) return;

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    btn.textContent = ' Light';
  } else {
    btn.textContent = 'dark';
  }
}

function toggleDarkMode() {
  const btn = document.querySelector('#dark-toggle');
  if (!btn) return;

  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    btn.textContent = '☀️ Light';
  } else {
    localStorage.setItem('theme', 'light');
    btn.textContent = '🌙 Dark';
  }
}

document.addEventListener('DOMContentLoaded', applyThemePreference);
