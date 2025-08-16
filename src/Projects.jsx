import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    title: "Memory Game",
    location: "NL, Canada",
    date: "May 2024",
    description: "An interactive, web-based memory game built with React and Vite, designed to deliver a smooth, engaging user experience across desktop and mobile. The project emphasizes performance optimization, modern UI/UX practices, and scalable deployment.",
    tags: ['React','Vite','JavaScript','Vercel'],
    highlights: [
      "Card-flipping game with scoring, timer, and difficulty scaling",
      "Custom React hooks for state management",
      "CI/CD deployment pipeline via Vercel",
      "60fps animations and optimized rendering",
      "Fully responsive design",
      "Modular architecture for extensibility"
    ],
    cta: { type: 'live', label: 'Live Demo', href: 'https://card-memory-game-gold.vercel.app/' }
  },
  {
    title: "CV Maker (AI-Powered Resume Builder)",
    location: "NL, Canada",
    date: "April 2024",
    description: "A full-stack, AI-assisted resume builder designed for professionals and students. The platform enables users to create, edit, and export resumes with intelligent suggestions, drag-and-drop customization, and multi-template support.",
    tags: ['React','react-pdf','react-beautiful-dnd','CSS','AI'],
    highlights: [
      "AI-assisted phrasing and keyword suggestions",
      "Full-stack builder with live editing and PDF export",
      "Drag-and-drop section reordering with react-beautiful-dnd",
      "Auto-save with local and cloud storage",
      "Multi-template designs with optimized performance",
      "40% faster render times and pixel-perfect PDFs"
    ],
    cta: { type: 'live', label: 'Live Demo', href: 'https://cv-builder-noureldeen.vercel.app/' }
  },
  {
    title: "JobDone",
    location: "NL, Canada",
    date: "April 2024",
    description: "A Flutter marketplace app where customers post jobs and verified fixers submit offers. Built with Firebase for auth, real-time chat, and scalable data; includes a Google Maps experience and role-based dashboards.",
    tags: ['Flutter','Dart','Firebase','Google Maps'],
    highlights: [
      "Post/manage jobs with images, budgets, date & time windows",
      "Fixers submit offers with pricing and availability",
      "Real-time 1:1 messaging",
      "Map view of nearby jobs (bottom-sheet details)",
      "Document & selfie verification"
    ],
    cta: { type: 'video', label: 'Video demo available' }
  },
  {
    title: "World Population & Satellite Data Analysis",
    location: "NL, Canada",
    date: "May 2025",
    description: "A comprehensive data analytics project leveraging global satellite catalog data and 2023 world population statistics to uncover trends in space activity. Delivered as two Jupyter notebooks showcasing a full exploratory workflow and a final polished analysis.",
    tags: ['Python','Pandas','Plotly','Matplotlib','Seaborn','Jupyter'],
    highlights: [
      "Designed and executed an end-to-end data analysis pipeline for satellite activity",
      "Preprocessed and normalized satellite and population datasets for consistency",
      "Built advanced visualizations (time series, orbit distribution, waffle, circle-packing)",
      "Conducted per-capita analysis to highlight country-level contributions relative to population size",
      "Produced both exploratory (EDA) and presentation-ready deliverables with actionable insights"
    ],
    cta: { type: 'notebooks', label: 'Delivered as Jupyter Notebooks — no live demo' }
  }
];

function ProjectCard({ title, location, date, description, tags, highlights, cta, onVideo }) {
  return (
    <div className="flex flex-col h-full p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow transition-transform brightness-90 hover:brightness-100 active:brightness-110 hover:-translate-y-1 active:translate-y-0">
      <div className="flex items-start justify-between gap-3 min-h-[56px]">
        <h3 className="text-xl font-semibold leading-tight max-w-[70%] break-words">{title}</h3>
        <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm whitespace-nowrap leading-none">{date}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-400">{location}</p>
      <p className="mt-3 text-zinc-200 line-clamp-3">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => (
          <li key={t} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-sm">{t}</li>
        ))}
      </ul>
      <ul className="mt-4 space-y-1 text-zinc-200 text-sm">
        {highlights.map((h,i) => (
          <li key={i} className="list-disc ml-5">{h}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <div className="mt-5">
          {cta.type === 'live' && (
            <a className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" href={cta.href} target="_blank" rel="noopener noreferrer" aria-label={cta.label}>{cta.label}</a>
          )}
          {cta.type === 'video' && (
            cta.href ? (
              <a className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" href={cta.href} aria-label={cta.label}>{cta.label}</a>
            ) : (
              <button type="button" className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" aria-haspopup="dialog" aria-controls="video-modal" aria-label={cta.label} onClick={onVideo}>{cta.label}</button>
            )
          )}
          {cta.type === 'notebooks' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm">{cta.label}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showVideo, setShowVideo] = useState(false);
  const list = PROJECTS.slice(0, 2);
  return (
    <section className="projects-section fade-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-header-row">
            <h2>My Projects</h2>
            <a href="/projects" className="see-more">See more →</a>
          </div>
          <p>Explore some of the projects I've built</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {list.map(p => <ProjectCard key={p.title} {...p} onVideo={() => setShowVideo(true)} />)}
        </div>
      </div>
      {showVideo && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
          <div className="modal-content">
            <h3 id="video-modal-title">No public live demo</h3>
            <p>Contact for private video link.</p>
            <button type="button" className="modal-close" aria-label="Close" onClick={() => setShowVideo(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
