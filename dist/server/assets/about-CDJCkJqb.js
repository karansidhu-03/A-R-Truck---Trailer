import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/repair-detail.jpg
var repair_detail_default = "/assets/repair-detail-DBVGZsB3.jpg";
//#endregion
//#region src/routes/about.tsx?tsr-split=component
var AREAS = [
	"Calgary",
	"Airdrie",
	"Okotoks",
	"Cochrane",
	"Chestermere",
	"Surrounding Areas"
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--navy)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-20 md:py-28 grid gap-10 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]",
						children: "About Us"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 text-4xl md:text-5xl",
						children: "Built around uptime, honesty, and on-site service."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-white/80 leading-relaxed",
						children: "A&R Truck & Trailer Repairs Ltd. is a mobile commercial vehicle repair company based in Calgary, Alberta. We focus on one thing: getting working trucks back to working — fast, safely, and right where they sit."
					})
				] }), /* @__PURE__ */ jsx("img", {
					src: repair_detail_default,
					alt: "Mechanic servicing commercial truck brake assembly",
					width: 1200,
					height: 900,
					loading: "lazy",
					className: "rounded-xl w-full h-auto object-cover shadow-2xl"
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x grid gap-10 md:grid-cols-3",
				children: [
					{
						icon: Wrench,
						t: "Mobile-first",
						d: "Our shop rolls to your yard, job site, or the shoulder of the highway. Most repairs that would mean a tow can be done on-site."
					},
					{
						icon: ShieldCheck,
						t: "CVIP compliant",
						d: "We perform Commercial Vehicle Inspection Program inspections and walk you through anything that needs attention."
					},
					{
						icon: Clock,
						t: "Built for uptime",
						d: "A trailer out of service is a load that isn't moving. We work fast because we know what downtime costs you."
					}
				].map(({ icon: Icon, t, d }) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border p-7 bg-card",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-lg bg-[var(--safety)] text-[oklch(0.15_0.04_260)]",
							children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-4 text-lg text-[var(--navy)]",
							children: t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: d
						})
					]
				}, t))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--surface)] py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-[var(--safety-dark)]",
						children: [/* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold uppercase tracking-[0.2em]",
							children: "Service Area"
						})]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-2 text-3xl md:text-4xl text-[var(--navy)] max-w-2xl",
						children: "Proudly serving Calgary & Area."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground max-w-2xl",
						children: "Wherever your truck or trailer goes down in the greater Calgary region, we're ready to roll out to you."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: AREAS.map((a) => /* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2 text-sm font-semibold text-[var(--navy)]",
							children: [/* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 text-[var(--safety-dark)]" }), a]
						}, a))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "tel:+18257604242",
							className: "btn-primary",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " (825) 760-4242"]
						}), /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "btn-outline",
							children: "Request a Quote"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
