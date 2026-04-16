import styles from '@/styles/Home.module.css'; // Reusing some basic utilities or creating inline

export default function Gallery() {
    return (
        <div className="container section">
            <h1 className="section-title">Our Work</h1>
            <p className="section-subtitle">See the difference professional duct cleaning makes.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                {[
                    'WhatsApp Image 2026-01-30 at 3.50.13 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.14 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.17 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.19 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.20 PM (1).jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.20 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.21 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.22 PM (1).jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.22 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.23 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.24 PM (1).jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.24 PM (2).jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.24 PM.jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.25 PM (1).jpeg',
                    'WhatsApp Image 2026-01-30 at 3.50.25 PM.jpeg'
                ].map((image, index) => (
                    <div key={index} style={{
                        backgroundColor: 'white',
                        borderRadius: 'var(--radius)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{
                            height: '250px',
                            position: 'relative',
                            backgroundColor: 'var(--gray-200)'
                        }}>
                            <img
                                src={`/images/Before/${image}`}
                                alt={`Gallery image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
