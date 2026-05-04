import useReveal from "../hooks/useReveal";
import galleryImages from "../data/gallery";

function GalleryItem({ image, style }) {
  return (
    <div className="gallery-item" style={style}>
      <img src={image.src} alt={image.alt} />
      <div className="gallery-overlay">
        <span style={{ color: "white", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em" }}>
          {image.alt}
        </span>
      </div>
    </div>
  );
}

// Grid position styles for the asymmetric layout
const gridStyles = [
  { gridColumn: "1 / 3", gridRow: "1 / 3" }, // wide tall (top-left)
  {},                                           // normal
  {},                                           // normal
  {},                                           // normal
  {},                                           // normal
  { gridColumn: "2 / 4" },                     // wide (bottom)
];

function Gallery() {
  const ref = useReveal();

  return (
    <section id="gallery" style={{ padding: "80px 28px", background: "var(--grey-100)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-eyebrow" style={{ marginBottom: 10 }}>
            Life on Court
          </p>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Gallery
          </h2>
        </div>

        {/* Asymmetric image grid */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "240px 200px",
            gap: 15,
          }}
        >
          {galleryImages.map((image, i) => (
            <GalleryItem
              key={i}
              image={image}
              style={{
                ...gridStyles[i],
                // Add responsive helper classes via inline className equivalent
                ...(i === 0 ? {} : {}),
              }}
            />
          ))}
        </div>

        {/* Instagram link */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <a
            href="https://www.instagram.com/dcu_tennis/"
            style={{
              color: "var(--green-light)",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            See more on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
