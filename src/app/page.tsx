import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
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
      {/* SEO */}
      <Head>
        <title>#1 Air Duct Cleaning in Markham & GTA</title>
        <meta name="description" content="Professional air duct cleaning in Markham, Toronto, Vaughan & GTA. Furnace, dryer vent & HVAC cleaning services." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Air Duct Cleaning Markham",
              "image": "https://yourwebsite.com/logo.png",
              "telephone": "+1-XXX-XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Markham",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "areaServed": [
                "Markham",
                "Toronto",
                "Vaughan",
                "Richmond Hill",
                "North York"
              ],
              "sameAs": [
                "https://facebook.com/yourpage",
                "https://instagram.com/yourpage",
                "https://yelp.com/yourpage"
              ]
            })
          }}
        />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>

              <h1 className={styles.heroTitle}>
                #1 Air Duct Cleaning in Markham, Toronto & GTA
              </h1>

              <p className={styles.heroSubtitle}>
                Professional air duct cleaning, furnace cleaning, dryer vent cleaning and HVAC sanitization services across GTA.
              </p>

              {/* SEO TEXT */}
              <div style={{ marginTop: "20px", maxWidth: "800px" }}>
                <p>
                  Looking for reliable air duct cleaning near you? We provide expert duct cleaning services in 
                  <Link href="/location/markham"> Markham</Link>, 
                  <Link href="/location/toronto"> Toronto</Link>, 
                  <Link href="/location/vaughan"> Vaughan</Link>, 
                  <Link href="/location/richmond-hill"> Richmond Hill</Link>.
                </p>

                <p>
                  Our services improve indoor air quality, remove dust buildup and increase HVAC efficiency for homes and businesses.
                </p>
              </div>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              <div style={{ marginTop: "15px", fontSize: "14px" }}>
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
            <h2>Trusted Air Duct Cleaning Experts</h2>
            <p>
              We offer professional duct cleaning, furnace cleaning and HVAC services using advanced equipment across GTA.
            </p>
          </div>

          <div className={styles.aboutImages}>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/air-duct-cleaning.jpg" alt="Air Duct Cleaning" fill />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/furnace-cleaning.jpg" alt="Furnace Cleaning" fill />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/blower-fan-cleaning.jpg" alt="HVAC Cleaning" fill />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/sanitization.jpg" alt="Duct Sanitization" fill />
            </div>
          </div>

        </div>
      </section>

      {/* BASIC SERVICE AREAS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Air Duct Cleaning Service Areas in GTA</h2>
        <p>
          Serving 
          <Link href="/location/markham"> Markham</Link>, 
          <Link href="/location/toronto"> Toronto</Link>, 
          <Link href="/location/vaughan"> Vaughan</Link>, 
          <Link href="/location/richmond-hill"> Richmond Hill</Link>.
        </p>
      </section>

      {/* 🔥 SEO LOCATION BLOCK */}
      <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

          <h2>Air Duct Cleaning Service Areas</h2>

          <p>
            We provide air duct cleaning, furnace cleaning and dryer vent cleaning services across the Greater Toronto Area.
          </p>

          <div style={{ marginTop: "20px" }}>
            <Link href="/location/markham">Air Duct Cleaning Markham</Link> • 
            <Link href="/location/toronto"> Air Duct Cleaning Toronto</Link> • 
            <Link href="/location/vaughan"> Air Duct Cleaning Vaughan</Link> • 
            <Link href="/location/richmond-hill"> Air Duct Cleaning Richmond Hill</Link>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              If you are searching for "air duct cleaning near me", our team is available in all major GTA areas with fast and reliable service.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">

          <h2>Our Services</h2>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.featureCard}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <Image src={service.image} alt={service.title} fill />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Why Choose Us</h2>
        <p>
          ✔ Affordable Pricing | ✔ Same Day Service | ✔ Certified Technicians | ✔ 100% Satisfaction Guarantee
        </p>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className="container">
          <h2>Our Process</h2>
          <p>Inspection → Cleaning → Sanitization → Final Check</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2>Customer Reviews</h2>
          <p>Trusted by homeowners across GTA.</p>
        </div>
      </section>

    </>
  );
}
