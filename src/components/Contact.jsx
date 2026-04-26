const LINKS = [
  { label: 'Email', value: 'hello@ummukulsum.dev', href: 'mailto:hello@ummukulsum.dev' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ummukulsum', href: 'https://linkedin.com' },
  { label: 'GitHub', value: 'github.com/Ummukulsum', href: 'https://github.com/Ummukulsum' },
  { label: 'Portfolio', value: 'ummukulsum.dev', href: '#' },
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
              Have a project in mind?<br />
              <em style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic', color: 'var(--highlight)' }}>
                Let's make it real.
              </em>
            </h3>
            <p className="contact-text">
              I'm currently open to freelance projects and full-time opportunities. Whether you need
              a pixel-perfect landing page, a complex web application, or a thoughtful design system
              — I'd love to hear from you.
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
              <p><strong>Currently</strong><br />Open to remote & hybrid roles</p>
              <br />
              <p><strong>Response time</strong><br />Within 24 hours</p>
              <br />
              <p><strong>Languages</strong><br />English · Bahasa Malaysia</p>
            </div>

            <div className="stamp">
              Available for hire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
