import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

// 1. DYNAMIC METADATA (Aapki Values Mehfooz Hain)
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
    images: [{ url: '/images/Banner.jpeg' }], // Updated for Social Media
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
        {/* HERO SECTION WITH NEW BANNER IMAGE */}
        <section className={styles.hero} style={{ position: 'relative', height: '80vh', minHeight: '500px', overflow: 'hidden' }}>
          
          {/* BACKGROUND IMAGE (About Us Wali Image Ab Home Par) */}
          <Image
            src="/images/Banner.jpeg"
            alt="Air Duct Cleaning Services Banner"
            fill
            priority
            style={{ objectFit: 'cover', zIndex: -1 }}
          />

          {/* DARK OVERLAY (Taake Text Clear Nazar Aaye) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Isse image thori dark hogi taake text chamke
            zIndex: 0
          }}></div>

          <div className={styles.heroContentWrapper} style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            position: 'relative', 
            zIndex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div className={styles.heroLeft}>
              <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))', color: '#fff' }}>
                <h1 className={styles.heroTitle} style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  Air Duct Cleaning Services in Markham, Toronto & GTA
                </h1>

                <p className={styles.heroSubtitle} style={{ color: '#f0f0f0', fontSize: '1.2rem', marginBottom: '20px' }}>
                  Trusted duct cleaning company offering air duct, dryer vent, furnace and HVAC cleaning services across Ontario.
                </p>

                <Link href="/services" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                  Explore Services
                </Link>

                {/* LOCATIONS TEXT (Clear Visibility) */}
                <div style={{
                  marginTop: "25px",
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "bold",
                  background: "rgba(255, 255, 255, 0.95)", // High contrast white box
                  padding: "12px 18px",
                  borderRadius: "5px",
                  display: "inline-block",
                  borderLeft: "5px solid #0056b3"
                }}>
                  <strong style={{ color: "#0056b3" }}>Serving:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS SECTION */}
        <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Service Areas We Cover</h2>
            <p style={{ marginBottom: "30px", color: "#555", fontSize: '1.1rem' }}>
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

        {/* SERVICES GRID SECTION */}
        <section className={`section ${styles.servicesPreview}`} style={{ padding: '60px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Our Professional Services</h2>

            <div className={styles.featureGrid}>
              {services.map((service, index) => (
                <article key={index} className={styles.featureCard} style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'relative', height: '220px' }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} in Markham and GTA`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{service.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{service.text}</p>
                  </div>
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
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  transition: "0.3s ease"
};
