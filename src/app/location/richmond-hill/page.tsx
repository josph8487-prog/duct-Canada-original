import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Richmond Hill | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Richmond Hill, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted local experts.",
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

        <p style={{ maxWidth: "850px", margin: "auto", lineHeight: "1.7" }}>
          Looking for professional air duct cleaning in Richmond Hill? We provide
          complete HVAC cleaning solutions including air duct cleaning, dryer vent
          cleaning, furnace cleaning, and duct sanitization services across
          Richmond Hill, Ontario. Our goal is to improve indoor air quality,
          remove dust buildup, allergens, and improve overall HVAC system efficiency
          for residential and commercial properties in Richmond Hill.
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
        <h2>Our Air Duct Cleaning Services in Richmond Hill</h2>

        <p style={{ lineHeight: "1.7" }}>
          Our Richmond Hill duct cleaning services are designed to ensure your home
          or business has clean, healthy airflow. We specialize in full HVAC system
          cleaning and remove dust, mold spores, allergens, and debris that build up
          inside ducts over time in Richmond Hill properties.
        </p>

        <ul>
          <li>Air Duct Cleaning Richmond Hill</li>
          <li>Dryer Vent Cleaning Richmond Hill</li>
          <li>Furnace Cleaning Richmond Hill</li>
          <li>HVAC System Cleaning Richmond Hill</li>
          <li>Duct Sanitization Richmond Hill</li>
        </ul>

        <h3>Why Choose Our Richmond Hill Team</h3>

        <p style={{ lineHeight: "1.7" }}>
          Homeowners in Richmond Hill trust our duct cleaning experts because we
          deliver fast, reliable, and affordable services. We use professional-grade
          equipment to ensure deep cleaning of air ducts in Richmond Hill homes and
          commercial buildings.
        </p>

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

      {/* SEO CONTENT BLOCK (IMPORTANT) */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h3>Trusted Air Duct Cleaning in Richmond Hill</h3>

        <p style={{ lineHeight: "1.8" }}>
          If you are searching for air duct cleaning in Richmond Hill, our team
          provides complete HVAC cleaning solutions tailored for Richmond Hill homes.
          Dirty air ducts can reduce airflow, increase energy bills, and cause poor
          indoor air quality. That is why professional duct cleaning in Richmond Hill
          is important for every household.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          We serve all areas of Richmond Hill including residential neighborhoods
          and commercial buildings. Our Richmond Hill duct cleaning services ensure
          that your HVAC system runs efficiently throughout the year. Many customers
          in Richmond Hill notice cleaner air and better heating/cooling performance
          after our service.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          Whether you need furnace cleaning, dryer vent cleaning, or full air duct
          cleaning in Richmond Hill, our experts are ready to help. We are a trusted
          name in Richmond Hill for professional HVAC maintenance and deep cleaning.
        </p>
      </section>

      {/* INTERNAL LINKS */}
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
