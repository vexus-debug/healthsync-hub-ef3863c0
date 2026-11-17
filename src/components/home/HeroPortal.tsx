import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, FlaskConical, Home, FileText, Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE, buildWhatsAppLink } from "@/lib/site";

const portals = [
  { icon: FlaskConical, tag: "Walk-in", title: "Lab Tests", desc: "200+ test panels with same-day results for most tests.", to: "/services", cta: "Browse tests", tilt: "portal-left" },
  { icon: Home, tag: "Home visit", title: "Home Sample Collection", desc: "A trained sample collector comes to your home or office in Port Harcourt.", to: "/book", cta: "Book a visit", tilt: "portal-center" },
  { icon: FileText, tag: "Private", title: "Results", desc: "Enter your GM- sample ID to view and download your report.", to: "/results", cta: "Check results", tilt: "portal-right" },
];

export function HeroPortal() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div aria-hidden className="absolute inset-0 -z-10 hero-portal-glow" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[55%] hero-portal-floor" />

      <div className="container relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-3xl text-center space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur border border-primary-foreground/20 text-xs font-medium uppercase tracking-[0.18em]">
            <BadgeCheck className="h-3.5 w-3.5" /> Licensed Medical Laboratory
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Your health, <span className="italic font-medium text-primary-glow">one step</span> away.
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Accurate tests, qualified clinicians and complete privacy. Choose how you want to start.
          </p>
        </div>

        <div className="portal-stage mt-12 md:mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {portals.map((p, i) => (
            <Link
              key={p.title}
              to={p.to}
              style={{ animationDelay: `${150 + i * 120}ms` }}
              className={`portal-card ${p.tilt} group relative flex flex-col rounded-3xl p-6 md:p-7 bg-background/10 backdrop-blur-xl border border-primary-foreground/15 animate-scale-in`}
            >
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-primary-glow/20 text-primary-glow border border-primary-glow/30">
                  <p.icon className="h-6 w-6" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">{p.tag}</span>
              </div>
              <h3 className="mt-6 font-display text-xl md:text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed flex-1">{p.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow">
                {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 font-semibold">
            <Link to="/book">Book a Test <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-background/10 hover:text-primary-foreground">
            <a href={buildWhatsAppLink("Hello Green Medical, I'd like to book a test.")} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp us</a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
          <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary-foreground"><Phone className="h-4 w-4" /> {SITE.phones[0]}</a>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Elioprawo Road, Port Harcourt</span>
        </div>
      </div>
    </section>
  );
}
