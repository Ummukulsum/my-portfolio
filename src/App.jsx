import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { projects } from "./data/projects";
import kulsum1 from "./images/20240805_140641.jpg";
import kulsum2 from "./images/JZ-2105.JPG";
import "./App.css";

const featuredProjects = projects.slice(0, 2);

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "dark";
  }
  return "dark";
};

function BackButton({ label = "Go Back" }) {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn ghost small back-button" onClick={() => navigate(-1)}>
      {label}
    </button>
  );
}

function LandingPage() {
  return (
    <>
      <header className="hero">
        <p className="tag">AI student | Builder | Curious mind</p>
        <h1>Hi, I&apos;m Kulsum</h1>
        <p className="subtitle">
          BSc (Hons) Computer Science (Artificial Intelligence) student at Asia Pacific University, building things at the intersection of AI, education, and games.
        </p>

        <div className="hero-links">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/ummu-kulsum-mahmud-bb56a2212/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">in</span>
            <span>LinkedIn</span>
          </a>
          <a
            className="icon-link"
            href="https://github.com/Ummukulsum"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">GH</span>
            <span>GitHub</span>
          </a>
        </div>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View my projects
          </Link>
          <a href="mailto:ummukulsummahmud@gmail.com" className="btn ghost">
            Contact me
          </a>
        </div>
      </header>

      <section id="about">
        <h1>About Me</h1>
        <div className="about-layout">
          <div className="about-text">
            <p>
              I&apos;ve always been in love with maths and physics &ndash; my favourite mathematician is <b>Srinivasa Ramanujan</b>, and my favourite physicist is <b>Nikola Tesla</b> (I&apos;m obsessed
              with the mystery around him and his inventions). That love for mathematical thinking
              naturally pulled me towards <b>Artificial Intelligence</b>, where I get to mix logic, curiosity,
              and creativity in my work.
            </p>
            <p>
              Outside of code, I&apos;m powered by <b>fat, chubby cats</b> (my ultimate weakness), <b>books</b>,
              and <b>good conversations</b>. I read a lot of fiction and romance, and my guilty pleasure is
              self-help books &ndash; <i>even if I joke that just reading them doesn&apos;t magically fix life.</i> One
              book that genuinely changed my perspective is <b>The Courage to Be Disliked</b>. My all-time
              favourite movie is <b>Interstellar</b>; the first time i watched it, i fell asleep bored as i was just an impatient 11 year old; but the second time I watched it, everything from the theory
              to the soundtrack and cinematography completely blew my mind.
            </p>
            <p>
              I explore my creativity through <i>makeup and fashion</i>, and I love making silly TikToks with my friends, cracking jokes, and laughing until my cheeks hurt. I didn&apos;t grow up
              coding &quot;since I was 5,&quot; but I really believe that <b>coding with AI as a partner</b> has opened up
              a new world of opportunities: I can learn, build, and debug more mindfully instead of being
              limited by how long I&apos;ve been in the game.
            </p>
            <p>
              Some of my favourite moments are deep discussions with friends that stretch how I see
              the world, plus simple joys like riding bicycles and catching the sunsets at the beach.
              All of that &ndash; the maths brain, the creative side, and the soft, reflective side &ndash; feeds
              back into how I design, code, and collaborate.
            </p>
            </div>
          <div className="about-photos">
            <img
              src={kulsum1}
              alt="Portrait placeholder one"
            />
            <img
              src={kulsum2}
              alt="Portrait placeholder two"
            />
          </div>
        </div>
        <div className="pill-row">
          <span className="pill">Python</span>
          <span className="pill">C#</span>
          <span className="pill">JavaScript / React</span>
          <span className="pill">SQL</span>
          <span className="pill">Machine Learning</span>
        </div>
      </section>

      <section className="projects-preview">
        <h2>Project Preview</h2>
        <p className="subtitle">
          A quick peek at what I&apos;ve been building. Dive into the projects page for the full
          stories, prototypes, and learnings.
        </p>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="card preview-card">
              <video
                src={project.previewVideo}
                className="preview-media"
                autoPlay
                loop
                muted
                playsInline
                poster={project.coverImage}
              >
                Your browser does not support the video tag.
              </video>
              <div className="preview-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.id}`} className="btn ghost small">
                  See details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="cta-row">
          <Link to="/projects" className="btn primary">
            Browse all projects
          </Link>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <section className="projects-page">
      <BackButton label="Go Back" />
      <h1>Projects</h1>
      <p className="subtitle">
        Case studies that blend AI curiosity with playful, human-centered UX.
      </p>

      <div className="card-grid project-list">
        {projects.map((project) => (
          <article key={project.id} className="card project-card">
            <video
              src={project.previewVideo}
              className="preview-media"
              autoPlay
              loop
              muted
              playsInline
              poster={project.coverImage}
            >
              Your browser does not support the video tag.
            </video>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="pill-row">
                {project.technologies.map((tech) => (
                  <span className="pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`} className="btn primary">
                View project
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="project-detail">
        <p className="subtitle">Project not found.</p>
        <BackButton label="Go Back to projects" />
      </section>
    );
  }

  return (
    <article className="project-detail">
      <BackButton label="Go Back" />
      <h1>{project.title}</h1>
      <p className="subtitle">{project.description}</p>

      {project.previewVideo ? (
        <video
          src={project.previewVideo}
          className="detail-video"
          controls
          autoPlay
          muted
          loop
          playsInline
          poster={project.coverImage}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={project.gallery[0]}
          alt={`${project.title} hero`}
          className="detail-hero"
        />
      )}

      <div className="detail-meta">
        <div>
          <h3>Purpose</h3>
          <p>{project.impact}</p>
        </div>
        <div>
          <h3>Stack</h3>
          <div className="pill-row">
            {project.technologies.map((tech) => (
              <span className="pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h3>Gallery</h3>
      <div className="project-gallery">
        {project.gallery.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} view ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>

      {project.documentUrl && (
        <div className="document-viewer">
          <h3>Read the paper</h3>
          <p className="subtitle">
            Flip through the proposal directly on the site or open it in a new tab.
          </p>
          <iframe
            title={`${project.title} PDF preview`}
            src={project.documentUrl}
            className="document-frame"
          />
          <a className="btn ghost small" href={project.documentUrl} target="_blank" rel="noreferrer">
            Open full PDF
          </a>
        </div>
      )}
    </article>
  );
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <div className="theme-toggle-wrapper">
        <button
          type="button"
          className="theme-toggle btn ghost small"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? "\u2600" : "\u263E"}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>

      <footer className="footer">
        <p> © {new Date().getFullYear()} Ummu Kulsum Mahmud | Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
