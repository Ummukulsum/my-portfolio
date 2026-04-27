import { useEffect, useRef, useState } from 'react';

const SKILL_GROUPS = [
  {
    label: 'Programming',
    skills: [
      { name: 'Python', pct: 85 },
      { name: 'R', pct: 78 },
      { name: 'C#', pct: 70 },
      { name: 'Java', pct: 65 },
    ],
  },
  {
    label: 'Automation & Tools',
    skills: [
      { name: 'Pabbly Connect', pct: 90 },
      { name: 'Google Apps Script', pct: 82 },
      { name: 'ManyChat', pct: 80 },
      { name: 'Git / GitHub', pct: 75 },
    ],
  },
  {
    label: 'Data & AI',
    skills: [
      { name: 'Data Analysis', pct: 80 },
      { name: 'Statistical Modelling', pct: 75 },
      { name: 'Machine Learning (basic)', pct: 65 },
      { name: 'Data Preprocessing', pct: 78 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section className="skills-section reveal" id="skills" ref={sectionRef}>
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
                {skills.map(({ name, pct }) => (
                  <div className="skill-item" key={name}>
                    <p className="skill-name">{name}</p>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: animated ? `${pct}%` : '0%' }}
                      />
                    </div>
                    <span className="skill-pct mono">{pct}%</span>
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