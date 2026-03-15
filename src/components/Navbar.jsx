import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">
        Raja<span>.</span>
      </a>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </li>
      </ul>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          style={{
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span
          style={{
            transform: menuOpen
              ? "rotate(-45deg) translate(5px, -5px)"
              : "none",
          }}
        />
      </button>
    </nav>
  );
}
