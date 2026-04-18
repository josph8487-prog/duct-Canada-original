"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section style={hero}>
        <div style={overlay}></div>

        <div style={content}>
          <h1 style={title}>
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p style={desc}>
            Professional air duct, dryer vent & furnace cleaning across Ontario.
            Improve indoor air quality for your home or business.
          </p>

          <div style={btnWrap}>
            <Link href="/contact" style={primaryBtn}>
              Get Free Quote
            </Link>

            <a href="tel:2267772863" style={secondaryBtn}>
              Call Now
            </a>
          </div>

          <p style={serve}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </p>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section style={trustBar}>
        <div>✔ Same Day Service</div>
        <div>✔ Certified Technicians</div>
        <div>✔ Affordable Pricing</div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={section}>
        <h2 style={h2}>Our Services</h2>

        <div style={grid}>
          <Card title="Air Duct Cleaning" />
          <Card title="Furnace Cleaning" />
          <Card title="Dryer Vent Cleaning" />
          <Card title="Duct Sanitization" />
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section style={sectionAlt}>
        <h2 style={h2}>Service Areas</h2>

        <div style={areas}>
          <Link href="/location/markham" style={chip}>Markham</Link>
          <Link href="/location/toronto" style={chip}>Toronto</Link>
          <Link href="/location/vaughan" style={chip}>Vaughan</Link>
          <Link href="/location/richmond-hill" style={chip}>Richmond Hill</Link>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section style={cta}>
        <h2>Need Duct Cleaning Today?</h2>
        <p>Call now or request a free quote</p>

        <div style={btnWrap}>
          <Link href="/contact" style={primaryBtn}>
            Get Free Quote
          </Link>

          <a href="tel:2267772863" style={secondaryBtn}>
            Call Now
          </a>
        </div>
      </section>

      {/* ================= STICKY CALL BUTTON ================= */}
      <a href="tel:2267772863" style={stickyCall}>
        📞 Call Now
      </a>
    </>
  );
}

/* ================= COMPONENT ================= */

function Card({ title }: any) {
  return (
    <div style={card}>
      <h3>{title}</h3>
    </div>
  );
}

/* ================= STYLES ================= */

const hero = {
  position: "relative",
  minHeight: "85vh",
  backgroundImage: "url('/images/services/air-duct-cleaning.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
};

const content = {
  position: "relative",
  textAlign: "center",
  maxWidth: "750px",
};

const title = {
  color: "#fff",
  fontSize: "clamp(28px,6vw,52px)",
  fontWeight: "900",
  lineHeight: "1.2",
  textShadow: "0 5px 25px rgba(0,0,0,0.9)",
};

const desc = {
  color: "#eee",
  fontSize: "clamp(15px,3.5vw,18px)",
  marginTop: "15px",
};

const btnWrap = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "20px",
};

const primaryBtn = {
  padding: "14px 24px",
  borderRadius: "10px",
  background: "#00c853",
  color: "#fff",
  fontWeight: "700",
  textDecoration: "none",
};

const secondaryBtn = {
  padding: "14px 24px",
  borderRadius: "10px",
  border: "1px solid #fff",
  color: "#fff",
  textDecoration: "none",
};

const serve = {
  marginTop: "15px",
  color: "#ccc",
  fontSize: "13px",
};

const trustBar = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  padding: "15px",
  background: "#111",
  color: "#fff",
  flexWrap: "wrap",
  fontSize: "14px",
};

const section = {
  padding: "50px 20px",
  textAlign: "center",
};

const sectionAlt = {
  padding: "50px 20px",
  background: "#f7f7f7",
  textAlign: "center",
};

const h2 = {
  fontSize: "24px",
  marginBottom: "25px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
  gap: "15px",
};

const card = {
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "10px",
};

const areas = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const chip = {
  padding: "10px 16px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  textDecoration: "none",
  color: "#000",
};

const cta = {
  padding: "50px 20px",
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
  fontWeight: "700",
  textDecoration: "none",
  zIndex: 9999,
};
