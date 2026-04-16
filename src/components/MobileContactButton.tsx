'use client';

import { useState, useEffect } from 'react';
import styles from './MobileContactButton.module.css';

const PHONE = '226-777-2863';
const PHONE_RAW = '2267772863';

export default function MobileContactButton() {
    const [open, setOpen] = useState(false);

    // Close modal on backdrop click or Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            {/* Floating Button */}
            <button
                className={styles.fab}
                onClick={() => setOpen(true)}
                aria-label="Contact us"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
            </button>

            {/* Modal Backdrop */}
            {open && (
                <div className={styles.backdrop} onClick={() => setOpen(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">✕</button>
                        <p className={styles.modalTitle}>Reach Us Instantly</p>
                        <p className={styles.modalPhone}>{PHONE}</p>

                        <div className={styles.options}>
                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/1${PHONE_RAW}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.optionBtn} ${styles.whatsapp}`}
                                onClick={() => setOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
                                    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.78 6.72L2 30l7.47-1.75A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.43 11.43 0 01-5.81-1.58l-.42-.25-4.34 1.02 1.04-4.24-.28-.44A11.45 11.45 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.27-8.56c-.34-.17-2.02-1-2.34-1.11-.31-.12-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.02-1.89-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43s-1.2 1.17-1.2 2.86 1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.71.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.31-.23-.65-.4z" />
                                </svg>
                                WhatsApp
                            </a>

                            {/* Call */}
                            <a
                                href={`tel:${PHONE}`}
                                className={`${styles.optionBtn} ${styles.call}`}
                                onClick={() => setOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
