import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Toronto | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Toronto, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Call now for fast service.",
  keywords: [
    "air duct cleaning Toronto",
    "duct cleaning Toronto",
    "dryer vent cleaning Toronto",
    "furnace cleaning Toronto",
    "HVAC cleaning Toronto"
  ],
};

export default function TorontoPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Toronto</h1>

        <p>
          Professional air duct cleaning, dryer vent cleaning, furnace cleaning
          and HVAC services in Toronto, Ontario. Improve indoor air quality
          with trusted local experts.
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
          <li>HVAC Sanitization Toronto</li>
        </ul>

        <h3>Why Choose Our Toronto Team</h3>
        <ul>
          <li>✔ Fast & reliable service in Toronto</li>
          <li>✔ Affordable & transparent pricing</li>
          <li>✔ Certified HVAC technicians</li>
          <li>✔ 100% customer satisfaction guarantee</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Duct Cleaning Services Near You in Toronto</h2>

        <iframe
          src="https://www.google.com/maps?q=Toronto+Ontario&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* INTERNAL LINKING (SEO BOOST) */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby locations:</p>

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
