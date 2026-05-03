                import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

// 1. DYNAMIC METADATA (Google Search ke liye)
export const metadata = {
  title: 'Best Air Duct Cleaning Markham, Toronto & GTA | Professional HVAC Services',
  description: 'Top-rated air duct cleaning in Markham, Toronto, and GTA. We offer furnace cleaning, dryer vent cleaning, and HVAC sanitization. Book your professional cleaning today!',
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
  openGraph: {
    title: 'Air Duct Cleaning Services in Markham & GTA',
    description: 'Improve your indoor air quality with our expert duct cleaning services.',
    url: 'https://yourwebsite.com',
    siteName: 'Your Business Name',
    images: [{ url: '/images/services/air-duct-cleaning.jpg' }],
    type: 'website',
  },
};

// 2. FULL SCHEMA MARKUP (Local Business + Services)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://yourwebsite.com",
      "name": "Your Business Name",
      "url": "https://yourwebsite.com",
      "telephone": "+1-XXX-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Markham",
        "addressRegion": "ON",
        "postalCode": "L3P",
        "addressCountry": "CA"
      },
      "areaServed": ["Markham", "Toronto", "Vaughan", "Richmond Hill", "North York", "GTA"],
      "image": "https://yourwebsite.com"
    },
    {
      "@type": "Service",
      "serviceType": "Air Duct Cleaning",
      "provider": { "@id": "https://yourwebsite.com" },
      "areaServed": { "@type": "City", "name": "Markham" }
    }
  ]
};

export default function Home() {
  const services = [
    {
      title: "Air Duct Cleaning Markham & GTA",
      text: "Professional air duct cleaning services in Markham, Toronto and GTA. Improve indoor air quality and airflow.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning",
      text: "Improve heating efficiency and extend furnace life with expert cleaning services.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Prevent fire hazards and improve dryer performance with professional vent cleaning.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "HVAC Blower Cleaning",
      text: "Improve airflow and energy efficiency with professional blower cleaning.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
    {
      title: "Duct Sanitization",
      text: "Remove bacteria, mold and odors with eco-friendly sanitization services.",
      image: "/images/services/sanitization.jpg"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContentWrapper} style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className={styles.heroLeft}>
              <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>
                <h1 className={styles.heroTitle}>
                  Air Duct Cleaning Services in Markham, Toronto & GTA
                </h1>

                <p className={styles.heroSubtitle}>
                  Trusted duct cleaning company offering air duct, dryer vent, furnace and HVAC cleaning services across Ontario.
                </p>

                <Link href="/services" className="btn btn-primary">
                  Explore Services
                </Link>

                <div style={{
                  marginTop: "25px",
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "bold",
                  background: "#fff",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  display: "inline-block",
                  borderLeft: "5px solid #0056b3"
                }}>
                  <strong style={{ color: "#0056b3" }}>Serving:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
                </div>
              </div>
            </div>
            <div className={styles.heroRight}></div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2>Service Areas We Cover</h2>
            <p style={{ marginBottom: "30px", color: "#555" }}>
              Expert duct cleaning in Markham and surrounding GTA areas.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
              {["Markham", "Toronto", "Vaughan", "Richmond-Hill"].map((city) => (
                <Link key={city} href={`/location/${city.toLowerCase()}`} style={areaBtnStyle}>
                  {city.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className={`section ${styles.servicesPreview}`}>
          <div className="container">
            <h2 className="section-title">Our Professional Services</h2>

            <div className={styles.featureGrid}>
              {services.map((service, index) => (
                <article key={index} className={styles.featureCard}>
                  <div style={{ position: 'relative', height: '220px' }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} in Markham and GTA`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const areaBtnStyle = {
  padding: "12px 25px",
  backgroundColor: "#0056b3",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "15px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  transition: "0.3s"
};
