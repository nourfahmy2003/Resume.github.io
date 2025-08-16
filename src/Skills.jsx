import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-main-section fade-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p>My technical and professional capabilities</p>
        </div>
        <div className="skills-content">
          <div className="technical-skills">
            <h3><span className="icon">💻</span> Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skill-bars">
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Python</span><span className="skill-percentage">90%</span></div>
                    <div className="skill-bar"><div className="skill-progress python" data-width="90%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">JavaScript</span><span className="skill-percentage">85%</span></div>
                    <div className="skill-bar"><div className="skill-progress javascript" data-width="85%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Java</span><span className="skill-percentage">80%</span></div>
                    <div className="skill-bar"><div className="skill-progress java" data-width="80%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">SQL</span><span className="skill-percentage">88%</span></div>
                    <div className="skill-bar"><div className="skill-progress sql" data-width="88%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Dart</span><span className="skill-percentage">70%</span></div>
                    <div className="skill-bar"><div className="skill-progress dart" data-width="70%"></div></div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <div className="skill-bars">
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">React</span><span className="skill-percentage">85%</span></div>
                    <div className="skill-bar"><div className="skill-progress react" data-width="85%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Node.js</span><span className="skill-percentage">80%</span></div>
                    <div className="skill-bar"><div className="skill-progress node" data-width="80%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Express.js</span><span className="skill-percentage">78%</span></div>
                    <div className="skill-bar"><div className="skill-progress express" data-width="78%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Pandas</span><span className="skill-percentage">82%</span></div>
                    <div className="skill-bar"><div className="skill-progress pandas" data-width="82%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">scikit-learn</span><span className="skill-percentage">65%</span></div>
                    <div className="skill-bar"><div className="skill-progress sklearn" data-width="65%"></div></div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <div className="skill-bars">
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">MongoDB</span><span className="skill-percentage">85%</span></div>
                    <div className="skill-bar"><div className="skill-progress mongodb" data-width="85%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Git</span><span className="skill-percentage">88%</span></div>
                    <div className="skill-bar"><div className="skill-progress git" data-width="88%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Firebase</span><span className="skill-percentage">85%</span></div>
                    <div className="skill-bar"><div className="skill-progress firebase" data-width="85%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">REST APIs</span><span className="skill-percentage">88%</span></div>
                    <div className="skill-bar"><div className="skill-progress rest" data-width="88%"></div></div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-info"><span className="skill-name">Vercel</span><span className="skill-percentage">90%</span></div>
                    <div className="skill-bar"><div className="skill-progress vercel" data-width="90%"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="professional-skills">
            <h3><span className="icon">🎯</span> Professional Skills</h3>
            <div className="soft-skills-grid">
              <div className="soft-skill-card"><div className="skill-icon">🧠</div><h4>Problem Solving</h4><p>Analytical thinking and creative solutions to complex technical challenges</p></div>
              <div className="soft-skill-card"><div className="skill-icon">👥</div><h4>Team Leadership</h4><p>Leading agile teams and mentoring junior developers effectively</p></div>
              <div className="soft-skill-card"><div className="skill-icon">💬</div><h4>Communication</h4><p>Clear technical documentation and stakeholder presentations</p></div>
              <div className="soft-skill-card"><div className="skill-icon">📊</div><h4>Data Analysis</h4><p>Statistical analysis, data visualization, and business intelligence</p></div>
              <div className="soft-skill-card"><div className="skill-icon">🚀</div><h4>Project Management</h4><p>Agile methodologies, sprint planning, and delivery optimization</p></div>
              <div className="soft-skill-card"><div className="skill-icon">🔄</div><h4>Adaptability</h4><p>Quick learning of new technologies and frameworks</p></div>
              <div className="soft-skill-card"><div className="skill-icon">🎨</div><h4>UI/UX Design</h4><p>User-centered design principles and responsive interfaces</p></div>
              <div className="soft-skill-card"><div className="skill-icon">⚡</div><h4>Performance Optimization</h4><p>Code optimization, system scalability, and efficiency improvements</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
