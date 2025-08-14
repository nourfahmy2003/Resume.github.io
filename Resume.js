document.addEventListener('DOMContentLoaded', () => {
  const codeIntro = document.getElementById('code-intro');
  const codeBlock = document.getElementById('code-block');
  const welcome = document.querySelector('.welcome-section');
  const navbar = document.querySelector('.navbar');
  const heroName = document.getElementById('hero-name');
  const shapes = document.querySelectorAll('.shape');
  const codeText = [
    '<!-- portfolio setup -->',
    '<section id="hero">',
    '  <h1>Noureldeen Fahmy</h1>',
    '  <button>See My Work</button>',
    '</section>'
  ].join('\n');
  let idx = 0;
  (function type() {
    if (idx < codeText.length) {
      codeBlock.textContent += codeText.charAt(idx);
      idx++;
      setTimeout(type, 30);
    } else {
      setTimeout(() => {
        codeIntro.classList.add('fade-out');
        welcome.classList.add('show');
        navbar.classList.add('show');
        typeHeroName();
        setTimeout(() => codeIntro.remove(), 2500);
      }, 300);
    }
  })();

  document.getElementById('scroll-down').addEventListener('click', function() {
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });

  document.addEventListener('mousemove', (e) => {
    const shiftX = (window.innerWidth / 2 - e.clientX) * 0.02;
    const shiftY = (window.innerHeight / 2 - e.clientY) * 0.02;
    heroName.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    shapes.forEach((shape, i) => {
      const factor = (i + 1) * 0.015;
      shape.style.setProperty('--px', `${shiftX * factor}px`);
      shape.style.setProperty('--py', `${shiftY * factor}px`);
    });
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Magnetic hover effect
  document.querySelectorAll('.magnetic').forEach(el => {
    const strength = 20;
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.setProperty('--mx', `${x / strength}px`);
      el.style.setProperty('--my', `${y / strength}px`);
    });
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    });
  });

  function typeHeroName() {
    const text = heroName.dataset.text || '';
    heroName.textContent = '';
    let i = 0;
    (function type() {
      if (i < text.length) {
        heroName.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
      } else {
        heroName.classList.remove('typing');
      }
    })();
  }
});

// Reveal the clean strip for "About Me" section on scroll
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      aboutSection.classList.add('scrolled');
    }
  }
});

window.onload = function() {
  animateSkillBars();
};

// Function to animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const width = skillBar.getAttribute('data-width');
        skillBar.style.setProperty('--width', width);
        skillBar.style.width = width;
        
        // Add a slight delay for staggered animation
        setTimeout(() => {
          skillBar.style.opacity = '1';
        }, Math.random() * 500);
      }
    });
  }, {
    threshold: 0.5
  });
  
  skillBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.opacity = '0.8';
    observer.observe(bar);
  });
}

// Add scroll animations for skill cards
function addSkillCardAnimations() {
  const skillCards = document.querySelectorAll('.soft-skill-card, .skill-category');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.2
  });
  
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addSkillCardAnimations();

  // Fade in sections when they enter the viewport
  const fadeSections = document.querySelectorAll('.fade-section');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeSections.forEach(section => {
    fadeObserver.observe(section);
  });
});

// Simple timeline navigation without external plugins
document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.getElementById('experience-timeline');
  const items = timeline.querySelectorAll('.timeline-item');
  const indicator = timeline.querySelector('.timeline-indicator');
  let currentIndex = 0;

  // nudge scroll position so sticky indicator starts centered
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

  // initial state
  if (items.length > 0) {
    items[0].classList.add('visible');
    updateDots();
    updateActiveItem();
  }
});



