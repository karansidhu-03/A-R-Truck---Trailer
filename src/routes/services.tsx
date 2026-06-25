import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Check } from "lucide-react";
import { SERVICES } from "../lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | A&R Truck & Trailer Repairs Ltd." },
      { name: "description", content: "Mobile truck repair, trailer repair, CVIP inspections, diagnostics, roadside assistance, and brake and suspension repair across Calgary & Area." },
      { property: "og:title", content: "Mobile Truck & Trailer Repair Services" },
      { property: "og:description", content: "Six core services that keep commercial fleets moving across Calgary & Area." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white">
        <div className="container-x py-20 md:py-28">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]">Services</div>
          <h1 className="mt-2 text-4xl md:text-5xl max-w-3xl">
            What we fix — and how we get you back on the road.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
            Six core services delivered 100% on-site by an experienced mobile mechanic
            serving Calgary, Airdrie, Okotoks, Cochrane, Chestermere, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x space-y-16">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.slug}
                id={s.slug}
                className="grid gap-8 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start border-t border-border pt-12 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col items-start text-left">
                  <div className="grid h-16 w-16 place-items-center rounded-xl bg-[var(--navy)] text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety-dark)]">
                    Service {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-2 text-2xl md:text-3xl leading-tight text-[var(--navy)]">
                    {s.title}
                  </h2>
                </div>
                <div className="flex flex-col items-start text-left">
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                    {s.description}
                  </p>
                  <a href="tel:+18257604242" className="btn-safety mt-6 !text-sm">
                    <Phone className="h-4 w-4" /> Request this service
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container-x text-center max-w-2xl">
          <h2 className="text-3xl text-[var(--navy)]">Not sure what you need?</h2>
          <p className="mt-3 text-muted-foreground">
            Call us and describe what's going on. We'll tell you straight whether it's a
            roadside fix, a tow, or something we can diagnose on-site.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
            {["Honest assessments","Clear pricing","Compliant CVIP work","Direct mechanic line"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm bg-white border border-border rounded-lg px-4 py-3">
                <Check className="h-4 w-4 text-[var(--safety-dark)]" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="tel:+18257604242" className="btn-primary"><Phone className="h-4 w-4" /> (825) 760-4242</a>
            <Link to="/contact" className="btn-outline">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
