import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "./ui/card";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" }
      });
      gsap.from(".about-text", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 75%" }
      });
      gsap.from(".about-image-card", {
        x: 60, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 70%" }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-16 md:py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="about-title text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--foreground)] leading-tight">
              Wir schaffen grüne Oasen mit Leidenschaft und Expertise.
            </h3>
            <p className="about-text text-lg text-[var(--muted-foreground)] leading-relaxed">
              Bei GARTENSPEZIALIST.CH verbinden wir tiefe Leidenschaft für die Natur mit präzisem Handwerk und innovativen Ideen. Seit [Jahre] Jahren gestalten und pflegen wir Gärten in der Region [Region], transformieren Aussenbereiche in persönliche Rückzugsorte und funktionale Paradiese.
            </p>
            <p className="about-text text-lg text-[var(--muted-foreground)] leading-relaxed">
              Unser engagiertes Team aus qualifizierten Gartenbauern und -pflegern steht Ihnen von der ersten Idee bis zur letzten Pflanze zur Seite. Wir legen Wert auf nachhaltige Lösungen, die Ästhetik und Ökologie in Einklang bringen, und verwirklichen Ihre individuellen Vorstellungen mit höchster Sorgfalt und Kreativität.
            </p>
          </div>
          <Card className="about-image-card relative overflow-hidden h-[400px] md:h-[500px] bg-[var(--card)] group">
            <img
              src="https://images.pexels.com/photos/4185957/pexels-photo-4185957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Woman in home office"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 text-[var(--card-foreground)] z-10">
              <p className="text-xl font-semibold font-[var(--font-heading)]">Unser Team</p>
              <p className="text-sm text-[var(--muted-foreground)]">Experten für Ihr grünes Projekt</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
