import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  // Data structure requirement: array of objects
  const cards = [
    {
      id: 1,
      title: "Vite + React Refresher",
      description: "This card is rendered from an array of objects.",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Components",
      description: "Header, CardList, and Footer all render at the same time.",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Conditional Rendering",
      description: "Featured items show a ⭐ badge using a conditional.",
      isFeatured: true,
    },
  ];

  // Conditional requirement (example #1):
  const featuredCount = cards.filter((c) => c.isFeatured).length;

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "1.5rem" }}>
      <Header
        title="6.5 Exercise"
        subtitle="Three components + data structure + conditional rendering"
      />

      <p style={{ marginTop: 0, opacity: 0.9 }}>
        {featuredCount > 0
          ? `You have ${featuredCount} featured card(s).`
          : "No featured cards right now."}
      </p>

      <CardList items={cards} />

      <Footer name="Julia Koutsoukos" />
    </main>
  );
}
