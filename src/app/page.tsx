import Image from "next/image";
import Link from "next/link";

/* ✅ SEO META (App Router correct way) */
export const metadata = {
  title: "Air Duct Cleaning Markham, Toronto & GTA | Duct Canada",
  description:
    "Professional air duct, furnace, dryer vent & HVAC cleaning services in Markham, Toronto & GTA. Call now for fast service.",
};

export default function Home() {
  const services = [
    {
      title: "Air Duct Cleaning",
      text: "Improve air quality and airflow with professional duct cleaning.",
      image: "/images/services/air-duct-cleaning.jpg",
    },
    {
      title: "Furnace Cleaning",
      text: "Boost heating efficiency and extend furnace life.",
      image: "/images/services/furnace-cleaning.jpg",
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Prevent fire hazards and improve dryer performance.",
      image: "/images/services/dryer-vent-cleaning.jpg",
    },
    {
      title: "HVAC Cleaning",
      text: "Complete HVAC cleaning for better performance.",
      image: "/images/services/blower-fan-cleaning.jpg",
    },
  ];

  return (
    <>
      {/* ✅ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Duct Cleaning Canada",
            telephone: "+1-226-777-2863",
            areaServed: [
              "Markham",
              "Toronto",
              "Vaughan",
              "Richmond Hill",
              "North York",
            ],
          }),
        }}
      />

      {/* HERO */}
      <section style={heroSection}>
        {/* ✅ FAST LCP IMAGE */}
        <Image
          src="/images/services/air-duct-cleaning.jpg"
          alt="Air duct cleaning service"
          fill
          priority
          quality={60}
          style={{ objectFit: "cover" }}
        />

        {/* OVERLAY */}
        <div style={overlay}></div>

        <div style={heroContent}>
          <h1 style={heading}>
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p style={subText}>
            Professional duct, furnace, dryer vent & HVAC cleaning across Ontario.
          </p>

          <div style={btnWrap}>
            <a href="tel:2267772863" style={btnGlass}>
              Call Now
            </a>

            <Link href="/services" style={btnPrimary}>
              Explore Services
            </Link>
          </div>

          <div style={serviceAreas}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            Our Services
          </h2>

          <div style={grid}>
            {services.map((service, index) => (
              <div key={index} style={card}>
                <div style={{ position: "relative", height: "180px" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    quality={60}
                    sizes="(max-width:768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
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

      {/* FAQ */}
      <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ maxWidth: "800px", margin: "20px auto" }}>
          <details>
            <summary>How often should air ducts be cleaned?</summary>
            <p>Every 2–3 years depending on dust and usage.</p>
          </details>

          <details>
            <summary>Is duct cleaning worth it?</summary>
            <p>Yes, it improves air quality and HVAC efficiency.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Need Duct Cleaning Service?</h2>
        <p>Call now for fast service</p>

        <a href="tel:2267772863" style={btnPrimary}>
          Call Now
        </a>
      </section>

      {/* STICKY CALL */}
      <a href="tel:2267772863" style={stickyCall}>
        📞 Call Now
      </a>

      {/* WHATSAPP */}
      <a href="https://wa.me/12267772863" target="_blank" style={whatsappBtn}>
        💬 WhatsApp
      </a>
    </>
  );
}

/* 🔧 STYLES (clean + error free) */
const heroSection = {
  position: "relative",
  padding: "80px 20px",
  color: "#fff",
  textAlign: "center",
  minHeight: "400px",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.85))",
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  maxWidth: "900px",
  margin: "auto",
};

const heading = {
  fontSize: "clamp(26px, 5vw, 42px)",
  fontWeight: "700",
  marginBottom: "15px",
  color: "#e8f5e9",
  textShadow: "0 3px 12px rgba(0,0,0,0.9)",
};

const subText = {
  fontSize: "clamp(15px, 4vw, 18px)",
  marginBottom: "25px",
  color: "#eeeeee",
};

const btnWrap = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
};

const serviceAreas = {
  marginTop: "20px",
  fontSize: "14px",
  color: "#ccc",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "20px",
};

const card = {
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
};

const btnPrimary = {
  padding: "14px 24px",
  background: "#00c853",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
};

const btnGlass = {
  padding: "14px 24px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
};

const stickyCall = {
  position: "fixed",
  bottom: "15px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#00c853",
  color: "#fff",
  padding: "14px 30px",
  borderRadius: "50px",
  fontWeight: "700",
  zIndex: 9999,
};

const whatsappBtn = {
  position: "fixed",
  bottom: "80px",
  right: "15px",
  background: "#25D366",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: "50px",
  fontWeight: "600",
  textDecoration: "none",
  zIndex: 9999,
};
