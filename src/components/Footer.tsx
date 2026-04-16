import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            {/* Pre-Footer CTA Banner */}
            <div className={styles.preFooter}>
                <div className={`container ${styles.preFooterContent}`}>
                    <div className={styles.preFooterText}>Call our Duct Cleaning Specialists!</div>
                    <a href="tel:226-777-2863" className={styles.preFooterPhone}>
                        📞 226-777-2863
                    </a>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={`container ${styles.grid}`}>
                    <div className={styles.col}>
                        <h3>Duct Cleaning Canada</h3>
                        <p>
                            Professional duct cleaning services for residential and commercial properties.
                            Breathe cleaner air today.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h3>Quick Links</h3>
                        <div className={styles.links}>
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/pricing">Pricing</Link>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h3>Services</h3>
                        <div className={styles.links}>
                            <Link href="/services">Air Duct Cleaning</Link>
                            <Link href="/services">Dryer Vent Cleaning</Link>
                            <Link href="/services">Exhaust Fan & Dishwasher Vent Cleaning</Link>
                            <Link href="/services">Furnace Cleaning</Link>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h3>Contact Us</h3>
                        <div className={styles.links}>
                            <p>35 Carlton Rd, Markham, ON L3R 1Z4</p>
                            <p>226-777-2863</p>
                            <p>ductcleaningcanada2@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className={`container ${styles.bottom}`}>
                    <p>&copy; {new Date().getFullYear()} Duct Cleaning Canada. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
