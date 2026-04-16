import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Services.module.css';

export default function Services() {
    const services = [
        {
            title: "Air Duct & Vent Cleaning",
            text: "We remove dust, allergens, pet hair, and debris from air ducts and vents to improve airflow and create a healthier indoor environment for homes and businesses.",
            image: "/images/services/air-duct-cleaning.jpg"
        },
        {
            title: "Furnace Cleaning",
            text: "Our furnace cleaning service improves heating efficiency, reduces strain on your system, and helps extend the life of your furnace.",
            image: "/images/services/furnace-cleaning.jpg"
        },
        {
            title: "Dryer Vent Cleaning",
            text: "We clean dryer vents to remove lint buildup, improving dryer performance and reducing the risk of fire hazards.",
            image: "/images/services/dryer-vent-cleaning.jpg"
        },
        {
            title: "Blower Fan Cleaning",
            text: "Cleaning the blower fan ensures proper airflow, better system performance, and lower energy costs.",
            image: "/images/services/blower-fan-cleaning.jpg"
        },
        {
            title: "Sanitization & Disinfection",
            text: "We sanitize ducts and HVAC components to eliminate bacteria, mold, and unpleasant odors for fresher air.",
            image: "/images/services/sanitization.jpg"
        },
        {
            title: "Filter Replacement",
            text: "Professional air filter replacement helps maintain clean air circulation and protects your HVAC system.",
            image: "/images/services/filter-replacement.jpg"
        },
        {
            title: "Dishwasher Vent Cleaning",
            text: "We remove grease and moisture buildup from dishwasher vents to support proper ventilation and hygiene.",
            image: "/images/services/dishwasher-cleaning.jpg"
        },
        {
            title: "Exhaust Fan Cleaning",
            text: "Kitchen and bathroom exhaust fan cleaning improves air circulation, removes moisture, and prevents mold growth.",
            image: "/images/services/exhaust-fan-cleaning.jpg"
        },
        {
            title: "And Many More Services",
            text: "We offer customized HVAC and ventilation cleaning solutions based on your residential or commercial needs.",
            image: "/images/services/air-duct-cleaning.jpg" // Fallback
        }
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Our Services</h1>
                    <p className={styles.heroSubtitle}>Professional residential and commercial duct cleaning solutions backed by industry expertise.</p>
                </div>
            </section>

            <section className={styles.servicesSection}>
                <div className={`container ${styles.grid}`}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.text}</p>
                                <Link href="/contact" className={styles.ctaButton}>
                                    Get a Quote →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
