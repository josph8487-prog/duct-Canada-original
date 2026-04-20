import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Air Duct Cleaning Markham, Toronto & GTA | Furnace & HVAC Experts",
  description:
    "Professional air duct, furnace, dryer vent & HVAC cleaning services in GTA. Fast and reliable service.",
  keywords:
    "duct cleaning Toronto, furnace cleaning Markham, HVAC cleaning GTA",
};

export default function Home() {
  return (
    <>
      {/* ================= SCHEMA ================= */}
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

      {/* ================= HERO ================= */}
      <section className="hero">
        <Image
          src="/images/services/air-duct-cleaning.jpg"
          alt="Air duct cleaning GTA"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="heroImg"
        />

        <div className="overlay" />

        <div className="heroContent">
          <h1 className="heroTitle">
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p className="heroSub">
            Professional duct, furnace & HVAC cleaning services across Ontario.
          </p>

          <div className="btnWrap">
            <a href="tel:2267772863" className="btnPrimary">
              Call Now
            </a>

            <Link href="/services" className="btnSecondary">
              Services
            </Link>
          </div>

          <div className="areas">
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section">
        <h2 className="titleCenter">Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Air Duct Cleaning</h3>
            <p>Improve air quality & airflow efficiency.</p>
          </div>

          <div className="card">
            <h3>Furnace Cleaning</h3>
            <p>Boost heating performance & system life.</p>
          </div>

          <div className="card">
            <h3>Dryer Vent Cleaning</h3>
            <p>Prevent fire hazards & improve safety.</p>
          </div>

          <div className="card">
            <h3>HVAC Cleaning</h3>
            <p>Full system cleaning for maximum efficiency.</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT (FIXED CONTRAST) ================= */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          We provide professional duct cleaning services using advanced tools,
          trained technicians, and guaranteed results to improve indoor air
          quality and HVAC performance.
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faqBox">
          <p>
            <strong>How often should ducts be cleaned?</strong> Every 2–3 years.
          </p>

          <p>
            <strong>Does it improve air quality?</strong> Yes, removes dust and
            allergens.
          </p>

          <p>
            <strong>Service time?</strong> 2–4 hours depending on house size.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Need Professional Duct Cleaning?</h2>
        <a href="tel:2267772863" className="btnPrimary">
          Call Now
        </a>
      </section>

      {/* ================= FIXED BUTTONS ================= */}
      <a href="tel:2267772863" className="sticky">
        📞 Call Now
      </a>

      <a
        href="https://wa.me/12267772863"
        target="_blank"
        className="whatsapp"
      >
        💬 WhatsApp
      </a>

      {/* ================= DARK THEME CSS (FIXED CONTRAST) ================= */}
      <style jsx>{`
        body {
          background: #0a0a0a;
        }

        .hero {
          position: relative;
          height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          overflow: hidden;
        }

        .heroImg {
          object-fit: cover;
          filter: brightness(0.5) contrast(1.2);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 20px;
        }

        .heroTitle {
          font-size: 42px;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 1);
        }

        .heroSub {
          margin: 15px 0;
          color: #eaeaea;
        }

        .btnWrap {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btnPrimary {
          background: #00c853;
          padding: 12px 20px;
          border-radius: 8px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 20px;
          border-radius: 8px;
          color: #ffffff;
          text-decoration: none;
        }

        .areas {
          margin-top: 15px;
          font-size: 13px;
          color: #cfcfcf;
        }

        .section {
          padding: 60px 20px;
          max-width: 1000px;
          margin: auto;
          color: #fff;
        }

        .titleCenter {
          text-align: center;
          margin-bottom: 25px;
          color: #ffffff;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
        }

        .card {
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #333;
          background: #111;
          color: #fff;
        }

        .about {
          padding: 60px 20px;
          text-align: center;
          background: #0d0d0d;
          color: #ffffff; /* ✅ FIXED WHITE TEXT */
        }

        .faq {
          padding: 60px 20px;
          background: #111;
          color: #ffffff;
          text-align: center;
        }

        .faqBox {
          max-width: 800px;
          margin: auto;
          text-align: left;
        }

        .cta {
          text-align: center;
          padding: 60px 20px;
          color: #fff;
        }

        .sticky {
          position: fixed;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #00c853;
          color: #fff;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          z-index: 9999;
        }

        .whatsapp {
          position: fixed;
          bottom: 80px;
          right: 15px;
          background: #25d366;
          color: white;
          padding: 12px 16px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
