import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Air Duct Cleaning Markham, Toronto & GTA | Duct Canada",
  description:
    "Professional air duct, furnace, dryer vent & HVAC cleaning services in Markham, Toronto & GTA. Fast and reliable service.",
  openGraph: {
    title: "Air Duct Cleaning GTA",
    description:
      "Professional duct cleaning services in Markham, Toronto & GTA.",
    url: "https://yourdomain.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Duct Cleaning Canada",
            telephone: "+1-226-777-2863",
            areaServed: ["Markham", "Toronto", "Vaughan", "Richmond Hill"],
            serviceType: [
              "Air Duct Cleaning",
              "Furnace Cleaning",
              "Dryer Vent Cleaning",
              "HVAC Cleaning",
            ],
          }),
        }}
      />

      {/* HERO SECTION (OPTIMIZED LCP) */}
      <section className="hero">
        <Image
          src="/images/services/air-duct-cleaning.jpg"
          alt="Air duct cleaning service"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="heroImg"
        />

        <div className="overlay"></div>

        <div className="heroContent">
          <h1 className="title">
            Air Duct Cleaning Services in Markham, Toronto & GTA
          </h1>

          <p className="subtitle">
            Professional duct, furnace, dryer vent & HVAC cleaning services.
          </p>

          <div className="buttons">
            <a href="tel:2267772863" className="btnPrimary">
              Call Now
            </a>
            <Link href="/services" className="btnSecondary">
              Explore Services
            </Link>
          </div>

          <div className="areas">
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>
        </div>
      </section>

      {/* SERVICES (LIGHTWEIGHT) */}
      <section className="section">
        <h2>Our Services</h2>

        <div className="grid">
          {[
            "Air Duct Cleaning",
            "Furnace Cleaning",
            "Dryer Vent Cleaning",
            "HVAC Cleaning",
          ].map((item, i) => (
            <div key={i} className="card">
              <h3>{item}</h3>
              <p>Professional cleaning service across GTA</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (SEO BOOST) */}
      <section className="faqSection">
        <h2>Frequently Asked Questions</h2>

        <div className="faqBox">
          <p>
            <strong>How often should ducts be cleaned?</strong> Every 2–3 years.
          </p>
          <p>
            <strong>Is it worth it?</strong> Yes, improves air quality & HVAC
            efficiency.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Duct Cleaning Service?</h2>
        <a href="tel:2267772863" className="btnPrimary">
          Call Now
        </a>
      </section>

      {/* STICKY CALL */}
      <a href="tel:2267772863" className="stickyCall">
        📞 Call Now
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/12267772863"
        target="_blank"
        className="whatsapp"
      >
        💬 WhatsApp
      </a>

      {/* OPTIMIZED CSS (NO RENDER BLOCK ISSUES) */}
      <style jsx>{`
        .hero {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          color: white;
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
          max-width: 850px;
          padding: 20px;
        }

        .title {
          font-size: clamp(24px, 5vw, 42px);
          font-weight: 700;
          color: #ffffff;
        }

        .subtitle {
          color: #e0e0e0;
          margin: 10px 0 20px;
        }

        .buttons {
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
          font-weight: 600;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.15);
          padding: 12px 20px;
          border-radius: 8px;
          color: white;
          text-decoration: none;
        }

        .areas {
          margin-top: 15px;
          font-size: 13px;
          color: #cccccc;
        }

        .section {
          padding: 50px 20px;
          max-width: 1000px;
          margin: auto;
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

        .faqSection {
          padding: 60px 20px;
          background: #f9f9f9;
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
          text-decoration: none;
          font-weight: 600;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
