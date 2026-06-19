import Nav from "./components/layout/Nav.jsx";
import Hero from "./components/hero/Hero.jsx";
import Projects from "./components/projects/Projects.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import SiteFooter from "./components/footer/sitefooter.jsx";

export default function App() {
  return (
    <div className="bg-white text-black font-geist antialiased">
      <Nav />
      <main>
        <Hero />
        <Projects />

        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
