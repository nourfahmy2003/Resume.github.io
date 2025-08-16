const PROJECTS = [
  {
    title: "Storelx — P2P Storage Marketplace",
    location: "NL, Canada",
    date: "Jan 2023 – Present",
    description:
      "A peer-to-peer storage platform matching unused home space with renters. Microservices on Node/Express cut API latency 40%; tuned MongoDB indexes/schemas for +30% query speed. Built host onboarding & verification, availability calendars, bookings, Stripe payments/payouts, insurance tiers, dispute flows, and move-in scheduling. Led a 3-dev team delivering 95% on-time sprints; shipped observability + CI for safe releases.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Docker",
      "AWS",
    ],
    highlights: [
      "Microservices on Node/Express (−40% latency)",
      "MongoDB schema/index tuning (+30% queries)",
      "Host verification, bookings, payouts, insurance",
    ],
    ctas: [
      { label: "Visit Site", href: "#" },
    ],
  },
  {
    title: "Memory Game",
    location: "NL, Canada",
    date: "May 2024",
    description:
      "Interactive web-based memory game with React + Vite and CI/CD on Vercel. Custom hooks for state, snappy animations, responsive layout, and accessible controls. Designed for low input-latency and smooth 60fps card flips.",
    tags: ["React", "Vite", "JavaScript", "Vercel"],
    highlights: [
      "Hooks-based state and scoring",
      "Card flip/hover animations",
      "Vercel CI/CD deployment",
    ],
    ctas: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "CV Maker",
    location: "NL, Canada",
    date: "Apr 2024",
    description:
      "Full-stack resume builder with PDF export, drag-and-drop sections, live preview, and multiple templates/themes. Optimized render path for ~40% faster template switching.",
    tags: ["React", "react-pdf", "react-beautiful-dnd", "CSS/Tailwind"],
    highlights: [
      "1-click PDF via react-pdf/jsPDF",
      "DnD reordering, autosave, validation",
      "Theme tokens & template system",
    ],
    ctas: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "JobDone — Marketplace for Fixers & Problemers",
    location: "NL, Canada",
    date: "Apr 2024 – Present",
    description:
      "Two-sided marketplace: customers post jobs, vetted fixers submit offers with pricing & availability. Real-time chat, ratings/reviews, Stripe recurring payments, earnings dashboards, selfie/doc verification, and a Nearby Jobs map.",
    tags: [
      "Flutter",
      "React",
      "Firebase Auth",
      "Firestore",
      "Stripe",
      "Google Maps",
    ],
    highlights: [
      "Role-aware onboarding + secure verification",
      "Offer → accept → milestone flow with notifications",
      "Realtime chat, payouts, and analytics dashboards",
    ],
    ctas: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "World Population & Satellite Data Analysis",
    location: "NL, Canada",
    date: "May 2025",
    description:
      "End-to-end analytics project combining satellite catalog data with 2023 population statistics. Built ETL in Pandas, performed EDA and modeling, and delivered two clear notebooks: an exploratory workflow and a publication-style analysis. Visuals include time series, orbit distributions, choropleths, waffle charts, and bar-race animations. Cut reporting time 75% with cached, reproducible pipelines.",
    tags: ["Python", "Pandas", "Plotly", "Seaborn", "Jupyter"],
    highlights: [
      "Cleaned/normalized multi-source datasets",
      "Country-level per-capita insights",
      "Notebook deliverables ready for stakeholders",
    ],
    ctas: [{ label: "View Notebook", href: "#" }],
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

function ProjectsGrid({ limit }) {
  const list = typeof limit === "number" ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {list.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}

function renderProjects(limit) {
  const rootEl = document.getElementById("projects-root");
  if (!rootEl || typeof React === "undefined" || typeof ReactDOM === "undefined") return;
  const props = {};
  if (typeof limit === "number") props.limit = limit;
  ReactDOM.createRoot(rootEl).render(<ProjectsGrid {...props} />);
}

function initProjects() {
  const section = document.getElementById("projects");
  if (!section || typeof React === "undefined" || typeof ReactDOM === "undefined") return;
  const rootEl = document.getElementById("projects-root");
  const seeMore = section.querySelector(".see-more");
  const initialLimit =
    rootEl && rootEl.dataset.limit
      ? parseInt(rootEl.dataset.limit, 10)
      : undefined;
  try {
    renderProjects(initialLimit);
  } catch (err) {
    console.error(err);
    return;
  }
  if (seeMore) {
    seeMore.addEventListener("click", (e) => {
      e.preventDefault();
      renderProjects();
      seeMore.remove();
    });
  }
}

