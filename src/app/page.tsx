import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Air Duct Cleaning Markham, Toronto & GTA | Furnace & HVAC Cleaning Experts",
  description:
    "Professional air duct, furnace, dryer vent & HVAC cleaning services across Markham, Toronto, Vaughan, Richmond Hill & GTA.",
  keywords:
    "duct cleaning Toronto, furnace cleaning Markham, HVAC cleaning GTA, dryer vent cleaning",
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
            email: "ductcleaningcanada2@gmail.com",
            address: "35 Carlton Rd, Markham, ON L3R 1Z4",
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
              "Dryer Vent Cleaning",
              "HVAC Cleaning",
              "Sanitization Services",
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
            Professional duct, furnace, dryer vent & HVAC cleaning across Ontario.
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

      {/* ================= QUICK LINKS ================= */}
      <section className="section">
        <h2 className="titleCenter">Quick Links</h2>

        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section">
        <h2 className="titleCenter">Our Services</h2>

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
            <p>Prevent fire hazards & improve safety.</p>
          </div>

          <div className="card">
            <h3>HVAC Cleaning</h3>
            <p>Full system cleaning for maximum efficiency.</p>
          </div>

          <div className="card">
            <h3>Sanitization Services</h3>
            <p>Remove bacteria & improve indoor hygiene.</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a professional duct cleaning company serving Ontario. Our goal
          is to improve indoor air quality, reduce dust, and increase HVAC
          efficiency for homes and businesses.
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
            <strong>Does duct cleaning improve air quality?</strong> Yes, it
            removes dust, allergens & bacteria.
          </p>

          <p>
            <strong>How long does service take?</strong> Usually 2–4 hours.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact">
        <h2>Contact Us</h2>

        <p>📍 35 Carlton Rd, Markham, ON L3R 1Z4</p>
        <p>📞 226-777-2863</p>
        <p>📧 ductcleaningcanada2@gmail.com</p>

        <a href="https://wa.me/12267772863" className="btnPrimary">
          Chat on WhatsApp
        </a>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="areasSection">
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

      {/* ================= SOCIAL ================= */}
      <section className="social">
        <h2>Follow Us</h2>

        <div className="socialLinks">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
          <a href="#">Yelp</a>
          <a href="#">Hotfrog</a>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Need Professional Cleaning?</h2>

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

      {/* ================= DARK THEME CSS ================= */}
      <style jsx>{`
        body {
          background: #0a0a0a;
          color: #ffffff;
        }

        .hero {
          position: relative;
          height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          color: #fff;
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
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }

        .btnSecondary {
          background: rgba(255,255,255,0.2);
          padding: 12px 20px;
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
        }

        .section {
          padding: 60px 20px;
          max-width: 1000px;
          margin: auto;
        }

        .titleCenter {
          text-align: center;
          margin-bottom: 25px;
          color: #fff;
        }

        .links a {
          color: #fff;
          margin: 0 10px;
          text-decoration: none;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
          gap: 15px;
        }

        .card {
          background: #111;
          border: 1px solid #333;
          padding: 15px;
          border-radius: 8px;
        }

        .about,
        .faq,
        .contact,
        .social,
        .areasSection {
          padding: 60px 20px;
          text-align: center;
          color: #fff;
        }

        .socialLinks a {
          color: #fff;
          margin: 0 10px;
        }

        .areaGrid span {
          color: #fff;
          margin: 5px;
        }

        .sticky {
          position: fixed;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #00c853;
          padding: 12px 24px;
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }

        .whatsapp {
          position: fixed;
          bottom: 80px;
          right: 15px;
          background: #25d366;
          padding: 12px 16px;
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
