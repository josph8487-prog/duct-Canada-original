import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Richmond Hill | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Richmond Hill, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts.",
  keywords: [
    "air duct cleaning Richmond Hill",
    "duct cleaning Richmond Hill",
    "dryer vent cleaning Richmond Hill",
    "furnace cleaning Richmond Hill",
    "HVAC cleaning Richmond Hill",
    "duct cleaning near me Richmond Hill"
  ],
};

export default function RichmondHillPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Richmond Hill</h1>

        <p style={{ maxWidth: "800px", margin: "auto" }}>
          Professional air duct cleaning, dryer vent cleaning, furnace cleaning
          and HVAC services in Richmond Hill, Ontario. We help improve indoor air
          quality, reduce dust buildup, and improve HVAC efficiency for homes and businesses.
        </p>

        <a href="/contact" style={btnBlack}>
          Get Free Quote
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section style={container}>
        <h2>Our Duct Cleaning Services in Richmond Hill</h2>

        <ul>
          <li>Air Duct Cleaning Richmond Hill</li>
          <li>Dryer Vent Cleaning Richmond Hill</li>
          <li>Furnace Cleaning Richmond Hill</li>
          <li>HVAC System Cleaning Richmond Hill</li>
          <li>Duct Sanitization Richmond Hill</li>
        </ul>

        <h3>Why Choose Us in Richmond Hill</h3>
        <ul>
          <li>✔ Fast local service in Richmond Hill</li>
          <li>✔ Affordable pricing with no hidden charges</li>
          <li>✔ Certified HVAC technicians</li>
          <li>✔ 100% satisfaction guarantee</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Service Area Map - Richmond Hill</h2>

        <iframe
          src="https://www.google.com/maps?q=Richmond+Hill+Ontario+duct+cleaning&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* INTERNAL LINKS (SEO BOOST) */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby cities:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/markham">Markham</a> |{" "}
          <a href="/location/toronto">Toronto</a> |{" "}
          <a href="/location/vaughan">Vaughan</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Richmond Hill?</h2>
        <p>Call now for same-day service</p>

        <a href="tel:2267772863" style={btnGreen}>
          Call Now
        </a>
      </section>
    </>
  );
}

const container = {
  padding: "40px 20px",
  maxWidth: "900px",
  margin: "auto",
};

const btnBlack = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 20px",
  background: "#000",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
};

const btnGreen = {
  display: "inline-block",
  padding: "12px 20px",
  background: "green",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
};
