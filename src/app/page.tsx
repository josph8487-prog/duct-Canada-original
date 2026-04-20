import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const phone = "+14379999999";

  const locations = [
    { name: "Markham", slug: "markham" },
    { name: "Toronto", slug: "toronto" },
    { name: "Vaughan", slug: "vaughan" },
    { name: "Richmond Hill", slug: "richmond-hill" },
  ];

  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>
          Air Duct Cleaning Markham, Toronto, Vaughan & Richmond Hill | $110
        </title>

        <meta
          name="description"
          content="Affordable air duct cleaning services in Markham, Toronto, Vaughan & Richmond Hill. Only $110. Same day service available."
        />

        <meta
          name="keywords"
          content="air duct cleaning Markham, duct cleaning Toronto, Vaughan duct cleaning, Richmond Hill air duct cleaning"
        />

        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Air Duct Cleaning GTA | $110 Offer" />
        <meta property="og:description" content="Book professional duct cleaning today." />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />

        {/* Geo Tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Markham" />
        <meta name="geo.position" content="43.8561;-79.3370" />
        <meta name="ICBM" content="43.8561, -79.3370" />
      </Head>

      {/* ================= TOP OFFER ================= */}
      <div style={{ background: "#000", color: "#fff", textAlign: "center", padding: "10px" }}>
        🔥 FULL DUCT CLEANING ONLY $110
        <a href={`tel:${phone}`} style={{ marginLeft: 10, color: "#00ff00" }}>
          Call Now
        </a>
      </div>

      {/* ================= HERO ================= */}
      <section style={{ padding: "60px 20px", display: "flex", flexWrap: "wrap" }}>

        <div style={{ flex: 1 }}>
          <h1>
            Air Duct Cleaning in Markham, Toronto, Vaughan & Richmond Hill
          </h1>

          <p>
            Professional duct cleaning services to improve indoor air quality,
            remove dust, allergens and increase HVAC efficiency.
          </p>

          <a href={`tel:${phone}`} className="btn btn-primary">
            📞 Call Now
          </a>

          <Link href="/services" className="btn btn-secondary">
            View Services
          </Link>
        </div>

        <div style={{ flex: 1, position: "relative", height: 400 }}>
          <Image
            src="/images/services/air-duct-cleaning.jpg"
            alt="Air duct cleaning Markham Toronto"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ================= INTERNAL LINK BOOST ================= */}
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Air Duct Cleaning Services Near You</h2>

        <p>
          We provide professional duct cleaning services across all major GTA cities.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {locations.map((loc, i) => (
            <Link key={i} href={`/location/${loc.slug}`}>
              Air Duct Cleaning {loc.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CONTENT BOOST (VERY IMPORTANT) ================= */}
      <section style={{ padding: "50px", maxWidth: "900px", margin: "0 auto" }}>
        <h2>Best Air Duct Cleaning Company in GTA</h2>

        <p>
          If you are looking for reliable and affordable air duct cleaning in Markham, Toronto,
          Vaughan or Richmond Hill, our expert team is here to help. We use advanced equipment
          to remove dust, debris, allergens and improve your indoor air quality.
        </p>

        <p>
          Our professional technicians ensure your HVAC system works efficiently, helping you
          save energy and reduce utility costs. With our $110 special offer, you get complete
          duct cleaning with no hidden charges.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section style={{ background: "#f4f4f4", padding: "60px", textAlign: "center" }}>
        <h2>Book Your Duct Cleaning Today</h2>
        <p>Limited Time Offer – Only $110</p>

        <a href={`tel:${phone}`} className="btn btn-primary">
          📞 Call Now
        </a>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ padding: "50px" }}>
        <h2>Frequently Asked Questions</h2>

        <h3>How often should air ducts be cleaned?</h3>
        <p>Every 2-3 years depending on usage.</p>

        <h3>Do you serve all GTA cities?</h3>
        <p>Yes, including Markham, Toronto, Vaughan and Richmond Hill.</p>
      </section>

      {/* ================= STICKY CALL ================= */}
      <a
        href={`tel:${phone}`}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#28a745",
          color: "#fff",
          padding: "15px 20px",
          borderRadius: "50px",
          fontWeight: "bold",
          zIndex: 999
        }}
      >
        📞 Call Now
      </a>

      {/* ================= FULL ADVANCED SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "name": "Air Duct Cleaning GTA",
                "url": "https://yourwebsite.com",
                "telephone": phone,
                "priceRange": "$110",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Markham",
                  "addressRegion": "ON",
                  "addressCountry": "CA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "43.8561",
                  "longitude": "-79.3370"
                },
                "areaServed": ["Markham", "Toronto", "Vaughan", "Richmond Hill"]
              },
              {
                "@type": "Service",
                "name": "Air Duct Cleaning",
                "areaServed": "GTA"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does duct cleaning cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our complete duct cleaning service costs only $110."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
