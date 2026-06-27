import Image from 'next/image';
import styles from '@/styles/About.module.css';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 17, 44, 0.8), rgba(0, 17, 44, 0.8)), url('/images/Banner.jpeg')` }}>
                <div className="container">
                    <h1 className={styles.heroTitle} style={{ marginTop: '140px', fontSize: '28px', fontWeight: '700' }}>About Us</h1>

                    <p className={styles.heroSubtitle}>Leading the way in indoor air quality solutions since 2017.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={`container ${styles.grid}`}>

                    <div className={styles.textColumn}>
                        <h2>Our Story</h2>
                        <h3>Dedicated to Cleaner Air for Every Home</h3>

                        <div className={styles.description}>
                            <p>
                                Founded in 2017, Duct Cleaning Canada provides trusted professional duct cleaning and HVAC services in Markham and all GTA areas.
                            </p>
                            <p>
                                Our certified HVAC-licensed technicians remove dust, allergens, and debris from air ducts and HVAC systems, helping families enjoy cleaner, healthier air through truly professional air duct cleaning.
                            </p>
                            <p>
                                Many customers consider us among the best duct cleaning Markham providers and the best air duct cleaning company Markham homeowners recommend to friends and neighbours.
                            </p>
                        </div>

                        <div className={styles.highlightBox}>
                            <h4>Our Commitment</h4>
                            <p>
                                We don't just clean ducts; we improve lives by ensuring the air you breathe is fresh, clean, and safe.
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageColumn}>
                        {/* Using the technician image we generated earlier as a good fit here too, or we can use another one */}
                        <Image
                            src="/images/Why-Chose-Us.jpeg"
                            alt="HVAC Technician"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                </div>
            </section>


            {/* Stats / Trust Section */}
<section style={{ width: "100%", padding: "20px 10px", boxSizing: "border-box" }}>
    <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "stretch", 
        gap: "12px", 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "0 auto",
        boxSizing: "border-box" 
    }}>
        
        {/* Stat Item 1 */}
        <div style={{ flex: "1 1 0px", minWidth: "0", textAlign: "center" }}>
            <h4 style={{ fontSize: "22px", margin: "0 0 4px 0", fontWeight: "700", color: "#b86b33" }}>13+</h4>
            <p style={{ 
                fontSize: "12px", 
                margin: "0", 
                lineHeight: "1.3",
                whiteSpace: "normal", 
                wordBreak: "keep-all", 
                overflowWrap: "normal",
                color: "#000000"
            }}>
                Years in Business
            </p>
        </div>

        {/* Stat Item 2 */}
        <div style={{ flex: "1 1 0px", minWidth: "0", textAlign: "center" }}>
            <h4 style={{ fontSize: "22px", margin: "0 0 4px 0", fontWeight: "700", color: "#b86b33" }}>100%</h4>
            <p style={{ 
                fontSize: "12px", 
                margin: "0", 
                lineHeight: "1.3",
                whiteSpace: "normal", 
                wordBreak: "keep-all", 
                overflowWrap: "normal",
                color: "#000000"
            }}>
                Satisfaction Guarantee
            </p>
        </div>

        {/* Stat Item 3 */}
        <div style={{ flex: "1 1 0px", minWidth: "0", textAlign: "center" }}>
            <h4 style={{ fontSize: "22px", margin: "0 0 4px 0", fontWeight: "700", color: "#b86b33" }}>GTA</h4>
            <p style={{ 
                fontSize: "12px", 
                margin: "0", 
                lineHeight: "1.3",
                whiteSpace: "normal", 
                wordBreak: "keep-all", 
                overflowWrap: "normal",
                color: "#000000"
            }}>
                Wide Service Area
            </p>
        </div>

    </div>
</section>
