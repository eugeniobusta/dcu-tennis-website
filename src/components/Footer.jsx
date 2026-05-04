const socials = [
  { icon: "📸", label: "Instagram", href: "https://www.instagram.com/dcu_tennis/" },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/1234567890" },
  { icon: "✉️", label: "Email", href: "mailto:tennis@dcuclubsandsocs.ie" },
];

const quickLinks = ["About", "Sessions", "Community", "Gallery", "Announcements"];

function Footer() {
  return (
    <footer style={{ background: "var(--green-dark)", padding: "56px 28px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: "1.6rem" }}>🎾</span>
              <span className="display" style={{ color: "white", fontSize: "1.15rem" }}>
                DCU Social Tennis
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.87rem",
                lineHeight: 1.7,
                maxWidth: 280,
                fontWeight: 300,
              }}
            >
              A student-run tennis club at Dublin City University. All skill levels
              welcome. Just show up and have fun.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-icon" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <div
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Quick Links
            </div>
            {quickLinks.map((link) => (
              <div key={link} style={{ marginBottom: 10 }}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div>
            <div
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contact
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.87rem",
                lineHeight: 1.8,
              }}
            >
              📧 tennis@dcusu.ie
              <br />
              📍 DCU Tennis Courts,
              <br />
              Collins Avenue, Dublin 9
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © 2026 DCU Social Tennis Club. Made with 🎾 by DCU students.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            Part of DCU Students' Union
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
