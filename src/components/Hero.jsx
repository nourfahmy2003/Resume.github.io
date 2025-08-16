import { useEffect } from 'react';
import './Hero.css';
import gsap from 'gsap';
import { useIsReducedMotion } from '../hooks/useIsReducedMotion.js';

export default function Hero(){
  const reduce = useIsReducedMotion();

  useEffect(() => {
    if (reduce) {
      gsap.set([".hero-left", ".portrait-wrapper", ".stat", ".feature-block"], { opacity: 1, y: 0, clearProps: "all" });
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-left', { x: -24, opacity: 0, duration: 0.8 })
      .from('.portrait-wrapper', { scale: 0.98, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.stat', { y: -20, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.4')
      .from('[data-cta]', { y: 10, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.feature-block', { y: 20, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.2');

    const imgHolder = document.querySelector('[data-parallax]');
    const handlers = [];
    if (window.matchMedia('(pointer: fine)').matches && imgHolder) {
      const move = (e) => {
        const r = imgHolder.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / r.width;
        const y = (e.clientY - (r.top + r.height / 2)) / r.height;
        gsap.to(imgHolder, { x: x * 6, y: y * 6, duration: 0.3, overwrite: true });
      };
      const leave = () => { gsap.to(imgHolder, { x: 0, y: 0, duration: 0.3 }); };
      imgHolder.addEventListener('mousemove', move);
      imgHolder.addEventListener('mouseleave', leave);
      handlers.push(() => {
        imgHolder.removeEventListener('mousemove', move);
        imgHolder.removeEventListener('mouseleave', leave);
      });
    }

    const btns = gsap.utils.toArray('[data-cta]');
    btns.forEach(b => {
      const enter = () => gsap.to(b, { scale: 1.02, duration: 0.18, ease: 'power2.out' });
      const leave = () => gsap.to(b, { scale: 1.0, duration: 0.18, ease: 'power2.out' });
      b.addEventListener('mouseenter', enter);
      b.addEventListener('mouseleave', leave);
      handlers.push(() => {
        b.removeEventListener('mouseenter', enter);
        b.removeEventListener('mouseleave', leave);
      });
    });

    const cleanupSnippet = cycleSnippets();

    return () => {
      tl.kill();
      handlers.forEach(fn => fn());
      cleanupSnippet && cleanupSnippet();
    };
  }, [reduce]);

  return (
    <section id="hero" className="hero">
      <div className="hero-canvas">
        <div className="hero-grid">
          <div className="hero-left">
            <p className="hero-eyebrow">HEY, I'M NOURELDEEN FAHMY</p>

            <h1 className="hero-heading">
              <span className="hero-role">
                <span className="role-main">Software Developer</span>
                <span className="role-sub">&amp; Data Scientist</span>
              </span>
            </h1>

            <p className="hero-description hero-description--long">
              Software Developer & Data Scientist blending full-stack expertise with AI-driven analytics to deliver polished, scalable products.
              From leading high-performance marketplaces to building predictive models with 85% accuracy and systems running 40% faster,
              I turn complex challenges into solutions that impress and perform.
            </p>

            <p className="hero-tools">React 18 · Node.js/Express · PostgreSQL · AWS</p>

            <a href="#card" className="hero-cta" data-cta>Contact Me <span className="cta-arrow">→</span></a>
          </div>
          <div className="hero-right">
            <div className="portrait-wrapper" data-parallax>
              <div className="shield" aria-hidden="true"></div>
              <img src="images/ChatGPT Image Aug 15, 2025, 11_23_28 PM.png" alt="Noureldeen Fahmy" className="portrait" />
            </div>

            <div className="hero-stats">
              <div className="stat"><span className="stat-number">100+ </span><span className="stat-label">Active Users</span></div>
              <div className="stat"><span className="stat-number">5+ </span><span className="stat-label">Projects</span></div>
              <div className="stat"><span className="stat-number">3+ </span><span className="stat-label">Years</span></div>
              <div className="stat"><span className="stat-number">95% </span><span className="stat-label">Sprint Completion</span></div>
            </div>
          </div>
        </div>
        <div className="feature-row">
          <div className="feature-block">
            <h3>USER-CENTERED DEVELOPMENT</h3>
            <p>Crafting intuitive, accessible interfaces.</p>
          </div>
          <div className="feature-block">
            <h3>SCALABLE SYSTEMS</h3>
            <p>Architecture that grows with your product.</p>
          </div>
          <div className="feature-block">
            <h3>DATA-DRIVEN</h3>
            <p>Using data to inform every decision.</p>
          </div>
          <div className="feature-block">
            <h3>AGILE MINDSET</h3>
            <p>Iterating fast to deliver results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function cycleSnippets(){
  const snippets = [
    '<Hero name="Nour" />',
    '<Button primary>Contact</Button>'
  ];
  let i = 0;
  let timeout;
  function type(){
    const el = document.getElementById('code-snippet');
    if(!el) return;
    const text = snippets[i];
    el.textContent = '';
    let c = 0;
    function tick(){
      if(c < text.length){
        el.textContent += text.charAt(c++);
        timeout = setTimeout(tick, 80);
      } else {
        i = (i + 1) % snippets.length;
        timeout = setTimeout(type, 7000);
      }
    }
    tick();
  }
  type();
  return () => clearTimeout(timeout);
}
