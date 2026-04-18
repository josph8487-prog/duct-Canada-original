import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section style={hero}>
        <div style={overlay}></div>

        <div style={heroContent}>
          <h1 style={h1}>
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p style={heroText}>
            Professional duct cleaning services across Ontario. We improve indoor air quality for homes and businesses.
          </p>

          <div style={btnGroup}>
            <Link href="/contact" style={glassBtn}>
              Get Free Quote
            </Link>

            <Link href="/services" style={outlineBtn}>
              Explore Services
            </Link>
          </div>

          <div style={serving}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section style={section}>
        <h2 style={h2}>Service Areas</h2>

        <div style={chipWrap}>
          <Link href="/location/markham" style={chip}>Markham</Link>
          <Link href="/location/toronto" style={chip}>Toronto</Link>
          <Link href="/location/vaughan" style={chip}>Vaughan</Link>
          <Link href="/location/richmond-hill" style={chip}>Richmond Hill</Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={sectionAlt}>
        <h2 style={h2Dark}>Our Services</h2>

        <div style={grid}>
          <Card title="Air Duct Cleaning" img="/images/services/air-duct-cleaning.jpg" />
          <Card title="Furnace Cleaning" img="/images/services/furnace-cleaning.jpg" />
          <Card title="Dryer Vent Cleaning" img="/images/services/dryer-vent-cleaning.jpg" />
          <Card title="Duct Sanitization" img="/images/services/sanitization.jpg" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={ctaSection}>
        <h2 style={{ fontSize: "22px" }}>Need Duct Cleaning Today?</h2>
        <p>Fast same-day service available</p>

        <Link href="/contact" style={glassBtn}>
          Get Free Quote
        </Link>
      </section>

      {/* ================= STICKY MOBILE CALL BUTTON ================= */}
      <a href="tel:2267772863" style={stickyCall}>
        📞 Call Now
      </a>
    </>
  );
}

/* ================= COMPONENT ================= */

function Card({ title, img }: any) {
  return (
    <div style={card}>
      <Image src={img} alt={title} width={400} height={250} style={{ borderRadius: "10px" }} />
      <h3 style={{ marginTop: "10px" }}>{title}</h3>
    </div>
  );
}

/* ================= STYLES ================= */

const hero = {
  position: "relative",
  minHeight: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "40px 20px",
  backgroundImage: "url('/images/services/air-duct-cleaning.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
};

const heroContent = {
  position: "relative",
  maxWidth: "700px",
};

const h1 = {
  fontSize: "clamp(26px, 6vw, 50px)",
  fontWeight: "800",
  color: "#fff",
  textShadow: "0 4px 25px rgba(0,0,0,0.8)",
  marginBottom: "12px",
};

const heroText = {
  color: "rgba(255,255,255,0.9)",
  fontSize: "clamp(14px,3.5vw,18px)",
  marginBottom: "25px",
};

const btnGroup = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "15px",
};

const glassBtn = {
  padding: "12px 22px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
};

const outlineBtn = {
  padding: "12px 22px",
  borderRadius: "12px",
  border: "1px solid #fff",
  color: "#fff",
  textDecoration: "none",
};

const serving = {
  color: "#ddd",
  fontSize: "13px",
};

const section = {
  padding: "40px 20px",
  textAlign: "center",
};

const sectionAlt = {
  padding: "40px 20px",
  background: "#f7f7f7",
  textAlign: "center",
};

const h2 = {
  fontSize: "22px",
  marginBottom: "20px",
};

const h2Dark = {
  fontSize: "22px",
  marginBottom: "20px",
};

const chipWrap = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
};

const chip = {
  padding: "8px 14px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  textDecoration: "none",
  color: "#000",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
  gap: "15px",
};

const card = {
  padding: "10px",
};

const ctaSection = {
  padding: "40px 20px",
  background: "#111",
  color: "#fff",
  textAlign: "center",
};

const stickyCall = {
  position: "fixed",
  bottom: "15px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#00c853",
  color: "#fff",
  padding: "14px 24px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "700",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  zIndex: 9999,
};
