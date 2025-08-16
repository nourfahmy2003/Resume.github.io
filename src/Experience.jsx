function Experience() {
  return (
    <section className="experience-section section-container fade-section" id="experience">
      <h2 className="experience-title">Professional Experience</h2>
      <div id="experience-timeline" className="vertical-timeline">
        <div className="timeline-indicator"></div>
        <ul className="timelaine-list">
          <li className="timeline-item" data-date="Jan 2023 - Present">
            <div className="timeline-card">
              <div className="timeline-card-date">Jan 2023 - Present</div>
              <div className="timeline-card-role">Lead Developer</div>
              <div className="timeline-card-company">Storelx, NL, Canada</div>
              <div className="timeline-card-description">
                <ul>
                  <li>Led the development of a P2P storage marketplace platform using Node.js and React, serving 100+ active users</li>
                  <li>Designed and implemented a scalable microservices architecture using Express.js, reducing API response time by 40%</li>
                  <li>Designed and optimized MongoDB schemas, resulting in 30% faster query performance</li>
                  <li>Led a team of 3 developers using Agile methodology, achieving 95% on-time sprint completion rate</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="timeline-item" data-date="Apr 2023 - Aug 2023">
            <div className="timeline-card">
              <div className="timeline-card-date">Apr 2023 - Aug 2023</div>
              <div className="timeline-card-role">Data Science Intern</div>
              <div className="timeline-card-company">Union Group FZCO, Dubai, UAE</div>
              <div className="timeline-card-description">
                <ul>
                  <li>Developed pipelines using Python and Pandas, processing 20k+ daily transactions with 99.9% accuracy</li>
                  <li>Created predictive models using scikit-learn, achieving 85% accuracy in sales forecasting</li>
                  <li>Built interactive dashboards using Plotly and Dash, reducing report generation time by 75%</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="timeline-item" data-date="Jul 2022 - Oct 2022">
            <div className="timeline-card">
              <div className="timeline-card-date">Jul 2022 - Oct 2022</div>
              <div className="timeline-card-role">Full Stack Intern</div>
              <div className="timeline-card-company">Hoopoe Digital, Cairo, Egypt</div>
              <div className="timeline-card-description">
                <ul>
                  <li>Developed a customer tracking application serving 5+ shopping malls and processing 20K+ daily visitors</li>
                  <li>Built RESTful APIs using Node.js and Express, handling 1000+ requests per minute with 99.9% uptime</li>
                  <li>Implemented real-time analytics dashboard using React and D3.js, processing 10k+ daily data points</li>
                  <li>Contributed to microservices architecture design, improving system scalability by 40%</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="timeline-item" data-date="Apr 2022 - Jul 2022">
            <div className="timeline-card">
              <div className="timeline-card-date">Apr 2022 - Jul 2022</div>
              <div className="timeline-card-role">Data Science Intern</div>
              <div className="timeline-card-company">Union Group, Cairo, Egypt</div>
              <div className="timeline-card-description">
                <ul>
                  <li>Analyzed 5+ years of financial data using Python and SQL, identifying patterns that led to 15% cost reduction</li>
                  <li>Created automated data cleaning pipelines processing 10k+ records daily with 99% accuracy</li>
                  <li>Developed interactive Power BI dashboards viewed by 50+ stakeholders daily</li>
                  <li>Implemented statistical analysis methods resulting in 25% more accurate financial forecasting</li>
                  <li>Documented 20+ technical processes, reducing onboarding time for new team members by 50%</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
