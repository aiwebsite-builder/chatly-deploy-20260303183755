import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";
import { Sparkles, TreePine, MapPin } from "lucide-react"; // Using relevant Lucide icons

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-title", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: servicesRef.current, start: "top 80%" }
      });
      gsap.from(".service-card", {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".service-grid", start: "top 75%" }
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const serviceItems = [
    {
      icon: <Sparkles className="h-8 w-8 text-[var(--primary)]" />,
      title: "Professionelle Gartenpflege",
      description: "Regelmässige Pflege für einen vitalen Garten. Rasenmähen, Heckenschnitt, Unkraut entfernen, Düngung und saisonale Bepflanzung – wir kümmern uns um jedes Detail, damit Ihr Garten das ganze Jahr über in voller Pracht erstrahlt.",
      image: "https://images.pexels.com/photos/7309742/pexels-photo-7309742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Crafting with seashells"
    },
    {
      icon: <MapPin className="h-8 w-8 text-[var(--primary)]" />,
      title: "Kreative Gartenplanung",
      description: "Von der Skizze zum Traumgarten. Wir entwickeln individuelle Konzepte, wählen passende Pflanzen und Materialien und visualisieren Ihr zukünftiges Gartenparadies. Funktionale und ästhetische Gestaltung, die Ihre Wünsche erfüllt.",
      image: "https://images.pexels.com/photos/7190932/pexels-photo-7190932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Woman browsing laptops"
    },
    {
      icon: <TreePine className="h-8 w-8 text-[var(--primary)]" />,
      title: "Massgeschneiderter Gartenbau",
      description: "Ihr Gartenprojekt von A bis Z. Neuanlagen, Umgestaltungen, Wege und Terrassen, Wasserläufe und Beleuchtung – wir setzen Ihre Pläne mit höchster Qualität und Sorgfalt um. Robuste Materialien und präzise Ausführung garantieren Langlebigkeit.",
      image: "https://images.pexels.com/photos/7310146/pexels-photo-7310146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Handmade candles"
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-16 md:py-24 bg-[var(--secondary)] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="services-title text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--foreground)] text-center mb-16">
          Unsere umfassenden Dienstleistungen
        </h2>

        <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="service-card overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 bg-[var(--muted)]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6 z-10 p-2 rounded-full bg-[var(--card)] border border-[var(--border)] group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-[var(--font-heading)]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
