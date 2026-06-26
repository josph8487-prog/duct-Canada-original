import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Mississauga | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Mississauga, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts in Mississauga and GTA.",
  keywords: [
    "air duct cleaning Mississauga",
    "duct cleaning Mississauga",
    "dryer vent cleaning Mississauga",
    "furnace cleaning Mississauga",
    "HVAC cleaning Mississauga",
    "duct cleaning near me Mississauga",
    "Mississauga air duct cleaning services"
  ],
};

export default function MississaugaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          Air Duct Cleaning in Mississauga
        </h1>

        <p style={{ maxWidth: "850px", margin: "auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
          Looking for professional air duct cleaning in Mississauga? We provide complete HVAC cleaning solutions 
          including air duct cleaning, dryer vent cleaning, furnace cleaning, and duct sanitization services across 
          Mississauga, Ontario. Our goal is to improve indoor air quality, remove dust buildup, allergens, and improve 
          overall HVAC system efficiency for residential and commercial properties in Mississauga.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "#000000",
            color: "#ffffff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Get Free Quote
        </a>
      </section>

      {/* CONTENT SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "15px" }}>
          Our Air Duct Cleaning Services in Mississauga
        </h2>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          Our Mississauga duct cleaning services are designed to ensure your home or business has clean, healthy airflow. 
          We specialize in full HVAC system cleaning and remove dust, mold spores, allergens, and debris that build up 
          inside ducts over time in Mississauga properties.
        </p>

        <ul style={{ paddingLeft: "20px", marginBottom: "30px", lineHeight: "2" }}>
          <li>Air Duct Cleaning Mississauga</li>
          <li>Dryer Vent Cleaning Mississauga</li>
          <li>Furnace Cleaning Mississauga</li>
          <li>HVAC System Cleaning Mississauga</li>
          <li>Duct Sanitization Mississauga</li>
        </ul>

        <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", marginBottom: "15px" }}>
          Why Choose Our Mississauga Team
        </h3>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          Homeowners in Mississauga trust our duct cleaning experts because we deliver fast, reliable, and affordable 
          services. We use professional-grade equipment to ensure deep cleaning of air ducts in Mississauga homes 
          and commercial buildings.
        </p>

        <ul style={{ listStyleType: "none", paddingLeft: "0", lineHeight: "2", marginBottom: "30px" }}>
          <li>✔ Fast local service in Mississauga</li>
          <li>✔ Affordable pricing with no hidden charges</li>
          <li>✔ Certified HVAC technicians</li>
          <li>✔ 100% satisfaction guarantee</li>
        </ul>
      </section>

      {/* MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "20px" }}>
          Service Area Map - Mississauga
        </h2>

        <iframe
          src="https://google.com"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>

      {/* FAQ SECTION (SEO BOOST) */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "20px" }}>
          Trusted Air Duct Cleaning in Mississauga
        </h2>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          If you are searching for air duct cleaning in Mississauga, our team provides complete HVAC cleaning solutions 
          tailored for Mississauga homes. Dirty air ducts can reduce airflow, increase energy bills, and cause poor 
          indoor air quality. That is why professional duct cleaning in Mississauga is important for every household.
        </p>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          We serve all areas of Mississauga including residential neighborhoods and commercial buildings. Our Mississauga 
          duct cleaning services ensure that your HVAC system runs efficiently throughout the year. Many customers in 
          Mississauga notice cleaner air and better heating/cooling performance after our service.
        </p>

        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          Whether you need furnace cleaning, dryer vent cleaning, or full air duct cleaning in Mississauga, our experts 
          are ready to help. We are a trusted name in Mississauga for professional HVAC maintenance and deep cleaning.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ textAlign: "center", padding: "40px 20px", background: "#f9f9f9" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
          Nearby Service Areas
        </h3>

        <p style={{ marginBottom: "15px" }}>We also serve nearby cities:</p>

        <div style={{ fontSize: "1.1rem", fontWeight: "500" }}>
          <a href="/location/markham" style={{ color: "#0066cc", textDecoration: "none" }}>Markham</a> |{" "}
          <a href="/location/toronto" style={{ color: "#0066cc", textDecoration: "none" }}>Toronto</a> |{" "}
          <a href="/location/vaughan" style={{ color: "#0066cc", textDecoration: "none" }}>Vaughan</a> |{" "}
          <a href="/location/brampton" style={{ color: "#0066cc", textDecoration: "none" }}>Brampton</a> |{" "}
          <a href="/location/oakville" style={{ color: "#0066cc", textDecoration: "none" }}>Oakville</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
          Need Air Duct Cleaning in Mississauga?
        </h2>

        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Call now for same-day service
        </p>

        <div style={{ marginBottom: "30px" }}>
          <a
            href="tel:2267772863"
            style={{
              display: "inline-block",
              padding: "15px 35px",
              background: "#28a745", // Green color
              color: "#ffffff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            Call Now
          </a>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#555" }}>
          Call our Duct Cleaning Specialists!
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#000", marginTop: "5px" }}>
          📞 226-777-2863
        </p>
      </section>
    </>
  );
}
