import { Familiar } from "./components/familiar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="site">
      <Hero />
      <Familiar />
      <Services />
      <div id="contact-form" className="contact-anchor" />
    </main>
  );
}
