import Nav from "../components/layout/Nav.jsx";
import Hero from "../components/hero/Hero.jsx";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/about/About.jsx";
import Contact from "../components/contact/Contact.jsx";
import SiteFooter from "../components/footer/sitefooter.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

export default function HomePage() {
  useScrollToHash();

  return (
    <div className="bg-brand-cream text-black font-geist antialiased">
      <Nav />
      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <About />

        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
