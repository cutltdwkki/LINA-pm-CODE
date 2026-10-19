import { Familiar } from "./components/familiar";
import { Hero } from "./components/hero";
import { Process } from "./components/process";
import { Results } from "./components/results";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="site">
      <Hero />
      <Familiar />
      <Services />
      <Results />
      <Process />
      <div id="contact-form" className="contact-anchor" />
    </main>
  );
}
