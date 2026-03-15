export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-logo">
        Raja<span>.</span>
      </div>
      <p className="footer-copy">
        © {year} Rajavignesh M. All rights reserved.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/Rajavignesh2001"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rajavignesh-m-876807224/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:rajavignesh703@gmail.com">Email</a>
      </div>
    </footer>
  );
}
