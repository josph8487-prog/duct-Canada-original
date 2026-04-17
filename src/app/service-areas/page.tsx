import styles from '@/styles/ServiceAreas.module.css';

export default function ServiceAreas() {

    const mainAreas = [
        {
            title: "Primary Service Areas (GTA)",
            cities: [
                "Markham",
                "Toronto",
                "Vaughan",
                "Richmond Hill",
                "North York",
                "Scarborough",
                "Mississauga",
                "Brampton"
            ]
        }
    ];

    const nearbyAreas = [
        {
            title: "Surrounding GTA Regions",
            cities: [
                "Etobicoke",
                "York Region",
                "East York",
                "Whitby",
                "Ajax",
                "Pickering",
                "Oshawa"
            ]
        }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>
                        Service Areas – Air Duct Cleaning Markham & GTA
                    </h1>

                    <p className={styles.heroSubtitle}>
                        Professional air duct cleaning, dryer vent cleaning, furnace cleaning and HVAC services across Markham, Toronto and Greater Toronto Area.
                    </p>
                </div>
            </section>

            {/* MAIN AREAS */}
            <div className={`container ${styles.section}`}>

                {/* PRIMARY AREAS */}
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

                {/* NEARBY AREAS */}
                <div className={styles.grid} style={{ marginTop: "30px" }}>
                    {nearbyAreas.map((region, index) => (
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

                {/* SEO BLOCK */}
                <div
                    style={{
                        marginTop: '3rem',
                        padding: '2.5rem',
                        backgroundColor: 'var(--gray-50)',
                        borderRadius: 'var(--radius)',
                        textAlign: 'center',
                        border: '1px solid var(--gray-200)'
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>
                        Don’t see your city listed?
                    </h3>

                    <p style={{ marginBottom: '1.5rem', color: 'var(--gray-800)' }}>
                        We are expanding our air duct cleaning services across Ontario.
                        Call us to confirm availability in your area.
                    </p>

                    <a href="/contact" className="btn btn-primary">
                        Contact Us
                    </a>
                </div>

            </div>
        </>
    );
}
