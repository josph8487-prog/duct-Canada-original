import Image from "next/image";
import Link from "next/link";

/* =========================
   SEO METADATA (FULL)
========================= */
export const metadata = {
  title:
    "Air Duct Cleaning Markham, Toronto & GTA | Furnace & HVAC Cleaning Experts",
  description:
    "Professional air duct, furnace, dryer vent & HVAC cleaning services in Markham, Toronto, Vaughan, Richmond Hill & GTA. Fast, affordable & trusted service.",
  keywords:
    "air duct cleaning, furnace cleaning, HVAC cleaning, dryer vent cleaning Toronto, Markham duct cleaning",
  openGraph: {
    title: "Air Duct Cleaning GTA",
    description: "Trusted duct cleaning services in Toronto & GTA",
    url: "https://yourdomain.com",
    type: "website",
  },
};

/* =========================
   MAIN COMPONENT
========================= */
export default function Home() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Duct Cleaning Canada",
            telephone: "+1-226-777-2863",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Toronto",
              addressRegion: "ON",
              addressCountry: "CA",
            },
            areaServed: [
              "Markham",
              "Toronto",
              "Vaughan",
              "Richmond Hill",
              "North York",
              "Scarborough",
            ],
            serviceType: [
              "Air Duct Cleaning",
              "Furnace Cleaning",
              "HVAC Cleaning",
              "Dryer Vent Cleaning",
            ],
          }),
        }}
      />

      {/* ================= HERO SECTION ================= */}
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

        <div className="overlay"></div>

        <div className="heroContent">
          <h1 className="heroTitle">
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p className="heroSub">
            Professional duct cleaning, furnace cleaning & HVAC maintenance
            services across Ontario with fast response time.
          </p>

          <div className="heroButtons">
            <a href="tel:2267772863" className="btnPrimary">
              Call Now
            </a>
            <Link href="/services" className="btnSecondary">
              Explore Services
            </Link>
          </div>

          <div className="heroAreas">
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="section">
        <h2 className="sectionTitle">Our Professional Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Air Duct Cleaning</h3>
            <p>Improve indoor air quality & airflow efficiency.</p>
          </div>

          <div className="card">
            <h3>Furnace Cleaning</h3>
            <p>Increase heating performance & system life.</p>
          </div>

          <div className="card">
            <h3>Dryer Vent Cleaning</h3>
            <p>Prevent fire hazards and improve dryer efficiency.</p>
          </div>

          <div className="card">
            <h3>HVAC Cleaning</h3>
            <p>Full system cleaning for better performance.</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          We provide professional duct cleaning services using advanced tools
          and trained technicians. Our goal is to improve indoor air quality,
          reduce energy bills, and extend HVAC system life.
        </p>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faqBox">
          <p>
            <strong>How often should ducts be cleaned?</strong> Every 2–3 years.
          </p>

          <p>
            <strong>Does duct cleaning improve air quality?</strong> Yes,
            significantly reduces dust and allergens.
          </p>

          <p>
            <strong>How long does service take?</strong> Usually 2–4 hours
            depending on house size.
          </p>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="areas">
        <h2>Service Areas</h2>

        <div className="areaGrid">
          <span>Markham</span>
          <span>Toronto</span>
          <span>Vaughan</span>
          <span>Richmond Hill</span>
          <span>North York</span>
          <span>Scarborough</span>
          <span>Brampton</span>
          <span>Mississauga</span>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <p>⭐⭐⭐⭐⭐ Rated 5/5 by customers across GTA</p>
        <p>
          “Excellent service, very professional team, highly recommended!”
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Need Professional Duct Cleaning?</h2>
        <p>Call now for fast and reliable service</p>

        <a href="tel:2267772863" className="btnPrimary">
          Call Now
        </a>
      </section>

      {/* ================= STICKY BUTTONS ================= */}
      <a href="tel:2267772863" className="stickyCall">
        📞 Call Now
      </a>

      <a
        href="https://wa.me/12267772863"
        target="_blank"
        className="whatsapp"
      >
        💬 WhatsApp
      </a>

      {/* ================= CSS (FULL OPTIMIZED) ================= */}
      <style jsx>{`
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
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 20px;
        }

        .heroTitle {
          font-size: 42px;
          font-weight: 700;
        }

        .heroSub {
          margin: 15px 0;
          color: #e0e0e0;
        }

        .heroButtons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btnPrimary {
          background: #00c853;
          padding: 12px 20px;
          border-radius: 8px;
          color: white;
          text-decoration: none;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.15);
          padding: 12px 20px;
          border-radius: 8px;
          color: white;
          text-decoration: none;
        }

        .heroAreas {
          margin-top: 15px;
          font-size: 13px;
          color: #ccc;
        }

        .section {
          padding: 60px 20px;
          max-width: 1000px;
          margin: auto;
        }

        .sectionTitle {
          text-align: center;
          margin-bottom: 25px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
        }

        .card {
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 8px;
        }

        .about {
          padding: 60px 20px;
          text-align: center;
        }

        .faq {
          padding: 60px 20px;
          background: #f9f9f9;
          text-align: center;
        }

        .faqBox {
          max-width: 800px;
          margin: auto;
          text-align: left;
        }

        .areas {
          padding: 60px 20px;
          text-align: center;
        }

        .areaGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .reviews {
          padding: 60px 20px;
          text-align: center;
        }

        .cta {
          text-align: center;
          padding: 60px 20px;
        }

        .stickyCall {
          position: fixed;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #00c853;
          color: white;
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
