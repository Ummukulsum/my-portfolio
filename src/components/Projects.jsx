import { useState } from 'react';

const PROJECTS = [
  {
    title: 'Automated Purchase Order System',
    desc: 'Modular Purchase Order Management System using OOP principles (encapsulation, inheritance, polymorphism) to streamline procurement workflows. Features role-based access control across Admin, Sales, Purchase, Inventory, and Finance modules with file-based persistence for simplified deployment.',
    tags: ['Python', 'OOP', 'File I/O', 'Role-Based Access'],
    cat: 'systems',
    demo: null,
    code: '#',
  },
  {
    title: 'Workflow Automation System',
    desc: 'Event-driven automation pipeline integrating form triggers, Google Sheets, Gmail, and WhatsApp API for seamless multi-channel communication. Built with conditional filtering, automated messaging, and real-time status tracking via Google Apps Script. Reduced administrative workload by 45%.',
    tags: ['Pabbly', 'Google Apps Script', 'WhatsApp API', 'Google Sheets'],
    cat: 'automation',
    demo: null,
    code: '#',
  },
  {
    title: 'Customer Satisfaction Research — Retail',
    desc: 'Data preprocessing, feature engineering, and imputation (kNN, logistic regression, hot deck) using R on structured retail datasets. Applied hypothesis testing, chi-square analysis, and logistic regression to identify key factors influencing customer satisfaction.',
    tags: ['R', 'Statistical Modelling', 'Logistic Regression', 'Data Preprocessing'],
    cat: 'data',
    demo: null,
    code: '#',
  },
  {
    title: 'KiraKira: SPM Maths Platform',
    desc: 'Gen-Z friendly web platform for SPM Mathematics with missions, streaks, and analytics layered on top of core lessons. Co-designed site architecture and responsive public pages. Conducted user research with SPM students to iterate on wireframes.',
    tags: ['HTML', 'CSS', 'C#', 'MySQL', 'Educational UX'],
    cat: 'web',
    demo: null,
    code: '#',
  },
  {
    title: "Lumi's Adventure",
    desc: '2D narrative platformer built in Pygame where Lumi crosses dreamlike environments. Built reusable tilemaps, tuned jump physics, layered parallax backgrounds, and scripted narrative beats. Custom toolchain enables fast level drops.',
    tags: ['Python', 'Pygame', 'Pixel Art', 'Game Design'],
    cat: 'systems',
    demo: null,
    code: '#',
  },
  {
    title: 'AI Skincare Research Proposal',
    desc: 'Literature review and research proposal combining ConvLSTM architectures with user diaries to personalise skincare recommendations. Mapped the data pipeline, fairness considerations, and evaluation plan — highlighting how temporal modelling uncovers seasonal patterns.',
    tags: ['ConvLSTM', 'Research Writing', 'Data Ethics', 'AI'],
    cat: 'data',
    demo: null,
    code: '#',
  },
];

const CATS = [
  { key: 'all', label: 'All' },
  { key: 'automation', label: 'Automation' },
  { key: 'data', label: 'Data & AI' },
  { key: 'web', label: 'Web' },
  { key: 'systems', label: 'Systems' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = PROJECTS.filter((p) => filter === 'all' || p.cat === filter);

  return (
    <section className="projects-section reveal" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-filter">
          {CATS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn${filter === key ? ' active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {visible.map((p, i) => (
            <div className="project-row" key={p.title}>
              <span className="display-italic project-num">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {p.demo && (
                  <a className="project-link-btn" href={p.demo} target="_blank" rel="noopener noreferrer">
                    Live ↗
                  </a>
                )}
                {p.code && p.code !== '#' && (
                  <a className="project-link-btn" href={p.code} target="_blank" rel="noopener noreferrer">
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}