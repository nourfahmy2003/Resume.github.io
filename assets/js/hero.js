document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;

  runHeroAnimations();
  cycleSnippets();
});

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  const imgHolder = document.querySelector('[data-parallax]');
  if (window.matchMedia('(pointer: fine)').matches && imgHolder) {
    imgHolder.addEventListener('mousemove', (e) => {
      const r = imgHolder.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      gsap.to(imgHolder, { x: x * 6, y: y * 6, duration: 0.3, overwrite: true });
    });
    imgHolder.addEventListener('mouseleave', () => {
      gsap.to(imgHolder, { x: 0, y: 0, duration: 0.3 });
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
