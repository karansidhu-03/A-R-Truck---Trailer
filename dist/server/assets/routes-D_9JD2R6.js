import { t as SERVICES } from "./services-CRJtNVkr.js";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock, MapPin, Phone, Quote, Send, ShieldCheck, Star, Wrench, Zap } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/hero-truck.jpg
var hero_truck_default = "/assets/hero-truck-CJmuur8c.jpg";
//#endregion
//#region src/assets/mobile-service.jpg
var mobile_service_default = "/assets/mobile-service-BCk0qPX0.jpg";
//#endregion
//#region src/assets/gallery-1.jpg
var gallery_1_default = "/assets/gallery-1-B-GCzJ8d.jpg";
//#endregion
//#region src/assets/gallery-2.jpg
var gallery_2_default = "/assets/gallery-2-DWIJBR1D.jpg";
//#endregion
//#region src/assets/gallery-3.jpg
var gallery_3_default = "/assets/gallery-3-BiR5M_ma.jpg";
//#endregion
//#region src/assets/gallery-4.jpg
var gallery_4_default = "/assets/gallery-4-Cx_jPb26.jpg";
//#endregion
//#region src/components/ServiceCard.tsx
function ServiceCard({ icon: Icon, title, description }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative overflow-hidden rounded-xl bg-card border border-border p-7 transition-all hover:border-[var(--safety)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(220,38,38,0.45)]",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "grid h-12 w-12 place-items-center rounded-lg bg-[var(--safety)]/10 text-[var(--safety)] mb-5 transition-colors group-hover:bg-[var(--safety)] group-hover:text-white",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "text-lg font-extrabold uppercase tracking-wide text-[var(--ink)] mb-2",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground leading-relaxed",
				children: description
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-1 w-16 bg-[var(--safety)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" })
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative isolate overflow-hidden bg-[var(--ink)]",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: hero_truck_default,
					alt: "Heavy-duty semi truck on the highway being serviced by a mobile mechanic",
					width: 1920,
					height: 1080,
					className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-[var(--ink)]/30" }),
				/* @__PURE__ */ jsxs("div", {
					className: "container-x py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start text-white",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-3 mb-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[var(--safety)]",
									children: "★★★★★"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-white/80",
									children: "5.0 Local Rating"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--safety)]/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--safety)]",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--safety)] animate-pulse" }), "24/7 Mobile Dispatch"]
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "font-display font-extrabold uppercase leading-[0.95] text-[2.6rem] sm:text-6xl lg:text-7xl tracking-tight",
							children: ["Calgary & Airdrie", /* @__PURE__ */ jsx("span", {
								className: "block text-[var(--safety)] mt-2",
								children: "Mobile Truck Repair"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed",
							children: "Need emergency roadside assistance? Our heavy-duty mobile diesel mechanics are on standby 24/7/365 to get your commercial truck, trailer, or fleet back on the road."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "tel:+18257604242",
								className: "btn-primary",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Call Dispatch: (825) 760-4242"]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/services",
								className: "btn-outline",
								children: "Explore Services"
							})]
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-sm p-6 md:p-7 shadow-2xl",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--safety)] to-transparent" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-10 w-10 place-items-center rounded-md bg-[var(--safety)]/15 text-[var(--safety)]",
									children: /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-display font-extrabold text-lg uppercase tracking-wide",
									children: "Request Service"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-white/60",
									children: "24/7 dispatch — fast response."
								})] })]
							}),
							/* @__PURE__ */ jsxs("form", {
								action: "mailto:arrepairsalberta@gmail.com",
								method: "post",
								encType: "text/plain",
								className: "mt-5 space-y-3",
								children: [
									/* @__PURE__ */ jsx("input", {
										name: "name",
										required: true,
										placeholder: "Full Name",
										className: "w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
									}),
									/* @__PURE__ */ jsx("input", {
										name: "phone",
										required: true,
										type: "tel",
										placeholder: "(403) 000-0000",
										className: "w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
									}),
									/* @__PURE__ */ jsx("input", {
										name: "email",
										type: "email",
										placeholder: "Email Address",
										className: "w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
									}),
									/* @__PURE__ */ jsxs("select", {
										name: "service",
										required: true,
										defaultValue: "",
										className: "w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 focus:outline-none focus:border-[var(--safety)]",
										children: [/* @__PURE__ */ jsx("option", {
											value: "",
											disabled: true,
											className: "bg-[var(--ink)]",
											children: "Service Needed…"
										}), SERVICES.map((s) => /* @__PURE__ */ jsx("option", {
											value: s.title,
											className: "bg-[var(--ink)]",
											children: s.title
										}, s.slug))]
									}),
									/* @__PURE__ */ jsx("textarea", {
										name: "message",
										rows: 3,
										placeholder: "How can we help?",
										className: "w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--safety)]"
									}),
									/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "btn-primary w-full !py-3.5",
										children: [/* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }), " Send Request"]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "container-x pb-14 md:pb-20 -mt-2 md:-mt-4",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
						children: [
							{
								icon: Clock,
								title: "24/7 Roadside Units",
								text: "Fully loaded mobile mechanics for tire changes, air line repairs, and diagnostics."
							},
							{
								icon: Wrench,
								title: "Red Seal Experts",
								text: "Heavy-duty diesel specialists equipped with diagnostic tools to resolve engine codes."
							},
							{
								icon: BadgeCheck,
								title: "CVIP Accredited",
								text: "Alberta licensed Commercial Vehicle Inspection Programs for full compliance."
							}
						].map(({ icon: Icon, title, text }) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl bg-white text-[var(--ink)] p-6 shadow-xl ring-1 ring-black/5",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid h-11 w-11 place-items-center rounded-md bg-[var(--safety)]/10 text-[var(--safety)] mb-4",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ jsx("div", {
									className: "font-display font-extrabold uppercase tracking-wide text-base",
									children: title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: text
								})
							]
						}, title))
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			id: "services",
			className: "py-20 md:py-28 bg-[var(--surface)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "eyebrow",
								children: "Core Services"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-3 text-3xl md:text-5xl uppercase text-[var(--ink)] font-extrabold leading-tight",
								children: [
									"Heavy-Duty",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-[var(--safety)]",
										children: "Mechanical Repair"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "Professional fleet inspections, diesel tuning, mechanical overhauls, and trailer body maintenance executed by on-site technicians across Calgary & Area."
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map((s) => /* @__PURE__ */ jsx(ServiceCard, {
							icon: s.icon,
							title: s.title,
							description: s.description
						}, s.slug))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm text-[var(--safety)] hover:text-[var(--safety-dark)]",
							children: ["View full service details ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 md:py-28 bg-[var(--ink)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x grid gap-12 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative order-2 lg:order-1",
					children: [/* @__PURE__ */ jsx("img", {
						src: mobile_service_default,
						alt: "A&R mobile service truck assisting a commercial vehicle on the highway",
						width: 1600,
						height: 1e3,
						loading: "lazy",
						className: "rounded-xl shadow-2xl w-full h-auto object-cover ring-1 ring-white/10"
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden md:block absolute -bottom-6 -right-6 bg-[var(--safety)] text-white rounded-xl p-5 shadow-xl max-w-xs",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-4xl font-extrabold leading-none",
							children: "24/7"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 text-sm font-semibold uppercase tracking-wider",
							children: "Roadside dispatch · Calgary & Area"
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "eyebrow",
							children: "Why A&R"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-3 text-3xl md:text-5xl uppercase font-extrabold leading-tight",
							children: [
								"A tow and a wait costs more than a",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--safety)]",
									children: "repair"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-white/75 leading-relaxed",
							children: "Our mobile units are equipped to handle the majority of mechanical repairs right where your truck sits. No tow bills, no shop queues, and your driver back on the road in hours — not days."
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-7 space-y-3.5",
							children: [
								"Direct line to a working mechanic — not a dispatcher.",
								"Honest diagnostics, clear quotes before we turn a wrench.",
								"Compliant CVIP work that keeps you legally on the road."
							].map((t) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-[var(--safety)] shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "text-white/85",
									children: t
								})]
							}, t))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "tel:+18257604242",
								className: "btn-primary",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Speak to a Mechanic"]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/about",
								className: "btn-outline",
								children: "About Us"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16 md:py-20 bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "eyebrow justify-center",
						children: "Service Areas"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 text-2xl md:text-4xl uppercase font-extrabold text-[var(--ink)]",
						children: "Proudly serving Calgary & surrounding region"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold",
						children: [
							"Calgary",
							"Airdrie",
							"Okotoks",
							"Cochrane",
							"Chestermere",
							"Surrounding Areas"
						].map((c) => /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--surface)] border border-border px-4 py-2 text-[var(--ink)]",
							children: [
								/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-[var(--safety)]" }),
								" ",
								c
							]
						}, c))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			id: "gallery",
			className: "py-20 md:py-28 bg-[var(--surface)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "eyebrow",
							children: "Our Work"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-3 text-3xl md:text-5xl uppercase text-[var(--ink)] font-extrabold leading-tight",
							children: [
								"On the road,",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--safety)]",
									children: "in the field"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: "A snaps of recent jobs — engine diagnostics, CVIP inspections, brake work, and roadside tire changes across the Calgary region."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							src: gallery_1_default,
							alt: "Mechanic working on a semi-truck engine bay at night"
						},
						{
							src: gallery_2_default,
							alt: "Mobile service truck assisting a commercial trailer at sunset"
						},
						{
							src: gallery_3_default,
							alt: "CVIP commercial vehicle inspection underneath a heavy duty truck"
						},
						{
							src: gallery_4_default,
							alt: "Heavy duty truck tire being changed roadside"
						}
					].map((img) => /* @__PURE__ */ jsxs("div", {
						className: "group relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow-md aspect-[4/3]",
						children: [/* @__PURE__ */ jsx("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							width: 1280,
							height: 896,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })]
					}, img.alt))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 md:py-28 bg-[var(--ink)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("div", {
						className: "eyebrow",
						children: "Coverage Map"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-3 text-3xl md:text-5xl uppercase font-extrabold leading-tight",
						children: [
							"Based in ",
							/* @__PURE__ */ jsx("span", {
								className: "text-[var(--safety)]",
								children: "Calgary"
							}),
							", dispatching region-wide"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-white/75 leading-relaxed",
						children: "From downtown Calgary out to Airdrie, Okotoks, Cochrane, and Chestermere — wherever your truck goes down, we'll roll a truck to you."
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-2.5 text-sm",
						children: [
							"Calgary",
							"Airdrie",
							"Okotoks",
							"Cochrane",
							"Chestermere"
						].map((c) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-[var(--safety)]" }), /* @__PURE__ */ jsxs("span", {
								className: "text-white/85",
								children: [c, " & surrounding areas"]
							})]
						}, c))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "tel:+18257604242",
							className: "btn-primary",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " Call Dispatch"]
						}), /* @__PURE__ */ jsx("a", {
							href: "https://www.google.com/maps/place/Calgary,+AB",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-outline",
							children: "Open in Maps"
						})]
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "A&R Truck & Trailer Repairs service area — Calgary, Alberta",
						src: "https://www.google.com/maps?q=Calgary,+Alberta,+Canada&z=9&output=embed",
						width: "100%",
						height: "460",
						style: { border: 0 },
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						allowFullScreen: true
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 md:py-28 bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mx-auto text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "eyebrow justify-center",
							children: "Testimonials"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-3 text-3xl md:text-5xl uppercase text-[var(--ink)] font-extrabold leading-tight",
							children: [
								"Trusted by",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[var(--safety)]",
									children: "drivers & fleets"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-muted-foreground",
							children: "Real feedback from owner-operators and fleet managers we've helped across Calgary & Area."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						{
							quote: "Blew an air line on the QE2 north of Airdrie at 2 AM. A&R rolled out within the hour, fixed it on the shoulder, and I made my delivery on time. Lifesavers.",
							name: "Dave M.",
							role: "Owner-Operator"
						},
						{
							quote: "We run a small fleet out of Calgary and A&R handles all our CVIPs and roadside calls. Honest pricing, clear communication, and the work is always done right.",
							name: "Sarah K.",
							role: "Fleet Manager"
						},
						{
							quote: "Brake chamber failed on my reefer in Okotoks. They diagnosed it, had the part, and had me rolling in under three hours. No tow, no shop wait. Highly recommend.",
							name: "Jason R.",
							role: "Long-Haul Driver"
						}
					].map((t) => /* @__PURE__ */ jsxs("figure", {
						className: "relative rounded-xl bg-[var(--surface)] border border-border p-7 flex flex-col",
						children: [
							/* @__PURE__ */ jsx(Quote, { className: "absolute top-5 right-5 h-8 w-8 text-[var(--safety)]/20" }),
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-1 text-[var(--safety)] mb-4",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ jsxs("blockquote", {
								className: "text-sm md:text-base text-foreground/85 leading-relaxed flex-1",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("figcaption", {
								className: "mt-6 pt-5 border-t border-border",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-display font-extrabold uppercase tracking-wide text-sm text-[var(--ink)]",
									children: t.name
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: t.role
								})]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--safety)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-12 grid gap-6 md:grid-cols-[1fr_auto] items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl md:text-3xl uppercase font-extrabold",
					children: "Down on the side of the highway right now?"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-white/90",
					children: "We'll head your way and get you moving again — safely."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "tel:+18257604242",
						className: "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[var(--ink)] text-white font-extrabold uppercase tracking-wider text-sm hover:bg-black transition-colors",
						children: [/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }), " Call (825) 760-4242"]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-white text-[var(--ink)] font-extrabold uppercase tracking-wider text-sm hover:bg-white/90 transition-colors",
						children: "Request Help"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
