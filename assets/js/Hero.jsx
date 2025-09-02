import React, { useEffect } from 'https://esm.sh/react@18';

const Hero = () => {
  useEffect(() => {
    if (typeof initHero === 'function') {
      initHero();
    }
  }, []);
  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <div className="hero-grid">
          <div className="hero-left">
            <p className="hero-eyebrow">HEY, I'M NOURELDEEN FAHMY</p>
            <h1 className="hero-heading">
              <div className="portrait-mobile-wrapper" aria-hidden="false">
                <div className="shield" aria-hidden="true"></div>
                <img
                  src="images/ChatGPT Image Aug 15, 2025, 11_23_28 PM.png"
                  alt="Noureldeen Fahmy"
                  className="portrait mobile"
                />
              </div>

              <span className="hero-role">
                <span className="role-main">Software Developer</span>
                <span className="role-sub">&amp; Data Scientist</span>
              </span>
            </h1>
            <p className="hero-description hero-description--long">
              Software Developer &amp; Data Scientist blending full-stack expertise with AI-driven analytics to deliver polished, scalable products. From leading high-performance marketplaces to building predictive models with 85% accuracy and systems running 40% faster, I turn complex challenges into solutions that impress and perform.
            </p>
            <p className="hero-tools">React 18 · Node.js/Express · PostgreSQL · AWS</p>
            <a href="#contact" className="hero-cta" data-cta>Contact Me <span className="cta-arrow">→</span></a>
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
};

export default Hero;
