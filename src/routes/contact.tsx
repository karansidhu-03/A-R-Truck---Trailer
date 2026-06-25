import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { SERVICES } from "../lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | A&R Truck & Trailer Repairs Ltd." },
      { name: "description", content: "Request roadside assistance or a callback. Call (825) 760-4242 or send a message. Serving Calgary, Airdrie, Okotoks, Cochrane, Chestermere." },
      { property: "og:title", content: "Contact A&R Truck & Trailer Repairs" },
      { property: "og:description", content: "Request on-site repair or roadside assistance across Calgary & Area." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  email: z.string().trim().email("Valid email required").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  location: z.string().trim().min(1, "Location is required").max(200),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});

    // Build a mailto fallback so the user's request reaches A&R immediately.
    const { name, phone, email, service, location, message } = result.data;
    const subject = `Service Request: ${service} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      `Service: ${service}`,
      `Location: ${location}`,
      "",
      `Details:`,
      message || "—",
    ].join("\n");
    window.location.href = `mailto:arrepairsalberta@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[var(--navy)] text-white">
        <div className="container-x py-20 md:py-24">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]">Contact</div>
          <h1 className="mt-2 text-4xl md:text-5xl max-w-3xl">
            Need help now? Tell us where you are.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            For urgent roadside assistance, call directly. For quotes or scheduled work,
            send a request and we'll be in touch fast.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl text-[var(--navy)]">Request Service</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select what you need, tell us where you are, and we'll respond quickly.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-[var(--safety)] bg-[var(--safety)]/10 p-6 flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-[var(--safety-dark)] shrink-0" />
                <div>
                  <div className="font-bold text-[var(--navy)]">Request prepared</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your email client should open with the request ready to send. For
                    urgent issues, please call <a href="tel:+18257604242" className="font-bold text-[var(--navy)]">(825) 760-4242</a>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate>
                <Field label="Full Name" name="name" error={errors.name} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
                  <Field label="Email (optional)" name="email" type="email" error={errors.email} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
                  >
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other / Not sure">Other / Not sure</option>
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>

                <Field
                  label="Current Location"
                  name="location"
                  placeholder="e.g. Hwy 2 southbound near Airdrie, or 123 Industrial Way SE Calgary"
                  error={errors.location}
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
                    What's going on? (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
                    placeholder="Symptoms, truck/trailer make and year, anything we should know."
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button type="submit" className="btn-safety">
                    <Send className="h-4 w-4" /> Submit Request
                  </button>
                  <a href="tel:+18257604242" className="btn-primary">
                    <Phone className="h-4 w-4" /> Call Instead
                  </a>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl bg-[var(--navy)] text-white p-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]">Urgent?</div>
              <div className="mt-2 text-2xl font-extrabold">Call us directly.</div>
              <a href="tel:+18257604242" className="mt-4 btn-safety w-full">
                <Phone className="h-5 w-5" /> (825) 760-4242
              </a>
            </div>

            <InfoCard icon={Mail} title="Email">
              <a href="mailto:arrepairsalberta@gmail.com" className="hover:text-[var(--safety-dark)] break-all">
                arrepairsalberta@gmail.com
              </a>
            </InfoCard>

            <InfoCard icon={MapPin} title="Service Area">
              Calgary, Airdrie, Okotoks, Cochrane, Chestermere &amp; Surrounding Areas.
            </InfoCard>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-foreground mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon, title, children,
}: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 text-[var(--safety-dark)]">
        <Icon className="h-5 w-5" />
        <div className="text-xs font-bold uppercase tracking-[0.2em]">{title}</div>
      </div>
      <div className="mt-2 text-sm text-foreground/85">{children}</div>
    </div>
  );
}
