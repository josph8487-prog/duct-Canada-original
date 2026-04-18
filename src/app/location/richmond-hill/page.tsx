export default function RichmondHillPage() {
  return (
    <>
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Air Duct Cleaning in Richmond Hill</h1>

        <p>
          Trusted duct cleaning services in Richmond Hill, Ontario.
          Improve air quality and HVAC performance with professional cleaning.
        </p>

        <a href="/contact" style={btnBlack}>
          Get Free Quote
        </a>
      </section>

      <section style={container}>
        <h2>Our Services in Richmond Hill</h2>

        <ul>
          <li>Air Duct Cleaning Richmond Hill</li>
          <li>Dryer Vent Cleaning Richmond Hill</li>
          <li>Furnace Cleaning Richmond Hill</li>
          <li>HVAC Cleaning Richmond Hill</li>
        </ul>
      </section>

      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Service Area Map - Richmond Hill</h2>

        <iframe
          src="https://www.google.com/maps?q=Richmond%20Hill&output=embed"
          width="100%"
          height="350"
        ></iframe>
      </section>
    </>
  );
}

const container = {
  padding: "40px 20px",
  maxWidth: "900px",
  margin: "auto"
};

const btnBlack = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 20px",
  background: "#000",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none"
};
