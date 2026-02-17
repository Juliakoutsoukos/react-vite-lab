export default function Header({ title, subtitle }) {
  return (
    <header style={{ padding: "1rem 0" }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      <p style={{ margin: "0.25rem 0 0", opacity: 0.8 }}>{subtitle}</p>
      <hr style={{ marginTop: "1rem" }} />
    </header>
  );
}
