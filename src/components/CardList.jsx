function Card({ title, description, isFeatured }) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: "1rem",
      }}
    >
      <h2 style={{ marginTop: 0 }}>
        {title}{" "}
        {isFeatured ? (
          <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>⭐ Featured</span>
        ) : null}
      </h2>

      <p style={{ marginBottom: 0 }}>{description}</p>
    </article>
  );
}

export default function CardList({ items }) {
  // Conditional requirement (example #2):
  if (!items || items.length === 0) {
    return <p>No cards to show yet.</p>;
  }

  return (
    <section style={{ display: "grid", gap: "1rem" }}>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          isFeatured={item.isFeatured}
        />
      ))}
    </section>
  );
}
