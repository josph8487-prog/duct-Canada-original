import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {

  const services = [
    {
      title: "Air Duct Cleaning Markham & GTA",
      text: "We provide professional air duct cleaning in Markham, Toronto, Vaughan and Richmond Hill to improve indoor air quality and HVAC performance.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning Services",
      text: "Expert furnace cleaning services in Ontario to improve heating efficiency and extend system life.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Safe dryer vent cleaning in Markham, Toronto and GTA to prevent fire hazards and improve dryer performance.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "HVAC Blower Cleaning",
      text: "Improve airflow and energy efficiency with professional HVAC blower cleaning services in Ontario.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
    {
      title: "Duct Sanitization Services",
      text: "Eco-friendly duct sanitization in Markham and surrounding areas to remove bacteria, mold and odors.",
      image: "/images/services/sanitization.jpg"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>

              <h1 className={styles.heroTitle}>
                Air Duct Cleaning Services in Markham, Toronto, Vaughan & Richmond Hill
              </h1>

              <p className={styles.heroSubtitle}>
                We provide professional air duct cleaning, furnace cleaning, dryer vent cleaning and HVAC services across Markham, Toronto, Vaughan and Richmond Hill. Our goal is to improve indoor air quality and HVAC efficiency for homes and businesses.
              </p>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              <div style={{ marginTop: "15px", fontSize: "14px" }}>
                <strong>We Provide Service In:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
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

            <h3>Trusted Air Duct Cleaning Company in Ontario</h3>

            <p className={styles.aboutText}>
              We provide professional duct cleaning services in Markham, Toronto, Vaughan and Richmond Hill. Our team focuses on improving indoor air quality, removing dust buildup, and increasing HVAC system efficiency for residential and commercial properties.
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
              <Image src="/images/services/furnace-cleaning.jpg" alt="Furnace Cleaning Toronto" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/blower-fan-cleaning.jpg" alt="HVAC Cleaning Vaughan" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/sanitization.jpg" alt="Duct Sanitization Richmond Hill" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className={styles.localHighlight}>
            <h4>Locally Trusted Across GTA</h4>
            <p>
              Serving Markham, Toronto, Vaughan and Richmond Hill with professional and affordable duct cleaning services.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "50px 20px", background: "#f9f9f9", textAlign: "center" }}>
        <h2>We Provide Service In</h2>

        <p>
          Professional duct cleaning services available across GTA regions.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/location/markham" className="btn btn-outline">Markham</Link>
          <Link href="/location/toronto" className="btn btn-outline">Toronto</Link>
          <Link href="/location/vaughan" className="btn btn-outline">Vaughan</Link>
          <Link href="/location/richmond-hill" className="btn btn-outline">Richmond Hill</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">

          <h2 className="section-title">Our Professional Services</h2>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.featureCard}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image src={service.image} alt={service.title} fill />
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
        <div className="container">
          <h2>Our Cleaning Process</h2>
          <p>Inspection → Deep Cleaning → Sanitization → Final Testing</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2>Customer Reviews</h2>
          <p>Trusted by homeowners across Markham, Toronto, Vaughan & Richmond Hill.</p>
        </div>
      </section>

    </>
  );
}
