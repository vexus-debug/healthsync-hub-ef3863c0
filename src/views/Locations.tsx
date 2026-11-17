import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Navigation, MessageCircle } from "lucide-react";
import { SITE, buildWhatsAppLink } from "@/lib/site";
import { SEO } from "@/components/seo/SEO";

const Locations = () => {
  const mapQuery = encodeURIComponent("5 Elioprawo Road Big Tree Junction Port Harcourt Rivers State Nigeria");
  return (
    <Layout>
      <SEO
        title="Our Location | Green Medical Diagnostics Lab, Elioprawo, Port Harcourt"
        description="Visit Green Medical Diagnostics and Services at 5 Elioprawo Road, by Big Tree Junction, Port Harcourt. Walk-ins welcome. Home sample collection available across Port Harcourt."
        keywords="medical lab Elioprawo, lab near me Port Harcourt, Big Tree Junction laboratory, Elioprawo Road lab"
      />
      <PageHeader
        eyebrow="Our Location"
        title="Visit us in Elioprawo Road, Port Harcourt."
        subtitle="Conveniently located opposite State Primary School by Big Tree Junction. Walk-ins welcome — or request home sample pickup anywhere within Port Harcourt."
      />

      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft min-h-[420px]">
            <iframe
              title="Green Medical Diagnostics location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-3xl p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shrink-0"><MapPin className="h-6 w-6" /></div>
                <div>
                  <h3 className="font-display font-bold text-lg">Main Branch — Port Harcourt</h3>
                  <p className="text-muted-foreground mt-2">{SITE.address}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <Button asChild variant="hero">
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`} target="_blank" rel="noreferrer"><Navigation className="h-4 w-4" /> Get Directions</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}><Phone className="h-4 w-4" /> Call Branch</a>
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-7 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-display font-bold text-lg">Opening Hours</h3>
              </div>
              <ul className="divide-y divide-border">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-3 text-sm">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-7 shadow-elegant">
              <h3 className="font-display font-bold text-lg mb-2">Need a home pickup?</h3>
              <p className="text-primary-foreground/85 text-sm mb-4">We collect samples across Port Harcourt with full discretion.</p>
              <Button asChild variant="accent">
                <a href={buildWhatsAppLink("Hello Green Medical, I'd like to request a home sample pickup.")} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> Request Pickup
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
