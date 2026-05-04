import useReveal from "../hooks/useReveal";
import sessions from "../data/sessions";

function SessionCard({ session }) {
  return (
    <div className="card" style={{ padding: "28px 26px" }}>
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: session.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.6rem",
          marginBottom: 18,
        }}
      >
        {session.icon}
      </div>

      {/* Type label */}
      <div
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--green-light)",
          marginBottom: 6,
        }}
      >
        {session.type}
      </div>

      {/* Day */}
      <div
        className="display"
        style={{ fontSize: "1.4rem", color: "var(--text-dark)", marginBottom: 6 }}
      >
        {session.day}
      </div>

      {/* Time */}
      <div
        style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--green-mid)", marginBottom: 12 }}
      >
        {session.time}
      </div>

      {/* Note */}
      <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", lineHeight: 1.6 }}>
        {session.note}
      </p>

      {/* Location pill */}
      <div
        style={{
          marginTop: 20,
          padding: "10px 14px",
          background: "var(--grey-100)",
          borderRadius: 10,
          fontSize: "0.8rem",
          color: "var(--text-mid)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        📍 DCU Tennis Courts, Collins Ave
      </div>
    </div>
  );
}

function Sessions() {
  const ref = useReveal();

  return (
    <section id="sessions" style={{ padding: "80px 28px", background: "var(--grey-100)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="section-eyebrow" style={{ marginBottom: 10 }}>
            When We Play
          </p>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Weekly Sessions
          </h2>
          <p
            style={{
              color: "var(--grey-500)",
              marginTop: 12,
              maxWidth: 480,
              margin: "12px auto 0",
              fontWeight: 300,
            }}
          >
            All sessions are at the DCU Tennis Courts. Make sure to book a spot!
          </p>
        </div>

        {/* Session cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {sessions.map((session, i) => (
            <SessionCard key={i} session={session} />
          ))}
        </div>

        {/* Info strip */}
        <div
          style={{
            marginTop: 32,
            padding: "20px 28px",
            background: "var(--green-dark)",
            borderRadius: 20,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
            🏸{" "}
            <strong style={{ color: "white" }}>Rackets available to borrow.</strong>{" "}
            Just ask a committee member at any session.
          </div>
          <a
            href="#community"
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: "0.85rem", whiteSpace: "nowrap" }}
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sessions;
