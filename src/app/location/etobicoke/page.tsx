import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Duct Cleaning in Etobicoke | Duct Cleaning Canada",
  description:
    "Professional air duct cleaning in Etobicoke, Ontario. Dryer vent cleaning, furnace cleaning & HVAC sanitization services. Improve indoor air quality with trusted experts in Etobicoke and GTA.",
  keywords: [
    "air duct cleaning Etobicoke",
    "duct cleaning Etobicoke",
    "dryer vent cleaning Etobicoke",
    "furnace cleaning Etobicoke",
    "HVAC cleaning Etobicoke",
    "duct cleaning near me Etobicoke",
    "Etobicoke air duct cleaning services"
  ],
};

export default function EtobicokePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Etobicoke</h1>

        <p style={{ maxWidth: "850px", margin: "auto" }}>
          Looking for professional air duct cleaning in Etobicoke? We provide complete HVAC cleaning solutions 
          including air duct cleaning, dryer vent cleaning, furnace cleaning, and duct sanitization services across 
          Etobicoke, Ontario. Our goal is to improve indoor air quality, remove dust buildup, allergens, and improve 
          overall HVAC system efficiency for residential and commercial properties in Etobicoke.
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
        <h2>Our Air Duct Cleaning Services in Etobicoke</h2>

        <p>
          Our Etobicoke duct cleaning services are designed to ensure your home or business has clean, healthy airflow. 
          We specialize in full HVAC system cleaning and remove dust, mold spores, allergens, and debris that build up 
          inside ducts over time in Etobicoke properties.
        </p>

        <ul>
          <li>Air Duct Cleaning Etobicoke</li>
          <li>Dryer Vent Cleaning Etobicoke</li>
          <li>Furnace Cleaning Etobicoke</li>
          <li>HVAC System Cleaning Etobicoke</li>
          <li>Duct Sanitization Etobicoke</li>
        </ul>

        <h3>Why Choose Our Etobicoke Team</h3>

        <p>
          Homeowners in Etobicoke trust our duct cleaning experts because we deliver fast, reliable, and affordable 
          services. We use professional-grade equipment to ensure deep cleaning of air ducts in Etobicoke homes 
          and commercial buildings.
        </p>

        <ul>
          <li>✔ Fast local service in Etobicoke</li>
          <li>✔ Affordable pricing with no hidden charges</li>
          <li>✔ Certified HVAC technicians</li>
          <li>✔ 100% satisfaction guarantee</li>
        </ul>
      </section>

  {/* MAP SECTION */}
<section style={{ padding: "40px 20px", textAlign: "center" }}>
  <h2>Service Area Map - Etobicoke</h2>

  <iframe
    src="https://www.google.com/maps?q=Etobicoke+Ontario+duct+cleaning&output=embed"
    width="100%"
    height="350"
    style={{ border: 0, borderRadius: "10px" }}
    loading="lazy"
  ></iframe>
</section>

      {/* TRUSTED CONTENT SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Trusted Air Duct Cleaning in Etobicoke</h2>

        <p>
          If you are searching for air duct cleaning in Etobicoke, our team provides complete HVAC cleaning solutions 
          tailored for Etobicoke homes. Dirty air ducts can reduce airflow, increase energy bills, and cause poor 
          indoor air quality. That is why professional duct cleaning in Etobicoke is important for every household.
        </p>

        <p>
          We serve all areas of Etobicoke including residential neighborhoods and commercial buildings. Our Etobicoke 
          duct cleaning services ensure that your HVAC system runs efficiently throughout the year. Many customers in 
          Etobicoke notice cleaner air and better heating/cooling performance after our service.
        </p>

        <p>
          Whether you need furnace cleaning, dryer vent cleaning, or full air duct cleaning in Etobicoke, our experts 
          are ready to help. We are a trusted name in Etobicoke for professional HVAC maintenance and deep cleaning.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h3>Nearby Service Areas</h3>

        <p>We also serve nearby cities:</p>

        <div style={{ marginTop: "10px" }}>
          <a href="/location/toronto">Toronto</a> |{" "}
          <a href="/location/mississauga">Mississauga</a> |{" "}
          <a href="/location/vaughan">Vaughan</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontWeight: "bold" }}>Need Air Duct Cleaning in Etobicoke?</h2>

        <p style={{ fontWeight: "bold" }}>
          Call now for same-day service
        </p>

        <div style={{ marginTop: "20px" }}>
          <a
            href="tel:2267772863"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              background: "green",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}
