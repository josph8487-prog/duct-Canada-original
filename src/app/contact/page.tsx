'use client';
import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        // In a real app, here you would send the data to an API endpoint
        console.log("Form submitted to ductcleaningcanada2@gmail.com");
    };

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>Get in touch for appointments or any information regarding our services.</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={`container ${styles.grid}`}>

                    {/* Contact Information */}
                    <div className={styles.contactInfoCol}>
                        <div>
                            <h2>Get in Touch</h2>
                            <p style={{ lineHeight: '1.6', color: 'var(--gray-700)', marginBottom: '2rem' }}>
                                Our certified technicians are ready to assist you with all your residential and commercial duct cleaning needs across GTA and nearby Ontario cities.
                            </p>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconCircle}>📞</div>
                            <div className={styles.infoContent}>
                                <h4>Phone</h4>
                                <a href="tel:2267772863">226-777-2863</a>

                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconCircle}>📧</div>
                            <div className={styles.infoContent}>
                                <h4>Email</h4>
                                <a href="mailto:ductcleaningcanada2@gmail.com">ductcleaningcanada2@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconCircle}>🏢</div>
                            <div className={styles.infoContent}>
                                <h4>Address</h4>
                                <p>35 Carlton Rd, Markham, ON L3R 1Z4</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formCol}>
                        <h3>Send us a Message</h3>

                        {submitted ? (
                            <div className={styles.successMessage}>
                                <strong>Thank you!</strong> Your message has been sent successfully. We will get back to you shortly.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-name" className={styles.label}>Name</label>
                                    <input id="contact-name" type="text" className={styles.input} placeholder="Your Name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-email" className={styles.label}>Email</label>
                                    <input id="contact-email" type="email" className={styles.input} placeholder="your@email.com" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-phone" className={styles.label}>Phone</label>
                                    <input id="contact-phone" type="tel" className={styles.input} placeholder="(555) 123-4567" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-service" className={styles.label}>Service Type</label>
                                    <select id="contact-service" className={styles.select}>
                                        <option>Residential Cleaning</option>
                                        <option>Commercial Cleaning</option>
                                        <option>Deep Cleaning Package</option>
                                        <option>Premium Package</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="contact-message" className={styles.label}>Message / Details</label>
                                    <textarea id="contact-message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>Send Message</button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            {/* Map Section */}
            <section className={styles.mapSection}>
                {/* Embed Google Map for 35 Carlton Rd, Markham, ON L3R 1Z4 */}
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
