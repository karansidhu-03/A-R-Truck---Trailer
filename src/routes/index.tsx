import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Send,
  Zap,
  BadgeCheck,
  Wrench,
  Star,
  Quote,
} from "lucide-react";
import heroImg from "../assets/hero-truck.jpg";
import serviceImg from "../assets/mobile-service.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import { ServiceCard } from "../components/ServiceCard";
import { SERVICES } from "../lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "A&R Truck & Trailer Repairs | Mobile Repair Calgary & Airdrie",
      },
      {
        name: "description",
        content:
          "24/7 mobile commercial truck & trailer repair serving Calgary, Airdrie, Okotoks, Cochrane & Chestermere. Roadside assistance, CVIP inspections, diagnostics & brakes.",
      },
      { property: "og:title", content: "A&R Truck & Trailer Repairs Ltd." },
      {
        property: "og:description",
        content:
          "We bring the shop to you. Yard, job site, or shoulder of the highway.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[var(--ink)]">
        <img
          src={heroImg}
          alt="Heavy-duty semi truck on the highway being serviced by a mobile mechanic"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-[var(--ink)]/30" />

        <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start text-white">
          {/* Left: headline */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider">
                <span className="text-[var(--safety)]">★★★★★</span>
                <span className="text-white/80">5.0 Local Rating</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--safety)]/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--safety)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--safety)] animate-pulse" />
                24/7 Mobile Dispatch
              </div>
            </div>

            <h1 className="font-display font-extrabold uppercase leading-[0.95] text-[2.6rem] sm:text-6xl lg:text-7xl tracking-tight">
              Calgary &amp; Nearby Areas
              <span className="block text-[var(--safety)] mt-2">
                Mobile Truck Repair
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
              Need emergency roadside assistance? Our heavy-duty mobile diesel
              mechanics are on standby 24/7/365 to get your commercial truck,
              trailer, or fleet back on the road.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18257604242" className="btn-primary">
                <Phone className="h-4 w-4" /> Call Dispatch: (825) 760-4242
              </a>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right: request form card */}
          <div className="relative rounded-xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-7 shadow-2xl">
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--safety)] to-transparent" />
            <div className="flex items-center gap-3 mb-1">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--safety)]/15 text-[var(--safety)]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg uppercase tracking-wide">
                  Request Service
                </div>
                <div className="text-xs text-white/60">
                  24/7 dispatch — fast response.
                </div>
              </div>
            </div>

            <form
              action="mailto:arrepairsalberta@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-5 space-y-3"
            >
              <input
                name="name"
                required
                placeholder="Full Name"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
              />
              <input
                name="phone"
                required
                type="tel"
                placeholder="(403) 000-0000"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
              />
              <select
                name="service"
                required
                defaultValue=""
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 focus:outline-none focus:border-[var(--safety)]"
              >
                <option value="" disabled className="bg-[var(--ink)]">
                  Service Needed…
                </option>
                {SERVICES.map((s) => (
                  <option
                    key={s.slug}
                    value={s.title}
                    className="bg-[var(--ink)]"
                  >
                    {s.title}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows={3}
                placeholder="How can we help?"
                className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
              />
              <button type="submit" className="btn-primary w-full !py-3.5">
                <Send className="h-4 w-4" /> Send Request
              </button>
            </form>
          </div>
        </div>

        {/* Feature cards */}
        <div className="container-x pb-14 md:pb-20 -mt-2 md:-mt-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Clock,
                title: "24/7 Roadside Units",
                text: "Fully loaded mobile mechanics for tire changes, air line repairs, and diagnostics.",
              },
              {
                icon: Wrench,
                title: "Red Seal Experts",
                text: "Heavy-duty diesel specialists equipped with diagnostic tools to resolve engine codes.",
              },
              {
                icon: BadgeCheck,
                title: "CVIP Accredited",
                text: "Alberta licensed Commercial Vehicle Inspection Programs for full compliance.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl bg-white text-[var(--ink)] p-6 shadow-xl ring-1 ring-black/5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-[var(--safety)]/10 text-[var(--safety)] mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-display font-extrabold uppercase tracking-wide text-base">
                  {title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-[var(--surface)]">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Core Services</div>
            <h2 className="mt-3 text-3xl md:text-5xl uppercase text-[var(--ink)] font-extrabold leading-tight">
              Heavy-Duty{" "}
              <span className="text-[var(--safety)]">Mechanical Repair</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Professional fleet inspections, diesel tuning, mechanical
              overhauls, and trailer body maintenance executed by on-site
              technicians across Calgary &amp; Area.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm text-[var(--safety)] hover:text-[var(--safety-dark)]"
            >
              View full service details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="py-20 md:py-28 bg-[var(--ink)] text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={serviceImg}
              alt="A&R mobile service truck assisting a commercial vehicle on the highway"
              width={1600}
              height={1000}
              loading="lazy"
              className="rounded-xl shadow-2xl w-full h-auto object-cover ring-1 ring-white/10"
            />
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-[var(--safety)] text-white rounded-xl p-5 shadow-xl max-w-xs">
              <div className="font-display text-4xl font-extrabold leading-none">
                24/7
              </div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wider">
                Roadside dispatch · Calgary &amp; Area
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="eyebrow">Why A&amp;R</div>
            <h2 className="mt-3 text-3xl md:text-5xl uppercase font-extrabold leading-tight">
              A tow and a wait costs more than a{" "}
              <span className="text-[var(--safety)]">repair</span>.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Our mobile units are equipped to handle the majority of mechanical
              repairs right where your truck sits. No tow bills, no shop queues,
              and your driver back on the road in hours — not days.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Direct line to a working mechanic — not a dispatcher.",
                "Honest diagnostics, clear quotes before we turn a wrench.",
                "Compliant CVIP work that keeps you legally on the road.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <ShieldCheck className="h-5 w-5 text-[var(--safety)] shrink-0" />
                  <span className="text-white/85">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18257604242" className="btn-primary">
                <Phone className="h-4 w-4" /> Speak to a Mechanic
              </a>
              <Link to="/about" className="btn-outline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x text-center">
          <div className="eyebrow justify-center">Service Areas</div>
          <h2 className="mt-3 text-2xl md:text-4xl uppercase font-extrabold text-[var(--ink)]">
            Proudly serving Calgary &amp; surrounding region
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            {[
              "Calgary",
              "Airdrie",
              "Okotoks",
              "Cochrane",
              "Chestermere",
              "Surrounding Areas",
            ].map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] border border-border px-4 py-2 text-[var(--ink)]"
              >
                <MapPin className="h-4 w-4 text-[var(--safety)]" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28 bg-[var(--surface)]">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Our Work</div>
            <h2 className="mt-3 text-3xl md:text-5xl uppercase text-[var(--ink)] font-extrabold leading-tight">
              On the road,{" "}
              <span className="text-[var(--safety)]">in the field</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A snaps of recent jobs — engine diagnostics, CVIP inspections,
              brake work, and roadside tire changes across the Calgary region.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: gallery1,
                alt: "Mechanic working on a semi-truck engine bay at night",
              },
              {
                src: gallery2,
                alt: "Mobile service truck assisting a commercial trailer at sunset",
              },
              {
                src: gallery3,
                alt: "CVIP commercial vehicle inspection underneath a heavy duty truck",
              },
              {
                src: gallery4,
                alt: "Heavy duty truck tire being changed roadside",
              },
            ].map((img) => (
              <div
                key={img.alt}
                className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow-md aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 md:py-28 bg-[var(--ink)] text-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
          <div>
            <div className="eyebrow">Coverage Map</div>
            <h2 className="mt-3 text-3xl md:text-5xl uppercase font-extrabold leading-tight">
              Based in <span className="text-[var(--safety)]">Calgary</span>,
              dispatching region-wide
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              From downtown Calgary out to Airdrie, Okotoks, Cochrane, and
              Chestermere — wherever your truck goes down, we'll roll a truck to
              you.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {["Calgary", "Airdrie", "Okotoks", "Cochrane", "Chestermere"].map(
                (c) => (
                  <li key={c} className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[var(--safety)]" />
                    <span className="text-white/85">
                      {c} &amp; surrounding areas
                    </span>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18257604242" className="btn-primary">
                <Phone className="h-4 w-4" /> Call Dispatch
              </a>
              <a
                href="https://www.google.com/maps/place/Calgary,+AB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Open in Maps
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <iframe
              title="A&R Truck & Trailer Repairs service area — Calgary, Alberta"
              src="https://www.google.com/maps?q=Calgary,+Alberta,+Canada&z=9&output=embed"
              width="100%"
              height="460"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#FAFBFD] overflow-hidden">
        <div className="container-x">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-[var(--safety)] font-bold uppercase tracking-[0.2em] text-xs border-b-2 border-[var(--safety)] pb-1 mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--ink)]">
              What the Clients Say
            </h2>
          </div>
        </div>

        {/* Infinite Scrolling Container with Edge Fading Overlays */}
        <div className="relative w-full">
          {/* Left Fade Gradient */}
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#FAFBFD] to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#FAFBFD] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex w-max gap-6 px-6 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[
              {
                quote:
                  "Blew an air line on the QE2 north of Airdrie at 2 AM. A&R arrived quickly, fixed everything roadside, and got me back on schedule.",
                name: "Dave M.",
                initials: "DM",
                time: "4 months ago",
              },
              {
                quote:
                  "Our fleet has trusted A&R for inspections and emergency repairs. Professional mechanics, fair pricing and excellent communication every time.",
                name: "Sarah K.",
                initials: "SK",
                time: "11 months ago",
              },
              {
                quote:
                  "Brake chamber failed outside Okotoks. They had the replacement on the truck and had me moving again in under three hours.",
                name: "Jason R.",
                initials: "JR",
                time: "3 months ago",
              },
              {
                quote:
                  "Outstanding Mobile Mechanic – Above and Beyond. A&R provides fast, reliable, and professional mobile service every time. Highly recommended!",
                name: "Nav Pillay",
                initials: "NP",
                time: "4 months ago",
              },
              // Duplicated set for seamless loops without whitespace gaps
              {
                quote:
                  "Blew an air line on the QE2 north of Airdrie at 2 AM. A&R arrived quickly, fixed everything roadside, and got me back on schedule.",
                name: "Dave M.",
                initials: "DM",
                time: "4 months ago",
              },
              {
                quote:
                  "Our fleet has trusted A&R for inspections and emergency repairs. Professional mechanics, fair pricing and excellent communication every time.",
                name: "Sarah K.",
                initials: "SK",
                time: "11 months ago",
              },
              {
                quote:
                  "Brake chamber failed outside Okotoks. They had the replacement on the truck and had me moving again in under three hours.",
                name: "Jason R.",
                initials: "JR",
                time: "3 months ago",
              },
              {
                quote:
                  "Outstanding Mobile Mechanic – Above and Beyond. A&R provides fast, reliable, and professional mobile service every time. Highly recommended!",
                name: "Nav Pillay",
                initials: "NP",
                time: "4 months ago",
              },
            ].map((review, idx) => (
              <div
                key={`${review.name}-${idx}`}
                className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm border border-gray-100/80 w-[300px] md:w-[360px] shrink-0"
              >
                <div>
                  {/* Google Icon and Stars Row */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.5-1.14 2.77-2.4 3.63v3h3.86c2.26-2.09 3.67-5.17 3.67-8.48z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.86-3c-1.08.72-2.45 1.16-4.1 1.16-3.15 0-5.81-2.13-6.76-5.01H1.33v3.1A11.98 11.98 0 0 0 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.24 14.24a7.16 7.16 0 0 1 0-4.48V6.66H1.33a11.98 11.98 0 0 0 0 10.68l3.91-3.1z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.92 11.92 0 0 0 12 0 11.98 11.98 0 0 0 1.33 6.66l3.91 3.1c.95-2.88 3.61-5.01 6.76-5.01z"
                      />
                    </svg>
                    <div className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    "{review.quote}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--safety)]/10 text-[var(--safety)] font-bold text-xs shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-extrabold text-xs uppercase tracking-wide text-[var(--ink)]">
                        {review.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {review.time}
                      </div>
                    </div>
                  </div>

                  {/* Links to your specified layout address */}
                  <a
                    href="https://maps.app.goo.gl/PmATUGPfotaCjrKg9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--safety)] hover:opacity-80 transition-opacity"
                  >
                    Read Review &gt;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[var(--safety)] text-white">
        <div className="container-x py-12 grid gap-6 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="text-2xl md:text-3xl uppercase font-extrabold">
              Down on the side of the highway right now?
            </h2>
            <p className="mt-2 text-white/90">
              We'll head your way and get you moving again — safely.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+18257604242"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[var(--ink)] text-white font-extrabold uppercase tracking-wider text-sm hover:bg-black transition-colors"
            >
              <Phone className="h-5 w-5" /> Call (825) 760-4242
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-white text-[var(--ink)] font-extrabold uppercase tracking-wider text-sm hover:bg-white/90 transition-colors"
            >
              Request Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
