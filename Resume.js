const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', savedTheme || (prefersDark ? 'dark' : 'light'));

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  runHeroAnimations();
  cycleSnippets();

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function runHeroAnimations() {
  if (prefersReduced) {
    gsap.set([".hero-left", ".portrait-wrapper", ".stat", ".feature-block"], { opacity: 1, y: 0, clearProps: "all" });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".hero-left", { x: -24, opacity: 0, duration: 0.8 })
    .from(".portrait-wrapper", { scale: 0.98, opacity: 0, duration: 0.8 }, "-=0.4")
    .from(".stat", { y: -20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.4")
    .from("[data-cta]", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
    .from(".feature-block", { y: 20, opacity: 0, stagger: 0.08, duration: 0.6 }, "-=0.2");

  const wrap = document.getElementById('photoWrap');
  if (window.matchMedia('(pointer: fine)').matches && wrap) {
      wrap.addEventListener('mousemove', e => {
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / r.width;
        const y = (e.clientY - (r.top + r.height / 2)) / r.height;
        wrap.style.transform = `translateX(-56px) translate(${x * 6}px, ${y * 4}px)`;
      });
      wrap.addEventListener('mouseleave', () => {
        wrap.style.transform = 'translateX(-56px)';
      });
    }

  const btns = gsap.utils.toArray('[data-cta]');
    btns.forEach((b) => {
      b.addEventListener('mouseenter', () =>
        gsap.to(b, { scale: 1.02, duration: 0.18, ease: 'power2.out' })
      );
      b.addEventListener('mouseleave', () =>
        gsap.to(b, { scale: 1.0, duration: 0.18, ease: 'power2.out' })
      );
    });

    const contact = document.querySelector('a[href="#card"]');
    if (contact) {
      contact.addEventListener('mouseover', () => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = '#card';
        document.head.appendChild(link);
      }, { once: true });
    }
  }

function cycleSnippets() {
  const snippets = [
    '<Hero name="Nour" />',
    '<Button primary>Contact</Button>'
  ];
  let i = 0;
  function type() {
    const el = document.getElementById('code-snippet');
    if (!el) return;
    const text = snippets[i];
    el.textContent = '';
    let c = 0;
    (function tick() {
      if (c < text.length) {
        el.textContent += text.charAt(c++);
        setTimeout(tick, 80);
      } else {
        i = (i + 1) % snippets.length;
        setTimeout(type, 7000);
      }
    })();
  }
  type();
}

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



