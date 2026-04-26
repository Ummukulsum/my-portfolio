const EXPERIENCE = [
  {
    date: '2024 — Present',
    role: 'Frontend Developer',
    company: 'Tech Startup Co.',
    desc: 'Leading the frontend architecture for a B2B SaaS platform serving 10k+ users. Migrated codebase from JavaScript to TypeScript, reducing production bugs by 40%.',
  },
  {
    date: '2022 — 2024',
    role: 'Junior Web Developer',
    company: 'Digital Agency KL',
    desc: 'Built responsive websites and web applications for 20+ clients across retail, healthcare, and finance. Worked closely with designers in Figma end-to-end.',
  },
  {
    date: '2021 — 2022',
    role: 'Freelance Developer',
    company: 'Self-employed',
    desc: 'Delivered custom websites and landing pages for SMEs. Managed full client lifecycles from scoping to launch, achieving 100% on-time delivery.',
  },
  {
    date: '2019 — 2021',
    role: 'BSc Computer Science',
    company: 'Universiti Malaya',
    desc: 'Graduated with honours. Focused on software engineering and HCI. Final year project: an AI-powered study tool that won the faculty innovation award.',
  },
];

export default function Experience() {
  return (
    <section className="experience-section reveal" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-grid">
          {EXPERIENCE.map((e) => (
            <div className="exp-item" key={e.date}>
              <p className="exp-date mono">{e.date}</p>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-company">{e.company}</p>
              <p className="exp-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
