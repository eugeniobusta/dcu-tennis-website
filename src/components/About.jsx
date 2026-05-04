import useReveal from "../hooks/useReveal";
import teamImg from "../assets/team.jpg";

const TAGS = ["Beginner Friendly", "Easy to Join", "Social First", "DCU Students"];

function About() {
  const ref = useReveal();

  return (
    <section id="about" style={{ padding: "80px 28px", background: "var(--white)" }}>
      <div
        ref={ref}
        className="reveal about-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Text column */}
        <div>
          <p className="section-eyebrow" style={{ marginBottom: 12 }}>
            About the Club
          </p>
          <h2
            className="display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              marginBottom: 20,
              color: "var(--text-dark)",
            }}
          >
            Tennis for everyone,
            <br />
            <span style={{ color: "var(--green-light)", fontStyle: "italic" }}>
              no strings attached
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-mid)",
              lineHeight: 1.8,
              marginBottom: 16,
              fontWeight: 300,
            }}
          >
            DCU Social Tennis is a student-run club focused on one thing: having a
            great time on the courts. Whether you've never held a racket or played all
            your life, you'll fit right in.
          </p>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, fontWeight: 300 }}>
            We run regular sessions throughout the semester, organise social events,
            and connect students from across the university who just want to play,
            laugh, and meet new people.
          </p>

          {/* Tag pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            {TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "var(--green-soft)",
                  color: "var(--green-light)",
                  padding: "6px 14px",
                  borderRadius: 100,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 28,
              overflow: "hidden",
              height: 380,
              boxShadow: "0 20px 60px rgba(30,71,48,0.2)",
            }}
          >
            <img
              src={teamImg}
              alt="Tennis Team"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
              background: "var(--green-dark)",
              color: "white",
              borderRadius: 20,
              padding: "16px 22px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <div className="display" style={{ fontSize: "1.8rem", color: "var(--yellow)" }}>
              🎾
            </div>
            <div style={{ fontSize: "0.78rem", opacity: 0.7, marginTop: 2 }}>
              Est. 2019 · DCU
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
