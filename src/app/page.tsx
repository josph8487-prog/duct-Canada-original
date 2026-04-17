
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
    },
    {
      title: "Filter Replacement",
      text: "Professional HVAC filter replacement to maintain clean airflow and system efficiency.",
      image: "/images/services/filter-replacement.jpg"
    },
    {
      title: "Kitchen Vent Cleaning",
      text: "Remove grease and improve ventilation with expert kitchen exhaust and dishwasher vent cleaning.",
      image: "/images/services/dishwasher-cleaning.jpg"
    },
    {
      title: "Exhaust Fan Cleaning",
      text: "Prevent mold buildup and improve ventilation with bathroom and kitchen exhaust fan cleaning.",
      image: "/images/services/exhaust-fan-cleaning.jpg"
    },
    {
      title: "Complete HVAC Services",
      text: "Full residential and commercial HVAC cleaning solutions across Markham, Toronto and Ontario.",
      image: "/images/services/air-duct-cleaning.jpg"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>

              {/* SEO H1 */}
              <h1 className={styles.heroTitle}>
                Air Duct Cleaning Services in Markham, Toronto & GTA
              </h1>

              <p className={styles.heroSubtitle}>
                Trusted duct cleaning company in Canada offering professional air duct cleaning, dryer vent cleaning, furnace cleaning and HVAC services across Markham and Ontario.
              </p>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              {/* SERVICE AREA QUICK SIGNAL */}
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
              We provide professional air duct cleaning, HVAC cleaning, furnace cleaning and dryer vent cleaning services in Markham, Toronto and surrounding GTA areas. Our goal is to improve indoor air quality and system performance.
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
            <p>
              Serving Markham, Toronto, Vaughan, Richmond Hill and North York with professional duct cleaning services.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">

          <h2 className="section-title">Our Professional Services</h2>

          <p className="section-subtitle">
            Complete HVAC and air duct cleaning services for homes and businesses across Markham, Toronto and GTA.
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

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={`container ${styles.processGrid}`}>

          <div>
            <h2>Our Cleaning Process</h2>
            <h3>Step-by-Step Professional Duct Cleaning</h3>

            <p>
              We follow a proven cleaning process including inspection, deep cleaning, sanitization and final testing to ensure best air quality results.
            </p>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className={`container ${styles.testimonialsContentWrapper}`}>

          <h2>Customer Reviews</h2>
          <p>Trusted by homeowners across Markham, Toronto & Ontario.</p>

        </div>
      </section>

    </>
  );
}
