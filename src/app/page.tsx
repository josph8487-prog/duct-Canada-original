import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

// 1. DYNAMIC METADATA
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

// 2. FULL SCHEMA MARKUP
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
        {/* FIXED HERO SECTION */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '0', background: 'var(--gray-50)' }}>
          
          {/* Blue Shape Background - Desktop Only Fix */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '45%', 
            height: '100%', 
            backgroundColor: 'var(--secondary)', 
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', 
            zIndex: 0
          }} className="hide-mobile" /> 

          <div className="hero-wrapper-fixed container">
            {/* Left Side Content */}
            <div className="hero-text-fixed" style={{ padding: '4rem 0', zIndex: 1 }}>
              <h1 className="hero-heading-fixed">
                Air Duct Cleaning Services in Markham, Toronto & GTA
              </h1>

              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '2rem', 
                color: 'var(--gray-800)',
                maxWidth: '500px'
              }}>
                Trusted duct cleaning company offering air duct, dryer vent, furnace and HVAC cleaning services across Ontario.
              </p>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              {/* Serving Cities Badge */}
              <div style={{
                marginTop: "25px",
                fontSize: "14px",
                color: "#000",
                fontWeight: "bold",
                background: "#fff",
                padding: "10px 15px",
                borderRadius: "var(--radius)",
                display: "block",
                width: "fit-content",
                borderLeft: "5px solid var(--primary)",
                boxShadow: "var(--shadow-sm)"
              }}>
                <strong style={{ color: "var(--primary)" }}>Serving:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
              </div>
            </div>

            {/* Right Side Image */}
            <div className="hero-image-fixed" style={{ zIndex: 1 }}>
              <img 
                src="/images/services/air-duct-cleaning.jpg" 
                alt="Air Duct Cleaning Services" 
                style={{ 
                  width: '100%', 
                  maxWidth: '550px', 
                  height: 'auto', 
                  borderRadius: 'var(--radius)', 
                  boxShadow: 'var(--shadow-lg)' 
                }} 
              />
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section style={{ padding: "60px 20px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2 className="section-title">Service Areas We Cover</h2>
            <p className="section-subtitle">
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
                  <h3 style={{ padding: '1.5rem 1rem 0.5rem' }}>{service.title}</h3>
                  <p style={{ padding: '0 1rem 1.5rem' }}>{service.text}</p>
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
  backgroundColor: "var(--secondary)",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "15px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  transition: "0.3s"
};
