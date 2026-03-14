import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials
// Setup guide: https://www.emailjs.com/docs/
const EMAILJS_SERVICE_ID = "service_69wavcw"; // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = "template_etuifl5"; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = "2EDm3BZ-PLHYLBSy4"; // e.g. 'abcDEFghiJKL...'
// ───────────────────────────────────────────────────────────────────

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: "rajavignesh703@gmail.com",
    href: "mailto:rajavignesh703@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 93616 27790",
    href: "tel:+919361627790",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Rajavignesh2001",
    href: "https://github.com/Rajavignesh2001",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/Rajavignesh",
    href: "https://linkedin.com/in/Rajavignesh",
  },
  { icon: "📍", label: "Location", value: "Bengaluru, Karnataka", href: null },
];

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="section-label">Contact</div>
      <div className="section-title">Let's Work Together</div>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-desc reveal">
            I'm open to full-time roles and collaborations. Whether you have a
            project in mind or just want to connect — feel free to reach out!
          </p>

          <div className="contact-items">
            {contactItems.map((item, i) =>
              item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact-item reveal"
                  key={item.label}
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ) : (
                <div
                  className="contact-item reveal"
                  key={item.label}
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <form
          className="contact-form reveal"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          {status === "success" && (
            <div className="form-status success">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="form-status error">
              ✕ Something went wrong. Please try emailing directly at
              rajavignesh703@gmail.com
            </div>
          )}

          <button
            type="submit"
            className="btn-primary form-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
