import React, { useState } from 'https://esm.sh/react@18';

const PROJECTS = [
  // {
  //   title: "Storelx — P2P Storage Marketplace",
  //   location: "NL, Canada",
  //   date: "Jan 2023 – Present",
  //   description:
  //     "A peer-to-peer storage platform matching unused home space with renters. Microservices on Node/Express cut API latency 40%; tuned MongoDB indexes/schemas for +30% query speed. Built host onboarding & verification, availability calendars, bookings, Stripe payments/payouts, insurance tiers, dispute flows, and move-in scheduling. Led a 3-dev team delivering 95% on-time sprints; shipped observability + CI for safe releases.",
  //   tags: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "Stripe",
  //     "Docker",
  //     "AWS",
  //   ],
  //   highlights: [
  //     "Microservices on Node/Express (−40% latency)",
  //     "MongoDB schema/index tuning (+30% queries)",
  //     "Host verification, bookings, payouts, insurance",
  //   ],
  //   ctas: [
  //     { label: "Visit Site", href: "#" },
  //   ],
  // },
   {
    title: "MarketPulse — AI Stock Analysis Platform",
    location: "NL, Canada",
    date: "AUG 2025",
    description:
      "Full-stack AI platform delivering real-time stock, ETF, and crypto insights. Combines live price feeds, LSTM-based predictions, YOLOv8 candlestick pattern detection, and sentiment analysis of financial news/filings. Frontend runs on Vercel, backend orchestrated on AWS EC2 with FastAPI, Papermill pipelines, and HuggingFace models.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Recharts",
      "FastAPI",
      "AWS EC2",
      "YOLOv8",
      "LSTM",
      "Vercel",
    ],
    highlights: [
      "Responsive dashboard with multi-range interactive charts (1m → 5y)",
      "Custom LSTM models retrained weekly on 90-day windows for calibrated forecasts",
      "YOLOv8 image pipeline detecting technical chart patterns in candlesticks",
      "Deployed backend on EC2 (Nginx + Gunicorn) and frontend on Vercel with CI/CD",
      "Integrated financial news sentiment classifier (DistilRoBERTa, finetuned on finance)",
    ],
    ctas: [{ label: "Live Demo", href: "https://v0-no-content-phi-two.vercel.app/" }],
  },
  {
    title: "Memory Game",
    location: "NL, Canada",
    date: "May 2024",
    description:
      "Interactive browser-based memory game engineered for performance and accessibility. Features smooth 60fps animations, mobile-first design, and custom React hooks for state and scoring logic. CI/CD handled by Vercel for frictionless deployment.",
    tags: ["React", "Vite", "JavaScript", "Vercel"],
    highlights: [
      "Built custom state hooks to manage scoring, streaks, and difficulty",
      "Optimized animations (CSS/Framer) for latency-free 60fps card flips",
      "Responsive grid layout and ARIA-friendly controls for accessibility",
      "Automated deployments via Vercel with instant previews",
    ],
    ctas: [{ label: "Play Game", href: "https://card-memory-game-gold.vercel.app/" }],
  },
  {
    title: "CV Maker — Interactive Resume Builder",
    location: "NL, Canada",
    date: "Apr 2024",
    description:
      "Full-stack resume builder with live preview, drag-and-drop sections, and multiple export-ready themes. Achieved ~40% faster template switching with optimized render paths. Export resumes directly to PDF with a single click.",
    tags: ["React", "react-pdf", "react-beautiful-dnd", "TailwindCSS"],
    highlights: [
      "Implemented real-time PDF export via react-pdf + jsPDF",
      "Drag-and-drop reordering with autosave, validation, and template persistence",
      "Theme token system powering light/dark and multi-template options",
      "Performance tuned for instant preview across complex layouts",
    ],
    ctas: [{ label: "Live Demo", href: "https://cv-builder-henna-ten.vercel.app/" }],
  },
  {
    title: "JobDone — Marketplace for Fixers & Problemers",
    location: "NL, Canada",
    date: "Apr 2025",
    description:
      "Two-sided marketplace where customers post problems and vetted fixers submit offers with pricing and availability. Includes role-aware onboarding, real-time chat, reviews, and Stripe-powered recurring payments. Features analytics dashboards and a Nearby Jobs map.",
    tags: [
      "Flutter",
      "React",
      "Firebase Auth",
      "Firestore",
      "Stripe",
      "Google Maps",
    ],
    highlights: [
      "Designed onboarding with selfie/ID verification and role-based flows",
      "Implemented full offer → accept → milestone pipeline with notifications",
      "Real-time chat with secure media upload and read receipts",
      "Stripe Connect recurring payments, payouts, and earnings dashboards",
      "Geo-enabled Nearby Jobs map with Firestore queries optimized for scale",
    ],
    ctas: [{ label: "View on GitHub", href: "https://github.com/nourfahmy2003/Job-Done" }],
  },
  {
    title: "World Population & Satellite Data Analysis",
    location: "NL, Canada",
    date: "May 2025",
    description:
      "Data analytics project merging 2023 global population statistics with satellite catalog data. Delivered reproducible ETL workflows, interactive EDA, and publication-quality notebooks. Visualized trends across time, orbits, and geography to uncover per-capita insights.",
    tags: ["Python", "Pandas", "Plotly", "Seaborn", "Jupyter"],
    highlights: [
      "Engineered ETL pipelines in Pandas with caching for 75% faster reporting",
      "Cleaned and normalized multi-source datasets for consistency",
      "Produced interactive dashboards (choropleths, orbit distributions, waffle charts)",
      "Developed both exploratory and publication-style analysis notebooks",
    ],
    ctas: [{ label: "View on GitHub", href: "https://github.com/nourfahmy2003/Data-Science-project" }],
  },
];

function ProjectCard({
  title,
  location,
  date,
  description,
  tags,
  highlights,
  ctas = [],
}) {
  return (
    <div className="flex flex-col h-full p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow transition-transform brightness-90 hover:brightness-100 active:brightness-110 hover:-translate-y-1 active:translate-y-0">
      <div className="flex items-start justify-between gap-3 min-h-[56px]">
        <h3 className="text-xl font-semibold leading-tight max-w-[70%] break-words">{title}</h3>
        <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm whitespace-nowrap leading-none">{date}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-400">{location}</p>
      <p className="mt-3 text-zinc-200 line-clamp-3">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-sm">
            {t}
          </li>
        ))}
      </ul>
      <ul className="mt-4 space-y-1 text-zinc-200 text-sm">
        {highlights.map((h, i) => (
          <li key={i} className="list-disc ml-5">
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <div className="mt-5 flex flex-wrap gap-2">
          {ctas.map((cta, i) => (
            <a
              key={i}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsGrid({ list }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {list.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <section className="projects-section fade-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-header-row">
            <h2>My Projects</h2>
            {!expanded && (
              <button type="button" className="see-more" onClick={() => setExpanded(true)}>
                See more →
              </button>
            )}
          </div>
          <p>Explore some of the projects I've built</p>
        </div>
        <div id="projects-root" data-limit="2">
          <ProjectsGrid list={visible} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
