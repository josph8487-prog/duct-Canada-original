import Image from 'next/image';
import styles from '@/styles/About.module.css';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 17, 44, 0.8), rgba(0, 17, 44, 0.8)), url('/images/Banner.jpeg')` }}>
                <div className="container">
                    <h1 className={styles.heroTitle}>About Us</h1>
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
            <section className={styles.statsSection}>
                <div className={`container ${styles.statsGrid}`}>
                    <div className={styles.statItem}>
                        <h4>8+</h4>
                        <p>Years in Business</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>100%</h4>
                        <p>Satisfaction Guarantee</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>GTA</h4>
                        <p>Wide Service Area</p>
                    </div>
                </div>
            </section>
        </>
    );
}
