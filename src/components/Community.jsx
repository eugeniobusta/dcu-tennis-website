import useReveal from "../hooks/useReveal";

const channels = [
  {
    icon: "💬",
    name: "WhatsApp Group",
    desc: "Stay up to date on sessions, cancellations, and club news in real time.",
    action: "Join WhatsApp",
    color: "#25d366",
    bg: "#e8faf0",
    link: "https://chat.whatsapp.com/",
  },
  {
    icon: "📸",
    name: "Instagram",
    desc: "Follow us for photos, highlights, and social event updates.",
    action: "@dcu_tennis",
    color: "#e1306c",
    bg: "#fceef4",
    link: "https://instagram.com/dcu_tennis",
  },
  {
    icon: "📧",
    name: "Email Us",
    desc: "Questions? Suggestions? We'd love to hear from you.",
    action: "tennis@dcuclubsandsocs.ie",
    color: "#3b82f6",
    bg: "#eff6ff",
    link: "mailto:tennis@dcuclubsandsocs.ie",
  },
];

function ChannelCard({ channel }) {
  return (
    <div className="card" style={{ padding: "30px 26px", textAlign: "center" }}>
      {/* Icon box */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 18,
          background: channel.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          margin: "0 auto 18px",
        }}
      >
        {channel.icon}
      </div>

      <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "var(--text-dark)" }}>
        {channel.name}
      </h3>
      <p style={{ color: "var(--grey-500)", fontSize: "0.87rem", lineHeight: 1.6, marginBottom: 20 }}>
        {channel.desc}
      </p>

      {/* Action link */}
      <a
        href={channel.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 22px",
          background: channel.bg,
          color: channel.color,
          borderRadius: 100,
          fontSize: "0.83rem",
          fontWeight: 600,
          textDecoration: "none",
          border: `1.5px solid ${channel.color}20`,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = `0 6px 20px ${channel.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {channel.action}
      </a>
    </div>
  );
}

function Community() {
  const ref = useReveal();

  return (
    <section id="community" style={{ padding: "80px 28px", background: "var(--white)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="section-eyebrow" style={{ marginBottom: 10 }}>
            Get Involved
          </p>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Join the Community
          </h2>
          <p
            style={{
              color: "var(--grey-500)",
              marginTop: 12,
              maxWidth: 420,
              margin: "12px auto 0",
              fontWeight: 300,
            }}
          >
            Connect with us online and stay in the loop for every session and event.
          </p>
        </div>

        {/* Channel cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {channels.map((channel, i) => (
            <ChannelCard key={i} channel={channel} />
          ))}
        </div>

        {/* Big CTA banner */}
        <div
          style={{
            borderRadius: 28,
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-mid) 100%)",
            padding: "52px 48px",
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(200,230,60,0.1)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div>
              <h3
                className="display"
                style={{ fontSize: "1.8rem", color: "white", marginBottom: 10 }}
              >
                Ready to pick up a racket?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontWeight: 300 }}>
                Book your place ahead and make sure to show up. Active membership required.
              </p>
            </div>
            <a href="https://dcuclubsandsocs.ie/club/tennis" className="btn-primary">
              Book Upcoming Sessions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
