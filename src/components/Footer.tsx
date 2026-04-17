import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      {/* Pre-Footer CTA */}
      <div className={styles.preFooter}>
        <div className={`container ${styles.preFooterContent}`}>
          <div className={styles.preFooterText}>
            Call our Duct Cleaning Specialists!
          </div>
          <a href="tel:226-777-2863" className={styles.preFooterPhone}>
            📞 226-777-2863
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={`container ${styles.grid}`}>

          {/* Company Info */}
          <div className={styles.col}>
            <h3>Duct Cleaning Canada</h3>
            <p>
              Professional air duct cleaning, dryer vent cleaning, furnace cleaning
              and HVAC sanitization services across Ontario. We improve indoor air quality
              for homes and businesses.
            </p>

            {/* BACKLINKS - SOCIAL */}
            <div style={{ marginTop: '15px' }}>
              <a href="https://www.facebook.com/share/1BVciPbPKA/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <br />
              <a href="https://www.instagram.com/duct_cleaning_canada/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <br />
              <a href="https://wa.me/12267772863" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <br />
              <a href="https://biz.yelp.com/biz_photos/ipveeiH_e-0z2yo_ng1xlw?exitIntentKeyValue=655dbcc1-0a1d-49b2-a342-42b4afcbbda7" target="_blank" rel="noopener noreferrer">
                Yelp
              </a>
              <br />
              <a href="https://www.hotfrog.ca/company/2748911d6537073e9476bb10ec11b299/duct-cleaning-canada/markham/heating-air" target="_blank" rel="noopener noreferrer">
                Hotfrog
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3>Quick Links</h3>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3>Our Services</h3>
            <div className={styles.links}>
              <Link href="/services">Air Duct Cleaning</Link>
              <Link href="/services">Dryer Vent Cleaning</Link>
              <Link href="/services">Furnace Cleaning</Link>
              <Link href="/services">Blower Fan Cleaning</Link>
              <Link href="/services">Sanitization Services</Link>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3>Contact Us</h3>
            <div className={styles.links}>
              <p>35 Carlton Rd, Markham, ON L3R 1Z4</p>
              <p>📞 226-777-2863</p>
              <p>📧 ductcleaningcanada2@gmail.com</p>

              <a href="https://wa.me/12267772863" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom SEO Line */}
        <div className={`container ${styles.bottom}`}>
          <p>
            &copy; {new Date().getFullYear()} Duct Cleaning Canada. All Rights Reserved.
          </p>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>
            Air Duct Cleaning | Dryer Vent Cleaning | Furnace Cleaning | HVAC Cleaning Ontario Canada
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
