import Hero from "./components/Hero"
import Products from "./components/Products";
import Soldes from "./components/Soldes";

export default function Home() {
  return (
    <main className="mt-[100px]">
      <Hero />
      <Soldes />
      <Products />
    </main>
  );
}
