const Contact = () => {
  React.useEffect(() => {
    if (typeof initContact === 'function') {
      initContact();
    }
  }, []);
  return (
    <section className="profile-container fade-section" id="contact">
      <div className="modern-contact-section">
        <div className="contact-background">
          <div className="geometric-patterns">
            <div className="pattern-circle circle-1"></div>
            <div className="pattern-circle circle-2"></div>
            <div className="pattern-circle circle-3"></div>
            <div className="pattern-hexagon hex-1"></div>
            <div className="pattern-hexagon hex-2"></div>
            <div className="pattern-line line-1"></div>
            <div className="pattern-line line-2"></div>
            <div className="pattern-line line-3"></div>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-card">
            <div className="card-header">
              <div className="avatar-section">
                <div className="avatar-placeholder">
                  <span className="avatar-initials">NF</span>
                  <div className="avatar-ring"></div>
                </div>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span className="status-text">Available for opportunities</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h2 className="contact-name">
                <span className="first-name">Noureldeen</span>
                <span className="last-name">Fahmy</span>
              </h2>
              <p className="contact-role">Computer Science Student &amp; Full-Stack Developer</p>
              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">📧</div>
                  <div className="detail-content">
                    <span className="detail-label">Email</span>
                    <a href="mailto:nourfahmy2003@gmail.com" className="detail-value">nourfahmy2003@gmail.com</a>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">📱</div>
                  <div className="detail-content">
                    <span className="detail-label">Phone</span>
                    <a href="tel:+17097645946" className="detail-value">+1 (709) 764-5946</a>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">🎓</div>
                  <div className="detail-content">
                    <span className="detail-label">University</span>
                    <span className="detail-value">Memorial University of Newfoundland</span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">📍</div>
                  <div className="detail-content">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">St. John's, NL, Canada</span>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/noureldeen-fahmy-277742256/" target="_blank" className="social-link linkedin">
                  <div className="social-icon">💼</div>
                  <span className="social-text">LinkedIn Profile</span>
                </a>
                <a href="https://github.com/noureldeen" target="_blank" className="social-link github">
                  <div className="social-icon">💻</div>
                  <span className="social-text">GitHub Portfolio</span>
                </a>
              </div>
              <div className="contact-actions">
                <a href="mailto:nourfahmy2003@gmail.com" className="contact-btn primary">
                  <span className="btn-icon">✉️</span>
                  <span className="btn-text">Send Email</span>
                </a>
                <a href="tel:+17097645946" className="contact-btn secondary">
                  <span className="btn-icon">📞</span>
                  <span className="btn-text">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
