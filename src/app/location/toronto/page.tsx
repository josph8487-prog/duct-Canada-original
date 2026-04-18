import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Toronto | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Toronto, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts in Toronto and GTA.",
  keywords: [
    "air duct cleaning Toronto",
    "duct cleaning Toronto",
    "dryer vent cleaning Toronto",
    "furnace cleaning Toronto",
    "HVAC cleaning Toronto",
    "duct cleaning near me Toronto",
    "Toronto duct cleaning services"
  ],
};

export default function TorontoPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Toronto</h1>

        <p style={{ maxWidth: "850px", margin: "auto" }}>
          If you are searching for professional air duct cleaning in Toronto, our expert team provides
          reliable and affordable duct cleaning services across Toronto and the GTA. We specialize in
          air duct cleaning in Toronto for residential and commercial properties, helping improve indoor
          air quality, reduce dust buildup, and increase HVAC efficiency.
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
        <h2>Professional Air Duct Cleaning Services in Toronto</h2>

        <p>
          Our air duct cleaning services in Toronto are designed to remove dust, allergens, mold spores,
          and debris from your HVAC system. Many homes in Toronto suffer from poor indoor air quality due
          to clogged ducts, which makes professional duct cleaning in Toronto essential.
        </p>

        <p>
          We provide complete duct cleaning in Toronto including furnace cleaning, dryer vent cleaning,
          HVAC system cleaning, and sanitization services. Our goal is to make Toronto homes cleaner,
          healthier, and more energy efficient.
        </p>

        <h3>Why Air Duct Cleaning in Toronto is Important</h3>

        <p>
          Toronto homes and buildings experience heavy HVAC usage due to seasonal weather changes.
          Without proper air duct cleaning in Toronto, dust and allergens accumulate inside ducts,
          reducing air quality and system efficiency. Regular duct cleaning in Toronto ensures better airflow
          and healthier indoor environments.
        </p>

        <ul>
          <li>Improve indoor air quality in Toronto homes</li>
          <li>Reduce allergies and respiratory issues</li>
          <li>Increase HVAC efficiency in Toronto properties</li>
          <li>Lower energy bills for Toronto residents</li>
          <li>Extend HVAC system lifespan in Toronto buildings</li>
        </ul>

        <h3>Our Services in Toronto</h3>

        <ul>
          <li>Air Duct Cleaning Toronto</li>
          <li>Dryer Vent Cleaning Toronto</li>
          <li>Furnace Cleaning Toronto</li>
          <li>HVAC System Cleaning Toronto</li>
          <li>Duct Sanitization Toronto</li>
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

      {/* FAQ SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Frequently Asked Questions - Toronto Air Duct Cleaning</h2>

        <h4>How often should I get air duct cleaning in Toronto?</h4>
        <p>
          Most Toronto homes should get air duct cleaning every 2–3 years depending on dust, pets, and usage.
        </p>

        <h4>Is duct cleaning in Toronto necessary?</h4>
        <p>
          Yes, duct cleaning in Toronto helps improve air quality, reduce allergens, and increase HVAC performance.
        </p>

        <h4>Do you provide emergency duct cleaning in Toronto?</h4>
        <p>
          Yes, we offer fast and same-day air duct cleaning service in Toronto depending on availability.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby GTA cities:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/markham">Markham</a> |{" "}
          <a href="/location/vaughan">Vaughan</a> |{" "}
          <a href="/location/richmond-hill">Richmond Hill</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Toronto?</h2>

        <p>
          Contact our Toronto duct cleaning experts today for fast, affordable and professional service.
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
