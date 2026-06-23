import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

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
    }
  ];

  const areaBtnStyle = {
  padding: "14px 28px",
  backgroundColor: "#0056b3",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  transition: "0.3s"
};

  return (
    <main>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper}>

          {/* LEFT */}
          <div className={styles.heroLeft}>
            <div>
              <h1 className={styles.heroTitle}>
                Air Duct Cleaning Services in Markham, Toronto & GTA
              </h1>

              <p className={styles.heroSubtitle}>
                Trusted duct cleaning company offering air duct, dryer vent, furnace and HVAC cleaning services across Ontario.
              </p>

              <Link href="/services" className="btn btn-primary">
                Explore Services
              </Link>

              <div className={styles.servingBadge}>
                <strong>Serving:</strong> Markham • Toronto • Vaughan • Richmond Hill • North York
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.heroRight}></div>

        </div>
      </section>

        {/* SERVICE AREAS */}
      <section className={`${styles.areaSection} w-full max-w-2xl mx-auto px-4 py-6 text-center`}>
        <h2 className="text-xl font-bold text-gray-800 md:text-2xl mb-5" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
          Service Areas We Cover
        </h2>

        <div className="flex flex-wrap justify-center gap-3 w-full mb-12">
          {["Markham", "Toronto", "Vaughan", "Richmond Hill"].map((city) => (
            <Link
              key={city}
              href={`/location/${city.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ 
                ...areaBtnStyle, 
                padding: '12px 24px', 
                fontSize: '1rem',
                display: 'inline-block',
                textAlign: 'center',
                minWidth: '120px'
              }}
              className="font-semibold rounded-md shadow-sm transition active:scale-95"
            >
              {city}
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">

          <h2 className="section-title text-2xl md:text-3xl font-black uppercase text-center mt-6 mb-8" style={{ marginTop: '20px' }}>
            Our Professional Services
          </h2>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <article key={index} className={styles.featureCard}>

                <div style={{ position: "relative", height: "220px" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <h3 className={styles.featureTitle}>{service.title}</h3>
                <p className={styles.featureText}>{service.text}</p>

              </article>
            ))}
          </div>

        </div>
      </section>
