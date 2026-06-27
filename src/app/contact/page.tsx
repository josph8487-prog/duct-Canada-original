'use client';
import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "e14b8041-541d-480d-b267-e49fb256e4f9");

        try {
            // mode: 'cors' lagaya hai taake API response block na ho
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                mode: "cors",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
                form.reset();
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className={styles.hero} dir="ltr">
                <div className="container" style={{ textAlign: 'left' }}>
       <h1 className={styles.heroTitle} style={{ fontSize: '25px', whiteSpace: 'nowrap', marginTop: '100px', textAlign: 'center' }}>
  CONTACT US
</h1>
             <p className={styles.heroSubtitle} style={{ textAlign: 'center', marginTop: '10px' }}>
  Get in touch for appointments or any information regarding our services.
</p>

                </div>
            </section>

            <section className={styles.contactSection} dir="ltr">
                <div className={`container ${styles.grid}`}>

                    {/* Contact Information */}
                    <div className={styles.contactInfoCol} style={{ textAlign: 'left' }}>
                        <div>
                            <h2>Get in Touch</h2>
                            <p style={{ lineHeight: '1.6', color: 'var(--gray-700)', marginBottom: '2rem' }}>
                                Our certified technicians are ready to assist you with all your residential and commercial duct cleaning needs across GTA and nearby Ontario cities.
                            </p>
                        </div>

                        {/* Clickable Phone Card */}
                        <a href="tel:+12267772863" className={styles.infoItemLink} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>📞</div>
                                <div className={styles.infoContent}>
                                    <h4>Phone</h4>
                                    <span>226-777-2863</span>
                                </div>
                            </div>
                        </a>

                        {/* Clickable Email Card */}
                        <a href="mailto:ductcleaningcanada2@gmail.com" className={styles.infoItemLink} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconCircle}>📧</div>
                                <div className={styles.infoContent}>
                                    <h4>Email</h4>
                                    <span className={styles.responsiveEmail}>ductcleaningcanada2@gmail.com</span>
                                </div>
                            </div>
                        </a>

                        {/* Address Card */}
                        <div className={styles.infoItem}>
                            <div className={styles.iconCircle}>🏢</div>
                            <div className={styles.infoContent}>
                                <h4>Address</h4>
                                <p className={styles.responsiveAddress}>35 Carlton Rd, Markham, ON L3R 1Z4</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formCol} style={{ textAlign: 'left' }}>
                        <h3>Send us a Message</h3>

                        {submitted ? (
                            <div className={styles.successMessage}>
                                <strong>Thank you!</strong> Your message has been sent successfully. We will get back to you shortly.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} dir="ltr" style={{ textAlign: 'left' }}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-name" className={styles.label}>Name</label>
                                    <input id="contact-name" name="name" type="text" className={styles.input} placeholder="Your Name" required style={{ textAlign: 'left', direction: 'ltr' }} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-email" className={styles.label}>Email</label>
                                    <input id="contact-email" name="email" type="email" className={styles.input} placeholder="your@email.com" required style={{ textAlign: 'left', direction: 'ltr' }} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-phone" className={styles.label}>Phone</label>
                                    <input id="contact-phone" name="phone" type="tel" className={styles.input} placeholder="(555) 123-4567" required style={{ textAlign: 'left', direction: 'ltr' }} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-service" className={styles.label}>Service Type</label>
                                    <select id="contact-service" name="service" className={styles.select} style={{ textAlign: 'left', direction: 'ltr' }}>
                                        <option value="Residential Cleaning">Residential Cleaning</option>
                                        <option value="Commercial Cleaning">Commercial Cleaning</option>
                                        <option value="Deep Cleaning Package">Deep Cleaning Package</option>
                                        <option value="Premium Package">Premium Package</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-message" className={styles.label}>Message / Details</label>
                                    <textarea id="contact-message" name="message" className={styles.textarea} placeholder="How can we help you?" required style={{ textAlign: 'left', direction: 'ltr' }}></textarea>
                                </div>
                                
                                {error && (
                                    <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'left' }}>
                                        Submission failed. Please check your internet connection and try again.
                                    </div>
                                )}

                                <button type="submit" className={styles.submitBtn} disabled={loading}>
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

{/* Map Section */}
            <section className={styles.mapSection}>
                <iframe
                    src="https://maps.google.com/maps?q=35%20Carlton%20Rd,%20Markham,%20ON%20L3R%201Z4&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className={styles.mapFrame}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Duct Cleaning Canada Location"
                ></iframe>
            </section>
        </>
    );
}
