import { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'TypeScript', pct: 85 },
  { name: 'CSS / Tailwind', pct: 92 },
  { name: 'Figma & Design', pct: 78 },
  { name: 'Node.js', pct: 75 },
  { name: 'PostgreSQL', pct: 68 },
  { name: 'Docker', pct: 60 },
  { name: 'Testing (Vitest)', pct: 65 },
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

        <div className="skills-grid">
          {SKILLS.map(({ name, pct }) => (
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
    </section>
  );
}
