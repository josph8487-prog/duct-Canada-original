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
<section style={{ width: "100% !important", padding: "20px 10px !important", boxSizing: "border-box !important", display: "block !important" }}>
    <div style={{ 
        display: "flex !important", 
        flexDirection: "row !important", 
        justifyContent: "space-between !important", 
        alignItems: "flex-start !important", 
        gap: "10px !important", 
        width: "100% !important", 
        maxWidth: "1200px !important", 
        margin: "0 auto !important",
        boxSizing: "border-box !important" 
    }}>
        
        {/* Stat Item 1 */}
        <div style={{ flex: "1 !important", minWidth: "0 !important", textAlign: "center !important" }}>
            <h4 style={{ fontSize: "20px !important", margin: "0 0 5px 0 !important", fontWeight: "700 !important", wordBreak: "keep-all !important" }}>13+</h4>
            <p style={{ 
                fontSize: "12px !important", 
                margin: "0 !important", 
                whiteSpace: "normal !important", 
                wordBreak: "keep-all !important", 
                overflowWrap: "anywhere !important", 
                lineHeight: "1.2 !important" 
            }}>
                Years in Business
            </p>
        </div>

        {/* Stat Item 2 */}
        <div style={{ flex: "1 !important", minWidth: "0 !important", textAlign: "center !important" }}>
            <h4 style={{ fontSize: "20px !important", margin: "0 0 5px 0 !important", fontWeight: "700 !important", wordBreak: "keep-all !important" }}>100%</h4>
            <p style={{ 
                fontSize: "12px !important", 
                margin: "0 !important", 
                whiteSpace: "normal !important", 
                wordBreak: "keep-all !important", 
                overflowWrap: "anywhere !important", 
                lineHeight: "1.2 !important" 
            }}>
                Satisfaction Guarantee
            </p>
        </div>

        {/* Stat Item 3 */}
        <div style={{ flex: "1 !important", minWidth: "0 !important", textAlign: "center !important" }}>
            <h4 style={{ fontSize: "20px !important", margin: "0 0 5px 0 !important", fontWeight: "700 !important", wordBreak: "keep-all !important" }}>GTA</h4>
            <p style={{ 
                fontSize: "12px !important", 
                margin: "0 !important", 
                whiteSpace: "normal !important", 
                wordBreak: "keep-all !important", 
                overflowWrap: "anywhere !important", 
                lineHeight: "1.2 !important" 
            }}>
                Wide Service Area
            </p>
        </div>

    </div>
</section>
