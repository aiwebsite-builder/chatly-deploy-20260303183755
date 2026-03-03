import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/button";
import Input from "./ui/input";
import Textarea from "./ui/textarea";
import Label from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: contactRef.current, start: "top 80%" }
      });
      gsap.from(".contact-form-card", {
        x: -50, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form-card", start: "top 75%" }
      });
      gsap.from(".contact-info-card", {
        x: 50, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-info-card", start: "top 75%" }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-16 md:py-24 bg-[var(--muted)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="contact-title text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--foreground)] text-center mb-16">
          Kontaktieren Sie uns
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="contact-form-card p-6 md:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-[var(--font-heading)]">Ihre Anfrage</CardTitle>
              <p className="text-[var(--muted-foreground)]">Wir freuen uns darauf, von Ihnen zu hören.</p>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Ihr Name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="Ihre E-Mail-Adresse" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon (optional)</Label>
                  <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Ihre Nachricht</Label>
                  <Textarea id="message" placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage..." rows={5} className="mt-1" />
                </div>
                <Button type="submit" className="w-full bg-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary),black_10%)]">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="contact-info-card p-6 md:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-[var(--font-heading)]">Unsere Kontaktdaten</CardTitle>
              <p className="text-[var(--muted-foreground)]">Sie erreichen uns auf verschiedenen Wegen.</p>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[var(--primary)]" />
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Telefon</p>
                  <a href="tel:+41791746174" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">+41 79 174 61 74</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[var(--primary)]" />
                <div>
                  <p className="font-semibold text-[var(--foreground)]">E-Mail</p>
                  <a href="mailto:info@gartenspezialist.ch" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">info@gartenspezialist.ch</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[var(--primary)] mt-1" />
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Adresse</p>
                  <address className="not-italic text-[var(--muted-foreground)]">
                    Musterstrasse 123<br />
                    8000 Zürich<br />
                    Schweiz
                  </address>
                </div>
              </div>
              <div className="h-64 bg-[var(--background)] rounded-[var(--radius)] flex items-center justify-center text-[var(--muted-foreground)]">
                {/* Placeholder for a map */}
                <p>Kartenansicht hier</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
