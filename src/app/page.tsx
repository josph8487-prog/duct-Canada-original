import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Air Duct Cleaning Markham & Toronto | Premium HVAC Experts",
  description:
    "Top-rated duct cleaning services in Markham, Toronto & GTA. Improve air quality with certified professionals.",
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="container heroContent">
          <div className="heroLeft">
            <h1>
              Clean Air Starts <br />
              <span>Inside Your Ducts</span>
            </h1>

            <p>
              Professional air duct, furnace & dryer vent cleaning across
              Markham & GTA. Trusted by hundreds of homeowners.
            </p>

            <div className="ctaRow">
              <a href="tel:+16470000000" className="btn primary">
                Call Now
              </a>

              <Link href="/contact" className="btn ghost">
                Get Quote
              </Link>
            </div>

            <div className="trustBox">
              ⭐ 5-Star Rated &nbsp; | &nbsp; Same Day Service &nbsp; | &nbsp;
              Certified Experts
            </div>
          </div>

          <div className="heroRight">
            <div className="glassCard">
              <h3>Book Your Service</h3>
              <p>Fast response within 30 minutes</p>

              <a href="tel:+16470000000" className="btn primary full">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <h2 className="heading">Our Services</h2>

          <div className="serviceGrid">
            {services.map((s, i) => (
              <div key={i} className="serviceCard">
                <div className="imgWrap">
                  <Image src={s.image} alt={s.title} fill />
                </div>

                <div className="cardContent">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="ctaStrip">
        <div className="container stripContent">
          <h2>Need Urgent Cleaning?</h2>
          <a href="tel:+16470000000" className="btn primary">
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Air Duct Cleaning",
    desc: "Remove dust & allergens for cleaner air.",
    image: "/images/services/air-duct-cleaning.jpg",
  },
  {
    title: "Furnace Cleaning",
    desc: "Improve heating efficiency & lifespan.",
    image: "/images/services/furnace-cleaning.jpg",
  },
  {
    title: "Dryer Vent Cleaning",
    desc: "Prevent fire hazards & improve drying.",
    image: "/images/services/dryer-vent-cleaning.jpg",
  },
  {
    title: "HVAC Cleaning",
    desc: "Complete system cleaning service.",
    image: "/images/services/blower-fan-cleaning.jpg",
  },
];
