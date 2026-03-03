import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Button from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: projectsRef.current, start: "top 80%" }
      });
      gsap.from(".project-card", {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".project-grid", start: "top 75%" }
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projectItems = [
    {
      image: "https://images.pexels.com/photos/7563551/pexels-photo-7563551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Konzept & Materialien",
      description: "Detaillierte Planung und Auswahl hochwertiger, nachhaltiger Materialien für langlebige Gartengestaltungen."
    },
    {
      image: "https://images.pexels.com/photos/1591059/pexels-photo-1591059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Digitale Planung & Visualisierung",
      description: "Modernste Tools zur Visualisierung Ihres Traumgartens, bevor der erste Spatenstich erfolgt."
    },
    {
      image: "https://images.pexels.com/photos/7123565/pexels-photo-7123565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Familienfreundliche Gartengestaltung",
      description: "Sichere und spielerische Gartenkonzepte, die den Bedürfnissen der ganzen Familie gerecht werden."
    },
    {
      image: "https://images.pexels.com/photos/4045598/pexels-photo-4045598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Entspannung & Rückzugsorte",
      description: "Schaffen Sie private Oasen der Ruhe und Erholung mit individuellen Bepflanzungs- und Gestaltungskonzepten."
    },
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-16 md:py-24 bg-[var(--background)] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="projects-title text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--foreground)] text-center mb-16">
          Unsere realisierten Projekte
        </h2>

        <div className="project-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectItems.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 bg-[var(--muted)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-[var(--font-heading)]">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <Button variant="link" className="mt-4 pl-0 text-[var(--primary)] hover:text-[color-mix(in_srgb,var(--primary),white_20%)]">
                  Details ansehen &rarr;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
