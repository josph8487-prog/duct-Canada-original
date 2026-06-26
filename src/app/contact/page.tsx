'use client';
import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
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
                                <a href="mailto:ductcleaningcanada2@gmail.com" className={styles.responsiveEmail}>ductcleaningcanada2@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconCircle}>🏢</div>
                            <div className={styles.infoContent}>
                                <h4>Address</h4>
                                <p className={styles.responsiveAddress}>35 Carlton Rd, Markham, ON L3R 1Z4</p>
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
import Link from 'next/link';

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto p-4">
      {/* Call Card */}
      <Link 
        href="tel:+12267772863" 
        className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 text-center"
      >
        <div className="text-3xl mb-3 text-gray-700 group-hover:scale-110 transition-transform duration-200">
          📞
        </div>
        <h3 className="text-lg font-semibold text-gray-950 group-hover:text-blue-600 transition-colors">
          Call Us
        </h3>
        <p className="mt-2 text-sm text-gray-600 font-medium">
          226-777-2863
        </p>
        <span className="mt-4 inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
          Tap to Call
        </span>
      </Link>

      {/* Email Card */}
      <Link 
        href="mailto:ductcleaningcanada2@gmail.com" 
        className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-green-500 transition-all duration-200 text-center"
      >
        <div className="text-3xl mb-3 text-gray-700 group-hover:scale-110 transition-transform duration-200">
          ✉️
        </div>
        <h3 className="text-lg font-semibold text-gray-950 group-hover:text-green-600 transition-colors">
          Email Us
        </h3>
        <p className="mt-2 text-sm text-gray-600 font-medium break-all">
          ductcleaningcanada2@gmail.com
        </p>
        <span className="mt-4 inline-block text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
          Send Email
        </span>
      </Link>
    </div>
  );
}
