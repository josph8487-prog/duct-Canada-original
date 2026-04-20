import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

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
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>

              <h1 className={styles.heroTitle} style={{ color: "#111" }}>
                Air Duct Cleaning Services in Markham, Toronto & GTA
              </h1>

              <p className={styles.heroSubtitle} style={{ color: "#222" }}>
                Trusted duct cleaning company offering air duct, dryer vent, furnace and HVAC cleaning services across Ontario.
              </p>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              {/* SERVICE AREAS */}
              <div style={{ marginTop: "15px", fontSize: "14px", color: "#111" }}>
                <strong>Serving:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
              </div>

            </div>
          </div>

          <div className={styles.heroRight}></div>

        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>

          <div className={styles.aboutContent}>
            <h2 style={{ color: "#111" }}>Who We Are</h2>
            <h3 style={{ color: "#111" }}>Trusted Air Duct Cleaning Experts in Ontario</h3>

            <p className={styles.aboutText} style={{ color: "#222" }}>
              We provide professional air duct cleaning, furnace cleaning and HVAC services across Markham, Toronto and GTA.
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
            <h4 style={{ color: "#111" }}>Locally Trusted in GTA</h4>
            <p style={{ color: "#222" }}>
              Serving Markham, Toronto, Vaughan, Richmond Hill and North York.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "50px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>

          <h2 style={{ color: "#111" }}>Service Areas We Cover</h2>

          <p style={{ marginBottom: "20px", color: "#222" }}>
            We provide professional duct cleaning services across Markham and nearby GTA cities.
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px"
          }}>

            <Link href="/location/markham" style={areaBtn}>Markham</Link>
            <Link href="/location/toronto" style={areaBtn}>Toronto</Link>
            <Link href="/location/vaughan" style={areaBtn}>Vaughan</Link>
            <Link href="/location/richmond-hill" style={areaBtn}>Richmond Hill</Link>

          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">

          <h2 className="section-title" style={{ color: "#111" }}>Our Services</h2>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.featureCard}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image src={service.image} alt={service.title} fill />
                </div>
                <h3 className={styles.featureTitle} style={{ color: "#111" }}>
                  {service.title}
                </h3>
                <p className={styles.featureText} style={{ color: "#222" }}>
                  {service.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={`container ${styles.processGrid}`}>
          <div>
            <h2 style={{ color: "#111" }}>Our Cleaning Process</h2>
            <p style={{ color: "#222" }}>Inspection → Cleaning → Sanitization → Final Check</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2 style={{ color: "#111" }}>Customer Reviews</h2>
          <p style={{ color: "#222" }}>Trusted by homeowners across Ontario.</p>
        </div>
      </section>
    </>
  );
}

const areaBtn = {
  padding: "10px 18px",
  border: "1px solid #000",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#000",
  fontWeight: "500",
  display: "inline-block"
};
