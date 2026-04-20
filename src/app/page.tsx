import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Air Duct Cleaning Markham, Toronto & GTA | HVAC Experts",
  description:
    "Professional air duct, furnace, dryer vent & HVAC cleaning services across GTA.",
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
            address: "Markham, Ontario, Canada",
            areaServed: ["Markham", "Toronto", "Vaughan", "Richmond Hill"],
          }),
        }}
      />

      {/* ================= HERO ================= */}
      <header className="hero">
        <Image
          src="/images/services/air-duct-cleaning.jpg"
          alt="Air duct cleaning GTA"
          fill
          priority
          sizes="100vw"
          quality={60}
          className="heroImg"
        />

        <div className="overlay" />

        <div className="heroContent">
          <h1>Air Duct Cleaning Services in GTA</h1>

          <h2>Professional HVAC Cleaning Experts</h2>

          <p>
            Improve indoor air quality with expert duct, furnace & HVAC cleaning.
          </p>

          <a href="tel:2267772863" className="btn">
            Call Now
          </a>
        </div>
      </header>

      {/* ================= SERVICES ================= */}
      <section>
        <h2>Our Services</h2>

        <h3>Air Duct Cleaning</h3>
        <h3>Furnace Cleaning</h3>
        <h3>Dryer Vent Cleaning</h3>
        <h3>HVAC Cleaning</h3>
        <h3>Sanitization Services</h3>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section>
        <h2>Service Areas</h2>
        <p>Markham • Toronto • Vaughan • Richmond Hill • North York</p>
      </section>

      {/* ================= ABOUT ================= */}
      <section>
        <h2>About Us</h2>
        <p>
          We are a professional HVAC cleaning company serving residential and
          commercial clients across Ontario with advanced cleaning solutions.
        </p>
      </section>

      {/* ================= BLOG SECTION (SEO BOOST) ================= */}
      <section>
        <h2>Latest Blogs</h2>

        <article>
          <h3>Why Air Duct Cleaning is Important</h3>
          <p>
            Dirty ducts affect air quality, allergies, and HVAC efficiency.
          </p>
        </article>

        <article>
          <h3>How Often Should You Clean HVAC System?</h3>
          <p>Experts recommend cleaning every 2–3 years.</p>
        </article>
      </section>

      {/* ================= TRUST / BACKLINK SIGNAL ================= */}
      <section>
        <h2>Trusted Listings</h2>
        <p>Google Business • Yelp • Yellow Pages • Hotfrog</p>
      </section>

      {/* ================= CONTACT ================= */}
      <section>
        <h2>Contact</h2>
        <p>📍 Markham, Ontario</p>
        <p>📞 226-777-2863</p>
        <p>📧 ductcleaningcanada2@gmail.com</p>
      </section>

      {/* ================= FIXED BUTTONS ================= */}
      <a href="tel:2267772863" className="call">
        Call Now
      </a>

      <a href="https://wa.me/12267772863" className="wa">
        WhatsApp
      </a>

      {/* ================= STYLES (LCP + SEO FIX) ================= */}
      <style jsx>{`
        body {
          background: #0a0a0a;
          color: #ffffff;
        }

        /* HERO */
        .hero {
          position: relative;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .heroImg {
          object-fit: cover;
          filter: brightness(0.55);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        h1 {
          font-size: 42px;
          color: #fff;
        }

        h2, h3, p {
          color: #eaeaea;
        }

        section {
          padding: 60px 20px;
          text-align: center;
        }

        .btn {
          display: inline-block;
          margin-top: 15px;
          padding: 12px 20px;
          background: #00c853;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
        }

        .call {
          position: fixed;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #00c853;
          padding: 12px 20px;
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
        }

        .wa {
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
