import Image from 'next/image';
import styles from '@/styles/About.module.css';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 17, 44, 0.8), rgba(0, 17, 44, 0.8)), url('/images/Banner.jpeg')` }}>
                <div className="container">
                    <h1 className={styles.heroTitle} style={{ marginTop: '140px', fontSize: '28px', fontWeight: '700' }}>About Us</h1>

                    <p className={styles.heroSubtitle}>Award-winning professional duct cleaning and customer satisfaction leader since 2010.</p>
                </div>
            </section>
            
{/* Main Content */}
<section className={styles.contentSection}>
    <div className={`container ${styles.grid}`}>

        <div className={styles.textColumn}>
            {/* Block 1: Our Story */}
            <div style={{ marginBottom: '35px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>Our Story</h2>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>Dedicated to Cleaner Air for Every Home</h3>
                <div className={styles.description}>
                    <p>
                        Founded in 2010, Duct Cleaning Canada provides trusted professional duct cleaning and HVAC services in Markham and all GTA areas.
                    </p>
                </div>
            </div>

            {/* Block 2: What We Do */}
            <div style={{ marginBottom: '35px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>What We Do</h2>
                <div className={styles.description}>
                    <p>
                        Our certified, HVAC-licensed technicians remove dust, allergens, and debris from air ducts and HVAC systems, helping families enjoy cleaner, healthier air.
                    </p>
                </div>
            </div>

            {/* Block 3: Our Full Range of Services */}
            <div style={{ marginBottom: '35px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Our Full Range of Services</h2>
                <div className={styles.description}>
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '8px', fontSize: '16px' }}>Professional Air Duct Cleaning</li>
                        <li style={{ marginBottom: '8px', fontSize: '16px' }}>Dryer Vent Cleaning</li>
                        <li style={{ marginBottom: '8px', fontSize: '16px' }}>Furnace & Blower Motor Cleaning</li>
                        <li style={{ marginBottom: '8px', fontSize: '16px' }}>Filter Replacement & Exhaust Fan Maintenance</li>
                    </ul>
                </div>
            </div>

            {/* Block 4: Our Achievement */}
            <div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Our Achievement</h2>
                <div className={styles.description}>
                    <p>
                        Proud winners of the Best Service and Customer Satisfaction Award, we are a customer-trusted company pledged to protect Canadian homes with innovative air quality solutions for generations to come.
                    </p>
                </div>
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
                        <h4>16+</h4>
                        <p>Years in Business</p>
                    </div>
                    <div className={styles.statItem}>
                        <h4>100%</h4>
                        <p>100% Satisfaction Guarantee</p>
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
