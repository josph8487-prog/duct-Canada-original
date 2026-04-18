import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Markham | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Markham, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts in Markham and GTA.",
  keywords: [
    "air duct cleaning Markham",
    "duct cleaning Markham",
    "dryer vent cleaning Markham",
    "furnace cleaning Markham",
    "HVAC cleaning Markham",
    "duct cleaning near me Markham",
    "Markham air duct cleaning services"
  ],
};

export default function MarkhamPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Markham</h1>

        <p style={{ maxWidth: "850px", margin: "auto" }}>
          If you are looking for professional air duct cleaning in Markham, you are at the right place.
          Our expert team provides high-quality air duct cleaning in Markham, helping homeowners and businesses
          improve indoor air quality, reduce dust, and increase HVAC efficiency. We proudly serve all areas of Markham
          with reliable and affordable duct cleaning services.
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

      {/* CONTENT SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Professional Air Duct Cleaning Services in Markham</h2>

        <p>
          Our air duct cleaning service in Markham is designed to remove dust, allergens, mold particles, and debris
          from your HVAC system. Many homes in Markham suffer from poor indoor air quality due to clogged ducts,
          which is why professional duct cleaning in Markham is essential.
        </p>

        <p>
          We provide complete duct cleaning in Markham including furnace cleaning, dryer vent cleaning, HVAC system
          cleaning, and sanitization. Our goal is to improve airflow and make your home in Markham healthier and more
          energy efficient.
        </p>

        <h3>Why Air Duct Cleaning in Markham is Important</h3>

        <p>
          Living in Markham means seasonal changes that affect your HVAC system. Dust buildup is common, and without
          regular air duct cleaning in Markham, your system becomes less efficient. Our Markham duct cleaning experts
          ensure your system runs smoothly and safely.
        </p>

        <ul>
          <li>Improve indoor air quality in Markham homes</li>
          <li>Reduce allergies and dust buildup</li>
          <li>Increase HVAC efficiency in Markham properties</li>
          <li>Lower energy bills for Markham residents</li>
          <li>Extend HVAC system life in Markham homes</li>
        </ul>

        <h3>Our Services in Markham</h3>

        <ul>
          <li>Air Duct Cleaning Markham</li>
          <li>Dryer Vent Cleaning Markham</li>
          <li>Furnace Cleaning Markham</li>
          <li>HVAC System Cleaning Markham</li>
          <li>Duct Sanitization Markham</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Service Area Map - Markham</h2>

        <iframe
          src="https://www.google.com/maps?q=Markham+Ontario+duct+cleaning&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* FAQ SECTION (SEO BOOST) */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Frequently Asked Questions - Markham Air Duct Cleaning</h2>

        <h4>How often should I get air duct cleaning in Markham?</h4>
        <p>
          Most homes in Markham should get air duct cleaning every 2–3 years depending on usage, pets, and dust levels.
        </p>

        <h4>Is duct cleaning in Markham worth it?</h4>
        <p>
          Yes, professional duct cleaning in Markham improves air quality, reduces allergens, and helps HVAC systems run efficiently.
        </p>

        <h4>Do you offer same-day duct cleaning in Markham?</h4>
        <p>
          Yes, we provide same-day air duct cleaning service in Markham depending on availability.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby cities around Markham:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/toronto">Toronto</a> |{" "}
          <a href="/location/vaughan">Vaughan</a> |{" "}
          <a href="/location/richmond-hill">Richmond Hill</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Markham?</h2>

        <p>
          Contact our Markham duct cleaning experts today for fast, affordable and professional service.
        </p>

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
