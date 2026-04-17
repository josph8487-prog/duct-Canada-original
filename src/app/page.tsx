import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {

  const services = [
    {
      title: "Air Duct Cleaning Markham & GTA",
      text: "Professional air duct cleaning services in Markham, Toronto and GTA. We remove dust, allergens and improve indoor air quality.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning",
      text: "Expert furnace cleaning services to improve heating efficiency and system lifespan in Ontario homes and businesses.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Safe dryer vent cleaning in Markham and GTA to prevent fire hazards and improve appliance performance.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "HVAC Blower Cleaning",
      text: "Improve airflow and energy efficiency with professional HVAC blower fan cleaning services.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
    {
      title: "Duct Sanitization",
      text: "Eco-friendly duct sanitization to remove bacteria, mold and odors for healthier indoor air.",
      image: "/images/services/sanitization.jpg"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>

              <h1 className={styles.heroTitle}>
                Air Duct Cleaning Services in Markham, Toronto & GTA
              </h1>

              <p className={styles.heroSubtitle}>
                Trusted duct cleaning company in Canada offering professional air duct cleaning, dryer vent cleaning, furnace cleaning and HVAC services.
              </p>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              {/* SERVICE AREA QUICK LINE */}
              <div style={{ marginTop: "15px", fontSize: "14px" }}>
                <strong>Serving:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
              </div>

            </div>
          </div>

          <div className={styles.heroRight}></div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>

          <div className={styles.aboutContent}>
            <h2>Who We Are</h2>
            <h3>Trusted Air Duct Cleaning Experts in Ontario</h3>
            <p className={styles.aboutText}>
              We provide professional air duct cleaning, HVAC cleaning, furnace cleaning and dryer vent cleaning services in Markham, Toronto and GTA.
            </p>

            <Link href="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className={styles.aboutImages}>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/air-duct-cleaning.jpg" alt="Air Duct Cleaning Markham" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/furnace-cleaning.jpg" alt="Furnace Cleaning Canada" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/blower-fan-cleaning.jpg" alt="HVAC Cleaning GTA" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/sanitization.jpg" alt="Duct Sanitization Ontario" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className={styles.localHighlight}>
            <h4>Locally Trusted in GTA</h4>
            <p>Serving Markham, Toronto, Vaughan, Richmond Hill and North York.</p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">

          <h2 className="section-title">Our Professional Services</h2>

          <p className="section-subtitle">
            Complete HVAC and air duct cleaning services across Ontario.
          </p>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.featureCard}>
                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className={styles.featureTitle}>{service.title}</h3>
                <p className={styles.featureText}>{service.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 SERVICE AREAS MINI SEO BLOCK (IMPORTANT) */}
      <section className={styles.serviceAreasMini}>
        <div className="container">

          <h2 className="section-title">
            Service Areas in Ontario
          </h2>

          <p className="section-subtitle">
            We provide professional duct cleaning services in Markham and nearby GTA cities.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginTop: '20px'
          }}>

            <Link href="/service-areas" className="btn btn-outline">Markham</Link>
            <Link href="/service-areas" className="btn btn-outline">Toronto</Link>
            <Link href="/service-areas" className="btn btn-outline">Vaughan</Link>
            <Link href="/service-areas" className="btn btn-outline">Richmond Hill</Link>
            <Link href="/service-areas" className="btn btn-outline">North York</Link>

          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className={`container ${styles.processGrid}`}>

          <div>
            <h2>Our Cleaning Process</h2>
            <h3>Step-by-Step Professional Duct Cleaning</h3>

            <p>
              We inspect, clean, sanitize and test your HVAC system for best indoor air quality.
            </p>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className={`container ${styles.testimonialsContentWrapper}`}>

          <h2>Customer Reviews</h2>
          <p>Trusted by homeowners across Ontario.</p>

        </div>
      </section>

    </>
  );
}
