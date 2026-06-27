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
<section className="custom-stats-section">
    {/* Pure standard CSS block jo rules ko forcefully apply karega */}
    <style>{`
        .custom-stats-section {
            width: 100% !important;
            padding: 20px 10px !important;
            box-sizing: border-box !important;
        }
        .custom-stats-grid {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 12px !important;
            width: 100% !important;
            max-width: 1200px !important;
            margin: 0 auto !important;
            box-sizing: border-box !important;
        }
        .custom-stat-item {
            flex: 1 !important;
            min-width: 0 !important;
            text-align: center !important;
        }
        .custom-stat-item h4 {
            font-size: 20px !important;
            margin: 0 0 4px 0 !important;
            font-weight: 700 !important;
            color: #b86b33 !important; /* Brown orange color jo image mein hai */
        }
        .custom-stat-item p {
            font-size: 11px !important;
            margin: 0 !important;
            line-height: 1.3 !important;
            white-space: normal !important;
            word-break: keep-all !important; /* Word ko beech se tootne nahi dega */
            overflow-wrap: normal !important;
            color: #000000 !important;
        }
    `}</style>

    <div className="custom-stats-grid">
        {/* Item 1 */}
        <div className="custom-stat-item">
            <h4>13+</h4>
            <p>Years in Business</p>
        </div>

        {/* Item 2 */}
        <div className="custom-stat-item">
            <h4>100%</h4>
            <p>Satisfaction Guarantee</p>
        </div>

        {/* Item 3 */}
        <div className="custom-stat-item">
            <h4>GTA</h4>
            <p>Wide Service Area</p>
        </div>
    </div>
</section>
