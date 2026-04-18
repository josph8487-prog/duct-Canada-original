import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Vaughan | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Vaughan, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts in Vaughan and GTA.",
  keywords: [
    "air duct cleaning Vaughan",
    "duct cleaning Vaughan",
    "dryer vent cleaning Vaughan",
    "furnace cleaning Vaughan",
    "HVAC cleaning Vaughan",
    "duct cleaning near me Vaughan",
    "Vaughan duct cleaning services"
  ],
};

export default function VaughanPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Vaughan</h1>

        <p style={{ maxWidth: "850px", margin: "auto" }}>
          If you are looking for professional air duct cleaning in Vaughan, our expert team provides
          reliable and affordable duct cleaning services across Vaughan and the GTA. We specialize in
          air duct cleaning in Vaughan for residential and commercial properties, helping improve indoor
          air quality, reduce dust buildup, and improve HVAC system efficiency for homes in Vaughan.
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

      {/* CONTENT SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Professional Air Duct Cleaning Services in Vaughan</h2>

        <p>
          Our air duct cleaning services in Vaughan are designed to remove dust, allergens, mold spores,
          and debris from your HVAC system. Many homes in Vaughan suffer from poor indoor air quality due
          to clogged ducts, making professional duct cleaning in Vaughan essential for healthier living.
        </p>

        <p>
          We provide complete duct cleaning in Vaughan including furnace cleaning, dryer vent cleaning,
          HVAC system cleaning, and sanitization services. Our goal is to improve air quality and make
          Vaughan homes more energy efficient and safe.
        </p>

        <h3>Why Air Duct Cleaning in Vaughan is Important</h3>

        <p>
          Vaughan experiences seasonal weather changes that force HVAC systems to work harder.
          Without proper air duct cleaning in Vaughan, dust, allergens, and debris build up inside ducts,
          reducing airflow and increasing energy consumption. Regular duct cleaning in Vaughan ensures
          cleaner air and better system performance.
        </p>

        <ul>
          <li>Improve indoor air quality in Vaughan homes</li>
          <li>Reduce allergies and dust circulation</li>
          <li>Increase HVAC efficiency in Vaughan properties</li>
          <li>Lower energy bills for Vaughan residents</li>
          <li>Extend HVAC system life in Vaughan buildings</li>
        </ul>

        <h3>Our Services in Vaughan</h3>

        <ul>
          <li>Air Duct Cleaning Vaughan</li>
          <li>Dryer Vent Cleaning Vaughan</li>
          <li>Furnace Cleaning Vaughan</li>
          <li>HVAC System Cleaning Vaughan</li>
          <li>Duct Sanitization Vaughan</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Service Area Map - Vaughan</h2>

        <iframe
          src="https://www.google.com/maps?q=Vaughan+Ontario+duct+cleaning&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Frequently Asked Questions - Vaughan Air Duct Cleaning</h2>

        <h4>How often should I get air duct cleaning in Vaughan?</h4>
        <p>
          Most Vaughan homes should get air duct cleaning every 2–3 years depending on dust levels,
          pets, and HVAC usage.
        </p>

        <h4>Is duct cleaning in Vaughan worth it?</h4>
        <p>
          Yes, duct cleaning in Vaughan improves indoor air quality, reduces allergens, and helps HVAC
          systems run more efficiently.
        </p>

        <h4>Do you offer same-day duct cleaning in Vaughan?</h4>
        <p>
          Yes, we provide fast same-day air duct cleaning service in Vaughan depending on availability.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby GTA cities:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/markham">Markham</a> |{" "}
          <a href="/location/toronto">Toronto</a> |{" "}
          <a href="/location/richmond-hill">Richmond Hill</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Vaughan?</h2>

        <p>
          Contact our Vaughan duct cleaning experts today for fast, affordable and professional service.
        </p>

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
