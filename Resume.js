// Smooth scroll when clicking the arrow
const scrollButton = document.getElementById('scroll-down');
if (scrollButton) {
  scrollButton.addEventListener('click', () => {
    const target = document.getElementById('about');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// Dark mode toggle
const modeToggle = document.getElementById('dark-mode-toggle');
if (modeToggle) {
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
