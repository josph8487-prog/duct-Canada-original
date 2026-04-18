import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Markham | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Markham, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts.",
  keywords: [
    "air duct cleaning Markham",
    "duct cleaning Markham",
    "dryer vent cleaning Markham",
    "furnace cleaning Markham",
    "HVAC cleaning Markham",
    "duct cleaning near me Markham"
  ],
};

export default function MarkhamPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Markham</h1>

        <p style={{ maxWidth: "800px", margin: "auto" }}>
          Professional air duct cleaning, dryer vent cleaning, furnace cleaning
          and HVAC sanitization services in Markham, Ontario. We help improve
          indoor air quality, reduce dust, and increase HVAC efficiency for
          homes and businesses.
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
        <h2>Our Duct Cleaning Services in Markham</h2>

        <ul>
          <li>Air Duct Cleaning Markham</li>
          <li>Dryer Vent Cleaning Markham</li>
          <li>Furnace Cleaning Markham</li>
          <li>HVAC System Cleaning Markham</li>
          <li>Duct Sanitization Markham</li>
        </ul>

        <h3>Why Choose Us in Markham</h3>
        <ul>
          <li>✔ Fast local service in Markham</li>
          <li>✔ Affordable pricing with no hidden charges</li>
          <li>✔ Certified HVAC technicians</li>
          <li>✔ 100% customer satisfaction guarantee</li>
        </ul>
      </section>

      {/* MAP SECTION (LOCAL SEO BOOST) */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Duct Cleaning Services in Markham Map</h2>

        <iframe
          src="https://www.google.com/maps?q=Markham+Ontario+duct+cleaning&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* INTERNAL LINKS (VERY IMPORTANT SEO) */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby cities:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/toronto">Toronto</a> |{" "}
          <a href="/location/vaughan">Vaughan</a> |{" "}
          <a href="/location/richmond-hill">Richmond Hill</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Markham?</h2>
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
