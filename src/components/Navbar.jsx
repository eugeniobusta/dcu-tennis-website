import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Sessions", "Community", "Gallery", "Announcements"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(19,46,30,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "background 0.3s, border-color 0.3s",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
        >
          <span style={{ fontSize: "1.4rem" }}>🎾</span>
          <span
            className="display"
            style={{ color: "white", fontSize: "1.1rem", fontWeight: 700 }}
          >
            DCU Tennis
          </span>
        </a>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 32, alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
          <a
            href="#community"
            className="btn-primary"
            style={{ padding: "9px 22px", fontSize: "0.82rem" }}
          >
            Join Us
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "1.5rem",
            padding: 4,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#community"
          className="btn-primary"
          style={{ alignSelf: "flex-start", padding: "10px 24px" }}
          onClick={() => setOpen(false)}
        >
          Join Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
