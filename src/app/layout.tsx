import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileContactButton from '@/components/MobileContactButton';

export const metadata: Metadata = {
  title: 'Duct Cleaning Canada - Professional Duct Cleaning Services',
  description: 'Top-rated air duct cleaning, dryer vent cleaning, and sanitization services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QY5NQEY4EP" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QY5NQEY4EP');
          `}
        </Script>
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
