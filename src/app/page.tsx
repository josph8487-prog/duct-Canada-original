import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {

  return (
    <>

      {/* 🔥 HERO SECTION (MODERN AGENCY STYLE) */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden"
      }}>

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/services/air-duct-cleaning.jpg"
          alt="Air Duct Cleaning GTA"
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        {/* GRADIENT OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.45))",
        }} />

        {/* CONTENT */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          padding: "20px"
        }}>

          <h1 style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: "800",
            marginBottom: "15px"
          }}>
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p style={{
            fontSize: "16px",
            opacity: 0.95,
            marginBottom: "25px",
            lineHeight: "1.6"
          }}>
            Trusted duct cleaning company offering air duct, furnace, dryer vent and HVAC cleaning services across Ontario.
          </p>

          {/* CTA BUTTON */}
          <Link href="/contact" style={{
            display: "inline-block",
            padding: "14px 26px",
            background: "#22c55e",
            color: "#fff",
            borderRadius: "10px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(34,197,94,0.3)"
          }}>
            Get Free Quote
          </Link>

          {/* SERVING LINE */}
          <div style={{
            marginTop: "18px",
            fontSize: "14px",
            opacity: 0.85
          }}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>

        </div>

      </section>

      {/* 🔥 TRUST / INFO SECTION */}
      <section style={{
        padding: "60px 20px",
        background: "#f9f9f9",
        textAlign: "center"
      }}>

        <div style={{ maxWidth: "900px", margin: "auto" }}>

          <h2 style={{ marginBottom: "15px" }}>
            Cleaning Services in Markham, Toronto, Vaughan & Richmond Hill
          </h2>

          <p style={{
            color: "#444",
            lineHeight: "1.7",
            fontSize: "15px"
          }}>
            We provide professional air duct cleaning, furnace cleaning, dryer vent cleaning and HVAC services across Markham, Toronto, Vaughan and Richmond Hill. Our goal is to improve indoor air quality and HVAC efficiency for homes and businesses.
          </p>

          <Link href="/services" style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            border: "1px solid #000",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#000"
          }}>
            Explore Services
          </Link>

        </div>

      </section>

      {/* 🔥 SERVICE AREAS */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>

        <h2>Service Areas</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px"
        }}>

          <Link href="/location/markham" style={areaBtn}>Markham</Link>
          <Link href="/location/toronto" style={areaBtn}>Toronto</Link>
          <Link href="/location/vaughan" style={areaBtn}>Vaughan</Link>
          <Link href="/location/richmond-hill" style={areaBtn}>Richmond Hill</Link>

        </div>

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
  background: "#fff",
  fontSize: "14px"
};
