import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[var(--font-sans)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
