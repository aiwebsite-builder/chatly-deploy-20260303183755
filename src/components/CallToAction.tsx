import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ctaRef.current, start: "top 80%" }
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="py-16 md:py-24 bg-[var(--primary)] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"></div>
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div className="cta-content space-y-6">
          <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--primary-foreground)] leading-tight">
            Bereit für Ihren Traumgarten?
          </h2>
          <p className="text-lg md:text-xl text-[var(--primary-foreground)]/90 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine unverbindliche Beratung und lassen Sie uns Ihre Visionen in die Realität umsetzen.
          </p>
          <Button
            size="lg"
            className="mt-8 px-10 py-4 text-lg bg-[var(--primary-foreground)] hover:bg-[color-mix(in_srgb,var(--primary-foreground),black_10%)] text-[var(--primary)] shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt Beratung anfordern
          </Button>
        </div>
      </div>
    </section>
  );
}
