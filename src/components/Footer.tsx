import { Separator } from "./ui/separator";
import Button from "./ui/button";
import { Facebook, Instagram } from "lucide-react"; // Assuming social media icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background)] py-12 md:py-16 text-[var(--muted-foreground)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div className="space-y-4">
            <h4 className="font-[var(--font-heading)] font-bold text-xl text-[var(--foreground)]">
              GARTENSPEZIALIST.CH
            </h4>
            <p className="text-sm">
              Ihr vertrauenswürdiger Partner für Gartenbau und Gartenpflege in der Region. Wir schaffen grüne Lebensräume, die begeistern.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-[var(--font-heading)] font-semibold text-lg text-[var(--foreground)]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]" onClick={() => scrollToSection("hero")}>Startseite</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]" onClick={() => scrollToSection("about")}>Über uns</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]" onClick={() => scrollToSection("services")}>Dienstleistungen</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]" onClick={() => scrollToSection("projects")}>Projekte</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]" onClick={() => scrollToSection("contact")}>Kontakt</Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-[var(--font-heading)] font-semibold text-lg text-[var(--foreground)]">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]">Datenschutz</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]">Impressum</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-[var(--muted-foreground)] hover:text-[var(--primary)]">AGB</Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[var(--border)]" />

        <div className="text-center text-sm">
          &copy; {currentYear} Gartenspezialist.ch. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
