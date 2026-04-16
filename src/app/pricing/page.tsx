import Link from 'next/link';
import styles from '@/styles/Pricing.module.css';

export default function Pricing() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Pricing Packages</h1>
                    <p className={styles.heroSubtitle}>Transparent, flat-rate pricing for professional duct cleaning. No hidden fees.</p>
                </div>
            </section>

            <section className={styles.pricingSection}>
                <div className={`container ${styles.pricingGrid}`}>

                    {/* Basic Package */}
                    <div className={styles.pricingCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.packageName}>Basic Package</h3>
                            <p className={styles.packageSize}>Up to 2500 sq. ft.</p>
                            <div className={styles.price}>$149 <span>+ Tax</span></div>
                        </div>
                        <div className={styles.cardBody}>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Unlimited Ducts Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Unlimited Vents Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Professional Sanitization</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Complete Dryer Vent Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> AC Coils Inspection</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Furnace Inspection</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> NO Per-Vent Charges</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> NO Hook-Up Fees</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> NO Hidden Costs</li>
                            </ul>
                            <div className={styles.importantInfo}>
                                Values listed apply to cities in our Service Areas only. Additional services quoted on-site.
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
                        </div>
                    </div>

                    {/* Standard Package - Highlighted */}
                    <div className={`${styles.pricingCard} ${styles.popularCard}`}>
                        <div className={styles.popularLabel}>Most Popular</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.packageName}>Standard Package</h3>
                            <p className={styles.packageSize}>Up to 2500 sq. ft.</p>
                            <div className={styles.price}>$220 <span>+ Tax</span></div>
                        </div>
                        <div className={styles.cardBody}>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Unlimited Ducts Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Unlimited Vents Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Professional Sanitization</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Complete Dryer Vent Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> AC Coils Inspection</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Furnace Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> NO Hook-Up Fees</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> No Per-Vent Charges</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> NO Hidden Costs</li>
                            </ul>
                            <div className={styles.importantInfo}>
                                Basic + Furnace Cleaning for deeper results. Ideal for medium-sized homes.
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
                        </div>
                    </div>

                    {/* Premium Package */}
                    <div className={styles.pricingCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.packageName}>Premium Package</h3>
                            <p className={styles.packageSize}>Up to 2500 sq. ft.</p>
                            <div className={styles.price}>$299 <span>+ Tax</span></div>
                        </div>
                        <div className={styles.cardBody}>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Unlimited Ducts Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Unlimited Vents Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Professional Sanitization</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Complete Dryer Vent Cleaning</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> AC Coils Cleaning Included</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Furnace Cleaning Included</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> J-Panel Cleaning Included</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> No Per-Vent Charges</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>✓</span> NO Hook-Up Fees</li>
                            </ul>
                            <div className={styles.importantInfo}>
                                The most thorough, top-level duct cleaning service with all extras included.
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.infoSection}>
                <div className="container">
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--gray-700)' }}>
                        <strong>Note:</strong> Pricing applies only to cities listed in our Service Areas.
                        Any additional services, if required, will be quoted on-site by the technician before work begins.
                        <br /><br />
                        For <strong>Deep Cleaning Package</strong> and <strong>Commercial Services</strong>, pricing varies based on home or building size and specific requirements.
                    </p>

                    <div className={styles.contactBox}>
                        <h3>Call us today for a free consultation!</h3>
                        <div className={styles.contactDetails}>
                            <p>Call: <a href="tel:2267772863" className={styles.contactLink}>226-777-2863</a> </p>
                            <p>Email: <a href="mailto:ductcleaningcanada2@gmail.com" className={styles.contactLink}>ductcleaningcanada2@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
