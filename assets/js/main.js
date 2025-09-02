const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = (() => { try { return localStorage.getItem('theme'); } catch (_) { return null; } })();
document.documentElement.setAttribute('data-theme', savedTheme || (prefersDark ? 'dark' : 'light'));

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const root = document.documentElement;

  const updateToggleUI = (theme) => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const sun = btn.querySelector('.icon-sun');
    const moon = btn.querySelector('.icon-moon');
    const isDark = theme === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    if (sun || moon) {
      if (sun) sun.hidden = !(!isDark);
      if (moon) moon.hidden = !(isDark);
    } else {
      btn.textContent = isDark ? '🌙' : '🌞';
    }
  };

  let currentTheme = root.getAttribute('data-theme') || 'light';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (_) {}
    updateToggleUI(theme);
    try { console.log('[theme]', 'applied:', theme); } catch(_) {}
    currentTheme = theme;
  };

  // Initial sync to current theme
  updateToggleUI(root.getAttribute('data-theme') || 'light');

  // Guard: if something external clobbers data-theme, restore our selection
  try {
    const mo = new MutationObserver(() => {
      const t = root.getAttribute('data-theme') || 'light';
      if (t !== currentTheme) {
        try { console.log('[theme]', 'restoring clobbered theme to', currentTheme); } catch(_) {}
        root.setAttribute('data-theme', currentTheme);
      }
    });
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  } catch(_) {}

  // Robust event delegation (handles text-node targets via composedPath)
  document.addEventListener('click', (e) => {
    let btn = null;
    if (e.target && e.target.id === 'theme-toggle') {
      btn = e.target;
    } else if (e.target && e.target.nodeType === 1 && e.target.closest) {
      btn = e.target.closest('#theme-toggle');
    }
    if (!btn && typeof e.composedPath === 'function') {
      const path = e.composedPath();
      for (let i = 0; i < path.length; i++) {
        const n = path[i];
        if (n && n.nodeType === 1 && n.id === 'theme-toggle') { btn = n; break; }
      }
    }
    if (!btn) return;
    const cur = root.getAttribute('data-theme') || 'light';
    const next = cur === 'light' ? 'dark' : 'light';
    try { console.log('[theme]', 'click detected, cur=', cur, 'next=', next); } catch(_) {}
    applyTheme(next);
  }, true);

  // Follow OS if user has not explicitly chosen
  try {
    if (!savedTheme) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = (e) => applyTheme(e.matches ? 'dark' : 'light');
      mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    }
  } catch (_) {}

  initFadeSections();
});

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

function initFadeSections() {
  document.querySelectorAll('.fade-section').forEach(section => {
    if (!section.dataset.fadeObserved) {
      fadeObserver.observe(section);
      section.dataset.fadeObserved = 'true';
    }
  });
}
