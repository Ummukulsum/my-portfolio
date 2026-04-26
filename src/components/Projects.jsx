import { useState } from 'react';

const PROJECTS = [
  {
    title: 'E-commerce Platform',
    desc: 'Full-stack shopping experience with Stripe payments, real-time inventory management, and an admin dashboard built for scale.',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    cat: 'fullstack',
    demo: '#',
    code: '#',
  },
  {
    title: 'Design System & Component Library',
    desc: 'Reusable component library documented in Storybook with automated accessibility testing and design token management.',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS'],
    cat: 'frontend',
    demo: '#',
    code: '#',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time data visualisation dashboard with interactive D3 charts, date-range filtering, and CSV export functionality.',
    tags: ['Next.js', 'D3.js', 'Prisma', 'TailwindCSS'],
    cat: 'fullstack',
    demo: '#',
    code: '#',
  },
  {
    title: 'REST API Microservice',
    desc: 'Production-grade REST API with JWT authentication, rate limiting, Redis caching, and fully documented Swagger endpoints.',
    tags: ['Node.js', 'Redis', 'Docker', 'Swagger'],
    cat: 'backend',
    demo: null,
    code: '#',
  },
  {
    title: 'Portfolio Builder App',
    desc: 'Drag-and-drop portfolio generator with live preview, custom theming, and one-click Vercel deployment.',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    cat: 'frontend',
    demo: '#',
    code: '#',
  },
  {
    title: 'Real-time Chat Application',
    desc: 'Messaging app with WebSocket support, read receipts, typing indicators, and file-sharing via AWS S3.',
    tags: ['Socket.io', 'React', 'MongoDB', 'AWS S3'],
    cat: 'fullstack',
    demo: '#',
    code: '#',
  },
];

const CATS = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'backend', label: 'Backend' },
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
                <a className="project-link-btn" href={p.code} target="_blank" rel="noopener noreferrer">
                  Code ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
