import styles from '@/styles/ServiceAreas.module.css';

export default function ServiceAreas() {
    const gtaRegions = [
        {
            title: "Toronto & GTA",
            cities: ["Toronto", "North York", "Scarborough", "Etobicoke", "York", "East York"]
        },
        {
            title: "Peel Region",
            cities: ["Mississauga", "Brampton", "Caledon"]
        },
        {
            title: "York Region",
            cities: ["Vaughan", "Markham", "Richmond Hill", "Newmarket", "Aurora", "King", "Whitchurch-Stouffville", "East Gwillimbury"]
        },
        {
            title: "Durham Region",
            cities: ["Oshawa", "Whitby", "Ajax", "Pickering", "Clarington", "Scugog", "Brock", "Uxbridge"]
        }
    ];

    const otherRegions = [
        {
            title: "Niagara Region",
            cities: ["Niagara Falls", "St. Catharines", "Welland"]
        },
        {
            title: "Waterloo Region",
            cities: ["Waterloo", "Kitchener", "Cambridge"]
        },
        {
            title: "Southwestern Ontario",
            cities: ["Woodstock", "Windsor", "London", "Chatham-Kent", "Sarnia"]
        },
        {
            title: "Central & Eastern Ontario",
            cities: ["Guelph", "Brantford", "Barrie", "Orillia", "Peterborough", "Kingston"]
        }
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Service Areas</h1>
                    <p className={styles.heroSubtitle}>Duct Cleaning Canada proudly serving all GTA areas and nearby Ontario cities.</p>
                </div>
            </section>

            <div className={`container ${styles.section}`}>
                <div className={styles.grid}>
                    {gtaRegions.map((region, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.regionTitle}>{region.title}</h3>
                            <ul className={styles.cityList}>
                                {region.cities.map((city, cIndex) => (
                                    <li key={cIndex} className={styles.cityItem}>{city}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.flag}>🇨🇦</span> Ontario – Other Major Cities
                    </h2>
                </div>

                <div className={styles.grid}>
                    {otherRegions.map((region, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.regionTitle}>{region.title}</h3>
                            <ul className={styles.cityList}>
                                {region.cities.map((city, cIndex) => (
                                    <li key={cIndex} className={styles.cityItem}>{city}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '2rem',
                    padding: '3rem',
                    backgroundColor: 'var(--gray-50)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                    border: '1px solid var(--gray-200)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Don't see your city?</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--gray-800)' }}>We are constantly expanding our service area. Give us a call to check if we can help you.</p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                </div>
            </div>
        </>
    );
}
