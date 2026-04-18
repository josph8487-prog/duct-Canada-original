import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {

  const services = [
    {
      title: "Air Duct Cleaning",
      text: "Professional air duct cleaning to remove dust, allergens and improve indoor air quality across GTA.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning",
      text: "Improve heating efficiency and extend furnace life with deep furnace cleaning service.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Prevent fire hazards and improve dryer performance with expert vent cleaning.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "HVAC Cleaning",
      text: "Full HVAC system cleaning for better airflow and energy efficiency.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
    {
      title: "Duct Sanitization",
      text: "Eliminate bacteria, mold and odors for a healthier home environment.",
      image: "/images/services/sanitization.jpg"
    }
  ];

  return (
    <>

      {/* HERO */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#0f172a",
        color: "#fff"
      }}>

        <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "15px" }}>
          Professional Air Duct Cleaning Services in GTA
        </h1>

        <p style={{
          maxWidth: "800px",
          margin: "auto",
          fontSize: "16px",
          color: "#cbd5e1"
        }}>
          Trusted duct cleaning company offering air duct, furnace, dryer vent and HVAC cleaning services in Markham, Toronto, Vaughan and Richmond Hill.
        </p>

        <Link href="/contact" style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "12px 25px",
          background: "#22c55e",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600"
        }}>
          Get Free Quote
        </Link>

        <div style={{
          marginTop: "25px",
          fontSize: "14px",
          color: "#94a3b8"
        }}>
          Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
        </div>

      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>

        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Service Areas We Cover
        </h2>

        <p style={{ color: "#555", marginBottom: "25px" }}>
          Fast & reliable duct cleaning services across GTA cities.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px"
        }}>

          <Link href="/location/markham" style={areaBtn}>Markham</Link>
          <Link href="/location/toronto" style={areaBtn}>Toronto</Link>
          <Link href="/location/vaughan" style={areaBtn}>Vaughan</Link>
          <Link href="/location/richmond-hill" style={areaBtn}>Richmond Hill</Link>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>

          <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
            Our Professional Services
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}>

            {services.map((s, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
              }}>

                <div style={{ position: "relative", height: "200px" }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover" }} />
                </div>

                <div style={{ padding: "15px" }}>
                  <h3 style={{ marginBottom: "10px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "#555" }}>{s.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>

        <h2>Why Choose Us?</h2>

        <div style={{
          maxWidth: "900px",
          margin: "auto",
          color: "#444",
          lineHeight: "1.8"
        }}>

          ✔ Fast Same-Day Service<br />
          ✔ Certified HVAC Technicians<br />
          ✔ Affordable Transparent Pricing<br />
          ✔ 100% Customer Satisfaction<br />
          ✔ Eco-Friendly Cleaning Methods

        </div>

      </section>

      {/* CTA */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#0f172a",
        color: "#fff"
      }}>

        <h2>Need Air Duct Cleaning Today?</h2>
        <p>Call now for fast service in your area</p>

        <a href="tel:2267772863" style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "12px 25px",
          background: "#22c55e",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          Call Now
        </a>

      </section>

    </>
  );
}

const areaBtn = {
  padding: "10px 16px",
  border: "1px solid #000",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#000",
  fontWeight: "500",
  background: "#fff"
};
