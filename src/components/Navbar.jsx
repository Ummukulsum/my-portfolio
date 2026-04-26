import { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          Ummukul<em>sum</em>
        </a>

        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? 'active' : ''}
                onClick={() => setActive(href.slice(1))}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="availability-pill">Open to work</div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}
