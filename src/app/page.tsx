import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {

  const services = [
    {
      title: "Air Duct Cleaning",
      text: "Professional air duct cleaning to remove dust, allergens and improve indoor air quality across GTA.",
      image: "/images/services/air-duct-cleaning.jpg"
    },
    {
      title: "Furnace Cleaning",
      text: "Deep furnace cleaning to improve heating efficiency and system lifespan.",
      image: "/images/services/furnace-cleaning.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      text: "Prevent fire hazards and improve dryer performance with vent cleaning.",
      image: "/images/services/dryer-vent-cleaning.jpg"
    },
    {
      title: "HVAC Cleaning",
      text: "Full HVAC system cleaning for better airflow and energy efficiency.",
      image: "/images/services/blower-fan-cleaning.jpg"
    },
    {
      title: "Duct Sanitization",
      text: "Remove bacteria, mold and odors for healthier indoor air.",
      image: "/images/services/sanitization.jpg"
    }
  ];

  return (
    <>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ maxWidth: "1400px", margin: "0 auto" }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: "max(2rem, calc((100vw - 1200px) / 2))" }}>

              <h1 className={styles.heroTitle}>
                Air Duct Cleaning Services in Markham, Toronto & GTA
              </h1>

              <p className={styles.heroSubtitle}>
                Trusted duct cleaning company offering air duct, furnace, dryer vent and HVAC cleaning services across Ontario.
              </p>

              <Link href="/services" className="btn btn-primary">
                Get Free Quote
              </Link>

              {/* SERVICE LINE */}
              <div style={{
                marginTop: "15px",
                fontSize: "14px",
                color: "#e2e8f0"
              }}>
                Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
              </div>

            </div>
          </div>

          <div className={styles.heroRight}></div>

        </div>
      </section>

      {/* TRUST TEXT (YOU ASKED TO ADD BELOW SAME STYLE) */}
      <section style={{
        padding: "40px 20px",
        textAlign: "center",
        background: "#f9f9f9"
      }}>

        <div style={{ maxWidth: "900px", margin: "auto" }}>

          <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.7" }}>
            Trusted duct cleaning company offering air duct, furnace, dryer vent and HVAC cleaning services in Markham, Toronto, Vaughan and Richmond Hill.
          </p>

          <a href="/contact" style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "12px 20px",
            background: "#22c55e",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            Get Free Quote
          </a>

          <div style={{
            marginTop: "15px",
            fontSize: "14px",
            color: "#555"
          }}>
            Serving: Markham • Toronto • Vaughan • Richmond Hill • North York
          </div>

        </div>

      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>

        <h2>Service Areas We Cover</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px"
        }}>

          <Link href="/location/markham" style={areaBtn}>Markham</Link>
          <Link href="/location/toronto" style={areaBtn}>Toronto</Link>
          <Link href="/location/vaughan" style={areaBtn}>Vaughan</Link>
          <Link href="/location/richmond-hill" style={areaBtn}>Richmond Hill</Link>

        </div>

      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>

          <h2>Our Services</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px"
          }}>

            {services.map((s, i) => (
              <div key={i} style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
              }}>

                <div style={{ position: "relative", height: "200px" }}>
                  <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover" }} />
                </div>

                <div style={{ padding: "15px" }}>
                  <h3>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "#555" }}>{s.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </>
  );
}

const areaBtn = {
  padding: "10px 14px",
  border: "1px solid #000",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#000",
  fontWeight: "500",
  background: "#fff",
  fontSize: "14px"
};
