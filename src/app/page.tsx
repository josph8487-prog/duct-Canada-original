import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
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
      image: "/images/services/air-duct-cleaning.jpg" // Fallback image for generic service
    }
  ];

  return (
    <>
      {/* Hero Section Split Layout */}
      <section className={styles.hero}>
        <div className={styles.heroContentWrapper} style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

          <div className={styles.heroLeft}>
            <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))' }}>
              <h1 className={styles.heroTitle}>
                Residential Duct Cleaning<br />in Markham
              </h1>
              <p className={styles.heroSubtitle}>
                Breathe cleaner air today with professional duct cleaning and air duct cleaning Markham homeowners trust.
              </p>
              <Link href="/services" className="btn btn-primary">
                DISCOVER MORE
              </Link>
            </div>
          </div>

          <div className={styles.heroRight}></div>

        </div>
      </section>

      {/* 2. Who We Are (About Section) */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>

          {/* Column 1: Text Content */}
          <div className={styles.aboutContent}>
            <h2>Who We Are</h2>
            <h3>Professional Air Duct Cleaning Services by Duct Cleaning Canada</h3>
            <p className={styles.aboutText}>
              Our professional air duct cleaning process removes dust and contaminants within the HVAC ductwork. This includes the supply and return air ducts as well as the registers and diffusers in each room so your home duct cleaning services visit delivers long‑lasting results.
            </p>
            <Link href="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              DISCOVER MORE
            </Link>
          </div>

          {/* Column 2: Image Grid (Middle) */}
          <div className={styles.aboutImages}>
            {/* Using existing service images as placeholder/examples for before/after */}
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/air-duct-cleaning.jpg" alt="Duct Work" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/furnace-cleaning.jpg" alt="Furnace" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/blower-fan-cleaning.jpg" alt="Blower Fan" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.aboutImageItem}>
              <Image src="/images/services/sanitization.jpg" alt="Vent" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* Column 3: Locally Owned Box (Right) */}
          <div className={styles.localHighlight}>
            <h4>Locally Owned & Operated</h4>
            <p>
              Located in Markham, Duct Cleaning Canada stands as your trusted source for superior duct cleaning services. Proudly serving all GTA areas and nearby Ontario cities.
            </p>
          </div>

        </div>
      </section>

      {/* Intro / Services Title Section - kept before grid as lead-in */}
      <section className={`section ${styles.features}`} style={{ paddingBottom: 0 }}>
        <div className="container">
          <h2 className="section-title">Residential & Commercial Services</h2>
          <p className="section-subtitle">
            At Duct Cleaning Canada, we provide professional residential and commercial duct cleaning services to improve indoor air quality and HVAC system efficiency.
            <br /><br />
            Proudly serving all GTA areas and nearby Ontario cities, our certified HVAC technicians deliver reliable, honest, and high-quality service you can trust.
          </p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className={`section ${styles.servicesPreview}`} style={{ paddingTop: '2rem' }}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Complete Duct Cleaning services for homes & businesses
          </p>

          <div className={styles.featureGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.featureCard}>
                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className={styles.featureTitle}>{service.title}</h3>
                <p className={styles.featureText}>
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Process Section */}
      <section className={styles.processSection}>
        <div className={`container ${styles.processGrid}`}>
          <div>
            <h2 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', marginBottom: '10px' }}>Our Cleaning Process</h2>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--secondary)', marginBottom: '3rem', lineHeight: '1.2' }}>A Clear, Step-by-Step Duct Cleaning<br />Process You Can Trust</h3>

            <div className={styles.stepsContainer}>
              {[
                { num: '01', title: 'Inspection', text: 'We start with a detailed inspection of your ducts, vents, and HVAC system to identify dust, debris, or contaminants.' },
                { num: '02', title: 'Preparation', text: 'We cover vents while working and set up our powerful vacuum equipment to protect your home and ensure efficient cleaning.' },
                { num: '03', title: 'Powerful Vacuuming', text: 'Our high-powered industrial vacuum system removes dust, dirt, and allergens directly from your ducts.' },
                { num: '04', title: 'Agitation & Deep Cleaning', text: 'We use specialized brushes and air whips to loosen stubborn debris stuck to duct walls.' },
                { num: '05', title: 'Sanitization (Optional)', text: 'For homes with pets, children, or allergies, we offer eco-friendly sanitizing solutions for fresher, healthier air.' },
                { num: '06', title: 'Final Inspection', text: 'We re-check your ducts and vents to ensure everything is spotless, giving you complete peace of mind.' },
              ].map((step) => (
                <div key={step.num} className={styles.stepItem}>
                  <div className={styles.stepNumber}>{step.num}</div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Get a Quote Form */}
          <div>
            <div className={styles.quoteFormCard}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>Get A Free Quote</h3>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="full-name">Full Name</label>
                  <input id="full-name" type="text" className={styles.formInput} placeholder="John Doe" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" className={styles.formInput} placeholder="john@example.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" className={styles.formInput} placeholder="(555) 123-4567" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service-type">Service Type</label>
                  <select id="service-type" className={styles.formSelect}>
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className={styles.formTextarea} placeholder="Tell us about your needs..."></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={`container ${styles.whyChooseGrid}`}>
          <div style={{ position: 'relative', minHeight: '400px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <Image
              src="/images/Why-Chose-Us.jpeg"
              alt="Professional HVAC Technician"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className={styles.whyChooseContent}>
            <h2>Why Choose Us</h2>
            <h3>Relax we’ve got your air climate covered</h3>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <div>
                  <span className={styles.benefitTitle}>Since 2017
                  </span>
                  <p>We are dedicated to providing the best possible service for you and your family.</p>
                </div>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <div>
                  <span className={styles.benefitTitle}>Trained Professional</span>
                  <p>Our trained professional follow the Industry standard guidelines.</p>
                </div>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <div>
                  <span className={styles.benefitTitle}>WSIB Compliant</span>
                  <p>We are Wsib compliant. Insured and bonded.</p>
                </div>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <div>
                  <span className={styles.benefitTitle}>100% Customer Satisfaction</span>
                  <p>We promise to deliver the service that our customers are paying for.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={`container ${styles.testimonialsContentWrapper}`}>

          <div className={styles.testimonialLeft}>
            <div className={styles.testimonialHeader}>
              <h2>Testimonials</h2>
              <h3>Real Experiences, Happy Customers.</h3>
              <p>See what our clients are saying about us</p>
            </div>

            <div className={styles.reviewGrid}>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>"Great service! They were on time and explained everything clearly. My home feels much fresher now."</p>
                <div className={styles.reviewName}>
                  <span>Suvi</span>
                  <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★★★★★</span>
                </div>
              </div>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>"I like the way they do they are promp and professional. Will definitely recommend them to friends."</p>
                <div className={styles.reviewName}>
                  <span>Owen Diaz</span>
                  <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★★★★★</span>
                </div>
              </div>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>&quot;Excellent experience from start to finish. The technician was thorough and left no mess behind. Air quality in our home improved noticeably!&quot;</p>
                <div className={styles.reviewName}>
                  <span>Priya Leblanc</span>
                  <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★★★★★</span>
                </div>
              </div>
              <div className={styles.reviewCard}>
                <p className={styles.reviewText}>&quot;Very professional team. They cleaned all our vents and the furnace efficiently. Pricing was fair and the results were fantastic. Highly recommend!&quot;</p>
                <div className={styles.reviewName}>
                  <span>Arjun Tremblay</span>
                  <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★★★★★</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-primary">Review us on Google</button>
            </div>
          </div>

          <div className={styles.testimonialRight}>
            <div className={styles.testimonialImageFrame}>
              <Image
                src="/images/testimonials-family-v2.jpg"
                alt="Happy Family"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
