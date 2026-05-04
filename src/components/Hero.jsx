function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b2016 0%, #1a3a2a 45%, #2a5a3c 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative spinning ring */}
      <div
        className="ball-deco spin-slow"
        style={{ top: -60, right: -60, width: 350, height: 325 }}
      />

      {/* Static decorative ring */}
      <div
        className="ball-deco"
        style={{
          bottom: 40,
          left: -80,
          width: 250,
          height: 250,
          borderColor: "rgba(200,230,60,0.1)",
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,230,60,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Court-lines grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(90deg, white 0, white 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, white 0, white 1px, transparent 1px, transparent 80px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "120px 28px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Animated badge */}
        <div
          className="fade-up delay-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(200,230,60,0.15)",
            border: "1px solid rgba(200,230,60,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 28,
            animation: "pulse-badge 3s ease-in-out infinite",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--yellow)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "var(--yellow)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Sessions every week · All levels welcome
          </span>
        </div>

        {/* Heading */}
        <h1
          className="display fade-up delay-2"
          style={{
            color: "white",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.08,
            maxWidth: 700,
            marginBottom: 24,
          }}
        >
          DCU Social <br />
          <span style={{ color: "var(--yellow)", fontStyle: "italic" }}>
            Tennis Club
          </span>{" "}
          <span style={{ fontSize: "0.7em" }}>🎾</span>
        </h1>

        {/* Subtitle */}
        <p
          className="fade-up delay-3"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.15rem",
            maxWidth: 480,
            lineHeight: 1.65,
            marginBottom: 40,
            fontWeight: 300,
          }}
        >
          Play tennis, meet people, and have fun. All skill levels welcome. No
          experience needed, just good vibes.
        </p>

        {/* CTA buttons */}
        <div
          className="fade-up delay-4"
          style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
        >
          <a href="#community" className="btn-primary">
            <span>Join the Community</span>
            <span>→</span>
          </a>
          <a href="#sessions" className="btn-outline">
            View Sessions
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="fade-up delay-4"
          style={{ display: "flex", flexWrap: "wrap", gap: 32, marginTop: 64 }}
        >
          {[
            ["100+", "Members"],
            ["2x", "Weekly Sessions"],
            ["All", "Skill Levels"],
          ].map(([num, label]) => (
            <div key={label}>
              <div
                className="display"
                style={{ color: "var(--yellow)", fontSize: "2rem", fontWeight: 700 }}
              >
                {num}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.82rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade-to-white */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: "linear-gradient(to bottom, transparent, var(--white))",
        }}
      />
    </section>
  );
}

export default Hero;
