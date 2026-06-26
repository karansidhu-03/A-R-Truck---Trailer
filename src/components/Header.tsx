import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/ar-logo.png";

const TEL = "+18257604242";
const TEL_DISPLAY = "+1 (825) 760-4242";
const EMAIL = "arrepairsalberta@gmail.com";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-[var(--ink)] text-white/80 text-xs">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-[var(--safety)]" />
              {EMAIL}
            </a>
            <a
              href={`tel:${TEL}`}
              className="btn-primary !flex flex-row items-center justify-center gap-2 !py-2.5 !px-4 text-xs font-extrabold uppercase tracking-wider ml-auto whitespace-nowrap shrink-0"
            >
              <Phone className="h-4 w-4 shrink-0 block" />
              <span className="!block !inline-block visible">
                Call Dispatch
              </span>
            </a>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-md border border-border shrink-0"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <span className="hidden lg:flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[var(--safety)]" />
              Calgary, Alberta
            </span>
          </div>
          <div className="hidden lg:block uppercase tracking-[0.2em] text-[10px] text-white/50">
            24/7 Mobile Dispatch
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white/95 backdrop-blur border-b border-border">
        <div className="container-x flex h-16 md:h-20 items-center justify-between gap-2 sm:gap-4">
          {/* Logo and Branding */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0 shrink"
            aria-label="A&R Truck & Trailer Repairs Ltd. — Home"
          >
            <img
              src={logoAsset}
              alt="A&R Truck & Trailer Repairs Ltd."
              className="h-10 sm:h-12 md:h-16 w-auto shrink-0 object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="flex flex-col min-w-0 leading-tight">
              <span className="font-display font-extrabold uppercase tracking-wide text-[var(--ink)] text-[10px] sm:text-xs md:text-base truncate">
                A&amp;R Truck &amp; Trailer Repairs
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] uppercase text-foreground/60 truncate">
                Mobile Commercial Vehicle Repair
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 mx-auto">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-[var(--safety)]" }}
                inactiveProps={{
                  className: "text-foreground/80 hover:text-[var(--safety)]",
                }}
                className="text-sm font-bold uppercase tracking-wider transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* THE RESPONSIVE BUTTON: Short text on small mobile, full text on larger screens */}
            <a
              href={`tel:${TEL}`}
              className="btn-primary !flex flex-row items-center justify-center gap-1.5 !py-2 !px-3 sm:!py-2.5 sm:!px-4 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap shrink-0"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">Call Dispatch</span>
              </span>
            </a>

            {/* Hamburger Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-md border border-border shrink-0"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="container-x py-3 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-bold uppercase tracking-wider text-foreground/90"
                >
                  {n.label}
                </Link>
              ))}
              <a href={`tel:${TEL}`} className="btn-primary mt-2">
                <Phone className="h-4 w-4" /> {TEL_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
