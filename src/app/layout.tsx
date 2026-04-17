import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileContactButton from '@/components/MobileContactButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Duct Cleaning Canada | Air Duct & Dryer Vent Cleaning Markham',
  description:
    'Professional air duct cleaning, dryer vent cleaning, furnace cleaning, and HVAC sanitization services across Markham and Ontario. Improve indoor air quality today.',
  keywords: [
    'duct cleaning Canada',
    'air duct cleaning Markham',
    'dryer vent cleaning Ontario',
    'HVAC cleaning services',
    'furnace cleaning Markham',
    'vent cleaning Canada',
    'indoor air quality services'
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Duct Cleaning Canada',
    description:
      'Professional air duct, furnace and dryer vent cleaning services in Ontario.',
    url: 'https://ductcleaningcanada.com',
    siteName: 'Duct Cleaning Canada',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duct Cleaning Canada',
    description:
      'Expert duct cleaning services in Markham & Ontario for cleaner indoor air.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QY5NQEY4EP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QY5NQEY4EP');
          `}
        </Script>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ================= SCHEMA MARKUP (LOCAL BUSINESS) ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Duct Cleaning Canada",
              "url": "https://ductcleaningcanada.com",
              "telephone": "226-777-2863",
              "image": "https://ductcleaningcanada.com/favicon.ico",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Markham",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "description":
                "Professional air duct cleaning, dryer vent cleaning, furnace cleaning, and HVAC services in Markham and across Ontario.",
              "sameAs": [
                "https://www.facebook.com/share/1BVciPbPKA/",
                "https://www.instagram.com/duct_cleaning_canada/",
                "https://www.hotfrog.ca/company/2748911d6537073e9476bb10ec11b299/duct-cleaning-canada/markham/heating-air",
                "https://wa.me/12267772863"
              ]
            })
          }}
        />
        {/* ================= END SCHEMA ================= */}

      </head>

      <body>
        <Header />

        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>

        <Footer />
        <MobileContactButton />
      </body>
    </html>
  );
}
