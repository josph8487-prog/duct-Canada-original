import styles from '@/styles/Resources.module.css';

export default function Resources() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Resources</h1>
                    <p className={styles.heroSubtitle}>Valuable information about duct cleaning, HVAC maintenance, and indoor air quality.</p>
                </div>
            </section>

            {/* Why Duct Cleaning? Intro */}
            <section className={styles.introSection}>
                <div className={`container ${styles.introContent}`}>
                    <h2>Why Duct Cleaning?</h2>
                    <p>
                        Regular duct cleaning improves air quality, reduces allergens, removes dust and mold, and keeps your HVAC system efficient.
                        It helps create a healthier and more comfortable indoor environment for you and your family.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className={styles.categoriesSection}>
                <div className={`container ${styles.grid}`}>

                    {/* Special Situations */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}><span>⚠</span> Special Situations</h3>
                        <ul className={styles.itemList}>
                            <li className={styles.item}>
                                <h4>Low Airflow</h4>
                                <p>Restore weak air pressure by clearing blockages.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Blockage</h4>
                                <p>Remove heavy dust and obstructions from ducts.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Mold</h4>
                                <p>Safe removal of mold and moisture buildup.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Odor</h4>
                                <p>Eliminate unpleasant smells from duct systems.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Noise</h4>
                                <p>Reduce airflow noise caused by dirty ducts.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Move / Renovation */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}><span>🏠</span> Move & Renovation</h3>
                        <ul className={styles.itemList}>
                            <li className={styles.item}>
                                <h4>Move In</h4>
                                <p>Fresh, clean ducts before new tenants move in.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Move Out</h4>
                                <p>Duct cleaning before handover or shifting.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Renovate</h4>
                                <p>Post-renovation cleaning to remove construction dust.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>After Build</h4>
                                <p>Clear leftover debris after construction work.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Residential & Commercial */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}><span>🏢</span> Residential & Commercial</h3>
                        <ul className={styles.itemList}>
                            <li className={styles.item}>
                                <h4>Residential</h4>
                                <p>Safe and deep duct cleaning for homes.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Commercial</h4>
                                <p>Professional duct cleaning for offices and shops.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Pets</h4>
                                <p>Remove pet hair and odors from ducts.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Smoke</h4>
                                <p>Clear smoke and cooking smells from air ducts.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Maintenance & Benefits */}
                    <div className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}><span>⚙</span> Maintenance & Benefits</h3>
                        <ul className={styles.itemList}>
                            <li className={styles.item}>
                                <h4>Energy</h4>
                                <p>Clean ducts improve HVAC efficiency and save energy.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Balance</h4>
                                <p>Even airflow across all rooms.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Seasonal</h4>
                                <p>Ideal before summer and winter seasons.</p>
                            </li>
                            <li className={styles.item}>
                                <h4>Trusted</h4>
                                <p>Reliable service by trained professionals.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: 'var(--secondary)' }}>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Do you handle all types of duct cleaning?</h3>
                            <p>Yes! We cover all residential and commercial duct cleaning needs.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Is Duct Cleaning Canada reliable?</h3>
                            <p>Absolutely! Our certified HVAC-licensed technicians provide trusted, professional service.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can you improve indoor air quality?</h3>
                            <p>Yes, we remove dust, allergens, and debris from air ducts and HVAC systems for cleaner, healthier air.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Do you serve the GTA and surrounding areas?</h3>
                            <p>Yes! We proudly serve all GTA areas and nearby Ontario cities.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I call if I need urgent service?</h3>
                            <p>Of course! We are ready to help with fast and reliable duct cleaning.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactBox}>
                        <div className={styles.contactContent}>
                            <h2 className={styles.contactTitle}>Ready for Cleaner Air?</h2>
                            <p className={styles.contactText}>Get a free quote today and breathe easier tomorrow.</p>

                            <div className={styles.contactGrid}>

                                <a href="tel:226-777-2863" className={styles.contactCard}>
                                    <span className={styles.contactIcon}>📞</span>
                                    <span className={styles.contactLabel}>Call Us</span>
                                    <span className={styles.contactValue}>226-777-2863</span>
                                </a>
                                <a href="mailto:ductcleaningcanada2@gmail.com" className={styles.contactCard}>
                                    <span className={styles.contactIcon}>✉️</span>
                                    <span className={styles.contactLabel}>Email Us</span>
                                    <span className={styles.contactValue}>ductcleaningcanada2@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
