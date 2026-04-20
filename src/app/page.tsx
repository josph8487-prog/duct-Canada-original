import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

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
      {/* SEO META */}
      <Head>
        <title>Air Duct Cleaning Markham, Toronto & GTA | Duct Canada</title>
        <meta name="description" content="Professional air duct, furnace, dryer vent & HVAC cleaning services in Markham, Toronto & GTA. Call now for fast service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Duct Cleaning Canada",
            "telephone": "+1-226-777-2863",
            "areaServed": ["Markham","Toronto","Vaughan","Richmond Hill","North York"],
            "service": ["Air Duct Cleaning","Furnace Cleaning","Dryer Vent Cleaning","HVAC Cleaning"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How often should air ducts be cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every 2–3 years depending on dust and usage."
                }
              },
              {
                "@type": "Question",
                "name": "Is duct cleaning worth it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, it improves indoor air quality and HVAC efficiency."
                }
              }
            ]
          }
        ])
      }} />

      {/* HERO */}
      <section style={{
        position: "relative",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center",
        backgroundImage: "url('/images/services/air-duct-cleaning.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

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

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            <a href="tel:2267772863" style={btnGlass}>Call Now</a>
            <Link href="/services" style={btnPrimary}>Explore Services</Link>
          </div>

          <div style={{ marginTop: "20px", fontSize: "14px", color: "#ccc" }}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Our Services</h2>

          <div style={grid}>
            {services.map((service, index) => (
              <div key={index} style={card}>
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

      {/* SERVICE AREAS */}
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

      {/* FAQ */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>

        <div style={{ maxWidth: "800px", margin: "20px auto" }}>
          <details>
            <summary>How often should air ducts be cleaned?</summary>
            <p>Every 2–3 years depending on usage and dust levels.</p>
          </details>

          <details>
            <summary>Is duct cleaning worth it?</summary>
            <p>Yes, it improves air quality and HVAC performance.</p>
          </details>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#f9f9f9" }}>
        <h2>What Our Customers Say</h2>
        <p>⭐⭐⭐⭐⭐ Trusted by customers across GTA</p>
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

/* STYLES */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "20px"
};

const card = {
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
};

const btnPrimary = {
  padding: "14px 24px",
  background: "#00c853",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600"
};

const btnGlass = {
  padding: "14px 24px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600"
};

const stickyCall = {
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
  zIndex: 9999
};

const areaBtn = {
  padding: "10px 18px",
  border: "1px solid #000",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#000",
  fontWeight: "500"
};
