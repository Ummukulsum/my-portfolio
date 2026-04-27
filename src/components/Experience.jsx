const EXPERIENCE = [
  {
    date: 'Jan 2026 — April 2026',
    role: 'AI Automation and Chatbot Intern',
    company: 'CAD Training Centre',
    desc: 'Built workflow automation in Pabbly integrating Unbounce and Jotform, cutting administrative workload by 45%. Designed and tested course-specific chatbots for registered and past students. Set up the official WhatsApp API through Meta Business Suite, Meta Developer, and Wabot — including access token configuration and system connectivity. Developed ManyChat workflows for Facebook and coordinated with international teams including Pabbly India.',
  },
  {
    date: 'Oct 2024 — Dec 2025',
    role: 'Peer Mentor',
    company: 'APU Maths Clinic, Asia Pacific University',
    desc: 'Supported students with complex mathematical concepts through one-on-one mentoring, assignment reviews, and goal-setting. Facilitated peer-to-peer conversations to build confidence and open communication. Helped mentees raise their grades from failing to B- within two months.',
  },
  {
    date: '2024 — Present',
    role: 'Bachelor of Computer Science (Hons) in Artificial Intelligence',
    company: 'Asia Pacific University, Kuala Lumpur',
    desc: 'Vice Chancellor\'s List (2024). CGPA: 3.66. Focused on AI, machine learning, algorithm development, and data-driven systems. Currently exploring supervised learning with Scikit-learn and AI agent development.',
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
