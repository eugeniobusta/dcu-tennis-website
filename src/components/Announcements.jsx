import useReveal from "../hooks/useReveal";
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

const badgeColors = {
  urgent: { bg: "#fef2f2", color: "#dc2626" },
  info:   { bg: "#eff6ff", color: "#2563eb" },
  normal: { bg: "var(--grey-100)", color: "var(--grey-500)" },
};

function AnnouncementCard({ item }) {
  const badge = badgeColors[item.type] || badgeColors.normal;

  return (
    <div className={`announce-card ${item.type}`}>
      {/* Top row: badge + date */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            background: badge.bg,
            color: badge.color,
            borderRadius: 100,
            padding: "3px 11px",
            fontSize: "0.73rem",
            fontWeight: 600,
          }}
        >
          {item.badge}
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--grey-500)" }}>{item.date}</span>
      </div>

      <h4 style={{ fontWeight: 600, marginBottom: 6, color: "var(--text-dark)" }}>
        {item.title}
      </h4>
      <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.65, fontWeight: 300 }}>
        {item.body}
      </p>
    </div>
  );
}

function Announcements() {
  const ref = useReveal();

  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
  client
    .fetch(`*[_type == "announcement"]`)
    .then((data) => setAnnouncements(data))
    .catch(console.error);
}, []);
  return (
    <section id="announcements" style={{ padding: "80px 28px", background: "var(--white)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} className="reveal" style={{ marginBottom: 44 }}>
          <p className="section-eyebrow" style={{ marginBottom: 10 }}>
            Latest Updates
          </p>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Announcements
          </h2>
        </div>

        {/* Announcement list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {announcements.map((item, i) => (
            <AnnouncementCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcements;
