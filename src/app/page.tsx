import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const services = [
    {
      title: "Air Duct & Vent Cleaning",
      text: "Professional air duct cleaning in Markham and Ontario. We remove dust, allergens, and debris to improve indoor air quality and HVAC efficiency.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning",
      text: "Improve heating performance and extend furnace life with expert furnace cleaning services in Canada.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Safe and efficient dryer vent cleaning to prevent fire hazards and improve dryer performance.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "Blower Fan Cleaning",
      text: "Ensure proper airflow and energy efficiency with professional blower fan cleaning services.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
    {
      title: "Sanitization & Disinfection",
      text: "Eco-friendly duct sanitization to remove bacteria, mold, and odors for healthier indoor air.",
      image: "/images/services/sanitization.jpg"
    },
    {
      title: "Filter Replacement",
      text: "Keep your HVAC system clean and efficient with professional air filter replacement services.",
      image: "/images/services/filter-replacement.jpg"
    },
    {
      title: "Dishwasher Vent Cleaning",
      text: "Remove grease buildup and improve ventilation for kitchen hygiene and safety.",
      image: "/images/services/dishwasher-cleaning.jpg"
    },
    {
      title: "Exhaust Fan Cleaning",
      text: "Prevent mold and improve air circulation with exhaust fan cleaning services.",
      image: "/images/services/exhaust-fan-cleaning.jpg"
    },
    {
      title: "And Many More Services",
      text: "Complete HVAC and duct cleaning solutions for residential and commercial properties in Ontario.",
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

              {/* ✅ FIXED H1 (VERY IMPORTANT FOR SEO) */}
              <h1 className={styles.heroTitle}>
                Professional Air Duct Cleaning Services in Markham & Ontario
              </h1>

              <p className={styles.heroSubtitle}>
                Trusted duct cleaning company in Canada offering air duct cleaning, dryer vent cleaning, furnace cleaning and HVAC services for residential & commercial properties.
              </p>

              <Link href="/services" className="btn btn-primary">
                Discover Our Services
              </Link>
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
            <h3>Trusted Duct Cleaning Experts in Canada</h3>
            <p className={styles.aboutText}>
              We provide professional air duct cleaning, HVAC cleaning, furnace cleaning and dryer vent cleaning services across Markham, Toronto and Ontario. Our goal is to improve indoor air quality and system efficiency.
            </p>
            <Link href="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className={styles.aboutImages}>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/air-duct-cleaning.jpg" alt="Air Duct Cleaning" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/furnace-cleaning.jpg" alt="Furnace Cleaning" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/blower-fan-cleaning.jpg" alt="HVAC Cleaning" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/sanitization.jpg" alt="Duct Sanitization" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className={styles.localHighlight}>
            <h4>Locally Owned & Operated</h4>
            <p>
              Serving Markham, Toronto, GTA and all Ontario with professional duct cleaning services you can trust.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">

          <h2 className="section-title">Our Professional Services</h2>

          <p className="section-subtitle">
            Complete air duct cleaning and HVAC services for residential and commercial properties in Canada.
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

      {/* PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className={`container ${styles.processGrid}`}>

          <div>
            <h2>Our Cleaning Process</h2>
            <h3>Step-by-Step Professional Duct Cleaning</h3>

            <p>
              We follow a detailed cleaning process to ensure your air ducts are fully cleaned, sanitized, and optimized for better airflow and indoor air quality.
            </p>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className={`container ${styles.testimonialsContentWrapper}`}>

          <h2>Customer Reviews</h2>

          <p>Trusted by homeowners and businesses across Ontario.</p>

        </div>
      </section>

    </>
  );
}
