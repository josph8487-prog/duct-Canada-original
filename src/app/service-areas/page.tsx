import styles from '@/styles/ServiceAreas.module.css';

export default function ServiceAreas() {
    const mainAreas = [
        {
            title: "Primary Service Areas",
            cities: [
                "Markham",
                "Toronto",
                "Vaughan",
                "Richmond Hill",
                "North York"
            ]
        }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Service Areas</h1>
                    <p className={styles.heroSubtitle}>
                        Professional Air Duct Cleaning Services in Markham, Toronto & Nearby GTA Areas.
                    </p>
                </div>
            </section>

            {/* MAIN AREAS */}
            <div className={`container ${styles.section}`}>
                <div className={styles.grid}>
                    {mainAreas.map((region, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.regionTitle}>{region.title}</h3>
                            <ul className={styles.cityList}>
                                {region.cities.map((city, cIndex) => (
                                    <li key={cIndex} className={styles.cityItem}>
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* SEO TEXT BLOCK */}
                <div style={{
                    marginTop: '2rem',
                    padding: '2.5rem',
                    backgroundColor: 'var(--gray-50)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                    border: '1px solid var(--gray-200)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>
                        Not sure if we cover your area?
                    </h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--gray-800)' }}>
                        We proudly serve Markham, Toronto, Vaughan, Richmond Hill and North York.
                        Contact us to confirm service availability in your area.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
}
