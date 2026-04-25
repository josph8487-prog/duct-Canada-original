// ============================= // FULL NEXT.JS WEBSITE (APP ROUTER) // =============================

// 1. app/layout.tsx export default function RootLayout({ children }: { children: React.ReactNode }) { return ( <html lang="en"> <body> <header className="header"> <div className="container nav"> <h2>Duct Cleaning Canada</h2> <nav> <a href="/">Home</a> <a href="/services">Services</a> <a href="/contact">Contact</a> </nav> </div> </header>

{children}

    <footer className="footer">
      <div className="container">
        <p>© 2026 Duct Cleaning Canada. All rights reserved.</p>
      </div>
    </footer>
  </body>
</html>

); }

// ============================= // 2. app/page.tsx (HOMEPAGE) // ============================= import Link from "next/link";

export default function Home() { return ( <main> <section className="hero"> <div className="container"> <h1>Professional Air Duct Cleaning</h1> <p>Serving Markham, Toronto & GTA</p> <a href="tel:+16470000000" className="btn">Call Now</a> </div> </section>

<section className="section">
    <div className="container">
      <h2>Our Services</h2>
      <div className="grid">
        <div className="card">Air Duct Cleaning</div>
        <div className="card">Furnace Cleaning</div>
        <div className="card">Dryer Vent Cleaning</div>
      </div>
    </div>
  </section>
</main>

); }

// ============================= // 3. app/services/page.tsx // ============================= export default function Services() { return ( <main className="section container"> <h1>Our Services</h1> <p>We provide full HVAC cleaning services.</p> </main> ); }

// ============================= // 4. app/contact/page.tsx // ============================= export default function Contact() { return ( <main className="section container"> <h1>Contact Us</h1> <p>Call us for fast service</p> <a href="tel:+16470000000" className="btn">Call Now</a> </main> ); }

// ============================= // 5. app/globals.css // ============================= body { margin: 0; font-family: Arial; background: #0f172a; color: white; }

.container { max-width: 1100px; margin: auto; padding: 20px; }

.header { background: black; padding: 15px 0; }

.nav { display: flex; justify-content: space-between; }

nav a { margin-left: 15px; color: white; text-decoration: none; }

.hero { padding: 100px 20px; text-align: center; background: linear-gradient(45deg,#0077ff,#00e0ff); }

.btn { background: white; color: black; padding: 10px 20px; display: inline-block; margin-top: 10px; }

.section { padding: 60px 20px; }

.grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }

.card { background: #1e293b; padding: 20px; }

.footer { background: black; text-align: center; padding: 20px; }
