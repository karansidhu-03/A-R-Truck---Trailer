import { t as SERVICES } from "./services-CRJtNVkr.js";
import { Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--navy)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-20 md:py-28",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]",
						children: "Services"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 text-4xl md:text-5xl max-w-3xl",
						children: "What we fix — and how we get you back on the road."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-2xl text-white/80 leading-relaxed",
						children: "Six core services delivered 100% on-site by an experienced mobile mechanic serving Calgary, Airdrie, Okotoks, Cochrane, Chestermere, and surrounding areas."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 md:py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x space-y-16",
				children: SERVICES.map((s, i) => {
					const Icon = s.icon;
					return /* @__PURE__ */ jsxs("div", {
						id: s.slug,
						className: "grid gap-8 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start border-t border-border pt-12 first:border-t-0 first:pt-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-start text-left",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-16 w-16 place-items-center rounded-xl bg-[var(--navy)] text-white",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety-dark)]",
									children: ["Service ", String(i + 1).padStart(2, "0")]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-2 text-2xl md:text-3xl leading-tight text-[var(--navy)]",
									children: s.title
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-start text-left",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-base md:text-lg text-foreground/85 leading-relaxed",
								children: s.description
							}), /* @__PURE__ */ jsxs("a", {
								href: "tel:+18257604242",
								className: "btn-safety mt-6 !text-sm",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Request this service"]
							})]
						})]
					}, s.slug);
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--surface)] py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x text-center max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl text-[var(--navy)]",
						children: "Not sure what you need?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground",
						children: "Call us and describe what's going on. We'll tell you straight whether it's a roadside fix, a tow, or something we can diagnose on-site."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 grid sm:grid-cols-2 gap-3 text-left",
						children: [
							"Honest assessments",
							"Clear pricing",
							"Compliant CVIP work",
							"Direct mechanic line"
						].map((t) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2 text-sm bg-white border border-border rounded-lg px-4 py-3",
							children: [
								/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[var(--safety-dark)]" }),
								" ",
								t
							]
						}, t))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3 justify-center",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "tel:+18257604242",
							className: "btn-primary",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " (825) 760-4242"]
						}), /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "btn-outline",
							children: "Send a Message"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
