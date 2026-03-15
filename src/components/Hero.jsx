import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="dot" />
          Available for opportunities
        </div>
        <h1>
          Rajavignesh
          <br />
          <span className="highlight">M.</span>
        </h1>
        <p className="hero-desc">
          Full Stack Developer with <strong>2 years of experience</strong>{" "}
          building web applications using React.js, Java &amp; Spring Boot —
          with domain exposure in banking applications.
        </p>
        <div className="hero-actions">
          <a
            href="https://github.com/Rajavignesh2001/Rajavignesh-Portfolio"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View GitHub ↗
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
          <a
            href="/Rajavignesh_FullStack_Resume.pdf"
            download
            className="btn-outline"
          >
            Download Resume ↓
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">
              2<span>+</span>
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              3<span>+</span>
            </div>
            <div className="stat-label">Bank Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              8<span>+</span>
            </div>
            <div className="stat-label">Tech Skills</div>
          </div>
        </div>
      </div>

      {/* Profile image on the RIGHT */}
      <div className="hero-image">
        <img src={profileImg} alt="Rajavignesh M" />
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  );
}
