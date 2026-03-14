import { useEffect, useRef } from "react";

const skills = [
  { icon: "⚛️", name: "React.js", type: "Frontend", level: 85 },
  { icon: "☕", name: "Java", type: "Backend", level: 85 },
  { icon: "🍃", name: "Spring Boot", type: "Backend", level: 80 },
  { icon: "🟨", name: "JavaScript (ES6)", type: "Language", level: 88 },
  { icon: "🎨", name: "HTML & CSS", type: "Frontend", level: 90 },
  { icon: "🔷", name: "Bootstrap", type: "Frontend", level: 80 },
  { icon: "🔗", name: "REST APIs", type: "Backend", level: 82 },
  { icon: "🗄️", name: "MySQL / SQL", type: "Database", level: 75 },
  { icon: "🐙", name: "Git & GitHub", type: "Version Control", level: 85 },
  { icon: "🧪", name: "SIT / UAT Testing", type: "Testing & QA", level: 80 },
  { icon: "💻", name: "Express.js", type: "Backend", level: 70 },
  { icon: "📦", name: "jQuery", type: "Frontend", level: 78 },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target
              .querySelectorAll(".skill-bar-fill")
              .forEach((bar) => bar.classList.add("animated"));
          }
        });
      },
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-header">
        <div className="section-label">Skills</div>
        <div className="section-title">What I Work With</div>
        <p className="section-sub">
          A curated set of tools and technologies I've used in production across
          banking web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div
            className="skill-card reveal"
            key={s.name}
            style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
          >
            <span className="skill-icon">{s.icon}</span>
            <div className="skill-name">{s.name}</div>
            <div className="skill-type">{s.type}</div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ "--skill-width": `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
