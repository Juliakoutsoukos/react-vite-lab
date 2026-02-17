export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: "1.5rem 0", marginTop: "2rem", opacity: 0.8 }}>
      <hr />
      <p style={{ margin: "1rem 0 0" }}>
        © {year} {name}
      </p>
    </footer>
  );
}
