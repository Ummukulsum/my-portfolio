const SKILL_GROUPS = [
  {
    label: 'Programming',
    skills: [
      'Python',
      'R',
      'C#',
      'Java',
    ],
  },
  {
    label: 'Automation & Tools',
    skills: [
      'Pabbly Connect',
      'Google Apps Script',
      'ManyChat',
      'Git / GitHub',
    ],
  },
  {
    label: 'Data & AI',
    skills: [
      'Data Analysis',
      'Statistical Modelling',
      'Machine Learning (basic)',
      'Data Preprocessing',
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section reveal" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">Skills &amp; tools</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
          {SKILL_GROUPS.map(({ label, skills }) => (
            <div key={label}>
              <p className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '1rem' }}>{label}</p>
              <div className="skills-grid" style={{ gridTemplateColumns: '1fr' }}>
                {skills.map((name) => (
                  <div className="skill-item" key={name}>
                    <p className="skill-name">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}