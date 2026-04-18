import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Toronto | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Toronto, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts.",
  keywords: [
    "air duct cleaning Toronto",
    "duct cleaning Toronto",
    "dryer vent cleaning Toronto",
    "furnace cleaning Toronto",
    "HVAC cleaning Toronto",
    "duct cleaning near me Toronto"
  ],
};

export default function TorontoPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Toronto</h1>

        <p style={{ maxWidth: "800px", margin: "auto" }}>
          Professional air duct cleaning, dryer vent cleaning, furnace cleaning
          and HVAC sanitization services in Toronto, Ontario. We help improve
          indoor air quality, reduce dust, and improve HVAC efficiency for homes
          and businesses.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            background: "#000",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Get Free Quote
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Our Duct Cleaning Services in Toronto</h2>

        <ul>
          <li>Air Duct Cleaning Toronto</li>
          <li>Dryer Vent Cleaning Toronto</li>
          <li>Furnace Cleaning Toronto</li>
          <li>HVAC System Cleaning Toronto</li>
          <li>Duct Sanitization Toronto</li>
        </ul>

        <h3>Why Choose Us in Toronto</h3>
        <ul>
          <li>✔ Fast local service in Toronto</li>
          <li>✔ Affordable pricing with no hidden charges</li>
          <li>✔ Certified HVAC technicians</li>
          <li>✔ 100% satisfaction guarantee</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Service Area Map - Toronto</h2>

        <iframe
          src="https://www.google.com/maps?q=Toronto+Ontario+duct+cleaning&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby cities:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/markham">Markham</a> |{" "}
          <a href="/location/vaughan">Vaughan</a> |{" "}
          <a href="/location/richmond-hill">Richmond Hill</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Toronto?</h2>
        <p>Call now for same-day service</p>

        <a
          href="tel:2267772863"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "green",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Call Now
        </a>
      </section>
    </>
  );
}
