function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });
    
    const btn = document.getElementById('dark-toggle');
    
    if (document.body.classList.contains('dark-mode')) {
        if (btn) btn.textContent = 'Light mode';
        localStorage.setItem('theme', 'dark'); 
    } else {
        if (btn) btn.textContent = 'Dark mode';
        localStorage.setItem('theme', 'light'); 
    }
}

// Automatically apply the saved theme when any page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('dark-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        
        // Apply to sections on load too
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('dark-mode');
        });
        
        if (btn) btn.textContent = 'Light mode';
    }
});