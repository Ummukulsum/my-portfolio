import { useEffect, useState } from 'react';

const WORDS = ['interfaces.', 'experiences.', 'the future.', 'with intent.'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    const delay = deleting ? 50 : charIdx === word.length ? 1600 : 85;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % WORDS.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section className="hero" id="hero">
      <div className="container">
        {/* Masthead strip */}
        <div className="hero-masthead">
          <div>
            <p className="hero-issue mono">Vol. I — Portfolio 2025 — Kuala Lumpur, MY</p>
            <h1 className="display hero-h1">
              Crafting digital
              <br />
              <span className="line2 display-italic">
                {WORDS[wordIdx].slice(0, charIdx)}
                <span style={{ borderRight: '2px solid currentColor', marginLeft: 1 }}>&nbsp;</span>
              </span>
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 4 }}>Stack</p>
            <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', lineHeight: 1.8 }}>
              React · TypeScript<br />Node.js · Tailwind<br />Figma · PostgreSQL
            </p>
          </div>
        </div>

        {/* Sub-grid: bio + stats */}
        <div className="hero-sub-grid">
          <div>
            <p className="hero-bio">
              I'm a <strong>frontend developer & UI designer</strong> based in Malaysia, passionate
              about building clean, accessible, and delightful digital products. I care as much about
              how things look as how they work — and I obsess over the details between the two.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-filled">View my work</a>
              <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download CV ↗</a>
              <a href="#contact" className="btn btn-accent">Let's talk</a>
            </div>
          </div>

          <div className="hero-sidebar">
            <div className="hero-stat-row">
              {[
                { num: '2+', label: 'Years of experience' },
                { num: '12', label: 'Projects shipped' },
                { num: '8+', label: 'Technologies' },
              ].map(({ num, label }) => (
                <div className="hero-stat" key={label}>
                  <span className="hero-stat-num">{num}</span>
                  <span className="hero-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
