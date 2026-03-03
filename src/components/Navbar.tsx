import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import Button from "./ui/button";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", id: "hero" },
    { name: "Über uns", id: "about" },
    { name: "Dienstleistungen", id: "services" },
    { name: "Projekte", id: "projects" },
    { name: "Kontakt", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar hide/show on scroll
      gsap.to(navRef.current, {
        y: -100, // Hide
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          onUpdate: (self) => {
            if (self.direction === -1) { // Scrolling up
              gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
            } else { // Scrolling down
              gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.3, ease: "power2.out" });
            }
          },
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] transition-all duration-300"
    >
      <div className="flex items-center gap-x-8">
        <h1 className="font-[var(--font-heading)] font-bold text-xl md:text-2xl text-[var(--primary)] uppercase tracking-wider">
          GARTENSPEZIALIST.CH
        </h1>
        <div className="hidden md:flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className="text-[var(--foreground)] hover:text-[var(--primary)] text-base font-medium transition-colors"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <span className="hidden lg:block text-[var(--foreground)] text-base font-medium">
          +41 79 174 61 74
        </span>
        <Button
          variant="default"
          className="hidden md:block bg-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary),black_10%)] text-[var(--primary-foreground)]"
          onClick={() => scrollToSection("contact")}
        >
          Kontakt
        </Button>

        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6 text-[var(--foreground)]" /> : <Menu className="h-6 w-6 text-[var(--foreground)]" />}
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] rounded-lg p-6 bg-[var(--background)] border-[var(--border)]">
            <div className="flex flex-col gap-y-4">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  className="w-full justify-start text-lg text-[var(--foreground)] hover:text-[var(--primary)]"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </Button>
              ))}
              <Button
                variant="default"
                className="w-full mt-4 bg-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary),black_10%)] text-[var(--primary-foreground)]"
                onClick={() => scrollToSection("contact")}
              >
                Jetzt Kontakt aufnehmen
              </Button>
              <span className="text-[var(--muted-foreground)] text-center mt-4">
                +41 79 174 61 74
              </span>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
