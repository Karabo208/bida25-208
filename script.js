
<script>
  // Apply saved preference on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-toggle').textContent = '☀️ Light';
  }

  function toggleDarkMode()
{  
 document.body.classList.toggle('dark-mode');
    const btn = document.querySelector('.dark-toggle');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      btn.textContent = '☀️ Light';
    } else {
      localStorage.setItem('theme', 'light');
      btn.textContent = '🌙 Dark';
    }

</script>