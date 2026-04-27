const LINKS = [
  { label: 'GitHub', value: 'github.com/Ummukulsum', href: 'https://github.com/Ummukulsum' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ummukulsum', href: 'https://linkedin.com/in/ummukulsum' },
];

export default function Contact() {
  return (
    <section className="contact-section reveal" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Let's collaborate</p>
          <h2 className="section-title">Get in touch</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-left">
            <h3 className="contact-headline">
              Have something to build?<br />
              <em style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', color: 'var(--highlight)' }}>
                Let's make it real.
              </em>
            </h3>
            <p className="contact-text">
              I'm currently open to internship opportunities, entry level job opportunities, freelance projects, and collaborations in AI, automation, and data.
              Whether you're working on an interesting problem or just want to connect. I'd love to hear from you!
            </p>

            <nav className="contact-links" aria-label="Contact links">
              {LINKS.map(({ label, value, href }) => (
                <a className="contact-link-row" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="contact-link-name mono">{label}</span>
                  <span className="contact-link-value mono">{value}</span>
                  <span className="contact-link-arrow">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="contact-right">
            <div className="colophon">
              <p><strong>Based in</strong><br />Kuala Lumpur, Malaysia</p>
              <br />
              <p><strong>Currently</strong><br />BCs Computer Science (AI) @ APU</p>
              <br />
              <p><strong>Interests</strong><br />Machine Learning · Intelligent Automation · Data Science</p>
              <br />
              <p><strong>Beyond tech</strong><br />Video editing · Reading · Creative thinking</p>
            </div>

            <div className="stamp">
              Open to opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}