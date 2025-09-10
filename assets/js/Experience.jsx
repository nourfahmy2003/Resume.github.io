import React, { useEffect, useMemo, useState } from 'https://esm.sh/react@18';

const Experience = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Build clickable dots + active state for the vertical timeline
    const initTimeline = () => {
      const timeline = document.getElementById('experience-timeline');
      if (!timeline) return;

      const items = timeline.querySelectorAll('.timeline-item');
      const indicator = timeline.querySelector('.timeline-indicator');
      if (!items.length || !indicator) return;

      let currentIndex = 0;

      indicator.innerHTML = '';
      items.forEach((item, idx) => {
        const dot = document.createElement('span');
        dot.className = 'indicator-dot';
        dot.dataset.date = item.dataset.date || '';
        dot.title = item.dataset.date || '';
        dot.addEventListener('click', () => scrollToIndex(idx));
        indicator.appendChild(dot);
      });

      function updateDots() {
        indicator.querySelectorAll('.indicator-dot').forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
          // brief date pop on active
          if (i === currentIndex) {
            if (!d.classList.contains('show-date')) {
              d.classList.add('show-date');
              const timer = setTimeout(() => {
                d.classList.remove('show-date');
                d.dataset.timer = '';
              }, 1500);
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
        items[index].scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
        updateDots();
        updateActiveItem();
      }

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              currentIndex = Array.from(items).indexOf(entry.target);
              entry.target.classList.add('visible');
              updateDots();
              updateActiveItem();
            }
          });
        },
        { threshold: 0.6 }
      );

      items.forEach(item => observer.observe(item));

      // seed
      items[0]?.classList.add('visible');
      updateDots();
      updateActiveItem();
    };

    try { initTimeline(); } catch {}

    // reduced motion
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handler = () => setPrefersReducedMotion(!!mq.matches);
      handler();
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
      return () => {
        mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
      };
    } catch {}
  }, [prefersReducedMotion]);

  const jobs = useMemo(
    () => [
      {
        date: 'Jan 2023 – Present',
        role: 'Lead Developer',
        company: 'Storelx · NL, Canada',
        bullets: [
          'Architected and shipped a P2P storage marketplace (Node.js + React) from zero to 100+ active users with <200 ms median API latency.',
          'Split a monolith into targeted Express microservices; cut p95 response times by ~40% and simplified independent deploys.',
          'Redesigned MongoDB data model and indexes; reduced hot-path query time ~30% and write contention under peak load.',
          'Led a team of 3 engineers through two-week sprints; 95% on-time delivery across 10+ releases with tight QA gates.',
        ],
      },
      {
        date: 'Apr 2023 – Aug 2023',
        role: 'Data Science Intern',
        company: 'Union Group FZCO · Dubai, UAE',
        bullets: [
          'Built resilient ETL in Python/Pandas processing 20k+ daily transactions with 99.9% record-level accuracy and idempotent retries.',
          'Prototyped sales-forecasting models (scikit-learn) reaching ~85% MAPE improvement vs. baseline; productionized with drift checks.',
          'Delivered Plotly/Dash executive dashboards that cut monthly reporting time by ~75% and standardized KPIs across teams.',
        ],
      },
      {
        date: 'Jul 2022 – Oct 2022',
        role: 'Full-Stack Intern',
        company: 'Hoopoe Digital · Cairo, Egypt',
        bullets: [
          'Shipped a customer-tracking app used by 5+ malls, ingesting 20k+ daily visits with privacy-safe aggregation.',
          'Created REST APIs (Node/Express) sustaining 1k+ rpm at 99.9% uptime; added rate-limits and structured logging.',
          'Built a real-time analytics UI (React + D3) that visualized live occupancy and conversion from 10k+ events/day.',
          'Contributed to microservice boundaries and CI; boosted horizontal scalability by ~40% under promotional spikes.',
        ],
      },
      {
        date: 'Apr 2022 – Jul 2022',
        role: 'Data Science Intern',
        company: 'Union Group · Cairo, Egypt',
        bullets: [
          'Analyzed 5+ years of finance data (Python/SQL); identified cost drivers that enabled ~15% spend reduction YoY.',
          'Automated cleaning/validation pipelines for 10k+ rows/day at ~99% accuracy; added anomaly alerts for upstream issues.',
          'Shipped Power BI dashboards adopted by 50+ stakeholders; standardized definitions and cut ad-hoc requests by ~60%.',
          'Applied statistical methods to improve forecast accuracy by ~25%; documented 20+ processes to halve onboarding time.',
        ],
      },
    ],
    []
  );

  return (
    <section className="experience-section section-container fade-section" id="experience" aria-labelledby="experience-title">
      <h2 className="experience-title" id="experience-title">Professional Experience</h2>

      <div id="experience-timeline" className="vertical-timeline" role="list">
        <div className="timeline-indicator" aria-hidden="true"></div>

        <ul className="timeline-list">
          {jobs.map((job, i) => (
            <li key={i} className="timeline-item" data-date={job.date} role="listitem">
              <article className="timeline-card">
                <div className="timeline-card-date">{job.date}</div>
                <h3 className="timeline-card-role">{job.role}</h3>
                <div className="timeline-card-company">{job.company}</div>
                <div className="timeline-card-description">
                  <ul>
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
