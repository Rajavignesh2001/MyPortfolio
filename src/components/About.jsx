import { useEffect, useRef } from "react";

const experience = [
  {
    date: "Sep 2025\nJan 2026",
    role: "Full Stack Developer",
    company: "i-exceed Technologies — Bandhan Bank",
    desc: "CR development, implemented new features per business requirements. Resolved code smells via SonarQube across Admin, Onboarding, and Loan applications.",
  },
  {
    date: "Feb 2025\nSep 2025",
    role: "Full Stack Developer",
    company: "i-exceed Technologies — OGB",
    desc: "Built registration, service & deposit modules for Odisha Grameen Bank. Integrated with core banking system for secure fund transfers (JS, jQuery, Java, Spring Boot).",
  },
  {
    date: "Jun 2024\nJan 2025",
    role: "Full Stack Developer",
    company: "i-exceed Technologies — BOV",
    desc: "SIT and UAT bug fixing for Bank of Valletta project in JavaScript, jQuery, and Java.",
  },
  {
    date: "Mar 2024\nMay 2024",
    role: "Intern",
    company: "i-exceed Technologies",
    desc: "Built basic apps with React.js and Express.js. Practiced debugging, testing, and writing test cases.",
  },
];

export default function About() {
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
    <section className="about" id="about" ref={ref}>
      <div className="section-label">About Me</div>
      <div className="section-title">Background &amp; Experience</div>

      <div className="about-grid">
        <div className="about-left">
          <div className="about-card reveal">
            <div className="about-card-label">Current Role</div>
            <div className="about-card-value">Full Stack Developer</div>
            <div className="about-card-sub">
              i-exceed Technologies, Bengaluru
            </div>
          </div>
          <div
            className="about-card reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="about-card-label">Education</div>
            <div className="about-card-value">B.E. Computer Science</div>
            <div className="about-card-sub">
              Sri Krishna College of Technology — 81% CGPA
            </div>
          </div>
          <div
            className="about-card reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="about-card-label">Location</div>
            <div className="about-card-value">Bengaluru, Karnataka</div>
            <div className="about-card-sub">Open to remote opportunities</div>
          </div>
          <div
            className="about-card reveal"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="about-card-label">Languages</div>
            <div className="about-card-value">English &amp; Tamil</div>
            <div className="about-card-sub">
              Professional English · Native Tamil
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-text reveal">
            I'm a <strong>Full Stack Developer</strong> with 2 years of hands-on
            experience at i-exceed Technologies, where I've worked on real-world{" "}
            <strong>banking applications</strong> for clients like Bandhan Bank,
            Odisha Grameen Bank, and Bank of Valletta.
          </p>
          <p className="about-text reveal">
            My stack spans <strong>React.js on the frontend</strong> and{" "}
            <strong>Java + Spring Boot on the backend</strong>, with solid
            experience in REST APIs, SQL, and core banking integrations. I also
            bring strong testing skills including SIT, UAT, and unit testing.
          </p>

          <div className="exp-timeline">
            {experience.map((e, i) => (
              <div
                className="exp-item reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="exp-date" style={{ whiteSpace: "pre-line" }}>
                  {e.date}
                </div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
