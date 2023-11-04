import Header from "./components/header";
import WideSlider from "./components/wide-slider";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="mt-4">
        <WideSlider />
      </section>
    </main>
  );
}
