document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;
  const items = timeline.querySelectorAll('.timeline-item');
  const indicator = timeline.querySelector('.timeline-indicator');
  if (!items.length || !indicator) return;
  let currentIndex = 0;
  timeline.scrollTop = 1;

  items.forEach((item, idx) => {
    const dot = document.createElement('span');
    dot.className = 'indicator-dot';
    dot.dataset.date = item.dataset.date;
    dot.addEventListener('click', () => scrollToIndex(idx));
    indicator.appendChild(dot);
  });

  function updateDots() {
    indicator.querySelectorAll('.indicator-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
      if (i === currentIndex) {
        if (!d.classList.contains('show-date')) {
          d.classList.add('show-date');
          const timer = setTimeout(() => {
            d.classList.remove('show-date');
            d.dataset.timer = '';
          }, 2000);
          d.dataset.timer = String(timer);
        }
      } else {
        d.classList.remove('show-date');
        if (d.dataset.timer) {
          clearTimeout(parseInt(d.dataset.timer, 10));
          d.dataset.timer = '';
        }
      }
    });
  }

  function updateActiveItem() {
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentIndex);
    });
  }

  function scrollToIndex(index) {
    if (index < 0 || index >= items.length) return;
    currentIndex = index;
    items[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateDots();
    updateActiveItem();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentIndex = Array.from(items).indexOf(entry.target);
        entry.target.classList.add('visible');
        updateDots();
        updateActiveItem();
      }
    });
  }, { threshold: 0.6 });

  items.forEach(item => observer.observe(item));

  if (items.length > 0) {
    items[0].classList.add('visible');
    updateDots();
    updateActiveItem();
  }
});
