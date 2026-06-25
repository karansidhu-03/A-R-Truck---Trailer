import { t as SERVICES } from "./services-CRJtNVkr.js";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
//#region src/routes/contact.tsx?tsr-split=component
var schema = z.object({
	name: z.string().trim().min(1, "Name is required").max(100),
	phone: z.string().trim().min(7, "Valid phone required").max(30),
	email: z.string().trim().email("Valid email required").max(255).optional().or(z.literal("")),
	service: z.string().min(1, "Select a service"),
	location: z.string().trim().min(1, "Location is required").max(200),
	message: z.string().trim().max(1e3).optional().or(z.literal(""))
});
function ContactPage() {
	const [submitted, setSubmitted] = useState(false);
	const [errors, setErrors] = useState({});
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd.entries());
		const result = schema.safeParse(data);
		if (!result.success) {
			const errs = {};
			for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
			setErrors(errs);
			return;
		}
		setErrors({});
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
			message || "—"
		].join("\n");
		window.location.href = `mailto:arrepairsalberta@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setSubmitted(true);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-[var(--navy)] text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x py-20 md:py-24",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]",
					children: "Contact"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-2 text-4xl md:text-5xl max-w-3xl",
					children: "Need help now? Tell us where you are."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-2xl text-white/80",
					children: "For urgent roadside assistance, call directly. For quotes or scheduled work, send a request and we'll be in touch fast."
				})
			]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-x grid gap-12 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl text-[var(--navy)]",
					children: "Request Service"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Select what you need, tell us where you are, and we'll respond quickly."
				}),
				submitted ? /* @__PURE__ */ jsxs("div", {
					className: "mt-8 rounded-xl border border-[var(--safety)] bg-[var(--safety)]/10 p-6 flex gap-3",
					children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 text-[var(--safety-dark)] shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-bold text-[var(--navy)]",
						children: "Request prepared"
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: [
							"Your email client should open with the request ready to send. For urgent issues, please call ",
							/* @__PURE__ */ jsx("a", {
								href: "tel:+18257604242",
								className: "font-bold text-[var(--navy)]",
								children: "(825) 760-4242"
							}),
							"."
						]
					})] })]
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit,
					className: "mt-8 grid gap-5",
					noValidate: true,
					children: [
						/* @__PURE__ */ jsx(Field, {
							label: "Full Name",
							name: "name",
							error: errors.name
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Phone Number",
								name: "phone",
								type: "tel",
								error: errors.phone
							}), /* @__PURE__ */ jsx(Field, {
								label: "Email (optional)",
								name: "email",
								type: "email",
								error: errors.email
							})]
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "service",
								className: "block text-sm font-semibold text-foreground mb-1.5",
								children: "Service Needed"
							}),
							/* @__PURE__ */ jsxs("select", {
								id: "service",
								name: "service",
								defaultValue: "",
								className: "w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]",
								children: [
									/* @__PURE__ */ jsx("option", {
										value: "",
										disabled: true,
										children: "Select a service…"
									}),
									SERVICES.map((s) => /* @__PURE__ */ jsx("option", {
										value: s.title,
										children: s.title
									}, s.slug)),
									/* @__PURE__ */ jsx("option", {
										value: "Other / Not sure",
										children: "Other / Not sure"
									})
								]
							}),
							errors.service && /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.service
							})
						] }),
						/* @__PURE__ */ jsx(Field, {
							label: "Current Location",
							name: "location",
							placeholder: "e.g. Hwy 2 southbound near Airdrie, or 123 Industrial Way SE Calgary",
							error: errors.location
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "message",
								className: "block text-sm font-semibold text-foreground mb-1.5",
								children: "What's going on? (optional)"
							}),
							/* @__PURE__ */ jsx("textarea", {
								id: "message",
								name: "message",
								rows: 4,
								maxLength: 1e3,
								className: "w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]",
								placeholder: "Symptoms, truck/trailer make and year, anything we should know."
							}),
							errors.message && /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.message
							})
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs("button", {
								type: "submit",
								className: "btn-safety",
								children: [/* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }), " Submit Request"]
							}), /* @__PURE__ */ jsxs("a", {
								href: "tel:+18257604242",
								className: "btn-primary",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Call Instead"]
							})]
						})
					]
				})
			] }), /* @__PURE__ */ jsxs("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl bg-[var(--navy)] text-white p-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-[var(--safety)]",
								children: "Urgent?"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-2 text-2xl font-extrabold",
								children: "Call us directly."
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "tel:+18257604242",
								className: "mt-4 btn-safety w-full",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }), " (825) 760-4242"]
							})
						]
					}),
					/* @__PURE__ */ jsx(InfoCard, {
						icon: Mail,
						title: "Email",
						children: /* @__PURE__ */ jsx("a", {
							href: "mailto:arrepairsalberta@gmail.com",
							className: "hover:text-[var(--safety-dark)] break-all",
							children: "arrepairsalberta@gmail.com"
						})
					}),
					/* @__PURE__ */ jsx(InfoCard, {
						icon: MapPin,
						title: "Service Area",
						children: "Calgary, Airdrie, Okotoks, Cochrane, Chestermere & Surrounding Areas."
					})
				]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", placeholder, error }) {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("label", {
			htmlFor: name,
			className: "block text-sm font-semibold text-foreground mb-1.5",
			children: label
		}),
		/* @__PURE__ */ jsx("input", {
			id: name,
			name,
			type,
			placeholder,
			maxLength: 255,
			className: "w-full rounded-md border border-input bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
		}),
		error && /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
function InfoCard({ icon: Icon, title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 text-[var(--safety-dark)]",
			children: [/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("div", {
				className: "text-xs font-bold uppercase tracking-[0.2em]",
				children: title
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-2 text-sm text-foreground/85",
			children
		})]
	});
}
//#endregion
export { ContactPage as component };
