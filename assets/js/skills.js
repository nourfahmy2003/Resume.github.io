function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const width = skillBar.getAttribute('data-width');
        skillBar.style.setProperty('--width', width);
        skillBar.style.width = width;
        setTimeout(() => {
          skillBar.style.opacity = '1';
        }, Math.random() * 500);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.opacity = '0.8';
    observer.observe(bar);
  });
}

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
  }, { threshold: 0.2 });

  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
  });
}

function initSkills() {
  const section = document.querySelector('.skills-main-section');
  if (!section) return;
  animateSkillBars();
  addSkillCardAnimations();
}
