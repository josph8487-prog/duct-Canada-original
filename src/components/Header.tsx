'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* Backdrop overlay */}
            <div
                className={`${styles.mobileBackdrop} ${isMenuOpen ? styles.mobileBackdropOpen : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <header className={styles.header}>
                <div className={`container ${styles.navContainer}`}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo} onClick={closeMenu}>
                        <Image
                            src="/Logo .jpeg"
                            alt="Duct Cleaning Canada Logo"
                            width={320}
                            height={115}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/about" className={styles.navLink}>About</Link>
                        <Link href="/services" className={styles.navLink}>Services</Link>
                        <Link href="/pricing" className={styles.navLink}>Pricing</Link>
                        <Link href="/service-areas" className={styles.navLink}>Service Areas</Link>
                        <Link href="/resources" className={styles.navLink}>Resources</Link>
                        <Link href="/gallery" className={styles.navLink}>Gallery</Link>
                        <Link href="/contact" className={styles.navLink}>Contact</Link>
                    </nav>

                    <a href="tel:226-777-2863" className={styles.ctaButton}>
                        <span className={styles.phoneIcon}>📞</span> 226-777-2863
                    </a>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Panel */}
            <div
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!isMenuOpen}
            >
                {/* Panel header with close button */}
                <div className={styles.mobileMenuHeader}>
                    <button
                        className={styles.mobileCloseBtn}
                        onClick={closeMenu}
                        aria-label="Close menu"
                        tabIndex={isMenuOpen ? 0 : -1}
                    >
                        ✕
                    </button>
                </div>

                {/* Nav links */}
                <nav className={styles.mobileNavLinks}>
                    <Link href="/" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Home</Link>
                    <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>About</Link>
                    <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Services</Link>
                    <Link href="/pricing" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Pricing</Link>
                    <Link href="/service-areas" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Service Areas</Link>
                    <Link href="/resources" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Resources</Link>
                    <Link href="/gallery" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Gallery</Link>
                    <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Contact</Link>
                </nav>

                {/* Phone CTA */}
                <a href="tel:226-777-2863" className={`${styles.ctaButton} ${styles.mobileCta}`} tabIndex={isMenuOpen ? 0 : -1}>
                    <span className={styles.phoneIcon}>📞</span> 226-777-2863
                </a>
            </div>
        </>
    );
};

export default Header;
