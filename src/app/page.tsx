import Image from "next/image";
import Link from "next/link";

// ✅ METADATA
export const metadata = {
  title: "Air Duct Cleaning Markham & Toronto | Professional HVAC Experts",
  description:
    "Top-rated air duct cleaning in Markham, Toronto & GTA. Book professional furnace, dryer vent & HVAC cleaning today.",
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container heroWrap">
          <div className="heroText">
            <h1>
              Breathe Cleaner Air <br />
              <span>Professional Duct Cleaning</span>
            </h1>

            <p>
              We provide expert air duct, furnace & dryer vent cleaning services
              across Markham & GTA.
            </p>

            <div className="buttons">
              <a href="tel:+16470000000" className="btn primary">
                Call Now
              </a>

              <Link href="/contact" className="btn secondary">
                Get Free Quote
              </Link>
            </div>

            <div className="badges">
              ✔ Same Day Service &nbsp; ✔ Certified Experts &nbsp; ✔ Affordable
            </div>
          </div>

          <div className="heroImg">
            <Image
              src="/images/services/air-duct-cleaning.jpg"
              alt="Air duct cleaning service"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <h2 className="center">Our Services</h2>

          <div className="grid">
            {services.map((s, i) => (
              <div key={i} className="card">
                <Image src={s.image} alt={s.title} width={400} height={250} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <div className="container">
          <h2>Why Choose Us</h2>

          <div className="whyGrid">
            <div>✔ 5-Star Rated</div>
            <div>✔ Latest Equipment</div>
            <div>✔ Certified Technicians</div>
            <div>✔ Fast Service</div>
            <div>✔ Affordable Pricing</div>
            <div>✔ Serving GTA</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container center">
          <h2>Book Your Cleaning Today</h2>
          <a href="tel:+16470000000" className="btn primary">
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}

// DATA
const services = [
  {
    title: "Air Duct Cleaning",
    desc: "Improve indoor air quality & airflow.",
    image: "/images/services/air-duct-cleaning.jpg",
  },
  {
    title: "Furnace Cleaning",
    desc: "Boost heating efficiency & performance.",
    image: "/images/services/furnace-cleaning.jpg",
  },
  {
    title: "Dryer Vent Cleaning",
    desc: "Prevent fire hazards & improve drying.",
    image: "/images/services/dryer-vent-cleaning.jpg",
  },
  {
    title: "HVAC Cleaning",
    desc: "Complete HVAC system cleaning.",
    image: "/images/services/blower-fan-cleaning.jpg",
  },
];
