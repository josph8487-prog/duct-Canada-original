export default function MarkhamPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Markham</h1>

        <p>
          Professional air duct cleaning, dryer vent cleaning, furnace cleaning
          and HVAC services in Markham, Ontario. Improve indoor air quality today.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            background: "#000",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Get Free Quote
        </a>
      </section>

      {/* SERVICE SECTION */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Our Services in Markham</h2>

        <ul>
          <li>Air Duct Cleaning Markham</li>
          <li>Dryer Vent Cleaning Markham</li>
          <li>Furnace Cleaning Markham</li>
          <li>HVAC Sanitization Markham</li>
        </ul>

        <h3>Why Choose Us</h3>
        <ul>
          <li>✔ Fast service in Markham</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Certified technicians</li>
          <li>✔ 100% satisfaction guarantee</li>
        </ul>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Service Area Map</h2>

        <iframe
          src="https://www.google.com/maps?q=Markham+Ontario&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Need Air Duct Cleaning in Markham?</h2>
        <p>Call now for same-day service</p>

        <a
          href="tel:2267772863"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "green",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Call Now
        </a>
      </section>
    </>
  );
}
