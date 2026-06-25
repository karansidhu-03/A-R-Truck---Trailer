import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Wrench, Clock, ShieldCheck, Truck } from "lucide-react";
import repairImg from "../assets/repair-detail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | A&R Truck & Trailer Repairs Ltd." },
      { name: "description", content: "A&R Truck & Trailer Repairs Ltd. is a mobile commercial vehicle repair company serving Calgary, Airdrie, Okotoks, Cochrane, Chestermere, and surrounding areas." },
      { property: "og:title", content: "About A&R Truck & Trailer Repairs Ltd." },
      { property: "og:description", content: "Mobile commercial vehicle repair built around uptime, honesty, and on-site service." },
    ],
  }),
  component: AboutPage,
});

const AREAS = ["Calgary", "Airdrie", "Okotoks", "Cochrane", "Chestermere", "Surrounding Areas"];

function AboutPage() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white">
        <div className="container-x py-20 md:py-28 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]">About Us</div>
            <h1 className="mt-2 text-4xl md:text-5xl">
              Built around uptime, honesty, and on-site service.
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              A&amp;R Truck &amp; Trailer Repairs Ltd. is a mobile commercial vehicle repair
              company based in Calgary, Alberta. We focus on one thing: getting working
              trucks back to working — fast, safely, and right where they sit.
            </p>
          </div>
          <img
            src={repairImg}
            alt="Mechanic servicing commercial truck brake assembly"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-xl w-full h-auto object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            { icon: Wrench, t: "Mobile-first", d: "Our shop rolls to your yard, job site, or the shoulder of the highway. Most repairs that would mean a tow can be done on-site." },
            { icon: ShieldCheck, t: "CVIP compliant", d: "We perform Commercial Vehicle Inspection Program inspections and walk you through anything that needs attention." },
            { icon: Clock, t: "Built for uptime", d: "A trailer out of service is a load that isn't moving. We work fast because we know what downtime costs you." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border p-7 bg-card">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--safety)] text-[oklch(0.15_0.04_260)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg text-[var(--navy)]">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container-x">
          <div className="flex items-center gap-3 text-[var(--safety-dark)]">
            <MapPin className="h-5 w-5" />
            <div className="text-xs font-bold uppercase tracking-[0.2em]">Service Area</div>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl text-[var(--navy)] max-w-2xl">
            Proudly serving Calgary &amp; Area.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Wherever your truck or trailer goes down in the greater Calgary region, we're
            ready to roll out to you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <div key={a} className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2 text-sm font-semibold text-[var(--navy)]">
                <Truck className="h-4 w-4 text-[var(--safety-dark)]" />
                {a}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="tel:+18257604242" className="btn-primary"><Phone className="h-4 w-4" /> (825) 760-4242</a>
            <Link to="/contact" className="btn-outline">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
