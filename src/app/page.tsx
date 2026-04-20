import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {

  const services = [
    {
      title: "Air Duct Cleaning",
      text: "Improve air quality and airflow with professional duct cleaning.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning",
      text: "Boost heating efficiency and extend furnace life.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Prevent fire hazards and improve dryer performance.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "HVAC Cleaning",
      text: "Complete HVAC cleaning for better performance.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
  ];

  return (
    <>
      {/* 🔥 HERO (MODERN + MOBILE FIX + OVERLAY) */}
      <section style={{
        position: "relative",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center",
        backgroundImage: "url('/images/services/air-duct-cleaning.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8))"
        }}></div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "auto" }}>

          <h1 style={{
            fontSize: "clamp(26px, 5vw, 42px)",
            fontWeight: "700",
            marginBottom: "15px",
            background: "linear-gradient(90deg, #ffffff, #b9f6ca)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            letterSpacing: "0.5px",
            lineHeight: "1.2"
          }}>
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p style={{
            fontSize: "clamp(15px, 4vw, 18px)",
            marginBottom: "25px",
            color: "#ddd"
          }}>
            Professional duct, furnace, dryer vent & HVAC cleaning across Ontario.
          </p>

          {/* CTA BUTTONS */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>

            <a href="tel:2267772863" style={{
              padding: "14px 24px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600"
            }}>
              Call Now
            </a>

            <Link href="/services" style={{
              padding: "14px 24px",
              background: "#00c853",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600"
            }}>
              Explore Services
            </Link>

          </div>

          {/* SERVICE AREAS */}
          <div style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#ccc"
          }}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>

        </div>
      </section>

      {/* 🔥 SERVICES GRID */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>

          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            Our Services
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "20px"
          }}>

            {services.map((service, index) => (
              <div key={index} style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
              }}>
                <div style={{ position: "relative", height: "180px" }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} />
                </div>

                <div style={{ padding: "15px" }}>
                  <h3>{service.title}</h3>
                  <p style={{ fontSize: "14px" }}>{service.text}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🔥 SERVICE AREAS */}
      <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>

          <h2 style={{
            fontSize: "clamp(20px,5vw,30px)",
            marginBottom: "10px"
          }}>
            Service Areas
          </h2>

          <p style={{ marginBottom: "20px" }}>
            We cover major cities in GTA
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px"
          }}>

            <Link href="/location/markham" style={areaBtn}>Markham</Link>
            <Link href="/location/toronto" style={areaBtn}>Toronto</Link>
            <Link href="/location/vaughan" style={areaBtn}>Vaughan</Link>
            <Link href="/location/richmond-hill" style={areaBtn}>Richmond Hill</Link>

          </div>

        </div>
      </section>

      {/* 🔥 CTA FINAL */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Need Duct Cleaning Service?</h2>
        <p>Call now for fast service</p>

        <a href="tel:2267772863" style={{
          marginTop: "15px",
          display: "inline-block",
          padding: "14px 24px",
          background: "green",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600"
        }}>
          Call Now
        </a>
      </section>

      {/* 🔥 STICKY MOBILE BUTTON */}
      <a href="tel:2267772863" style={{
        position: "fixed",
        bottom: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "green",
        color: "#fff",
        padding: "14px 30px",
        borderRadius: "50px",
        fontWeight: "700",
        zIndex: 9999,
        boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
      }}>
        📞 Call Now
      </a>

    </>
  );
}

const areaBtn = {
  padding: "10px 18px",
  border: "1px solid #000",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#000",
  fontWeight: "500"
};
