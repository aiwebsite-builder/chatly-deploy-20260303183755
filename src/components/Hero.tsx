import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { y: 30, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-[var(--background)] to-[var(--secondary)]"
    >
      {/* Background visual element - a subtle green radial gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-[var(--primary)] opacity-10 blur-3xl"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <p className="hero-eyebrow text-sm uppercase tracking-[0.25em] font-medium text-[var(--primary)]">
          Ihr Gartenspezialist
        </p>
        <h2 className="hero-title text-5xl md:text-7xl font-[var(--font-heading)] font-extrabold leading-tight text-[var(--foreground)]">
          GARTENSPEZIALIST.CH – Ihr Partner für exzellenten Gartenbau und Pflege
        </h2>
        <p className="hero-subtitle text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
          Verleihen Sie Ihrem Aussenbereich die Schönheit und Funktionalität, die er verdient. Unsere erfahrenen Gärtner realisieren Ihre grünen Träume.
        </p>
        <div className="hero-cta">
          <Button
            size="lg"
            className="mt-8 px-8 py-3 text-lg bg-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary),black_10%)] text-[var(--primary-foreground)] shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Unverbindlich Anfragen
          </Button>
        </div>
      </div>
    </section>
  );
}
