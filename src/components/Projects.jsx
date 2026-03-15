import { useEffect, useRef } from "react";

const projects = [
  {
    name: "Pantry Management System",
    desc: "A full-stack web application for managing pantry inventory and user item requests. Built with a clean UI and full CRUD operations backed by SQL.",
    tags: ["React.js", "Express.js", "SQL", "Bootstrap"],
    github: "https://github.com/Rajavignesh2001",
    demo: null,
  },
  {
    name: "E-Learning Platform",
    desc: "An e-learning web application for organizing and delivering online course content with an interactive frontend experience.",
    tags: ["JavaScript", "CSS", "Express.js", "HTML"],
    github: "https://github.com/Rajavignesh2001",
    demo: null,
  },
  {
    name: "OGB Banking Module",
    desc: "Developed registration, service & deposit modules for Odisha Grameen Bank, integrated with the core banking system for secure fund transfers.",
    tags: ["Java", "Spring Boot", "JavaScript", "jQuery"],
    github: null,
    demo: null,
    professional: true,
  },
  {
    name: "My Portfolio",
    desc: "This portfolio website — built with React.js, hosted on GitHub Pages, with EmailJS-powered contact form for direct communication.",
    tags: ["React.js", "EmailJS", "GitHub Pages", "CSS"],
    github: "https://github.com/Rajavignesh2001/MyPortfolio",
    demo: "https://Rajavignesh2001.github.io/MyPortfolio",
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-header">
        <div>
          <div className="section-label">Projects</div>
          <div className="section-title">Things I've Built</div>
        </div>
        <a
          href="https://github.com/Rajavignesh2001"
          target="_blank"
          rel="noreferrer"
          className="projects-link"
        >
          All on GitHub →
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className="project-card reveal"
            key={p.name}
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
          >
            <div className="project-num">
              {p.professional ? "● Professional" : `0${i + 1}`}
            </div>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  ⌥ GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  ↗ Live Demo
                </a>
              )}
              {!p.github && !p.demo && (
                <span style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>
                  🔒 Private / Professional
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
