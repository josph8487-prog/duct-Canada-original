import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Markham | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Markham, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Trusted local experts for residential and commercial duct cleaning.",
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
          If you are looking for professional air duct cleaning in Markham,
          Duct Cleaning Canada provides expert HVAC cleaning, dryer vent cleaning,
          furnace cleaning, and full duct sanitization services. We help homeowners
          and businesses improve indoor air quality, reduce allergens, and boost
          HVAC efficiency across Markham, Ontario.
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
            textDecoration: "none",
          }}
        >
          Get Free Quote
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Professional Duct Cleaning Services in Markham</h2>

        <ul>
          <li>Air Duct Cleaning in Markham Homes & Offices</li>
          <li>Dryer Vent Cleaning to Prevent Fire Hazards</li>
          <li>Furnace Cleaning for Better Heating Efficiency</li>
          <li>Complete HVAC System Deep Cleaning</li>
          <li>Sanitization & Odor Removal Services</li>
        </ul>

        <h3>Why Markham Chooses Us</h3>
        <ul>
          <li>✔ Local Markham HVAC cleaning specialists</li>
          <li>✔ Fast same-day service available</li>
          <li>✔ Affordable transparent pricing</li>
          <li>✔ Certified & insured technicians</li>
          <li>✔ 100% satisfaction guaranteed</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Air Duct Cleaning Service Area in Markham</h2>

        <iframe
          src="https://www.google.com/maps?q=Markham+Ontario+duct+cleaning&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* INTERNAL SEO LINKS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3>We Also Serve Nearby Areas</h3>

        <p>Our duct cleaning services are also available in:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/toronto">Toronto</a> |{" "}
          <a href="/location/vaughan">Vaughan</a> |{" "}
          <a href="/location/richmond-hill">Richmond Hill</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Markham?</h2>
        <p>Call now for fast same-day service</p>

        <a
          href="tel:2267772863"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "green",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Call Now
        </a>
      </section>
    </>
  );
}
