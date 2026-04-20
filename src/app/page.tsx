import Head from "next/head";

export default function Page() {

  const SITE_URL = "https://yourdomain.com";

  /* ================= FULL SCHEMA PACKAGE ================= */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Duct Cleaning Canada",
    "url": SITE_URL,
    "telephone": "+1-226-777-2863",
    "priceRange": "$$",
    "image": `${SITE_URL}/logo.png`,
    "logo": `${SITE_URL}/logo.png`,
    "description": "Professional air duct cleaning services in Markham, Toronto, Vaughan & GTA.",
    "areaServed": [
      "Markham",
      "Toronto",
      "Vaughan",
      "Richmond Hill",
      "North York",
      "GTA Ontario"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "sameAs": [
      "https://www.google.com/maps",
      "https://www.yelp.ca",
      "https://www.yellowpages.ca",
      "https://www.angieslist.com"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should air ducts be cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every 2–3 years depending on dust, pets, and HVAC usage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all GTA cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we cover Markham, Toronto, Vaughan, Richmond Hill, North York and surrounding GTA areas."
        }
      },
      {
        "@type": "Question",
        "name": "Is duct cleaning worth it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it improves air quality, HVAC efficiency, and reduces allergens and dust buildup."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
      { "@type": "ListItem", "position": 3, "name": "Air Duct Cleaning GTA", "item": `${SITE_URL}/duct-cleaning-gta` }
    ]
  };

  return (
    <>
      {/* ================= SEO HEAD (FULL STACK) ================= */}
      <Head>

        {/* CORE SEO */}
        <title>Air Duct Cleaning Markham | Toronto | Vaughan | GTA Experts</title>
        <meta name="description" content="Professional air duct cleaning in Markham, Toronto, Vaughan & GTA. Furnace, HVAC & dryer vent cleaning experts." />
        <meta name="keywords" content="air duct cleaning Markham, Toronto duct cleaning, Vaughan HVAC cleaning, GTA furnace cleaning, dryer vent cleaning Canada" />

        {/* INDEX CONTROL */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:large" />
        <meta name="googlebot" content="index, follow" />

        {/* CANONICAL */}
        <link rel="canonical" href={SITE_URL} />

        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Air Duct Cleaning GTA Experts" />
        <meta property="og:description" content="Trusted duct cleaning services in Markham, Toronto, Vaughan & GTA." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Air Duct Cleaning GTA Experts" />
        <meta name="twitter:description" content="Professional HVAC & duct cleaning services across Ontario." />

        {/* GEO SIGNALS */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ontario, Canada" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />

        {/* SCHEMA PACKAGE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

      </Head>

      {/* ================= PAGE CONTENT ================= */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>

        {/* HERO */}
        <header>
          <h1>Air Duct Cleaning Services in Markham, Toronto, Vaughan & GTA</h1>
          <p>
            Licensed HVAC cleaning experts improving indoor air quality, energy efficiency,
            and safety across Ontario residential and commercial properties.
          </p>
        </header>

        {/* TRUST SIGNALS */}
        <section>
          <strong>✔ Licensed • ✔ Insured • ✔ Certified Technicians • ✔ 5-Star Rated Local Service</strong>
        </section>

        {/* MAIN SEO CONTENT BLOCK */}
        <section>
          <h2>Complete Air Duct & HVAC Cleaning Across GTA</h2>
          <p>
            We specialize in deep air duct cleaning, furnace cleaning, dryer vent cleaning,
            and full HVAC system sanitization across Markham, Toronto, Vaughan, Richmond Hill,
            and surrounding GTA regions. Our advanced cleaning systems remove dust, allergens,
            mold spores, and debris from ventilation systems to improve indoor air quality and
            HVAC performance. Regular cleaning helps reduce energy bills, improve airflow,
            and extend system lifespan.
          </p>
        </section>

        {/* INTERNAL LINKING STRUCTURE */}
        <section>
          <h3>Service Locations</h3>
          <ul>
            <li><a href="/location/markham">Air Duct Cleaning Markham</a></li>
            <li><a href="/location/toronto">Air Duct Cleaning Toronto</a></li>
            <li><a href="/location/vaughan">Air Duct Cleaning Vaughan</a></li>
            <li><a href="/location/richmond-hill">Air Duct Cleaning Richmond Hill</a></li>
            <li><a href="/location/north-york">Air Duct Cleaning North York</a></li>
          </ul>
        </section>

        {/* LOCAL SEO REINFORCEMENT */}
        <section>
          <h2>Trusted Across Ontario</h2>
          <p>
            Our team is trusted across multiple GTA cities for residential homes, condos,
            commercial buildings, and offices. We provide same-day service, affordable pricing,
            and professional-grade HVAC cleaning solutions designed for Canadian weather conditions.
          </p>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Get Free Quote Today</h2>
          <button style={{ padding: "12px 20px", fontSize: "16px" }}>
            Contact Now
          </button>
        </section>

      </main>
    </>
  );
}
