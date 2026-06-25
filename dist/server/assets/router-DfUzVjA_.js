import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/assets/ar-logo.png
var ar_logo_default = "/assets/ar-logo-CfIN0Dhg.png";
//#endregion
//#region src/components/Header.tsx
var TEL = "+18257604242";
var TEL_DISPLAY = "+1 (825) 760-4242";
var EMAIL = "arrepairsalberta@gmail.com";
function Header() {
	const [open, setOpen] = useState(false);
	const nav = [
		{
			to: "/",
			label: "Home"
		},
		{
			to: "/services",
			label: "Services"
		},
		{
			to: "/about",
			label: "About"
		},
		{
			to: "/contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ jsx("div", {
			className: "hidden md:block bg-[var(--ink)] text-white/80 text-xs",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x flex h-10 items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-6",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: `mailto:${EMAIL}`,
							className: "flex items-center gap-2 hover:text-white",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-[var(--safety)]" }), EMAIL]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `tel:${TEL}`,
							className: "flex items-center gap-2 hover:text-white",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-[var(--safety)]" }), TEL_DISPLAY]
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "hidden lg:flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-[var(--safety)]" }), "Calgary, Alberta"]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "hidden lg:block uppercase tracking-[0.2em] text-[10px] text-white/50",
					children: "24/7 Mobile Dispatch"
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "bg-white/95 backdrop-blur border-b border-border",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "container-x flex h-16 md:h-20 items-center gap-4",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-3 min-w-0",
						"aria-label": "A&R Truck & Trailer Repairs Ltd. — Home",
						children: [/* @__PURE__ */ jsx("img", {
							src: ar_logo_default,
							alt: "A&R Truck & Trailer Repairs Ltd.",
							className: "h-12 md:h-16 w-auto shrink-0 object-contain",
							loading: "eager",
							decoding: "async"
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex flex-col min-w-0 leading-tight",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display font-extrabold uppercase tracking-wide text-[var(--ink)] text-xs sm:text-sm md:text-base truncate",
								children: "A&R Truck & Trailer Repairs"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/60 truncate",
								children: "Mobile Commercial Vehicle Repair"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden lg:flex items-center gap-8 mx-auto",
						children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
							to: n.to,
							activeOptions: { exact: true },
							activeProps: { className: "text-[var(--safety)]" },
							inactiveProps: { className: "text-foreground/80 hover:text-[var(--safety)]" },
							className: "text-sm font-bold uppercase tracking-wider transition-colors",
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ jsxs("a", {
						href: `tel:${TEL}`,
						className: "btn-primary hidden md:inline-flex !py-3 !px-5 text-xs",
						children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), "Call Dispatch"]
					}),
					/* @__PURE__ */ jsx("a", {
						href: `tel:${TEL}`,
						className: "md:hidden grid place-items-center h-10 w-10 rounded-md bg-[var(--safety)] text-white",
						"aria-label": "Call now",
						children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setOpen((v) => !v),
						className: "lg:hidden grid place-items-center h-10 w-10 rounded-md border border-border",
						"aria-label": "Menu",
						children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
					})
				]
			}), open && /* @__PURE__ */ jsx("div", {
				className: "lg:hidden border-t border-border bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container-x py-3 flex flex-col",
					children: [nav.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "py-3 text-base font-bold uppercase tracking-wider text-foreground/90",
						children: n.label
					}, n.to)), /* @__PURE__ */ jsxs("a", {
						href: `tel:${TEL}`,
						className: "btn-primary mt-2",
						children: [
							/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
							" ",
							TEL_DISPLAY
						]
					})]
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-[var(--navy-dark)] text-white/90 mt-0",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-x py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "rounded-lg bg-white/5 p-3 ring-1 ring-white/10",
							children: /* @__PURE__ */ jsx("img", {
								src: ar_logo_default,
								alt: "A&R Truck & Trailer Repairs Ltd.",
								className: "h-16 w-auto object-contain",
								loading: "lazy",
								decoding: "async"
							})
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-display font-extrabold uppercase tracking-wide text-white",
							children: "A&R Truck & Trailer Repairs"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[11px] text-white/60 tracking-[0.2em] uppercase",
							children: "Mobile Commercial Vehicle Repair"
						})] })]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-md text-sm text-white/70 leading-relaxed",
						children: "We bring the shop to wherever your truck is parked — yard, job site, or the shoulder of the highway. Get your rig back to work faster."
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-display font-bold text-white mb-3",
					children: "Quick Links"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "text-white/70 hover:text-[var(--safety)]",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "text-white/70 hover:text-[var(--safety)]",
							children: "Services"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "text-white/70 hover:text-[var(--safety)]",
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "text-white/70 hover:text-[var(--safety)]",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-display font-bold text-white mb-3",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 text-[var(--safety)] shrink-0" }), /* @__PURE__ */ jsx("a", {
								href: "tel:+18257604242",
								className: "hover:text-[var(--safety)]",
								children: "(825) 760-4242"
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 text-[var(--safety)] shrink-0" }), /* @__PURE__ */ jsx("a", {
								href: "mailto:arrepairsalberta@gmail.com",
								className: "hover:text-[var(--safety)] break-all",
								children: "arrepairsalberta@gmail.com"
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-[var(--safety)] shrink-0" }), /* @__PURE__ */ jsxs("span", {
								className: "text-white/70",
								children: [
									"Calgary, Airdrie, Okotoks,",
									/* @__PURE__ */ jsx("br", {}),
									"Cochrane, Chestermere & Area"
								]
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/50",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" A&R Truck & Trailer Repairs Ltd. All rights reserved."
				] }), /* @__PURE__ */ jsx("div", { children: "Proudly serving Calgary & Area · Available for dispatch" })]
			})
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-extrabold text-[var(--navy)]",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-bold",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "btn-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-bold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "btn-outline",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "A&R Truck & Trailer Repairs Ltd. | Mobile Repair Calgary" },
			{
				name: "description",
				content: "On-site mobile truck and trailer repair serving Calgary, Airdrie, Okotoks, Cochrane, and Chestermere. Roadside assistance, CVIP inspections, diagnostics, brakes and suspension."
			},
			{
				name: "author",
				content: "A&R Truck & Trailer Repairs Ltd."
			},
			{
				property: "og:title",
				content: "A&R Truck & Trailer Repairs Ltd."
			},
			{
				property: "og:description",
				content: "On-site mobile truck and trailer repair serving Calgary & Area."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.8"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$3 = () => import("./services-DEK1N5LU.js");
var Route$3 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services | A&R Truck & Trailer Repairs Ltd." },
		{
			name: "description",
			content: "Mobile truck repair, trailer repair, CVIP inspections, diagnostics, roadside assistance, and brake and suspension repair across Calgary & Area."
		},
		{
			property: "og:title",
			content: "Mobile Truck & Trailer Repair Services"
		},
		{
			property: "og:description",
			content: "Six core services that keep commercial fleets moving across Calgary & Area."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-Dt6rMxRx.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | A&R Truck & Trailer Repairs Ltd." },
		{
			name: "description",
			content: "Request roadside assistance or a callback. Call (825) 760-4242 or send a message. Serving Calgary, Airdrie, Okotoks, Cochrane, Chestermere."
		},
		{
			property: "og:title",
			content: "Contact A&R Truck & Trailer Repairs"
		},
		{
			property: "og:description",
			content: "Request on-site repair or roadside assistance across Calgary & Area."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-CDJCkJqb.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About | A&R Truck & Trailer Repairs Ltd." },
		{
			name: "description",
			content: "A&R Truck & Trailer Repairs Ltd. is a mobile commercial vehicle repair company serving Calgary, Airdrie, Okotoks, Cochrane, Chestermere, and surrounding areas."
		},
		{
			property: "og:title",
			content: "About A&R Truck & Trailer Repairs Ltd."
		},
		{
			property: "og:description",
			content: "Mobile commercial vehicle repair built around uptime, honesty, and on-site service."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-D_9JD2R6.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "A&R Truck & Trailer Repairs | Mobile Repair Calgary & Airdrie" },
		{
			name: "description",
			content: "24/7 mobile commercial truck & trailer repair serving Calgary, Airdrie, Okotoks, Cochrane & Chestermere. Roadside assistance, CVIP inspections, diagnostics & brakes."
		},
		{
			property: "og:title",
			content: "A&R Truck & Trailer Repairs Ltd."
		},
		{
			property: "og:description",
			content: "We bring the shop to you. Yard, job site, or shoulder of the highway."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$5
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	ContactRoute,
	ServicesRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
