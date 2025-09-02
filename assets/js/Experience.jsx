import React, { useEffect, useMemo, useState } from 'https://esm.sh/react@18';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack.jsx';

const Experience = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    try {
      const scroller = document.querySelector('[data-scrollstack="highlights"]');
      if (!scroller) return;
      const cards = scroller.querySelectorAll('.scroll-stack-card');
      if (!cards[index]) return;
      const containerHeight = scroller.clientHeight;
      const stackPosPx = 0.2 * containerHeight; // matches stackPosition = '20%'
      const itemStackDistance = 28; // prop used below
      const target = cards[index].offsetTop - stackPosPx - itemStackDistance * index + 1;
      scroller.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
    } catch {}
  };

  useEffect(() => {
    if (typeof initExperienceTimeline === 'function') {
      initExperienceTimeline();
    }
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handler = () => setPrefersReducedMotion(!!mq.matches);
      handler();
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
      return () => {
        mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
      };
    } catch {}
  }, []);
  const jobs = useMemo(() => [
    {
      date: 'Jan 2023 - Present',
      role: 'Lead Developer',
      company: 'Storelx, NL, Canada',
      bullets: [
        'Led the development of a P2P storage marketplace platform using Node.js and React, serving 100+ active users',
        'Designed and implemented a scalable microservices architecture using Express.js, reducing API response time by 40%',
        'Designed and optimized MongoDB schemas, resulting in 30% faster query performance',
        'Led a team of 3 developers using Agile methodology, achieving 95% on-time sprint completion rate'
      ]
    },
    {
      date: 'Apr 2023 - Aug 2023',
      role: 'Data Science Intern',
      company: 'Union Group FZCO, Dubai, UAE',
      bullets: [
        'Developed pipelines using Python and Pandas, processing 20k+ daily transactions with 99.9% accuracy',
        'Created predictive models using scikit-learn, achieving 85% accuracy in sales forecasting',
        'Built interactive dashboards using Plotly and Dash, reducing report generation time by 75%'
      ]
    },
    {
      date: 'Jul 2022 - Oct 2022',
      role: 'Full Stack Intern',
      company: 'Hoopoe Digital, Cairo, Egypt',
      bullets: [
        'Developed a customer tracking application serving 5+ shopping malls and processing 20K+ daily visitors',
        'Built RESTful APIs using Node.js and Express, handling 1000+ requests per minute with 99.9% uptime',
        'Implemented real-time analytics dashboard using React and D3.js, processing 10k+ daily data points',
        'Contributed to microservices architecture design, improving system scalability by 40%'
      ]
    },
    {
      date: 'Apr 2022 - Jul 2022',
      role: 'Data Science Intern',
      company: 'Union Group, Cairo, Egypt',
      bullets: [
        'Analyzed 5+ years of financial data using Python and SQL, identifying patterns that led to 15% cost reduction',
        'Created automated data cleaning pipelines processing 10k+ records daily with 99% accuracy',
        'Developed interactive Power BI dashboards viewed by 50+ stakeholders daily',
        'Implemented statistical analysis methods resulting in 25% more accurate financial forecasting',
        'Documented 20+ technical processes, reducing onboarding time for new team members by 50%'
      ]
    }
  ], []);
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

      <div className="mt-20">
        <h3 className="text-xl font-semibold mb-4">Highlights</h3>
        {prefersReducedMotion ? (
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="ml-[90px]">
                <div className="timeline-card">
                  <div className="timeline-card-date">{job.date}</div>
                  <div className="timeline-card-role">{job.role}</div>
                  <div className="timeline-card-company">{job.company}</div>
                  <div className="timeline-card-description">
                    <ul>
                      {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[90vh] max-w-[700px] mx-auto">
            <ScrollStack
              className="h-full scrollbar-hide"
              itemDistance={90}
              itemScale={0.04}
              baseScale={0.86}
              itemStackDistance={28}
              onActiveIndexChange={setActiveIndex}
              dataId="highlights"
            >
              {/* Sticky indicator aligned like the vertical timeline */}
              <div className="timeline-indicator">
                {jobs.map((job, i) => (
                  <div
                    key={i}
                    className={`indicator-dot ${i === activeIndex ? 'active' : ''}`}
                    data-date={job.date}
                    onClick={() => scrollToCard(i)}
                  />
                ))}
              </div>

              {jobs.map((job, idx) => (
                <ScrollStackItem key={idx}>
                  <div className={`timeline-item ${idx === activeIndex ? 'active' : ''} ml-[90px]`}>
                    <div className="timeline-card">
                      <div className="timeline-card-date">{job.date}</div>
                      <div className="timeline-card-role">{job.role}</div>
                      <div className="timeline-card-company">{job.company}</div>
                      <div className="timeline-card-description">
                        <ul>
                          {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
